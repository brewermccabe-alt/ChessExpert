/* Run with: node evolution/test.js */
const assert = require('assert');
const E = require('./game.js');
const AI = require('./ai.js');

// Setup
for (const size of E.SIZES) {
  const s = E.newGame(size);
  assert.strictEqual(s.pieces.length, 32);
  assert.strictEqual(s.pieces.filter((p) => p.type === 'king').length, 2);
  assert.strictEqual(s.actionsLeft, E.actionsFor(size));
}

// Pawn moves: single, double, diagonal capture only when an enemy is there
let s = E.newGame(24);
const pw = E.pieceAt(s, 10, 22);
assert.strictEqual(pw.type, 'pawn');
assert.deepStrictEqual(E.moves(s, pw).map((m) => m.y).sort(), [20, 21]);
assert.ok(E.move(s, pw.id, 10, 20));
assert.strictEqual(E.move(s, pw.id, 10, 19), null, 'a piece acts once per turn');

// Captures give XP, XP evolves, evolution is validated
s = E.newGame(24);
const w = E.pieceAt(s, 10, 22), b = E.pieceAt(s, 11, 1);
s.cells[22 * 24 + 10] = null; w.x = 10; w.y = 10; s.cells[10 * 24 + 10] = w;
s.cells[1 * 24 + 11] = null; b.x = 11; b.y = 9; s.cells[9 * 24 + 11] = b;
const r = E.move(s, w.id, 11, 9);
assert.strictEqual(r.captured, 'pawn');
assert.strictEqual(w.xp, 1);
assert.ok(!E.canEvolve(w));
w.xp = 2;
assert.strictEqual(E.evolve(s, w.id, 'rook'), null, 'pawn cannot skip to rook');
assert.ok(E.evolve(s, w.id, 'knight'));
assert.strictEqual(w.type, 'knight');
assert.strictEqual(w.xp, 0);

// Pawn march earns XP
s = E.newGame(24);
const m1 = E.pieceAt(s, 9, 22);
s.cells[22 * 24 + 9] = null; m1.y = 12; s.cells[12 * 24 + 9] = m1; m1.steps = 5;
E.move(s, m1.id, 9, 11);
assert.strictEqual(m1.xp, 1);

// Slider range limit and blocking
s = E.newGame(24);
const q = s.pieces.find((p) => p.color === 'w' && p.type === 'queen');
assert.strictEqual(E.moves(s, q).length, 0, 'queen starts boxed in');
s.cells[q.y * 24 + q.x] = null; q.x = 12; q.y = 12; s.cells[12 * 24 + 12] = q;
assert.ok(E.moves(s, q).every((m) => Math.max(Math.abs(m.x - 12), Math.abs(m.y - 12)) <= 10));
assert.ok(E.attacked(s, 12, 5, 'w'));
assert.ok(!E.attacked(s, 14, 5, 'w'));

// Capturing the King wins
s = E.newGame(24);
const wk = s.pieces.find((p) => p.color === 'w' && p.type === 'king');
const bk = s.pieces.find((p) => p.color === 'b' && p.type === 'king');
s.cells[wk.y * 24 + wk.x] = null; wk.x = bk.x; wk.y = bk.y + 1; s.cells[wk.y * 24 + wk.x] = wk;
E.move(s, wk.id, bk.x, bk.y);
assert.strictEqual(s.winner, 'w');

// Turn flips after all actions; save/load round-trips
s = E.newGame(24);
const n = s.actionsLeft;
for (let i = 0; i < n; i++) {
  const p = s.pieces.find((q) => q.color === 'w' && !q.acted && E.moves(s, q).length);
  const m = E.moves(s, p)[0];
  assert.ok(E.move(s, p.id, m.x, m.y));
}
assert.strictEqual(s.turn, 'b');
const copy = E.fromJSON(JSON.parse(JSON.stringify(E.toJSON(s))));
assert.deepStrictEqual(E.toJSON(copy), E.toJSON(s));

// AI self-play never throws or makes illegal moves
for (const size of [24, 40]) {
  s = E.newGame(size);
  let guard = 0;
  const t0 = Date.now();
  while (!s.winner && s.turnNo < 300 && guard++ < 20000) {
    const a = AI.chooseAction(s);
    if (a.type === 'end') E.endTurn(s);
    else if (a.type === 'evolve') assert.ok(E.evolve(s, a.id, a.to));
    else assert.ok(E.move(s, a.id, a.x, a.y), 'AI made an illegal move');
  }
  console.log(`self-play ${size}: ${s.turnNo} turns, winner=${s.winner}, ${Date.now() - t0}ms`);
}
console.log('all tests passed');
