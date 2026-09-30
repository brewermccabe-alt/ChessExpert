/* Computer opponent for Evolution Chess with an adjustable "ELO".
 *
 * The ELO is on the bot's own scale: 400 is a bot that plays completely at random, and each 100 points is worth what
 * the standard ELO formula says (100 points is about a 64% score, 200 points about 76%). The table below came from a
 * round-robin of self-play games on the 8x8 board (fitted with a Bradley-Terry model), so the DIFFERENCES between
 * settings are measured. The absolute numbers are not comparable to human or engine ratings.
 *
 * Up to 1500 (the heuristic bot) strength comes from three things that change with the setting:
 *   - noise: random error added to every move's score (large at low ELO, tiny at high ELO);
 *   - blunders: a chance to play a random legal action (rare at high ELO);
 *   - foresight: at the bottom it just grabs material and advances; higher up it looks one reply ahead (it sees the
 *     best capture the opponent would then have) and spots checkmate in one; higher still it also weighs recaptures,
 *     so it understands even trades and is not scared of defended pieces.
 * Above 1500 (8x8 board only) it runs a real alpha-beta search, one to four moves deep (see SEARCH_LEVELS). ELOs in
 * between blend the two neighbouring levels move by move. On the big boards several actions make up a turn, so the
 * search does not apply there and the bot plays at 1500 at most.
 * Pass { elo, rng } to chooseAction. rng lets tests make it deterministic. */
(function (root) {
  'use strict';
  const E = typeof module !== 'undefined' ? require('./game.js') : root.Evo;

  const MIN_ELO = 400, MAX_ELO = 2400, DEFAULT_ELO = 1000, TOP_HEURISTIC_ELO = 1500;
  /* Levels above the heuristic bot use a real look-ahead search (8x8 board only; the big boards play at 1500 at most).
   * Their ratings come from the same kind of round-robin, relative to the heuristic bot's top setting (1500): the fit
   * gave +208, +509, +757 and +928, rounded here. Values in between blend the two neighbouring levels move by move. */
  const SEARCH_LEVELS = [
    { elo: 1700, depth: 1, nodes: 30000 },
    { elo: 2000, depth: 2, nodes: 30000 },
    { elo: 2250, depth: 3, nodes: 60000 },
    { elo: 2400, depth: 4, nodes: 100000 },
  ];
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
    return Object.assign({ elo }, paramsForSkill(skillFromElo(Math.min(elo, TOP_HEURISTIC_ELO))));
  }

  /* Who plays at this ELO on the 8x8 board: the heuristic bot up to 1500; above that a blend, move by move, of the two
   * bots either side (the heuristic bot's top setting counts as level zero). `lower` is null between 1500 and the first
   * search level. pUpper is the chance that the upper one plays a given move. Returns { lower, upper, pUpper }. */
  function planFor(elo) {
    elo = clamp(Number.isFinite(elo) ? elo : DEFAULT_ELO, MIN_ELO, MAX_ELO);
    if (elo <= TOP_HEURISTIC_ELO) return { lower: null, upper: null, pUpper: 0 };
    const hi = SEARCH_LEVELS.findIndex((l) => l.elo >= elo);
    const upper = SEARCH_LEVELS[hi], lower = hi > 0 ? SEARCH_LEVELS[hi - 1] : null;
    const base = lower ? lower.elo : TOP_HEURISTIC_ELO;
    return { lower, upper, pUpper: (elo - base) / (upper.elo - base) };
  }

  function tierName(elo) {
    if (elo <= 500) return 'Random-ish';
    if (elo < 800) return 'Beginner';
    if (elo < 1100) return 'Casual';
    if (elo < 1400) return 'Intermediate';
    if (elo < 1700) return 'Strong';
    if (elo < 2000) return 'Advanced';
    if (elo < 2300) return 'Expert';
    return 'Maximum';
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

  /* ---------------------------------------------------------------------------------------------------------------
   * Deeper search for the chess board (8x8): alpha-beta with a capture-only extension. It plays out the real piece
   * abilities (upgraded moves and shots), treats capturing the King as the end of the game, and detects checkmate and
   * stalemate. Search ignores things that do not change tactics much: freezing, queued upgrades and the Knight's life.
   * ------------------------------------------------------------------------------------------------------------- */
  const MATE = 100000;
  const VAL = { pawn: 100, knight: 320, bishop: 330, rook: 500, queen: 900, king: 0 };
  const UPGRADE_VALUE = 35;      // each upgrade level is worth about a third of a pawn
  const PENDING_WEIGHT = 0.5;    // a captured piece waiting to return is worth about half its value (it costs a turn to place)

  function evaluate(s, color) {
    let score = 0;
    for (const p of s.pieces) {
      let v = VAL[p.type] + UPGRADE_VALUE * p.lvl;
      if (p.type === 'pawn') {
        v += (p.color === 'w' ? s.h - 2 - p.y : p.y - 1) * 6;                       // pawns are worth more the further they go
      } else if (p.type !== 'king') {
        v += 14 - 5 * Math.max(Math.abs(p.x - (s.size - 1) / 2), Math.abs(p.y - (s.h - 1) / 2)); // pieces like the centre
      } else if ((p.x <= 2 || p.x >= s.size - 3) && p.y === (p.color === 'w' ? s.h - 1 : 0)) {
        v += 30;                                                                    // a King tucked into the corner (castled)
      }
      score += p.color === color ? v : -v;
    }
    for (const c of ['w', 'b']) for (const t of s.pending[c]) { const v = VAL[t] * PENDING_WEIGHT; score += c === color ? v : -v; }
    return score;
  }

  /* Play an action on the board in place. act = { p, m, shot } or { place: { x, y, kind } }. Returns what is needed to undo it. */
  function make(s, act) {
    if (act.place) {
      const { x, y, kind } = act.place, color = s.turn;
      const piece = { id: -2, type: kind, color, x, y, lvl: 0, acted: false, frozen: false, lifeSpent: false, moved: true, upgrading: false };
      s.pieces.push(piece); s.cells[y * s.size + x] = piece;
      s.pending[color].splice(s.pending[color].indexOf(kind), 1);
      return { place: piece, color, kind };
    }
    const { p, m } = act, u = { act, p };
    const i1 = m.y * s.size + m.x;
    const vIdx = act.shot ? i1 : (m.ep ? p.y * s.size + m.x : i1);
    u.victim = s.cells[vIdx]; u.vIdx = vIdx;
    if (u.victim) { u.vi = s.pieces.indexOf(u.victim); s.pieces.splice(u.vi, 1); s.cells[vIdx] = null; s.pending[u.victim.color].push(u.victim.type); }
    if (!act.shot) {
      u.ox = p.x; u.oy = p.y;
      s.cells[p.y * s.size + p.x] = null; s.cells[i1] = p; p.x = m.x; p.y = m.y;
      if (s.chess && p.type === 'pawn' && m.y === (p.color === 'w' ? 0 : s.h - 1)) { u.promo = { type: p.type, lvl: p.lvl }; p.type = 'queen'; p.lvl = 0; }
      if (m.castle) {
        const r = s.cells[m.castle.rookFrom.y * s.size + m.castle.rookFrom.x];
        u.rook = { r, fx: r.x, fy: r.y };
        s.cells[r.y * s.size + r.x] = null; r.x = m.castle.rookTo.x; r.y = m.castle.rookTo.y; s.cells[r.y * s.size + r.x] = r;
      }
    }
    return u;
  }

  function unmake(s, u) {
    if (u.place) {
      s.pieces.splice(s.pieces.indexOf(u.place), 1); s.cells[u.place.y * s.size + u.place.x] = null;
      s.pending[u.color].push(u.kind);
      return;
    }
    const { p, act } = u, m = act.m;
    if (!act.shot) {
      if (u.rook) { s.cells[u.rook.r.y * s.size + u.rook.r.x] = null; u.rook.r.x = u.rook.fx; u.rook.r.y = u.rook.fy; s.cells[u.rook.r.y * s.size + u.rook.r.x] = u.rook.r; }
      if (u.promo) { p.type = u.promo.type; p.lvl = u.promo.lvl; }
      s.cells[m.y * s.size + m.x] = null; p.x = u.ox; p.y = u.oy; s.cells[p.y * s.size + p.x] = p;
    }
    if (u.victim) { s.pending[u.victim.color].pop(); s.cells[u.vIdx] = u.victim; s.pieces.splice(u.vi, 0, u.victim); }
  }

  /* All pseudo-legal actions for `color` (a move that leaves the King capturable is caught by the search itself). */
  function generate(s, color, capturesOnly) {
    const acts = [];
    for (const q of s.pieces) {
      if (q.color !== color) continue;
      for (const m of E.moves(s, q)) {
        if (capturesOnly && !m.capture) continue;
        acts.push({ p: q, m, shot: false });
      }
      for (const t of E.shots(s, q)) acts.push({ p: q, m: t, shot: true });
    }
    for (const a of acts) { // move ordering: most valuable victim first, then least valuable attacker, promotions
      const vic = a.m.capture ? (a.m.ep ? 100 : VAL[s.cells[a.m.y * s.size + a.m.x].type] || 20000) : 0;
      const ord = vic ? 10000 + vic * 10 - VAL[a.p.type] / 10 : 0;
      a.order = ord + (a.p.type === 'pawn' && a.m.y === (color === 'w' ? 0 : s.h - 1) ? 800 : 0);
    }
    acts.sort((x, y) => y.order - x.order);
    return acts;
  }

  const victimOf = (s, a) => (a.m.capture ? (a.m.ep ? null : s.cells[a.m.y * s.size + a.m.x]) : null);

  function quiesce(s, color, alpha, beta, ply, ctx, qd) {
    if (++ctx.nodes > ctx.cap) { ctx.aborted = true; return 0; }
    const caps = generate(s, color, true);
    for (const a of caps) { const vic = victimOf(s, a); if (vic && vic.type === 'king') return MATE - ply; } // must come before "stand pat"
    const stand = evaluate(s, color);
    if (qd >= 4) return stand;
    if (stand >= beta) return stand;
    if (stand > alpha) alpha = stand;
    for (const a of caps) {
      const u = make(s, a);
      const score = -quiesce(s, E.other(color), -beta, -alpha, ply + 1, ctx, qd + 1);
      unmake(s, u);
      if (ctx.aborted) return 0;
      if (score >= beta) return score;
      if (score > alpha) alpha = score;
    }
    return alpha;
  }

  function negamax(s, color, depth, alpha, beta, ply, ctx) {
    if (depth <= 0) return quiesce(s, color, alpha, beta, ply, ctx, 0);
    if (++ctx.nodes > ctx.cap) { ctx.aborted = true; return 0; }
    let best = -Infinity, legal = 0;
    for (const a of generate(s, color, false)) {
      const vic = victimOf(s, a);
      if (vic && vic.type === 'king') return MATE - ply;   // the previous move left the King capturable
      const u = make(s, a);
      const score = -negamax(s, E.other(color), depth - 1, -beta, -alpha, ply + 1, ctx);
      unmake(s, u);
      if (ctx.aborted) return 0;
      if (score !== -(MATE - (ply + 1))) legal++;           // this move did not lose the King at once
      if (score > best) best = score;
      if (best > alpha) alpha = best;
      if (alpha >= beta) break;
    }
    if (legal === 0) {                       // every move loses the King at once: checkmate, or stalemate if not in check
      const k = s.pieces.find((q) => q.color === color && q.type === 'king');
      return k && E.attacked(s, k.x, k.y, E.other(color)) ? -MATE + ply : 0;
    }
    return best;
  }

  /* Iterative deepening at the root over the real legal actions. Returns the best action found, or null. */
  function searchBest(s, level, rnd) {
    const me = s.turn, cands = [];
    for (const p of s.pieces) {
      if (p.color !== me || p.acted) continue;
      for (const m of E.legalMoves(s, p)) cands.push({ p, m, shot: false });
      for (const t of E.legalShots(s, p)) cands.push({ p, m: t, shot: true });
    }
    if (s.pending[me].length && E.canPlaceNow(s, me)) { // placing a returned piece is an action too: try a few good squares
      const kind = s.pending[me][0], free = E.freePocketSquares(s, me);
      free.sort((a, b) => Math.abs(a.x - (s.size - 1) / 2) - Math.abs(b.x - (s.size - 1) / 2));
      for (const f of free.slice(0, 3)) cands.push({ place: { x: f.x, y: f.y, kind } });
    }
    if (!cands.length) return null;
    // Search from a clean board: no queued freezes or en passant beyond the root.
    const frozen = s.pieces.filter((p) => p.frozen), ep = s.ep;
    for (const p of frozen) p.frozen = false;
    s.ep = null;
    const ctx = { nodes: 0, cap: level.nodes, aborted: false };
    const MARGIN = 10;   // search each move exactly only if it could be within 10 points of the best so far
    let result = null;
    try {
      for (let d = 1; d <= level.depth; d++) {
        let alpha = -Infinity;
        const scored = [];
        for (const c of cands) {
          const u = make(s, c);
          const score = -negamax(s, E.other(me), d - 1, -Infinity, -(alpha - MARGIN), 1, ctx);
          unmake(s, u);
          if (ctx.aborted) break;
          const exact = score > alpha - MARGIN;          // otherwise `score` is only a bound: the move is clearly worse
          scored.push({ c, score, exact });
          if (exact && score > alpha) alpha = score;
        }
        if (ctx.aborted) break;
        const near = scored.filter((x) => x.exact && x.score >= alpha - 3);     // moves that are equally good: choose one at random
        result = { act: near[Math.floor(rnd() * near.length)].c, score: alpha, depth: d };
        scored.sort((x, y) => y.score - x.score);                                // the best move so far is searched first next time
        for (let i = 0; i < scored.length; i++) cands[i] = scored[i].c;
        if (Math.abs(alpha) > MATE / 2) break;                                    // a forced mate is found
      }
    } finally {
      for (const p of frozen) p.frozen = true;
      s.ep = ep;
    }
    if (!result) return null;
    const c = result.act;
    if (c.place) return { type: 'place', x: c.place.x, y: c.place.y, kind: c.place.kind };
    return { type: c.shot ? 'shoot' : 'move', id: c.p.id, x: c.m.x, y: c.m.y };
  }

  function chooseAction(s, opts) {
    const rnd = (opts && opts.rng) || Math.random;
    const me = s.turn, foe = E.other(me);
    const mine = s.pieces.filter((p) => p.color === me);

    // Which bot plays this move? A search level (chess board only), or the heuristic bot at some skill.
    let search = opts && opts.search;
    let P;
    if (opts && opts.skill != null) P = paramsForSkill(opts.skill);
    else {
      const elo = opts && opts.elo != null ? opts.elo : DEFAULT_ELO;
      if (elo > TOP_HEURISTIC_ELO && s.chess) {
        const plan = planFor(elo);
        search = rnd() < plan.pUpper ? plan.upper : plan.lower;   // the blend: this move comes from one of the two neighbours
      }
      P = paramsFor(elo);
    }

    if (search && s.chess) {                       // a searching level: spend money first, then look ahead for the best action
      let dear = null;
      for (const p of mine) {
        const u = E.nextUpgrade(p);
        if (u && s.bank[me] >= u.cost && (!dear || u.cost - (p.type === 'king' ? 200 : 0) > dear.cost)) dear = { id: p.id, cost: u.cost - (p.type === 'king' ? 200 : 0) };
      }
      if (dear) return { type: 'buy', id: dear.id };
      const found = searchBest(s, search, rnd);
      if (found) return found;
    }

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

  const api = { _search: { make, unmake, negamax, quiesce, generate }, searchBest, evaluate, chooseAction, paramsFor, paramsForSkill, skillFromElo, planFor, tierName, SEARCH_LEVELS, TOP_HEURISTIC_ELO, MIN_ELO, MAX_ELO, DEFAULT_ELO };
  root.EvoAI = api;
  if (typeof module !== 'undefined') module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
