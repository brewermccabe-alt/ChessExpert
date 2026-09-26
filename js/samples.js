/* Built-in opening library. Lines are standard opening theory, written for this app. */
window.SAMPLES = [
  /* ---------------- White ---------------- */
  {
    name: 'Italian Game',
    color: 'w',
    desc: '1.e4 e5 2.Nf3 Nc6 3.Bc4 — quiet Giuoco Piano plans, plus replies to the Sicilian, French and Caro-Kann.',
    pgn: `1. e4 e5 (1... c5 2. Nf3 d6 (2... Nc6 3. d4 cxd4 4. Nxd4) (2... e6 3. d4 cxd4 4. Nxd4) 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3)
(1... e6 2. d4 d5 3. Nc3) (1... c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4)
2. Nf3 Nc6 (2... d6 3. d4) (2... Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4)
3. Bc4 Bc5 {The Giuoco Piano.} (3... Nf6 {Two Knights Defence.} 4. d3 Be7 5. O-O O-O 6. Re1)
4. c3 Nf6 5. d3 d6 (5... O-O 6. O-O d6 7. a4) 6. O-O O-O 7. a4 {Gaining space on the queenside.} *`,
  },
  {
    name: 'Ruy Lopez',
    color: 'w',
    desc: '1.e4 e5 2.Nf3 Nc6 3.Bb5 — the Closed Spanish with the Chigorin, plus the Berlin, Open and sidelines.',
    pgn: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6
(3... Nf6 {The Berlin.} 4. O-O Nxe4 (4... Bc5 5. c3 O-O 6. d4 Bb6 7. Re1) 5. Re1 Nd6 6. Nxe5 Be7 7. Bf1 Nxe5 8. Rxe5 O-O 9. d4 Bf6 10. Re1)
(3... Bc5 4. c3 Nf6 5. O-O O-O 6. d4 Bb6 7. Re1)
(3... d6 {Old Steinitz.} 4. d4 Bd7 5. Nc3 Nf6 6. O-O Be7 7. Re1)
4. Ba4 Nf6 (4... d6 5. c3 Bd7 6. d4 Nf6 7. O-O)
5. O-O Be7 (5... Nxe4 {The Open Spanish.} 6. d4 b5 7. Bb3 d5 8. dxe5 Be6 9. Nbd2)
(5... b5 6. Bb3 Bc5 7. a4 Rb8 8. c3 d6 9. d4 Bb6 10. a5 Ba7 11. h3)
6. Re1 b5 7. Bb3 d6 (7... O-O 8. h3 {Sidesteps the Marshall Attack.} Bb7 9. d3 d6 10. a3)
8. c3 O-O 9. h3 Na5 {The Chigorin.} (9... Bb7 10. d4 Re8 11. Nbd2 Bf8 12. a4) (9... Nb8 {The Breyer.} 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2)
10. Bc2 c5 11. d4 Qc7 12. Nbd2 cxd4 (12... Nc6 13. d5 Nd8 14. a4)
13. cxd4 Nc6 14. Nb3 a5 15. Be3 a4 16. Nbd2 {The knight reroutes to f1-g3.} *`,
  },
  {
    name: 'Scotch Game',
    color: 'w',
    desc: '1.e4 e5 2.Nf3 Nc6 3.d4 — open the centre at once. Mieses main line and the 4...Bc5 Classical.',
    pgn: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 (3... Nxd4 4. Nxd4 exd4 5. Qxd4 Ne7 6. Bc4)
4. Nxd4 Nf6 (4... Bc5 5. Be3 Qf6 6. c3 Nge7 7. Bc4 O-O 8. O-O)
5. Nxc6 bxc6 (5... dxc6 6. Qxd8+ Kxd8 7. Bd3 {A small but lasting endgame edge.})
6. e5 Qe7 7. Qe2 Nd5 8. c4 Ba6 (8... Nb6 9. Nd2)
9. b3 g6 10. f4 {Grabbing space and supporting e5.} *`,
  },
  {
    name: 'London System',
    color: 'w',
    desc: '1.d4 and 2.Bf4 — one solid setup against almost everything, with the key ...c5 and ...Qb6 ideas covered.',
    pgn: `1. d4 d5 (1... Nf6 2. Bf4 g6 (2... e6 3. e3 c5 4. c3 Nc6 5. Nd2 d5 6. Ngf3 Bd6 7. Bg3 O-O 8. Bd3) 3. e3 Bg7 4. Nf3 O-O 5. Be2 d6 6. h3 c5 7. c3)
2. Bf4 Nf6 (2... c5 3. e3 Nc6 4. c3 Qb6 5. Qb3 c4 6. Qc2 Bf5 7. Qc1)
3. e3 e6 (3... c5 4. c3 Nc6 5. Nd2 Qb6 6. Qb3 c4 7. Qc2 Bf5 8. Qc1) (3... Bf5 4. c4 e6 5. Nc3 Nbd7 6. Qb3)
4. Nf3 c5 5. c3 Nc6 6. Nbd2 Bd6 7. Bg3 O-O 8. Bd3 b6 9. Ne5 Bb7 10. f4 {The classic Stonewall-style attack.} *`,
  },
  {
    name: "Queen's Gambit",
    color: 'w',
    desc: '1.d4 d5 2.c4 — the Exchange QGD with the Carlsbad plan, plus the Slav, QGA, Chigorin and Albin.',
    pgn: `1. d4 d5 2. c4 e6
(2... dxc4 {Queen's Gambit Accepted.} 3. e3 Nf6 (3... e5 4. Bxc4 exd4 5. exd4) 4. Bxc4 e6 5. Nf3 c5 6. O-O a6 7. a4 Nc6 8. Qe2 cxd4 9. Rd1 Be7 10. exd4 O-O 11. Nc3)
(2... c6 {The Slav.} 3. Nf3 Nf6 4. Nc3 dxc4 (4... e6 5. e3 Nbd7 6. Qc2 Bd6 7. Bd3 O-O 8. O-O) 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O O-O 9. Qe2)
(2... Nc6 {The Chigorin.} 3. Nf3 Bg4 4. cxd5 Bxf3 5. gxf3 Qxd5 6. e3 e5 7. Nc3 Bb4 8. Bd2 Bxc3 9. bxc3)
(2... e5 {Albin Countergambit.} 3. dxe5 d4 4. Nf3 Nc6 5. g3 Be6 6. Nbd2)
3. Nc3 Nf6 (3... Be7 4. Nf3 Nf6 5. Bf4 O-O 6. e3 c5 7. dxc5 Bxc5 8. Qc2) (3... c6 4. e3 Nf6 5. Nf3 Nbd7 6. Qc2 Bd6 7. Bd3 O-O 8. O-O)
4. cxd5 exd5 5. Bg5 Be7 (5... c6 6. Qc2 Be7 7. e3 Nbd7 8. Bd3 O-O)
6. e3 O-O 7. Bd3 Nbd7 8. Qc2 c6 9. Nge2 Re8 10. O-O Nf8 11. f3 {Preparing the central e4 break.} *`,
  },
  {
    name: 'Anti-Sicilian: Alapin',
    color: 'w',
    desc: '1.e4 c5 2.c3 — build a big centre with d4 and skip the Open Sicilian theory battle.',
    pgn: `1. e4 c5 2. c3 Nf6
(2... d5 3. exd5 Qxd5 4. d4 Nf6 (4... Nc6 5. Nf3 Bg4 6. Be2 cxd4 7. cxd4 e6 8. Nc3 Qa5 9. O-O) 5. Nf3 Bg4 6. Be2 e6 7. O-O Nc6 8. h3 Bh5 9. Be3 cxd4 10. cxd4 Be7 11. Nc3)
(2... Nc6 3. d4 d5 4. exd5 Qxd5 5. Nf3 Bg4 6. Be2 cxd4 7. cxd4 e6 8. Nc3 Qa5 9. O-O)
(2... e6 3. d4 d5 4. exd5 exd5 5. Nf3 Nc6 6. Bb5 Bd6 7. dxc5 Bxc5 8. O-O)
(2... d6 3. d4 cxd4 4. cxd4 Nf6 5. Nc3 g6 6. Nf3 Bg7 7. Be2 O-O 8. O-O)
(2... g6 3. d4 cxd4 4. cxd4 d5 5. exd5 Qxd5 6. Nf3 Bg7 7. Nc3 Qa5 8. Bc4)
3. e5 Nd5 4. d4 cxd4 5. Nf3 Nc6 (5... e6 6. cxd4 d6 7. Bc4 Nc6 8. O-O Be7 9. Qe2)
6. cxd4 d6 7. Bc4 Nb6 8. Bb5 dxe5 9. Nxe5 Bd7 10. Nxd7 Qxd7 11. Nc3 e6 12. O-O Be7 13. Qg4 *`,
  },

  /* ---------------- Black ---------------- */
  {
    name: 'Sicilian Najdorf',
    color: 'b',
    desc: '1.e4 c5 with 5...a6 — the English Attack, 6.Bg5, 6.Be2 and every common 6th move, plus the anti-Sicilians.',
    pgn: `1. e4 c5 2. Nf3
(2. Nc3 {Closed Sicilian.} Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. f4 e6 7. Nf3 Nge7 8. O-O O-O)
(2. c3 {Alapin.} Nf6 3. e5 Nd5 4. d4 cxd4 5. Nf3 Nc6 6. cxd4 d6 7. Bc4 Nb6 8. Bb5 dxe5 9. Nxe5 Bd7 10. Nxd7 Qxd7)
(2. d4 cxd4 3. c3 {Smith-Morra, declined by transposing to the Alapin.} Nf6 4. e5 Nd5 5. Nf3 Nc6 6. cxd4 d6)
2... d6 3. d4 (3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. O-O Nc6 6. c3 Nf6 7. Re1 e6 8. d4 cxd4 9. cxd4 d5 10. e5 Ne4)
3... cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3
(6. Bg5 e6 7. f4 Be7 8. Qf3 Qc7 9. O-O-O Nbd7 10. g4 b5)
(6. Be2 e5 7. Nb3 Be7 8. O-O O-O 9. Be3 Be6)
(6. Bc4 {Fischer-Sozin.} e6 7. Bb3 b5 8. O-O Be7 9. Qf3 Qc7 10. Qg3 O-O)
(6. f3 e5 7. Nb3 Be6 8. Be3 Be7 9. Qd2 O-O 10. O-O-O Nbd7)
(6. h3 e5 7. Nde2 h5 8. g3 Be6 9. Bg2 b5)
(6. g3 e5 7. Nde2 Be7 8. Bg2 b5 9. O-O Nbd7)
6... e5 7. Nb3 (7. Nf3 Be7 8. Bc4 O-O 9. O-O Qc7 10. Bb3 Be6) (7. Nde2 Be7 8. g3 O-O 9. Bg2 b5)
7... Be6 8. f3 (8. Qd2 Be7 9. f3 O-O) 8... Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 {Race to attack the opposite kings.} *`,
  },
  {
    name: 'French Defence',
    color: 'b',
    desc: '1.e4 e6 — the Classical 3...Nf6 against 3.Nc3, and solid answers to the Advance, Tarrasch and Exchange.',
    pgn: `1. e4 e6 2. d4 (2. d3 {King's Indian Attack.} d5 3. Nd2 Nf6 4. Ngf3 c5 5. g3 Nc6 6. Bg2 Be7 7. O-O O-O)
2... d5 3. Nc3
(3. e5 {Advance.} c5 4. c3 Nc6 5. Nf3 Qb6 6. a3 (6. Be2 cxd4 7. cxd4 Nh6 8. b3 Nf5 9. Bb2 Bb4+ 10. Kf1 h5) 6... c4 7. Nbd2 Na5)
(3. Nd2 {Tarrasch.} c5 4. exd5 (4. Ngf3 cxd4 5. exd5 Qxd5 6. Bc4 Qd6 7. O-O Nf6 8. Nb3 Nc6 9. Nbxd4 Nxd4 10. Nxd4 a6) 4... Qxd5 5. Ngf3 cxd4 6. Bc4 Qd6 7. O-O Nf6 8. Nb3 Nc6 9. Nbxd4 Nxd4 10. Nxd4 a6 11. Re1 Qc7)
(3. exd5 {Exchange.} exd5 4. Nf3 Nf6 5. Bd3 Bd6 6. O-O O-O 7. Bg5 Bg4)
3... Nf6 4. e5 (4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. f4 O-O 8. Nf3 c5 9. dxc5 Nc6 10. Bd3 f6)
4... Nfd7 5. f4 (5. Nce2 c5 6. c3 Nc6 7. f4 Qb6 8. Nf3 f6)
5... c5 6. Nf3 Nc6 7. Be3 cxd4 8. Nxd4 Bc5 9. Qd2 O-O 10. O-O-O a6 {Queenside pawns roll next.} *`,
  },
  {
    name: 'Caro-Kann',
    color: 'b',
    desc: '1.e4 c6 — the Classical 4...Bf5, with the Advance, Exchange and Two Knights covered.',
    pgn: `1. e4 c6 2. d4 (2. Nc3 d5 3. Nf3 Bg4) (2. Nf3 d5 3. Nc3 Bg4) d5
3. Nc3 (3. e5 {Advance Variation.} Bf5 4. Nf3 e6 5. Be2 c5) (3. exd5 cxd5 4. Bd3 Nc6 5. c3 Nf6)
(3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6)
3... dxe4 4. Nxe4 Bf5 {The Classical Variation.} 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 e6 *`,
  },
  {
    name: 'Scandinavian',
    color: 'b',
    desc: '1.e4 d5 2.exd5 Qxd5 — the ...Qa5 main line with ...c6 and ...Bf5, fast development and few surprises.',
    pgn: `1. e4 d5 2. exd5 (2. e5 Bf5 3. d4 e6 4. c3 c5) (2. Nc3 d4 3. Nce2 e5 4. Ng3 Be6 5. Nf3 Nd7)
2... Qxd5 3. Nc3 (3. Nf3 Nf6 4. d4 Bf5 5. c4 Qd8 6. Nc3 e6 7. Be2 c6 8. O-O Be7) (3. d4 Nf6 4. Nf3 Bf5 5. c4 Qd8)
3... Qa5 4. d4 (4. Nf3 Nf6 5. d4 c6) (4. Bc4 Nf6 5. Nf3 c6 6. O-O Bg4 7. h3 Bh5 8. d3 e6)
4... Nf6 5. Nf3 (5. Bc4 c6 6. Nf3 Bf5 7. Bd2 e6 8. Qe2 Bb4 9. O-O-O Nbd7)
5... c6 6. Bc4 Bf5 7. Bd2 e6 8. Qe2 Bb4 9. O-O-O Nbd7 10. a3 Bxc3 11. Bxc3 Qc7 *`,
  },
  {
    name: "Queen's Gambit Declined",
    color: 'b',
    desc: '1.d4 d5 2.c4 e6 — the Tartakower setup against Bg5, with the Exchange and London-style lines.',
    pgn: `1. d4 d5 2. c4 (2. Nf3 Nf6 3. c4 e6) (2. Bf4 Nf6 3. e3 c5) e6 3. Nc3 (3. Nf3 Nf6 4. Nc3 Be7) Nf6
4. Bg5 (4. cxd5 exd5 5. Bg5 Be7) (4. Nf3 Be7 5. Bf4 O-O) Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 b6 {Tartakower System.} *`,
  },
  {
    name: 'Slav Defence',
    color: 'b',
    desc: '1.d4 d5 2.c4 c6 — the main line 4...dxc4 5.a4 Bf5, plus the Exchange Slav and quiet e3 systems.',
    pgn: `1. d4 d5 2. c4 (2. Nf3 Nf6 3. Bf4 Bf5 4. e3 e6 5. c4 c6 6. Nc3 Nbd7 7. Qb3 Qb6) (2. Bf4 Nf6 3. e3 Bf5 4. c4 e6 5. Nc3 c6 6. Qb3 Qb6)
2... c6 3. Nf3
(3. Nc3 Nf6 4. e3 Bf5 5. Nf3 e6 6. Nh4 Bg6 7. Nxg6 hxg6 8. Bd3 Nbd7)
(3. cxd5 {Exchange Slav.} cxd5 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 7. Nf3 e6 8. Bb5 Nd7)
3... Nf6 4. Nc3 (4. e3 Bf5 5. Nc3 e6 6. Nh4 Bg6 7. Nxg6 hxg6 8. Bd3 Nbd7) (4. Qc2 dxc4 5. Qxc4 Bf5 6. Nc3 e6 7. g3 Nbd7)
4... dxc4 5. a4 (5. e3 b5 6. a4 b4 7. Na2 e6 8. Bxc4 Be7 9. O-O O-O) (5. e4 b5 6. e5 Nd5 7. a4 e6 8. axb5 Nxc3 9. bxc3 cxb5 10. Ng5 Bb7)
5... Bf5 6. e3 (6. Ne5 e6 7. f3 c5 8. e4 Bg6 9. Be3 cxd4 10. Qxd4 Qxd4 11. Bxd4 Nfd7)
6... e6 7. Bxc4 Bb4 8. O-O Nbd7 9. Qe2 Bg6 10. e4 O-O 11. Bd3 Bh5 *`,
  },
  {
    name: "King's Indian Defence",
    color: 'b',
    desc: '1.d4 Nf6 2.c4 g6 — the Mar del Plata kingside attack, plus the Sämisch, Four Pawns, Averbakh and Fianchetto.',
    pgn: `1. d4 Nf6 2. c4 (2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d6 6. c4 Nbd7 7. Nc3 e5 8. e4 c6 9. h3 Qb6)
(2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. Be2 d6 6. h3 c5 7. c3 Qb6)
2... g6 3. Nc3 (3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nbd7 7. Nc3 e5 8. e4 c6 9. h3 Qb6)
3... Bg7 4. e4 d6 5. Nf3
(5. f3 {Sämisch.} O-O 6. Be3 e5 7. d5 (7. Nge2 c6 8. Qd2 Nbd7) 7... Nh5 8. Qd2 f5 9. O-O-O Nd7)
(5. f4 {Four Pawns Attack.} O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. cxd5 Re8)
(5. Be2 O-O 6. Bg5 {Averbakh.} c5 7. d5 e6 8. Qd2 exd5 9. exd5 Re8)
(5. h3 O-O 6. Bg5 c5 7. d5 e6 8. Bd3 exd5 9. cxd5 Re8)
5... O-O 6. Be2 e5 7. O-O
(7. d5 a5 8. Bg5 h6 9. Bh4 Na6)
(7. dxe5 dxe5 8. Qxd8 Rxd8 9. Bg5 Re8 10. Nd5 Nxd5 11. cxd5 c6)
(7. Be3 Ng4 8. Bg5 f6 9. Bh4 Nc6)
7... Nc6 8. d5 Ne7 9. Ne1 (9. b4 Nh5 10. Re1 f5 11. Ng5 Nf6 12. f3 Kh8) (9. Nd2 a5 10. a3 Nd7 11. Rb1 f5 12. b4 Kh8)
9... Nd7 10. Be3 (10. f3 f5 11. Be3 f4 12. Bf2 g5)
10... f5 11. f3 f4 12. Bf2 g5 13. Nd3 Nf6 14. c5 Ng6 {The g-pawn storm is on.} *`,
  },
  {
    name: 'Nimzo-Indian',
    color: 'b',
    desc: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 — Rubinstein, Classical, Sämisch and more, with a Queen’s Indian and Catalan setup if White avoids 3.Nc3.',
    pgn: `1. d4 Nf6 2. c4 (2. Nf3 e6 3. Bf4 c5 4. e3 Nc6 5. c3 d5 6. Nbd2 Bd6 7. Bg3 O-O)
2... e6 3. Nc3
(3. Nf3 b6 {Queen's Indian.} 4. g3 Ba6 5. b3 Bb4+ 6. Bd2 Be7 7. Bg2 c6)
(3. g3 {Catalan.} d5 4. Bg2 Be7 5. Nf3 O-O 6. O-O dxc4 7. Qc2 a6 8. a4 Bd7)
3... Bb4 4. e3
(4. Qc2 {Classical.} O-O 5. a3 Bxc3+ 6. Qxc3 b6 7. Bg5 Bb7 8. f3 h6 9. Bh4 d5)
(4. a3 {Sämisch.} Bxc3+ 5. bxc3 c5 6. e3 Nc6 7. Bd3 O-O 8. Ne2 b6 9. e4 Ne8)
(4. f3 d5 5. a3 Be7 6. e4 dxe4 7. fxe4 e5 8. d5 Bc5)
(4. Bg5 {Leningrad.} h6 5. Bh4 c5 6. d5 d6 7. e3 Bxc3+ 8. bxc3 e5)
(4. Nf3 O-O 5. Bg5 c5 6. e3 cxd4 7. exd4 h6 8. Bh4 d5)
(4. g3 O-O 5. Bg2 d5 6. Nf3 dxc4 7. O-O Nc6)
4... O-O 5. Bd3 (5. Nge2 d5 6. a3 Be7 7. cxd5 exd5 8. g3 c6) (5. Nf3 d5 6. Bd3 c5 7. O-O Nc6)
5... d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4 Qc7 {Aiming for ...e5.} *`,
  },
];
