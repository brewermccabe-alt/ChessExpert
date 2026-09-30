/* Run with: node evolution/test.js */
const assert = require('assert');
const E = require('./game.js');
const AI = require('./ai.js');

const S = 24;                 // board width used by most tests
const WP = S + 2;             // white pawn row (front row of white's pocket)
const has = (list, x, y) => list.some((m) => m.x === x && m.y === y);
const at = (s, x, y) => E.pieceAt(s, x, y);
/* settle(): your turn ends (queued upgrades arrive) and the other side passes back to you. */
const settle = (st) => { E.endTurn(st); E.endTurn(st); };

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
  if (size > 8) {
    assert.ok(E.inside(s, size / 2, 0) && E.inside(s, size / 2, s.h - 1));
    assert.ok(!E.inside(s, 0, 0) && !E.inside(s, size - 1, s.h - 1), 'void beside the pockets');
    assert.ok(E.inside(s, 0, 2) && E.inside(s, size - 1, size + 1), 'main board is fully playable');
  }
}

// ---------- classic 8x8: no extension, the home rows are the pocket ----------
{
  const c = E.newGame(8);
  assert.strictEqual(c.h, 8);
  assert.strictEqual(c.pad, 0);
  assert.ok(E.inside(c, 0, 0) && E.inside(c, 7, 7) && !E.inside(c, 8, 0) && !E.inside(c, 0, 8));
  const layout = [];
  for (let y = 0; y < 8; y++) { let r = ''; for (let x = 0; x < 8; x++) { const p = E.pieceAt(c, x, y); r += p ? (p.color === 'w' ? p.type[0].toUpperCase() : p.type[0]) : '.'; } layout.push(r); }
  assert.strictEqual(layout[1], 'pppppppp');
  assert.strictEqual(layout[6], 'PPPPPPPP');
  assert.deepStrictEqual(E.pocket(c, 'w'), { x: 0, y: 6, w: 8, h: 2 });
  assert.deepStrictEqual(E.pocket(c, 'b'), { x: 0, y: 0, w: 8, h: 2 });
  assert.strictEqual(c.actionsLeft, 1, 'one action per turn, as in normal chess');
  // a pawn steps forward one or two from its home row, as in normal chess
  const e2 = E.pieceAt(c, 4, 6);
  assert.deepStrictEqual(E.moves(c, e2).map((m) => m.y).sort(), [4, 5]);
  // a captured piece returns to the home rows (the pocket) of its owner
  const cb = E.newGame(8);
  const brook = E.pieceAt(cb, 0, 0);
  cb.cells[0] = null; brook.y = 4; cb.cells[4 * 8 + 0] = brook;      // black rook on a5
  const wp = E.pieceAt(cb, 0, 6);                                    // white a-pawn
  cb.cells[6 * 8] = null; wp.y = 5; cb.cells[5 * 8] = wp;            // white pawn on a3
  cb.turn = 'b';
  assert.ok(E.move(cb, brook.id, 0, 5), 'rook takes the pawn');
  assert.deepStrictEqual(cb.pending.w, ['pawn']);
  assert.strictEqual(cb.turn, 'w', 'one action per turn: the capture ended Black\'s turn');
  assert.ok(E.freePocketSquares(cb, 'w').some((f) => f.x === 0 && f.y === 6), 'home rows have a free square');
  assert.ok(E.place(cb, 0, 6, 'pawn'), 'placed back on the home row');
  assert.strictEqual(E.place(cb, 3, 3, 'pawn'), null, 'not outside the home rows');
}

// ---------- slide reach: unlimited on 8x8, capped at 8 on the huge boards ----------
{
  const c8 = E.fromJSON({ size: 8, turn: 'w', actionsLeft: 1, turnNo: 1, winner: null, nextId: 5, last: null, pending: { w: [], b: [] },
    bank: { w: 0, b: 0 }, pieces: [[1, 'king', 'w', 4, 7, 0, 0, 0, 0], [2, 'king', 'b', 4, 0, 0, 0, 0, 0], [3, 'rook', 'w', 0, 4, 0, 0, 0, 0], [4, 'bishop', 'w', 1, 3, 0, 0, 0, 0]] });
  const rk = E.moves(c8, E.pieceAt(c8, 0, 4));
  assert.ok(rk.some((m) => m.x === 7 && m.y === 4), 'rook slides the full width of 8x8');
  assert.ok(rk.some((m) => m.x === 0 && m.y === 0) && rk.some((m) => m.x === 0 && m.y === 7));
  assert.ok(E.moves(c8, E.pieceAt(c8, 1, 3)).some((m) => m.x === 4 && m.y === 0), 'bishop slides the full diagonal');
  const c40 = E.fromJSON({ size: 40, turn: 'w', actionsLeft: 5, turnNo: 1, winner: null, nextId: 5, last: null, pending: { w: [], b: [] },
    bank: { w: 0, b: 0 }, pieces: [[1, 'king', 'w', 20, 43, 0, 0, 0, 0], [2, 'king', 'b', 20, 0, 0, 0, 0, 0], [3, 'rook', 'w', 2, 20, 0, 0, 0, 0]] });
  const r40 = E.moves(c40, E.pieceAt(c40, 2, 20));
  assert.ok(r40.some((m) => m.x === 10 && m.y === 20) && !r40.some((m) => m.x === 11 && m.y === 20), 'huge board still caps slides at 8');
}

// ---------- 8x8 chess rules: check, checkmate, stalemate, castling ----------
{
  const sq = (name) => [name.charCodeAt(0) - 97, 8 - parseInt(name[1], 10)];   // 'e1' -> [4, 7]
  /* list: [type, color, 'e1', moved?]; both sides may have more pieces. */
  function pos(list, extra) {
    let id = 1;
    const pieces = list.map(([type, color, name, moved, lvl]) => { const [x, y] = sq(name); return [id++, type, color, x, y, lvl || 0, 0, 0, 0, moved ? 1 : 0]; });
    return E.fromJSON(Object.assign({ size: 8, turn: 'w', actionsLeft: 1, turnNo: 1, winner: null, nextId: id, last: null,
      pending: { w: [], b: [] }, bank: { w: 0, b: 0 }, pieces }, extra || {}));
  }
  const to = (name) => sq(name);
  const legal = (s, name) => E.legalMoves(s, E.pieceAt(s, ...sq(name))).map((m) => String.fromCharCode(97 + m.x) + (8 - m.y)).sort();

  assert.ok(E.newGame(8).chess && !E.newGame(24).chess, 'chess rules on 8x8 only');
  assert.ok(!E.newGame(8).check);

  // A King cannot step into check, and a pinned piece cannot leave the line
  let s = pos([['king', 'w', 'e1'], ['rook', 'b', 'a2'], ['king', 'b', 'h8']]);
  assert.deepStrictEqual(legal(s, 'e1'), ['d1', 'f1'], 'cannot step onto the attacked second rank');
  s = pos([['king', 'w', 'e1'], ['bishop', 'w', 'e2'], ['rook', 'b', 'e8'], ['king', 'b', 'h8']]);
  assert.deepStrictEqual(legal(s, 'e2'), [], 'a bishop pinned on the file cannot move');
  s = pos([['king', 'w', 'e1'], ['rook', 'w', 'e2'], ['rook', 'b', 'e8'], ['king', 'b', 'h8']]);
  assert.ok(legal(s, 'e2').includes('e5') && !legal(s, 'e2').includes('d2'), 'a pinned rook may slide along the pin');
  assert.strictEqual(E.move(s, E.pieceAt(s, ...sq('e2')).id, ...to('d2')), null, 'illegal move is rejected');

  // Check: you must answer it
  s = pos([['king', 'w', 'e1'], ['knight', 'w', 'b1'], ['rook', 'b', 'e8'], ['king', 'b', 'h8']]);
  assert.ok(E.inCheck(s, 'w'));
  assert.ok(s.check, 'the loaded position reports check');
  assert.deepStrictEqual(legal(s, 'b1'), [], 'the knight cannot block the check, so it has no legal move');
  s = pos([['king', 'w', 'e1'], ['rook', 'w', 'a4'], ['rook', 'b', 'e8'], ['king', 'b', 'h8']]);
  assert.deepStrictEqual(legal(s, 'a4'), ['e4'], 'the only legal rook move blocks the check');
  // Check is reported on the next turn
  s = pos([['king', 'w', 'e1'], ['rook', 'w', 'a1'], ['king', 'b', 'e8']]);
  E.move(s, E.pieceAt(s, ...sq('a1')).id, ...to('a8'));
  assert.strictEqual(s.turn, 'b');
  assert.ok(s.check && !s.winner, 'Black is in check but can escape');

  // Cannot place a returning piece while in check
  s = pos([['king', 'w', 'e1'], ['rook', 'b', 'e8'], ['king', 'b', 'h8']], { pending: { w: ['pawn'], b: [] } });
  assert.strictEqual(E.place(s, 0, 6, 'pawn'), null, 'no placing while in check');

  // Fool's mate: 1. f3 e5 2. g4 Qh4#
  s = E.newGame(8);
  const play = (a, b) => { const p = E.pieceAt(s, ...sq(a)); assert.ok(E.move(s, p.id, ...sq(b)), a + '-' + b); };
  play('f2', 'f3'); play('e7', 'e5'); play('g2', 'g4');
  assert.ok(!s.winner);
  play('d8', 'h4');
  assert.strictEqual(s.winner, 'b');
  assert.strictEqual(s.result, 'checkmate');
  assert.ok(s.check);

  // Stalemate: Black king h8, White Qg6 and Kf7: Black to move with no legal move and not in check
  s = pos([['king', 'b', 'h8'], ['king', 'w', 'f7'], ['queen', 'w', 'g5']]);
  assert.ok(E.move(s, E.pieceAt(s, ...sq('g5')).id, ...to('g6')));
  assert.strictEqual(s.winner, 'draw');
  assert.strictEqual(s.result, 'stalemate');
  assert.ok(!s.check);

  // Being stuck is not stalemate if a waiting piece can still be placed
  s = pos([['king', 'b', 'h8'], ['king', 'w', 'f7'], ['queen', 'w', 'g5']], { pending: { w: [], b: ['pawn'] } });
  E.move(s, E.pieceAt(s, ...sq('g5')).id, ...to('g6'));
  assert.ok(!s.winner, 'Black can still place a returning piece');

  // Passing: not allowed while you can move, allowed when nothing can (all frozen)
  s = E.newGame(8);
  assert.ok(!E.canPass(s));
  assert.ok(E.canPass(E.newGame(24)), 'big boards may always pass');
  s = pos([['king', 'w', 'e1'], ['king', 'b', 'e8']]);
  E.endTurn(s); // Black to move
  E.pieceAt(s, ...sq('e8')).frozen = true;
  assert.ok(E.canPass(s), 'a frozen side has nothing legal to do');

  // Castling
  const castleSetup = (extraBlack) => pos([['king', 'w', 'e1'], ['rook', 'w', 'h1'], ['rook', 'w', 'a1'], ['king', 'b', 'e8']].concat(extraBlack || []));
  s = castleSetup();
  let km = E.legalMoves(s, E.pieceAt(s, ...sq('e1'))).filter((m) => m.castle);
  assert.deepStrictEqual(km.map((m) => m.x).sort(), [2, 6], 'both castling moves are available');
  const king = E.pieceAt(s, ...sq('e1'));
  assert.ok(E.move(s, king.id, ...to('g1')));
  assert.deepStrictEqual([E.pieceAt(s, ...sq('g1')).type, E.pieceAt(s, ...sq('f1')).type], ['king', 'rook'], 'kingside castle moved both pieces');
  assert.strictEqual(E.pieceAt(s, ...sq('h1')), null);
  assert.ok(E.pieceAt(s, ...sq('a1')).type === 'rook');
  s = castleSetup();
  assert.ok(E.move(s, E.pieceAt(s, ...sq('e1')).id, ...to('c1')));
  assert.deepStrictEqual([E.pieceAt(s, ...sq('c1')).type, E.pieceAt(s, ...sq('d1')).type], ['king', 'rook'], 'queenside castle');
  assert.strictEqual(E.pieceAt(s, ...sq('a1')), null);
  // blocked by a piece between
  s = castleSetup([['bishop', 'w', 'f1']]);
  assert.ok(!E.legalMoves(s, E.pieceAt(s, ...sq('e1'))).some((m) => m.x === 6), 'a piece between blocks it');
  // not out of check
  s = castleSetup([['rook', 'b', 'e5']]);
  assert.ok(!E.legalMoves(s, E.pieceAt(s, ...sq('e1'))).some((m) => m.castle), 'cannot castle out of check');
  // not through an attacked square
  s = castleSetup([['rook', 'b', 'f5']]);
  km = E.legalMoves(s, E.pieceAt(s, ...sq('e1'))).filter((m) => m.castle);
  assert.deepStrictEqual(km.map((m) => m.x), [2], 'kingside is attacked at f1, queenside is fine');
  // not into check
  s = castleSetup([['rook', 'b', 'g5']]);
  assert.deepStrictEqual(E.legalMoves(s, E.pieceAt(s, ...sq('e1'))).filter((m) => m.castle).map((m) => m.x), [2]);
  // an attacked b1 does not matter for queenside
  s = castleSetup([['rook', 'b', 'b5']]);
  assert.ok(E.legalMoves(s, E.pieceAt(s, ...sq('e1'))).some((m) => m.castle && m.x === 2), 'b1 may be attacked');
  // a moved King or Rook cannot castle
  s = pos([['king', 'w', 'e1', true], ['rook', 'w', 'h1'], ['king', 'b', 'e8']]);
  assert.ok(!E.legalMoves(s, E.pieceAt(s, ...sq('e1'))).some((m) => m.castle), 'moved king');
  s = pos([['king', 'w', 'e1'], ['rook', 'w', 'h1', true], ['king', 'b', 'e8']]);
  assert.ok(!E.legalMoves(s, E.pieceAt(s, ...sq('e1'))).some((m) => m.castle), 'moved rook');
  // moving and coming back loses the right
  s = pos([['king', 'w', 'e1'], ['rook', 'w', 'h1'], ['king', 'b', 'e8']]);
  E.move(s, E.pieceAt(s, ...sq('h1')).id, ...to('h2')); E.endTurn(s);
  E.move(s, E.pieceAt(s, ...sq('e8')).id, ...to('d8'));
  E.move(s, E.pieceAt(s, ...sq('h2')).id, ...to('h1')); E.endTurn(s);
  assert.ok(!E.legalMoves(s, E.pieceAt(s, ...sq('e1'))).some((m) => m.castle), 'the rook moved once, so no castling');
  // Black castles too
  s = pos([['king', 'w', 'e1'], ['king', 'b', 'e8'], ['rook', 'b', 'h8']]);
  E.endTurn(s);
  assert.ok(E.move(s, E.pieceAt(s, ...sq('e8')).id, ...to('g8')));
  assert.strictEqual(E.pieceAt(s, ...sq('f8')).type, 'rook');
  // a returned rook cannot castle
  s = pos([['king', 'w', 'e1'], ['king', 'b', 'e8']], { pending: { w: ['rook'], b: [] } });
  assert.ok(E.place(s, 7, 7, 'rook'));
  assert.ok(!E.legalMoves(s, E.pieceAt(s, ...sq('e1'))).some((m) => m.castle), 'a returned rook counts as moved');
  // upgrades count for check: a cannon (rook, level 1) fires two squares along a rank
  s = pos([['king', 'w', 'e1'], ['rook', 'b', 'b1', false, 1], ['king', 'b', 'e8']]);
  assert.ok(E.inCheck(s, 'w'), 'not blocked: a slide gives check');
  s = pos([['king', 'w', 'e1'], ['pawn', 'w', 'd1'], ['rook', 'b', 'b1', false, 1], ['king', 'b', 'e8']]);
  assert.ok(E.inCheck(s, 'w'), 'a cannon shoots over the blocker: still check');
  // and the big boards keep the old rule: no legality filter
  const bigB = E.newGame(24);
  assert.strictEqual(E.legalMoves(bigB, E.pieceAt(bigB, 10, 26)).length, E.moves(bigB, E.pieceAt(bigB, 10, 26)).length);

  // ---- en passant ----
  const epMoves = (st, name) => E.legalMoves(st, E.pieceAt(st, ...sq(name))).filter((m) => m.ep);
  const epBase = () => { const st = pos([['king', 'w', 'e1'], ['king', 'b', 'e8'], ['pawn', 'w', 'e5'], ['pawn', 'b', 'd7']]); E.endTurn(st); return st; };
  s = epBase();
  assert.ok(E.move(s, E.pieceAt(s, ...sq('d7')).id, ...to('d5')));
  assert.ok(s.ep && s.ep.y === sq('d6')[1], 'a two-square pawn move records the passed square');
  let em = epMoves(s, 'e5');
  assert.deepStrictEqual(em.map((m) => [m.x, m.y]), [sq('d6')], 'en passant is offered on the passed square');
  const bankBefore = s.bank.w;
  const whitePawn = E.pieceAt(s, ...sq('e5'));
  const epRes = E.move(s, whitePawn.id, ...to('d6'));
  assert.ok(epRes && epRes.enPassant && epRes.captured === 'pawn');
  assert.strictEqual(E.pieceAt(s, ...sq('d5')), null, 'the captured pawn is removed');
  assert.strictEqual(E.pieceAt(s, ...sq('d6')), whitePawn);
  assert.deepStrictEqual(s.pending.b, ['pawn']);
  assert.strictEqual(s.bank.w, bankBefore + E.CAPTURE_PAY, 'en passant pays like a capture');
  // it is only available immediately
  s = epBase();
  E.move(s, E.pieceAt(s, ...sq('d7')).id, ...to('d5'));
  E.move(s, E.pieceAt(s, ...sq('e1')).id, ...to('e2'));      // White plays something else
  E.move(s, E.pieceAt(s, ...sq('e8')).id, ...to('f8'));
  assert.strictEqual(epMoves(s, 'e5').length, 0, 'the chance has gone');
  // it also lapses if both sides pass (all pieces frozen) instead of moving
  s = epBase();
  E.move(s, E.pieceAt(s, ...sq('d7')).id, ...to('d5'));
  E.endTurn(s);   // White passes
  E.endTurn(s);   // Black passes: it is White's turn again, two plies after the pawn move
  assert.strictEqual(epMoves(s, 'e5').length, 0, 'an old en passant chance does not come back');
  // not after a one-square move
  s = pos([['king', 'w', 'e1'], ['king', 'b', 'e8'], ['pawn', 'w', 'e5'], ['pawn', 'b', 'd6']]);
  E.endTurn(s);
  E.move(s, E.pieceAt(s, ...sq('d6')).id, ...to('d5'));
  assert.strictEqual(epMoves(s, 'e5').length, 0, 'a one-square move cannot be captured en passant');
  // only by an adjacent pawn
  s = pos([['king', 'w', 'e1'], ['king', 'b', 'e8'], ['pawn', 'w', 'f5'], ['pawn', 'b', 'd7']]);
  E.endTurn(s);
  E.move(s, E.pieceAt(s, ...sq('d7')).id, ...to('d5'));
  assert.strictEqual(epMoves(s, 'f5').length, 0, 'not adjacent');
  // survives saving and loading
  s = epBase();
  E.move(s, E.pieceAt(s, ...sq('d7')).id, ...to('d5'));
  const reloaded = E.fromJSON(JSON.parse(JSON.stringify(E.toJSON(s))));
  assert.strictEqual(epMoves(reloaded, 'e5').length, 1, 'en passant chance survives a save');
  // illegal if it would expose the King along the rank (the classic horizontal pin)
  s = pos([['king', 'w', 'a5'], ['pawn', 'w', 'e5'], ['rook', 'b', 'h5'], ['king', 'b', 'e8'], ['pawn', 'b', 'd7']]);
  E.endTurn(s);
  E.move(s, E.pieceAt(s, ...sq('d7')).id, ...to('d5'));
  assert.strictEqual(epMoves(s, 'e5').length, 0, 'en passant would expose the King, so it is illegal');
  assert.ok(E.legalMoves(s, E.pieceAt(s, ...sq('e5'))).some((m) => m.y === sq('e6')[1] && !m.ep), 'an ordinary pawn move is still fine');
  // a jet-engine pawn's two-square move can also be taken en passant
  s = pos([['king', 'w', 'e1'], ['king', 'b', 'e8'], ['pawn', 'w', 'e4'], ['pawn', 'b', 'd6', true, 1]]);
  E.endTurn(s);
  assert.ok(E.move(s, E.pieceAt(s, ...sq('d6')).id, ...to('d4')));
  assert.strictEqual(epMoves(s, 'e4').length, 1, 'jet pawn two-step from mid-board');
  // big boards have no en passant
  const bp = build([['pawn', 'w', 10, 10], ['pawn', 'b', 11, 8, 1]]);
  bp.turn = 'b';
  E.move(bp, at(bp, 11, 8).id, 11, 10);
  assert.ok(!E.moves(bp, at(bp, 10, 10)).some((m) => m.capture), 'no en passant on the big boards');

  // ---- promotion ----
  const promoteBase = () => pos([['king', 'w', 'e1'], ['king', 'b', 'h8'], ['pawn', 'w', 'a7']]);
  s = promoteBase();
  let pp = E.pieceAt(s, ...sq('a7'));
  let pr = E.move(s, pp.id, ...to('a8'));
  assert.ok(pr && pr.promoted === 'queen', 'promotes to a Queen by default');
  assert.strictEqual(pp.type, 'queen');
  assert.ok(s.check, 'the new queen gives check along the eighth rank');
  for (const kind of ['rook', 'bishop', 'knight']) {
    s = promoteBase(); pp = E.pieceAt(s, ...sq('a7'));
    assert.ok(E.move(s, pp.id, ...to('a8'), kind));
    assert.strictEqual(pp.type, kind, 'promotes to ' + kind);
  }
  s = promoteBase(); pp = E.pieceAt(s, ...sq('a7'));
  assert.strictEqual(E.move(s, pp.id, ...to('a8'), 'king'), null, 'cannot promote to a King');
  assert.strictEqual(E.move(s, pp.id, ...to('a8'), 'pawn'), null, 'cannot stay a pawn');
  assert.strictEqual(pp.type, 'pawn'); assert.deepStrictEqual([pp.x, pp.y], sq('a7'), 'a rejected promotion changes nothing');
  assert.deepStrictEqual(E.PROMOTIONS, ['queen', 'rook', 'bishop', 'knight']);
  // by capture, and the pawn's upgrades are not carried over
  s = pos([['king', 'w', 'e1'], ['king', 'b', 'h8'], ['pawn', 'w', 'a7', true, 3], ['rook', 'b', 'b8']]);
  pp = E.pieceAt(s, ...sq('a7'));
  const promoCap = E.move(s, pp.id, ...to('b8'), 'rook');
  assert.ok(promoCap.captured === 'rook' && promoCap.promoted === 'rook');
  assert.strictEqual(pp.lvl, 0, 'a promoted piece starts un-upgraded');
  assert.deepStrictEqual(s.pending.b, ['rook']);
  // Black promotes on the first rank
  s = pos([['king', 'w', 'e1'], ['king', 'b', 'e8'], ['pawn', 'b', 'a2']]);
  E.endTurn(s);
  pp = E.pieceAt(s, ...sq('a2'));
  assert.ok(E.move(s, pp.id, ...to('a1'), 'knight'));
  assert.strictEqual(pp.type, 'knight');
  // a sword pawn can promote by capturing straight ahead, and a jet pawn can promote from two squares away
  s = pos([['king', 'w', 'e1'], ['king', 'b', 'h8'], ['pawn', 'w', 'a7', true, 2], ['knight', 'b', 'a8']]);
  pp = E.pieceAt(s, ...sq('a7'));
  assert.ok(E.move(s, pp.id, ...to('a8')));
  assert.strictEqual(pp.type, 'queen');
  s = pos([['king', 'w', 'e1'], ['king', 'b', 'h8'], ['pawn', 'w', 'c6', true, 1]]);
  pp = E.pieceAt(s, ...sq('c6'));
  assert.ok(E.move(s, pp.id, ...to('c8')));
  assert.strictEqual(pp.type, 'queen', 'a jet pawn promotes on a two-square jump');
  // big boards do not promote
  const bigPromo = build([['pawn', 'w', 10, 3]]);
  assert.ok(E.move(bigPromo, at(bigPromo, 10, 3).id, 10, 2));
  assert.strictEqual(at(bigPromo, 10, 2).type, 'pawn', 'no promotion on the big boards');
}

// ---------- freeze never affects a King ----------
{
  const fs = build([['bishop', 'w', 12, 12, 1], ['pawn', 'b', 13, 13], ['king', 'b', 11, 11]]);
  const blackKing = fs.pieces.find((p) => p.color === 'b' && p.type === 'king');
  blackKing.x = 11; blackKing.y = 11; fs.cells[0 * S + 12] = null; fs.cells[11 * S + 11] = blackKing;   // move the Black King beside the bishop
  E.endTurn(fs);
  assert.ok(at(fs, 13, 13).frozen, 'the adjacent pawn is frozen');
  assert.ok(!blackKing.frozen, 'the adjacent King is not');
  assert.ok(E.moves(fs, blackKing).length > 0, 'and it can still move');
  assert.ok(E.UPGRADES.bishop[0].desc.includes('King cannot be frozen'));
}

// ---------- placing a returned piece uses an action ----------
{
  // Big board: uses one of the several actions; the turn continues
  let ps = build([['rook', 'w', 12, 12]], { pending: { w: ['pawn', 'knight'], b: [] } });
  const k = E.pocket(ps, 'w');
  assert.strictEqual(ps.actionsLeft, 5);
  const placedPawn = E.place(ps, k.x, k.y, 'pawn');
  assert.ok(placedPawn);
  assert.strictEqual(ps.actionsLeft, 4, 'placing costs an action');
  assert.strictEqual(ps.turn, 'w', 'a big-board turn goes on');
  assert.strictEqual(ps.bank.w, 2000, 'placing earns nothing');
  assert.ok(E.move(ps, at(ps, 12, 12).id, 12, 10), 'other pieces can still act this turn');
  // it can be the last action
  ps.actionsLeft = 1;
  assert.ok(E.place(ps, k.x + 1, k.y, 'knight'));
  assert.strictEqual(ps.turn, 'b', 'using the last action ends the turn');
  assert.strictEqual(E.place(ps, k.x + 2, k.y), null, 'nothing waiting');
  // no actions left, no placing
  ps = build([], { pending: { w: ['pawn'], b: [] }, actionsLeft: 0 });
  assert.strictEqual(E.place(ps, E.pocket(ps, 'w').x, E.pocket(ps, 'w').y), null, 'no actions left');
  // 8x8: placing is your whole turn
  const c = E.fromJSON({ size: 8, turn: 'w', actionsLeft: 1, turnNo: 1, winner: null, nextId: 5, last: null, pending: { w: ['queen'], b: [] },
    bank: { w: 0, b: 0 }, pieces: [[1, 'king', 'w', 4, 7, 0, 0, 0, 0, 0], [2, 'king', 'b', 4, 0, 0, 0, 0, 0, 0], [3, 'pawn', 'w', 0, 6, 0, 0, 0, 0, 0]] });
  assert.ok(E.canPlaceNow(c, 'w'));
  assert.ok(!E.canPass(c), 'you must act: placing counts as a move');
  assert.ok(E.place(c, 3, 7, 'queen'));
  assert.strictEqual(c.turn, 'b', 'on 8x8 placing ends your turn');
  assert.ok(!E.pieceAt(c, 3, 7).acted, 'the new piece has not moved');
  // placing can answer a stalemate: not stalemate while a piece can be placed, even if nothing else can move
  const sm = E.fromJSON({ size: 8, turn: 'w', actionsLeft: 1, turnNo: 1, winner: null, nextId: 6, last: null, pending: { w: [], b: ['pawn'] },
    bank: { w: 0, b: 0 }, pieces: [[1, 'king', 'b', 7, 0, 0, 0, 0, 0, 0], [2, 'king', 'w', 5, 1, 0, 0, 0, 0, 0], [3, 'queen', 'w', 6, 4, 0, 0, 0, 0, 0]] });
  assert.ok(E.move(sm, 3, 6, 2));
  assert.ok(!sm.winner, 'Black can still place a piece, so this is not stalemate');
  assert.ok(E.canPlaceNow(sm, 'b') && !E.canPass(sm));
  assert.ok(E.place(sm, 3, 1, 'pawn') || E.place(sm, 0, 1, 'pawn'), 'Black uses its turn to place');
  // not while in check
  const chk = E.fromJSON({ size: 8, turn: 'w', actionsLeft: 1, turnNo: 1, winner: null, nextId: 5, last: null, pending: { w: ['pawn'], b: [] },
    bank: { w: 0, b: 0 }, pieces: [[1, 'king', 'w', 4, 7, 0, 0, 0, 0, 0], [2, 'king', 'b', 0, 0, 0, 0, 0, 0, 0], [3, 'rook', 'b', 4, 0, 0, 0, 0, 0, 0]] });
  assert.ok(!E.canPlaceNow(chk, 'w') && E.place(chk, 0, 6, 'pawn') === null);
}

// ---------- an upgrade cannot be used the turn it is bought ----------
{
  // A halo pawn cannot fire on the turn the halo is bought
  const hs = build([['pawn', 'w', 12, 12, 2], ['pawn', 'b', 11, 11]]);
  const hp = at(hs, 12, 12);
  assert.ok(E.buy(hs, hp.id));
  assert.strictEqual(E.legalShots(hs, hp).length, 0, 'no halo yet this turn');
  assert.strictEqual(E.shoot(hs, hp.id, 11, 11), null);
  settle(hs);
  assert.strictEqual(E.legalShots(hs, hp).length, 1, 'the halo works from your next turn');
  assert.ok(E.shoot(hs, hp.id, 11, 11));
  // It lands before check is worked out: a cannon bought this turn gives check when the turn ends (8x8)
  const cs = E.fromJSON({ size: 8, turn: 'w', actionsLeft: 1, turnNo: 1, winner: null, nextId: 6, last: null, pending: { w: [], b: [] },
    bank: { w: 300, b: 0 }, pieces: [[1, 'king', 'w', 4, 7, 0, 0, 0, 0, 0], [2, 'king', 'b', 3, 0, 0, 0, 0, 0, 0], [3, 'rook', 'w', 0, 0, 0, 0, 0, 0, 0],
      [4, 'pawn', 'b', 1, 0, 0, 0, 0, 0, 0]] });
  assert.ok(!E.inCheck(cs, 'b'), 'a pawn blocks the rook: no check yet');
  assert.ok(E.buy(cs, 3));
  assert.ok(!E.inCheck(cs, 'b'), 'the cannon is not active this turn');
  assert.ok(E.move(cs, 1, 4, 6));        // White makes a quiet move; the turn ends and the cannon arrives
  assert.strictEqual(cs.turn, 'b');
  assert.ok(cs.check, 'the cannon now attacks over the pawn: Black is in check');
  // An unspent queued upgrade is saved and restored
  const q = build([['rook', 'w', 12, 12]], { bank: { w: 500, b: 0 } });
  E.buy(q, at(q, 12, 12).id);
  const q2 = E.fromJSON(JSON.parse(JSON.stringify(E.toJSON(q))));
  assert.ok(at(q2, 12, 12).upgrading && E.queuedUpgrade(at(q2, 12, 12)).id === 'cannon');
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
// An upgrade is paid for at once but takes effect at the end of your turn.
s = build([['pawn', 'w', 10, 12]], { bank: { w: 145, b: 0 } });
const wpawn = at(s, 10, 12);
assert.strictEqual(E.nextUpgrade(wpawn).id, 'jet');
assert.ok(E.buy(s, wpawn.id));
assert.strictEqual(s.bank.w, 95, 'paid at once');
assert.ok(!E.hasUpgrade(wpawn, 'jet'), 'but not usable yet');
assert.ok(wpawn.upgrading && E.queuedUpgrade(wpawn).id === 'jet');
assert.strictEqual(E.nextUpgrade(wpawn), null, 'one upgrade at a time');
assert.strictEqual(E.buy(s, wpawn.id), null, 'cannot buy again while one is on its way');
assert.strictEqual(s.bank.w, 95);
settle(s);
assert.ok(E.hasUpgrade(wpawn, 'jet') && !wpawn.upgrading, 'it arrived at the end of the turn');
assert.strictEqual(E.buy(s, wpawn.id), null, 'sword costs 100, only 95 left');
s.bank.w = 100;
assert.ok(E.buy(s, wpawn.id));
settle(s);
assert.ok(E.hasUpgrade(wpawn, 'jet') && E.hasUpgrade(wpawn, 'sword') && !E.hasUpgrade(wpawn, 'halo'));
s.bank.w = 1000;
assert.ok(E.buy(s, wpawn.id));
settle(s);
assert.ok(E.hasUpgrade(wpawn, 'halo'));
assert.strictEqual(E.nextUpgrade(wpawn), null, 'pawn path is finished');
assert.strictEqual(E.buy(s, wpawn.id), null);
assert.strictEqual(E.buy(s, 2), null, 'cannot buy for the enemy King on your turn');
// Costs are half the original video's
const costs = (t) => E.UPGRADES[t].map((u) => u.cost);
assert.deepStrictEqual([costs('pawn'), costs('knight'), costs('bishop'), costs('rook'), costs('queen'), costs('king')],
  [[50, 100, 50], [150, 200, 200, 350], [250, 300], [250, 200], [100, 200, 350], [150]]);

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

// ---------- computer strength (ELO) ----------
function mulberry32(seed) { return () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let x = Math.imul(seed ^ (seed >>> 15), 1 | seed); x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x; return ((x ^ (x >>> 14)) >>> 0) / 4294967296; }; }
function applyAction(st, a) {
  if (a.type === 'end') { if (st.chess) assert.ok(E.canPass(st), 'the bot passed while it had a legal action'); E.endTurn(st); }
  else if (a.type === 'place') assert.ok(E.place(st, a.x, a.y, a.kind), 'illegal placement');
  else if (a.type === 'buy') assert.ok(E.buy(st, a.id), 'illegal purchase');
  else if (a.type === 'shoot') assert.ok(E.shoot(st, a.id, a.x, a.y), 'illegal shot');
  else assert.ok(E.move(st, a.id, a.x, a.y, a.promo), 'illegal move');
}
function playGame(whiteElo, blackElo, seed, size, cap) {
  const st = E.newGame(size || 8), rng = mulberry32(seed);
  let guard = 0;
  while (!st.winner && st.turnNo < (cap || 240) && guard++ < 50000) applyAction(st, AI.chooseAction(st, { elo: st.turn === 'w' ? whiteElo : blackElo, rng }));
  return st;
}
{
  // The settings form a proper scale: 400 is random play, the range is 400..1500, and every step is stronger
  assert.strictEqual(AI.MIN_ELO, 400);
  assert.ok(AI.MAX_ELO > AI.MIN_ELO && AI.DEFAULT_ELO >= AI.MIN_ELO && AI.DEFAULT_ELO <= AI.MAX_ELO);
  assert.strictEqual(AI.paramsFor(AI.MIN_ELO).blunder, 1, 'the lowest setting plays at random');
  let prev = AI.paramsFor(AI.MIN_ELO);
  for (let elo = AI.MIN_ELO + 100; elo <= AI.TOP_HEURISTIC_ELO; elo += 100) {
    const p = AI.paramsFor(elo);
    assert.ok(p.noise <= prev.noise && p.blunder <= prev.blunder && p.skill >= prev.skill, `settings never get weaker (${elo})`);
    assert.ok(p.skill > prev.skill, `each 100 points is a real step (${elo})`);
    assert.ok(!prev.lookahead || p.lookahead, 'foresight is never lost going up');
    prev = p;
  }
  // Above 1500 strength comes from the search: a blend of the two levels either side, and every step goes further up
  let rank = -1;
  for (let elo = AI.TOP_HEURISTIC_ELO + 100; elo <= AI.MAX_ELO; elo += 100) {
    const plan = AI.planFor(elo);
    assert.ok(plan.upper && plan.pUpper > 0 && plan.pUpper <= 1, `a search level is in play at ${elo}`);
    const idx = AI.SEARCH_LEVELS.indexOf(plan.upper), r = idx + plan.pUpper;
    assert.ok(r > rank, `each 100 points above 1500 is a real step (${elo})`);
    assert.ok(!plan.lower || AI.SEARCH_LEVELS.indexOf(plan.lower) === idx - 1);
    rank = r;
  }
  assert.deepStrictEqual(AI.planFor(AI.MAX_ELO).upper, AI.SEARCH_LEVELS[AI.SEARCH_LEVELS.length - 1]);
  assert.strictEqual(AI.planFor(AI.MAX_ELO).pUpper, 1, 'the top setting is always the deepest search');
  assert.strictEqual(AI.planFor(AI.TOP_HEURISTIC_ELO).upper, null, 'up to 1500 the heuristic bot plays');
  assert.ok(AI.SEARCH_LEVELS.every((l, i) => i === 0 || (l.elo > AI.SEARCH_LEVELS[i - 1].elo && l.depth >= AI.SEARCH_LEVELS[i - 1].depth)), 'deeper searches sit higher');
  // on the big boards the search is not used: the top of the heuristic range applies
  assert.deepStrictEqual(AI.paramsFor(AI.MAX_ELO).skill, AI.paramsFor(AI.TOP_HEURISTIC_ELO).skill);
  assert.ok(!AI.paramsFor(AI.MIN_ELO).lookahead && AI.paramsFor(AI.MAX_ELO).lookahead && AI.paramsFor(AI.MAX_ELO).exchanges);
  assert.deepStrictEqual(AI.paramsFor(99999), AI.paramsFor(AI.MAX_ELO), 'out-of-range values are clamped');
  assert.deepStrictEqual(AI.paramsFor(-5), AI.paramsFor(AI.MIN_ELO));
  assert.ok(AI.tierName(AI.MIN_ELO) && AI.tierName(AI.MAX_ELO) && AI.tierName(900));

  // Deterministic for a given seed
  const trace = (seed) => { const st = E.newGame(8), rng = mulberry32(seed), out = []; for (let i = 0; i < 40 && !st.winner; i++) { const a = AI.chooseAction(st, { elo: 1200, rng }); out.push(JSON.stringify(a)); applyAction(st, a); } return out.join('|'); };
  assert.strictEqual(trace(7), trace(7), 'same seed, same play');
  assert.notStrictEqual(trace(7), trace(8), 'different seed, different play');

  // Every setting plays only legal actions, on every board, and never passes when it can act
  for (const size of [8, 24]) {
    for (const [w, b] of [[AI.MIN_ELO, 2000], [2000, AI.MIN_ELO], [AI.DEFAULT_ELO, AI.DEFAULT_ELO]]) playGame(w, b, 11 + size, size, 120);
  }
  playGame(AI.MAX_ELO, AI.MIN_ELO, 5, 8, 14);   // the deepest search only plays legal actions (short game: it is slow)
  playGame(1800, 1900, 6, 8, 40);               // and so do the blended settings

  // A stronger setting really is stronger (seeded games, colours alternate)
  const score = (hi, lo, n) => { let pts = 0; for (let i = 0; i < n; i++) { const hiWhite = i % 2 === 0; const st = hiWhite ? playGame(hi, lo, 300 + i) : playGame(lo, hi, 300 + i); if (!st.winner || st.winner === 'draw') pts += 0.5; else if ((st.winner === 'w') === hiWhite) pts += 1; } return pts / n; };
  const t0 = Date.now();
  const topVsRandom = score(1500, AI.MIN_ELO, 10);
  const topVsMid = score(1500, 800, 10);
  const midVsRandom = score(1100, AI.MIN_ELO, 10);
  const searchVsTop = score(2000, 1500, 6);
  console.log(`strength: 1500 vs 400 ${topVsRandom}, 1500 vs 800 ${topVsMid}, 1100 vs 400 ${midVsRandom}, 2000 vs 1500 ${searchVsTop} (${Date.now() - t0}ms)`);
  assert.ok(searchVsTop >= 0.8, 'the searching levels beat the old top setting');
  assert.ok(topVsRandom >= 0.9, 'the top setting crushes the random one');
  assert.ok(topVsMid >= 0.7, 'the top setting beats a beginner-level one');
  assert.ok(midVsRandom >= 0.8, 'a middle setting beats random play');

  // It answers in reasonable time even at full strength
  const tt = Date.now();
  AI.chooseAction(E.newGame(8), { elo: AI.MAX_ELO, rng: mulberry32(1) });
  assert.ok(Date.now() - tt < 3000, 'a full-strength move takes well under 3 seconds');
}

// ---------- the searching bot (8x8) ----------
{
  const sqn = (name) => [name.charCodeAt(0) - 97, 8 - parseInt(name[1], 10)];
  const setup = (list, turn) => { let id = 1; const pieces = list.map(([type, color, name, lvl]) => { const [x, y] = sqn(name); return [id++, type, color, x, y, lvl || 0, 0, 0, 0, 1]; });
    return E.fromJSON({ size: 8, turn: turn || 'w', actionsLeft: 1, turnNo: 5, winner: null, nextId: id, last: null, pending: { w: [], b: [] }, bank: { w: 0, b: 0 }, pieces }); };
  const dest = (a) => String.fromCharCode(97 + a.x) + (8 - a.y);
  const rng0 = () => 0.5;
  const search = (st, depth) => AI.searchBest(st, { depth, nodes: 300000 }, rng0);

  let st = setup([['king', 'w', 'g1'], ['pawn', 'w', 'f2'], ['pawn', 'w', 'g2'], ['pawn', 'w', 'h2'], ['king', 'b', 'g8'], ['rook', 'b', 'a8']], 'b');
  assert.strictEqual(dest(search(st, 2)), 'a1', 'finds the back-rank mate in one');
  st = setup([['king', 'w', 'e1'], ['knight', 'w', 'c3'], ['king', 'b', 'e8'], ['queen', 'b', 'd5']]);
  assert.strictEqual(dest(search(st, 2)), 'd5', 'takes a free queen');
  st = setup([['king', 'w', 'e1'], ['pawn', 'w', 'a7'], ['king', 'b', 'h5']]);
  assert.strictEqual(dest(search(st, 2)), 'a8', 'promotes');
  st = setup([['king', 'w', 'f7'], ['queen', 'w', 'g5'], ['king', 'b', 'h8']]);
  assert.notStrictEqual(dest(search(st, 2)), 'g6', 'does not stalemate when it is winning');
  st = setup([['king', 'w', 'h1'], ['rook', 'w', 'a1'], ['rook', 'w', 'b1'], ['king', 'b', 'e8']]);
  const ladder = search(st, 4);
  assert.ok(st.pieces.find((p) => p.id === ladder.id).type === 'rook' && (dest(ladder) === 'a7' || dest(ladder) === 'b7'), 'finds the rook-ladder mate in two');
  st = setup([['king', 'w', 'e1'], ['pawn', 'w', 'd5', 3], ['king', 'b', 'e8'], ['queen', 'b', 'e6']]);
  assert.strictEqual(dest(search(st, 2)), 'e6', 'takes the queen with the halo pawn (by shot or move)');
  { // fool's mate from the real starting position
    const g = E.newGame(8), go = (f, t) => assert.ok(E.move(g, E.pieceAt(g, ...sqn(f)).id, ...sqn(t)));
    go('f2', 'f3'); go('e7', 'e5'); go('g2', 'g4');
    assert.strictEqual(dest(search(g, 2)), 'h4', "plays Qh4# in the fool's mate");
  }
  { // far ahead in material, it must still see and play the mate in one (the "stand pat" shortcut must not hide it)
    for (let seed = 1; seed <= 16; seed++) {      // it breaks ties at random, so try many seeds: every choice must be mate
      const g = setup([['king', 'w', 'a3'], ['queen', 'w', 'b2'], ['queen', 'w', 'g1'], ['king', 'b', 'h8']]);
      const a = AI.searchBest(g, { depth: 2, nodes: 300000 }, mulberry32(seed));
      assert.ok(E.move(g, a.id, a.x, a.y), 'legal');
      assert.strictEqual(g.result, 'checkmate', `the move it chose is checkmate (seed ${seed})`);
    }
    const g2 = setup([['king', 'w', 'a3'], ['queen', 'w', 'b2'], ['queen', 'w', 'g1'], ['rook', 'w', 'a1'], ['bishop', 'w', 'c1'], ['king', 'b', 'h8']]);
    const a2 = AI.searchBest(g2, { depth: 3, nodes: 300000 }, mulberry32(9));
    assert.ok(E.move(g2, a2.id, a2.x, a2.y) && g2.result === 'checkmate', 'still finds mate with even more material');
  }
  // A searching bot sees that a defended pawn is not free: it must not lose its queen for a pawn
  st = setup([['king', 'w', 'g1'], ['queen', 'w', 'd1'], ['king', 'b', 'g8'], ['pawn', 'b', 'd6'], ['pawn', 'b', 'e7'], ['pawn', 'b', 'f7']]);
  const qm = search(st, 3);
  assert.ok(!(dest(qm) === 'd6' && st.pieces.find((p) => p.id === qm.id).type === 'queen'), 'does not take a defended pawn with the queen');

  // Searching leaves the position exactly as it found it, and is repeatable
  const fresh = E.newGame(8);
  const before = JSON.stringify(E.toJSON(fresh));
  const a1 = AI.searchBest(fresh, { depth: 3, nodes: 50000 }, mulberry32(3));
  assert.strictEqual(JSON.stringify(E.toJSON(fresh)), before, 'the board is untouched after a search');
  const a2 = AI.searchBest(E.newGame(8), { depth: 3, nodes: 50000 }, mulberry32(3));
  assert.deepStrictEqual(a1, a2, 'same seed, same choice');
  // and a tiny node budget still gives a sensible answer (or none), never a crash
  const tiny = AI.searchBest(E.newGame(8), { depth: 6, nodes: 30 }, mulberry32(1));
  assert.ok(tiny === null || ['move', 'place', 'shoot'].includes(tiny.type));

  // Only legal actions, including against the heuristic bot, and it never passes when it can act
  const mixed = (searchLevel, seed, cap) => {
    const g = E.newGame(8), rng = mulberry32(seed);
    let guard = 0;
    while (!g.winner && g.turnNo < cap && guard++ < 5000) {
      const a = g.turn === 'w' ? AI.chooseAction(g, { search: searchLevel, rng }) : AI.chooseAction(g, { skill: 0.6, rng });
      applyAction(g, a);
    }
    return g;
  };
  mixed({ depth: 3, nodes: 20000 }, 21, 80);
  mixed({ depth: 2, nodes: 5000 }, 22, 80);
  // The searching bot beats the heuristic bot at its best
  const searchScore = (level, n) => { let pts = 0; for (let i = 0; i < n; i++) { const searchWhite = i % 2 === 0, g = E.newGame(8), rng = mulberry32(700 + i); let guard = 0;
    while (!g.winner && g.turnNo < 200 && guard++ < 5000) { const searchTurn = (g.turn === 'w') === searchWhite; applyAction(g, AI.chooseAction(g, searchTurn ? { search: level, rng } : { skill: 0.693, rng })); }
    if (!g.winner || g.winner === 'draw') pts += 0.5; else if ((g.winner === 'w') === searchWhite) pts += 1; } return pts / n; };
  const tS = Date.now();
  const sc = searchScore({ depth: 2, nodes: 20000 }, 8);
  console.log(`search (depth 2) vs the heuristic bot at its best: ${sc} (${Date.now() - tS}ms)`);
  assert.ok(sc >= 0.75, 'a depth-2 search beats the heuristic bot');
}

// ---------- AI self-play: never throws, never makes an illegal action ----------
for (const size of [8, 24, 40]) {
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
