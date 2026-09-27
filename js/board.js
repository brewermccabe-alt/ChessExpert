/* Interactive chessboard: click-to-move and drag-and-drop, arrows, highlights. */
(function () {
  const FILES = 'abcdefgh';

  function sqXY(sq, orientation) {
    const f = FILES.indexOf(sq[0]);
    const r = parseInt(sq[1], 10) - 1;
    return orientation === 'w' ? { x: f, y: 7 - r } : { x: 7 - f, y: r };
  }

  function xySq(x, y, orientation) {
    return orientation === 'w' ? FILES[x] + (8 - y) : FILES[7 - x] + (y + 1);
  }

  const ANIM_MS = 200; // keep in sync with the .piece.anim transition in style.css
  const REDUCED_MOTION = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

  function pieceSvg(code) {
    return `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">${window.PIECE_SVG[code]}</svg>`;
  }

  class Board {
    /**
     * opts.getChess(): returns the chess.js instance for the displayed position
     * opts.canMove(): whether the user may move right now
     * opts.onMove(from, to, promotion): called with a legal move
     */
    constructor(el, opts) {
      this.el = el;
      this.opts = opts;
      this.orientation = 'w';
      this.selected = null;
      this.lastMove = null;
      this.arrows = [];
      this.marks = {};
      this.drag = null;

      el.classList.add('board');
      el.innerHTML = '';
      this.squaresEl = document.createElement('div');
      this.squaresEl.className = 'squares';
      this.piecesEl = document.createElement('div');
      this.piecesEl.className = 'pieces';
      this.arrowsEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.arrowsEl.setAttribute('class', 'arrows');
      this.arrowsEl.setAttribute('viewBox', '0 0 8 8');
      el.append(this.squaresEl, this.piecesEl, this.arrowsEl);

      this.squareEls = {};
      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
          const d = document.createElement('div');
          d.className = 'sq';
          this.squaresEl.appendChild(d);
        }
      }

      el.addEventListener('pointerdown', (e) => this._down(e));
      window.addEventListener('pointermove', (e) => this._moveDrag(e));
      window.addEventListener('pointerup', (e) => this._up(e));
      el.addEventListener('contextmenu', (e) => e.preventDefault());
      this.render();
    }

    setOrientation(o) {
      this.orientation = o;
      this.instant = true; // flipping the board shouldn't send every piece flying
      this.render();
    }

    flip() {
      this.setOrientation(this.orientation === 'w' ? 'b' : 'w');
    }

    setLastMove(from, to) {
      this.lastMove = from ? { from, to } : null;
    }

    setArrows(arrows) {
      this.arrows = arrows || [];
      this._renderArrows();
    }

    flash(square, kind) {
      this.marks[square] = kind;
      this._renderSquares();
      setTimeout(() => {
        delete this.marks[square];
        this._renderSquares();
      }, 600);
    }

    render() {
      this.selected = null;
      this._renderSquares();
      this._renderPieces();
      this._renderArrows();
    }

    _sqFromEvent(e) {
      const r = this.el.getBoundingClientRect();
      const x = Math.floor(((e.clientX - r.left) / r.width) * 8);
      const y = Math.floor(((e.clientY - r.top) / r.height) * 8);
      if (x < 0 || x > 7 || y < 0 || y > 7) return null;
      return xySq(x, y, this.orientation);
    }

    _legalTargets(sq) {
      const chess = this.opts.getChess();
      return chess.moves({ square: sq, verbose: true }).map((m) => m.to);
    }

    _renderSquares() {
      const chess = this.opts.getChess();
      const inCheck = chess.inCheck();
      const turn = chess.turn();
      const targets = this.selected ? this._legalTargets(this.selected) : [];
      const kids = this.squaresEl.children;
      for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
          const sq = xySq(x, y, this.orientation);
          const d = kids[y * 8 + x];
          const light = (FILES.indexOf(sq[0]) + parseInt(sq[1], 10)) % 2 === 1;
          const cls = ['sq', light ? 'light' : 'dark'];
          if (this.lastMove && (this.lastMove.from === sq || this.lastMove.to === sq)) cls.push('last');
          if (this.selected === sq) cls.push('selected');
          if (targets.includes(sq)) cls.push(chess.get(sq) ? 'capture' : 'target');
          const p = chess.get(sq);
          if (inCheck && p && p.type === 'k' && p.color === turn) cls.push('check');
          if (this.marks[sq]) cls.push('mark-' + this.marks[sq]);
          d.className = cls.join(' ');
          let label = '';
          if (y === 7) label += `<span class="coord file">${sq[0]}</span>`;
          if (x === 0) label += `<span class="coord rank">${sq[1]}</span>`;
          d.innerHTML = label;
        }
      }
    }

    _placePiece(el, sq) {
      const { x, y } = sqXY(sq, this.orientation);
      el.dataset.sq = sq;
      el.style.transform = `translate(${x * 100}%,${y * 100}%)`;
    }

    // Reuse piece elements between positions so moved pieces can slide to their new squares.
    _renderPieces() {
      const chess = this.opts.getChess();
      const wanted = [];
      for (const row of chess.board()) for (const p of row) if (p) wanted.push({ sq: p.square, code: p.color + p.type });

      const animate = !this.instant && !REDUCED_MOTION.matches;
      const dropped = this.dropped; // a piece the user just dragged is already where it belongs
      this.instant = false;
      this.dropped = null;

      // 1. Pieces that didn't move keep their element.
      const old = [...this.piecesEl.querySelectorAll('.piece:not(.leaving)')];
      const unmatched = [];
      for (const w of wanted) {
        const i = old.findIndex((el) => el.dataset.sq === w.sq && el.dataset.code === w.code);
        if (i >= 0) old.splice(i, 1);
        else unmatched.push(w);
      }

      // 2. Each piece that arrived on a new square takes the nearest leftover piece of the same kind.
      const dist = (a, b) => Math.hypot(FILES.indexOf(a[0]) - FILES.indexOf(b[0]), a[1] - b[1]);
      for (const w of unmatched) {
        let best = -1;
        for (let i = 0; i < old.length; i++) {
          if (old[i].dataset.code !== w.code) continue;
          if (best < 0 || dist(old[i].dataset.sq, w.sq) < dist(old[best].dataset.sq, w.sq)) best = i;
        }
        let el;
        if (best >= 0) {
          el = old.splice(best, 1)[0];
          const skip = !animate || (dropped && dropped.from === el.dataset.sq && dropped.to === w.sq);
          el.classList.toggle('anim', !skip);
          if (!skip) {
            clearTimeout(el._animTimer);
            el._animTimer = setTimeout(() => el.classList.remove('anim'), ANIM_MS + 50);
          }
        } else {
          // Nothing to slide from (promotion, or a position set from scratch): just appear.
          el = document.createElement('div');
          el.className = 'piece';
          el.dataset.code = w.code;
          el.innerHTML = pieceSvg(w.code);
          this.piecesEl.appendChild(el);
        }
        el.classList.remove('dragging-src');
        this._placePiece(el, w.sq);
      }

      // 3. Whatever is left was captured (or is gone): fade it out.
      for (const el of old) {
        if (!animate) { el.remove(); continue; }
        el.classList.add('leaving');
        setTimeout(() => el.remove(), ANIM_MS);
      }
    }

    _renderArrows() {
      const ns = 'http://www.w3.org/2000/svg';
      const svg = this.arrowsEl;
      svg.innerHTML = '';
      const defs = document.createElementNS(ns, 'defs');
      const colors = { green: '#15781b', blue: '#003088', red: '#882020', yellow: '#e68f00' };
      for (const [name, c] of Object.entries(colors)) {
        defs.innerHTML += `<marker id="ah-${name}" markerWidth="4" markerHeight="4" refX="2.05" refY="2" orient="auto"><path d="M0,0 V4 L3,2 Z" fill="${c}"/></marker>`;
      }
      svg.appendChild(defs);
      for (const a of this.arrows) {
        const color = a.color || 'green';
        const f = sqXY(a.from, this.orientation);
        const t = sqXY(a.to, this.orientation);
        const x1 = f.x + 0.5, y1 = f.y + 0.5;
        let x2 = t.x + 0.5, y2 = t.y + 0.5;
        const len = Math.hypot(x2 - x1, y2 - y1);
        x2 -= ((x2 - x1) / len) * 0.3;
        y2 -= ((y2 - y1) / len) * 0.3;
        const line = document.createElementNS(ns, 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', colors[color]);
        line.setAttribute('stroke-width', '0.16');
        line.setAttribute('stroke-linecap', 'round');
        line.setAttribute('opacity', '0.8');
        line.setAttribute('marker-end', `url(#ah-${color})`);
        svg.appendChild(line);
      }
    }

    _down(e) {
      if (e.button !== 0) return;
      const sq = this._sqFromEvent(e);
      if (!sq) return;
      const chess = this.opts.getChess();
      const p = chess.get(sq);
      const mine = p && p.color === chess.turn() && this.opts.canMove();

      if (this.selected && this.selected !== sq && !mine) {
        const from = this.selected;
        this.selected = null;
        this._tryMove(from, sq);
        return;
      }
      if (!mine) {
        this.selected = null;
        this._renderSquares();
        return;
      }
      e.preventDefault();
      const wasSelected = this.selected === sq;
      this.selected = sq;
      this._renderSquares();

      const pieceEl = this.piecesEl.querySelector(`.piece:not(.leaving)[data-sq="${sq}"]`);
      const ghost = document.createElement('div');
      ghost.className = 'piece ghost';
      ghost.innerHTML = pieceSvg(p.color + p.type);
      const size = this.el.getBoundingClientRect().width / 8;
      ghost.style.width = ghost.style.height = size + 'px';
      this.drag = { from: sq, ghost, pieceEl, started: false, wasSelected, x0: e.clientX, y0: e.clientY, size };
    }

    _moveDrag(e) {
      const d = this.drag;
      if (!d) return;
      if (!d.started) {
        if (Math.hypot(e.clientX - d.x0, e.clientY - d.y0) < 4) return;
        d.started = true;
        document.body.appendChild(d.ghost);
        if (d.pieceEl) d.pieceEl.classList.add('dragging-src');
      }
      d.ghost.style.left = e.clientX - d.size / 2 + 'px';
      d.ghost.style.top = e.clientY - d.size / 2 + 'px';
    }

    _up(e) {
      const d = this.drag;
      if (!d) return;
      this.drag = null;
      if (d.started) {
        d.ghost.remove();
        if (d.pieceEl) d.pieceEl.classList.remove('dragging-src');
        const to = this._sqFromEvent(e);
        if (to && to !== d.from) {
          this.selected = null;
          this.dropped = { from: d.from, to };
          this._tryMove(d.from, to);
          return;
        }
      } else if (d.wasSelected) {
        this.selected = null;
      }
      this._renderSquares();
    }

    _tryMove(from, to) {
      const chess = this.opts.getChess();
      const legal = chess.moves({ square: from, verbose: true }).filter((m) => m.to === to);
      if (!legal.length) {
        this._renderSquares();
        return;
      }
      if (legal[0].promotion) {
        this._askPromotion(chess.turn(), to).then((promo) => {
          if (promo) this.opts.onMove(from, to, promo);
          else this._renderSquares();
        });
      } else {
        this.opts.onMove(from, to);
      }
    }

    _askPromotion(color, to) {
      return new Promise((resolve) => {
        const ov = document.createElement('div');
        ov.className = 'promo';
        for (const t of ['q', 'n', 'r', 'b']) {
          const b = document.createElement('button');
          b.innerHTML = pieceSvg(color + t);
          b.onclick = (ev) => {
            ev.stopPropagation();
            ov.remove();
            resolve(t);
          };
          ov.appendChild(b);
        }
        ov.addEventListener('pointerdown', (ev) => {
          ev.stopPropagation();
          if (ev.target === ov) {
            ov.remove();
            resolve(null);
          }
        });
        this.el.appendChild(ov);
      });
    }
  }

  window.Board = Board;
})();
