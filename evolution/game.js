/* Evolution Chess rules engine (no DOM; runs in the browser and in Node).
 *
 *  - Huge board (24, 40 or 64 squares wide). Each side starts with a classic 2x8 army in a 2x8 pocket attached to
 *    the edge of the board.
 *  - Several actions per turn; each piece may act once per turn. No check: capture the enemy King to win.
 *  - Each side has a bank of "chess money": +50 for a move, +150 for a capture. Spend it on a fixed upgrade path for
 *    each piece (a shop, no XP).
 *  - A captured piece returns to its owner's pocket (owner picks the square) as a plain, un-upgraded piece. The
 *    Knight's Extra life is the exception: it returns at once with its upgrades. */
(function (root) {
  'use strict';

  const TYPES = {
    pawn:   { name: 'Pawn',   value: 1 },
    knight: { name: 'Knight', value: 3 },
    bishop: { name: 'Bishop', value: 3 },
    rook:   { name: 'Rook',   value: 5 },
    queen:  { name: 'Queen',  value: 9 },
    king:   { name: 'King',   value: 100 },
  };

  /* Fixed upgrade path per piece, bought in order. Costs are in chess money. */
  const UPGRADES = {
    pawn: [
      { id: 'jet', name: 'Jet engine', cost: 75, icon: '🚀', desc: 'Can move 1 or 2 squares forward on any turn.' },
      { id: 'sword', name: 'Sword', cost: 100, icon: '⚔️', desc: 'Can capture straight ahead as well as diagonally.' },
      { id: 'halo', name: 'Halo', cost: 75, icon: '😇', desc: 'Can capture on either forward diagonal without moving.' },
    ],
    knight: [
      { id: 'life', name: 'Extra life', cost: 150, icon: '❤️', desc: 'When captured (once), returns to your pocket at once and keeps its upgrades.' },
      { id: 'extend', name: 'Extending potion', cost: 200, icon: '🧪', desc: 'Can also move twice in the same direction: a double knight leap.' },
      { id: 'bow', name: 'Bow', cost: 200, icon: '🏹', desc: 'Can shoot an enemy up to 3 squares away diagonally, without moving.' },
      { id: 'mage', name: "Bishop's mage", cost: 350, icon: '🧙', desc: 'After its move, it can also slide diagonally from the square it lands on.' },
    ],
    bishop: [
      { id: 'freeze', name: 'Freeze potion', cost: 250, icon: '🧊', desc: 'At the end of your turn, adjacent enemy pieces are frozen for their next turn.' },
      { id: 'steroids', name: 'Steroids', cost: 300, icon: '💪', desc: 'Moves like a queen. Keeps the freeze.' },
    ],
    rook: [
      { id: 'cannon', name: 'Cannon', cost: 250, icon: '💣', desc: 'Can fire at an enemy up to 3 squares to its left or right, without moving.' },
      { id: 'castle', name: 'Castle', cost: 200, icon: '🏰', desc: 'Can also capture a piece directly behind another piece in a straight line.' },
    ],
    queen: [
      { id: 'katana', name: 'Katana', cost: 100, icon: '🗡️', desc: 'Can capture any adjacent piece without moving.' },
      { id: 'horse', name: "Horse's head", cost: 200, icon: '🐴', desc: 'Also moves like a knight.' },
      { id: 'wings', name: 'Wings', cost: 350, icon: '🪽', desc: 'Flies over pieces, but cannot capture in a move that flew over a piece.' },
    ],
    king: [
      { id: 'arm', name: 'Long arm', cost: 125, icon: '🦾', desc: 'Can shoot an enemy up to 2 squares away in any direction, without moving.' },
    ],
  };

  const MOVE_PAY = 50;
  const CAPTURE_PAY = 150;
  const SLIDE = 8; // longest slide on the huge board

  const ORTHO = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const DIAG = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
  const ALL8 = ORTHO.concat(DIAG);
  const KNIGHT = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]];
  const SIZES = [24, 40, 64];

  const other = (c) => (c === 'w' ? 'b' : 'w');
  const idx = (s, x, y) => y * s.size + x;
  /* Layout: the main board is size x size (grid rows POCKET_H .. size+POCKET_H-1). Above and below it, each side has a
   * 2x8 pocket attached as an extension of the board, centred on the board. Everything else outside is void. */
  const POCKET_H = 2;
  const inside = (s, x, y) => {
    if (x < 0 || y < 0 || x >= s.size || y >= s.h) return false;
    if (y >= POCKET_H && y < s.size + POCKET_H) return true;
    const x0 = s.size / 2 - 4;
    return x >= x0 && x < x0 + 8;
  };
  const pieceAt = (s, x, y) => (inside(s, x, y) ? s.cells[idx(s, x, y)] : null);
  const pawnDir = (color) => (color === 'w' ? -1 : 1); // White starts at the bottom and moves up
  const pawnStartRow = (s, color) => (color === 'w' ? s.size + POCKET_H : 1);
  const actionsFor = (size) => Math.max(3, Math.round(size / 8));
  const cheb = (a, b) => Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));

  const hasUpgrade = (p, id) => {
    const list = UPGRADES[p.type];
    if (!list) return false;
    const i = list.findIndex((u) => u.id === id);
    return i >= 0 && i < p.lvl;
  };
  const nextUpgrade = (p) => (UPGRADES[p.type] && UPGRADES[p.type][p.lvl]) || null;

  function newGame(size) {
    if (!SIZES.includes(size)) size = 40;
    const h = size + 2 * POCKET_H;
    const s = { size, h, cells: new Array(size * h).fill(null), pieces: [], turn: 'w', actionsLeft: actionsFor(size),
      turnNo: 1, winner: null, nextId: 1, last: null, pending: { w: [], b: [] }, bank: { w: 0, b: 0 } };
    // Classic 2x8 army, starting in each side's pocket.
    const back = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    const x0 = size / 2 - 4;
    for (const color of ['w', 'b']) {
      const pawnRow = pawnStartRow(s, color);
      const backRow = color === 'w' ? h - 1 : 0;
      for (let i = 0; i < 8; i++) {
        add(s, 'pawn', color, x0 + i, pawnRow);
        add(s, back[i], color, x0 + i, backRow);
      }
    }
    return s;
  }

  /* The 2x8 pocket of each side: {x, y, w, h}. It is the army's starting area and its home base. */
  function pocket(s, color) {
    return { x: s.size / 2 - 4, y: color === 'w' ? s.size + POCKET_H : 0, w: 8, h: POCKET_H };
  }

  const inPocket = (s, color, x, y) => {
    const k = pocket(s, color);
    return x >= k.x && x < k.x + k.w && y >= k.y && y < k.y + k.h;
  };

  /* Free squares of a side's pocket, front row first. */
  function freePocketSquares(s, color) {
    const k = pocket(s, color);
    const rows = color === 'w' ? [k.y, k.y + 1] : [k.y + 1, k.y];
    const out = [];
    for (const y of rows) for (let x = k.x; x < k.x + k.w; x++) if (!s.cells[idx(s, x, y)]) out.push({ x, y });
    return out;
  }

  function add(s, type, color, x, y) {
    const p = { id: s.nextId++, type, color, x, y, lvl: 0, acted: false, frozen: false, lifeSpent: false };
    s.pieces.push(p);
    s.cells[idx(s, x, y)] = p;
    return p;
  }

  function remove(s, p) {
    s.cells[idx(s, p.x, p.y)] = null;
    const i = s.pieces.indexOf(p);
    if (i >= 0) s.pieces.splice(i, 1);
  }

  /* Legal moves for a piece: [{x, y, capture}] (each is one action; the piece moves to that square). */
  function moves(s, p) {
    if (p.frozen) return [];
    const out = [];
    const at = (x, y) => { const t = pieceAt(s, x, y); return t === p ? null : t; };
    const push = (x, y) => {
      if (!inside(s, x, y) || (x === p.x && y === p.y)) return false;
      const t = at(x, y);
      if (!t) { out.push({ x, y, capture: false }); return true; }
      if (t.color !== p.color) out.push({ x, y, capture: true });
      return false;
    };
    const slide = (dirs, range) => {
      for (const [dx, dy] of dirs) for (let i = 1; i <= range; i++) if (!push(p.x + dx * i, p.y + dy * i)) break;
    };
    const knightSquares = (extend) => {
      const sq = [];
      for (const [dx, dy] of KNIGHT) { sq.push([p.x + dx, p.y + dy]); if (extend) sq.push([p.x + 2 * dx, p.y + 2 * dy]); }
      return sq;
    };
    const jumps = (extend) => { for (const [x, y] of knightSquares(extend)) push(x, y); };
    // Queen's wings: pass over pieces, but a move that flew over a piece cannot capture.
    const fly = (dirs, range) => {
      for (const [dx, dy] of dirs) {
        let flew = false;
        for (let i = 1; i <= range; i++) {
          const x = p.x + dx * i, y = p.y + dy * i;
          if (!inside(s, x, y)) break;
          const t = at(x, y);
          if (!t) out.push({ x, y, capture: false });
          else { if (t.color !== p.color && !flew) out.push({ x, y, capture: true }); flew = true; }
        }
      }
    };

    switch (p.type) {
      case 'pawn': {
        const d = pawnDir(p.color);
        const jet = hasUpgrade(p, 'jet'), sword = hasUpgrade(p, 'sword');
        const one = at(p.x, p.y + d);
        if (inside(s, p.x, p.y + d)) {
          if (!one) out.push({ x: p.x, y: p.y + d, capture: false });
          else if (sword && one.color !== p.color) out.push({ x: p.x, y: p.y + d, capture: true });
        }
        if (!one && inside(s, p.x, p.y + d) && inside(s, p.x, p.y + 2 * d) && (jet || p.y === pawnStartRow(s, p.color))) {
          const two = at(p.x, p.y + 2 * d);
          if (!two) out.push({ x: p.x, y: p.y + 2 * d, capture: false });
          else if (sword && jet && two.color !== p.color) out.push({ x: p.x, y: p.y + 2 * d, capture: true });
        }
        for (const dx of [-1, 1]) {
          const t = at(p.x + dx, p.y + d);
          if (t && t.color !== p.color) out.push({ x: p.x + dx, y: p.y + d, capture: true });
        }
        break;
      }
      case 'knight': {
        jumps(hasUpgrade(p, 'extend'));
        if (hasUpgrade(p, 'mage')) {
          // After the knight move, slide diagonally from the landing square (only from empty squares).
          for (const [lx, ly] of knightSquares(hasUpgrade(p, 'extend'))) {
            if (!inside(s, lx, ly) || at(lx, ly)) continue;
            for (const [dx, dy] of DIAG) for (let i = 1; i <= SLIDE; i++) if (!push(lx + dx * i, ly + dy * i)) break;
          }
        }
        break;
      }
      case 'bishop': slide(hasUpgrade(p, 'steroids') ? ALL8 : DIAG, SLIDE); break;
      case 'rook': {
        slide(ORTHO, SLIDE);
        if (hasUpgrade(p, 'castle')) {
          // Capture the piece directly behind another piece, in a straight line.
          for (const [dx, dy] of ORTHO) {
            for (let i = 1; i < SLIDE; i++) {
              if (!inside(s, p.x + dx * i, p.y + dy * i)) break;
              if (!at(p.x + dx * i, p.y + dy * i)) continue;
              const behind = at(p.x + dx * (i + 1), p.y + dy * (i + 1));
              if (behind && behind.color !== p.color) out.push({ x: p.x + dx * (i + 1), y: p.y + dy * (i + 1), capture: true });
              break;
            }
          }
        }
        break;
      }
      case 'queen':
        if (hasUpgrade(p, 'wings')) fly(ALL8, SLIDE); else slide(ALL8, SLIDE);
        if (hasUpgrade(p, 'horse')) jumps(false);
        break;
      case 'king': slide(ALL8, 1); break;
    }
    // Drop duplicate destinations (several routes can reach the same square)
    const seen = new Set();
    return out.filter((m) => { const k = m.y * s.size + m.x; if (seen.has(k)) return false; seen.add(k); return true; });
  }

  /* Ranged/stationary captures: enemy pieces this piece can capture without moving. Shots ignore pieces in the way. */
  function shots(s, p) {
    if (p.frozen) return [];
    const out = [];
    const add1 = (x, y) => {
      const t = pieceAt(s, x, y);
      if (t && t.color !== p.color) out.push({ x, y, capture: true, shot: true });
    };
    const line = (dirs, n) => { for (const [dx, dy] of dirs) for (let i = 1; i <= n; i++) add1(p.x + dx * i, p.y + dy * i); };
    switch (p.type) {
      case 'pawn': if (hasUpgrade(p, 'halo')) { const d = pawnDir(p.color); add1(p.x - 1, p.y + d); add1(p.x + 1, p.y + d); } break;
      case 'knight': if (hasUpgrade(p, 'bow')) line(DIAG, 3); break;
      case 'rook': if (hasUpgrade(p, 'cannon')) line([[1, 0], [-1, 0]], 3); break;
      case 'queen': if (hasUpgrade(p, 'katana')) line(ALL8, 1); break;
      case 'king': if (hasUpgrade(p, 'arm')) line(ALL8, 2); break;
    }
    return out;
  }

  /* Can `byColor` capture a piece standing on (x, y)? (An empty square is tested as if an enemy stood there.) */
  function attacked(s, x, y, byColor) {
    const i = idx(s, x, y);
    const had = s.cells[i];
    if (!had) s.cells[i] = { id: -1, type: 'pawn', color: other(byColor), x, y, lvl: 0, dummy: true };
    try {
      for (const q of s.pieces) {
        if (q.color !== byColor) continue;
        if (moves(s, q).some((m) => m.capture && m.x === x && m.y === y)) return true;
        if (shots(s, q).some((m) => m.x === x && m.y === y)) return true;
      }
      return false;
    } finally {
      s.cells[i] = had;
    }
  }

  function hasAnyMove(s, color) {
    return s.pieces.some((p) => p.color === color && !p.acted && (moves(s, p).length || shots(s, p).length));
  }

  function endTurn(s) {
    if (s.winner) return;
    const ending = s.turn, foe = other(ending);
    // A freeze on the ending side's pieces has run its one turn.
    for (const p of s.pieces) if (p.color === ending) p.frozen = false;
    // Freeze-potion bishops freeze adjacent enemies for their next turn.
    for (const p of s.pieces) {
      if (p.color === ending && p.type === 'bishop' && hasUpgrade(p, 'freeze')) {
        for (const q of s.pieces) if (q.color === foe && cheb(p, q) === 1) q.frozen = true;
      }
    }
    s.turn = foe;
    s.actionsLeft = actionsFor(s.size);
    s.turnNo++;
    for (const p of s.pieces) p.acted = false;
    if (!s.pieces.some((p) => p.color === foe && p.frozen) && !hasAnyMove(s, foe)) s.winner = 'draw';
  }

  function afterAction(s) {
    if (!s.winner && (s.actionsLeft <= 0 || !hasAnyMove(s, s.turn))) endTurn(s);
  }

  /* Where a knight with Extra life returns: the free pocket square closest to the pocket corner nearest to it. */
  function reviveSquare(s, victim) {
    const free = freePocketSquares(s, victim.color);
    if (!free.length) return null;
    const k = pocket(s, victim.color);
    const cx = victim.x < k.x + k.w / 2 ? k.x : k.x + k.w - 1;
    const cy = victim.color === 'w' ? k.y + k.h - 1 : k.y;
    free.sort((a, b) => ((a.x - cx) ** 2 + (a.y - cy) ** 2) - ((b.x - cx) ** 2 + (b.y - cy) ** 2));
    return free[0];
  }

  /* Bookkeeping after `victim` (already removed from the board) was captured by `by`. */
  function afterCapture(s, victim, by) {
    const info = { captured: victim.type, revived: null };
    if (victim.type === 'king') { s.winner = by; return info; }
    if (victim.type === 'knight' && hasUpgrade(victim, 'life') && !victim.lifeSpent) {
      const spot = reviveSquare(s, victim);
      if (spot) {
        const n = add(s, 'knight', victim.color, spot.x, spot.y);
        n.lvl = victim.lvl; n.lifeSpent = true;
        info.revived = spot;
        return info;
      }
    }
    s.pending[victim.color].push(victim.type); // returns as a plain piece, placed by its owner
    return info;
  }

  /* Move piece `id` to (x, y). Returns a result object or null if illegal. */
  function move(s, id, x, y) {
    if (s.winner || s.actionsLeft <= 0) return null;
    const p = s.pieces.find((q) => q.id === id);
    if (!p || p.color !== s.turn || p.acted) return null;
    const m = moves(s, p).find((q) => q.x === x && q.y === y);
    if (!m) return null;
    const res = { id, piece: p.type, color: p.color, from: { x: p.x, y: p.y }, to: { x, y }, captured: null, revived: null, gain: MOVE_PAY };
    const victim = m.capture ? pieceAt(s, x, y) : null;
    if (victim) remove(s, victim);
    s.cells[idx(s, p.x, p.y)] = null;
    p.x = x; p.y = y;
    s.cells[idx(s, x, y)] = p;
    p.acted = true;
    if (victim) {
      const info = afterCapture(s, victim, p.color);
      res.captured = info.captured; res.revived = info.revived; res.gain = CAPTURE_PAY;
    }
    s.bank[p.color] += res.gain;
    s.last = { from: res.from, to: res.to };
    s.actionsLeft--;
    afterAction(s);
    return res;
  }

  /* Capture the enemy on (x, y) without moving (ranged/stationary attack). */
  function shoot(s, id, x, y) {
    if (s.winner || s.actionsLeft <= 0) return null;
    const p = s.pieces.find((q) => q.id === id);
    if (!p || p.color !== s.turn || p.acted) return null;
    if (!shots(s, p).some((t) => t.x === x && t.y === y)) return null;
    const victim = pieceAt(s, x, y);
    remove(s, victim);
    p.acted = true;
    const info = afterCapture(s, victim, p.color);
    const res = { id, piece: p.type, color: p.color, from: { x: p.x, y: p.y }, to: { x, y }, shot: true,
      captured: info.captured, revived: info.revived, gain: CAPTURE_PAY };
    s.bank[p.color] += CAPTURE_PAY;
    s.last = { from: res.from, to: res.to };
    s.actionsLeft--;
    afterAction(s);
    return res;
  }

  /* Buy the next upgrade for piece `id` (free action; costs chess money). */
  function buy(s, id) {
    const p = s.pieces.find((q) => q.id === id);
    if (!p || s.winner || p.color !== s.turn) return null;
    const u = nextUpgrade(p);
    if (!u || s.bank[p.color] < u.cost) return null;
    s.bank[p.color] -= u.cost;
    p.lvl++;
    return { id, piece: p.type, upgrade: u };
  }

  /* Home base: place a waiting piece (of `type`, default the first waiting) on a free square of your pocket. Free. */
  function place(s, x, y, type) {
    if (s.winner) return null;
    const list = s.pending[s.turn];
    const i = type ? list.indexOf(type) : 0;
    if (!list.length || i < 0) return null;
    if (!inPocket(s, s.turn, x, y) || s.cells[idx(s, x, y)]) return null;
    const kind = list.splice(i, 1)[0];
    const p = add(s, kind, s.turn, x, y);
    s.last = { from: { x, y }, to: { x, y } };
    return { id: p.id, x, y, color: p.color, type: kind };
  }

  function toJSON(s) {
    return { size: s.size, turn: s.turn, actionsLeft: s.actionsLeft, turnNo: s.turnNo, winner: s.winner, nextId: s.nextId,
      last: s.last, pending: s.pending, bank: s.bank,
      pieces: s.pieces.map((p) => [p.id, p.type, p.color, p.x, p.y, p.lvl, p.acted ? 1 : 0, p.frozen ? 1 : 0, p.lifeSpent ? 1 : 0]) };
  }

  function fromJSON(j) {
    const h = j.size + 2 * POCKET_H;
    const s = { size: j.size, h, cells: new Array(j.size * h).fill(null), pieces: [], turn: j.turn, actionsLeft: j.actionsLeft,
      turnNo: j.turnNo, winner: j.winner, nextId: j.nextId, last: j.last,
      pending: { w: (j.pending && j.pending.w) || [], b: (j.pending && j.pending.b) || [] }, bank: j.bank || { w: 0, b: 0 } };
    if (!Array.isArray(s.pending.w) || !Array.isArray(s.pending.b)) throw new Error('bad save');
    for (const [id, type, color, x, y, lvl, acted, frozen, lifeSpent] of j.pieces) {
      if (!TYPES[type] || !inside(s, x, y)) throw new Error('bad save');
      const p = { id, type, color, x, y, lvl: lvl || 0, acted: !!acted, frozen: !!frozen, lifeSpent: !!lifeSpent };
      s.pieces.push(p);
      s.cells[idx(s, x, y)] = p;
    }
    return s;
  }

  root.Evo = { TYPES, UPGRADES, SIZES, MOVE_PAY, CAPTURE_PAY, POCKET_H, newGame, pocket, inside, inPocket, freePocketSquares,
    moves, shots, move, shoot, buy, place, endTurn, attacked, pieceAt, other, actionsFor, hasUpgrade, nextUpgrade,
    toJSON, fromJSON, hasAnyMove };
  if (typeof module !== 'undefined') module.exports = root.Evo;
})(typeof window !== 'undefined' ? window : globalThis);
