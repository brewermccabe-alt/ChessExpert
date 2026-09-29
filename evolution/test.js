/* Run with: node evolution/test.js */
const assert = require('assert');
const E = require('./game.js');
const AI = require('./ai.js');

// Test helper: put a piece on an arbitrary square
function put(s, p, x, y) {
  s.cells[p.y * s.size + p.x] = null;
  p.x = x; p.y = y;
  s.cells[y * s.size + x] = p;
}

// Setup: 32 pieces, each side in its own 2x8 pocket attached outside the main board
for (const size of E.SIZES) {
  const s = E.newGame(size);
  assert.strictEqual(s.pieces.length, 32);
  assert.strictEqual(s.pieces.filter((p) => p.type === 'king').length, 2);
  assert.strictEqual(s.actionsLeft, E.actionsFor(size));
  for (const color of ['w', 'b']) {
    const k = E.pocket(s, color);
    const mine = s.pieces.filter((p) => p.color === color);
    assert.ok(mine.every((p) => p.x >= k.x && p.x < k.x + 8 && p.y >= k.y && p.y < k.y + 2), 'army starts in its pocket');
  }
  // Pockets are outside the main board and nothing exists beside them
  assert.ok(E.inside(s, size / 2, 0) && E.inside(s, size / 2, s.h - 1));
  assert.ok(!E.inside(s, 0, 0) && !E.inside(s, size - 1, s.h - 1), 'void beside the pockets');
  assert.ok(E.inside(s, 0, 2) && E.inside(s, size - 1, size + 1), 'main board is fully playable');
}

const S = 24, MAIN_TOP = 2, MAIN_BOTTOM = S + 1; // main board rows 2..25 on a 24 board
const WP = S + 2; // white pawn row (front row of white's pocket)

// Pawn moves: single, double from the pocket, out onto the board
let s = E.newGame(S);
const pw = E.pieceAt(s, 10, WP);
assert.strictEqual(pw.type, 'pawn');
assert.deepStrictEqual(E.moves(s, pw).map((m) => m.y).sort((a, b) => a - b), [WP - 2, WP - 1]);
assert.ok(E.move(s, pw.id, 10, WP - 2));
assert.strictEqual(pw.y, MAIN_BOTTOM - 1, 'the pawn stepped out onto the main board');
assert.strictEqual(E.move(s, pw.id, 10, WP - 3), null, 'a piece acts once per turn');

// Pieces cannot walk into the void beside the pocket
s = E.newGame(S);
const wr = E.pieceAt(s, 8, S + 3); // white a-rook in the back row of the pocket
assert.strictEqual(wr.type, 'rook');
put(s, s.pieces.find((p) => p.color === 'w' && p.x === 8 && p.y === WP), 20, 10); // clear the pawn in front
assert.ok(E.moves(s, wr).every((m) => E.inside(s, m.x, m.y)));
assert.ok(!E.moves(s, wr).some((m) => m.x < 8), 'cannot move left into the void');
assert.ok(E.moves(s, wr).some((m) => m.y < WP), 'can leave through the front');

// Captures give XP, XP evolves, evolution is validated
s = E.newGame(S);
const w = E.pieceAt(s, 10, WP), b = E.pieceAt(s, 11, 1);
put(s, w, 10, 10); put(s, b, 11, 9);
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
s = E.newGame(S);
const m1 = E.pieceAt(s, 9, WP);
put(s, m1, 9, 12); m1.steps = 5;
E.move(s, m1.id, 9, 11);
assert.strictEqual(m1.xp, 1);

// Slider range limit and blocking
s = E.newGame(S);
const q = s.pieces.find((p) => p.color === 'w' && p.type === 'queen');
assert.strictEqual(E.moves(s, q).length, 0, 'queen starts boxed in');
put(s, q, 12, 12);
assert.ok(E.moves(s, q).every((m) => Math.max(Math.abs(m.x - 12), Math.abs(m.y - 12)) <= 10));
assert.ok(E.attacked(s, 12, 5, 'w'));
assert.ok(!E.attacked(s, 14, 5, 'w'));

// Capturing the King wins
s = E.newGame(S);
const wk = s.pieces.find((p) => p.color === 'w' && p.type === 'king');
const bk = s.pieces.find((p) => p.color === 'b' && p.type === 'king');
put(s, wk, bk.x, bk.y + 1);
E.move(s, wk.id, bk.x, bk.y);
assert.strictEqual(s.winner, 'w');

// Home base: a captured piece waits until its owner places it on any free pocket square
s = E.newGame(S);
const attacker = E.pieceAt(s, 12, WP); // white pawn
const victim = s.pieces.find((p) => p.color === 'b' && p.type === 'knight');
put(s, victim, 13, 12); put(s, attacker, 12, 13);
const cap = E.move(s, attacker.id, 13, 12);
assert.strictEqual(cap.captured, 'knight');
assert.strictEqual(s.pieces.length, 31);
assert.strictEqual(s.pending.b, 1);
assert.strictEqual(E.place(s, 8, 0), null, 'not Black\'s turn yet, and pending belongs to Black');
E.endTurn(s);
assert.strictEqual(s.turn, 'b');
assert.strictEqual(s.pieces.length, 31, 'nothing is placed automatically');
const bp = E.pocket(s, 'b');
// The knight's old square is free; free one more so the player has a real choice of where to place it
const gone = E.pieceAt(s, bp.x + 5, 1);
s.cells[gone.y * S + gone.x] = null; s.pieces.splice(s.pieces.indexOf(gone), 1);
assert.strictEqual(E.place(s, bp.x + 5, 0), null, 'occupied square');
assert.strictEqual(E.place(s, 12, 12), null, 'must be inside your own pocket');
assert.strictEqual(E.place(s, E.pocket(s, 'w').x, E.pocket(s, 'w').y), null, 'not the enemy pocket');
assert.deepStrictEqual(E.freePocketSquares(s, 'b'), [{ x: bp.x + 5, y: 1 }, { x: 9, y: 0 }], 'front row first, any free square');
const placed = E.place(s, bp.x + 5, 1);
assert.ok(placed);
const rec = E.pieceAt(s, bp.x + 5, 1);
assert.strictEqual(rec.type, 'pawn');
assert.strictEqual(rec.xp, 0);
assert.ok(rec.recruit);
assert.strictEqual(s.pending.b, 0);
assert.strictEqual(E.place(s, bp.x + 5, 1), null, 'nothing left to place');

// Recruits cannot capture or threaten while in the pocket; they become normal once they step out
s = E.newGame(S);
E.endTurn(s); // Black to move
const rp = E.pocket(s, 'b');
const recruit = E.pieceAt(s, rp.x + 2, 1);
recruit.recruit = true;
// Isolate the recruit: remove every other Black piece except the King
for (const p of [...s.pieces]) {
  if (p.color === 'b' && p !== recruit && p.type !== 'king') { s.cells[p.y * S + p.x] = null; s.pieces.splice(s.pieces.indexOf(p), 1); }
}
const target = s.pieces.find((p) => p.color === 'w' && p.type === 'pawn');
put(s, target, recruit.x + 1, recruit.y + 1); // main board row 2, diagonal to the recruit
assert.ok(!E.moves(s, recruit).some((m) => m.capture), 'recruit cannot capture');
assert.ok(!E.attacked(s, target.x, target.y, 'b'), 'recruit does not threaten');
recruit.recruit = false;
assert.ok(E.moves(s, recruit).some((m) => m.capture), 'a normal pawn could capture there');
assert.ok(E.attacked(s, target.x, target.y, 'b'));
recruit.recruit = true;
put(s, target, 20, 20);
assert.ok(E.move(s, recruit.id, recruit.x, recruit.y + 1)); // steps out onto the main board
assert.ok(!recruit.recruit, 'stepping out ends recruit status');

// Turn flips after all actions; save/load round-trips
s = E.newGame(S);
const n = s.actionsLeft;
for (let i = 0; i < n; i++) {
  const p = s.pieces.find((q) => q.color === 'w' && !q.acted && E.moves(s, q).length);
  const m = E.moves(s, p)[0];
  assert.ok(E.move(s, p.id, m.x, m.y));
}
assert.strictEqual(s.turn, 'b');
s.pending.w = 2;
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
    else if (a.type === 'place') assert.ok(E.place(s, a.x, a.y), 'AI made an illegal placement');
    else if (a.type === 'evolve') assert.ok(E.evolve(s, a.id, a.to));
    else assert.ok(E.move(s, a.id, a.x, a.y), 'AI made an illegal move');
  }
  console.log(`self-play ${size}: ${s.turnNo} turns, winner=${s.winner}, ${Date.now() - t0}ms`);
}
console.log('all tests passed');
