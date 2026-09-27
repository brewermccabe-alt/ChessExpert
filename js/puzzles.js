/* Tactics puzzles generated for this app with the Stockfish engine (tools/puzzlegen.js).
 * One per line: id|fen|moves (UCI; the first is the opponent's mistake)|rating|themes|alternative answers by ply */
window.PUZZLES = (function () {
  const RAW = `
100te0m|5k2/1p4p1/p1p1Q1p1/6q1/P1P5/2P5/2r2PKP/4R3 w - - 3 37|e6g4 g5g4|500|winningMaterial,oneMove,hangingPiece|
nwxj3b|8/p3N2p/P1P3p1/2P5/3p2bP/3B2k1/2PK2P1/1r6 w - - 4 35|d3f5 b1d1|500|mate,mateIn1,oneMove|
1gdrhb4|r1bqkb1r/pp1npppp/5n2/1Bp5/3PN1P1/5N2/P1PBQP1P/1R2K2R b Kkq - 2 11|f6h5 e4d6|500|mate,mateIn1,oneMove|
13a6dzs|5R2/6k1/4N1p1/7p/p1P1bp1P/2P5/r7/6K1 b - - 7 55|g7h6 f8h8|500|mate,mateIn1,oneMove|
1vd7qr5|6r1/2p1nk2/2p1pp2/P1Rp4/3P3R/4PQB1/Pr3PP1/1q4K1 w - - 1 28|c5c1 b1c1|545|winningMaterial,oneMove,hangingPiece|
ebewh5|8/4Q1kp/1r6/3ppp2/3b1BP1/3b1nKP/8/8 b - - 7 43|g7h8 e7f8|585|mate,mateIn1,oneMove|
1jro8wq|4k3/2p1n3/2p1Q3/P1Rp2B1/3P4/4P1K1/6P1/1q5r b - - 4 37|b1b8 e6e7|620|mate,mateIn1,oneMove|
18fua34|r2k2Q1/3p4/p7/4B3/1q6/2r1P3/3PKP1P/8 b - - 1 31|b4f8 g8f8|650|mate,mateIn1,endgame,oneMove|
ea256i|7K/1pr5/p6n/4kbPP/1P3R2/5R2/8/8 w - - 5 54|f4g4 c7h7|680|mate,mateIn1,endgame,oneMove|
1ho2br3|2r5/4kp1p/pn6/8/4Pn1R/P2p1P2/3P1P2/2B1KB2 w - - 2 32|f1d3 c8c1|705|mate,mateIn1,oneMove|
ehczsi|2rq1r1k/1p2bppp/p1n1p3/3pP2N/2nP2Q1/P2NB2P/1P3PP1/2R2RK1 b - - 16 20|a6a5 g4g7|725|mate,mateIn1,oneMove|
1rgnr0d|2rr4/pp2k1pp/4bp2/8/4B3/1P3P2/P1PK2PP/R3R3 w - - 3 22|e4d5 d8d5|750|winningMaterial,oneMove,hangingPiece|
1ycxx6q|4r1k1/ppqnQ1p1/2p3b1/3p1r1p/4N2P/4B3/PPP3P1/2KRR3 w - - 10 28|e7e8 g6e8|770|winningMaterial,oneMove,hangingPiece|
1ckyy6z|3r3k/1p1q1ppp/4p3/p2pP2N/Pb1P3P/1P4Q1/5PP1/5RK1 b - - 2 33|b7b6 g3g7|785|mate,mateIn1,oneMove|
107or4r|2k5/p3rQ2/1pp2n2/4P2p/5q1p/2P5/PP3PP1/3R2K1 w - - 0 36|d1d8 c8d8|805|winningMaterial,oneMove,hangingPiece|
1odjtvc|3rk3/1p2pp2/6p1/p2P2q1/P2Q2r1/1B6/1RP2P2/4RK2 w - - 0 24|d5d6 g4d4|820|winningMaterial,oneMove,hangingPiece|
vjy9jw|3r1b1r/2pkq1pp/1n3n2/1Q1P1p2/3Pp3/2N5/PP1B1PPP/R3K2R b KQ - 2 18|d7d6 b5c6|840|mate,mateIn1,oneMove|
1bhwa3p|2n3k1/p2r1pp1/1p2p2p/1P2P3/1B3nPP/1R3PK1/5N2/8 b - - 3 35|c8e7 g3f4|855|winningMaterial,oneMove,hangingPiece|
sv8a7l|r7/3p4/p4Q2/2k5/3B4/3PP3/q4P1P/3K4 b - - 4 37|c5d5 e3e4|870|mate,mateIn1,endgame,oneMove|
zjzoc2|3rRrk1/pp4pp/1b3p2/3p1p1P/3P1P2/PB2R1P1/1P6/1K6 w - - 7 36|b3d5 d8d5|880|winningMaterial,oneMove,hangingPiece|
1a3pqcm|3r1bk1/5ppp/p2n4/1ppQ2B1/7P/q4N2/5PP1/4R1K1 b - - 3 29|b5b4 g5d8|895|winningMaterial,oneMove,hangingPiece|
vcohb2|r2qk2r/pp3nR1/2pp4/Q3pb2/2P1n3/5N1P/PP2PP2/R1B1KB2 w Qkq - 0 16|g7g8 h8g8|910|winningMaterial,oneMove,hangingPiece|
q1yf4p|r3r1k1/1R4bp/b3p1p1/3pN3/3P1PPn/4Q2P/4n3/2B2RK1 w - - 0 29|e3e2 a6e2|920|winningMaterial,oneMove,hangingPiece|
1a0lus4|1rk5/3p4/p5Q1/8/3B3P/3PP3/q3KP2/8 w - - 5 44|e2d1 b8b1|935|mate,mateIn1,endgame,oneMove|
1jvr1sb|r3k1nr/ppp2p1p/8/3qN1B1/2b5/3pP1P1/PP1Q1P1P/2KR3R w kq - 2 15|e3e4 d5e5|945|winningMaterial,oneMove,hangingPiece|
1ai1d0e|4R3/kp6/p7/3P1p2/5q2/4n2P/1P4B1/6RK w - - 9 49|e8e3 f4e3|960|winningMaterial,endgame,oneMove,hangingPiece|
q0oufx|8/2B1pp1k/p3r1pb/7p/4n2P/5BP1/P1RrPPK1/5R2 w - - 4 27|c2c5 e4c5|970|winningMaterial,oneMove,hangingPiece|
972lve|8/4Q1kp/5r2/3ppp2/3b2Pn/3b2K1/8/2B5 b - - 3 47|g7h8 e7f6|980|winningMaterial,fork,endgame,oneMove,hangingPiece|
14efsap|1k5r/pp3Qpp/1np5/6r1/P2q4/3B4/2P2PKP/1R2R3 w - - 0 23|g2h3 d4g4|995|mate,mateIn1,oneMove|
1u7gf6w|6k1/5p2/p5pb/7p/PNr5/8/1P3PPP/1R3K2 w - - 3 33|b4c2 c4c2|1005|winningMaterial,oneMove,hangingPiece|
zlrfzi|3q1k2/1p4p1/p1p1Q1p1/8/P1P5/2P1R3/5P1P/2r2K2 w - - 7 39|f1e2 d8d1|1015|mate,mateIn1,oneMove|
1pcqmas|4r3/6kp/4P3/p1Rr1p2/P2P1p2/5K1P/8/3R4 b - - 1 41|g7f6 c5d5|1025|winningMaterial,oneMove,hangingPiece|
1q9pzja|3r2k1/4ppb1/p1r3pp/2n5/4BB2/6PP/P3PP2/2R2RK1 b - - 0 21|c5e4 c1c6|1035|winningMaterial,oneMove,hangingPiece|
rt6fki|1Q6/5pkp/4p3/1p3p2/p5r1/5R1K/8/6r1 w - - 12 52|f3f1 g1f1|1045|winningMaterial,endgame,oneMove,hangingPiece|
piyovr|8/5r2/6pp/P4p2/2kP3P/P1B1P1P1/4K3/8 w - - 5 51|e2f3 c4c3|1055|winningMaterial,endgame,oneMove,hangingPiece|
ta1nzc|8/1k4p1/5p2/1PPKp3/4P2p/R7/3r4/8 w - - 1 55|a3d3 d2d3|1065|winningMaterial,endgame,oneMove,hangingPiece|
3iv4ik|8/1p1R4/p1n1b1k1/P7/6PK/1r5P/1P6/5R2 w - - 12 38|f1f3 b3f3|1075|winningMaterial,endgame,oneMove,hangingPiece|
1nib263|8/8/5pp1/3k3p/7P/4B1P1/2K2P2/bR5r b - - 0 76|a1e5 b1h1|1085|winningMaterial,endgame,oneMove,hangingPiece|
1ypy0dl|6k1/5p2/2b3p1/p6p/2P2R2/2PNr2P/P5P1/6K1 w - - 0 44|c4c5 e3d3|1090|winningMaterial,oneMove,hangingPiece|
cyrqpm|4Qqk1/6p1/4P2p/2p4P/p7/8/6K1/8 w - - 4 53|e8f8 g8f8|1100|winningMaterial,endgame,oneMove,hangingPiece|
c6utpq|rnbqk1r1/pp4Qp/4pn2/b2p4/1pP5/3PP3/P1NN2PP/R1B1KB1R w KQq - 1 12|g7g8 f6g8|1110|winningMaterial,oneMove,hangingPiece|
1rbxcs1|3r3k/1Q4p1/p3p2p/P1p1P2P/5P2/4P3/q3R3/5K2 b - - 0 36|a2e2 f1e2|1120|winningMaterial,oneMove,hangingPiece|
1fjupxw|5rk1/pq4bp/4p1p1/5p2/3p1P2/1P1P1nP1/PB2Q2P/R2R2K1 w - - 1 24|e2f3 b7f3|1130|winningMaterial,oneMove,hangingPiece|
1ns8p9s|8/2k5/1N6/p6p/2P1p1pP/8/1P6/5K2 w - - 1 56|b6c8 c7c8|1135|winningMaterial,endgame,oneMove,hangingPiece|
4sc6vc|6k1/3R4/4p2p/P4r2/1R4p1/4P1P1/8/r5K1 w - - 4 43|g1h2 f5f2|1145|mate,mateIn1,endgame,oneMove|
ubn6vy|r3nbk1/5ppp/p7/1pp5/4Q2P/P4N2/1q1B1PP1/4R1K1 b - - 1 26|a8a7 e4e8|1155|winningMaterial,oneMove,hangingPiece|
4hp7i6|7r/p2Rn3/1p2kp2/2p5/4PB1p/6P1/PP3P1P/1K6 w - - 4 27|d7e7 e6e7|1160|winningMaterial,oneMove,hangingPiece|
14ude3c|8/4Q2p/5rk1/3ppb2/8/6pK/5b2/2B5 w - - 2 53|h3h4 g3g2|1170|mate,mateIn1,endgame,oneMove|
fogfpy|r1b1k1r1/pp2npB1/2q1p3/P2p3p/5P2/7P/1PP3P1/R2QKB1R w KQq - 1 15|d1h5 g8g7|1180|winningMaterial,oneMove,hangingPiece|
een1di|4r1kr/1p2Rpp1/p1p2n2/2Pp4/1P1q3n/5B1p/P1QNN3/5R1K b - - 3 31|d4e3 e7e3|1185|winningMaterial,oneMove,hangingPiece|
1t2bdix|8/R5k1/7N/p5P1/1p6/6K1/3r1P1P/1b6 b - - 7 39|d2d7 a7d7|1195|winningMaterial,endgame,oneMove,hangingPiece|
12kw26x|rnb1kb1r/pp3p1p/4pnp1/q1pp4/4P3/BP1P1NP1/P1PN1PBP/R2QK2R w KQkq - 2 9|c2c4 a5a3|1200|winningMaterial,oneMove,hangingPiece|
oqk5z5|8/1p2n3/p6K/4kbP1/1P3R1P/5R2/2r5/8 w - - 1 51|f3e3 e5f4|1210|winningMaterial,endgame,oneMove,hangingPiece|
1gybe22|8/8/2r3pp/P2k1p2/3P3P/P1B1PK2/6P1/8 w - - 6 45|h4h5 c6c3|1220|winningMaterial,endgame,oneMove,hangingPiece|
ldw9u6|rn1qk2r/1pp2ppp/p3p3/2Pp4/1b1PnB2/3QP3/PP1N1PPP/R3K1NR w KQkq - 1 9|d3b3 b4d2|1225|winningMaterial,oneMove|
log5yn|8/8/4k3/4pp1p/1bN1r3/2R1P1P1/5K1P/8 w - - 19 47|c3b3 e4c4|1235|winningMaterial,endgame,oneMove,hangingPiece|
pqc02s|1N4k1/5p2/6p1/7p/r4b2/8/1P3PPP/1R3K2 w - - 2 35|b2b4 f4b8|1240|winningMaterial,endgame,oneMove,hangingPiece|
19g9rn6|6k1/5p2/6p1/4b3/1P5p/N1r5/5PPP/1R3K2 w - - 2 40|f1e2 c3a3|1250|winningMaterial,endgame,oneMove,hangingPiece|
1h86qn|7k/R1K2r2/7P/8/P7/8/8/8 w - - 3 81|c7d6 f7a7|1255|winningMaterial,endgame,oneMove,hangingPiece|
eqybro|8/7K/1k4QN/8/4q3/8/8/8 b - - 2 68|b6b5 g6e4|1265|winningMaterial,endgame,oneMove,hangingPiece|
17ewb5s|4q3/Q2R2bk/6pp/8/1P2pp2/7P/5PP1/2r2NK1 b - - 2 36|h6h5 d7g7|1270|winningMaterial,oneMove|
1is6zi1|7k/3Q3p/1r6/3ppp2/3b1BP1/3b1nKP/8/8 w - - 4 42|d7e7 e5f4|1280|winningMaterial,oneMove|
dvn953|8/2p5/1pP2k2/pP2bp2/P1R2P2/4N3/q3P3/2B1K3 b - - 0 40|a2b1 f4e5|1285|winningMaterial,oneMove|
10potyn|2n3k1/pp1r1pp1/2nBp2p/1P2P3/6PP/5PKN/8/1R6 b - - 0 29|d7d6 e5d6|1295|winningMaterial,oneMove|
r6i0b2|rnb1kbnr/pp1ppppp/1q6/2p5/3P4/2N1PN2/P1PB1PPP/1R1QKB1R b Kkq - 3 6|c5d4 b1b6|1300|winningMaterial,oneMove|
yglmmi|r5kr/1p3pp1/p1p2n2/2Pp4/1P1P3n/4qB1p/P1QN4/2N1RR1K b - - 3 29|a8e8 e1e3|1310|winningMaterial,oneMove|
5jlp0o|r3k1nr/pp3ppp/1qn1p3/3pPb2/P5PP/B1P5/5P2/R2QKBNR b KQkq - 0 10|g8h6 g4f5|1315|winningMaterial,oneMove|
1knxjfr|r4rk1/pp3ppp/2pb2q1/3n1p2/3P1PN1/PB3PP1/1PQ4P/2KRR3 w - - 3 21|c2e2 f5g4|1325|winningMaterial,oneMove|
19lhfs|2rkrn2/p3b3/1pp1Qn2/q6p/3P1B1p/1BP5/PP3PP1/3RR1K1 w - - 14 29|e6e7 e8e7|1330|winningMaterial,oneMove|
5w2akb|r3kbnr/pp1n1ppp/2p1p3/q4b2/P2P2P1/2N5/1PP1BP1P/R1BQK1NR b KQkq - 0 8|f8b4 g4f5|1340|winningMaterial,oneMove|
1cxbogg|8/6p1/3k1p2/p3p2p/1Rp1P3/2K3PP/1PP2P2/1r6 w - - 0 40|c3c4 a5b4|1345|winningMaterial,oneMove|
obn9cf|r1bqk2r/1p3pp1/p1n1pn1p/2bp4/1P6/P1N1PN1P/2P1BPP1/R1BQK2R b KQkq - 0 9|c6b4 a3b4|1355|winningMaterial,oneMove|
fj9c8j|r2r2k1/ppq2p2/2np1bpp/3Pp3/1P6/P1PQ1N1P/5PP1/RN2R1K1 b - - 0 18|a8c8 d5c6|1360|winningMaterial,oneMove|
19kr8ho|r1bqkb1r/pp3pp1/n1p1p2p/1N1pB2n/3P3P/8/PPP1PPP1/R1Q1KBNR w KQkq - 0 8|a2a4 c6b5|1365|winningMaterial,oneMove|
sattea|r2r2k1/pp2pp2/2np1bpp/q7/1P1P4/2PQ1N1P/P4PP1/RN2R1K1 b - - 0 16|c6b4 c3b4|1375|winningMaterial,oneMove|
10bg33r|rn2kbnr/pp2pppp/2p5/3q1b2/3PN3/8/PPP1QPPP/R1B1KBNR w KQkq - 3 6|g2g4 f5e4|1380|winningMaterial,oneMove|
oznsue|4r3/6bk/p5rp/1p2B3/1P3p2/2R2P2/6N1/2R3K1 b - - 0 46|h6h5 e5g7|1390|winningMaterial,oneMove|
1rk5bif|rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4|c7c5 e5f6|1395|winningMaterial,oneMove|
12le3ev|4r3/p5bk/3B2np/1p2Pqr1/1P1N1p2/2R5/4QPp1/2R3K1 b - - 2 37|f5e5 d6e5|1405|winningMaterial,oneMove|
y93u7q|2r3rk/1p1q1ppp/4p3/p2pP2N/Pb1P3P/4BQ2/1P1n1PP1/2R2RK1 w - - 1 26|f3g4 d2f1|1410|winningMaterial,oneMove|
1crwdf8|2kr3r/ppp1qppp/2npbn2/3N4/2P1P3/3BQ2P/PP3PP1/R3K1NR b KQ - 4 11|f6d7 d5e7|1420|winningMaterial,oneMove|
1ulufh8|r4rk1/1p2b1pp/p1p1pp2/2PpBb1P/1P1P4/2P1P3/5PP1/R3KB1R w KQ - 0 16|f2f3 f6e5|1425|winningMaterial,oneMove|
z5182d|1r2kb1r/1p3ppp/4p3/8/P1p1P3/R3PN2/1P2K1PP/3R4 w - - 0 22|d1b1 f8a3|1435|winningMaterial,oneMove|
17hwp5q|6k1/4b3/5Pp1/8/7p/5P1P/3B1K2/8 b - - 0 41|g8f7 f6e7|1440|winningMaterial,endgame,oneMove|
wrwbkp|3r1kr1/4bp1p/p2q1n2/2p2N2/4Pn2/P1Rp1P2/1B1P1P2/2Q1KB1R b K - 1 25|f4g2 f1g2|1445|winningMaterial,oneMove|
7c0kub|5rk1/1pq2pbp/p3p1p1/2p2n2/4NP2/2PrB1PP/RP2Q1B1/3K3R w - - 0 23|d1c2 d3e3|1455|winningMaterial,oneMove|
njxjfa|r2q1rk1/5p2/p1N3pb/7p/8/P3p3/1P1Q1PPP/2R2RK1 w - - 0 25|d2e3 h6e3|1460|winningMaterial,oneMove|
1v4ltz1|1k6/1p6/pq6/3P1p2/8/7P/1Pn5/3RRB1K w - - 1 45|f1g2 c2e1|1470|winningMaterial,endgame,oneMove|
c6947d|r3k2r/pp1nbppp/2p1p3/q5P1/P2P4/2BB1Q2/1PP2P1P/R3K2R b KQkq - 0 14|d7e5 d4e5|1475|winningMaterial,oneMove|
1kry9hv|8/8/8/8/2q5/7P/1pk1K3/6RR w - - 20 78|e2e1 b2b1q|1485|winningMaterial,promotion,endgame,oneMove|
140qezs|rnbqk1nr/pppp2pp/4p3/5p2/1b2P3/3P1N2/PPP2PPP/RNBQKB1R w KQkq - 1 4|d1d2 b4d2|1490|winningMaterial,fork,oneMove|
ja3iel|r1bqk2r/1p2ppbp/n2p1np1/p1pP4/3B4/P1N2N1P/1PP1PPP1/R2QKB1R w KQkq - 0 9|e2e4 c5d4|1500|winningMaterial,oneMove|
8nfw37|3q1rk1/5p1p/1p2pp2/rQ1p4/2PP4/4PK1P/5PP1/2R2R2 w - - 2 23|c1c2 a5b5|1505|winningMaterial,oneMove|
9nyfuw|4k3/1p1r4/p4P2/4P1r1/P6p/4K3/6PP/5B1R w - - 0 34|f1b5 a6b5|1515|winningMaterial,oneMove|
1clfqlx|r3k2r/pp2ppb1/2n4p/3n2p1/P2P4/4BNP1/1q1NPP1P/1R1QK2R b Kkq - 3 13|b2b4 b1b4|1520|winningMaterial,oneMove|
1mmc5j8|r5k1/p2b1rb1/4q1np/NpR1ppp1/1B1N4/Q2P3P/PP3PP1/4R1K1 b - - 0 22|e5d4 e1e6|1530|winningMaterial,oneMove|
1q5b4oq|8/1p2pp2/3k1rp1/p2PR3/P4r2/1BP1KP2/5R2/8 w - - 5 32|e5e6 f7e6|1535|winningMaterial,oneMove|
13ppe3z|6k1/2q5/6p1/7p/8/1PQ5/P5PP/3rR2K w - - 7 41|c3g3 c7g3|1545|winningMaterial,endgame,oneMove|
1fa3eqd|r1b1k2r/bp1pqpp1/n1p2n1p/p3p1B1/Q1P5/P1NPPN1P/1P3PP1/2KR1B1R w kq - 0 11|a4a5 h6g5|1550|winningMaterial,oneMove|
l207kx|6k1/1R2pp2/7p/PN6/6p1/4P1P1/3rr2P/6RK w - - 2 33|g1f1 e2h2 h1g1 d2g2|1560|mate,mateIn2,short|3:d2g2
1ppmttu|r4r2/pp1n1kpb/2pq3p/3p4/3B2Q1/2N4P/PPP3P1/2KR3R b - - 3 21|d7e5 g4f4 f7g8 f4e5|1565|winningMaterial,short|3:f4e5
1ftvjno|3rk2r/pR2ppb1/2n4p/6p1/P1NP4/1Qn1B1P1/4PP1P/1q2K2R w Kk - 0 19|e3c1 b1c1 b3d1 c1d1|1575|mate,mateIn2,short|
f3goyz|1r2kb2/2R2Rp1/4pr2/4N2p/4P3/4P3/6PP/5K2 w - - 3 30|f1g1 b8b1 c7c1 b1c1|1580|mate,mateIn2,short|
1n8g5mk|r6r/pR1b1kp1/3bpq1p/2p5/3P4/5N2/P1PBQP1P/4K2R b K - 0 17|f7e8 b7d7 a8b8 d7d6|1590|winningMaterial,short|3:d7d6
1vzr5s8|1kq4r/2p4p/Q4np1/3n1p2/P2P4/P3P3/3B2PP/1R4K1 b - - 2 28|d5b4 b1b4 c8b7 a6b7|1600|mate,mateIn2,short|
ricg4s|rn1qkb1r/pp2pp1p/2p3p1/3nNb2/2pPP3/2N3P1/PP3PBP/R1BQK2R b KQkq - 0 8|f5e6 e4d5 e6d5 c3d5|1605|winningMaterial,short|3:c3d5 g2d5 e1g1
1egvzrr|r5kr/1p3pp1/p1p2nn1/2Pp4/1P1P3p/4PBqb/P1QNN1P1/R4R1K b - - 1 25|h3d7 e2g3 h4g3 h1g1|1615|winningMaterial,short|
a4i575|rn2kb1r/pQ2pp1p/2q3p1/2p2b2/2PP2n1/4BN2/PP2BPPP/RN2K2R w KQkq - 1 10|b7a8 c6a8 b1c3 g4e3|1620|winningMaterial,short|3:g4e3 a8b7 f8g7
1lqipy4|r1bqkb1r/ppp1ppp1/5n1p/8/3n4/5NPP/PPPPQPB1/RNB1K2R w KQkq - 1 8|e2e5 d4c2 e1d1 c2a1|1630|winningMaterial,fork,short|3:c2a1 f6d7
ldnafj|r2qkb1r/pppn1ppp/4p1b1/8/2PPn2N/2N1B3/PP2BPPP/R2QK2R w KQkq - 6 10|d1b3 d8h4 a1d1 e4c3|1640|winningMaterial,short|3:e4c3 f8e7 a8b8
1raudv0|3rk2r/pR2ppb1/2n4p/6p1/P1NP4/1Qn1B1P1/q2NPP1P/4K2R b Kk - 6 17|e8g8 b3c3 c6d4 e3d4|1645|winningMaterial,short|3:e3d4 e1f1
7lpk08|r5k1/5p2/1pb2qp1/p3b2p/2P2nB1/2B1Q2P/PP4P1/4NRK1 b - - 3 37|g6g5 c3e5 a8e8 e5f6|1655|winningMaterial,short|3:e5f6 e3f4
1z959p|4r1k1/5p2/1pb1B1p1/p6p/2P2R1q/2P1Q2P/P5P1/4N1K1 b - - 2 40|e8e6 e3e6 h4f4 e6c6|1665|winningMaterial,short|3:e6c6 e6c8
1876aft|r2qk2r/1p3pb1/p1n1pnp1/1N1pN2p/3P4/P3P3/1P1BQPPP/2R1K2R w Kkq - 0 15|e1g1 a6b5 e5c6 b7c6|1670|winningMaterial,short|
928rme|3r1r2/pB3pkp/2p1bp2/4n2N/3q4/5Q2/P4PPP/1R2R1K1 b - - 6 23|g7h8 f3f6 h8g8 f6g7|1680|mate,mateIn2,short|
1b0a4mg|8/8/4k1pB/2b5/5PKp/7P/8/8 w - - 15 50|h6f8 c5f8 f4f5 g6f5|1690|winningMaterial,endgame,short|
187bd9j|r3k2r/pp1nbppp/2p1pn2/q5P1/P2Pb3/2NB1N2/1PP2P1P/R1BQK2R b KQkq - 0 11|e4d3 g5f6 d7f6 d1d3|1700|winningMaterial,short|3:d1d3 c2d3
budwer|8/pr3P1p/4K3/8/5P2/P3k3/7P/8 b - - 0 55|h7h5 f7f8q|1710|winningMaterial,promotion,quietMove,endgame,oneMove|
a80xgc|5kr1/2p1n3/2p1pp2/P1Rp3Q/3P1B1R/4P3/r4PPK/1q6 b - - 3 30|g8g2 h2g2 b1e4 h5f3|1715|winningMaterial,short|
ingi07|8/p4p1p/7k/2p1r3/3rBn2/P7/5PPP/1R2R1K1 w - - 3 32|e4h7 e5e1 b1e1 h6h7|1725|winningMaterial,endgame,short|
10v7lt9|r3k1r1/1ppq1p2/6n1/pPPbb2P/3Q2p1/P6B/3NPP1P/R1B1K1R1 w Qq - 0 18|h3g4 e5d4 g4d7 e8d7|1735|winningMaterial,short|
1ahuwpz|r1bq1b1r/p3kp2/n3pp2/1B1p3p/1p1P3P/8/PPP1QPP1/RN2K1NR b KQ - 1 15|h8g8 b5a6 g8g2 a6c8|1745|winningMaterial,short|3:a6c8
1k8994d|4r3/3R3k/p6p/1p2b3/1P3p2/5r2/2R3N1/6K1 b - - 1 49|h7g6 g2h4 g6h5 h4f3|1755|winningMaterial,fork,endgame,short|
9f3wpa|r5k1/pp6/8/3pq3/Q3n3/4B2r/PP2PP2/1K4R1 b - - 1 25|g8f7 a4d7 f7f8 d7h3|1765|winningMaterial,fork,short|
26s1n1|4r1kb/3Q1p1p/4q1p1/8/4r3/2B4P/5PP1/4RRK1 w - - 5 29|d7e8 e6e8 e1e4 e8e4|1775|winningMaterial,endgame,short|
anyi0b|r1b1k2r/p3n1bp/4p1p1/1p1q1p2/2Np4/3P1N1P/PP3PP1/R1BQ1RK1 w kq - 0 14|c4e5 g7e5 f3e5 d5e5|1785|winningMaterial,short|
10thd5q|4k3/2p1n3/2p1Q3/P1Rp2B1/3P2K1/4P3/6P1/4q2r b - - 10 40|e1e3 e6e3 h1h7 a5a6|1795|winningMaterial,short|
19hwg1|4r1k1/5p2/1pb1q1p1/p6p/2P2R2/2PNQ2P/P5P1/6K1 w - - 0 42|e3e5 e6e5 d3e5 e8e5|1805|winningMaterial,short|3:e8e5
1b1p4hh|rr4k1/pRBb1qp1/3bp2p/2p5/3PQ3/5N2/P1P2P1P/4K1R1 b - - 8 21|d7c8 b7b8 a8b8 c7d6|1820|winningMaterial,fork,short|3:c7d6
13gs59t|r3k1nr/pp3ppp/2n1p3/3pP3/P3b1PP/B1P1qP2/8/R2QKBNR w KQkq - 1 12|d1e2 e3c3 e1f2 c3a1|1830|winningMaterial,fork,short|3:c3a1
v7d92|r1bq1rk1/ppp2pp1/1n1bp2p/P3N2P/2pP4/2N1P3/1P3PP1/R2QKB1R b KQ - 0 13|d8e7 a5b6 d6e5 d4e5|1840|winningMaterial,short|3:d4e5 a1a7
ugetnq|rr4k1/pR1b2p1/3bpq1p/B1p5/3P4/5N2/P1P1QP1P/4K1R1 w - - 5 20|g1g7 f6g7 a5c7 d6c7|1855|winningMaterial,short|3:d6c7 b8b7 c5d4
156w4py|8/2k4K/6PN/4R3/8/3q4/p7/8 w - - 0 60|e5f5 a2a1q|1865|winningMaterial,promotion,quietMove,endgame,oneMove|
1cmcgqh|6k1/4Q3/6pp/8/1P2pp2/7P/5PP1/q1r2NK1 w - - 10 45|e7f8 g8f8 g2g4 c1f1|1880|winningMaterial,endgame,short|3:c1f1 f8e7 f8g8
11vyucc|2r5/1p3k2/p7/3p1P2/3BP3/8/PP3r2/1K1R4 b - - 0 36|c8c2 d4f2 c2f2 d1d5|1890|winningMaterial,endgame,short|
z4xxrj|2r2rk1/1b1nppbp/6p1/qp1B4/3N4/4PNBP/PP3PP1/2RQK2R w K - 1 17|d1d2 c8c1 e1e2 a5d2 e2d2 c1h1|1905|winningMaterial,long|
1ytff88|3rR1k1/pp3rpp/1b3p2/3p1p1P/3P1P2/PB2R1P1/1P6/1K6 b - - 2 33|d8e8 e3e8 f7f8 b3d5 g8h8 e8f8|1920|mate,mateIn3,long|
c8obtp|3r2k1/8/5R2/p4N2/1p4P1/8/bP3P1P/3rR1K1 w - - 3 33|f5h6 g8g7 g4g5 d1e1|1930|winningMaterial,quietMove,short|
1oirqvs|8/3p4/k2Q4/1q2B2P/p3PK2/5P2/8/7r b - - 3 56|a6a5 e5c3 b5b4 d6b4 a5a6 c3d4|1945|winningMaterial,endgame,long|
u4nbjd|2R1k3/4b3/4p3/N4p1p/4r3/4PK2/6PP/8 b - - 1 35|e7d8 a5b7 e8e7 c8d8|1960|winningMaterial,quietMove,endgame,short|3:c8d8 b7d8
3s08kq|5bk1/1p3ppq/4p3/p2pP1P1/P2P1NQ1/1P5R/2r2P1K/8 b - - 4 44|h7e4 g4h4 c2f2 h4f2|1980|winningMaterial,quietMove,short|
bt5kpv|1kr5/1q5p/3Q2p1/5p2/P2P4/P3P3/3B2PP/6K1 b - - 2 32|c8c7 d2a5 g6g5 a5c7|1995|winningMaterial,quietMove,short|3:a5c7 d6c7 a5b6
1wz0j96|R7/7k/p4p2/1p1p4/3PP3/5P1p/8/2K5 w - - 6 42|e4d5 h3h2 c1d2 h2h1q|2015|winningMaterial,promotion,quietMove,endgame,short|
bk88f1|4rk2/pp6/8/2Bp1P2/8/8/PP2P2r/1K2R3 b - - 4 32|e8e7 f5f6 f8e8 f6e7|2030|winningMaterial,quietMove,endgame,short|3:f6e7 c5e7
1c6o0c1|6k1/pp2Rqp1/2p5/2np2Bp/7P/6P1/PPP5/2KR4 b - - 6 36|f7f2 g5e3 f2f8 e3c5|2050|winningMaterial,fork,quietMove,short|
o6rw4q|6kb/5p1p/4r1p1/8/8/2B4P/5PP1/5RK1 w - - 0 31|f1e1 h8c3 e1e6 f7e6|2075|winningMaterial,sacrifice,endgame,short|
v4dqzk|k6r/pnQ3pp/2p5/2q3r1/P3R3/8/2P2P1P/1R3K2 b - - 1 29|b7a5 e4b4 c5b4 b1b4|2095|winningMaterial,sacrifice,quietMove,short|
115vl8t|r4k1r/4bppp/pp3n2/2pqn2P/1P6/P2pPPN1/3P1P2/R1BQKB1R w KQ - 2 17|h5h6 e5f3 d1f3 d5f3 h6g7 f8g7|2120|winningMaterial,sacrifice,long|
15aitmg|8/4R1bk/6pp/2Q5/1P2pp2/7P/5PP1/q1r2NK1 w - - 7 39|g2g4 c1f1 g1g2 f1g1 g2h2 g1h1 h2g2 a1g1|2150|mate,mateIn4,long|7:a1g1 a1f1
t4tlnb|5r2/5p1k/qpQ1pp2/3P4/7P/4P2P/4KP2/6R1 w - - 1 31|e2d1 f8c8 c6c8 a6c8|2180|winningMaterial,sacrifice,quietMove,short|
gd2wh8|5b1k/1p3pp1/4p1q1/p2pP1PN/P2P2Q1/1P3R2/2r2P1K/8 b - - 0 42|f8e7 f3h3 h8g8 g4h4 c2f2 h4f2|2215|winningMaterial,quietMove,long|
1he8eoz|2k5/3p4/Q7/3q3P/p4K2/3PPP2/1B6/7r b - - 3 50|c8b8 b2e5 d7d6 e5d6 d5d6 a6d6|2255|winningMaterial,sacrifice,endgame,long|
a5k0nx|r4k1r/pp2q3/8/3p1Q2/4n3/4BP2/PP2P3/1K4R1 b - - 2 28|e4f6 e3c5 e7c5 f5f6 f8e8 f6h8|2305|winningMaterial,fork,sacrifice,quietMove,long|5:f6h8
zqknbq|2q1r1k1/pp1n2p1/2p3Q1/3p1r1p/4N2P/4B3/PPP3P1/2KRR3 b - - 0 29|f5f8 e3h6 f8f7 e4g5 d7e5 e1e5 c8e6 e5e6|2365|winningMaterial,quietMove,long|7:e5e6 g5e6
1oovv3q|7K/2r5/5kPn/p4b1P/R7/8/8/5R2 w - - 2 58|f1f3 h6f7 h8h7 f7g5 h7h6 c7h7 g6h7 g5f7|2455|mate,mateIn4,fork,sacrifice,endgame,long|
1nrgvyd|2n3k1/p4pp1/1p2p2p/1P2P3/1B1rN1PP/1R3P2/4nK2/8 b - - 7 37|e2c1 b3c3 d4b4 c3c8 g8h7 c8c1|2500|winningMaterial,fork,sacrifice,quietMove,long|
`;
  return RAW.trim().split('\n').map((line) => {
    const [id, fen, moves, rating, themes, alts] = line.split('|');
    const a = {};
    if (alts) for (const part of alts.split(';')) { const [k, v] = part.split(':'); a[k] = v.split(' '); }
    return { id, fen, moves: moves.split(' '), rating: +rating, themes: themes ? themes.split(',') : [], alts: a };
  });
})();
