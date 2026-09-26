/* Repertoire data model, spaced repetition scheduling, PGN import/export, storage. */
(function () {
  const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  const MINUTE = 60 * 1000;
  const DAY = 24 * 60 * MINUTE;
  const STORAGE_KEY = 'openingTrainer.v1';

  // Positions are keyed by the first four FEN fields so transpositions merge.
  function posKey(fen) {
    return fen.split(' ').slice(0, 4).join(' ');
  }

  function uid() {
    return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  }

  /* ---------- Repertoire ---------- */

  function newRepertoire(name, color) {
    const root = posKey(START_FEN);
    return {
      id: uid(),
      name,
      color, // 'w' or 'b' — the side the user plays
      created: Date.now(),
      rootFen: START_FEN,
      // key -> { fen, moves: { san: toKey }, comment }
      positions: { [root]: { fen: START_FEN, moves: {}, comment: '' } },
      // key -> SRS card state for positions where the user is to move
      cards: {},
    };
  }

  function rootKey(rep) {
    return posKey(rep.rootFen);
  }

  function turnOf(key) {
    return key.split(' ')[1];
  }

  function isUserPos(rep, key) {
    return turnOf(key) === rep.color;
  }

  // Add a move (SAN) from the position with the given full FEN. Returns { san, toKey, toFen, move }.
  function addMove(rep, fen, san) {
    const chess = new Chess(fen);
    const mv = chess.move(san);
    const from = posKey(fen);
    const toFen = chess.fen();
    const toKey = posKey(toFen);
    if (!rep.positions[from]) rep.positions[from] = { fen, moves: {}, comment: '' };
    if (!rep.positions[toKey]) rep.positions[toKey] = { fen: toFen, moves: {}, comment: '' };
    rep.positions[from].moves[mv.san] = toKey;
    return { san: mv.san, toKey, toFen, move: mv };
  }

  function deleteMove(rep, key, san) {
    const pos = rep.positions[key];
    if (!pos) return;
    delete pos.moves[san];
    garbageCollect(rep);
  }

  function reachable(rep) {
    const seen = new Set();
    const stack = [rootKey(rep)];
    while (stack.length) {
      const k = stack.pop();
      if (seen.has(k) || !rep.positions[k]) continue;
      seen.add(k);
      for (const to of Object.values(rep.positions[k].moves)) stack.push(to);
    }
    return seen;
  }

  function garbageCollect(rep) {
    const keep = reachable(rep);
    for (const k of Object.keys(rep.positions)) if (!keep.has(k)) delete rep.positions[k];
    for (const k of Object.keys(rep.cards)) {
      const p = rep.positions[k];
      if (!p || !Object.keys(p.moves).length) delete rep.cards[k];
    }
  }

  // Every user-to-move position with at least one repertoire move is a card.
  function cardKeys(rep) {
    const out = [];
    for (const k of reachable(rep)) {
      if (isUserPos(rep, k) && Object.keys(rep.positions[k].moves).length) out.push(k);
    }
    return out;
  }

  function stats(rep, now = Date.now()) {
    let total = 0, fresh = 0, due = 0, learned = 0;
    for (const k of cardKeys(rep)) {
      total++;
      const c = rep.cards[k];
      if (!c) fresh++;
      else if (c.due <= now) due++;
      else learned++;
    }
    return { total, fresh, due, learned, positions: Object.keys(rep.positions).length };
  }

  /* ---------- Spaced repetition (SM-2 flavoured) ---------- */

  function cardState(rep, key) {
    return rep.cards[key] || null;
  }

  function isDue(rep, key, now = Date.now()) {
    const c = rep.cards[key];
    return !!c && c.due <= now;
  }

  function grade(rep, key, correct, now = Date.now()) {
    const c = rep.cards[key] || { reps: 0, lapses: 0, ease: 2.5, interval: 0, due: now, seen: 0 };
    c.seen = (c.seen || 0) + 1;
    c.last = now;
    if (!correct) {
      c.lapses++;
      c.reps = 0;
      c.ease = Math.max(1.3, c.ease - 0.2);
      c.interval = 0;
      c.due = now + 5 * MINUTE;
    } else {
      c.reps++;
      if (c.interval < 1) c.interval = 1;
      else if (c.interval < 3) c.interval = 3;
      else c.interval = Math.round(c.interval * c.ease);
      c.ease = Math.min(3.0, c.ease + 0.05);
      c.due = now + c.interval * DAY;
    }
    rep.cards[key] = c;
    return c;
  }

  // Mark a brand-new card as introduced (shown to the user), due again shortly.
  function introduce(rep, key, now = Date.now()) {
    rep.cards[key] = { reps: 0, lapses: 0, ease: 2.5, interval: 0, due: now + 10 * MINUTE, seen: 1, last: now };
  }

  function resetProgress(rep) {
    rep.cards = {};
  }

  /* ---------- PGN import ---------- */

  function tokenize(pgn) {
    const tokens = [];
    let i = 0;
    const s = pgn.replace(/\r/g, '');
    while (i < s.length) {
      const ch = s[i];
      if (/\s/.test(ch)) { i++; continue; }
      if (ch === '[') {
        const j = s.indexOf(']', i);
        const tag = s.slice(i + 1, j === -1 ? s.length : j);
        const m = tag.match(/^\s*(\w+)\s+"(.*)"\s*$/);
        if (m) tokens.push({ t: 'tag', name: m[1], value: m[2] });
        i = j === -1 ? s.length : j + 1;
        continue;
      }
      if (ch === '{') {
        const j = s.indexOf('}', i);
        tokens.push({ t: 'comment', v: s.slice(i + 1, j === -1 ? s.length : j).trim() });
        i = j === -1 ? s.length : j + 1;
        continue;
      }
      if (ch === ';') {
        const j = s.indexOf('\n', i);
        tokens.push({ t: 'comment', v: s.slice(i + 1, j === -1 ? s.length : j).trim() });
        i = j === -1 ? s.length : j + 1;
        continue;
      }
      if (ch === '(') { tokens.push({ t: '(' }); i++; continue; }
      if (ch === ')') { tokens.push({ t: ')' }); i++; continue; }
      if (ch === '$') {
        const m = s.slice(i).match(/^\$\d+/);
        i += m ? m[0].length : 1;
        continue;
      }
      const m = s.slice(i).match(/^[^\s(){};[\]]+/);
      const word = m[0];
      i += word.length;
      if (/^(1-0|0-1|1\/2-1\/2|\*)$/.test(word)) { tokens.push({ t: 'result' }); continue; }
      const mv = word.replace(/^\d+\.+/, '').replace(/[!?]+$/, '');
      if (!mv || /^\d+\.*$/.test(mv)) continue;
      tokens.push({ t: 'move', v: mv });
    }
    return tokens;
  }

  // Split multi-game PGN into games (each starting with tags or after a result).
  function splitGames(tokens) {
    const games = [];
    let cur = { tags: {}, tokens: [] };
    let sawMoves = false;
    for (const tk of tokens) {
      if (tk.t === 'tag') {
        if (sawMoves) {
          games.push(cur);
          cur = { tags: {}, tokens: [] };
          sawMoves = false;
        }
        cur.tags[tk.name] = tk.value;
      } else if (tk.t === 'result') {
        games.push(cur);
        cur = { tags: {}, tokens: [] };
        sawMoves = false;
      } else {
        if (tk.t === 'move') sawMoves = true;
        cur.tokens.push(tk);
      }
    }
    if (cur.tokens.length) games.push(cur);
    return games;
  }

  // Merge a PGN (with variations and comments) into a repertoire.
  // Returns { games, moves, errors: [] }.
  function importPgn(rep, pgn) {
    const games = splitGames(tokenize(pgn));
    let added = 0;
    const errors = [];
    for (const g of games) {
      let startFen = g.tags.FEN || START_FEN;
      if (!rep.positions[posKey(startFen)]) {
        if (startFen !== START_FEN) {
          errors.push('Skipped a game starting from a custom FEN not in this repertoire.');
          continue;
        }
      }
      // Each stack frame: { fen (current), prevFen (before last move) }
      let cur = { fen: startFen, prevFen: null };
      const stack = [];
      let skipDepth = 0; // >0 while inside a variation we failed to parse
      for (const tk of g.tokens) {
        if (skipDepth) {
          if (tk.t === '(') skipDepth++;
          else if (tk.t === ')') skipDepth--;
          continue;
        }
        if (tk.t === '(') {
          stack.push(cur);
          if (!cur.prevFen) { skipDepth = 1; stack.pop(); continue; }
          cur = { fen: cur.prevFen, prevFen: null };
        } else if (tk.t === ')') {
          cur = stack.pop() || cur;
        } else if (tk.t === 'comment') {
          const k = posKey(cur.fen);
          if (rep.positions[k] && tk.v && !rep.positions[k].comment.includes(tk.v)) {
            rep.positions[k].comment = (rep.positions[k].comment ? rep.positions[k].comment + '\n' : '') + tk.v;
          }
        } else if (tk.t === 'move') {
          try {
            const before = Object.keys((rep.positions[posKey(cur.fen)] || { moves: {} }).moves).length;
            const r = addMove(rep, cur.fen, tk.v);
            if (Object.keys(rep.positions[posKey(cur.fen)].moves).length > before) added++;
            cur = { fen: r.toFen, prevFen: cur.fen };
          } catch (e) {
            errors.push(`Illegal move "${tk.v}" — rest of that line skipped.`);
            // skip until this variation closes
            if (stack.length) { cur = stack.pop(); skipDepth = 1; } else break;
          }
        }
      }
    }
    return { games: games.length, moves: added, errors };
  }

  /* ---------- PGN export ---------- */

  function exportPgn(rep) {
    const chessMoveNo = (fen) => {
      const parts = fen.split(' ');
      return { turn: parts[1], num: parseInt(parts[5], 10) || 1 };
    };
    const esc = (s) => s.replace(/[{}]/g, '');
    const onPath = new Set();
    let budget = 20000;

    function line(key, forceNum) {
      const pos = rep.positions[key];
      if (!pos || onPath.has(key) || budget-- <= 0) return '';
      const sans = Object.keys(pos.moves);
      if (!sans.length) return '';
      onPath.add(key);
      const { turn, num } = chessMoveNo(pos.fen);
      const prefix = (fn) => (turn === 'w' ? `${num}. ` : fn ? `${num}... ` : '');
      const [main, ...alts] = sans;
      const mainTo = pos.moves[main];
      const mainCmt = rep.positions[mainTo] && rep.positions[mainTo].comment ? ` {${esc(rep.positions[mainTo].comment)}}` : '';
      let out = prefix(forceNum) + main + mainCmt;
      for (const alt of alts) {
        const to = pos.moves[alt];
        const cmt = rep.positions[to] && rep.positions[to].comment ? ` {${esc(rep.positions[to].comment)}}` : '';
        const cont = line(to, !!cmt);
        out += ` (${prefix(true)}${alt}${cmt}${cont ? ' ' + cont : ''})`;
      }
      const rest = line(mainTo, alts.length > 0 || !!mainCmt);
      if (rest) out += ' ' + rest;
      onPath.delete(key);
      return out;
    }

    const root = rootKey(rep);
    const rootCmt = rep.positions[root].comment ? `{${esc(rep.positions[root].comment)}} ` : '';
    const header =
      `[Event "${rep.name.replace(/"/g, "'")}"]\n` +
      `[White "${rep.color === 'w' ? 'Repertoire' : '?'}"]\n` +
      `[Black "${rep.color === 'b' ? 'Repertoire' : '?'}"]\n` +
      (rep.rootFen !== START_FEN ? `[SetUp "1"]\n[FEN "${rep.rootFen}"]\n` : '') +
      `[Result "*"]\n\n`;
    const body = rootCmt + line(root, true);
    return header + wrap(body + ' *') + '\n';
  }

  function wrap(text, width = 80) {
    const words = text.split(' ');
    const lines = [];
    let cur = '';
    for (const w of words) {
      if (cur.length + w.length + 1 > width && cur) {
        lines.push(cur);
        cur = w;
      } else cur = cur ? cur + ' ' + w : w;
    }
    if (cur) lines.push(cur);
    return lines.join('\n');
  }

  /* ---------- Storage ---------- */

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (data && Array.isArray(data.repertoires)) return data;
      }
    } catch (e) {
      console.warn('Could not load saved data', e);
    }
    return { repertoires: [], settings: {} };
  }

  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.warn('Could not save', e);
      return false;
    }
  }

  window.Rep = {
    START_FEN, MINUTE, DAY,
    posKey, uid, newRepertoire, rootKey, turnOf, isUserPos,
    addMove, deleteMove, garbageCollect, reachable, cardKeys, stats,
    cardState, isDue, grade, introduce, resetProgress,
    importPgn, exportPgn, tokenize,
    load, save,
  };
})();
