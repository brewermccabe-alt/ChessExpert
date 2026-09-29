/* Simple greedy opponent for Evolution Chess. Picks one action at a time:
 * evolve if it can, otherwise the best-scoring move (captures, safety, advancing on the enemy King). */
(function (root) {
  'use strict';
  const E = typeof module !== 'undefined' ? require('./game.js') : root.Evo;

  const cheb = (a, b) => Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));

  function chooseEvolution(p) {
    const to = E.EVOLVE[p.type].to;
    return to[Math.floor(Math.random() * to.length)];
  }

  function chooseAction(s) {
    const me = s.turn, foe = E.other(me);
    const mine = s.pieces.filter((p) => p.color === me);

    for (const p of mine) if (E.canEvolve(p)) return { type: 'evolve', id: p.id, to: chooseEvolution(p) };

    const king = s.pieces.find((p) => p.color === foe && p.type === 'king');
    let best = null;
    for (const p of mine) {
      if (p.acted) continue;
      const val = E.TYPES[p.type].value;
      const wasThreatened = E.attacked(s, p.x, p.y, foe);
      const distBefore = king ? cheb(p, king) : 0;
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
        if (p.type === 'pawn' && !victim && Math.floor((p.steps + Math.abs(m.y - p.y)) / 6) > Math.floor(p.steps / 6)) score += 1.5;
        score += Math.random() * 0.5;
        if (!best || score > best.score) best = { score, id: p.id, x: m.x, y: m.y };
      }
    }
    if (!best || best.score < -6) return { type: 'end' };
    return { type: 'move', id: best.id, x: best.x, y: best.y };
  }

  const api = { chooseAction };
  root.EvoAI = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
