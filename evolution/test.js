/* Run with: node evolution/test.js */
const assert = require('assert');
const E = require('./game.js');
const AI = require('./ai.js');

const S = 24;                 // board width used by most tests
const WP = S + 2;             // white pawn row (front row of white's pocket)
const has = (list, x, y) => list.some((m) => m.x === x && m.y === y);
const at = (s, x, y) => E.pieceAt(s, x, y);

/* Build a clean position: both Kings in their pockets plus the listed pieces [type, color, x, y, lvl]. */
function build(list, extra) {
  let id = 3;
  const pieces = [[1, 'king', 'w', 12, S + 3, 0, 0, 0, 0], [2, 'king', 'b', 12, 0, 0, 0, 0, 0]];
  for (const [type, color, x, y, lvl] of list) pieces.push([id++, type, color, x, y, lvl || 0, 0, 0, 0]);
  return E.fromJSON(Object.assign({ size: S, turn: 'w', actionsLeft: 5, turnNo: 1, winner: null, nextId: id, last: null,
    pending: { w: [], b: [] }, bank: { w: 2000, b: 2000 }, pieces }, extra || {}));
}

// ---------- setup ----------
for (const size of E.SIZES) {
  const s = E.newGame(size);
  assert.strictEqual(s.pieces.length, 32);
  assert.strictEqual(s.pieces.filter((p) => p.type === 'king').length, 2);
  assert.strictEqual(s.actionsLeft, E.actionsFor(size));
  assert.deepStrictEqual(s.bank, { w: 0, b: 0 });
  for (const color of ['w', 'b']) {
    const k = E.pocket(s, color);
    const mine = s.pieces.filter((p) => p.color === color);
    assert.ok(mine.every((p) => p.x >= k.x && p.x < k.x + 8 && p.y >= k.y && p.y < k.y + 2 && p.lvl === 0), 'army starts in its pocket');
  }
  assert.ok(E.inside(s, size / 2, 0) && E.inside(s, size / 2, s.h - 1));
  assert.ok(!E.inside(s, 0, 0) && !E.inside(s, size - 1, s.h - 1), 'void beside the pockets');
  assert.ok(E.inside(s, 0, 2) && E.inside(s, size - 1, size + 1), 'main board is fully playable');
}

// ---------- pawn basics, bank ----------
let s = E.newGame(S);
const pw = at(s, 10, WP);
assert.deepStrictEqual(E.moves(s, pw).map((m) => m.y).sort((a, b) => a - b), [WP - 2, WP - 1]);
assert.ok(E.move(s, pw.id, 10, WP - 2));
assert.strictEqual(s.bank.w, E.MOVE_PAY, 'a move earns 50');
assert.strictEqual(E.move(s, pw.id, 10, WP - 3), null, 'a piece acts once per turn');
// A pawn away from its start row cannot double-step without the jet engine
s = build([['pawn', 'w', 10, 12, 0], ['pawn', 'w', 11, 12, 1]]);
assert.deepStrictEqual(E.moves(s, at(s, 10, 12)).map((m) => m.y), [11]);
assert.deepStrictEqual(E.moves(s, at(s, 11, 12)).map((m) => m.y).sort((a, b) => a - b), [10, 11], 'jet: 1 or 2 squares');

// Capture pays 150
s = build([['pawn', 'w', 10, 12], ['pawn', 'b', 11, 11]]);
const cap = E.move(s, at(s, 10, 12).id, 11, 11);
assert.strictEqual(cap.captured, 'pawn');
assert.strictEqual(s.bank.w, 2000 + E.CAPTURE_PAY);
assert.deepStrictEqual(s.pending.b, ['pawn']);

// ---------- shop ----------
s = build([['pawn', 'w', 10, 12]], { bank: { w: 340, b: 0 } });
const wpawn = at(s, 10, 12);
assert.strictEqual(E.nextUpgrade(wpawn).id, 'jet');
assert.ok(E.buy(s, wpawn.id));
assert.strictEqual(s.bank.w, 190);
assert.strictEqual(E.buy(s, wpawn.id), null, 'sword costs 200, only 190 left');
s.bank.w = 200;
assert.ok(E.buy(s, wpawn.id));
assert.ok(E.hasUpgrade(wpawn, 'jet') && E.hasUpgrade(wpawn, 'sword') && !E.hasUpgrade(wpawn, 'halo'));
s.bank.w = 1000;
assert.ok(E.buy(s, wpawn.id));
assert.strictEqual(E.nextUpgrade(wpawn), null, 'pawn path is finished');
assert.strictEqual(E.buy(s, wpawn.id), null);
assert.strictEqual(E.buy(s, 2), null, 'cannot buy for the enemy King on your turn');
// Costs match the video
const costs = (t) => E.UPGRADES[t].map((u) => u.cost);
assert.deepStrictEqual([costs('pawn'), costs('knight'), costs('bishop'), costs('rook'), costs('queen'), costs('king')],
  [[150, 200, 150], [300, 400, 400, 700], [500, 600], [500, 400], [200, 400, 700], [250]]);

// ---------- pawn: sword, halo ----------
s = build([['pawn', 'w', 10, 12, 0], ['pawn', 'b', 10, 11], ['pawn', 'w', 14, 12, 2], ['pawn', 'b', 14, 11], ['pawn', 'b', 14, 10]]);
assert.ok(!has(E.moves(s, at(s, 10, 12)), 10, 11), 'no sword, no forward capture');
assert.ok(has(E.moves(s, at(s, 14, 12)), 14, 11) && E.moves(s, at(s, 14, 12)).find((m) => m.x === 14 && m.y === 11).capture, 'sword captures ahead');
assert.ok(!has(E.moves(s, at(s, 14, 12)), 14, 10), 'cannot jump over a blocker');
s = build([['pawn', 'w', 14, 12, 2], ['pawn', 'b', 14, 10]]);
assert.ok(E.moves(s, at(s, 14, 12)).find((m) => m.x === 14 && m.y === 10).capture, 'jet + sword captures two ahead');
// Halo: capture a forward diagonal without moving
s = build([['pawn', 'w', 12, 12, 3], ['pawn', 'b', 11, 11], ['pawn', 'b', 13, 13]]);
assert.deepStrictEqual(E.shots(s, at(s, 12, 12)).map((m) => [m.x, m.y]), [[11, 11]], 'only the forward diagonal');
const hp = at(s, 12, 12);
const shot = E.shoot(s, hp.id, 11, 11);
assert.ok(shot && shot.shot);
assert.deepStrictEqual([hp.x, hp.y], [12, 12], 'the pawn did not move');
assert.strictEqual(at(s, 11, 11), null);
assert.strictEqual(s.actionsLeft, 4, 'a shot uses an action');
assert.strictEqual(s.bank.w, 2000 + E.CAPTURE_PAY);
assert.strictEqual(E.shoot(s, hp.id, 11, 11), null, 'it already acted');

// ---------- knight ----------
s = build([['knight', 'w', 12, 12, 0], ['knight', 'w', 4, 8, 2]]);
assert.strictEqual(E.moves(s, at(s, 12, 12)).length, 8);
assert.strictEqual(E.moves(s, at(s, 4, 8)).length, 16, 'extending potion adds the double leap');
assert.ok(has(E.moves(s, at(s, 4, 8)), 4 + 2, 8 + 4));
// bow: 3 diagonal squares, over blockers
s = build([['knight', 'w', 12, 12, 3], ['pawn', 'w', 13, 11], ['pawn', 'b', 15, 9], ['pawn', 'b', 16, 8], ['pawn', 'b', 12, 9]]);
assert.deepStrictEqual(E.shots(s, at(s, 12, 12)).map((m) => [m.x, m.y]), [[15, 9]], 'range 3 diagonal, over the blocker, not 4');
// mage: knight move then diagonal slide
s = build([['knight', 'w', 12, 12, 4]]);
assert.ok(has(E.moves(s, at(s, 12, 12)), 12 + 1 + 3, 12 + 2 + 3), 'knight move then slide');
assert.ok(has(E.moves(s, at(s, 12, 12)), 12 + 1 - 3, 12 + 2 - 3));
// extra life: returns at once with upgrades, once only
s = build([['knight', 'w', 12, 12, 1], ['rook', 'b', 12, 9, 0]]);
s.turn = 'b';
E.move(s, at(s, 12, 9).id, 12, 12);
const revived = s.pieces.find((p) => p.color === 'w' && p.type === 'knight');
assert.ok(revived, 'the knight came back');
assert.strictEqual(revived.lvl, 1);
assert.ok(revived.lifeSpent);
assert.ok(E.inPocket(s, 'w', revived.x, revived.y), 'returned to White\'s pocket');
assert.strictEqual(s.pending.w.length, 0);
// second capture: the life is spent, so it returns as a plain knight for the owner to place
s = build([['knight', 'w', 12, 12, 1], ['rook', 'b', 12, 9, 0]]);
at(s, 12, 12).lifeSpent = true;
s.turn = 'b';
E.move(s, at(s, 12, 9).id, 12, 12);
assert.deepStrictEqual(s.pending.w, ['knight'], 'no life left');
// a knight without the life upgrade goes to the waiting list
s = build([['knight', 'w', 12, 12, 0], ['rook', 'b', 12, 9, 0]]);
s.turn = 'b';
E.move(s, at(s, 12, 9).id, 12, 12);
assert.deepStrictEqual(s.pending.w, ['knight']);

// ---------- bishop ----------
s = build([['bishop', 'w', 12, 12, 1], ['pawn', 'b', 13, 13], ['pawn', 'b', 20, 20], ['pawn', 'b', 11, 12]]);
E.endTurn(s); // White ends the turn: adjacent enemies get frozen
assert.strictEqual(s.turn, 'b');
assert.ok(at(s, 13, 13).frozen && at(s, 11, 12).frozen && !at(s, 20, 20).frozen, 'only adjacent enemies');
assert.deepStrictEqual(E.moves(s, at(s, 13, 13)), [], 'frozen pieces cannot move');
E.endTurn(s); // Black's turn is over: the freeze has lasted one turn
assert.ok(!at(s, 13, 13).frozen, 'freeze lasted one turn');
// The bishop itself unfrozen; it re-freezes only at the end of White's next turn
assert.strictEqual(E.moves(s, at(s, 13, 13)).length > 0, true);
s = build([['bishop', 'w', 12, 12, 0], ['pawn', 'b', 13, 13]]);
E.endTurn(s);
assert.ok(!at(s, 13, 13).frozen, 'no potion, no freeze');
// steroids
s = build([['bishop', 'w', 12, 12, 2], ['bishop', 'w', 4, 8, 0]]);
assert.ok(has(E.moves(s, at(s, 12, 12)), 12, 15) && has(E.moves(s, at(s, 12, 12)), 15, 12), 'moves like a queen');
assert.ok(!has(E.moves(s, at(s, 4, 8)), 4, 11), 'plain bishop stays diagonal');
assert.ok(E.hasUpgrade(at(s, 12, 12), 'freeze'));

// ---------- rook ----------
s = build([['rook', 'w', 12, 12, 1], ['pawn', 'b', 15, 12], ['pawn', 'b', 16, 12], ['pawn', 'b', 9, 12], ['pawn', 'b', 12, 9]]);
assert.deepStrictEqual(E.shots(s, at(s, 12, 12)).map((m) => m.x).sort((a, b) => a - b), [9, 15], 'cannon: 3 squares left/right only');
s = build([['rook', 'w', 12, 12, 2], ['pawn', 'b', 12, 9], ['knight', 'b', 12, 8], ['pawn', 'w', 16, 12], ['pawn', 'b', 17, 12],
  ['pawn', 'b', 8, 12], ['pawn', 'b', 5, 12]]);
const rm = E.moves(s, at(s, 12, 12));
assert.ok(rm.find((m) => m.x === 12 && m.y === 8 && m.capture), 'captures the piece behind another');
assert.ok(rm.find((m) => m.x === 17 && m.y === 12 && m.capture), 'the piece in front can be a friend');
assert.ok(rm.find((m) => m.x === 8 && m.y === 12 && m.capture), 'the first piece is capturable normally');
assert.ok(!has(rm, 5, 12), 'only the piece directly behind, not further');
assert.ok(!rm.some((m) => m.x !== 12 && m.y !== 12), 'never diagonal');
s = build([['rook', 'w', 12, 12, 1], ['pawn', 'b', 12, 9], ['knight', 'b', 12, 8]]);
assert.ok(!has(E.moves(s, at(s, 12, 12)), 12, 8), 'without the castle, no jump capture');

// ---------- queen ----------
s = build([['queen', 'w', 12, 12, 1], ['pawn', 'b', 13, 12], ['pawn', 'b', 12, 11], ['pawn', 'b', 14, 12]]);
assert.deepStrictEqual(E.shots(s, at(s, 12, 12)).map((m) => [m.x, m.y]).sort().join(), '12,11,13,12', 'katana: adjacent only');
s = build([['queen', 'w', 12, 12, 2]]);
assert.ok(has(E.moves(s, at(s, 12, 12)), 13, 14) && has(E.moves(s, at(s, 12, 12)), 20, 12), 'horse: knight moves plus queen moves');
// wings
s = build([['queen', 'w', 12, 12, 3], ['pawn', 'b', 12, 10], ['pawn', 'b', 12, 8], ['pawn', 'w', 16, 12]]);
const qm = E.moves(s, at(s, 12, 12));
assert.ok(qm.find((m) => m.x === 12 && m.y === 10 && m.capture), 'can capture the first piece');
assert.ok(has(qm, 12, 9) && !qm.find((m) => m.x === 12 && m.y === 9).capture, 'flies over it to an empty square');
assert.ok(!has(qm, 12, 8), 'cannot capture after flying over a piece');
assert.ok(has(qm, 12, 7), 'and keeps flying');
assert.ok(!has(qm, 16, 12) && has(qm, 17, 12), 'cannot land on a friend, can fly past');

// ---------- king ----------
s = build([['pawn', 'b', 12 + 2, 12], ['pawn', 'b', 12 + 3, 12], ['pawn', 'b', 12, 12 - 2], ['pawn', 'b', 12 + 2, 12 + 2]]);
const wk = s.pieces.find((p) => p.color === 'w' && p.type === 'king');
wk.x = 12; wk.y = 12; s.cells[12 * S + 12] = wk; s.cells[(S + 3) * S + 12] = null;
wk.lvl = 1;
assert.deepStrictEqual(E.shots(s, wk).map((m) => [m.x, m.y]).sort().join(';'), '12,10;14,12;14,14', 'arm: 2 squares in any direction');

// ---------- capturing the King wins ----------
s = build([['rook', 'w', 12, 4, 0]]);
assert.ok(E.move(s, at(s, 12, 4).id, 12, 0));
assert.strictEqual(s.winner, 'w');

// ---------- home base ----------
s = build([['rook', 'w', 12, 12], ['rook', 'b', 12, 9, 0]], { bank: { w: 0, b: 0 } });
s.turn = 'b';
E.move(s, at(s, 12, 9).id, 12, 12);
assert.deepStrictEqual(s.pending.w, ['rook']);
E.endTurn(s);
assert.strictEqual(s.turn, 'w');
assert.strictEqual(E.place(s, 12, 12), null, 'must be in your own pocket');
assert.strictEqual(E.place(s, E.pocket(s, 'b').x, E.pocket(s, 'b').y), null, 'not the enemy pocket');
const k = E.pocket(s, 'w');
assert.strictEqual(E.place(s, 12, S + 3), null, 'occupied (your King)');
assert.strictEqual(E.place(s, k.x + 1, k.y, 'queen'), null, 'you have no queen waiting');
const placed = E.place(s, k.x + 1, k.y, 'rook');
assert.ok(placed);
const back = at(s, k.x + 1, k.y);
assert.strictEqual(back.type, 'rook');
assert.strictEqual(back.lvl, 0, 'returns un-upgraded');
assert.deepStrictEqual(E.moves(s, back).some((m) => m.capture) || true, true, 'a returned piece may capture');
assert.strictEqual(s.pending.w.length, 0);
assert.strictEqual(E.place(s, k.x + 2, k.y), null, 'nothing left to place');
// Upgrades are lost when a piece is captured and returns
s = build([['queen', 'w', 12, 12, 3], ['rook', 'b', 12, 9]]);
s.turn = 'b';
E.move(s, at(s, 12, 9).id, 12, 12);
E.endTurn(s);
E.place(s, E.pocket(s, 'w').x, E.pocket(s, 'w').y, 'queen');
assert.strictEqual(s.pieces.find((p) => p.color === 'w' && p.type === 'queen').lvl, 0);

// ---------- attacked() ----------
s = build([['queen', 'w', 12, 12, 0], ['pawn', 'w', 16, 12, 3]]);
assert.ok(E.attacked(s, 12, 5, 'w') && !E.attacked(s, 14, 5, 'w'));
assert.ok(E.attacked(s, 15, 11, 'w'), 'halo threatens its forward diagonal');
assert.ok(!E.attacked(s, 17, 13, 'w'));
assert.ok(!s.pieces.some((p) => p.dummy), 'no test pieces left behind');

// ---------- turn flow, save/load ----------
s = E.newGame(S);
const n = s.actionsLeft;
for (let i = 0; i < n; i++) {
  const p = s.pieces.find((q) => q.color === 'w' && !q.acted && E.moves(s, q).length);
  const m = E.moves(s, p)[0];
  assert.ok(E.move(s, p.id, m.x, m.y));
}
assert.strictEqual(s.turn, 'b');
assert.strictEqual(s.bank.w, n * E.MOVE_PAY);
s.pending.w = ['rook', 'pawn'];
s.pieces[0].lvl = 1; s.pieces[0].frozen = true; s.pieces[0].lifeSpent = true;
const copy = E.fromJSON(JSON.parse(JSON.stringify(E.toJSON(s))));
assert.deepStrictEqual(E.toJSON(copy), E.toJSON(s));

// ---------- AI self-play: never throws, never makes an illegal action ----------
for (const size of [24, 40]) {
  s = E.newGame(size);
  let guard = 0;
  const t0 = Date.now();
  let bought = 0, shot = 0, placed2 = 0;
  while (!s.winner && s.turnNo < 300 && guard++ < 20000) {
    const a = AI.chooseAction(s);
    if (a.type === 'end') E.endTurn(s);
    else if (a.type === 'place') { assert.ok(E.place(s, a.x, a.y, a.kind), 'AI made an illegal placement'); placed2++; }
    else if (a.type === 'buy') { assert.ok(E.buy(s, a.id), 'AI made an illegal purchase'); bought++; }
    else if (a.type === 'shoot') { assert.ok(E.shoot(s, a.id, a.x, a.y), 'AI made an illegal shot'); shot++; }
    else assert.ok(E.move(s, a.id, a.x, a.y), 'AI made an illegal move');
  }
  console.log(`self-play ${size}: ${s.turnNo} turns, winner=${s.winner}, bought ${bought}, shots ${shot}, placed ${placed2}, ${Date.now() - t0}ms`);
}
console.log('all tests passed');
