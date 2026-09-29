/* Stockfish (WASM, in a Web Worker) behind a small analysis API. */
(function () {
  const ENGINE_URL = 'vendor/stockfish/stockfish-18-lite-single.js';
  const BUNDLE_URL = 'vendor/stockfish/stockfish-bundle.js';

  // Served over http(s), the worker loads the engine and its .wasm file directly. Opened as a
  // file:// page, the browser forbids that, so the engine comes from a script that holds both
  // (the .wasm as base64) and the worker is started from memory, with fetch() answering the
  // engine's request for its .wasm file.
  function createWorker() {
    if (location.protocol !== 'file:') {
      try {
        return Promise.resolve(new Worker(ENGINE_URL));
      } catch (e) { /* fall back to the bundle */ }
    }
    return loadBundle().then((b) => {
      const prelude = `(function () {
        const bin = atob(self.STOCKFISH_WASM);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        delete self.STOCKFISH_WASM;
        self.fetch = () => Promise.resolve(new Response(bytes, { headers: { 'Content-Type': 'application/wasm' } }));
      })();\n`;
      const blob = new Blob(['self.STOCKFISH_WASM = "', b.wasm, '";\n', prelude, b.js], { type: 'text/javascript' });
      const url = URL.createObjectURL(blob);
      try {
        return new Worker(url);
      } catch (e) {
        throw new Error('This browser won\'t start the engine from a file. Try Chrome, Edge or Firefox, or run the start file included with the app.');
      } finally {
        setTimeout(() => URL.revokeObjectURL(url), 10000);
      }
    });
  }

  let bundlePromise = null;
  function loadBundle() {
    if (!bundlePromise) {
      bundlePromise = new Promise((resolve, reject) => {
        if (window.STOCKFISH_BUNDLE) { resolve(window.STOCKFISH_BUNDLE); return; }
        const s = document.createElement('script');
        s.src = BUNDLE_URL;
        s.onload = () => (window.STOCKFISH_BUNDLE ? resolve(window.STOCKFISH_BUNDLE) : reject(new Error('The engine file is damaged.')));
        s.onerror = () => { bundlePromise = null; reject(new Error('Couldn\'t find the engine file (vendor/stockfish/stockfish-bundle.js).')); };
        document.head.appendChild(s);
      });
    }
    return bundlePromise;
  }

  class Engine {
    constructor() {
      this.worker = null;
      this.ready = false;
      this.failed = null;
      this.searching = false;
      this.pending = null; // { fen, opts, onInfo, onDone } waiting for the current search to stop
      this.job = null;
      this.lines = [];
      this.readyWaiters = [];
    }

    start() {
      if (this.worker || this.starting || this.failed) return;
      this.starting = createWorker().then((w) => {
        this.starting = null;
        if (this.terminated) { w.terminate(); return; }
        this.worker = w;
        w.onmessage = (e) => this._line(String(e.data));
        w.onerror = () => this._fail('The engine failed to load. Try Chrome, Edge or Firefox.');
        this.send('uci');
      }, (err) => {
        this.starting = null;
        this._fail(err.message || 'The engine failed to load.');
      });
    }

    _fail(msg) {
      this.failed = msg;
      this.readyWaiters.forEach((f) => f(false));
      this.readyWaiters = [];
    }

    send(cmd) {
      if (this.worker) this.worker.postMessage(cmd);
    }

    whenReady() {
      this.start();
      if (this.ready) return Promise.resolve(true);
      if (this.failed) return Promise.resolve(false);
      return new Promise((res) => this.readyWaiters.push(res));
    }

    /**
     * Analyse a position. onInfo(lines) is called as the search deepens, onDone(lines) at the end.
     * lines: [{ multipv, depth, cp?, mate?, pv: [uci…] }] from the side to move's point of view.
     */
    analyze(fen, opts, onInfo, onDone) {
      const job = { fen, opts: Object.assign({ multipv: 3, movetime: 2000 }, opts), onInfo, onDone };
      if (this.searching) {
        this.pending = job;
        this.send('stop');
        return;
      }
      this._go(job);
    }

    stop() {
      this.pending = null;
      if (this.searching) this.send('stop');
      this.job = null;
    }

    terminate() {
      this.terminated = true;
      if (this.worker) this.worker.terminate();
      this.worker = null;
      this.ready = false;
      this.searching = false;
    }

    async _go(job) {
      if (!(await this.whenReady())) return;
      if (this.searching) { this.pending = job; this.send('stop'); return; }
      this.job = job;
      this.lines = [];
      this.searching = true;
      this.send(`setoption name MultiPV value ${job.opts.multipv}`);
      this.send(`position fen ${job.fen}`);
      this.send(job.opts.depth ? `go depth ${job.opts.depth}` : `go movetime ${job.opts.movetime}`);
    }

    _line(line) {
      if (line === 'uciok') {
        this.send('isready');
        return;
      }
      if (line === 'readyok' && !this.ready) {
        this.ready = true;
        this.readyWaiters.forEach((f) => f(true));
        this.readyWaiters = [];
        return;
      }
      if (line.startsWith('info ') && line.includes(' pv ') && this.job) {
        const info = parseInfo(line);
        if (!info) return;
        this.lines[info.multipv - 1] = info;
        const lines = this.lines.filter(Boolean);
        if (this.job.onInfo) this.job.onInfo(lines);
        return;
      }
      if (line.startsWith('bestmove')) {
        this.searching = false;
        const job = this.job;
        this.job = null;
        if (this.pending) {
          const next = this.pending;
          this.pending = null;
          this._go(next);
        } else if (job && job.onDone) {
          job.onDone(this.lines.filter(Boolean));
        }
      }
    }
  }

  function parseInfo(line) {
    const t = line.split(' ');
    const out = { multipv: 1, depth: 0, pv: [] };
    for (let i = 1; i < t.length; i++) {
      switch (t[i]) {
        case 'depth': out.depth = +t[++i]; break;
        case 'multipv': out.multipv = +t[++i]; break;
        case 'score':
          if (t[i + 1] === 'cp') out.cp = +t[i + 2];
          else if (t[i + 1] === 'mate') out.mate = +t[i + 2];
          i += 2;
          if (t[i + 1] === 'lowerbound' || t[i + 1] === 'upperbound') return null;
          break;
        case 'pv': out.pv = t.slice(i + 1); i = t.length; break;
        default: break;
      }
    }
    return out.pv.length ? out : null;
  }

  window.Engine = Engine;
})();
