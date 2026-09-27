/* Coach logic: follows the game seen on screen, explains engine moves, and finds opening info. */
(function () {
  const START_BOARD = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
  const NAMES = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };
  const VALUE = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 100 };
  const FILES = 'abcdefgh';

  const boardOf = (fen) => fen.split(' ')[0];
  const key2 = (fen) => fen.split(' ').slice(0, 2).join(' ');

  // Rotate a placement 180°, i.e. what the board reads as when the orientation is wrong.
  function rotate(placement) {
    return placement.split('/').reverse().map((r) => r.split('').reverse().join('')).join('/');
  }

  /* ---------- game tracking ---------- */

  class Tracker {
    constructor() {
      this.reset();
    }

    reset() {
      this.game = null;
      this.lastMove = null;
    }

    fen() {
      return this.game ? this.game.fen() : null;
    }

    /**
     * Feed a placement read from the screen. bottom is the colour at the bottom of the board, used
     * as the side to move when a position appears out of nowhere.
     * Returns 'same', 'moved' (one or two moves were played) or 'new' (a fresh position).
     */
    update(placement, bottom) {
      const g = this.game;
      if (g && boardOf(g.fen()) === placement) return 'same';
      if (g) {
        const found = findMoves(g, placement);
        if (found) {
          for (const m of found) this.lastMove = g.move(m);
          return 'moved';
        }
        // Maybe the side to move was guessed wrong when the position first appeared.
        if (!g.history().length) {
          const alt = new Chess(buildFen(boardOf(g.fen()), g.turn() === 'w' ? 'b' : 'w'));
          const altFound = alt.turn() !== g.turn() && findMoves(alt, placement);
          if (altFound) {
            this.game = alt;
            for (const m of altFound) this.lastMove = alt.move(m);
            return 'moved';
          }
        }
      }
      this.setPosition(placement, placement === START_BOARD ? 'w' : bottom);
      return 'new';
    }

    setPosition(placement, turn) {
      this.game = new Chess(buildFen(placement, turn));
      this.lastMove = null;
    }

    // Flip the side to move of the current position (for when the guess was wrong).
    switchTurn() {
      if (!this.game) return;
      const placement = boardOf(this.game.fen());
      this.setPosition(placement, this.game.turn() === 'w' ? 'b' : 'w');
    }

    history() {
      return this.game ? this.game.history({ verbose: true }) : [];
    }
  }

  // One move, or two in a row (a fast reply between two screen reads), that turn the game into placement.
  function findMoves(g, placement) {
    const first = g.moves({ verbose: true });
    for (const m1 of first) {
      g.move(m1);
      const hit = boardOf(g.fen()) === placement;
      g.undo();
      if (hit) return [m1];
    }
    for (const m1 of first) {
      g.move(m1);
      for (const m2 of g.moves({ verbose: true })) {
        g.move(m2);
        const hit = boardOf(g.fen()) === placement;
        g.undo();
        if (hit) { g.undo(); return [m1, m2]; }
      }
      g.undo();
    }
    return null;
  }

  // A legal FEN for a placement: castling rights where king and rook are still at home, and the
  // side to move switched if the other side would otherwise be in check.
  function buildFen(placement, turn) {
    const rows = placement.split('/').map((r) => r.replace(/\d/g, (d) => '.'.repeat(+d)));
    const at = (sq) => rows[8 - +sq[1]][FILES.indexOf(sq[0])];
    let castling = '';
    if (at('e1') === 'K') {
      if (at('h1') === 'R') castling += 'K';
      if (at('a1') === 'R') castling += 'Q';
    }
    if (at('e8') === 'k') {
      if (at('h8') === 'r') castling += 'k';
      if (at('a8') === 'r') castling += 'q';
    }
    const make = (t) => `${placement} ${t} ${castling || '-'} - 0 1`;
    const other = turn === 'w' ? 'b' : 'w';
    try {
      // If the side that just moved is in check, it must actually be their turn.
      const probe = new Chess(make(other));
      if (probe.inCheck()) return make(other);
    } catch (e) { /* fall through */ }
    return make(turn);
  }

  /* ---------- evaluation text ---------- */

  // Engine line score → centipawns from White's point of view (mates as large numbers).
  function whiteCp(line, turn) {
    const sign = turn === 'w' ? 1 : -1;
    if (line.mate != null) return sign * (line.mate > 0 ? 10000 - line.mate : -10000 - line.mate);
    return sign * (line.cp || 0);
  }

  function fmtScore(line, turn) {
    const sign = turn === 'w' ? 1 : -1;
    if (line.mate != null) {
      const m = line.mate * sign;
      return m > 0 ? `#${m}` : `#-${-m}`;
    }
    const cp = (line.cp || 0) * sign;
    return (cp > 0 ? '+' : '') + (cp / 100).toFixed(2);
  }

  function verdict(line, turn) {
    const cp = whiteCp(line, turn);
    if (Math.abs(cp) >= 9000) return cp > 0 ? 'White is delivering mate' : 'Black is delivering mate';
    const a = Math.abs(cp), side = cp > 0 ? 'White' : 'Black';
    if (a < 30) return 'The position is equal';
    if (a < 80) return `${side} is slightly better`;
    if (a < 200) return `${side} is better`;
    if (a < 500) return `${side} is clearly better`;
    return `${side} is winning`;
  }

  // Eval bar fill for White, 0..100.
  function barPercent(line, turn) {
    const cp = whiteCp(line, turn);
    return 50 + 50 * (2 / (1 + Math.exp(-0.004 * cp)) - 1);
  }

  function pvSan(fen, pv, max = 8) {
    const c = new Chess(fen);
    const out = [];
    for (const u of pv.slice(0, max)) {
      let m;
      try { m = c.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] }); } catch (e) { break; }
      if (!m) break;
      out.push({ san: m.san, color: m.color, num: +c.fen().split(' ')[5] - (m.color === 'b' ? 1 : 0) });
    }
    return out;
  }

  function fmtLine(fen, pv, max) {
    const moves = pvSan(fen, pv, max);
    return moves.map((m, i) => (m.color === 'w' ? `${m.num}.${m.san}` : i === 0 ? `${m.num}…${m.san}` : m.san)).join(' ');
  }

  /* ---------- explanations ---------- */

  function withTurn(fen, turn) {
    const f = fen.split(' ');
    f[1] = turn;
    f[3] = '-';
    return f.join(' ');
  }

  // Is the piece on sq attacked by `by`, and what's the cheapest attacker?
  function cheapestAttacker(fen, sq, by) {
    let c;
    try { c = new Chess(withTurn(fen, by)); } catch (e) { return null; }
    let best = null;
    for (const m of c.moves({ verbose: true })) {
      if (m.to === sq && m.captured && (!best || VALUE[m.piece] < VALUE[best])) best = m.piece;
    }
    return best;
  }

  // Pieces of `victim` that `by` could win right now if it were their move.
  function threats(fen, by) {
    let c;
    try { c = new Chess(withTurn(fen, by)); } catch (e) { return []; }
    const victim = by === 'w' ? 'b' : 'w';
    const out = [];
    for (const m of c.moves({ verbose: true })) {
      if (!m.captured || m.captured === 'k') continue;
      const defended = isDefended(fen, m.to, victim);
      const gain = defended ? VALUE[m.captured] - VALUE[m.piece] : VALUE[m.captured];
      if (gain > 0) out.push({ move: m, gain });
    }
    out.sort((a, b) => b.gain - a.gain);
    return out;
  }

  // Could `side` recapture on sq? Tested by putting an enemy knight there.
  function isDefended(fen, sq, side) {
    try {
      const c = new Chess(withTurn(fen, side));
      c.remove(sq);
      c.put({ type: 'n', color: side === 'w' ? 'b' : 'w' }, sq);
      const d = new Chess(withTurn(c.fen(), side));
      return d.moves({ verbose: true }).some((m) => m.to === sq && m.captured);
    } catch (e) {
      return false;
    }
  }

  function isPassed(c, sq, color) {
    const f = FILES.indexOf(sq[0]), r = +sq[1];
    const dir = color === 'w' ? 1 : -1;
    for (let df = -1; df <= 1; df++) {
      const ff = f + df;
      if (ff < 0 || ff > 7) continue;
      for (let rr = r + dir; rr >= 1 && rr <= 8; rr += dir) {
        const p = c.get(FILES[ff] + rr);
        if (p && p.type === 'p' && p.color !== color) return false;
      }
    }
    return true;
  }

  function fileStatus(c, file, color) {
    let own = false, enemy = false;
    for (let r = 1; r <= 8; r++) {
      const p = c.get(file + r);
      if (p && p.type === 'p') { if (p.color === color) own = true; else enemy = true; }
    }
    return own ? 'closed' : enemy ? 'half-open' : 'open';
  }

  /**
   * Plain-language reasons for a move. lines are the engine lines for the position (best first).
   */
  function explain(fen, uci, lines) {
    const before = new Chess(fen);
    const me = before.turn(), them = me === 'w' ? 'b' : 'w';
    const c = new Chess(fen);
    let mv;
    try { mv = c.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] }); } catch (e) { return []; }
    if (!mv) return [];
    const after = c.fen();
    const out = [];
    const line = lines && lines[0];
    const moveNo = +fen.split(' ')[5];

    if (c.isCheckmate()) return ['Checkmate!'];
    if (line && line.mate > 0) out.push(line.mate === 1 ? 'Mates next move.' : `Forces mate in ${line.mate}.`);

    if (mv.flags.includes('k') || mv.flags.includes('q')) out.push('Castles: gets the king to safety and brings the rook toward the centre.');
    if (mv.promotion) out.push(`Promotes the pawn to a ${NAMES[mv.promotion]}.`);

    if (mv.captured) {
      const recapture = cheapestAttacker(after, mv.to, them);
      const name = NAMES[mv.captured];
      if (!recapture) out.push(`Wins the ${name} on ${mv.to} for free.`);
      else if (VALUE[mv.captured] > VALUE[mv.piece]) out.push(`Takes the ${name} with a cheaper ${NAMES[mv.piece]}: wins material even after the recapture.`);
      else if (VALUE[mv.captured] === VALUE[mv.piece]) out.push(`Trades ${NAMES[mv.piece]} for ${name}.`);
      else out.push(`Captures on ${mv.to} — the engine sees it works tactically.`);
    }
    if (c.inCheck() && !c.isCheckmate()) out.push('Gives check.');

    // What was under attack before, and is it safe now?
    const before_t = threats(fen, them);
    if (before_t.length && !mv.captured) {
      const t = before_t[0];
      const still = threats(after, them).some((x) => x.move.to === t.move.to);
      if (!still) {
        out.push(mv.from === t.move.to
          ? `Moves the attacked ${NAMES[mv.piece]} out of danger.`
          : `Protects the ${NAMES[t.move.captured]} on ${t.move.to}.`);
      }
    }

    // New threats this move creates.
    const newT = threats(after, me).filter((t) => !threats(fen, me).some((x) => x.move.from === t.move.from && x.move.to === t.move.to));
    const targets = [...new Set(newT.map((t) => t.move.to))];
    if (targets.length >= 2 && newT.every((t) => t.move.from === mv.to)) {
      out.push(`Forks the ${targets.slice(0, 2).map((s) => NAMES[c.get(s).type] + ' on ' + s).join(' and the ')}.`);
    } else if (newT.length) {
      const t = newT[0];
      out.push(`Threatens to win the ${NAMES[t.move.captured]} on ${t.move.to}.`);
    }

    if (!mv.captured && moveNo <= 15) {
      const home = me === 'w' ? '1' : '8';
      if ((mv.piece === 'n' || mv.piece === 'b') && mv.from[1] === home) out.push(`Develops the ${NAMES[mv.piece]}.`);
    }
    if (mv.piece === 'p') {
      if (['d4', 'e4', 'd5', 'e5'].includes(mv.to) && moveNo <= 20) out.push('Claims space in the centre.');
      else if (['c4', 'c5', 'f4', 'f5'].includes(mv.to) && moveNo <= 15) out.push('Fights for the centre from the side.');
      else if (isPassed(c, mv.to, me)) out.push('Pushes a passed pawn — nothing can stop it with a pawn.');
      else if (moveNo <= 15 && /^[bg][36]$/.test(mv.to) && mv.from[1] === (me === 'w' ? '2' : '7')) {
        const bishopHome = (mv.to[0] === 'g' ? 'f' : 'c') + (me === 'w' ? '1' : '8');
        const bp = c.get(bishopHome);
        if (bp && bp.type === 'b' && bp.color === me) out.push(`Prepares to fianchetto the bishop on ${mv.to[0]}${me === 'w' ? '2' : '7'}.`);
      }
    }
    if (mv.piece === 'r' && mv.from[0] !== mv.to[0]) {
      const s = fileStatus(c, mv.to[0], me);
      if (s !== 'closed') out.push(`Puts the rook on the ${s} ${mv.to[0]}-file.`);
    }

    if (lines && lines.length > 1 && lines[0].pv[0] === uci) {
      const a = lines[0], b = lines[1];
      const sa = a.mate != null ? (a.mate > 0 ? 10000 : -10000) : a.cp;
      const sb = b.mate != null ? (b.mate > 0 ? 10000 : -10000) : b.cp;
      if (sa - sb >= 150) out.push('Only good move: every alternative is clearly worse.');
    }

    if (!out.length) out.push('A quiet improving move.');
    return out;
  }

  // What the side NOT to move is threatening (to warn the player before they move).
  function opponentThreat(fen) {
    const c = new Chess(fen);
    const them = c.turn() === 'w' ? 'b' : 'w';
    const t = threats(fen, them)[0];
    if (!t) return null;
    return { from: t.move.from, to: t.move.to, text: `Watch out: ${t.move.san} would win your ${NAMES[t.move.captured]}.` };
  }

  /* ---------- speech ---------- */

  function spoken(san) {
    if (san.startsWith('O-O-O')) return 'Castle queenside';
    if (san.startsWith('O-O')) return 'Castle kingside';
    const piece = { N: 'Knight', B: 'Bishop', R: 'Rook', Q: 'Queen', K: 'King' }[san[0]] || 'Pawn';
    const m = san.replace(/[+#]/g, '');
    const to = m.match(/([a-h][1-8])(=[NBRQ])?$/);
    let s = piece + (m.includes('x') ? ' takes ' : ' to ') + (to ? to[1].toUpperCase() : '');
    if (to && to[2]) s += ', promotes to ' + NAMES[to[2][1].toLowerCase()];
    if (san.endsWith('#')) s += ', checkmate';
    else if (san.endsWith('+')) s += ', check';
    return s;
  }

  /* ---------- openings ---------- */

  let openingIndex = null;
  function openings() {
    if (!openingIndex) {
      openingIndex = new Map();
      for (const row of (window.OPENINGS_DATA || '').split('\n')) {
        const [k, eco, name] = row.split('|');
        if (k) openingIndex.set(k, { eco, name });
      }
    }
    return openingIndex;
  }

  // Opening name for the game so far: the deepest named position along the moves played.
  function openingName(game) {
    const idx = openings();
    const hist = game.history();
    const c = new Chess(game.fen());
    for (let back = 0; back <= hist.length; back++) {
      const o = idx.get(key2(c.fen()));
      if (o) return Object.assign({ inBook: back === 0 }, o);
      c.undo();
    }
    return null;
  }

  // Legal moves that lead to a named opening position.
  function bookMoves(fen) {
    const idx = openings();
    const c = new Chess(fen);
    const out = [];
    for (const m of c.moves({ verbose: true })) {
      c.move(m);
      const o = idx.get(key2(c.fen()));
      c.undo();
      if (o) out.push({ san: m.san, from: m.from, to: m.to, eco: o.eco, name: o.name });
    }
    return out;
  }

  // Index a repertoire's positions by board + side to move, so castling/en-passant details don't matter.
  const repIndexCache = new WeakMap();
  function repIndex(rep) {
    let idx = repIndexCache.get(rep);
    if (!idx) {
      idx = new Map();
      for (const p of Object.values(rep.positions)) idx.set(key2(p.fen), p);
      repIndexCache.set(rep, idx);
    }
    return idx;
  }

  let libraryReps = null;
  function library() {
    if (!libraryReps) {
      libraryReps = (window.SAMPLES || []).map((s) => {
        const r = Rep.newRepertoire(s.name, s.color);
        Rep.importPgn(r, s.pgn);
        r.isLibrary = true;
        return r;
      });
    }
    return libraryReps;
  }

  /**
   * Repertoire guidance for a position: [{ rep, moves: [san], comment, mine }] from the user's
   * repertoires (mine) and the built-in library.
   */
  function repertoireHints(fen, reps) {
    const k = key2(fen);
    const out = [];
    const seenLib = new Set((reps || []).map((r) => r.library || r.name));
    for (const [list, mine] of [[reps || [], true], [library(), false]]) {
      for (const rep of list) {
        if (!mine && seenLib.has(rep.name)) continue;
        const p = repIndex(rep).get(k);
        if (!p) continue;
        const moves = Object.keys(p.moves);
        if (!moves.length && !p.comment) continue;
        out.push({ rep, moves, comment: p.comment || '', mine });
      }
    }
    return out;
  }

  // The note stored for a position (explains the move that led to it), if any repertoire has one.
  function noteFor(fen, reps) {
    const k = key2(fen);
    for (const rep of [...(reps || []), ...library()]) {
      const p = repIndex(rep).get(k);
      if (p && p.comment) return { rep, comment: p.comment };
    }
    return null;
  }

  window.Coach = {
    START_BOARD, Tracker, rotate, buildFen,
    whiteCp, fmtScore, verdict, barPercent, pvSan, fmtLine,
    explain, opponentThreat, spoken,
    openingName, bookMoves, repertoireHints, noteFor,
  };
})();
