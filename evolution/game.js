/* Evolution Chess rules engine (no DOM; runs in the browser and in Node).
 *
 * Differences from chess:
 *  - Huge board (24, 40 or 64 squares wide) with a classic 2x8 army per side.
 *  - Several actions per turn, each piece may act once per turn.
 *  - No check: capture the enemy King to win.
 *  - Pieces earn XP and evolve into stronger pieces. */
(function (root) {
  'use strict';

  /* value = XP awarded to whoever captures it. range = max squares per move. */
  const TYPES = {
    pawn:       { name: 'Pawn',       value: 1,   range: 1 },
    knight:     { name: 'Knight',     value: 2,   range: 1 },
    bishop:     { name: 'Bishop',     value: 2,   range: 6 },
    rook:       { name: 'Rook',       value: 3,   range: 8 },
    nightrider: { name: 'Nightrider', value: 3,   range: 4 }, // repeats its knight jump up to 4 times
    queen:      { name: 'Queen',      value: 5,   range: 10 },
    amazon:     { name: 'Amazon',     value: 7,   range: 12 }, // queen + knight
    king:       { name: 'King',       value: 100, range: 1 },
  };

  /* Evolution tree. A piece evolves for free once its XP reaches `need`. */
  const EVOLVE = {
    pawn:       { need: 2, to: ['knight', 'bishop'] },
    knight:     { need: 3, to: ['rook', 'nightrider'] },
    bishop:     { need: 3, to: ['rook', 'nightrider'] },
    rook:       { need: 5, to: ['queen'] },
    nightrider: { need: 5, to: ['queen'] },
    queen:      { need: 8, to: ['amazon'] },
  };

  const PAWN_XP_STEPS = 6; // a pawn earns 1 XP for every 6 squares it marches
  const ORTHO = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const DIAG = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
  const KNIGHT = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]];
  const SIZES = [24, 40, 64];

  const other = (c) => (c === 'w' ? 'b' : 'w');
  const idx = (s, x, y) => y * s.size + x;
  const inside = (s, x, y) => x >= 0 && y >= 0 && x < s.size && y < s.size;
  const pieceAt = (s, x, y) => (inside(s, x, y) ? s.cells[idx(s, x, y)] : null);
  const pawnDir = (color) => (color === 'w' ? -1 : 1); // White starts at the bottom and moves up
  const pawnStartRow = (s, color) => (color === 'w' ? s.size - 2 : 1);
  const actionsFor = (size) => Math.max(3, Math.round(size / 8));

  function newGame(size) {
    if (!SIZES.includes(size)) size = 40;
    const s = { size, cells: new Array(size * size).fill(null), pieces: [], turn: 'w', actionsLeft: actionsFor(size),
      turnNo: 1, winner: null, nextId: 1, last: null };
    // Classic 2x8 army, centred on the edge of the huge board.
    const back = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    const x0 = size / 2 - 4;
    for (const color of ['w', 'b']) {
      const pawnRow = pawnStartRow(s, color);
      const backRow = color === 'w' ? size - 1 : 0;
      for (let i = 0; i < 8; i++) {
        add(s, 'pawn', color, x0 + i, pawnRow);
        add(s, back[i], color, x0 + i, backRow);
      }
    }
    return s;
  }

  function add(s, type, color, x, y) {
    const p = { id: s.nextId++, type, color, x, y, xp: 0, steps: 0, acted: false };
    s.pieces.push(p);
    s.cells[idx(s, x, y)] = p;
    return p;
  }

  function remove(s, p) {
    s.cells[idx(s, p.x, p.y)] = null;
    const i = s.pieces.indexOf(p);
    if (i >= 0) s.pieces.splice(i, 1);
  }

  /* Legal destinations for a piece: [{x, y, capture}] */
  function moves(s, p) {
    const out = [];
    const push = (x, y) => {
      if (!inside(s, x, y)) return false;
      const t = s.cells[idx(s, x, y)];
      if (!t) { out.push({ x, y, capture: false }); return true; }
      if (t.color !== p.color) out.push({ x, y, capture: true });
      return false;
    };
    const slide = (dirs, range) => {
      for (const [dx, dy] of dirs) for (let i = 1; i <= range; i++) if (!push(p.x + dx * i, p.y + dy * i)) break;
    };
    const jump = () => { for (const [dx, dy] of KNIGHT) push(p.x + dx, p.y + dy); };
    const range = TYPES[p.type].range;
    switch (p.type) {
      case 'pawn': {
        const d = pawnDir(p.color);
        if (inside(s, p.x, p.y + d) && !s.cells[idx(s, p.x, p.y + d)]) {
          out.push({ x: p.x, y: p.y + d, capture: false });
          if (p.y === pawnStartRow(s, p.color) && inside(s, p.x, p.y + 2 * d) && !s.cells[idx(s, p.x, p.y + 2 * d)]) {
            out.push({ x: p.x, y: p.y + 2 * d, capture: false });
          }
        }
        for (const dx of [-1, 1]) {
          const t = pieceAt(s, p.x + dx, p.y + d);
          if (t && t.color !== p.color) out.push({ x: p.x + dx, y: p.y + d, capture: true });
        }
        break;
      }
      case 'knight': jump(); break;
      case 'king': slide(ORTHO.concat(DIAG), 1); break;
      case 'bishop': slide(DIAG, range); break;
      case 'rook': slide(ORTHO, range); break;
      case 'queen': slide(ORTHO.concat(DIAG), range); break;
      case 'amazon': slide(ORTHO.concat(DIAG), range); jump(); break;
      case 'nightrider':
        for (const [dx, dy] of KNIGHT) for (let i = 1; i <= range; i++) if (!push(p.x + dx * i, p.y + dy * i)) break;
        break;
    }
    return out;
  }

  /* Can `byColor` capture on (x, y)? Used by the AI and for danger highlights. */
  function attacked(s, x, y, byColor) {
    const d = pawnDir(byColor);
    for (const dx of [-1, 1]) {
      const t = pieceAt(s, x + dx, y - d);
      if (t && t.color === byColor && t.type === 'pawn') return true;
    }
    for (const [dx, dy] of KNIGHT) {
      const t = pieceAt(s, x + dx, y + dy);
      if (t && t.color === byColor && (t.type === 'knight' || t.type === 'amazon')) return true;
    }
    const ray = (dirs, types) => {
      for (const [dx, dy] of dirs) {
        for (let i = 1; i <= 12; i++) {
          const nx = x + dx * i, ny = y + dy * i;
          if (!inside(s, nx, ny)) break;
          const t = s.cells[idx(s, nx, ny)];
          if (!t) continue;
          if (t.color === byColor && types.includes(t.type) && i <= TYPES[t.type].range) return true;
          break;
        }
      }
      return false;
    };
    if (ray(ORTHO, ['rook', 'queen', 'amazon', 'king'])) return true;
    if (ray(DIAG, ['bishop', 'queen', 'amazon', 'king'])) return true;
    for (const [dx, dy] of KNIGHT) {
      for (let i = 1; i <= 4; i++) {
        const nx = x + dx * i, ny = y + dy * i;
        if (!inside(s, nx, ny)) break;
        const t = s.cells[idx(s, nx, ny)];
        if (!t) continue;
        if (t.color === byColor && t.type === 'nightrider') return true;
        break;
      }
    }
    return false;
  }

  function canEvolve(p) {
    const e = EVOLVE[p.type];
    return !!e && p.xp >= e.need;
  }

  function evolve(s, id, to) {
    const p = s.pieces.find((q) => q.id === id);
    if (!p || s.winner || p.color !== s.turn || !canEvolve(p)) return null;
    const e = EVOLVE[p.type];
    if (!e.to.includes(to)) return null;
    const from = p.type;
    p.xp -= e.need;
    p.type = to;
    return { id, from, to };
  }

  function hasAnyMove(s, color) {
    return s.pieces.some((p) => p.color === color && !p.acted && moves(s, p).length);
  }

  function endTurn(s) {
    if (s.winner) return;
    s.turn = other(s.turn);
    s.actionsLeft = actionsFor(s.size);
    s.turnNo++;
    for (const p of s.pieces) p.acted = false;
    if (!hasAnyMove(s, s.turn)) s.winner = 'draw';
  }

  /* Move piece `id` to (x, y). Returns a result object or null if illegal. */
  function move(s, id, x, y) {
    if (s.winner || s.actionsLeft <= 0) return null;
    const p = s.pieces.find((q) => q.id === id);
    if (!p || p.color !== s.turn || p.acted) return null;
    const m = moves(s, p).find((q) => q.x === x && q.y === y);
    if (!m) return null;
    const res = { id, piece: p.type, color: p.color, from: { x: p.x, y: p.y }, to: { x, y }, captured: null, xp: 0, ready: false };
    if (m.capture) {
      const victim = pieceAt(s, x, y);
      res.captured = victim.type;
      res.xp += TYPES[victim.type].value;
      remove(s, victim);
      if (victim.type === 'king') s.winner = p.color;
    }
    s.cells[idx(s, p.x, p.y)] = null;
    if (p.type === 'pawn') {
      const before = Math.floor(p.steps / PAWN_XP_STEPS);
      p.steps += Math.abs(y - p.y);
      res.xp += Math.floor(p.steps / PAWN_XP_STEPS) - before;
    }
    p.x = x; p.y = y;
    s.cells[idx(s, x, y)] = p;
    if (p.type !== 'king') p.xp += res.xp;
    p.acted = true;
    res.ready = canEvolve(p);
    s.last = { from: res.from, to: res.to };
    s.actionsLeft--;
    if (!s.winner && (s.actionsLeft <= 0 || !hasAnyMove(s, s.turn))) endTurn(s);
    return res;
  }

  function toJSON(s) {
    return { size: s.size, turn: s.turn, actionsLeft: s.actionsLeft, turnNo: s.turnNo, winner: s.winner, nextId: s.nextId,
      last: s.last, pieces: s.pieces.map((p) => [p.id, p.type, p.color, p.x, p.y, p.xp, p.steps, p.acted ? 1 : 0]) };
  }

  function fromJSON(j) {
    const s = { size: j.size, cells: new Array(j.size * j.size).fill(null), pieces: [], turn: j.turn, actionsLeft: j.actionsLeft,
      turnNo: j.turnNo, winner: j.winner, nextId: j.nextId, last: j.last };
    for (const [id, type, color, x, y, xp, steps, acted] of j.pieces) {
      if (!TYPES[type] || !inside(s, x, y)) throw new Error('bad save');
      const p = { id, type, color, x, y, xp, steps, acted: !!acted };
      s.pieces.push(p);
      s.cells[idx(s, x, y)] = p;
    }
    return s;
  }

  root.Evo = { TYPES, EVOLVE, SIZES, newGame, moves, move, evolve, canEvolve, endTurn, attacked, pieceAt, other, actionsFor,
    toJSON, fromJSON, hasAnyMove };
  if (typeof module !== 'undefined') module.exports = root.Evo;
})(typeof window !== 'undefined' ? window : globalThis);
