/* Simple greedy opponent for Evolution Chess. Picks one action at a time: place a waiting piece, buy an upgrade,
 * or the best-scoring move/shot (captures, safety, advancing on the enemy King). */
(function (root) {
  'use strict';
  const E = typeof module !== 'undefined' ? require('./game.js') : root.Evo;

  const cheb = (a, b) => Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));

  function chooseAction(s) {
    const me = s.turn, foe = E.other(me);
    const mine = s.pieces.filter((p) => p.color === me);

    if (s.pending[me].length) {
      const free = E.freePocketSquares(s, me);
      if (free.length) {
        const f = free[Math.floor(Math.random() * free.length)];
        return { type: 'place', x: f.x, y: f.y, kind: s.pending[me][0] };
      }
    }

    // Spend money as soon as an upgrade is affordable (dearest first; the King's arm is a low priority).
    let buy = null;
    for (const p of mine) {
      const u = E.nextUpgrade(p);
      if (!u || s.bank[me] < u.cost) continue;
      const score = u.cost + Math.random() * 60 - (p.type === 'king' ? 200 : 0);
      if (!buy || score > buy.score) buy = { score, id: p.id };
    }
    if (buy) return { type: 'buy', id: buy.id };

    const king = s.pieces.find((p) => p.color === foe && p.type === 'king');
    let best = null;
    for (const p of mine) {
      if (p.acted) continue;
      const val = E.TYPES[p.type].value;
      const wasThreatened = E.attacked(s, p.x, p.y, foe);
      const distBefore = king ? cheb(p, king) : 0;

      // Stationary captures: safe, since the piece does not move.
      for (const t of E.shots(s, p)) {
        const victim = E.pieceAt(s, t.x, t.y);
        const score = E.TYPES[victim.type].value * 10 + 4 + Math.random() * 0.5;
        if (!best || score > best.score) best = { score, type: 'shoot', id: p.id, x: t.x, y: t.y };
      }

      for (const m of E.moves(s, p)) {
        const victim = m.capture ? E.pieceAt(s, m.x, m.y) : null;
        let score = victim ? E.TYPES[victim.type].value * 10 : 0;

        // Temporarily make the move so the danger check sees the new position.
        const idxFrom = p.y * s.size + p.x, idxTo = m.y * s.size + m.x;
        const ox = p.x, oy = p.y;
        s.cells[idxFrom] = null; s.cells[idxTo] = p; p.x = m.x; p.y = m.y;
        const danger = E.attacked(s, m.x, m.y, foe);
        s.cells[idxTo] = victim; s.cells[idxFrom] = p; p.x = ox; p.y = oy;

        if (danger) score -= val * 9;
        else if (wasThreatened) score += val * 6;

        if (p.type === 'king') {
          score -= 1;
        } else if (king) {
          score += (distBefore - cheb(m, king)) * (p.type === 'pawn' ? 0.6 : 0.4);
        }
        score += Math.random() * 0.5;
        if (!best || score > best.score) best = { score, type: 'move', id: p.id, x: m.x, y: m.y };
      }
    }
    if (!best || best.score < -6) return { type: 'end' };
    return { type: best.type, id: best.id, x: best.x, y: best.y };
  }

  const api = { chooseAction };
  root.EvoAI = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
