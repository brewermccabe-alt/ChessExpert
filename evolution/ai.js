/* Computer opponent for Evolution Chess with an adjustable "ELO".
 *
 * The ELO is on the bot's own scale: 400 is a bot that plays completely at random, and each 100 points is worth what
 * the standard ELO formula says (100 points is about a 64% score, 200 points about 76%). The table below came from a
 * round-robin of self-play games on the 8x8 board (fitted with a Bradley-Terry model), so the DIFFERENCES between
 * settings are measured. The absolute numbers are not comparable to human or engine ratings. Strength comes from three things that change with the setting:
 *   - noise: random error added to every move's score (large at low ELO, tiny at high ELO);
 *   - blunders: a chance to play a random legal action (rare at high ELO);
 *   - foresight: at the bottom it just grabs material and advances; higher up it looks one reply ahead (it sees the
 *     best capture the opponent would then have) and spots checkmate in one; higher still it also weighs recaptures,
 *     so it understands even trades and is not scared of defended pieces.
 * Pass { elo, rng } to chooseAction. rng lets tests make it deterministic. */
(function (root) {
  'use strict';
  const E = typeof module !== 'undefined' ? require('./game.js') : root.Evo;

  const MIN_ELO = 400, MAX_ELO = 1500, DEFAULT_ELO = 1000;
  /* [ELO, skill] pairs from the calibration. Skill 0 is random play; above ~0.7 the bot stops getting stronger. */
  const SKILL_TABLE = [[400, 0], [500, 0.046], [600, 0.092], [700, 0.152], [800, 0.21], [900, 0.253], [1000, 0.296], [1100, 0.336],
    [1200, 0.377], [1300, 0.441], [1400, 0.556], [1500, 0.693]];
  const cheb = (a, b) => Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  /* Skill u in [0, 1]: 0 plays completely at random, 1 is the strongest the bot can be. */
  function paramsForSkill(u) {
    u = clamp(u, 0, 1);
    const w = Math.pow(1 - u, 1.2);
    return { skill: u, noise: 0.3 + 14 * w, blunder: Math.pow(1 - u, 3), lookahead: u >= 0.33, exchanges: u >= 0.67, buyChance: 0.5 + 0.5 * u };
  }

  function skillFromElo(elo) {
    elo = clamp(elo, MIN_ELO, MAX_ELO);
    for (let i = 0; i < SKILL_TABLE.length - 1; i++) {
      const [e0, s0] = SKILL_TABLE[i], [e1, s1] = SKILL_TABLE[i + 1];
      if (elo >= e0 && elo <= e1) return s0 + ((elo - e0) / (e1 - e0)) * (s1 - s0);
    }
    return SKILL_TABLE[SKILL_TABLE.length - 1][1];
  }

  function paramsFor(elo) {
    elo = clamp(Math.round(Number.isFinite(elo) ? elo : DEFAULT_ELO), MIN_ELO, MAX_ELO);
    return Object.assign({ elo }, paramsForSkill(skillFromElo(elo)));
  }

  function tierName(elo) {
    if (elo <= 500) return 'Random-ish';
    if (elo < 800) return 'Beginner';
    if (elo < 1100) return 'Casual';
    if (elo < 1400) return 'Intermediate';
    return 'Strongest';
  }

  /* Temporarily play move m for piece p (removing any captured piece from the board and the piece list), run fn(),
   * then restore everything. */
  function withMove(s, p, m, fn) {
    const i0 = p.y * s.size + p.x, i1 = m.y * s.size + m.x, ox = p.x, oy = p.y;
    const vIdx = m.ep ? oy * s.size + m.x : i1; // en passant captures the pawn beside the mover
    const victim = s.cells[vIdx];
    const vi = victim ? s.pieces.indexOf(victim) : -1;
    if (victim) s.pieces.splice(vi, 1);
    s.cells[vIdx] = null;
    s.cells[i0] = null; s.cells[i1] = p; p.x = m.x; p.y = m.y;
    try { return fn(); } finally {
      s.cells[i1] = null; s.cells[vIdx] = victim; s.cells[i0] = p; p.x = ox; p.y = oy;
      if (victim) s.pieces.splice(vi, 0, victim);
    }
  }

  /* The value of the best capture `color` could make right now (0 if none). */
  function bestCapture(s, color) {
    let best = 0;
    for (const q of s.pieces) {
      if (q.color !== color) continue;
      for (const m of (s.chess ? E.legalMoves(s, q) : E.moves(s, q))) {
        if (!m.capture) continue;
        const v = m.ep ? 1 : E.TYPES[E.pieceAt(s, m.x, m.y).type].value;
        if (v > best) best = v;
      }
      for (const t of (s.chess ? E.legalShots(s, q) : E.shots(s, q))) {
        const v = E.TYPES[E.pieceAt(s, t.x, t.y).type].value;
        if (v > best) best = v;
      }
    }
    return best;
  }

  /* Like bestCapture, but for a capture by a moving piece it counts the recapture: a queen taking a defended pawn is
   * worth 1 - 9, i.e. nothing. (`me` is the side that would recapture.) */
  function bestCaptureNet(s, color, me) {
    let best = 0;
    for (const q of s.pieces) {
      if (q.color !== color) continue;
      const qv = E.TYPES[q.type].value;
      for (const m of (s.chess ? E.legalMoves(s, q) : E.moves(s, q))) {
        if (!m.capture) continue;
        const v = m.ep ? 1 : E.TYPES[E.pieceAt(s, m.x, m.y).type].value;
        if (v <= best) continue;
        const recaptured = withMove(s, q, m, () => E.attacked(s, m.x, m.y, me));
        const net = recaptured ? v - qv : v;
        if (net > best) best = net;
      }
      for (const t of (s.chess ? E.legalShots(s, q) : E.shots(s, q))) { // a shot leaves the shooter where it was
        const v = E.TYPES[E.pieceAt(s, t.x, t.y).type].value;
        if (v > best) best = v;
      }
    }
    return best;
  }

  function chooseAction(s, opts) {
    const P = opts && opts.skill != null ? paramsForSkill(opts.skill) : paramsFor(opts && opts.elo != null ? opts.elo : DEFAULT_ELO);
    const rnd = (opts && opts.rng) || Math.random;
    const me = s.turn, foe = E.other(me);
    const mine = s.pieces.filter((p) => p.color === me);

    if (s.pending[me].length && !(s.chess && E.inCheck(s, me))) { // no placing while in check
      const free = E.freePocketSquares(s, me);
      if (free.length) {
        const f = free[Math.floor(rnd() * free.length)];
        return { type: 'place', x: f.x, y: f.y, kind: s.pending[me][0] };
      }
    }

    // Spend money when an upgrade is affordable (dearest first; the King's arm is a low priority).
    let buy = null;
    for (const p of mine) {
      const u = E.nextUpgrade(p);
      if (!u || s.bank[me] < u.cost) continue;
      const score = u.cost + rnd() * 60 - (p.type === 'king' ? 200 : 0);
      if (!buy || score > buy.score) buy = { score, id: p.id };
    }
    if (buy && rnd() < P.buyChance) return { type: 'buy', id: buy.id };

    const king = s.pieces.find((p) => p.color === foe && p.type === 'king');
    const candidates = [];
    for (const p of mine) {
      if (p.acted) continue;
      const distBefore = king ? cheb(p, king) : 0;

      // Stationary captures: the piece does not move.
      for (const t of E.legalShots(s, p)) {
        const victim = E.pieceAt(s, t.x, t.y);
        candidates.push({ score: E.TYPES[victim.type].value * 10 + 4 + (rnd() - 0.5) * 2 * P.noise, type: 'shoot', id: p.id, x: t.x, y: t.y });
      }

      for (const m of E.legalMoves(s, p)) {
        const victim = m.capture ? (m.ep ? { type: 'pawn' } : E.pieceAt(s, m.x, m.y)) : null;
        let score = victim ? E.TYPES[victim.type].value * 10 : 0;

        if (P.lookahead) {
          // Play it out one reply deep: what is the best capture the opponent would then have?
          score += withMove(s, p, m, () => {
            let adj = -(P.exchanges ? bestCaptureNet(s, foe, me) : bestCapture(s, foe)) * 10;
            if (s.chess) {
              if (E.inCheck(s, foe)) adj += E.hasLegalAction(s, foe) ? 3 : 1000;   // check, or checkmate
              else if (!E.hasLegalAction(s, foe)) adj -= 200;                        // do not stalemate them
            }
            return adj;
          });
        }

        if (p.type === 'king') {
          score -= 1;
        } else if (king) {
          score += (distBefore - cheb(m, king)) * (p.type === 'pawn' ? 0.6 : 0.4);
        }
        if (m.ep) score += 10; // en passant takes a pawn
        if (s.chess && p.type === 'pawn' && m.y === (me === 'w' ? 0 : s.h - 1)) score += 60; // promotion
        score += (rnd() - 0.5) * 2 * P.noise;
        candidates.push({ score, type: 'move', id: p.id, x: m.x, y: m.y });
      }
    }

    if (!candidates.length) return { type: 'end' };
    let pick;
    if (rnd() < P.blunder) {
      pick = candidates[Math.floor(rnd() * candidates.length)];       // a careless move
    } else {
      pick = candidates[0];
      for (const c of candidates) if (c.score > pick.score) pick = c;
    }
    // On the big boards passing is allowed when every move loses material. On the chess board it is not.
    if (!s.chess && pick.score < -6 && P.lookahead) return { type: 'end' };
    return { type: pick.type, id: pick.id, x: pick.x, y: pick.y };
  }

  const api = { chooseAction, paramsFor, paramsForSkill, skillFromElo, tierName, MIN_ELO, MAX_ELO, DEFAULT_ELO };
  root.EvoAI = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
