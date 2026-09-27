/* Tactics puzzles generated for this app with the Stockfish engine (tools/puzzlegen.js).
 * One per line: id|fen|moves (UCI; the first is the opponent's mistake)|rating|themes|alternative answers by ply */
window.PUZZLES = (function () {
  const RAW = `
18dhpjc|r3kbnr/p1pp1ppp/1p6/1B2P3/3p2q1/P4b1P/1PP2PP1/R1BQ1RK1 w kq - 0 12|b2b3 g4g2|500|mate,mateIn1,oneMove|
uv9mzc|8/5pk1/p7/3p2p1/3Pp2p/1Q2P2P/5PP1/2q3K1 w - - 4 59|b3d1 c1d1|500|winningMaterial,oneMove,hangingPiece|
cj0co8|r1q3k1/1pp1br2/2np1nNQ/p2bp3/8/2P4P/PPBN1PP1/R4RK1 b - - 2 26|d5g2 h6h8|500|mate,mateIn1,oneMove|
100te0m|5k2/1p4p1/p1p1Q1p1/6q1/P1P5/2P5/2r2PKP/4R3 w - - 3 37|e6g4 g5g4|500|winningMaterial,oneMove,hangingPiece|
18r18qs|3r1rk1/2q1bp2/bp2p2p/p3N2N/2P3Q1/P7/1P3PPP/4R1K1 b - - 0 23|g8h8 g4g7|500|mate,mateIn1,oneMove|
u7toer|Qn2kb1r/5pp1/p3b2p/2p5/5p1P/2Nq2P1/PPnB2B1/R3K1NR w k - 7 17|e1f2 f4g3|500|mate,mateIn1,oneMove|
1i59pvy|5k1r/ppq1pp2/2p3Pp/5n2/Q5B1/2P5/PP2RPP1/3r2K1 w - - 0 27|e2e1 d1e1|500|mate,mateIn1,oneMove|
jnqn6p|3Q3k/r1p3q1/pp1n3p/5B2/8/P1P5/3n2PP/5RK1 b - - 2 40|g7f8 d8f8|500|mate,mateIn1,oneMove|
nwxj3b|8/p3N2p/P1P3p1/2P5/3p2bP/3B2k1/2PK2P1/1r6 w - - 4 35|d3f5 b1d1|500|mate,mateIn1,oneMove|
tabm4d|4rk2/p1p3pp/2pn4/4Rp2/P7/1PP5/1N2KPPP/8 w - - 3 30|h2h4 e8e5|500|winningMaterial,oneMove,hangingPiece|
1r3qcgx|Qn2kb1r/5pp1/p3b2p/2p5/5p1P/2Nqn1P1/PP1B2B1/R2K2NR w k - 1 14|d1c1 d3c2|500|mate,mateIn1,oneMove|
n02zhx|k4r2/6Rp/1RP3r1/p7/P7/3p4/2PP3P/6K1 w - - 2 34|g1h1 f8f1|500|mate,mateIn1,oneMove|
u0mslp|r4rk1/3pbpp1/pp4Qp/2pPB3/8/8/PPP2PPP/R3R1K1 b - - 0 20|c5c4 g6g7|500|mate,mateIn1,oneMove|
ro24jy|2r4r/4pk2/p4b1p/1p5Q/1P4pP/4q1P1/P3N1P1/3RK2R b K - 3 23|f7e6 h5d5|500|mate,mateIn1,oneMove|
1gdrhb4|r1bqkb1r/pp1npppp/5n2/1Bp5/3PN1P1/5N2/P1PBQP1P/1R2K2R b Kkq - 2 11|f6h5 e4d6|500|mate,mateIn1,oneMove|
1uai47d|8/p4Q2/kp4p1/5n2/P7/3Pq2P/2P3P1/4B1K1 w - - 3 42|g1h1 e3e1|500|winningMaterial,oneMove,hangingPiece|
tj13qq|3k1bnr/1p6/nNp1q1p1/p3pp1b/7P/4BPN1/PPPQ4/4KB1R b K - 1 20|e6d7 d2d7|500|mate,mateIn1,oneMove|
1affnrw|8/1r2kp1p/4p3/3n4/6pP/PR4P1/1NK2P2/8 b - - 1 34|f7f5 b3b7|500|winningMaterial,oneMove,hangingPiece|
2a7o1y|rn3rk1/pp3pp1/4pn1p/2P5/P3q3/2P3BP/1P3PP1/1R1QKB1R w K - 1 14|d1e2 e4b1|500|winningMaterial,oneMove,hangingPiece|
1yyjr32|r1b5/ppQ3k1/5qp1/4p3/2p4R/P3P2P/5PP1/6K1 b - - 3 28|f6e7 c7e7|500|winningMaterial,oneMove,hangingPiece|
oeb5z5|7R/1p3bp1/1p3rkp/1p3q2/1P6/2P1p1QP/4N1PK/8 b - - 5 40|f5g4 g3g4|500|mate,mateIn1,oneMove|
1mvfud6|7r/1ppk1p2/pb3p2/5r1p/P6P/1PPRB3/4KP2/6R1 b - - 0 27|f5d5 d3d5|500|winningMaterial,oneMove,hangingPiece|
13h9cht|6Q1/3P1R2/p3p1pk/8/1p2B1P1/7p/P2q3K/2r5 w - - 3 38|f7f2 d2f2|500|winningMaterial,oneMove,hangingPiece|
1k535bb|4rr1k/2q3pp/8/Rp3p2/7P/P2Q3R/1P2N3/4K3 w - - 0 34|h4h5 c7a5|500|winningMaterial,oneMove,hangingPiece|
v22yfw|r6k/pR4p1/4B2p/8/5Pn1/6K1/PQ4PP/4q3 w - - 5 33|g3f3 g4h2|510|mate,mateIn1,oneMove|
1f86449|r2q1k1r/4b1p1/pp2Qn2/3nN3/3P3p/PP5P/1B3PP1/2R2RK1 b - - 2 23|f6d7 e6f7|515|mate,mateIn1,fork,oneMove|
hd2y30|8/r1p4k/pp1q3p/3R4/3Q4/P1P2n2/6PP/6K1 w - - 7 46|g1h1 d6h2|525|mate,mateIn1,oneMove|
1bm35ud|6k1/pR3pp1/4p2p/2P5/P7/2P2B1P/7R/2q4K w - - 7 30|f3d1 c1d1|530|winningMaterial,oneMove,hangingPiece|
1b4lhsw|1r2r2k/p5b1/6B1/1Pp4p/5P2/2P1n1P1/1P1N3P/q1B2QKR w - - 1 27|f1e2 a1c1|540|winningMaterial,oneMove,hangingPiece|
1058lwz|rn2k2r/1ppqn3/4pQp1/pb1pP2p/3P3P/B1P5/2PK1PP1/R4B1R b kq - 3 15|b5c4 f6h8|545|winningMaterial,oneMove,hangingPiece|
wfaqu5|1Q4k1/5pp1/8/2rq4/P7/8/5PP1/5RK1 b - - 4 32|c5c8 b8c8|550|winningMaterial,endgame,oneMove,hangingPiece|
hsld72|rr6/4R3/2P2pk1/N5n1/1K4pp/4P3/6P1/2R5 w - - 4 45|b4a3 a8a5|560|mate,mateIn1,oneMove|
1ea5rvh|R7/8/7K/R4p2/1P3r2/1kP5/6r1/8 w - - 0 58|a5e5 f4h4|565|mate,mateIn1,endgame,oneMove|
13a6dzs|5R2/6k1/4N1p1/7p/p1P1bp1P/2P5/r7/6K1 b - - 7 55|g7h6 f8h8|570|mate,mateIn1,oneMove|
1q8z9tf|6bk/8/6pp/2Q1p1q1/P2pPn2/8/6BP/6NK w - - 3 47|h2h3 g5g2|575|mate,mateIn1,oneMove|
1vd7qr5|6r1/2p1nk2/2p1pp2/P1Rp4/3P3R/4PQB1/Pr3PP1/1q4K1 w - - 1 28|c5c1 b1c1|580|winningMaterial,oneMove,hangingPiece|
ebewh5|8/4Q1kp/1r6/3ppp2/3b1BP1/3b1nKP/8/8 b - - 7 43|g7h8 e7f8|590|mate,mateIn1,oneMove|
1jro8wq|4k3/2p1n3/2p1Q3/P1Rp2B1/3P4/4P1K1/6P1/1q5r b - - 4 37|b1b8 e6e7|595|mate,mateIn1,oneMove|
avcggv|r4rk1/ppp1nppp/2n3q1/2Bp4/Q3P3/2P4b/PP1NBPPP/R4RK1 w - - 5 13|a2a3 g6g2|600|mate,mateIn1,oneMove|
1jw9kjb|8/7R/8/r7/8/p7/2K4k/8 b - - 21 62|a5h5 h7h5|605|winningMaterial,endgame,oneMove,hangingPiece|
18fua34|r2k2Q1/3p4/p7/4B3/1q6/2r1P3/3PKP1P/8 b - - 1 31|b4f8 g8f8|610|mate,mateIn1,endgame,oneMove|
tep3cd|1r1q1rk1/pb3ppp/2p3P1/2b1n2Q/1P1pP3/3P3P/P2B1PB1/1R2R1K1 b - - 0 20|a7a6 h5h7|615|mate,mateIn1,oneMove|
1chlqc9|6rk/R5p1/6q1/7p/5P2/7K/PQ4PP/8 w - - 0 38|b2b1 g6g4|620|mate,mateIn1,endgame,oneMove|
ea256i|7K/1pr5/p6n/4kbPP/1P3R2/5R2/8/8 w - - 5 54|f4g4 c7h7|625|mate,mateIn1,endgame,oneMove|
1od5tf0|3n4/ppp2kp1/4bp2/1P5p/4P3/2N2PB1/P5PP/3r3K w - - 0 33|g3e1 d1e1|630|mate,mateIn1,oneMove|
qu6tsc|6R1/8/8/p6r/8/8/5Pk1/4K3 b - - 4 54|h5g5 g8g5|635|winningMaterial,endgame,oneMove,hangingPiece|
1ho2br3|2r5/4kp1p/pn6/8/4Pn1R/P2p1P2/3P1P2/2B1KB2 w - - 2 32|f1d3 c8c1|640|mate,mateIn1,oneMove|
z5di4m|2kr4/1pp2p2/p1P1bqp1/3pP3/8/2P2NP1/P1nNPKB1/1RB5 b - - 0 22|b7b5 e5f6|645|winningMaterial,oneMove,hangingPiece|
1bovo35|4r3/8/6P1/1pk3R1/8/8/2K5/8 b - - 12 74|e8e5 g5e5|650|winningMaterial,endgame,oneMove,hangingPiece|
ehczsi|2rq1r1k/1p2bppp/p1n1p3/3pP2N/2nP2Q1/P2NB2P/1P3PP1/2R2RK1 b - - 16 20|a6a5 g4g7|650|mate,mateIn1,oneMove|
66uhyc|8/pk1r1R1Q/1p4p1/4qn2/P6B/3P3P/2P3P1/7K b - - 0 33|e5f4 f7d7|655|winningMaterial,oneMove,hangingPiece|
oyoxuu|r2k2r1/p2p2Bp/1np2P2/6b1/p1P3B1/6P1/6K1/R3R3 b - - 0 29|g8g7 f6g7|660|winningMaterial,oneMove,hangingPiece|
ww21lh|r1q4r/p3k2p/1bQ1B1bp/8/2P5/P2p2N1/1P4PP/R4RK1 w - - 1 25|g1h1 c8c6|665|winningMaterial,oneMove,hangingPiece|
1qlmfew|R2bkr1Q/3q4/8/3Pp2p/p3P1pP/8/P5PK/8 w - - 4 44|a8d8 d7d8|670|winningMaterial,oneMove,hangingPiece|
1rgnr0d|2rr4/pp2k1pp/4bp2/8/4B3/1P3P2/P1PK2PP/R3R3 w - - 3 22|e4d5 d8d5|675|winningMaterial,oneMove,hangingPiece|
p0gllv|r2r2k1/4npp1/p2Np3/7p/1P6/P7/5PPP/2R1R1K1 w - - 1 33|d6f7 g8f7|675|winningMaterial,oneMove,hangingPiece|
1la8mg2|2b2rk1/3p1pp1/1p3q2/8/4NB1p/1Q1P3P/4NKP1/8 b - - 4 21|f6f4 e2f4|680|winningMaterial,oneMove,hangingPiece|
mno5ci|r7/1qp2pk1/5np1/2b1p2p/Q2PP2P/3P3N/4BPP1/B3K2R w K - 1 26|a4c2 a8a1|685|winningMaterial,oneMove,hangingPiece|
4uq3lw|r3k1nr/4bppp/p1q1p3/1p6/8/P4Q1P/1PPN1PP1/1RB1K2R b Kkq - 1 14|c6d7 f3a8|690|winningMaterial,oneMove,hangingPiece|
onfzja|r7/6P1/6R1/8/3pk3/8/K1P5/8 w - - 5 45|g6a6 a8a6|695|winningMaterial,endgame,oneMove,hangingPiece|
1yeefk5|r1bq1rk1/1p2bppp/4p2B/p2n4/2BPN1Q1/8/PP3PPP/R4RK1 b - - 7 16|a5a4 g4g7|695|mate,mateIn1,oneMove|
1ycxx6q|4r1k1/ppqnQ1p1/2p3b1/3p1r1p/4N2P/4B3/PPP3P1/2KRR3 w - - 10 28|e7e8 g6e8|700|winningMaterial,oneMove,hangingPiece|
k9mhi8|r6k/1b3p1p/pp6/5p2/2P5/4P2Q/5PPP/2qRK3 b - - 3 30|c1d1 e1d1|705|winningMaterial,oneMove,hangingPiece|
6oxpdr|6k1/5bbp/r5p1/5p2/8/1N6/PP3PPP/R1B3K1 w - - 2 28|a2a4 f7b3|705|winningMaterial,oneMove,hangingPiece|
1l89h4c|8/4rpk1/5p1p/2p2R1P/1n3PP1/1P6/1K2B3/8 w - - 11 50|b2c3 e7e2|710|winningMaterial,oneMove,hangingPiece|
1i2le98|2b1k1r1/p3pp1p/3p4/qPp5/1n2PPp1/3P4/2P1Q1PP/N1B2RK1 w - - 1 21|f4f5 a5a1|715|winningMaterial,oneMove,hangingPiece|
1lnhx35|r3k2r/pp2bpp1/3Np2p/3pP2P/2nP1Q2/1R5R/P1qB1PP1/4K3 b kq - 11 26|e8f8 f4f7|720|mate,mateIn1,oneMove|
1cdfusd|7k/6p1/p2n2Bp/1p1Q2qP/2pp4/P2P4/1PP3K1/8 w - - 3 42|g2h3 g5d5|720|winningMaterial,oneMove,hangingPiece|
1heer8o|rn2k2r/pQ2bppp/1qp2n2/3p1b2/3P1B2/2N1P3/PP3PPP/R3KBNR w KQkq - 1 9|b7e7 e8e7|725|winningMaterial,oneMove,hangingPiece|
1t0ximu|r1bqkb1r/pp2p2p/5nN1/1Pp1p2Q/3p4/3P4/P1P2PPP/R1B1KB1R w KQkq - 1 13|h5e5 h7g6|730|winningMaterial,oneMove,hangingPiece|
1ckyy6z|3r3k/1p1q1ppp/4p3/p2pP2N/Pb1P3P/1P4Q1/5PP1/5RK1 b - - 2 33|b7b6 g3g7|730|mate,mateIn1,oneMove|
ar9fq5|1r2r1k1/3b1p1p/3p2p1/1pnPbPQ1/p1p1P1P1/P1N3qP/1PP1R1BN/5R1K w - - 5 30|b2b3 g3h2|735|mate,mateIn1,oneMove|
167i0ae|5R2/1p2rRpk/p3p2p/r3P3/8/4P3/6PP/6K1 b - - 0 31|a5b5 f7e7|740|winningMaterial,oneMove,hangingPiece|
hbos83|rrb5/5k2/p1p1p3/R1Pp1p1p/RP1PnPp1/3BP1P1/3N1K1P/8 w - - 3 31|f2g2 e4d2|740|winningMaterial,oneMove,hangingPiece|
hjt6n4|6k1/4npp1/7p/2RN4/4P3/7P/1r4P1/3nN2K b - - 3 43|f7f5 d5e7|745|winningMaterial,oneMove,hangingPiece|
107or4r|2k5/p3rQ2/1pp2n2/4P2p/5q1p/2P5/PP3PP1/3R2K1 w - - 0 36|d1d8 c8d8|750|winningMaterial,oneMove,hangingPiece|
1odjtvc|3rk3/1p2pp2/6p1/p2P2q1/P2Q2r1/1B6/1RP2P2/4RK2 w - - 0 24|d5d6 g4d4|750|winningMaterial,oneMove,hangingPiece|
enqvve|6k1/pp3pp1/4p2p/2P5/P7/2PqP2P/1R5R/3B1K2 w - - 3 25|f1f2 d3d1|755|winningMaterial,oneMove,hangingPiece|
1xz6c24|8/1p3pk1/6P1/p2p4/5nq1/P1P1Q3/1PB2P2/6K1 w - - 1 33|g1h1 g4g2|755|mate,mateIn1,oneMove|
1mcgvmu|r5k1/5ppp/p7/1b6/7P/P1B1r1P1/1P3K2/R6R b - - 1 25|e3c3 b2c3|760|winningMaterial,oneMove,hangingPiece|
kf6o8u|3R1rk1/3b1pp1/1b5p/3pP3/1p6/4BNP1/1Pn2PBP/4R1K1 b - - 0 23|f8d8 e3b6|765|winningMaterial,oneMove,hangingPiece|
8ujdgj|r1bk3r/p1p2ppp/5B2/3B4/1b4q1/3K1N2/PPP2PPP/R3Q2R b - - 0 16|b4e7 e1e7|765|mate,mateIn1,oneMove|
m90z8i|rnBq4/2p4k/p2p2p1/1p3p1n/3P4/7Q/PPP2PP1/RN2K3 w Q - 2 18|e1d2 d8c8|770|winningMaterial,oneMove,hangingPiece|
1h8lxxs|5r1k/4q1p1/3Q3p/5p2/p6P/6P1/PPP5/2KR4 b - - 1 32|e7e4 d6f8|770|winningMaterial,oneMove,hangingPiece|
1mq3qmk|r1b3k1/pp3ppp/4p3/6N1/2p3Q1/P1q1P2P/5PP1/R5K1 w - - 0 21|a1c1 c3c1|775|winningMaterial,oneMove,hangingPiece|
1738z1r|rn2kbnr/1p6/2p3p1/p3pp1b/3q3P/2N1BPN1/PPP1Q3/R3KB1R b KQkq - 1 15|h5f3 e2f3|780|winningMaterial,oneMove,hangingPiece|
1eht9t3|6k1/1R6/p4N1p/P3n1p1/2p4r/4K3/8/8 b - - 1 46|g8h8 b7h7|780|mate,mateIn1,endgame,oneMove|
1y9h0ii|r3k2r/bpp2ppp/8/p3P3/P1b5/1N3PPP/1P2P3/R1B1K2R w KQkq - 0 18|c1d2 c4b3|785|winningMaterial,oneMove,hangingPiece|
dou5nq|r4r1k/pp2p1bp/6p1/1N6/1P1P4/8/1P3PbP/R1B1K1R1 b Q - 1 19|a8d8 g1g2|785|winningMaterial,oneMove,hangingPiece|
19b56sq|7R/1p3p2/5kq1/3P1n2/8/PPPPbQ2/8/6K1 w - - 5 45|g1h1 g6g1|790|mate,mateIn1,oneMove|
du28nd|r5k1/p1p2ppp/2p3n1/4r3/N4Q2/1P6/P1P2PPP/3RR1K1 b - - 0 20|g6f4 e1e5|790|winningMaterial,oneMove,hangingPiece|
8hzvh2|r1b4r/1pk1p3/p2p2pp/n2B2N1/2P5/4P3/P1P3PP/2KR1R2 w - - 0 24|c4c5 h6g5|795|winningMaterial,oneMove,hangingPiece|
183pdut|r1bq1rk1/pppp2pp/8/1B2np2/1P1bP3/8/P1P1QPPP/RNB2RK1 w - - 1 10|e4f5 d4a1|795|winningMaterial,oneMove,hangingPiece|
vjy9jw|3r1b1r/2pkq1pp/1n3n2/1Q1P1p2/3Pp3/2N5/PP1B1PPP/R3K2R b KQ - 2 18|d7d6 b5c6|800|mate,mateIn1,oneMove|
1bhwa3p|2n3k1/p2r1pp1/1p2p2p/1P2P3/1B3nPP/1R3PK1/5N2/8 b - - 3 35|c8e7 g3f4|800|winningMaterial,oneMove,hangingPiece|
1659jwh|4k3/5p1p/p3pPnp/P3P3/5P2/1R2B2K/6r1/8 b - - 2 52|g6f4 e3f4|805|winningMaterial,oneMove,hangingPiece|
sv8a7l|r7/3p4/p4Q2/2k5/3B4/3PP3/q4P1P/3K4 b - - 4 37|c5d5 e3e4|810|mate,mateIn1,endgame,oneMove|
1rvnom2|4Rkn1/1p2pb1r/p4pq1/3p3p/3N3B/2Q3PP/P7/4R1K1 b - - 0 32|f8e8 c3c8|810|mate,mateIn1,oneMove|
fliuqj|2r3k1/p5pp/5b2/4B3/3pp3/P5P1/1PP2P1P/R2K4 w - - 1 24|e5d4 f6d4|815|winningMaterial,oneMove,hangingPiece|
1cglqck|1rbq1r1k/2pn1pb1/1pBp2pp/p7/P2P1p2/2P1P1BP/2PN2P1/R2QR1K1 w - - 0 17|g3h4 d8h4|815|winningMaterial,oneMove,hangingPiece|
1fvs9sh|8/3bpk1Q/p2pp1p1/P1pP4/1rP1n1P1/7P/5P1K/8 b - - 0 33|f7e8 h7g8|820|mate,mateIn1,oneMove|
17f29u5|4rQ2/p1k1Pp2/P1p3p1/5p1p/1p1q4/5P2/5P2/4R1K1 b - - 1 33|e8f8 e7f8q|820|winningMaterial,promotion,oneMove,hangingPiece|
klg2nt|1r2k2r/1p1q1ppp/p1npb3/8/P1Pp3P/1PNQ2P1/5PB1/2R1K2R w Kk - 0 20|g2c6 d7c6|825|winningMaterial,oneMove,hangingPiece|
1pc4076|2kr3r/pbqp1pp1/3b1n1p/2n1Q3/4P3/2P2N2/PP1N1PPP/R1B1KB1R w KQ - 1 12|e5d6 c7d6|825|winningMaterial,oneMove,hangingPiece|
1xd15r3|8/8/6p1/R4kPp/4p3/6P1/1q3P2/5K2 b - - 11 63|b2b5 a5b5|830|winningMaterial,endgame,oneMove,hangingPiece|
zjzoc2|3rRrk1/pp4pp/1b3p2/3p1p1P/3P1P2/PB2R1P1/1P6/1K6 w - - 7 36|b3d5 d8d5|830|winningMaterial,oneMove,hangingPiece|
t9wypw|8/8/1R6/P7/4p3/8/1r1k3p/7K b - - 21 72|d2e2 b6b2|835|winningMaterial,endgame,oneMove,hangingPiece|
1r1vjzp|8/8/3k1K2/4p2p/5p2/2r2P2/7P/3R4 b - - 1 35|c3d3 d1d3|835|winningMaterial,endgame,oneMove,hangingPiece|
1a3pqcm|3r1bk1/5ppp/p2n4/1ppQ2B1/7P/q4N2/5PP1/4R1K1 b - - 3 29|b5b4 g5d8|840|winningMaterial,oneMove,hangingPiece|
13dsjg3|8/3k3p/p2bp1pP/3p1pP1/Pp1P1P2/4P3/2B1K3/r3R3 b - - 0 44|d7e8 e1a1|840|winningMaterial,oneMove,hangingPiece|
105za48|r1bqkb1r/pppp1ppp/2n5/8/2BQP3/8/PPP2PPP/RNB1K2R w KQkq - 3 7|c4f7 e8f7|845|winningMaterial,oneMove,hangingPiece|
1od8e18|2Q1r1k1/5p2/6p1/1b6/p1p1pbP1/5NqP/1PP1R1B1/4R2K w - - 3 42|c8e8 b5e8|845|winningMaterial,oneMove,hangingPiece|
94nk0u|r2q1rk1/3bb1pp/p3p3/n2p1p2/Q2P1B2/2PBPN1P/5PP1/2R1R1K1 w - - 1 19|a4d7 d8d7|845|winningMaterial,oneMove,hangingPiece|
vcohb2|r2qk2r/pp3nR1/2pp4/Q3pb2/2P1n3/5N1P/PP2PP2/R1B1KB2 w Qkq - 0 16|g7g8 h8g8|850|winningMaterial,oneMove,hangingPiece|
q1yf4p|r3r1k1/1R4bp/b3p1p1/3pN3/3P1PPn/4Q2P/4n3/2B2RK1 w - - 0 29|e3e2 a6e2|850|winningMaterial,oneMove,hangingPiece|
1fqb0ve|8/5B2/1R5k/6p1/p5K1/1p6/5P2/3r4 b - - 1 52|d1d6 b6d6|855|winningMaterial,endgame,oneMove,hangingPiece|
qc9k6w|r4k1r/1pq2pp1/p2Qb3/4PN1p/2P1P3/6PP/PP3bB1/R1B4K b - - 5 22|f8e8 f5g7|855|mate,mateIn1,oneMove|
xd83uj|3r2k1/5p1p/2R3p1/1p6/7P/6P1/1P3P2/3rR1K1 w - - 3 37|c6b6 d1e1|860|winningMaterial,oneMove,hangingPiece|
bqjij7|6k1/p5p1/5r1p/P1p5/3pR3/1P1P3P/2P1Rr2/6K1 b - - 2 42|f6g6 g1f2|860|winningMaterial,oneMove,hangingPiece|
1xwltgl|rnb1kbnr/ppp2ppp/8/3qp3/2PpN3/P2P4/1P2PPPP/R1BQKBNR b KQkq c3 0 5|d5e4 d3e4|865|winningMaterial,oneMove,hangingPiece|
1a0lus4|1rk5/3p4/p5Q1/8/3B3P/3PP3/q3KP2/8 w - - 5 44|e2d1 b8b1|865|mate,mateIn1,endgame,oneMove|
gxdray|8/r3k2p/8/1R1np3/P4ppP/6P1/1N1K1P2/8 b - - 1 39|e5e4 b5d5|870|winningMaterial,oneMove,hangingPiece|
6cosqr|8/pR4kp/6p1/3B4/1P3bP1/3P4/4r3/6K1 b - - 3 33|f4c7 b7c7|870|winningMaterial,endgame,oneMove,hangingPiece|
9ujkkd|r3k3/6R1/4BK2/8/5p2/p7/1p6/8 b - - 11 64|a8a5 g7g8|870|mate,mateIn1,endgame,oneMove|
4l8pbj|8/p1k1Rp1p/3q2bb/8/2p3P1/2P2B2/PP1N4/2K1R3 b - - 2 38|d6e7 e1e7|875|winningMaterial,oneMove,hangingPiece|
1jvr1sb|r3k1nr/ppp2p1p/8/3qN1B1/2b5/3pP1P1/PP1Q1P1P/2KR3R w kq - 2 15|e3e4 d5e5|875|winningMaterial,oneMove,hangingPiece|
1so6rc0|6k1/p5pp/2p5/8/2N1pnP1/1P5P/P1Pq4/5QK1 b - - 4 31|d2c1 f1c1|880|winningMaterial,oneMove,hangingPiece|
x9zluf|1R4k1/2pq1rp1/p7/4Q2p/4P3/5P1P/2p3P1/7K b - - 1 41|g8h7 e5h5|880|mate,mateIn1,oneMove|
11fp9gm|r2qkbnr/ppp2ppp/2n5/4pb2/2B1N3/5N2/PPPP1PPP/R1BQK2R w KQkq - 2 6|d2d4 f5e4|885|winningMaterial,oneMove,hangingPiece|
px29oi|4rr1k/p5pp/5p2/3p4/7P/1Q4P1/PPPR1q2/2K4R b - - 3 25|f2d2 c1d2|885|winningMaterial,oneMove,hangingPiece|
169j6cs|3r4/6pk/6n1/3PQpqr/4p2p/7P/P3NPP1/1R1R2K1 w - - 5 32|e5g7 h7g7|885|winningMaterial,oneMove,hangingPiece|
ktw9fy|7k/1R6/6p1/p6p/5P1P/6P1/r6K/8 w - - 5 58|b7b2 a2b2|890|winningMaterial,endgame,oneMove,hangingPiece|
feyig3|r3k1n1/1p2p1r1/p3bp2/2Rp1q1p/3N1p1B/2Q4P/P4PP1/4R1K1 b q - 7 26|g7g2 g1g2|890|winningMaterial,oneMove,hangingPiece|
1kgl3lb|6k1/4bp1p/r3p3/N1p5/2P2P2/7P/PP1R1P2/5K2 w - - 1 35|a2a3 a6a5|895|winningMaterial,oneMove,hangingPiece|
1wfnell|r7/3nkpr1/p3p1PQ/1p1p3P/2pPb3/2P3q1/PP4P1/RN1B1RK1 w - - 1 25|a2a3 g3g2|895|mate,mateIn1,oneMove|
1r9v218|r5k1/1Q3p2/8/p7/7p/2P4P/1P1K2P1/r7 b - - 0 39|a5a4 b7a8|895|winningMaterial,endgame,oneMove,hangingPiece|
1rh1svd|8/3K4/8/8/7Q/8/5k2/4q3 b - - 0 69|f2e3 h4e1|900|winningMaterial,endgame,oneMove,hangingPiece|
piojq7|2r3k1/4b1pp/Q1q1p3/4Bp2/2pP4/4P2P/2R2PP1/6K1 w - - 1 29|a6c8 c6c8|900|winningMaterial,oneMove,hangingPiece|
a5s76v|3r2k1/5pp1/5n1p/1B4q1/8/RP2PP1P/5P2/5QK1 w - - 1 27|f1g2 g5b5|905|winningMaterial,oneMove,hangingPiece|
1ai1d0e|4R3/kp6/p7/3P1p2/5q2/4n2P/1P4B1/6RK w - - 9 49|e8e3 f4e3|905|winningMaterial,endgame,oneMove,hangingPiece|
1bhpgmz|2q5/5pk1/p7/P2p2p1/3Pp2p/1Q2P2P/5PP1/R1r3K1 w - - 21 54|b3d1 c1d1|910|winningMaterial,fork,oneMove,hangingPiece|
1nf11te|6k1/1p6/p1pr2R1/7P/1P6/P1Q2P2/4q3/6K1 b - - 0 43|g8h7 c3g7|910|mate,mateIn1,oneMove|
qb8zd6|2r1r3/4Pkp1/5p2/1pB3q1/1P1R4/P1n1Q3/2p5/2R3K1 w - - 0 37|e3g3 g5g3|910|winningMaterial,oneMove,hangingPiece|
17x4vk|8/1p4kp/8/p7/P3Np1P/2b4K/5PP1/8 b - - 0 40|b7b5 e4c3|915|winningMaterial,endgame,oneMove,hangingPiece|
1ttqdxv|r3r1k1/p4p2/2pp3p/5QP1/4P3/P3BP2/1bP1K2q/1N4R1 w - - 2 29|g1g2 h2g2|915|winningMaterial,oneMove,hangingPiece|
t0rq3h|8/8/5k2/8/3p1K2/1BnP4/8/8 b - - 6 73|c3d5 b3d5|920|winningMaterial,endgame,oneMove,hangingPiece|
113m167|3Q2k1/4qppp/p7/8/6n1/4P2P/pr2NPP1/3R2K1 b - - 1 27|e7d8 d1d8|920|mate,mateIn1,oneMove|
1q82y2e|r6k/pp1B2pp/3q4/4nQ2/P5P1/7P/1P3P2/R5K1 w - - 0 31|f5e4 e5d7|920|winningMaterial,oneMove,hangingPiece|
q0oufx|8/2B1pp1k/p3r1pb/7p/4n2P/5BP1/P1RrPPK1/5R2 w - - 4 27|c2c5 e4c5|925|winningMaterial,oneMove,hangingPiece|
xzcinf|8/4k3/2PR2p1/7p/4P3/6r1/6P1/3K4 w - - 1 43|d6g6 g3g6|925|winningMaterial,endgame,oneMove,hangingPiece|
zeklop|4r2k/8/1P1p3P/2p5/7B/2P5/1b3r2/1N1K2R1 b - - 5 43|b2c3 h4f2|925|winningMaterial,endgame,oneMove,hangingPiece|
1vq1bni|8/2k5/8/3RPR2/1K3P2/6r1/Pr6/8 w - - 7 47|b4a5 g3a3|930|mate,mateIn1,endgame,oneMove|
17gv2ds|5k2/3bpp1p/p2pN1p1/P1pP4/1rP1n1P1/2Q4P/5P1K/8 b - - 8 31|f8g8 c3g7|930|mate,mateIn1,oneMove|
972lve|8/4Q1kp/5r2/3ppp2/3b2Pn/3b2K1/8/2B5 b - - 3 47|g7h8 e7f6|935|winningMaterial,fork,endgame,oneMove,hangingPiece|
14efsap|1k5r/pp3Qpp/1np5/6r1/P2q4/3B4/2P2PKP/1R2R3 w - - 0 23|g2h3 d4g4|935|mate,mateIn1,oneMove|
1g1hltj|8/8/8/1p1RB3/4k1b1/8/3K4/6r1 w - - 10 74|d5d4 e4e5|935|winningMaterial,endgame,oneMove,hangingPiece|
1og7dnl|5k2/7p/5P2/7P/1n6/1B4K1/8/8 b - - 0 45|b4c2 b3c2|940|winningMaterial,endgame,oneMove,hangingPiece|
1g0wvr1|r2q1rk1/p1pb1ppp/1bpp1n2/4P3/Q3P3/2P2N2/PP1N1PPP/R1B1R1K1 b - - 0 11|b6f2 g1f2|940|winningMaterial,oneMove,hangingPiece|
ahapao|6k1/1b4b1/7p/5p2/P5pP/R7/1Pr2PP1/2B2NK1 w - - 6 39|a4a5 c2c1|940|winningMaterial,oneMove,hangingPiece|
dsa8u2|8/5kp1/p1pb4/3p1P2/PP6/2B5/4n3/2K2R2 w - - 1 39|c1d1 e2c3|945|winningMaterial,endgame,oneMove,hangingPiece|
1o81xec|7r/8/3p4/p1k5/3R4/P6P/5PP1/6K1 w - - 1 42|d4d6 c5d6|945|winningMaterial,endgame,oneMove,hangingPiece|
hz6a13|8/8/8/1p2r1P1/1k5R/1p6/1K6/8 b - - 9 60|e5e4 h4e4|950|winningMaterial,endgame,oneMove,hangingPiece|
qmdvz1|1k5r/2p4p/2R2pp1/p7/Pbn1P2P/8/5PP1/1R4K1 b - - 8 29|c4e3 f2e3|950|winningMaterial,oneMove,hangingPiece|
eph4lm|r7/2k1bpp1/1P2p2p/2p1P3/4r2P/4B2R/5PP1/R3K3 b Q - 0 24|c7b6 a1a8|950|winningMaterial,oneMove,hangingPiece|
1u7gf6w|6k1/5p2/p5pb/7p/PNr5/8/1P3PPP/1R3K2 w - - 3 33|b4c2 c4c2|955|winningMaterial,oneMove,hangingPiece|
11vp160|3r2k1/4bp1p/n1B5/1P3p2/5Pp1/6P1/2Np1P1P/3R2K1 b - - 0 34|g8g7 b5a6|955|winningMaterial,oneMove,hangingPiece|
9w1isj|8/8/p7/1p5R/1P2kp2/5r2/1PPK4/8 b - - 0 41|f3h3 h5h3|955|winningMaterial,endgame,oneMove,hangingPiece|
zlrfzi|3q1k2/1p4p1/p1p1Q1p1/8/P1P5/2P1R3/5P1P/2r2K2 w - - 7 39|f1e2 d8d1|960|mate,mateIn1,oneMove|
1hgvbju|4b3/5p2/4k3/2K1P2p/4P3/1p4P1/1B6/8 b - - 9 56|e8c6 c5c6|960|winningMaterial,endgame,oneMove,hangingPiece|
1bz9zft|8/3kp2p/3p2p1/1b4B1/4P1PP/4QP2/2PK4/6q1 b - - 8 36|h7h6 e3g1|960|winningMaterial,oneMove,hangingPiece|
1pcqmas|4r3/6kp/4P3/p1Rr1p2/P2P1p2/5K1P/8/3R4 b - - 1 41|g7f6 c5d5|965|winningMaterial,oneMove,hangingPiece|
85nhwz|4Q2R/1p3rp1/1pb3kp/1p4q1/1P3N2/2P1p1PP/7K/8 b - - 2 44|g6f6 e8e6|965|mate,mateIn1,oneMove|
7izxu7|1R6/1p3p2/3n1kq1/3P2b1/8/PPPP1Q2/8/6K1 b - - 2 43|f6e5 d3d4|965|mate,mateIn1,oneMove|
1q9pzja|3r2k1/4ppb1/p1r3pp/2n5/4BB2/6PP/P3PP2/2R2RK1 b - - 0 21|c5e4 c1c6|970|winningMaterial,oneMove,hangingPiece|
1mumgkh|1r3k2/R4nRp/1p6/1Pp1p3/2b5/4PPN1/5K2/8 w - - 1 36|g7g8 f8g8|970|winningMaterial,oneMove,hangingPiece|
m02xw8|b5k1/3p1pp1/rB6/8/4N1Pp/3P3P/4NK2/8 w - - 1 29|e4f6 g7f6|970|winningMaterial,oneMove,hangingPiece|
5o8kkx|8/3R2b1/p5kp/7P/r7/8/P4PK1/5N2 b - - 0 37|g6h5 d7g7|975|winningMaterial,endgame,oneMove,hangingPiece|
bqk5yr|4k3/p4pp1/4p3/3pP2n/Pp1P2K1/1P3N2/8/8 b - - 1 43|e8f8 g4h5|975|winningMaterial,oneMove,hangingPiece|
v6ow46|rnbqkb1r/pp1ppppp/8/3nP3/2Bp4/2P5/PP3PPP/RNBQK1NR b KQkq - 2 5|d7d6 c4d5|980|winningMaterial,oneMove,hangingPiece|
rt6fki|1Q6/5pkp/4p3/1p3p2/p5r1/5R1K/8/6r1 w - - 12 52|f3f1 g1f1|980|winningMaterial,endgame,oneMove,hangingPiece|
19ahk2u|8/3K4/8/8/8/8/8/Q2kq3 b - - 10 74|d1c2 a1e1|980|winningMaterial,endgame,oneMove,hangingPiece|
hn0nk3|5R2/6k1/6pp/2pP4/2P5/3K1P2/P7/2r5 w - - 13 49|f8h8 g7h8|985|winningMaterial,endgame,oneMove,hangingPiece|
1fj1jl5|1r6/6pk/1p6/pP3P2/3p2Pp/1P1N1p1K/7P/2Rn4 b - - 3 48|a5a4 c1d1|985|winningMaterial,oneMove,hangingPiece|
9p931j|8/4n1R1/3p4/6bp/k7/3K4/B7/8 b - - 6 59|h5h4 g7g5|985|winningMaterial,endgame,oneMove,hangingPiece|
1y7jy6i|8/R5k1/6p1/8/6KP/6P1/8/7q b - - 11 60|h1b7 a7b7|990|winningMaterial,endgame,oneMove,hangingPiece|
piyovr|8/5r2/6pp/P4p2/2kP3P/P1B1P1P1/4K3/8 w - - 5 51|e2f3 c4c3|990|winningMaterial,endgame,oneMove,hangingPiece|
dvhqyz|2r5/8/1R4pk/5p2/3q4/Q5P1/5P1K/8 w - - 9 57|h2h3 d4b6|990|winningMaterial,endgame,oneMove,hangingPiece|
ta1nzc|8/1k4p1/5p2/1PPKp3/4P2p/R7/3r4/8 w - - 1 55|a3d3 d2d3|995|winningMaterial,endgame,oneMove,hangingPiece|
3iv4ik|8/1p1R4/p1n1b1k1/P7/6PK/1r5P/1P6/5R2 w - - 12 38|f1f3 b3f3|995|winningMaterial,endgame,oneMove,hangingPiece|
eaxwvq|8/R7/4r3/1p4P1/8/kp6/8/2K5 b - - 3 57|e6a6 a7a6|995|winningMaterial,endgame,oneMove,hangingPiece|
10t03ep|8/P1R5/8/2Pk4/3pb3/r7/1K6/8 b - - 3 50|d4d3 b2a3|1000|winningMaterial,endgame,oneMove,hangingPiece|
6xhjw2|8/p4k1R/8/6p1/2pP4/b7/4r3/1R4K1 b - - 0 39|f7e8 b1b8|1000|mate,mateIn1,endgame,oneMove|
1nib263|8/8/5pp1/3k3p/7P/4B1P1/2K2P2/bR5r b - - 0 76|a1e5 b1h1|1000|winningMaterial,endgame,oneMove,hangingPiece|
198is38|2rqkb1r/3n1pp1/p1Q1pn1p/4p3/2N5/2P2P2/PP1P1P1P/R1B1KB1R w KQk - 1 12|c6c8 d8c8|1005|winningMaterial,oneMove,hangingPiece|
1q673f3|k2rr3/1p2nRpp/p7/8/P2pQ2q/RP6/2PP3P/6KB b - - 4 25|h4e1 e4e1|1005|winningMaterial,oneMove,hangingPiece|
11p07a3|8/8/5k2/1PQ4p/7P/3q2p1/5P1K/8 w - - 0 46|h2h1 d3f1|1005|mate,mateIn1,endgame,oneMove|
1ypy0dl|6k1/5p2/2b3p1/p6p/2P2R2/2PNr2P/P5P1/6K1 w - - 0 44|c4c5 e3d3|1005|winningMaterial,oneMove,hangingPiece|
vqryi8|1n6/2k4R/p1p5/8/PK1P2r1/2P5/8/8 b - - 2 55|c7b6 a4a5|1010|mate,mateIn1,endgame,oneMove|
rdsk48|6k1/1p4p1/5B1p/PPp2q2/4b1N1/4p2P/1Q1rBbP1/R6K w - - 1 34|g4h6 g7h6|1010|winningMaterial,oneMove,hangingPiece|
zh6ovd|8/8/8/1k6/8/8/5K2/6rR b - - 0 80|g1g2 f2g2|1010|winningMaterial,endgame,oneMove,hangingPiece|
uwsknb|8/6R1/p7/1p6/1P6/3K1pk1/1PP5/6r1 b - - 7 47|g3h3 g7g1|1015|winningMaterial,endgame,oneMove,hangingPiece|
n3s4m7|5N2/4K2k/4N3/8/8/1p6/p5R1/5r2 b - - 0 82|h7h6 g2h2|1015|mate,mateIn1,endgame,oneMove|
qc9y1r|5k2/7p/1Rn2P2/8/1r5P/1B4K1/8/8 w - - 1 44|b3c2 b4b6|1015|winningMaterial,endgame,oneMove,hangingPiece|
10j76wd|r2q1r2/pp3pbk/1np2np1/4p2p/P3P3/2PBBPQ1/1P1N2PP/R4RK1 w - - 1 17|f3f4 d8d3|1020|winningMaterial,oneMove,hangingPiece|
cyrqpm|4Qqk1/6p1/4P2p/2p4P/p7/8/6K1/8 w - - 4 53|e8f8 g8f8|1020|winningMaterial,endgame,oneMove,hangingPiece|
16x8a4g|8/5p2/4p3/p2k2P1/P1pbnP2/4B3/6B1/3K4 w - - 30 76|e3d4 d5d4|1020|winningMaterial,endgame,oneMove,hangingPiece|
3k1wn8|3nk3/p5p1/2p2p2/7p/P3P2P/1b3PB1/6P1/3N3K w - - 1 37|g3f2 b3d1|1025|winningMaterial,oneMove,hangingPiece|
2uzr83|5k2/1p3p1p/1P3N2/p3P3/B4P1r/b3r3/8/5KR1 b - - 1 40|h4h1 g1h1|1025|winningMaterial,oneMove,hangingPiece|
q0ur1e|6k1/5ppp/4b3/1pr1P3/r3PB2/5PPP/8/2RK1R2 b - - 1 30|b5b4 c1c5|1025|winningMaterial,oneMove,hangingPiece|
135iji8|8/2k5/8/3RPR2/1K3P2/6r1/1r6/8 w - - 2 49|b4a5 g3a3|1030|mate,mateIn1,endgame,oneMove|
vlpa80|3r4/1K6/8/1P1B1p2/1P3k2/p7/P7/8 w - - 2 63|b5b6 d8d5|1030|winningMaterial,endgame,oneMove,hangingPiece|
i3wmih|4r2r/ppk3pp/2p1Bb2/8/8/P3P3/1P2KPPP/R6R w - - 3 22|e6d5 c6d5|1030|winningMaterial,oneMove,hangingPiece|
1pgb1b8|r2qk1nr/p2n1ppp/2p5/1pb1p3/3pPB1P/3P4/PPPNQPP1/1R1NK2R w Kkq - 0 12|f4e5 d7e5|1035|winningMaterial,oneMove,hangingPiece|
c6utpq|rnbqk1r1/pp4Qp/4pn2/b2p4/1pP5/3PP3/P1NN2PP/R1B1KB1R w KQq - 1 12|g7g8 f6g8|1035|winningMaterial,oneMove,hangingPiece|
tw1bnd|2R5/1p5k/7p/P4ppP/4b3/4K3/2p4P/8 b - - 1 48|c2c1q c8c1|1035|winningMaterial,endgame,oneMove,hangingPiece|
14g61iy|8/7B/8/4k3/2p4p/6b1/8/7K w - - 25 79|h7e4 e5e4|1035|winningMaterial,endgame,oneMove,hangingPiece|
1lrk0go|2b5/p4p2/1p1p1k2/4r2p/1P5R/P1P1KPP1/4N3/8 w - - 3 40|e3d4 e5e2|1040|winningMaterial,oneMove,hangingPiece|
1rbxcs1|3r3k/1Q4p1/p3p2p/P1p1P2P/5P2/4P3/q3R3/5K2 b - - 0 36|a2e2 f1e2|1040|winningMaterial,oneMove,hangingPiece|
c5912o|3r2k1/7p/3q2pr/8/P2P2R1/1Q3P2/2R5/6K1 b - - 2 44|d6e6 b3e6|1040|winningMaterial,endgame,oneMove,hangingPiece|
yjhjuv|r1bqkb1r/pp1ppp1p/2n2np1/1Bp1P3/8/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 0 5|c6e5 f3e5|1045|winningMaterial,oneMove,hangingPiece|
e9ltdj|4n3/8/2r1p2p/P4p1p/1Bk5/5P1K/6P1/2R5 b - - 10 46|c4b4 c1c6|1045|winningMaterial,endgame,oneMove,hangingPiece|
jw7kjh|r4r1k/2nbb1pp/1np3q1/5pP1/1P1Q4/2NP1N2/3BP2P/2R1KB1R b K - 3 25|e7d8 d4b6|1045|winningMaterial,oneMove,hangingPiece|
1fjupxw|5rk1/pq4bp/4p1p1/5p2/3p1P2/1P1P1nP1/PB2Q2P/R2R2K1 w - - 1 24|e2f3 b7f3|1050|winningMaterial,oneMove,hangingPiece|
12sf3fd|r6b/1p1nkp2/2p1P3/1p4p1/6P1/4PNK1/PP2B3/7R b - - 0 24|d7f8 h1h8|1050|winningMaterial,oneMove,hangingPiece|
md9ras|1n6/2k3R1/p1p5/6r1/1K1P4/2P5/P7/7R b - - 0 53|c7c8 h1h8|1050|mate,mateIn1,endgame,oneMove|
5ggivz|r2qk2r/pp1n1pb1/2pp1npp/4p1B1/3PP3/2PB3Q/PP1N1PPP/R4RK1 w kq - 0 12|g5f4 e5f4|1050|winningMaterial,oneMove,hangingPiece|
1ns8p9s|8/2k5/1N6/p6p/2P1p1pP/8/1P6/5K2 w - - 1 56|b6c8 c7c8|1055|winningMaterial,endgame,oneMove,hangingPiece|
ma40uv|5q2/k7/8/6Qp/5K1P/6P1/8/8 w - - 16 64|g5f6 f8f6|1055|winningMaterial,endgame,oneMove,hangingPiece|
10qhjz3|1rb3k1/3r2pp/pB2np2/1p1p4/8/2P1NP2/PP1R2PP/2K1R3 w - - 5 37|a2a3 b8b6|1055|winningMaterial,oneMove,hangingPiece|
4sc6vc|6k1/3R4/4p2p/P4r2/1R4p1/4P1P1/8/r5K1 w - - 4 43|g1h2 f5f2|1060|mate,mateIn1,endgame,oneMove|
ubn6vy|r3nbk1/5ppp/p7/1pp5/4Q2P/P4N2/1q1B1PP1/4R1K1 b - - 1 26|a8a7 e4e8|1060|winningMaterial,oneMove,hangingPiece|
ayswmj|8/5p2/6p1/1pk4p/1R5P/6P1/5P2/6K1 w - - 1 44|g1f1 c5b4|1060|winningMaterial,endgame,oneMove,hangingPiece|
3emdxc|8/4R1pk/4P3/1r2b3/1pK5/8/1N6/8 b - - 2 58|h7g6 c4b5|1060|winningMaterial,endgame,oneMove,hangingPiece|
4hp7i6|7r/p2Rn3/1p2kp2/2p5/4PB1p/6P1/PP3P1P/1K6 w - - 4 27|d7e7 e6e7|1065|winningMaterial,oneMove,hangingPiece|
1pv68k4|2R5/r1R2pbk/1q2p1p1/3p3p/3n3P/1B1Q2P1/P4P2/6K1 w - - 4 27|c7d7 a7d7|1065|winningMaterial,oneMove,hangingPiece|
1vlc3st|3B4/pB3k2/P3n2b/2p1p3/8/2P5/1P3P2/6K1 w - - 1 39|f2f4 e6d8|1065|winningMaterial,endgame,oneMove,hangingPiece|
14ude3c|8/4Q2p/5rk1/3ppb2/8/6pK/5b2/2B5 w - - 2 53|h3h4 g3g2|1070|mate,mateIn1,endgame,oneMove|
2z6kcx|r4b2/1pk2bp1/1P3p1p/4pN2/4B1P1/P4P2/2P4P/3R2K1 b - - 0 33|c7b8 d1d8|1070|mate,mateIn1,fork,oneMove|
110gu3j|4N1k1/5p2/1p2p1p1/pB1bQ2p/1n1P4/4bP1P/1B4PK/4q3 b - - 9 44|e3f4 e5f4|1070|winningMaterial,oneMove,hangingPiece|
kbhkbe|2R5/8/1p4pk/7p/4P2P/6K1/7r/8 b - - 3 42|h2h4 g3h4|1075|winningMaterial,endgame,oneMove,hangingPiece|
3bjwmb|5k2/6r1/1r6/3p1PK1/8/1p1B4/1Q6/8 w - - 10 49|g5h4 b6h6|1075|mate,mateIn1,endgame,oneMove|
2vmzb0|r1b5/1pk1p3/p5p1/n1pBN2r/8/4P3/P1P3P1/2KR1R2 w - - 2 29|e5d3 h5d5|1075|winningMaterial,oneMove,hangingPiece|
cx7ope|8/8/8/Pk4P1/7K/8/4p1n1/4B3 w - - 3 66|h4h3 g2e1|1075|winningMaterial,endgame,oneMove,hangingPiece|
fogfpy|r1b1k1r1/pp2npB1/2q1p3/P2p3p/5P2/7P/1PP3P1/R2QKB1R w KQq - 1 15|d1h5 g8g7|1080|winningMaterial,oneMove,hangingPiece|
t22j3s|8/1p6/8/r4R1p/1k4pP/4P1P1/5PK1/8 w - - 1 66|f2f3 a5f5|1080|winningMaterial,endgame,oneMove,hangingPiece|
lgyk8b|8/3b2pk/p4p1p/P1P1nN1P/4P2q/7B/7K/3Q4 b - - 3 37|h4e1 d1e1|1080|winningMaterial,oneMove,hangingPiece|
1kz11gr|7r/1p2kp1p/4pn2/r1P5/1KP3pP/P2NR1P1/5P2/3R4 b - - 2 26|a5a3 b4a3|1085|winningMaterial,oneMove,hangingPiece|
1ii9sri|8/8/1k6/1P4N1/1K5p/7P/5n2/8 b - - 2 59|f2g4 h3g4|1085|winningMaterial,endgame,oneMove,hangingPiece|
103qecb|5k2/Q4p1p/p2pp1pq/1p4N1/5P2/6P1/Pb1N2KP/3r4 b - - 3 25|h6h2 g2h2|1085|winningMaterial,oneMove,hangingPiece|
een1di|4r1kr/1p2Rpp1/p1p2n2/2Pp4/1P1q3n/5B1p/P1QNN3/5R1K b - - 3 31|d4e3 e7e3|1085|winningMaterial,oneMove,hangingPiece|
1uehoa7|8/8/4p3/4Pk1p/2r2p1K/5P2/7P/6R1 b - - 3 31|c4e4 g1g5|1090|mate,mateIn1,endgame,oneMove|
s0w7g|6k1/1p3pp1/1qb4p/p2p3P/P2Q4/2P1rP2/1P5P/R4R1K b - - 2 31|b6b2 d4e3|1090|winningMaterial,oneMove,hangingPiece|
ltrngx|2kr1b1r/1pp4p/5pp1/pQq1n3/P2NP2P/2P5/4bPP1/R1B2RK1 w - - 0 19|b5c5 f8c5|1090|winningMaterial,oneMove,hangingPiece|
k0hg3q|4k1r1/p3p3/2p1q3/1p3pQp/8/2PR4/PP3PP1/6K1 w - - 4 36|g5g8 e6g8|1090|winningMaterial,oneMove,hangingPiece|
1mmo5if|8/2b3k1/RrB3pp/8/6P1/3PK3/8/8 w - - 6 51|c6b5 b6b5|1095|winningMaterial,endgame,oneMove,hangingPiece|
1t2bdix|8/R5k1/7N/p5P1/1p6/6K1/3r1P1P/1b6 b - - 7 39|d2d7 a7d7|1095|winningMaterial,endgame,oneMove,hangingPiece|
143ttct|2r3k1/p2n1pp1/Pp1r4/3p3p/1P1N3P/1bP5/3RNPP1/4K2R b - - 5 27|b6b5 d4b3|1095|winningMaterial,oneMove,hangingPiece|
4bz4tt|3B3r/8/p4pk1/8/3R3p/5P1P/6P1/5nK1 b - - 9 53|h8d8 d4d8|1100|winningMaterial,endgame,oneMove,hangingPiece|
1qc4c3j|1r5Q/3nkp1p/2p2P2/2qP4/4pP2/6R1/4B1K1/8 b - - 0 34|d7f6 h8b8|1100|winningMaterial,oneMove,hangingPiece|
6t24dk|1r6/6k1/3Pb3/7p/B1r5/2B3PP/8/1R5K b - - 3 39|g7h7 b1b8|1100|winningMaterial,endgame,oneMove,hangingPiece|
18zj58r|5k2/p1N5/P3rpp1/1p2n2p/1P5P/5P2/4R1P1/3K4 b - - 1 39|e6a6 c7a6|1100|winningMaterial,oneMove,hangingPiece|
n4rm9y|rn2k1nr/1ppq4/4p1p1/pb1pP2p/3P3P/2P2Q2/2PK1PP1/R1B2B1R w kq - 0 14|f1b5 d7b5|1105|winningMaterial,oneMove,hangingPiece|
1njhuz2|8/1KR5/1p1n4/1P3p2/1PB2k2/p7/P6r/8 w - - 1 59|b7c6 d6c4|1105|winningMaterial,endgame,oneMove,hangingPiece|
rkva45|r2qk2r/1ppnbbp1/p1n4p/1P2pp2/2P5/3P1N1P/P1QBBPP1/RN3RK1 b kq - 0 14|c6a5 d2a5|1105|winningMaterial,oneMove,hangingPiece|
qbth6i|8/8/4NR2/7p/3p3k/3r2n1/6K1/8 b - - 21 75|g3f1 f6f4|1105|mate,mateIn1,fork,endgame,oneMove|
1slh70b|8/8/1R1nPk2/P2P4/7p/2K4P/8/r7 b - - 7 73|a1a5 b6d6|1110|winningMaterial,endgame,oneMove,hangingPiece|
12kw26x|rnb1kb1r/pp3p1p/4pnp1/q1pp4/4P3/BP1P1NP1/P1PN1PBP/R2QK2R w KQkq - 2 9|c2c4 a5a3|1110|winningMaterial,oneMove,hangingPiece|
5zhs1a|8/5p1p/8/1p4k1/2b2R2/r7/P1R4P/6K1 w - - 2 50|f4f7 c4f7|1110|winningMaterial,endgame,oneMove,hangingPiece|
122pm24|2k5/1p5p/2pBr3/p4Q2/P2q4/8/7P/2R3K1 w - - 1 40|g1h1 d4d6|1115|winningMaterial,endgame,oneMove,hangingPiece|
18xcwvl|q7/7k/6pp/5Q2/8/8/1P4PP/7K w - - 0 43|f5g6 h7g6|1115|winningMaterial,endgame,oneMove,hangingPiece|
123v4wp|r3k2r/1p1nn3/p2p2p1/3P1p2/2P1N2p/4B3/Pb2B1PP/2KR3R w kq - 0 22|c1d2 f5e4|1115|winningMaterial,oneMove,hangingPiece|
76ofoz|8/8/8/2N1k3/4P3/8/3K4/4n3 b - - 2 62|e5f4 d2e1|1115|winningMaterial,endgame,oneMove,hangingPiece|
zksl90|3kq1Q1/2p3p1/8/8/p3P3/5P1P/6P1/7K w - - 4 58|g8h8 e8h8|1120|winningMaterial,endgame,oneMove,hangingPiece|
oqk5z5|8/1p2n3/p6K/4kbP1/1P3R1P/5R2/2r5/8 w - - 1 51|f3e3 e5f4|1120|winningMaterial,endgame,oneMove,hangingPiece|
1g75xti|8/p3k3/2p5/8/6p1/2P1nB2/PP1r1R1P/6K1 b - - 13 38|d2f2 g1f2|1120|winningMaterial,endgame,oneMove,hangingPiece|
fy641o|8/8/7R/pp1k1P2/2nN4/2r5/5KP1/8 w - - 0 48|h6a6 d5d4|1120|winningMaterial,endgame,oneMove,hangingPiece|
1jx0fmq|8/7R/6kp/4p3/1P6/1r2P2P/6PK/8 w - - 2 39|h7h6 g6h6|1125|winningMaterial,endgame,oneMove,hangingPiece|
1gybe22|8/8/2r3pp/P2k1p2/3P3P/P1B1PK2/6P1/8 w - - 6 45|h4h5 c6c3|1125|winningMaterial,endgame,oneMove,hangingPiece|
1s379fr|7r/rP1n1kp1/2pB1p2/3p1b1p/1P1p4/RK2PP1P/6P1/5B1R b - - 0 26|h8e8 a3a7|1125|winningMaterial,oneMove,hangingPiece|
6xf2p|4kb1r/p2p1ppp/1pr5/n7/4P3/3Q2B1/P1qN1PPP/R4RK1 w k - 0 18|d3f3 c2d2|1130|winningMaterial,oneMove,hangingPiece|
443yht|4Q1r1/3P3k/p3p1p1/2P3q1/1p4P1/5B1p/P3r3/5R1K b - - 2 33|g8e8 d7e8q|1130|winningMaterial,promotion,oneMove,hangingPiece|
uvu52f|8/6b1/Bkp3p1/2N1p2r/1n5P/5P2/P1P2K2/7R w - - 0 31|c5d3 b4a6|1130|winningMaterial,oneMove,hangingPiece|
15glupy|r1bq1rk1/pp2bppp/1np1p3/2Pp4/3P1P2/2N1PN2/PP3P1P/2RQKBR1 b - - 0 11|e7c5 d4c5|1130|winningMaterial,oneMove,hangingPiece|
4hy6gv|2r3k1/2p3np/3p2p1/p7/P2N2P1/1P5P/2b2B2/4R1K1 b - - 1 30|c2b3 d4b3|1135|winningMaterial,oneMove,hangingPiece|
i7twys|r1bqkb1r/1ppp1p1p/p4np1/n3p3/1P6/2PP2PB/P1Q1PP1P/RNB1K1NR b KQkq - 0 7|f8g7 b4a5|1135|winningMaterial,oneMove,hangingPiece|
2q4jdz|8/2p2r2/2P1p3/4k3/p4r1R/8/3R1P2/5K2 w - - 9 42|h4f4 f7f4|1135|winningMaterial,endgame,oneMove,hangingPiece|
o9scur|rnb1kbnr/ppp1pppp/8/3q4/3pN3/P7/1PPPPPPP/R1BQKBNR w KQkq - 2 4|h2h3 d5e4|1135|winningMaterial,oneMove,hangingPiece|
eo1jp1|rn6/1p2k3/2p1p1p1/p2pP3/3P2pP/2P1K3/2P1Br2/R6R b - - 1 21|f2e2 e3e2|1140|winningMaterial,oneMove,hangingPiece|
1w75ki9|8/2n5/5N1p/2K3k1/8/8/8/8 w - - 2 70|c5d4 g5f6|1140|winningMaterial,endgame,oneMove,hangingPiece|
1isnwwo|8/7p/1p6/p3bP1K/P6P/8/Nk4P1/8 w - - 7 51|a2c3 b2c3|1140|winningMaterial,endgame,oneMove,hangingPiece|
ldw9u6|rn1qk2r/1pp2ppp/p3p3/2Pp4/1b1PnB2/3QP3/PP1N1PPP/R3K1NR w KQkq - 1 9|d3b3 b4d2|1140|winningMaterial,oneMove|
hlpgv0|8/6pk/4R3/4N1b1/1p2P1K1/1r2P3/8/8 b - - 1 49|g5e7 e6e7|1145|winningMaterial,endgame,oneMove,hangingPiece|
12drbfg|5R2/4k3/8/5P2/4K3/r7/8/8 w - - 1 79|f8f7 e7f7|1145|winningMaterial,endgame,oneMove,hangingPiece|
rfquo4|8/4b3/1Rb5/2k4p/7P/1p5K/8/3R4 w - - 4 52|h3g3 c5b6|1145|winningMaterial,endgame,oneMove,hangingPiece|
oi662x|8/8/8/4p3/2R1n1kp/8/6KP/8 b - - 5 60|g4g5 c4e4|1145|winningMaterial,endgame,oneMove,hangingPiece|
verwt2|8/8/4pb2/8/6P1/2B4P/2K1k3/8 b - - 0 57|e2f2 c3f6|1150|winningMaterial,endgame,oneMove,hangingPiece|
ut5kko|Q7/6pk/7p/2P2p2/8/5P1P/1B2n1PK/4q3 w - - 5 46|a8h8 h7h8|1150|winningMaterial,endgame,oneMove,hangingPiece|
1smsiox|8/6p1/p1pb4/P4P2/1PKpk3/5R2/8/8 w - - 4 44|f3g3 d6g3|1150|winningMaterial,endgame,oneMove,hangingPiece|
l8c26s|r1bqk2r/1p1n1pp1/p2pp2p/2p5/2P1PPPb/2NPBQ2/PP3KB1/R6R w kq - 0 17|f3g3 h4g3|1150|winningMaterial,oneMove|
mmdmki|8/8/3k4/8/4P3/3N1K2/6n1/8 b - - 14 68|d6c7 f3g2|1155|winningMaterial,endgame,oneMove,hangingPiece|
wez8pt|2r5/1p4N1/2p2p2/kp3K2/6P1/1P2P3/1b5R/8 b - - 2 36|c6c5 h2b2|1155|winningMaterial,endgame,oneMove,hangingPiece|
cj5mte|8/8/6k1/8/3p2K1/1BnP4/8/8 b - - 0 70|c3d1 b3d1|1155|winningMaterial,endgame,oneMove,hangingPiece|
log5yn|8/8/4k3/4pp1p/1bN1r3/2R1P1P1/5K1P/8 w - - 19 47|c3b3 e4c4|1155|winningMaterial,endgame,oneMove,hangingPiece|
abxnej|8/6N1/pRr2nkp/P5p1/3K4/8/8/8 b - - 14 59|c6c4 d4c4|1160|winningMaterial,endgame,oneMove,hangingPiece|
s367rj|8/5R1p/1p1k4/p4Q2/P7/7K/4r2P/4q3 b - - 9 48|e2h2 h3h2|1160|winningMaterial,endgame,oneMove,hangingPiece|
wujspa|3b4/k7/2P1Np2/4pK2/P3B2r/5P2/8/8 b - - 2 49|a7b8 e6d8|1160|winningMaterial,endgame,oneMove,hangingPiece|
10zcgcu|8/2k3r1/8/8/6R1/7K/8/8 b - - 5 68|c7c6 g4g7|1160|winningMaterial,endgame,oneMove,hangingPiece|
pqc02s|1N4k1/5p2/6p1/7p/r4b2/8/1P3PPP/1R3K2 w - - 2 35|b2b4 f4b8|1165|winningMaterial,endgame,oneMove,hangingPiece|
gjxp9i|8/pk1r1R1Q/1p4p1/4qn2/P6B/3P3P/2P3PK/8 w - - 3 35|h4g3 e5g3|1165|winningMaterial,oneMove|
onvkij|8/8/2k5/P6K/6P1/4p3/2nB4/8 w - - 0 58|d2b4 c2b4|1165|winningMaterial,endgame,oneMove,hangingPiece|
i6ch4q|8/2b5/5pK1/2k2P2/8/5r2/3B4/2R5 b - - 3 62|c5d5 c1c7|1165|winningMaterial,endgame,oneMove,hangingPiece|
1tw7hqm|8/P1r3p1/5p1p/3p3P/4k3/4B1P1/1K3P2/8 b - - 0 53|c7a7 e3a7|1170|winningMaterial,endgame,oneMove,hangingPiece|
i0yoml|1b6/5pk1/R5p1/3N4/5P2/6r1/5K2/8 b - - 1 41|g3c3 d5c3|1170|winningMaterial,endgame,oneMove,hangingPiece|
19g9rn6|6k1/5p2/6p1/4b3/1P5p/N1r5/5PPP/1R3K2 w - - 2 40|f1e2 c3a3|1170|winningMaterial,endgame,oneMove,hangingPiece|
19qxmoc|7k/6b1/8/prp4p/2B2P2/1NP3P1/1P5P/5K2 b - - 1 34|b5b3 c4b3|1170|winningMaterial,endgame,oneMove,hangingPiece|
1h86qn|7k/R1K2r2/7P/8/P7/8/8/8 w - - 3 81|c7d6 f7a7|1175|winningMaterial,endgame,oneMove,hangingPiece|
1ek69re|8/BR6/8/k2p4/4p3/3r2p1/2K5/8 b - - 0 50|d3d2 c2d2|1175|winningMaterial,endgame,oneMove,hangingPiece|
v9rduz|8/2bB4/2K2kpp/8/6P1/3P4/8/8 b - - 19 61|f6e5 c6c7|1175|winningMaterial,endgame,oneMove,hangingPiece|
eqybro|8/7K/1k4QN/8/4q3/8/8/8 b - - 2 68|b6b5 g6e4|1175|winningMaterial,endgame,oneMove,hangingPiece|
1kcg5m2|8/P6R/1k4K1/8/6Bb/r6P/8/8 b - - 2 53|a3a7 h7h4|1180|winningMaterial,endgame,oneMove,hangingPiece|
17ewb5s|4q3/Q2R2bk/6pp/8/1P2pp2/7P/5PP1/2r2NK1 b - - 2 36|h6h5 d7g7|1180|winningMaterial,oneMove|
k31x21|1rb2r1k/2q3np/1p1p1Pp1/p3p1P1/P1PpP3/7N/1PQ3BP/2R2R1K b - - 0 30|c8e6 f6g7|1180|winningMaterial,fork,oneMove|
1is6zi1|7k/3Q3p/1r6/3ppp2/3b1BP1/3b1nKP/8/8 w - - 4 42|d7e7 e5f4|1180|winningMaterial,oneMove|
p9f1vn|5r1k/pbp2r2/1b1p2p1/2p5/5n2/1PP1B1NP/P3R1P1/R3N1K1 w - - 4 30|c3c4 f4e2|1185|winningMaterial,fork,oneMove|
dvn953|8/2p5/1pP2k2/pP2bp2/P1R2P2/4N3/q3P3/2B1K3 b - - 0 40|a2b1 f4e5|1185|winningMaterial,oneMove|
dc4yby|8/p2Rr1qk/1p4p1/7p/8/6P1/PPPQ1P1P/2K5 w - - 1 37|d2d4 e7d7|1185|winningMaterial,oneMove|
1b3d7v0|2kr3r/pp2n1p1/2p2p2/7p/1b1P3P/P1N2PP1/1P1BRK2/3R4 b - - 0 26|d8d4 a3b4|1185|winningMaterial,oneMove|
1mq4wmp|1n1qkb1r/r4ppp/pp2pn2/2ppP2b/P2P4/2P2N1P/1PB2PP1/RNBQ1RK1 b k - 0 11|b8c6 e5f6|1190|winningMaterial,oneMove|
1qfmqmy|7r/ppk1r1pp/2p5/8/2B5/P3P3/1b2KPPP/R6R w - - 0 24|g2g3 b2a1|1190|winningMaterial,oneMove|
10potyn|2n3k1/pp1r1pp1/2nBp2p/1P2P3/6PP/5PKN/8/1R6 b - - 0 29|d7d6 e5d6|1190|winningMaterial,oneMove|
kcnoqa|r3kb1r/ppp2p1p/2n2np1/4p3/2P5/P1Nq1PP1/3P1P1P/R1BQKB1R b KQkq - 4 10|e8c8 f1d3|1190|winningMaterial,oneMove|
ltlehb|6k1/5ppp/8/1p2P3/3rP3/5PPb/4K3/2B2R2 w - - 0 33|c1a3 h3f1|1195|winningMaterial,oneMove|
11xb8g1|r1b2rk1/np3pp1/5q1p/p2pp2P/P2N1P2/2PB2P1/1P3P2/2RQK2R w K - 0 20|d3c2 e5d4|1195|winningMaterial,oneMove|
r6i0b2|rnb1kbnr/pp1ppppp/1q6/2p5/3P4/2N1PN2/P1PB1PPP/1R1QKB1R b Kkq - 3 6|c5d4 b1b6|1195|winningMaterial,oneMove|
1suv1jk|rn1qkbnr/pp2pppp/2p5/8/4p1b1/P1N2N2/1PPP1PPP/R1BQKB1R w KQkq - 0 5|f1c4 e4f3|1195|winningMaterial,oneMove|
szqrmf|5rk1/2r4p/2b3pP/pR1pq3/P1p5/2P1P3/3NQ1P1/R5K1 w - - 2 30|a1b1 c6b5|1200|winningMaterial,oneMove|
qw5ejw|r3rnk1/pp3ppp/4p3/qB2P3/Pb1nNBP1/5Q1P/1P3P2/R4RK1 w - - 4 20|e4f6 g7f6|1200|winningMaterial,oneMove|
yglmmi|r5kr/1p3pp1/p1p2n2/2Pp4/1P1P3n/4qB1p/P1QN4/2N1RR1K b - - 3 29|a8e8 e1e3|1200|winningMaterial,oneMove|
ktx91b|r2qkb1r/4ppp1/p1p2n2/3p3p/6b1/2NP1N1P/PPPBQPP1/R3K2R b KQkq - 0 10|h8h7 h3g4|1200|winningMaterial,oneMove|
9wbwc6|2b4Q/p2kpp2/6r1/1qp5/5Pp1/3PBn2/2P3PP/N4RK1 w - - 5 28|f1f3 g4f3|1205|winningMaterial,oneMove|
16u8it3|r3kbnr/p2p1ppp/1pp5/1B2P3/3p2P1/P7/1PP2PP1/R1BR2K1 w kq - 0 14|a3a4 c6b5|1205|winningMaterial,oneMove|
5jlp0o|r3k1nr/pp3ppp/1qn1p3/3pPb2/P5PP/B1P5/5P2/R2QKBNR b KQkq - 0 10|g8h6 g4f5|1205|winningMaterial,oneMove|
1hv2ra0|r1r3k1/q4p1p/4p1p1/3bP3/1pB2Q2/1P3P1P/6P1/1R1R2K1 w - - 5 38|d1d4 d5c4|1205|winningMaterial,oneMove|
1tspfrx|rn1qk2r/ppp2ppp/3b1n2/1B2p3/P2pP1bP/6N1/1PPP1PP1/R1BQK1NR b KQkq - 4 7|d8d7 b5d7|1210|winningMaterial,oneMove|
cdj8jr|r6r/3kbppb/4p3/pp1p3p/3PnB1P/1PP1NP2/1P2N1P1/R3K2R b - - 0 20|e4c5 d4c5|1210|winningMaterial,oneMove|
1knxjfr|r4rk1/pp3ppp/2pb2q1/3n1p2/3P1PN1/PB3PP1/1PQ4P/2KRR3 w - - 3 21|c2e2 f5g4|1210|winningMaterial,oneMove|
4ww1yy|r6k/1pp2rp1/p2p1q1p/3Pb2P/1P2PP2/3B2Pb/P2B4/2RQ1RK1 b - - 0 26|a6a5 f4e5|1210|winningMaterial,oneMove|
19lhfs|2rkrn2/p3b3/1pp1Qn2/q6p/3P1B1p/1BP5/PP3PP1/3RR1K1 w - - 14 29|e6e7 e8e7|1215|winningMaterial,oneMove|
e6zoio|r5k1/4qppp/p3bn2/1p2p3/8/2NrPN2/PPQ2PPP/R2R2K1 b - - 3 19|a8d8 d1d3|1215|winningMaterial,oneMove|
1xrokoy|rn1qkb1r/pp3ppp/4p2n/1BppPb2/3P4/P1P5/1P3PPP/RNBQK1NR b KQkq - 2 6|d8d7 b5d7|1215|winningMaterial,oneMove|
5w2akb|r3kbnr/pp1n1ppp/2p1p3/q4b2/P2P2P1/2N5/1PP1BP1P/R1BQK1NR b KQkq - 0 8|f8b4 g4f5|1215|winningMaterial,oneMove|
h19q25|2kr3r/ppp2p2/1bn1qnp1/2P1p2p/8/P1NPBPP1/4BP1P/2RQ1RK1 b - - 0 20|h5h4 c5b6|1220|winningMaterial,oneMove|
dbrg5k|r3kb1r/1pq1pppp/p1p2n2/6B1/3P2b1/2PB1QN1/PP3PPP/R3K2R w KQkq - 8 13|g5f6 g4f3|1220|winningMaterial,oneMove|
1izlt57|r1b1k2r/ppp2pp1/1q1b3p/4P3/4P3/P3PN2/1P1Q2PP/R3KB1R b KQkq - 0 14|c8g4 e5d6|1220|winningMaterial,oneMove|
a6eyib|2r2rk1/pp1q1pp1/2n1p3/1B1p4/NQ1P3p/P3P2P/1P2bPP1/2R2RK1 w - - 1 19|b4b3 e2f1|1220|winningMaterial,oneMove|
1yp0qta|r3k2r/pbp3pp/2n1p3/3q4/2ppQ3/P4NP1/1PP1BP1P/2KR2R1 w kq - 2 19|d1d4 c6d4|1220|winningMaterial,oneMove|
m4fi1i|4r3/5R2/2p2p2/P2p1n2/3P1Bkp/2PP4/5P2/3K4 w - - 3 54|f4e5 f6e5|1225|winningMaterial,oneMove|
wt68cl|rnbqkbnr/1p2ppp1/p1p4p/8/3pP3/1PNB1N2/P1PP1PPP/R1BQK2R w KQkq - 0 6|h2h3 d4c3|1225|winningMaterial,oneMove|
wlkg03|8/2R2k1p/5Pp1/8/4r3/pp5P/1Bn2P2/6K1 b - - 1 40|e4e7 c7e7|1225|winningMaterial,endgame,oneMove|
fsd90k|r3kb1r/1p1qpppp/p1n2n2/1B1p4/3P4/P1N2Q2/1PP2PPP/R1B2RK1 w kq - 0 11|c1f4 a6b5|1225|winningMaterial,oneMove|
1d5tuez|8/pk1r1R1Q/1p4p1/5n2/P6B/3P3P/2P3PK/2q5 b - - 10 38|d7c7 f7c7|1230|winningMaterial,oneMove|
1803o03|r1b1k1r1/pp1npp2/1qp3pp/4B3/7P/Q1P5/PP2PPP1/3RKB1R w Kq - 3 13|e5d6 e7d6|1230|winningMaterial,oneMove|
dg557v|r5k1/5p2/2p1p1p1/p1Ppb2p/1r1P1P1P/q3P2K/P3QP2/1R4R1 w - - 0 27|b1b3 b4b3|1230|winningMaterial,oneMove|
y5wrb9|4r3/pp4p1/2k2p2/8/3R2PP/P4n2/1P6/4BK2 w - - 1 37|d4d3 f3e1|1230|winningMaterial,oneMove|
1cxbogg|8/6p1/3k1p2/p3p2p/1Rp1P3/2K3PP/1PP2P2/1r6 w - - 0 40|c3c4 a5b4|1235|winningMaterial,oneMove|
nl10sd|5k2/3R2np/1r1p2p1/pPp5/5BP1/1P5P/8/6K1 b - - 6 36|g7f5 g4f5|1235|winningMaterial,oneMove|
fggbg9|r1bqk2r/pp1n1ppp/4pn2/2b3B1/3QP3/2N5/PPP2PPP/2KR1BNR w kq - 0 9|d4d7 c8d7|1235|winningMaterial,oneMove|
ubyyet|r3k2r/p1qbp2p/1p1p1pp1/8/4P1n1/1R3N1P/P1P1QPP1/2BR2K1 b kq - 0 16|e8g8 h3g4|1235|winningMaterial,oneMove|
73xr50|r1bqkb1r/pp1ppppp/2p2n2/3Pn3/5P2/2P3P1/PP2P2P/RNBQKBNR b KQkq - 0 5|d8c7 f4e5|1240|winningMaterial,oneMove|
1h88ntu|7r/2bbkppp/8/N3p3/3N4/1P2P3/1P3PPP/R5K1 w - - 0 24|a5c4 e5d4|1240|winningMaterial,oneMove|
adpvsa|8/5kp1/4p3/1p1r3p/1Npn3P/5P2/PP3KP1/3R4 b - - 4 34|g7g6 b4d5|1240|winningMaterial,oneMove|
1nhtsoo|8/2k2p2/2p2P2/1r4rp/1P6/2b2K1B/2R1P3/7R b - - 0 43|g5f5 h3f5|1240|winningMaterial,oneMove|
44mw2f|6R1/4rk2/2p2p2/p2p1n1p/P2P1B2/2PP4/5P2/3K4 w - - 2 49|g8g3 f5g3|1240|winningMaterial,oneMove|
1ucne14|r2qkb1r/3b3p/n1pp1np1/p3p3/2PB4/2N2N2/PP1QPPB1/R3K1R1 w Qkq - 0 15|d4e5 d6e5|1245|winningMaterial,oneMove|
1fgavy|3r4/pk1q1pp1/2pb4/6p1/4Q2r/1P1P3P/PBP2P2/1K1R3R w - - 2 25|d1d2 h4e4|1245|winningMaterial,oneMove|
1q0pwo|r1bqkbnr/pp1p1ppp/2n5/4p3/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5|c2c3 e5d4|1245|winningMaterial,oneMove|
1jbyr19|6k1/1p2N3/2bB4/6b1/6Pp/2R5/5K2/7r b - - 3 46|g8f8 e7c6|1245|winningMaterial,endgame,oneMove|
sh714s|2r2rk1/1p3pbp/2n1b1p1/p7/P7/2n1BN1P/1P2BPP1/2R1K2R w K - 0 20|c1c3 g7c3|1250|winningMaterial,oneMove|
obn9cf|r1bqk2r/1p3pp1/p1n1pn1p/2bp4/1P6/P1N1PN1P/2P1BPP1/R1BQK2R b KQkq - 0 9|c6b4 a3b4|1250|winningMaterial,oneMove|
rfqwk|6k1/5p2/4p1p1/7p/1RP4P/5PP1/5Q1K/q5r1 b - - 4 50|a1b1 b4b1|1250|winningMaterial,oneMove|
fj9c8j|r2r2k1/ppq2p2/2np1bpp/3Pp3/1P6/P1PQ1N1P/5PP1/RN2R1K1 b - - 0 18|a8c8 d5c6|1250|winningMaterial,oneMove|
1nu7r8g|r1bq1rk1/6pp/2P5/pp2Pp2/4pP1P/P1Nn4/1P6/R2QKB1R w KQ - 1 21|d1d3 e4d3|1255|winningMaterial,oneMove|
1u8pbfd|3rk3/pp2bpp1/2n1pn2/7r/3P3p/P1N1B2P/1P2BPP1/2R2RK1 b - - 1 17|h5d5 c3d5|1255|winningMaterial,oneMove|
w7pca|r1bq1rk1/5pp1/2n4p/p1bpP3/1p1P4/5NP1/1P2QPBP/R1B1R1K1 b - - 0 17|d8b6 d4c5|1255|winningMaterial,oneMove|
19kr8ho|r1bqkb1r/pp3pp1/n1p1p2p/1N1pB2n/3P3P/8/PPP1PPP1/R1Q1KBNR w KQkq - 0 8|a2a4 c6b5|1255|winningMaterial,oneMove|
sattea|r2r2k1/pp2pp2/2np1bpp/q7/1P1P4/2PQ1N1P/P4PP1/RN2R1K1 b - - 0 16|c6b4 c3b4|1255|winningMaterial,oneMove|
y3nzpv|1r1q1rk1/pb1n1ppp/2pb1n2/3pp1P1/NP6/3P1N1P/P2BPPB1/1R1QR1K1 b - - 0 15|g8h8 g5f6|1260|winningMaterial,oneMove|
10bg33r|rn2kbnr/pp2pppp/2p5/3q1b2/3PN3/8/PPP1QPPP/R1B1KBNR w KQkq - 3 6|g2g4 f5e4|1260|winningMaterial,oneMove|
1kvz9ud|r1bq1rk1/pp1nppbp/3p1np1/8/2Pp4/2N2NP1/PPQ1PPBP/R1B2RK1 w - - 0 9|c1g5 d4c3|1260|winningMaterial,oneMove|
oznsue|4r3/6bk/p5rp/1p2B3/1P3p2/2R2P2/6N1/2R3K1 b - - 0 46|h6h5 e5g7|1260|winningMaterial,oneMove|
iz7i8s|r1b4k/1p3pp1/1q3n1p/p2pr3/8/2P2NP1/PPB2PP1/RQ3RK1 b - - 1 18|e5g5 f3g5|1265|winningMaterial,oneMove|
4gy8h0|b1R5/4rk1p/1p4p1/p2r4/5B2/P6P/6P1/2R3K1 b - - 1 34|d5c5 c1c5|1265|winningMaterial,oneMove|
1a7t8oj|3rk1nr/1pqnbpp1/2p3b1/p3p2p/2PPB3/6N1/PP1BNPPP/R1Q1R1K1 b k - 1 14|e8f8 e4g6|1265|winningMaterial,oneMove|
15k0548|r2qkbnr/1p2ppp1/p1n5/1B1p3p/6b1/2NP1N2/PPPB1PPP/R2QK2R w KQkq - 0 8|a2a4 a6b5|1265|winningMaterial,oneMove|
9ybbmh|8/1pp4R/pr3p2/k4r1p/PP5P/2P1RP2/8/5K2 b - - 0 38|b6b4 c3b4|1270|winningMaterial,oneMove|
j6aze1|1rr3k1/pb3ppp/1p2p3/4P3/2P5/PPn2P2/6PP/2KR1BNR w - - 1 17|f1d3 c3d1|1270|winningMaterial,oneMove|
wjwwos|r2qr3/pp3pkp/2p2np1/P3P3/8/2PbP3/1P1N2PP/R1BQR1K1 b - - 0 19|d8d5 e5f6|1270|winningMaterial,oneMove|
1ocd6x9|rn2kbnr/pp3ppp/2p1p1b1/q7/1P1P1B2/2P3N1/P4PPP/R2QKBNR b KQkq - 0 8|f8b4 c3b4|1270|winningMaterial,oneMove|
ldasrg|4r3/8/2pk2Rp/p4K2/P6P/8/8/8 b - - 1 46|e8e6 g6e6|1270|winningMaterial,endgame,oneMove|
19nu9bb|r1b2r2/1pk1p3/p5pN/n1pB4/8/4P3/P1P3PP/2KR1R2 b - - 0 26|f8f5 h6f5|1275|winningMaterial,oneMove|
oxd7u|r1b3k1/b4rp1/p1pN1n1p/1q6/3pp3/BP4P1/2PQ1PBP/R4RK1 b - - 1 22|c8g4 d6b5|1275|winningMaterial,oneMove|
1dymak6|r1b1k2r/1pq1bpp1/p3pn2/2p4p/2PnPP2/5NPP/PP2Q1B1/RNB2RK1 w kq - 1 13|f1e1 d4e2|1275|winningMaterial,oneMove|
55o6ag|r1bqr1k1/pp2bppp/2n1pn2/2ppP3/P7/3P1NP1/1PPN1PBP/R1BQ1RK1 b - - 0 9|b7b6 e5f6|1275|winningMaterial,oneMove|
1mx56ga|r4b1r/pp1k1p1p/n2p2p1/2nNpN2/8/4BP2/PPP3PP/2KR3R w - - 0 15|g2g4 g6f5|1280|winningMaterial,oneMove|
17mqhi4|3r3r/2pk1p2/p1n4p/1B4p1/1R1P4/2P1P3/P2K2R1/8 w - - 0 22|b5a6 c6b4|1280|winningMaterial,oneMove|
jloqy3|6k1/5p2/6p1/4p2p/2P4P/5PP1/R4Q1K/q1r5 b - - 1 52|g8g7 a2a1|1280|winningMaterial,oneMove|
1r66zlu|1n1r2k1/3r1p1p/5b2/5p2/1P3Pp1/N5P1/1R1p1PBP/3R2K1 w - - 3 29|a3c4 f6b2|1280|winningMaterial,oneMove|
1bk810x|5r2/3kr2p/1pp2p1R/p2p1n2/P2P1B2/2PP4/3K1P2/1R6 w - - 0 42|c3c4 f5h6|1285|winningMaterial,oneMove|
1cqb9o0|r3kr2/1p1q3p/p3bbp1/P1Q2p2/5P2/1N1BP1nP/1PP3P1/R1BK2R1 w q - 1 23|d1e1 e6b3|1285|winningMaterial,oneMove|
198k5qx|r4rk1/pp1nnpp1/2pP2b1/P6p/1P5P/2P2NN1/5PP1/R3KB1R b KQ - 0 18|a8e8 d6e7|1285|winningMaterial,oneMove|
19ybmwu|r1b1k2r/pp1n1ppp/8/2bp4/P3q3/2P1BN2/1P1NQPPP/R3K2R b KQkq - 8 13|e4e3 f2e3|1285|winningMaterial,oneMove|
ux0kr7|3R3k/2p2rb1/1p4pp/p3B3/P1P5/2n2N1P/6P1/7K b - - 7 35|f7f8 d8f8|1285|winningMaterial,oneMove|
5e58wu|r1bqkb1r/pppppppp/2n2n2/3P4/8/2P5/PP2PPPP/RNBQKBNR b KQkq - 0 3|e7e5 d5c6|1290|winningMaterial,oneMove|
1gc4cmi|r1b1rnk1/2p1qpp1/p1p4p/1pb1p3/3PP1P1/2P2N1P/PP2QP2/R1BR1NK1 b - - 0 14|h6h5 d4c5|1290|winningMaterial,oneMove|
g1pzs6|8/r1p4k/pp4qp/3R4/6Q1/P1P2P2/7P/6K1 b - - 2 47|g6g5 d5g5|1290|winningMaterial,oneMove|
hhogxs|r7/1p1r1k2/2p5/4b1p1/p1bNP3/P1N4P/1PP3P1/2KRR3 w - - 0 26|c3d5 c6d5|1290|winningMaterial,oneMove|
1jp7c1k|2r1r1k1/1pq1ppb1/p1n2npp/5b2/2Pp2P1/BP1P1N1P/P2NQPB1/R3R1K1 b - - 0 17|e7e5 g4f5|1295|winningMaterial,oneMove|
m194i4|8/8/1p1R4/p5k1/Pr4p1/3K2P1/8/8 b - - 8 56|b4f4 g3f4|1295|winningMaterial,endgame,oneMove|
1xm8j0e|r3kb1r/pp2qp2/1np2np1/5pNp/2QP1B2/P1N4P/1PP2PP1/R4K1R w kq - 4 15|c4f7 e7f7|1295|winningMaterial,oneMove|
176izgc|r2qk1nr/pp1b1ppp/2n1p3/2bp4/PP6/2P1PN2/5PPP/RNBQKB1R b KQkq - 0 8|c6b4 c3b4|1295|winningMaterial,oneMove|
1rk5bif|rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4|c7c5 e5f6|1295|winningMaterial,oneMove|
vwvsvt|2r4r/pp2kppp/4b3/1P1n4/P3N3/4PN2/2n1BPPP/R4RK1 w - - 7 22|e2d3 c2a1|1300|winningMaterial,oneMove|
on1tx4|r3k2r/1p3p2/2bpppnb/1P5p/4PP2/P1N1B3/6PP/R3KB1R b KQkq - 0 22|h5h4 b5c6|1300|winningMaterial,oneMove|
12le3ev|4r3/p5bk/3B2np/1p2Pqr1/1P1N1p2/2R5/4QPp1/2R3K1 b - - 2 37|f5e5 d6e5|1300|winningMaterial,oneMove|
iome63|r3qr1k/1ppb2pp/2nb1n2/p3Pp2/2B3P1/P1N1PN1P/1P1BQP2/R3K1R1 b Q - 0 14|f6e4 e5d6|1300|winningMaterial,oneMove|
198jafp|6k1/3n1p2/3Q2pp/5q2/1r6/3RPP1P/4BPK1/8 b - - 3 35|b4b5 d6d7|1305|winningMaterial,oneMove|
16fjl8u|8/p1kp1R2/1np2P2/4r1bp/6B1/p5PK/8/R7 w - - 0 39|g4d7 b6d7|1305|winningMaterial,oneMove|
1play53|r1b1kb1r/1pq2ppp/p1n5/4p3/3p3P/2B1PN2/PP3PP1/R2QKB1R w KQkq - 0 12|f3d4 e5d4|1305|winningMaterial,oneMove|
jncr6g|2r3k1/3Qr1pp/3Qpp2/3n4/8/7P/1Pq2PP1/4R1K1 w - - 13 31|g1h1 e7d7|1305|winningMaterial,oneMove|
tui34e|3q1rk1/6p1/3p3p/1b1P1p2/pQrR4/4P3/1PP3PP/R6K w - - 0 31|b4c4 b5c4|1310|winningMaterial,oneMove|
1udq235|rnbq1rk1/pp1p1pp1/4pn1p/2p3B1/2PP4/2P1PN2/P4PPP/R2QKB1R w KQ - 0 8|e3e4 h6g5|1310|winningMaterial,oneMove|
hi0rqh|r3kb1r/pp1n1pp1/4p1b1/3pP2P/3P1P1q/7P/PP1NB3/R1BQ1K1R b kq - 2 14|f8b4 h5g6|1310|winningMaterial,oneMove|
1xn057m|r3kb1r/1pp2ppp/p4n2/4p3/3q2b1/2N2PP1/PPPBQ2P/R3KB1R b KQkq - 0 11|e8c8 f3g4|1310|winningMaterial,oneMove|
mf9mgr|2kr3r/8/2pp2p1/1Nn5/p1P1P3/P3R1Pp/1P3P2/3R2K1 w - - 0 30|g1h2 c6b5|1310|winningMaterial,oneMove|
y93u7q|2r3rk/1p1q1ppp/4p3/p2pP2N/Pb1P3P/4BQ2/1P1n1PP1/2R2RK1 w - - 1 26|f3g4 d2f1|1315|winningMaterial,oneMove|
tb71pr|k6r/ppq5/8/2P3p1/3P2Q1/P3BRK1/8/8 w - - 4 33|f3f4 g5f4|1315|winningMaterial,fork,endgame,oneMove|
1u594f3|r3r1k1/p4p1p/1pb1q1p1/2pP4/4n3/4PN2/PPQ1BPPP/2RR2K1 b - - 0 19|e6d5 d1d5|1315|winningMaterial,oneMove|
1xa11sj|3q2k1/4n1p1/pp2p3/5rQp/2pPN2P/5P2/PP4P1/5RK1 w - - 1 26|f1e1 f5g5|1315|winningMaterial,oneMove|
1crwdf8|2kr3r/ppp1qppp/2npbn2/3N4/2P1P3/3BQ2P/PP3PP1/R3K1NR b KQ - 4 11|f6d7 d5e7|1320|winningMaterial,oneMove|
17l8269|3n3r/3kn3/pBp3p1/7p/8/P4R1P/5PP1/b3R1K1 b - - 3 33|e7d5 b6d8|1320|winningMaterial,oneMove|
3pvozg|r1b1kb1r/ppq1np2/2n1p2p/2ppP3/3P2p1/2P2N2/PPN1BPPP/R1BQ1RK1 w kq - 0 10|c2e3 g4f3|1320|winningMaterial,oneMove|
p99srm|8/6k1/2p1n1p1/1rPpPp2/p4P2/Pp4P1/1P2B1K1/5R2 b - - 2 45|e6d4 e2b5|1320|winningMaterial,oneMove|
xohtvz|3k2r1/1ppq3p/2r5/p1QbPp1N/P2P4/8/3B3P/R3KR2 w Q - 6 26|a1c1 c6c5|1320|winningMaterial,oneMove|
4u7nzs|rq3rk1/1p1n1pp1/2p2np1/p7/3Pp2P/P1PBP1P1/5P2/1RBQ1RK1 w - - 0 17|h4h5 e4d3|1325|winningMaterial,oneMove|
br2iqw|3q2k1/6p1/p3p3/1pN2r1p/2pP1n1P/5P2/PP2Q1P1/5RK1 w - - 2 29|e2e6 f4e6|1325|winningMaterial,oneMove|
b7eyp1|r7/2bb1ppp/2N1k3/N3p3/8/1P2P3/1P3PPP/2R3K1 w - - 4 26|f2f4 c7a5|1325|winningMaterial,oneMove|
comrfo|8/2r2p1p/5pk1/2p2R2/1nB2P1P/1P4P1/3K4/8 w - - 4 43|c4d3 b4d3|1325|winningMaterial,oneMove|
1ulufh8|r4rk1/1p2b1pp/p1p1pp2/2PpBb1P/1P1P4/2P1P3/5PP1/R3KB1R w KQ - 0 16|f2f3 f6e5|1330|winningMaterial,oneMove|
u7cdbp|2rqkb1r/1p1b1p2/p2p1nnp/3Pp3/P3P1p1/R1N2N2/1PBB1PPP/3Q1RK1 w k - 0 16|a3b3 g4f3|1330|winningMaterial,oneMove|
44x98n|3n4/4kp1p/6p1/8/2B3P1/7P/4rP2/3R2K1 b - - 0 29|e2e6 c4e6|1330|winningMaterial,endgame,oneMove|
1emb3r5|5b2/p1k2p1p/8/5b2/2p5/2P2Bp1/PP1NRq1P/2K4R b - - 3 34|f5g6 e2f2|1330|winningMaterial,oneMove|
xnuker|r1bqkbnr/pp1p1ppp/2n5/4p3/3N4/2P5/PP2PPPP/RNBQKB1R w KQkq - 0 5|e2e4 e5d4|1330|winningMaterial,oneMove|
ilcr53|1R1bk1r1/p1Qb3p/5q2/3Pp3/6p1/4p3/P4PPP/3R2K1 w - - 0 32|b8d8 f6d8|1335|winningMaterial,oneMove|
n7kj7y|1n2kb1r/8/pNr1p3/P1p2pq1/1p1p1nNp/1P3Q1P/1BPP1PP1/1R2R1K1 w k - 0 26|c2c3 f5g4|1335|winningMaterial,oneMove|
k0e0tp|4k2r/1pqb1p2/p2p4/P1bPp1n1/4Pnp1/1R1B2P1/1P2Q2P/3NNR1K w k - 7 28|f1f4 e5f4|1335|winningMaterial,oneMove|
x41amd|rn2kbnr/ppq1pppp/2p5/8/6b1/P2P1NNP/1PP2PP1/R1BQKB1R b KQkq - 0 8|h7h5 h3g4|1335|winningMaterial,oneMove|
z5182d|1r2kb1r/1p3ppp/4p3/8/P1p1P3/R3PN2/1P2K1PP/3R4 w - - 0 22|d1b1 f8a3|1340|winningMaterial,oneMove|
kwvddo|2kr1b1r/1pp4p/5pp1/p3n3/P2NP2P/2q5/1B2QPP1/R4RK1 b - - 1 20|f8b4 b2c3|1340|winningMaterial,oneMove|
1ej1yx9|r3k2r/pbp1qpp1/1pnb3p/4p3/3Pp3/2PB1NB1/PP2QPPP/R3K2R w KQkq - 0 13|d3b5 e4f3|1340|winningMaterial,oneMove|
v38b8h|8/4P2p/6k1/6Pp/5K2/3b2B1/8/8 b - - 0 66|h5h4 e7e8q|1340|winningMaterial,promotion,endgame,oneMove|
1vgb6hn|r1bqk1nr/ppppb1pp/2n5/4p3/4Pp2/3PBN2/PPP1BPPP/RN1QK2R w KQkq - 0 6|d3d4 f4e3|1340|winningMaterial,oneMove|
1j6fj7o|2r1k2r/1p1bbp2/p3p3/1P2P3/P2n2Pp/N1p2P2/2N3PK/1RB2R2 b k - 1 28|d4b5 a4b5|1345|winningMaterial,oneMove|
bbtyxy|8/6pk/4Q1n1/2q1r3/3NPp1p/r6P/P5P1/1R1R2K1 w - - 7 38|g1h2 e5e6|1345|winningMaterial,oneMove|
17010v6|8/5k1p/6p1/8/7r/P3K2b/7R/4B3 b - - 3 49|g6g5 e1h4|1345|winningMaterial,endgame,oneMove|
17hwp5q|6k1/4b3/5Pp1/8/7p/5P1P/3B1K2/8 b - - 0 41|g8f7 f6e7|1345|winningMaterial,endgame,oneMove|
1qdxawd|6k1/p3qp2/6p1/2p3np/1p5P/1P1QP1N1/P4PP1/6K1 b - - 0 31|g8g7 h4g5|1350|winningMaterial,oneMove|
1xja8p0|6r1/3nkpr1/p3p1P1/1p5P/2pPpQ2/2P3q1/PP4P1/RN3RK1 b - - 1 27|g3g6 h5g6|1350|winningMaterial,oneMove|
lm6sj9|rn1q1rk1/1p3pp1/2p1pnp1/p7/1bBP3P/P1N1P1P1/1P3P2/R1BQK2R b KQ - 0 12|b8d7 a3b4|1350|winningMaterial,oneMove|
k62ir9|rnb1kb1r/1p1p1pp1/p3pn2/q6p/2Pp3B/P1N1P3/1P3PPP/R2QKBNR w KQkq - 0 9|g1f3 d4c3|1350|winningMaterial,oneMove|
2cki45|r3r2k/1b3ppp/pp3q2/2np4/5BN1/4RPQ1/PPP3PP/2KR4 b - - 10 27|e8e3 g4f6|1350|winningMaterial,oneMove|
1cx2qz9|5r2/5pkb/R3p3/3p2r1/1P1P1Np1/2P1NP2/3K4/8 w - - 0 36|f4e6 f7e6|1355|winningMaterial,oneMove|
1cgvez0|rnb1k2r/ppqp1pp1/2p2n1p/4P3/3Q4/1P6/P1P1BPPP/RN2K1NR b KQkq - 0 9|e8g8 e5f6|1355|winningMaterial,oneMove|
1j8y2hw|2r3k1/4b1pb/qNp1p2p/pr6/3P2p1/2R1P1B1/PQ3P1P/5BKR b - - 0 27|a6b6 f1b5|1355|winningMaterial,oneMove|
1skw0ca|r2qk2r/pbp2ppp/2n5/3pP3/2p5/P2Q1NP1/1PP1BP1P/R3K1R1 w Qkq - 0 15|d3d4 c6d4|1355|winningMaterial,oneMove|
f11g74|r2qk2r/ppp2ppp/1b1p1n2/1Q4B1/4P3/2P5/PP3PPP/RN3RK1 b kq - 0 11|f6d7 g5d8|1360|winningMaterial,oneMove|
1fjz29d|5r2/1R5p/k1P5/p5R1/P7/8/2pP3P/6K1 w - - 0 37|h2h4 c2c1q|1360|winningMaterial,promotion,endgame,oneMove|
190fxgu|8/r1p5/1p2nk1p/1P3p2/1P1R3P/p4B2/P2K1P2/8 w - - 4 41|d2c3 e6d4|1360|winningMaterial,oneMove|
1p22sdg|3r1r1k/p2Q4/2pp3P/1q6/4P3/P3BP2/1bPK4/1N4R1 w - - 5 34|d7g7 b2g7|1360|winningMaterial,oneMove|
c799vs|r1bq1rk1/3n1pb1/pp1p1np1/2p4p/P1PBP3/2N2NPP/1P3PB1/RQ3RK1 w - - 0 14|b2b4 c5d4|1360|winningMaterial,oneMove|
wrwbkp|3r1kr1/4bp1p/p2q1n2/2p2N2/4Pn2/P1Rp1P2/1B1P1P2/2Q1KB1R b K - 1 25|f4g2 f1g2|1365|winningMaterial,oneMove|
983wrz|6k1/1p3p2/2p1p2p/p1b3p1/P1n5/1PB3PP/2B2PK1/8 b - - 0 35|c4e3 f2e3|1365|winningMaterial,oneMove|
9us2te|5k2/r5p1/1bp1p3/1p2P1qp/1P2P1PN/4P2P/2Q1K3/6R1 w - - 0 32|h4f5 e6f5|1365|winningMaterial,oneMove|
1u3cmx9|r2rq1k1/p1p2pb1/2b2npp/1p2p3/2Q1P3/P1N2N2/1PPB1PPP/R3R1K1 w - - 0 16|c3b5 c6b5|1365|winningMaterial,oneMove|
7c0kub|5rk1/1pq2pbp/p3p1p1/2p2n2/4NP2/2PrB1PP/RP2Q1B1/3K3R w - - 0 23|d1c2 d3e3|1370|winningMaterial,oneMove|
196kjpa|2rqk2r/pQBnbppp/4pn2/1N1p1b2/2Pp4/4P3/PP3PPP/2R1KBNR b Kk - 1 10|f6e4 c7d8|1370|winningMaterial,oneMove|
2c74w9|7r/8/p1k2p1P/1pbNp3/5r2/7R/P5P1/3R3K b - - 6 49|a6a5 d5f4|1370|winningMaterial,oneMove|
njxjfa|r2q1rk1/5p2/p1N3pb/7p/8/P3p3/1P1Q1PPP/2R2RK1 w - - 0 25|d2e3 h6e3|1370|winningMaterial,oneMove|
10vcasf|8/8/7p/1b2kp1P/1R4pK/4r3/5PP1/8 b - - 3 57|e3h3 g2h3|1370|winningMaterial,endgame,oneMove|
1l2c4ke|r1b5/pp4k1/4pqpN/7Q/2p5/P3P2P/5PP1/3R2K1 w - - 1 25|h6f5 e6f5|1375|winningMaterial,oneMove|
i2i9zm|8/6k1/3rp3/3n1p2/8/5pP1/1R2B1K1/8 w - - 0 46|g2f2 f3e2|1375|winningMaterial,endgame,oneMove|
1cxdx07|3kbb1r/1p3pp1/p1n1pn1p/1N6/2B5/PP2BN2/2P2PPP/R5K1 w - - 0 16|b3b4 a6b5|1375|winningMaterial,oneMove|
11grrz3|r3kb1r/pp1nnppp/2p5/3qp3/3P1B2/P3Q1NP/1PP1BPP1/R3K2R w KQkq - 1 15|e1g1 e5f4|1375|winningMaterial,fork,oneMove|
1ixfudi|rnb1kb1r/ppp2ppp/7n/8/3PpB2/2P2N2/PP4PP/RN2KB1R w KQkq - 0 9|f4c7 e4f3|1375|winningMaterial,oneMove|
1qhhb4g|1r3k2/p4p1p/3Rp3/4P1R1/8/Pp1B1b2/4N2r/1K6 w - - 1 26|g5g3 f3e2|1380|winningMaterial,oneMove|
h3guf0|2k3r1/ppn3pp/2pnrp2/3pB2P/P2P4/2PPN3/3K1PP1/6RR w - - 0 24|h5h6 f6e5|1380|winningMaterial,oneMove|
d3tkl2|r1bqkb1r/ppp1pppp/5n2/8/3nN3/5N2/PPP1QPPP/R1B1KB1R w KQkq - 0 7|c1e3 d4e2|1380|winningMaterial,oneMove|
z7h3mb|5rk1/p1q3p1/1p2p3/3p4/1QrP3p/P3P2P/5PP1/2R1R1K1 w - - 0 25|c1b1 c4b4|1380|winningMaterial,oneMove|
4xv9uj|2r4r/1p1b1p1k/p3p1pp/4q3/8/1Pn4P/PB2NPP1/1R1Q1BK1 b - - 1 27|d7e8 e2c3|1385|winningMaterial,oneMove|
1v4ltz1|1k6/1p6/pq6/3P1p2/8/7P/1Pn5/3RRB1K w - - 1 45|f1g2 c2e1|1385|winningMaterial,endgame,oneMove|
uxn8uz|1q2k2r/3rbpp1/pp2pn1p/1N2p3/QPn5/5NB1/P4PPP/R1R3K1 w k - 0 21|a1b1 a6b5|1385|winningMaterial,oneMove|
xub9tp|3n2k1/pBn5/P3pp1b/2p5/2N5/2P3p1/1P3P1B/6K1 w - - 0 35|g1h1 g3h2|1385|winningMaterial,oneMove|
mj9nvb|3rb1k1/1p3ppp/2qr4/p1pP4/P1Qn2BP/4N1P1/1P3P2/2R2RK1 b - - 0 25|c6d5 e3d5|1385|winningMaterial,oneMove|
4m21m5|8/6p1/4pk1p/p2r3P/P4RP1/4K3/8/8 b - - 3 47|d5f5 g4f5|1390|winningMaterial,endgame,oneMove|
c7c09s|4k2r/2q2pp1/rpp4p/p3p2n/P3P3/R1P2PQ1/1P4PP/2B1K2R w Kk - 2 18|a3b3 h5g3|1390|winningMaterial,oneMove|
17fkrur|6k1/3n1pp1/7p/5q2/1P6/3RPP1P/3rBP2/5Q1K b - - 2 30|f5d3 e2d3|1390|winningMaterial,oneMove|
4gq1wh|r4rk1/pbp1nppp/1p1b4/3P3q/P4P2/2P5/BP3BPP/RN1Q1RK1 b - - 0 15|h5d5 a2d5|1390|winningMaterial,oneMove|
12viqzk|5rk1/1p4pp/1p4b1/1p6/1P2p3/P1P1N3/q1Q3PP/4R1K1 b - - 7 24|a2c4 e3c4|1395|winningMaterial,oneMove|
1uv30dp|r5qk/p1pb2pp/1bpp2n1/5r2/6Q1/2P2NNP/PP2RPP1/R1B3K1 b - - 3 18|g8f8 g3f5|1395|winningMaterial,oneMove|
c6947d|r3k2r/pp1nbppp/2p1p3/q5P1/P2P4/2BB1Q2/1PP2P1P/R3K2R b KQkq - 0 14|d7e5 d4e5|1395|winningMaterial,oneMove|
1qua369|2r3k1/p2n1pp1/Pp1r4/3p3p/1P5P/2P2N2/2b1NPP1/3RK2R w - - 2 26|e1d2 c2d1|1395|winningMaterial,oneMove|
18pptcb|2r3k1/ppp2pNr/3p4/3P3p/5P1n/1P5P/PBP3P1/4R1K1 w - - 0 23|g1f2 h7g7|1395|winningMaterial,oneMove|
5r40eb|r1bqk2r/pppp1ppp/2n5/8/1b2PB2/4Q3/PPP2PPP/RN2KB1R w KQkq - 5 8|e3d2 b4d2|1400|winningMaterial,fork,oneMove|
1qntamc|r1b1k2r/1p3pbp/p1n2np1/q2pp3/P1pP1B2/2P1P2P/1P1N1PP1/R1QBK1NR w KQkq - 0 14|g1e2 e5f4|1400|winningMaterial,oneMove|
1eprg8i|r1bq1k1r/pp1n1p1p/2pb1np1/P2pP3/8/1NP1P3/1P2BPPP/RNBQK2R b KQ - 0 10|f6e4 e5d6|1400|winningMaterial,oneMove|
lkm881|4k1r1/1pqnbp1p/p1rNp3/4P1p1/3R2P1/2N5/PP2QP1P/5RK1 b - - 2 20|c6d6 e5d6|1400|winningMaterial,fork,oneMove|
cup8fp|r1bqk1nr/4bppp/p1n1p3/1p1P4/3p4/P2B1N1P/1PPN1PP1/1RBQK2R b Kkq - 0 9|c8b7 d5c6|1405|winningMaterial,oneMove|
1kry9hv|8/8/8/8/2q5/7P/1pk1K3/6RR w - - 20 78|e2e1 b2b1q|1405|winningMaterial,promotion,endgame,oneMove|
ncjg2p|8/5k1p/6p1/4p3/1rp5/3n4/2R3PP/1R4K1 w - - 0 43|b1c1 d3c1|1405|winningMaterial,endgame,oneMove|
yyezyq|r1bqkbnr/1pppp2p/p5p1/P2Pnp2/5P2/8/1PP1P1PP/RNBQKBNR b KQkq - 0 6|d7d6 f4e5|1405|winningMaterial,oneMove|
1m0gets|r3r1k1/1b3ppp/pp2q2N/2np4/5B2/3R1PQ1/PPP3PP/2KR4 b - - 6 25|e6h6 f4h6|1405|winningMaterial,oneMove|
1ahhnh3|8/4r2p/2R1n1p1/2P2P2/3p1k1P/3P4/5N1K/8 b - - 0 47|e6g5 h4g5|1410|winningMaterial,endgame,oneMove|
1mj3dru|rn2kb1r/1p3pp1/p1p1pn2/2Pp3p/3P1B1P/1PNbP3/1P3PP1/R3KB1R w KQ - 0 13|c3a4 d3f1|1410|winningMaterial,oneMove|
ksbr37|r1b1kbnr/1p2pppp/p1n5/1B1p4/3P1B2/8/PPPK1PPP/RN4NR w kq - 0 8|b1c3 a6b5|1410|winningMaterial,oneMove|
19d3nci|r4rk1/p3b1pp/2p1pp1n/3pPb2/3P3q/PP4BP/4NPP1/RN1QK2R b KQ - 3 13|f6e5 g3h4|1410|winningMaterial,oneMove|
13ufcy7|1rbqk2r/2ppn1b1/p1n4p/4ppBp/2P5/2NP2P1/P3PPBN/R2QK2R w KQk - 0 13|d1c1 h6g5|1415|winningMaterial,oneMove|
lkb7bi|8/8/5kp1/6Rp/5P1P/6PK/5r2/8 w - - 11 70|g5g4 h5g4|1415|winningMaterial,endgame,oneMove|
o88w1v|8/1p3ppk/7p/P6P/8/2R2b2/2p4P/7K w - - 0 45|c3f3 c2c1q|1415|winningMaterial,promotion,endgame,oneMove|
qzbfld|r1b1k1r1/3nqp1p/p1pp3P/1p2p1p1/Q2PP3/2P5/PP1NBPP1/2R2RK1 w q - 0 20|e2b5 c6b5|1415|winningMaterial,oneMove|
1t3mjau|7k/1pp4p/2n3p1/6R1/4KN1N/P2BP2P/2r5/r7 b - - 11 34|a1a2 d3c2|1415|winningMaterial,oneMove|
140qezs|rnbqk1nr/pppp2pp/4p3/5p2/1b2P3/3P1N2/PPP2PPP/RNBQKB1R w KQkq - 1 4|d1d2 b4d2|1420|winningMaterial,fork,oneMove|
1fm0np4|8/8/7n/2p1k3/6P1/5PK1/4N3/8 b - - 4 51|h6f5 g4f5|1420|winningMaterial,endgame,oneMove|
1hfl9vk|r2qkb1r/3bpppp/3p1n2/1p6/3QP3/2N3PP/1PP2P2/R1B1KB1R w KQkq - 0 11|d4a7 a8a7|1420|winningMaterial,oneMove|
ja3iel|r1bqk2r/1p2ppbp/n2p1np1/p1pP4/3B4/P1N2N1P/1PP1PPP1/R2QKB1R w KQkq - 0 9|e2e4 c5d4|1420|winningMaterial,oneMove|
8nfw37|3q1rk1/5p1p/1p2pp2/rQ1p4/2PP4/4PK1P/5PP1/2R2R2 w - - 2 23|c1c2 a5b5|1425|winningMaterial,oneMove|
17kn6lb|r2qkb1r/1p1bp2p/n2p1np1/p1pP4/2PB4/2N2N2/PP2PPB1/R2QK1R1 w Qkq c6 0 13|g1h1 c5d4|1425|winningMaterial,oneMove|
9nyfuw|4k3/1p1r4/p4P2/4P1r1/P6p/4K3/6PP/5B1R w - - 0 34|f1b5 a6b5|1425|winningMaterial,oneMove|
84vmcd|r1b1r2k/1p3pp1/1qn2n1p/p2pP3/8/2P2NP1/PPB2PPN/RQ3RK1 b - - 0 16|e8e5 f3e5|1425|winningMaterial,oneMove|
p7ov4k|1r2r1k1/ppp2pp1/3pq2p/1P3P2/P2PP3/2N1B1Pb/3Q1KnP/R3R3 b - - 0 22|e6e4 c3e4|1425|winningMaterial,oneMove|
1w13wen|8/8/4k3/P7/2pK4/3p4/2rR4/8 w - - 4 62|d2d3 c4d3|1430|winningMaterial,endgame,oneMove|
r42gz5|r3r1k1/ppp1nppp/4b1q1/2Bp4/4P2Q/2P5/PP1N1PPP/R4R1K b - - 4 18|d5e4 c5e7|1430|winningMaterial,oneMove|
1ylfw9f|4r1k1/p4p2/2q2pp1/7p/pPPR4/P6P/5PP1/4Q1K1 w - - 3 30|e1e3 e8e3|1430|winningMaterial,oneMove|
12esdsd|r4k2/p4p2/1n1p2p1/1p1p3p/1P5P/2n2N2/R1P2PP1/5RK1 w - - 0 25|f1a1 c3a2|1430|winningMaterial,oneMove|
1ukxdpk|6k1/5p2/4p1pp/8/3b1P2/1q6/2R4P/RKQ5 w - - 4 39|c1b2 d4b2|1430|winningMaterial,endgame,oneMove|
1clfqlx|r3k2r/pp2ppb1/2n4p/3n2p1/P2P4/4BNP1/1q1NPP1P/1R1QK2R b Kkq - 3 13|b2b4 b1b4|1435|winningMaterial,oneMove|
12b0m28|r4rk1/1Q2bppp/p7/1b6/5q1P/P1B2B2/1P3PP1/R3K2R w KQ - 1 20|b7a8 f8a8|1435|winningMaterial,oneMove|
1ytpbh8|r2qk2r/p4ppp/2p2n2/b2p4/Q7/2N5/1P3PPP/R1B2RK1 b kq - 1 17|e8g8 a4a5|1435|winningMaterial,oneMove|
1t9wvc2|r1b1k2r/ppppnpp1/2n2q2/2b4p/1P1NP3/2P1B1P1/P4P1P/RN1QKB1R b KQkq - 0 8|d7d6 b4c5|1435|winningMaterial,oneMove|
1jzyn0n|2r1r3/4Pkpp/3B1p2/1p3q2/nP1R2P1/P6P/2p1Q3/2R3K1 b - - 0 31|f5e5 d6e5|1440|winningMaterial,oneMove|
1f2gv6c|8/R2nk3/4P3/1p4r1/2p5/2P1N1p1/1P1r4/5RK1 b - - 0 55|g5e5 e6d7|1440|winningMaterial,oneMove|
cxgyy1|8/pppr1kp1/2n1bp2/1P5p/4P3/2N2PB1/P5PP/R6K b - - 0 31|g7g6 b5c6|1440|winningMaterial,oneMove|
81dq3r|r1b1k2r/p1pqnp1p/3p1b1B/4P3/1p1P2p1/8/P3QPPP/RN1RN1K1 b kq - 0 16|f6e5 d4e5|1440|winningMaterial,oneMove|
oovdr6|r3k2r/p1q1p2p/1p2bpp1/1Q2p3/4P3/1R5P/PBP2PP1/3R2K1 b kq - 3 19|c7d7 d1d7|1440|winningMaterial,oneMove|
1mmc5j8|r5k1/p2b1rb1/4q1np/NpR1ppp1/1B1N4/Q2P3P/PP3PP1/4R1K1 b - - 0 22|e5d4 e1e6|1445|winningMaterial,oneMove|
1q5b4oq|8/1p2pp2/3k1rp1/p2PR3/P4r2/1BP1KP2/5R2/8 w - - 5 32|e5e6 f7e6|1445|winningMaterial,oneMove|
1j4csx3|B3r2k/3bb1pp/1n6/4qpP1/3P3Q/2Nn4/3BP2P/2R2K1R b - - 2 32|b6c4 d4e5|1445|winningMaterial,oneMove|
1eyqsl6|8/1pR1R3/pr3p2/7p/kP3r2/2P2PK1/8/8 b - - 3 42|f4b4 c3b4|1445|winningMaterial,endgame,oneMove|
vbe2wz|r3k2r/1pp2pb1/3p2p1/2n3P1/p1PNP2p/P2P4/1P3PP1/R1BR2K1 w kq - 3 20|d4f5 g6f5|1450|winningMaterial,oneMove|
12aj0bz|r1b2k1r/ppq2pp1/1nn1p2p/3pP3/1b1P4/5N1P/PP1QBPP1/RNB2RK1 w - - 4 15|a2a4 b4d2|1450|winningMaterial,oneMove|
13ppe3z|6k1/2q5/6p1/7p/8/1PQ5/P5PP/3rR2K w - - 7 41|c3g3 c7g3|1450|winningMaterial,endgame,oneMove|
hqv27x|2r1kr2/1p1q3p/p1b2bp1/P4p2/Q2N1P2/3BP1nP/1PP3P1/R1BK2R1 w - - 7 26|b2b3 c6a4|1450|winningMaterial,oneMove|
l1ybmn|r3k3/3nb2p/4p1p1/2p5/4bp2/PRB1N3/5PPP/R5K1 w - - 0 31|a3a4 f4e3|1450|winningMaterial,oneMove|
1uxqjan|2n1k2r/1p3p2/3pb3/1P3p1p/P1B1p3/4B1P1/3K3P/R7 w k - 1 32|c4d3 e4d3|1455|winningMaterial,oneMove|
ro0zlo|5rk1/2r4p/2b3pP/p1Rp4/P1p5/q3P3/3NQ1P1/1R4K1 w - - 2 32|c5c4 d5c4|1455|winningMaterial,oneMove|
12by1lq|2kr1b1r/ppq2pp1/8/2p1P2p/NPnP2n1/P1P5/1B2Q1BP/R4RK1 b - - 0 18|g4e5 d4e5|1455|winningMaterial,oneMove|
sscomf|2k4r/1pp2p1p/3r4/pPP1p1P1/4Pn2/P5P1/1b3P2/1R3KNR b - - 0 22|f4e6 c5d6|1455|winningMaterial,oneMove|
1ceobpq|rn2kb1r/1p3pp1/1qp1pn1p/p2p1b2/N1PP1B2/4PN2/PP2BPPP/R1Q1K2R b KQkq - 1 9|b8d7 a4b6|1460|winningMaterial,oneMove|
1fa3eqd|r1b1k2r/bp1pqpp1/n1p2n1p/p3p1B1/Q1P5/P1NPPN1P/1P3PP1/2KR1B1R w kq - 0 11|a4a5 h6g5|1460|winningMaterial,oneMove|
1f4tuuh|8/2R3p1/2rP1p1p/P2p1k1P/r4B2/3p2P1/1K3P2/8 b - - 3 48|c6c2 c7c2|1460|winningMaterial,oneMove|
1ok8sak|3rk2r/ppq1bppp/2p2n2/2nP1p2/2P5/1QN1B3/PP2BPPP/R4RK1 w k - 1 14|c3b5 c6b5|1460|winningMaterial,oneMove|
u8an7e|rnbqkb1r/pp1pppp1/5n1p/2p1P3/2B5/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4|e7e6 e5f6|1460|winningMaterial,oneMove|
td60ag|r1b2rk1/2q1bppp/1pn2n2/p2pP3/P6P/1QN2N2/1P1BPPP1/R3KB1R b KQ - 0 15|e7b4 e5f6|1465|winningMaterial,oneMove|
1phtyut|r1b1r1k1/pp3ppp/3q1n2/2ppP3/8/2P1P3/PP1NBPPP/RQ2K2R b KQ - 0 12|d6c7 e5f6|1465|winningMaterial,oneMove|
awq35n|r4knr/1ppqbp1p/2n1b1p1/p3p2N/3pP2P/P1PP1N2/1P3PP1/R1BQKB1R w KQ - 0 11|h5f4 e5f4|1465|winningMaterial,oneMove|
d7l3kk|1b3rk1/p2b4/5p2/1prPp2p/1P2B3/N6P/P5P1/4RR1K b - - 0 26|b8d6 b4c5|1465|winningMaterial,oneMove|
1n92krw|3r2k1/p5b1/1pnq2p1/2p3Bp/Q3P2P/P1Pn2P1/1P5K/3R1R2 b - - 1 31|g8h8 g5d8|1470|winningMaterial,oneMove|
o8pbnj|r1bqkbnr/1ppp3p/p3p1p1/P2P1p2/5Pn1/5N1P/1PP1P1P1/RNBQKB1R b KQkq - 0 8|e6d5 h3g4|1470|winningMaterial,oneMove|
nwl5t7|4rrk1/pbp3pp/8/3p4/2pR4/P5P1/1PP1BP1P/2K2R2 w - - 3 23|e2c4 d5c4|1470|winningMaterial,oneMove|
ia4pdd|r2qkb1r/1pp2pp1/3p1n2/p7/2PpP1Qp/P2P3P/1P3PP1/RNB1K2R w KQkq - 1 11|c1f4 f6g4|1470|winningMaterial,oneMove|
1y6sn1e|r3kb1r/pp1n1pp1/2n1p2p/3pP2P/qP1P4/N1N4Q/P2B1PP1/1R2K2R b Kkq - 10 17|a4b4 b1b4|1470|winningMaterial,oneMove|
1jexqq4|2r5/1p3p1k/4b1p1/pr1pP2p/PP1R3P/2P5/B4PK1/R7 b - - 0 27|b5b4 c3b4|1475|winningMaterial,oneMove|
1ygfj7k|r2qk2r/1p1nbpp1/p3p3/3p4/1n1PP2p/PP3N1P/1B1N1PP1/1QR2RK1 b kq - 0 17|d7f8 a3b4|1475|winningMaterial,oneMove|
1j44i8d|5nk1/5p1p/r1p2p2/5p2/5P2/rP4P1/P3B2P/RR4K1 b - - 6 31|f8e6 e2a6|1475|winningMaterial,oneMove|
13rlic1|rqb1k2r/1p1n1ppp/p2Np3/2bnP1B1/Q7/5N2/PPP2PPP/2KR1B1R b kq - 1 13|b8d6 e5d6|1475|winningMaterial,oneMove|
tmbh4f|1n1qk2r/3rbppp/8/pp3p2/2pp1P2/2N2BP1/PPQ2P1P/R2R2K1 w k - 0 17|c2f5 d4c3|1480|winningMaterial,oneMove|
3uf16e|r2qkbnr/pp2pppp/2n5/7b/3p4/1PN2N1P/PBPP1PP1/R2QKB1R w KQkq - 0 8|g2g4 d4c3|1480|winningMaterial,oneMove|
hy5qhq|r4rk1/5ppp/p7/1b4b1/4Qq1P/P1B2BP1/1P3P2/R3K2R b KQ - 0 21|f8e8 g3f4|1480|winningMaterial,oneMove|
1kzwvt8|6k1/3R4/1pp5/3pr3/P4K2/3B1P2/1r4P1/8 b - - 1 40|e5e4 f3e4|1480|winningMaterial,endgame,oneMove|
9hvswk|8/8/5R2/p7/1knrPP2/3P1P2/4K3/8 b - - 0 52|d4d7 d3c4|1480|winningMaterial,endgame,oneMove|
ahoghd|8/7p/1r3kp1/4R3/4B1P1/3P2K1/8/6b1 w - - 8 45|e5h5 g6h5|1485|winningMaterial,endgame,oneMove|
3njjzy|8/4R3/1p4pk/1P3b1p/3r1K1P/2N2P2/1P6/8 w - - 5 37|e7e4 f5e4|1485|winningMaterial,endgame,oneMove|
8tt9i0|8/5p2/5N1P/2r1Pk2/1p3P2/8/1K6/8 b - - 0 58|c5e5 f4e5|1485|winningMaterial,endgame,oneMove|
qrd4ih|2r2r1k/3nq2p/2p5/1p3p2/p2p1P2/3P2R1/PP1Q1NP1/4R1K1 b - - 3 28|f8f7 e1e7|1485|winningMaterial,fork,oneMove|
jkv76j|r4r1k/1ppq3P/p1bbpnp1/P4p2/3P4/2N1BpP1/1PP1Q1B1/1K1R3R w - - 0 21|e2f3 c6f3|1490|winningMaterial,fork,oneMove|
1r7t7pm|3r4/pkb2pp1/2p5/6p1/P2P4/1P1R3P/1BP2rq1/1K2Q1R1 b - - 11 34|d8e8 e1b4 c7b6 g1g2|1490|winningMaterial,short|
5u36a0|1n2kb1r/2r5/pN2R3/P1p2pq1/1p1p3p/1P1n1Q1P/1BPP1PP1/1R4K1 b k - 0 28|c7e7 e6e7 f8e7 f3d3|1490|winningMaterial,short|3:f3d3
avizd|4r1k1/p1p5/2bp2R1/b1p5/2P2N1P/1P2r3/P4RP1/6K1 b - - 0 40|g8f8 f4d5 e3f3 f2f3|1490|mate,mateIn2,short|
1pxtw3v|7k/8/8/2p5/2N2PPp/2bB1K1P/2r5/8 b - - 1 42|c2d2 c4d2|1490|winningMaterial,endgame,oneMove|
npjbep|8/p3k3/2p5/8/6p1/2PrnB2/PP3R1P/6K1 w - - 18 41|c3c4 g4f3|1495|winningMaterial,endgame,oneMove|
7pqtqn|8/pp6/2n1k1r1/3n1R2/3PB1pr/2P5/PP5P/5RK1 b - - 0 27|g4g3 e4d5 e6d7 d5c6|1495|winningMaterial,short|3:d5c6 h2g3 h2h3
l207kx|6k1/1R2pp2/7p/PN6/6p1/4P1P1/3rr2P/6RK w - - 2 33|g1f1 e2h2 h1g1 d2g2|1495|mate,mateIn2,short|3:d2g2
5leovd|r1bq1rk1/pp3ppp/2nbp3/2n5/8/2PB1NB1/PPQ2PPP/3RK2R b K - 1 13|b7b6 d3h7 g8h8 g3d6|1495|winningMaterial,short|3:g3d6
12zmvqd|r2q1rk1/4bppp/2n1p3/3p4/pp1P3P/2PQ2P1/PPB2P2/R1B1R1K1 b - - 1 16|f7f6 d3h7 g8f7 c2g6|1500|mate,mateIn2,short|3:c2g6
gqfq26|4r3/1p2k2R/1q5p/pb1p1B1P/3P2R1/1P4P1/5PK1/8 b - - 4 39|e7d6 g4g6 e8e6 g6e6|1500|mate,mateIn2,short|
11r8ufo|8/1pp1r1k1/6P1/pP1pPBR1/5p2/P1P1n3/3N1K1r/6R1 w - - 1 37|g5g2 h2g2 g1g2 e3g2|1500|winningMaterial,short|3:e3g2
c147pz|r1b3k1/5p2/7Q/p7/7p/2P4P/1P4P1/R1K1r3 w - - 0 35|c1c2 c8f5 c2d2 e1a1|1500|winningMaterial,short|
iglo05|3R2k1/p5pp/2p5/7n/4p1Pq/1P5P/PNP4K/5rQ1 b - - 0 28|f1f8 d8f8 g8f8 g4h5|1505|winningMaterial,short|3:g4h5
1ydleh0|r1b2k1r/1p1qp2p/p1npB1p1/6N1/Q7/2b1P3/PPP3PP/2KR3R b - - 3 17|d7e6 g5e6 c8e6 b2c3|1505|winningMaterial,short|
2df0pt|1R6/p3pk2/4qp2/4nb2/8/1N1PB1Q1/1Kr5/8 w - - 0 44|b2a3 e6a6 b3a5 a6a5|1505|winningMaterial,short|3:a6a5 a6d3 a6d6
80wnv1|4r1k1/5p1p/Qp4p1/p2R3P/6q1/8/5PB1/6K1 w - - 1 40|g1h1 e8e1 a6f1 e1f1|1505|winningMaterial,short|3:e1f1 g4h4 g4b4
1plo0r3|8/4k1p1/p3p2p/4p2P/P1P2bP1/2PK4/3B3r/3R4 w - - 7 40|a4a5 e5e4 d3e4 h2d2|1505|advantage,short|3:h2d2
1ppmttu|r4r2/pp1n1kpb/2pq3p/3p4/3B2Q1/2N4P/PPP3P1/2KR3R b - - 3 21|d7e5 g4f4 f7g8 f4e5|1510|winningMaterial,short|3:f4e5
11q667v|8/8/2R5/p2PR1pk/1b6/8/8/5K1r w - - 1 48|f1e2 h1e1 e2f3 e1e5|1510|winningMaterial,endgame,short|
ah0i1d|3N4/8/4Q1k1/8/8/7p/4K3/4n1q1 b - - 1 57|g6g5 e6g8 g5f6 g8g1|1510|winningMaterial,endgame,short|
c4zeqc|1Qkr1r2/1p6/p1p4R/P2np3/R4p2/2P5/1P3PP1/5NK1 b - - 0 37|c8d7 b8b7 d5c7 b7c6|1510|advantage,short|
y7abvn|8/6pk/7p/2P1B3/5p2/5P1P/4nqP1/1Q5K b - - 5 51|g7g6 b1b7 h7g8 b7g7|1515|mate,mateIn2,short|3:b7g7
toqhyv|1k6/1P2R3/3Kp3/5p1p/8/2r1P3/8/8 w - - 6 42|d6d7 c3c7 d7e6 c7e7|1515|winningMaterial,endgame,short|
1qvxl3x|8/3b2pp/2N1k3/2R1p3/1P3p2/1P2P2P/5PP1/r5K1 w - - 1 32|c5c1 a1c1 g1h2 d7c6|1515|winningMaterial,fork,short|3:d7c6 c1c6 f4e3
1o6u3sl|8/5Q2/p7/P2k4/qp6/8/8/5K2 b - - 21 65|d5c6 f7e8 c6d5 e8a4|1515|winningMaterial,endgame,short|
1qjeyyc|8/1p3pk1/5qp1/p2p1P1n/7P/P1P5/1PBQ1P2/4r1K1 w - - 0 30|g1h2 f6h4 h2g2 h4h1|1515|mate,mateIn2,short|3:h4h1
1ftvjno|3rk2r/pR2ppb1/2n4p/6p1/P1NP4/1Qn1B1P1/4PP1P/1q2K2R w Kk - 0 19|e3c1 b1c1 b3d1 c1d1|1520|mate,mateIn2,short|
lu7q47|3k4/1R4p1/8/2n2r2/P7/5P2/PK1N4/8 w - - 3 45|b7b5 c5a4 b2b3 f5b5|1520|winningMaterial,endgame,short|
2d11t8|1rn2k2/p3bppp/1rR5/2p5/5RP1/PN5P/KPP2P2/5B2 w - - 6 40|f1c4 b6c6 f4f7 f8e8|1520|winningMaterial,short|
f3goyz|1r2kb2/2R2Rp1/4pr2/4N2p/4P3/4P3/6PP/5K2 w - - 3 30|f1g1 b8b1 c7c1 b1c1|1520|mate,mateIn2,short|
ceduxd|2r3k1/5bbp/2q3p1/1QN2p2/8/8/PP3PPP/R1B3K1 w - - 0 26|a2a4 c6c5 c1e3 c5b5|1525|winningMaterial,short|3:c5b5 c5c4 c5e5
ij61lx|1rbk3r/2p2p2/p1pb2pp/8/2B5/B1P1P2P/P4PP1/R4RK1 w - - 2 16|a1b1 b8b1 f1b1 d6a3|1525|winningMaterial,short|
14ivcd3|r4r1k/1pp3pp/2n2n2/p3b1Rq/2B5/P1N1PN1P/1P1BQP2/2K5 b - - 3 19|e5c3 g5h5 c3d2 f3d2|1525|winningMaterial,short|3:f3d2
1i01ql2|r2qrbk1/3b1pp1/1nQ1pn1p/p2p4/N2P1B2/3BPN2/PP3PPP/2R2RK1 w - - 1 15|f3e5 d7c6 a4b6 d8b6|1525|winningMaterial,short|3:d8b6 c6b5 c6b7
tseg1e|5k2/8/4rpQ1/p7/2r5/7P/2K5/8 w - - 2 71|c2b1 e6b6 b1a1 c4a4|1530|mate,mateIn2,endgame,short|
hwwh9n|r2qk2r/pppbbppp/2np1n2/1B6/3pP3/2N2N2/PPP2PPP/R1BQR1K1 w kq - 0 8|d1e2 d4c3 b5c6 b7c6|1530|winningMaterial,short|3:b7c6 d7c6
1yizg0a|r4rk1/1p3p2/p5p1/q2pbb1p/P7/2P1P2P/2BQNPP1/1R3RK1 b - - 2 22|e5c3 e2c3 f5c2 d2c2|1530|winningMaterial,short|
5sqfeg|6k1/4R2p/1r2n1PB/pP1p4/2p3P1/1P6/8/6K1 b - - 0 41|d5d4 e7e8 e6f8 e8f8|1530|mate,mateIn2,short|3:e8f8
1n8g5mk|r6r/pR1b1kp1/3bpq1p/2p5/3P4/5N2/P1PBQP1P/4K2R b K - 0 17|f7e8 b7d7 a8b8 d7d6|1530|winningMaterial,short|3:d7d6
16374v9|8/4k3/5q1Q/6N1/8/8/3K4/8 w - - 11 70|h6h2 f6b2 d2d3 b2h2|1535|winningMaterial,endgame,short|
vlxn3m|7R/2r2K2/1k6/8/6B1/7P/8/4b3 w - - 14 62|f7f6 e1c3 f6g5 c3h8|1535|winningMaterial,endgame,short|3:c3h8 c7c5
mt92k0|8/5R2/1k2P3/P2P4/2K5/b7/8/4r3 b - - 0 79|b6a5 f7a7 a5b6 a7a3|1535|winningMaterial,endgame,short|
1t1y9c5|r4rk1/1p4p1/5nqp/PPpb4/5PN1/2B1p2P/1Q2BbP1/R2R3K b - - 1 29|f6h5 d1d5 h5g3 h1h2|1535|winningMaterial,short|
1vzr5s8|1kq4r/2p4p/Q4np1/3n1p2/P2P4/P3P3/3B2PP/1R4K1 b - - 2 28|d5b4 b1b4 c8b7 a6b7|1540|mate,mateIn2,short|
uws6hh|3r1rk1/ppq2p2/n3p2b/2p3n1/P1N1Qp2/2P2B2/1P3PPB/R3R1K1 w - - 0 25|h2f4 g5f3 e4f3 c7f4|1540|winningMaterial,fork,short|
akdeos|rnbqkb1r/ppp1pp1p/6p1/3n4/8/1QN2N2/PP1PPPPP/R1B1KB1R b KQkq - 1 5|d5f4 b3a4 b8c6 a4f4|1540|winningMaterial,fork,short|
fud557|8/r1p4k/pp2q2p/4R3/3Q4/P1P5/3n2PP/6K1 b - - 4 44|e6a2 e5e7 a2f7 e7f7|1540|winningMaterial,short|
kkb1v3|6k1/5np1/1p1K2P1/pr1N1P2/3p3R/8/8/8 w - - 2 63|d6c6 b5c5 c6b6 c5d5|1545|advantage,endgame,short|
3mdquk|2kr3r/pp4pp/2p5/4PPN1/1PBn1P2/P1K5/7P/7R b - - 3 23|d4f5 c4e6 c8b8 e6f5|1545|winningMaterial,fork,short|
1cfbp8p|r3k3/pp1b2b1/1q1pp1N1/8/2pPPPn1/P1P2B2/1P2N2r/R1Q2RK1 b q - 0 19|d7c6 f3g4 h2e2 g4e2|1545|winningMaterial,short|
1sbd9mz|3k3r/2bb1ppp/1N2p3/p7/3N4/1P2P3/1P3PPP/R5K1 w - - 5 22|a1a5 c7b6 a5a8 d7c8|1545|winningMaterial,short|
1om3rxv|2r5/4kp1p/pn6/8/4P2R/P2p1P2/3PBP2/2BK4 b - - 0 33|c8c1 d1c1 d3e2 h4h1|1545|advantage,short|
1wswi6e|6bk/P4n2/6pp/8/3pP3/8/3p2BP/6NK b - - 0 60|d2d1r a7a8q|1550|winningMaterial,promotion,quietMove,oneMove|
up37wc|3r1r2/6k1/pNb1p1p1/2qPP2p/P6Q/5pP1/7K/2R2R2 b - - 2 36|c6b5 c1c5 g7h6 a4b5|1550|winningMaterial,short|3:a4b5 f1f2 h4d8
1cmmox2|r3k2r/pbp1qpp1/1pnB3p/8/3pB3/2P2N2/PP2QPPP/R3K2R b KQkq - 0 14|e7d6 e4c6 e8f8 c6b7|1550|winningMaterial,fork,short|3:c6b7
ricg4s|rn1qkb1r/pp2pp1p/2p3p1/3nNb2/2pPP3/2N3P1/PP3PBP/R1BQK2R b KQkq - 0 8|f5e6 e4d5 e6d5 c3d5|1550|winningMaterial,short|3:c3d5 g2d5 e1g1
1egvzrr|r5kr/1p3pp1/p1p2nn1/2Pp4/1P1P3p/4PBqb/P1QNN1P1/R4R1K b - - 1 25|h3d7 e2g3 h4g3 h1g1|1555|winningMaterial,short|
k69fet|r7/p1k1bpp1/1N2p2p/P1p1P3/4rB1P/7R/5PP1/R3K3 w Q - 3 23|e1d2 a8d8 d2c3 e4f4|1555|winningMaterial,short|3:e4f4 a7b6
1cpvjxx|6k1/5p2/4p1pp/1r3q2/P2b1P2/8/2R4P/RKQ5 w - - 0 36|c1b2 b5b2 b1c1 f5c2|1555|mate,mateIn2,short|3:f5c2
1icuopn|6k1/1b3pp1/4p3/1Pp1P1P1/p1P2q1p/7K/P3Q3/1R2N3 w - - 2 35|e2f3 b7f3 a2a3 f4g3|1555|mate,mateIn2,short|3:f4g3
18tcav2|8/5r2/1R5k/8/8/6K1/6P1/8 b - - 12 58|f7f6 b6f6 h6g5 f6f3|1560|winningMaterial,endgame,short|
a4i575|rn2kb1r/pQ2pp1p/2q3p1/2p2b2/2PP2n1/4BN2/PP2BPPP/RN2K2R w KQkq - 1 10|b7a8 c6a8 b1c3 g4e3|1560|winningMaterial,short|3:g4e3 a8b7 f8g7
1m2qs6y|4r3/pp4p1/2k2p2/8/6nP/P5B1/1P3K2/3R4 w - - 4 41|f2f1 g4e3 f1e2 e3d1|1560|winningMaterial,fork,endgame,short|3:e3d1
159p6i5|r4rk1/1bq2p1p/p3p1p1/2p1P2P/P2Ppb2/N1P2N2/4QPP1/RR4K1 w - - 0 22|b1b7 c7b7 f3h2 f4h2|1560|winningMaterial,short|3:f4h2 c5d4 f7f5
d3gwo0|r1b1k2r/pp2ppbp/2n2np1/3p4/3P3B/4P3/Pq1NNPPP/R1Q1KB1R b KQkq - 1 10|b2a1 c1a1 e8g8 h4f6|1560|winningMaterial,short|3:h4f6 e2g3 g2g4
1lqipy4|r1bqkb1r/ppp1ppp1/5n1p/8/3n4/5NPP/PPPPQPB1/RNB1K2R w KQkq - 1 8|e2e5 d4c2 e1d1 c2a1|1565|winningMaterial,fork,short|3:c2a1 f6d7
69hrta|2rqr1k1/1p3pb1/p3b1pp/2nBp3/1PPp2P1/3P1P1P/P3Q3/R1B1RNK1 b - - 0 25|b7b6 b4c5 e6d5 c4d5|1565|winningMaterial,short|
1pc2t5x|8/8/5kp1/7p/5P1P/8/B2p1PK1/8 w - - 0 48|f4f5 d2d1q|1565|winningMaterial,promotion,quietMove,endgame,oneMove|
1oreuh4|8/1R1kr3/2p2p2/p2p1n1p/P2P1B2/2PP4/4rP2/3K2R1 b - - 2 46|d7e6 b7e7 e6e7 d1e2|1565|winningMaterial,short|3:d1e2
t14w7p|2rk3r/R4pp1/4p2p/1BPp2bP/3Pb1P1/4Pn2/1P5B/5RK1 w - - 0 27|g1g2 f3d4 g2h3 d4b5|1570|winningMaterial,short|
fyyn76|r1B4k/pp5p/2q3p1/4n3/P5P1/7P/1PQ2P2/R5K1 w - - 2 33|c2e2 e5f3 g1f1 a8c8|1570|winningMaterial,short|3:a8c8 f3h2
ldnafj|r2qkb1r/pppn1ppp/4p1b1/8/2PPn2N/2N1B3/PP2BPPP/R2QK2R w KQkq - 6 10|d1b3 d8h4 a1d1 e4c3|1570|winningMaterial,short|3:e4c3 f8e7 a8b8
6m370l|rn1qkbnr/pp3ppp/4p3/1B1p4/8/2N2b1P/PPPP1PP1/R1BQK2R b KQkq - 1 7|d8d7 b5d7 b8d7 d1f3|1570|winningMaterial,short|3:d1f3 g2f3
138zbco|6r1/4k1r1/p3p1P1/1p1n3P/2pP2p1/2P1pR2/PP6/R4NK1 w - - 0 33|f1e3 g4f3 g1f2 d5e3|1575|winningMaterial,short|3:d5e3 d5f6 d5f4
t3nbuw|r1bq1rk1/pp3ppp/3bp3/8/1P6/3R1NB1/PPQ2PPP/4K2R b K - 0 15|d8c7 c2c7 d6c7 g3c7|1575|winningMaterial,short|
vl31dn|r3k2r/p4P1p/2p2np1/2b5/3N4/6BP/P4P1R/3R1K2 b kq - 0 25|e8f8 d4e6 f8f7 e6c5|1575|advantage,fork,short|
1a4hsrg|2b5/1p6/p3k1p1/P3pp1p/1P5P/4KBP1/5P2/8 b - - 8 46|g6g5 h4g5 h5h4 g3h4|1575|advantage,short|
ltikij|6R1/8/8/P7/4p3/6k1/r6p/7K b - - 7 65|g3f2 g8g2 f2e1 g2a2|1580|winningMaterial,endgame,short|
12pcceo|8/4R3/4p1R1/p4r2/P5k1/8/3K1P2/r7 b - - 15 48|g4h3 e7h7 f5h5 h7h5|1580|mate,mateIn2,endgame,short|
mec7ff|4r1k1/5p1p/5QP1/1bn1p3/p1p2bP1/5NqP/1PP1R1B1/4R2K b - - 0 38|g3h2 f3h2 h7g6 f6f4|1580|winningMaterial,short|3:f6f4 g2d5 g2c6
8ncf3u|3r2k1/R4p1p/2n3p1/1p1r4/7P/6P1/1P3P2/3B1RK1 w - - 2 34|d1b3 c6a7 b3d5 d8d5|1580|winningMaterial,short|
1raudv0|3rk2r/pR2ppb1/2n4p/6p1/P1NP4/1Qn1B1P1/q2NPP1P/4K2R b Kk - 6 17|e8g8 b3c3 c6d4 e3d4|1580|winningMaterial,short|3:e3d4 e1f1
boaxmj|1rbr2k1/1pq1bppp/2n2n2/p1p1p3/P3p2P/1P1P1NP1/1BPNQPB1/R3R1K1 w - - 0 15|f3e5 c6e5 d2e4 f6e4|1585|winningMaterial,short|3:f6e4
1jeamub|1r3rk1/3n1pb1/Qq1ppn1p/6p1/2PP4/P1N2B1P/3B1PP1/R4RK1 w - - 1 20|a6b5 b6d4 f1d1 b8b5|1585|winningMaterial,short|3:b8b5 g5g4
dbqmgw|R2b4/1p1rk1p1/3N1p2/p2p4/rB3n1p/P6P/5PP1/4RK2 b - - 9 31|f4e2 e1e2 e7f8 e2e8|1585|mate,mateIn2,short|
16jhzcu|7k/1pp4p/2n3p1/6RN/4K2N/PB2P2P/5r2/1r6 w - - 6 32|b3a4 g6h5 a4c6 b7c6|1585|winningMaterial,short|
1q890x9|5k2/1p5R/1q4Bp/pb1p3P/3Pr1R1/1P4P1/5PK1/8 w - - 7 41|g4e4 d5e4 h7f7 f8g8|1590|winningMaterial,short|
cyn5x4|r5kr/1pqb1pp1/pn2p2p/3pP3/8/BPb2N1P/P2QBPP1/R1R3K1 b - - 3 20|c3d2 c1c7 d7b5 f3d2|1590|winningMaterial,short|3:f3d2 e2b5 e2d1
ajjvj|r5k1/pp4p1/2p1r2p/2PpNp2/1P1q4/3B1P1n/P1Q3K1/R3R3 w - - 0 30|e5c6 h3f4 g2h2 b7c6|1590|winningMaterial,short|3:b7c6 d4f6 e6c6
jjhsib|2r1kb1r/pb1p1ppp/1p6/n7/2B1P3/3Q2B1/PqPN1PPP/R3K2R w KQk - 0 15|c4f7 e8f7 d3d7 f8e7|1590|advantage,short|
1e9kbl2|r1b2k2/5p2/8/p1Q5/7p/2P4P/1P1K2P1/r7 b - - 3 37|f8e8 c5c6 e8e7 c6a8|1595|winningMaterial,fork,endgame,short|3:c6a8 c6e4 c6c5
9cdglc|5bk1/7p/2P2R2/2r2p2/6PP/7n/5P2/3R2K1 w - - 1 35|g1h1 h3f2 h1g1 f2d1|1595|winningMaterial,fork,endgame,short|3:f2d1
prhn10|1r4k1/8/3R1bpp/2pP1b2/2q5/1P1R1P2/P7/3KQ3 w - - 0 39|e1e8 b8e8 b3c4 f5d3|1595|winningMaterial,short|3:f5d3
grozm3|4bk2/r1p1r1bp/ppB1pn2/4Bp2/2P5/1PNR2P1/P4P1P/4R1K1 w - - 8 27|c3b5 a6b5 c4b5 e8c6|1595|winningMaterial,short|3:e8c6 a7a2 f8f7
1vdowgq|8/5p2/7p/1p3Rk1/2b5/r7/P4R1P/6K1 b - - 1 51|g5h4 f2f4 h4h3 f5h5|1600|mate,mateIn2,endgame,short|
fml5hm|7r/1pp1r1k1/6P1/pP1pPn1R/5p2/P1PBn2P/3N1K2/6R1 w - - 11 35|d3f5 h8h5 f5g4 e3g4|1600|winningMaterial,short|3:e3g4 h5e5 h5g5
7lpk08|r5k1/5p2/1pb2qp1/p3b2p/2P2nB1/2B1Q2P/PP4P1/4NRK1 b - - 3 37|g6g5 c3e5 a8e8 e5f6|1600|winningMaterial,short|3:e5f6 e3f4
1z959p|4r1k1/5p2/1pb1B1p1/p6p/2P2R1q/2P1Q2P/P5P1/4N1K1 b - - 2 40|e8e6 e3e6 h4f4 e6c6|1600|winningMaterial,short|3:e6c6 e6c8
4tl57s|8/8/6pk/6qp/P6P/2PR2P1/1P2rP2/2K5 w - - 0 46|d3d2 g5d2 c1b1 d2b2|1605|mate,mateIn2,endgame,short|3:d2b2
1876aft|r2qk2r/1p3pb1/p1n1pnp1/1N1pN2p/3P4/P3P3/1P1BQPPP/2R1K2R w Kkq - 0 15|e1g1 a6b5 e5c6 b7c6|1605|winningMaterial,short|
yzmhk1|8/1P6/8/1BK5/8/p3kp2/Pr6/8 b - - 1 76|b2a2 b7b8q|1605|winningMaterial,promotion,quietMove,endgame,oneMove|
za428s|6k1/p5pp/2p5/7n/4p1P1/1P5P/PNPq3K/5Q2 w - - 1 30|f1f2 d2f2 h2h1 h5g3|1605|mate,mateIn2,short|3:h5g3
92rmh9|8/2p1k1p1/8/p6p/4P3/5P1P/4Q1P1/q6K w - - 5 48|e2e1 a1e1 h1h2 h5h4|1610|winningMaterial,endgame,short|
12byq6m|8/3bp2Q/p2ppkp1/P1pP4/2P2PP1/4K2P/1r5n/8 b - - 16 42|e6d5 g4g5 f6e6 h7g6|1610|mate,mateIn2,short|3:h7g6
1duk89i|R7/R7/p4p1K/5r2/1P3P2/1kP5/6r1/8 w - - 11 56|a8b8 f5f4 b8b5 a6b5|1610|winningMaterial,endgame,short|
1rdfu4d|3r2k1/2r1bp1p/n7/5p2/1PR2Pp1/6P1/2Np1PBP/3R2K1 w - - 9 32|g2d5 d8d5 c2e3 c7c4|1610|winningMaterial,short|3:c7c4 d5d3
qfdeua|3bk1R1/8/1p1p4/n2Bp2p/4p2P/3r4/3BKP2/8 b - - 1 41|e8e7 d2g5 e7d7 g8d8|1615|winningMaterial,short|3:g8d8 g8g7
1npa5vi|k6r/1p6/p7/2P3p1/2qP2Q1/P6R/8/5KB1 w - - 2 37|g4e2 c4e2 f1e2 h8h3|1615|winningMaterial,endgame,short|
1paqx2b|8/p7/1p2n3/2p2P1k/P4prb/2PP4/1P5R/5K1R b - - 0 39|e6d4 c3d4 g4g3 h2h4|1615|winningMaterial,short|3:h2h4
126pahc|r3k2r/ppq1bppp/2p1bn2/4P3/2Q5/P1N1P3/1P2BPPP/R1B1K2R w KQkq - 1 13|e5f6 e6c4 f6g7 h8g8|1615|winningMaterial,short|
1wn5c9p|2B5/p6R/3r1k1p/3p2p1/2p2P2/6K1/P7/8 b - - 6 50|d6b6 h7h6 f6f7 h6b6|1620|winningMaterial,endgame,short|3:h6b6 f4g5
k300u1|2q5/7k/1Q4p1/p6p/P6P/3R2P1/1PP1rP2/2K5 w - - 1 43|c1b1 c8c2 b1a2 c2d3|1620|winningMaterial,fork,short|
vndck1|3r1rk1/ppBn1pp1/4pn1p/2P5/PP2q3/2P4P/4BPP1/1R1QK2R b K - 2 16|d7c5 c7d8 f6d5 b4c5|1620|winningMaterial,short|3:b4c5 e1g1
w95opv|r3k2r/1pp2p1p/p1npb1p1/2bN3P/1PPpq1nR/P4N2/3K1PP1/R1BQ1B2 b kq - 2 13|c5b4 a3b4 e6d5 c4d5|1620|winningMaterial,short|
h7eb0l|1r5k/p5b1/6B1/1Pp4p/5P2/1NP3P1/1P3K1P/2r2n1R b - - 1 30|b8b5 b3c1 b5b2 f2f1|1625|winningMaterial,short|3:f2f1
928rme|3r1r2/pB3pkp/2p1bp2/4n2N/3q4/5Q2/P4PPP/1R2R1K1 b - - 6 23|g7h8 f3f6 h8g8 f6g7|1625|mate,mateIn2,short|
8irzmd|8/8/8/3k4/8/r3K3/7R/8 w - - 13 75|e3d2 a3a2 d2d3 a2h2|1625|winningMaterial,endgame,short|3:a2h2 a2a3
1b0a4mg|8/8/4k1pB/2b5/5PKp/7P/8/8 w - - 15 50|h6f8 c5f8 f4f5 g6f5|1625|winningMaterial,endgame,short|
187bd9j|r3k2r/pp1nbppp/2p1pn2/q5P1/P2Pb3/2NB1N2/1PP2P1P/R1BQK2R b KQkq - 0 11|e4d3 g5f6 d7f6 d1d3|1630|winningMaterial,short|3:d1d3 c2d3
u3cphg|8/1r2kp1p/4pn2/3P4/6pP/P1K1R1P1/1N3P2/8 w - - 2 33|d5e6 f6d5 c3c2 d5e3|1630|winningMaterial,fork,short|3:d5e3 b7c7
3h06s1|6k1/1pp2pb1/2n1b2p/2N1p2P/2r3p1/P2rP3/1P3PP1/2R1BRK1 w - - 2 26|c1c4 e6c4 c5d3 c4d3|1630|winningMaterial,short|
8fd0si|6k1/1p3p2/2p1p2p/p1bq2p1/P1P1n3/6PP/1P2QPK1/3BB3 b - - 0 31|e4g3 c4d5 g3e2 d1e2|1630|winningMaterial,short|
t8jk7l|4k1r1/p3p3/2p3q1/1p6/5p2/2PR4/PP3PPQ/6K1 w - - 0 38|g1h1 g6d3 h2h3 d3h3|1635|winningMaterial,short|3:d3h3 d3f1
1ysnf5l|r4rk1/p5pp/2p5/8/4pn2/1P4qP/PNP2QP1/4RR1K b - - 1 23|g7g6 f2g3 f4d5 f1f8|1635|winningMaterial,fork,short|3:f1f8 b2c4 g3g4
4n4oll|4k3/r7/2Q1P3/2Pp4/1p1P3P/4P2K/5P2/q7 b - - 4 43|a7d7 c6d7 e8f8 d7f7|1635|mate,mateIn2,endgame,short|3:d7f7
c91hjg|qnbk1bnr/3p1ppp/4p3/2pPN3/4P3/8/P1PB1PPP/R2QK2R b KQ - 1 12|g8f6 e5f7 d8e8 f7h8|1635|winningMaterial,fork,short|
1x7dbpy|1R6/5p2/6pk/8/r7/7Q/5PPK/4q3 b - - 1 48|a4h4 h3h4 h6g7 h4h8|1640|mate,mateIn2,endgame,short|3:h4h8
p1c0ef|6rk/R5p1/6q1/7p/5P2/6K1/P3Q1PP/8 w - - 4 40|e2g4 g6g4 g3f2 g4f4|1640|winningMaterial,endgame,short|
1czl9wf|6k1/2p2pp1/b6p/4nP1N/6P1/B1Pr2KP/PR6/8 w - - 1 35|g3h4 g7g5 f5g6 e5g6|1640|mate,mateIn2,short|
budwer|8/pr3P1p/4K3/8/5P2/P3k3/7P/8 b - - 0 55|h7h5 f7f8q|1640|winningMaterial,promotion,quietMove,endgame,oneMove|
1qc54t8|3R4/8/1n5k/6p1/p3N1P1/P7/2K5/1r6 b - - 5 61|b1f1 d8d6 h6g7 d6b6|1645|winningMaterial,fork,endgame,short|
w4qqyx|8/1k6/4R3/3K1p1p/8/3rP3/8/8 w - - 2 44|d5e5 d3e3 e5f4 e3e6|1645|winningMaterial,endgame,short|
a80xgc|5kr1/2p1n3/2p1pp2/P1Rp3Q/3P1B1R/4P3/r4PPK/1q6 b - - 3 30|g8g2 h2g2 b1e4 h5f3|1645|winningMaterial,short|
qspx7|8/1P4k1/p4n1p/6p1/3K4/8/8/8 b - - 0 61|g7f7 b7b8q|1645|winningMaterial,promotion,quietMove,endgame,oneMove|
1q09i19|8/3K4/8/3Q4/8/3k4/8/4q3 b - - 4 71|d3c3 d5a5 c3b2 a5e1|1650|winningMaterial,endgame,short|
1cv9h0i|rnbqk2r/1pp2pp1/p2bpn1p/4N3/4p3/2N3PP/PPPP1PB1/R1BQK2R w KQkq - 2 8|e5f7 e8f7 c3e4 f6e4|1650|winningMaterial,short|3:f6e4 c8d7 h8f8
ingi07|8/p4p1p/7k/2p1r3/3rBn2/P7/5PPP/1R2R1K1 w - - 3 32|e4h7 e5e1 b1e1 h6h7|1650|winningMaterial,endgame,short|
1v70sg3|2r3k1/ppp2p2/3p4/3PnPP1/6K1/1P6/P2B4/4R3 w - - 1 40|g4f4 e5d3 f4f3 d3e1|1650|winningMaterial,fork,short|
1fivppz|6k1/3R4/1pp2K2/3p1B2/P7/5rP1/8/4r3 b - - 1 45|e1e7 d7d8 e7e8 d8e8|1655|mate,mateIn2,endgame,short|
10v7lt9|r3k1r1/1ppq1p2/6n1/pPPbb2P/3Q2p1/P6B/3NPP1P/R1B1K1R1 w Qq - 0 18|h3g4 e5d4 g4d7 e8d7|1655|winningMaterial,short|
me3w14|r2qr1k1/pp1N2p1/2p4p/2Pp1p2/1P1Pn3/5b1P/P1Q1BPP1/R3R1K1 w - - 0 24|d7b6 f3g2 b6d5 c6d5|1655|winningMaterial,short|3:c6d5
1ahuwpz|r1bq1b1r/p3kp2/n3pp2/1B1p3p/1p1P3P/8/PPP1QPP1/RN2K1NR b KQ - 1 15|h8g8 b5a6 g8g2 a6c8|1655|winningMaterial,short|3:a6c8
1jxbkwh|rn1qkb1r/p2p1ppp/2p1pn2/1b6/6P1/2NP3P/PP2PPB1/R1BQK1NR b KQkq - 1 7|f8c5 c3b5 c6b5 g2a8|1660|winningMaterial,short|
1c7avrr|4r2k/p6p/2p1B1p1/4n3/P5P1/7P/1P3P2/R5K1 w - - 2 35|g1f1 e8e6 a1e1 g6g5|1660|winningMaterial,short|
mtk5b4|r3kb1r/1p3ppp/pqn3b1/3pp1B1/2pPn3/2P3N1/PP1N1PPP/R1Q1KB1R w KQkq - 0 13|d2c4 d5c4 g3e4 g6e4|1660|winningMaterial,short|3:g6e4 h7h6 f7f6
72qwtl|2rb2k1/5ppp/p1p1pn2/N5B1/8/2P3P1/PP3P1P/1R4K1 w - - 0 25|b1c1 d8a5 g5f6 g7f6|1660|winningMaterial,short|
p0b5zv|5rk1/1p1R4/p1p1r1p1/7q/1P5P/P1QR4/5PK1/8 b - - 3 37|f8f2 g2f2 h5h4 d3g3|1665|winningMaterial,short|
f713hn|r6r/pp3p1p/n2pk1pB/1P1Np3/n7/5P2/P1P3PP/2KR3R b - - 0 18|a6b8 d5c7 e6e7 c7a8|1665|winningMaterial,fork,short|3:c7a8
1xqkr70|2b5/P3k3/6p1/8/5p1P/1pK1pB2/8/8 b - - 0 60|c8b7 f3b7 b3b2 b7e4|1665|winningMaterial,endgame,short|
1k8994d|4r3/3R3k/p6p/1p2b3/1P3p2/5r2/2R3N1/6K1 b - - 1 49|h7g6 g2h4 g6h5 h4f3|1665|winningMaterial,fork,endgame,short|
9f3wpa|r5k1/pp6/8/3pq3/Q3n3/4B2r/PP2PP2/1K4R1 b - - 1 25|g8f7 a4d7 f7f8 d7h3|1670|winningMaterial,fork,short|
17fpb17|2k5/1p5p/2pB4/p4pQ1/P7/3qr3/7P/2R2K2 w - - 4 38|f1f2 d3d2 f2g1 d2c1|1670|winningMaterial,fork,short|
1cp51e4|2bq1rk1/rp2ppbp/6p1/p1p5/PnN1B3/1P1Pp1P1/1BPQ1P1P/R4RK1 w - - 0 17|d2e3 b4c2 e3f4 c2a1|1670|winningMaterial,fork,short|3:c2a1 g7b2 e7e5
wzbbwd|8/8/p7/P7/qp1Q1k2/5P2/8/5K2 b - - 6 54|f4g3 d4g4 g3h2 g4h4|1670|mate,mateIn2,endgame,short|3:g4h4 g4g2
2t0sqf|2rr4/p3bk2/5Np1/4B2p/8/7P/P2n1PK1/2R4R w - - 6 35|e5f4 c8c1 h1c1 e7f6|1675|winningMaterial,short|3:e7f6 f7f6
26s1n1|4r1kb/3Q1p1p/4q1p1/8/4r3/2B4P/5PP1/4RRK1 w - - 5 29|d7e8 e6e8 e1e4 e8e4|1675|winningMaterial,endgame,short|
1f67z2v|r4rk1/p3bpp1/4pn2/1Nq1Q2p/3N4/8/PP3PPP/2R1R1K1 b - - 3 25|f6d7 c1c5 d7e5 c5e5|1675|winningMaterial,short|3:c5e5
g77zt8|r2k4/1ppq3p/8/p2bPp1N/P2P4/2B5/2Q3rP/R3K2R w KQ - 0 23|h5f6 g2c2 f6d7 d8d7|1680|winningMaterial,short|3:d8d7
anyi0b|r1b1k2r/p3n1bp/4p1p1/1p1q1p2/2Np4/3P1N1P/PP3PP1/R1BQ1RK1 w kq - 0 14|c4e5 g7e5 f3e5 d5e5|1680|winningMaterial,short|
10thd5q|4k3/2p1n3/2p1Q3/P1Rp2B1/3P2K1/4P3/6P1/4q2r b - - 10 40|e1e3 e6e3 h1h7 a5a6|1680|winningMaterial,short|
1kzll2|R7/1pR3bk/2p5/6n1/pPb2n2/B4K2/P1N5/8 w - - 0 34|f3e3 f4d5 e3f2 d5c7|1680|winningMaterial,fork,short|3:d5c7 g5e4 g5h3
4xzbsn|r4rk1/p3qppp/2p1pn2/8/8/5N2/PPbBQPPP/2R1R1K1 b - - 1 16|f8d8 c1c2 d8d2 e2d2|1685|winningMaterial,short|3:e2d2 c2d2 f3d2
1bhebgy|3r2k1/1b1q1pbp/1pr1p1p1/pN1pP3/n2Q1B1P/2P3P1/4PPB1/1RR3K1 b - - 3 27|c6c5 d4a4 b7c6 c3c4|1685|winningMaterial,short|
13ily05|6k1/5p2/4p1p1/4q2p/1RP4P/5P1K/3Q2P1/r7 w - - 1 48|d2d1 a1d1 b4b8 e5b8|1685|winningMaterial,endgame,short|3:e5b8 g8g7 g8h7
rnory5|8/8/5p2/2PRb3/8/1r3k1K/3B1P2/8 w - - 15 54|d2c1 f3e4 h3g4 e4d5|1685|winningMaterial,endgame,short|3:e4d5 f6f5
1iqtqmk|6k1/Q4r1p/p3q1p1/2Pn1p2/3p1P2/3P3P/5NP1/R5K1 w - - 0 38|a7b6 d5b6 f2e4 f5e4|1690|winningMaterial,short|3:f5e4 f7f8 b6d5
124m47v|r2q2k1/1pp3bp/1n2rpp1/p7/P1p1P3/2Nn3P/1P1BBPP1/R1QR2K1 w - - 6 21|d2e3 d3c1 d1d8 a8d8|1690|winningMaterial,short|
1t02htr|6r1/4k1r1/p3pnP1/1p3p1P/2pP1RP1/2P1p3/PP1N4/R5K1 w - - 0 31|d2e4 f6e4 g4f5 e4f6|1690|advantage,short|
1fyw0l5|8/7P/2R5/1p4k1/7r/6K1/6P1/8 b - - 2 50|b5b4 c6c5 g5g6 g3h4|1695|winningMaterial,endgame,short|3:g3h4
19hwg1|4r1k1/5p2/1pb1q1p1/p6p/2P2R2/2PNQ2P/P5P1/6K1 w - - 0 42|e3e5 e6e5 d3e5 e8e5|1695|winningMaterial,short|3:e8e5
1b1p4hh|rr4k1/pRBb1qp1/3bp2p/2p5/3PQ3/5N2/P1P2P1P/4K1R1 b - - 8 21|d7c8 b7b8 a8b8 c7d6|1695|winningMaterial,fork,short|3:c7d6
1du81td|2rqkb1r/pp2ppp1/2npb2p/3nP3/3P3P/1BN2N2/PP3PP1/R1BQK2R b KQk - 1 10|g7g6 b3d5 e6d5 c3d5|1695|winningMaterial,short|
9ipwg2|8/R1k2p2/1rpb1Pr1/7p/8/4PK1B/8/2R5 b - - 4 47|c7d8 a7d7 d8c8 d7d6|1700|winningMaterial,fork,endgame,short|
16wjb3x|2r3k1/1p4p1/1p4bp/1p1N4/1P2p3/q1P4P/2Q3P1/3R2K1 b - - 2 27|c8a8 d5e7 g8h7 e7g6|1700|winningMaterial,fork,short|
uzo395|5k2/1p3p1p/1P3N2/p3P3/B2r4/b3r3/8/6RK b - - 3 42|e3g3 g1g3 f8e7 g3a3|1700|winningMaterial,endgame,short|3:g3a3
13gs59t|r3k1nr/pp3ppp/2n1p3/3pP3/P3b1PP/B1P1qP2/8/R2QKBNR w KQkq - 1 12|d1e2 e3c3 e1f2 c3a1|1700|winningMaterial,fork,short|3:c3a1
1dhyj20|2r5/7p/pp1pk1p1/1P1Rpp2/PBn2P2/1n4P1/2P4P/2KR4 w - - 1 29|c2b3 c4e3 c1b2 e3d5|1705|winningMaterial,fork,short|
1i79bbf|5bk1/2Rbqpp1/rQ2pn1p/3pN3/3P2PP/1P2P3/5P2/5RK1 w - - 0 25|c7d7 a6b6 d7e7 f8e7|1705|winningMaterial,short|
1cxrt2o|2r5/5pk1/5p1p/1Bp2R1P/5PP1/1P6/n7/2K5 w - - 5 47|c1b1 a2c3 b1b2 c3b5|1705|winningMaterial,fork,short|3:c3b5
1tri62c|8/8/8/p4r2/R2k4/8/5P2/3K4 b - - 12 58|d4c5 a4a5 c5d4 a5f5|1710|winningMaterial,endgame,short|
1xoj9cw|5R2/5ppk/7p/2pn1P1N/1Bb1K1P1/2Pr3P/P7/8 w - - 0 41|f5f6 d3e3 e4f5 g7g6|1710|mate,mateIn2,fork,short|3:g7g6 c4d3
1mf449s|7r/2b2pk1/p2q2p1/3N2Qp/8/4P2P/5PP1/5RK1 w - - 10 35|g5f6 d6f6 d5f6 g7f6|1710|winningMaterial,short|
1texc4f|8/8/1np4R/pp1kNP2/8/2P3K1/4r1P1/8 w - - 6 45|e5d3 e2e3 g3f4 e3d3|1710|winningMaterial,fork,endgame,short|
v7d92|r1bq1rk1/ppp2pp1/1n1bp2p/P3N2P/2pP4/2N1P3/1P3PP1/R2QKB1R b KQ - 0 13|d8e7 a5b6 d6e5 d4e5|1715|winningMaterial,short|3:d4e5 a1a7
1qb3p83|4k1n1/NpRb1p2/p3p2r/3Q3q/P5p1/1r4P1/5PB1/4R1K1 b - - 0 28|g8f6 d5b3 e8f8 c7d7|1715|winningMaterial,short|3:c7d7 b3b7 b3d3
1uac2wo|r2q1rk1/4b1pp/p3p3/n2p1p2/2bP1B2/2P1PN1P/Q3BPP1/2R1R1K1 w - - 5 21|a2a5 d8a5 f3e5 c4e2|1715|winningMaterial,short|3:c4e2 g7g5 c4b5
1pd322q|1R3Q2/5p2/5kp1/4nq1r/4pP2/4P1P1/8/5RK1 b - f3 0 43|e5f3 f1f3 f5c5 f8c5|1715|winningMaterial,endgame,short|3:f8c5 f8d8
6lwz3a|2k4r/ppp1q3/2n3p1/b1Pr1pNp/2Bp3P/P3PPP1/6K1/2RQ1R2 b - - 1 27|h8e8 c4d5 d4e3 d5c6|1720|winningMaterial,short|3:d5c6 d1b3 d5e6
ugetnq|rr4k1/pR1b2p1/3bpq1p/B1p5/3P4/5N2/P1P1QP1P/4K1R1 w - - 5 20|g1g7 f6g7 a5c7 d6c7|1720|winningMaterial,short|3:d6c7 b8b7 c5d4
1ve4d6f|8/8/5p2/4k1pR/8/8/r4P2/6K1 w - - 1 51|h5h1 a2a1 g1g2 a1h1|1720|winningMaterial,endgame,short|
jc7d3s|3r1r2/p2p1n1k/1p1N1qp1/7p/2R5/4R3/PPPQ1PPP/2K5 w - - 1 31|c4f4 f6f4 d6f7 f8f7|1725|winningMaterial,short|3:f8f7 f4f7
bm0i23|2r4r/4p1k1/p4b1p/1p6/1P4QP/4q1P1/P3N1P1/3RK2R b K - 4 26|f6g5 h4g5 h6g5 h1h8|1725|winningMaterial,short|3:h1h8
4oopvt|8/8/4K3/8/2kP4/4N1b1/P7/8 b - - 2 53|c4d4 e3f5 d4c4 f5g3|1725|winningMaterial,fork,endgame,short|
2hkhoe|4r3/3p1nk1/5Rp1/2pQ4/1pPpq3/6P1/1P5P/R6K w - - 1 31|h1g1 e4d5 f6g6 g7g6|1725|winningMaterial,short|3:g7g6 g7h7
e1yooc|5rk1/1p3ppp/pq6/3Q2B1/8/1BP5/P4bPP/4R2K b - - 0 25|a6a5 d5f7 f8f7 e1e8|1730|mate,mateIn2,sacrifice,short|
5vzg85|7r/1p1kb1R1/2n1p3/pNPp2r1/3P3p/P3P3/1P1KB3/7R w - - 1 26|h1h4 h8h4 g7g5 e7g5|1730|winningMaterial,short|
11gubz3|8/8/2k5/8/r6K/6p1/7R/8 w - - 0 68|h4h3 g3h2 h3h2 a4g4|1730|winningMaterial,endgame,short|
1xrz6x8|4R3/P1nrk3/5b2/7B/5K2/4P2P/8/8 b - - 2 45|c7e8 a7a8q|1735|winningMaterial,promotion,quietMove,endgame,oneMove|
6w81tt|3r1k2/1pqn1pp1/2p3n1/7r/1pPPp2p/2Q4P/P2BNPP1/R3R1K1 w - - 0 21|d2f4 g6f4 c3e3 f4e2|1735|winningMaterial,short|3:f4e2 f4g6 f4e6
e2ezfg|2b1r1k1/r2nNpb1/pp4N1/2p4p/P1q1pP2/6PP/1P4BK/RQ3R2 b - - 1 21|e8e7 g6e7 g8h8 e7c8|1735|winningMaterial,fork,short|3:e7c8 b1d1
1s03jhe|3k4/1p3p2/p3P3/P2P4/B1p2Q2/6pb/1P4r1/3N2K1 w - - 1 40|g1f1 g2f2 f1e1 f2f4|1740|winningMaterial,fork,short|
itttpc|8/p3Nk2/6p1/6rp/8/7P/P2n1PK1/3R4 w - - 2 39|g2h2 d2f3 h2h1 f7e7|1740|winningMaterial,endgame,short|
1nrposu|2r3k1/1pN3bp/3r1pp1/p7/P3P3/R2p3P/1P3PP1/3R2K1 w - - 1 28|d1d3 d6d3 a3d3 c8c7|1740|winningMaterial,short|
yngicl|8/8/5R2/P3p3/8/5k1p/r7/6K1 b - - 1 58|f3e2 f6f2 e2d3 f2a2|1740|winningMaterial,endgame,short|
1bgj0wi|3R4/4r1k1/8/6N1/4PnR1/7P/6p1/r5K1 w - - 1 50|g1h2 a1h1 h2g3 g2g1q|1745|winningMaterial,promotion,endgame,short|
j1xymh|5rk1/p2nb1pp/2p3r1/4q3/3pQp2/1P1P2PP/P1PB1P2/4RRK1 w - - 0 26|e4g6 h7g6 e1e5 d7e5|1745|winningMaterial,short|
1qcebl8|r4k1r/1pp1nnN1/1b6/pP1pPbP1/5p2/P1P4P/3NBB2/R3K1R1 w Q - 6 27|g7e6 f5e6 f2b6 c7b6|1745|winningMaterial,short|
wtqvfb|3B4/1p6/6k1/8/6bp/3R4/6K1/7r b - - 1 57|g4f5 d3d6 g6h5 g2h1|1750|winningMaterial,endgame,short|
180v838|r2qkb1r/pppb1ppp/2np1n2/1B1Pp3/4P3/2N2N2/PPP2PPP/R1BQK2R b KQkq - 0 6|a7a6 d5c6 a6b5 c6d7|1750|winningMaterial,short|
1g2xqgm|8/8/3R4/p1p1r3/1p2kr1p/5P2/1PR1K3/8 b - - 0 52|f4f3 c2c4 e4f5 e2f3|1750|winningMaterial,endgame,short|
1bn3mrq|3r1r1k/Q7/2qp3P/2p5/P3P3/2P1BP2/1b1K4/1N4R1 b - - 0 36|c6d5 e4d5 b2c1 d2c1|1750|winningMaterial,short|3:d2c1 d2c2 d2d1
1tub4uh|5N2/4K3/7k/8/8/1p6/p5R1/8 w - - 1 84|f8e6 a2a1q|1755|winningMaterial,promotion,quietMove,endgame,oneMove|
1t7562l|6k1/5p2/p2p4/1p2nPP1/1B6/1P3K2/P7/8 w - - 4 50|f3f2 e5d3 f2e3 d3b4|1755|winningMaterial,fork,endgame,short|
182z9zr|7k/5r2/1Qp1rn1p/1pRq1p2/p2p1P2/3P2RN/PP4P1/7K b - - 13 36|d5c5 b6c5 f6g4 g3g4|1755|winningMaterial,short|3:g3g4 c5d4 h3g1
1uwtqwz|r1b2rk1/pp1nqppp/3b4/3p1N2/P7/1NP1B3/1P2QPPP/R3K2R b KQ - 14 16|e7d8 f5d6 d7e5 d6c8|1760|winningMaterial,short|3:d6c8 e3c5
1pdpaht|r5k1/2p2ppp/1p3r2/p3Q3/2BP1n2/7P/P4Pb1/4R1K1 b - - 1 26|g2d5 e5e8 a8e8 e1e8|1760|mate,mateIn2,sacrifice,short|
1o1sxr|r5k1/2p1Rp2/5Ppp/p7/Pp1NN3/8/2r3PP/5K2 b - - 2 27|b4b3 d4c2 b3c2 e7c7|1760|winningMaterial,short|
kh1l7x|8/6k1/3R4/6p1/p1n3P1/P1N5/2K5/4r3 w - - 10 64|d6d1 c4e3 c2d2 e3d1|1765|winningMaterial,fork,endgame,short|
5w2pu3|1R6/4b3/2P1k3/7p/4b2P/1p6/6K1/5R2 w - - 0 49|g2h2 e7d6 h2g1 d6b8|1765|winningMaterial,fork,endgame,short|
156w4py|8/2k4K/6PN/4R3/8/3q4/p7/8 w - - 0 60|e5f5 a2a1q|1765|winningMaterial,promotion,quietMove,endgame,oneMove|
d0sam5|6k1/1p3p2/2pnp2p/p1b3p1/P1Pq4/2B3PP/1PB1QPK1/8 b - - 4 33|d4f2 e2f2 c5f2 g2f2|1765|winningMaterial,short|
1raik31|1n2kb1r/2r5/pNb1pp2/P1p3q1/1p1pBnNp/1P5P/1BPP1PP1/1R1QR1K1 w k - 0 24|b2d4 c5d4 e4c6 b8c6|1770|winningMaterial,short|3:b8c6 c7c6
1cd5r6f|8/PR6/5k2/5b2/5K2/3p4/4r3/8 b - - 19 64|f5e4 a7a8q|1770|winningMaterial,promotion,quietMove,endgame,oneMove|
v45xqt|2r1kb1r/pbBp1ppp/1pn2q2/3Q4/2B1P3/8/PPPN1PPP/R3K2R w KQk - 3 13|c7e5 f6e5 d5f7 e8d8|1770|advantage,short|
175zx27|r1b1r1k1/1p3pp1/7p/p2pq2P/P2P3R/6P1/1P3P2/1BRQ1K2 b - - 0 24|e5e2 d1e2 e8e2 f1e2|1775|winningMaterial,short|3:f1e2 c1c8
1o86gi8|r3r1k1/2p3np/3p2p1/pNp5/P3b1P1/1P2B2P/2P5/4RRK1 b - - 1 26|h7h5 b5c7 e4c2 c7a8|1775|winningMaterial,fork,short|3:c7a8
w142d3|r4rk1/2q1bpp1/bp2p2p/p1pn3N/3P4/P1P2N2/1P1BQPPP/3RR1K1 w - - 2 18|h5g7 a6e2 e1e2 g8g7|1775|winningMaterial,short|3:g8g7 g8h7
1skgdi3|7k/6r1/7p/2p2p2/Q4Pn1/P2qrNR1/6P1/3R2K1 b - - 1 46|d3d1 a4d1 e3a3 g3g4|1780|winningMaterial,endgame,short|3:g3g4 d1d8 d1d2
nat5fg|4r3/p1k5/2p5/2R5/2np2P1/p5K1/8/R7 b - - 1 47|d4d3 c5c4 d3d2 g3f2|1780|winningMaterial,endgame,short|
1fqirkg|8/7P/8/8/2p1k1p1/P3pp1n/8/2NK4 b - - 0 65|h3f4 h7h8q|1780|winningMaterial,promotion,quietMove,endgame,oneMove|
wg8hef|8/7r/4kB2/2p3N1/2pn4/P4P2/6P1/4K3 b - - 1 38|e6d5 g5h7 c4c3 f6d4|1785|winningMaterial,endgame,short|3:f6d4 h7g5
di8oj5|6k1/3n1pp1/7p/5q2/7r/3RPP1P/4BPK1/3Q4 w - - 2 33|g2g1 f5h3 e3e4 h3h1|1785|mate,mateIn2,short|3:h3h1
dmqsj3|8/8/6B1/8/8/k2K4/7p/8 w - - 0 81|d3d2 h2h1q|1785|winningMaterial,promotion,quietMove,endgame,oneMove|
1h4qr57|8/6p1/4p2p/2R2k2/p6P/4PK2/P7/3r4 b - - 2 48|d1d5 e3e4 f5e5 e4d5|1790|winningMaterial,fork,endgame,short|
1f5e2wk|3n1k2/7p/5P2/7P/B4K2/8/8/8 b - - 24 57|d8c6 a4c6 h7h6 f4e5|1790|winningMaterial,endgame,short|
1cmcgqh|6k1/4Q3/6pp/8/1P2pp2/7P/5PP1/q1r2NK1 w - - 10 45|e7f8 g8f8 g2g4 c1f1|1790|winningMaterial,endgame,short|3:c1f1 f8e7 f8g8
dqtuox|R1b2r2/3k1pp1/B2B3p/3pp2P/3P4/4b3/1P6/5K2 w - - 2 39|a8c8 f8c8 a6c8 d7c8|1795|winningMaterial,endgame,short|3:d7c8
rqkuk0|8/4k3/PRK5/3P4/r6p/2n4P/8/8 w - - 0 81|c6c7 c3d5 c7c6 d5b6|1795|winningMaterial,fork,endgame,short|3:d5b6
12ygtrk|2N5/1p4k1/3n3p/3P3K/pb2r3/8/P7/6R1 b - - 10 50|e4g4 g1g4 g7f6 g4b4|1795|winningMaterial,fork,endgame,short|3:g4b4 g4f4 c8b6
1qhu3kz|6k1/8/p4pP1/1p1pnP2/1B2K3/1P6/P7/8 w - - 0 52|e4f4 e5d3 f4e3 d3b4|1795|winningMaterial,fork,endgame,short|
ghg6hi|8/1R3k2/p3r2p/P3n1pN/8/8/4K3/8 b - - 6 55|f7e8 h5g7 e8d8 g7e6|1800|winningMaterial,fork,endgame,short|
1lsb6rv|2r5/7R/4p1Rb/p2r4/P5Pk/8/5P2/4K3 b - - 1 39|d5h5 g4h5 c8c1 e1e2|1800|winningMaterial,endgame,short|
1petfif|7k/5R2/2r1pN1r/3p2K1/3P4/5P2/8/8 b - - 5 52|e6e5 g5h6 c6f6 f7f6|1800|winningMaterial,endgame,short|
q4d32l|8/8/4Nk1Q/8/8/8/4K3/4n1q1 b - - 4 60|f6f5 e6g7 g1g7 h6g7|1805|winningMaterial,sacrifice,endgame,short|
fs13sd|8/8/8/6P1/4qQK1/1k6/8/8 b - - 7 65|e4d5 f4f3 d5d3 f3d3|1805|winningMaterial,fork,endgame,short|
a81c3i|8/5k1p/6p1/8/1Br5/P3K2P/1R4b1/8 b - - 1 47|g2f1 b2f2 f7e6 f2f1|1805|winningMaterial,fork,endgame,short|
1ldq59s|8/3b2pk/p4p1p/q6P/4Q3/4N3/8/6K1 b - - 1 45|a5f5 e3f5 d7f5 e4f5|1810|winningMaterial,endgame,short|3:e4f5
11vyucc|2r5/1p3k2/p7/3p1P2/3BP3/8/PP3r2/1K1R4 b - - 0 36|c8c2 d4f2 c2f2 d1d5|1810|winningMaterial,endgame,short|
uzpub3|8/p7/1p4k1/2p4p/2P1PQn1/2B3P1/4q3/6K1 b - - 4 45|e2f2 f4f2 g4f2 g1f2|1810|winningMaterial,endgame,short|
zs1e2u|1r1q1rk1/pb3pp1/2pb2p1/4Q3/1P1pP3/3P3P/P2B1PB1/1R2R1K1 w - - 1 22|e5d4 d6h2 g1h2 d8d4|1815|winningMaterial,sacrifice,short|
1dhciz2|3r1b2/1R1b2N1/k4p2/4p3/P3B1K1/5P2/2P4P/8 w - - 1 41|g4g3 f8g7 e4c6 d7c6|1815|winningMaterial,endgame,short|3:d7c6
z4xxrj|2r2rk1/1b1nppbp/6p1/qp1B4/3N4/4PNBP/PP3PP1/2RQK2R w K - 1 17|d1d2 c8c1 e1e2 a5d2 e2d2 c1h1|1815|winningMaterial,long|
r5r1x3|8/1p6/7p/P3k2P/1N5K/6p1/4n1P1/8 w - - 4 47|b4a6 b7a6 h4g4 e5e4|1820|winningMaterial,endgame,short|
tbhe4f|5N2/p4P1R/4p3/6kp/8/8/5r2/3K4 w - - 3 56|f8g6 g5g6 f7f8n f2f8|1820|winningMaterial,endgame,short|
d7ys40|r2qk2r/1p1n1bp1/5b1p/1Pp1pp2/1n6/P1NP1N1P/1Q1BBPP1/R4RK1 b kq - 0 18|e8g8 a3b4 a8a1 f1a1|1820|winningMaterial,sacrifice,short|
f20p7|r4rk1/1bqn1p1p/p2pp1pb/2p5/P2PPn2/N1PB1N1P/4QPPB/RR4K1 w - - 9 17|e2d2 f4h3 g2h3 h6d2|1825|winningMaterial,sacrifice,short|
15uowg8|5r1k/5qb1/p3b2p/3P1n1p/4BQ1B/3P2P1/P4P1N/5R1K b - - 0 27|f5h4 d5e6 f7f4 g3f4|1825|winningMaterial,sacrifice,short|
clgv07|r6r/ppNkbppp/2p2n2/4P3/2b5/P3P3/1P1KBPPP/R6R w - - 2 17|e2c4 f6e4 d2d3 e4c5 d3e2 d7c7|1830|winningMaterial,long|
udge5n|8/2kbpQ1p/3p1np1/8/4P1PP/3B1P2/2P5/rqBK3R w - - 3 25|f7f8 b1c1 d1e2 c1h1 f8d8 c7d8|1830|winningMaterial,long|
gts3lk|2rr2b1/pp2k2p/1n4p1/1P3pN1/P7/4PBN1/2nR1PPP/5RK1 w - - 6 27|g3f5 g6f5 d2d8 c8d8|1830|winningMaterial,sacrifice,short|3:c8d8
ndzic2|k4r2/pp4p1/2q5/2P1p3/3P2Q1/P1P2R2/8/2B4K w - - 3 29|c1g5 c6f3 g4f3 f8f3|1835|winningMaterial,fork,sacrifice,endgame,short|
vk6prd|8/7k/6b1/4Q3/4P1q1/8/6KP/8 w - - 4 78|g2h1 g6e4 e5e4 g4e4|1835|winningMaterial,sacrifice,endgame,short|
161ewzm|r1b1r1k1/2p2pp1/2p1n2p/p3q3/4PPP1/2p1B1NP/PP3Q2/R2R2K1 b - - 0 21|c3b2 f4e5 b2a1q d1a1|1835|winningMaterial,sacrifice,short|
14nxudo|r1q2bk1/1pp3rn/3p2N1/p3P2Q/8/2P4P/PP4P1/R4RK1 b - - 0 33|b7b6 f1f8 c8f8 g6f8|1840|winningMaterial,fork,sacrifice,short|
1ytff88|3rR1k1/pp3rpp/1b3p2/3p1p1P/3P1P2/PB2R1P1/1P6/1K6 b - - 2 33|d8e8 e3e8 f7f8 b3d5 g8h8 e8f8|1840|mate,mateIn3,long|
1299tvo|r1bqkb1r/1ppp1p2/p1n2np1/4p3/1P6/2PP1NP1/P1Q1PPB1/R1B1K1NR b KQkq - 0 11|c6b4 c3b4 h8h1 g2h1|1840|winningMaterial,sacrifice,short|
1k7y4ty|2b4Q/p2kpp2/2r5/1qp2P2/5R2/3PB1p1/2P1K1Pn/N7 b - - 3 31|c8a6 a1b3 h2f1 f4f1|1845|winningMaterial,quietMove,short|3:f4f1 e2f1 b3c5
1jd2jek|5k2/Q4p1p/p2pp1p1/1p4Nq/3r1PP1/4K3/Pb5P/8 b - - 4 29|f8e8 a7f7 e8d8 g5e6 d8c8 f7c7|1845|mate,mateIn3,fork,long|
r9gats|7k/2q3p1/p2nRrBp/1p1Q3P/2pp4/P2P4/1PP3K1/8 b - - 5 39|c7d8 e6e8 d8e8 g6e8|1845|winningMaterial,fork,sacrifice,short|
1q81o0r|5k2/5p2/8/2r1PN1p/1pPR1P1P/pb6/8/1K6 b - - 14 42|b3a4 d4d8 a4e8 f5d6 f8e7 d8e8|1850|winningMaterial,long|
1pj06zw|r1b1kb1r/pp1n1pp1/2p1pn1p/q7/2QP1B2/5NP1/PP2PP1P/RN2KB1R w KQkq - 4 9|c4c3 f8b4 f3d2 b4c3|1850|winningMaterial,quietMove,short|3:b4c3 g7g5
121jpkc|r2q2k1/p4pp1/2p1p2N/7n/b6B/2P3Q1/5PPP/4R1K1 b - - 0 26|g8h8 h6f7 h8g8 f7d8 h5g3 h2g3|1850|winningMaterial,fork,long|5:h2g3 f2g3
1vjtqry|8/3bp2Q/p2ppkp1/P1pP4/2P1nPP1/7P/1r6/6K1 b - - 2 35|b2a2 g4g5 f6f5 h7f7 e4f6 g5f6|1855|winningMaterial,long|5:g5f6
t8xrc|8/5ppk/8/8/P1r1q3/8/5PPQ/1R4K1 b - - 26 43|h7g8 b1b8 c4c8 b8c8 e4e8 c8e8|1855|mate,mateIn3,endgame,long|
vnf14z|5k2/1B2np2/2b1p3/r7/2R3p1/6P1/5PK1/8 w - - 0 38|g2g1 a5a1 c4c1 a1c1 g1h2 c1h1|1860|mate,mateIn3,endgame,long|5:c1h1
1va0xec|4k3/pp1rbpp1/4p3/1N1n4/r2n3p/P4B1P/1P1B1PP1/2RR2K1 w - - 0 22|f3d5 d4e2 g1f1 e2c1 d1c1 e6d5|1860|winningMaterial,fork,long|5:e6d5
1exp9nl|r1b2rk1/p3n1b1/q1n1p1p1/1ppP3p/5P2/P1P1N1P1/1P1N2BP/R1B1KQ1R b KQ - 0 17|c6a5 d5d6 a6d6 g2a8|1860|winningMaterial,quietMove,short|3:g2a8
1afomvg|6k1/r1p2pp1/pp1n3p/6q1/6n1/P4Q2/2P1B1PP/3R2BK b - - 8 27|g7g6 f3g4 g5g4 e2g4|1865|winningMaterial,sacrifice,short|
c8obtp|3r2k1/8/5R2/p4N2/1p4P1/8/bP3P1P/3rR1K1 w - - 3 33|f5h6 g8g7 g4g5 d1e1|1865|winningMaterial,quietMove,short|
17sf71z|2rqk2r/3npNb1/p6p/1p6/1P4pP/3QP1n1/P3NPP1/3RK2R b Kk - 0 19|d8c7 f7h8 g7c3 e2c3 d7e5 d3d4|1865|winningMaterial,long|
1oirqvs|8/3p4/k2Q4/1q2B2P/p3PK2/5P2/8/7r b - - 3 56|a6a5 e5c3 b5b4 d6b4 a5a6 c3d4|1870|winningMaterial,endgame,long|
rhsnlu|r2rq1k1/2p2pbp/p1n3p1/1pQ2b2/4N1n1/1PP3P1/P1N1PPBP/R1B2RK1 w - - 4 18|f2f3 g7f8 c5f2 g4f2|1870|winningMaterial,quietMove,short|3:g4f2
12twtmp|4r2k/1pr5/p1Pp3p/6pP/1P2PP2/3B2PK/q2B4/b1RQ4 b - - 1 36|a2e6 f4f5 e6e5 c1a1|1875|winningMaterial,quietMove,short|3:c1a1 c6b7
2bjecu|5rk1/1R1R3p/7p/8/3b4/1P1P2PK/2P5/r7 b - - 7 37|d4b6 d7g7 g8h8 g7h7 h8g8 b7g7|1875|mate,mateIn3,endgame,long|5:b7g7
6azxo|3qk2r/1p1b1p2/p7/P1pP2n1/4PR2/3B2p1/1P2Q2P/3NN2K w k - 0 32|e4e5 h8h2 e2h2 g3h2|1875|winningMaterial,fork,sacrifice,short|
1te14he|5rk1/1p1R4/p1p1r1p1/8/1P5P/P1Q2PR1/4q1K1/8 w - - 1 40|g2h1 e2f1 h1h2 e6e2 g3g2 f1g2|1880|mate,mateIn3,long|5:f1g2
m3frwd|r1b1k2r/pp1qbpp1/4p2p/3nn3/P1B1Q3/2P5/1P2NPPP/R1B1K2R w KQkq - 0 13|c4d5 d7d5 e4d5 e6d5|1880|winningMaterial,sacrifice,short|
1vzet3e|r1bqkbnr/ppp2ppp/2np4/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5|c1g5 f7f6 f3d4 f6g5|1880|advantage,quietMove,short|3:f6g5
1t3h36z|6k1/1b3pp1/4p3/1Pp1P1P1/p1P3QK/8/P4q2/1R2N3 w - - 9 41|h4h5 g7g6 h5h6 f2h2 g4h3 h2h3|1885|mate,mateIn3,long|5:h2h3
1kpzg2o|r1bqk1nr/ppppppbp/2n3p1/3P4/4P3/P7/1PP2PPP/RNBQKBNR b KQkq - 0 4|c6e5 f2f4 g8f6 f4e5|1885|winningMaterial,quietMove,short|3:f4e5 b1c3
u4nbjd|2R1k3/4b3/4p3/N4p1p/4r3/4PK2/6PP/8 b - - 1 35|e7d8 a5b7 e8e7 c8d8|1890|winningMaterial,quietMove,endgame,short|3:c8d8 b7d8
1ydgegr|5bk1/1p1q4/5BpP/p3p3/3pP3/2r5/6QK/6R1 b - - 4 52|c3h3 g2h3 d7h3 h2h3|1890|winningMaterial,sacrifice,endgame,short|
1jkyvce|5r1k/p2n3p/1p6/6Q1/7P/3P3R/bPq2PP1/4RK2 w - - 0 29|f2f3 f8g8 b2b3 g8g5|1890|winningMaterial,quietMove,short|3:g8g5 a2b3 c2d3
1eenmzw|r7/2p2pk1/5np1/4p2p/3qP2P/3P3N/4BPP1/3Q1K1R w - - 0 29|g2g3 a8a1 f1g2 a1d1|1895|winningMaterial,quietMove,short|
3s08kq|5bk1/1p3ppq/4p3/p2pP1P1/P2P1NQ1/1P5R/2r2P1K/8 b - - 4 44|h7e4 g4h4 c2f2 h4f2|1895|winningMaterial,quietMove,short|
qszv6z|4r2k/1p3p2/1q3np1/p2p4/7P/P1P2P2/1PB2P2/1R2Q1K1 w - - 1 26|e1c1 e8e2 c1f1 e2c2|1900|winningMaterial,quietMove,short|3:e2c2
mda3ws|8/2p3r1/2P1pk1R/8/p4r2/3R4/5P2/5K2 b - - 2 38|f6e7 d3d7 e7e8 d7g7 f4f7 g7f7|1900|winningMaterial,endgame,long|5:g7f7 h6h8
1ff2ldj|6k1/5pp1/p1bQ3p/P3nNqP/2P1P2R/1r4P1/6BK/8 b - - 0 32|e5d3 f5e7 g8h7 d6d8 b3b8 d8d3|1905|winningMaterial,fork,long|5:d8d3
dl6mmb|2r1kb1r/1pq2p2/p3pp1p/3p4/3P1B2/3N3P/PPn1QPP1/2R2NK1 b k - 1 19|c7d7 c1c2 c8c2 e2c2|1905|winningMaterial,sacrifice,short|
158v7l8|5k2/Q4p1p/p2pp1p1/1p4Nq/5PP1/5K2/Pb1r3P/8 b - - 0 27|f8e8 a7f7 e8d8 g5e6 d8c8 f7c7|1905|mate,mateIn3,long|
w9ygkp|3rr1k1/pB3p1p/6p1/5b2/P2b2P1/7P/1P3P1B/R4RK1 b - - 0 22|f5d7 h2c7 d8b8 c7b8|1910|winningMaterial,quietMove,short|
1lpdjm4|2r5/1p2Rpkp/p4Pp1/8/2q5/P1N2b1P/1P1Q1P2/6K1 b - - 0 30|g7g8 d2h6 c4f1 g1f1|1910|winningMaterial,quietMove,short|
17nkun1|8/2R5/3k3P/p7/P7/6K1/2p1r3/8 w - - 13 60|c7c3 e2e3 c3e3 c2c1q|1915|winningMaterial,fork,sacrifice,promotion,endgame,short|
1v8jqiq|2Q5/4k3/2p1P3/2Pp4/1p1P3P/4P2K/rq3P2/8 b - - 0 40|b2f2 c8d7 e7f8 e6e7 f8g8 e7e8q|1915|winningMaterial,promotion,long|
a6cs3|1r4k1/1p3pp1/p3p2p/1q2n3/7P/1P2Q1P1/5P2/3R1BK1 b - - 1 30|e5g4 e3f4 b5e8 f4g4|1915|winningMaterial,fork,quietMove,short|
n2ox96|rnb1k1nr/ppp2ppp/8/3qp3/8/2N5/PPPB1PPP/R2QKB1R b KQkq - 2 11|d5c6 f1b5 c8d7 b5c6|1920|winningMaterial,quietMove,short|
10eu3ui|6n1/8/8/2p2PP1/8/2k3K1/8/8 b - - 0 55|c3d2 f5f6 g8f6 g5f6|1920|advantage,quietMove,endgame,short|
txxj3q|r5k1/5pB1/1R4p1/3r2QP/2q1p3/3nP1P1/5P2/5RK1 w - - 1 36|g5h6 d5h5 h6h5 g6h5|1925|winningMaterial,sacrifice,short|
bt5kpv|1kr5/1q5p/3Q2p1/5p2/P2P4/P3P3/3B2PP/6K1 b - - 2 32|c8c7 d2a5 g6g5 a5c7|1925|winningMaterial,quietMove,short|3:a5c7 d6c7 a5b6
kx566z|r4rk1/pb3ppp/4pn2/2N5/3Q4/2N2q2/PP3P1P/2KR2R1 b - - 9 22|a8b8 c5d7 g8h8 d7b8|1930|winningMaterial,fork,quietMove,short|3:d7b8 g1g3 d7f8
wqox6l|8/3bp2Q/p2ppkp1/P1pP4/2P1nPP1/7P/6K1/1r6 b - - 8 38|e6e5 g4g5 f6f5 h7f7 e4f6 g5f6|1930|winningMaterial,long|5:g5f6 f4e5
1wz0j96|R7/7k/p4p2/1p1p4/3PP3/5P1p/8/2K5 w - - 6 42|e4d5 h3h2 c1d2 h2h1q|1930|winningMaterial,promotion,quietMove,endgame,short|
1ey9872|3Q2k1/2p2p1p/4q1p1/1p6/r7/2P3P1/P1b1P2P/R4RK1 b - - 1 30|e6e8 d8e8 g8g7 f1f7 g7h6 e8f8|1935|winningMaterial,long|
2bthia|8/7p/rp2k1p1/n2p1p2/PB1R1P2/1K4P1/2P4P/8 w - - 2 35|b3b2 a5c6 b4c3 c6d4|1935|winningMaterial,quietMove,short|3:c6d4
1dlmww3|6k1/pR5p/6p1/1p1B4/1P3rP1/3P4/2rb3P/5R1K b - - 0 28|g8f8 f1f4 d2f4 b7f7 f8e8 f7f4|1940|winningMaterial,fork,long|
hmx77p|rn1qkb1r/pbp1pp2/1p1p2pp/7n/Q1PP3P/2N1P3/PP3PPB/R3KBNR b KQkq - 5 8|b8c6 d4d5 d8d7 d5c6|1940|winningMaterial,fork,quietMove,short|3:d5c6 c4c5
138x15q|8/5k2/2P2p2/p1r4r/7p/1PK4P/4Q3/8 w - - 14 64|c3d4 h5d5 d4e3 d5e5 e3d2 e5e2|1945|winningMaterial,endgame,long|5:e5e2 e5d5 c5d5
1cltkct|7R/2k5/1np5/pp2NP2/8/2P3K1/4r1P1/8 w - - 2 43|h8e8 b6d7 g3f4 d7e5|1945|winningMaterial,quietMove,endgame,short|3:d7e5 e2e5 a5a4
whi00l|6k1/5p2/4p1pp/1q6/3b1P2/8/2R4P/RKQ5 w - - 8 41|b1a2 b5a4 c1a3 a4c2 a3b2 c2b2|1950|mate,mateIn3,endgame,long|5:c2b2
1ntogo5|7r/5k1p/4pp1R/1RP1n1p1/6P1/3KP3/r2N1PP1/8 w - - 1 31|d3e4 a2a4 b5b4 a4b4 d2c4 b4c4|1950|mate,mateIn3,long|5:b4c4
13owft4|r3r1k1/5ppp/p7/1b4b1/7P/P1B2QP1/1P3P2/R3K2R w KQ - 1 23|f3e4 e8e4 e1d1 b5a4 b2b3 a4b3|1955|mate,mateIn3,long|
1v5e2cu|8/8/6p1/1R3pk1/r7/6Q1/5PPK/4q3 b - - 1 50|a4g4 f2f4 g5f6 g3e1 g4h4 e1h4|1955|winningMaterial,endgame,long|5:e1h4 h2g1 h2g3
1xhsb4e|r1b2rk1/pp3ppp/1b5q/8/3BN3/P3R3/1PQ2PPP/4K2R w K - 5 22|d4g7 g8g7 c2c3 f7f6 e1g1 b6e3|1955|winningMaterial,long|5:b6e3 g7h8 c8f5
17s101z|r1bq1r1k/1p3ppp/4pb1B/p2n4/2BPN1Q1/8/PP3PPP/R2R2K1 w - - 10 18|h6f4 e6e5 d4e5 c8g4|1960|winningMaterial,quietMove,short|
1bge29w|2q2rk1/pp2n1p1/1n2ppb1/1B1pP1Qp/3P3P/1N3P2/PP2N1P1/4K2R w K - 0 18|g5f4 a7a6 e5f6 a6b5|1960|advantage,quietMove,short|3:a6b5
mclyw2|8/p1k1r2p/1ppRB3/4P3/1P2Kp2/P1n5/7P/8 w - - 4 35|e4f3 c3b5 d6d3 e7e6|1965|winningMaterial,quietMove,short|
129ears|8/5R2/6pk/7p/2r4P/5PP1/5QK1/2q5 w - - 1 59|f7a7 c4c2 a7a2 c2f2|1965|winningMaterial,fork,quietMove,endgame,short|
1o84p07|2r5/P1R5/4kp2/3p1b2/5K2/P1P5/8/8 b - - 7 41|c8f8 c7c6 e6d7 c6a6 f8a8 f4f5|1970|winningMaterial,endgame,long|
4pc9ve|8/3k4/2pPr2p/p4K2/P7/1R6/7P/8 b - - 1 42|c6c5 b3b7 d7d6 b7b6 d6d5 b6e6|1970|winningMaterial,endgame,long|
vbh31r|8/4R3/1p4pk/1P3b1p/7P/2Nr1P2/1P2K3/8 b - - 0 34|g6g5 e7e5 g5h4 e5f5|1975|advantage,quietMove,endgame,short|
i308a1|5rk1/1b1p1pp1/1p2q3/1Q6/3NNB1p/3P3P/5KP1/8 b - - 8 23|e6e7 f4d6 e7d8 d6f8|1975|winningMaterial,quietMove,short|3:d6f8
tloz3x|6k1/p5p1/R7/2pr2N1/8/1bP3P1/5PP1/6K1 w - - 3 33|a6g6 b3c2 g6a6 d5g5|1980|winningMaterial,quietMove,endgame,short|3:d5g5 c2d3
18mk1ym|1n1qk2r/r3bppp/2p5/pp1P1p2/2p2P2/2N2BP1/PP3P1P/R2Q1RK1 b k - 0 14|c6d5 d1d4 e8g8 d4a7|1980|winningMaterial,quietMove,short|
12e9xz2|7r/1p2kp1p/4pn2/r1P5/N1P3pP/Pn1NR1P1/1K3P2/3R4 b - - 0 24|h8a8 a4b6 b3d4 b6a8|1985|winningMaterial,quietMove,short|3:b6a8 d3b4
149q5om|8/8/P7/5k2/2pK4/8/2rp4/3R4 w - - 0 64|d1h1 c2c1 a6a7 c1h1|1985|winningMaterial,quietMove,endgame,short|3:c1h1
4ptxv9|8/8/6rP/Rpk5/3b4/8/P5PN/7K w - - 3 57|g2g3 c5b4 a5b5 b4b5|1990|winningMaterial,quietMove,endgame,short|
rxivbv|2r5/2BR4/p4p2/5k2/7p/5P1P/5Kn1/8 b - - 7 60|c8c7 d7c7 g2f4 c7c5 f5g6 f2e3|1990|winningMaterial,endgame,long|
26c5rp|2kr3r/1pp2p1p/p1n1b1p1/2pN3P/2P1q1nR/PQ1p1N2/3K1PP1/R1B2B2 w - - 0 16|a1b1 c6a5 b3d3 e6d5|1995|advantage,quietMove,short|3:e6d5
bk88f1|4rk2/pp6/8/2Bp1P2/8/8/PP2P2r/1K2R3 b - - 4 32|e8e7 f5f6 f8e8 f6e7|2000|winningMaterial,quietMove,endgame,short|3:f6e7 c5e7
s3bcp2|7r/2b2pk1/p5p1/3N3p/5P2/7P/5PP1/5RK1 b - - 0 36|h8c8 f1c1 a6a5 d5c7|2000|winningMaterial,quietMove,short|3:d5c7 c1c3
1jjddlz|6k1/8/1r2PK2/5P2/8/8/1p6/3R4 w - - 3 80|d1f1 b2b1q f1b1 b6b1|2005|winningMaterial,promotion,quietMove,endgame,short|
19gtben|6bk/8/3Q1Ppp/p3p1Pn/P2pP3/7N/6BP/2q4K w - - 1 43|g2f1 c1f1 h3g1 h5f4 h2h3 f1g2|2005|mate,mateIn3,fork,long|5:f1g2
1qpknl8|3k4/4Rp1p/pnpr4/1p6/6N1/2P5/PP3PP1/6K1 w - - 0 35|e7e4 f7f5 e4f4 f5g4|2010|winningMaterial,fork,quietMove,short|3:f5g4 d6d1
3n98za|2r2rk1/pp3pp1/3b3p/1N1Pp3/6b1/1P1B2P1/P5PP/4RR1K b - - 0 19|d6b4 e1e4 g4d7 e4b4|2010|winningMaterial,fork,quietMove,short|
1c6o0c1|6k1/pp2Rqp1/2p5/2np2Bp/7P/6P1/PPP5/2KR4 b - - 6 36|f7f2 g5e3 f2f8 e3c5|2015|winningMaterial,fork,quietMove,short|
qtc3sf|8/3K4/1k3P2/8/7p/7p/8/8 w - - 0 52|d7e8 h3h2 f6f7 h2h1q|2015|winningMaterial,promotion,quietMove,endgame,short|
1ozt78r|8/8/p4pk1/P7/5n1p/4BP1P/r5PK/3R4 b - - 14 47|a2g2 h2h1 g2g3 e3f4|2020|winningMaterial,quietMove,endgame,short|
80e0i4|8/1p1k4/1B1pp3/P4p1p/r3p3/6P1/2K4P/1R6 b - - 2 38|h5h4 c2b3 a4a5 b6a5|2020|winningMaterial,quietMove,endgame,short|
1ql160m|6k1/8/1r2PK2/8/5P2/8/1p6/1R6 w - - 1 78|b1d1 b2b1q d1b1 b6b1|2025|winningMaterial,promotion,quietMove,endgame,short|
hpmpiw|k7/1p6/p7/2P3pQ/3Pq2r/P4RK1/5B2/8 w - - 12 42|c5c6 h4h5 f3f8 a8a7 d4d5 b7b6|2030|winningMaterial,endgame,long|
ybfopw|2r5/p7/1p1Nn3/2p4k/P3Pprb/2PP4/1P5R/5K1R b - - 0 37|c8c6 d6f5 h5g5 f5h4|2030|winningMaterial,quietMove,short|3:f5h4 h2h4 f1e2
xx0rbd|4k1nr/Np1b1p2/pr1bp3/3p3q/P2Q2p1/1P4B1/5PBP/2R1R1K1 b k - 5 25|g8e7 d4b6 d6g3 h2g3 h5h2 g1f1|2035|winningMaterial,long|
5ibcid|1k6/1P2R3/2K1p3/5p1p/8/4P3/4r3/8 b - - 3 40|e2d2 e7e8 d2d8 e8d8 b8a7 d8a8|2035|mate,mateIn3,endgame,long|5:d8a8
1ohfpfx|4b2R/8/3k4/p1p5/P1P5/1K1B2P1/8/2r5 b - - 7 46|c1d1 d3e2 e8a4 b3a4|2040|advantage,quietMove,endgame,short|
o6rw4q|6kb/5p1p/4r1p1/8/8/2B4P/5PP1/5RK1 w - - 0 31|f1e1 h8c3 e1e6 f7e6|2045|winningMaterial,sacrifice,endgame,short|
1xo3rsb|6k1/R5pN/8/2pb4/5P2/2Pr2P1/6PK/8 w - - 3 38|a7e7 g8h7 c3c4 d5c4 e7c7 d3d5|2045|winningMaterial,endgame,long|
18i4f7y|r6k/pR4p1/2q4p/8/5P2/5K2/PQ4PP/8 w - - 2 35|f3e2 c6g2 e2e3 a8e8 b2e5 e8e5|2050|winningMaterial,endgame,long|5:e8e5
1ld0rig|4r2k/1p4r1/p1Pp1Q1P/6B1/1Pq1P3/6PK/8/8 b - - 0 43|c4e6 f6e6 e8e6 h6g7 h8g7 c6c7|2050|winningMaterial,endgame,long|
54lvo7|6k1/3n1p2/6pp/6q1/8/4PP1P/3QBP2/7K b - - 0 38|d7e5 f3f4 g5f6 f4e5|2055|winningMaterial,fork,quietMove,endgame,short|
l3xv85|8/8/8/8/8/pkRK4/8/8 b - - 8 76|b3a2 d3c2 a2a1 c3a3|2060|mate,mateIn2,quietMove,endgame,short|3:c3a3
1dh2nrg|1R6/3P2k1/4b3/7p/B6r/8/8/6K1 b - - 1 43|h4d4 d7d8q d4d8 b8d8|2060|winningMaterial,promotion,quietMove,endgame,short|
xk3uaf|8/8/6k1/1P4p1/6Pp/2r2K1P/1R1p1P2/8 w - - 0 50|f3g2 d2d1q b2b1 d1b1|2065|winningMaterial,promotion,quietMove,endgame,short|
1y92ego|4r3/r2nNpbk/pp6/2p4p/P1q1pP2/6PP/1P4BK/RQR5 b - - 3 24|c4b3 b1e4 h7h8 e7g6 f7g6 e4e8|2070|winningMaterial,sacrifice,long|
tfkyp5|rnbqkb1r/pp3ppp/3p1n2/1B2p3/3NP3/2N5/PPP2PPP/R1BQK2R b KQkq - 1 6|b8c6 d4c6 b7c6 b5c6 c8d7 c6a8|2070|winningMaterial,fork,long|5:c6a8
1951aj5|4r2k/1pr5/p1Pp4/6BP/1PB1P3/2q3PK/8/5Q2 b - - 0 41|c3g7 g5f6 e8e5 f6g7|2075|winningMaterial,fork,quietMove,short|3:f6g7 g3g4
7zhpsc|6k1/1r6/4PK2/5P2/8/8/1p6/1R6 w - - 9 83|b1d1 b2b1q d1b1 b7b1|2080|winningMaterial,promotion,quietMove,endgame,short|
1qaumo2|3bR3/P1nr4/3k2K1/7B/8/4P2P/8/8 b - - 6 47|c7a8 h5g4 d7a7 e8d8|2080|advantage,quietMove,endgame,short|
5vnicq|2r1kb1r/p2p1ppp/1pB5/n7/4P3/3Q2B1/PqPN1PPP/R3K2R b KQk - 0 16|b2a1 e1e2 a5c6 h1a1|2085|winningMaterial,sacrifice,quietMove,short|
v4dqzk|k6r/pnQ3pp/2p5/2q3r1/P3R3/8/2P2P1P/1R3K2 b - - 1 29|b7a5 e4b4 c5b4 b1b4|2090|winningMaterial,sacrifice,quietMove,short|
mgty1h|7k/6p1/4p3/1p2q1b1/1Pr1PN2/4PK2/R7/8 w - - 0 45|a2d2 e5e4 f3f2 g5f4 e3f4 e4f4|2095|advantage,fork,endgame,long|
orr3bw|4Nb2/2P2P2/1k2K3/8/r3B3/8/8/8 b - - 0 73|a4e4 e6d5 e4e1 c7c8q|2095|winningMaterial,promotion,quietMove,endgame,short|
1iq3bdx|2B5/8/R2r2kp/6p1/3p1P2/2p3K1/P7/8 b - - 1 53|d6a6 c8a6 g5f4 g3f4 g6f6 a6d3|2100|winningMaterial,endgame,long|
arcuur|r4rk1/1p3pp1/1q2pn1p/pb1pN3/Pn1P4/R1N1P3/1P2QPPP/4R1K1 w - - 0 18|e2b5 b6b5 a4b5 b4c2 e1a1 c2a3|2105|winningMaterial,fork,long|5:c2a3 c2a1 a5a4
1hnu9he|2r5/1p3p1p/p4kp1/3Q4/7q/PP2R2P/5P2/6K1 b - - 0 34|h4f4 e3f3 f4f3 d5f3|2105|winningMaterial,sacrifice,quietMove,short|
115vl8t|r4k1r/4bppp/pp3n2/2pqn2P/1P6/P2pPPN1/3P1P2/R1BQKB1R w KQ - 2 17|h5h6 e5f3 d1f3 d5f3 h6g7 f8g7|2110|winningMaterial,sacrifice,long|
bhzoab|8/4Rp1k/p7/P2p1qp1/3Pp2p/4P2P/4rPP1/1Q4K1 w - - 1 44|b1e1 e2e1 g1h2 f5f2 e7f7 f2f7 g2g3 f7f2|2115|mate,mateIn4,long|7:f7f2
bk003n|6k1/p1q4p/3b2r1/3Q2p1/2pP2N1/P6R/4r3/1R4K1 b - - 0 35|g8h8 b1b7 c7b7 d5b7|2120|winningMaterial,sacrifice,quietMove,short|
js0528|1R6/5pk1/3Q2p1/4nq1r/4p3/4P1P1/5P2/5RK1 w - - 6 42|f1c1 h5h1 g1h1 f5h3 h1g1 e5f3|2125|mate,mateIn3,sacrifice,long|
a3ftfd|8/2Q2pkp/6p1/1p6/r7/2P1q1P1/P1b1P2P/R4RK1 w - - 1 32|g1g2 c2e4 f1f3 e3e2 g2g1 e4f3 c7e5 e2e5|2125|winningMaterial,long|
15aitmg|8/4R1bk/6pp/2Q5/1P2pp2/7P/5PP1/q1r2NK1 w - - 7 39|g2g4 c1f1 g1g2 f1g1 g2h2 g1h1 h2g2 a1g1|2130|mate,mateIn4,long|7:a1g1 a1f1
525u67|rnbqk1nr/ppppbpp1/4p3/7p/4P1Q1/6P1/PPPP1P1P/RNB1KBNR w KQkq - 0 4|g4g7 e7f6 g7h8 f6h8|2135|winningMaterial,sacrifice,quietMove,short|
1wvwk49|1R6/1p3pk1/3n1bq1/3P4/8/P1PP1p2/1P1Q2B1/6K1 w - - 2 38|g1f1 f6g5 d2g5 g6g5|2140|winningMaterial,sacrifice,quietMove,short|
1bpjva7|1r5k/R4p2/4pN2/1P1p3r/3P4/2P1KP2/8/8 b - - 1 45|h5f5 a7f7 f5f6 f7f6 h8g7 f6e6|2145|winningMaterial,sacrifice,endgame,long|
1jwzonx|6k1/6p1/1p1Q1pq1/p1rP3p/4N2P/1b1KR3/2r2PP1/R4B2 w - - 3 32|a1a3 c5d5 d6d5 b3d5 d3c2 d5e4|2150|winningMaterial,fork,sacrifice,long|
ltkrzg|r3k2r/pp2n1pp/2n1Qqb1/1Bpp4/1b1N4/2N1B3/PPP2PPP/R3K2R w KQkq - 2 15|b5c6 b7c6 e6f6 g7f6 d4e6 d5d4|2150|winningMaterial,fork,sacrifice,long|
1524e0l|4B3/8/3b4/2K5/5k2/7p/8/8 w - - 2 80|c5c6 h3h2 c6d6 h2h1q|2155|winningMaterial,sacrifice,promotion,quietMove,endgame,short|
lq14jc|r4rk1/1pqnbppp/2p1p3/p7/P3P3/4BB1P/1PPQ1PP1/3R1RK1 b - - 3 18|e7c5 d2d7 c7d7 d1d7 c5e3 f2e3|2160|winningMaterial,sacrifice,long|
dwobth|2k4r/p1pr4/1pn1Q1p1/bBq2pNp/4P2P/P4PP1/3p2K1/1R3R2 b - - 1 32|c6e5 g5f7 e5f7 e6d7|2165|advantage,fork,sacrifice,quietMove,short|3:e6d7 b5d7
14ptgy4|4r3/1p3pk1/3n1b2/3P1qp1/8/P1PPQN2/1P4B1/4R1K1 w - - 6 35|f3d4 e8e3 d4f5 d6f5 e1e3 f5e3|2170|winningMaterial,sacrifice,long|
1c1oft|rn2k2r/pp3pp1/2pbpn1p/3q4/P2P1N2/2P1B2P/1P3PP1/1R1QKB1R b Kkq - 2 10|d5e4 f1d3 e4f4 e3f4|2175|winningMaterial,sacrifice,quietMove,short|3:e3f4 g2g3
7yo57l|r5k1/pp1r2pp/2nPB1n1/8/Pq4P1/3Q2BP/1P3P2/R5K1 b - - 0 27|g8f8 d3f5 f8e8 e6d7 e8d8 d7c6 b4d6 g3d6|2180|winningMaterial,long|7:g3d6 f5f7
1mw3lmc|r5k1/1pp2ppp/2b1r3/p6Q/2BP1n2/7P/P4PP1/R5K1 w - - 0 23|h5g5 f4h3 g2h3 e6g6 g5g6 h7g6|2185|advantage,fork,sacrifice,long|
t4tlnb|5r2/5p1k/qpQ1pp2/3P4/7P/4P2P/4KP2/6R1 w - - 1 31|e2d1 f8c8 c6c8 a6c8|2190|winningMaterial,sacrifice,quietMove,short|
gd2wh8|5b1k/1p3pp1/4p1q1/p2pP1PN/P2P2Q1/1P3R2/2r2P1K/8 b - - 0 42|f8e7 f3h3 h8g8 g4h4 c2f2 h4f2|2195|winningMaterial,quietMove,long|
1dh6qwl|8/8/R5P1/4k3/8/4P3/p5K1/3r4 b - - 2 50|a2a1b g6g7 d1d8 a6a1 e5f6 a1a7|2200|winningMaterial,quietMove,endgame,long|
1x9gjq6|1rb1k2r/1p1n2p1/p2p2qp/2pQ1pP1/2P2P2/2NPBB2/PP2K3/7R b k - 5 23|e8f8 f3h5 d7b6 h5g6 b6d5 c3d5|2205|winningMaterial,quietMove,long|5:c3d5 c4d5
ecxl72|2Q3n1/1p2pk1q/p3Np1r/3p3p/b6B/6PP/P7/4R1K1 b - - 19 42|d5d4 c8f8 f7g6 e6f4 g6f5 f8c8 a4d7 c8d7|2210|winningMaterial,long|7:c8d7 c8c2 c8b7
1he8eoz|2k5/3p4/Q7/3q3P/p4K2/3PPP2/1B6/7r b - - 3 50|c8b8 b2e5 d7d6 e5d6 d5d6 a6d6|2220|winningMaterial,sacrifice,endgame,long|
z47rjx|r3r1k1/p4p2/2pp3p/5QP1/4P3/P3BPnq/1bP1K3/1N1R2R1 w - - 0 27|e2d2 h3h2 g1g2 h2g2 e3f2 g2f2 d2d3 f2e2|2225|mate,mateIn4,fork,long|7:f2e2 f2d4
78ynfk|r4rk1/pb1n1ppp/4p3/8/5Q2/2NN4/PP3PqP/2KR2R1 b - - 5 20|g2c6 d3b4 c6c8 f4d4 g7g6 d4d7|2230|winningMaterial,quietMove,long|
1ewleu5|R2bk3/5r2/7Q/1q1Pp2p/p3P1pP/8/P5PK/8 b - - 1 42|b5f1 h6h8 f7f8 h8e5 e8f7 a8a7 d8c7 a7c7|2235|winningMaterial,long|7:a7c7 e5c7
dphj0n|8/8/4R3/6p1/6k1/4P3/r6K/8 w - - 18 62|h2h1 g4g3 e6c6 a2a1 c6c1 a1c1|2240|mate,mateIn3,quietMove,endgame,long|
1rfijvx|2r1k2r/Q2p1ppp/1p6/n1b5/4P3/6B1/P1qN1PPP/2R2RK1 b k - 2 21|c5f2 g3f2 c2c1 f1c1 c8c1 d2f1|2250|advantage,sacrifice,long|
1rr1ki3|8/P1n5/1R1k2K1/8/6Bb/4r2P/8/8 b - - 1 50|d6e7 b6b7 e7d6 b7c7 e3a3 c7d7|2255|winningMaterial,quietMove,endgame,long|
cwr58o|8/p7/1p1q3R/2p2Q1p/2PB2nk/4P3/6P1/6K1 b - - 0 38|g4h6 d4f6 d6f6 f5f6 h4g3 f6f4|2260|mate,mateIn3,fork,sacrifice,endgame,long|5:f6f4
a6371s|8/7K/5P2/pp2b1P1/k6P/8/8/8 b - - 0 55|e5d6 g5g6 b5b4 g6g7 b4b3 g7g8q|2270|winningMaterial,promotion,quietMove,endgame,long|
12aw01c|3rr2k/pp2Np2/5P1p/1PpPP3/P3Rn1q/5Q1b/5K1P/R7 w - - 6 34|f2g1 e8g8 e7g6 g8g6 g1h1 h3g2 h1g1 g2f3|2275|winningMaterial,fork,long|7:g2f3 g2h3 f4h3
52o4qa|5r2/5k2/p4p2/1pb1pN2/1r5P/6R1/P5P1/2R4K b - - 6 43|c5e7 c1c6 f8d8 g3g7 f7f8 g7e7|2285|winningMaterial,quietMove,long|5:g7e7
dldu13|8/8/3R3p/5p1r/p1q4k/P7/KP6/6Q1 w - - 0 48|b2b3 a4b3 a2a1 c4c3 a1b1 c3c2 b1a1 c2a2|2290|mate,mateIn4,endgame,long|7:c2a2
txdvi2|8/2q3pk/p2n1r1p/1p2R2P/2ppBP2/P2P4/1PP4K/7Q b - - 1 35|f6g6 e4g6 h7h8 h1a8 c7d8 a8d8 d6e8 d8e8|2300|mate,mateIn4,fork,long|7:d8e8 e5e8
1gwbiqx|1r3k2/1p4R1/1qb4p/p2p1B1P/P2P2R1/6P1/1P3PK1/8 b - - 0 35|b6b2 f5e6 f8e8 g7f7 b2f2 g2f2|2305|winningMaterial,quietMove,long|
m0a96q|8/7n/8/Pk6/8/8/4K3/8 b - - 3 70|b5c4 a5a6 h7g5 a6a7 g5e6 a7a8q|2315|winningMaterial,promotion,quietMove,endgame,long|
se8yo1|2Q1b1n1/1p2p1k1/p4pqr/3p1N1p/7B/6PP/P7/4R1K1 b - - 11 38|g7f7 c8e6 f7f8 f5e7 g6f7 e7g8 f7e6 e1e6|2325|winningMaterial,sacrifice,long|
zzluvw|6k1/8/4P3/1r1p1p2/p2K1P2/Pp6/8/7R b - - 0 60|b5b4 a3b4 b3b2 d4e5 g8g7 h1g1 g7f8 e5f6|2335|winningMaterial,endgame,long|
1sxpv7t|5R2/8/1n4k1/1Pr1p1p1/p5P1/P1NK4/8/8 b - - 8 57|c5c4 f8d8 c4g4 d8d6 g6f5 d6b6|2345|advantage,fork,quietMove,endgame,long|
1g6kp8d|r4k2/1R6/4BK2/8/5p2/p7/1p6/8 b - - 5 61|b2b1b b7g7 b1h7 g7h7 a3a2 h7h8|2355|mate,mateIn3,quietMove,endgame,long|
xievd3|8/4n3/4Pk2/PR1P4/2r2P1p/4K2P/8/8 b - - 4 68|c4a4 d5d6 a4a3 e3d4 e7f5 b5f5|2365|winningMaterial,quietMove,endgame,long|
1idh6xi|7k/6p1/1p2Qpq1/p1rP3p/4N2P/1b1K2R1/2r2PP1/R4B2 b - - 6 33|c5c3 d3d4 c3g3 f2g3 c2c5 e4c5|2375|winningMaterial,sacrifice,quietMove,long|5:e4c5
1yw8ujh|5b2/p1k2p1p/8/2p5/8/2PK1Bpb/PP1NRq1P/7R b - - 1 32|h3f5 d3c4 f5e6 c4b5 f2e2 f3e2|2385|winningMaterial,sacrifice,quietMove,long|
11w1p38|K7/P5p1/2k5/5p2/P5p1/4B3/5P1b/8 b - - 0 54|f5f4 a8b8 f4e3 b8c8 e3f2 a7a8q|2400|winningMaterial,sacrifice,promotion,quietMove,endgame,long|
a5k0nx|r4k1r/pp2q3/8/3p1Q2/4n3/4BP2/PP2P3/1K4R1 b - - 2 28|e4f6 e3c5 e7c5 f5f6 f8e8 f6h8|2415|winningMaterial,fork,sacrifice,quietMove,long|5:f6h8
1qnv3xn|2Q5/3R1pk1/4qpp1/8/1P6/p6P/2rQ1P2/3K4 b - - 2 48|c2c4 c8h8 g7h8 d2h6 h8g8 d7d8 e6e8 d8e8|2425|mate,mateIn4,sacrifice,endgame,long|
1d4swks|2q5/3R1pk1/5pp1/2PQ3p/pp6/P6P/5PPK/4r3 b - - 3 35|c8a6 d5f7 g7h6 h3h4 e1h1 h2h1 a6f1 h1h2 f1g1 h2g1|2445|winningMaterial,long|9:h2g1 h2g3 h2h3
zqknbq|2q1r1k1/pp1n2p1/2p3Q1/3p1r1p/4N2P/4B3/PPP3P1/2KRR3 b - - 0 29|f5f8 e3h6 f8f7 e4g5 d7e5 e1e5 c8e6 e5e6|2460|winningMaterial,quietMove,long|7:e5e6 g5e6
1qdfa4o|8/7k/6RB/p1r3p1/6P1/2p5/5K2/8 w - - 4 48|h6f8 c3c2 g6h6 h7g8 f8c5 c2c1q|2480|winningMaterial,sacrifice,promotion,quietMove,endgame,long|
1eegeih|8/1p4k1/6q1/3P1p1R/2P2b2/PP1PnQ1K/8/8 w - - 0 49|a3a4 g6g4 f3g4 f5g4 h3h4 g4g3 h5g5 f4g5|2500|winningMaterial,fork,sacrifice,endgame,long|
yfwcco|8/1p4pk/5B1p/PPp1Qq2/2B3N1/4p2P/3r1bb1/R6K w - - 0 36|h1h2 f5f3 c4g8 h7g8 g4h6 g8h7 e5f5 f3f5|2500|winningMaterial,quietMove,long|7:f3f5
1oovv3q|7K/2r5/5kPn/p4b1P/R7/8/8/5R2 w - - 2 58|f1f3 h6f7 h8h7 f7g5 h7h6 c7h7 g6h7 g5f7|2500|mate,mateIn4,fork,sacrifice,endgame,long|
1nrgvyd|2n3k1/p4pp1/1p2p2p/1P2P3/1B1rN1PP/1R3P2/4nK2/8 b - - 7 37|e2c1 b3c3 d4b4 c3c8 g8h7 c8c1|2500|winningMaterial,fork,sacrifice,quietMove,long|
lblvu2|4r2k/pbp5/3p2p1/b1p5/2P5/1P1Nr1NP/P1R2RP1/6K1 w - - 9 36|f2e2 b7c6 e2e3 e8e3 d3f4 e3g3|2500|winningMaterial,fork,sacrifice,quietMove,long|
vr3ff|8/8/4p1p1/P7/1R6/5Pkp/r7/6K1 w - - 3 56|g1f1 h3h2 b4g4 g3f3 g4g3 f3g3 a5a6 h2h1q|2500|mate,mateIn4,promotion,quietMove,endgame,long|7:h2h1q h2h1r
11fvq44|1r3k2/3n1p1p/2p5/2PP1P2/1q2pP2/6R1/4B1K1/Q7 b - - 0 32|b8e8 a1h8 f8e7 d5d6 e7d8 g3g8 e8g8 h8g8 d7f8 g8f8|2500|winningMaterial,sacrifice,long|9:g8f8 g8f7
s80wws|r6k/3bb1pp/1nq5/5pP1/3P1Q2/2NP4/3B3P/2R2K1R w - - 2 35|f4e5 c6f3 f1g1 d7c6 e5g3 f3h1 g1f2 e7d6 g3h3 h1h2 h3h2 d6h2|2500|winningMaterial,fork,sacrifice,long|
`;
  return RAW.trim().split('\n').map((line) => {
    const [id, fen, moves, rating, themes, alts] = line.split('|');
    const a = {};
    if (alts) for (const part of alts.split(';')) { const [k, v] = part.split(':'); a[k] = v.split(' '); }
    return { id, fen, moves: moves.split(' '), rating: +rating, themes: themes ? themes.split(',') : [], alts: a };
  });
})();
