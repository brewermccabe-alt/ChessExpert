#!/usr/bin/env node
/*
 * Puzzle generator: Stockfish plays games (with occasional human-like mistakes); positions where a
 * move throws away the game and the opponent has exactly one winning reply become puzzles.
 *
 * Usage: node tools/puzzlegen.js <stockfish-binary> <out.jsonl> <games> [seed]
 * Output lines: {"fen","moves":[blunder, solution..., ...],"rating","themes":[...],"alts":{ply:[uci...]}}
 * `fen` is the position before the blunder; moves[0] is the blunder, then solver and opponent alternate.
 */
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

global.window = global;
require(path.join(__dirname, '../vendor/chess.js'));
require(path.join(__dirname, '../js/samples.js'));
require(path.join(__dirname, '../js/repertoire.js'));

const [, , SF_PATH, OUT, GAMES = '50', SEED = String(Date.now())] = process.argv;

/* ---------- small seeded RNG so runs are reproducible ---------- */
let seed = [...SEED].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
function rnd() {
  seed ^= seed << 13; seed >>>= 0;
  seed ^= seed >>> 17;
  seed ^= seed << 5; seed >>>= 0;
  return seed / 4294967296;
}
const pick = (arr) => arr[Math.floor(rnd() * arr.length)];

/* ---------- UCI engine wrapper ---------- */
class Engine {
  constructor(bin) {
    this.p = spawn(bin, [], { stdio: ['pipe', 'pipe', 'inherit'] });
    this.buf = '';
    this.waiters = [];
    this.p.stdout.on('data', (d) => {
      this.buf += d.toString();
      let i;
      while ((i = this.buf.indexOf('\n')) >= 0) {
        const line = this.buf.slice(0, i).trim();
        this.buf = this.buf.slice(i + 1);
        for (const w of [...this.waiters]) w(line);
      }
    });
  }
  send(cmd) { this.p.stdin.write(cmd + '\n'); }
  until(pred, onLine) {
    return new Promise((resolve) => {
      const w = (line) => {
        if (onLine) onLine(line);
        if (pred(line)) { this.waiters = this.waiters.filter((x) => x !== w); resolve(line); }
      };
      this.waiters.push(w);
    });
  }
  async init() {
    this.send('uci');
    await this.until((l) => l === 'uciok');
    this.send('setoption name Threads value 1');
    this.send('setoption name Hash value 64');
    this.send('isready');
    await this.until((l) => l === 'readyok');
  }
  // Returns [{move, score}] sorted by rank; score in centipawns from the side to move (mates = ±(20000 - plies)).
  async analyse(fen, depth, multipv = 1) {
    this.send(`setoption name MultiPV value ${multipv}`);
    this.send(`position fen ${fen}`);
    const lines = {};
    const done = this.until((l) => l.startsWith('bestmove'), (l) => {
      if (!l.startsWith('info') || !l.includes(' pv ')) return;
      const t = l.split(' ');
      const k = t.indexOf('multipv') >= 0 ? +t[t.indexOf('multipv') + 1] : 1;
      const si = t.indexOf('score');
      let score = +t[si + 2];
      if (t[si + 1] === 'mate') score = score > 0 ? 20000 - score : -20000 - score;
      if (t[si + 3] === 'lowerbound' || t[si + 3] === 'upperbound') return;
      lines[k] = { move: t[t.indexOf('pv') + 1], score, mate: t[si + 1] === 'mate' ? +t[si + 2] : null };
    });
    this.send(`go depth ${depth}`);
    await done;
    return Object.keys(lines).sort((a, b) => a - b).map((k) => lines[k]);
  }
  quit() { this.send('quit'); }
}

/* ---------- helpers ---------- */
const VAL = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };
function material(chess, color) {
  let m = 0;
  for (const row of chess.board()) for (const p of row) if (p && p.color === color) m += VAL[p.type];
  return m;
}
function uciMove(chess, uci) {
  return chess.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] });
}
const WIN = 250;

// Is the best move the only winning one?
function unique(res) {
  const [b, s] = res;
  if (!b) return false;
  if (b.mate !== null && b.mate > 0) return !s || !(s.mate !== null && s.mate > 0);
  if (b.score < WIN) return false;
  return !s || (s.score <= Math.min(150, b.score - 200));
}

/* ---------- starting positions: random library lines or random engine openings ---------- */
function libraryStart() {
  const s = pick(SAMPLES);
  const rep = Rep.newRepertoire(s.name, s.color);
  Rep.importPgn(rep, s.pgn);
  const chess = new Chess();
  const plies = 4 + Math.floor(rnd() * 14);
  for (let i = 0; i < plies; i++) {
    const pos = rep.positions[Rep.posKey(chess.fen())];
    const sans = pos ? Object.keys(pos.moves) : [];
    if (!sans.length) break;
    chess.move(pick(sans));
  }
  return chess;
}

/* ---------- puzzle extraction ---------- */
async function buildSolution(eng, chess, first) {
  // chess: position where the solver is to move; first: deep multipv analysis of it
  const moves = [];
  const alts = {};
  let res = first;
  const mateLine = res[0].mate !== null && res[0].mate > 0 && res[0].mate <= 4;
  for (let step = 0; step < 6; step++) {
    const best = res[0];
    const isUnique = unique(res);
    if (!isUnique) {
      if (mateLine) {
        // Any mating move is fine on the final move; otherwise the mate line isn't clean.
        const mates = res.filter((r) => r.mate === 1);
        if (best.mate === 1 && mates.length) { moves.push(best.move); alts[moves.length] = mates.map((r) => r.move); }
        else if (step === 0) return null;
        break;
      }
      // A non-unique follow-up that grabs material still finishes the puzzle.
      if (step > 0) {
        const c = new Chess(chess.fen());
        const before = material(c, c.turn() === 'w' ? 'b' : 'w');
        const mv = uciMove(c, best.move);
        const gained = before - material(c, c.turn());
        if (mv.captured && gained >= 2 && best.score >= WIN) {
          moves.push(best.move);
          const ok = res.filter((r) => r.score >= Math.max(WIN, best.score - 100)).map((r) => r.move);
          alts[moves.length] = ok;
        }
      }
      break;
    }
    moves.push(best.move);
    const mv = uciMove(chess, best.move);
    if (chess.isCheckmate()) break;
    if (chess.isGameOver()) return null;
    // Opponent's best reply.
    const reply = await eng.analyse(chess.fen(), 16, 1);
    if (!reply.length) return null;
    // Stop if the forced part is over (e.g. we're already winning a queen and the reply changes nothing).
    moves.push(reply[0].move);
    uciMove(chess, reply[0].move);
    res = await eng.analyse(chess.fen(), 16, 3);
    if (!res.length) { moves.pop(); break; }
    void mv;
  }
  // Must end on a solver move.
  if (moves.length % 2 === 0) moves.pop();
  if (!moves.length) return null;
  return { moves, alts, mateLine };
}

function tagAndRate(startFen, allMoves, mateLine) {
  // allMoves: [blunder, s1, r1, s2, ...]
  const c = new Chess(startFen);
  uciMove(c, allMoves[0]);
  const solver = c.turn();
  const opp = solver === 'w' ? 'b' : 'w';
  const themes = new Set();
  const n = Math.ceil((allMoves.length - 1) / 2);
  const matBefore = material(c, solver) - material(c, opp);
  let sacrifice = false;
  let firstQuiet = false;
  let firstCheck = false;
  let promotion = false;
  let fork = false;
  for (let i = 1; i < allMoves.length; i++) {
    const mv = uciMove(c, allMoves[i]);
    if (i % 2 === 1) {
      if (mv.promotion) promotion = true;
      if (i === 1) {
        firstQuiet = !mv.captured && !c.inCheck();
        firstCheck = c.inCheck();
      }
      // Sacrifice: after the solver's move and the reply, the solver is down material vs. the start.
      if (i + 1 < allMoves.length) {
        const c2 = new Chess(c.fen());
        uciMove(c2, allMoves[i + 1]);
        if (material(c2, solver) - material(c2, opp) <= matBefore - 2) sacrifice = true;
      }
      // Fork: the moved piece attacks two valuable enemy pieces (or king + piece).
      const targets = [];
      const moved = mv.to;
      for (const row of c.board()) for (const p of row) {
        if (!p || p.color !== opp) continue;
        if (p.type === 'p') continue;
        if (c.attackers(p.square, solver).includes(moved)) targets.push(p);
      }
      const big = targets.filter((p) => p.type === 'k' || VAL[p.type] > VAL[mv.piece] || c.attackers(p.square, opp).length === 0);
      if (big.length >= 2 && mv.piece !== 'k') fork = true;
    }
  }
  const pieces = c.board().flat().filter(Boolean).length;
  if (c.isCheckmate()) {
    themes.add('mate');
    themes.add(`mateIn${n}`);
  } else themes.add(material(c, solver) - material(c, opp) - matBefore >= 3 ? 'winningMaterial' : 'advantage');
  if (fork) themes.add('fork');
  if (sacrifice) themes.add('sacrifice');
  if (promotion) themes.add('promotion');
  if (firstQuiet) themes.add('quietMove');
  if (pieces <= 12) themes.add('endgame');
  themes.add(n === 1 ? 'oneMove' : n === 2 ? 'short' : 'long');
  // Hanging piece: one-move puzzle that just takes something undefended.
  if (n === 1 && !themes.has('mate')) {
    const c3 = new Chess(startFen);
    uciMove(c3, allMoves[0]);
    const to = allMoves[1].slice(2, 4);
    const victim = c3.get(to);
    if (victim && c3.attackers(to, opp).length === 0) themes.add('hangingPiece');
  }

  let rating = 900 + 280 * (n - 1);
  if (themes.has('mateIn1')) rating = 650;
  if (firstQuiet) rating += 250;
  if (sacrifice) rating += 200;
  if (firstCheck) rating -= 80;
  if (themes.has('hangingPiece')) rating -= 250;
  if (fork) rating += 50;
  if (themes.has('endgame')) rating += 60;
  rating += Math.round((rnd() - 0.5) * 160);
  rating = Math.max(500, Math.min(2600, Math.round(rating)));
  return { themes: [...themes], rating };
}

// A puzzle must end in mate or win real material: at least 2 points, counted after the opponent's
// best reply to the last solution move (so an even trade doesn't count).
async function worthIt(eng, fen, solMoves) {
  const c = new Chess(fen);
  const solver = c.turn();
  const opp = solver === 'w' ? 'b' : 'w';
  const start = material(c, solver) - material(c, opp);
  for (const m of solMoves) uciMove(c, m);
  if (c.isCheckmate()) return true;
  if (c.isGameOver()) return false;
  const reply = await eng.analyse(c.fen(), 12, 1);
  if (reply.length) uciMove(c, reply[0].move);
  return material(c, solver) - material(c, opp) - start >= 2;
}

/* ---------- main loop ---------- */
(async () => {
  const eng = new Engine(SF_PATH);
  await eng.init();
  const out = fs.createWriteStream(OUT, { flags: 'a' });
  const seen = new Set();
  let found = 0;
  for (let g = 0; g < +GAMES; g++) {
    const chess = rnd() < 0.7 ? libraryStart() : new Chess();
    let lastPuzzlePly = -10;
    let perGame = 0;
    for (let ply = 0; ply < 160 && !chess.isGameOver(); ply++) {
      const fen = chess.fen();
      const res = await eng.analyse(fen, 10, 8);
      if (!res.length) break;
      if (Math.abs(res[0].score) > 600) break; // decided game: start a fresh one

      // A tempting move (in the engine's top 8) that loses to a tactic is a realistic blunder.
      const tempting = res.slice(1).filter((r) => r.score <= -WIN);
      if (tempting.length && res[0].score >= -100 && ply - lastPuzzlePly > 2 && perGame < 5) {
        // Prefer a blunder that allows mate; otherwise the most tempting (highest-ranked) losing move.
        const blunder = tempting.find((r) => r.mate !== null) || tempting[0];
        const after = new Chess(fen);
        uciMove(after, blunder.move);
        const key = after.fen().split(' ').slice(0, 4).join(' ');
        if (!seen.has(key)) {
          seen.add(key);
          const deep = await eng.analyse(after.fen(), 18, 3);
          if (unique(deep)) {
            const sol = await buildSolution(eng, new Chess(after.fen()), deep);
            if (sol && (await worthIt(eng, after.fen(), sol.moves))) {
              const moves = [blunder.move, ...sol.moves];
              const alts = {};
              for (const [k, v] of Object.entries(sol.alts)) alts[+k] = v;
              const { themes, rating } = tagAndRate(fen, moves, sol.mateLine);
              // Free-piece one-movers are plentiful; keep only some so the set has variety.
              if (!(themes.includes('hangingPiece') && rnd() < 0.6)) {
                out.write(JSON.stringify({ fen, moves, rating, themes, alts }) + '\n');
                found++;
                perGame++;
                lastPuzzlePly = ply;
              }
            }
          }
        }
      }

      // Continue the game with a good move; vary the early moves so games differ.
      const good = res.filter((r) => r.score >= res[0].score - (ply < 12 ? 60 : 25));
      uciMove(chess, (ply < 12 || rnd() < 0.15 ? pick(good) : res[0]).move);
    }
    if ((g + 1) % 5 === 0) process.stderr.write(`[${path.basename(OUT)}] games ${g + 1}/${GAMES}, puzzles ${found}\n`);
  }
  out.end();
  eng.quit();
})();
