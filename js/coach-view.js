/* Screen Coach view: watch a chess game on screen and show the best moves and opening help. */
(function () {
  const SETTINGS_KEY = 'openingTrainer.coach';
  const CAL_KEY = 'openingTrainer.coach.cal';
  const TICK_MS = 350;
  const NAMES = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };
  const ARROWS = ['green', 'blue', 'yellow'];

  function loadJson(key, fallback) {
    try {
      const v = JSON.parse(localStorage.getItem(key));
      return v == null ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }

  function saveJson(key, v) {
    try {
      if (v == null) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(v));
    } catch (e) { /* storage blocked: settings just won't persist */ }
  }

  // A timer that keeps ticking while the tab is in the background (worker timers aren't throttled).
  function startTicker(fn, ms) {
    try {
      const src = `setInterval(() => postMessage(0), ${ms});`;
      const w = new Worker(URL.createObjectURL(new Blob([src], { type: 'text/javascript' })));
      w.onmessage = fn;
      return () => w.terminate();
    } catch (e) {
      const id = setInterval(fn, ms);
      return () => clearInterval(id);
    }
  }

  /**
   * Mount the coach into `app`. ctx: { esc, toast, reps() }. Returns a cleanup function.
   */
  function mount(app, ctx) {
    const { esc, toast } = ctx;
    const settings = Object.assign({ think: 2000, help: 'full', speak: false }, loadJson(SETTINGS_KEY, {}));
    let cal = loadJson(CAL_KEY, null);
    if (cal && cal.v !== 1) cal = null;
    let orientation = cal ? cal.orientation : 'w';
    let rect = null, manualRect = false;
    let stream = null, video = null, stopTicker = null;
    let lastFind = 0, badReads = 0;
    let pending = null, pendingCount = 0, accepted = null;
    let analysis = { fen: null, lines: [], done: false };
    let spokenFor = null, revealed = false;
    let renderTimer = null;
    let pip = null;
    const tracker = new Coach.Tracker();
    const engine = new Engine();
    const frame = document.createElement('canvas');
    const fctx = frame.getContext('2d', { willReadFrequently: true });

    app.innerHTML = `
      <section class="coach">
        <div class="coach-head">
          <div>
            <h1>Screen Coach</h1>
            <p class="muted">Share the window where you play. The coach reads the board, finds the best moves with Stockfish, and shows opening names and your repertoire moves.</p>
          </div>
          <div class="row wrap">
            <button class="btn primary" id="watch">Start watching</button>
            <label class="btn file">Open screenshot…<input type="file" id="shot" accept="image/*" hidden></label>
            <button class="btn" id="pop" hidden title="Keep a small always-on-top coach window next to your game">Pop out</button>
          </div>
        </div>
        <p class="warn fair">Engine help during rated games against people breaks the fair-play rules of Chess.com, Lichess and every other site, and gets accounts closed. Use the coach against bots, in unrated friendly games where both players agree, on analysis boards, and to review finished games.</p>
        <div class="split coach-split">
          <div class="board-col">
            <div class="status info" id="status">Press <b>Start watching</b> and pick the browser tab or window with your chess game. You can also open or paste (Ctrl+V) a screenshot.</div>
            <div class="evalwrap">
              <div class="evalbar" id="evalbar" title="Evaluation"><div class="evalfill" id="evalfill"></div><span id="evaltext"></span></div>
              <div id="board"></div>
            </div>
            <div class="row wrap nav-row">
              <button class="btn" id="flip" title="Use this if White and Black are the wrong way round">⇅ Flip</button>
              <button class="btn" id="turn" title="Use this if the coach thinks it's the wrong side's move">Switch side to move</button>
              <button class="btn" id="refind" title="Find the board on the screen again">Find board again</button>
              <button class="btn" id="recal" title="Learn the piece set again from a starting position">Re-learn pieces</button>
            </div>
            <div class="pathline" id="moves"></div>
          </div>
          <aside class="coach-side">
            <div class="panel" id="best-card">
              <div class="best-head">
                <h3 id="best-title">Best move</h3>
                <span class="muted small" id="depth"></span>
              </div>
              <div id="best"><p class="muted">Waiting for a position…</p></div>
            </div>
            <div class="panel">
              <h3>Engine lines</h3>
              <ol class="lines" id="lines"></ol>
            </div>
            <div class="panel">
              <h3>Opening</h3>
              <div id="opening"><p class="muted small">Opening names and your repertoire moves appear here.</p></div>
            </div>
            <div class="panel">
              <h3>Settings</h3>
              <label class="field">Think time
                <select id="think">
                  <option value="1000">1 second (fast)</option>
                  <option value="2000">2 seconds</option>
                  <option value="5000">5 seconds</option>
                  <option value="10000">10 seconds (strongest)</option>
                </select>
              </label>
              <label class="field">Show
                <select id="help">
                  <option value="full">Best move, arrows and ideas</option>
                  <option value="hint">Just a hint (which piece to move)</option>
                </select>
              </label>
              <label class="check"><input type="checkbox" id="speak"> Say my best move out loud</label>
            </div>
            <div class="panel">
              <h3>Screen</h3>
              <canvas id="preview" class="preview" width="320" height="180" title="Drag a box around the board if it isn't found automatically"></canvas>
              <p class="muted small">The green box is where the coach sees the board. If it's wrong, drag a box around the board here.</p>
            </div>
          </aside>
        </div>
      </section>`;

    const $ = (s) => app.querySelector(s);
    const board = new Board($('#board'), { getChess: () => tracker.game || new Chess(), canMove: () => false, onMove: () => {} });
    board.setOrientation(orientation);

    $('#think').value = String(settings.think);
    $('#help').value = settings.help;
    $('#speak').checked = settings.speak;
    const saveSettings = () => saveJson(SETTINGS_KEY, settings);
    $('#think').onchange = (e) => { settings.think = +e.target.value; saveSettings(); analyse(); };
    $('#help').onchange = (e) => { settings.help = e.target.value; saveSettings(); revealed = false; renderAnalysis(); };
    $('#speak').onchange = (e) => {
      settings.speak = e.target.checked;
      saveSettings();
      if (settings.speak && !('speechSynthesis' in window)) toast('This browser can\'t speak.');
    };

    function status(html, kind = 'info') {
      const el = $('#status');
      el.className = 'status ' + kind;
      el.innerHTML = html;
    }

    /* ---------- screen capture ---------- */

    async function startWatching() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
        status('This browser can\'t share the screen here. Use Chrome, Edge or Firefox on a computer, served over http(s) — or use <b>Open screenshot</b>.', 'bad');
        return;
      }
      try {
        stream = await navigator.mediaDevices.getDisplayMedia({ video: { frameRate: 5 }, audio: false });
      } catch (e) {
        status(e && e.name === 'NotAllowedError' ? 'Screen sharing was cancelled.' : 'Couldn\'t share the screen: ' + esc(e.message || e), 'bad');
        return;
      }
      video = document.createElement('video');
      video.muted = true;
      video.playsInline = true;
      video.srcObject = stream;
      video.play().catch(() => {});
      stream.getVideoTracks()[0].addEventListener('ended', stopWatching);
      rect = manualRect ? rect : null;
      pending = accepted = null;
      stopTicker = startTicker(tick, TICK_MS);
      engine.start();
      $('#watch').textContent = 'Stop watching';
      status('Looking for a chessboard on the shared screen…');
    }

    function stopWatching() {
      if (stopTicker) stopTicker();
      stopTicker = null;
      if (stream) stream.getTracks().forEach((t) => t.stop());
      stream = null;
      video = null;
      if (!$('#watch')) return;
      $('#watch').textContent = 'Start watching';
      status('Stopped watching.');
    }

    $('#watch').onclick = () => (stream ? stopWatching() : startWatching());

    function tick() {
      if (!video || !video.videoWidth) return;
      const W = video.videoWidth, H = video.videoHeight;
      if (frame.width !== W || frame.height !== H) {
        frame.width = W;
        frame.height = H;
        if (!manualRect) rect = null;
      }
      fctx.drawImage(video, 0, 0, W, H);
      handleFrame(false);
    }

    /* ---------- screenshots ---------- */

    function loadImage(blob) {
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        if (stream) stopWatching();
        frame.width = img.naturalWidth;
        frame.height = img.naturalHeight;
        fctx.drawImage(img, 0, 0);
        if (!manualRect) rect = null;
        lastFind = 0;
        accepted = null;
        engine.start();
        handleFrame(true);
      };
      img.onerror = () => { URL.revokeObjectURL(url); toast('Couldn\'t open that image.'); };
      img.src = url;
    }

    $('#shot').onchange = (e) => {
      const f = e.target.files[0];
      if (f) loadImage(f);
      e.target.value = '';
    };
    const onPaste = (e) => {
      const item = [...(e.clipboardData ? e.clipboardData.items : [])].find((i) => i.type.startsWith('image/'));
      if (item) { e.preventDefault(); loadImage(item.getAsFile()); }
    };
    document.addEventListener('paste', onPaste);

    /* ---------- reading the board ---------- */

    function handleFrame(once) {
      const W = frame.width, H = frame.height;
      const now = performance.now();
      if (!rect) {
        if (!once && now - lastFind < 1200) { drawPreview(); return; }
        lastFind = now;
        rect = Vision.findBoard(fctx.getImageData(0, 0, W, H));
        drawPreview();
        if (!rect) {
          status('Looking for a chessboard… Make sure the whole board is visible in the shared window, or drag a box around it in <b>Screen</b>.', once ? 'bad' : 'info');
          return;
        }
      } else {
        drawPreview();
      }

      const rx = Math.max(0, Math.floor(rect.x) - 2), ry = Math.max(0, Math.floor(rect.y) - 2);
      const rw = Math.min(W - rx, Math.ceil(rect.size) + 5), rh = Math.min(H - ry, Math.ceil(rect.size) + 5);
      if (rw < 32 || rh < 32) { rect = null; return; }
      const img = fctx.getImageData(rx, ry, rw, rh);
      const r = { x: rect.x - rx, y: rect.y - ry, size: rect.size };

      if (!cal) {
        const c = Vision.calibrate(img, r);
        if (!c.ok) {
          status('<b>One-time setup:</b> show the <b>starting position</b> (start a new game, or open an analysis board) so the coach can learn this piece set.', 'info');
          return;
        }
        cal = c.cal;
        orientation = cal.orientation;
        board.setOrientation(orientation);
        saveJson(CAL_KEY, cal);
        toast('Learned the piece set.');
      }

      let res = Vision.read(img, r, cal, orientation);
      if (res.valid && shouldFlip(res)) {
        orientation = orientation === 'w' ? 'b' : 'w';
        board.setOrientation(orientation);
        res = Vision.read(img, r, cal, orientation);
        accepted = null; // same position, but "your move" and the opening hints change sides
      }
      if (!res.valid) {
        if (++badReads > 12 && !manualRect) { rect = null; badReads = 0; }
        if (once || !tracker.game) status(`Can't read the board clearly (${esc(res.reason)}). If a piece is being dragged, let go; otherwise try <b>Find board again</b> or <b>Re-learn pieces</b>.`, 'bad');
        return;
      }
      badReads = 0;

      if (!once) {
        if (res.placement !== pending) { pending = res.placement; pendingCount = 1; return; }
        if (++pendingCount < 2) return;
      }
      if (res.placement === accepted) return;
      accepted = res.placement;
      const kind = tracker.update(res.placement, orientation);
      onPosition(kind);
    }

    // White at the bottom but the board reads as the starting position upside down, or pawns that
    // have clearly marched the wrong way: the orientation is flipped.
    function shouldFlip(res) {
      const cur = res.placement, pieces = res.pieces;
      if (cur === Coach.START_BOARD) return false;
      if (Coach.rotate(cur) === Coach.START_BOARD) return true;
      let wr = 0, wn = 0, br = 0, bn = 0;
      for (const [sq, c] of Object.entries(pieces)) {
        if (c === 'wp') { wr += +sq[1]; wn++; }
        if (c === 'bp') { br += +sq[1]; bn++; }
      }
      return wn >= 4 && bn >= 4 && wr / wn > br / bn + 2;
    }

    function drawPreview() {
      const pv = $('#preview');
      if (!pv || !frame.width) return;
      const pw = pv.clientWidth || 320;
      const ph = Math.round((pw * frame.height) / frame.width);
      if (pv.width !== pw || pv.height !== ph) { pv.width = pw; pv.height = ph; }
      const c = pv.getContext('2d');
      c.drawImage(frame, 0, 0, pw, ph);
      const s = pw / frame.width;
      const box = dragBox || (rect && { x: rect.x * s, y: rect.y * s, w: rect.size * s, h: rect.size * s });
      if (box) {
        c.lineWidth = 2;
        c.strokeStyle = dragBox ? '#2c7be5' : '#2fb446';
        c.strokeRect(box.x, box.y, box.w, box.h);
      }
    }

    // Drag a box on the preview to set the board by hand.
    let dragBox = null, dragStart = null;
    const pv = $('#preview');
    const pvPoint = (e) => { const r = pv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    pv.addEventListener('pointerdown', (e) => {
      if (!frame.width) return;
      dragStart = pvPoint(e);
      pv.setPointerCapture(e.pointerId);
    });
    pv.addEventListener('pointermove', (e) => {
      if (!dragStart) return;
      const p = pvPoint(e);
      const size = Math.max(Math.abs(p.x - dragStart.x), Math.abs(p.y - dragStart.y));
      dragBox = { x: p.x < dragStart.x ? dragStart.x - size : dragStart.x, y: p.y < dragStart.y ? dragStart.y - size : dragStart.y, w: size, h: size };
      drawPreview();
    });
    pv.addEventListener('pointerup', () => {
      if (dragBox && dragBox.w > 10) {
        const s = frame.width / pv.clientWidth;
        rect = { x: dragBox.x * s, y: dragBox.y * s, size: dragBox.w * s };
        manualRect = true;
        accepted = pending = null;
        toast('Board area set.');
        if (!stream) handleFrame(true);
      }
      dragBox = dragStart = null;
      drawPreview();
    });

    $('#flip').onclick = () => {
      orientation = orientation === 'w' ? 'b' : 'w';
      board.setOrientation(orientation);
      accepted = pending = null;
      tracker.reset();
      if (!stream && frame.width) handleFrame(true);
    };
    $('#turn').onclick = () => {
      if (!tracker.game) return;
      tracker.switchTurn();
      onPosition('new');
    };
    $('#refind').onclick = () => {
      rect = null;
      manualRect = false;
      lastFind = 0;
      accepted = pending = null;
      if (!stream && frame.width) handleFrame(true);
      else toast('Looking for the board again…');
    };
    $('#recal').onclick = () => {
      cal = null;
      saveJson(CAL_KEY, null);
      accepted = pending = null;
      tracker.reset();
      status('Show the <b>starting position</b> so the coach can learn the pieces again.');
      if (!stream && frame.width) handleFrame(true);
    };

    /* ---------- position & analysis ---------- */

    function onPosition() {
      const g = tracker.game;
      const lm = tracker.lastMove;
      board.setLastMove(lm && lm.from, lm && lm.to);
      board.setArrows([]);
      board.render();
      renderMoves();
      renderOpening();
      revealed = false;
      if (g.isGameOver()) {
        engine.stop();
        analysis = { fen: g.fen(), lines: [], done: true };
        const msg = g.isCheckmate() ? `Checkmate — ${g.turn() === 'w' ? 'Black' : 'White'} wins.` : 'Game over — draw.';
        $('#best').innerHTML = `<p class="best-move">${msg}</p>`;
        $('#lines').innerHTML = '';
        setEval(null);
        status(msg, 'good');
        pipUpdate();
        return;
      }
      const mine = g.turn() === orientation;
      status(mine ? '<b>Your move.</b> Thinking…' : 'Opponent to move. Watching…', mine ? 'good' : 'info');
      analyse();
    }

    function analyse() {
      const g = tracker.game;
      if (!g || g.isGameOver()) return;
      const fen = g.fen();
      analysis = { fen, lines: [], done: false };
      renderAnalysis();
      engine.analyze(fen, { multipv: 3, movetime: settings.think },
        (lines) => { if (analysis.fen === fen) { analysis.lines = lines; scheduleRender(); } },
        (lines) => {
          if (analysis.fen !== fen) return;
          analysis.lines = lines;
          analysis.done = true;
          renderAnalysis();
          maybeSpeak();
        });
      if (engine.failed) renderAnalysis();
    }

    function scheduleRender() {
      if (renderTimer) return;
      renderTimer = setTimeout(() => { renderTimer = null; renderAnalysis(); }, 150);
    }

    function setEval(line, turn) {
      const fill = $('#evalfill'), text = $('#evaltext');
      $('#evalbar').classList.toggle('flipped', orientation === 'b');
      if (!line) { fill.style.height = '50%'; text.textContent = ''; return; }
      fill.style.height = Coach.barPercent(line, turn) + '%';
      text.textContent = Coach.fmtScore(line, turn).replace(/^\+/, '');
      $('#evalbar').classList.toggle('black-ahead', Coach.whiteCp(line, turn) < 0);
    }

    function renderAnalysis() {
      const g = tracker.game;
      if (!g) return;
      const fen = analysis.fen;
      const turn = g.turn();
      const mine = turn === orientation;
      const lines = analysis.lines;
      const best = lines[0];
      $('#best-title').textContent = mine ? 'Your best move' : 'Opponent\'s best move';
      $('#depth').textContent = best ? `depth ${best.depth}${analysis.done ? '' : '…'}` : '';

      if (engine.failed) {
        $('#best').innerHTML = `<p class="bad">${esc(engine.failed)}</p>`;
        return;
      }
      if (!best) {
        $('#best').innerHTML = '<p class="muted">Thinking…</p>';
        $('#lines').innerHTML = '';
        setEval(null);
        return;
      }
      setEval(best, turn);

      const hint = settings.help === 'hint' && mine && !revealed;
      const sanOf = (l) => Coach.pvSan(fen, l.pv, 1)[0];
      const bestSan = sanOf(best);
      const threat = mine ? Coach.opponentThreat(fen) : null;

      // Arrows: the top engine moves (only the best one, in muted form, for the opponent).
      const arrows = [];
      if (!hint) {
        lines.slice(0, mine ? 3 : 1).forEach((l, i) => {
          arrows.push({ from: l.pv[0].slice(0, 2), to: l.pv[0].slice(2, 4), color: mine ? ARROWS[i] : 'red' });
        });
      }
      if (threat && !hint) arrows.push({ from: threat.from, to: threat.to, color: 'red' });
      board.setArrows(arrows.reverse());

      let html = '';
      if (hint) {
        const piece = new Chess(fen).get(best.pv[0].slice(0, 2));
        html = `<p class="best-move">Move your ${NAMES[piece.type]}</p>
          <p class="muted small">Hint mode: find the move yourself.</p>
          <button class="btn small" id="reveal">Show the move</button>`;
      } else if (bestSan) {
        const reasons = Coach.explain(fen, best.pv[0], lines);
        html = `<p class="best-move">${esc(fmtNum(fen, bestSan.san))} <span class="score">${esc(Coach.fmtScore(best, turn))}</span></p>
          <p class="verdict">${esc(Coach.verdict(best, turn))}.</p>
          <ul class="reasons">${reasons.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
          <p class="muted small">Plan: ${esc(Coach.fmtLine(fen, best.pv, 8))}</p>`;
      }
      if (threat) html += `<p class="warn">${esc(threat.text)}</p>`;
      if (!mine) html = '<p class="muted small">It\'s your opponent\'s move. Here\'s what they should play — be ready for it.</p>' + html;
      $('#best').innerHTML = html;
      const rv = $('#reveal');
      if (rv) rv.onclick = () => { revealed = true; renderAnalysis(); };

      $('#lines').innerHTML = hint ? '<li class="muted small">Hidden in hint mode.</li>' : lines.map((l, i) =>
        `<li><span class="score ${ARROWS[i]}">${esc(Coach.fmtScore(l, turn))}</span> ${esc(Coach.fmtLine(fen, l.pv, 10))}</li>`).join('');

      if (mine && analysis.done) status(`<b>Your move.</b> ${hint ? 'Hint ready.' : 'Best: <b>' + esc(bestSan ? bestSan.san : '') + '</b>'}`, 'good');
      pipUpdate();
    }

    function fmtNum(fen, san) {
      const [, turn, , , , num] = fen.split(' ');
      return turn === 'w' ? `${num}. ${san}` : `${num}… ${san}`;
    }

    function maybeSpeak() {
      const g = tracker.game;
      if (!settings.speak || !g || g.turn() !== orientation || spokenFor === analysis.fen) return;
      if (!('speechSynthesis' in window) || !analysis.lines[0]) return;
      spokenFor = analysis.fen;
      const mv = Coach.pvSan(analysis.fen, analysis.lines[0].pv, 1)[0];
      if (!mv) return;
      let text = Coach.spoken(mv.san);
      if (settings.help === 'hint') {
        const piece = new Chess(analysis.fen).get(analysis.lines[0].pv[0].slice(0, 2));
        text = `Hint: move your ${NAMES[piece.type]}`;
      }
      speechSynthesis.cancel();
      speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }

    function renderMoves() {
      const hist = tracker.history();
      const el = $('#moves');
      if (!hist.length) {
        el.innerHTML = '<span class="muted small">Moves seen on screen appear here.</span>';
        return;
      }
      el.innerHTML = hist.map((m) => {
        const [, turn, , , , num] = m.before.split(' ');
        const n = turn === 'w' ? `<span class="num">${num}.</span>` : '';
        return `${n}<span class="crumb">${esc(m.san)}</span>`;
      }).join(' ');
      el.lastElementChild.classList.add('cur');
      el.scrollTop = el.scrollHeight;
    }

    /* ---------- openings ---------- */

    function renderOpening() {
      const g = tracker.game;
      const el = $('#opening');
      if (!g) return;
      const fen = g.fen();
      const mine = g.turn() === orientation;
      const reps = ctx.reps();
      const parts = [];

      const name = Coach.openingName(g);
      if (name) {
        parts.push(`<p class="opening-name"><span class="eco">${esc(name.eco)}</span> ${esc(name.name)}</p>`);
        if (!name.inBook) parts.push('<p class="muted small">You\'ve left the named opening lines — now it\'s about plans, not memory.</p>');
      } else if (g.history().length) {
        parts.push('<p class="muted small">No named opening for this position.</p>');
      }

      // Did the opponent just leave the user's repertoire?
      const lm = tracker.lastMove;
      if (lm && lm.color !== orientation) {
        const prep = Coach.repertoireHints(lm.before, reps).filter((h) => h.mine && h.moves.length);
        const known = prep.some((h) => h.moves.includes(lm.san));
        if (prep.length && !known) {
          parts.push(`<p class="warn">${esc(lm.san)} is new — your repertoire “${esc(prep[0].rep.name)}” prepared for ${esc(prep[0].moves.join(', '))}. Time to think for yourself (the engine lines help).</p>`);
        }
      }

      const note = Coach.noteFor(fen, reps);
      if (note && lm) parts.push(`<p class="note-item why"><b>Why ${esc(lm.san)}:</b> ${esc(note.comment)}</p>`);

      const hints = Coach.repertoireHints(fen, reps).filter((h) => h.moves.length && h.rep.color === orientation);
      for (const h of hints.slice(0, 3)) {
        const who = h.mine ? `Your repertoire “${esc(h.rep.name)}”` : `Library: ${esc(h.rep.name)}`;
        parts.push(`<p class="rep-hint"><b>${who}:</b> ${mine ? 'play' : 'next you play after'} ${h.moves.map((m) => `<b>${esc(m)}</b>`).join(' or ')}${mine ? '' : ' their reply'}</p>`);
        if (mine && h.moves.length === 1) {
          const c = new Chess(fen);
          c.move(h.moves[0]);
          const why = Coach.noteFor(c.fen(), [h.rep]);
          if (why) parts.push(`<p class="muted small">${esc(why.comment)}</p>`);
        }
      }

      const book = Coach.bookMoves(fen);
      if (book.length) {
        parts.push(`<p class="small"><b>Book moves${mine ? ' for you' : ' for them'}:</b></p><ul class="book">${book.slice(0, 8).map((b) =>
          `<li><b>${esc(b.san)}</b> <span class="muted">${esc(b.name)}</span></li>`).join('')}</ul>`);
      }
      el.innerHTML = parts.join('') || '<p class="muted small">Nothing to show for this position.</p>';
    }

    /* ---------- pop-out window ---------- */

    if ('documentPictureInPicture' in window) $('#pop').hidden = false;
    $('#pop').onclick = async () => {
      if (pip) { pip.close(); return; }
      try {
        pip = await window.documentPictureInPicture.requestWindow({ width: 320, height: 240 });
      } catch (e) {
        toast('Couldn\'t open the pop-out window.');
        return;
      }
      const link = pip.document.createElement('link');
      link.rel = 'stylesheet';
      link.href = new URL('style.css', location.href).href;
      pip.document.head.appendChild(link);
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme) pip.document.documentElement.setAttribute('data-theme', theme);
      pip.document.body.innerHTML = '<div class="pip" id="pip"></div>';
      pip.addEventListener('pagehide', () => { pip = null; });
      pipUpdate();
    };

    function pipUpdate() {
      if (!pip) return;
      const el = pip.document.getElementById('pip');
      if (!el) return;
      const g = tracker.game;
      const best = analysis.lines[0];
      if (!g || !best) { el.innerHTML = '<p class="muted">Waiting for a position…</p>'; return; }
      const fen = analysis.fen, turn = g.turn(), mine = turn === orientation;
      const san = Coach.pvSan(fen, best.pv, 1)[0];
      const hint = settings.help === 'hint' && mine && !revealed;
      const piece = new Chess(fen).get(best.pv[0].slice(0, 2));
      const name = Coach.openingName(g);
      const reasons = hint ? [] : Coach.explain(fen, best.pv[0], analysis.lines);
      el.innerHTML = `
        <p class="muted small">${mine ? 'Your move' : 'Opponent to move'} · ${esc(Coach.fmtScore(best, turn))}${analysis.done ? '' : ' …'}</p>
        <p class="best-move">${hint ? 'Move your ' + NAMES[piece.type] : esc(san ? fmtNum(fen, san.san) : '')}</p>
        ${reasons[0] ? `<p class="small">${esc(reasons[0])}</p>` : ''}
        ${name ? `<p class="muted small">${esc(name.eco)} ${esc(name.name)}</p>` : ''}`;
    }

    renderMoves();

    return () => {
      stopWatching();
      engine.terminate();
      clearTimeout(renderTimer);
      document.removeEventListener('paste', onPaste);
      if (pip) pip.close();
      if ('speechSynthesis' in window) speechSynthesis.cancel();
    };
  }

  window.CoachView = { mount };
})();
