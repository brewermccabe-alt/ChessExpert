/* Tactics puzzles generated for this app with the Stockfish engine (tools/puzzlegen.js).
 * One per line: id|fen|moves (UCI; the first is the opponent's mistake)|rating|themes|alternative answers by ply */
window.PUZZLES = (function () {
  const RAW = `
18dhpjc|r3kbnr/p1pp1ppp/1p6/1B2P3/3p2q1/P4b1P/1PP2PP1/R1BQ1RK1 w kq - 0 12|b2b3 g4g2|500|mate,mateIn1,oneMove|
1h3l9j7|6k1/5pp1/1q5p/p4P2/R2BP3/3p3P/5RP1/5rK1 w - - 0 35|g1f1 b6b1|500|mate,mateIn1,oneMove|
lpasfq|8/3B1p2/1p4bk/p1p3q1/P1Pp3p/1P6/4QNK1/8 w - - 8 47|g2f3 g5g3|500|mate,mateIn1,oneMove|
fiwgn|4k3/p4R1p/1p6/5p2/2B2P2/1P4PK/3r3P/6b1 w - - 8 38|b3b4 d2h2|500|mate,mateIn1,oneMove|
wm6z6f|5r1k/1q2b2p/3pb3/1p2pPp1/7n/Q1PNB3/3N1PPP/R5K1 w - - 1 33|g2g3 b7g2|500|mate,mateIn1,oneMove|
18qouxs|4r1k1/6R1/5p1p/3p4/3n1Q1P/6P1/1R3P1K/2r1q3 b - - 0 35|g8h8 f4h6|500|mate,mateIn1,oneMove|
1yzvhed|3Rr2k/1p2Q1pp/2b2r2/8/P7/5pPP/3q3K/R4B2 w - - 5 39|f1g2 d2g2|500|mate,mateIn1,oneMove|
18bus9e|r2qk1r1/1pp4p/3p2p1/p1n3Pn/P1PQB3/2P5/7P/R1B2RK1 b q - 0 20|c5e4 d4e4|500|winningMaterial,oneMove,hangingPiece|
uv9mzc|8/5pk1/p7/3p2p1/3Pp2p/1Q2P2P/5PP1/2q3K1 w - - 4 59|b3d1 c1d1|500|winningMaterial,oneMove,hangingPiece|
cj0co8|r1q3k1/1pp1br2/2np1nNQ/p2bp3/8/2P4P/PPBN1PP1/R4RK1 b - - 2 26|d5g2 h6h8|500|mate,mateIn1,oneMove|
100te0m|5k2/1p4p1/p1p1Q1p1/6q1/P1P5/2P5/2r2PKP/4R3 w - - 3 37|e6g4 g5g4|500|winningMaterial,oneMove,hangingPiece|
9i31cp|8/p4Pkp/6p1/3B4/PPp3P1/2P5/1K1R3P/4q3 w - - 3 47|d5c4 e1d2|500|winningMaterial,oneMove,hangingPiece|
18r18qs|3r1rk1/2q1bp2/bp2p2p/p3N2N/2P3Q1/P7/1P3PPP/4R1K1 b - - 0 23|g8h8 g4g7|500|mate,mateIn1,oneMove|
u7toer|Qn2kb1r/5pp1/p3b2p/2p5/5p1P/2Nq2P1/PPnB2B1/R3K1NR w k - 7 17|e1f2 f4g3|500|mate,mateIn1,oneMove|
3y2u24|r5k1/5ppp/p7/3Q4/4p3/1P2P1P1/3K1Pq1/5R2 b - - 2 36|g7g5 d5a8|500|winningMaterial,oneMove,hangingPiece|
1i59pvy|5k1r/ppq1pp2/2p3Pp/5n2/Q5B1/2P5/PP2RPP1/3r2K1 w - - 0 27|e2e1 d1e1|500|mate,mateIn1,oneMove|
eutm8p|2k3r1/R6R/p7/3p2r1/P1pP4/2P2b2/2P2K2/8 b - - 4 35|g5g4 a7a8|500|mate,mateIn1,oneMove|
175wyf0|r3k3/8/p1pRp1r1/1pQ1n3/4P1pN/1P4P1/P1P1qP1p/5RK1 w q - 0 31|g1h1 e2f1|500|winningMaterial,oneMove,hangingPiece|
jnqn6p|3Q3k/r1p3q1/pp1n3p/5B2/8/P1P5/3n2PP/5RK1 b - - 2 40|g7f8 d8f8|500|mate,mateIn1,oneMove|
1qcha14|R5k1/2rb3p/4pp1B/1p1np2B/8/1P6/2P2PPP/6K1 b - - 5 36|d7e8 a8e8|500|mate,mateIn1,oneMove|
nwxj3b|8/p3N2p/P1P3p1/2P5/3p2bP/3B2k1/2PK2P1/1r6 w - - 4 35|d3f5 b1d1|500|mate,mateIn1,oneMove|
1rnol5l|R4N2/6pk/1p6/1P1n2p1/8/5R2/2r1rPK1/8 b - - 7 46|h7h6 f3h3|500|mate,mateIn1,oneMove|
tabm4d|4rk2/p1p3pp/2pn4/4Rp2/P7/1PP5/1N2KPPP/8 w - - 3 30|h2h4 e8e5|500|winningMaterial,oneMove,hangingPiece|
x3mtns|r3r1k1/1b3ppp/p1q2n2/1Nb5/3p4/4P1B1/PPQ1BPPP/2RR2K1 w - - 1 20|a2a3 c6g2|500|mate,mateIn1,oneMove|
1u0ooy7|5nk1/7r/p3p3/1bqp1PQ1/6P1/P1B1P3/8/K1R5 b - - 3 47|h7g7 g5g7|500|mate,mateIn1,oneMove|
7it5gk|2R3k1/n4ppp/p3p3/b2p4/P2P1BPP/3KP3/5P2/1r1B3R b - - 0 32|a5d8 c8d8|500|mate,mateIn1,oneMove|
1r3qcgx|Qn2kb1r/5pp1/p3b2p/2p5/5p1P/2Nqn1P1/PP1B2B1/R2K2NR w k - 1 14|d1c1 d3c2|500|mate,mateIn1,oneMove|
n02zhx|k4r2/6Rp/1RP3r1/p7/P7/3p4/2PP3P/6K1 w - - 2 34|g1h1 f8f1|500|mate,mateIn1,oneMove|
1vkaubo|4k3/1p2r2p/1q3N1P/2pb2P1/5Q2/3pp3/1B1P2P1/6K1 b - - 1 38|e8d8 f4b8|500|mate,mateIn1,oneMove|
u0mslp|r4rk1/3pbpp1/pp4Qp/2pPB3/8/8/PPP2PPP/R3R1K1 b - - 0 20|c5c4 g6g7|500|mate,mateIn1,oneMove|
qs14x9|3q4/2R3kp/pQ3pp1/1n6/1P1Pb1B1/4P3/1P4PP/6K1 b - - 0 31|d8d7 c7d7|500|winningMaterial,oneMove,hangingPiece|
ro24jy|2r4r/4pk2/p4b1p/1p5Q/1P4pP/4q1P1/P3N1P1/3RK2R b K - 3 23|f7e6 h5d5|500|mate,mateIn1,oneMove|
v40kl0|4r1k1/1p3p2/5n1p/p1P5/P2P4/2b5/1PQK1PqP/R6R w - - 0 32|d2d1 g2h1|500|mate,mateIn1,oneMove|
z6g210|r3r1k1/ppp1nppp/2n3q1/3P4/B2P4/P3B2b/1P3PPP/RN1Q1RK1 w - - 1 13|b2b3 g6g2|500|mate,mateIn1,oneMove|
1gdrhb4|r1bqkb1r/pp1npppp/5n2/1Bp5/3PN1P1/5N2/P1PBQP1P/1R2K2R b Kkq - 2 11|f6h5 e4d6|500|mate,mateIn1,oneMove|
6024pr|2b1k2r/5p2/4p3/4P3/1b1B4/4P2p/5P1R/4K1N1 w k - 2 37|d4c3 b4c3|500|winningMaterial,oneMove,hangingPiece|
1uai47d|8/p4Q2/kp4p1/5n2/P7/3Pq2P/2P3P1/4B1K1 w - - 3 42|g1h1 e3e1|500|winningMaterial,oneMove,hangingPiece|
47gnk7|6k1/5pp1/p1q4P/2p5/P3p1Q1/6P1/2P2P2/6K1 b - - 0 37|e4e3 g4g7|500|mate,mateIn1,oneMove|
tj13qq|3k1bnr/1p6/nNp1q1p1/p3pp1b/7P/4BPN1/PPPQ4/4KB1R b K - 1 20|e6d7 d2d7|500|mate,mateIn1,oneMove|
1m54ijw|2R1Qbk1/5ppp/4p3/n2pP3/5q2/7P/6P1/7K b - - 1 41|d5d4 e8f8|500|mate,mateIn1,oneMove|
1affnrw|8/1r2kp1p/4p3/3n4/6pP/PR4P1/1NK2P2/8 b - - 1 34|f7f5 b3b7|500|winningMaterial,oneMove,hangingPiece|
2a7o1y|rn3rk1/pp3pp1/4pn1p/2P5/P3q3/2P3BP/1P3PP1/1R1QKB1R w K - 1 14|d1e2 e4b1|500|winningMaterial,oneMove,hangingPiece|
1yyjr32|r1b5/ppQ3k1/5qp1/4p3/2p4R/P3P2P/5PP1/6K1 b - - 3 28|f6e7 c7e7|500|winningMaterial,oneMove,hangingPiece|
1f2dl3s|8/1p1b2k1/4p2p/p2p4/6P1/1P1Q1R2/P4P2/4q2K w - - 5 43|d3f1 e1f1|500|winningMaterial,oneMove,hangingPiece|
1hvdemy|3Rq1k1/r4p1r/p1Q1N2p/1p2b1p1/8/7P/PP3PP1/6K1 b - - 1 30|h7h8 d8e8|500|winningMaterial,oneMove,hangingPiece|
noe2ko|3R4/1kp1K2n/1p6/1P6/P1pN4/6P1/7P/4r3 w - - 5 53|e7d7 h7f6|500|mate,mateIn1,oneMove|
182lmoz|7r/pp3pk1/2p3p1/2PR2Q1/3P2P1/P6q/1P3P2/3R1K2 w - - 3 40|f1g1 h3h1|500|mate,mateIn1,oneMove|
oeb5z5|7R/1p3bp1/1p3rkp/1p3q2/1P6/2P1p1QP/4N1PK/8 b - - 5 40|f5g4 g3g4|500|mate,mateIn1,oneMove|
1h6ozb0|rb2rn1k/1p1b1pp1/2pq1n1p/p2p4/P2P3B/1PNBP2P/2Q1NPP1/3R1R1K w - - 1 21|c3b5 d6h2|500|mate,mateIn1,oneMove|
1mvfud6|7r/1ppk1p2/pb3p2/5r1p/P6P/1PPRB3/4KP2/6R1 b - - 0 27|f5d5 d3d5|500|winningMaterial,oneMove,hangingPiece|
pvc55h|r7/Pp6/6kp/1R4p1/8/3r1K2/1P4PP/R7 w - - 2 34|f3g4 h6h5|500|mate,mateIn1,oneMove|
alxgfm|r4k1r/1pq1n3/p3B3/4Pp1p/3p2pN/1Q5P/PP1N1P2/2K1n2R w - - 0 26|b3c2 c7c2|500|mate,mateIn1,oneMove|
13h9cht|6Q1/3P1R2/p3p1pk/8/1p2B1P1/7p/P2q3K/2r5 w - - 3 38|f7f2 d2f2|500|winningMaterial,oneMove,hangingPiece|
aa60uf|3R3k/1p2r1pp/2b2r2/8/P6P/6P1/5p1K/R4B2 b - - 1 41|f6f8 d8f8|500|mate,mateIn1,oneMove|
1k535bb|4rr1k/2q3pp/8/Rp3p2/7P/P2Q3R/1P2N3/4K3 w - - 0 34|h4h5 c7a5|500|winningMaterial,oneMove,hangingPiece|
1x0b3wp|5r1k/4p1bp/2p5/p1R2r1q/1P2Q1p1/P3PnP1/5PBP/3NR1K1 w - - 5 32|g1h1 h5h2|500|mate,mateIn1,oneMove|
v22yfw|r6k/pR4p1/4B2p/8/5Pn1/6K1/PQ4PP/4q3 w - - 5 33|g3f3 g4h2|500|mate,mateIn1,oneMove|
1f86449|r2q1k1r/4b1p1/pp2Qn2/3nN3/3P3p/PP5P/1B3PP1/2R2RK1 b - - 2 23|f6d7 e6f7|500|mate,mateIn1,fork,oneMove|
4w1jb2|2b1k3/3q1p2/2p2p1p/r1Bp3P/2pQP3/5P2/6r1/2R1R1K1 w - - 0 32|g1h1 d7h3|500|mate,mateIn1,oneMove|
1awupdp|6k1/p1R4p/Bp6/5p2/5P2/1P4PK/3r3P/6b1 w - - 4 36|b3b4 d2h2|500|mate,mateIn1,oneMove|
hd2y30|8/r1p4k/pp1q3p/3R4/3Q4/P1P2n2/6PP/6K1 w - - 7 46|g1h1 d6h2|500|mate,mateIn1,oneMove|
tqe1g1|1rb1r3/p2k1ppp/5n2/P2p4/1Pp5/2N2N2/5PPP/R3KB1R w KQ - 3 18|f3e5 e8e5|500|winningMaterial,oneMove,hangingPiece|
1x2d5ab|r5kr/1pqN1pp1/4p3/p1bn4/P5np/1BP4N/1PQB1PPP/3R1RK1 w - - 1 23|g1h1 c7h2|500|mate,mateIn1,oneMove|
1bm35ud|6k1/pR3pp1/4p2p/2P5/P7/2P2B1P/7R/2q4K w - - 7 30|f3d1 c1d1|500|winningMaterial,oneMove,hangingPiece|
1b4lhsw|1r2r2k/p5b1/6B1/1Pp4p/5P2/2P1n1P1/1P1N3P/q1B2QKR w - - 1 27|f1e2 a1c1|500|winningMaterial,oneMove,hangingPiece|
1dwiv5z|r4rk1/1p2n3/7p/3pNppQ/p2q4/3B3P/PP3KP1/R1R5 w - - 0 27|f2g3 d4f4|500|mate,mateIn1,fork,oneMove|
1eep80j|2r5/7k/p5p1/Np1R1p1p/4pB1P/P1q3P1/1KPRB3/8 w - - 0 35|b2c1 c3a1|500|mate,mateIn1,oneMove|
1058lwz|rn2k2r/1ppqn3/4pQp1/pb1pP2p/3P3P/B1P5/2PK1PP1/R4B1R b kq - 3 15|b5c4 f6h8|500|winningMaterial,oneMove,hangingPiece|
131v0hn|3r2k1/5pp1/8/pB3b1p/1b2PB1P/1P3P2/1Pr1K1P1/R5NR w - - 1 23|e2e3 b4c5|500|mate,mateIn1,oneMove|
1naruto|2r3k1/R5p1/1p3p2/P3p3/P5pP/2KP4/5PP1/8 w - - 1 34|a7c7 c8c7|500|winningMaterial,oneMove,hangingPiece|
2doo8y|1rq5/2pkn3/p1nppb1p/4p3/P3P1Np/3PB1P1/2P1NP2/3Q1K1R b - - 1 23|c8d8 g4f6|500|winningMaterial,oneMove,hangingPiece|
1katu6|2r4k/1rq4p/6p1/3P4/3Q4/7P/2p2PP1/R1R4K b - - 0 34|c7e5 d4e5|500|winningMaterial,oneMove,hangingPiece|
k83q7m|8/8/p3p2k/8/1pK2R2/6R1/P2r4/1r6 b - - 8 48|b1b3 f4h4|500|mate,mateIn1,endgame,oneMove|
wfaqu5|1Q4k1/5pp1/8/2rq4/P7/8/5PP1/5RK1 b - - 4 32|c5c8 b8c8|500|winningMaterial,endgame,oneMove,hangingPiece|
17yxg8j|4Q3/2p1b1rk/p7/4P3/3r1n1P/P1N5/1P2KP2/3R4 w - - 10 34|e2e1 g7g1|505|mate,mateIn1,oneMove|
hsld72|rr6/4R3/2P2pk1/N5n1/1K4pp/4P3/6P1/2R5 w - - 4 45|b4a3 a8a5|505|mate,mateIn1,oneMove|
k12pd6|8/8/8/k6R/6r1/2K5/8/8 b - - 3 75|g4g5 h5g5|510|winningMaterial,endgame,oneMove,hangingPiece|
1ea5rvh|R7/8/7K/R4p2/1P3r2/1kP5/6r1/8 w - - 0 58|a5e5 f4h4|510|mate,mateIn1,endgame,oneMove|
11eydk8|R2Q4/7k/P7/1p6/1K2p3/1P6/1P6/r3q3 w - - 5 54|d8d2 e1d2|515|winningMaterial,endgame,oneMove,hangingPiece|
17g96j7|8/1kp5/8/pr3K2/2R3P1/8/7P/8 w - - 0 63|c4c5 b5c5|515|winningMaterial,endgame,oneMove,hangingPiece|
f4ottf|r3k2r/p4ppp/1p1bp1b1/1N6/1P6/2R5/P2B1PPP/4K2R b Kkq - 4 22|a7a5 b5d6|520|winningMaterial,oneMove,hangingPiece|
1ket88m|5rk1/pp4pp/6p1/7r/5n2/2N2R2/PP3PP1/R4K2 w - - 6 25|c3d5 h5h1|520|mate,mateIn1,oneMove|
75bdba|2q2rk1/p4ppp/5n2/3Pp3/2P5/P2QB3/1r2KPPP/3R3R w - - 1 18|e2f3 c8g4|525|mate,mateIn1,oneMove|
13a6dzs|5R2/6k1/4N1p1/7p/p1P1bp1P/2P5/r7/6K1 b - - 7 55|g7h6 f8h8|525|mate,mateIn1,oneMove|
ygtu4i|r2k3r/3n2p1/p3R2p/1pq5/1b6/1P6/1B2Q1PP/5RK1 w - - 1 24|b2d4 c5d4|530|winningMaterial,oneMove,hangingPiece|
1q8z9tf|6bk/8/6pp/2Q1p1q1/P2pPn2/8/6BP/6NK w - - 3 47|h2h3 g5g2|530|mate,mateIn1,oneMove|
1ri7s8h|5r2/1Q4k1/p2b1pp1/1P2p2p/1P1pP2P/3P2Pq/3B1P2/3rNRK1 b - - 0 31|d6c7 b7c7|535|winningMaterial,oneMove,hangingPiece|
1y8mpiu|4r1k1/1p3pp1/pq3n1p/3p1N2/b7/1P1R2QP/2P1NPP1/5K2 b - - 1 29|d5d4 g3g7|535|mate,mateIn1,oneMove|
hftv87|8/p7/5k2/PP6/5p2/3q3K/8/6Q1 w - - 1 69|g1g3 d3g3|540|mate,mateIn1,endgame,oneMove|
3k9o9z|r1bqkb1r/pp2nppp/n3p3/1B2P1B1/8/5N2/PP3PPP/RN1QK2R b KQkq - 4 10|e7c6 d1d8|540|mate,mateIn1,oneMove|
1vd7qr5|6r1/2p1nk2/2p1pp2/P1Rp4/3P3R/4PQB1/Pr3PP1/1q4K1 w - - 1 28|c5c1 b1c1|540|winningMaterial,oneMove,hangingPiece|
ebewh5|8/4Q1kp/1r6/3ppp2/3b1BP1/3b1nKP/8/8 b - - 7 43|g7h8 e7f8|545|mate,mateIn1,oneMove|
3mgcq5|4q3/8/8/1k3Q2/6KP/8/8/8 b - - 13 63|e8e5 f5e5|545|winningMaterial,endgame,oneMove,hangingPiece|
1jro8wq|4k3/2p1n3/2p1Q3/P1Rp2B1/3P4/4P1K1/6P1/1q5r b - - 4 37|b1b8 e6e7|550|mate,mateIn1,oneMove|
142hf9|Q7/pppk1p1p/3p3B/8/6q1/8/PP2KPPP/nN5R w - - 1 22|e2f1 g4d1|550|mate,mateIn1,fork,oneMove|
wzfa4r|5k2/2R5/2n1ppp1/4r2p/P3N2P/8/4K1P1/8 w - - 4 46|a4a5 e5e4|555|winningMaterial,endgame,oneMove,hangingPiece|
uqpj22|3R2k1/pp2qppp/4p3/2n5/P7/1BP1PP2/4QP1P/6K1 b - - 0 26|e7e8 d8e8|555|mate,mateIn1,oneMove|
avcggv|r4rk1/ppp1nppp/2n3q1/2Bp4/Q3P3/2P4b/PP1NBPPP/R4RK1 w - - 5 13|a2a3 g6g2|555|mate,mateIn1,oneMove|
1jw9kjb|8/7R/8/r7/8/p7/2K4k/8 b - - 21 62|a5h5 h7h5|560|winningMaterial,endgame,oneMove,hangingPiece|
8xmovx|8/K7/P1k3R1/8/2p5/4r3/8/8 b - - 1 67|e3e6 g6e6|560|winningMaterial,endgame,oneMove,hangingPiece|
1qclpx2|2k1rb1r/pp1b1pp1/3P3p/4q2P/2Q1n3/2N5/PP4P1/2KR1BNR b - - 0 21|c8d8 c4c7|565|mate,mateIn1,oneMove|
18fua34|r2k2Q1/3p4/p7/4B3/1q6/2r1P3/3PKP1P/8 b - - 1 31|b4f8 g8f8|565|mate,mateIn1,endgame,oneMove|
cx2zgl|6R1/8/4n2N/4pk1P/3p4/r7/3K2P1/8 b - - 1 58|f5f4 g8g4|565|mate,mateIn1,endgame,oneMove|
tep3cd|1r1q1rk1/pb3ppp/2p3P1/2b1n2Q/1P1pP3/3P3P/P2B1PB1/1R2R1K1 b - - 0 20|a7a6 h5h7|570|mate,mateIn1,oneMove|
1kkb4kf|2qr1k2/5pp1/b3n3/3NP3/P5PQ/7B/2r4P/1R4RK b - - 1 39|a6f1 h4h8|570|mate,mateIn1,oneMove|
1chlqc9|6rk/R5p1/6q1/7p/5P2/7K/PQ4PP/8 w - - 0 38|b2b1 g6g4|575|mate,mateIn1,endgame,oneMove|
jm1moj|8/8/R5k1/5p1p/8/6P1/1r3pK1/8 b - - 5 64|b2b6 a6b6|575|winningMaterial,endgame,oneMove,hangingPiece|
1dvn6r9|8/2k3b1/8/NP4p1/4QP2/1Kq4P/8/8 w - - 5 49|b3a2 c3b2|575|mate,mateIn1,endgame,oneMove|
ea256i|7K/1pr5/p6n/4kbPP/1P3R2/5R2/8/8 w - - 5 54|f4g4 c7h7|580|mate,mateIn1,endgame,oneMove|
1od5tf0|3n4/ppp2kp1/4bp2/1P5p/4P3/2N2PB1/P5PP/3r3K w - - 0 33|g3e1 d1e1|580|mate,mateIn1,oneMove|
1dmhzz5|7k/3r2p1/pp1B3p/2pQ4/5R2/1P1P2P1/P6P/4q2K w - - 2 35|f4f1 e1f1|580|mate,mateIn1,oneMove|
1sxo619|6k1/ppQ2Npp/2n5/8/4p3/P7/4q1PP/3r1RK1 w - - 3 27|f1d1 e2d1|585|winningMaterial,oneMove,hangingPiece|
qu6tsc|6R1/8/8/p6r/8/8/5Pk1/4K3 b - - 4 54|h5g5 g8g5|585|winningMaterial,endgame,oneMove,hangingPiece|
12i1c57|7k/8/4q1p1/8/6PP/2Q4K/8/8 b - - 6 58|e6e5 c3e5|585|winningMaterial,endgame,oneMove,hangingPiece|
1nizk2w|5k2/7p/4q1R1/1Pnp4/3Q1P2/6P1/6KP/8 b - - 0 53|h7g6 d4c5|590|winningMaterial,endgame,oneMove,hangingPiece|
1ho2br3|2r5/4kp1p/pn6/8/4Pn1R/P2p1P2/3P1P2/2B1KB2 w - - 2 32|f1d3 c8c1|590|mate,mateIn1,oneMove|
z5di4m|2kr4/1pp2p2/p1P1bqp1/3pP3/8/2P2NP1/P1nNPKB1/1RB5 b - - 0 22|b7b5 e5f6|595|winningMaterial,oneMove,hangingPiece|
6vciti|5bk1/2R3p1/2r2p2/B6p/2p4r/P7/KPR2P2/8 b - - 1 36|c4c3 c7c6|595|winningMaterial,oneMove,hangingPiece|
1bovo35|4r3/8/6P1/1pk3R1/8/8/2K5/8 b - - 12 74|e8e5 g5e5|595|winningMaterial,endgame,oneMove,hangingPiece|
4u7y8c|r4b1r/p4k1p/2p2Pp1/q2pQ3/1n4b1/6P1/PPPN1P1P/R1BK1B1R w - - 3 16|d1e1 b4c2|600|mate,mateIn1,fork,oneMove|
hmj24z|r2k1b1r/1p2np2/2p4p/pN6/5P2/PP1RB1PP/8/2K4R b - - 0 20|d8e8 b5c7|600|mate,mateIn1,fork,oneMove|
1ghcdqs|r5k1/ppB3pp/4p3/3n4/8/P4P2/1P4PP/3R2K1 w - - 0 28|a3a4 d5c7|600|winningMaterial,oneMove,hangingPiece|
1ft77j8|4r1k1/5pp1/6b1/3PQN2/6P1/3P1pRp/5P1P/7K b - - 0 34|g6f5 e5e8|605|winningMaterial,oneMove,hangingPiece|
1h7gadx|2Rr2k1/4pp2/p3r1p1/7p/1n6/N4P2/PP3KPP/2R5 b - - 4 29|g8h7 c8d8|605|winningMaterial,oneMove,hangingPiece|
ehczsi|2rq1r1k/1p2bppp/p1n1p3/3pP2N/2nP2Q1/P2NB2P/1P3PP1/2R2RK1 b - - 16 20|a6a5 g4g7|605|mate,mateIn1,oneMove|
66uhyc|8/pk1r1R1Q/1p4p1/4qn2/P6B/3P3P/2P3P1/7K b - - 0 33|e5f4 f7d7|610|winningMaterial,oneMove,hangingPiece|
iw17oo|3k3r/r7/2BP1np1/pR3p2/P1P1p1pP/8/1P6/2K3R1 b - - 3 31|f6d5 b5b8|610|mate,mateIn1,oneMove|
1ao6lvr|8/3K2k1/3R4/1p4RP/4q3/8/8/8 b - - 8 56|g7f8 d6f6|610|mate,mateIn1,endgame,oneMove|
oyoxuu|r2k2r1/p2p2Bp/1np2P2/6b1/p1P3B1/6P1/6K1/R3R3 b - - 0 29|g8g7 f6g7|615|winningMaterial,oneMove,hangingPiece|
n1jfgq|r2qkb1r/1p1b1ppp/p7/3pPn2/3Q4/P1N2B2/1P3PPP/R1B1K2R w KQkq - 4 14|e5e6 f5d4|615|winningMaterial,oneMove,hangingPiece|
1f8p75u|6r1/1Q4p1/2pnk2p/pp1p3P/3P4/6P1/P1P5/7K w - - 7 36|a2a4 d6b7|615|winningMaterial,oneMove,hangingPiece|
1w10ben|8/7k/6p1/8/6PP/p3Q3/1q5K/8 w - - 1 67|e3f2 b2f2|620|winningMaterial,endgame,oneMove,hangingPiece|
wxj7k9|1k4r1/1pp4R/p2r4/4p3/1P1nPp2/P4P2/4BP1P/2R4K w - - 4 34|h2h4 d4e2|620|winningMaterial,oneMove,hangingPiece|
ww21lh|r1q4r/p3k2p/1bQ1B1bp/8/2P5/P2p2N1/1P4PP/R4RK1 w - - 1 25|g1h1 c8c6|620|winningMaterial,oneMove,hangingPiece|
1qlmfew|R2bkr1Q/3q4/8/3Pp2p/p3P1pP/8/P5PK/8 w - - 4 44|a8d8 d7d8|625|winningMaterial,oneMove,hangingPiece|
98ch20|8/5rk1/1p5p/pR4p1/P1NN4/1P4Pb/7P/6K1 w - - 1 35|g3g4 f7f1|625|mate,mateIn1,oneMove|
1rgnr0d|2rr4/pp2k1pp/4bp2/8/4B3/1P3P2/P1PK2PP/R3R3 w - - 3 22|e4d5 d8d5|625|winningMaterial,oneMove,hangingPiece|
1p4me83|r3k2r/1p1n1ppp/4q3/2b1n3/PPp5/5N1P/4B1P1/R1BQ1R1K b kq - 0 19|e5f3 e2f3|625|winningMaterial,oneMove,hangingPiece|
1sfeoxc|3Rr1k1/1p3pp1/5b2/p4n1B/P7/4B2P/1P4P1/5R1K b - - 0 28|e8d8 f1f5|630|winningMaterial,oneMove,hangingPiece|
p0gllv|r2r2k1/4npp1/p2Np3/7p/1P6/P7/5PPP/2R1R1K1 w - - 1 33|d6f7 g8f7|630|winningMaterial,oneMove,hangingPiece|
1g6lkxe|2b1k3/5p2/2p2p1p/r1Bp3P/2pQP3/5P2/5K1q/2R1R3 w - - 3 34|f2f1 c8h3|630|mate,mateIn1,oneMove|
b1leco|3k3r/5pp1/1Q2p3/3pB2p/2p5/P7/1P1q1P2/1K6 b - - 1 43|d8c8 b6c7|635|mate,mateIn1,oneMove|
87k1l0|8/6k1/6p1/4Q3/pq5P/6P1/7K/8 b - - 5 63|g7h6 e5h8|635|mate,mateIn1,endgame,oneMove|
1xhma02|r5k1/6p1/2b4p/1p6/p1q3P1/1P2R2P/3Q4/2B3K1 b - - 0 31|c4c1 d2c1|635|winningMaterial,oneMove,hangingPiece|
emx5hs|4r1k1/4Bpp1/p1R5/6Pp/P3QpqP/3P4/2R1KP2/1r6 w - - 2 38|f2f3 g4g2|640|mate,mateIn1,oneMove|
1jy6l6p|4k2r/1pp5/5n2/4pN1P/1b6/8/P1rN1PP1/R4K1R w k - 1 29|d2c4 c2c4|640|winningMaterial,oneMove,hangingPiece|
1la8mg2|2b2rk1/3p1pp1/1p3q2/8/4NB1p/1Q1P3P/4NKP1/8 b - - 4 21|f6f4 e2f4|640|winningMaterial,oneMove,hangingPiece|
mno5ci|r7/1qp2pk1/5np1/2b1p2p/Q2PP2P/3P3N/4BPP1/B3K2R w K - 1 26|a4c2 a8a1|640|winningMaterial,oneMove,hangingPiece|
4uq3lw|r3k1nr/4bppp/p1q1p3/1p6/8/P4Q1P/1PPN1PP1/1RB1K2R b Kkq - 1 14|c6d7 f3a8|645|winningMaterial,oneMove,hangingPiece|
107clxa|1r3k2/1p2R1p1/p4p2/3rp2p/1P5P/P2PR3/1K3PP1/8 w - - 1 27|e7b7 b8b7|645|winningMaterial,oneMove,hangingPiece|
7reh89|1k1r1r2/ppp4p/4p3/4n1R1/1P2Pp2/P4P2/2R1BP1P/7K b - - 1 28|a7a5 g5e5|645|winningMaterial,oneMove,hangingPiece|
onfzja|r7/6P1/6R1/8/3pk3/8/K1P5/8 w - - 5 45|g6a6 a8a6|650|winningMaterial,endgame,oneMove,hangingPiece|
dyu4lz|2k3r1/Bpn3bp/4p1p1/1q3p2/P7/1B3Q2/1P3P1P/1K1r2R1 w - - 0 28|b3d1 b5b2|650|mate,mateIn1,oneMove|
dz9kyr|r5k1/5ppp/1q6/pppP2P1/8/1P1n2P1/P2N3P/R4Q1K b - - 1 23|a5a4 f1d3|650|winningMaterial,oneMove,hangingPiece|
1yeefk5|r1bq1rk1/1p2bppp/4p2B/p2n4/2BPN1Q1/8/PP3PPP/R4RK1 b - - 7 16|a5a4 g4g7|650|mate,mateIn1,oneMove|
tchjh1|1k6/p1p2p2/1p4p1/5nP1/2P5/P2Pr3/1P2R1B1/2K5 w - - 0 34|a3a4 e3e2|655|winningMaterial,oneMove,hangingPiece|
12ae7ar|r5k1/2p2ppp/p2b4/P1r1q3/Q7/2P4P/5PP1/R1B2RK1 w - - 3 23|c1h6 e5h2|655|mate,mateIn1,oneMove|
1sb1x06|r3k3/ppp1pp1p/4b3/7r/P2P1P1N/2P1n2P/1PK1B3/R6R w q - 1 23|c2c1 h5h4|655|winningMaterial,oneMove,hangingPiece|
1ycxx6q|4r1k1/ppqnQ1p1/2p3b1/3p1r1p/4N2P/4B3/PPP3P1/2KRR3 w - - 10 28|e7e8 g6e8|660|winningMaterial,oneMove,hangingPiece|
1856cbt|rnbqr1k1/1p3pp1/1b1ppn1p/6B1/PP1NP3/3Q4/3NBPPP/R3K2R w KQ - 0 13|d4b5 h6g5|660|winningMaterial,oneMove,hangingPiece|
noryv9|4b3/1p2kB2/r2b2p1/p3p1Pp/P3P3/1P3P2/6K1/3R2B1 w - - 5 44|d1d6 a6d6|660|winningMaterial,oneMove,hangingPiece|
1wfcqwu|2R2k2/R2r3p/6p1/8/4p1q1/4P1B1/5P2/6K1 b - - 0 39|d7d8 c8d8|660|mate,mateIn1,endgame,oneMove|
k9mhi8|r6k/1b3p1p/pp6/5p2/2P5/4P2Q/5PPP/2qRK3 b - - 3 30|c1d1 e1d1|665|winningMaterial,oneMove,hangingPiece|
6oxpdr|6k1/5bbp/r5p1/5p2/8/1N6/PP3PPP/R1B3K1 w - - 2 28|a2a4 f7b3|665|winningMaterial,oneMove,hangingPiece|
1vo9jju|2r5/1R2k1pp/3b1p2/4p3/4PP2/P5P1/2p1K2P/2B5 b - - 1 37|e7e6 f4f5|665|mate,mateIn1,oneMove|
1withsm|5r1k/4p2p/b5pb/N7/1N1PnP2/P5P1/1P2r2P/R1B1K2R w KQ - 3 23|e1d1 e4f2|665|mate,mateIn1,fork,oneMove|
15qxb2x|1k3r1r/1p3R2/1b2p2p/1B6/p7/P1P2P1P/1P6/3RK3 w - - 2 26|d1d6 f8f7|670|winningMaterial,oneMove,hangingPiece|
1l89h4c|8/4rpk1/5p1p/2p2R1P/1n3PP1/1P6/1K2B3/8 w - - 11 50|b2c3 e7e2|670|winningMaterial,oneMove,hangingPiece|
1i2le98|2b1k1r1/p3pp1p/3p4/qPp5/1n2PPp1/3P4/2P1Q1PP/N1B2RK1 w - - 1 21|f4f5 a5a1|670|winningMaterial,oneMove,hangingPiece|
1fce9qb|5rk1/1B3p2/b7/7p/1b1PpBpP/4P3/5PP1/3K3R w - - 0 31|f2f3 a6b7|675|winningMaterial,oneMove,hangingPiece|
19dlj1d|8/1p1r1k2/3NR1R1/pr6/1P1b4/P7/K7/8 b - - 1 50|f7f8 e6e8|675|mate,mateIn1,endgame,oneMove|
s9hn19|R6b/7k/6p1/3K3p/8/8/8/8 b - - 7 58|h7h6 a8h8|675|winningMaterial,endgame,oneMove,hangingPiece|
a05l81|2n1k2r/2q2p1p/p1p3pn/8/4P3/4QN1P/P4PP1/2R3K1 b k - 1 26|c8d6 e3h6|675|winningMaterial,oneMove,hangingPiece|
1lnhx35|r3k2r/pp2bpp1/3Np2p/3pP2P/2nP1Q2/1R5R/P1qB1PP1/4K3 b kq - 11 26|e8f8 f4f7|680|mate,mateIn1,oneMove|
1cdfusd|7k/6p1/p2n2Bp/1p1Q2qP/2pp4/P2P4/1PP3K1/8 w - - 3 42|g2h3 g5d5|680|winningMaterial,oneMove,hangingPiece|
1heer8o|rn2k2r/pQ2bppp/1qp2n2/3p1b2/3P1B2/2N1P3/PP3PPP/R3KBNR w KQkq - 1 9|b7e7 e8e7|680|winningMaterial,oneMove,hangingPiece|
1uzeewt|2Q2k2/p5p1/7p/8/3p3q/1P6/P5P1/6K1 b - - 0 31|h4d8 c8d8|680|winningMaterial,endgame,oneMove,hangingPiece|
1t0ximu|r1bqkb1r/pp2p2p/5nN1/1Pp1p2Q/3p4/3P4/P1P2PPP/R1B1KB1R w KQkq - 1 13|h5e5 h7g6|685|winningMaterial,oneMove,hangingPiece|
1lbzngm|6k1/5p1p/8/6R1/N7/P4q1r/1P1r2NQ/4R2K b - - 0 34|g8h8 e1e8|685|mate,mateIn1,oneMove|
982jyo|1r3r1k/ppq1nB1p/6p1/1P2p3/4P3/2pP3Q/5PPP/R4RK1 w - - 0 24|h3e3 f8f7|685|winningMaterial,oneMove,hangingPiece|
10ukob2|1r4k1/pb2bppn/4p2p/3qP3/3p2Q1/1P4P1/P4P1P/R2RNNK1 w - - 2 24|g4h4 d5h1|685|mate,mateIn1,oneMove|
1ckyy6z|3r3k/1p1q1ppp/4p3/p2pP2N/Pb1P3P/1P4Q1/5PP1/5RK1 b - - 2 33|b7b6 g3g7|690|mate,mateIn1,oneMove|
zzqac|6rr/1p1kbp2/p3p2p/nq1pP3/1P1P1B1P/P4NP1/8/R2QK2R b KQ - 0 22|g8g3 f4g3|690|winningMaterial,oneMove,hangingPiece|
a8ey7z|r7/3k4/2R1p3/pp1n1pPp/1P3P1P/P4NK1/8/8 w - - 9 47|b4a5 d7c6|690|winningMaterial,oneMove,hangingPiece|
82mh7x|5rk1/2Q1r1pp/1R2q3/5p2/1np5/2N1PP2/1PK2P1P/7R w - - 5 31|b6b4 e7c7|690|winningMaterial,oneMove,hangingPiece|
ils8eu|8/2k3b1/8/NP4p1/2K1QP2/7P/8/2q5 w - - 15 54|e4c2 c1c2|695|winningMaterial,endgame,oneMove,hangingPiece|
1oygjcd|r1b2rk1/pq1p1pbp/2nBp1p1/1p2P3/2N3n1/2P2NP1/PP3P1P/R2QKB1R w KQ - 2 14|f1g2 b5c4|695|winningMaterial,oneMove,hangingPiece|
stbtlz|r1bq3r/1p3pkp/1np3p1/p3Q2n/3P4/2NB1N2/PP3PPP/R3R1K1 b - - 5 19|g7f8 e5h8|695|mate,mateIn1,oneMove|
ar9fq5|1r2r1k1/3b1p1p/3p2p1/1pnPbPQ1/p1p1P1P1/P1N3qP/1PP1R1BN/5R1K w - - 5 30|b2b3 g3h2|695|mate,mateIn1,oneMove|
61izci|2r1nrk1/5p2/3pq1p1/p5Q1/8/1P1N2bP/P5B1/3R1RK1 b - - 1 30|e8g7 g5g3|700|winningMaterial,oneMove,hangingPiece|
15ifzy9|4k2r/p2pb1p1/4pN1p/q7/3QP3/4B1P1/r4P1P/R4BK1 b k - 0 19|e8d8 d4d7|700|mate,mateIn1,oneMove|
167i0ae|5R2/1p2rRpk/p3p2p/r3P3/8/4P3/6PP/6K1 b - - 0 31|a5b5 f7e7|700|winningMaterial,oneMove,hangingPiece|
1aeovub|r4rk1/2n1N1pb/2p5/1p4qB/p2P2P1/P4pR1/1PP1Q3/R5K1 b - - 1 28|g5e7 e2e7|700|winningMaterial,oneMove,hangingPiece|
ak13ni|5rk1/5p2/R2p2p1/4pB1p/6QP/2B3P1/1r2NK2/3q4 w - - 0 43|a6d6 d1d6|700|winningMaterial,oneMove,hangingPiece|
18ev07o|rqbk1b1r/1p3pp1/p4n1p/1N1pn3/3Q1B2/6P1/PPP1BP1P/R3R1K1 b - - 1 15|f8c5 d4c5|705|winningMaterial,oneMove,hangingPiece|
11jehun|5rk1/1p4pp/1pn1bp2/8/r6P/PN3P2/1P2B1P1/3RK2R w K - 1 20|h4h5 e6b3|705|winningMaterial,oneMove,hangingPiece|
7d779f|8/5kpp/5n2/3p1p2/4q3/2R4P/4QRP1/1r4K1 w - - 1 35|f2f1 e4e2|705|winningMaterial,oneMove,hangingPiece|
gjh5mz|1r3r2/3k4/2pbR3/5p2/P1p4P/2P2B2/2K2PP1/2B5 w - - 3 32|c1h6 d7e6|705|winningMaterial,oneMove,hangingPiece|
hbos83|rrb5/5k2/p1p1p3/R1Pp1p1p/RP1PnPp1/3BP1P1/3N1K1P/8 w - - 3 31|f2g2 e4d2|710|winningMaterial,oneMove,hangingPiece|
m5lw6|2rqnrk1/pp2bppp/4p3/4B2n/2BPb3/P2Q1N2/1P3PPP/R3R1K1 w - - 0 17|d3e4 c8c4|710|winningMaterial,oneMove,hangingPiece|
56dxdh|r1b1r1k1/pp2bppp/4pn2/8/nP6/P4NP1/1N2PPBP/R1B2RK1 b - - 2 14|a7a5 b2a4|710|winningMaterial,oneMove,hangingPiece|
t1txsg|8/p3pkb1/1p2R3/2p4p/2P5/P4rP1/1P3P1P/5RK1 w - - 1 35|e6e7 f7e7|710|winningMaterial,oneMove,hangingPiece|
1geevs7|r1br2k1/1p3ppp/2p5/p7/5n2/1P1P1NP1/P4P1P/2R1RBK1 b - - 0 20|g7g6 g3f4|715|winningMaterial,oneMove,hangingPiece|
dowvzx|r4rk1/2p2pp1/1b5p/p2q4/P2N1R1P/2B3Pb/1PQ2P2/2R3K1 w - - 5 23|c2g6 d5g2|715|mate,mateIn1,oneMove|
hjt6n4|6k1/4npp1/7p/2RN4/4P3/7P/1r4P1/3nN2K b - - 3 43|f7f5 d5e7|715|winningMaterial,oneMove,hangingPiece|
107or4r|2k5/p3rQ2/1pp2n2/4P2p/5q1p/2P5/PP3PP1/3R2K1 w - - 0 36|d1d8 c8d8|715|winningMaterial,oneMove,hangingPiece|
1odjtvc|3rk3/1p2pp2/6p1/p2P2q1/P2Q2r1/1B6/1RP2P2/4RK2 w - - 0 24|d5d6 g4d4|715|winningMaterial,oneMove,hangingPiece|
qpwieg|6k1/2N2pp1/2b1p2p/8/3bPB2/1p1B3P/6P1/6K1 w - - 2 33|f4e3 d4e3|720|winningMaterial,oneMove,hangingPiece|
enqvve|6k1/pp3pp1/4p2p/2P5/P7/2PqP2P/1R5R/3B1K2 w - - 3 25|f1f2 d3d1|720|winningMaterial,oneMove,hangingPiece|
6iogz3|3q1r1k/pp4b1/4Q2p/8/3n1P2/P2B1R2/1P4PP/R5K1 w - - 1 35|e6h6 g7h6|720|winningMaterial,oneMove,hangingPiece|
1pua0m6|3q1rk1/1p1b1pbp/1p1p2p1/3N4/2n5/r5PP/P2BPPB1/R1Q2RK1 b - - 1 20|d7c6 c1c4|720|winningMaterial,oneMove,hangingPiece|
1p2qm2l|7k/5p2/4p3/5qP1/8/4Q3/7P/5K2 w - - 10 61|e3f4 f5f4|725|winningMaterial,endgame,oneMove,hangingPiece|
1xz6c24|8/1p3pk1/6P1/p2p4/5nq1/P1P1Q3/1PB2P2/6K1 w - - 1 33|g1h1 g4g2|725|mate,mateIn1,oneMove|
1mcgvmu|r5k1/5ppp/p7/1b6/7P/P1B1r1P1/1P3K2/R6R b - - 1 25|e3c3 b2c3|725|winningMaterial,oneMove,hangingPiece|
jiyjr1|8/1bk3p1/1R3p1p/p7/Pp1N4/5P2/1PP3nP/2K5 w - - 4 31|b6b4 a5b4|725|winningMaterial,oneMove,hangingPiece|
kf6o8u|3R1rk1/3b1pp1/1b5p/3pP3/1p6/4BNP1/1Pn2PBP/4R1K1 b - - 0 23|f8d8 e3b6|725|winningMaterial,oneMove,hangingPiece|
1rs9gxu|r4rk1/pp2ppb1/5npp/3PBb2/3q4/P1N4P/BP2QPP1/R3K2R b KQ - 1 17|d4e5 e2e5|730|winningMaterial,oneMove,hangingPiece|
ki9nia|2r2r2/4R1k1/p4N2/3p2PP/1p1P3n/2P2pp1/PP6/5RK1 b - - 1 33|g7h8 e7h7|730|mate,mateIn1,oneMove|
5jbc1b|R7/7k/8/5P2/3Bp2p/2n4r/5P2/6K1 b - - 6 66|e4e3 a8h8|730|mate,mateIn1,endgame,oneMove|
10xqw5p|5rk1/1b2q1pp/p1n2n2/1p2p3/2p1B3/b1P3P1/P1QBNP1P/1R3RK1 w - - 1 24|e4c6 b7c6|730|winningMaterial,oneMove,hangingPiece|
1kvxp0k|r1b1k2r/pppp1ppp/8/6Q1/1nB1q3/8/PP3PPP/RNB1K2R w KQkq - 0 11|e1f1 e4c4|730|winningMaterial,oneMove,hangingPiece|
8ujdgj|r1bk3r/p1p2ppp/5B2/3B4/1b4q1/3K1N2/PPP2PPP/R3Q2R b - - 0 16|b4e7 e1e7|735|mate,mateIn1,oneMove|
bqe340|r1bR2k1/pp3p1p/2p3p1/4r2n/8/P1P3PP/1P2N1B1/5RK1 b - - 1 25|e5e8 d8e8|735|winningMaterial,oneMove,hangingPiece|
m90z8i|rnBq4/2p4k/p2p2p1/1p3p1n/3P4/7Q/PPP2PP1/RN2K3 w Q - 2 18|e1d2 d8c8|735|winningMaterial,oneMove,hangingPiece|
kbddkm|2k4r/1r3pp1/2Q1p3/3pB1qp/2p5/P7/1P1R1P2/1K6 b - - 21 41|b7c7 c6c7|735|mate,mateIn1,oneMove|
1sayto|r4r1k/4N1pb/2p5/1p1nP2B/p5P1/P5R1/1PP2p2/R4K2 w - - 1 32|a1d1 d5e7|740|winningMaterial,oneMove,hangingPiece|
1h8lxxs|5r1k/4q1p1/3Q3p/5p2/p6P/6P1/PPP5/2KR4 b - - 1 32|e7e4 d6f8|740|winningMaterial,oneMove,hangingPiece|
m9gut8|r2r4/5kp1/2b1pp2/5q1p/3P3P/1P2N3/P1nB1PP1/R3RQK1 b - - 10 30|c6g2 f1g2|740|winningMaterial,oneMove,hangingPiece|
wasvxq|2R3k1/6p1/7p/P3r3/2b1p2P/1p2P3/5PPK/8 b - - 1 37|e5e8 c8e8|740|winningMaterial,oneMove,hangingPiece|
1mq3qmk|r1b3k1/pp3ppp/4p3/6N1/2p3Q1/P1q1P2P/5PP1/R5K1 w - - 0 21|a1c1 c3c1|740|winningMaterial,oneMove,hangingPiece|
1738z1r|rn2kbnr/1p6/2p3p1/p3pp1b/3q3P/2N1BPN1/PPP1Q3/R3KB1R b KQkq - 1 15|h5f3 e2f3|745|winningMaterial,oneMove,hangingPiece|
1ua7hx2|2rR2k1/1b3ppp/1p2nq2/p7/8/Q1P1PN1P/P3BPP1/R5K1 b - - 0 25|e6f8 a3f8|745|mate,mateIn1,oneMove|
1eht9t3|6k1/1R6/p4N1p/P3n1p1/2p4r/4K3/8/8 b - - 1 46|g8h8 b7h7|745|mate,mateIn1,endgame,oneMove|
uan5ug|8/2p3k1/6n1/3P2p1/P1Pq4/P2N3Q/5K2/8 w - - 1 42|f2g3 d4d3|745|winningMaterial,endgame,oneMove,hangingPiece|
1y9h0ii|r3k2r/bpp2ppp/8/p3P3/P1b5/1N3PPP/1P2P3/R1B1K2R w KQkq - 0 18|c1d2 c4b3|745|winningMaterial,oneMove,hangingPiece|
dou5nq|r4r1k/pp2p1bp/6p1/1N6/1P1P4/8/1P3PbP/R1B1K1R1 b Q - 1 19|a8d8 g1g2|750|winningMaterial,oneMove,hangingPiece|
19b56sq|7R/1p3p2/5kq1/3P1n2/8/PPPPbQ2/8/6K1 w - - 5 45|g1h1 g6g1|750|mate,mateIn1,oneMove|
167eq31|8/1p3k2/8/2R5/P1NNb1p1/2P3br/1P6/6K1 w - - 14 50|c5c6 h3h1|750|mate,mateIn1,oneMove|
o2tzqt|rnbq1rk1/1p2b1pp/2p1pp2/p2pN3/P1PPPB2/2PB2PP/5P2/R2QK2R w KQ - 0 13|e5g6 h7g6|750|winningMaterial,oneMove,hangingPiece|
tvaqa7|5r2/1p2k2n/n1pp4/5Bp1/1P3p1r/P2P3P/3KP3/R1B4R w - - 1 26|a3a4 f8f5|750|winningMaterial,oneMove,hangingPiece|
6szclj|2rb1r1k/3n2p1/7p/pR1B1PP1/3p3P/2pP4/3B1P2/4R1K1 w - - 0 40|d2c3 d4c3|755|winningMaterial,oneMove,hangingPiece|
9u0lnm|2r1rnk1/6p1/Rqb1pp1p/3n4/1p1N4/1P1Q3P/1B3PP1/1B2R1K1 b - - 0 33|b6a6 d3a6|755|winningMaterial,oneMove,hangingPiece|
1ct0kii|5kr1/4bpp1/2p1p2p/4B2P/2P1n3/P7/1P1RNPP1/6K1 w - - 2 32|a3a4 e4d2|755|winningMaterial,oneMove,hangingPiece|
1c0rngj|R5k1/3N2p1/1p6/1P1n2p1/8/5R2/2r1rPK1/8 b - - 1 43|e2e8 a8e8|755|winningMaterial,endgame,oneMove,hangingPiece|
du28nd|r5k1/p1p2ppp/2p3n1/4r3/N4Q2/1P6/P1P2PPP/3RR1K1 b - - 0 20|g6f4 e1e5|755|winningMaterial,oneMove,hangingPiece|
uhwkhx|1Q2b1k1/p7/2p4p/2Pp4/3q1p2/P1N5/1P3P1P/7K b - - 1 31|g8h7 b8e8|760|winningMaterial,oneMove,hangingPiece|
8hzvh2|r1b4r/1pk1p3/p2p2pp/n2B2N1/2P5/4P3/P1P3PP/2KR1R2 w - - 0 24|c4c5 h6g5|760|winningMaterial,oneMove,hangingPiece|
13kpaq7|8/2KR1k2/8/1p5P/8/4q3/6R1/8 b - - 14 59|f7e8 g2g8|760|mate,mateIn1,endgame,oneMove|
me9lvg|7k/5pp1/4p2p/1p2P3/1P6/5bP1/1P1q1Q1P/R5K1 b - - 1 41|d2f2 g1f2|760|winningMaterial,oneMove,hangingPiece|
gt2xjr|4k2r/1p1rb3/p7/3p2Np/P2PnB2/2Pb3P/3N1PP1/R3K2R w Kk - 1 23|g5f7 e8f7|760|winningMaterial,oneMove,hangingPiece|
183pdut|r1bq1rk1/pppp2pp/8/1B2np2/1P1bP3/8/P1P1QPPP/RNB2RK1 w - - 1 10|e4f5 d4a1|765|winningMaterial,oneMove,hangingPiece|
1cterex|1kb2R2/pp1r3q/4p3/8/2P5/P5Q1/KP2B3/8 b - - 5 34|b8a8 f8c8|765|mate,mateIn1,oneMove|
ioi5aj|r1b2rk1/2q2npp/p2n1b2/1pBP1p2/2P2P2/1P2N3/P1BN2PP/R2Q1RK1 w - - 1 19|a1b1 c7c5|765|winningMaterial,oneMove,hangingPiece|
14z4e0u|3r4/1pr2bk1/p1n2Np1/6B1/7R/1PP4P/P4PPb/3R2K1 w - - 17 37|g1f1 d8d1|765|winningMaterial,oneMove,hangingPiece|
vjy9jw|3r1b1r/2pkq1pp/1n3n2/1Q1P1p2/3Pp3/2N5/PP1B1PPP/R3K2R b KQ - 2 18|d7d6 b5c6|765|mate,mateIn1,oneMove|
1m62mk5|7k/6p1/2P4p/p3b1P1/2nR3P/8/3p1P2/5K2 w - - 3 53|d4d2 c4d2|765|winningMaterial,endgame,oneMove,hangingPiece|
bonub3|rnb1r1k1/ppp2ppp/5n2/1Q6/3P4/2P5/PPqN1KPP/R4BNR w - - 5 14|b5e8 f6e8|770|winningMaterial,oneMove,hangingPiece|
1bhwa3p|2n3k1/p2r1pp1/1p2p2p/1P2P3/1B3nPP/1R3PK1/5N2/8 b - - 3 35|c8e7 g3f4|770|winningMaterial,oneMove,hangingPiece|
1ghzkt9|8/6k1/6p1/4Q3/6PP/p6K/q7/8 b - - 8 70|g7h6 e5h8|770|mate,mateIn1,endgame,oneMove|
jk5pet|1r2r1k1/1Bp1qppp/p4n2/3Nn3/8/6PP/PPP1Q3/2KR3R b - - 2 19|e5d3 e2d3|770|winningMaterial,oneMove,hangingPiece|
ke34g2|8/6rp/4kn2/3p1pK1/8/R6P/1R4P1/8 w - - 1 43|g5h6 g7g6|770|mate,mateIn1,endgame,oneMove|
171brbv|6k1/2p2ppp/6r1/2PP1n1q/pp6/5N2/PP2Q1BN/6K1 b - - 0 34|f5e7 e2e7|775|winningMaterial,oneMove,hangingPiece|
1ufa3sx|rnbqk2r/4bppp/p3pn2/1pp1N3/8/2NP2P1/PPP2PBP/R1BQK2R b KQkq - 0 9|b5b4 g2a8|775|winningMaterial,oneMove,hangingPiece|
1659jwh|4k3/5p1p/p3pPnp/P3P3/5P2/1R2B2K/6r1/8 b - - 2 52|g6f4 e3f4|775|winningMaterial,oneMove,hangingPiece|
sv8a7l|r7/3p4/p4Q2/2k5/3B4/3PP3/q4P1P/3K4 b - - 4 37|c5d5 e3e4|775|mate,mateIn1,endgame,oneMove|
1rvnom2|4Rkn1/1p2pb1r/p4pq1/3p3p/3N3B/2Q3PP/P7/4R1K1 b - - 0 32|f8e8 c3c8|775|mate,mateIn1,oneMove|
pc3ys5|6k1/3r1p2/P3p1pp/2q1P3/5QPP/P4PK1/2p5/2R5 w - - 11 46|c1c2 c5c2|780|winningMaterial,oneMove,hangingPiece|
fliuqj|2r3k1/p5pp/5b2/4B3/3pp3/P5P1/1PP2P1P/R2K4 w - - 1 24|e5d4 f6d4|780|winningMaterial,oneMove,hangingPiece|
v0z9js|r1bqkbnr/pp1ppppp/2p5/8/3nP3/P7/1PPPNPPP/R1BQKBNR b KQkq - 1 4|f7f5 e2d4|780|winningMaterial,oneMove,hangingPiece|
1xzqqun|8/2b5/7R/4kr1P/1P2p3/P2p4/2KR4/8 w - - 0 45|c2d1 f5f1|780|mate,mateIn1,endgame,oneMove|
15i0gn7|q3k2r/1pp2ppb/4pn1p/1P2b3/2N1P3/2P3PP/2Q2PB1/2B1K2R b Kk - 1 18|e5g3 f2g3|780|winningMaterial,oneMove,hangingPiece|
1cglqck|1rbq1r1k/2pn1pb1/1pBp2pp/p7/P2P1p2/2P1P1BP/2PN2P1/R2QR1K1 w - - 0 17|g3h4 d8h4|780|winningMaterial,oneMove,hangingPiece|
10ruocx|4r1k1/6b1/1p5p/4p3/5p2/1n3N1P/5PPB/5RK1 w - - 0 34|h2f4 e5f4|785|winningMaterial,oneMove,hangingPiece|
1fvs9sh|8/3bpk1Q/p2pp1p1/P1pP4/1rP1n1P1/7P/5P1K/8 b - - 0 33|f7e8 h7g8|785|mate,mateIn1,oneMove|
17f29u5|4rQ2/p1k1Pp2/P1p3p1/5p1p/1p1q4/5P2/5P2/4R1K1 b - - 1 33|e8f8 e7f8q|785|winningMaterial,promotion,oneMove,hangingPiece|
10u2ppu|8/6pk/4p3/2q5/5Q2/7P/6P1/6K1 w - - 8 47|f4d4 c5d4|785|winningMaterial,endgame,oneMove,hangingPiece|
klg2nt|1r2k2r/1p1q1ppp/p1npb3/8/P1Pp3P/1PNQ2P1/5PB1/2R1K2R w Kk - 0 20|g2c6 d7c6|785|winningMaterial,oneMove,hangingPiece|
1t9yulp|3r2k1/5pP1/p6p/1r4p1/4P1b1/1P2B3/P4NPP/4R1K1 b - - 2 28|g8g7 f2g4|790|winningMaterial,oneMove,hangingPiece|
bs1wkm|r3k3/p2b2pp/P1N2p2/2P1p3/1P6/4RP2/2r3PP/3R1K2 w - - 0 39|d1d7 e8d7|790|winningMaterial,oneMove,hangingPiece|
39zrf9|8/8/r1p3R1/k4R2/p1rNp3/3bP3/1P4P1/6K1 b - - 8 48|c4c5 f5c5|790|winningMaterial,oneMove,hangingPiece|
mf5oud|4r2k/2P1r3/p2Q2pp/P7/6P1/5pnP/5P2/5K2 w - - 1 41|d6g3 e7e1|790|mate,mateIn1,oneMove|
1pc4076|2kr3r/pbqp1pp1/3b1n1p/2n1Q3/4P3/2P2N2/PP1N1PPP/R1B1KB1R w KQ - 1 12|e5d6 c7d6|790|winningMaterial,oneMove,hangingPiece|
14fkbk3|1q1r2k1/3n1p2/6pN/8/4P3/5P2/Q5PP/4bRK1 b - - 0 38|g8f8 a2f7|790|mate,mateIn1,oneMove|
1xd15r3|8/8/6p1/R4kPp/4p3/6P1/1q3P2/5K2 b - - 11 63|b2b5 a5b5|795|winningMaterial,endgame,oneMove,hangingPiece|
194ajkn|r3r1k1/pqbnNppp/1p2p3/3n4/P1N5/BP3Q2/2P2PP1/R4R1K b - - 8 23|d5e7 f3b7|795|winningMaterial,oneMove,hangingPiece|
l8xymy|1n6/4kpp1/p6p/1r5P/5P2/4PB2/1R3KP1/8 w - - 2 41|f3d1 b5b2|795|winningMaterial,oneMove,hangingPiece|
1th1ulq|8/4k3/8/1B2p2p/PP6/2P5/3r1R1p/6K1 w - - 0 49|g1f1 h2h1q|795|mate,mateIn1,promotion,endgame,oneMove|
zjzoc2|3rRrk1/pp4pp/1b3p2/3p1p1P/3P1P2/PB2R1P1/1P6/1K6 w - - 7 36|b3d5 d8d5|795|winningMaterial,oneMove,hangingPiece|
1womuxb|6k1/3r4/p2q1PQ1/3pp3/8/P3P3/1B6/K7 b - - 0 59|d7g7 g6g7|795|mate,mateIn1,endgame,oneMove|
jxq7n4|1rq1k2r/2pR1pb1/4b1pp/2Q5/P3P3/6P1/5PBP/RNB3K1 b k - 0 20|e6g4 c5e7|800|mate,mateIn1,oneMove|
1qkmfi1|8/5p1k/8/4nNp1/rp4P1/4P1K1/8/7R b - - 1 43|h7g6 h1h6|800|mate,mateIn1,endgame,oneMove|
xob9yx|r5k1/ppB2ppp/3r4/3n4/8/P4P2/1P2R1PP/3R2K1 b - - 0 26|d5c7 d1d6|800|winningMaterial,oneMove,hangingPiece|
pcd9f9|1rq1kb1r/2pbn2p/p2p1p2/1p2p1pn/3PP2N/1BP5/PPQB1PPP/RN2R1K1 w k - 0 14|h2h3 g5h4|800|winningMaterial,oneMove,hangingPiece|
1udxd7m|2rr2k1/6p1/5p1p/8/1p2R3/1P1n3P/1B3PP1/4R1K1 w - - 1 42|b2f6 g7f6|800|winningMaterial,oneMove,hangingPiece|
ssimnw|7r/1p1R3P/1kp1K3/4p3/4P3/p4r2/8/1R6 b - - 1 47|f3b3 b1b3|800|winningMaterial,endgame,oneMove,hangingPiece|
t9wypw|8/8/1R6/P7/4p3/8/1r1k3p/7K b - - 21 72|d2e2 b6b2|805|winningMaterial,endgame,oneMove,hangingPiece|
1km0010|r1bqk2r/pppppp1p/2n3p1/7n/4P1P1/P1P5/1PP2P2/R1BQKBNR b KQkq - 0 7|h5f4 c1f4|805|winningMaterial,oneMove,hangingPiece|
14d6689|r1bqk1r1/pppppp2/2n2np1/6Pp/4P3/P1P1BP2/1PP5/R2QKBNR b KQq - 0 10|f6e4 f3e4|805|winningMaterial,oneMove,hangingPiece|
1089j7o|r4rk1/5p2/1pn1p2P/p2pP1N1/P4nP1/3qQ2R/1P3P2/R4K2 w - - 0 26|f1e1 f4g2|805|mate,mateIn1,fork,oneMove|
1r1vjzp|8/8/3k1K2/4p2p/5p2/2r2P2/7P/3R4 b - - 1 35|c3d3 d1d3|805|winningMaterial,endgame,oneMove,hangingPiece|
1gup0tg|3q4/3nkp2/prQp4/2p5/4P3/P1R2N2/1PK1B1P1/8 w - - 5 28|f3h4 b6c6|805|winningMaterial,oneMove,hangingPiece|
1keku7g|1r3rk1/4b1p1/7q/p7/b7/4QNP1/1P3PP1/2RR2K1 w - - 0 26|e3h6 g7h6|810|winningMaterial,oneMove,hangingPiece|
1f22rpj|r1bqk2r/ppp2pbp/2np2p1/4p3/P2Pn3/1P2P2P/1BPNBPP1/R2QK1NR b KQkq - 3 8|e4f2 e1f2|810|winningMaterial,oneMove,hangingPiece|
1a3pqcm|3r1bk1/5ppp/p2n4/1ppQ2B1/7P/q4N2/5PP1/4R1K1 b - - 3 29|b5b4 g5d8|810|winningMaterial,oneMove,hangingPiece|
13dsjg3|8/3k3p/p2bp1pP/3p1pP1/Pp1P1P2/4P3/2B1K3/r3R3 b - - 0 44|d7e8 e1a1|810|winningMaterial,oneMove,hangingPiece|
fcn6yu|8/3n1ppk/rq2b3/pN5p/2p1P2P/B5P1/1PPQ1P2/2KR4 w - - 4 32|d2e2 b6b5|810|winningMaterial,oneMove,hangingPiece|
1146d4s|3r4/4bp1p/4k3/1p2P3/2nB1P2/5B2/2R4P/6K1 w - - 1 33|d4b6 c4b6|810|winningMaterial,oneMove,hangingPiece|
1od8e18|2Q1r1k1/5p2/6p1/1b6/p1p1pbP1/5NqP/1PP1R1B1/4R2K w - - 3 42|c8e8 b5e8|815|winningMaterial,oneMove,hangingPiece|
1idzl9f|3rk2r/pp2qpb1/2p1p1pP/2PnN3/3P4/P2B2P1/1P2QPK1/1R3R2 b k - 0 25|d5f4 g3f4|815|winningMaterial,oneMove,hangingPiece|
1xx8xzo|r1bqr1k1/1p1n1ppp/2p1p3/3n4/p2P4/PQNBPN1P/1P3PP1/2R1K2R w K - 0 14|d3h7 g8h7|815|winningMaterial,oneMove,hangingPiece|
7on05z|r6r/3k1p2/3P3p/p1R1npp1/8/NP6/5KPP/3R4 b - - 3 28|a5a4 c5e5|815|winningMaterial,oneMove,hangingPiece|
189wqqx|1r1qkbnr/pppb1p1p/2n5/2P1P1N1/3p2pP/1Q4P1/PP1NPP2/R1B1KB1R b KQk - 0 10|f7f6 b3f7|815|mate,mateIn1,oneMove|
1yh0zyd|rr4k1/pR3ppp/4p3/4N3/b7/4K2P/1P3PP1/2R5 w - - 1 23|c1c8 b8c8|815|winningMaterial,oneMove,hangingPiece|
j3odj6|2r3k1/p1pR1bpp/8/1pnP1p2/5B1P/2P2BP1/P4PK1/8 w - - 0 27|d7f7 g8f7|820|winningMaterial,oneMove,hangingPiece|
94nk0u|r2q1rk1/3bb1pp/p3p3/n2p1p2/Q2P1B2/2PBPN1P/5PP1/2R1R1K1 w - - 1 19|a4d7 d8d7|820|winningMaterial,oneMove,hangingPiece|
1snzz09|3R4/p1k4N/r4p2/2p5/3p3P/P5P1/bPP2P2/2K5 w - - 1 40|d8c8 c7c8|820|winningMaterial,oneMove,hangingPiece|
18h8zys|2rR2k1/5pp1/pQ3n1p/4p3/1P2P2P/1q3BP1/5PK1/8 b - - 5 36|g8h7 d8c8|820|winningMaterial,oneMove,hangingPiece|
121fp6a|1r6/5k2/2R1p1N1/1p1n1pPp/1P3P1P/6K1/8/8 w - - 7 52|g3g2 f7g6|820|winningMaterial,oneMove,hangingPiece|
zi86xq|5r2/1p2R1pk/3b2pp/pP1P4/8/1BP3P1/5P2/6K1 w - - 1 36|e7f7 f8f7|820|winningMaterial,oneMove,hangingPiece|
vcohb2|r2qk2r/pp3nR1/2pp4/Q3pb2/2P1n3/5N1P/PP2PP2/R1B1KB2 w Qkq - 0 16|g7g8 h8g8|825|winningMaterial,oneMove,hangingPiece|
11gtvfn|2qr2k1/1p2npp1/r1pb3p/pQ1p4/3PP3/P1B2NP1/1P3PKP/R3R3 w - - 0 22|b5a6 b7a6|825|winningMaterial,oneMove,hangingPiece|
q1yf4p|r3r1k1/1R4bp/b3p1p1/3pN3/3P1PPn/4Q2P/4n3/2B2RK1 w - - 0 29|e3e2 a6e2|825|winningMaterial,oneMove,hangingPiece|
1fqb0ve|8/5B2/1R5k/6p1/p5K1/1p6/5P2/3r4 b - - 1 52|d1d6 b6d6|825|winningMaterial,endgame,oneMove,hangingPiece|
sc9zdz|8/5pk1/1P6/1B4pp/3Pp2P/R3P1PK/2r2r2/3R1N2 w - - 0 33|d1d2 g5g4|825|mate,mateIn1,oneMove|
s19wbq|2kr1r2/1p6/1p2p3/p6p/1P1P1p2/P3BP1K/2B5/6R1 w - - 0 44|e3f4 f8f4|825|winningMaterial,oneMove,hangingPiece|
1kqrlei|R1k3r1/2rn2B1/7p/1pb2q2/8/1P5P/6P1/3RQ2K b - - 2 31|c8b7 a8g8|830|winningMaterial,oneMove,hangingPiece|
mkd0d9|5r1k/3n4/2p2p1P/2Pp2p1/5P1B/P7/2K1NP2/5B2 w - - 0 29|e2c1 g5h4|830|winningMaterial,oneMove,hangingPiece|
1qh6dyp|q3r1k1/4pR2/r5p1/2pnQ3/8/2N5/Pn1B2PP/1R5K b - - 0 22|b2d1 e5g7|830|mate,mateIn1,oneMove|
1gv4ohw|6k1/5r2/1pq2pp1/2P4p/p1B4P/P1B1Q1Pb/1P3P2/6K1 w - - 5 38|c4a2 c6g2|830|mate,mateIn1,oneMove|
qc9k6w|r4k1r/1pq2pp1/p2Qb3/4PN1p/2P1P3/6PP/PP3bB1/R1B4K b - - 5 22|f8e8 f5g7|830|mate,mateIn1,oneMove|
1u6zo96|2kr3r/ppp2pp1/4bq1p/3N4/2n1P3/5BP1/PPQ2P1P/R1R3K1 b - - 0 17|f6b2 c2c4|830|winningMaterial,oneMove,hangingPiece|
xd83uj|3r2k1/5p1p/2R3p1/1p6/7P/6P1/1P3P2/3rR1K1 w - - 3 37|c6b6 d1e1|835|winningMaterial,oneMove,hangingPiece|
1wo3qrk|2r1qr2/pp4kp/1n1Q1p2/3P3R/8/5BP1/P1p2PK1/1R6 w - - 0 31|h5h7 g7h7|835|winningMaterial,oneMove,hangingPiece|
1oatj5q|2R5/8/8/5k2/6p1/4r1K1/8/8 w - - 6 73|g3h4 e3h3|835|mate,mateIn1,endgame,oneMove|
bqjij7|6k1/p5p1/5r1p/P1p5/3pR3/1P1P3P/2P1Rr2/6K1 b - - 2 42|f6g6 g1f2|835|winningMaterial,oneMove,hangingPiece|
1xwltgl|rnb1kbnr/ppp2ppp/8/3qp3/2PpN3/P2P4/1P2PPPP/R1BQKBNR b KQkq c3 0 5|d5e4 d3e4|835|winningMaterial,oneMove,hangingPiece|
1a0lus4|1rk5/3p4/p5Q1/8/3B3P/3PP3/q3KP2/8 w - - 5 44|e2d1 b8b1|835|mate,mateIn1,endgame,oneMove|
40hdup|2r3k1/8/p2r2p1/N3pp1p/1P2B2P/6P1/5P2/1R5K w - - 0 40|e4f5 g6f5|835|winningMaterial,oneMove,hangingPiece|
1o2b0xa|5knr/4pp1p/3p2p1/8/1P1P4/2QB1P2/3q3P/2R4K b - - 3 24|d2c1 c3c1|840|winningMaterial,oneMove,hangingPiece|
100n11w|8/qp1r1Np1/2p2n1k/5P1p/2QbP3/2P3PP/r1B5/1R1K1R2 b - - 4 32|d7f7 c4f7|840|winningMaterial,oneMove,hangingPiece|
gxdray|8/r3k2p/8/1R1np3/P4ppP/6P1/1N1K1P2/8 b - - 1 39|e5e4 b5d5|840|winningMaterial,oneMove,hangingPiece|
6cosqr|8/pR4kp/6p1/3B4/1P3bP1/3P4/4r3/6K1 b - - 3 33|f4c7 b7c7|840|winningMaterial,endgame,oneMove,hangingPiece|
1nutxys|8/5k2/p7/1p1bpp1p/3p1P1r/P2P4/2P1NRK1/2R5 w - - 2 38|g2g1 h4h1|840|mate,mateIn1,oneMove|
lfbksr|r1b1k2r/pp2bp1p/n1pp2p1/1N1P4/8/P4NP1/1PP1K2P/R1B1R3 w kq - 0 16|b5d6 e7d6|840|winningMaterial,oneMove,hangingPiece|
1rxk8fm|4k2r/1p3pp1/1qp2n2/2b1pP1p/4P3/r1PN2PP/2BPQ3/1R2K2R b Kk - 1 21|b6b1 c2b1|845|winningMaterial,oneMove,hangingPiece|
1w9uac5|6k1/6p1/4P1Q1/8/8/4B1P1/q4K2/8 w - - 0 44|g6c2 a2c2|845|winningMaterial,endgame,oneMove,hangingPiece|
1jkskn6|4r1k1/4qppp/p7/2p5/R1Q5/1P4PP/2P2nK1/5N2 b - - 0 30|h7h5 g2f2|845|winningMaterial,oneMove,hangingPiece|
9ujkkd|r3k3/6R1/4BK2/8/5p2/p7/1p6/8 b - - 11 64|a8a5 g7g8|845|mate,mateIn1,endgame,oneMove|
e9vfw6|r3r1k1/1p3pp1/1b1qp2p/p7/Q1NPp3/4P3/1P3PPP/R4RK1 b - - 1 24|d6e7 c4b6|845|winningMaterial,oneMove,hangingPiece|
lsbhhw|8/2Q4k/6p1/4n1q1/4P3/5P2/3r2PP/6RK b - - 8 50|e5f7 c7f7|845|winningMaterial,endgame,oneMove,hangingPiece|
otvkph|r1bqkb1r/1p3ppp/p2p2n1/2p5/3QP3/1B2B3/PPP2PPP/RN2K2R w KQkq - 0 10|b3f7 e8f7|845|winningMaterial,oneMove,hangingPiece|
4l8pbj|8/p1k1Rp1p/3q2bb/8/2p3P1/2P2B2/PP1N4/2K1R3 b - - 2 38|d6e7 e1e7|850|winningMaterial,oneMove,hangingPiece|
1jvr1sb|r3k1nr/ppp2p1p/8/3qN1B1/2b5/3pP1P1/PP1Q1P1P/2KR3R w kq - 2 15|e3e4 d5e5|850|winningMaterial,oneMove,hangingPiece|
14ywgk9|r5k1/5p2/q1bQ2p1/7P/4n3/NPPpP3/PK3P2/2RR4 w - - 1 37|h5g6 e4d6|850|winningMaterial,oneMove,hangingPiece|
a0oau9|r1b1k2r/1pqn1Np1/p1nbp2p/3p4/3P1B2/PNP4P/1PQ1BPP1/4RRK1 b kq - 0 16|d6f4 f7h8|850|winningMaterial,oneMove,hangingPiece|
1so6rc0|6k1/p5pp/2p5/8/2N1pnP1/1P5P/P1Pq4/5QK1 b - - 4 31|d2c1 f1c1|850|winningMaterial,oneMove,hangingPiece|
17ek0uk|7k/7p/pQ2BP2/2pP1P2/7P/P5q1/3K2b1/8 b - - 8 41|g3d3 d2d3|850|winningMaterial,oneMove,hangingPiece|
1k5aukt|1r4k1/1Q3pp1/2n1bq1p/8/4P2P/3P2P1/3NBP2/5K1R w - - 1 28|b7b8 c6b8|850|winningMaterial,oneMove,hangingPiece|
swtocf|r1bk1b1r/1pp1np2/7p/pN2n3/2p2P2/P1N3P1/1P5P/R1B1KB1R b KQ - 0 13|e7f5 f4e5|855|winningMaterial,oneMove,hangingPiece|
67lz6c|1Rb5/2r2k1B/4pp1B/4pn2/1p6/1P3P2/6PP/6K1 w - - 1 43|h2h3 f5h6|855|winningMaterial,oneMove,hangingPiece|
x9zluf|1R4k1/2pq1rp1/p7/4Q2p/4P3/5P1P/2p3P1/7K b - - 1 41|g8h7 e5h5|855|mate,mateIn1,oneMove|
1ft2wev|r4rk1/pp4p1/1n1q2N1/1P1p1nPp/3P3P/2PB1P2/5K2/R1Q4R w - - 1 29|h1g1 d6g6|855|winningMaterial,oneMove,hangingPiece|
pf3akd|r1bqkb1r/pp2npp1/4p2p/2p1P3/1n6/N1P3Q1/PP2BPPP/R1B1K1NR b KQkq - 0 10|c5c4 c3b4|855|winningMaterial,oneMove,hangingPiece|
18bz3zs|1r3Bk1/p4pp1/4p1b1/4P2p/3qP2P/3p1P2/5KP1/R5QR w - - 3 23|f2f1 d4a1|855|winningMaterial,oneMove,hangingPiece|
11fp9gm|r2qkbnr/ppp2ppp/2n5/4pb2/2B1N3/5N2/PPPP1PPP/R1BQK2R w KQkq - 2 6|d2d4 f5e4|855|winningMaterial,oneMove,hangingPiece|
px29oi|4rr1k/p5pp/5p2/3p4/7P/1Q4P1/PPPR1q2/2K4R b - - 3 25|f2d2 c1d2|860|winningMaterial,oneMove,hangingPiece|
o3ajwy|r2qkb1r/p4pp1/bnQpp2p/4P3/3P4/4BN2/PP3PPP/RN2K2R b KQkq - 0 12|b6d7 c6a6|860|winningMaterial,oneMove,hangingPiece|
1n42ohd|8/4R3/1r6/p1p5/P1P1k3/8/4K3/8 b - - 4 59|b6e6 e7e6|860|winningMaterial,endgame,oneMove,hangingPiece|
vocgww|1rr2k2/p1q3pp/2p5/p2pN3/P2P3P/1P2pPn1/6Q1/R1R3K1 b - - 1 27|c7d6 g2g3|860|winningMaterial,oneMove,hangingPiece|
169j6cs|3r4/6pk/6n1/3PQpqr/4p2p/7P/P3NPP1/1R1R2K1 w - - 5 32|e5g7 h7g7|860|winningMaterial,oneMove,hangingPiece|
b54v2c|1rq2rk1/3bbppp/p2p2n1/1p3P1Q/4P3/1pP1B2R/PP1N2PP/R5K1 b - - 1 18|b5b4 h5h7|860|mate,mateIn1,oneMove|
1c8w2kp|r3k2r/pp1bppbp/6p1/q7/2NPpB2/1PNnP2P/P4PP1/2RQ1RK1 b kq - 5 15|d3c1 c4a5|865|winningMaterial,oneMove,hangingPiece|
ktw9fy|7k/1R6/6p1/p6p/5P1P/6P1/r6K/8 w - - 5 58|b7b2 a2b2|865|winningMaterial,endgame,oneMove,hangingPiece|
feyig3|r3k1n1/1p2p1r1/p3bp2/2Rp1q1p/3N1p1B/2Q4P/P4PP1/4R1K1 b q - 7 26|g7g2 g1g2|865|winningMaterial,oneMove,hangingPiece|
1sti0ow|5k2/5p2/p1Npb3/8/2P2P2/P1R1b2P/4K3/4B1r1 b - - 2 45|g1e1 e2e1|865|winningMaterial,oneMove,hangingPiece|
1xmhc5y|6k1/p1b2p2/P3n2p/8/1P4pQ/8/4N3/3r3K w - - 10 44|h4e1 d1e1|865|winningMaterial,fork,endgame,oneMove,hangingPiece|
1kgl3lb|6k1/4bp1p/r3p3/N1p5/2P2P2/7P/PP1R1P2/5K2 w - - 1 35|a2a3 a6a5|865|winningMaterial,oneMove,hangingPiece|
119fljq|r1b1kb1r/p6p/2p2Pp1/q2pQ3/1n6/6P1/PPPN1P1P/R1B1KB1R b KQkq - 0 14|f8e7 e5e7|865|mate,mateIn1,oneMove|
1wfnell|r7/3nkpr1/p3p1PQ/1p1p3P/2pPb3/2P3q1/PP4P1/RN1B1RK1 w - - 1 25|a2a3 g3g2|870|mate,mateIn1,oneMove|
1r9v218|r5k1/1Q3p2/8/p7/7p/2P4P/1P1K2P1/r7 b - - 0 39|a5a4 b7a8|870|winningMaterial,endgame,oneMove,hangingPiece|
8unhba|1r3rk1/3qbppp/R4n2/1Pp1p3/2P1P3/1BNP1nK1/2Q2P2/2B4R w - - 2 24|d3d4 d7g4|870|mate,mateIn1,oneMove|
12kiega|4Rn2/5pkp/3P1P2/P1p4p/r7/8/6P1/6K1 b - - 0 38|g7h8 e8f8|870|mate,mateIn1,endgame,oneMove|
be1gla|2r5/3r1pk1/p5p1/3RP3/Pp4N1/1n5P/5PP1/5RK1 w - - 0 39|f1b1 d7d5|870|winningMaterial,oneMove,hangingPiece|
7kkqcf|5r2/2p2pk1/3b3p/pq1pN1r1/3P1P2/4Q3/1P4P1/RR4K1 b - - 0 36|g5g2 g1g2|870|winningMaterial,oneMove,hangingPiece|
li6kwu|2r4r/5R2/p2ppRp1/1p5k/3PP2p/P1N4P/1nP5/6K1 w - - 0 34|c3b5 a6b5|870|winningMaterial,oneMove,hangingPiece|
o43ot4|8/P5p1/3Q2k1/1K6/4q3/2P5/4p3/8 b - - 3 74|e4e6 d6e6|870|winningMaterial,endgame,oneMove,hangingPiece|
55i992|8/8/P2k2p1/Q1p3P1/3n3r/4p3/8/4K3 w - - 3 52|a5d2 h4h1|875|mate,mateIn1,endgame,oneMove|
lpk1u3|6k1/3n1pp1/p1q5/4P2Q/7P/6P1/4BPK1/8 w - - 3 44|g2f1 c6h1|875|mate,mateIn1,oneMove|
1rhgrcm|5rk1/5p2/1q2n1p1/RQ6/8/1P5P/P4rB1/5R1K b - - 2 41|b6d6 f1f2|875|winningMaterial,oneMove,hangingPiece|
1desrpd|R1br4/2b1k1p1/4p2p/p7/P1r4P/B7/5PP1/1B1R2K1 b - - 4 35|e7e8 b1g6|875|mate,mateIn1,oneMove|
iumw03|2rr2k1/4pp1p/6p1/p3P3/1pB1bP2/1P5P/P1K2RP1/3R4 w - - 3 26|c2b2 d8d1|875|winningMaterial,oneMove,hangingPiece|
195gb2|2r5/2b1nk2/P1R1N1p1/1p3p2/1P3PpP/2Pp4/3B2K1/8 w - - 1 43|c3c4 e7c6|875|winningMaterial,oneMove,hangingPiece|
1dq7rse|2r2rk1/5p2/6p1/pq2Rn2/5Q2/1P5P/P5B1/5RK1 b - - 6 36|b5e5 f4e5|875|winningMaterial,oneMove,hangingPiece|
1rh1svd|8/3K4/8/8/7Q/8/5k2/4q3 b - - 0 69|f2e3 h4e1|880|winningMaterial,endgame,oneMove,hangingPiece|
ht9q2c|5rk1/2p3p1/3p1pn1/6pQ/q3P3/2P1R2P/5P2/4R1K1 b - - 4 28|f8e8 h5g6|880|winningMaterial,oneMove,hangingPiece|
1raluwa|2r5/4kpp1/p2rp2p/B7/2P3P1/bR5P/P4P2/R5K1 b - - 5 27|g7g5 b3a3|880|winningMaterial,oneMove,hangingPiece|
b67mm7|1rbq1rk1/2p1bppp/2n1p3/pp1n4/2NP4/P1N3P1/1P2PPBP/R1BQ1RK1 w - - 0 12|c3b5 b8b5|880|winningMaterial,oneMove,hangingPiece|
yuy747|8/1K3qpk/1P1Q3p/4P2P/6b1/8/8/8 w - - 2 63|d6d7 f7d7|880|winningMaterial,endgame,oneMove,hangingPiece|
1lb9725|8/1pk5/5b1p/8/p3R3/P1P2P2/1P2B3/3K2r1 w - - 4 36|e2f1 g1f1|880|winningMaterial,endgame,oneMove,hangingPiece|
piojq7|2r3k1/4b1pp/Q1q1p3/4Bp2/2pP4/4P2P/2R2PP1/6K1 w - - 1 29|a6c8 c6c8|880|winningMaterial,oneMove,hangingPiece|
10z6j32|6k1/r4p2/bq2p1p1/1p1pP1Pp/8/8/5QNP/1R3BK1 b - - 0 34|b6c6 f2a7|885|winningMaterial,oneMove,hangingPiece|
eoprvi|8/r3k3/3p4/4p1n1/1R4NP/8/4K1P1/8 b - - 0 50|e7e6 h4g5|885|winningMaterial,endgame,oneMove,hangingPiece|
1u7l5wf|8/k4R2/1p6/8/2r3p1/8/4KP2/8 b - - 1 64|c4c7 f7c7|885|winningMaterial,endgame,oneMove,hangingPiece|
166h3cs|3k4/n7/8/2P5/Bp2K3/8/8/8 b - - 9 57|a7b5 a4b5|885|winningMaterial,endgame,oneMove,hangingPiece|
mscxty|2kr3r/ppq2p1p/2p3p1/5b2/P1B3P1/1Pb1PQ1P/R1P1KP2/2B4R b - - 0 16|f5e4 f3e4|885|winningMaterial,oneMove,hangingPiece|
a5s76v|3r2k1/5pp1/5n1p/1B4q1/8/RP2PP1P/5P2/5QK1 w - - 1 27|f1g2 g5b5|885|winningMaterial,oneMove,hangingPiece|
26jrnw|3k4/ppp3B1/4P1p1/8/4pR2/1P2n1P1/P5K1/3r4 w - - 4 33|g2h3 d1h1|885|mate,mateIn1,oneMove|
1y6e52b|8/8/pk6/4R3/5bP1/8/KPP4P/3r4 w - - 1 46|e5d5 d1d5|890|winningMaterial,endgame,oneMove,hangingPiece|
1ai1d0e|4R3/kp6/p7/3P1p2/5q2/4n2P/1P4B1/6RK w - - 9 49|e8e3 f4e3|890|winningMaterial,endgame,oneMove,hangingPiece|
1stwyvv|8/5Q2/2q5/7P/2r2k2/8/7K/8 b - - 11 77|c6f6 f7f6|890|winningMaterial,endgame,oneMove,hangingPiece|
9waoib|r1b1k2r/ppp1nppp/1bn5/1B1qN3/8/2P5/PP1P1PPP/RNBQ1RK1 w kq - 0 8|b5a4 d5e5|890|winningMaterial,oneMove,hangingPiece|
1bhpgmz|2q5/5pk1/p7/P2p2p1/3Pp2p/1Q2P2P/5PP1/R1r3K1 w - - 21 54|b3d1 c1d1|890|winningMaterial,fork,oneMove,hangingPiece|
1644lup|8/1p4k1/7R/1r5p/4B2b/1P6/8/6K1 w - - 5 41|h6h5 b5h5|890|winningMaterial,endgame,oneMove,hangingPiece|
1dldxmx|8/6pk/4p3/4q3/Q7/7P/6PK/8 w - - 0 43|a4f4 e5f4|890|winningMaterial,endgame,oneMove,hangingPiece|
1y3nsc9|8/8/6k1/7p/P7/KPP2n1R/6r1/8 b - - 4 56|h5h4 h3f3|890|winningMaterial,endgame,oneMove,hangingPiece|
1nf11te|6k1/1p6/p1pr2R1/7P/1P6/P1Q2P2/4q3/6K1 b - - 0 43|g8h7 c3g7|895|mate,mateIn1,oneMove|
fsrbsa|r5k1/6pp/2p1p1n1/p2rp3/1p3qQ1/1P1P3P/1PPN1PPK/R4R2 w - - 2 27|h2g1 f4d2|895|winningMaterial,oneMove,hangingPiece|
1dfab28|1rbqk2r/4bppp/p2p2n1/1p1P4/P1N5/4BN2/1P2QPPP/R4RK1 w k - 0 15|c4a5 d8a5|895|winningMaterial,oneMove,hangingPiece|
185mfxa|2R5/4kpp1/2B1n3/4P3/r7/8/8/6K1 b - - 1 49|a4a7 c8e8|895|mate,mateIn1,endgame,oneMove|
i05of4|6k1/3R1r2/7p/r2p1pp1/P2P3P/8/R6K/8 w - - 2 36|a2f2 f7d7|895|winningMaterial,endgame,oneMove,hangingPiece|
t8zt0p|8/5k2/2R3p1/2P2p2/5P2/4PK2/3r4/8 w - - 3 42|c6e6 f7e6|895|winningMaterial,endgame,oneMove,hangingPiece|
127ixsi|1rq1R2k/p1b2Qpp/1p3n2/8/P1p5/BP6/2P2PP1/3R2K1 b - - 0 29|f6e8 f7f8|895|mate,mateIn1,oneMove|
qb8zd6|2r1r3/4Pkp1/5p2/1pB3q1/1P1R4/P1n1Q3/2p5/2R3K1 w - - 0 37|e3g3 g5g3|900|winningMaterial,oneMove,hangingPiece|
17x4vk|8/1p4kp/8/p7/P3Np1P/2b4K/5PP1/8 b - - 0 40|b7b5 e4c3|900|winningMaterial,endgame,oneMove,hangingPiece|
1w9f1ck|rn2k2r/ppp1ppb1/6p1/7p/3Pq1bP/5P2/PPPQN1P1/1K1R1B1R b kq - 0 13|e4c2 b1c2|900|winningMaterial,oneMove,hangingPiece|
1ttqdxv|r3r1k1/p4p2/2pp3p/5QP1/4P3/P3BP2/1bP1K2q/1N4R1 w - - 2 29|g1g2 h2g2|900|winningMaterial,oneMove,hangingPiece|
1diu17t|B7/7p/4k3/5N2/8/1Pn3PP/3r4/5K2 w - - 3 49|a8f3 e6f5|900|winningMaterial,endgame,oneMove,hangingPiece|
16lhgc3|8/5k2/4pp2/1P5p/2Q5/6B1/3q2K1/8 w - - 3 59|c4e2 d2e2|900|winningMaterial,endgame,oneMove,hangingPiece|
sn3jgj|8/6pk/6p1/1Q6/3q2P1/8/PP6/3K4 w - - 9 48|b5d3 d4d3|900|winningMaterial,endgame,oneMove,hangingPiece|
nwup2s|3k2r1/1pp5/4Q2p/p5r1/P1PP4/1PBq4/3N4/2K4R w - - 3 36|h1f1 d3c3|900|winningMaterial,oneMove,hangingPiece|
1sqpdgq|8/8/2p1b2p/3k3Q/3p3P/PP3p2/4qP2/2KN4 b - - 5 50|e6f5 h5f5|905|winningMaterial,oneMove,hangingPiece|
t0rq3h|8/8/5k2/8/3p1K2/1BnP4/8/8 b - - 6 73|c3d5 b3d5|905|winningMaterial,endgame,oneMove,hangingPiece|
uu7oqq|r3k2r/p1p1bp2/bpn1p3/6pp/3P4/1PP1BNPQ/P1q2PBP/RN2K2R w KQkq - 4 15|b1a3 c2e2|905|mate,mateIn1,oneMove|
198a3ud|r7/1p2k1p1/8/2pPpP1r/2n4b/PB5P/1P3P2/R1BK3R b - - 2 20|c4b2 c1b2|905|winningMaterial,oneMove,hangingPiece|
113m167|3Q2k1/4qppp/p7/8/6n1/4P2P/pr2NPP1/3R2K1 b - - 1 27|e7d8 d1d8|905|mate,mateIn1,oneMove|
1pn8qez|3r4/2R2nkp/3B1pp1/8/7P/8/1P3PP1/6K1 w - - 1 34|g1f1 d8d6|905|winningMaterial,endgame,oneMove,hangingPiece|
cqibl2|5bk1/5p2/3P1P2/4Ppr1/8/1p3K2/8/7R b - - 0 43|f8d6 e5d6|905|winningMaterial,endgame,oneMove,hangingPiece|
1q82y2e|r6k/pp1B2pp/3q4/4nQ2/P5P1/7P/1P3P2/R5K1 w - - 0 31|f5e4 e5d7|905|winningMaterial,oneMove,hangingPiece|
1vwvsow|8/5pk1/1ppR2p1/p5N1/P1P3P1/4K3/1P3r2/7b b - - 8 43|g7h6 e3f2|910|winningMaterial,oneMove,hangingPiece|
ppeo1a|8/8/R1nk4/8/5K2/8/8/8 b - - 16 66|d6e6 a6c6|910|winningMaterial,endgame,oneMove,hangingPiece|
q0oufx|8/2B1pp1k/p3r1pb/7p/4n2P/5BP1/P1RrPPK1/5R2 w - - 4 27|c2c5 e4c5|910|winningMaterial,oneMove,hangingPiece|
1jvuv0s|1k1r2br/p3b3/Pq3pB1/NQp3pp/1n1pP2P/1P4P1/5P1K/R3NR2 w - - 1 34|b5b4 c5b4|910|winningMaterial,oneMove,hangingPiece|
jdr5d5|2k3r1/R4R1p/p7/3p2r1/P1pP4/2P2b2/2P5/6K1 w - - 0 29|g1h2 g5h5|910|mate,mateIn1,oneMove|
c3hu5o|8/4b3/7p/2B1pk2/5p1P/r1nN1P2/3R2P1/7K b - - 8 49|a3a4 c5e7|910|winningMaterial,oneMove,hangingPiece|
b7aq6s|4R3/3r3p/7K/3k4/3p1p2/R6P/4n1P1/8 b - - 7 51|d5c4 e8e2|910|winningMaterial,endgame,oneMove,hangingPiece|
117n60k|3r4/1kp1R2P/2p5/p1Q2b1q/P7/1P6/1KP4P/8 b - - 4 41|h5d1 c5f5|910|winningMaterial,oneMove,hangingPiece|
1we6ej4|6k1/p4p2/7p/2p1r1p1/2Pb3B/R6P/P2P1P2/5K2 w - - 0 32|a3a7 g5h4|915|winningMaterial,oneMove,hangingPiece|
1ioxjwi|5R2/1p1b2k1/4p2p/p2pq3/6P1/1P6/P2Q1P2/7K w - - 1 41|f8b8 e5b8|915|winningMaterial,oneMove,hangingPiece|
1iet02q|8/5kQ1/p4Bb1/4p3/P7/7P/5qPK/4r3 b - - 3 47|f7e8 g7e7|915|mate,mateIn1,endgame,oneMove|
xzcinf|8/4k3/2PR2p1/7p/4P3/6r1/6P1/3K4 w - - 1 43|d6g6 g3g6|915|winningMaterial,endgame,oneMove,hangingPiece|
zeklop|4r2k/8/1P1p3P/2p5/7B/2P5/1b3r2/1N1K2R1 b - - 5 43|b2c3 h4f2|915|winningMaterial,endgame,oneMove,hangingPiece|
1538tde|2r5/8/5k2/3p3P/p2P3n/2P1R2K/P7/8 b - - 1 41|a4a3 h3h4|915|winningMaterial,endgame,oneMove,hangingPiece|
101vimd|r3nbk1/p3r1pp/5p2/1p1p4/qB2PNQ1/7P/5PP1/1R2R1K1 b - - 1 34|e8d6 b4d6|915|winningMaterial,oneMove,hangingPiece|
1vq1bni|8/2k5/8/3RPR2/1K3P2/6r1/Pr6/8 w - - 7 47|b4a5 g3a3|915|mate,mateIn1,endgame,oneMove|
bf03t2|rn1qkb1r/pp1n1ppp/2p1p3/2Pp4/3Pb2N/2N1P3/PP2BPPP/R1BQK2R w KQkq - 3 9|a2a4 d8h4|920|winningMaterial,oneMove,hangingPiece|
16u7r8y|1r1r1k2/1R2pp1p/p1n3pP/2p5/4R3/2P2B2/P4PP1/6K1 w - - 1 27|e4a4 b8b7|920|winningMaterial,oneMove,hangingPiece|
17gv2ds|5k2/3bpp1p/p2pN1p1/P1pP4/1rP1n1P1/2Q4P/5P1K/8 b - - 8 31|f8g8 c3g7|920|mate,mateIn1,oneMove|
2qbbtx|8/4r1k1/P5p1/2q4p/7P/8/1Q3PK1/8 b - - 1 51|c5c3 b2c3|920|winningMaterial,endgame,oneMove,hangingPiece|
1snnip3|8/1ppk2p1/p1p3P1/4R3/8/1PP5/P2P4/2K3r1 w - - 1 36|e5e1 g1e1|920|winningMaterial,oneMove,hangingPiece|
972lve|8/4Q1kp/5r2/3ppp2/3b2Pn/3b2K1/8/2B5 b - - 3 47|g7h8 e7f6|920|winningMaterial,fork,endgame,oneMove,hangingPiece|
14efsap|1k5r/pp3Qpp/1np5/6r1/P2q4/3B4/2P2PKP/1R2R3 w - - 0 23|g2h3 d4g4|920|mate,mateIn1,oneMove|
enaip2|6k1/1pqb1pp1/1Q1p3p/p7/P2B4/7P/5PP1/2R3K1 b - - 0 25|c7b6 d4b6|920|winningMaterial,oneMove,hangingPiece|
1o9bfx0|8/4k3/8/2R5/P7/8/r4K2/8 w - - 3 55|c5c2 a2c2|925|winningMaterial,endgame,oneMove,hangingPiece|
1g1hltj|8/8/8/1p1RB3/4k1b1/8/3K4/6r1 w - - 10 74|d5d4 e4e5|925|winningMaterial,endgame,oneMove,hangingPiece|
10cl1cq|3qrbk1/5ppp/pn6/1pB5/4P3/Pb4PP/3rQPB1/R4NK1 w - - 0 27|e2d2 f8c5|925|winningMaterial,oneMove,hangingPiece|
v9q8bx|R4k2/2r2r2/6R1/3p1p1P/6p1/6K1/8/8 b - - 10 47|c7c8 a8c8|925|winningMaterial,endgame,oneMove,hangingPiece|
1rd4bls|2qrr1k1/5pp1/7p/p3BR2/P1Q3PP/7b/1P3P2/2R3K1 b - - 0 30|c8f5 g4f5|925|winningMaterial,oneMove,hangingPiece|
u0q9ys|r1bqkb1r/p2ppppp/1pn5/3nP3/3P4/2N5/PP2BPPP/R1BQK1NR b KQkq - 2 7|c8b7 c3d5|925|winningMaterial,oneMove,hangingPiece|
1v4czp8|5r2/3k1pp1/p1n5/3pP1p1/2B5/5b2/PP3P1P/R4RK1 w - - 0 25|c4d5 f3d5|925|winningMaterial,oneMove,hangingPiece|
1og7dnl|5k2/7p/5P2/7P/1n6/1B4K1/8/8 b - - 0 45|b4c2 b3c2|925|winningMaterial,endgame,oneMove,hangingPiece|
1g0wvr1|r2q1rk1/p1pb1ppp/1bpp1n2/4P3/Q3P3/2P2N2/PP1N1PPP/R1B1R1K1 b - - 0 11|b6f2 g1f2|930|winningMaterial,oneMove,hangingPiece|
ahapao|6k1/1b4b1/7p/5p2/P5pP/R7/1Pr2PP1/2B2NK1 w - - 6 39|a4a5 c2c1|930|winningMaterial,oneMove,hangingPiece|
1hgryz0|2R1kb1r/3b1p2/4p3/4P3/3B4/4PN1p/5P1R/4K3 b k - 0 35|e8e7 d4c5|930|mate,mateIn1,oneMove|
1gapgn0|3Q1bk1/5p2/2q2P2/4Pp2/8/2KR4/8/8 w - - 17 56|c3d4 c6c5|930|mate,mateIn1,endgame,oneMove|
1j7k96z|8/1r5k/3BK1p1/p5Pp/P1RP1P1P/3Q4/8/4q3 w - - 3 59|d3e4 e1e4|930|winningMaterial,oneMove,hangingPiece|
1l0syj4|8/4k3/3b3p/4p3/n4p2/5P1P/r5PB/3RN2K w - - 7 44|h2f4 e5f4|930|winningMaterial,endgame,oneMove,hangingPiece|
dsa8u2|8/5kp1/p1pb4/3p1P2/PP6/2B5/4n3/2K2R2 w - - 1 39|c1d1 e2c3|930|winningMaterial,endgame,oneMove,hangingPiece|
1o81xec|7r/8/3p4/p1k5/3R4/P6P/5PP1/6K1 w - - 1 42|d4d6 c5d6|930|winningMaterial,endgame,oneMove,hangingPiece|
3lr96r|1k1r4/1pp5/2n2rqp/p1N2P2/3n2B1/PQ2p3/1P3B2/1KR4R b - - 0 32|e3e2 b3b7|935|mate,mateIn1,oneMove|
iuufdc|3r2k1/5pp1/5n2/2P3Q1/p2NP2P/B1q2PPb/2P5/2KR4 w - - 3 43|g5g7 g8g7|935|winningMaterial,oneMove,hangingPiece|
2i7jl6|5R2/6k1/r3pN1p/2n5/1p3P2/4PK2/6PP/8 w - - 1 44|f8e8 g7f6|935|winningMaterial,endgame,oneMove,hangingPiece|
dw9fcr|3b2k1/6p1/7p/p6r/3R3P/5K2/4p3/4R3 b - - 3 43|g8h7 d4d8|935|winningMaterial,endgame,oneMove,hangingPiece|
15fqbjq|1k3b1r/6p1/2Q5/P2r3p/R2p1q2/4p2P/1PP3P1/6KR w - - 4 28|a4b4 f8b4|935|winningMaterial,oneMove,hangingPiece|
hz6a13|8/8/8/1p2r1P1/1k5R/1p6/1K6/8 b - - 9 60|e5e4 h4e4|935|winningMaterial,endgame,oneMove,hangingPiece|
qmdvz1|1k5r/2p4p/2R2pp1/p7/Pbn1P2P/8/5PP1/1R4K1 b - - 8 29|c4e3 f2e3|935|winningMaterial,oneMove,hangingPiece|
eph4lm|r7/2k1bpp1/1P2p2p/2p1P3/4r2P/4B2R/5PP1/R3K3 b Q - 0 24|c7b6 a1a8|935|winningMaterial,oneMove,hangingPiece|
1mjrdoa|8/2Q2k2/4p3/5pP1/8/3q4/5K1P/8 b - - 7 74|d3d7 c7d7|940|winningMaterial,endgame,oneMove,hangingPiece|
htq3af|3R4/5pk1/p2Qpnp1/6Np/7P/P7/1Pr1KPPq/8 w - - 10 30|e2f1 h2h1|940|mate,mateIn1,oneMove|
100kgjn|2kr3r/pbp1bp2/1pn1p3/6Np/3P2p1/1PP1BPP1/P1q3QP/RN2KB1R b KQ - 0 18|c2g2 f1g2|940|winningMaterial,oneMove,hangingPiece|
c2oyr5|r7/1p1k3p/2p1nr1N/3p4/1P5P/P5P1/6K1/R3R3 w - - 0 29|a3a4 f6h6|940|winningMaterial,oneMove,hangingPiece|
1u7gf6w|6k1/5p2/p5pb/7p/PNr5/8/1P3PPP/1R3K2 w - - 3 33|b4c2 c4c2|940|winningMaterial,oneMove,hangingPiece|
11vp160|3r2k1/4bp1p/n1B5/1P3p2/5Pp1/6P1/2Np1P1P/3R2K1 b - - 0 34|g8g7 b5a6|940|winningMaterial,oneMove,hangingPiece|
iwukwm|5k2/Q7/8/3q3p/4N2P/6P1/5P1K/3r4 w - - 11 58|a7b6 d5e4|940|winningMaterial,endgame,oneMove,hangingPiece|
9w1isj|8/8/p7/1p5R/1P2kp2/5r2/1PPK4/8 b - - 0 41|f3h3 h5h3|940|winningMaterial,endgame,oneMove,hangingPiece|
11la9w6|8/8/p5R1/3k4/3Pp3/P3P3/3K3r/8 w - - 11 55|g6g2 h2g2|940|winningMaterial,endgame,oneMove,hangingPiece|
1kxg14|4R3/pp6/5Kpk/8/7p/8/6n1/8 b - - 1 53|h4h3 e8h8|945|mate,mateIn1,endgame,oneMove|
zlrfzi|3q1k2/1p4p1/p1p1Q1p1/8/P1P5/2P1R3/5P1P/2r2K2 w - - 7 39|f1e2 d8d1|945|mate,mateIn1,oneMove|
xv3yym|r1b2rk1/1p2np2/1p5p/1N4pP/2P3nR/2N3P1/PR2PP2/4KB2 w - g6 0 20|h4h2 g4h2|945|winningMaterial,oneMove,hangingPiece|
fpijqh|r1bq1rk1/2p1b1pp/p1p5/5p2/2QPn3/P4N1P/1P2NPP1/R1B1K2R b KQ - 0 13|c8e6 c4e6|945|winningMaterial,oneMove,hangingPiece|
1hgvbju|4b3/5p2/4k3/2K1P2p/4P3/1p4P1/1B6/8 b - - 9 56|e8c6 c5c6|945|winningMaterial,endgame,oneMove,hangingPiece|
18yvifb|2n5/2K5/8/P6p/7P/6k1/8/8 b - - 7 73|g3h4 c7c8|945|winningMaterial,endgame,oneMove,hangingPiece|
1bz9zft|8/3kp2p/3p2p1/1b4B1/4P1PP/4QP2/2PK4/6q1 b - - 8 36|h7h6 e3g1|945|winningMaterial,oneMove,hangingPiece|
1pcqmas|4r3/6kp/4P3/p1Rr1p2/P2P1p2/5K1P/8/3R4 b - - 1 41|g7f6 c5d5|945|winningMaterial,oneMove,hangingPiece|
us8glc|3k4/6R1/r5p1/4Kp1p/5P1P/6P1/8/8 w - - 23 67|g7g6 a6g6|950|winningMaterial,endgame,oneMove,hangingPiece|
1cv97kh|6r1/p5k1/6Q1/5P2/p1Pp4/7P/PP4P1/4rqNK b - - 11 52|g7h8 g6h6|950|mate,mateIn1,oneMove|
85nhwz|4Q2R/1p3rp1/1pb3kp/1p4q1/1P3N2/2P1p1PP/7K/8 b - - 2 44|g6f6 e8e6|950|mate,mateIn1,oneMove|
7izxu7|1R6/1p3p2/3n1kq1/3P2b1/8/PPPP1Q2/8/6K1 b - - 2 43|f6e5 d3d4|950|mate,mateIn1,oneMove|
pexr99|8/p6p/2k1R3/3p2B1/Pp1b3P/1P6/2r2P2/6K1 b - - 0 31|c6c5 g5e7|950|mate,mateIn1,oneMove|
1q9pzja|3r2k1/4ppb1/p1r3pp/2n5/4BB2/6PP/P3PP2/2R2RK1 b - - 0 21|c5e4 c1c6|950|winningMaterial,oneMove,hangingPiece|
1mumgkh|1r3k2/R4nRp/1p6/1Pp1p3/2b5/4PPN1/5K2/8 w - - 1 36|g7g8 f8g8|950|winningMaterial,oneMove,hangingPiece|
z0in8t|r1bqk2r/ppp2ppp/2B5/2b1P3/4p3/5N2/PP3PPP/R1BQK2R b KQkq - 0 10|e8f8 d1d8|950|mate,mateIn1,oneMove|
dzwgdm|3R1k1r/pp3r1p/8/6Pn/2B1p3/7P/PPP5/2K5 b - - 1 23|f8e7 d8h8|950|winningMaterial,oneMove,hangingPiece|
gk1m55|2r2kr1/3n1p2/2pb4/3p2Q1/1P1P4/P3PP2/1B3N2/2R3K1 w - - 1 34|b4b5 g8g5|955|winningMaterial,oneMove,hangingPiece|
23j89z|6r1/3k4/p2p4/1p1Pppb1/7p/PP2BP1P/1P4P1/2R2K2 w - - 2 28|c1c6 g5e3|955|winningMaterial,oneMove,hangingPiece|
1jddk1j|8/5p1k/4p3/6P1/7q/8/2Q4P/6K1 b - - 1 56|h4e4 c2e4|955|winningMaterial,endgame,oneMove,hangingPiece|
6ucn16|1rq1r1k1/Qp3pb1/n3pnpp/P3p3/6P1/2R4P/1PP2PB1/2B1NRK1 b - - 3 20|c8c3 b2c3|955|winningMaterial,oneMove,hangingPiece|
1jbmfz4|r5k1/pp3pbp/6p1/3p4/5P2/2Pq4/PP5Q/3R1R1K b - - 1 25|d3f1 d1f1|955|winningMaterial,oneMove,hangingPiece|
1tljgp3|1r3r1k/p4pbp/2Q5/5N2/nP6/P2P1N2/3B1qP1/1K2R3 b - - 0 30|b8c8 c6a4|955|winningMaterial,oneMove,hangingPiece|
m02xw8|b5k1/3p1pp1/rB6/8/4N1Pp/3P3P/4NK2/8 w - - 1 29|e4f6 g7f6|955|winningMaterial,oneMove,hangingPiece|
1naw7zo|8/1p3r2/8/3PR1pp/1P3k2/2P5/6K1/8 w - - 1 48|e5g5 f4g5|955|winningMaterial,endgame,oneMove,hangingPiece|
c9nqzs|6k1/5pp1/p7/4n3/5K1P/6P1/4BP2/8 b - - 1 46|a6a5 f4e5|960|winningMaterial,endgame,oneMove,hangingPiece|
1m329lq|N6r/3bppk1/1pnp2pn/7p/2P1P2P/8/P2PNPP1/4KB1R w K - 1 19|c4c5 h8a8|960|winningMaterial,oneMove,hangingPiece|
l30ua3|5r1k/1Np2qpp/4bp1n/2Q5/3N4/3pP1PP/rP3PB1/R5K1 w - - 0 22|c5f8 f7f8|960|winningMaterial,oneMove,hangingPiece|
5o8kkx|8/3R2b1/p5kp/7P/r7/8/P4PK1/5N2 b - - 0 37|g6h5 d7g7|960|winningMaterial,endgame,oneMove,hangingPiece|
6vta5d|r7/1p6/p2P1k1p/4N1bR/8/8/PP4r1/1K1R4 w - - 1 31|h5h2 g2h2|960|winningMaterial,oneMove,hangingPiece|
bqk5yr|4k3/p4pp1/4p3/3pP2n/Pp1P2K1/1P3N2/8/8 b - - 1 43|e8f8 g4h5|960|winningMaterial,oneMove,hangingPiece|
v6ow46|rnbqkb1r/pp1ppppp/8/3nP3/2Bp4/2P5/PP3PPP/RNBQK1NR b KQkq - 2 5|d7d6 c4d5|960|winningMaterial,oneMove,hangingPiece|
1fbtg6w|8/8/1p1q1k2/5p2/P7/8/1Q6/7K b - - 3 57|d6d4 b2d4|960|winningMaterial,endgame,oneMove,hangingPiece|
ugzm7y|8/4k2p/1P1R1p2/1r4p1/3K2P1/8/5P2/8 w - - 1 51|f2f4 e7d6|960|winningMaterial,endgame,oneMove,hangingPiece|
1i4ozte|6r1/2k2p2/p7/2p1P3/1pP5/1P1R1N2/2nR2r1/5K2 b - - 2 43|g2g4 d2c2|965|winningMaterial,oneMove,hangingPiece|
1i2a4n2|8/1R6/4p1k1/K3Pp2/P3r3/1P4R1/7p/7r b - - 3 47|g6h5 b7h7|965|mate,mateIn1,endgame,oneMove|
tqiw28|rnbqkb1r/4pppp/2p5/pp1P4/Q2Pn3/5NP1/PP2PP1P/RNB1KB1R w KQkq - 0 7|a4b5 c6b5|965|winningMaterial,oneMove,hangingPiece|
rt6fki|1Q6/5pkp/4p3/1p3p2/p5r1/5R1K/8/6r1 w - - 12 52|f3f1 g1f1|965|winningMaterial,endgame,oneMove,hangingPiece|
1cmdhnp|1r3rk1/4bppp/R4n2/1Pp1p3/2PqP2n/1BNP1P2/5P1K/2BQ3R w - - 1 22|c1e3 d4c3|965|winningMaterial,oneMove,hangingPiece|
19ahk2u|8/3K4/8/8/8/8/8/Q2kq3 b - - 10 74|d1c2 a1e1|965|winningMaterial,endgame,oneMove,hangingPiece|
1ou1mf1|5r2/1pqb3k/4p2p/p2pR3/6r1/1P3R1P/P2Q1P2/7K w - - 0 39|h3g4 f8f3|965|winningMaterial,oneMove,hangingPiece|
zy73on|R4nkr/1pq5/p2b2pp/3p1Q2/3P1n2/PNP2B1P/1P3PP1/6K1 w - - 0 26|f5f4 d6f4|965|winningMaterial,oneMove,hangingPiece|
1sio3h7|4bk2/pp4pp/8/5p2/1N1RP2r/1P3PK1/P7/8 b - - 1 40|a7a6 g3h4|965|winningMaterial,oneMove,hangingPiece|
qae2dv|k3rb1r/pp1Q1pp1/3P3p/4q2P/8/2n5/PP4P1/2KR1BNR w - - 0 24|d7e8 e5e8|970|winningMaterial,oneMove,hangingPiece|
1gvfedn|6R1/8/8/5K1k/5p1P/6p1/5r2/8 b - - 5 68|f2e2 g8h8|970|mate,mateIn1,endgame,oneMove|
hn0nk3|5R2/6k1/6pp/2pP4/2P5/3K1P2/P7/2r5 w - - 13 49|f8h8 g7h8|970|winningMaterial,endgame,oneMove,hangingPiece|
1fj1jl5|1r6/6pk/1p6/pP3P2/3p2Pp/1P1N1p1K/7P/2Rn4 b - - 3 48|a5a4 c1d1|970|winningMaterial,oneMove,hangingPiece|
9p931j|8/4n1R1/3p4/6bp/k7/3K4/B7/8 b - - 6 59|h5h4 g7g5|970|winningMaterial,endgame,oneMove,hangingPiece|
w9pv9i|4r1k1/NB3p2/1R1b1qp1/Q3p2p/2Pp4/2nb2PP/P4P1K/6R1 w - - 2 36|b6d6 f6d6|970|winningMaterial,oneMove,hangingPiece|
zwu1wb|Q7/4pk1p/5p2/8/P7/6B1/1P4pK/5q2 w - - 7 46|a8e8 f7e8|970|winningMaterial,endgame,oneMove,hangingPiece|
3jcauv|8/p5k1/6p1/P3Q2p/7P/6P1/2qp1P1K/8 b - - 0 45|g7h6 e5h8|970|mate,mateIn1,endgame,oneMove|
1y7jy6i|8/R5k1/6p1/8/6KP/6P1/8/7q b - - 11 60|h1b7 a7b7|970|winningMaterial,endgame,oneMove,hangingPiece|
cchdqa|3k3r/p1p3p1/3bQ3/4n1pP/3N4/q7/5KP1/1R6 b - - 1 35|a3g3 f2g3|975|winningMaterial,oneMove,hangingPiece|
rg5hqj|2Q5/6pk/3B1p1p/8/8/8/1n3PPP/q2N2K1 w - - 1 42|f2f4 a1d1|975|winningMaterial,fork,endgame,oneMove,hangingPiece|
kty0o4|3Rk3/8/4p2p/4P3/r1r2P2/3R1K2/8/8 b - - 2 49|e8e7 d3d7|975|mate,mateIn1,endgame,oneMove|
ekg02u|7k/RP6/6p1/3p3p/6r1/2PQ4/5P1P/2q2K2 w - - 1 41|d3d1 c1d1|975|mate,mateIn1,endgame,oneMove|
byqgxp|r7/pp1rNpbk/n2p2pp/P1n5/2P2NqP/R5P1/4PP2/2BQ1RK1 w - - 6 29|a3f3 d7e7|975|winningMaterial,oneMove,hangingPiece|
piyovr|8/5r2/6pp/P4p2/2kP3P/P1B1P1P1/4K3/8 w - - 5 51|e2f3 c4c3|975|winningMaterial,endgame,oneMove,hangingPiece|
dvhqyz|2r5/8/1R4pk/5p2/3q4/Q5P1/5P1K/8 w - - 9 57|h2h3 d4b6|975|winningMaterial,endgame,oneMove,hangingPiece|
1fbzfr4|rnb2rk1/ppp2ppp/5n2/1Q6/q2P4/2P5/PP1N2PP/R3KBNR b KQ - 2 12|a4a2 a1a2|975|winningMaterial,oneMove,hangingPiece|
ta1nzc|8/1k4p1/5p2/1PPKp3/4P2p/R7/3r4/8 w - - 1 55|a3d3 d2d3|975|winningMaterial,endgame,oneMove,hangingPiece|
1q0swi8|8/pp1R3k/6pP/5r2/P7/4P3/2P5/6K1 b - - 1 37|f5f7 d7f7|980|winningMaterial,endgame,oneMove,hangingPiece|
3iv4ik|8/1p1R4/p1n1b1k1/P7/6PK/1r5P/1P6/5R2 w - - 12 38|f1f3 b3f3|980|winningMaterial,endgame,oneMove,hangingPiece|
skhrpe|r1b1k1r1/1p1nbpB1/p2pp3/8/4P2p/PBN4P/1PP2PP1/R2R2K1 w q - 1 17|e4e5 g8g7|980|winningMaterial,oneMove,hangingPiece|
kmv7v|r6k/8/p5pp/P1P1rp2/8/7P/3QnPP1/6K1 w - - 2 36|d2e2 e5e2|980|winningMaterial,oneMove,hangingPiece|
1o5mxdx|2r1k2r/3p3p/4p3/4Pp2/P1QP1p2/2P4R/5bP1/R5K1 w k - 0 28|g1h1 c8c4|980|winningMaterial,oneMove,hangingPiece|
hmuqxy|4r1k1/3R2Rp/p1p5/2P4r/8/8/3K4/8 b - - 2 36|g8f8 d7f7|980|mate,mateIn1,endgame,oneMove|
eaxwvq|8/R7/4r3/1p4P1/8/kp6/8/2K5 b - - 3 57|e6a6 a7a6|980|winningMaterial,endgame,oneMove,hangingPiece|
1raso9z|5k2/3R4/3PKp2/5P2/4n1P1/3r4/8/8 w - - 3 63|d7a7 d3d6|980|mate,mateIn1,endgame,oneMove|
osroii|5rk1/3n1ppp/4p3/8/8/P4BP1/1rR4P/2R3K1 b - - 2 33|d7e5 c2b2|980|winningMaterial,oneMove,hangingPiece|
q7clu6|4r3/2p1r1k1/2p5/p1P3P1/P3R1R1/8/7P/6K1 w - - 0 35|e4e2 e7e2|985|winningMaterial,endgame,oneMove,hangingPiece|
x9z5fx|1r3rk1/ppp1bppp/2n1p1q1/3n3P/3P1P2/PQ2P3/1P1B1PB1/RN2K1R1 b Q - 0 15|c6d4 e3d4|985|winningMaterial,oneMove,hangingPiece|
7gy8s1|4r2k/R4R1p/p1p5/8/8/8/3K3r/8 w - - 4 41|d2c1 e8e1|985|mate,mateIn1,endgame,oneMove|
1aafwsq|r2qk2r/1p3ppp/2p5/p3nb2/Pb3Q2/4P3/1P1NBPPP/R1B2RK1 b kq - 1 15|f5e6 f4e5|985|winningMaterial,oneMove,hangingPiece|
dyzvsb|3rkb1r/1pp1pppq/p4n1p/n7/3P1P1P/PQN1P3/1P1BBP2/R3K2R w KQk - 3 16|b3b7 a5b7|985|winningMaterial,oneMove,hangingPiece|
49wkx6|r5k1/5qpp/p1p1p1n1/R2rp3/1p6/1P1P3P/1PPN1PPK/3Q1R2 w - - 2 25|f2f4 d5a5|985|winningMaterial,oneMove,hangingPiece|
1rwthen|6k1/pp3ppp/4p3/1Qn3q1/P7/1BP1PP2/5P1P/5K2 b - - 3 28|g5d8 b5c5|985|winningMaterial,oneMove,hangingPiece|
1l6emrd|2r3k1/1p4p1/1p3p2/7p/3N3P/P2b1P2/1P3KP1/3R4 b - - 1 26|d3b1 d1b1|985|winningMaterial,oneMove,hangingPiece|
10t03ep|8/P1R5/8/2Pk4/3pb3/r7/1K6/8 b - - 3 50|d4d3 b2a3|985|winningMaterial,endgame,oneMove,hangingPiece|
6xhjw2|8/p4k1R/8/6p1/2pP4/b7/4r3/1R4K1 b - - 0 39|f7e8 b1b8|985|mate,mateIn1,endgame,oneMove|
1p9sdt5|8/2R5/2n1P3/p1b5/2k1K3/8/8/8 b - - 13 60|c5a3 c7c6|990|winningMaterial,endgame,oneMove,hangingPiece|
1nib263|8/8/5pp1/3k3p/7P/4B1P1/2K2P2/bR5r b - - 0 76|a1e5 b1h1|990|winningMaterial,endgame,oneMove,hangingPiece|
198is38|2rqkb1r/3n1pp1/p1Q1pn1p/4p3/2N5/2P2P2/PP1P1P1P/R1B1KB1R w KQk - 1 12|c6c8 d8c8|990|winningMaterial,oneMove,hangingPiece|
2sxwkq|4qnk1/p4pp1/4p2p/3rP3/1Q3P2/3N1bPP/3R3K/5R2 b - - 12 47|e8d8 f1f3|990|winningMaterial,oneMove,hangingPiece|
juvt9q|1Q5k/6r1/5q1p/8/7P/6P1/5P1K/8 b - - 4 47|f6d8 b8d8|990|winningMaterial,endgame,oneMove,hangingPiece|
tlqq24|8/1Q3p1k/8/7p/1B6/P2q2Pn/5nK1/2R5 b - - 6 38|h3f4 g3f4|990|winningMaterial,endgame,oneMove,hangingPiece|
1o92ro3|8/8/p5P1/1k3R2/1P4r1/2K5/8/8 b - - 9 58|b5a4 f5a5|990|mate,mateIn1,endgame,oneMove|
1q673f3|k2rr3/1p2nRpp/p7/8/P2pQ2q/RP6/2PP3P/6KB b - - 4 25|h4e1 e4e1|990|winningMaterial,oneMove,hangingPiece|
11p07a3|8/8/5k2/1PQ4p/7P/3q2p1/5P1K/8 w - - 0 46|h2h1 d3f1|990|mate,mateIn1,endgame,oneMove|
1eg0nag|7r/8/R7/8/5p2/5k2/7K/8 w - - 20 74|a6h6 h8h6|995|winningMaterial,endgame,oneMove,hangingPiece|
1j3ahcr|6Nk/1prr4/p1nbb1p1/6B1/8/1PP4P/P4PP1/3R1RK1 w - - 5 31|d1e1 e6g8|995|winningMaterial,oneMove,hangingPiece|
2ozqzr|8/6kp/8/R4N2/6p1/7r/KP6/8 b - - 5 48|g7h8 a5a8|995|mate,mateIn1,endgame,oneMove|
4mx15d|8/pp1r2k1/6p1/4K1Np/P4n1P/2P5/8/7R b - - 0 36|d7d2 e5f4|995|winningMaterial,endgame,oneMove,hangingPiece|
1ykmdph|4b1kb/8/p6p/P4P1N/3p2p1/3P2B1/6P1/5K2 w - - 15 46|g3f4 e8h5|995|winningMaterial,oneMove,hangingPiece|
1ypy0dl|6k1/5p2/2b3p1/p6p/2P2R2/2PNr2P/P5P1/6K1 w - - 0 44|c4c5 e3d3|995|winningMaterial,oneMove,hangingPiece|
tkdqds|3k4/6R1/1r4p1/4Kp1p/5P1P/6P1/8/8 w - - 45 78|g7g6 b6g6|995|winningMaterial,endgame,oneMove,hangingPiece|
1r2rloa|3R4/p6P/p4K2/P7/5p2/2k2P2/3p2r1/8 b - - 0 54|d2d1q d8d1|995|winningMaterial,endgame,oneMove,hangingPiece|
1gch4we|5k2/4Npp1/q3b3/2r1p2p/2P1p3/PQ2P3/5PPP/5RK1 w - - 0 31|b3d1 f8e7|995|winningMaterial,oneMove,hangingPiece|
od0oev|3b1k2/7p/8/4p3/Q7/P4N2/4P2P/2q2K2 w - - 1 40|a4d1 c1d1|1000|winningMaterial,endgame,oneMove,hangingPiece|
1lfqwa5|8/8/8/4k1B1/6K1/8/6r1/8 w - - 1 63|g4f3 g2g5|1000|winningMaterial,endgame,oneMove,hangingPiece|
1ckhit8|R6r/5n1p/1k2p1p1/1pb1p3/5P2/1P6/2N1K1PP/7R w - - 0 30|a8a5 b6a5|1000|winningMaterial,oneMove,hangingPiece|
itdnch|1R6/8/5Kpk/p7/8/7p/5n2/8 b - - 1 60|a5a4 b8h8|1000|mate,mateIn1,endgame,oneMove|
o7i8uy|r3kbr1/1p1b4/1q3pp1/p2Qp3/8/N1P1PP2/PP6/2KR2NR b q - 0 23|b6c6 d5g8|1000|winningMaterial,oneMove,hangingPiece|
vqryi8|1n6/2k4R/p1p5/8/PK1P2r1/2P5/8/8 b - - 2 55|c7b6 a4a5|1000|mate,mateIn1,endgame,oneMove|
rdsk48|6k1/1p4p1/5B1p/PPp2q2/4b1N1/4p2P/1Q1rBbP1/R6K w - - 1 34|g4h6 g7h6|1000|winningMaterial,oneMove,hangingPiece|
k91txy|8/8/3R3p/1p6/8/k1K5/7r/8 b - - 21 72|h2d2 d6a6|1000|mate,mateIn1,endgame,oneMove|
zh6ovd|8/8/8/1k6/8/8/5K2/6rR b - - 0 80|g1g2 f2g2|1000|winningMaterial,endgame,oneMove,hangingPiece|
cw0hw8|r7/pp2kp1p/2p5/7R/P2P1K2/2P4b/1P2B3/8 b - - 3 31|a8g8 h5h3|1000|winningMaterial,oneMove,hangingPiece|
3f9vy3|2r3k1/6p1/1pr3q1/p2RPp2/Pb2pP1p/1P2P2P/1B2Q1P1/5R1K w - - 1 30|d5d8 c8d8|1005|winningMaterial,oneMove,hangingPiece|
114cum0|4r3/6pk/2Q5/pR5q/7N/6P1/4r1P1/6K1 b - - 17 46|e2g2 h4g2|1005|winningMaterial,endgame,oneMove,hangingPiece|
1gsezde|8/5pk1/6p1/8/r3p1pP/6P1/2R1RPK1/3r4 w - - 0 39|e2e4 a4e4|1005|winningMaterial,endgame,oneMove,hangingPiece|
e46otl|6k1/1R5p/8/8/7P/b5PK/1p6/1Rr5 w - - 11 70|b1c1 b2c1q|1005|winningMaterial,promotion,endgame,oneMove,hangingPiece|
o6fjgj|5rk1/R3R1pp/1p6/1P2b3/2P1ppb1/8/1P4P1/5KN1 b - - 2 34|e4e3 e7e5|1005|winningMaterial,oneMove,hangingPiece|
9vphon|8/5k2/2p2p2/7P/R1Pr1RP1/4r1K1/8/8 w - - 5 54|g3g2 d4f4|1005|winningMaterial,endgame,oneMove,hangingPiece|
99b29f|r2q2rk/1b1n1p1p/p4n2/p1pp1PB1/B7/2P4P/1P1N2P1/R2Q1RK1 w - - 4 23|a4d7 g8g5|1005|winningMaterial,oneMove,hangingPiece|
1hso3sz|5r2/1p2r3/5k2/p1pP1p2/P1P2R1P/5K2/1P2p3/6R1 w - - 0 36|f4f5 f6f5|1005|winningMaterial,oneMove,hangingPiece|
1juai6p|8/8/8/8/2p1K3/6P1/Nk5n/8 w - - 22 61|g3g4 b2a2|1005|winningMaterial,endgame,oneMove,hangingPiece|
uwsknb|8/6R1/p7/1p6/1P6/3K1pk1/1PP5/6r1 b - - 7 47|g3h3 g7g1|1005|winningMaterial,endgame,oneMove,hangingPiece|
n3s4m7|5N2/4K2k/4N3/8/8/1p6/p5R1/5r2 b - - 0 82|h7h6 g2h2|1010|mate,mateIn1,endgame,oneMove|
1hr9d3|r1bqkb1r/pppnpp1p/8/3p2p1/3PnB2/2P1P3/PPQ1BPPP/RN2K1NR w KQkq - 0 7|f4g5 e4g5|1010|winningMaterial,oneMove,hangingPiece|
kx6so0|8/6kp/8/8/7R/8/PPP1n3/1KN3r1 w - - 3 49|c2c3 g1c1|1010|mate,mateIn1,endgame,oneMove|
p0ft8h|8/p7/1p3nPk/1p5P/3b4/1R1K4/P2P4/8 b - - 6 46|h6h5 d3d4|1010|winningMaterial,endgame,oneMove,hangingPiece|
qc9y1r|5k2/7p/1Rn2P2/8/1r5P/1B4K1/8/8 w - - 1 44|b3c2 b4b6|1010|winningMaterial,endgame,oneMove,hangingPiece|
wwlqam|q5k1/4R3/2p2bpp/3p1p2/2nP1BnP/4P1PN/4NP2/2R3K1 w - - 1 32|e7e8 a8e8|1010|winningMaterial,oneMove,hangingPiece|
mxouym|rnb1k1nr/p1p1bppp/1p2p3/3q4/8/2P3P1/PP1PQP1P/RNB1KBNR w KQkq - 0 6|d2d4 d5h1|1010|winningMaterial,oneMove,hangingPiece|
1ku64k9|6k1/1p6/bp3pp1/7p/1P5P/PN1r1P2/3R1KP1/8 w - - 3 30|f2g3 d3b3|1010|winningMaterial,oneMove,hangingPiece|
1t4adao|8/8/5p2/p2KpP2/1P4r1/P7/1R6/2k5 w - - 3 52|b2c2 c1c2|1010|winningMaterial,endgame,oneMove,hangingPiece|
10j76wd|r2q1r2/pp3pbk/1np2np1/4p2p/P3P3/2PBBPQ1/1P1N2PP/R4RK1 w - - 1 17|f3f4 d8d3|1015|winningMaterial,oneMove,hangingPiece|
1bqpd9y|5k2/2P2p2/pN2b1p1/2nN4/7p/1r6/6P1/2R2K2 b - - 5 43|f8g7 c1c5|1015|winningMaterial,oneMove,hangingPiece|
5yvo7p|3k4/p3p3/P2p1n2/2qP4/2P5/3BK1PQ/3B1P2/3r4 w - - 7 40|e3f3 d1d2|1015|winningMaterial,oneMove,hangingPiece|
cyrqpm|4Qqk1/6p1/4P2p/2p4P/p7/8/6K1/8 w - - 4 53|e8f8 g8f8|1015|winningMaterial,endgame,oneMove,hangingPiece|
16x8a4g|8/5p2/4p3/p2k2P1/P1pbnP2/4B3/6B1/3K4 w - - 30 76|e3d4 d5d4|1015|winningMaterial,endgame,oneMove,hangingPiece|
3k1wn8|3nk3/p5p1/2p2p2/7p/P3P2P/1b3PB1/6P1/3N3K w - - 1 37|g3f2 b3d1|1015|winningMaterial,oneMove,hangingPiece|
15wns12|r3q1rk/2pp2pp/1p2n3/p2QP3/4Pp2/1NP2N1P/PP1Rb1P1/R5K1 b - - 4 22|g7g5 d2e2|1015|winningMaterial,oneMove,hangingPiece|
fj6ztl|r3k2r/1p3p1p/2p2p2/p3n3/PbB1P3/5N2/1P3PPP/R1B2RK1 b kq - 0 19|e5f3 g2f3|1015|winningMaterial,oneMove,hangingPiece|
1j2g292|2q3k1/r1p2pp1/1p3b2/3P3p/p1Pp2bP/P2B1QP1/1P1B1P2/4R1K1 w - - 2 26|f3f6 g7f6|1015|winningMaterial,oneMove,hangingPiece|
2uzr83|5k2/1p3p1p/1P3N2/p3P3/B4P1r/b3r3/8/5KR1 b - - 1 40|h4h1 g1h1|1015|winningMaterial,oneMove,hangingPiece|
11582zb|8/1p2k3/p7/5pp1/3R4/P2N4/1P1r4/4K3 b - - 1 48|d2d3 d4d3|1020|winningMaterial,endgame,oneMove,hangingPiece|
4jiflj|2k4r/5P1p/pr4p1/N1b2b2/2B2n2/2B2P2/3N2PP/4K2R b K - 0 26|f5e6 c3h8|1020|winningMaterial,oneMove,hangingPiece|
q0ur1e|6k1/5ppp/4b3/1pr1P3/r3PB2/5PPP/8/2RK1R2 b - - 1 30|b5b4 c1c5|1020|winningMaterial,oneMove,hangingPiece|
135iji8|8/2k5/8/3RPR2/1K3P2/6r1/1r6/8 w - - 2 49|b4a5 g3a3|1020|mate,mateIn1,endgame,oneMove|
le998w|7Q/1kr5/p1qR4/1p6/2P5/8/PP3bPP/R5K1 w - - 0 30|g1f1 c6d6|1020|winningMaterial,oneMove,hangingPiece|
vlpa80|3r4/1K6/8/1P1B1p2/1P3k2/p7/P7/8 w - - 2 63|b5b6 d8d5|1020|winningMaterial,endgame,oneMove,hangingPiece|
1ewlcjo|8/4r3/pR6/P5b1/1P4k1/6P1/6K1/8 w - - 3 46|b6e6 e7e6|1020|winningMaterial,endgame,oneMove,hangingPiece|
i3wmih|4r2r/ppk3pp/2p1Bb2/8/8/P3P3/1P2KPPP/R6R w - - 3 22|e6d5 c6d5|1020|winningMaterial,oneMove,hangingPiece|
1pgb1b8|r2qk1nr/p2n1ppp/2p5/1pb1p3/3pPB1P/3P4/PPPNQPP1/1R1NK2R w Kkq - 0 12|f4e5 d7e5|1020|winningMaterial,oneMove,hangingPiece|
uiatjf|5rk1/np2q1p1/p3p2p/1bB2p2/4B3/5N2/PPR2PPP/4R1K1 b - - 1 21|e7c5 c2c5|1020|winningMaterial,oneMove,hangingPiece|
v6wkce|r1k4r/p3bNp1/2p4p/7P/P7/8/5PP1/nNB1R1K1 b - - 0 19|h8f8 e1e7|1025|winningMaterial,oneMove,hangingPiece|
1yxiff0|r2k4/p4rp1/2pB3p/7P/P1NnR3/8/5PP1/6K1 b - - 7 25|f7f5 e4d4|1025|winningMaterial,oneMove,hangingPiece|
c6utpq|rnbqk1r1/pp4Qp/4pn2/b2p4/1pP5/3PP3/P1NN2PP/R1B1KB1R w KQq - 1 12|g7g8 f6g8|1025|winningMaterial,oneMove,hangingPiece|
tw1bnd|2R5/1p5k/7p/P4ppP/4b3/4K3/2p4P/8 b - - 1 48|c2c1q c8c1|1025|winningMaterial,endgame,oneMove,hangingPiece|
2imptu|r3k2r/1bqp1pbp/p3p1p1/2p3Bn/2B1P3/2Q2N2/PPP2PPP/3R1RK1 w kq - 8 15|c3g7 h5g7|1025|winningMaterial,oneMove,hangingPiece|
14g61iy|8/7B/8/4k3/2p4p/6b1/8/7K w - - 25 79|h7e4 e5e4|1025|winningMaterial,endgame,oneMove,hangingPiece|
fesijg|8/1p3k2/1p3pp1/7p/1P5P/P2bKP2/3N2P1/8 b - - 3 32|d3c4 d2c4|1025|winningMaterial,oneMove,hangingPiece|
1lrk0go|2b5/p4p2/1p1p1k2/4r2p/1P5R/P1P1KPP1/4N3/8 w - - 3 40|e3d4 e5e2|1025|winningMaterial,oneMove,hangingPiece|
1jirdl1|1R6/p3pk2/5p2/4nb2/8/1N1qB1Q1/3K4/8 w - - 0 46|d2c1 d3c2|1025|mate,mateIn1,endgame,oneMove|
1rbxcs1|3r3k/1Q4p1/p3p2p/P1p1P2P/5P2/4P3/q3R3/5K2 b - - 0 36|a2e2 f1e2|1025|winningMaterial,oneMove,hangingPiece|
wczcrc|5k2/5p1Q/3p1b2/2pb4/8/3Bq1P1/7N/R4K2 w - - 0 45|a1a8 d5a8|1030|winningMaterial,endgame,oneMove,hangingPiece|
i2hxql|4b3/4k3/1n5p/5p2/pP4p1/N2p1BP1/3K1PP1/8 w - - 0 47|f3g4 f5g4|1030|winningMaterial,oneMove,hangingPiece|
1pvzxaa|3q1rk1/1pp1npp1/r2b3p/p2p1b2/3P4/P1BQ1NP1/1P2PPBP/R3K2R w KQ - 3 16|d3a6 b7a6|1030|winningMaterial,oneMove,hangingPiece|
c5912o|3r2k1/7p/3q2pr/8/P2P2R1/1Q3P2/2R5/6K1 b - - 2 44|d6e6 b3e6|1030|winningMaterial,endgame,oneMove,hangingPiece|
1go2j8a|r2r2k1/pp3pb1/1qn2npp/3pp3/2BP4/2P2N1P/PP1Q1PPB/R1R3K1 w - - 0 16|d4e5 d5c4|1030|winningMaterial,oneMove,hangingPiece|
hndl2z|6k1/5p1p/6p1/p7/r2b4/8/2B2PPP/3R1K2 b - - 3 39|a4a3 d1d4|1030|winningMaterial,endgame,oneMove,hangingPiece|
1me044g|3k1r2/1p6/3PN3/p6n/P1r5/2P4P/1P6/6KR b - - 0 38|d8c8 e6f8|1030|winningMaterial,oneMove,hangingPiece|
1mv48jd|8/8/1k2p3/np1p4/5p2/2q5/5Q2/R6K b - - 3 53|c3d4 f2d4|1030|winningMaterial,endgame,oneMove,hangingPiece|
yjhjuv|r1bqkb1r/pp1ppp1p/2n2np1/1Bp1P3/8/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 0 5|c6e5 f3e5|1030|winningMaterial,oneMove,hangingPiece|
e9ltdj|4n3/8/2r1p2p/P4p1p/1Bk5/5P1K/6P1/2R5 b - - 10 46|c4b4 c1c6|1030|winningMaterial,endgame,oneMove,hangingPiece|
1p71bvd|r3n1k1/1bR2ppp/pr6/4B3/8/2N5/P4PPP/3R2K1 w - - 4 27|c7b7 b6b7|1035|winningMaterial,oneMove,hangingPiece|
xz7tih|r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNB1QRK1 b kq - 1 5|c6e7 e1e4|1035|winningMaterial,oneMove,hangingPiece|
scb5vx|5k2/pprrRB1p/1n4p1/8/3b4/P5P1/1P1N1P1P/4R1K1 w - - 1 30|e7e8 f8f7|1035|winningMaterial,oneMove,hangingPiece|
huhttm|2b2k2/2p3p1/1pB2p1p/p7/3P1N1P/P3r1q1/1P1Q4/2KR4 w - - 1 29|c6d5 g3f4|1035|winningMaterial,oneMove,hangingPiece|
yrj3tg|4b1k1/1p2Qq2/p1r1p1p1/6p1/2PB4/P7/6PP/3R3K w - - 5 33|e7e8 f7e8|1035|winningMaterial,oneMove,hangingPiece|
jw7kjh|r4r1k/2nbb1pp/1np3q1/5pP1/1P1Q4/2NP1N2/3BP2P/2R1KB1R b K - 3 25|e7d8 d4b6|1035|winningMaterial,oneMove,hangingPiece|
2zsyg6|8/pp3k2/3p2p1/P1pP2R1/8/2Nr4/8/5K2 w - - 2 40|g5g2 d3c3|1035|winningMaterial,endgame,oneMove,hangingPiece|
1fjupxw|5rk1/pq4bp/4p1p1/5p2/3p1P2/1P1P1nP1/PB2Q2P/R2R2K1 w - - 1 24|e2f3 b7f3|1035|winningMaterial,oneMove,hangingPiece|
1d4fx10|8/4k2R/6R1/4b3/2r5/4K3/8/8 b - - 4 64|e7d8 g6g8|1035|mate,mateIn1,endgame,oneMove|
piycxk|2r2rk1/p2n1pp1/b2bp2p/8/2NP4/1P2BN1P/P4PP1/R3K2R b KQ - 2 18|f7f6 c4d6|1035|winningMaterial,oneMove,hangingPiece|
113hi7w|2r5/R7/1P6/3k4/3pp1P1/5p2/P4P1P/5K2 w - - 4 44|g4g5 c8c1|1040|mate,mateIn1,endgame,oneMove|
1i6f2fd|8/8/5p2/4bkp1/8/4r2p/2RR1N2/7K w - - 4 70|f2e4 e3e1|1040|mate,mateIn1,fork,endgame,oneMove|
12sf3fd|r6b/1p1nkp2/2p1P3/1p4p1/6P1/4PNK1/PP2B3/7R b - - 0 24|d7f8 h1h8|1040|winningMaterial,oneMove,hangingPiece|
l6ma21|3R4/5p2/8/R4p2/7P/4nk2/1r6/6K1 w - - 1 65|a5b5 b2b5|1040|winningMaterial,endgame,oneMove,hangingPiece|
sj9ar6|rnbq1rk1/p5p1/3p3p/1p1P1p2/3PN3/1B6/PP3PPP/R2Q1RK1 w - - 0 18|e4d6 d8d6|1040|winningMaterial,oneMove,hangingPiece|
1j9b4h|5r2/1ppk2p1/p1p3P1/4p3/8/1PP1N3/P2P2b1/2K1R3 b - - 0 33|b7b5 e3g2|1040|winningMaterial,oneMove,hangingPiece|
md9ras|1n6/2k3R1/p1p5/6r1/1K1P4/2P5/P7/7R b - - 0 53|c7c8 h1h8|1040|mate,mateIn1,endgame,oneMove|
12ih3b1|1k4Q1/1b1n1rp1/r1q4p/p1bNp3/6B1/2P3P1/PP1R1P1P/3R2K1 b - - 6 31|b8a7 g8f7|1040|winningMaterial,oneMove,hangingPiece|
qd3g24|8/5kp1/4p2p/R2pP2P/2pP4/1n6/6PK/8 w - - 12 61|h2g1 b3a5|1040|winningMaterial,endgame,oneMove,hangingPiece|
1899z2e|8/8/2k2p2/4rR2/2p5/2P5/1P6/2K5 w - - 2 63|f5h5 e5h5|1040|winningMaterial,endgame,oneMove,hangingPiece|
5ggivz|r2qk2r/pp1n1pb1/2pp1npp/4p1B1/3PP3/2PB3Q/PP1N1PPP/R4RK1 w kq - 0 12|g5f4 e5f4|1040|winningMaterial,oneMove,hangingPiece|
20pnt2|4r3/5k2/2p4R/1p3PB1/8/5P2/1Pr2K2/8 w - - 2 44|f2g1 e8e1|1045|mate,mateIn1,endgame,oneMove|
1ns8p9s|8/2k5/1N6/p6p/2P1p1pP/8/1P6/5K2 w - - 1 56|b6c8 c7c8|1045|winningMaterial,endgame,oneMove,hangingPiece|
153mngq|2q2rk1/p4pp1/5n1p/3Pp3/2P5/P2QB3/1r1R1PPP/4K2R b - - 1 19|c8g4 d2b2|1045|winningMaterial,oneMove,hangingPiece|
ma40uv|5q2/k7/8/6Qp/5K1P/6P1/8/8 w - - 16 64|g5f6 f8f6|1045|winningMaterial,endgame,oneMove,hangingPiece|
tnavzz|8/rp3pkp/4b1p1/p2n4/P7/2N1P2P/4BPP1/1R4K1 w - - 2 24|e2f1 d5c3|1045|winningMaterial,oneMove,hangingPiece|
kcb1nf|1R6/5pk1/6p1/2P1p3/8/1BK4p/6r1/8 w - - 0 56|b8g8 g7g8|1045|winningMaterial,endgame,oneMove,hangingPiece|
1ttzbsp|B7/7p/5k2/8/8/1rn3PP/3N4/5K2 b - - 1 57|c3e4 d2b3|1045|winningMaterial,endgame,oneMove,hangingPiece|
4emypg|2k4r/1p3p2/p6p/5n2/7P/P1P2R2/2P2N2/2K5 b - - 0 37|c8d7 f3f5|1045|winningMaterial,oneMove,hangingPiece|
10qhjz3|1rb3k1/3r2pp/pB2np2/1p1p4/8/2P1NP2/PP1R2PP/2K1R3 w - - 5 37|a2a3 b8b6|1045|winningMaterial,oneMove,hangingPiece|
1cqr7xx|8/6k1/4Br2/7P/5q2/7K/8/6Q1 b - - 2 62|g7h8 g1g8|1045|mate,mateIn1,endgame,oneMove|
k9iq0q|5rk1/p6p/2p5/3pq3/8/P5Q1/5PKP/2R5 b - - 0 29|e5g5 g3g5|1050|winningMaterial,endgame,oneMove,hangingPiece|
pleogb|5rk1/Rb3pp1/1p3b2/1P1np2p/8/5NP1/2r2PBP/B2R2K1 b - - 1 31|f8a8 a7b7|1050|winningMaterial,oneMove,hangingPiece|
brxeuh|3qk2r/7p/p1r1ppp1/2Nn4/Q7/5P2/PP3P1P/R4RK1 b k - 6 27|e8g8 a4c6|1050|winningMaterial,oneMove,hangingPiece|
1p1dg3p|2R5/5B2/8/1k6/8/8/4K3/b2r4 b - - 13 53|d1d2 e2d2|1050|winningMaterial,endgame,oneMove,hangingPiece|
119irb8|6k1/2Q5/4p1P1/5p2/8/8/6KP/4q3 b - - 4 77|e1g1 g2g1|1050|winningMaterial,endgame,oneMove,hangingPiece|
13a7xpr|5qk1/1p6/2p4p/6p1/2P5/1P4P1/PQ3K1P/8 w - - 2 38|b2f6 f8f6|1050|winningMaterial,endgame,oneMove,hangingPiece|
xz06h7|4k3/1R6/2r3p1/3K1p1p/5P1P/6P1/8/8 b - - 8 59|g6g5 d5c6|1050|winningMaterial,endgame,oneMove,hangingPiece|
16ic4ur|1Q1b1k2/6qp/8/1pP1p3/p3B3/P4N2/4P1KP/3n4 w - - 13 35|g2h3 d1f2|1050|mate,mateIn1,fork,oneMove|
ac922k|8/1k2r3/1N2R2p/1P5P/2p5/3n2B1/1b4PK/8 w - - 3 53|b6c4 e7e6|1050|winningMaterial,endgame,oneMove,hangingPiece|
4sc6vc|6k1/3R4/4p2p/P4r2/1R4p1/4P1P1/8/r5K1 w - - 4 43|g1h2 f5f2|1050|mate,mateIn1,endgame,oneMove|
yazshc|R4nk1/1p3r2/p6p/8/3P4/PNP3bP/1P3P2/4q1QK b - - 3 34|g8h7 g1e1|1050|winningMaterial,oneMove,hangingPiece|
1jee8d6|8/1kr5/p7/1pq5/8/6Q1/PP4PP/R5K1 w - - 4 34|g3e3 c5e3|1055|winningMaterial,endgame,oneMove,hangingPiece|
ubn6vy|r3nbk1/5ppp/p7/1pp5/4Q2P/P4N2/1q1B1PP1/4R1K1 b - - 1 26|a8a7 e4e8|1055|winningMaterial,oneMove,hangingPiece|
y7qz20|r1bqkb1r/1p1n1ppp/2p5/p6n/2BP4/2N3Q1/PP1B1PPP/R3K1NR w KQkq - 2 11|c4f7 e8f7|1055|winningMaterial,oneMove,hangingPiece|
24u28l|1r1qk1nr/1Q2bppp/2p1b3/pN1p4/1n1P4/P3P2P/1P1B1PP1/2R1KBNR w Kk - 1 13|b7b8 d8b8|1055|winningMaterial,oneMove,hangingPiece|
p2zy7z|3r4/pp3pk1/b2P1n1p/2rB1Pp1/1P6/P1N4P/2K5/3RR3 b - - 0 29|c5c3 c2c3|1055|winningMaterial,oneMove,hangingPiece|
1fhmhmg|5B2/3k4/2R2p2/r2np1p1/8/6P1/5PKP/8 w - - 2 48|c6c3 d5c3|1055|winningMaterial,endgame,oneMove,hangingPiece|
3d1uab|8/1Q3kn1/8/1p5r/7P/5P2/6K1/8 b - - 2 57|f7e6 b7g7|1055|winningMaterial,endgame,oneMove,hangingPiece|
rll7nz|rn1qkb1r/1p3pp1/p3pn1p/4N3/8/P1NP3P/1PP1BPbB/R2QK2R w KQkq - 0 13|e5f7 e8f7|1055|winningMaterial,oneMove,hangingPiece|
ayswmj|8/5p2/6p1/1pk4p/1R5P/6P1/5P2/6K1 w - - 1 44|g1f1 c5b4|1055|winningMaterial,endgame,oneMove,hangingPiece|
od4abd|6R1/4kp2/B3p1p1/5b1p/3P1P1P/r1b3P1/3KN3/8 w - - 0 39|d2c1 a3a1|1055|mate,mateIn1,fork,oneMove|
pegbms|8/4k1p1/1pR4p/p3p3/P3r3/5KP1/7P/8 b - - 1 44|b6b5 f3e4|1060|winningMaterial,endgame,oneMove,hangingPiece|
j6tpxq|8/4kp2/6p1/p2q4/1r3P2/2Q5/P6P/4R1K1 b - - 11 48|e7f8 c3h8|1060|mate,mateIn1,endgame,oneMove|
r51d39|1r4k1/Qq1n1ppp/b2p4/2pP4/P3N3/1P6/2P2PPP/4R1K1 w - - 2 27|a7b8 b7b8|1060|winningMaterial,oneMove,hangingPiece|
3emdxc|8/4R1pk/4P3/1r2b3/1pK5/8/1N6/8 b - - 2 58|h7g6 c4b5|1060|winningMaterial,endgame,oneMove,hangingPiece|
12ngm9a|5k2/5p2/1pb1p3/p3b1QP/P4PP1/1P1r2RK/4r3/8 b - - 0 50|e2h2 h3h2|1060|winningMaterial,oneMove,hangingPiece|
t8zdzx|r4rk1/pp3p1p/6p1/nP1P1bP1/Pq2p3/2R2QN1/2PN1P1P/4K2R w K - 0 20|f3f4 b4c3|1060|winningMaterial,oneMove,hangingPiece|
4hp7i6|7r/p2Rn3/1p2kp2/2p5/4PB1p/6P1/PP3P1P/1K6 w - - 4 27|d7e7 e6e7|1060|winningMaterial,oneMove,hangingPiece|
1pv68k4|2R5/r1R2pbk/1q2p1p1/3p3p/3n3P/1B1Q2P1/P4P2/6K1 w - - 4 27|c7d7 a7d7|1060|winningMaterial,oneMove,hangingPiece|
1ubwlmr|r1b1kbnr/pp2n1pp/8/1Nqppp1P/3N4/P7/1PP1PPP1/R1BQKB1R w KQkq - 1 12|d4f3 c5b5|1060|winningMaterial,oneMove,hangingPiece|
1vlc3st|3B4/pB3k2/P3n2b/2p1p3/8/2P5/1P3P2/6K1 w - - 1 39|f2f4 e6d8|1060|winningMaterial,endgame,oneMove,hangingPiece|
9x2ymu|8/8/2K3p1/6R1/5k2/1P6/6P1/4b3 w - - 13 63|b3b4 f4g5|1060|winningMaterial,endgame,oneMove,hangingPiece|
u9uobw|rn1q1rk1/4ppbp/1PNp2p1/8/1Q2n3/2N1B2P/1PP2PP1/2KR1B1R b - - 0 16|b8c6 b4e4|1065|winningMaterial,oneMove,hangingPiece|
9mpv2w|2R5/8/8/7p/1R3P1b/2pk1K1P/r7/8 w - - 7 58|f4f5 a2f2|1065|mate,mateIn1,endgame,oneMove|
14ude3c|8/4Q2p/5rk1/3ppb2/8/6pK/5b2/2B5 w - - 2 53|h3h4 g3g2|1065|mate,mateIn1,endgame,oneMove|
qqxsln|8/5pp1/8/8/4P2p/4k2P/1pB3P1/6K1 w - - 3 47|c2d3 e3d3|1065|winningMaterial,endgame,oneMove,hangingPiece|
1sduk26|1r5k/1p6/p1p4p/P2rNp2/1Q1P1npq/6RP/1P5K/5R2 b - - 1 39|b8g8 f1f4|1065|winningMaterial,oneMove,hangingPiece|
2z6kcx|r4b2/1pk2bp1/1P3p1p/4pN2/4B1P1/P4P2/2P4P/3R2K1 b - - 0 33|c7b8 d1d8|1065|mate,mateIn1,fork,oneMove|
1q9fgmm|r3n1k1/1b3ppp/p1r5/8/2R5/2N3B1/P4PPP/3R2K1 w - - 8 29|c4a4 c6c3|1065|winningMaterial,oneMove,hangingPiece|
110gu3j|4N1k1/5p2/1p2p1p1/pB1bQ2p/1n1P4/4bP1P/1B4PK/4q3 b - - 9 44|e3f4 e5f4|1065|winningMaterial,oneMove,hangingPiece|
1inyngm|5rk1/4ppbp/4nnp1/1P2p3/P7/4B1PP/r4PB1/R4RK1 b - - 1 22|a2a4 a1a4|1065|winningMaterial,oneMove,hangingPiece|
l3liky|8/1p6/1pb2pp1/3k3p/1P1N3P/P4P2/5KP1/8 w - - 14 38|d4c6 b7c6|1065|winningMaterial,endgame,oneMove,hangingPiece|
wzsmyk|8/8/3r1k1p/pRP2P2/8/PP6/1bBnK3/8 b - - 0 51|d2b1 c2b1|1070|winningMaterial,endgame,oneMove,hangingPiece|
ht9a2k|8/3k4/1p5p/6p1/2Pr2P1/3R4/4K2P/8 b - - 1 44|d7c7 d3d4|1070|winningMaterial,endgame,oneMove,hangingPiece|
orijum|5R2/8/7r/8/5p2/5k2/8/5K2 w - - 2 65|f8f5 h6h1|1070|mate,mateIn1,endgame,oneMove|
kbhkbe|2R5/8/1p4pk/7p/4P2P/6K1/7r/8 b - - 3 42|h2h4 g3h4|1070|winningMaterial,endgame,oneMove,hangingPiece|
18acsoh|r3k2r/3n1ppp/4p3/2b5/p2RP3/P6N/1P3PPP/1RB3K1 w kq - 1 19|d4d7 e8d7|1070|winningMaterial,oneMove,hangingPiece|
1lw11ha|2kr1b1r/ppp3pp/1n2p3/4q3/4P3/4BP2/PP2BP1P/2RQ1RK1 w - - 3 18|d1d8 c8d8|1070|winningMaterial,oneMove,hangingPiece|
vuwkro|1rr2k2/p3q1pp/2p1Q2n/p2pN3/P2P3P/1P2pP2/8/R1R3K1 w - - 6 30|e6c8 b8c8|1070|winningMaterial,oneMove,hangingPiece|
in4jlv|6k1/p5P1/8/2p5/Pr4RK/8/6PP/8 w - - 3 42|g4b4 c5b4|1070|winningMaterial,endgame,oneMove,hangingPiece|
135u83m|3k4/n7/3K4/2P5/1p6/1B6/8/8 b - - 1 53|a7c6 d6c6|1070|winningMaterial,endgame,oneMove,hangingPiece|
1dredk6|2r5/4kq2/5b2/1p1pR3/1P1p4/3P3Q/5P2/5K2 b - - 11 47|e7f8 h3c8|1070|winningMaterial,endgame,oneMove,hangingPiece|
a616si|6k1/R7/2p2R1P/8/2r3r1/7K/8/8 b - - 0 58|g4g3 h3g3|1070|winningMaterial,endgame,oneMove,hangingPiece|
14alcz8|rn2r1k1/1pq1bpp1/p2p1n1p/2pP4/6b1/PPN1P1P1/1B1N1PBP/R2QK2R w KQ - 3 14|d1g4 f6g4|1075|winningMaterial,oneMove,hangingPiece|
jje4gb|rnb1kb1r/1p3pp1/p3pn2/P1pp3p/N2P4/4PNBP/1qP1BPP1/R2QK2R b KQkq - 1 11|b2a1 d1a1|1075|winningMaterial,oneMove,hangingPiece|
3bjwmb|5k2/6r1/1r6/3p1PK1/8/1p1B4/1Q6/8 w - - 10 49|g5h4 b6h6|1075|mate,mateIn1,endgame,oneMove|
l363mt|6k1/5b2/p2b3p/P4P2/3p2p1/3P2N1/6PB/5K2 w - - 1 39|g3e4 d6h2|1075|winningMaterial,oneMove,hangingPiece|
9brd7e|r1bqkb1r/pppp1pp1/2n4p/8/3QP3/1B6/PPP2PPP/RNB1K2R w KQkq - 2 8|b3f7 e8f7|1075|winningMaterial,oneMove,hangingPiece|
mm1amm|r1b1n2r/3nkpp1/pN2p3/P6p/2p5/4P2P/3NBPPK/R4R2 b - - 0 22|c4c3 b6a8|1075|winningMaterial,oneMove,hangingPiece|
2vmzb0|r1b5/1pk1p3/p5p1/n1pBN2r/8/4P3/P1P3P1/2KR1R2 w - - 2 29|e5d3 h5d5|1075|winningMaterial,oneMove,hangingPiece|
jrr9bb|7k/6p1/5r1p/p3p3/q1P2p1P/R4P2/6PK/2Q5 b - - 1 40|a4a3 c1a3|1075|winningMaterial,oneMove,hangingPiece|
741bjf|8/1p6/8/1Nkn4/P3pp2/7P/KP4r1/2R5 b - - 1 51|g2c2 c1c2|1075|winningMaterial,endgame,oneMove,hangingPiece|
1ebu6jd|4kb1r/1ppn4/4b3/3Ppp1p/6p1/r1P1N1P1/P2NBPP1/R3K2R b KQk - 0 21|e6d5 e3d5|1075|winningMaterial,oneMove,hangingPiece|
id20di|r3b1k1/2R1bpp1/p3p2p/q3B3/1p2NP2/1Q2P2P/PP4P1/6K1 b - - 0 27|a8d8 c7e7|1075|winningMaterial,oneMove,hangingPiece|
cx7ope|8/8/8/Pk4P1/7K/8/4p1n1/4B3 w - - 3 66|h4h3 g2e1|1080|winningMaterial,endgame,oneMove,hangingPiece|
thojwz|8/2k5/2pR3p/5n1P/P7/1P1K4/8/8 w - - 0 38|d6d8 c7d8|1080|winningMaterial,endgame,oneMove,hangingPiece|
1cnxzmq|r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4|d2d4 a6b5|1080|winningMaterial,oneMove,hangingPiece|
1owgwnx|3Q3k/8/2p1r2r/3p4/pp6/P5P1/5K2/8 b - - 1 51|e6e8 d8e8|1080|winningMaterial,endgame,oneMove,hangingPiece|
orww6e|8/1R6/3B3k/2p2P1p/4n1r1/7K/7P/8 w - - 1 49|b7g7 e4f2|1080|mate,mateIn1,endgame,oneMove|
1d04o3|Q4k2/8/1q6/7p/7P/6P1/5r2/7K b - - 1 60|b6d8 a8d8|1080|winningMaterial,endgame,oneMove,hangingPiece|
qsyud0|4kb1r/rp1bpppp/1p6/n5B1/2BPp3/2P5/PP2NPPP/R3K2R w KQk - 3 13|c4f7 e8f7|1080|winningMaterial,oneMove,hangingPiece|
1r8gs7p|r3kb1r/3b1ppp/p4nn1/qpp1p3/2P1P3/1P3N2/P1BQ1PPP/RNB1K2R b KQkq - 2 14|g6f4 d2a5|1080|winningMaterial,oneMove,hangingPiece|
1vq8zzl|1r6/3k4/3P1p1p/R5p1/8/1rNn3P/6P1/2R4K w - - 1 40|h1h2 d3c1|1080|winningMaterial,oneMove,hangingPiece|
1waq7my|7k/6b1/8/8/1K5R/4r2P/1P6/8 b - - 2 47|g7h6 h4h6|1080|winningMaterial,endgame,oneMove,hangingPiece|
1l75if8|8/2Q2p2/p1pP2k1/1p6/P2K4/2P5/5q2/8 w - - 2 48|d4e5 f2e3|1080|mate,mateIn1,endgame,oneMove|
fogfpy|r1b1k1r1/pp2npB1/2q1p3/P2p3p/5P2/7P/1PP3P1/R2QKB1R w KQq - 1 15|d1h5 g8g7|1085|winningMaterial,oneMove,hangingPiece|
1fuyihk|8/8/R4k2/8/4K3/8/8/3r4 b - - 55 83|d1d6 a6d6|1085|winningMaterial,endgame,oneMove,hangingPiece|
1cduvs5|4r1k1/pp4b1/8/2Pp3p/1P1Pr3/P3B3/4R2P/3R2K1 w - - 1 40|e2g2 e4e3|1085|winningMaterial,oneMove,hangingPiece|
qyvj98|6k1/1p3p1p/b1r2BpP/2q1P3/8/1R1p1P2/3N2P1/3QK3 w - - 0 38|b3d3 a6d3|1085|winningMaterial,oneMove,hangingPiece|
g65gu1|8/8/1k6/2p5/5Kp1/P3n1P1/4N3/8 b - - 1 45|e3f5 f4f5|1085|winningMaterial,endgame,oneMove,hangingPiece|
1b4snem|5R2/1p2k3/p2p3p/P2bp3/5p2/7P/3N1K2/8 w - - 1 52|f8f4 e5f4|1085|winningMaterial,endgame,oneMove,hangingPiece|
1hk5nf0|7K/7Q/8/8/3k4/8/7r/8 b - - 6 59|h2h5 h7h5|1085|winningMaterial,endgame,oneMove,hangingPiece|
grr114|2k5/pp2p3/n3P1r1/3b2B1/P1pP4/2P4B/1P1K1p2/5R2 w - - 0 34|d2e3 g6g5|1085|winningMaterial,oneMove,hangingPiece|
1txz2qo|1rbq1rk1/1p2npp1/4p2p/p1np4/PP1N1P2/2P3P1/3NBP1P/1R1Q1RK1 b - - 0 16|c5a4 d1a4|1085|winningMaterial,oneMove,hangingPiece|
t22j3s|8/1p6/8/r4R1p/1k4pP/4P1P1/5PK1/8 w - - 1 66|f2f3 a5f5|1085|winningMaterial,endgame,oneMove,hangingPiece|
1txzqax|1k1r4/1pb5/5p2/pr1n2p1/3P3p/P2BP3/R2N1P2/2R2K2 b - - 4 34|h4h3 d3b5|1085|winningMaterial,oneMove,hangingPiece|
2fn9x2|1r6/1pk2K1P/2p5/4p3/p3P3/5r2/8/3R3R w - - 1 44|f7e6 b8e8|1090|mate,mateIn1,endgame,oneMove|
lgyk8b|8/3b2pk/p4p1p/P1P1nN1P/4P2q/7B/7K/3Q4 b - - 3 37|h4e1 d1e1|1090|winningMaterial,oneMove,hangingPiece|
1819u8w|4r1k1/5p2/6p1/p1p1p1P1/P1P1Q2n/1PPrR2q/3N1P2/5RK1 b - - 4 33|e8d8 e3h3|1090|winningMaterial,oneMove,hangingPiece|
kwprhi|rnbqk2r/ppppppbp/6p1/8/3Pn3/5NP1/PPPNPPBP/R1BQK2R b KQkq - 4 5|c7c5 d2e4|1090|winningMaterial,oneMove,hangingPiece|
1aub3sr|4r3/p2Q1k2/2p5/2P3p1/P3p2p/8/4b2P/7K b - - 2 48|f7f6 d7e8|1090|winningMaterial,endgame,oneMove,hangingPiece|
1kz11gr|7r/1p2kp1p/4pn2/r1P5/1KP3pP/P2NR1P1/5P2/3R4 b - - 2 26|a5a3 b4a3|1090|winningMaterial,oneMove,hangingPiece|
1ii9sri|8/8/1k6/1P4N1/1K5p/7P/5n2/8 b - - 2 59|f2g4 h3g4|1090|winningMaterial,endgame,oneMove,hangingPiece|
fj0ne9|8/8/k6p/7P/B1p5/4K3/1n6/8 w - - 0 62|e3f3 b2a4|1090|winningMaterial,endgame,oneMove,hangingPiece|
103qecb|5k2/Q4p1p/p2pp1pq/1p4N1/5P2/6P1/Pb1N2KP/3r4 b - - 3 25|h6h2 g2h2|1090|winningMaterial,oneMove,hangingPiece|
1n3bz0f|8/P1B1r1pk/7p/4N2P/4bp2/8/2p1p1PK/2R5 w - - 5 52|a7a8r e4a8|1090|winningMaterial,oneMove,hangingPiece|
27b8ot|r3k2r/ppp1nppp/2np2N1/8/1b2P2P/2N5/PPPB1PP1/R2bKB1R b KQkq - 0 13|d1h5 g6h8|1090|winningMaterial,oneMove,hangingPiece|
9s90a|8/1p6/1P3R2/2k3p1/5r2/8/5P2/6K1 w - - 17 59|f6f5 f4f5|1090|winningMaterial,endgame,oneMove,hangingPiece|
een1di|4r1kr/1p2Rpp1/p1p2n2/2Pp4/1P1q3n/5B1p/P1QNN3/5R1K b - - 3 31|d4e3 e7e3|1095|winningMaterial,oneMove,hangingPiece|
1jp2bp9|6r1/8/5R2/8/5p2/5k2/8/6K1 w - - 16 72|f6g6 g8g6|1095|winningMaterial,endgame,oneMove,hangingPiece|
9kejvp|r2r2k1/pp2qpb1/3p1Pp1/1n4N1/2P3p1/BQ2P3/5PPP/R4RK1 b - - 0 18|e7f6 b3b5|1095|winningMaterial,oneMove,hangingPiece|
1uehoa7|8/8/4p3/4Pk1p/2r2p1K/5P2/7P/6R1 b - - 3 31|c4e4 g1g5|1095|mate,mateIn1,endgame,oneMove|
b4hnl4|4kb1r/r3p1pp/1pp2p2/6B1/1PnPp3/2P3N1/P4PPP/R3K2R w KQk - 0 17|e1e2 f6g5|1095|winningMaterial,oneMove,hangingPiece|
s0w7g|6k1/1p3pp1/1qb4p/p2p3P/P2Q4/2P1rP2/1P5P/R4R1K b - - 2 31|b6b2 d4e3|1095|winningMaterial,oneMove,hangingPiece|
6dcmn7|3r2k1/p4p1p/1p4p1/5bb1/6B1/P1B4P/1P3PP1/2R3K1 w - - 7 32|g4f5 g5c1|1095|winningMaterial,oneMove,hangingPiece|
6ere26|1k1r4/1pb5/2p3q1/p3P2R/P7/1P3Q2/R1P3K1/2B5 w - - 0 37|f3g3 g6h5|1095|winningMaterial,oneMove,hangingPiece|
16x7pvh|8/4N3/4k3/4P1p1/3K4/2P5/1b6/8 w - - 9 57|d4e3 e6e7|1095|winningMaterial,endgame,oneMove,hangingPiece|
1k2fr3m|6k1/1b3rp1/p6p/PpRr4/4p3/1P2P1B1/5PPP/1R4K1 w - - 3 26|c5c8 b7c8|1095|winningMaterial,oneMove,hangingPiece|
1xxqx2z|8/B5k1/5p2/6p1/1r1bP3/6PR/2K4P/8 w - - 35 77|g3g4 d4a7|1095|winningMaterial,endgame,oneMove,hangingPiece|
ltrngx|2kr1b1r/1pp4p/5pp1/pQq1n3/P2NP2P/2P5/4bPP1/R1B2RK1 w - - 0 19|b5c5 f8c5|1100|winningMaterial,oneMove,hangingPiece|
1rzj4ha|5rnk/p7/1p1p3p/2pB1n2/2P2P2/2P4Q/P2Bq2P/R6K w - - 5 33|h3f3 e2d2|1100|winningMaterial,oneMove,hangingPiece|
1y1kplu|8/5kr1/p3b1nR/2p1PpP1/2p5/2n3N1/P4K2/1BB5 w - - 0 35|f2e1 c3b1|1100|winningMaterial,oneMove,hangingPiece|
169d1c2|r2q1rk1/pp3p1p/6p1/3pN3/P7/1QP5/4bPPP/R3R1K1 b - - 1 17|d8e7 e1e2|1100|winningMaterial,oneMove,hangingPiece|
k0hg3q|4k1r1/p3p3/2p1q3/1p3pQp/8/2PR4/PP3PP1/6K1 w - - 4 36|g5g8 e6g8|1100|winningMaterial,oneMove,hangingPiece|
1mmo5if|8/2b3k1/RrB3pp/8/6P1/3PK3/8/8 w - - 6 51|c6b5 b6b5|1100|winningMaterial,endgame,oneMove,hangingPiece|
1gf7qcf|r1r3k1/ppn2ppp/8/1B1Rpn2/8/B1P1PP2/P3KP1P/2R5 w - - 12 21|b5c6 b7c6|1100|winningMaterial,oneMove,hangingPiece|
1gqxbhz|5b2/1p2k1pQ/p3pr1p/4q2B/8/1P6/P4PPP/3R2K1 w - - 4 32|d1c1 e5h5|1100|winningMaterial,oneMove,hangingPiece|
1tfmyhq|6k1/1N3p2/6p1/4p1P1/P3r3/4PK2/8/8 b - - 5 48|g8g7 f3e4|1100|winningMaterial,endgame,oneMove,hangingPiece|
1t2bdix|8/R5k1/7N/p5P1/1p6/6K1/3r1P1P/1b6 b - - 7 39|d2d7 a7d7|1100|winningMaterial,endgame,oneMove,hangingPiece|
143ttct|2r3k1/p2n1pp1/Pp1r4/3p3p/1P1N3P/1bP5/3RNPP1/4K2R b - - 5 27|b6b5 d4b3|1100|winningMaterial,oneMove,hangingPiece|
10sgjmi|6r1/4k3/p2Rp2p/1p6/7P/2P5/PP2PP2/5K2 w - - 1 30|c3c4 e7d6|1105|winningMaterial,oneMove,hangingPiece|
4bz4tt|3B3r/8/p4pk1/8/3R3p/5P1P/6P1/5nK1 b - - 9 53|h8d8 d4d8|1105|winningMaterial,endgame,oneMove,hangingPiece|
1u7lr3k|8/8/8/8/4k1p1/3Rn1P1/7K/8 w - - 7 78|d3e3 e4e3|1105|winningMaterial,endgame,oneMove,hangingPiece|
1bo04g0|rn2k1nr/p1p1bppp/bp2p3/3q4/8/2P2NP1/PP1PQPBP/RNB1K2R w KQkq - 4 8|e2a6 b8a6|1105|winningMaterial,oneMove,hangingPiece|
1qc4c3j|1r5Q/3nkp1p/2p2P2/2qP4/4pP2/6R1/4B1K1/8 b - - 0 34|d7f6 h8b8|1105|winningMaterial,oneMove,hangingPiece|
6t24dk|1r6/6k1/3Pb3/7p/B1r5/2B3PP/8/1R5K b - - 3 39|g7h7 b1b8|1105|winningMaterial,endgame,oneMove,hangingPiece|
1hyeusp|8/2RPkp2/8/Pp3r2/2p5/2P3p1/1P2K3/8 w - - 1 54|d7d8q e7d8|1105|winningMaterial,endgame,oneMove,hangingPiece|
18zj58r|5k2/p1N5/P3rpp1/1p2n2p/1P5P/5P2/4R1P1/3K4 b - - 1 39|e6a6 c7a6|1105|winningMaterial,oneMove,hangingPiece|
uh5z00|rn1qk2r/2n2ppp/b2bp3/pp6/2pPN3/2PB1N2/PP3PPP/R1BQK2R w KQkq - 0 13|d3c4 b5c4|1105|winningMaterial,oneMove,hangingPiece|
fjx32t|3r3k/2Q5/6p1/6q1/4Pn2/5P1P/6P1/1R5K w - - 5 56|c7d8 g5d8|1105|winningMaterial,endgame,oneMove,hangingPiece|
n03u3r|Q2b1k2/7p/8/4p3/8/P6q/4P1NP/5K2 b - - 6 42|f8g7 a8d8|1105|winningMaterial,endgame,oneMove,hangingPiece|
1rzsp89|r5k1/2Q2pp1/pn5p/1p6/3P3q/2PN4/P4PP1/4R1K1 b - - 0 23|a8c8 c7b6|1105|winningMaterial,oneMove,hangingPiece|
1rqcxuy|7k/5p2/4p3/6P1/8/8/1q1K1Q1P/8 w - - 20 66|d2d1 b2f2|1110|winningMaterial,endgame,oneMove,hangingPiece|
bp201|8/7p/6k1/8/8/1P6/PKP1n2R/6r1 b - - 5 52|g6f5 h2e2|1110|winningMaterial,endgame,oneMove,hangingPiece|
n4rm9y|rn2k1nr/1ppq4/4p1p1/pb1pP2p/3P3P/2P2Q2/2PK1PP1/R1B2B1R w kq - 0 14|f1b5 d7b5|1110|winningMaterial,oneMove,hangingPiece|
ogpjzr|8/5pb1/4p3/4P1Bb/2k1PN2/5P2/4K3/8 b - - 22 57|g7f8 f4h5|1110|winningMaterial,endgame,oneMove,hangingPiece|
1njhuz2|8/1KR5/1p1n4/1P3p2/1PB2k2/p7/P6r/8 w - - 1 59|b7c6 d6c4|1110|winningMaterial,endgame,oneMove,hangingPiece|
rkva45|r2qk2r/1ppnbbp1/p1n4p/1P2pp2/2P5/3P1N1P/P1QBBPP1/RN3RK1 b kq - 0 14|c6a5 d2a5|1110|winningMaterial,oneMove,hangingPiece|
4y4y36|8/8/5kp1/6R1/4pB2/1q2P3/3K1P2/8 w - - 39 62|g5g6 f6g6|1110|winningMaterial,endgame,oneMove,hangingPiece|
qbth6i|8/8/4NR2/7p/3p3k/3r2n1/6K1/8 b - - 21 75|g3f1 f6f4|1110|mate,mateIn1,fork,endgame,oneMove|
1slh70b|8/8/1R1nPk2/P2P4/7p/2K4P/8/r7 b - - 7 73|a1a5 b6d6|1110|winningMaterial,endgame,oneMove,hangingPiece|
rpun3b|1r4k1/1p2ppbp/pR1p2p1/8/P7/NNnQ1R1P/b1r1B1P1/4q1BK w - - 16 29|b6b7 b8b7|1110|winningMaterial,oneMove,hangingPiece|
1gcbw7t|8/p2bk2p/p6R/3r4/3N4/1P6/6K1/8 w - - 2 54|g2f2 d5d4|1110|winningMaterial,endgame,oneMove,hangingPiece|
12kw26x|rnb1kb1r/pp3p1p/4pnp1/q1pp4/4P3/BP1P1NP1/P1PN1PBP/R2QK2R w KQkq - 2 9|c2c4 a5a3|1115|winningMaterial,oneMove,hangingPiece|
1hx58w2|8/pp2k1b1/3r2pp/8/2N1P3/2PNKP2/PP5P/8 b - - 5 31|d6d3 e3d3|1115|winningMaterial,oneMove,hangingPiece|
432i50|2k4r/1p3p2/p6p/8/5p1P/P1P3P1/2P2Nn1/2K3R1 b - - 2 32|h8g8 g1g2|1115|winningMaterial,oneMove,hangingPiece|
5zhs1a|8/5p1p/8/1p4k1/2b2R2/r7/P1R4P/6K1 w - - 2 50|f4f7 c4f7|1115|winningMaterial,endgame,oneMove,hangingPiece|
6b7ztu|3r2k1/1R5R/1p4B1/pP2b3/P7/6P1/1r5P/7K w - - 1 35|g6c2 b2c2|1115|winningMaterial,oneMove,hangingPiece|
6fcp7m|8/8/6k1/7p/P7/1PP2n2/1K5R/6r1 w - - 1 55|a4a5 f3h2|1115|winningMaterial,endgame,oneMove,hangingPiece|
1s3hlp|r1b1k1nr/p4ppp/2p2b2/Pp1P4/2p5/2N2N2/P4PPP/R1B1KB1R w KQkq - 1 12|f3d4 f6d4|1115|winningMaterial,oneMove,hangingPiece|
1i50o39|5k2/3B4/1p6/3r1Nb1/P7/5K2/5P2/8 w - - 1 55|f3e4 d5d7|1115|winningMaterial,endgame,oneMove,hangingPiece|
137qvwj|3r2k1/4R1p1/5p2/3p2bQ/p1pP4/P1B3P1/1Pq5/6K1 b - - 7 38|g5e3 e7e3|1115|winningMaterial,oneMove,hangingPiece|
122pm24|2k5/1p5p/2pBr3/p4Q2/P2q4/8/7P/2R3K1 w - - 1 40|g1h1 d4d6|1115|winningMaterial,endgame,oneMove,hangingPiece|
c5vg8z|4Q3/1p1q1p1k/p7/6p1/6R1/4P3/5PPK/3r4 w - - 2 41|e8d7 d1d7|1115|winningMaterial,endgame,oneMove,hangingPiece|
18xcwvl|q7/7k/6pp/5Q2/8/8/1P4PP/7K w - - 0 43|f5g6 h7g6|1115|winningMaterial,endgame,oneMove,hangingPiece|
123v4wp|r3k2r/1p1nn3/p2p2p1/3P1p2/2P1N2p/4B3/Pb2B1PP/2KR3R w kq - 0 22|c1d2 f5e4|1120|winningMaterial,oneMove,hangingPiece|
2oe1ke|1Q6/4pk2/2P1n1p1/3qNp2/1p4p1/4PP2/5P1P/5K2 b - - 1 39|d5e5 b8e5|1120|winningMaterial,oneMove,hangingPiece|
ub5bg7|8/6pk/3B2p1/5rPp/P7/8/6K1/8 b - - 0 50|f5f8 d6f8|1120|winningMaterial,endgame,oneMove,hangingPiece|
4d5dyk|r1bq1r1k/2pp2pp/1p2n3/p2QP3/4Pp2/2P2N2/PP1N2PP/R4RK1 b - - 1 18|g7g5 d5a8|1120|winningMaterial,oneMove,hangingPiece|
1jrcav1|1rb4r/p2k4/2ppn1pp/5p2/1P2N3/P4NP1/2P2K1P/R3R3 w - - 0 24|e4d6 d7d6|1120|winningMaterial,oneMove,hangingPiece|
idt5rp|r1bb1rk1/p1p2ppp/2Qpq3/8/4P3/P1B5/1PP2PPP/RN3RK1 b - - 0 15|e6g6 c6a8|1120|winningMaterial,oneMove,hangingPiece|
76ofoz|8/8/8/2N1k3/4P3/8/3K4/4n3 b - - 2 62|e5f4 d2e1|1120|winningMaterial,endgame,oneMove,hangingPiece|
zksl90|3kq1Q1/2p3p1/8/8/p3P3/5P1P/6P1/7K w - - 4 58|g8h8 e8h8|1120|winningMaterial,endgame,oneMove,hangingPiece|
403ksg|r3kb1r/1b2n1pp/ppn1p3/2ppP3/5P1q/2P2B1P/PP2NBP1/RN1Q1K1R b kq - 6 14|h4f2 f1f2|1120|winningMaterial,oneMove,hangingPiece|
hus354|1r3rk1/p4ppp/2bb1q2/6B1/3Pp3/7P/PPQ1NPP1/R4RK1 b - - 1 18|f6f5 c2c6|1120|winningMaterial,oneMove,hangingPiece|
3zz1gg|2R5/3k4/7p/6pP/p2P2P1/P1P2K2/2r5/8 w - - 5 66|c8c6 d7c6|1120|winningMaterial,endgame,oneMove,hangingPiece|
1szh3bx|3r2k1/1ppr2pp/4bp2/R1bn3P/2P1PB2/5P2/1P2B1PR/4K3 w - - 0 24|a5c5 d5f4|1125|winningMaterial,oneMove,hangingPiece|
oqk5z5|8/1p2n3/p6K/4kbP1/1P3R1P/5R2/2r5/8 w - - 1 51|f3e3 e5f4|1125|winningMaterial,endgame,oneMove,hangingPiece|
6zs4vr|8/1p3k2/p1b4p/2P1R3/1rBK3P/5P2/8/8 b - - 2 48|b4c4 d4c4|1125|winningMaterial,endgame,oneMove,hangingPiece|
1g75xti|8/p3k3/2p5/8/6p1/2P1nB2/PP1r1R1P/6K1 b - - 13 38|d2f2 g1f2|1125|winningMaterial,endgame,oneMove,hangingPiece|
fy641o|8/8/7R/pp1k1P2/2nN4/2r5/5KP1/8 w - - 0 48|h6a6 d5d4|1125|winningMaterial,endgame,oneMove,hangingPiece|
1vo3cl6|8/p6p/3k4/2bp2B1/PR5P/1P6/5r2/6K1 w - - 1 35|g5e7 d6e7|1125|winningMaterial,endgame,oneMove,hangingPiece|
1jx0fmq|8/7R/6kp/4p3/1P6/1r2P2P/6PK/8 w - - 2 39|h7h6 g6h6|1125|winningMaterial,endgame,oneMove,hangingPiece|
hpwe0j|8/8/7r/1p1K2k1/p7/P7/P6R/8 w - - 0 52|h2h1 h6h1|1125|winningMaterial,endgame,oneMove,hangingPiece|
1gybe22|8/8/2r3pp/P2k1p2/3P3P/P1B1PK2/6P1/8 w - - 6 45|h4h5 c6c3|1125|winningMaterial,endgame,oneMove,hangingPiece|
1s379fr|7r/rP1n1kp1/2pB1p2/3p1b1p/1P1p4/RK2PP1P/6P1/5B1R b - - 0 26|h8e8 a3a7|1125|winningMaterial,oneMove,hangingPiece|
1bt0nis|8/p2k4/6rp/6p1/P7/1P1R3P/K1Pn2P1/8 b - - 2 62|d7e7 d3d2|1125|winningMaterial,endgame,oneMove,hangingPiece|
139q47w|r2r1k2/1pq2ppp/4pn2/1P3N2/p7/Pn3PQ1/1PB3PP/1K1RR3 b - - 3 26|c7c2 b1c2|1125|winningMaterial,oneMove,hangingPiece|
ozj0dh|2bqk2r/r4ppp/2pbpn2/p2p4/3P1B1P/2P5/PP1NBPP1/R2QK2R w KQk - 3 12|d1a4 d6f4|1130|winningMaterial,oneMove,hangingPiece|
1nujae4|8/6pk/1P5p/2QqP2P/bK4P1/8/8/8 b - - 1 58|d5d2 b4a4|1130|winningMaterial,endgame,oneMove,hangingPiece|
6xf2p|4kb1r/p2p1ppp/1pr5/n7/4P3/3Q2B1/P1qN1PPP/R4RK1 w k - 0 18|d3f3 c2d2|1130|winningMaterial,oneMove,hangingPiece|
15ezibx|r1b1kb1r/1pp1qppp/p1p5/4Nn2/6P1/1PN2Q2/P1PP1P1P/R1BK3R b kq - 2 10|f5e3 f3e3|1130|winningMaterial,oneMove,hangingPiece|
12k88u2|5k2/1b3Bp1/1p5p/p7/8/2P1P1P1/PKP4P/8 w - - 0 31|b2b3 f8f7|1130|winningMaterial,oneMove,hangingPiece|
3xgi6s|5k2/5pp1/2b5/4p2p/1N1bP3/3B3P/1p4PB/7K b - - 3 37|c6e4 d3e4|1130|winningMaterial,oneMove,hangingPiece|
1sfoyxh|8/2b1rp2/8/1r4k1/p1P1B1p1/P7/1P2RP2/1R3K2 b - - 0 35|f7f5 c4b5|1130|winningMaterial,oneMove,hangingPiece|
13vj3ut|4b2k/6p1/1n5p/4Pp2/pPp5/N2r1BP1/5PP1/3R2K1 w - - 6 41|b4b5 d3a3|1130|winningMaterial,oneMove,hangingPiece|
1zb8kd|5b1R/1p2kr2/5pp1/pb2P3/2N5/2P5/PP2N3/2K5 w - - 1 36|c1d2 b5c4|1130|winningMaterial,oneMove,hangingPiece|
1b30syn|8/5pk1/6p1/8/r3p1pP/6P1/R3RPK1/1r6 b - - 3 40|g6g5 a2a4|1130|winningMaterial,endgame,oneMove,hangingPiece|
te84jf|6k1/2p2p2/4r1pp/p3n3/8/P4N2/1r1R1PPP/2R2K2 b - - 8 32|e5d3 d2d3|1130|winningMaterial,oneMove,hangingPiece|
443yht|4Q1r1/3P3k/p3p1p1/2P3q1/1p4P1/5B1p/P3r3/5R1K b - - 2 33|g8e8 d7e8q|1130|winningMaterial,promotion,oneMove,hangingPiece|
uvu52f|8/6b1/Bkp3p1/2N1p2r/1n5P/5P2/P1P2K2/7R w - - 0 31|c5d3 b4a6|1135|winningMaterial,oneMove,hangingPiece|
18rfj2t|7r/4p2p/5kpn/1B3p2/P7/2PRq3/1P2N2P/4K2R b K - 3 27|e3d3 b5d3|1135|winningMaterial,oneMove,hangingPiece|
1vk6wgf|r1bqkb1r/1p1n1ppp/p7/PB1p4/3p4/8/1PPB1PPP/R2QK1NR w KQkq - 0 10|g1f3 a6b5|1135|winningMaterial,oneMove,hangingPiece|
1b0assv|4b3/1p3ppk/3Q3p/8/p7/4qPKP/3B2P1/8 b - - 6 38|e3d2 d6d2|1135|winningMaterial,endgame,oneMove,hangingPiece|
15glupy|r1bq1rk1/pp2bppp/1np1p3/2Pp4/3P1P2/2N1PN2/PP3P1P/2RQKBR1 b - - 0 11|e7c5 d4c5|1135|winningMaterial,oneMove,hangingPiece|
kpfeyp|2r3k1/3q1pp1/r1P2n1p/N2bp3/1p5P/4B1P1/1P3P2/R2Q1BK1 b - - 0 27|d7e8 f1a6|1135|winningMaterial,oneMove,hangingPiece|
1d89e0r|3b1r1k/3n2p1/7p/pRrB2P1/3p3P/2pP4/4RP2/2B3K1 w - - 4 43|d5a2 c5b5|1135|winningMaterial,oneMove,hangingPiece|
1bnate|3r4/1p1rqp1k/p5pN/n3P3/P2P3Q/7P/5PP1/3R1RK1 w - - 3 31|h4g3 h7h6|1135|winningMaterial,oneMove,hangingPiece|
4hy6gv|2r3k1/2p3np/3p2p1/p7/P2N2P1/1P5P/2b2B2/4R1K1 b - - 1 30|c2b3 d4b3|1135|winningMaterial,oneMove,hangingPiece|
i7twys|r1bqkb1r/1ppp1p1p/p4np1/n3p3/1P6/2PP2PB/P1Q1PP1P/RNB1K1NR b KQkq - 0 7|f8g7 b4a5|1135|winningMaterial,oneMove,hangingPiece|
2q4jdz|8/2p2r2/2P1p3/4k3/p4r1R/8/3R1P2/5K2 w - - 9 42|h4f4 f7f4|1135|winningMaterial,endgame,oneMove,hangingPiece|
zljcc8|4r3/R1p1rkp1/3p4/N1pb3p/2P5/P6P/5PP1/2R3K1 b - - 0 31|d5f3 g2f3|1135|winningMaterial,oneMove,hangingPiece|
xbixu6|r6Q/ppqrkp1p/4b1p1/8/P7/2P1R3/5PPP/3R2K1 w - - 2 26|d1d7 c7d7|1140|winningMaterial,oneMove,hangingPiece|
o9scur|rnb1kbnr/ppp1pppp/8/3q4/3pN3/P7/1PPPPPPP/R1BQKBNR w KQkq - 2 4|h2h3 d5e4|1140|winningMaterial,oneMove,hangingPiece|
eo1jp1|rn6/1p2k3/2p1p1p1/p2pP3/3P2pP/2P1K3/2P1Br2/R6R b - - 1 21|f2e2 e3e2|1140|winningMaterial,oneMove,hangingPiece|
174i6qu|3B2k1/3n1ppp/r3b3/pq6/N1p1P2P/4Q1P1/1PP2P2/2KR4 w - - 2 26|e3g5 b5a4|1140|winningMaterial,oneMove,hangingPiece|
4yb7iy|1r1r3k/3B1npp/1p1Ppq2/p7/P1P1QP2/1N6/KP4PP/3R4 w - - 1 32|f4f5 d8d7|1140|winningMaterial,oneMove,hangingPiece|
1mog7nb|1nr2rk1/Q4ppp/1pp1p3/8/3qB3/P7/1P3PPP/2R2RK1 w - - 0 21|e4h7 g8h7|1140|winningMaterial,oneMove,hangingPiece|
1h888o|6k1/1p6/2p4p/6p1/2P1q3/1P4P1/P3QK1P/8 b - - 7 40|e4e2 f2e2|1140|winningMaterial,endgame,oneMove,hangingPiece|
12dslkh|8/8/8/8/2p3n1/5KP1/N1k5/8 b - - 19 59|g4e3 f3e3|1140|winningMaterial,endgame,oneMove,hangingPiece|
1w75ki9|8/2n5/5N1p/2K3k1/8/8/8/8 w - - 2 70|c5d4 g5f6|1140|winningMaterial,endgame,oneMove,hangingPiece|
119866r|8/8/8/1r6/R1bP4/1k2K3/p3p1P1/4R3 w - - 2 64|a4a2 b3a2|1140|winningMaterial,endgame,oneMove,hangingPiece|
1isnwwo|8/7p/1p6/p3bP1K/P6P/8/Nk4P1/8 w - - 7 51|a2c3 b2c3|1140|winningMaterial,endgame,oneMove,hangingPiece|
ma0cx0|6k1/p4p2/P3n3/R1r4p/7P/5B2/5PP1/6K1 w - - 7 40|g2g3 c5a5|1140|winningMaterial,endgame,oneMove,hangingPiece|
75gb9m|6k1/8/5R2/4Pn1p/8/5N2/r5PK/8 b - - 15 72|a2g2 h2g2|1145|winningMaterial,endgame,oneMove,hangingPiece|
er3dqp|8/8/R1bk4/P5p1/3K4/8/8/8 w - - 0 44|a6a8 c6a8|1145|winningMaterial,endgame,oneMove,hangingPiece|
ycsyb1|8/5R2/2p1kP2/1p6/p7/P5b1/8/1K6 w - - 1 48|f7d7 e6d7|1145|winningMaterial,endgame,oneMove,hangingPiece|
1trce7u|8/6p1/1p1n1k1p/1P1K3P/8/8/4N3/8 b - - 7 50|d6e4 d5e4|1145|winningMaterial,endgame,oneMove,hangingPiece|
oajns8|5k2/8/1p2B3/4KNb1/P7/8/5P2/4r3 w - - 7 58|e5d4 e1e6|1145|winningMaterial,endgame,oneMove,hangingPiece|
1pi49dp|5k2/2R5/4ppp1/4r2p/P2nN2P/5K2/6P1/8 w - - 10 49|f3f2 e5e4|1145|winningMaterial,endgame,oneMove,hangingPiece|
1gxdych|8/8/1B6/P7/8/2k2q2/8/3NK3 b - - 33 73|f3d1 e1d1|1145|winningMaterial,endgame,oneMove,hangingPiece|
ho4e94|6r1/5p1k/5B1p/1p3P2/1Pb1P1n1/2N5/8/6RK w - - 5 38|g1g4 g8g4|1145|winningMaterial,endgame,oneMove,hangingPiece|
ldw9u6|rn1qk2r/1pp2ppp/p3p3/2Pp4/1b1PnB2/3QP3/PP1N1PPP/R3K1NR w KQkq - 1 9|d3b3 b4d2|1145|winningMaterial,oneMove|
hlpgv0|8/6pk/4R3/4N1b1/1p2P1K1/1r2P3/8/8 b - - 1 49|g5e7 e6e7|1145|winningMaterial,endgame,oneMove,hangingPiece|
v7r8dq|5k2/5Rn1/r7/4P1Np/8/8/6P1/6K1 b - - 5 67|f8e8 f7g7|1145|winningMaterial,endgame,oneMove,hangingPiece|
13pdrch|4k3/1p2b3/8/P1p4p/1p1rPBB1/1P4PK/q6P/1R3R2 w - - 0 39|f1e1 h5g4|1145|winningMaterial,oneMove|
17jy8wm|8/8/8/5k2/6pb/6B1/5K2/8 w - - 20 74|f2f1 h4g3|1150|winningMaterial,endgame,oneMove,hangingPiece|
12drbfg|5R2/4k3/8/5P2/4K3/r7/8/8 w - - 1 79|f8f7 e7f7|1150|winningMaterial,endgame,oneMove,hangingPiece|
8rokhr|8/5qkp/Q3p1p1/1P1n2P1/2p5/2N1p1nP/6K1/R7 w - - 4 43|a1f1 f7f1|1150|winningMaterial,oneMove|
1kr8t3w|8/6R1/4p2k/3b1p2/2r2K2/4PP2/6P1/B7 w - - 47 72|f4e5 h6g7|1150|winningMaterial,endgame,oneMove,hangingPiece|
wtuze8|8/8/8/2p5/3N1nk1/4K3/8/8 w - - 0 56|d4e6 f4e6|1150|winningMaterial,endgame,oneMove,hangingPiece|
rfquo4|8/4b3/1Rb5/2k4p/7P/1p5K/8/3R4 w - - 4 52|h3g3 c5b6|1150|winningMaterial,endgame,oneMove,hangingPiece|
oi662x|8/8/8/4p3/2R1n1kp/8/6KP/8 b - - 5 60|g4g5 c4e4|1150|winningMaterial,endgame,oneMove,hangingPiece|
y2odho|2k5/5p2/2p5/1p6/2N2Np1/Pp2P1P1/2K2n2/8 w - - 0 36|c2b2 b5c4|1150|winningMaterial,endgame,oneMove,hangingPiece|
verwt2|8/8/4pb2/8/6P1/2B4P/2K1k3/8 b - - 0 57|e2f2 c3f6|1150|winningMaterial,endgame,oneMove,hangingPiece|
1sswf82|8/1R6/P4pk1/4p3/8/1r6/7K/8 b - - 0 69|b3b7 a6b7|1150|winningMaterial,endgame,oneMove,hangingPiece|
1q812zf|8/1p2kp2/6r1/1p6/1P6/PK4RP/8/8 w - - 0 44|g3g1 g6g1|1150|winningMaterial,endgame,oneMove,hangingPiece|
kvbban|4R3/pp3K2/3r2pk/7p/4N2n/8/8/8 b - - 1 48|d6d8 e8d8|1150|winningMaterial,endgame,oneMove,hangingPiece|
1uoumvh|5rB1/8/3k4/1p2b1PK/8/1P2R3/8/8 w - - 47 77|h5g4 f8g8|1155|winningMaterial,endgame,oneMove,hangingPiece|
ut5kko|Q7/6pk/7p/2P2p2/8/5P1P/1B2n1PK/4q3 w - - 5 46|a8h8 h7h8|1155|winningMaterial,endgame,oneMove,hangingPiece|
1smsiox|8/6p1/p1pb4/P4P2/1PKpk3/5R2/8/8 w - - 4 44|f3g3 d6g3|1155|winningMaterial,endgame,oneMove,hangingPiece|
4zvpfn|r3k3/pp1r3p/2p3p1/P1n3P1/4P3/2Nb1P2/1P2K1P1/R4B1R w q - 1 23|e2d2 d3f1|1155|winningMaterial,oneMove|
1pfi5t0|8/8/p5P1/1k6/4Rb1r/8/KPP5/8 b - - 1 50|h4h1 e4f4|1155|winningMaterial,endgame,oneMove,hangingPiece|
1y3fue5|5r2/1qp1bpk1/4p2p/p2nN2r/3P4/4NQ2/1P3PP1/R1R3K1 b - - 7 32|h5f5 e3f5|1155|winningMaterial,oneMove|
l8c26s|r1bqk2r/1p1n1pp1/p2pp2p/2p5/2P1PPPb/2NPBQ2/PP3KB1/R6R w kq - 0 17|f3g3 h4g3|1155|winningMaterial,oneMove|
dpx6m7|4B3/8/4K3/8/4r3/4k3/8/8 w - - 16 77|e6d6 e4e8|1155|winningMaterial,endgame,oneMove,hangingPiece|
mmdmki|8/8/3k4/8/4P3/3N1K2/6n1/8 b - - 14 68|d6c7 f3g2|1155|winningMaterial,endgame,oneMove,hangingPiece|
k7ylch|1r4k1/bpp2ppp/8/BP6/5n2/P5rP/5PB1/R3R1K1 w - - 1 29|e1e4 g3g2|1155|winningMaterial,oneMove|
wq6gqn|8/3R2p1/4pk2/1b3p2/r2B4/4P3/P4PP1/6K1 b - - 1 37|a4d4 d7d4|1155|winningMaterial,endgame,oneMove,hangingPiece|
9fdp8w|5k2/5p1p/P2r4/R7/6p1/8/KP6/8 b - - 2 37|d6a6 a5a6|1155|winningMaterial,endgame,oneMove,hangingPiece|
wez8pt|2r5/1p4N1/2p2p2/kp3K2/6P1/1P2P3/1b5R/8 b - - 2 36|c6c5 h2b2|1160|winningMaterial,endgame,oneMove,hangingPiece|
1v5cyxu|1r2k3/2q3b1/4p1b1/2p1P3/2P1P1B1/1p1P1N2/1PQ3N1/1K5R w - - 0 30|g2e3 b3c2|1160|winningMaterial,oneMove|
akjvbw|4k3/3b1pb1/7p/P2q4/4Q3/P7/3N3P/3KN3 b - - 0 32|g7e5 e4d5|1160|winningMaterial,endgame,oneMove,hangingPiece|
lccsdh|8/4p3/4Nk2/5p2/8/4KP2/1r4p1/2R5 w - - 2 67|c1e1 f6e6|1160|winningMaterial,endgame,oneMove,hangingPiece|
1g6zybz|3r4/pk6/1p6/8/8/P1b1R2b/2P2P2/1R4K1 b - - 1 41|d8c8 e3h3|1160|winningMaterial,endgame,oneMove,hangingPiece|
zd7tvq|8/2Bk4/6p1/2p4p/p1b2K1P/P4PP1/1P6/8 w - - 14 49|f4e5 d7c7|1160|winningMaterial,endgame,oneMove,hangingPiece|
1afv3ed|8/kpB5/8/q1p5/2Q1P3/b3P3/3r1P2/1K4R1 b - - 10 51|d2d1 g1d1|1160|winningMaterial,endgame,oneMove,hangingPiece|
1ok43jo|8/8/p7/5p2/p2r1k2/2RN2p1/1P6/4K3 b - - 3 60|d4d3 c3d3|1160|winningMaterial,endgame,oneMove,hangingPiece|
1nyd5db|8/8/3K4/7r/8/4k3/3R4/8 w - - 10 82|d2e2 e3e2|1160|winningMaterial,endgame,oneMove,hangingPiece|
cj5mte|8/8/6k1/8/3p2K1/1BnP4/8/8 b - - 0 70|c3d1 b3d1|1160|winningMaterial,endgame,oneMove,hangingPiece|
1te77ic|8/6pk/3N1p2/2R4p/5Pn1/6P1/3N4/1r1b2K1 b - - 5 51|d1f3 d2b1|1160|winningMaterial,endgame,oneMove,hangingPiece|
3vnik|6r1/2pbk3/1pp4P/4p3/1p2P3/1P4K1/P1P1B3/7R w - - 1 35|e2g4 g8g4|1160|winningMaterial,oneMove|
jsk5un|7r/6k1/4q3/p3PpPQ/2p4P/8/6K1/3R4 w - - 2 45|h5h8 g7h8|1160|winningMaterial,endgame,oneMove,hangingPiece|
87phmq|rn2kbnr/ppq2ppp/4p3/1BppPb2/3P4/P1P5/1P3PPP/RNBQK1NR b KQkq - 2 6|c7d7 b5d7|1165|winningMaterial,oneMove|
log5yn|8/8/4k3/4pp1p/1bN1r3/2R1P1P1/5K1P/8 w - - 19 47|c3b3 e4c4|1165|winningMaterial,endgame,oneMove,hangingPiece|
1mpqyy|rn2k2r/ppq1bpp1/4pnp1/1Bp5/3P4/P5N1/1PPB1PPP/R2QK2R b KQkq - 1 12|c7d7 b5d7|1165|winningMaterial,oneMove|
abxnej|8/6N1/pRr2nkp/P5p1/3K4/8/8/8 b - - 14 59|c6c4 d4c4|1165|winningMaterial,endgame,oneMove,hangingPiece|
1qazyfr|8/6K1/3k2p1/1R3p2/1P1p1r2/4RP2/6r1/8 w - - 0 54|e3e7 d6e7|1165|winningMaterial,endgame,oneMove,hangingPiece|
1olskh3|r1b1kbnr/1p3ppp/p1nqp3/8/2BpN3/5N2/PPP2PPP/R1BQR1K1 b kq - 1 9|g8f6 e4d6|1165|winningMaterial,oneMove|
s367rj|8/5R1p/1p1k4/p4Q2/P7/7K/4r2P/4q3 b - - 9 48|e2h2 h3h2|1165|winningMaterial,endgame,oneMove,hangingPiece|
1yjjmke|4k3/1Kr4R/8/8/8/8/8/8 w - - 0 80|b7b6 c7h7|1165|winningMaterial,endgame,oneMove,hangingPiece|
zksfa6|8/4BR2/2p4P/1p3br1/pP6/P7/4k2K/8 b - - 3 59|g5g8 f7f5|1165|winningMaterial,endgame,oneMove,hangingPiece|
wujspa|3b4/k7/2P1Np2/4pK2/P3B2r/5P2/8/8 b - - 2 49|a7b8 e6d8|1165|winningMaterial,endgame,oneMove,hangingPiece|
1iylx81|4k3/1p2r2p/5P1P/2pb4/5Q2/3p4/1B1Pp1P1/6K1 w - - 0 40|b2c3 e2e1q|1165|winningMaterial,promotion,oneMove|
1gtoa8w|1r6/1P6/4Rpk1/2p4p/4n3/B3P3/6K1/8 b - - 0 42|e4f2 g2f2|1165|winningMaterial,endgame,oneMove,hangingPiece|
8rqkb8|8/1P4p1/3b2pk/3P4/8/5Br1/4K2p/3R4 w - - 9 58|b7b8q d6b8|1170|winningMaterial,endgame,oneMove,hangingPiece|
10zcgcu|8/2k3r1/8/8/6R1/7K/8/8 b - - 5 68|c7c6 g4g7|1170|winningMaterial,endgame,oneMove,hangingPiece|
wvou8a|3Qnrk1/5p1p/pn4pP/2N3P1/1P2Pq2/2p5/P7/2KR1B1R w - - 0 28|d8d2 c3d2|1170|winningMaterial,oneMove|
1pv0u0j|3b4/3p4/8/2P3Bp/3pk2P/8/8/3K4 b - - 5 73|e4e5 g5d8|1170|winningMaterial,endgame,oneMove,hangingPiece|
fvkoqv|2r5/8/P4k2/1p6/3nBp2/3P2pr/3KP3/RR6 w - - 0 40|b1b5 d4b5|1170|winningMaterial,endgame,oneMove,hangingPiece|
pqc02s|1N4k1/5p2/6p1/7p/r4b2/8/1P3PPP/1R3K2 w - - 2 35|b2b4 f4b8|1170|winningMaterial,endgame,oneMove,hangingPiece|
slktit|6k1/Q6p/p5P1/3p1qN1/p6K/8/6P1/8 b - - 4 44|f5g4 h4g4|1170|winningMaterial,endgame,oneMove,hangingPiece|
1tw7nh4|8/7p/1P6/8/P3pp1P/5k2/3R1r2/4K3 b - - 1 42|f2f1 e1f1|1170|winningMaterial,endgame,oneMove,hangingPiece|
2f71dh|8/8/r7/1k6/8/R3K3/8/8 w - - 0 57|a3a1 a6a1|1170|winningMaterial,endgame,oneMove,hangingPiece|
1fshhf6|8/2p1r1k1/3b2pp/3R4/3P1P2/4Q1P1/2q5/5RK1 w - - 1 42|e3e7 d6e7|1170|winningMaterial,endgame,oneMove,hangingPiece|
1l28nkb|3b4/1p3k2/p2R4/8/5B2/2P2KP1/1r6/8 b - - 2 55|b2b3 d6d8|1170|winningMaterial,endgame,oneMove,hangingPiece|
gjxp9i|8/pk1r1R1Q/1p4p1/4qn2/P6B/3P3P/2P3PK/8 w - - 3 35|h4g3 e5g3|1170|winningMaterial,oneMove|
onvkij|8/8/2k5/P6K/6P1/4p3/2nB4/8 w - - 0 58|d2b4 c2b4|1175|winningMaterial,endgame,oneMove,hangingPiece|
i6ch4q|8/2b5/5pK1/2k2P2/8/5r2/3B4/2R5 b - - 3 62|c5d5 c1c7|1175|winningMaterial,endgame,oneMove,hangingPiece|
1tw7hqm|8/P1r3p1/5p1p/3p3P/4k3/4B1P1/1K3P2/8 b - - 0 53|c7a7 e3a7|1175|winningMaterial,endgame,oneMove,hangingPiece|
16nn747|8/5k1p/1P1R1p2/1r2n1p1/3BK3/8/5PP1/8 w - - 11 48|d4c5 b5c5|1175|winningMaterial,endgame,oneMove,hangingPiece|
1wuni6t|2r3k1/1r3p1p/1n4pB/1p2Pp2/1P1R4/7P/5KP1/2R5 b - - 1 26|f7f6 c1c8|1175|winningMaterial,oneMove|
11qi8yu|8/8/6k1/7R/2p2p2/P1K2PrP/1P6/8 w - - 5 47|c3c4 g6h5|1175|winningMaterial,endgame,oneMove,hangingPiece|
t3m9hf|8/3Bp2p/2rb1k2/5p2/4p3/4P2P/R4K2/8 b - - 5 40|h7h5 d7c6|1175|winningMaterial,endgame,oneMove,hangingPiece|
i0yoml|1b6/5pk1/R5p1/3N4/5P2/6r1/5K2/8 b - - 1 41|g3c3 d5c3|1175|winningMaterial,endgame,oneMove,hangingPiece|
vm7sh0|8/5pk1/6p1/8/4p1pP/6P1/4RPK1/r7 w - - 0 42|e2a2 a1a2|1175|winningMaterial,endgame,oneMove,hangingPiece|
5cxmce|8/5bpk/7p/pPK1P2P/P2Q4/4qPP1/8/8 b - - 8 48|e3d4 c5d4|1175|winningMaterial,endgame,oneMove,hangingPiece|
ubzlq5|rnbqk2r/pp3ppp/2p1pn2/3p4/1bPP1B2/4PN2/PP3PPP/RN1QKB1R w KQkq - 2 6|d1d2 b4d2|1175|winningMaterial,oneMove|
19g9rn6|6k1/5p2/6p1/4b3/1P5p/N1r5/5PPP/1R3K2 w - - 2 40|f1e2 c3a3|1175|winningMaterial,endgame,oneMove,hangingPiece|
19qxmoc|7k/6b1/8/prp4p/2B2P2/1NP3P1/1P5P/5K2 b - - 1 34|b5b3 c4b3|1175|winningMaterial,endgame,oneMove,hangingPiece|
teelsq|8/8/5k2/4r2p/1R2B3/1P6/8/4b1K1 w - - 3 44|b4b8 e5e4|1180|winningMaterial,endgame,oneMove,hangingPiece|
1h86qn|7k/R1K2r2/7P/8/P7/8/8/8 w - - 3 81|c7d6 f7a7|1180|winningMaterial,endgame,oneMove,hangingPiece|
1ek69re|8/BR6/8/k2p4/4p3/3r2p1/2K5/8 b - - 0 50|d3d2 c2d2|1180|winningMaterial,endgame,oneMove,hangingPiece|
v9rduz|8/2bB4/2K2kpp/8/6P1/3P4/8/8 b - - 19 61|f6e5 c6c7|1180|winningMaterial,endgame,oneMove,hangingPiece|
1hfjh9x|8/5k2/5Bp1/2p4p/p6P/P4PPb/1P6/6K1 w - - 0 42|b2b3 f7f6|1180|winningMaterial,endgame,oneMove,hangingPiece|
pp8jg2|1R6/8/p7/5pp1/p2k3r/3N4/1P6/4K3 w - - 4 55|b8g8 d4d3|1180|winningMaterial,endgame,oneMove,hangingPiece|
eqybro|8/7K/1k4QN/8/4q3/8/8/8 b - - 2 68|b6b5 g6e4|1180|winningMaterial,endgame,oneMove,hangingPiece|
unjtp7|5k2/R7/5n2/8/8/5K2/8/8 b - - 2 59|f6h7 a7h7|1180|winningMaterial,endgame,oneMove,hangingPiece|
dbhn5g|5rB1/3k4/8/1p2b1PK/8/1P5R/8/8 w - - 43 75|g5g6 f8g8|1180|winningMaterial,endgame,oneMove,hangingPiece|
1kcg5m2|8/P6R/1k4K1/8/6Bb/r6P/8/8 b - - 2 53|a3a7 h7h4|1180|winningMaterial,endgame,oneMove,hangingPiece|
10kl6nd|5Q2/8/2pnkr1p/3p3P/3P4/1P4P1/6K1/8 w - - 3 44|f8d6 e6d6|1180|winningMaterial,endgame,oneMove,hangingPiece|
17ewb5s|4q3/Q2R2bk/6pp/8/1P2pp2/7P/5PP1/2r2NK1 b - - 2 36|h6h5 d7g7|1180|winningMaterial,oneMove|
1m17wj8|r1b1k1nr/ppp2p1p/3pp1p1/b7/P2PP2q/8/1PP1NPPP/R1BQKB1R w KQkq - 1 11|d1d2 a5d2|1180|winningMaterial,oneMove|
k31x21|1rb2r1k/2q3np/1p1p1Pp1/p3p1P1/P1PpP3/7N/1PQ3BP/2R2R1K b - - 0 30|c8e6 f6g7|1185|winningMaterial,fork,oneMove|
1is6zi1|7k/3Q3p/1r6/3ppp2/3b1BP1/3b1nKP/8/8 w - - 4 42|d7e7 e5f4|1185|winningMaterial,oneMove|
p9f1vn|5r1k/pbp2r2/1b1p2p1/2p5/5n2/1PP1B1NP/P3R1P1/R3N1K1 w - - 4 30|c3c4 f4e2|1185|winningMaterial,fork,oneMove|
o6f20x|rnbqkbnr/ppp2pp1/4p2p/1B1p4/3PP3/8/PPPN1PPP/R1BQK1NR b KQkq - 1 4|d8d7 b5d7|1185|winningMaterial,fork,oneMove|
1hfwso2|rnb1k2r/pp2ppb1/1q1p1np1/2p3Np/NP5P/P5P1/2PPPPB1/R1BQK2R b KQkq - 1 9|b6c6 g2c6|1185|winningMaterial,oneMove|
b8owpe|r1bqk2r/p4ppp/2p2n2/3Pp3/1bP5/3QB3/PP3PPP/RN2KB1R w KQkq - 1 10|d3d2 b4d2|1185|winningMaterial,oneMove|
17mxi5o|8/8/2R5/1r6/p2P4/3bp3/1P3RP1/1k4K1 w - - 0 56|c6c3 e3f2|1185|winningMaterial,endgame,oneMove|
dvn953|8/2p5/1pP2k2/pP2bp2/P1R2P2/4N3/q3P3/2B1K3 b - - 0 40|a2b1 f4e5|1185|winningMaterial,oneMove|
8yyf8h|8/4k1p1/1p3pbp/pB2n3/5P1P/PP4P1/8/4NK2 b - - 0 36|e7d6 f4e5|1185|winningMaterial,oneMove|
a4v7uf|8/7P/8/7P/8/3K4/1p6/2k5 w - - 0 48|h7h8b b2b1q|1185|winningMaterial,promotion,endgame,oneMove|
1yeb254|8/8/8/7P/3Q4/4K3/2q5/2k5 b - - 8 53|c2d2 d4d2|1185|winningMaterial,endgame,oneMove|
190kzz3|4R3/5p1k/3b4/6Q1/P7/3K1P2/1p5q/8 w - - 6 52|a4a5 b2b1q|1185|winningMaterial,promotion,endgame,oneMove|
tcs5jr|r3k2r/ppp1bp1p/2q2p2/8/2N1Q3/8/PP3PPP/4RK1R b kq - 2 17|e8f8 e4e7|1190|winningMaterial,oneMove|
14fjdne|r3qk2/5pbQ/3pb3/2p2P2/8/3B2P1/7N/4R1K1 b - - 0 41|e6d5 e1e8|1190|winningMaterial,oneMove|
he6fuw|4r1k1/1p2r2p/1q4p1/3R4/p3nN2/P1P2QP1/1P5P/3R2K1 w - - 5 31|f3f2 b6f2|1190|winningMaterial,oneMove|
v1uk2p|rnbqk1nr/pppp1ppp/4p3/8/1bPP4/8/PP2PPPP/RNBQKBNR w KQkq - 1 3|d1d2 b4d2|1190|winningMaterial,fork,oneMove|
25j614|rnbqkbnr/pp2pppp/3p4/1Bp5/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 3|d8d7 b5d7|1190|winningMaterial,fork,oneMove|
1bqh4iw|2k4r/1p3p2/p6p/8/7P/P1P1npP1/2P2N2/2K2R2 w - - 2 34|f1d1 e3d1|1190|winningMaterial,oneMove|
dc4yby|8/p2Rr1qk/1p4p1/7p/8/6P1/PPPQ1P1P/2K5 w - - 1 37|d2d4 e7d7|1190|winningMaterial,oneMove|
1alma7t|1rb2rk1/4npp1/1pN4p/pP2q3/P3p3/1QP3P1/4BP1P/3R1RK1 b - - 1 22|e5c7 c6b8|1190|winningMaterial,oneMove|
1b3d7v0|2kr3r/pp2n1p1/2p2p2/7p/1b1P3P/P1N2PP1/1P1BRK2/3R4 b - - 0 26|d8d4 a3b4|1190|winningMaterial,oneMove|
ydqjqj|rnbq1rk1/ppp1bppp/3P1n2/8/5B2/2PP4/PP2Q1PP/RN2KBNR b KQ - 0 8|d8d7 d6e7|1190|winningMaterial,oneMove|
1mq4wmp|1n1qkb1r/r4ppp/pp2pn2/2ppP2b/P2P4/2P2N1P/1PB2PP1/RNBQ1RK1 b k - 0 11|b8c6 e5f6|1190|winningMaterial,oneMove|
18zfv89|r6r/2B1kpp1/p3p2p/8/2P1B1P1/b2n3P/P4P2/R4RK1 b - - 0 22|d3c5 e4a8|1190|winningMaterial,oneMove|
dr2yf5|rn2kr2/pp5p/2p2Bpb/P7/4P3/2N5/1Pb2PPP/R3KB1R w KQq - 1 16|c3b5 c6b5|1190|winningMaterial,oneMove|
dsnh5x|rnbqk2r/pp2bppp/4pn2/3pP3/8/2N2NP1/PP1P1P1P/R1BQKB1R b KQkq - 0 7|d5d4 e5f6|1195|winningMaterial,oneMove|
qr0nd2|2r3k1/p3bp2/p5p1/4Q3/3pb1pP/2B5/PP4P1/2K5 b - - 1 33|c8c3 b2c3|1195|winningMaterial,oneMove|
1qfmqmy|7r/ppk1r1pp/2p5/8/2B5/P3P3/1b2KPPP/R6R w - - 0 24|g2g3 b2a1|1195|winningMaterial,oneMove|
5j6b08|b7/P1k5/8/8/8/1R2K3/6p1/8 w - - 0 53|b3a3 g2g1q|1195|winningMaterial,promotion,endgame,oneMove|
1yxd7sy|r1r3k1/5p2/bq2p1p1/np1pP1Pp/7N/PQ3N2/5RKP/1R3B2 w - - 3 28|h4g6 a5b3|1195|winningMaterial,oneMove|
8e5xl7|1rbq1rk1/2b1n1p1/pp2pp1p/3pN3/PPpPP3/2P3P1/2QNBPP1/R3R1K1 w - - 0 20|e4d5 f6e5|1195|winningMaterial,oneMove|
10potyn|2n3k1/pp1r1pp1/2nBp2p/1P2P3/6PP/5PKN/8/1R6 b - - 0 29|d7d6 e5d6|1195|winningMaterial,oneMove|
kcnoqa|r3kb1r/ppp2p1p/2n2np1/4p3/2P5/P1Nq1PP1/3P1P1P/R1BQKB1R b KQkq - 4 10|e8c8 f1d3|1195|winningMaterial,oneMove|
ltlehb|6k1/5ppp/8/1p2P3/3rP3/5PPb/4K3/2B2R2 w - - 0 33|c1a3 h3f1|1195|winningMaterial,oneMove|
11hbrg5|4r1k1/6p1/5pPp/Bpp4P/3RP2K/1P2P3/P3b3/8 w - - 0 40|e4e5 c5d4|1195|winningMaterial,oneMove|
14u0cvg|r1bqkb1r/1pp1pp2/2n4p/p2P2pn/8/3P1NB1/PPPN1PPP/R2QKB1R b KQkq - 0 8|f8g7 d5c6|1195|winningMaterial,oneMove|
ncy4aa|3rk2r/p3bppp/2n1p3/qp1p1b2/PPpP1B1P/2P1P3/4BPP1/RNQ1K2R b KQk b3 0 14|a5a4 a1a4|1195|winningMaterial,oneMove|
14jy58p|r2q2k1/2p3p1/5p1p/2b5/QPb5/2Nn1NB1/P4PPP/1R4K1 w - - 1 24|b4c5 a8a4|1195|winningMaterial,oneMove|
gwwyck|8/4k3/8/1p1rp2p/p3R2P/P1PK1P2/1P2P3/8 w - - 2 37|e4d4 e5d4|1200|winningMaterial,oneMove|
1m8bby8|2r2rk1/pp1qbppp/2nppn2/3P2B1/4P2P/5N2/PP3PP1/RN1QR1K1 b - - 0 12|d7d8 d5c6|1200|winningMaterial,oneMove|
i538zb|1r1qkbnr/ppp2p1p/2n1b3/4P3/2Pp2pP/1Q3NP1/PP1NPP2/R1B1KB1R w KQk - 0 9|b3a4 g4f3|1200|winningMaterial,oneMove|
1nf23kk|r3k2r/2p4p/p2bp1p1/1p5n/3B1p2/P7/1PP3PP/2KR1B1R b k - 5 22|h5g3 h2g3|1200|winningMaterial,oneMove|
q8cr76|1rb2rk1/p1q1bppp/2n1p3/1ppn4/2P5/1N1P1NP1/PP3PBP/R1BQR1K1 b - - 0 13|a7a5 c4d5|1200|winningMaterial,oneMove|
11xb8g1|r1b2rk1/np3pp1/5q1p/p2pp2P/P2N1P2/2PB2P1/1P3P2/2RQK2R w K - 0 20|d3c2 e5d4|1200|winningMaterial,oneMove|
11m73u1|r3kbr1/pp1q3p/n1p1p1p1/5p2/2PPB3/P3BQ2/1P3P1P/2KR2R1 w q - 0 21|e4f5 e6f5|1200|winningMaterial,oneMove|
1udivy|rnbqk1nr/2p1bppp/p3p3/3p4/Pp2P3/2N3P1/1PPP1PBP/R1BQK1NR w KQkq - 0 7|c3d5 e6d5|1200|winningMaterial,oneMove|
r6i0b2|rnb1kbnr/pp1ppppp/1q6/2p5/3P4/2N1PN2/P1PB1PPP/1R1QKB1R b Kkq - 3 6|c5d4 b1b6|1200|winningMaterial,oneMove|
1a3vke5|5rk1/r2nbpp1/3qp1p1/1p1N4/3P2PP/1Q2RB2/PP3P2/R5K1 w - - 4 25|b3b5 e6d5|1200|winningMaterial,oneMove|
1kqq6a9|r7/1p2r1pk/q3p2p/1pPp1p2/3B1P2/P3P1nP/1P2Q1P1/1RR3K1 w - - 3 25|c1e1 g3e2|1200|winningMaterial,oneMove|
1r39i3l|r1bq3r/pppkb1Qp/2n1pn2/1B2Ppp1/P7/BP2P3/2P2PPP/RN2K2R b KQ - 0 12|f6g4 a3e7|1200|winningMaterial,oneMove|
bgv5ie|8/pp1rbp2/2k1p3/2p1P1p1/P3R2r/2P1B3/1P2KPP1/1R6 w - - 1 23|e4d4 c5d4|1200|winningMaterial,oneMove|
1suv1jk|rn1qkbnr/pp2pppp/2p5/8/4p1b1/P1N2N2/1PPP1PPP/R1BQKB1R w KQkq - 0 5|f1c4 e4f3|1205|winningMaterial,oneMove|
13u1ic1|q2r3k/5pp1/bp2p2p/3nP3/Q1r1B3/P5P1/1P1B1P1P/R3R1K1 w - - 1 28|a4d1 c4e4|1205|winningMaterial,oneMove|
bahhpy|6k1/8/8/8/P5Pb/8/4p3/5K2 w - - 0 59|f1g1 e2e1q|1205|winningMaterial,promotion,endgame,oneMove|
1rv4cgm|r2r1k2/1p3ppp/1n1np3/1P6/p3R3/P4PN1/1P2B1PP/1K1R4 w - - 9 32|d1c1 d6e4|1205|winningMaterial,oneMove|
1o6uzuz|r1b1kb1r/q2pnpp1/p3p2p/1p1PP3/2B5/5N1P/PP3PP1/RN1Q1RK1 w kq - 0 15|b1d2 b5c4|1205|winningMaterial,oneMove|
tkpf24|r1b2rk1/1p2bpp1/1qn1pn1p/p2p4/P1pP4/NPPBPN2/1B3PPP/R2Q1RK1 w - - 0 12|d3c4 d5c4|1205|winningMaterial,oneMove|
civcht|r4rk1/5ppp/p2b1n2/3P4/2pN4/4B2P/Pq3PP1/1R1Q1RK1 b - - 1 19|f8b8 b1b2|1205|winningMaterial,oneMove|
1dpv1ls|r1bqkb1r/p4ppp/2n1pn2/1pppP3/8/2PP1NP1/PP1N1P1P/R1BQKB1R b KQkq - 0 7|f8e7 e5f6|1205|winningMaterial,oneMove|
szqrmf|5rk1/2r4p/2b3pP/pR1pq3/P1p5/2P1P3/3NQ1P1/R5K1 w - - 2 30|a1b1 c6b5|1205|winningMaterial,oneMove|
qw5ejw|r3rnk1/pp3ppp/4p3/qB2P3/Pb1nNBP1/5Q1P/1P3P2/R4RK1 w - - 4 20|e4f6 g7f6|1205|winningMaterial,oneMove|
f488vt|3rk2r/pp1q1pb1/1np1p1pp/2P3P1/3P4/P2B1NP1/1P2QPK1/1R3R2 b k - 0 23|h6g5 c5b6|1205|winningMaterial,oneMove|
1cf0s1l|r3r1k1/2p1np2/5Ppp/pp6/8/5N2/PP3PPP/R2R2K1 b - - 0 22|b5b4 f6e7|1205|winningMaterial,oneMove|
5yulqi|5R2/8/4k3/r5Kp/7P/8/8/8 w - - 8 66|f8f5 a5f5|1210|winningMaterial,endgame,oneMove|
yglmmi|r5kr/1p3pp1/p1p2n2/2Pp4/1P1P3n/4qB1p/P1QN4/2N1RR1K b - - 3 29|a8e8 e1e3|1210|winningMaterial,oneMove|
ktx91b|r2qkb1r/4ppp1/p1p2n2/3p3p/6b1/2NP1N1P/PPPBQPP1/R3K2R b KQkq - 0 10|h8h7 h3g4|1210|winningMaterial,oneMove|
1ue80ec|4k2r/1pn3rp/p1n5/2P2p2/1PB1p3/P4N1P/5PP1/R3K2R w KQk - 0 20|c4e2 e4f3|1210|winningMaterial,oneMove|
9wbwc6|2b4Q/p2kpp2/6r1/1qp5/5Pp1/3PBn2/2P3PP/N4RK1 w - - 5 28|f1f3 g4f3|1210|winningMaterial,oneMove|
na0d3p|8/8/3bkp2/P2R2p1/2r1P2p/3K2P1/2p4P/2B5 b - - 1 54|c4c5 d5c5|1210|winningMaterial,oneMove|
dbqgkw|6k1/5pp1/rq3n2/p6Q/3NP2P/B1P3Pb/2P2P2/2KR4 w - - 1 38|h5d5 f6d5|1210|winningMaterial,oneMove|
56s30k|r4r1k/6p1/1ppb1n1p/p4RB1/3P4/2PB4/PP4P1/R5K1 w - - 0 24|a1f1 h6g5|1210|winningMaterial,oneMove|
16u8it3|r3kbnr/p2p1ppp/1pp5/1B2P3/3p2P1/P7/1PP2PP1/R1BR2K1 w kq - 0 14|a3a4 c6b5|1210|winningMaterial,oneMove|
10gt1ey|r2q1rk1/1p1n1pp1/4pN1p/4B3/bbP5/5NP1/4QPBP/2R2RK1 b - - 0 22|d8f6 e5f6|1210|winningMaterial,oneMove|
1bamlx6|8/1R3P2/r6k/1b6/1p1P4/4K3/p7/8 b - - 0 58|b5e2 f7f8q|1210|winningMaterial,promotion,endgame,oneMove|
9da1an|rnb1k2r/ppqn1ppp/4p3/2ppP3/2PQ4/4PN2/PP3PPP/RN2KB1R w KQkq - 0 11|b1c3 c5d4|1210|winningMaterial,oneMove|
1x8m5l2|r2rbk2/6p1/1pp2p1p/p1Rn4/3R3P/1P1P2P1/P4PB1/4NK2 w - - 0 28|c5d5 c6d5|1210|winningMaterial,oneMove|
8igkq2|r1bqr1k1/1p3p2/p2p1b2/3N1ppp/2PP1B2/PP3PP1/5K1P/1R1Q3R w - - 0 24|d1d2 g5f4|1215|winningMaterial,oneMove|
5ooaaj|r2qr1k1/1bpn1p1p/pp3n2/P2p1Pp1/7B/2PB3P/1PQN2P1/R4RK1 w - - 0 19|d2f3 g5h4|1215|winningMaterial,oneMove|
6r33cw|1rq2rk1/4bppp/R4n2/1Pp1p3/2P1P1bn/1BNP1N2/5PP1/2BQ1RK1 w - - 1 19|c3d5 f6d5|1215|winningMaterial,oneMove|
1esmjoc|r1bqr1k1/ppnn1pbp/2p3p1/P7/3p4/2N1PN1P/1PQ1BPP1/R1BR2K1 w - - 0 14|a1a4 d4c3|1215|winningMaterial,oneMove|
vc691u|r1bqkb1r/1p3ppp/n1p1pn2/p2pP3/8/3P1NP1/PPPNQP1P/R1B1KB1R b KQkq - 0 7|f8e7 e5f6|1215|winningMaterial,oneMove|
12l879g|R4nk1/1p3r2/p6p/8/3P4/PNP3bP/1P3P2/1q4QK b - - 7 36|b1g6 g1g3|1215|winningMaterial,oneMove|
5jlp0o|r3k1nr/pp3ppp/1qn1p3/3pPb2/P5PP/B1P5/5P2/R2QKBNR b KQkq - 0 10|g8h6 g4f5|1215|winningMaterial,oneMove|
1hv2ra0|r1r3k1/q4p1p/4p1p1/3bP3/1pB2Q2/1P3P1P/6P1/1R1R2K1 w - - 5 38|d1d4 d5c4|1215|winningMaterial,oneMove|
1tspfrx|rn1qk2r/ppp2ppp/3b1n2/1B2p3/P2pP1bP/6N1/1PPP1PP1/R1BQK1NR b KQkq - 4 7|d8d7 b5d7|1215|winningMaterial,oneMove|
cdj8jr|r6r/3kbppb/4p3/pp1p3p/3PnB1P/1PP1NP2/1P2N1P1/R3K2R b - - 0 20|e4c5 d4c5|1215|winningMaterial,oneMove|
1lmmni8|2r2r2/p4pk1/3pp1p1/1p3P1p/4Pqn1/P1NP1QRP/1PP5/R5K1 b - - 2 22|f4e5 h3g4|1215|winningMaterial,oneMove|
131y14i|rn2k2r/ppqbbppp/4pn2/2pP4/4PN2/P1p3P1/1P1N1PBP/R1BQK2R w KQkq - 0 12|d5e6 c3d2|1215|winningMaterial,fork,oneMove|
1knxjfr|r4rk1/pp3ppp/2pb2q1/3n1p2/3P1PN1/PB3PP1/1PQ4P/2KRR3 w - - 3 21|c2e2 f5g4|1215|winningMaterial,oneMove|
4ww1yy|r6k/1pp2rp1/p2p1q1p/3Pb2P/1P2PP2/3B2Pb/P2B4/2RQ1RK1 b - - 0 26|a6a5 f4e5|1220|winningMaterial,oneMove|
1q5xm0s|rnq1r1k1/pb2bppp/2p2n2/1p1pN3/Q2P4/2N1P1B1/PP2BPPP/R3K2R w KQ - 0 13|e2b5 c6b5|1220|winningMaterial,oneMove|
ql908i|6k1/7p/4p1p1/b3npN1/1q1P1R2/7P/1PQ3P1/3K4 w - - 1 36|g5f3 e5f3|1220|winningMaterial,oneMove|
ojzsue|rn1qkbnr/pp3ppp/4p3/1BppPb2/3P4/2P5/PP3PPP/RNBQK1NR b KQkq - 1 5|d8d7 b5d7|1220|winningMaterial,oneMove|
1b0romg|5rk1/1P1RQp2/6p1/4p2p/q1K1B3/5P1P/2P5/1r6 w - - 10 39|e7b4 a4b4|1220|winningMaterial,oneMove|
dqg618|r4rk1/1p2qpp1/4p2p/4n3/bbP5/3N2P1/4QPBP/1R3RK1 w - - 0 26|b1b4 e5d3|1220|winningMaterial,oneMove|
1i1p372|2qr2k1/p1p1bp2/4bppp/7r/2PB3Q/4RN1P/P2P1PP1/R5K1 w - - 4 21|d4f6 h5h4|1220|winningMaterial,oneMove|
19lhfs|2rkrn2/p3b3/1pp1Qn2/q6p/3P1B1p/1BP5/PP3PP1/3RR1K1 w - - 14 29|e6e7 e8e7|1220|winningMaterial,oneMove|
1ojln9k|r1bq1rk1/ppB1bppp/2n1p3/1NP5/2Pp4/8/PP1QPPPP/2R1KB1R b K - 3 11|e7c5 c7d8|1220|winningMaterial,oneMove|
1tr8h14|r2q1r1k/pp4b1/4B2p/4n2Q/3p4/P7/1P3PPP/R1B2RK1 b - - 0 20|e5f3 g2f3|1220|winningMaterial,oneMove|
1w4hzty|r4r1k/1p2qP2/pnp3Qp/3n4/3PNb1p/P5P1/1P1N3P/R3KB1R b KQ - 0 21|f8f7 g3f4|1220|winningMaterial,oneMove|
e6zoio|r5k1/4qppp/p3bn2/1p2p3/8/2NrPN2/PPQ2PPP/R2R2K1 b - - 3 19|a8d8 d1d3|1220|winningMaterial,oneMove|
1xrokoy|rn1qkb1r/pp3ppp/4p2n/1BppPb2/3P4/P1P5/1P3PPP/RNBQK1NR b KQkq - 2 6|d8d7 b5d7|1220|winningMaterial,oneMove|
111rxn4|r4b1r/1p1k1p2/2b1pnp1/3p2Pp/1p1P3P/P2BPP2/1B3K2/RN5R b - - 0 17|f6g4 f3g4|1220|winningMaterial,oneMove|
5w2akb|r3kbnr/pp1n1ppp/2p1p3/q4b2/P2P2P1/2N5/1PP1BP1P/R1BQK1NR b KQkq - 0 8|f8b4 g4f5|1225|winningMaterial,oneMove|
1y2zkw|r3Rbk1/3q2p1/p4p1p/Pppb4/3p1B2/1P1P2NP/2PQ1PP1/4R1K1 b - - 0 23|d7e8 e1e8|1225|winningMaterial,oneMove|
6x4th3|7k/1pp2rpp/2qn4/5P2/p2PPQR1/P5N1/1r6/2R3K1 b - - 2 35|c6c4 c1c4|1225|winningMaterial,oneMove|
1e2zuw8|rnb1k2r/1ppq1ppp/p3p3/4P1B1/2BP4/2n2N2/P4PPP/R2Q1RK1 w kq - 0 11|d4d5 c3d1|1225|winningMaterial,oneMove|
106ifdw|2Q4r/p1Bnkppp/8/3p4/1n6/1q2P3/1P3PPP/2R1K2R w - - 12 28|c7d8 h8d8|1225|winningMaterial,oneMove|
h19q25|2kr3r/ppp2p2/1bn1qnp1/2P1p2p/8/P1NPBPP1/4BP1P/2RQ1RK1 b - - 0 20|h5h4 c5b6|1225|winningMaterial,oneMove|
dbrg5k|r3kb1r/1pq1pppp/p1p2n2/6B1/3P2b1/2PB1QN1/PP3PPP/R3K2R w KQkq - 8 13|g5f6 g4f3|1225|winningMaterial,oneMove|
1izlt57|r1b1k2r/ppp2pp1/1q1b3p/4P3/4P3/P3PN2/1P1Q2PP/R3KB1R b KQkq - 0 14|c8g4 e5d6|1225|winningMaterial,oneMove|
a6eyib|2r2rk1/pp1q1pp1/2n1p3/1B1p4/NQ1P3p/P3P2P/1P2bPP1/2R2RK1 w - - 1 19|b4b3 e2f1|1225|winningMaterial,oneMove|
1p2zhvn|8/4R3/5rk1/p1P3P1/7r/P1Pn3p/5B1P/5K2 w - - 2 42|e7e3 f6f2|1225|winningMaterial,oneMove|
1yp0qta|r3k2r/pbp3pp/2n1p3/3q4/2ppQ3/P4NP1/1PP1BP1P/2KR2R1 w kq - 2 19|d1d4 c6d4|1225|winningMaterial,oneMove|
1ibgg9x|8/5R2/2p4P/ppB3r1/1P2b3/P4k2/8/7K b - - 3 56|g5f5 f7f5|1225|winningMaterial,endgame,oneMove|
m4fi1i|4r3/5R2/2p2p2/P2p1n2/3P1Bkp/2PP4/5P2/3K4 w - - 3 54|f4e5 f6e5|1225|winningMaterial,oneMove|
18m9i7m|r1b1kb1r/2p3pp/p2q1p2/1p1P4/8/1BQ3n1/PPP2PPP/RN3RK1 w kq - 0 14|c3c6 d6c6|1230|winningMaterial,oneMove|
yq7rag|8/1Rrrkp2/p3p1pp/2b5/2P3P1/2B4P/P4P2/1R4K1 w - - 4 31|b7b6 c5b6|1230|winningMaterial,oneMove|
m8uahb|r2qr1k1/5ppp/p3b3/1p1p2P1/1QnP1B2/1PN3P1/P4P2/R3R1K1 b - - 0 21|a8c8 b3c4|1230|winningMaterial,oneMove|
wt68cl|rnbqkbnr/1p2ppp1/p1p4p/8/3pP3/1PNB1N2/P1PP1PPP/R1BQK2R w KQkq - 0 6|h2h3 d4c3|1230|winningMaterial,oneMove|
y666ci|2r5/3b1pk1/1pnpp1pn/3N3p/2P1P2P/8/P2PNPP1/4KB1R w K - 0 21|f2f3 e6d5|1230|winningMaterial,oneMove|
9jzgpj|8/p1pk3p/3pq2B/1p1n1p2/6Q1/5K2/P4PPP/1N5R w - - 0 34|g4f4 d5f4|1230|winningMaterial,oneMove|
1sqk9dz|r7/3kb1pp/rp6/4p3/2n5/P1P5/2KN1PPP/R1B4R b - - 2 25|a6a3 c1a3|1230|winningMaterial,oneMove|
19a56wb|1r3rk1/pb1q1ppp/p7/8/1R3N2/8/5PPP/1Q1R2K1 b - - 10 31|d7e8 b4b7|1230|winningMaterial,oneMove|
wlkg03|8/2R2k1p/5Pp1/8/4r3/pp5P/1Bn2P2/6K1 b - - 1 40|e4e7 c7e7|1230|winningMaterial,endgame,oneMove|
1xk9mb1|r1b1kbnr/pp3p1p/4p1p1/8/1qBn4/2P4P/PP1N1PP1/R1BQK2R b KQkq - 0 11|g8h6 c3b4|1230|winningMaterial,oneMove|
9bv21c|r2qk2r/ppp2pbp/3p2p1/4p3/Pn1P4/1P2PN1P/1Bb1BPP1/R2Q1RK1 w kq - 0 12|d4e5 c2d1|1230|winningMaterial,oneMove|
fsd90k|r3kb1r/1p1qpppp/p1n2n2/1B1p4/3P4/P1N2Q2/1PP2PPP/R1B2RK1 w kq - 0 11|c1f4 a6b5|1230|winningMaterial,oneMove|
1d5tuez|8/pk1r1R1Q/1p4p1/5n2/P6B/3P3P/2P3PK/2q5 b - - 10 38|d7c7 f7c7|1230|winningMaterial,oneMove|
1803o03|r1b1k1r1/pp1npp2/1qp3pp/4B3/7P/Q1P5/PP2PPP1/3RKB1R w Kq - 3 13|e5d6 e7d6|1235|winningMaterial,oneMove|
18rnx93|4rrk1/1bp1p1bp/1p4p1/p1p5/1qRPp2B/4P2P/1P2BPP1/3Q1RK1 b - - 1 20|b7d5 c4b4|1235|winningMaterial,oneMove|
dg557v|r5k1/5p2/2p1p1p1/p1Ppb2p/1r1P1P1P/q3P2K/P3QP2/1R4R1 w - - 0 27|b1b3 b4b3|1235|winningMaterial,oneMove|
y5wrb9|4r3/pp4p1/2k2p2/8/3R2PP/P4n2/1P6/4BK2 w - - 1 37|d4d3 f3e1|1235|winningMaterial,oneMove|
jnsgt9|8/1r5P/7K/4k3/6P1/8/8/8 b - - 3 67|b7b3 h7h8q|1235|winningMaterial,promotion,endgame,oneMove|
v4td2q|r1bqkb1r/p1pp1ppp/2p5/4Q1n1/8/5N2/PPPP1PPP/RNB2RK1 b kq - 0 7|f8e7 f3g5|1235|winningMaterial,oneMove|
1cxbogg|8/6p1/3k1p2/p3p2p/1Rp1P3/2K3PP/1PP2P2/1r6 w - - 0 40|c3c4 a5b4|1235|winningMaterial,oneMove|
72qc19|r1bqk2r/pppp1ppp/2n5/3Q4/1bB1P3/2P5/PP3PPP/RNB1K2R b KQkq - 0 8|e8g8 c3b4|1235|winningMaterial,oneMove|
nl10sd|5k2/3R2np/1r1p2p1/pPp5/5BP1/1P5P/8/6K1 b - - 6 36|g7f5 g4f5|1235|winningMaterial,oneMove|
ys5n8j|r1bqkbnr/2p2ppp/p2p4/2p5/3NP3/7P/PPP2PP1/RNBQK2R w KQkq - 0 8|b1c3 c5d4|1235|winningMaterial,oneMove|
f0nqy3|5k1R/1p3b2/p1n2Np1/3r2B1/P7/1PP4P/5PPK/3r4 b - - 2 41|f8e7 f6d5|1235|winningMaterial,oneMove|
9qyj44|8/1r1b3k/3n2pP/1Bnp1p2/P2Np3/1R2P2P/6P1/5NK1 w - - 1 36|b5d7 c5b3|1235|winningMaterial,oneMove|
fggbg9|r1bqk2r/pp1n1ppp/4pn2/2b3B1/3QP3/2N5/PPP2PPP/2KR1BNR w kq - 0 9|d4d7 c8d7|1235|winningMaterial,oneMove|
z8i3wq|r4rk1/2p2pp1/1b1qb2p/p1P5/P4R1P/5N2/1P1B1PP1/2RQ2K1 b - - 0 18|d6c5 c1c5|1240|winningMaterial,oneMove|
pf1cwl|r3k2r/3q3p/4pBp1/1p1p4/1b1P2R1/P6Q/1PP2P1P/R3K3 w Qk - 1 22|h3c3 b4c3|1240|winningMaterial,oneMove|
zv1pkh|rnbqk2r/1pp1ppbp/p2p1np1/4P3/3P4/1P3N1P/PBPN1PP1/R2QKB1R b KQkq - 0 8|e8g8 e5f6|1240|winningMaterial,oneMove|
ubyyet|r3k2r/p1qbp2p/1p1p1pp1/8/4P1n1/1R3N1P/P1P1QPP1/2BR2K1 b kq - 0 16|e8g8 h3g4|1240|winningMaterial,oneMove|
t8xk4n|r1b1kbnr/pp2pp1p/1qp3p1/8/3nP3/P5P1/1PP1NP1P/1RBQKBNR b Kkq - 0 8|d4f5 e4f5|1240|winningMaterial,oneMove|
1edq3f0|r1r4k/p4pp1/1qp2n1p/N2p4/PP2n3/2PN1PP1/2Q3KP/3RR3 b - - 0 29|a8b8 f3e4|1240|winningMaterial,oneMove|
1dqu4yy|r1b1k2r/p2nppbp/2p2np1/qp6/2BP4/2N2N2/PPP2PPP/R1BQ1RK1 w kq - 0 10|f3e5 b5c4|1240|winningMaterial,oneMove|
1lpa3vj|r1b1k2r/2p2pp1/p1Np4/2q3p1/4Pn2/7P/2P2PP1/1R1QRBK1 w kq - 0 19|d1d5 f4d5|1240|winningMaterial,oneMove|
73xr50|r1bqkb1r/pp1ppppp/2p2n2/3Pn3/5P2/2P3P1/PP2P2P/RNBQKBNR b KQkq - 0 5|d8c7 f4e5|1240|winningMaterial,oneMove|
zlqbc4|r1b1kb1r/1pp2ppp/p1nq1n2/3pP3/8/P1P2N1P/1PQNPPP1/R1B1KB1R b KQkq - 0 8|d6e7 e5f6|1240|winningMaterial,oneMove|
1h88ntu|7r/2bbkppp/8/N3p3/3N4/1P2P3/1P3PPP/R5K1 w - - 0 24|a5c4 e5d4|1240|winningMaterial,oneMove|
kmvd76|rnbqkb1r/pppp1ppp/5n2/8/3p4/2N1P3/PPP2PPP/R1BQKBNR w KQkq - 0 4|e3e4 d4c3|1240|winningMaterial,oneMove|
64c686|2rqrnk1/1b4p1/p1P1pp1p/1p1n4/3N4/BP5P/2Q2PP1/RB2R1K1 b - - 2 30|b7a8 a3f8|1240|winningMaterial,oneMove|
hvglvs|K3r3/2k5/P1p5/8/8/8/1R6/8 w - - 3 62|b2b8 e8b8|1245|winningMaterial,endgame,oneMove|
q0dj0c|3r2r1/2k2N2/4pR2/p2bP1p1/Pp4Pp/1P2R3/5P1P/2K5 b - - 5 32|c7d7 f7d8|1245|winningMaterial,oneMove|
1ypiwq3|1k3r2/pq2b3/b2P3p/n2p2p1/3P4/PpN1B2P/1P2NPP1/3QK2R b K - 0 28|a5c4 d6e7|1245|winningMaterial,oneMove|
18toqwt|r5k1/ppp2ppp/8/3P1nB1/B3r3/P7/1P2bPPP/R4RK1 w - - 0 20|a4d1 e2f1|1245|winningMaterial,oneMove|
adpvsa|8/5kp1/4p3/1p1r3p/1Npn3P/5P2/PP3KP1/3R4 b - - 4 34|g7g6 b4d5|1245|winningMaterial,oneMove|
plof1y|rnbqkbnr/pppp1ppp/8/8/3p4/2N5/PPP1PPPP/R1BQKBNR w KQkq - 0 3|e2e4 d4c3|1245|winningMaterial,oneMove|
1v7r1v|7k/R3b3/4P3/1r5p/2N2P2/5BPK/p2r3P/8 b - - 1 57|d2b2 c4b2|1245|winningMaterial,oneMove|
1nhtsoo|8/2k2p2/2p2P2/1r4rp/1P6/2b2K1B/2R1P3/7R b - - 0 43|g5f5 h3f5|1245|winningMaterial,oneMove|
nddfn|rnbqkbnr/pp2pp1p/2p3p1/8/3pP3/2N2N1P/PPPP1PP1/R1BQKB1R w KQkq - 0 5|a2a4 d4c3|1245|winningMaterial,oneMove|
44mw2f|6R1/4rk2/2p2p2/p2p1n1p/P2P1B2/2PP4/5P2/3K4 w - - 2 49|g8g3 f5g3|1245|winningMaterial,oneMove|
1ucne14|r2qkb1r/3b3p/n1pp1np1/p3p3/2PB4/2N2N2/PP1QPPB1/R3K1R1 w Qkq - 0 15|d4e5 d6e5|1245|winningMaterial,oneMove|
1fgavy|3r4/pk1q1pp1/2pb4/6p1/4Q2r/1P1P3P/PBP2P2/1K1R3R w - - 2 25|d1d2 h4e4|1245|winningMaterial,oneMove|
1a9fn4t|6k1/5p1p/p5p1/7R/p2P3n/4PP2/2r1BP1P/1rB3RK w - - 3 27|d4d5 c2c1|1245|winningMaterial,oneMove|
61nqfv|Q5k1/3q1r2/p2b1ppB/1P2p2p/1P1pP2P/3P2P1/5P2/3rNRK1 b - - 6 34|f7f8 h6f8|1245|winningMaterial,oneMove|
1nr1w8|5r1r/1p1kbQ2/p3p2q/3pP1Np/1P1P3P/P5PK/8/4RR2 w - - 5 33|e1b1 f8f7|1250|winningMaterial,oneMove|
1140bpw|r1q2rk1/1pp1ppbp/2npb1p1/pB1P4/2P4N/4PPB1/PP2Q1PP/3R1RK1 b - - 0 18|a8b8 d5e6|1250|winningMaterial,oneMove|
1q0pwo|r1bqkbnr/pp1p1ppp/2n5/4p3/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5|c2c3 e5d4|1250|winningMaterial,oneMove|
1jbyr19|6k1/1p2N3/2bB4/6b1/6Pp/2R5/5K2/7r b - - 3 46|g8f8 e7c6|1250|winningMaterial,endgame,oneMove|
sh714s|2r2rk1/1p3pbp/2n1b1p1/p7/P7/2n1BN1P/1P2BPP1/2R1K2R w K - 0 20|c1c3 g7c3|1250|winningMaterial,oneMove|
zpl0mk|r2qk1nr/pppn1ppp/4b3/1B2p3/1b1pP3/3P1NN1/PPP2PPP/R1BQK2R w KQkq - 1 8|d1d2 b4d2|1250|winningMaterial,oneMove|
f9y07x|3r1r2/1p3pkp/5np1/q7/2P1p3/P3P3/1Q2B1PP/1R3RK1 b - - 1 24|d8d2 b2f6|1250|winningMaterial,oneMove|
16dxky2|r2qkb1r/3b1ppp/4pn2/1pn5/p1BpP3/P4N1N/1P2QPPP/R1BR2K1 w kq - 0 13|d1d4 b5c4|1250|winningMaterial,oneMove|
obn9cf|r1bqk2r/1p3pp1/p1n1pn1p/2bp4/1P6/P1N1PN1P/2P1BPP1/R1BQK2R b KQkq - 0 9|c6b4 a3b4|1250|winningMaterial,oneMove|
rfqwk|6k1/5p2/4p1p1/7p/1RP4P/5PP1/5Q1K/q5r1 b - - 4 50|a1b1 b4b1|1250|winningMaterial,oneMove|
18dycuk|r7/5pk1/1ppR2p1/p2b4/P1P3P1/6K1/1P1N4/8 b - - 0 39|b6b5 c4d5|1250|winningMaterial,oneMove|
orba2n|8/2b1kp2/p3r1p1/p1Np2P1/5P2/R1PKP3/8/8 b - - 20 48|e7d6 c5e6|1250|winningMaterial,oneMove|
396ed7|r1bq1rk1/ppp1b3/2n5/3np2p/P1B2pp1/1QPP3P/1P1N1PPB/R3K1NR b KQ - 1 17|g8h8 c4d5|1250|winningMaterial,oneMove|
1eksca9|2kr3r/ppqn1pbp/2p2np1/3bp3/P1PP3N/3B2NP/1P2QPP1/R1B2RK1 b - - 0 14|e5d4 c4d5|1255|winningMaterial,oneMove|
1ksl50k|r1bqkb2/1p1npp1r/p1pp3p/6pP/3P1B2/2P1PN2/P1PQ1PP1/R3KB1R w KQq - 0 12|f4g5 h6g5|1255|winningMaterial,oneMove|
18lpgy7|r3r3/1p3p2/2pq2k1/p5p1/P3n3/1P1Q3P/2P2PP1/R3R1K1 w - - 0 28|d3e4 e8e4|1255|winningMaterial,oneMove|
fj9c8j|r2r2k1/ppq2p2/2np1bpp/3Pp3/1P6/P1PQ1N1P/5PP1/RN2R1K1 b - - 0 18|a8c8 d5c6|1255|winningMaterial,oneMove|
ga14dq|r4rk1/p1p1npp1/2n1q3/3p3p/3Qb3/N1P1NP2/PP4PP/2KR1B1R w - - 1 17|f3e4 c6d4|1255|winningMaterial,oneMove|
1nu7r8g|r1bq1rk1/6pp/2P5/pp2Pp2/4pP1P/P1Nn4/1P6/R2QKB1R w KQ - 1 21|d1d3 e4d3|1255|winningMaterial,oneMove|
1u8atof|1r3rk1/1b3p2/p2Np1p1/7p/1P5P/2n3P1/5PB1/3RR1K1 w - - 0 32|g2b7 c3d1|1255|winningMaterial,oneMove|
1u8pbfd|3rk3/pp2bpp1/2n1pn2/7r/3P3p/P1N1B2P/1P2BPP1/2R2RK1 b - - 1 17|h5d5 c3d5|1255|winningMaterial,oneMove|
1g9414k|r3k2r/1p4pp/5n2/3ppR2/p7/P1P1q3/1P4PP/R2Q1N1K b kq - 3 18|e3f4 f5f4|1255|winningMaterial,oneMove|
1lgq972|r3kb1r/pp1q1pp1/2nppn1p/3P4/4P3/5N2/PP3PPP/RNBQR1K1 b kq - 0 10|f8e7 d5c6|1255|winningMaterial,oneMove|
w7pca|r1bq1rk1/5pp1/2n4p/p1bpP3/1p1P4/5NP1/1P2QPBP/R1B1R1K1 b - - 0 17|d8b6 d4c5|1255|winningMaterial,oneMove|
ssxbst|4r3/1p3pk1/4bq2/P2rN1Pp/3Pp3/P5P1/1QR2P1K/R7 b - - 0 32|f6e5 d4e5|1255|winningMaterial,oneMove|
7a6i32|r4rk1/1pp2pp1/p1b2b1p/5q1N/8/6Q1/PPP2PPP/2BRR1K1 w - - 3 23|h5g7 f6g7|1255|winningMaterial,oneMove|
1f2dgu8|r4qk1/1p4pp/p1p3n1/P2n1b2/3P4/3NR3/1PPQ1PPP/4R1K1 w - - 5 24|h2h3 d5e3|1255|winningMaterial,oneMove|
164orue|r1bq1rk1/pp3pp1/2nbpn1p/2Pp4/8/2P1PNB1/PPQN1PPP/R3KB1R b KQ - 0 9|e6e5 c5d6|1260|winningMaterial,oneMove|
1jv1gtz|r5k1/n4ppp/p3p3/b1Rp4/P2P1B1P/3KP3/5PP1/1r1B3R b - - 14 29|a7b5 a4b5|1260|winningMaterial,oneMove|
19kr8ho|r1bqkb1r/pp3pp1/n1p1p2p/1N1pB2n/3P3P/8/PPP1PPP1/R1Q1KBNR w KQkq - 0 8|a2a4 c6b5|1260|winningMaterial,oneMove|
17rxbko|8/1pk5/2p3p1/P3Nb1p/n4PpP/6K1/1R3P2/8 w - - 5 62|e5c4 a4b2|1260|winningMaterial,oneMove|
120qptl|2q3k1/5pp1/4p2p/Q1R3r1/3PP3/2P3P1/Pr5P/4R1K1 b - - 0 26|c8c5 d4c5|1260|winningMaterial,oneMove|
mp3fe2|rnbq1rk1/pp3ppp/3ppn2/2b5/1P1NP3/2PQ4/P3BPPP/RNB1K2R b KQ - 0 8|b8d7 b4c5|1260|winningMaterial,oneMove|
1tge7xq|r1b1kb1r/1pqppp1p/n1p2np1/4P3/1pP5/P4N2/1BQP1PPP/RN2KB1R b KQkq - 0 8|f8h6 e5f6|1260|winningMaterial,oneMove|
1dply9|3qk2r/2pb1pbp/rpQ1pnp1/8/2Pp4/P2P1NP1/1P2PPBP/R1B1K2R w KQk - 5 16|f3d4 d7c6|1260|winningMaterial,oneMove|
sattea|r2r2k1/pp2pp2/2np1bpp/q7/1P1P4/2PQ1N1P/P4PP1/RN2R1K1 b - - 0 16|c6b4 c3b4|1260|winningMaterial,oneMove|
ap6jv4|2rrbk2/p5p1/5p1p/1P1Bp3/1n2P1P1/5N1P/P2R1P2/1R4K1 b - - 1 25|d8d5 e4d5|1260|winningMaterial,oneMove|
y3nzpv|1r1q1rk1/pb1n1ppp/2pb1n2/3pp1P1/NP6/3P1N1P/P2BPPB1/1R1QR1K1 b - - 0 15|g8h8 g5f6|1260|winningMaterial,oneMove|
10bg33r|rn2kbnr/pp2pppp/2p5/3q1b2/3PN3/8/PPP1QPPP/R1B1KBNR w KQkq - 3 6|g2g4 f5e4|1260|winningMaterial,oneMove|
1kvz9ud|r1bq1rk1/pp1nppbp/3p1np1/8/2Pp4/2N2NP1/PPQ1PPBP/R1B2RK1 w - - 0 9|c1g5 d4c3|1260|winningMaterial,oneMove|
1rd1mhw|r3kb1r/pppB1p1p/5p2/3p1q2/Q2n4/2P5/PP1N1PPP/R4K1R b kq - 0 12|e8d8 d7f5|1265|winningMaterial,oneMove|
1s0yxti|r4rk1/pB1b1pp1/4pn1p/q7/P2P4/5N2/1P1Q1PPP/2R2RK1 b - - 0 16|a5b6 b7a8|1265|winningMaterial,oneMove|
2cs0md|r1b1kb1r/2qnppp1/2p4p/pp1p4/P2Pn3/1P1NPP2/1BP1Q1PP/RN2KB1R b KQkq - 0 11|b5a4 f3e4|1265|winningMaterial,oneMove|
1jpld9k|1r1q1rk1/n2bbpp1/7p/pB6/P1p5/1Q3NP1/1P1N1PP1/2RR2K1 w - - 0 21|b5c4 b8b3|1265|winningMaterial,oneMove|
oznsue|4r3/6bk/p5rp/1p2B3/1P3p2/2R2P2/6N1/2R3K1 b - - 0 46|h6h5 e5g7|1265|winningMaterial,oneMove|
iz7i8s|r1b4k/1p3pp1/1q3n1p/p2pr3/8/2P2NP1/PPB2PP1/RQ3RK1 b - - 1 18|e5g5 f3g5|1265|winningMaterial,oneMove|
1i6kfbq|1r1qr1k1/pp1bbpp1/2n1pn1p/2ppP3/2P5/1P1P1NP1/P2NQPBP/R1BR2K1 b - - 0 12|a7a6 e5f6|1265|winningMaterial,oneMove|
46vvp7|5r2/6R1/p2pR2r/1p4pk/3PP2p/P6P/1nP1N3/6K1 w - - 3 37|e6e5 d6e5|1265|winningMaterial,oneMove|
rg5npe|rnbqk2r/pp4pp/2pbp3/2Pp1p2/P2Pn3/2NQ1NPB/1P2PP1P/1RB1K2R b Kkq - 0 10|e4c5 d4c5|1265|winningMaterial,oneMove|
1xphkb9|r2r1k2/ppq2p1p/4bNp1/8/P2Q4/2P1R3/5PPP/3R2K1 w - - 9 24|f6d5 d8d5|1265|winningMaterial,oneMove|
kd44hc|r1bqk2r/p4ppp/1bp2n2/4P3/3p4/1N6/PP3PPP/RNBQR1K1 b kq - 0 16|c8e6 e5f6|1265|winningMaterial,oneMove|
4gy8h0|b1R5/4rk1p/1p4p1/p2r4/5B2/P6P/6P1/2R3K1 b - - 1 34|d5c5 c1c5|1265|winningMaterial,oneMove|
ne8a7g|8/7k/6pp/4ppn1/P1B3QP/1P4P1/1b3PK1/2r5 w - - 0 33|g4h3 g5h3|1265|winningMaterial,oneMove|
1a7t8oj|3rk1nr/1pqnbpp1/2p3b1/p3p2p/2PPB3/6N1/PP1BNPPP/R1Q1R1K1 b k - 1 14|e8f8 e4g6|1265|winningMaterial,oneMove|
15k0548|r2qkbnr/1p2ppp1/p1n5/1B1p3p/6b1/2NP1N2/PPPB1PPP/R2QK2R w KQkq - 0 8|a2a4 a6b5|1270|winningMaterial,oneMove|
gd8e0r|r6r/p1p2kpp/2p5/2P1p3/4PNb1/8/P4PPP/R2R2K1 w - - 0 21|f4d3 g4d1|1270|winningMaterial,oneMove|
9ybbmh|8/1pp4R/pr3p2/k4r1p/PP5P/2P1RP2/8/5K2 b - - 0 38|b6b4 c3b4|1270|winningMaterial,oneMove|
j6aze1|1rr3k1/pb3ppp/1p2p3/4P3/2P5/PPn2P2/6PP/2KR1BNR w - - 1 17|f1d3 c3d1|1270|winningMaterial,oneMove|
wjwwos|r2qr3/pp3pkp/2p2np1/P3P3/8/2PbP3/1P1N2PP/R1BQR1K1 b - - 0 19|d8d5 e5f6|1270|winningMaterial,oneMove|
1ocd6x9|rn2kbnr/pp3ppp/2p1p1b1/q7/1P1P1B2/2P3N1/P4PPP/R2QKBNR b KQkq - 0 8|f8b4 c3b4|1270|winningMaterial,oneMove|
12ht581|2n2r1k/6p1/1r2R2p/1b2Pp2/pPp5/4NBP1/5PP1/R5K1 w - - 1 37|e6d6 c8d6|1270|winningMaterial,oneMove|
1ecv1ea|6k1/4b1p1/7p/p2pP3/3Pqp1P/5rP1/Q4P2/4RRK1 b - - 7 31|f3g3 f2g3|1270|winningMaterial,oneMove|
ldasrg|4r3/8/2pk2Rp/p4K2/P6P/8/8/8 b - - 1 46|e8e6 g6e6|1270|winningMaterial,endgame,oneMove|
423i89|k6r/5p2/P1p5/3bP3/3B4/1r4P1/3bB2P/2RN2K1 w - - 3 37|c1c4 d5c4|1270|winningMaterial,oneMove|
xu570k|r1b2knr/5pb1/p1n1p1pp/1pP5/3qP3/1QpN1N1P/P2PBPP1/1RB1K2R b K - 1 17|c3c2 f3d4|1270|winningMaterial,oneMove|
clzui5|r3k2r/pp2b2p/2q1p1p1/6BQ/3PR3/8/PPn2PPP/4R1K1 w kq - 0 21|h5e2 c2e1|1270|winningMaterial,oneMove|
1y4x8hp|r1b1k2r/2pnbp2/p1p5/Bp4p1/2N1P2p/P7/1PP2PPP/2KR1BR1 w - - 0 15|a5c7 b5c4|1270|winningMaterial,oneMove|
1dnkkas|rnbqkb1r/1pp1pp1p/3p1np1/pB6/P7/2P1P2P/1P1P1PP1/RNBQK1NR b KQkq - 1 5|d8d7 b5d7|1275|winningMaterial,fork,oneMove|
19nu9bb|r1b2r2/1pk1p3/p5pN/n1pB4/8/4P3/P1P3PP/2KR1R2 b - - 0 26|f8f5 h6f5|1275|winningMaterial,oneMove|
fevncq|2kr1r2/1pp1n1p1/8/p6p/4P1b1/P6P/1P1N2P1/R3KB1R b KQ - 0 20|e7f5 h3g4|1275|winningMaterial,oneMove|
4rcl1d|r1bqkbnr/1pp2ppp/p1np4/1B6/3pP3/5N1P/PPP2PP1/RNBQK2R w KQkq - 0 6|c2c4 a6b5|1275|winningMaterial,oneMove|
ied7os|2b1r1k1/5p2/1p4pp/3rp3/p2q4/3NN1PP/P1Q2P2/2R2BK1 b - - 5 28|c8e6 e3d5|1275|winningMaterial,oneMove|
u4mzp2|4rrk1/pp1q1p1p/6pQ/2pP1P2/P1P1p3/8/1P5P/R4RK1 b - - 2 25|d7f5 f1f5|1275|winningMaterial,oneMove|
oxd7u|r1b3k1/b4rp1/p1pN1n1p/1q6/3pp3/BP4P1/2PQ1PBP/R4RK1 b - - 1 22|c8g4 d6b5|1275|winningMaterial,oneMove|
190u5ak|r4k1r/4np2/p1n2bpp/1pP1pb2/4q3/2PN2PP/PB1NBP2/1R1Q1RK1 b - - 4 24|e4d3 e2d3|1275|winningMaterial,oneMove|
1dymak6|r1b1k2r/1pq1bpp1/p3pn2/2p4p/2PnPP2/5NPP/PP2Q1B1/RNB2RK1 w kq - 1 13|f1e1 d4e2|1275|winningMaterial,oneMove|
195lucq|4k1r1/1p3p2/pn2p2B/3pP2p/3Pq3/Pn3N2/2r2P1P/R2QR2K b - - 1 25|c2b2 e1e4|1275|winningMaterial,oneMove|
ksh1t|r2q1k1r/pp2pBbp/5np1/n1pQ2N1/4P1b1/2P5/PP3PPP/RNB1K2R w KQ - 5 11|f2f3 f6d5|1275|winningMaterial,oneMove|
1unrmml|r1bqkb1r/2p3pp/p1n5/1p1pPp2/B3n3/5N2/PPP1QPPP/RNB2RK1 w kq - 0 9|a4b5 a6b5|1275|winningMaterial,oneMove|
55o6ag|r1bqr1k1/pp2bppp/2n1pn2/2ppP3/P7/3P1NP1/1PPN1PBP/R1BQ1RK1 b - - 0 9|b7b6 e5f6|1275|winningMaterial,oneMove|
alni4r|r1br2k1/2q1bpp1/ppn1pn1p/2p1P3/P1N5/2N3PP/1PPB1PB1/R2Q1RK1 b - - 0 16|c8b7 e5f6|1275|winningMaterial,oneMove|
14lkes8|r4rk1/1qpbppbp/2pp4/p1P5/B6p/4PPB1/PPQ3PP/3R1RK1 w - - 0 23|d1d2 h4g3|1280|winningMaterial,oneMove|
oq4jo6|r3r1k1/pp3pbp/2pp1np1/4q3/2PNR3/2N3PB/PP1Q1P2/1RB3K1 b - - 0 16|e5e4 c3e4|1280|winningMaterial,oneMove|
1wxpyva|r1bqkbnr/pp1p1ppp/2n1p3/1Pp5/2P5/P7/3PPPPP/RNBQKBNR b KQkq - 0 4|g8e7 b5c6|1280|winningMaterial,oneMove|
z47u5d|r2r2k1/pp2bppp/8/qb1p4/4nN2/1P1QPN1P/PB3PP1/R2R2K1 w - - 9 21|d3d5 d8d5|1280|winningMaterial,oneMove|
1xz8erd|1n2k1r1/3p3p/4pbp1/p3Np2/7P/2PNB3/b4PP1/R5K1 b - - 3 27|b8c6 e5c6|1280|winningMaterial,oneMove|
18jjeal|rn2k2r/pp2p1b1/2b1P1p1/2p2pN1/P2q4/2PP4/1P2Q1PP/R1B1KB1R b KQkq - 0 15|d4a4 a1a4|1280|winningMaterial,oneMove|
1msnx8f|6R1/4pp2/p2p1bk1/1p1P1N1p/1r2P2P/5P2/4K3/8 b - - 6 38|f6g7 g8g7|1280|winningMaterial,oneMove|
wdhmnx|r1b1kb2/1p2pp2/p1pp3p/q5rn/P1PP1Pp1/3BP3/2PQN1PB/1R2K2R b Kq f3 0 19|g4g3 f4g5|1280|winningMaterial,oneMove|
1xsggl1|r1b2rk1/2p1bpp1/ppnqp2p/3n4/Q2PN2B/P4N2/1P2PPPP/R3KB1R b KQ - 1 12|e7h4 e4d6|1280|winningMaterial,oneMove|
1d6uvr8|4r1k1/ppb2p1p/2pr3B/P2pqR1n/1P2P3/2P3P1/2Q3BP/4R1K1 b - - 0 26|d6h6 f5e5|1280|winningMaterial,oneMove|
5c2vk2|1r1r2k1/4pp2/b1np2pB/2PNq3/p3P3/1p1R1P2/3Q1KPP/3B3R w - - 4 25|d1e2 a6d3|1280|winningMaterial,oneMove|
8plpov|3rr1k1/2p1q1p1/4bp2/1P2R3/N1p2P1p/4QBnP/2P3PK/1R6 w - - 0 30|e5e6 e7e6|1280|winningMaterial,oneMove|
1mx56ga|r4b1r/pp1k1p1p/n2p2p1/2nNpN2/8/4BP2/PPP3PP/2KR3R w - - 0 15|g2g4 g6f5|1280|winningMaterial,oneMove|
1m7iimc|1r2nrk1/1p3pbp/2pNb1p1/p1P5/8/1PN3P1/P3PPBP/3RR1K1 w - - 1 19|d6b5 c6b5|1280|winningMaterial,oneMove|
1fd68yd|8/3k4/1p1PRp1p/4bBr1/p5P1/5K2/PP6/8 b - - 2 39|h6h5 e6e5|1285|winningMaterial,oneMove|
17mqhi4|3r3r/2pk1p2/p1n4p/1B4p1/1R1P4/2P1P3/P2K2R1/8 w - - 0 22|b5a6 c6b4|1285|winningMaterial,oneMove|
jloqy3|6k1/5p2/6p1/4p2p/2P4P/5PP1/R4Q1K/q1r5 b - - 1 52|g8g7 a2a1|1285|winningMaterial,oneMove|
kg4cgd|1rbq1b1r/pp2nkp1/3p4/2pNpp1p/7P/3P2P1/PPPBPP2/R2QKB1R w KQ - 3 14|d5f4 e5f4|1285|winningMaterial,oneMove|
gjwhaa|r4r2/1p5p/2pk4/3pR1nP/1P4N1/P5P1/6K1/3R4 b - - 6 34|g5e4 e5e4|1285|winningMaterial,oneMove|
1r66zlu|1n1r2k1/3r1p1p/5b2/5p2/1P3Pp1/N5P1/1R1p1PBP/3R2K1 w - - 3 29|a3c4 f6b2|1285|winningMaterial,oneMove|
1bk810x|5r2/3kr2p/1pp2p1R/p2p1n2/P2P1B2/2PP4/3K1P2/1R6 w - - 0 42|c3c4 f5h6|1285|winningMaterial,oneMove|
un64cb|r3k1nr/1bpp1p2/p7/2p1p1P1/4P3/P1Rq2p1/1P1N1PB1/3Q1RK1 b kq - 1 19|c5c4 c3d3|1285|winningMaterial,oneMove|
ucof05|5rk1/6pp/p1n1p3/1p2R2P/5r2/PP6/5PPN/3R2K1 w - - 1 31|d1e1 c6e5|1285|winningMaterial,oneMove|
1v4budj|r1b1kb1r/pp2pp2/1nB3pp/3qN3/3P4/P7/1PQ2PPP/RNB1K2R b KQkq - 0 12|d5c6 e5c6|1285|winningMaterial,oneMove|
1cqb9o0|r3kr2/1p1q3p/p3bbp1/P1Q2p2/5P2/1N1BP1nP/1PP3P1/R1BK2R1 w q - 1 23|d1e1 e6b3|1285|winningMaterial,oneMove|
10jue2n|r3k2r/p3b3/Ppp1qp1p/4p1p1/2N1Pn2/BP1Q3P/2P2PP1/R2R2K1 w kq - 2 23|a3e7 f4d3|1285|winningMaterial,oneMove|
1pmq854|3r3q/pb3kb1/1p1p4/2p1npp1/P3PN2/8/1PP1BPP1/R1BQ2K1 w - - 0 23|a1a3 g5f4|1285|winningMaterial,oneMove|
1b8d2gx|r1bqkbnr/1pp2pp1/p1np3p/3Pp3/P7/2N2N1P/1PP1PPP1/R1BQKB1R b KQkq - 0 6|f7f5 d5c6|1290|winningMaterial,oneMove|
1wckt7i|r1b1kb1r/p3p1pp/1np2p2/3qN3/3P4/8/PP3PPP/RNBQ1RK1 w kq - 0 12|f1e1 f6e5|1290|winningMaterial,oneMove|
1a0zoml|8/5pk1/4p3/p6p/Pr1P3P/RnK5/5P2/1N6 b - - 13 42|g7g6 a3b3|1290|winningMaterial,oneMove|
1j40hvu|3r2k1/p4p2/1p4p1/6bp/6B1/P1B3PP/1Pb2P2/4R1K1 w - - 0 34|e1e5 h5g4|1290|winningMaterial,oneMove|
198k5qx|r4rk1/pp1nnpp1/2pP2b1/P6p/1P5P/2P2NN1/5PP1/R3KB1R b KQ - 0 18|a8e8 d6e7|1290|winningMaterial,oneMove|
b770dk|2r1kb1r/2n1pp1p/p1b3p1/1p2P3/6B1/P3B1R1/1P1N1P1P/R3K3 b Qk - 1 18|c6b7 g4c8|1290|winningMaterial,oneMove|
19ybmwu|r1b1k2r/pp1n1ppp/8/2bp4/P3q3/2P1BN2/1P1NQPPP/R3K2R b KQkq - 8 13|e4e3 f2e3|1290|winningMaterial,oneMove|
gufbgm|r3kbnr/pp3ppp/2n1p3/3q4/3P2b1/2N2N2/PP2BPPP/R1BQK2R b KQkq - 1 8|g4f3 c3d5|1290|winningMaterial,oneMove|
ux0kr7|3R3k/2p2rb1/1p4pp/p3B3/P1P5/2n2N1P/6P1/7K b - - 7 35|f7f8 d8f8|1290|winningMaterial,oneMove|
zrojck|1r4k1/3nbppp/8/3pPp2/1P1q4/2N4P/r2BQ1P1/2R2RK1 w - - 0 26|d2e3 d4c3|1290|winningMaterial,oneMove|
5e58wu|r1bqkb1r/pppppppp/2n2n2/3P4/8/2P5/PP2PPPP/RNBQKBNR b KQkq - 0 3|e7e5 d5c6|1290|winningMaterial,oneMove|
46u6wo|6k1/2RR4/K1p3r1/1r5p/8/8/8/8 b - - 3 55|g6g7 d7g7|1290|winningMaterial,endgame,oneMove|
1gc4cmi|r1b1rnk1/2p1qpp1/p1p4p/1pb1p3/3PP1P1/2P2N1P/PP2QP2/R1BR1NK1 b - - 0 14|h6h5 d4c5|1290|winningMaterial,oneMove|
1pksvhk|rb2rn1k/1p1b1pp1/2p2n1p/p2p4/Pq1P4/1P1BP1BP/N1Q1NPP1/3R1R1K b - - 4 22|b8g3 a2b4|1290|winningMaterial,oneMove|
1vrxrcj|r1b2rk1/p3bppp/p1B5/3q4/Qn1Nn3/8/4NPPP/R1B2RK1 b - - 1 20|c8b7 c6d5|1295|winningMaterial,fork,oneMove|
1k7ejza|5rk1/1pRrppb1/p2p1n2/3P3p/qPN1P1p1/3Q4/2N2PPP/1R4K1 w - - 8 22|c7c5 d6c5|1295|winningMaterial,oneMove|
y2iams|2Rn2k1/5p1p/6p1/5p2/5r1b/7P/4NnB1/5RK1 b - - 1 39|f4b4 f1f2|1295|winningMaterial,oneMove|
g1pzs6|8/r1p4k/pp4qp/3R4/6Q1/P1P2P2/7P/6K1 b - - 2 47|g6g5 d5g5|1295|winningMaterial,oneMove|
ksq9dh|4r3/1k3p2/2bRp1p1/1pK1P3/1P5p/3BP2P/8/8 b - - 21 44|e8h8 d6c6|1295|winningMaterial,oneMove|
nninyh|1r4k1/3bppbp/3p2p1/rp6/3P4/N2BP2P/3N1PPB/4R1K1 w - - 0 27|a3b5 d7b5|1295|winningMaterial,oneMove|
slo7z6|2r2r2/1p4k1/p2b1pp1/1n2p2p/PPQpP2P/3P2Pq/3B1P2/2R1NRK1 w - - 13 29|a4b5 c8c4|1295|winningMaterial,oneMove|
1eln2zl|Rb3rk1/1p4pp/1p2b3/1P2pp1P/2P1R3/5NP1/1P4P1/5K2 w - - 0 27|f3g5 f5e4|1295|winningMaterial,oneMove|
xu9hbb|Q7/P6p/8/8/1K1k4/8/5p2/2R1q3 w - - 1 54|c1c3 e1c3|1295|winningMaterial,endgame,oneMove|
hhogxs|r7/1p1r1k2/2p5/4b1p1/p1bNP3/P1N4P/1PP3P1/2KRR3 w - - 0 26|c3d5 c6d5|1295|winningMaterial,oneMove|
1jp7c1k|2r1r1k1/1pq1ppb1/p1n2npp/5b2/2Pp2P1/BP1P1N1P/P2NQPB1/R3R1K1 b - - 0 17|e7e5 g4f5|1295|winningMaterial,oneMove|
b3qhhp|r2qk1nr/pp1bbpp1/2np3p/2pP4/4P2P/2N5/PP2NPP1/R1BQKB1R b KQkq - 0 9|g8f6 d5c6|1295|winningMaterial,oneMove|
m194i4|8/8/1p1R4/p5k1/Pr4p1/3K2P1/8/8 b - - 8 56|b4f4 g3f4|1295|winningMaterial,endgame,oneMove|
1xm8j0e|r3kb1r/pp2qp2/1np2np1/5pNp/2QP1B2/P1N4P/1PP2PP1/R4K1R w kq - 4 15|c4f7 e7f7|1295|winningMaterial,oneMove|
vd4axp|r1b1kb1r/pp1n1ppp/2p1pB2/q7/2pP4/1QN1PNP1/PP3P1P/R3KB1R w KQkq - 0 10|f6g7 c4b3|1300|winningMaterial,oneMove|
166ctng|r2q1rk1/ppp1bppp/n3p3/8/P1PPpB1P/4PN2/1P3PP1/R2QK2R w KQ - 0 12|h4h5 e4f3|1300|winningMaterial,oneMove|
176izgc|r2qk1nr/pp1b1ppp/2n1p3/2bp4/PP6/2P1PN2/5PPP/RNBQKB1R b KQkq - 0 8|c6b4 c3b4|1300|winningMaterial,oneMove|
1jmpzpx|8/4kp2/p5p1/p1rpb1P1/N7/2P1P3/2K2P2/7R b - - 3 36|e5d6 a4c5|1300|winningMaterial,oneMove|
754yze|4rr1k/2q3p1/1p1pp2p/p4p2/P2PR2P/2P4R/1P1Q1PP1/6K1 w - - 0 24|d2c2 f5e4|1300|winningMaterial,oneMove|
1rk5bif|rnbqkb1r/ppp2ppp/4pn2/3pP3/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 0 4|c7c5 e5f6|1300|winningMaterial,oneMove|
vwvsvt|2r4r/pp2kppp/4b3/1P1n4/P3N3/4PN2/2n1BPPP/R4RK1 w - - 7 22|e2d3 c2a1|1300|winningMaterial,oneMove|
on1tx4|r3k2r/1p3p2/2bpppnb/1P5p/4PP2/P1N1B3/6PP/R3KB1R b KQkq - 0 22|h5h4 b5c6|1300|winningMaterial,oneMove|
jnmvpn|2r1k1r1/1p3p1p/p3p3/2bp1p2/2n2B2/P2q1PNP/1P4P1/3RQR1K b - - 5 29|d3e3 f4e3|1300|winningMaterial,oneMove|
cga3oj|rnbqkb1r/ppp2ppp/4pn2/3pP3/8/3P4/PPPN1PPP/R1BQKBNR b KQkq - 0 4|a7a5 e5f6|1300|winningMaterial,oneMove|
fwk87h|r5k1/q5p1/4p1pp/pQr1B3/2P3P1/4P2P/3n1P2/1R1R2K1 w - - 6 32|b5b8 a8b8|1300|winningMaterial,oneMove|
1bu4kdm|r3kb1r/pp1nnpp1/1q2p2p/2ppP3/N2P3P/P7/1PP2PP1/R1BQKB1R b KQkq - 1 11|c5d4 a4b6|1300|winningMaterial,oneMove|
1phnjjr|2r3k1/1p3p1p/b4BpP/3pP3/1R6/1R6/q1rN1PP1/3QK3 w - - 5 28|b4b7 c2d2|1300|winningMaterial,oneMove|
fh2car|8/1p1kb3/p3p1rN/3pP2p/1P1P3P/P5PK/8/5R2 w - - 5 38|h6f5 e6f5|1300|winningMaterial,oneMove|
12le3ev|4r3/p5bk/3B2np/1p2Pqr1/1P1N1p2/2R5/4QPp1/2R3K1 b - - 2 37|f5e5 d6e5|1305|winningMaterial,oneMove|
iome63|r3qr1k/1ppb2pp/2nb1n2/p3Pp2/2B3P1/P1N1PN1P/1P1BQP2/R3K1R1 b Q - 0 14|f6e4 e5d6|1305|winningMaterial,oneMove|
zyrl1a|1r5r/1p2k3/7p/p2p2p1/P2N1B2/1N4Pb/1Pp4P/R5K1 w - - 0 23|d4e2 g5f4|1305|winningMaterial,oneMove|
1oj64vu|1r1qr1k1/3pbppp/npp2n2/pN2N3/2P1P1P1/5P2/PP4KP/R1BQ1R2 w - - 0 16|c1f4 c6b5|1305|winningMaterial,oneMove|
198jafp|6k1/3n1p2/3Q2pp/5q2/1r6/3RPP1P/4BPK1/8 b - - 3 35|b4b5 d6d7|1305|winningMaterial,oneMove|
16qfx1g|r1br2k1/5ppp/1p3q2/p1n5/1Q6/2P1PN1P/P3BPP1/R4RK1 w - - 0 19|b4d4 d8d4|1305|winningMaterial,oneMove|
ccr7sj|r1b1kb1r/ppp1np2/4pn1p/1P1p4/2PP4/P3PN1R/4BP2/R1BQKNq1 b Qkq - 5 15|h8g8 f3g1|1305|winningMaterial,oneMove|
16fjl8u|8/p1kp1R2/1np2P2/4r1bp/6B1/p5PK/8/R7 w - - 0 39|g4d7 b6d7|1305|winningMaterial,oneMove|
1play53|r1b1kb1r/1pq2ppp/p1n5/4p3/3p3P/2B1PN2/PP3PP1/R2QKB1R w KQkq - 0 12|f3d4 e5d4|1305|winningMaterial,oneMove|
jncr6g|2r3k1/3Qr1pp/3Qpp2/3n4/8/7P/1Pq2PP1/4R1K1 w - - 13 31|g1h1 e7d7|1305|winningMaterial,oneMove|
k6tzjl|r1bqk2r/2ppbpp1/p4n1p/nP1p3P/1P6/P1N1PN2/5PP1/R1BQKB1R b KQkq - 0 11|a6b5 b4a5|1305|winningMaterial,oneMove|
1sturl8|3b1rk1/1pq2pp1/p4n1p/2pNp3/P1P3bP/1P2P1B1/2Q1B1P1/5RK1 b - - 2 23|g4e2 d5c7|1305|winningMaterial,oneMove|
tui34e|3q1rk1/6p1/3p3p/1b1P1p2/pQrR4/4P3/1PP3PP/R6K w - - 0 31|b4c4 b5c4|1305|winningMaterial,oneMove|
174fuhn|r4rk1/pb2bppp/1p6/6q1/Q7/2B4P/PP2BPP1/R4RK1 w - - 2 17|e2f3 b7f3|1305|winningMaterial,oneMove|
1ln84y2|r3kb1r/1p1n1ppp/pqp1pn2/5b2/N2P4/P3B3/1PP1BPPP/R1Q1K1NR b KQkq - 1 10|b6b5 e2b5|1310|winningMaterial,oneMove|
roo5pb|5r2/2r2p1k/p3p2p/4Pnp1/1p2P3/3P3P/PB3R2/1K4R1 b - - 0 32|b4b3 e4f5|1310|winningMaterial,oneMove|
pot5ql|1rbb1rk1/pppq1ppp/3p1n2/1B6/P2PP3/7P/1P1NQPP1/R1B2RK1 b - - 0 13|f8e8 b5d7|1310|winningMaterial,oneMove|
1udq235|rnbq1rk1/pp1p1pp1/4pn1p/2p3B1/2PP4/2P1PN2/P4PPP/R2QKB1R w KQ - 0 8|e3e4 h6g5|1310|winningMaterial,oneMove|
2hj8l|3q1rk1/p1p1bp1p/2p1bpp1/8/1r1BQ3/2P2N1P/P2P1PP1/R3R1K1 b - - 0 15|b4d4 f3d4|1310|winningMaterial,oneMove|
hi0rqh|r3kb1r/pp1n1pp1/4p1b1/3pP2P/3P1P1q/7P/PP1NB3/R1BQ1K1R b kq - 2 14|f8b4 h5g6|1310|winningMaterial,oneMove|
1xn057m|r3kb1r/1pp2ppp/p4n2/4p3/3q2b1/2N2PP1/PPPBQ2P/R3KB1R b KQkq - 0 11|e8c8 f3g4|1310|winningMaterial,oneMove|
1d1fbd|r1bq1rk1/pppp1ppp/2n2n2/1Bb1p3/3PP3/2P2N2/PP3PPP/RNBQ1RK1 b - - 0 6|c6d4 c3d4|1310|winningMaterial,oneMove|
qaekem|r2q1k1r/1p2bpp1/2p1pn2/p2n4/3P1P1p/2PN1QN1/PP1B2PP/R3R1K1 w - - 0 19|a1d1 h4g3|1310|winningMaterial,oneMove|
11pv2nb|r2kR3/2pb2b1/2pp1p1p/p6q/8/1PB5/P1PQ2PP/1K2R3 b - - 0 26|h5e8 e1e8|1310|winningMaterial,oneMove|
mf9mgr|2kr3r/8/2pp2p1/1Nn5/p1P1P3/P3R1Pp/1P3P2/3R2K1 w - - 0 30|g1h2 c6b5|1310|winningMaterial,oneMove|
1hw5vuj|rnq1kb1r/5pp1/pp1pp2p/8/1Pb1n3/1N3P2/PB2B1PP/2RQ1RK1 b kq - 1 14|d6d5 f3e4|1310|winningMaterial,oneMove|
y93u7q|2r3rk/1p1q1ppp/4p3/p2pP2N/Pb1P3P/4BQ2/1P1n1PP1/2R2RK1 w - - 1 26|f3g4 d2f1|1310|winningMaterial,oneMove|
tb71pr|k6r/ppq5/8/2P3p1/3P2Q1/P3BRK1/8/8 w - - 4 33|f3f4 g5f4|1315|winningMaterial,fork,endgame,oneMove|
1ac5kcx|rn2rnk1/5pbp/2p2q1P/1p1p2p1/p2P1B2/P1NB1PP1/1PQ2P2/3R1K1R b - - 0 19|b8d7 h6g7|1315|winningMaterial,oneMove|
1u594f3|r3r1k1/p4p1p/1pb1q1p1/2pP4/4n3/4PN2/PPQ1BPPP/2RR2K1 b - - 0 19|e6d5 d1d5|1315|winningMaterial,oneMove|
19vpgm7|3R4/2r2kb1/4q1p1/1pp1p1B1/p1n3P1/8/PPP2Q2/2K5 b - - 3 29|e6f6 g5f6|1315|winningMaterial,oneMove|
b39uiq|2kr4/5Q1p/1Rpp2p1/p5P1/P1P1n3/2P4K/3Bq3/5R2 b - - 11 36|e4f2 f1f2|1315|winningMaterial,oneMove|
1xa11sj|3q2k1/4n1p1/pp2p3/5rQp/2pPN2P/5P2/PP4P1/5RK1 w - - 1 26|f1e1 f5g5|1315|winningMaterial,oneMove|
xxqwpd|5r1k/4p1bp/2p5/p1r4q/1P2Q1B1/P3P1P1/5P1P/3NR1K1 b - - 0 33|h5g5 b4c5|1315|winningMaterial,oneMove|
1crwdf8|2kr3r/ppp1qppp/2npbn2/3N4/2P1P3/3BQ2P/PP3PP1/R3K1NR b KQ - 4 11|f6d7 d5e7|1315|winningMaterial,oneMove|
pirqu2|r4rk1/pp4pp/3p1bq1/2pPpb1n/P1P3P1/2N1BN1P/1P2QP1K/R2R4 b - - 0 17|f5c8 g4h5|1315|winningMaterial,oneMove|
cy8am6|4r3/1p3r2/p1b3Rp/k1p3p1/P1P3P1/1P2PN1P/4KP2/2R5 w - - 1 29|f3g5 h6g5|1315|winningMaterial,oneMove|
78bwur|rn2k2r/p3b1p1/1q2pnpp/p1Pp4/2P2BP1/1Q2P2P/1P1N1P2/RN2K2R b KQkq - 0 15|b6c5 f4b8|1315|winningMaterial,oneMove|
5l4szl|5rk1/1r1n1p1p/1p2p1pB/p3P3/8/P6P/1P3PP1/R2R2K1 b - - 2 19|b6b5 h6f8|1315|winningMaterial,oneMove|
17l8269|3n3r/3kn3/pBp3p1/7p/8/P4R1P/5PP1/b3R1K1 b - - 3 33|e7d5 b6d8|1315|winningMaterial,oneMove|
muusjn|r2qk2r/pb1pbppp/1pn2n2/2p5/2Pp4/2N1PN1P/PP2BPP1/R1BQ1RK1 w kq - 0 9|f3d4 c5d4|1315|winningMaterial,oneMove|
3pvozg|r1b1kb1r/ppq1np2/2n1p2p/2ppP3/3P2p1/2P2N2/PPN1BPPP/R1BQ1RK1 w kq - 0 10|c2e3 g4f3|1320|winningMaterial,oneMove|
p99srm|8/6k1/2p1n1p1/1rPpPp2/p4P2/Pp4P1/1P2B1K1/5R2 b - - 2 45|e6d4 e2b5|1320|winningMaterial,oneMove|
xohtvz|3k2r1/1ppq3p/2r5/p1QbPp1N/P2P4/8/3B3P/R3KR2 w Q - 6 26|a1c1 c6c5|1320|winningMaterial,oneMove|
ke7r2e|r3r1k1/pp3ppp/8/n3qb2/2P4P/PQ2P3/R3BPP1/1N3RK1 w - - 2 22|b3c2 f5c2|1320|winningMaterial,oneMove|
4u7nzs|rq3rk1/1p1n1pp1/2p2np1/p7/3Pp2P/P1PBP1P1/5P2/1RBQ1RK1 w - - 0 17|h4h5 e4d3|1320|winningMaterial,oneMove|
plz5px|5rk1/pb3ppp/3qp3/1r6/1nNP4/6P1/PP3PBP/R2QR1K1 b - - 0 21|d6d5 g2d5|1320|winningMaterial,oneMove|
7wnczu|rn1q1rk1/p3p1b1/7p/1p1RPbp1/3Q4/P4N1P/1PP2PP1/2K2B1R b - - 2 17|b8a6 d5d8|1320|winningMaterial,oneMove|
sh88gc|r1bqkb1r/pp2pp2/1nnp2pp/1B2P3/Q2P4/P4N2/1P3PPP/RNB1K2R w KQkq - 4 10|d4d5 b6a4|1320|winningMaterial,oneMove|
br2iqw|3q2k1/6p1/p3p3/1pN2r1p/2pP1n1P/5P2/PP2Q1P1/5RK1 w - - 2 29|e2e6 f4e6|1320|winningMaterial,oneMove|
1f3elbj|r7/3k4/p3pNp1/1p1pb1pp/3P4/PP2r2P/R1P3P1/5RK1 b - - 1 29|d7c8 d4e5|1320|winningMaterial,oneMove|
jcywws|3rr1k1/1R3ppp/p7/5b2/2P1p3/4B1P1/3bPPBP/2R3K1 w - - 2 27|b7b1 d2c1|1320|winningMaterial,oneMove|
h0bjlf|1rq2rk1/npp2p2/4pp1p/pQ5P/Pb1P4/4PN2/1PN1KPP1/R6R w - - 2 21|b5b4 a5b4|1320|winningMaterial,oneMove|
1g2i96e|rn1qk2r/pp3ppp/2p2n2/2b1p3/3pP3/P1N2QPP/1PPP1PB1/R1B1K2R w KQkq - 0 9|h3h4 d4c3|1320|winningMaterial,oneMove|
z17biv|r1b1kb1r/p1ppqppp/2p5/3nP3/2P5/8/PP2QPPP/RNB1KB1R b KQkq - 0 8|c8b7 c4d5|1320|winningMaterial,oneMove|
b7eyp1|r7/2bb1ppp/2N1k3/N3p3/8/1P2P3/1P3PPP/2R3K1 w - - 4 26|f2f4 c7a5|1325|winningMaterial,oneMove|
comrfo|8/2r2p1p/5pk1/2p2R2/1nB2P1P/1P4P1/3K4/8 w - - 4 43|c4d3 b4d3|1325|winningMaterial,oneMove|
1p3twol|8/rp5p/2bk2p1/pR3P2/P7/4PP1P/4BK2/8 w - - 1 30|f5f6 c6b5|1325|winningMaterial,oneMove|
jwe2vj|3Qrb2/6k1/5nPp/8/3N4/6p1/5PK1/8 w - - 2 50|d4c6 e8d8|1325|winningMaterial,endgame,oneMove|
1twekvv|r1bqkbnr/ppp2ppp/2np4/3Pp3/P7/2P5/1P2PPPP/RNBQKBNR b KQkq - 0 4|a7a5 d5c6|1325|winningMaterial,oneMove|
mvqwtp|r4rk1/1b2p2p/2N2npb/p2p4/3P1P2/P1N5/1P4PP/R1B1K2R w KQ - 1 17|f4f5 h6c1|1325|winningMaterial,oneMove|
18dj2os|6rk/p7/b1p1p3/2PpP1p1/P2PpqBp/7Q/4P2P/5R1K b - - 1 36|g8f8 f1f4|1325|winningMaterial,oneMove|
bnhgyv|r2qkbnr/1ppbpppp/2np4/p2P4/2P1P3/5N2/PP3PPP/RNBQKB1R b KQkq - 0 5|g8f6 d5c6|1325|winningMaterial,oneMove|
ow45jp|r1b1k2r/pp1nqppp/2pbpn2/2Pp4/3P4/2NBPN2/PPQ2PPP/R1B1K2R b KQkq - 0 8|d6c5 d4c5|1325|winningMaterial,oneMove|
3k14sf|5Q2/1ppk4/7p/p7/P1PP4/1PBq2r1/1K1N4/8 w - - 4 41|f8f4 d3c3|1325|winningMaterial,oneMove|
1lux9q1|8/8/k6R/2K5/P7/8/1r6/8 b - - 14 69|b2b6 h6b6|1325|winningMaterial,endgame,oneMove|
y1i1i6|4k2r/p2p2p1/4pb1p/4P3/3Q4/4B1P1/q4P1P/5BK1 b k - 0 21|h8f8 e5f6|1325|winningMaterial,oneMove|
1e0oot1|8/8/8/8/pk6/R7/1K6/4b3 b - - 9 58|e1c3 a3c3|1325|winningMaterial,endgame,oneMove|
oy52iu|rnbqk2r/pp1p1pp1/7p/3P4/1bBPp3/8/PP3PPP/RNBQK2R w KQkq - 1 13|d1d2 b4d2|1325|winningMaterial,fork,oneMove|
vwtq39|4rrk1/1p1n2pp/p1qbp1n1/2Pp1p2/P2P4/6P1/1P1NQPNP/R1B2RK1 b - - 0 19|f5f4 c5d6|1330|winningMaterial,oneMove|
1ulufh8|r4rk1/1p2b1pp/p1p1pp2/2PpBb1P/1P1P4/2P1P3/5PP1/R3KB1R w KQ - 0 16|f2f3 f6e5|1330|winningMaterial,oneMove|
kxzniy|r1bq1rk1/pp2ppbp/2n2np1/3p4/2BP4/2P2N1P/PP1Q1PPB/RN2K2R w KQ - 0 12|b1a3 d5c4|1330|winningMaterial,oneMove|
18ydnou|r1b1kb1r/1pp1pp2/2n4p/p2q4/2N3p1/3P1NP1/PPP2PP1/R2QKB1R w KQkq - 0 11|f1e2 g4f3|1330|winningMaterial,oneMove|
u7cdbp|2rqkb1r/1p1b1p2/p2p1nnp/3Pp3/P3P1p1/R1N2N2/1PBB1PPP/3Q1RK1 w k - 0 16|a3b3 g4f3|1330|winningMaterial,oneMove|
16qhial|2Q5/1p4q1/p4k1r/5p2/5Pp1/4P1R1/6PK/8 w - - 9 54|g3h3 g4h3|1330|winningMaterial,endgame,oneMove|
44x98n|3n4/4kp1p/6p1/8/2B3P1/7P/4rP2/3R2K1 b - - 0 29|e2e6 c4e6|1330|winningMaterial,endgame,oneMove|
1emb3r5|5b2/p1k2p1p/8/5b2/2p5/2P2Bp1/PP1NRq1P/2K4R b - - 3 34|f5g6 e2f2|1330|winningMaterial,oneMove|
j10br5|4bk2/3r4/p2q1PnQ/3pp3/8/P3P3/1B6/K5R1 b - - 7 57|f8f7 h6g6|1330|winningMaterial,oneMove|
1wpwfdu|6k1/3Np3/3qn1p1/1QP2pp1/1p6/4PP2/5P1P/5K2 b - - 0 36|e6c5 d7c5|1330|winningMaterial,oneMove|
a4u4r5|r2k3r/2pb2b1/2pp1p1p/p4q2/5R2/1PB5/P1PQ2PP/1K2R3 b - - 0 24|h8g8 f4f5|1330|winningMaterial,oneMove|
xnuker|r1bqkbnr/pp1p1ppp/2n5/4p3/3N4/2P5/PP2PPPP/RNBQKB1R w KQkq - 0 5|e2e4 e5d4|1330|winningMaterial,oneMove|
aue081|1n3bk1/3b3p/4p1p1/qpQp1p2/3P4/3NP1P1/1PP2P1P/2R3K1 w - - 2 25|d3e5 f8c5|1330|winningMaterial,oneMove|
1oawsnl|2r3k1/4pp1p/6p1/p3Pb2/1pB2PP1/1P1r3P/P3R3/2KR4 b - - 0 28|a5a4 g4f5|1330|winningMaterial,oneMove|
pkr15j|r3r1k1/2p1npb1/2p3pp/p2qP1B1/Q7/5N2/PP3PPP/R2R2K1 b - - 1 19|h6g5 d1d5|1335|winningMaterial,oneMove|
dll2d2|r1b1k2r/pp2bppp/6n1/nPp1q1B1/2PN3P/P3P3/5PP1/RN1QKB1R w KQkq c6 0 15|b1d2 c5d4|1335|winningMaterial,oneMove|
ilcr53|1R1bk1r1/p1Qb3p/5q2/3Pp3/6p1/4p3/P4PPP/3R2K1 w - - 0 32|b8d8 f6d8|1335|winningMaterial,oneMove|
n7kj7y|1n2kb1r/8/pNr1p3/P1p2pq1/1p1p1nNp/1P3Q1P/1BPP1PP1/1R2R1K1 w k - 0 26|c2c3 f5g4|1335|winningMaterial,oneMove|
k0e0tp|4k2r/1pqb1p2/p2p4/P1bPp1n1/4Pnp1/1R1B2P1/1P2Q2P/3NNR1K w k - 7 28|f1f4 e5f4|1335|winningMaterial,oneMove|
bdru6x|r1bqkb1r/p2p1ppp/2p1pn2/4P3/8/8/PPP1QPPP/RNB1KB1R b KQkq - 0 7|a8b8 e5f6|1335|winningMaterial,oneMove|
1q2tmc0|3r2k1/ppr2p1p/1n4p1/8/3b4/P3R1P1/BP1N1P1P/4R1K1 w - - 0 28|d2e4 d4e3|1335|winningMaterial,oneMove|
1ayrn0w|r1bq1rk1/3nbppp/2p1pn2/pp6/2BP1B2/P1N1PN1P/1PQ2PP1/R3K2R w KQ - 0 12|c3b5 c6b5|1335|winningMaterial,oneMove|
x41amd|rn2kbnr/ppq1pppp/2p5/8/6b1/P2P1NNP/1PP2PP1/R1BQKB1R b KQkq - 0 8|h7h5 h3g4|1335|winningMaterial,oneMove|
z5182d|1r2kb1r/1p3ppp/4p3/8/P1p1P3/R3PN2/1P2K1PP/3R4 w - - 0 22|d1b1 f8a3|1335|winningMaterial,oneMove|
iv8hdd|r2r2k1/pp1b1ppp/3bp3/3n2B1/qP5P/P4NP1/3QPPB1/R4RK1 b - - 1 20|d7b5 g5d8|1335|winningMaterial,oneMove|
18q11s9|1rb1k2r/1p1n1pp1/p1n1p3/2qpP2p/N4P1P/8/PPPQN1P1/R3KB1R b KQk - 1 13|e8g8 a4c5|1335|winningMaterial,oneMove|
18zmzks|2R1br2/1p2r1kp/P5p1/8/7P/6P1/5p1K/1R3B2 b - - 0 45|e8d7 c8f8|1335|winningMaterial,oneMove|
1ol0jbm|rnbqkbnr/pp2pppp/2p5/8/3Pp3/3B4/PPP2PPP/RNBQK1NR w KQkq - 0 4|b1d2 e4d3|1335|winningMaterial,oneMove|
zxe65k|3r1k2/ppnq1pb1/2p1p1p1/2P4r/2BP2P1/P4N2/1P1Q1PK1/3R1R2 b - - 0 30|c7d5 g4h5|1340|winningMaterial,oneMove|
1xjhirh|1r3k2/3R3p/2p5/8/2B2r2/p4P2/Pb4PP/3R3K w - - 4 36|c4d5 c6d5|1340|winningMaterial,oneMove|
1chm24h|r2qk2r/1b3p1p/p3p3/1pp1P1p1/6Q1/4P1nP/PP1P2B1/R1B1K1R1 b Qkq - 1 17|g3e4 g2e4|1340|winningMaterial,oneMove|
1ybeag2|rnbqkb1r/pp3ppp/4pn2/8/3pP3/2N5/PPPNBPPP/R1BQR1K1 w kq - 0 10|d2c4 d4c3|1340|winningMaterial,oneMove|
kwvddo|2kr1b1r/1pp4p/5pp1/p3n3/P2NP2P/2q5/1B2QPP1/R4RK1 b - - 1 20|f8b4 b2c3|1340|winningMaterial,oneMove|
lunj1t|2N5/1B2r1kp/2P1p3/3n1p2/4p3/6PP/4KP2/8 b - - 2 40|e4e3 c8e7|1340|winningMaterial,oneMove|
1ej1yx9|r3k2r/pbp1qpp1/1pnb3p/4p3/3Pp3/2PB1NB1/PP2QPPP/R3K2R w KQkq - 0 13|d3b5 e4f3|1340|winningMaterial,oneMove|
1iso4fy|6k1/4P1b1/8/8/1p3r2/1K4R1/1P5P/8 b - - 0 43|g8f7 g3g7|1340|winningMaterial,endgame,oneMove|
v38b8h|8/4P2p/6k1/6Pp/5K2/3b2B1/8/8 b - - 0 66|h5h4 e7e8q|1340|winningMaterial,promotion,endgame,oneMove|
1vgb6hn|r1bqk1nr/ppppb1pp/2n5/4p3/4Pp2/3PBN2/PPP1BPPP/RN1QK2R w KQkq - 0 6|d3d4 f4e3|1340|winningMaterial,oneMove|
1j6fj7o|2r1k2r/1p1bbp2/p3p3/1P2P3/P2n2Pp/N1p2P2/2N3PK/1RB2R2 b k - 1 28|d4b5 a4b5|1340|winningMaterial,oneMove|
1hx08hz|r2qk2r/5ppp/2pb1n2/p2p4/N2Pp3/P4Q1P/1PP2PP1/R1B2RK1 w kq - 0 13|f3g3 d6g3|1340|winningMaterial,oneMove|
1g5n39|r1b4r/p2k1p1p/2ppn1p1/6N1/8/P1N3P1/1PP2K1P/R3R3 w - - 1 21|e1e6 f7e6|1340|winningMaterial,oneMove|
iucffa|1r1bRrk1/8/p2pRnp1/Pp1P1pN1/2p2PpP/2PP4/1P1B2K1/8 w - - 10 36|e8e7 d8e7|1340|winningMaterial,oneMove|
f1lgw1|4k1nr/1p1rb3/p4p2/1b1pP1pp/3P1B2/P1P2N1P/3N1PP1/R3K2R w Kk - 0 20|f4g5 f6g5|1345|winningMaterial,oneMove|
mx9a3a|r1r2k2/pb3ppp/2N1p3/Pp6/2PN4/RPn2P2/6PP/4R1K1 w - - 3 27|d4e6 f7e6|1345|winningMaterial,oneMove|
1cmk3wx|r2qk2r/2pn1ppp/bp6/3p4/1b1Pn3/1N2PN1P/1P2QPP1/R1B2RK1 w kq - 0 15|e2a6 a8a6|1345|winningMaterial,oneMove|
zniapn|rnbq1rk1/p1pn1pb1/1p1p2pp/4p3/2PP1B2/NP2PN2/P3BPPP/2RQK2R w K - 0 10|c4c5 e5f4|1345|winningMaterial,oneMove|
15ouk2d|3r2k1/p5pN/q4n2/1p1p1Q2/8/7P/5PP1/4R1K1 w - - 1 42|g2g4 f6h7|1345|winningMaterial,oneMove|
bbtyxy|8/6pk/4Q1n1/2q1r3/3NPp1p/r6P/P5P1/1R1R2K1 w - - 7 38|g1h2 e5e6|1345|winningMaterial,oneMove|
d4ftcf|3qr1k1/r1pb1pp1/1p3b1p/3P4/p1PpQ2P/P5P1/1P1B1PB1/3RR1K1 w - - 0 20|e4e8 d7e8|1345|winningMaterial,oneMove|
9er1b3|5rk1/6pp/p3p3/1p6/2n5/bN4PP/1q2RPB1/3Q2K1 b - - 3 34|a6a5 e2b2|1345|winningMaterial,oneMove|
95wdx8|8/6p1/1k3p1p/p1r4P/3nPP2/8/4BKP1/1R6 b - - 11 49|c5b5 e2b5|1345|winningMaterial,oneMove|
17010v6|8/5k1p/6p1/8/7r/P3K2b/7R/4B3 b - - 3 49|g6g5 e1h4|1345|winningMaterial,endgame,oneMove|
tw9a5|rnbq1rk1/1p2bppp/2pp1n2/p7/P1PPp3/2N1PN1P/1P2BPP1/R1BQK2R w KQ - 0 9|e1g1 e4f3|1345|winningMaterial,oneMove|
17hwp5q|6k1/4b3/5Pp1/8/7p/5P1P/3B1K2/8 b - - 0 41|g8f7 f6e7|1345|winningMaterial,endgame,oneMove|
1qdxawd|6k1/p3qp2/6p1/2p3np/1p5P/1P1QP1N1/P4PP1/6K1 b - - 0 31|g8g7 h4g5|1345|winningMaterial,oneMove|
k3rcq4|1rq1k2r/p2n1pbp/3p1np1/1QpP4/2P2B2/5N2/PP2BPPP/R4RK1 w k - 4 17|e2d1 b8b5|1345|winningMaterial,oneMove|
1413s40|r2qkbnr/1p3ppp/p1n1p3/1BppPb2/3P4/2P2N2/PP3PPP/RNBQK2R w KQkq - 0 7|b1a3 a6b5|1350|winningMaterial,oneMove|
k9k9x8|r1bq1rk1/p1ppbppp/2p5/3nP3/2PN4/8/PP2QPPP/RNB2RK1 b - - 0 10|f7f6 c4d5|1350|winningMaterial,oneMove|
1xja8p0|6r1/3nkpr1/p3p1P1/1p5P/2pPpQ2/2P3q1/PP4P1/RN3RK1 b - - 1 27|g3g6 h5g6|1350|winningMaterial,oneMove|
sliomv|7k/6qp/pQ2BP2/2pP1P2/7P/P3p3/4K1b1/8 b - - 0 36|g7g8 e6g8|1350|winningMaterial,oneMove|
2esb0c|r1bqk2r/1p1n1p1p/p3p3/3p2p1/P1pP1B2/2P1P3/2PQBPPP/R4RK1 w kq - 0 14|e3e4 g5f4|1350|winningMaterial,oneMove|
ftttr6|8/1p1r1k2/p3R1R1/1r6/3bN3/P7/KP6/8 w - - 27 49|e6f6 d4f6|1350|winningMaterial,endgame,oneMove|
aej061|8/5Bk1/1p4P1/8/1PP5/3n4/4p3/4K3 w - - 1 39|e1d2 e2e1q|1350|winningMaterial,promotion,endgame,oneMove|
12f7mz0|2kr4/5Q1p/1Rpp2p1/p5P1/P1P1n2q/2P5/3B2K1/5R2 b - - 21 41|h4g5 d2g5|1350|winningMaterial,oneMove|
lm6sj9|rn1q1rk1/1p3pp1/2p1pnp1/p7/1bBP3P/P1N1P1P1/1P3P2/R1BQK2R b KQ - 0 12|b8d7 a3b4|1350|winningMaterial,oneMove|
9ukefi|rn1qk2r/p4pp1/2p1pnb1/1P2N2p/1bpPP2P/2N1BP2/1P4P1/R2QKB1R b KQkq - 0 11|f6e4 f3e4|1350|winningMaterial,oneMove|
yx09gz|2r3k1/6p1/4b3/1B1p3q/P1pR4/4Q3/1P3PK1/8 b - - 3 44|c8e8 b5e8|1350|winningMaterial,oneMove|
11p8xuw|rnb1kbnr/2q2ppp/p2pp3/2pP4/1p2P3/2N1BB2/PPP2PPP/R2QK1NR w KQkq - 0 9|g1h3 b4c3|1350|winningMaterial,oneMove|
tmwkwo|2RR1N2/kp4r1/p7/2K5/5nP1/8/PP6/4r3 b - - 4 46|f4e6 f8e6|1350|winningMaterial,endgame,oneMove|
k62ir9|rnb1kb1r/1p1p1pp1/p3pn2/q6p/2Pp3B/P1N1P3/1P3PPP/R2QKBNR w KQkq - 0 9|g1f3 d4c3|1350|winningMaterial,oneMove|
2fjeze|5rk1/5p2/pR4pp/1r6/2pP4/P1P1R3/1P4P1/6K1 w - - 1 38|e3e6 f7e6|1350|winningMaterial,oneMove|
1o85c03|8/5p2/p1r1k1p1/p2pb1P1/N4P2/2P1P3/2K5/1R6 b - - 0 38|f7f6 f4e5|1355|winningMaterial,oneMove|
1cvmg1w|r1br2k1/ppq1bpp1/2n1pn1p/2p5/P3P3/N1N3PP/1PP2PB1/R1BQ1RK1 w - - 5 14|b2b3 d8d1|1355|winningMaterial,oneMove|
1mh81fd|r3k2r/p1q3pp/2p1pn2/p2p1p2/Pb1P4/1PP1PN1P/4QPP1/R1B2RK1 b kq - 0 13|e8g8 c3b4|1355|winningMaterial,oneMove|
2cki45|r3r2k/1b3ppp/pp3q2/2np4/5BN1/4RPQ1/PPP3PP/2KR4 b - - 10 27|e8e3 g4f6|1355|winningMaterial,oneMove|
g7f95d|3rk2r/1p3pbp/p5p1/3Nqn2/4QB2/P4P2/1P3P1P/R4RK1 b k - 1 21|d8d5 f4e5|1355|winningMaterial,oneMove|
1c9wegv|r1bqk2r/pppp1pbp/2n2np1/8/1P2p3/P1P2NP1/3PPPBP/RNBQK2R w KQkq - 0 7|e1g1 e4f3|1355|winningMaterial,oneMove|
r2m9ag|3r4/8/3P1k1p/pR3Pn1/2P5/PP1R4/1bB1b3/6K1 w - - 5 48|b5d5 e2d3|1355|winningMaterial,oneMove|
1cx2qz9|5r2/5pkb/R3p3/3p2r1/1P1P1Np1/2P1NP2/3K4/8 w - - 0 36|f4e6 f7e6|1355|winningMaterial,oneMove|
mpz5qm|7r/1p6/p7/2R5/PkP5/1P3KP1/8/8 w - - 1 41|c5b5 a6b5|1355|winningMaterial,endgame,oneMove|
1cgvez0|rnb1k2r/ppqp1pp1/2p2n1p/4P3/3Q4/1P6/P1P1BPPP/RN2K1NR b KQkq - 0 9|e8g8 e5f6|1355|winningMaterial,oneMove|
zuegzb|r5k1/1q3p2/3pr1pp/1P4Q1/8/1P3P2/4nBPP/3R1R1K w - - 0 32|g5e3 e6e3|1355|winningMaterial,oneMove|
9ccvk4|4B3/6p1/2bK4/p7/5kPP/P7/8/8 w - - 0 55|e8d7 c6d7|1355|winningMaterial,endgame,oneMove|
hhibnm|1rb2rk1/3nbppp/p1q2n2/2p5/N4B2/5N2/PPBQ1PPP/R4RK1 b - - 3 18|e7d8 f4b8|1355|winningMaterial,oneMove|
13a3vwa|rnq1r1k1/pbp1bppp/1p3n2/1B1pN3/Q2P4/2N1P1B1/PP3PPP/R3K2R b KQ - 2 11|a7a6 b5e8|1355|winningMaterial,oneMove|
1j8y2hw|2r3k1/4b1pb/qNp1p2p/pr6/3P2p1/2R1P1B1/PQ3P1P/5BKR b - - 0 27|a6b6 f1b5|1360|winningMaterial,oneMove|
1cz9nx4|r1bqk3/1p4p1/n1pp1n2/4pp2/1P4r1/PQ1P1N2/1B2PPBP/R3K2R w KQq - 4 15|f3e5 d6e5|1360|winningMaterial,oneMove|
1x77wy5|8/8/p4k2/1p2R3/P1p5/8/1P2KP1r/8 w - - 1 44|e5b5 a6b5|1360|winningMaterial,endgame,oneMove|
1ba730o|r1b2rk1/1p2ppbp/pqnp2p1/8/2Npn2N/2P1P2P/PP2BPPB/R1Q2RK1 b - - 1 14|e4c3 b2c3|1360|winningMaterial,oneMove|
ryfwe2|1r2qrk1/1p1b1pb1/p2pp1p1/B1nN3p/2Pp4/Q2P2PP/PP2PPB1/1R3RK1 w - - 0 22|f1e1 e6d5|1360|winningMaterial,oneMove|
1skw0ca|r2qk2r/pbp2ppp/2n5/3pP3/2p5/P2Q1NP1/1PP1BP1P/R3K1R1 w Qkq - 0 15|d3d4 c6d4|1360|winningMaterial,oneMove|
upou96|rn1qkbnr/pp2ppp1/2p4p/8/4p3/P1N2B2/1PPP1PPP/R1BQK2R w KQkq - 0 7|d2d4 e4f3|1360|winningMaterial,oneMove|
f11g74|r2qk2r/ppp2ppp/1b1p1n2/1Q4B1/4P3/2P5/PP3PPP/RN3RK1 b kq - 0 11|f6d7 g5d8|1360|winningMaterial,oneMove|
1988owr|r1b1k2r/p1p2pp1/2Np4/2P1q1p1/4Pn2/3B3P/2P2PP1/1R1QR1K1 b kq - 0 17|c8h3 c6e5|1360|winningMaterial,oneMove|
112cgdp|r1r3k1/p4pb1/1P3q1p/1p1p2pP/8/4PbN1/PPQ2PP1/1KR2B1R b - - 0 22|f3e4 g3e4|1360|winningMaterial,oneMove|
4nazy3|8/4rp2/8/b3r1k1/p1P1B1p1/P7/1P2RP2/4RK2 w - - 3 37|e4d3 a5e1|1360|winningMaterial,oneMove|
1277shk|4rrk1/6pp/4q3/1R3p2/2p2Q2/2NnPP2/1PK2P1P/7R w - - 1 29|h1d1 d3f4|1360|winningMaterial,oneMove|
vuutua|2r1k2r/1p1n1p2/pq2p1pb/RP1pP2p/3P4/2PBQ2P/4NPP1/R5K1 w k - 1 22|b5a6 h6e3|1360|winningMaterial,oneMove|
13vs7jl|1r1q1rk1/p4ppp/5n2/3Pp3/1b6/P1NQB3/1P2KPPP/3R3R b - - 0 15|a7a5 a3b4|1360|winningMaterial,oneMove|
1fjz29d|5r2/1R5p/k1P5/p5R1/P7/8/2pP3P/6K1 w - - 0 37|h2h4 c2c1q|1365|winningMaterial,promotion,endgame,oneMove|
1sx1cq8|r1q3k1/p1pn1ppp/b2p4/1QpP2N1/8/2N5/PPP2PPP/4R1K1 w - - 3 20|e1e7 a6b5|1365|winningMaterial,oneMove|
1e57rtj|2kr3r/1ppqn3/p2p1n1p/1P4p1/2PP1p2/P1N2pP1/1B1PQ2P/2R2RK1 w - - 0 23|b5a6 f3e2|1365|winningMaterial,oneMove|
88ags3|r3k2r/pppqbp2/2n3pp/4Pb2/2Pp4/1N1Q1N1P/PP2PPB1/R1B2RK1 w kq - 0 14|b3d4 f5d3|1365|winningMaterial,oneMove|
190fxgu|8/r1p5/1p2nk1p/1P3p2/1P1R3P/p4B2/P2K1P2/8 w - - 4 41|d2c3 e6d4|1365|winningMaterial,oneMove|
1p22sdg|3r1r1k/p2Q4/2pp3P/1q6/4P3/P3BP2/1bPK4/1N4R1 w - - 5 34|d7g7 b2g7|1365|winningMaterial,oneMove|
1tof8ix|rnbqk2r/pp3ppp/2p1pn2/3pP3/2P5/4P3/PP1N1PPP/RN1QKB1R b KQkq - 0 8|d8b6 e5f6|1365|winningMaterial,oneMove|
qsuvud|8/5k2/5P1P/2p5/2pb4/P7/1P2p1r1/2BK3R w - - 0 38|d1c2 e2e1q|1365|winningMaterial,fork,promotion,oneMove|
13eq7sj|3r2k1/1pq1bp2/4p1p1/1b2P2p/4pB1P/2P1Q2R/3rBPP1/R4K2 w - - 0 25|e3d2 d8d2|1365|winningMaterial,oneMove|
1hlos3|8/5r1p/1R6/p4Pk1/1bB3P1/1P3K2/8/8 b - - 2 55|f7f5 g4f5|1365|winningMaterial,endgame,oneMove|
1ntz9r1|r1bqkb1r/5pp1/p3p2p/1ppnPn2/2N5/2P2N1Q/PP2BPPP/R1B1K2R w KQkq - 0 14|e1g1 b5c4|1365|winningMaterial,oneMove|
1dg53xe|r3bbk1/2R2pp1/p3p2p/3qB3/1p2NP2/4P2P/PP4P1/3Q2K1 w - - 3 29|e4f6 g7f6|1365|winningMaterial,oneMove|
zjn5gt|r6b/5k2/2p1bn2/1pq5/p6Q/3BB3/PP3P2/1K1R4 b - - 2 30|c5f5 d3f5|1365|winningMaterial,oneMove|
1xlwcr9|r1bq1rk1/pp3p1p/2n3p1/3pP3/2p3n1/P1PBPNP1/1P1NQPP1/R3K2R w KQ - 0 13|d3c4 d5c4|1365|winningMaterial,oneMove|
irvani|4k3/2rR4/4P3/pN1p2p1/Pp4P1/1P5p/2rK1P1P/8 w - - 8 46|d2e3 c7d7|1370|winningMaterial,oneMove|
pmqyb3|2b1Q3/k1r5/pp6/2qR4/2P5/P2B4/KP6/8 b - - 1 40|a6a5 d5c5|1370|winningMaterial,endgame,oneMove|
1b4oapj|3r2k1/1ppr2pp/4bp2/B2P3P/4P3/5P2/1P2B1PR/4K3 b - - 0 26|e6d5 e4d5|1370|winningMaterial,oneMove|
1bp2d4a|1r3r1k/p1q1bp1p/bp3np1/2p1pP2/1nPpP3/PP1P1RPP/1B1N2BN/R2Q2K1 b - - 0 17|g6f5 a3b4|1370|winningMaterial,oneMove|
c799vs|r1bq1rk1/3n1pb1/pp1p1np1/2p4p/P1PBP3/2N2NPP/1P3PB1/RQ3RK1 w - - 0 14|b2b4 c5d4|1370|winningMaterial,oneMove|
xgwzpl|rnbqkb1r/1p3ppp/p2p1n2/4p3/3NP3/2N2P2/PPP3PP/R1BQKB1R w KQkq - 0 7|g2g4 e5d4|1370|winningMaterial,oneMove|
3ec2aq|r4rk1/1pqbbpp1/1n2pn1p/4p3/1PPN4/6P1/1BQN1PBP/2R2RK1 w - - 0 18|f1e1 e5d4|1370|winningMaterial,oneMove|
1salasi|1r3q2/2pk4/p1npp3/4p1Bp/P3P1nR/3P2P1/2P2P2/3Q1KN1 w - - 4 28|h4g4 h5g4|1370|winningMaterial,oneMove|
akokyf|2k2r2/4bpp1/pp2p2p/2Np3P/3P2P1/P7/1PK5/3R1R2 b - - 0 31|e7c5 d4c5|1370|winningMaterial,oneMove|
1q55mrf|3rr1k1/1pp1q1pp/p7/4P3/2Pb4/1P4p1/P1Q2PBP/4RRK1 w - - 0 24|g2d5 d8d5|1370|winningMaterial,oneMove|
1ww52i4|3q1r1k/rbpnp1np/3p2p1/Pp3p2/2NP4/2P1PN2/4BPPP/R2Q1RK1 w - - 0 17|d4d5 b5c4|1370|winningMaterial,oneMove|
asiis4|rnbq1rk1/pppp1ppp/4pn2/8/1bPP4/P1N5/1PQ1PPPP/R1B1KBNR b KQ - 0 5|c7c5 a3b4|1370|winningMaterial,oneMove|
4bjd3i|rnbqkb1r/1pp2ppp/p3pn2/4P3/2pP4/2N2N2/PP3PPP/R1BQKB1R b KQkq - 0 6|b7b5 e5f6|1370|winningMaterial,oneMove|
jam22z|Q7/4n1k1/2bp1pP1/8/3B4/8/6BP/1q3N1K w - - 1 37|a8c6 e7c6|1370|winningMaterial,endgame,oneMove|
1gqnmje|r1b1kb1r/3n1pp1/pq2pn1p/1ppP2P1/4P3/P1NQ1N1P/1P3P2/R1B1KB1R b KQkq - 0 13|f6d5 e4d5|1375|winningMaterial,oneMove|
wrwbkp|3r1kr1/4bp1p/p2q1n2/2p2N2/4Pn2/P1Rp1P2/1B1P1P2/2Q1KB1R b K - 1 25|f4g2 f1g2|1375|winningMaterial,oneMove|
40oe9j|r3rqk1/5pp1/1p5p/pPn5/3NnP2/P1Q4P/B4P2/2RR2K1 w - - 3 26|d4c6 e4c3|1375|winningMaterial,fork,oneMove|
1hajyox|r3r1k1/ppp2ppp/6q1/3P1n2/B2n1Qb1/P1N1B3/1P3PPP/R4RK1 b - - 1 16|c7c6 e3d4|1375|winningMaterial,oneMove|
1n6t0t8|r3kbnr/pp1b1ppp/2n5/2Ppp3/5B2/1PP1P3/1P3PPP/RN2KBNR w KQkq - 0 8|b3b4 e5f4|1375|winningMaterial,oneMove|
983wrz|6k1/1p3p2/2p1p2p/p1b3p1/P1n5/1PB3PP/2B2PK1/8 b - - 0 35|c4e3 f2e3|1375|winningMaterial,oneMove|
1s98vq|2kn2rr/3bR3/pp2pbBp/3p3P/P1pP1B2/2P5/1PN3P1/R5K1 w - - 10 29|e7f7 d8f7|1375|winningMaterial,oneMove|
1p45b9z|r1bqk1nr/pppp1ppp/2n5/3P4/1b6/8/PP1BPPPP/RN1QKBNR b KQkq - 0 5|g8f6 d5c6|1375|winningMaterial,oneMove|
9us2te|5k2/r5p1/1bp1p3/1p2P1qp/1P2P1PN/4P2P/2Q1K3/6R1 w - - 0 32|h4f5 e6f5|1375|winningMaterial,oneMove|
jjexb8|8/p2k4/4r2p/6p1/P7/1P2R2P/K1Pn2P1/8 w - - 5 64|e3f3 d2f3|1375|winningMaterial,endgame,oneMove|
1gqgbsi|r3r1k1/pqbn1ppp/1pN1pn2/8/P1N5/BP6/2P2PP1/R2Q1R1K w - - 5 22|c4a5 b6a5|1375|winningMaterial,oneMove|
1y4fr3k|r3nrk1/5pb1/3pqnp1/pp2P3/8/1P4BP/PNQ2PB1/3R1RK1 b - - 0 25|d6d5 e5f6|1375|winningMaterial,oneMove|
1yrf7w9|rnbqkbnr/ppp2ppp/8/8/2pp4/2N1P3/PP3PPP/R1BQKBNR w KQkq - 0 5|f1c4 d4c3|1375|winningMaterial,oneMove|
uivoz3|2k1r3/1p6/1P5p/2pr4/4nR2/P7/1B5P/4R1K1 b - - 1 37|e8e6 f4e4|1375|winningMaterial,oneMove|
k5sryw|2r1k2r/1N2p2p/p1b2pp1/2nR4/7P/8/PP3PP1/2R3K1 w k - 2 27|b7d6 e7d6|1380|winningMaterial,oneMove|
1u3cmx9|r2rq1k1/p1p2pb1/2b2npp/1p2p3/2Q1P3/P1N2N2/1PPB1PPP/R3R1K1 w - - 0 16|c3b5 c6b5|1380|winningMaterial,oneMove|
9ooni6|r5k1/5p2/q1b3p1/7P/1Q6/NPPnP3/PK1R4/R7 w - - 1 40|b2b1 d3b4|1380|winningMaterial,oneMove|
7c0kub|5rk1/1pq2pbp/p3p1p1/2p2n2/4NP2/2PrB1PP/RP2Q1B1/3K3R w - - 0 23|d1c2 d3e3|1380|winningMaterial,oneMove|
196kjpa|2rqk2r/pQBnbppp/4pn2/1N1p1b2/2Pp4/4P3/PP3PPP/2R1KBNR b Kk - 1 10|f6e4 c7d8|1380|winningMaterial,oneMove|
2c74w9|7r/8/p1k2p1P/1pbNp3/5r2/7R/P5P1/3R3K b - - 6 49|a6a5 d5f4|1380|winningMaterial,oneMove|
1p3s1p9|7k/7p/pQ2BP2/2pP1P2/3q3P/P7/K5b1/8 b - - 16 45|d4d5 e6d5|1380|winningMaterial,endgame,oneMove|
njxjfa|r2q1rk1/5p2/p1N3pb/7p/8/P3p3/1P1Q1PPP/2R2RK1 w - - 0 25|d2e3 h6e3|1380|winningMaterial,oneMove|
1gkmm01|3r3r/pkp3pp/1b2p3/8/1P1p1P2/P3B3/2P2P1P/2KR3R w - - 0 20|c2c4 d4e3|1380|winningMaterial,oneMove|
10vcasf|8/8/7p/1b2kp1P/1R4pK/4r3/5PP1/8 b - - 3 57|e3h3 g2h3|1380|winningMaterial,endgame,oneMove|
c8hxh7|r1b1k1nr/1p2bp2/p1n1p3/2pp4/Q1P5/N2P1NPp/Pq1B1PBP/R4RK1 w kq - 0 16|a3b5 h3g2|1380|winningMaterial,oneMove|
srfaiy|8/2p5/3q4/6k1/3Q1n2/8/3K4/2N5 w - - 10 53|d4d3 f4d3|1380|winningMaterial,endgame,oneMove|
1v82zz4|2b1r1k1/5pp1/p1P2n2/8/1r5p/6N1/3RNPP1/2R3K1 w - - 0 30|c6c7 h4g3|1380|winningMaterial,oneMove|
1l2c4ke|r1b5/pp4k1/4pqpN/7Q/2p5/P3P2P/5PP1/3R2K1 w - - 1 25|h6f5 e6f5|1380|winningMaterial,oneMove|
i2i9zm|8/6k1/3rp3/3n1p2/8/5pP1/1R2B1K1/8 w - - 0 46|g2f2 f3e2|1385|winningMaterial,endgame,oneMove|
1cxdx07|3kbb1r/1p3pp1/p1n1pn1p/1N6/2B5/PP2BN2/2P2PPP/R5K1 w - - 0 16|b3b4 a6b5|1385|winningMaterial,oneMove|
1637wuc|3qk2r/2pb1pbp/rpQ1pnp1/8/2Pp4/P2P1NP1/1P2PPBP/R1B1K2R w KQk - 1 14|c6b5 d7b5|1385|winningMaterial,oneMove|
11grrz3|r3kb1r/pp1nnppp/2p5/3qp3/3P1B2/P3Q1NP/1PP1BPP1/R3K2R w KQkq - 1 15|e1g1 e5f4|1385|winningMaterial,fork,oneMove|
1bpcg2q|4r2k/6p1/1p1ppr1p/p7/P1qP1p1P/2P1R3/1PQ1RPP1/6K1 w - - 0 27|g2g4 f4e3|1385|winningMaterial,oneMove|
1ixfudi|rnb1kb1r/ppp2ppp/7n/8/3PpB2/2P2N2/PP4PP/RN2KB1R w KQkq - 0 9|f4c7 e4f3|1385|winningMaterial,oneMove|
uz86an|8/5qk1/6p1/8/2n1P3/5P2/3rQ1PP/4bR1K w - - 6 46|f1e1 d2e2|1385|winningMaterial,endgame,oneMove|
8vsxyh|rn2kb1r/ppq1pppp/5n2/2pp4/6b1/P1P2NPP/1P1PPPB1/RNBQK2R b KQkq - 0 6|e7e5 h3g4|1385|winningMaterial,oneMove|
1qhhb4g|1r3k2/p4p1p/3Rp3/4P1R1/8/Pp1B1b2/4N2r/1K6 w - - 1 26|g5g3 f3e2|1385|winningMaterial,oneMove|
h3guf0|2k3r1/ppn3pp/2pnrp2/3pB2P/P2P4/2PPN3/3K1PP1/6RR w - - 0 24|h5h6 f6e5|1385|winningMaterial,oneMove|
vkessw|5rk1/pp4b1/2q2p1p/3pp3/3P2pP/1QP2NP1/PP2R1P1/6K1 w - - 0 26|f3e5 f6e5|1385|winningMaterial,oneMove|
b4vr7g|8/1pk2p2/2p5/p3p2P/P2rP1pK/1P1rB3/3b1P2/1R3R2 b - - 2 31|d3e3 f2e3|1385|winningMaterial,oneMove|
84b5uu|2r5/3bnpk1/1p2p1p1/3p3p/1N2P2P/2NP1P2/P1K3P1/1R6 w - - 1 34|b4d5 e6d5|1385|winningMaterial,oneMove|
9ii6ml|8/6k1/p1PR3p/P3K3/1r1n4/8/8/8 b - - 4 54|g7f7 d6d4|1385|winningMaterial,endgame,oneMove|
1nj4lsr|rnq1k2r/p1p1p1bp/bp4p1/5p2/3P4/1NP2pP1/PP2P1BP/R1BQ1RK1 w kq - 0 12|f1f2 f3g2|1385|winningMaterial,oneMove|
1ao3i8m|3rk2r/pp2bppp/1qn1p2n/3pP3/NP6/P7/1B3PPP/R2QKB1R b KQk - 3 15|b6b4 a3b4|1390|winningMaterial,oneMove|
ttq4te|r5k1/1p3pb1/3p2q1/2p5/b1PpPPB1/3P2P1/7N/2RQ2K1 w - - 0 29|c1a1 a4d1|1390|winningMaterial,oneMove|
q7gg9m|r1bq1r1k/1ppp2pp/1bn5/pBn1Pp2/5B2/1QP2N2/PP1N1PPP/R4RK1 w - - 4 12|f4g5 c5b3|1390|winningMaterial,oneMove|
8dtu4r|r5nr/1ppk4/p3q1Qb/4p1pp/1P2P2p/P1NP4/5PP1/R1B2RK1 w - - 1 23|g6g5 h6g5|1390|winningMaterial,oneMove|
1k8l31y|1rb1k2r/3pp1bp/1qp3pn/5p2/1n6/1QN1PN2/3PBPPP/1RB1K2R w Kk - 0 13|f3d4 g7d4|1390|winningMaterial,oneMove|
d3tkl2|r1bqkb1r/ppp1pppp/5n2/8/3nN3/5N2/PPP1QPPP/R1B1KB1R w KQkq - 0 7|c1e3 d4e2|1390|winningMaterial,oneMove|
z9jfnx|k2r4/p3qn2/2p1Np2/p6p/4P1pP/P5B1/QPP1n1P1/1KR5 b - - 2 34|d8d6 g3d6|1390|winningMaterial,oneMove|
4sfdak|8/1rRbkpp1/p2np3/4N2p/8/4P2P/4BPPK/8 w - - 2 30|c7c6 d7c6|1390|winningMaterial,oneMove|
z7h3mb|5rk1/p1q3p1/1p2p3/3p4/1QrP3p/P3P2P/5PP1/2R1R1K1 w - - 0 25|c1b1 c4b4|1390|winningMaterial,oneMove|
tr8e7b|r1bqkb1r/pp1p1pp1/4pn2/2p1P2p/3n4/PPN2N2/2PPBPPP/R1BQK2R b KQkq - 0 7|b7b6 e5f6|1390|winningMaterial,oneMove|
1q4j1ro|r3kb1r/1p2qppp/p7/P1np4/3p2b1/3B1N1P/1PPB1PP1/R2Q1K1R b kq - 0 13|h7h5 h3g4|1390|winningMaterial,oneMove|
4xv9uj|2r4r/1p1b1p1k/p3p1pp/4q3/8/1Pn4P/PB2NPP1/1R1Q1BK1 b - - 1 27|d7e8 e2c3|1390|winningMaterial,oneMove|
117ei1z|5r1k/3B3p/4P3/2b5/p1r2P2/4N1P1/6KP/4R3 b - - 2 44|c4f4 g3f4|1390|winningMaterial,endgame,oneMove|
1v4ltz1|1k6/1p6/pq6/3P1p2/8/7P/1Pn5/3RRB1K w - - 1 45|f1g2 c2e1|1390|winningMaterial,endgame,oneMove|
uxn8uz|1q2k2r/3rbpp1/pp2pn1p/1N2p3/QPn5/5NB1/P4PPP/R1R3K1 w k - 0 21|a1b1 a6b5|1395|winningMaterial,oneMove|
1ga6vdk|r3k3/8/p1pRp1r1/1p2n3/1Q2P1pN/1P3qPp/P1P2P2/5RK1 b q - 1 29|f3g2 h4g2|1395|winningMaterial,oneMove|
xub9tp|3n2k1/pBn5/P3pp1b/2p5/2N5/2P3p1/1P3P1B/6K1 w - - 0 35|g1h1 g3h2|1395|winningMaterial,oneMove|
mj9nvb|3rb1k1/1p3ppp/2qr4/p1pP4/P1Qn2BP/4N1P1/1P3P2/2R2RK1 b - - 0 25|c6d5 e3d5|1395|winningMaterial,oneMove|
cximkj|r1b1k2r/1p2bp2/pqn1pn1p/3p2p1/P2P1B2/5N1P/NPP1BPP1/1R1Q1RK1 w kq - 0 13|d1c1 g5f4|1395|winningMaterial,oneMove|
4xmmq7|6k1/5p2/2r3pp/1RN5/3P4/2n5/P4PP1/6K1 w - - 0 30|a2a4 c3b5|1395|winningMaterial,endgame,oneMove|
bm6fvr|r3k2r/pb2b1p1/1pn1p2p/2pnqp2/4NP2/P2P2PP/1PP3BN/1RBQK2R b Kkq - 0 15|d5f4 c1f4|1395|winningMaterial,oneMove|
4m21m5|8/6p1/4pk1p/p2r3P/P4RP1/4K3/8/8 b - - 3 47|d5f5 g4f5|1395|winningMaterial,endgame,oneMove|
1tfl5vf|1r4k1/1p2ppbp/pR1p2p1/8/P1N5/1Nn2R1P/bqr1B1P1/3Q2BK w - - 12 27|d1e1 c2e2|1395|winningMaterial,oneMove|
1ous65e|r2r2k1/ppq2p1p/b5p1/3QN3/P7/2P1R3/5PPP/3R2K1 w - - 3 21|d1d4 d8d5|1395|winningMaterial,oneMove|
1rvct5b|5rk1/1pRNppb1/p2p1n2/3P3p/1P2P1p1/8/2N2PPP/5K2 b - - 0 25|a6a5 d7f8|1395|winningMaterial,oneMove|
c7c09s|4k2r/2q2pp1/rpp4p/p3p2n/P3P3/R1P2PQ1/1P4PP/2B1K2R w Kk - 2 18|a3b3 h5g3|1395|winningMaterial,oneMove|
v0j563|2k5/1p6/p2n2rp/4Np2/5R1P/P1P5/2P5/2K5 b - - 1 41|g6g5 h4g5|1395|winningMaterial,oneMove|
z05u4q|r1bqkbnr/pp4pp/2np4/2p1pp2/5N2/2NP4/PPPBPPPP/R2QKB1R w KQkq - 0 6|g2g4 e5f4|1395|winningMaterial,oneMove|
1glrmc|8/8/1P6/3k4/3pR1P1/5p2/r4P1P/5K2 w - - 1 50|e4e3 d4e3|1400|winningMaterial,endgame,oneMove|
17fkrur|6k1/3n1pp1/7p/5q2/1P6/3RPP1P/3rBP2/5Q1K b - - 2 30|f5d3 e2d3|1400|winningMaterial,oneMove|
1u7urni|r3r1k1/p2bqp2/6p1/1p1P3p/2pR1Q2/P1P2NP1/1PB2nP1/2K4R w - - 0 25|h1d1 f2d1|1400|winningMaterial,oneMove|
tompj0|r2qkb1r/1p1bpp1p/pnnp2p1/1B2P3/3P4/5N1P/PP2QPP1/RNB1K2R w KQkq - 0 11|e5d6 a6b5|1400|winningMaterial,oneMove|
k53z0|4R3/2k2p2/8/1P1pn3/4n1p1/4P1P1/5PK1/8 b - - 13 52|e5c6 b5c6|1400|winningMaterial,endgame,oneMove|
bgxcdm|r2q1rk1/pb2bp2/1nn3p1/1ppBP1Np/7Q/P4P1N/1P4PP/R1B2RK1 w - - 1 19|f1d1 b6d5|1400|winningMaterial,oneMove|
4gq1wh|r4rk1/pbp1nppp/1p1b4/3P3q/P4P2/2P5/BP3BPP/RN1Q1RK1 b - - 0 15|h5d5 a2d5|1400|winningMaterial,oneMove|
1is1rur|1rbqk2r/1pp2ppp/p2p1b2/3P4/1P1Q4/P7/1BP2PPP/R3KB1R w KQk - 3 12|d4f6 g7f6|1400|winningMaterial,oneMove|
12viqzk|5rk1/1p4pp/1p4b1/1p6/1P2p3/P1P1N3/q1Q3PP/4R1K1 b - - 7 24|a2c4 e3c4|1400|winningMaterial,oneMove|
1uv30dp|r5qk/p1pb2pp/1bpp2n1/5r2/6Q1/2P2NNP/PP2RPP1/R1B3K1 b - - 3 18|g8f8 g3f5|1400|winningMaterial,oneMove|
1nkhk5|r1b1kb1r/1p3pp1/2p1pn2/p2qN2p/2P5/P5N1/1P1PQPPP/R1B1K2R b KQkq - 0 14|h5h4 c4d5|1400|winningMaterial,oneMove|
c6947d|r3k2r/pp1nbppp/2p1p3/q5P1/P2P4/2BB1Q2/1PP2P1P/R3K2R b KQkq - 0 14|d7e5 d4e5|1400|winningMaterial,oneMove|
1xob766|8/8/8/3pRn1P/p2P1k2/4r3/P2K4/8 b - - 3 46|f5g3 e5e3|1400|winningMaterial,endgame,oneMove|
1qua369|2r3k1/p2n1pp1/Pp1r4/3p3p/1P5P/2P2N2/2b1NPP1/3RK2R w - - 2 26|e1d2 c2d1|1400|winningMaterial,oneMove|
v92hpw|8/8/8/4p3/4R3/1k2Pp1P/5Pr1/5K2 w - - 1 62|e4f4 e5f4|1405|winningMaterial,endgame,oneMove|
1n0bssx|8/2b5/1rk3p1/p2pR2p/P2P3P/2PK2P1/3B4/8 w - - 1 30|g3g4 c7e5|1405|winningMaterial,oneMove|
18pptcb|2r3k1/ppp2pNr/3p4/3P3p/5P1n/1P5P/PBP3P1/4R1K1 w - - 0 23|g1f2 h7g7|1405|winningMaterial,oneMove|
5r40eb|r1bqk2r/pppp1ppp/2n5/8/1b2PB2/4Q3/PPP2PPP/RN2KB1R w KQkq - 5 8|e3d2 b4d2|1405|winningMaterial,fork,oneMove|
10f0ya8|6k1/3n1pp1/1q5p/p4P2/R3PB2/1P1p4/2r2RPP/1Q4K1 w - - 3 29|f4d2 c2d2|1405|winningMaterial,oneMove|
1qntamc|r1b1k2r/1p3pbp/p1n2np1/q2pp3/P1pP1B2/2P1P2P/1P1N1PP1/R1QBK1NR w KQkq - 0 14|g1e2 e5f4|1405|winningMaterial,oneMove|
s0kkz8|2r1k2r/4bpp1/q3p2p/p2nN3/P1pPPB1P/8/5PP1/R1QR2K1 b k - 0 21|c4c3 e4d5|1405|winningMaterial,oneMove|
1eprg8i|r1bq1k1r/pp1n1p1p/2pb1np1/P2pP3/8/1NP1P3/1P2BPPP/RNBQK2R b KQ - 0 10|f6e4 e5d6|1405|winningMaterial,oneMove|
lkm881|4k1r1/1pqnbp1p/p1rNp3/4P1p1/3R2P1/2N5/PP2QP1P/5RK1 b - - 2 20|c6d6 e5d6|1405|winningMaterial,fork,oneMove|
11wcn99|2krr3/1p1q4/1P5p/2pP2p1/4npQ1/P5P1/1B5P/2R2RK1 w - - 2 34|f1f4 g5f4|1405|winningMaterial,oneMove|
1k399no|r3r1k1/nB1qppbp/1p1p2p1/pN6/2PP3B/1P6/P2Q1PPP/R4RK1 b - - 0 19|a7b5 b7a8|1405|winningMaterial,oneMove|
cup8fp|r1bqk1nr/4bppp/p1n1p3/1p1P4/3p4/P2B1N1P/1PPN1PP1/1RBQK2R b Kkq - 0 9|c8b7 d5c6|1405|winningMaterial,oneMove|
1d6edom|1rq2r1k/6p1/p1nRp2p/1b2Pp2/pPpQ4/2P2BP1/5PP1/R4NK1 w - - 8 32|d6c6 b5c6|1405|winningMaterial,oneMove|
xaqbnr|r3kb1r/pp1bnppp/n3p3/qB2P1B1/8/N4N2/PP3PPP/R2QK2R w KQkq - 7 12|f3d2 d7b5|1405|winningMaterial,oneMove|
1kry9hv|8/8/8/8/2q5/7P/1pk1K3/6RR w - - 20 78|e2e1 b2b1q|1410|winningMaterial,promotion,endgame,oneMove|
ncjg2p|8/5k1p/6p1/4p3/1rp5/3n4/2R3PP/1R4K1 w - - 0 43|b1c1 d3c1|1410|winningMaterial,endgame,oneMove|
qff8o7|1r2r3/2p2pkp/5p2/pq1Rn3/8/2P3PP/BPQ5/2K4R b - - 5 26|c7c6 d5b5|1410|winningMaterial,oneMove|
kzemy9|r7/3nk3/2Rp3p/3P2p1/pp1PP3/1B6/PP4KP/8 w - - 0 31|h2h3 a4b3|1410|winningMaterial,oneMove|
17bpiwd|5rk1/1R1pnpbp/p5p1/8/2Pn1B2/P1q1P1PP/5P2/3Q1RK1 b - - 0 20|c3c4 e3d4|1410|winningMaterial,oneMove|
dlx47h|r2b1rk1/3n4/p2p2p1/1ppP1p2/P3NPpP/2PP4/1P1BR1K1/4R3 w - - 0 29|c3c4 f5e4|1410|winningMaterial,oneMove|
yyezyq|r1bqkbnr/1pppp2p/p5p1/P2Pnp2/5P2/8/1PP1P1PP/RNBQKBNR b KQkq - 0 6|d7d6 f4e5|1410|winningMaterial,oneMove|
1m0gets|r3r1k1/1b3ppp/pp2q2N/2np4/5B2/3R1PQ1/PPP3PP/2KR4 b - - 6 25|e6h6 f4h6|1410|winningMaterial,oneMove|
3x0vg1|r3k2r/ppq2pbp/n1p2np1/4p3/P1N1P1b1/N5P1/1PP2PBP/R1BQK2R w KQkq - 2 11|a3b5 c6b5|1410|winningMaterial,oneMove|
19xfi5h|r3k2r/2p1b1p1/p2q1p2/3P1b1p/Pp6/1BQ3P1/1PPN1PP1/R3R1K1 w kq - 0 18|c3d3 f5d3|1410|winningMaterial,oneMove|
1ahhnh3|8/4r2p/2R1n1p1/2P2P2/3p1k1P/3P4/5N1K/8 b - - 0 47|e6g5 h4g5|1410|winningMaterial,endgame,oneMove|
14avy1h|r5k1/2q4p/1N2b1p1/p7/1p1NQ1n1/P2B4/1PP2rP1/R5K1 w - - 0 24|e4g6 h7g6|1410|winningMaterial,oneMove|
1mj3dru|rn2kb1r/1p3pp1/p1p1pn2/2Pp3p/3P1B1P/1PNbP3/1P3PP1/R3KB1R w KQ - 0 13|c3a4 d3f1|1410|winningMaterial,oneMove|
ksbr37|r1b1kbnr/1p2pppp/p1n5/1B1p4/3P1B2/8/PPPK1PPP/RN4NR w kq - 0 8|b1c3 a6b5|1410|winningMaterial,oneMove|
19d3nci|r4rk1/p3b1pp/2p1pp1n/3pPb2/3P3q/PP4BP/4NPP1/RN1QK2R b KQ - 3 13|f6e5 g3h4|1415|winningMaterial,oneMove|
108fxlq|8/8/1p1R4/p3npk1/5r1p/PP5P/4B1P1/6K1 b - - 1 57|e5g4 h3g4|1415|winningMaterial,oneMove|
1pqf0vv|5b1k/R5p1/r3pB1p/2n4N/1p3P2/4PK2/6PP/8 w - - 1 38|a7g7 f8g7|1415|winningMaterial,oneMove|
za6ov6|1R4k1/6P1/r7/1b6/pp1P1P2/4K3/8/8 b - - 1 54|g8h7 g7g8q|1415|winningMaterial,promotion,endgame,oneMove|
qqmu9o|r3k2r/pp2nppp/2pq3n/1B1Pp3/8/2P1PP2/P4P1P/R1BQK2R w KQkq - 0 13|d1b3 c6b5|1415|winningMaterial,oneMove|
13ufcy7|1rbqk2r/2ppn1b1/p1n4p/4ppBp/2P5/2NP2P1/P3PPBN/R2QK2R w KQk - 0 13|d1c1 h6g5|1415|winningMaterial,oneMove|
lkb7bi|8/8/5kp1/6Rp/5P1P/6PK/5r2/8 w - - 11 70|g5g4 h5g4|1415|winningMaterial,endgame,oneMove|
1svgjab|1nbq1rk1/r3b1pp/p6n/1pP2p2/4B3/P2N4/NPPPQPPP/R1B1K2R w KQ - 0 14|a2b4 f5e4|1415|winningMaterial,oneMove|
1paf61e|Q2rr3/1pp1kppp/p1q3b1/4n3/4nB2/P1N3P1/1PP3BP/2KR3R w - - 4 21|a8d8 e8d8|1415|winningMaterial,oneMove|
o88w1v|8/1p3ppk/7p/P6P/8/2R2b2/2p4P/7K w - - 0 45|c3f3 c2c1q|1415|winningMaterial,promotion,endgame,oneMove|
jvkawf|8/1R6/3p2rk/2p2P1p/8/2n3BK/7P/8 b - - 0 47|c3e2 f5g6|1415|winningMaterial,endgame,oneMove|
qzbfld|r1b1k1r1/3nqp1p/p1pp3P/1p2p1p1/Q2PP3/2P5/PP1NBPP1/2R2RK1 w q - 0 20|e2b5 c6b5|1415|winningMaterial,oneMove|
1t3mjau|7k/1pp4p/2n3p1/6R1/4KN1N/P2BP2P/2r5/r7 b - - 11 34|a1a2 d3c2|1415|winningMaterial,oneMove|
1x32kzw|8/8/1kn1Q3/1p2p3/3p1p2/8/4q3/2R4K b - - 5 63|e2c4 c1c4|1415|winningMaterial,endgame,oneMove|
st77qj|rn1qkb1r/pp2pppp/2p2n2/3pP3/3P2b1/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 0 5|e7e6 e5f6|1415|winningMaterial,oneMove|
140qezs|rnbqk1nr/pppp2pp/4p3/5p2/1b2P3/3P1N2/PPP2PPP/RNBQKB1R w KQkq - 1 4|d1d2 b4d2|1420|winningMaterial,fork,oneMove|
1fm0np4|8/8/7n/2p1k3/6P1/5PK1/4N3/8 b - - 4 51|h6f5 g4f5|1420|winningMaterial,endgame,oneMove|
1bcer7k|4K3/6P1/5k2/8/8/8/8/8 b - - 0 72|f6g5 g7g8q|1420|winningMaterial,promotion,endgame,oneMove|
q3vcvz|8/1p1r1N2/p6p/5kbR/8/P7/1P1r4/1K2R3 w - - 0 35|h5g5 h6g5|1420|winningMaterial,endgame,oneMove|
14u54va|rnbqk2r/ppp1bppp/4pn2/3pP1B1/3P4/2N5/PPP2PPP/R2QKBNR b KQkq - 0 5|c7c5 e5f6|1420|winningMaterial,oneMove|
1u9ruzq|5rk1/n1R2ppp/p3p3/3p4/Pb1P1B1P/4P3/4KPP1/1r1B3R b - - 6 25|a7b5 a4b5|1420|winningMaterial,oneMove|
1hfl9vk|r2qkb1r/3bpppp/3p1n2/1p6/3QP3/2N3PP/1PP2P2/R1B1KB1R w KQkq - 0 11|d4a7 a8a7|1420|winningMaterial,oneMove|
1pc1aum|8/6k1/1p2qpn1/p6B/5r1p/P6P/1P3QP1/3R2K1 w - - 5 46|b2b4 f4f2|1420|winningMaterial,oneMove|
7qubhr|r2q1rk1/p4pp1/4pnb1/1p2P2p/2p1P2P/2P1BP2/4BKP1/RQ5R b - - 0 16|f6g4 f3g4|1420|winningMaterial,oneMove|
ja3iel|r1bqk2r/1p2ppbp/n2p1np1/p1pP4/3B4/P1N2N1P/1PP1PPP1/R2QKB1R w KQkq - 0 9|e2e4 c5d4|1420|winningMaterial,oneMove|
c8vomv|2kr4/ppprnR2/7p/3N2p1/4P3/4P2P/PP2K1P1/R7 b - - 0 22|d7d5 e4d5|1420|winningMaterial,oneMove|
9r2y2n|8/p6k/8/P6p/5p1B/2R1pK1P/8/5r2 w - - 4 54|h4f2 f1f2|1420|winningMaterial,endgame,oneMove|
g82ldi|6r1/1k3p2/p1b4r/2p1N3/1pP1Pb2/nP1R2N1/6PB/3R2K1 w - - 3 37|d3d7 c6d7|1420|winningMaterial,oneMove|
1tx1yix|5r2/1p1b3p/1ppk1r2/3p1pP1/P7/1P5P/2PKNR2/6R1 b - - 0 30|f5f4 g5f6|1420|winningMaterial,oneMove|
8nfw37|3q1rk1/5p1p/1p2pp2/rQ1p4/2PP4/4PK1P/5PP1/2R2R2 w - - 2 23|c1c2 a5b5|1425|winningMaterial,oneMove|
12go25r|3n3N/ppr1bp1p/4bnpk/3P4/2P2p2/8/PPBN1PP1/R3R1K1 b - - 0 27|e7b4 d5e6|1425|winningMaterial,oneMove|
i1ayki|2kr3r/pp1qb3/2p1p3/2P1P1p1/4Q1P1/4N3/PP5P/R2R2K1 b - - 0 27|e7c5 d1d7|1425|winningMaterial,oneMove|
1297jyx|r1b2rk1/1p3pp1/p1p1pn1p/q2pn3/2PP4/PPB3PB/4PP1P/2RQ1RK1 b - - 0 14|e5c4 c3a5|1425|winningMaterial,oneMove|
4r52tm|r3kb1r/p3qppp/bnpp4/6B1/2P5/1P4P1/P3QP1P/RN2KB1R b KQkq - 1 12|d6d5 g5e7|1425|winningMaterial,oneMove|
17kn6lb|r2qkb1r/1p1bp2p/n2p1np1/p1pP4/2PB4/2N2N2/PP2PPB1/R2QK1R1 w Qkq c6 0 13|g1h1 c5d4|1425|winningMaterial,oneMove|
1426ayv|r1bq1rk1/2nnpp1p/2p3p1/pp2P3/N1P5/1Q2B2P/PP3PP1/R3RBK1 w - - 0 20|e3h6 b5a4|1425|winningMaterial,oneMove|
9nyfuw|4k3/1p1r4/p4P2/4P1r1/P6p/4K3/6PP/5B1R w - - 0 34|f1b5 a6b5|1425|winningMaterial,oneMove|
84vmcd|r1b1r2k/1p3pp1/1qn2n1p/p2pP3/8/2P2NP1/PPB2PPN/RQ3RK1 b - - 0 16|e8e5 f3e5|1425|winningMaterial,oneMove|
p7ov4k|1r2r1k1/ppp2pp1/3pq2p/1P3P2/P2PP3/2N1B1Pb/3Q1KnP/R3R3 b - - 0 22|e6e4 c3e4|1425|winningMaterial,oneMove|
othn12|2r5/6p1/4k1P1/R3p3/3b1p2/P4K2/1r1BRPP1/8 w - - 3 41|d2f4 b2e2|1425|winningMaterial,oneMove|
uks26f|r1bqk1nr/pp2ppbp/6p1/n1p5/2B1P3/1QP2N2/PP3PPP/RNB1K2R w KQkq - 2 8|f3g5 a5b3|1425|winningMaterial,fork,oneMove|
1w13wen|8/8/4k3/P7/2pK4/3p4/2rR4/8 w - - 4 62|d2d3 c4d3|1425|winningMaterial,endgame,oneMove|
vof1wo|7r/4bkp1/p1r1pn1p/8/1p6/2N5/PP1BRPPP/R4K2 w - - 0 23|a2a4 b4c3|1425|winningMaterial,oneMove|
r42gz5|r3r1k1/ppp1nppp/4b1q1/2Bp4/4P2Q/2P5/PP1N1PPP/R4R1K b - - 4 18|d5e4 c5e7|1430|winningMaterial,oneMove|
1nwjdc3|4r1k1/p2n3p/1pq1p3/2p1QpP1/2PP1P2/P2N4/3KR3/8 w - - 3 37|e5f6 d7f6|1430|winningMaterial,oneMove|
1jwpccz|2kr3r/1p1n1pbp/2p1bnp1/p7/PqPp4/3B1NNP/1Q3PP1/1RB2RK1 w - - 0 19|b2b4 a5b4|1430|winningMaterial,oneMove|
17l96cm|r1bqkbnr/2p2ppp/p1np4/1p2p3/B3P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 0 6|d2d4 b5a4|1430|winningMaterial,oneMove|
1m09sox|r2qkbnr/p4ppp/2p5/3p4/3p4/P1N2Q2/1PP2PPP/R1B1K2R w KQkq - 0 10|f3g3 d4c3|1430|winningMaterial,oneMove|
1ylfw9f|4r1k1/p4p2/2q2pp1/7p/pPPR4/P6P/5PP1/4Q1K1 w - - 3 30|e1e3 e8e3|1430|winningMaterial,oneMove|
jz2pif|r5k1/5p2/bq2p1p1/1p1pP1Pp/7N/Q4N2/2r2R1P/1R3BK1 w - - 1 31|f1e2 c2e2|1430|winningMaterial,oneMove|
12esdsd|r4k2/p4p2/1n1p2p1/1p1p3p/1P5P/2n2N2/R1P2PP1/5RK1 w - - 0 25|f1a1 c3a2|1430|winningMaterial,oneMove|
ldhdgb|rnb2rk1/1p3pp1/7p/p5q1/4P2P/R2P2P1/3NBP2/Q3K2R b K - 0 20|g5g4 e2g4|1430|winningMaterial,oneMove|
1ukxdpk|6k1/5p2/4p1pp/8/3b1P2/1q6/2R4P/RKQ5 w - - 4 39|c1b2 d4b2|1430|winningMaterial,endgame,oneMove|
1ojuz8h|r1b3r1/1pp2k2/5p1p/p1p5/P2NR3/1PP2P2/6PP/R5K1 w - - 0 24|a1e1 c5d4|1430|winningMaterial,oneMove|
1yqtg1y|r1bq1rk1/7p/1p1n2p1/p2pnp1Q/3NpP2/P1P1P2P/1P1NB1P1/R4RK1 w - - 0 18|f4e5 g6h5|1430|winningMaterial,oneMove|
1phhjdj|r1b1k1nr/1pq1bp2/p1n1p2p/2ppP3/2P3p1/N2P1NP1/PP1B1PBP/R2Q1RK1 w kq - 0 11|a1b1 g4f3|1430|winningMaterial,oneMove|
1clfqlx|r3k2r/pp2ppb1/2n4p/3n2p1/P2P4/4BNP1/1q1NPP1P/1R1QK2R b Kkq - 3 13|b2b4 b1b4|1430|winningMaterial,oneMove|
12b0m28|r4rk1/1Q2bppp/p7/1b6/5q1P/P1B2B2/1P3PP1/R3K2R w KQ - 1 20|b7a8 f8a8|1435|winningMaterial,oneMove|
1kuoptg|rnbqkb1r/2p1nppp/1p2p3/pP6/3Pp3/2P2N2/P3QPPP/RNB1KB1R w KQkq - 0 8|b1d2 e4f3|1435|winningMaterial,oneMove|
18sgy28|rnbqkb1r/pppppp2/5n1p/3P4/P5p1/2N2N2/1PP1PPPP/R1BQKB1R w KQkq - 0 7|g2g3 g4f3|1435|winningMaterial,oneMove|
183s5jq|2k3r1/p4p1p/2p5/r2q1b2/3p4/2N3P1/PPP1QP1P/2KR3R b - - 5 22|d4c3 d1d5|1435|winningMaterial,fork,oneMove|
rz0l1w|4q2k/1pp2rpp/3Q4/5P2/p2PP1R1/P5N1/1r6/2R3K1 w - - 1 37|d6c7 f7c7|1435|winningMaterial,oneMove|
1up1kn1|1k1r4/1p6/1b3p2/pr4p1/1n1P3p/P3P3/3N1P2/RBR2K2 b - - 0 32|f6f5 a3b4|1435|winningMaterial,oneMove|
1paedbe|4R3/2b2ppp/5k2/1B1b4/3Pn3/4PP1P/1P2K1P1/4B2r b - - 0 27|h1g1 f3e4|1435|winningMaterial,oneMove|
1osjma1|1k6/pp3rp1/2p4p/2P2B1P/1P4P1/P3K3/2b5/7R b - - 2 32|f7f5 g4f5|1435|winningMaterial,oneMove|
1ytpbh8|r2qk2r/p4ppp/2p2n2/b2p4/Q7/2N5/1P3PPP/R1B2RK1 b kq - 1 17|e8g8 a4a5|1435|winningMaterial,oneMove|
1t9wvc2|r1b1k2r/ppppnpp1/2n2q2/2b4p/1P1NP3/2P1B1P1/P4P1P/RN1QKB1R b KQkq - 0 8|d7d6 b4c5|1435|winningMaterial,oneMove|
1g3tmxx|r2qkbnr/pppb1ppp/2np4/1B6/3pP3/2N2N2/PPP2PPP/R1BQK2R w KQkq - 0 6|e1g1 d4c3|1435|winningMaterial,oneMove|
1jzyn0n|2r1r3/4Pkpp/3B1p2/1p3q2/nP1R2P1/P6P/2p1Q3/2R3K1 b - - 0 31|f5e5 d6e5|1435|winningMaterial,oneMove|
1f2gv6c|8/R2nk3/4P3/1p4r1/2p5/2P1N1p1/1P1r4/5RK1 b - - 0 55|g5e5 e6d7|1435|winningMaterial,oneMove|
1895mh1|r5k1/2p3p1/p1bp3p/2p2r2/8/2P1N2P/P1P2PP1/RR4K1 b - - 3 20|f5d5 e3d5|1435|winningMaterial,oneMove|
cvx6uw|2r1k2r/1b2npp1/p1n1p2p/1p2P3/1q3N1P/1B3N2/PP1BQPP1/6KR b k - 3 21|b4d4 f3d4|1440|winningMaterial,oneMove|
7gdsdr|3kr3/1p2RRp1/p1p1n1P1/P1P5/4P3/1P3p2/3K4/8 w - - 4 48|e7c7 e6c7|1440|winningMaterial,oneMove|
cxgyy1|8/pppr1kp1/2n1bp2/1P5p/4P3/2N2PB1/P5PP/R6K b - - 0 31|g7g6 b5c6|1440|winningMaterial,oneMove|
81dq3r|r1b1k2r/p1pqnp1p/3p1b1B/4P3/1p1P2p1/8/P3QPPP/RN1RN1K1 b kq - 0 16|f6e5 d4e5|1440|winningMaterial,oneMove|
9uaqvi|7r/pp1bpk2/3p1n2/P2p4/R3PQ2/3B4/1qPBKPP1/8 w - - 0 26|e4e5 d7a4|1440|winningMaterial,oneMove|
11vvsay|4r1k1/pp1n1p2/2Nq2pp/8/1P3B2/1BP4P/P3RPP1/6K1 b - - 0 28|d7e5 c6e5|1440|winningMaterial,oneMove|
oovdr6|r3k2r/p1q1p2p/1p2bpp1/1Q2p3/4P3/1R5P/PBP2PP1/3R2K1 b kq - 3 19|c7d7 d1d7|1440|winningMaterial,oneMove|
1mmc5j8|r5k1/p2b1rb1/4q1np/NpR1ppp1/1B1N4/Q2P3P/PP3PP1/4R1K1 b - - 0 22|e5d4 e1e6|1440|winningMaterial,oneMove|
1q5b4oq|8/1p2pp2/3k1rp1/p2PR3/P4r2/1BP1KP2/5R2/8 w - - 5 32|e5e6 f7e6|1440|winningMaterial,oneMove|
w283f7|rn1q1rk1/1bp1ppbp/1p1p2p1/p3B2n/P2P4/4PN2/1PPNBPPP/R2Q1RK1 w - - 0 10|f3g5 d6e5|1440|winningMaterial,oneMove|
khlgy9|r2qkb1r/1pp2pp1/p1np4/7p/2BQPBb1/2N4P/PPP2PP1/R4RK1 w kq - 1 11|c4b5 a6b5|1440|winningMaterial,oneMove|
wj2018|r1bqr1k1/1p1n1pbp/5np1/pPppP3/P7/4PNP1/2PN1PBP/R1BQ1RK1 b - - 0 11|d7b6 e5f6|1440|winningMaterial,oneMove|
1j4csx3|B3r2k/3bb1pp/1n6/4qpP1/3P3Q/2Nn4/3BP2P/2R2K1R b - - 2 32|b6c4 d4e5|1440|winningMaterial,oneMove|
1eyqsl6|8/1pR1R3/pr3p2/7p/kP3r2/2P2PK1/8/8 b - - 3 42|f4b4 c3b4|1440|winningMaterial,endgame,oneMove|
vbe2wz|r3k2r/1pp2pb1/3p2p1/2n3P1/p1PNP2p/P2P4/1P3PP1/R1BR2K1 w kq - 3 20|d4f5 g6f5|1445|winningMaterial,oneMove|
18ohya8|8/5rpk/2b4p/4Q3/p3Pr1P/P4PPq/1P1R4/2R3K1 w - - 0 34|e5f4 f7f4|1445|winningMaterial,oneMove|
1rs31j1|4r3/1k3p2/2bRp1p1/1pK1P3/1P5p/3BP2P/8/8 b - - 17 42|e8a8 d6c6|1445|winningMaterial,oneMove|
14tuirk|5rk1/1q1n1ppp/1p6/3p4/RbpP4/2N1PN1P/1P2QPP1/6K1 b - - 6 22|b4c5 d4c5|1445|winningMaterial,oneMove|
12aj0bz|r1b2k1r/ppq2pp1/1nn1p2p/3pP3/1b1P4/5N1P/PP1QBPP1/RNB2RK1 w - - 4 15|a2a4 b4d2|1445|winningMaterial,oneMove|
15hcn8d|1k3r2/1b4Q1/rnq4p/p1bNp3/1P4B1/2P3P1/P2R1P1P/3R2K1 b - - 0 33|b6c4 b4c5|1445|winningMaterial,oneMove|
13ppe3z|6k1/2q5/6p1/7p/8/1PQ5/P5PP/3rR2K w - - 7 41|c3g3 c7g3|1445|winningMaterial,endgame,oneMove|
qywidj|r1bqk3/ppp1pp1p/5n2/4Q1r1/3P4/2P3P1/PP1KB2P/R5NR w q - 1 15|g1f3 g5e5|1445|winningMaterial,oneMove|
hqv27x|2r1kr2/1p1q3p/p1b2bp1/P4p2/Q2N1P2/3BP1nP/1PP3P1/R1BK2R1 w - - 7 26|b2b3 c6a4|1445|winningMaterial,oneMove|
l1ybmn|r3k3/3nb2p/4p1p1/2p5/4bp2/PRB1N3/5PPP/R5K1 w - - 0 31|a3a4 f4e3|1445|winningMaterial,oneMove|
1uxqjan|2n1k2r/1p3p2/3pb3/1P3p1p/P1B1p3/4B1P1/3K3P/R7 w k - 1 32|c4d3 e4d3|1445|winningMaterial,oneMove|
10ky7wi|rn1qkbnr/pp2pppp/2p5/8/3Pp1b1/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5|f1c4 e4f3|1445|winningMaterial,oneMove|
ro0zlo|5rk1/2r4p/2b3pP/p1Rp4/P1p5/q3P3/3NQ1P1/1R4K1 w - - 2 32|c5c4 d5c4|1445|winningMaterial,oneMove|
12by1lq|2kr1b1r/ppq2pp1/8/2p1P2p/NPnP2n1/P1P5/1B2Q1BP/R4RK1 b - - 0 18|g4e5 d4e5|1445|winningMaterial,oneMove|
146avuh|r1bqk2r/1p2bp1p/2n1p3/3pP1p1/p4B2/2PB1N2/PPQ2PPP/R3K2R w KQkq - 0 13|c2c1 g5f4|1450|winningMaterial,oneMove|
f5mevi|4k2r/2q2pp1/bnn1p2p/r1bpP3/pp6/P1N2NPP/1PPB1PBK/R2QR3 w k - 0 20|c3e4 d5e4|1450|winningMaterial,oneMove|
1ks18ty|1qr3k1/5pp1/br2p3/3pP3/1b6/1P4PP/R1P2PB1/2QNR1K1 w - - 7 38|e1e4 d5e4|1450|winningMaterial,oneMove|
l7c74a|4q1k1/ppp2pp1/2p1rb2/3rn3/6Q1/3N2P1/PPP2P1P/2BRRK2 w - - 7 26|e1e5 f6e5|1450|winningMaterial,oneMove|
3shjd8|2r1kb1r/1p3p1p/p3p3/3p1p2/2nq1B2/P2N1PNP/1P4P1/2R1QRK1 w k - 0 26|e1e3 c4e3|1450|winningMaterial,oneMove|
1isy324|2bqr1k1/p1p2pp1/1rp4p/3pP3/4nP2/P1PB2Q1/1P4PP/R1B2RK1 w - - 2 17|f4f5 e4g3|1450|winningMaterial,oneMove|
xjifhk|rnbq1rk1/p4ppp/2pbp3/1pPp4/3Pn3/PQN1BN2/1P2PPPP/3RKB1R b K - 0 10|e4c5 d4c5|1450|winningMaterial,oneMove|
sscomf|2k4r/1pp2p1p/3r4/pPP1p1P1/4Pn2/P5P1/1b3P2/1R3KNR b - - 0 22|f4e6 c5d6|1450|winningMaterial,oneMove|
v8biv6|5rk1/5pp1/2R2qb1/3P1N2/1r2p1P1/5BRp/1nP2P1P/2Q4K b - - 1 28|g6f5 c6f6|1450|winningMaterial,oneMove|
1ceobpq|rn2kb1r/1p3pp1/1qp1pn1p/p2p1b2/N1PP1B2/4PN2/PP2BPPP/R1Q1K2R b KQkq - 1 9|b8d7 a4b6|1450|winningMaterial,oneMove|
1d6o46f|rnb1k2r/pp3ppp/3bqn2/2p1p1N1/8/1P1PP3/PB3PPP/RN1QKB1R b KQkq - 1 8|c5c4 g5e6|1450|winningMaterial,oneMove|
onvpne|r2qkb1N/1ppb3p/3p1n1n/p3p3/P3p3/3P2PQ/1PPB1PBP/RN2K2R w KQq - 3 14|e1g1 d7h3|1450|winningMaterial,oneMove|
1wy5fft|3rkbnr/1ppq2pp/p4p2/n3P3/2B2B1P/PQ3NP1/1P1pKP2/R6R w k - 4 18|e5f6 a5b3|1450|winningMaterial,oneMove|
1idnp8y|r1b1k2r/pppqbppp/2n1P1n1/6B1/1PPp3P/P4N2/4PPP1/RN1QKB1R b KQkq - 0 11|e7b4 a3b4|1450|winningMaterial,oneMove|
kunfxu|2rqkb1r/1p3ppp/pnn1p3/3pP3/3P2b1/PBN1BN1P/1P3PP1/R2Q1RK1 b k - 0 13|h7h5 h3g4|1450|winningMaterial,oneMove|
2phqqc|r2qk2r/pppb2pp/2nbp3/3P1p2/4Q3/2P5/PPB2PPP/R1B1K1NR w KQkq - 0 11|d5c6 f5e4|1455|winningMaterial,oneMove|
1jcjtc5|r3r1k1/5p2/p1n1b2P/2Bp2p1/1p1P1P2/1PN3P1/P7/R3R1K1 w - - 0 27|e1c1 b4c3|1455|winningMaterial,oneMove|
bomg4s|r2r2k1/pp3p1p/nnp3p1/4b3/5P2/2NpP1P1/PP1B2BP/3RK2R b K - 0 17|b6c4 f4e5|1455|winningMaterial,oneMove|
1fa3eqd|r1b1k2r/bp1pqpp1/n1p2n1p/p3p1B1/Q1P5/P1NPPN1P/1P3PP1/2KR1B1R w kq - 0 11|a4a5 h6g5|1455|winningMaterial,oneMove|
1qwcl0n|3q1rk1/2p3p1/3p3p/2p2p2/Qr3B1b/3P2N1/PPP2PKP/R3R3 w - - 1 20|a4b3 b4b3|1455|winningMaterial,oneMove|
qj54qu|r3kb1r/ppp2pp1/2n1bq1p/3n4/4P3/5NP1/PP1Q1PBP/RNB2RK1 b kq - 0 10|e8c8 e4d5|1455|winningMaterial,fork,oneMove|
1f4tuuh|8/2R3p1/2rP1p1p/P2p1k1P/r4B2/3p2P1/1K3P2/8 b - - 3 48|c6c2 c7c2|1455|winningMaterial,oneMove|
1478uc1|4r1k1/5pp1/3qPn1p/p7/2Nn4/6PP/5rBK/R2QR3 b - - 1 26|d4f3 d1f3|1455|winningMaterial,oneMove|
1ok8sak|3rk2r/ppq1bppp/2p2n2/2nP1p2/2P5/1QN1B3/PP2BPPP/R4RK1 w k - 1 14|c3b5 c6b5|1455|winningMaterial,oneMove|
1d8j5i7|3r4/3p2R1/pk2p1p1/8/2P2rP1/NP1n4/P7/1K2R3 w - - 8 40|e1c1 d3c1|1455|winningMaterial,oneMove|
1ve56ge|8/1pk5/p2p4/4pB2/1P2n2r/P2R1P2/6K1/8 b - - 0 48|d6d5 f3e4|1455|winningMaterial,endgame,oneMove|
1mfp5of|2kr4/2qbbpr1/2p1p3/3pP2p/6p1/2P2NBP/PP1Q1PP1/R4RK1 w - - 0 21|b2b4 g4f3|1455|winningMaterial,oneMove|
1e7qss2|2r1r1k1/pQP2p1p/1n1B2p1/5q2/4N3/8/Pb3PPP/R3R1K1 w - - 0 25|e4g3 b2a1|1455|winningMaterial,oneMove|
uqvv61|1r3r1k/1Pq4p/6p1/3Bp3/4Pn2/2pP3Q/5PPP/R4R1K w - - 5 29|h3f3 f4d5|1455|winningMaterial,oneMove|
u8an7e|rnbqkb1r/pp1pppp1/5n1p/2p1P3/2B5/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 4|e7e6 e5f6|1460|winningMaterial,oneMove|
1udngmq|2r2rk1/p4pp1/6p1/1R2p3/1BPb1n2/P5N1/2R2PPP/6K1 b - - 1 25|c8c6 b4f8|1460|winningMaterial,oneMove|
td60ag|r1b2rk1/2q1bppp/1pn2n2/p2pP3/P6P/1QN2N2/1P1BPPP1/R3KB1R b KQ - 0 15|e7b4 e5f6|1460|winningMaterial,oneMove|
1mqa17z|8/3q2nk/2p4p/1N3pp1/Pp6/2r5/5PPP/3R1QK1 b - - 1 36|d7b7 b5c3|1460|winningMaterial,oneMove|
1phtyut|r1b1r1k1/pp3ppp/3q1n2/2ppP3/8/2P1P3/PP1NBPPP/RQ2K2R b KQ - 0 12|d6c7 e5f6|1460|winningMaterial,oneMove|
awq35n|r4knr/1ppqbp1p/2n1b1p1/p3p2N/3pP2P/P1PP1N2/1P3PP1/R1BQKB1R w KQ - 0 11|h5f4 e5f4|1460|winningMaterial,oneMove|
1s5bir|r4rk1/1b1q1pbp/3p1np1/p3P3/3BP3/P1NQ4/1P2B1PP/R3R1K1 b - - 0 18|f6e4 c3e4|1460|winningMaterial,oneMove|
qnngvd|r2q4/1p2kp2/p2p1n2/2pQ4/4P3/P1R2N2/1P1KB1P1/8 w - - 2 25|f3g5 f6d5|1460|winningMaterial,oneMove|
d7l3kk|1b3rk1/p2b4/5p2/1prPp2p/1P2B3/N6P/P5P1/4RR1K b - - 0 26|b8d6 b4c5|1460|winningMaterial,oneMove|
8i1acb|3r3k/6pp/8/2nr4/pq2NPQ1/2b1P2P/6PK/1BB2R2 w - - 2 45|b1c2 c5e4|1460|winningMaterial,oneMove|
p83ii7|rR3r2/p5kp/b1p1p2q/2PpP1p1/P2Pp3/4Q3/4PPBP/1R4K1 w - - 6 28|b1b7 a6b7|1460|winningMaterial,oneMove|
1n92krw|3r2k1/p5b1/1pnq2p1/2p3Bp/Q3P2P/P1Pn2P1/1P5K/3R1R2 b - - 1 31|g8h8 g5d8|1460|winningMaterial,oneMove|
hd307y|4kb1r/1pnr3p/p1n5/2P2p2/1PB1p3/P4N1P/5PP1/R1B1K2R w KQk - 0 18|a1b1 e4f3|1460|winningMaterial,oneMove|
1cy7kws|brq2rk1/5p2/pP1Np1p1/3n3p/1P5P/6P1/5PB1/Q2RR1K1 b - - 3 29|b8b6 d6c8|1460|winningMaterial,oneMove|
o8pbnj|r1bqkbnr/1ppp3p/p3p1p1/P2P1p2/5Pn1/5N1P/1PP1P1P1/RNBQKB1R b KQkq - 0 8|e6d5 h3g4|1465|winningMaterial,oneMove|
1uuh33y|8/3k4/3q2p1/4np1p/P7/1pQ3P1/K1B3P1/8 w - - 0 45|a2b2 b3c2|1465|winningMaterial,endgame,oneMove|
6n3vft|3r4/1P4pk/R6p/2q2p2/2b5/4p1P1/1Q3P1P/5NK1 w - - 2 37|b7b8q d8b8|1465|winningMaterial,oneMove|
nwl5t7|4rrk1/pbp3pp/8/3p4/2pR4/P5P1/1PP1BP1P/2K2R2 w - - 3 23|e2c4 d5c4|1465|winningMaterial,oneMove|
ia4pdd|r2qkb1r/1pp2pp1/3p1n2/p7/2PpP1Qp/P2P3P/1P3PP1/RNB1K2R w KQkq - 1 11|c1f4 f6g4|1465|winningMaterial,oneMove|
2lj3wt|3r1rk1/pp2np1p/1q3np1/8/1P2p3/P1P1B3/2Q1BPPP/R3K2R b KQ - 1 17|e7f5 e3b6|1465|winningMaterial,oneMove|
2b39s5|8/p7/1p4Pk/1p5P/1n1b4/3R4/P2P4/4K3 w - - 1 44|d3c3 d4c3|1465|winningMaterial,endgame,oneMove|
1ufl80b|r1bqkb1r/ppp2p2/2np1npp/4p3/3PPB1P/2N5/PPP1BPP1/R2QK1NR w KQkq - 0 7|f4e5 d6e5|1465|winningMaterial,oneMove|
1y6sn1e|r3kb1r/pp1n1pp1/2n1p2p/3pP2P/qP1P4/N1N4Q/P2B1PP1/1R2K2R b Kkq - 10 17|a4b4 b1b4|1465|winningMaterial,oneMove|
1tfztmy|r1bqkbnr/2p2p2/p3p1pp/1p6/N2PP3/P4N2/1P3PPP/R1BQK2R w KQkq - 0 11|e1g1 b5a4|1465|winningMaterial,oneMove|
qhaitg|8/1p4pk/6r1/5p1p/P2QnR2/1p2P2q/1PR3P1/6K1 w - - 0 43|d4e4 f5e4|1465|winningMaterial,oneMove|
p7vxd8|r3r1k1/pp2Npbp/n1qp2p1/2p3B1/4b3/5N1P/PPP1QPP1/3R1RK1 b - - 1 16|g8f8 e7c6|1465|winningMaterial,oneMove|
1ojxei1|r6r/pp2kp2/2pbb1pp/4p2n/P2nP1PP/2N2P2/1PP4B/2KR1BNR b - - 0 15|h5f4 h2f4|1465|winningMaterial,oneMove|
1owyxdz|r2q1rk1/1bp1bpp1/pp2pn1p/3NN3/P1BP4/4P1B1/1P1Q1PPP/R4RK1 b - - 0 14|d8d5 c4d5|1465|winningMaterial,oneMove|
1xaickk|rn1qkb1r/1p1bpppp/p4n2/1B1p4/P2P1B2/8/1PP2PPP/RN1QK1NR w KQkq - 0 7|b1a3 a6b5|1470|winningMaterial,oneMove|
112g55o|r1b2rk1/1pq1npb1/p3p1pp/2B1n3/P1B5/2N2N1P/2PPQPP1/1R3RK1 w - - 3 16|e2e5 g7e5|1470|winningMaterial,oneMove|
1jexqq4|2r5/1p3p1k/4b1p1/pr1pP2p/PP1R3P/2P5/B4PK1/R7 b - - 0 27|b5b4 c3b4|1470|winningMaterial,oneMove|
32niff|r1b2rk1/5pp1/1pP4p/p7/P1Q2P2/2q1p1P1/4B2P/3R1RK1 b - - 2 26|c3d2 d1d2|1470|winningMaterial,oneMove|
17w588t|2k5/4Q3/2p5/7b/3p4/PP1qNp2/5P2/2K5 w - - 10 65|e7g7 d4e3|1470|winningMaterial,endgame,oneMove|
1qap9or|2kr2r1/Bpn3bp/4p1p1/1q1P1p2/8/P4Q2/1PB2P1P/1K1R2R1 w - - 1 26|d1d4 g7d4|1470|winningMaterial,oneMove|
hz3tx5|r2q1rk1/2p2ppp/pp1b1n2/3P4/P5b1/5N1P/1PP1BPP1/R1BQK2R b KQ - 0 12|d6c5 h3g4|1470|winningMaterial,oneMove|
1k100v4|8/5p2/1kP1p1p1/rP1pP3/5r2/1RN3KP/5P2/8 b - - 1 43|f4e4 c3e4|1470|winningMaterial,oneMove|
13f1b96|r1bqkbnr/3ppp1p/pp4p1/1Bp5/3PP3/5N2/PPP2PPP/R1BQK2R w KQkq - 0 8|a2a4 a6b5|1470|winningMaterial,oneMove|
1ygfj7k|r2qk2r/1p1nbpp1/p3p3/3p4/1n1PP2p/PP3N1P/1B1N1PP1/1QR2RK1 b kq - 0 17|d7f8 a3b4|1470|winningMaterial,oneMove|
1begowt|r1b2rk1/1p3ppp/2p5/p1q5/5n2/1P1P1N2/P4PPP/R1Q1RBK1 b - - 1 18|f4h3 g2h3|1470|winningMaterial,oneMove|
1kie23u|r2qk2r/1p1n1ppp/2p1pnb1/3p4/pbPP2P1/P1N1P3/1P1B1PNP/R2QKB1R b KQkq - 0 11|c6c5 a3b4|1470|winningMaterial,oneMove|
1j44i8d|5nk1/5p1p/r1p2p2/5p2/5P2/rP4P1/P3B2P/RR4K1 b - - 6 31|f8e6 e2a6|1470|winningMaterial,oneMove|
vedb4j|5rk1/4Bnbp/p7/1pp2Pp1/8/8/PP3NPP/5RK1 b - - 1 31|h7h5 e7f8|1470|winningMaterial,oneMove|
ho62pg|1r1q1rk1/1p3pbp/p1np1np1/4p1N1/4P1b1/2NQBP2/PP2B1PP/2R2RK1 b - - 0 16|g4f5 e4f5|1475|winningMaterial,oneMove|
13rlic1|rqb1k2r/1p1n1ppp/p2Np3/2bnP1B1/Q7/5N2/PPP2PPP/2KR1B1R b kq - 1 13|b8d6 e5d6|1475|winningMaterial,oneMove|
1doazxp|r1b1k2r/1p5p/p3p1p1/2P1Np1Q/P2p1P1P/8/1P1B3q/R3KB2 w Qkq - 0 21|h5g6 h7g6|1475|winningMaterial,oneMove|
y7nmv0|1r4k1/1p3ppp/8/r2NP1b1/1R3p2/7P/5PP1/5RK1 w - - 9 28|d5f6 g7f6|1475|winningMaterial,oneMove|
5f19wg|r1nqk2r/1ppb1pb1/p2p1npp/3Pp1B1/P3P3/1PN4P/2PQBPPN/R3K2R w KQkq - 0 14|h3h4 h6g5|1475|winningMaterial,oneMove|
tmbh4f|1n1qk2r/3rbppp/8/pp3p2/2pp1P2/2N2BP1/PPQ2P1P/R2R2K1 w k - 0 17|c2f5 d4c3|1475|winningMaterial,oneMove|
1oduzu|1rb1kb1r/1pp1qp1p/p1n2np1/P3p1B1/Q3p3/2PP1N2/1P2BPPP/RN2K2R w KQk - 0 10|b1d2 e4f3|1475|winningMaterial,oneMove|
37knh0|r1bq1rk1/ppp1b2p/2n2p2/3np3/P1B3p1/2PP1NB1/1P1N1PPP/R2QK2R w KQ - 1 14|e1g1 g4f3|1475|winningMaterial,oneMove|
1qvbabp|1rbq1rk1/1p2b1pp/2np4/1p2pP2/B7/2NP1N1P/PP3PP1/R1Q2RK1 w - - 0 15|d3d4 b5a4|1475|winningMaterial,oneMove|
191rwwy|rnq1kbnr/ppp2pp1/3pp2p/3P1b2/6P1/P4N1P/1PP1PP2/RNBQKB1R b KQkq - 0 6|c7c6 g4f5|1475|winningMaterial,oneMove|
1f1i00x|1r3qk1/pR4p1/5nQ1/3p2N1/1p6/6PP/5P2/6K1 w - - 6 47|g6f7 f8f7|1475|winningMaterial,oneMove|
15dpndf|r2qkbnr/1ppn4/p5p1/4p1pp/1P1pP1BP/P5N1/2PP1PP1/R1BQ1RK1 w kq - 0 14|h4g5 h5g4|1475|winningMaterial,oneMove|
3uf16e|r2qkbnr/pp2pppp/2n5/7b/3p4/1PN2N1P/PBPP1PP1/R2QKB1R w KQkq - 0 8|g2g4 d4c3|1475|winningMaterial,oneMove|
cbjtv4|rn1qk2r/pppbppbp/5np1/3p4/Q1PP4/5NP1/PP2PP1P/RNB1KB1R w KQkq - 2 6|a4b5 d7b5|1475|winningMaterial,oneMove|
1ucx7mk|4r1k1/3q1p2/3r2pb/p1p1pn2/P1P1Q3/1PP2NP1/3B1P2/3R1RK1 w - - 1 29|d2h6 d6d1|1480|winningMaterial,oneMove|
hy5qhq|r4rk1/5ppp/p7/1b4b1/4Qq1P/P1B2BP1/1P3P2/R3K2R b KQ - 0 21|f8e8 g3f4|1480|winningMaterial,oneMove|
yzuwo4|8/8/p7/1p1k1pp1/1R6/P2N4/1P5r/5K2 w - - 2 52|d3f4 g5f4|1480|winningMaterial,endgame,oneMove|
1jrhake|r3r1k1/1q2ppbp/1pnp2p1/p2P4/2P4B/1PN5/P2Q1PPP/R4RK1 b - - 0 21|a5a4 d5c6|1480|winningMaterial,oneMove|
gi7yw6|5rk1/2q3pp/rp1nPp2/p3N1b1/2pP2Q1/P1P3P1/1P1N1BnP/R3K2R w KQ - 1 25|e1d1 f6e5|1480|winningMaterial,oneMove|
ib5bfc|1rbq1rk1/p1p1bppp/2pp4/1N5Q/8/3P4/PPP2PPP/R1B1R1K1 w - - 0 12|a2a4 c6b5|1480|winningMaterial,oneMove|
1hfppgh|8/6p1/6kp/2P2R2/2r4P/4p1P1/P3K3/8 w - - 1 45|f5g5 h6g5|1480|winningMaterial,endgame,oneMove|
1rivpf6|2qr2k1/p4p2/3b1Bpp/2p2b1r/2P1Q3/4RN1P/P2P1PP1/R5K1 w - - 1 24|e4e5 d6e5|1480|winningMaterial,fork,oneMove|
1apb5ne|5rk1/6pp/8/7P/1p1n4/1PR3P1/5PKN/8 w - - 0 38|c3f3 d4f3|1480|winningMaterial,endgame,oneMove|
1afbbtx|7k/2b3p1/1nP4p/p2R2P1/7P/8/3pKP2/8 w - - 7 55|d5d7 b6d7|1480|winningMaterial,endgame,oneMove|
1kzwvt8|6k1/3R4/1pp5/3pr3/P4K2/3B1P2/1r4P1/8 b - - 1 40|e5e4 f3e4|1480|winningMaterial,endgame,oneMove|
cd03ow|8/3r2pk/6p1/1p2R1Pp/1B5r/P4PK1/8/8 b - - 1 41|h4g4 f3g4|1480|winningMaterial,endgame,oneMove|
p5iakk|8/5ppp/4k3/Rp1rPP2/1Rr5/8/5PK1/8 b - - 0 41|e6d7 b4c4|1480|winningMaterial,endgame,oneMove|
9hvswk|8/8/5R2/p7/1knrPP2/3P1P2/4K3/8 b - - 0 52|d4d7 d3c4|1480|winningMaterial,endgame,oneMove|
83rdo7|8/5R2/4r1k1/8/6p1/8/5K2/8 w - - 0 70|f7f3 g4f3|1485|winningMaterial,endgame,oneMove|
ahoghd|8/7p/1r3kp1/4R3/4B1P1/3P2K1/8/6b1 w - - 8 45|e5h5 g6h5|1485|winningMaterial,endgame,oneMove|
s11xs2|8/8/8/2k2p2/5r2/1P1R3P/8/6K1 b - - 10 52|f4g4 h3g4|1485|winningMaterial,endgame,oneMove|
1aluzb6|8/8/3kb1p1/4p2p/4Pp1P/5PPN/5K2/8 w - - 3 67|h3f4 e5f4|1485|winningMaterial,endgame,oneMove|
3njjzy|8/4R3/1p4pk/1P3b1p/3r1K1P/2N2P2/1P6/8 w - - 5 37|e7e4 f5e4|1485|winningMaterial,endgame,oneMove|
8tt9i0|8/5p2/5N1P/2r1Pk2/1p3P2/8/1K6/8 b - - 0 58|c5e5 f4e5|1485|winningMaterial,endgame,oneMove|
exhju8|8/4k3/2p5/3p1p1B/P1p1n3/2b2P1p/7P/4RK2 w - - 1 43|e1e4 f5e4|1485|winningMaterial,endgame,oneMove|
sm4hyb|3n1k2/R7/4ppp1/5rNp/P6P/8/4K1P1/8 w - - 0 44|g5f7 d8f7|1485|winningMaterial,endgame,oneMove|
ro1iqr|8/6p1/1p1n3p/1P2Pk1P/8/2N1K3/8/8 b - - 0 46|d6e4 c3e4|1485|winningMaterial,endgame,oneMove|
rrom57|1k1r4/1p4p1/8/q1p5/1bQBP3/4P3/5P2/1K4R1 w - - 0 46|g1g7 c5d4|1485|winningMaterial,endgame,oneMove|
qrd4ih|2r2r1k/3nq2p/2p5/1p3p2/p2p1P2/3P2R1/PP1Q1NP1/4R1K1 b - - 3 28|f8f7 e1e7|1485|winningMaterial,fork,oneMove|
jkv76j|r4r1k/1ppq3P/p1bbpnp1/P4p2/3P4/2N1BpP1/1PP1Q1B1/1K1R3R w - - 0 21|e2f3 c6f3|1485|winningMaterial,fork,oneMove|
67jia0|8/6k1/7p/p1K3pP/P1R3P1/2P5/1r6/8 w - - 4 56|c4b4 a5b4|1485|winningMaterial,endgame,oneMove|
6ufvhc|8/1R6/p2p4/P1pP2p1/3k2r1/2N5/3K4/8 b - - 2 47|g4e4 c3e4|1485|winningMaterial,endgame,oneMove|
1knf3f9|2k5/4Q3/2p5/7b/3p4/PP1qNp2/5P2/2K5 w - - 14 67|e7f6 d4e3|1490|winningMaterial,endgame,oneMove|
cvba9n|r2B4/ppR5/3n4/1k6/3ppbb1/P7/B1P2P2/1R2K3 b - - 1 33|b5a5 c7c5 a5a4 c5a5|1490|mate,mateIn2,short|3:c5a5
17iqy34|8/5ppp/8/RR1rkP2/3r1P2/8/6K1/8 b - - 0 43|e5f6 b5d5|1490|winningMaterial,endgame,oneMove|
jho0kv|1r1b1rk1/p1p2ppp/Q2p2q1/8/4P3/P1B4b/1PPN1PPP/R3R1K1 w - - 7 19|g2g4 g6g4 g1h1 g4g2|1490|mate,mateIn2,short|3:g4g2
1r7t7pm|3r4/pkb2pp1/2p5/6p1/P2P4/1P1R3P/1BP2rq1/1K2Q1R1 b - - 11 34|d8e8 e1b4 c7b6 g1g2|1490|winningMaterial,short|
5u36a0|1n2kb1r/2r5/pN2R3/P1p2pq1/1p1p3p/1P1n1Q1P/1BPP1PP1/1R4K1 b k - 0 28|c7e7 e6e7 f8e7 f3d3|1490|winningMaterial,short|3:f3d3
1ksrqyd|2r1kb1r/3bnp2/R3p3/4P3/2BB4/4PN1p/5P1R/4K3 w k - 1 30|c4f1 c8c1 e1d2 c1f1|1490|winningMaterial,short|
144bosl|3r1k2/8/4qb1Q/1p1p1R2/1P1p4/3P1K2/5P2/8 b - - 1 42|f8e8 f5f6|1490|winningMaterial,endgame,oneMove|
c9vkfp|8/4k3/4ppp1/4N2p/3PbPPP/8/5K2/8 w - - 0 66|f2g3 f6e5|1490|winningMaterial,endgame,oneMove|
n81cx8|2rq1rk1/pb1nb1pp/1p2p3/4Np2/P1BPpP2/1P2P2Q/1B4PP/R4RK1 b - - 1 17|g7g6 c4e6 g8g7 e5d7|1490|winningMaterial,short|3:e5d7
rjy5v9|7k/7p/pQ2BP2/2pP1P2/4q2P/P7/3K2b1/8 b - - 2 38|e4d5 e6d5|1490|winningMaterial,endgame,oneMove|
1isoccv|4r1k1/1b2qppp/p7/2p5/R7/1P1Q2PP/2P2nB1/5NK1 w - - 0 29|g1f2 e7e1 f2g1 b7g2|1490|winningMaterial,short|
11t96cd|r2q1rk1/pb1nbp1p/2n3p1/1pppP1N1/7Q/P4P1N/BP4PP/R1B2RK1 b - - 1 17|f8e8 h4h7 g8f8 h7f7|1490|mate,mateIn2,short|3:h7f7 h7h8
y5a6ka|6k1/1p4P1/8/p4R2/P2P1P2/r3rb2/1K6/6R1 b - - 3 40|f3d1 f5f8 g8h7 f8h8|1495|mate,mateIn2,short|3:f8h8
16lsgsc|5r2/1P1RQpk1/6p1/4p3/7p/1B2KP1P/2P5/1rq5 w - - 8 45|e3f2 c1e1 f2g2 e1g3|1495|mate,mateIn2,short|3:e1g3 e1e2 e1g1
avizd|4r1k1/p1p5/2bp2R1/b1p5/2P2N1P/1P2r3/P4RP1/6K1 b - - 0 40|g8f8 f4d5 e3f3 f2f3|1495|mate,mateIn2,short|
17rc9s0|2r1qr2/6kp/1ppbp1pB/3bNp2/p2P1P2/P3P2P/1P2BQPK/2R3R1 b - - 0 30|g7f6 f2h4 g6g5 h4g5|1495|mate,mateIn2,short|
1pxtw3v|7k/8/8/2p5/2N2PPp/2bB1K1P/2r5/8 b - - 1 42|c2d2 c4d2|1495|winningMaterial,endgame,oneMove|
npjbep|8/p3k3/2p5/8/6p1/2PrnB2/PP3R1P/6K1 w - - 18 41|c3c4 g4f3|1495|winningMaterial,endgame,oneMove|
1l7zfna|2k4r/1pq4p/1Qp3rP/P1N5/6b1/5P2/1PP2K2/R6R b - - 0 35|g4f3 b6c7 c8c7 f2f3|1495|winningMaterial,short|
1s15h7d|r4k1r/pp1Q1p2/2p5/2PP3q/8/2P3Pp/P5K1/3RR3 w - - 0 33|g2h1 h5f3 h1g1 h3h2|1495|mate,mateIn2,short|3:h3h2 f3g2
7pqtqn|8/pp6/2n1k1r1/3n1R2/3PB1pr/2P5/PP5P/5RK1 b - - 0 27|g4g3 e4d5 e6d7 d5c6|1495|winningMaterial,short|3:d5c6 h2g3 h2h3
enyaxs|rn1q1rk1/ppp1bppp/4b3/3pB1NQ/3Pn2P/2N5/PP3PP1/R3KB1R b KQ - 1 11|f8e8 h5h7 g8f8 h7g7|1495|mate,mateIn2,short|3:h7g7 h7h8 e5g7
1hhu3h0|3r3k/1pp5/6Bp/p1P4P/5Pb1/1Q2P2q/PP3KR1/8 w - - 13 43|g6c2 d8d2 f2e1 d2g2|1495|winningMaterial,short|3:d2g2 h3g2
l207kx|6k1/1R2pp2/7p/PN6/6p1/4P1P1/3rr2P/6RK w - - 2 33|g1f1 e2h2 h1g1 d2g2|1495|mate,mateIn2,short|3:d2g2
5leovd|r1bq1rk1/pp3ppp/2nbp3/2n5/8/2PB1NB1/PPQ2PPP/3RK2R b K - 1 13|b7b6 d3h7 g8h8 g3d6|1495|winningMaterial,short|3:g3d6
ayc5sc|r3rnk1/1q2bp2/p3p2Q/3nP3/PppR4/2P2N2/1PB2PPP/R5K1 b - - 2 24|a8b8 d4g4 f8g6 c2g6|1495|winningMaterial,short|3:c2g6 g4g6
d7739d|Rb3rk1/1p4pp/1p2bp2/1P2p2P/2P1R3/4nNP1/1P4P1/4KB2 b - - 6 25|b8c7 a8f8 g8f8 e4e3|1500|winningMaterial,short|
v47brs|3R1Q2/1kr3pp/pp6/4p3/6R1/P3P3/P5P1/4K1q1 w - - 2 31|f8f1 c7c1 e1d2 c1f1|1500|winningMaterial,short|3:c1f1
12zmvqd|r2q1rk1/4bppp/2n1p3/3p4/pp1P3P/2PQ2P1/PPB2P2/R1B1R1K1 b - - 1 16|f7f6 d3h7 g8f7 c2g6|1500|mate,mateIn2,short|3:c2g6
1khxutd|r1b1kb1r/pp2pppp/2Bp4/q3P3/3P4/2n2N2/PP3PPP/R1BQ1RK1 b kq - 0 11|c8d7 c6d7 e8d7 b2c3|1500|winningMaterial,short|3:b2c3 d1e1 e5e6
ujd1se|3r4/6p1/p1Q1pnk1/p6n/2P1B2B/7P/1q6/4R1K1 b - - 3 46|f6e4 c6e4 g6h6 h4d8|1500|winningMaterial,short|3:h4d8 e4e3
gqfq26|4r3/1p2k2R/1q5p/pb1p1B1P/3P2R1/1P4P1/5PK1/8 b - - 4 39|e7d6 g4g6 e8e6 g6e6|1500|mate,mateIn2,short|
cqdfqx|6k1/pp4p1/3p2p1/1NpP4/P1r5/R6R/1r6/6K1 w - - 2 32|a3e3 c4c1 e3e1 c1e1|1500|mate,mateIn2,short|
11r8ufo|8/1pp1r1k1/6P1/pP1pPBR1/5p2/P1P1n3/3N1K1r/6R1 w - - 1 37|g5g2 h2g2 g1g2 e3g2|1500|winningMaterial,short|3:e3g2
db1pfh|r6k/2n1q1pp/8/pp2r3/3bN3/PB2PQ1P/5PP1/2B1K2R w K - 5 28|e3d4 e5e4 c1e3 a8f8|1500|winningMaterial,short|
c147pz|r1b3k1/5p2/7Q/p7/7p/2P4P/1P4P1/R1K1r3 w - - 0 35|c1c2 c8f5 c2d2 e1a1|1500|winningMaterial,short|
iglo05|3R2k1/p5pp/2p5/7n/4p1Pq/1P5P/PNP4K/5rQ1 b - - 0 28|f1f8 d8f8 g8f8 g4h5|1500|winningMaterial,short|3:g4h5
sa9yi0|6k1/p5p1/6q1/2bP3p/Q4p1P/1P3P2/P7/2N2K2 w - - 1 43|a4c6 g6g1 f1e2 g1c1|1500|winningMaterial,short|3:g1c1
1ydleh0|r1b2k1r/1p1qp2p/p1npB1p1/6N1/Q7/2b1P3/PPP3PP/2KR3R b - - 3 17|d7e6 g5e6 c8e6 b2c3|1500|winningMaterial,short|
fw0unc|r1bqk2r/n1p1n1Qp/1p1bp1p1/p5P1/2PPpp1P/P1N1B3/1P3P2/R3KBNR b KQkq - 1 14|c8b7 g7h8 e8d7 h8d8|1500|winningMaterial,short|3:h8d8 h8h7 h8g7
2df0pt|1R6/p3pk2/4qp2/4nb2/8/1N1PB1Q1/1Kr5/8 w - - 0 44|b2a3 e6a6 b3a5 a6a5|1505|winningMaterial,short|3:a6a5 a6d3 a6d6
onyy4f|2r2rk1/pp3pp1/4p3/4P3/PP6/3q2QP/5bP1/R4RK1 w - - 0 29|g1f2 c8c2 f2g1 d3g3|1505|winningMaterial,short|
1k9pi8o|3r4/p4pkp/p2qb3/8/6N1/8/1Q3PPP/1R4K1 b - - 6 39|f7f6 b2f6 g7g8 g4h6|1505|mate,mateIn2,short|
svg5d7|8/6kp/1p1n1rp1/2p1Q3/R7/1BP4P/1P1q2PK/8 b - - 4 42|c5c4 a4a7 g7h6 e5f6|1505|winningMaterial,short|3:e5f6
1w32oql|r2qkbnr/pp2pppp/2B5/3p4/8/P1N2b2/1PPP1PPP/R1BQK2R b KQkq - 0 7|d8d7 c6d7 e8d7 d1f3|1505|winningMaterial,short|3:d1f3 g2f3
1r4by1l|r2qkbnr/pp2pppp/2B5/3p4/8/2N2b1P/PPPP1PP1/R1BQK2R b KQkq - 0 7|d8d7 c6d7 e8d7 d1f3|1505|winningMaterial,short|3:d1f3 g2f3
11ysqtr|r4k2/6bQ/pp6/3pq2R/3p4/P2P1K2/1P3P2/8 b - - 0 37|e5d6 h5f5 d6f6 f5f6|1505|winningMaterial,short|3:f5f6 f3g2 b2b4
80wnv1|4r1k1/5p1p/Qp4p1/p2R3P/6q1/8/5PB1/6K1 w - - 1 40|g1h1 e8e1 a6f1 e1f1|1505|winningMaterial,short|3:e1f1 g4h4 g4b4
16hac9k|7r/1ppk4/3p4/3PpP2/p5pP/P2P1K2/P7/6R1 w - - 0 32|f3g4 h8g8 g4f3 g8g1|1505|winningMaterial,short|3:g8g1
akrnai|r5k1/2p2p1p/2p3p1/P3P2P/4Q3/8/1PP2P1P/R1Br1bK1 w - - 1 21|h2h4 f1d3 g1g2 d3e4|1505|winningMaterial,short|
uydfy8|4r3/1p6/7k/p1pPrp2/P1P5/6R1/1P2p1K1/4R3 b - - 1 41|e5e4 e1h1 e4h4 h1h4|1505|mate,mateIn2,short|
12vwtbw|3rk2r/pq1Pp1bp/1p4p1/2p5/2b1pn2/2P3PB/PP1N3P/R2QR1K1 b k - 0 22|b7d7 h3d7 d8d7 g3f4|1505|winningMaterial,short|3:g3f4 d1g4
yuf4vs|5r1k/5p1p/1p1n1rPq/2p1p3/6R1/2P3QP/1PB2RP1/6K1 b - - 0 37|f6f2 g6g7 h8g8 g7f8r|1505|winningMaterial,fork,promotion,short|3:g7f8r g7f8b g7f8q
m586dx|4k3/p4P1p/4r1p1/1N1pb3/PPp5/2P1qBP1/2KR3P/5R2 b - - 0 37|e8f7 f3d5 f7e7 d5e6|1505|winningMaterial,short|3:d5e6 f1f2 d5c4
1sgskpl|2rR2k1/6p1/1p4q1/p3Pp2/Pb2pP1p/1P2P2P/1Br1Q1P1/6RK b - - 4 31|g6e8 d8e8 b4f8 e8c8|1510|winningMaterial,short|3:e8c8 e2d1 e2c2
1xy7r0w|7k/7p/pQ2BP2/2pP1P2/7P/P7/1K3qb1/8 w - - 13 44|b2b3 c5c4 b3c3 f2b6|1510|winningMaterial,short|
qp7w5m|3r1rk1/p5p1/7p/2R5/3p1q1P/1P6/P3Q1P1/5RK1 b - - 1 26|d4d3 e2e6 g8h7 f1f4|1510|winningMaterial,short|
e9htzz|8/p4kp1/6q1/3P3p/2Q2p1P/1P2bP2/P3N1K1/8 w - - 17 51|e2g3 g6g3 g2f1 g3f2|1510|mate,mateIn2,short|3:g3f2
1lojmhg|2R3k1/p5p1/3Bppb1/7p/3q1P1P/5QK1/1r1p2P1/7R b - - 1 29|g6e8 c8e8 g8f7 f3h5|1510|winningMaterial,short|
qxkgqh|6k1/pp3p2/5b2/5PpQ/P7/1P6/1q4K1/7R w - - 3 41|g2g1 f6d4 g1f1 b2f2|1510|mate,mateIn2,short|
1rvjzjo|r1b2knr/4ppbp/ppnq2p1/2p3N1/2QpP3/2PN3P/PP1PBPP1/R1B1K2R b KQ - 1 12|d6e6 g5e6 c8e6 c4a4|1510|winningMaterial,short|
22feba|4r1k1/N1n3p1/Pp3pbp/1Pqpb3/Q4p1P/2P2P2/R2B2P1/4R1K1 w - - 1 32|a4d4 e5d4 c3d4 e8e1|1510|winningMaterial,short|3:e8e1 c5c4 c5d4
1plo0r3|8/4k1p1/p3p2p/4p2P/P1P2bP1/2PK4/3B3r/3R4 w - - 7 40|a4a5 e5e4 d3e4 h2d2|1510|advantage,short|3:h2d2
1b6y4ba|1r2r1k1/1p3p1p/6p1/pPp5/P5P1/2b1P1P1/6BP/2RR2K1 b - - 0 21|e8d8 d1d8 b8d8 c1c3|1510|winningMaterial,fork,short|
1ppmttu|r4r2/pp1n1kpb/2pq3p/3p4/3B2Q1/2N4P/PPP3P1/2KR3R b - - 3 21|d7e5 g4f4 f7g8 f4e5|1510|winningMaterial,short|3:f4e5
1boeus6|2k5/2qb4/2pB4/3pp3/1P5p/2P2N1K/P3QP2/6r1 w - - 0 31|h3h4 c7d8 f3g5 d8g5|1510|mate,mateIn2,short|3:d8g5
rl7kkr|r1bQkb1r/1p3pp1/p1n1p2p/1N6/1n4P1/2N4P/PPP2PB1/R1B1K2R b KQkq - 0 12|c6d8 b5c7 e8d7 c7a8|1510|winningMaterial,fork,short|3:c7a8 c1f4
2dfp1a|r3k2r/p2nbpp1/1P5p/1B1p2q1/8/P4P1P/1PPK3P/R1BQ3R w kq - 3 14|d2c3 d5d4 c3b3 g5b5|1510|winningMaterial,short|
11q667v|8/8/2R5/p2PR1pk/1b6/8/8/5K1r w - - 1 48|f1e2 h1e1 e2f3 e1e5|1515|winningMaterial,endgame,short|
hqf8eh|R4b1k/6p1/6np/1p4N1/7P/5QP1/8/1q5K w - - 2 49|f3d1 b1d1 h1h2 h6g5|1515|winningMaterial,endgame,short|3:h6g5 d1e2 h8g8
7lm0ga|3r2k1/2q2p2/b3p1p1/1p2P1Pp/1R1Q3P/8/6N1/5BK1 w - - 1 38|d4a1 c7c5 g1h2 c5b4|1515|winningMaterial,fork,short|
ah0i1d|3N4/8/4Q1k1/8/8/7p/4K3/4n1q1 b - - 1 57|g6g5 e6g8 g5f6 g8g1|1515|winningMaterial,endgame,short|
srmr37|r1b1k2r/1p4pp/p3p3/2PqNp2/P2p1P1b/8/1P1B2PP/R2QKB1R w KQkq - 1 18|e1e2 d5e4 d2e3 e4e3|1515|mate,mateIn2,short|
lmc14a|R1k5/2p2rp1/5n2/8/4P2P/Pr3NP1/4BK2/8 b - - 6 38|b3b8 e2a6 c8d7 a8b8|1515|winningMaterial,short|
1448om9|8/6rk/P2p4/5p1p/1PB1p3/7P/5QP1/q5K1 w - - 2 42|f2e1 a1e1 c4f1 e4e3|1515|winningMaterial,short|
c4zeqc|1Qkr1r2/1p6/p1p4R/P2np3/R4p2/2P5/1P3PP1/5NK1 b - - 0 37|c8d7 b8b7 d5c7 b7c6|1515|advantage,short|
1ye2ybm|2b3k1/1q3p2/p2pr3/3N1pQ1/2Pb4/P5PP/3B4/2R2K2 b - - 6 36|g8h8 g5h4 h8g8 h4d4|1515|winningMaterial,fork,short|
a3y4r5|r2k4/p4rp1/2pB3p/4N2P/P3R3/1n6/5PP1/6K1 b - - 13 28|f7e7 e5c6 d8d7 d6e7|1515|winningMaterial,fork,short|3:d6e7 e4e7 c6e7
npzrct|2br1rk1/R3Q2p/6p1/8/4p1q1/4P1B1/5P2/2R3K1 b - - 1 37|f8f7 e7f7 g8h8 f7h7|1515|mate,mateIn2,short|3:f7h7 f7g7
1j8oiu9|3r3q/pb4b1/1p1p1k2/2p1nppB/P3P3/7N/1PP2PP1/R1BQ2K1 b - - 3 24|b7e4 c1g5 f6e6 g5d8|1515|winningMaterial,short|3:g5d8 f2f3
y3imy4|r3r1k1/1p3p2/2p2n1p/p1bb2p1/Pq1N4/1PNQ2BP/2P2PP1/R3R1K1 w - - 2 22|c3d5 e8e1 g1h2 f6d5|1515|winningMaterial,fork,short|3:f6d5
13saiyp|5k2/4pp1p/2r3pP/R1p5/8/2P5/P4PP1/6K1 b - - 0 31|c5c4 a5a8 c6c8 a8c8|1520|mate,mateIn2,short|
bcbxht|5rk1/5nbp/p2p1B2/1pR2Pp1/8/7N/PP3rPP/5RK1 w - - 0 30|c5c6 f2f1 g1f1 g7f6|1520|winningMaterial,short|
qhutu5|r2qk2r/2p2p2/bpQb1npp/p2p4/N7/1P2PN1P/P2P1PP1/R1B2RK1 b kq - 3 13|d8d7 c6a8 e8e7 a8h8|1520|winningMaterial,fork,short|3:a8h8 a8a6
y7abvn|8/6pk/7p/2P1B3/5p2/5P1P/4nqP1/1Q5K b - - 5 51|g7g6 b1b7 h7g8 b7g7|1520|mate,mateIn2,short|3:b7g7
1o2vlmd|4k3/1R4pp/6n1/P1Pp4/3qnP2/6P1/1P5P/5QK1 w - - 3 44|f1f2 d4f2 g1h1 f2f1|1520|mate,mateIn2,short|3:f2f1
1ntuxke|8/1Q2kq2/3b4/1p1p4/1P1p4/3P4/5P2/5K2 b - - 2 49|d6c7 b7c7 e7f6 c7f7|1520|winningMaterial,endgame,short|3:c7f7 c7f4
yjlewx|r7/pppkpp1p/4b3/8/P2P1P2/2P1K2r/1P2B3/6RR w - - 0 26|e3e4 f7f5 e4e5 h3e3|1520|mate,mateIn2,fork,short|
a8pxms|2k4r/8/p1n1Q3/6q1/PpP1P3/3p2P1/1PN3P1/5RK1 b - - 0 31|c8b8 e6d6 b8c8 d6c6|1520|winningMaterial,fork,short|3:d6c6
j30ciy|r3k2r/1b3pp1/2p2n1p/P2p3P/1qpQ2N1/4P3/1B3PP1/2R1K2R w Kkq - 0 22|d4c3 b4c3 b2c3 f6g4|1520|winningMaterial,fork,short|
6y7u87|8/3Q4/p4Bb1/3kp3/P7/7P/5qPK/4r3 b - - 7 49|d5c5 d7a7 c5c4 a7f2|1520|winningMaterial,endgame,short|
ye3skn|Rb3rk1/1p4pp/1p3p2/1P1bp2P/2P4R/4nNP1/1P4P1/3K1B2 w - - 3 24|d1d2 e3f1 d2e1 d5f3|1520|winningMaterial,short|
1rilgw4|8/2qk4/p1n2r2/8/Pb1PQ3/6r1/2R2P2/2R3K1 w - - 0 37|g1h1 f6h6 e4h4 h6h4|1520|mate,mateIn2,short|3:h6h4
1ulfan4|5rk1/5pp1/2R3b1/3PqN2/4p1P1/3P1BRp/3Q1P1P/1r5K w - - 1 31|d2e1 b1e1 g3g1 e1g1|1520|winningMaterial,short|3:e1g1 e5a1
toqhyv|1k6/1P2R3/3Kp3/5p1p/8/2r1P3/8/8 w - - 6 42|d6d7 c3c7 d7e6 c7e7|1520|winningMaterial,endgame,short|
1qvxl3x|8/3b2pp/2N1k3/2R1p3/1P3p2/1P2P2P/5PP1/r5K1 w - - 1 32|c5c1 a1c1 g1h2 d7c6|1525|winningMaterial,fork,short|3:d7c6 c1c6 f4e3
1cpy105|r2q1rk1/pbpnbppp/4p3/np2P1N1/3P4/P4P1N/BPQ3PP/R1B1K2R b KQ - 5 13|f8e8 c2h7 g8f8 h7h8|1525|mate,mateIn2,short|3:h7h8
1o6u3sl|8/5Q2/p7/P2k4/qp6/8/8/5K2 b - - 21 65|d5c6 f7e8 c6d5 e8a4|1525|winningMaterial,endgame,short|
1jb896q|8/8/8/1k1Q3K/7P/8/8/q7 b - - 5 59|b5a6 d5a8 a6b6 a8a1|1525|winningMaterial,endgame,short|
1qjeyyc|8/1p3pk1/5qp1/p2p1P1n/7P/P1P5/1PBQ1P2/4r1K1 w - - 0 30|g1h2 f6h4 h2g2 h4h1|1525|mate,mateIn2,short|3:h4h1
hd0y1f|8/1p3pk1/6bp/p1p5/P1PpN2q/1P3Q1B/8/7K w - - 0 38|e4d2 h4e1 h1h2 e1d2|1525|winningMaterial,fork,short|
1369qjd|6k1/p5p1/6q1/2bP3p/Q4p1P/1P3P2/P3N1K1/8 w - - 5 45|e2g3 g6g3 g2f1 g3f2|1525|mate,mateIn2,short|
44noso|q5k1/6r1/p3p3/2N2pPp/1P3n2/P5Q1/5P2/2R4K w - - 2 40|g3f3 a8f3 h1g1 f3g2|1525|mate,mateIn2,short|3:f3g2
1ftvjno|3rk2r/pR2ppb1/2n4p/6p1/P1NP4/1Qn1B1P1/4PP1P/1q2K2R w Kk - 0 19|e3c1 b1c1 b3d1 c1d1|1525|mate,mateIn2,short|
lu7q47|3k4/1R4p1/8/2n2r2/P7/5P2/PK1N4/8 w - - 3 45|b7b5 c5a4 b2b3 f5b5|1525|winningMaterial,endgame,short|
or4vm1|3r2k1/1p2bp2/p1b1p1p1/q3P2p/PP2pB1P/2P1Q2R/3rBPP1/R4K2 b - - 0 22|a5a4 a1a4 d2e2 f1e2|1525|winningMaterial,short|3:f1e2 e3e2 e3c1
f5n606|r2qk2r/p2bbppp/Qp1p4/2nNp3/4P3/1P1BB3/P1P2PPP/R3K2R w KQkq - 5 17|d5e7 c5a6 e7f5 d7f5|1525|winningMaterial,short|3:d7f5
2d11t8|1rn2k2/p3bppp/1rR5/2p5/5RP1/PN5P/KPP2P2/5B2 w - - 6 40|f1c4 b6c6 f4f7 f8e8|1525|winningMaterial,short|
87wd6p|1r3r1k/ppq1np1p/1n4p1/1P2p3/P1ppP3/1B1P3Q/2P1NPPP/R4RK1 w - - 0 20|h3f3 c4b3 f3f6 h8g8|1525|winningMaterial,short|
1pwy1bk|8/p5pk/8/P4p1p/5r2/2p1p2P/2R3P1/4B2K w - - 0 47|g2g4 f4f1 h1g2 f1e1|1530|winningMaterial,fork,short|
f3goyz|1r2kb2/2R2Rp1/4pr2/4N2p/4P3/4P3/6PP/5K2 w - - 3 30|f1g1 b8b1 c7c1 b1c1|1530|mate,mateIn2,short|
1i6byh|1r1k3r/2p2pb1/4b1pp/1B1QP3/P7/6P1/5P1P/RNB3K1 b - - 0 24|d8e7 c1a3 c7c5 a3c5|1530|mate,mateIn2,short|3:a3c5 d5d6
1rsdj1f|1kr5/1pp4R/p2r4/4p3/1P2Pp2/Pn3P2/5P1P/2R2B1K w - - 8 36|f1h3 b3c1 h3c8 b8c8|1530|winningMaterial,short|3:b8c8 d6d1
16a74jr|2kr1bnr/pp4pp/2p2p2/q1n1p3/3PP1b1/2p2NNP/PPB2PP1/R1BQ1RK1 b - - 0 13|g4h3 g2h3 c3b2 c1b2|1530|winningMaterial,short|
1ojghhm|rnbqkb1r/pp1ppppp/5n2/4P3/3p4/2P5/PP3PPP/RNBQKBNR b KQkq - 0 4|d4c3 e5f6 c3b2 c1b2|1530|winningMaterial,short|
fmo8kc|r3k2r/1p4bp/p1p2np1/P2Pq3/2P1p2P/Q3Bn1P/1P2BPK1/RN3R2 w kq - 4 21|f1d1 e5h2 g2f1 h2h3|1530|mate,mateIn2,short|3:h2h3 h2h1 h2g1
tatpaw|8/6R1/P7/1P3k2/8/4b1P1/3r4/3K4 w - - 3 54|d1c1 d2d7 c1b1 d7g7|1530|winningMaterial,endgame,short|
1qpq2xl|8/6p1/2R4p/4p2P/P4P2/2k5/3p1PK1/1r6 b - - 5 51|c3b4 c6b6 b4a4 b6b1|1530|winningMaterial,endgame,short|
7n01bz|4k3/1R4pp/6n1/P1Pp4/4nP2/4q1P1/1P5P/5QK1 w - - 7 46|f1f2 e3f2 g1h1 f2f1|1530|mate,mateIn2,short|3:f2f1
ceduxd|2r3k1/5bbp/2q3p1/1QN2p2/8/8/PP3PPP/R1B3K1 w - - 0 26|a2a4 c6c5 c1e3 c5b5|1530|winningMaterial,short|3:c5b5 c5c4 c5e5
1aocqkp|r4rk1/p3bppp/1p1qb3/1Q1p4/2nP1B2/2N2NP1/PP3P1P/R3R1K1 b - - 3 16|a7a6 f4d6 a6b5 d6e7|1530|winningMaterial,short|
ij61lx|1rbk3r/2p2p2/p1pb2pp/8/2B5/B1P1P2P/P4PP1/R4RK1 w - - 2 16|a1b1 b8b1 f1b1 d6a3|1530|winningMaterial,short|
cvq8fc|1r4k1/1pp2ppp/8/B1bn4/1P6/P5rP/5PB1/R3R1K1 b - - 0 27|c5b6 a5b6 g3g2 g1g2|1535|winningMaterial,short|
14ivcd3|r4r1k/1pp3pp/2n2n2/p3b1Rq/2B5/P1N1PN1P/1P1BQP2/2K5 b - - 3 19|e5c3 g5h5 c3d2 f3d2|1535|winningMaterial,short|3:f3d2
1682657|r1b2rk1/5ppp/1q6/p1bpP3/Pp1n4/1Q1B1NP1/1P3P1P/R1B2RK1 w - - 5 18|d3h7 g8h7 f3d4 c5d4|1535|winningMaterial,short|
1k1470i|k3r2r/pp1Q1pp1/B2b3p/7P/8/2n1qN2/PP1R2P1/2K4R b - - 1 26|b7a6 d7c6 a8b8 c6d6|1535|winningMaterial,fork,short|
8sacba|3r1rk1/1p1qn3/p2pN1pb/4p2p/PPP5/4BB1P/3Q2P1/3R1RK1 b - - 0 29|f8f3 f1f3 h6e3 d2e3|1535|winningMaterial,short|3:d2e3
4gulna|r4r1k/3n3p/2pq2pb/1pP1p3/nP2P3/NN2pPPB/2Q4P/R1R3K1 b - - 0 28|d6d4 b3d4 e5d4 h3d7|1535|winningMaterial,short|3:h3d7 a3b5 f3f4
17cbzbt|1rq1r1k1/p2n1pbp/3p2p1/2pP3n/Q1P5/5N2/PP1BBPPP/1R3RK1 w - - 10 20|a4c6 e8e2 b1e1 e2e1|1535|winningMaterial,short|3:e2e1 c8c6 e2e8
8rv91o|5rk1/qP1RQp2/6p1/4p3/4B2p/3K1P1P/2P5/1r6 w - - 0 41|e4g6 a7a6 d3e3 a6g6|1535|winningMaterial,fork,short|3:a6g6 a6b6
1v86tj2|r1b1k1r1/4p3/pnp2np1/6Pp/2p2P2/2P2P2/P1B2K2/R1B3NR b q - 1 20|c8f5 c2f5 g6f5 g5f6|1535|winningMaterial,short|3:g5f6
1i01ql2|r2qrbk1/3b1pp1/1nQ1pn1p/p2p4/N2P1B2/3BPN2/PP3PPP/2R2RK1 w - - 1 15|f3e5 d7c6 a4b6 d8b6|1535|winningMaterial,short|3:d8b6 c6b5 c6b7
1sd1is0|2r4r/1p3pk1/p1q1p3/2b2p2/6P1/P2BB1P1/1P2Q1K1/3R1R2 w - - 1 33|d3e4 c6e4 f1f3 c5e3|1535|winningMaterial,short|3:c5e3 e4g4
rk66mc|r3r1k1/pp3pbp/2pp2p1/8/2q5/1P4PB/P1NQ1P2/1RB3K1 b - - 0 19|g7c3 b3c4 c3d2 c1d2|1535|winningMaterial,short|
1mhc53d|7k/2R5/6KP/4P3/8/2p5/8/2r5 b - - 5 55|c1d1 c7c8 d1d8 c8d8|1535|mate,mateIn2,endgame,short|
sgirs4|rr4k1/2p3pp/2pn4/P2bNp2/3P3b/P4PPP/4N3/R1B1R1K1 b - - 0 22|b8b3 g3h4 d5f3 e5f3|1535|winningMaterial,short|3:e5f3 e2f4 a3a4
tseg1e|5k2/8/4rpQ1/p7/2r5/7P/2K5/8 w - - 2 71|c2b1 e6b6 b1a1 c4a4|1540|mate,mateIn2,endgame,short|
hwwh9n|r2qk2r/pppbbppp/2np1n2/1B6/3pP3/2N2N2/PPP2PPP/R1BQR1K1 w kq - 0 8|d1e2 d4c3 b5c6 b7c6|1540|winningMaterial,short|3:b7c6 d7c6
va8ke7|2rk1b1r/pp2pQpp/8/4q3/8/P3B3/P4PPP/R2K3R w - - 0 19|f7b3 e5a1 d1e2 a1h1|1540|winningMaterial,short|3:a1h1
1yizg0a|r4rk1/1p3p2/p5p1/q2pbb1p/P7/2P1P2P/2BQNPP1/1R3RK1 b - - 2 22|e5c3 e2c3 f5c2 d2c2|1540|winningMaterial,short|
rnb648|r3r1k1/p1n1q1pp/Pp1b1pb1/1B1p4/1P1N1p1P/2P2P2/R2B2P1/3QR1K1 b - - 2 26|c7b5 e1e7 e8e7 d4b5|1540|winningMaterial,short|
5sqfeg|6k1/4R2p/1r2n1PB/pP1p4/2p3P1/1P6/8/6K1 b - - 0 41|d5d4 e7e8 e6f8 e8f8|1540|mate,mateIn2,short|3:e8f8
qmu4my|4R1r1/1k5Q/pprb4/6q1/3p4/6PP/PPP2P2/6K1 b - - 0 25|g5e7 e8e7 d6e7 h7g8|1540|winningMaterial,short|3:h7g8 h7e7 h7f7
1mmxx07|2b2kr1/2pnBp1p/3n3p/3p4/Bp1N3P/5P2/6P1/4R1K1 b - - 2 27|f8e8 e7d6 e8d8 d4c6|1540|mate,mateIn2,short|3:d4c6
1n8g5mk|r6r/pR1b1kp1/3bpq1p/2p5/3P4/5N2/P1PBQP1P/4K2R b K - 0 17|f7e8 b7d7 a8b8 d7d6|1540|winningMaterial,short|3:d7d6
proskf|r2r2k1/1p2npb1/1q5p/3pBQp1/p2Pn3/5N1P/PPB2PP1/R1R3K1 w - - 2 22|c2e4 e7f5 e4f5 g7e5|1540|winningMaterial,short|3:g7e5 d8e8 d8f8
ez7dz1|5r1k/1pp2pp1/p1b4p/5q2/2P2Q1P/8/PP3PP1/2BrR1K1 w - - 0 28|f4f5 d1e1 g1h2 e1c1|1540|winningMaterial,fork,short|
aldhul|6k1/3p3p/r3p3/P3Pp2/3P1p2/R1P5/1r2K1P1/7R w - - 11 35|e2f1 b2b1 f1e2 b1h1|1540|winningMaterial,short|3:b1h1 f4f3
11mr96o|r1b1k2q/pp2pp2/2pp1b2/P2PN1Q1/4P1n1/2N5/1PP2PP1/R1B1KB2 w Q - 1 18|e5c6 f6g5 c1g5 b7c6|1540|winningMaterial,short|3:b7c6 h8g7 c8d7
1ihnmt8|5rk1/pp3pp1/4p3/4P3/PP2q3/7P/2r2QP1/3RR1K1 b - - 4 31|b7b5 e1e4 c2f2 g1f2|1545|winningMaterial,short|
1di95nx|5rk1/5pp1/R2p3p/3qpB1Q/7P/2B3P1/1r2N3/5K2 b - - 1 40|b2e2 h5e2 d5h1 f1f2|1545|winningMaterial,short|
14nj60g|r1b2rk1/np2bpp1/4pn1p/pN1p4/P1PP4/2PBPN2/q4PPP/R2Q1RK1 b - - 9 17|a2a1 d1a1 a7b5 c4b5|1545|winningMaterial,short|3:c4b5 a4b5
gv9w3s|r3brk1/pp4b1/3qpp1p/3pN1p1/3P4/2P2NP1/PPQ1R1PP/5RK1 w - - 0 20|e2f2 f6e5 f3e5 f8f2|1545|winningMaterial,short|3:f8f2 e8h5 d6e7
13tefzr|2r1k2r/3n1p1p/p2p2p1/2pN2Q1/1p2P1BP/q1PP2P1/1b3P2/5RK1 b k - 1 23|d7f6 g5f6 b4b3 f6h8|1545|mate,mateIn2,short|3:f6h8 f6e7
16374v9|8/4k3/5q1Q/6N1/8/8/3K4/8 w - - 11 70|h6h2 f6b2 d2d3 b2h2|1545|winningMaterial,endgame,short|
7ztaa0|8/4r3/6P1/3kP1K1/6P1/8/8/8 w - - 3 54|g6g7 e7g7 g5f6 g7g4|1545|advantage,endgame,short|
1df7rvt|5r1k/7p/1p1n1Rp1/2p1p3/6R1/2P3QP/1PB3P1/2q3K1 w - - 1 39|f6f1 f8f1 g1h2 f1h1|1545|mate,mateIn2,short|
vlxn3m|7R/2r2K2/1k6/8/6B1/7P/8/4b3 w - - 14 62|f7f6 e1c3 f6g5 c3h8|1545|winningMaterial,endgame,short|3:c3h8 c7c5
mt92k0|8/5R2/1k2P3/P2P4/2K5/b7/8/4r3 b - - 0 79|b6a5 f7a7 a5b6 a7a3|1545|winningMaterial,endgame,short|
mtbmdc|4rrk1/p4qp1/7p/2p1R3/3p3P/1P6/P3QPP1/R5K1 w - - 1 24|a1e1 e8e5 e2d2 e5e1|1545|winningMaterial,short|3:e5e1 e5e8 f7f5
1089d3v|3rr1k1/pp6/2pn4/4R3/4KPp1/1P1p4/P2B4/6R1 w - - 8 37|e4d3 d6f7 d3c3 f7e5|1545|winningMaterial,short|
1fu9xe|r2q2k1/1bp3pp/2Qb1p2/p1n5/8/2N2NB1/PP3PPP/4R1K1 w - - 1 19|c6b7 c5b7 g3d6 b7d6|1545|winningMaterial,short|3:b7d6 d8d6
7ed1do|1Rb5/6k1/5p2/B4p2/4p3/1P3P1P/6P1/2r3K1 w - - 2 48|a5e1 c1e1 g1f2 e1c1|1545|winningMaterial,endgame,short|
1b79y1p|2r5/1k3p2/2bRp1p1/1p2P3/1P1KB2p/4P2P/8/8 w - - 26 47|e4c6 c8c6 d6d7 c6c7|1550|winningMaterial,short|
minni1|r5k1/1bq2pbp/pn2p1p1/1p6/1P1QNP2/P4NP1/4BP1P/3R2K1 w - - 5 24|f3g5 g7d4 d1d4 b7e4|1550|winningMaterial,short|3:b7e4 c7e7 b6d5
164icxk|1rb1qr1k/1p2b1pp/8/1N1ppP2/1nQ3P1/1B1P1N1P/PP3P2/R4RK1 w - - 0 19|b5c7 d5c4 c7e8 c4b3|1550|winningMaterial,short|3:c4b3
18eepzr|r3rnk1/1q6/p3pb1Q/3n4/PppR4/2P2N2/1PB2PPP/R5K1 w - - 0 26|f3e5 f6e5 d4g4 e5g7|1550|winningMaterial,short|
1qdrmfe|8/5p2/5kp1/3P4/5nP1/R4P1K/1r5P/5R2 w - - 9 47|h3h4 g6g5 h4g3 b2g2|1550|mate,mateIn2,endgame,short|
yyzcuk|2r1brk1/bp2qppp/p3pn2/6N1/NP3P2/P2Q4/1BP3PP/3R1R1K b - - 0 20|e8a4 b2f6 a4c2 f6e7|1550|winningMaterial,short|3:f6e7
sr80sa|8/1prkbp2/4p1p1/r4b1p/R2P1P1P/2P1KBP1/4N3/R7 b - - 0 24|c7c3 e2c3 a5a4 c3a4|1550|winningMaterial,short|3:c3a4 a1a4
1t1y9c5|r4rk1/1p4p1/5nqp/PPpb4/5PN1/2B1p2P/1Q2BbP1/R2R3K b - - 1 29|f6h5 d1d5 h5g3 h1h2|1550|winningMaterial,short|
1vzr5s8|1kq4r/2p4p/Q4np1/3n1p2/P2P4/P3P3/3B2PP/1R4K1 b - - 2 28|d5b4 b1b4 c8b7 a6b7|1550|mate,mateIn2,short|
kj3448|3r2k1/5p2/p2bp1p1/pr1p2P1/3P4/2PNP2R/2K2P2/7R b - - 1 29|b5b4 h3h8 g8g7 h1h7|1550|mate,mateIn2,short|
uws6hh|3r1rk1/ppq2p2/n3p2b/2p3n1/P1N1Qp2/2P2B2/1P3PPB/R3R1K1 w - - 0 25|h2f4 g5f3 e4f3 c7f4|1550|winningMaterial,fork,short|
1c2p6ve|Q7/6k1/4K2p/8/8/8/8/4q3 w - - 1 70|e6d5 e1h1 d5d4 h1a8|1550|winningMaterial,endgame,short|
18v4u53|6Q1/8/7K/8/3k4/8/7r/8 w - - 1 57|h6g5 h2g2 g5f6 g2g8|1550|winningMaterial,endgame,short|
1mieqf9|4r3/5k2/2p4R/1p3P2/r1B5/5P2/1P1B1K2/8 b - - 0 42|f7g7 f5f6 g7f8 h6h8|1555|mate,mateIn2,endgame,short|3:h6h8
v38hrh|6k1/1p4P1/8/p4R2/P2P1P2/KPr1rb2/8/6R1 b - - 6 38|c3c1 f5f8 g8h7 f8h8|1555|mate,mateIn2,short|3:f8h8
ooqljz|r2r4/2qn1k1p/2b3p1/P1b1p1N1/2P4P/1R1B4/5PP1/1Q3RK1 b - - 1 28|f7g7 g5e6 g7f7 e6c7|1555|winningMaterial,fork,short|3:e6c7
1swbp5o|r4rk1/pp2ppbp/1n1p1n2/2q5/7P/P1NbBN2/1PP1Q1P1/2KR3R w - - 0 16|e3c5 d3e2 c3e2 d6c5|1555|winningMaterial,short|3:d6c5 g7h6
1hga9mb|r1bqkb1r/ppp1pp1p/2B2np1/4P3/8/2p2N1P/PPPP1PP1/R1BQK2R b KQkq - 0 7|d8d7 c6d7 c8d7 e5f6|1555|winningMaterial,short|3:e5f6 e1g1 d2c3
1iirni5|6k1/5ppp/p1r1p3/b2p4/n2P1BPP/4P3/1K2BP2/1R6 w - - 0 37|b2a2 a4c3 a2a1 c3b1|1555|winningMaterial,fork,short|3:c3b1
136t4yx|8/8/Q7/8/8/8/p1kr2K1/8 w - - 17 81|g2g1 d2d1 g1f2 a2a1q|1555|winningMaterial,promotion,endgame,short|
29kkop|2kr4/1pq1n3/p5p1/3pn2r/8/PNN2bQ1/1PPR2B1/2K1R3 w - - 4 26|c3a4 e5d3 c1b1 c7g3|1555|winningMaterial,fork,short|3:c7g3
akdeos|rnbqkb1r/ppp1pp1p/6p1/3n4/8/1QN2N2/PP1PPPPP/R1B1KB1R b KQkq - 1 5|d5f4 b3a4 b8c6 a4f4|1555|winningMaterial,fork,short|
9h8jvd|8/4k3/1P6/2R5/3pp1P1/5p2/r4P1P/5K2 w - - 0 48|c5c2 a2a1 c2c1 a1c1|1555|mate,mateIn2,endgame,short|
i5cv7m|1Q4k1/4qnp1/4p2p/3pP2P/2pP1R2/8/6PK/8 b - - 11 53|e7e8 b8e8 g8h7 f4f7|1555|winningMaterial,short|3:f4f7 e8f7 e8e6
1lwqbvr|2nk4/8/1p6/3K4/2P5/8/8/3B4 b - - 9 50|d8d7 d1g4 d7d8 g4c8|1555|winningMaterial,endgame,short|
fud557|8/r1p4k/pp2q2p/4R3/3Q4/P1P5/3n2PP/6K1 b - - 4 44|e6a2 e5e7 a2f7 e7f7|1555|winningMaterial,short|
wzwlu7|r2qr1k1/1ppn1pbp/p4np1/3ppb2/P2P1B1N/2P2PP1/1P1NP2P/R1Q1RBK1 w - - 0 16|d2b3 e5f4 h4f5 g6f5|1555|winningMaterial,short|3:g6f5
kkb1v3|6k1/5np1/1p1K2P1/pr1N1P2/3p3R/8/8/8 w - - 2 63|d6c6 b5c5 c6b6 c5d5|1560|advantage,endgame,short|
3mdquk|2kr3r/pp4pp/2p5/4PPN1/1PBn1P2/P1K5/7P/7R b - - 3 23|d4f5 c4e6 c8b8 e6f5|1560|winningMaterial,fork,short|
ghj9tf|r3kb1r/pp2pppp/2n5/8/2QP1B2/2P1PN2/Pq1nKPPP/2R2B1R w kq - 0 16|c1c2 d2c4 c2b2 c4b2|1560|winningMaterial,short|
1fayb0p|6k1/5p2/4p1p1/p2r3p/2R5/P1Q3P1/1P3PK1/4q3 b - - 4 37|e1d2 c4c8 d5d8 c3d2|1560|winningMaterial,short|
13aw28d|2r1r1k1/1p3p2/5n1p/p1P5/Pb1P4/2N5/1PQBKPqP/R6R w - - 3 29|e2d1 g2h1 d2e1 h1e1|1560|mate,mateIn2,short|
u0ma44|3rr1k1/pp6/2pn4/4R3/4KPp1/1P1p4/P2B4/6R1 w - - 4 35|e4d4 d6f7 d4e4 f7e5|1560|winningMaterial,short|
1a40cp2|8/6pk/3Pp1q1/pP5p/3Rr2P/P5P1/1Q2R1K1/2r5 b - - 2 39|e4d4 b2d4 c1c2 e2c2|1560|winningMaterial,short|3:e2c2
k88gir|2k2r2/1pp1B2p/p3R1p1/5p2/1n6/2b5/6PP/1R3K2 b - - 3 38|f8f7 e7b4 c3b4 b1b4|1560|winningMaterial,short|
mw6y4a|3k4/R7/5n2/8/8/5K2/8/8 b - - 6 61|f6g8 a7a8 d8c7 a8g8|1560|winningMaterial,endgame,short|
hvoxxc|r1b3k1/1p2qp2/2pn3p/6p1/4N3/BPP3P1/P3QbBP/R5K1 w - - 0 24|g1h1 a8a3 e2f2 d6e4|1560|winningMaterial,short|
1cfbp8p|r3k3/pp1b2b1/1q1pp1N1/8/2pPPPn1/P1P2B2/1P2N2r/R1Q2RK1 b q - 0 19|d7c6 f3g4 h2e2 g4e2|1560|winningMaterial,short|
1ngixt1|2kr4/1pb2pp1/8/pP1R1PPp/6rP/7K/1PP2B2/5R2 w - - 1 30|f5f6 d8d5 f6g7 d5d8|1560|winningMaterial,short|
qr085y|3r2k1/1p2Rp2/p7/3PPn1p/4r3/1P5K/P2RNP2/8 w - - 1 39|e2g3 e4h4 h3g2 f5e7|1560|winningMaterial,short|
1sbd9mz|3k3r/2bb1ppp/1N2p3/p7/3N4/1P2P3/1P3PPP/R5K1 w - - 5 22|a1a5 c7b6 a5a8 d7c8|1565|winningMaterial,short|
1ulkfn3|r2q1rk1/1pp2pp1/p1b2b1p/5p2/6Q1/7N/PPP2PPP/2BRR1K1 w - - 0 20|d1d8 f5g4 d8a8 f8a8|1565|winningMaterial,short|
1om3rxv|2r5/4kp1p/pn6/8/4P2R/P2p1P2/3PBP2/2BK4 b - - 0 33|c8c1 d1c1 d3e2 h4h1|1565|advantage,short|
1wswi6e|6bk/P4n2/6pp/8/3pP3/8/3p2BP/6NK b - - 0 60|d2d1r a7a8q|1565|winningMaterial,promotion,quietMove,oneMove|
up37wc|3r1r2/6k1/pNb1p1p1/2qPP2p/P6Q/5pP1/7K/2R2R2 b - - 2 36|c6b5 c1c5 g7h6 a4b5|1565|winningMaterial,short|3:a4b5 f1f2 h4d8
1cmmox2|r3k2r/pbp1qpp1/1pnB3p/8/3pB3/2P2N2/PP2QPPP/R3K2R b KQkq - 0 14|e7d6 e4c6 e8f8 c6b7|1565|winningMaterial,fork,short|3:c6b7
169enr0|8/8/6N1/R4p2/P2P1P2/5k2/r7/5K2 w - - 3 59|a5b5 a2a1 b5b1 a1b1|1565|mate,mateIn2,endgame,short|
113epiy|8/6p1/r2b1p2/3k1P2/8/1K6/1P6/3R2B1 b - - 3 48|d5e5 g1h2 e5f5 h2d6|1565|advantage,endgame,short|3:h2d6 d1d6
ricg4s|rn1qkb1r/pp2pp1p/2p3p1/3nNb2/2pPP3/2N3P1/PP3PBP/R1BQK2R b KQkq - 0 8|f5e6 e4d5 e6d5 c3d5|1565|winningMaterial,short|3:c3d5 g2d5 e1g1
1egvzrr|r5kr/1p3pp1/p1p2nn1/2Pp4/1P1P3p/4PBqb/P1QNN1P1/R4R1K b - - 1 25|h3d7 e2g3 h4g3 h1g1|1565|winningMaterial,short|
s4j0kz|r5kr/1p1N1pp1/4p3/p1bn4/P5np/1BP4N/1PQBKPq1/3R2R1 b - - 1 26|d5f4 d2f4 g2h3 d7c5|1565|winningMaterial,short|3:d7c5 c2e4 d1d3
1p5b2fh|r3kb2/1q1n1pp1/4pn2/pB5r/3P4/2P2N1P/1P2QP1P/R1B1K2R w KQq - 0 19|b5d3 h5h3 h1g1 h3f3|1565|winningMaterial,short|3:h3f3
2ngwum|2r1k2r/3qn2p/p3ppp1/2N5/3n4/2Q2B2/PP3PPP/R4RK1 b k - 2 23|c8c5 c3c5 d4f3 g2f3|1565|winningMaterial,short|
k69fet|r7/p1k1bpp1/1N2p2p/P1p1P3/4rB1P/7R/5PP1/R3K3 w Q - 3 23|e1d2 a8d8 d2c3 e4f4|1570|winningMaterial,short|3:e4f4 a7b6
1eetdju|3k4/8/R2K4/8/P7/8/r7/8 b - - 4 64|a2b2 a6a8 b2b8 a8b8|1570|mate,mateIn2,endgame,short|
mzwvsw|r3k3/8/p1pRp1r1/1p2Q3/4P1pN/1P4P1/P1P2q1K/8 w q - 0 33|h4g2 g6h6 e5h5 h6h5|1570|mate,mateIn2,short|
1ep2lb1|5b2/5qrk/1pn1Q1pp/p1p1ppBn/P1N4P/2P3PN/1P3P2/3R3K w - - 8 36|e6d5 f7d5 d1d5 h6g5|1570|winningMaterial,fork,short|
1cpvjxx|6k1/5p2/4p1pp/1r3q2/P2b1P2/8/2R4P/RKQ5 w - - 0 36|c1b2 b5b2 b1c1 f5c2|1570|mate,mateIn2,short|3:f5c2
5igj58|rnb2rk1/pp2qppp/3b4/2pnp1N1/8/1PNPP3/PB2BPPP/R2QK2R w KQ - 6 11|e2h5 d5c3 h5f7 e7f7|1570|winningMaterial,short|3:e7f7 f8f7
178q5mx|8/4KP2/2N4k/8/3p4/2r5/8/8 b - - 2 63|h6g5 f7f8q|1570|winningMaterial,promotion,quietMove,endgame,oneMove|
1lcz961|r1b1r1k1/1pnn1pbp/p1p3p1/3q4/N2N1P2/4PB1P/1PQB2P1/R2R2K1 b - - 3 18|g7d4 f3d5 c7d5 e3d4|1570|winningMaterial,short|3:e3d4
c0gwtw|1k1r2rb/nbR4Q/1p2q1p1/p4nP1/2PPp2P/P1N1P2B/1P6/2K4R b - - 0 25|e6c8 c7c8 b7c8 h3f5|1570|winningMaterial,short|3:h3f5
1icuopn|6k1/1b3pp1/4p3/1Pp1P1P1/p1P2q1p/7K/P3Q3/1R2N3 w - - 2 35|e2f3 b7f3 a2a3 f4g3|1570|mate,mateIn2,short|3:f4g3
1u75cwt|5k2/R7/3p1K2/1p1Pp3/P4p2/1P3r2/1P6/8 b - - 3 41|f3c3 a7a8 c3c8 a8c8|1570|mate,mateIn2,endgame,short|
xia7py|r6k/p4pp1/1q3n1p/N2pP3/Pp6/2rN2P1/2Q3KP/3RR3 w - - 0 32|c2c3 b4c3 e5f6 b6a5|1570|winningMaterial,short|3:b6a5 g7f6 c3c2
1qn14|8/8/R4P1p/2Pr4/5k2/PP3n2/1bB1K3/8 w - - 1 55|c2e4 d5d2 e2f1 f4e4|1570|winningMaterial,endgame,short|3:f4e4 d2d1
t0pco6|2kr3r/pp3pp1/2p1b2p/3N4/2Q1P3/2R2qP1/PP3P1P/R5K1 b - - 1 19|d8d5 c3f3 d5d1 a1d1|1575|winningMaterial,short|3:a1d1
1sudulf|rn3rk1/1p3pbp/p5p1/P1p1p3/2N1n2q/2P1P2P/1P3PPB/R1QBK2R w KQ - 2 18|h2g3 e4g3 f2g3 h4c4|1575|winningMaterial,short|3:h4c4
18tcav2|8/5r2/1R5k/8/8/6K1/6P1/8 b - - 12 58|f7f6 b6f6 h6g5 f6f3|1575|winningMaterial,endgame,short|
r1ruha|2Qb4/4k2p/8/1pP1p1q1/p3B3/P7/1n1NP2P/4K3 w - - 3 30|e2e3 g5e3 e1f1 e3d2|1575|winningMaterial,short|
a4i575|rn2kb1r/pQ2pp1p/2q3p1/2p2b2/2PP2n1/4BN2/PP2BPPP/RN2K2R w KQkq - 1 10|b7a8 c6a8 b1c3 g4e3|1575|winningMaterial,short|3:g4e3 a8b7 f8g7
7gcg6n|8/K1kr4/2p5/P1P5/8/8/3p4/3R4 w - - 3 54|d1f1 d2d1q|1575|winningMaterial,promotion,quietMove,endgame,oneMove|
h5a45n|3r2k1/3N2p1/1pR1pp1p/8/1b1Pp3/4P1P1/5P1P/6K1 w - - 2 35|d7f6 g7f6 c6b6 b4d6|1575|advantage,short|
b4i5t4|8/3B1p2/1p4b1/p1p4k/P1Pp1q1p/1P5K/4Q2N/8 b - - 13 49|f4g4 e2g4 h5h6 g4h4|1575|winningMaterial,short|
5wnp96|7r/2R4P/5P2/8/1k6/8/p5K1/8 w - - 0 68|g2f3 a2a1q|1575|winningMaterial,promotion,quietMove,endgame,oneMove|
t2xzle|r5k1/1p2q2p/2pNp1pb/3n4/1P3P2/4Q2P/6P1/3RR1K1 w - - 2 34|e3e2 e7d6 e2e6 d6e6|1575|winningMaterial,short|
1lunfqd|r3kbnr/pp1n1ppp/2p1bq2/1B2p3/3pP3/2P2NN1/PP1P1PPP/R1BQK2R w KQkq - 0 8|d2d3 c6b5 c1g5 f6g6|1575|winningMaterial,short|
wdppo7|r2qr1k1/1b2bNpp/p4n2/1p1p4/1P2P3/3P3P/1P3PP1/RNBQR1K1 b - - 0 15|f6e4 f7d8 e4f2 g1f2|1575|winningMaterial,short|3:g1f2 d1e2 e1e7
1m2qs6y|4r3/pp4p1/2k2p2/8/6nP/P5B1/1P3K2/3R4 w - - 4 41|f2f1 g4e3 f1e2 e3d1|1575|winningMaterial,fork,endgame,short|3:e3d1
1s6bk30|7r/1p1b4/2p2k2/p3pB2/P3P1pp/4K3/1PP2PP1/7R b - - 4 36|h4h3 f5d7 h3g2 h1g1|1580|advantage,short|
159p6i5|r4rk1/1bq2p1p/p3p1p1/2p1P2P/P2Ppb2/N1P2N2/4QPP1/RR4K1 w - - 0 22|b1b7 c7b7 f3h2 f4h2|1580|winningMaterial,short|3:f4h2 c5d4 f7f5
d3gwo0|r1b1k2r/pp2ppbp/2n2np1/3p4/3P3B/4P3/Pq1NNPPP/R1Q1KB1R b KQkq - 1 10|b2a1 c1a1 e8g8 h4f6|1580|winningMaterial,short|3:h4f6 e2g3 g2g4
1uvlmu|rn2kbnr/ppq2p1p/2p3p1/P3pb2/4Q3/2N2N2/1PP1PPPP/R1B1KB1R w KQkq - 2 9|c3b5 c6b5 e4e5 c7e5|1580|winningMaterial,short|
sou9ex|r2q1rk1/1p2bppb/1n2p2p/4N3/p1Pp4/P1RB3P/1P3PPB/3QR1K1 w - - 0 22|e5c6 b7c6 d3h7 g8h7|1580|winningMaterial,short|3:g8h7 g8h8
1su8upv|r3r1k1/2p1npb1/6pp/pp2P1B1/8/5N2/PP3PPP/R2R2K1 w - - 0 21|e5e6 h6g5 e6f7 g8f7|1580|winningMaterial,short|
1lqipy4|r1bqkb1r/ppp1ppp1/5n1p/8/3n4/5NPP/PPPPQPB1/RNB1K2R w KQkq - 1 8|e2e5 d4c2 e1d1 c2a1|1580|winningMaterial,fork,short|3:c2a1 f6d7
eb8lcc|1r4r1/k2n1p2/1p1q3p/p1p3Np/P1P2P2/2Np4/3Q2B1/1R4K1 b - - 1 37|h6g5 c3b5 a7a6 b5d6|1580|winningMaterial,fork,short|3:b5d6
69hrta|2rqr1k1/1p3pb1/p3b1pp/2nBp3/1PPp2P1/3P1P1P/P3Q3/R1B1RNK1 b - - 0 25|b7b6 b4c5 e6d5 c4d5|1580|winningMaterial,short|
1pc2t5x|8/8/5kp1/7p/5P1P/8/B2p1PK1/8 w - - 0 48|f4f5 d2d1q|1580|winningMaterial,promotion,quietMove,endgame,oneMove|
xku3dt|6r1/6P1/5p2/p3pP2/4K3/1P1p4/P5R1/5k2 w - - 4 46|e4f3 e5e4 f3e4 f1g2|1580|winningMaterial,endgame,short|
16c3k0f|r3k2r/2p1nppp/2p1b3/8/1P6/P4BP1/1B1P1K1q/RN1QR3 w k - 0 18|f2f1 e6h3 f3g2 h2g2|1580|mate,mateIn2,short|
71i4g2|8/2p3k1/6n1/3P2p1/P2q4/P2N3Q/5K2/8 w - - 2 44|f2g3 d4d3 g3h2 d3h3|1580|winningMaterial,endgame,short|3:d3h3
1drk0ll|r2qk2r/3n1ppp/Rp6/2pp4/1b1P4/1N2PN1P/1P1nQPP1/5RK1 w kq - 0 17|a6a8 d2f3 g2f3 d8a8|1580|winningMaterial,short|
10mxzlv|5r2/1pb3pk/2r3pp/pR1P1n2/P7/1BB3Pq/1PR2P2/5QK1 b - - 6 30|h3h5 d5c6 f8e8 b5f5|1585|winningMaterial,short|3:b5f5 c6b7 c2d2
1hvdise|8/kp2Pq2/1bp5/p3r1BR/P7/1P6/2P1Q3/R6K w - - 7 44|g5e3 e5h5 e2h5 f7h5|1585|winningMaterial,short|
1oreuh4|8/1R1kr3/2p2p2/p2p1n1p/P2P1B2/2PP4/4rP2/3K2R1 b - - 2 46|d7e6 b7e7 e6e7 d1e2|1585|winningMaterial,short|3:d1e2
5wfn87|R2Q4/7k/PK6/1p6/4p3/1P6/1P3q2/2r5 w - - 1 52|b6b5 f2c5 b5a4 c1a1|1585|mate,mateIn2,endgame,short|
t14w7p|2rk3r/R4pp1/4p2p/1BPp2bP/3Pb1P1/4Pn2/1P5B/5RK1 w - - 0 27|g1g2 f3d4 g2h3 d4b5|1585|winningMaterial,short|
6vqdqa|8/8/7n/5kp1/2R5/8/6P1/6K1 b - - 3 70|f5e6 c4c6 e6d7 c6h6|1585|winningMaterial,endgame,short|3:c6h6
fyyn76|r1B4k/pp5p/2q3p1/4n3/P5P1/7P/1PQ2P2/R5K1 w - - 2 33|c2e2 e5f3 g1f1 a8c8|1585|winningMaterial,short|3:a8c8 f3h2
1mrg6j1|8/1r5P/1P4K1/4k3/6P1/8/8/8 b - - 0 65|e5f4 h7h8q|1585|winningMaterial,promotion,quietMove,endgame,oneMove|
qy2m2p|r2q1rk1/1p1n1pp1/p1pbp3/2P3Pp/3PQ2P/P4N2/1P3P2/R1B1K2R b KQ - 0 19|f7f5 e4e6 g8h7 e6d6|1585|winningMaterial,fork,short|3:e6d6 e1g1 g5g6
1mtijhe|r4nk1/1p1brp2/2pq1n1p/p2p2p1/P2P1N2/1PNBP2P/3Q1PP1/4RR1K w - - 0 29|g2g4 g5f4 e3f4 e7e1|1585|winningMaterial,short|3:e7e1 a8e8 g8g7
7ir94h|3r3r/1pN2pbp/p2k2p1/8/3nP3/P3B3/1P3P1P/R4RK1 w - - 5 25|a1c1 d4e2 g1g2 e2c1|1585|winningMaterial,fork,short|
n1ud55|1r2r1k1/2pbqpp1/2pp4/1p5n/1P2PP1p/P1N4P/2PQB1P1/R3R1K1 b - - 0 20|h5f4 d2f4 e7e5 f4e5|1585|winningMaterial,short|3:f4e5 e1f1 f4e3
ldnafj|r2qkb1r/pppn1ppp/4p1b1/8/2PPn2N/2N1B3/PP2BPPP/R2QK2R w KQkq - 6 10|d1b3 d8h4 a1d1 e4c3|1585|winningMaterial,short|3:e4c3 f8e7 a8b8
qg02jv|3r2k1/1p3p1p/2p3p1/2n1q3/2P5/2B1NBnP/P3PP2/3R1RK1 b - - 1 27|d8d1 c3e5 g3f1 e3d1|1590|winningMaterial,short|
6m370l|rn1qkbnr/pp3ppp/4p3/1B1p4/8/2N2b1P/PPPP1PP1/R1BQK2R b KQkq - 1 7|d8d7 b5d7 b8d7 d1f3|1590|winningMaterial,short|3:d1f3 g2f3
m2vvma|r1b2rk1/p4pp1/1pq1pn1p/3p4/3p3R/2PBP1P1/PP1N1PP1/R2QK3 w Q - 0 14|e3e4 d4c3 e4e5 c3d2|1590|winningMaterial,short|3:c3d2
1kco7h3|r2qk2r/1pp2pb1/p2pb2P/8/4P3/2N1nN2/PP2B1P1/2RQK2R w Kkq - 0 17|e1d2 e3d1 h6g7 h8g8|1590|winningMaterial,short|
138zbco|6r1/4k1r1/p3p1P1/1p1n3P/2pP2p1/2P1pR2/PP6/R4NK1 w - - 0 33|f1e3 g4f3 g1f2 d5e3|1590|winningMaterial,short|3:d5e3 d5f6 d5f4
t3nbuw|r1bq1rk1/pp3ppp/3bp3/8/1P6/3R1NB1/PPQ2PPP/4K2R b K - 0 15|d8c7 c2c7 d6c7 g3c7|1590|winningMaterial,short|
1mpjyns|3R4/6pk/1pr3q1/p3Pp2/Pb2pP1p/1P2P2P/6P1/B1rQ2RK w - - 9 34|d8h8 h7h8 d1c1 c6c1|1590|winningMaterial,short|
h73vqs|2r1rbk1/3b1pp1/2p5/2npP2p/3N1B1P/1pP2PP1/1PK5/R4B1R w - - 0 24|d4b3 d7f5 c2d1 c5b3|1590|winningMaterial,short|
1530fj9|rnbqk2r/1pp1pp1p/p2p2p1/3Pb3/1PP5/6PP/PB1NQP2/R3KB1R w KQkq - 0 15|f1g2 e5b2 e1g1 b2a1|1590|winningMaterial,short|3:b2a1 a6a5 e8g8
252hkn|r3q1k1/3b1pbB/3pP3/2p5/3p1P2/3Q2P1/7N/4R1K1 b - - 4 36|g8f8 e6e7 e8e7 e1e7|1590|winningMaterial,short|
1lehsba|r2q1rk1/1pp2pp1/p1b2b1p/8/5N2/6Q1/PPP2PPP/2BRR1K1 b - - 0 21|f8e8 d1d8 a8d8 e1e8|1590|winningMaterial,short|3:e1e8 c1e3 e1f1
qb9dqw|4r1k1/1p3p2/7p/p1Pn4/P2P4/2KQ1q2/1P3P1P/R6R w - - 3 34|c3b3 f3d3 b3a2 d5b4|1590|mate,mateIn2,short|3:d5b4
vl31dn|r3k2r/p4P1p/2p2np1/2b5/3N4/6BP/P4P1R/3R1K2 b kq - 0 25|e8f8 d4e6 f8f7 e6c5|1590|advantage,fork,short|
1kqob2c|8/2k5/7R/8/6K1/2r5/7p/8 w - - 2 80|h6h4 c3c4 g4g3 c4h4|1595|winningMaterial,endgame,short|
1l7s969|rn3rk1/pp3ppp/2p5/8/4q3/2Q3PB/PP3P1P/1K1R3R w - - 0 16|d1d3 e4h1 c3c1 h1c1|1595|winningMaterial,short|3:h1c1 h1e4
oiilfr|8/8/5k2/5r2/5K2/5P2/6p1/4R3 w - - 1 74|f4e3 f5e5 e3d3 e5e1|1595|winningMaterial,endgame,short|3:e5e1
1a4hsrg|2b5/1p6/p3k1p1/P3pp1p/1P5P/4KBP1/5P2/8 b - - 8 46|g6g5 h4g5 h5h4 g3h4|1595|advantage,short|
6wjpg0|4r3/p2b1ppp/5n2/P1kp4/1rpN4/2N2P2/4BKPP/R6R w - - 3 22|a5a6 c5d4 h1d1 d4c3|1595|winningMaterial,short|3:d4c3 d4c5
ltikij|6R1/8/8/P7/4p3/6k1/r6p/7K b - - 7 65|g3f2 g8g2 f2e1 g2a2|1595|winningMaterial,endgame,short|
cow61f|r1b2rk1/p4ppp/1qp5/2Npp3/Q1pPP1n1/2P2NP1/P4PP1/1R3RK1 b - - 1 16|b6d8 a4c6 e5d4 c6a8|1595|winningMaterial,short|3:c6a8 f3d4
kctjef|6k1/2p3pp/5p2/1rNPn3/4N3/2R2PP1/8/3b2K1 w - - 1 45|c5e6 d1f3 d5d6 f3e4|1595|winningMaterial,short|3:f3e4 b5b1
12pcceo|8/4R3/4p1R1/p4r2/P5k1/8/3K1P2/r7 b - - 15 48|g4h3 e7h7 f5h5 h7h5|1595|mate,mateIn2,endgame,short|
1ji2a79|8/4k3/3R3p/3PP1p1/p1BP4/Pp6/1P1K1rnP/8 w - - 1 41|d2c1 f2c2 c1d1 c2c4|1595|winningMaterial,fork,short|3:c2c4
1yaqxf9|8/3P4/2K5/4k3/1b6/8/8/8 b - - 0 59|e5e4 d7d8q|1595|winningMaterial,promotion,quietMove,endgame,oneMove|
cchfnf|r3k2r/1p4bp/p1p2np1/P2P1q2/2P4P/Q3Bp1P/1P3P2/RN3RK1 w kq - 2 23|b1d2 f5h3 d2f3 h3f3|1595|winningMaterial,short|3:h3f3 h3g4
mec7ff|4r1k1/5p1p/5QP1/1bn1p3/p1p2bP1/5NqP/1PP1R1B1/4R2K b - - 0 38|g3h2 f3h2 h7g6 f6f4|1600|winningMaterial,short|3:f6f4 g2d5 g2c6
8ncf3u|3r2k1/R4p1p/2n3p1/1p1r4/7P/6P1/1P3P2/3B1RK1 w - - 2 34|d1b3 c6a7 b3d5 d8d5|1600|winningMaterial,short|
1raudv0|3rk2r/pR2ppb1/2n4p/6p1/P1NP4/1Qn1B1P1/q2NPP1P/4K2R b Kk - 6 17|e8g8 b3c3 c6d4 e3d4|1600|winningMaterial,short|3:e3d4 e1f1
boaxmj|1rbr2k1/1pq1bppp/2n2n2/p1p1p3/P3p2P/1P1P1NP1/1BPNQPB1/R3R1K1 w - - 0 15|f3e5 c6e5 d2e4 f6e4|1600|winningMaterial,short|3:f6e4
rbhv6c|8/6pk/3Rb2p/pP5q/P1n1P2P/4QPP1/2r2RK1/8 w - - 3 40|e3e1 c2f2 e1f2 c4d6|1600|winningMaterial,short|
1x2kguo|rn2kb1r/pp2pppp/2p5/8/3P1Q2/2PB4/PP3PqP/R1B1K2R w KQkq - 0 12|f4c7 g2h1 e1d2 b8d7|1600|winningMaterial,short|
1h6sxww|r4k1r/1b2qpp1/1p3n2/p2PbN1p/1p6/3P3P/PB2BPP1/2RQK2R b K - 2 22|e5c3 b2c3 e7d7 c3f6|1600|winningMaterial,short|
y2tfkr|1Q6/P5pk/8/1K6/4q3/2P1p3/8/8 b - - 4 72|e4c2 a7a8q|1600|winningMaterial,promotion,quietMove,endgame,oneMove|
1jeamub|1r3rk1/3n1pb1/Qq1ppn1p/6p1/2PP4/P1N2B1P/3B1PP1/R4RK1 w - - 1 20|a6b5 b6d4 f1d1 b8b5|1600|winningMaterial,short|3:b8b5 g5g4
14gpbtc|3r4/kp6/p5p1/5q2/3N4/P1N3Q1/1PPR4/1K5r w - - 1 33|d2d1 h1d1 c3d1 d8d4|1600|winningMaterial,fork,endgame,short|
1tor4pe|8/2b4p/2k3p1/p7/3BP2P/5r2/4K3/6R1 b - - 9 50|f3g3 g1c1 c6d6 c1c7|1600|winningMaterial,endgame,short|3:c1c7
n919p7|4r3/1p6/5bk1/1P4p1/3BK3/1R6/5P2/8 w - - 1 43|e4d5 e8d8 d5e6 d8d4|1600|winningMaterial,endgame,short|3:d8d4 f6d4
1b3ghfh|1r6/8/8/3n3k/1K6/2P5/P5RP/8 w - - 7 62|b4c4 d5e3 c4c5 e3g2|1600|winningMaterial,fork,endgame,short|3:e3g2 b8c8
cx1p2o|r1bqk2r/1p2bp1p/p1n3pB/3p4/6n1/1NPB1N2/PP3PPP/R2Q1RK1 w kq - 6 13|h6g5 e7g5 f3g5 d8g5|1605|winningMaterial,short|
1oi5u9v|2r4r/1p2k3/p1p3p1/2PnnpPp/1PBPp3/4P3/1P3PP1/R3K2R w Q - 0 22|c4d5 e5d3 e1e2 c6d5|1605|winningMaterial,short|
kl7bkv|R7/4kp2/B3p1p1/5b1p/1b1P1P1P/r1P3P1/3KN3/8 b - - 8 37|f5e4 a8a7 e7d6 c3b4|1605|winningMaterial,short|3:c3b4
dbqmgw|R2b4/1p1rk1p1/3N1p2/p2p4/rB3n1p/P6P/5PP1/4RK2 b - - 9 31|f4e2 e1e2 e7f8 e2e8|1605|mate,mateIn2,short|
16jhzcu|7k/1pp4p/2n3p1/6RN/4K2N/PB2P2P/5r2/1r6 w - - 6 32|b3a4 g6h5 a4c6 b7c6|1605|winningMaterial,short|
hliild|4bk2/1p6/p1r1p1p1/2q3p1/3B4/P7/2P3PP/3RQ2K b - - 1 29|c5d6 d4g7 f8f7 d1d6|1605|winningMaterial,short|3:d1d6
120axo1|r1bq1knr/1p6/p1n1p3/4PP1p/3p2p1/5N1Q/PPPN1P1P/2KR1B1R w - - 0 19|f3d4 g4h3 d4c6 b7c6|1605|winningMaterial,short|3:b7c6 d8b6 d8d5
g2gaip|8/6kp/6p1/1p6/p1p2RP1/P1P5/1K4RP/1N1rr3 w - - 2 47|g2d2 d1b1 b2a2 b1a1|1605|winningMaterial,short|
1q890x9|5k2/1p5R/1q4Bp/pb1p3P/3Pr1R1/1P4P1/5PK1/8 w - - 7 41|g4e4 d5e4 h7f7 f8g8|1605|winningMaterial,short|
1fa7pen|r4k1r/1pp1n3/6pp/p5N1/P2nP1b1/1BN5/1PP2PPP/R3K2R w KQ - 0 17|g5e6 g4e6 b3e6 d4e6|1605|winningMaterial,short|3:d4e6
7pxqi2|r2qkb1r/3b1ppp/p2p1nn1/1pp1P3/4P3/1PP2N2/P1B2PPP/RNBQK2R b KQkq - 0 12|b5b4 e5f6 g6e5 f3e5|1605|winningMaterial,short|3:f3e5 c1e3 c1f4
kv2oec|r2k2q1/2pb4/2pp1Q1p/p7/P5P1/1P6/2P4P/1K3R2 b - - 0 33|d8e8 f1e1 d7e6 e1e6|1605|winningMaterial,short|3:e1e6
1lvb9z2|rn1qk2r/pp3pQp/2bb4/2pNp3/2P5/6P1/PP1P1PP1/R1B1K2R b KQ - 2 14|c6d5 g7h8 d6f8 c4d5|1605|winningMaterial,short|
1q4e9pt|8/R5k1/8/2r2pB1/5K1P/2b5/8/8 b - - 6 54|g7f8 g5e7 f8f7 e7c5|1610|winningMaterial,fork,endgame,short|3:e7c5
14prng6|3r3k/pp1Q2pp/2n5/4p3/2N1pr2/P7/1qP1B1PP/R4RK1 b - - 2 22|f4f1 a1f1 b2d4 d7d4|1610|winningMaterial,short|
1tq9xfj|8/5N2/6p1/5b1p/4kP1P/6K1/8/8 b - - 2 72|f5c8 f7d6 e4d5 d6c8|1610|winningMaterial,fork,endgame,short|
cyn5x4|r5kr/1pqb1pp1/pn2p2p/3pP3/8/BPb2N1P/P2QBPP1/R1R3K1 b - - 3 20|c3d2 c1c7 d7b5 f3d2|1610|winningMaterial,short|3:f3d2 e2b5 e2d1
qno6pc|4r3/p2b1pp1/P4n2/2kp3p/2pN3P/2N2P2/1r2BKP1/R1R5 w - - 3 26|a1b1 b2b1 c3b1 c5d4|1610|winningMaterial,short|
ajjvj|r5k1/pp4p1/2p1r2p/2PpNp2/1P1q4/3B1P1n/P1Q3K1/R3R3 w - - 0 30|e5c6 h3f4 g2h2 b7c6|1610|winningMaterial,short|3:b7c6 d4f6 e6c6
1jp4a8o|3Q2k1/5r2/2q4p/8/7P/6P1/5P2/6K1 b - - 16 53|c6e8 d8e8 g8g7 e8f7|1610|winningMaterial,endgame,short|3:e8f7
jjhsib|2r1kb1r/pb1p1ppp/1p6/n7/2B1P3/3Q2B1/PqPN1PPP/R3K2R w KQk - 0 15|c4f7 e8f7 d3d7 f8e7|1610|advantage,short|
bwzxxn|3r2k1/5p2/1Q3qp1/p1n4p/3Nb3/2P1P2P/P4PP1/1R3BK1 b - - 4 32|f6b6 b1b6 e4d3 f1d3|1610|winningMaterial,short|3:f1d3 c3c4 b6c6
1e9kbl2|r1b2k2/5p2/8/p1Q5/7p/2P4P/1P1K2P1/r7 b - - 3 37|f8e8 c5c6 e8e7 c6a8|1610|winningMaterial,fork,endgame,short|3:c6a8 c6e4 c6c5
9cdglc|5bk1/7p/2P2R2/2r2p2/6PP/7n/5P2/3R2K1 w - - 1 35|g1h1 h3f2 h1g1 f2d1|1610|winningMaterial,fork,endgame,short|3:f2d1
1lw8j9r|r2r2k1/pp2ppb1/2n3pp/3P1n2/5Bb1/2N2NP1/PP1RBP1P/4R1K1 b - - 0 16|a7a5 d5c6 b7c6 d2d8|1610|winningMaterial,fork,short|3:d2d8 g1g2 f3h4
mo3ov6|rnb2rk1/p1p1bppp/1p2p3/8/2qPB3/2P1PQ2/P4PPP/R1B1K1NR w KQ - 4 11|f3e2 c4c3 e2d2 c3a1|1610|winningMaterial,fork,short|3:c3a1
1ec28g8|6k1/4P2p/r2n2p1/pp1q1r2/2pp4/P1P3PQ/1P1NKBnP/5RR1 w - - 0 32|e2d1 g2e3 d1c1 e3f1|1615|winningMaterial,fork,short|3:e3f1 d4c3
1qx0fhx|1rbqk2r/5ppp/2p5/2bp4/P2pB3/2P1Q2P/1P3PP1/R1B1K2R w KQk - 0 17|c3d4 c5b4 c1d2 d5e4|1615|winningMaterial,short|3:d5e4 b4d2 e8g8
mxzevt|8/8/8/2k4P/3Rpr2/7P/5PK1/8 w - - 1 55|g2g3 f4f3 g3h2 c5d4|1615|winningMaterial,endgame,short|
5mdzr5|8/8/3k4/8/2Q5/3n2P1/3r2K1/8 w - - 2 61|g2f3 d3e5 f3f4 e5c4|1615|winningMaterial,fork,endgame,short|
bju6lf|7k/R4R2/2p4P/8/2r4r/8/6K1/8 b - - 4 60|h8g8 f7g7 g8h8 a7a8|1615|mate,mateIn2,endgame,short|3:a7a8
prhn10|1r4k1/8/3R1bpp/2pP1b2/2q5/1P1R1P2/P7/3KQ3 w - - 0 39|e1e8 b8e8 b3c4 f5d3|1615|winningMaterial,short|3:f5d3
dfay2z|4R3/6b1/8/8/1K3k1p/3B1P1P/p7/8 w - - 0 65|d3c4 a2a1q|1615|winningMaterial,promotion,quietMove,endgame,oneMove|
138wmwm|8/6kp/1p1n1rp1/2p1Q3/6R1/2P4P/1PB3PK/2q5 w - - 1 41|g4g3 c1c2 g3f3 d6f5|1615|winningMaterial,short|
11y7sun|r1b4r/p2kbp1p/2pp2p1/2n3B1/8/P1N2NP1/1PP2K1P/R3R3 b - - 3 19|c5d3 c2d3 e7g5 f3g5|1615|winningMaterial,short|
160syff|r6k/1p3Qpq/1n3p2/8/1b1P1BP1/2N4P/Pp3P2/1R2K2R w K - 2 25|b1b2 b4c3 e1f1 c3b2|1615|winningMaterial,fork,short|
grozm3|4bk2/r1p1r1bp/ppB1pn2/4Bp2/2P5/1PNR2P1/P4P1P/4R1K1 w - - 8 27|c3b5 a6b5 c4b5 e8c6|1615|winningMaterial,short|3:e8c6 a7a2 f8f7
17d90hi|B7/r7/7p/8/3k4/6PP/8/4K3 w - - 26 73|a8h1 a7a1 e1f2 a1h1|1615|winningMaterial,endgame,short|
1vdowgq|8/5p2/7p/1p3Rk1/2b5/r7/P4R1P/6K1 b - - 1 51|g5h4 f2f4 h4h3 f5h5|1620|mate,mateIn2,endgame,short|
fml5hm|7r/1pp1r1k1/6P1/pP1pPn1R/5p2/P1PBn2P/3N1K2/6R1 w - - 11 35|d3f5 h8h5 f5g4 e3g4|1620|winningMaterial,short|3:e3g4 h5e5 h5g5
7lpk08|r5k1/5p2/1pb2qp1/p3b2p/2P2nB1/2B1Q2P/PP4P1/4NRK1 b - - 3 37|g6g5 c3e5 a8e8 e5f6|1620|winningMaterial,short|3:e5f6 e3f4
1z959p|4r1k1/5p2/1pb1B1p1/p6p/2P2R1q/2P1Q2P/P5P1/4N1K1 b - - 2 40|e8e6 e3e6 h4f4 e6c6|1620|winningMaterial,short|3:e6c6 e6c8
ps73cq|5rk1/1pRNppb1/p2p1n2/3P3p/1P2P1p1/3Q4/2N2PPP/1q4K1 w - - 0 24|d3d1 b1d1 c2e1 d1e1|1620|mate,mateIn2,short|
khjq17|2rqk2r/p2bbppp/pn2p3/B3P1NQ/2N5/8/PP3PPP/2R1K2R b Kk - 9 18|e7g5 c4d6 e8e7 h5f7|1620|mate,mateIn2,fork,short|
156zvgm|3r1k2/p2rpp2/3q1b1p/2p2P1N/p1P1Q3/6BP/PPnN1RP1/7K b - - 5 35|a4a3 g3d6 d7d6 h5f6|1620|winningMaterial,short|3:h5f6 b2a3
1o5eeua|3rkbnr/ppp3pp/2n2p2/1b1qP3/Q2p1B1P/P4NP1/1P1NPP2/R3KB1R w KQk - 1 13|e5f6 b5a4 f6g7 f8g7|1620|winningMaterial,short|
x8r78j|2rk4/1pp4R/p3p1b1/2P2p2/3P1P2/P1P1p3/4P3/3RK3 w - - 2 32|d4d5 g6h7 d5e6 d8e8|1620|winningMaterial,short|
xdzwfm|r1b1kbnr/pp3p1p/2n1p1p1/8/1qBN4/5N1P/PPP2PP1/R1BQK2R w KQkq - 1 10|c1d2 b4c4 d4c6 c4c6|1620|winningMaterial,short|3:c4c6 b7c6 c4e4
z8dt0m|8/rp5P/3k4/pb6/P7/4PP1P/4BK2/8 b - - 0 31|b5e2 h7h8q|1620|winningMaterial,promotion,quietMove,endgame,oneMove|
13w1dzf|2q1kb1r/3n1pp1/1r5p/3p1b2/Q2P1B2/P3PN2/5PPP/R3KB1R w KQk - 3 15|f3e5 c8c3 e1d1 c3a1|1620|winningMaterial,fork,short|3:c3a1
4tl57s|8/8/6pk/6qp/P6P/2PR2P1/1P2rP2/2K5 w - - 0 46|d3d2 g5d2 c1b1 d2b2|1620|mate,mateIn2,endgame,short|3:d2b2
chwzvq|r2q2k1/2p2pp1/pn3b1p/1p4B1/3P3P/2PN1Q2/P4PP1/4R1K1 w - - 0 21|a2a4 h6g5 h4g5 f6g5|1625|winningMaterial,short|
114iaz8|3R4/5pkp/2b3p1/8/8/3p1P2/2rN2Pq/3QBK2 w - - 6 49|f1f2 h2h4 f2g1 h4d8|1625|winningMaterial,fork,short|
3mqn9|5rk1/1p2n1pp/p1p1Rq2/P4n2/2PP4/7Q/1P3PPP/4R1K1 b - - 4 32|f5d4 e6f6 f8f6 e1e7|1625|winningMaterial,short|3:e1e7 h3d7
1876aft|r2qk2r/1p3pb1/p1n1pnp1/1N1pN2p/3P4/P3P3/1P1BQPPP/2R1K2R w Kkq - 0 15|e1g1 a6b5 e5c6 b7c6|1625|winningMaterial,short|
175aik6|4k3/ppp5/4PBp1/5n2/4R3/1P4P1/P2r1K2/8 w - - 1 36|f2f1 f5g3 f1e1 g3e4|1625|winningMaterial,fork,endgame,short|3:g3e4
yzmhk1|8/1P6/8/1BK5/8/p3kp2/Pr6/8 b - - 1 76|b2a2 b7b8q|1625|winningMaterial,promotion,quietMove,endgame,oneMove|
za428s|6k1/p5pp/2p5/7n/4p1P1/1P5P/PNPq3K/5Q2 w - - 1 30|f1f2 d2f2 h2h1 h5g3|1625|mate,mateIn2,short|3:h5g3
92rmh9|8/2p1k1p1/8/p6p/4P3/5P1P/4Q1P1/q6K w - - 5 48|e2e1 a1e1 h1h2 h5h4|1625|winningMaterial,endgame,short|
1rco8l5|r1br2k1/p3ppbp/p1q3p1/2p1N3/2P1nB2/1N2P2P/PP2QPP1/R1R3K1 b - - 10 16|c6c7 e5f7 e7e5 f7d8|1625|winningMaterial,short|
12byq6m|8/3bp2Q/p2ppkp1/P1pP4/2P2PP1/4K2P/1r5n/8 b - - 16 42|e6d5 g4g5 f6e6 h7g6|1625|mate,mateIn2,short|3:h7g6
1pq26b2|r1bk3r/ppp2p2/3b1npp/4p3/3nP2P/2N3B1/PPP2PP1/R3KBNR w KQ - 4 11|f1c4 d4c2 e1d1 c2a1|1625|winningMaterial,fork,short|3:c2a1
1ypo8us|1r6/5p2/kp1q1n1p/pNp4p/P1P2P2/3p1Nr1/3Q2B1/1R5K b - - 11 42|d6e6 b5c7 a6a7 c7e6|1625|winningMaterial,fork,short|3:c7e6 c7b5
1tiu07f|3r4/pp4b1/4k1pp/2N5/4P3/N1P1KP2/PP5P/8 b - - 1 29|e6d6 c5b7 d6c7 b7d8|1625|winningMaterial,fork,short|3:b7d8
mp0x15|3k1b1r/5p2/2p1b3/4P1B1/P7/1r4P1/4B2P/R2N2K1 b - - 0 31|f7f6 g5f6 d8e8 f6h8|1630|winningMaterial,fork,short|
1duk89i|R7/R7/p4p1K/5r2/1P3P2/1kP5/6r1/8 w - - 11 56|a8b8 f5f4 b8b5 a6b5|1630|winningMaterial,endgame,short|
1uyp0o9|1r1r2k1/ppp2p1p/4pbp1/5n2/1PQPBPq1/P1B1PP2/8/R4K1R w - - 1 24|f3g4 f5e3 f1e2 e3c4|1630|winningMaterial,fork,short|
gn64kw|r6r/1p1nkp2/p1p1b1p1/3Np2p/P3P1PP/5P2/1PP3B1/2KR2R1 b - - 1 22|e7e8 d5c7 e8e7 c7a8|1630|winningMaterial,fork,short|
f2prra|r3kbnr/1p1n4/p2p2p1/2pP1p1p/4pBPP/2N5/PPP2P2/2KR1B1R w kq - 0 14|f1e2 h5g4 e2g4 f5g4|1630|winningMaterial,short|3:f5g4 g8f6 f8h6
2mofpp|8/8/4R2k/4p3/7K/5r2/5n2/8 b - - 3 69|f3f6 e6f6 h6g7 f6f2|1630|winningMaterial,fork,endgame,short|
1xhhp97|R2R4/1p1N2r1/pk6/8/4Knr1/8/PP6/8 b - - 3 50|b6c6 d7e5 c6b6 e5g4|1630|winningMaterial,fork,endgame,short|3:e5g4 d8d6
1vvodtl|rn3k1r/pp3ppp/3Q1n2/3p1p2/2P2B2/4P3/qP3PPP/2KR1B1R b - - 3 13|f8g8 d6d8 f6e8 d8e8|1630|mate,mateIn2,short|
rai2gm|r1b1r1k1/1p3pb1/2pp1np1/p1nPp2p/Pq2P2P/2NNBPP1/1P3Q2/R2R1BK1 b - - 7 23|f6g4 f3g4 c5d3 f1d3|1630|winningMaterial,short|3:f1d3 d1d3
1rsbzxy|r2n1r2/1p1b1p1N/5kp1/p1Ppp3/P7/2P1B2P/4BPP1/3R2K1 b - - 0 27|f6f5 e2g4 f5e4 h7f6|1630|mate,mateIn2,fork,short|3:h7f6 h7g5
1rdfu4d|3r2k1/2r1bp1p/n7/5p2/1PR2Pp1/6P1/2Np1PBP/3R2K1 w - - 9 32|g2d5 d8d5 c2e3 c7c4|1630|winningMaterial,short|3:c7c4 d5d3
qfdeua|3bk1R1/8/1p1p4/n2Bp2p/4p2P/3r4/3BKP2/8 b - - 1 41|e8e7 d2g5 e7d7 g8d8|1630|winningMaterial,short|3:g8d8 g8g7
15rez7i|7Q/pkr3pp/1p2p3/7q/5R2/P3P3/P3K1PP/3R4 w - - 1 27|e2d3 h5d1 d3e4 d1d5|1635|mate,mateIn2,short|3:d1d5
1dhnkq2|2kr4/p4p2/2p1p2p/2Pbrq2/6pP/1PQ3N1/P4PP1/4RK1R b - - 6 31|d5g2 f1g2 e5c5 g3f5|1635|winningMaterial,short|3:g3f5 c3e3
gakl3c|8/1p3R2/6P1/p3kP2/7p/7r/6K1/8 b - - 4 42|h3e3 f7e7 e5f5 e7e3|1635|winningMaterial,endgame,short|
1vlqvys|1r4k1/5p2/R5p1/4Q2p/1B4n1/P2q2Pn/8/2R4K w - - 4 34|c1c8 b8c8 a6g6 d3g6|1635|winningMaterial,endgame,short|
1tx7bp1|8/7k/6pp/4ppn1/P1Bb3P/1P4P1/Q4PK1/r7 w - - 4 35|b3b4 a1a2 c4a2 g5e4|1635|winningMaterial,short|
ugatgh|2r5/RBp1kp2/6pp/P3p3/2b5/4P2P/5PP1/6K1 b - - 2 34|e7d8 b7c8 d8c8 a7a8|1635|advantage,short|
5ekpqt|r5k1/4R1p1/5p2/3p2bQ/p1pP4/P1B3P1/1Pq5/6K1 b - - 3 36|g5h6 h5d5 g8h7 d5a8|1635|winningMaterial,fork,short|
blny0p|8/7p/ppkR4/2p1Bp1r/8/8/5K2/8 b - - 3 50|c6c7 d6h6 c7b7 h6h5|1635|winningMaterial,endgame,short|
1npa5vi|k6r/1p6/p7/2P3p1/2qP2Q1/P6R/8/5KB1 w - - 2 37|g4e2 c4e2 f1e2 h8h3|1635|winningMaterial,endgame,short|
1paqx2b|8/p7/1p2n3/2p2P1k/P4prb/2PP4/1P5R/5K1R b - - 0 39|e6d4 c3d4 g4g3 h2h4|1635|winningMaterial,short|3:h2h4
126pahc|r3k2r/ppq1bppp/2p1bn2/4P3/2Q5/P1N1P3/1P2BPPP/R1B1K2R w KQkq - 1 13|e5f6 e6c4 f6g7 h8g8|1635|winningMaterial,short|
1ep9i60|6k1/5pp1/2n4p/2q5/4P2P/3P1bP1/1r2BPK1/3QR3 w - - 0 36|g2h2 c5f2 h2h3 f2g2|1635|mate,mateIn2,short|3:f2g2
ts3j8s|r2q1rk1/1p3p1p/1Bpp2p1/4n3/1P2PN1P/P2Q2P1/b1R2PB1/5RK1 b - - 0 24|e5d3 b6d8 d3b4 a3b4|1640|winningMaterial,short|3:a3b4 c2b2 c2d2
1wn5c9p|2B5/p6R/3r1k1p/3p2p1/2p2P2/6K1/P7/8 b - - 6 50|d6b6 h7h6 f6f7 h6b6|1640|winningMaterial,endgame,short|3:h6b6 f4g5
11x2ewk|8/8/1p6/p1p2p1Q/P1P2k2/1P6/3p1q2/3B3K w - - 5 70|h5h3 f2e1 h1g2 e1d1|1640|winningMaterial,fork,endgame,short|
1xnwwo5|r1bq1rk1/1pp2pbp/5np1/p1P1n3/8/2N2NP1/PP2PPBP/R2QR1K1 w - - 0 14|d1d8 e5f3 g2f3 f8d8|1640|winningMaterial,fork,short|
k300u1|2q5/7k/1Q4p1/p6p/P6P/3R2P1/1PP1rP2/2K5 w - - 1 43|c1b1 c8c2 b1a2 c2d3|1640|winningMaterial,fork,short|
122ruz1|r3k2r/pp1qnppp/2n1p3/4N3/3P4/2P1B3/P3bPPP/1R1QK2R w Kkq - 0 13|e5d7 e2d1 e1d1 e8d7|1640|winningMaterial,short|3:e8d7 e7d5
19io9kf|1r6/R4kp1/5p1p/2N1p3/1P6/4K1PP/5P2/5b2 b - - 7 32|f7f8 c5d7 f8e7 d7b8|1640|winningMaterial,fork,short|
vndck1|3r1rk1/ppBn1pp1/4pn1p/2P5/PP2q3/2P4P/4BPP1/1R1QK2R b K - 2 16|d7c5 c7d8 f6d5 b4c5|1640|winningMaterial,short|3:b4c5 e1g1
w95opv|r3k2r/1pp2p1p/p1npb1p1/2bN3P/1PPpq1nR/P4N2/3K1PP1/R1BQ1B2 b kq - 2 13|c5b4 a3b4 e6d5 c4d5|1640|winningMaterial,short|
19mwkyu|r3k1nr/pp1nb1p1/1q2pp2/1B1pPb1p/2pP1B2/P1P2N1P/1P1N1PP1/R2QK2R w KQkq - 2 12|f3h4 b6b5 h4f5 e6f5|1640|winningMaterial,short|
h7eb0l|1r5k/p5b1/6B1/1Pp4p/5P2/1NP3P1/1P3K1P/2r2n1R b - - 1 30|b8b5 b3c1 b5b2 f2f1|1640|winningMaterial,short|3:f2f1
928rme|3r1r2/pB3pkp/2p1bp2/4n2N/3q4/5Q2/P4PPP/1R2R1K1 b - - 6 23|g7h8 f3f6 h8g8 f6g7|1640|mate,mateIn2,short|
17jkdtx|2R2rk1/p5p1/7p/8/3p3q/1P6/P3Q1P1/6K1 b - - 1 28|d4d3 e2e6 g8h7 c8f8|1640|winningMaterial,endgame,short|
d5job6|2r2rk1/2p2ppp/1np1pn2/p7/PbN1q3/3B3P/1PQ2PP1/R1BR2K1 b - - 1 17|b6c4 d3e4 f6e4 c2c4|1645|winningMaterial,short|3:c2c4 c2e4 d1d4
8irzmd|8/8/8/3k4/8/r3K3/7R/8 w - - 13 75|e3d2 a3a2 d2d3 a2h2|1645|winningMaterial,endgame,short|3:a2h2 a2a3
jvv0iq|2B5/4b3/2k5/8/8/1P6/5K1p/8 w - - 2 67|c8f5 h2h1q|1645|winningMaterial,promotion,quietMove,endgame,oneMove|
m9epup|3R4/p3r2p/2pk4/1p2b2P/6P1/PbN5/1P1B2K1/8 b - - 5 36|e7d7 c3e4 d6d5 d8d7|1645|winningMaterial,short|3:d8d7 e4f6
1b0a4mg|8/8/4k1pB/2b5/5PKp/7P/8/8 w - - 15 50|h6f8 c5f8 f4f5 g6f5|1645|winningMaterial,endgame,short|
ti19su|rnbqkbnr/1p1ppp2/2p3pp/8/p6P/1P2P3/PBPPBPP1/RN1QK1NR b KQkq - 1 6|a4b3 b2h8 b3c2 d1c2|1645|winningMaterial,short|
90ezw|8/R1N5/4kp2/P3p2p/2b2r2/7K/5P2/8 b - - 13 54|e6d7 c7d5 d7c6 d5f4|1645|winningMaterial,endgame,short|
1yhnnug|8/3k4/8/2r1Q2p/1B2nPp1/8/3p2K1/8 w - - 2 59|e5b2 d2d1q|1645|winningMaterial,promotion,quietMove,endgame,oneMove|
bc45ma|4k2r/pp1bPpbp/1n4pn/6N1/4P3/1BN1B2P/P1Q2PP1/q4RK1 b k - 0 15|a1f1 g1f1 g7f6 e3b6|1645|winningMaterial,short|3:e3b6 f1g1 c2d2
187bd9j|r3k2r/pp1nbppp/2p1pn2/q5P1/P2Pb3/2NB1N2/1PP2P1P/R1BQK2R b KQkq - 0 11|e4d3 g5f6 d7f6 d1d3|1645|winningMaterial,short|3:d1d3 c2d3
u3cphg|8/1r2kp1p/4pn2/3P4/6pP/P1K1R1P1/1N3P2/8 w - - 2 33|d5e6 f6d5 c3c2 d5e3|1645|winningMaterial,fork,short|3:d5e3 b7c7
iz11ap|1nb1r1k1/r4pbp/p5p1/1n2P3/p4P2/4BB1P/1P2N1P1/2RR2K1 w - - 5 27|c1c8 e8c8 e3a7 b5a7|1645|winningMaterial,short|
3h06s1|6k1/1pp2pb1/2n1b2p/2N1p2P/2r3p1/P2rP3/1P3PP1/2R1BRK1 w - - 2 26|c1c4 e6c4 c5d3 c4d3|1650|winningMaterial,short|
8fd0si|6k1/1p3p2/2p1p2p/p1bq2p1/P1P1n3/6PP/1P2QPK1/3BB3 b - - 0 31|e4g3 c4d5 g3e2 d1e2|1650|winningMaterial,short|
1stsimz|4k1nr/4pp1p/Q2p2pb/1B2nq2/1P1P4/4P3/1Br2PPP/1R2K2R b Kk - 2 15|f5d7 a6a8 c2c8 a8c8|1650|mate,mateIn2,short|
q5ldf9|8/4Q2k/6p1/8/6PP/p6K/q7/8 b - - 4 68|h7h6 g4g5 h6h5 e7h7|1650|mate,mateIn2,endgame,short|
1p62h9e|r3kbnr/8/p2p2p1/1ppP1PPp/N4B1P/8/PPP5/2K1RB1n b kq - 1 19|e8d7 a4b6 d7d8 b6a8|1650|winningMaterial,fork,short|
t8jk7l|4k1r1/p3p3/2p3q1/1p6/5p2/2PR4/PP3PPQ/6K1 w - - 0 38|g1h1 g6d3 h2h3 d3h3|1650|winningMaterial,short|3:d3h3 d3f1
1ysnf5l|r4rk1/p5pp/2p5/8/4pn2/1P4qP/PNP2QP1/4RR1K b - - 1 23|g7g6 f2g3 f4d5 f1f8|1650|winningMaterial,fork,short|3:f1f8 b2c4 g3g4
1j5bz4q|2r3k1/6p1/8/1B1R3q/P1p5/4Q2b/1P3PK1/8 w - - 1 46|g2g3 h5g4 g3h2 g4g2|1650|mate,mateIn2,fork,short|
4n4oll|4k3/r7/2Q1P3/2Pp4/1p1P3P/4P2K/5P2/q7 b - - 4 43|a7d7 c6d7 e8f8 d7f7|1650|mate,mateIn2,endgame,short|3:d7f7
c91hjg|qnbk1bnr/3p1ppp/4p3/2pPN3/4P3/8/P1PB1PPP/R2QK2R b KQ - 1 12|g8f6 e5f7 d8e8 f7h8|1650|winningMaterial,fork,short|
1x7dbpy|1R6/5p2/6pk/8/r7/7Q/5PPK/4q3 b - - 1 48|a4h4 h3h4 h6g7 h4h8|1650|mate,mateIn2,endgame,short|3:h4h8
p1c0ef|6rk/R5p1/6q1/7p/5P2/6K1/P3Q1PP/8 w - - 4 40|e2g4 g6g4 g3f2 g4f4|1650|winningMaterial,endgame,short|
az45t3|7r/1p3pbp/p5p1/3Pk3/8/P1B2P2/1P5P/n4RK1 b - - 1 29|e5f4 c3g7 h8d8 f1a1|1655|winningMaterial,short|3:f1a1 g7h6
1czl9wf|6k1/2p2pp1/b6p/4nP1N/6P1/B1Pr2KP/PR6/8 w - - 1 35|g3h4 g7g5 f5g6 e5g6|1655|mate,mateIn2,short|
u39ush|r2qk2r/ppp3pp/2bbP3/5p2/3N1P2/2P5/PPB1Q1nP/R1B1K2R w KQkq - 0 16|e2g2 c6g2 c1e3 g2h1|1655|winningMaterial,short|3:g2h1 d8h4 e8g8
kz1ovd|5B2/6R1/8/2p2Pkp/4n1r1/7K/7P/8 b - - 4 50|g5h6 g7g4 h6h7 g4e4|1655|winningMaterial,endgame,short|
jhf3ud|6k1/r6p/4p3/3p4/3P1p2/bN1KP2P/5r2/R4R2 b - - 1 38|a3b2 f1g1 g8f8 a1a7|1655|winningMaterial,short|
budwer|8/pr3P1p/4K3/8/5P2/P3k3/7P/8 b - - 0 55|h7h5 f7f8q|1655|winningMaterial,promotion,quietMove,endgame,oneMove|
1gs1i1q|1r4k1/5pp1/b7/8/6P1/4Np1R/5P1P/6K1 w - - 3 41|g4g5 b8b1 e3d1 b1d1|1655|mate,mateIn2,endgame,short|
1xldrvi|8/4n1k1/3RP3/1B4p1/p4r2/P1P5/1P3K2/8 w - - 1 46|f2e3 e7f5 e3d3 f5d6|1655|winningMaterial,fork,endgame,short|3:f5d6 f4f3
14rl3vj|1r3rk1/p1p3p1/2b3qp/4Rpb1/P7/1NB2Q1P/1PP2PP1/R5K1 w - - 1 27|e5e6 g6e6 b3d4 c6f3|1655|winningMaterial,short|3:c6f3
14yv5g9|r2B4/pp6/k7/8/2Rppbb1/P7/2P2P2/1R2K3 b - - 0 35|f4c7 c4a4 c7a5 a4a5|1655|mate,mateIn2,short|
1vxqw5t|8/3k1p2/3p2b1/3N2P1/3P2P1/P1P5/1K5r/3R4 w - - 1 52|b2b3 g6c2 b3c4 c2d1|1655|winningMaterial,fork,endgame,short|
rkexrl|8/2P3pk/b2B1p1p/8/8/2Nn4/3Q1PPP/q5K1 w - - 1 38|c3b1 a1b1 d2c1 b1c1|1655|mate,mateIn2,short|3:b1c1
152av9q|r2qkbnr/pp1b1ppp/3p4/4p3/Q3P3/8/PPP1BPPP/RNB1K2R w KQkq - 2 8|a4b5 d7b5 e2b5 e8e7|1660|winningMaterial,short|
luej1h|r1b1kb1r/pp3ppp/1qn1p3/3p3n/2pP4/1NP1BN2/PPQ1PPPP/R3KB1R w KQkq - 0 9|g2g4 c4b3 a2b3 h5f6|1660|advantage,short|
1qc54t8|3R4/8/1n5k/6p1/p3N1P1/P7/2K5/1r6 b - - 5 61|b1f1 d8d6 h6g7 d6b6|1660|winningMaterial,fork,endgame,short|
im71k7|8/1p1q4/p7/5pk1/6p1/4PPR1/2Q3PK/3r4 w - - 1 47|c2c3 d7h7 g3h3 g4h3|1660|winningMaterial,endgame,short|
w4qqyx|8/1k6/4R3/3K1p1p/8/3rP3/8/8 w - - 2 44|d5e5 d3e3 e5f4 e3e6|1660|winningMaterial,endgame,short|
1uwywbx|1r2r1k1/p4pp1/7p/Pqbn4/8/5N2/1PQB1PPP/1RR3K1 b - - 2 22|c5f2 g1f2 e8e2 f2g1|1660|winningMaterial,short|
fxtfoh|4rr2/3nn1pk/2q4p/bQPppp2/PB3P2/6P1/6NP/R4RK1 w - - 0 29|b5c6 e7c6 b4a5 c6a5|1660|winningMaterial,short|
a80xgc|5kr1/2p1n3/2p1pp2/P1Rp3Q/3P1B1R/4P3/r4PPK/1q6 b - - 3 30|g8g2 h2g2 b1e4 h5f3|1660|winningMaterial,short|
bf8gn4|2r2rk1/1p3pp1/B3p3/6Np/3b2nP/P2Q4/1P3PPq/2RR1K2 b - - 1 22|g4f6 c1c8 f8c8 d3d4|1660|winningMaterial,short|
15jk8uf|8/5r2/4k1p1/1pp1p3/p1n3PQ/8/PPP5/2K5 w - - 5 35|h4d8 f7f1 d8d1 f1d1|1660|winningMaterial,short|3:f1d1
fwsctp|8/1r1b3k/3n2pP/1B1p1p2/P2Np3/1RrnP2P/6P1/1R3NK1 b - - 2 34|d6b5 b3c3 b5c3 b1b7|1660|winningMaterial,short|
qspx7|8/1P4k1/p4n1p/6p1/3K4/8/8/8 b - - 0 61|g7f7 b7b8q|1660|winningMaterial,promotion,quietMove,endgame,oneMove|
12ouf8h|2r4r/1kp4q/pp3N2/4P3/PP2PBp1/6P1/4R1P1/2R3K1 b - - 2 36|c7c5 f6h7 c5b4 c1c8|1665|winningMaterial,short|3:c1c8 h7g5 h7f6
100gnj|5rk1/1b2n1pp/p3N3/1p2p3/P1p1n3/2P3bP/2Q4K/1R3R2 w - - 0 31|h2h1 e4f2 h1g1 f2h3|1665|mate,mateIn2,short|
pf3ssf|r1b1kb1r/pp3p2/2n1pnpp/P2p4/2pP1B2/1NP1P3/1P2NPPP/R3KB1R w KQkq - 0 11|a5a6 c4b3 a6b7 c8b7|1665|winningMaterial,short|
13cryua|1r4k1/3bppbp/3p2p1/1p1N4/1N1P4/3rP2P/5PPB/4R1K1 b - - 1 31|d7f5 d5e7 g8h8 e7f5|1665|winningMaterial,short|3:e7f5
tn0cek|q3kb2/3n1p1r/p3b2p/5p2/1P6/P3Q3/3N3P/2R1K1NR w K - 0 21|a3a4 a8h1 c1c8 e8e7|1665|winningMaterial,short|
1lj57cp|8/1kp3p1/5n2/8/1R1NP2P/P3r1PK/4Br2/8 b - - 16 43|b7a7 d4c6 a7a8 b4b8|1665|mate,mateIn2,short|
1q09i19|8/3K4/8/3Q4/8/3k4/8/4q3 b - - 4 71|d3c3 d5a5 c3b2 a5e1|1665|winningMaterial,endgame,short|
1izj7ve|8/4rpk1/5n2/1r3BB1/p3p1p1/P1P5/1P2RP1b/R4K2 w - - 0 32|a1e1 b5f5 g5f6 g7f6|1665|winningMaterial,short|3:g7f6 f5f6
1b1vcdx|r1bqk1nr/pppp1ppp/2n5/8/1b1NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5|d1d2 b4d2 c1d2 c6d4|1665|winningMaterial,fork,short|3:c6d4 g8e7 d7d5
5tvciu|6rk/2R4p/5p1B/3p3P/1p6/5P2/4bKP1/8 b - - 1 36|b4b3 f2e2 g8b8 c7c1|1665|winningMaterial,endgame,short|
us2070|rn2r1k1/5p2/p1b1qQ1p/3p4/P1p5/5NP1/5PBP/2R2RK1 w - - 1 23|f6e5 e6e5 f3e5 e8e5|1665|winningMaterial,short|
1cv9h0i|rnbqk2r/1pp2pp1/p2bpn1p/4N3/4p3/2N3PP/PPPP1PB1/R1BQK2R w KQkq - 2 8|e5f7 e8f7 c3e4 f6e4|1665|winningMaterial,short|3:f6e4 c8d7 h8f8
1nehfpl|3r3k/ppQ3pp/2n5/4N3/4p3/P7/4q1PP/5RK1 b - - 0 25|h7h5 e5f7 h8h7 f7d8|1670|winningMaterial,fork,short|3:f7d8 f7g5
ingi07|8/p4p1p/7k/2p1r3/3rBn2/P7/5PPP/1R2R1K1 w - - 3 32|e4h7 e5e1 b1e1 h6h7|1670|winningMaterial,endgame,short|
1v70sg3|2r3k1/ppp2p2/3p4/3PnPP1/6K1/1P6/P2B4/4R3 w - - 1 40|g4f4 e5d3 f4f3 d3e1|1670|winningMaterial,fork,short|
1fivppz|6k1/3R4/1pp2K2/3p1B2/P7/5rP1/8/4r3 b - - 1 45|e1e7 d7d8 e7e8 d8e8|1670|mate,mateIn2,endgame,short|
1obbmg9|8/8/2p5/7P/2p3P1/2P1k3/r3B3/3K4 w - - 7 57|e2f1 a2a1 d1c2 a1f1|1670|winningMaterial,endgame,short|
10v7lt9|r3k1r1/1ppq1p2/6n1/pPPbb2P/3Q2p1/P6B/3NPP1P/R1B1K1R1 w Qq - 0 18|h3g4 e5d4 g4d7 e8d7|1670|winningMaterial,short|
cva92l|2rr2k1/1pN5/5RP1/p4p2/P2pbP2/1KP5/1P6/R7 w - - 1 30|a1d1 c8c7 d1d4 d8d4|1670|winningMaterial,short|3:d8d4 e4c2 g8g7
12ehuxi|2kr2r1/nbp1n2Q/1p1qp1p1/p3b1P1/2PPp2P/P1N1P2B/1P1KN3/5R1R w - - 7 21|f1f6 e5f6 g5f6 e7f5|1670|advantage,short|
9whkrp|2kr1b1r/pp1b1pp1/3P1n1p/4q2P/2pQP3/2N5/PP2N1P1/2KR1B1R b - - 1 19|f8d6 d4d6 h8e8 d6e5|1670|winningMaterial,short|3:d6e5 d1d4 h1h4
me3w14|r2qr1k1/pp1N2p1/2p4p/2Pp1p2/1P1Pn3/5b1P/P1Q1BPP1/R3R1K1 w - - 0 24|d7b6 f3g2 b6d5 c6d5|1670|winningMaterial,short|3:c6d5
1s4vzig|rnb1kb1r/pp1ppppp/1q6/3nP3/2BP4/8/PP3PPP/RNBQK1NR b KQkq - 2 6|b8c6 c4d5 b6d4 d1d4|1670|winningMaterial,short|3:d1d4 f2f4 g1f3
1ahuwpz|r1bq1b1r/p3kp2/n3pp2/1B1p3p/1p1P3P/8/PPP1QPP1/RN2K1NR b KQ - 1 15|h8g8 b5a6 g8g2 a6c8|1670|winningMaterial,short|3:a6c8
1jxbkwh|rn1qkb1r/p2p1ppp/2p1pn2/1b6/6P1/2NP3P/PP2PPB1/R1BQK1NR b KQkq - 1 7|f8c5 c3b5 c6b5 g2a8|1675|winningMaterial,short|
1e8jda1|2r1k2r/p3pp2/1np3p1/7p/3b4/N1B2P2/PPR3PP/4K2R b Kk - 1 20|d4c5 c3h8 c5a3 b2a3|1675|winningMaterial,short|3:b2a3
1mgsxy9|8/6p1/3b1p2/r2k1P2/8/1KB5/1P6/2R5 b - - 9 51|a5c5 c1d1 d5e4 d1d6|1675|winningMaterial,endgame,short|3:d1d6 c3b4 d1d4
1c7avrr|4r2k/p6p/2p1B1p1/4n3/P5P1/7P/1P3P2/R5K1 w - - 2 35|g1f1 e8e6 a1e1 g6g5|1675|winningMaterial,short|
mtk5b4|r3kb1r/1p3ppp/pqn3b1/3pp1B1/2pPn3/2P3N1/PP1N1PPP/R1Q1KB1R w KQkq - 0 13|d2c4 d5c4 g3e4 g6e4|1675|winningMaterial,short|3:g6e4 h7h6 f7f6
wfhwxy|3qkb1r/3n1pp1/p6p/3p1b2/2QP1B2/P3PN2/1r3PPP/R3KB1R w KQk - 0 13|f4c7 d5c4 c7d8 e8d8|1675|winningMaterial,short|3:e8d8
14l4dm5|7k/2R5/6KP/4P3/8/2p5/8/2r5 b - - 9 57|c1f1 c7c8 f1f8 c8f8|1675|mate,mateIn2,endgame,short|
72qwtl|2rb2k1/5ppp/p1p1pn2/N5B1/8/2P3P1/PP3P1P/1R4K1 w - - 0 25|b1c1 d8a5 g5f6 g7f6|1675|winningMaterial,short|
p0b5zv|5rk1/1p1R4/p1p1r1p1/7q/1P5P/P1QR4/5PK1/8 b - - 3 37|f8f2 g2f2 h5h4 d3g3|1675|winningMaterial,short|
knt3bd|r2qkb1r/2p1nppp/p1npb3/1p2p1N1/B3P3/2N4P/PPPP1PP1/R1BQ1RK1 w kq - 0 9|a4b5 a6b5 g5e6 f7e6|1675|winningMaterial,short|
f713hn|r6r/pp3p1p/n2pk1pB/1P1Np3/n7/5P2/P1P3PP/2KR3R b - - 0 18|a6b8 d5c7 e6e7 c7a8|1675|winningMaterial,fork,short|3:c7a8
1xqkr70|2b5/P3k3/6p1/8/5p1P/1pK1pB2/8/8 b - - 0 60|c8b7 f3b7 b3b2 b7e4|1675|winningMaterial,endgame,short|
1k8994d|4r3/3R3k/p6p/1p2b3/1P3p2/5r2/2R3N1/6K1 b - - 1 49|h7g6 g2h4 g6h5 h4f3|1680|winningMaterial,fork,endgame,short|
h569e4|rn3rk1/pp1b2pp/4p3/8/1q2pP2/5N2/PPP1BQPP/R3K2R w KQ - 0 16|c2c3 b4b2 a1d1 e4f3|1680|winningMaterial,short|3:e4f3 b2c3 d7a4
9f3wpa|r5k1/pp6/8/3pq3/Q3n3/4B2r/PP2PP2/1K4R1 b - - 1 25|g8f7 a4d7 f7f8 d7h3|1680|winningMaterial,fork,short|
17fpb17|2k5/1p5p/2pB4/p4pQ1/P7/3qr3/7P/2R2K2 w - - 4 38|f1f2 d3d2 f2g1 d2c1|1680|winningMaterial,fork,short|
zy8vrv|8/5k2/1R3p2/B7/4K3/1P3P1b/4r3/8 w - - 4 54|e4d5 e2e5 d5d6 e5a5|1680|winningMaterial,endgame,short|
1ipth9x|8/4pk1p/p5pB/8/P2bq3/1Qp3PP/5P2/6K1 b - - 1 34|e4d5 b3d5 f7e8 d5d4|1680|winningMaterial,fork,short|3:d5d4 d5g8 d5a8
1l39xsn|rn1qkb1r/1p2npp1/p3p3/2ppP1B1/3P3p/P1Pb4/RP2NPPP/1N1QK2R w Kkq - 0 10|g5e7 d3e2 d1e2 f8e7|1680|winningMaterial,short|3:f8e7 d8e7 e8e7
4gmygl|8/7P/8/8/1k1Pp3/4P3/1pr3N1/5K2 w - - 0 62|h7h8b b2b1q g2e1 b1d1|1680|winningMaterial,promotion,endgame,short|
1cp51e4|2bq1rk1/rp2ppbp/6p1/p1p5/PnN1B3/1P1Pp1P1/1BPQ1P1P/R4RK1 w - - 0 17|d2e3 b4c2 e3f4 c2a1|1680|winningMaterial,fork,short|3:c2a1 g7b2 e7e5
v4b112|2rr4/1p2k3/p5p1/2PRPpPp/4p3/4P3/1P3PP1/2KR4 b - - 2 26|h5h4 d5d8 c8c5 c1b1|1680|winningMaterial,short|
vwsiio|8/6Bk/3R3P/8/8/P7/KP2r1p1/8 w - - 2 49|a3a4 g2g1q|1680|winningMaterial,promotion,quietMove,endgame,oneMove|
11rlvc3|4R3/r1R4p/8/8/3b1P2/2pk1K2/7P/8 w - - 4 50|e8e3 d4e3 c7c3 d3c3|1685|winningMaterial,endgame,short|
16zgebc|2r2rk1/pn1n1ppp/2PPp3/q2p4/N7/P3PN2/5PPP/2RQK2R w K - 1 19|a4c3 c8c6 e1g1 c6c3|1685|winningMaterial,short|3:c6c3 f8c8
1wtbgeb|r1bq1rk1/4bpp1/pp3n1p/P3n3/2BQN3/7P/1B3PP1/R1R3K1 w - - 0 20|d4d8 f8d8 b2e5 f6e4|1685|winningMaterial,short|3:f6e4
wzbbwd|8/8/p7/P7/qp1Q1k2/5P2/8/5K2 b - - 6 54|f4g3 d4g4 g3h2 g4h4|1685|mate,mateIn2,endgame,short|3:g4h4 g4g2
2t0sqf|2rr4/p3bk2/5Np1/4B2p/8/7P/P2n1PK1/2R4R w - - 6 35|e5f4 c8c1 h1c1 e7f6|1685|winningMaterial,short|3:e7f6 f7f6
10nwigc|r2qkb1r/pp1b1p2/2n1pn1p/1B1pN1p1/3P1B2/1QP5/PP1N1PPP/R3K2R w KQkq - 0 12|e5f7 e8f7 b5c6 g5f4|1685|winningMaterial,short|3:g5f4 d7c6 b7c6
1rgb6zm|3rk2r/p1pbbp1p/1qp2n2/8/2B2Q2/2P1B2P/PP4P1/R3K2R b KQk - 2 17|f6d5 c4d5 b6e3 f4e3|1685|winningMaterial,short|
1dcsbuk|r1b2rk1/2pqnpp1/pp2p2p/4n3/Q2PN3/P4N2/1P2PPPP/3RKB1R w K - 2 15|e4f6 g7f6 a4b3 e5f3|1685|winningMaterial,short|3:e5f3 e5g6 e5c6
26s1n1|4r1kb/3Q1p1p/4q1p1/8/4r3/2B4P/5PP1/4RRK1 w - - 5 29|d7e8 e6e8 e1e4 e8e4|1685|winningMaterial,endgame,short|
1f67z2v|r4rk1/p3bpp1/4pn2/1Nq1Q2p/3N4/8/PP3PPP/2R1R1K1 b - - 3 25|f6d7 c1c5 d7e5 c5e5|1685|winningMaterial,short|3:c5e5
bsybmy|1k6/2q1b3/1Np1p3/4P1p1/rP1Q2P1/8/8/1R3K2 b - - 0 38|a4b4 b1b4 e7b4 d4b4|1685|winningMaterial,endgame,short|
35k4sm|3r1r1k/1p2bpp1/p1b1p2p/8/PnB2P1q/1P2PQ2/1B4PP/2RR1NK1 w - - 5 23|d1d8 c6f3 d8f8 e7f8|1685|winningMaterial,short|
1wyw50v|r3kbr1/1p1b3p/1q1p1pp1/p2pp2P/1n1P2P1/N1PBP3/PPQ2P2/2KR2NR w q - 3 18|h5g6 b4c2 g6h7 g8h8|1690|winningMaterial,short|
8u7z4c|rnbqkb1r/p1pp1pp1/1p2p2p/8/P2nPP1P/3P4/1PP1Q1P1/RNB1KBNR w KQkq - 1 7|e2h5 d4c2 e1d1 c2a1|1690|winningMaterial,fork,short|3:c2a1
g77zt8|r2k4/1ppq3p/8/p2bPp1N/P2P4/2B5/2Q3rP/R3K2R w KQ - 0 23|h5f6 g2c2 f6d7 d8d7|1690|winningMaterial,short|3:d8d7
1jpmxqh|r3r1k1/5pp1/1pRqp2p/bQ2N3/3Pp3/4P3/5PPP/R5K1 b - - 5 30|a5d2 a1a8 e8a8 c6d6|1690|winningMaterial,short|
1il57j4|2rq1rk1/pp4p1/2np1p2/5b1p/3PB2P/P1P1pN2/1PQ3P1/R3K2R b KQ - 0 18|c6d4 f3d4 f5e4 c2e4|1690|winningMaterial,short|
glvkfc|3rbk2/p5p1/5p1p/1P1rp3/P5P1/5N1P/3R1P2/1R4K1 w - - 0 28|a4a5 d5d2 f3d2 d8d2|1690|winningMaterial,short|
1bk35tp|r1b1r1k1/p3N1b1/1n1q2pp/5p2/3PQ3/P1N5/1P3PPP/R1B1R1K1 b - - 0 18|d6e7 e4e7 e8e7 e1e7|1690|winningMaterial,short|
12vylfu|1r3rk1/4bp1p/6p1/1Pp1pR2/2P1P3/1B1PK3/2Q1NP2/2B1q3 w - - 0 29|c2c3 e1c3 e2c3 g6f5|1690|winningMaterial,short|
ytolhw|8/2p3p1/b6p/P4pkP/1p4P1/3q1P2/5BK1/Q7 b - - 8 58|d3f1 a1f1 a6f1 g2f1|1690|winningMaterial,endgame,short|
jdvr99|6k1/5pp1/4p2p/1p2P3/1q5P/5bP1/1P2Q2K/4R3 w - - 1 51|e2f3 b4e1 f3a8 g8h7|1690|winningMaterial,short|
2xyykm|1k1r4/ppp3pp/3n4/8/5PPb/1B6/P3rBKP/4RR2 b - - 2 29|c7c5 e1e2 h4f2 g2f2|1690|winningMaterial,short|3:g2f2 e2f2 f1f2
11kmomz|1k6/8/p7/1p3R2/P2b4/1B6/1PK4r/8 w - - 1 43|c2b1 h2b2 b1c1 b2b3|1695|winningMaterial,fork,endgame,short|
anyi0b|r1b1k2r/p3n1bp/4p1p1/1p1q1p2/2Np4/3P1N1P/PP3PP1/R1BQ1RK1 w kq - 0 14|c4e5 g7e5 f3e5 d5e5|1695|winningMaterial,short|
1px4y3g|8/pnr2pp1/2k4p/1R4P1/8/P7/5P1P/5NK1 w - - 1 35|g5h6 c6b5 h6g7 c7c8|1695|winningMaterial,endgame,short|
4fnmyd|4k2r/1q1nbp2/B7/3p1bpp/Q2P3P/P3PNB1/5PP1/Rr2K2R w KQk - 3 21|e1d2 b7b2 a4c2 b2c2|1695|mate,mateIn2,fork,short|3:b2c2
35sfhl|r3kb1r/2n1pppp/p7/1p2P3/8/P3B3/1P3PbP/RN1BK1R1 b Qkq - 1 15|c7d5 g1g2 d5e3 f2e3|1695|winningMaterial,short|
1nqhwt9|2rr2k1/2R2pp1/p2P1n1p/1q6/7B/5Q1P/P1p2PP1/2R3K1 b - - 5 30|c8c7 d6c7 d8c8 h4f6|1695|winningMaterial,short|
v5uj2r|8/6p1/1p1rkp1p/p4N2/P2RP2P/1bP5/4K1P1/8 b - - 1 37|d6d4 f5d4 e6d6 d4b3|1695|winningMaterial,fork,short|3:d4b3
1mji7ue|5R2/8/8/8/3P1k1p/1r6/6K1/8 b - - 9 52|f4e3 f8f3 e3d4 f3b3|1695|winningMaterial,endgame,short|
10thd5q|4k3/2p1n3/2p1Q3/P1Rp2B1/3P2K1/4P3/6P1/4q2r b - - 10 40|e1e3 e6e3 h1h7 a5a6|1695|winningMaterial,short|
1kzll2|R7/1pR3bk/2p5/6n1/pPb2n2/B4K2/P1N5/8 w - - 0 34|f3e3 f4d5 e3f2 d5c7|1695|winningMaterial,fork,short|3:d5c7 g5e4 g5h3
4xzbsn|r4rk1/p3qppp/2p1pn2/8/8/5N2/PPbBQPPP/2R1R1K1 b - - 1 16|f8d8 c1c2 d8d2 e2d2|1695|winningMaterial,short|3:e2d2 c2d2 f3d2
1hrpo4l|4r3/8/3B4/P3N1p1/7p/5k2/3K4/8 b - - 3 52|e8e5 d6e5 f3e4 a5a6|1695|winningMaterial,endgame,short|
tfa9y3|r3k2r/p3p2p/b1p2pp1/8/2q4P/1N1nB3/PPQ2PP1/R2R2K1 w kq - 2 20|a1c1 d3c1 d1c1 c4c2|1700|winningMaterial,short|3:c4c2
2dffae|4R3/8/3r3b/5k2/7p/p2K1P1P/B7/8 w - - 11 61|d3e2 d6d2 e2f1 d2a2|1700|winningMaterial,fork,endgame,short|3:d2a2
5ami96|4b3/5PB1/6k1/1pK5/7p/8/8/8 b - - 0 67|e8d7 f7f8q|1700|winningMaterial,promotion,quietMove,endgame,oneMove|
70hqng|4B1k1/5Rp1/p5Qp/1pp5/8/7P/5rK1/3q4 w - - 0 45|g2g3 d1g1 g3h4 g1g6|1700|winningMaterial,endgame,short|3:g1g6
1muv2kx|2r2bk1/4Bn2/R4P2/7p/4N1P1/2p5/P5P1/6K1 w - - 0 40|e7a3 f8a3 e4c3 c8c3|1700|winningMaterial,endgame,short|
1pr4nlz|2k5/pp2B3/n3r3/8/P1pP4/2P5/1P1K1p2/5R2 w - - 0 36|b2b3 e6e7 f1f2 c4b3|1700|winningMaterial,endgame,short|
8w4i5g|rnbqk1nr/1p3ppp/p3p3/2ppP3/1b1P2Q1/2N3P1/PPP2P1P/R1B1KBNR b KQkq - 0 6|b8d7 g4g7 c5d4 g7h8|1700|winningMaterial,short|3:g7h8 c1d2 a2a3
1bhebgy|3r2k1/1b1q1pbp/1pr1p1p1/pN1pP3/n2Q1B1P/2P3P1/4PPB1/1RR3K1 b - - 3 27|c6c5 d4a4 b7c6 c3c4|1700|winningMaterial,short|
1en3s2x|r1r3k1/3qb1pp/p1b1pn2/1p1pBp2/P2P4/1pP1P2P/1Q1NBPP1/RR4K1 w - - 0 21|e5f4 b5a4 d2b3 a4b3|1700|winningMaterial,short|3:a4b3 g7g5
i6ihnh|2r2rk1/p3bppp/bpB1pn2/8/P1qP4/2P1PQ1P/4NPP1/R1B1R1K1 w - - 1 17|c1a3 e7a3 c6b5 a6b5|1700|winningMaterial,short|
yfuc08|r2B4/pk6/1p6/4b3/3Rp1b1/P7/2P2P2/1R2K3 w - - 1 38|d4c4 a8d8 c4e4 e5c3|1700|advantage,endgame,short|
4gkjd0|8/3k4/8/8/R2P4/P2K2r1/4p3/8 w - - 0 68|d3c2 e2e1q|1705|winningMaterial,promotion,quietMove,endgame,oneMove|
kxoe8a|r2q1rk1/5pp1/1n1p4/3Ppbb1/p1P3P1/5B1p/1PPN1P1P/R1B1Q1RK b - - 0 20|a4a3 g4f5 g5d2 e1d2|1705|winningMaterial,short|3:e1d2 c1d2
1n334up|5r2/2k3K1/8/1pb2B2/4R1P1/1p6/P7/8 w - - 0 50|e4e7 c5e7 a2b3 f8f5|1705|winningMaterial,endgame,short|3:f8f5
13ily05|6k1/5p2/4p1p1/4q2p/1RP4P/5P1K/3Q2P1/r7 w - - 1 48|d2d1 a1d1 b4b8 e5b8|1705|winningMaterial,endgame,short|3:e5b8 g8g7 g8h7
elvc9s|4r2R/5k1R/8/8/3p1pr1/8/PP3b2/5K2 b - - 4 42|g4g7 h7g7 f7g7 h8e8|1705|winningMaterial,endgame,short|
paqwuz|8/4kp2/6p1/p2q4/5P2/2Q5/P6P/1rR4K w - - 8 47|c3f3 d5f3 h1g1 b1c1|1705|mate,mateIn2,endgame,short|3:b1c1
rnory5|8/8/5p2/2PRb3/8/1r3k1K/3B1P2/8 w - - 15 54|d2c1 f3e4 h3g4 e4d5|1705|winningMaterial,endgame,short|3:e4d5 f6f5
1iqtqmk|6k1/Q4r1p/p3q1p1/2Pn1p2/3p1P2/3P3P/5NP1/R5K1 w - - 0 38|a7b6 d5b6 f2e4 f5e4|1705|winningMaterial,short|3:f5e4 f7f8 b6d5
b11ptr|r4rk1/2qn2bp/2p1b1p1/1p2pp2/nPN1P3/N1P1BPPB/2Q4P/R1R3K1 w - - 0 23|c1d1 b5c4 a3c4 e6c4|1705|winningMaterial,short|3:e6c4
124m47v|r2q2k1/1pp3bp/1n2rpp1/p7/P1p1P3/2Nn3P/1P1BBPP1/R1QR2K1 w - - 6 21|d2e3 d3c1 d1d8 a8d8|1705|winningMaterial,short|
1t02htr|6r1/4k1r1/p3pnP1/1p3p1P/2pP1RP1/2P1p3/PP1N4/R5K1 w - - 0 31|d2e4 f6e4 g4f5 e4f6|1705|advantage,short|
1ys43p5|r2qkb1r/p2npp2/2p4p/3b4/2NP2p1/1P1Q1N2/P4PPP/R1B1K2R w KQkq - 0 16|d3e2 d5c4 b3c4 g4f3|1710|winningMaterial,short|
hefqih|1rbqkb1r/1p3ppp/p2p2n1/3p4/P1N1P3/5N2/1P2QPPP/R1B2RK1 w k - 0 13|e4e5 d5c4 e5d6 c8e6|1710|advantage,short|
rsrmh7|3qkb1r/rbp1np1p/1p2p1p1/pP4Bn/3P2P1/2P2N2/P3QP2/RN2KB1R b KQk - 0 14|h7h6 g5e7 d8a8 e7f8|1710|winningMaterial,short|3:e7f8 b1d2
1fyw0l5|8/7P/2R5/1p4k1/7r/6K1/6P1/8 b - - 2 50|b5b4 c6c5 g5g6 g3h4|1710|winningMaterial,endgame,short|3:g3h4
gdin7w|8/8/8/8/1kp3n1/5KP1/8/2N5 b - - 11 55|b4c3 f3g4 c3d2 c1a2|1710|winningMaterial,endgame,short|
1f8wupt|3rbk2/6p1/1pp2p1p/p7/7P/PP1n2P1/5PB1/3RNK2 b - - 1 31|d3e1 d1d8 e1g2 f1g2|1710|winningMaterial,short|3:f1g2 d8b8 d8a8
19hwg1|4r1k1/5p2/1pb1q1p1/p6p/2P2R2/2PNQ2P/P5P1/6K1 w - - 0 42|e3e5 e6e5 d3e5 e8e5|1710|winningMaterial,short|3:e8e5
1xjj13u|r1bqkb1r/1pp1pp2/2n2n1p/p2p2p1/4PB2/3P1N2/PPPN1PPP/R2QKB1R w KQkq - 0 7|f3e5 g5f4 e5c6 b7c6|1710|winningMaterial,short|
1b1p4hh|rr4k1/pRBb1qp1/3bp2p/2p5/3PQ3/5N2/P1P2P1P/4K1R1 b - - 8 21|d7c8 b7b8 a8b8 c7d6|1710|winningMaterial,fork,short|3:c7d6
1du81td|2rqkb1r/pp2ppp1/2npb2p/3nP3/3P3P/1BN2N2/PP3PP1/R1BQK2R b KQk - 1 10|g7g6 b3d5 e6d5 c3d5|1710|winningMaterial,short|
9ipwg2|8/R1k2p2/1rpb1Pr1/7p/8/4PK1B/8/2R5 b - - 4 47|c7d8 a7d7 d8c8 d7d6|1710|winningMaterial,fork,endgame,short|
16wjb3x|2r3k1/1p4p1/1p4bp/1p1N4/1P2p3/q1P4P/2Q3P1/3R2K1 b - - 2 27|c8a8 d5e7 g8h7 e7g6|1710|winningMaterial,fork,short|
uzo395|5k2/1p3p1p/1P3N2/p3P3/B2r4/b3r3/8/6RK b - - 3 42|e3g3 g1g3 f8e7 g3a3|1715|winningMaterial,endgame,short|3:g3a3
r816hg|1n3rk1/rpq1bppp/2p1pn2/p5Bb/2PP2PN/1QN4P/PP2BP2/R3R1K1 b - - 0 15|h5g4 h3g4 f6g4 e2g4|1715|winningMaterial,short|
6t0eu8|6k1/8/8/8/P2R2Pb/4pp2/8/5K2 w - - 0 57|d4d1 e3e2 f1g1 e2d1q|1715|winningMaterial,fork,promotion,endgame,short|3:e2d1q e2d1r f3f2
13gs59t|r3k1nr/pp3ppp/2n1p3/3pP3/P3b1PP/B1P1qP2/8/R2QKBNR w KQkq - 1 12|d1e2 e3c3 e1f2 c3a1|1715|winningMaterial,fork,short|3:c3a1
jr52eo|3r3r/1pkq2p1/pNpbbp1p/8/1Q2P2P/8/PPP1B1P1/2KR3R w - - 2 18|b4c3 c7b6 e4e5 f6e5|1715|winningMaterial,short|
1dhyj20|2r5/7p/pp1pk1p1/1P1Rpp2/PBn2P2/1n4P1/2P4P/2KR4 w - - 1 29|c2b3 c4e3 c1b2 e3d5|1715|winningMaterial,fork,short|
1i79bbf|5bk1/2Rbqpp1/rQ2pn1p/3pN3/3P2PP/1P2P3/5P2/5RK1 w - - 0 25|c7d7 a6b6 d7e7 f8e7|1715|winningMaterial,short|
1n3u4n|r1b1k2r/1p1nppbp/1qp3p1/pNP2n2/3P4/P4N1P/1P2BPP1/R1BQK2R b KQkq - 0 12|d7c5 d4c5 b6d8 d1d8|1715|winningMaterial,short|3:d1d8 c1f4 b5c3
1om84o6|3r1r1k/p4pbp/2Q5/4NN2/n6q/P2P4/1P1B2P1/1K2R3 b - - 3 28|h4e1 d2e1 g7e5 c6a4|1715|winningMaterial,short|3:c6a4 d3d4 e1g3
1cxrt2o|2r5/5pk1/5p1p/1Bp2R1P/5PP1/1P6/n7/2K5 w - - 5 47|c1b1 a2c3 b1b2 c3b5|1715|winningMaterial,fork,short|3:c3b5
beeh|2r1kb1r/pp3ppp/1q6/3pPb2/Rn3Bn1/1PP1P3/1Q3PPP/1N2KBNR w Kk - 1 13|a4b4 f8b4 g1e2 f5b1|1715|winningMaterial,short|3:f5b1
q34ag8|6k1/4rp2/6p1/p1P1p1P1/P1N5/4Pq2/6Q1/7K b - - 1 43|f3h3 g2h3 e7e6 h3e6|1720|winningMaterial,endgame,short|3:h3e6
1m3hwts|5rk1/1p4pp/p2bp3/7P/1nN3r1/5N2/PPR2PP1/R5K1 w - - 3 23|a1d1 b4c2 c4d6 f8f3|1720|winningMaterial,short|3:f8f3 f8d8 c2e3
w1dci9|r1b1qr1k/1pN1p1b1/2p2n2/p2p2p1/3P4/PPN1P2B/1BPQ1PP1/R3K3 b Q - 1 18|c8h3 c7e8 h3g2 e8g7|1720|winningMaterial,short|3:e8g7 e8f6 f2f4
155y7gy|3k3Q/3r4/p2q4/3pp3/8/P3P3/1B6/K7 b - - 13 70|d8c7 b2e5 d7f7 e5d6|1720|winningMaterial,endgame,short|3:e5d6 a1b2 a1a2
1tri62c|8/8/8/p4r2/R2k4/8/5P2/3K4 b - - 12 58|d4c5 a4a5 c5d4 a5f5|1720|winningMaterial,endgame,short|
1xoj9cw|5R2/5ppk/7p/2pn1P1N/1Bb1K1P1/2Pr3P/P7/8 w - - 0 41|f5f6 d3e3 e4f5 g7g6|1720|mate,mateIn2,fork,short|3:g7g6 c4d3
1xz04ul|7r/5R2/pkn1Q3/6q1/PpP1P3/3p2P1/1PN3P1/6K1 w - - 3 33|f7f5 g5c1 g1f2 c1c2|1720|winningMaterial,fork,short|3:c1c2 c1d2
1mf449s|7r/2b2pk1/p2q2p1/3N2Qp/8/4P2P/5PP1/5RK1 w - - 10 35|g5f6 d6f6 d5f6 g7f6|1720|winningMaterial,short|
wz4306|2Q5/6kp/6p1/b3npN1/1q1P1R2/7P/1P4P1/3K4 w - - 3 39|g5f3 e5f3 c8c3 b4a4|1720|winningMaterial,short|
1rjoq6b|1k5q/2r5/R7/8/1Q6/P3N3/2PK4/6q1 b - - 4 52|b8c8 a6a8 c8d7 a8h8|1720|winningMaterial,endgame,short|3:a8h8
32mdcv|3q4/6r1/p3N1Pk/4pp2/1P3n1p/PQ6/5P1K/6R1 b - - 2 45|d8b6 e6g7 b6f2 h2h1|1720|winningMaterial,short|
bnfiup|4b1k1/1p4pp/4Pq2/3P4/2P5/1p4PP/3n1P2/R3Q1K1 w - - 5 30|d5d6 d2f3 g1f1 f3e1|1725|winningMaterial,fork,short|3:f3e1
1texc4f|8/8/1np4R/pp1kNP2/8/2P3K1/4r1P1/8 w - - 6 45|e5d3 e2e3 g3f4 e3d3|1725|winningMaterial,fork,endgame,short|
q1qko1|8/1k6/3n4/3p1pR1/5Kn1/4P3/8/8 w - - 0 69|g5f5 d6f5 e3e4 d5d4|1725|winningMaterial,endgame,short|
15ysa2g|r3k3/1p3pp1/2p1p3/p7/PbBPN1p1/2N1P1K1/1PQ4r/2R2R1q b q - 9 23|h2c2 f1h1 c2c1 h1c1|1725|winningMaterial,short|
dgz6vd|5k2/3R1p2/6p1/p3rq2/5P2/Q7/Pr5P/5R1K b - - 1 39|f8g7 a3b2 f5d7 b2e5|1725|winningMaterial,endgame,short|3:b2e5 f4e5 h1g1
1ul0eii|1rb2rk1/ppp2pp1/2nq3p/4p3/2QPN3/P2BP3/1P3PPP/R3K2R b KQ - 1 15|c8e6 e4d6 e6c4 d6c4|1725|winningMaterial,short|
v7d92|r1bq1rk1/ppp2pp1/1n1bp2p/P3N2P/2pP4/2N1P3/1P3PP1/R2QKB1R b KQ - 0 13|d8e7 a5b6 d6e5 d4e5|1725|winningMaterial,short|3:d4e5 a1a7
1qb3p83|4k1n1/NpRb1p2/p3p2r/3Q3q/P5p1/1r4P1/5PB1/4R1K1 b - - 0 28|g8f6 d5b3 e8f8 c7d7|1725|winningMaterial,short|3:c7d7 b3b7 b3d3
rax71b|6k1/2b2pP1/5Q2/7q/Pp6/5P2/8/4R2K w - - 3 42|f6h4 h5h4 h1g2 h4e1|1725|winningMaterial,fork,endgame,short|
j7xyuc|r1b1k2r/ppq2pbp/2p2np1/8/P1B1p3/1PN1PQ1P/2P2PP1/R1B1K2R w KQkq - 0 12|f3f6 g7f6 c3e4 f6a1|1725|winningMaterial,short|3:f6a1 f6e5 c7e5
1uac2wo|r2q1rk1/4b1pp/p3p3/n2p1p2/2bP1B2/2P1PN1P/Q3BPP1/2R1R1K1 w - - 5 21|a2a5 d8a5 f3e5 c4e2|1725|winningMaterial,short|3:c4e2 g7g5 c4b5
1gu2078|r2r2k1/1pp3pp/n3bp2/p1b1B3/2P1P2P/2N5/PP2BPP1/2R1K2R w K - 0 17|b2b4 a5b4 e5f6 g7f6|1730|winningMaterial,short|3:g7f6 d8f8 d8c8
1w6ieu0|r3k2r/ppN2pp1/1np2q1p/3pNn2/3P1P2/3Q4/P1Pb2PP/R4RK1 b kq - 1 18|e8f8 c7a8 g7g6 a8b6|1730|winningMaterial,short|3:a8b6 g2g4 g1h1
ubfldp|3r4/3P4/3Rk3/2B1p2p/rPP3p1/8/5P1K/8 b - - 3 46|e6e7 d6a6 e7d7 a6a4|1730|winningMaterial,endgame,short|
1pd322q|1R3Q2/5p2/5kp1/4nq1r/4pP2/4P1P1/8/5RK1 b - f3 0 43|e5f3 f1f3 f5c5 f8c5|1730|winningMaterial,endgame,short|3:f8c5 f8d8
1kiptn8|1r6/1pk3p1/pNnp4/2p2r2/2Pb1P1P/2B2K2/PP6/3R3R w - - 2 28|d1d4 c5d4 f3e4 d4c3|1730|winningMaterial,short|3:d4c3 c7b6 f5h5
1waoyrl|5k2/1BQ1qp1p/p5p1/2p1n3/8/5P2/PP3P1P/5K2 w - - 5 36|c7a5 e7b7 a5c5 b7e7|1730|advantage,short|
6lwz3a|2k4r/ppp1q3/2n3p1/b1Pr1pNp/2Bp3P/P3PPP1/6K1/2RQ1R2 b - - 1 27|h8e8 c4d5 d4e3 d5c6|1730|winningMaterial,short|3:d5c6 d1b3 d5e6
cyyo2h|5r2/1br4k/p6p/1p1q3p/3N1Q2/2P3P1/5P2/R3R1K1 w - - 0 44|f4e4 d5e4 e1e4 b7e4|1730|winningMaterial,short|3:b7e4
ugetnq|rr4k1/pR1b2p1/3bpq1p/B1p5/3P4/5N2/P1P1QP1P/4K1R1 w - - 5 20|g1g7 f6g7 a5c7 d6c7|1730|winningMaterial,short|3:d6c7 b8b7 c5d4
qlm9ez|1k1r4/1ppN4/2n2rPp/p7/6B1/P7/KP1n1p2/2R4R b - - 1 35|b8a7 d7f6 d8d6 c1c6|1730|winningMaterial,short|3:c1c6 g6g7 c1d1
1ve4d6f|8/8/5p2/4k1pR/8/8/r4P2/6K1 w - - 1 51|h5h1 a2a1 g1g2 a1h1|1730|winningMaterial,endgame,short|
jc7d3s|3r1r2/p2p1n1k/1p1N1qp1/7p/2R5/4R3/PPPQ1PPP/2K5 w - - 1 31|c4f4 f6f4 d6f7 f8f7|1735|winningMaterial,short|3:f8f7 f4f7
1q7apsm|1k6/pp4p1/2p4p/2P2r1P/1P2K3/P7/8/7R b - - 1 34|g7g6 h5g6 f5g5 h1h6|1735|advantage,endgame,short|
17tbouy|3b1r1k/6p1/1n5p/pR4P1/2PpR2P/2p5/5P2/2B3K1 b - - 2 45|d8g5 h4g5 f8d8 b5b6|1735|winningMaterial,short|3:b5b6 e4e1
3jnm6m|4R3/6p1/3k2p1/8/5K2/8/8/5r2 w - - 8 78|f4e3 f1e1 e3f3 e1e8|1735|winningMaterial,endgame,short|
1haha8m|3rr1k1/1pq2p2/p1nbb1pp/8/4p2Q/2P1N1NP/PP1B1PP1/2R2RK1 w - - 0 22|e3d5 e6d5 g3f5 g6f5|1735|winningMaterial,short|3:g6f5 d6e7 h6h5
bm0i23|2r4r/4p1k1/p4b1p/1p6/1P4QP/4q1P1/P3N1P1/3RK2R b K - 4 26|f6g5 h4g5 h6g5 h1h8|1735|winningMaterial,short|3:h1h8
4oopvt|8/8/4K3/8/2kP4/4N1b1/P7/8 b - - 2 53|c4d4 e3f5 d4c4 f5g3|1735|winningMaterial,fork,endgame,short|
1s5dhtx|4n3/R4k2/R7/7r/8/5K2/8/8 b - - 1 56|e8c7 a7c7 f7g8 a6a8|1735|mate,mateIn2,endgame,short|3:a6a8
l9jebf|8/8/2k5/4p3/2N5/3K4/1p6/8 w - - 2 62|d3c3 b2b1q|1735|winningMaterial,promotion,quietMove,endgame,oneMove|
12ai527|1nr3k1/1Q3ppp/4p3/2p5/8/P1R2BP1/1q3r1P/2R3K1 b - - 1 30|b2b7 f3b7 f2d2 b7c8|1735|winningMaterial,short|
2hkhoe|4r3/3p1nk1/5Rp1/2pQ4/1pPpq3/6P1/1P5P/R6K w - - 1 31|h1g1 e4d5 f6g6 g7g6|1740|winningMaterial,short|3:g7g6 g7h7
1m7tizr|8/6pk/6p1/1p6/1Q4PK/8/PP3P2/6q1 w - - 3 42|b4e1 g1h2 h4g5 h2h6|1740|mate,mateIn2,endgame,short|
e1yooc|5rk1/1p3ppp/pq6/3Q2B1/8/1BP5/P4bPP/4R2K b - - 0 25|a6a5 d5f7 f8f7 e1e8|1740|mate,mateIn2,sacrifice,short|
5vzg85|7r/1p1kb1R1/2n1p3/pNPp2r1/3P3p/P3P3/1P1KB3/7R w - - 1 26|h1h4 h8h4 g7g5 e7g5|1740|winningMaterial,short|
ztaep5|2r4r/3nkp2/2pb3Q/3p4/1P1Pq3/P3PR1N/1B4P1/2R3K1 w - - 3 31|h3g5 h8h6 g5e4 d5e4|1740|winningMaterial,short|3:d5e4 d6h2
qt1ouw|8/5P1r/8/8/kR6/8/p5K1/8 b - - 1 71|a4a5 f7f8q|1740|winningMaterial,promotion,quietMove,endgame,oneMove|
60ammw|6k1/3P1r1p/8/q7/6P1/2p1Q2K/6B1/8 b - - 0 53|f7d7 e3e8 g8g7 e8d7|1740|winningMaterial,fork,endgame,short|
dx47y2|r1b1rbk1/2qn1ppp/p2p1n2/2p5/3BP3/1PN2NPP/2PQ1PB1/R2R2K1 w - - 0 19|c3d5 f6d5 e4d5 c5d4|1740|winningMaterial,short|
mmpip3|7k/2nn2bp/2q1prp1/2p1p3/1PQ3P1/2N2R1P/3B4/5R1K w - - 0 32|h1h2 f6f3 f1f3 c6f3|1740|winningMaterial,short|
11gubz3|8/8/2k5/8/r6K/6p1/7R/8 w - - 0 68|h4h3 g3h2 h3h2 a4g4|1740|winningMaterial,endgame,short|
2tu1mt|4R3/p6p/8/2bpk1B1/P6P/1P6/5r2/6K1 b - - 4 36|e5d6 g5e7 d6c6 e7c5|1740|winningMaterial,endgame,short|3:e7c5 e8c8
1q1qwl8|6k1/2r2pp1/4p3/p6p/3q3P/3R4/PP3PP1/1Q3K2 b - - 0 29|d4d3 b1d3 c7c1 f1e2|1745|winningMaterial,short|
16wq5wp|r2r2k1/ppqN1p1p/6p1/8/P1bQ4/2P1R3/5PPP/3R2K1 b - - 6 22|c7d7 d4d7 d8d7 d1d7|1745|winningMaterial,short|
1xrz6x8|4R3/P1nrk3/5b2/7B/5K2/4P2P/8/8 b - - 2 45|c7e8 a7a8q|1745|winningMaterial,promotion,quietMove,endgame,oneMove|
6w81tt|3r1k2/1pqn1pp1/2p3n1/7r/1pPPp2p/2Q4P/P2BNPP1/R3R1K1 w - - 0 21|d2f4 g6f4 c3e3 f4e2|1745|winningMaterial,short|3:f4e2 f4g6 f4e6
eqkcbs|2Q5/6pk/3B1p1p/8/8/8/1n3PPP/q2N2K1 w - - 5 44|g2g3 a1d1 g1g2 d1d6|1745|winningMaterial,fork,endgame,short|3:d1d6 d1d5
e2ezfg|2b1r1k1/r2nNpb1/pp4N1/2p4p/P1q1pP2/6PP/1P4BK/RQ3R2 b - - 1 21|e8e7 g6e7 g8h8 e7c8|1745|winningMaterial,fork,short|3:e7c8 b1d1
1s03jhe|3k4/1p3p2/p3P3/P2P4/B1p2Q2/6pb/1P4r1/3N2K1 w - - 1 40|g1f1 g2f2 f1e1 f2f4|1745|winningMaterial,fork,short|
itttpc|8/p3Nk2/6p1/6rp/8/7P/P2n1PK1/3R4 w - - 2 39|g2h2 d2f3 h2h1 f7e7|1745|winningMaterial,endgame,short|
1yusxjo|r4rk1/pp2b2p/2q1R1p1/6B1/3P4/7Q/PPn2PPP/4R1K1 b - - 0 22|c2e1 e6c6 b7c6 g5e7|1745|winningMaterial,short|3:g5e7 h3b3
1nrposu|2r3k1/1pN3bp/3r1pp1/p7/P3P3/R2p3P/1P3PP1/3R2K1 w - - 1 28|d1d3 d6d3 a3d3 c8c7|1745|winningMaterial,short|
yngicl|8/8/5R2/P3p3/8/5k1p/r7/6K1 b - - 1 58|f3e2 f6f2 e2d3 f2a2|1750|winningMaterial,endgame,short|
1bgj0wi|3R4/4r1k1/8/6N1/4PnR1/7P/6p1/r5K1 w - - 1 50|g1h2 a1h1 h2g3 g2g1q|1750|winningMaterial,promotion,endgame,short|
1cjpubh|2krr3/1p1q4/1P1p1n1p/2PP2p1/3n1p2/P1NQ2P1/1B5P/2R2RK1 b - - 2 29|e8e3 d3d4 d7g4 d4f6|1750|winningMaterial,short|3:d4f6 c5d6
1x0hzaa|7k/6pp/1Q3n2/8/1qr5/8/1B3PP1/5RK1 w - - 2 36|b6f6 g7f6 b2f6 h8g8|1750|winningMaterial,endgame,short|
1fo683q|r3r1k1/1pq1bpp1/p2p1n1p/3Pn3/2P1P1b1/P1N3PP/1BQN1PB1/R3K2R b KQ - 0 17|a8c8 h3g4 e5c4 d2c4|1750|winningMaterial,short|3:d2c4 c3e2 c3d1
n1sctb|1r2r3/qR3pk1/P1Qp2p1/4p2p/8/6P1/5P1P/2R3K1 b - - 0 39|e8c8 b7a7 c8c6 c1c6|1750|winningMaterial,short|
ysny31|8/7k/p3p3/8/1p3R2/1K2R3/P2r4/1r6 w - - 5 47|b3a4 d2a2 e3a3 a2a3|1750|mate,mateIn2,endgame,short|
j1xymh|5rk1/p2nb1pp/2p3r1/4q3/3pQp2/1P1P2PP/P1PB1P2/4RRK1 w - - 0 26|e4g6 h7g6 e1e5 d7e5|1750|winningMaterial,short|
1qcebl8|r4k1r/1pp1nnN1/1b6/pP1pPbP1/5p2/P1P4P/3NBB2/R3K1R1 w Q - 6 27|g7e6 f5e6 f2b6 c7b6|1750|winningMaterial,short|
xzz09o|8/2k5/3n4/3pnpR1/8/4PKP1/8/8 w - - 2 65|f3f2 d6e4 f2g2 e4g5|1750|winningMaterial,fork,endgame,short|
6l06q2|2rr2k1/3p2p1/3Rp2q/pPQ1p2p/4P2P/5PP1/P5K1/3R4 w - - 1 30|d6c6 d7c6 d1d8 c8d8|1750|winningMaterial,short|
s26c5m|r5r1/1b1nk3/1p2pp2/pN2P2p/Pq6/4Q2P/1P3PP1/2R2R1K w - - 4 30|c1c7 b7g2 h1h2 g2f1|1755|winningMaterial,fork,short|3:g2f1
wtqvfb|3B4/1p6/6k1/8/6bp/3R4/6K1/7r b - - 1 57|g4f5 d3d6 g6h5 g2h1|1755|winningMaterial,endgame,short|
180v838|r2qkb1r/pppb1ppp/2np1n2/1B1Pp3/4P3/2N2N2/PPP2PPP/R1BQK2R b KQkq - 0 6|a7a6 d5c6 a6b5 c6d7|1755|winningMaterial,short|
1slbmgi|8/1R5b/k3K2p/4p3/4n3/1P6/8/8 w - - 4 61|b7h7 e4g5 e6d5 g5h7|1755|winningMaterial,fork,endgame,short|
kl0ap9|r3k2r/pp1bppbp/2n3p1/q2p4/3PnB2/1PNBPN1P/P4PP1/2RQK2R w Kkq - 3 12|e1g1 e4c3 b3b4 c3d1|1755|winningMaterial,short|3:c3d1 a5a3
9nmyxw|5r1k/ppp1q3/2n1b2p/2P4P/2Np1Ppb/6Q1/PP2PP2/1BR2RK1 w - - 1 26|c4e5 c6e5 f4e5 h4g3|1755|winningMaterial,short|3:h4g3
4ez2d0|1r4k1/5p2/R4Qp1/5n1p/1B6/P2qP1P1/5nK1/2R5 w - - 0 31|f6f7 g8f7 c1c7 f7e8|1755|winningMaterial,short|
sxrub5|2k3r1/2qb4/2pbp3/3pB3/1P5p/2P2N1K/P3QPr1/R5R1 b - - 2 28|g8g3 e5g3 h4g3 h3g2|1755|winningMaterial,short|3:h3g2 e2a6
1vn89b5|6r1/1p1kp3/pn1p4/3bp1N1/3P1PPr/2N4P/PP6/R1R3K1 w - - 0 27|f4e5 g8g5 c3d5 b6d5|1755|winningMaterial,short|
1lotqve|8/8/3bk3/R7/2K4r/8/8/3B4 w - - 36 65|c4c3 d6b4 c3d3 b4a5|1755|winningMaterial,fork,endgame,short|
1qu07lh|r1b2rk1/pp2ppb1/5np1/2Pp2Np/7P/PnNP2P1/1B1QPPB1/q4RK1 w - - 8 19|f1a1 b3d2 c3d5 f6d5|1760|winningMaterial,short|3:f6d5
5txceh|1R6/P7/2k5/r4p2/8/7P/1P1p1K2/8 w - - 1 44|b2b4 d2d1q|1760|winningMaterial,promotion,quietMove,endgame,oneMove|
1o94zf8|2k2b1r/p1p3p1/1np1b2p/2q1pp1P/1PP5/2N2Q2/P2BBPP1/4K2R b K - 0 20|b6c4 b4c5 e5e4 e2c4|1760|winningMaterial,short|3:e2c4 f3g3 f3f4
xwb4fk|R7/5K2/8/1k1p3p/1p1P4/p7/1B6/8 w - - 0 77|a8e8 a3b2 e8e1 b5c4|1760|winningMaterial,endgame,short|
d4ggri|3r1nk1/pb3pp1/2q1p2p/4P3/1Q3P2/3N2PP/3R3K/2R5 b - - 2 42|d8d3 c1c6 d3d2 b4d2|1760|winningMaterial,short|
6zp05x|r1b1kbnr/1p2pppp/p2p4/2q5/2PQP2P/8/PP1B1PP1/RN2KB1R w KQkq - 3 9|b1c3 c5d4 d2e3 d4e3|1760|winningMaterial,short|3:d4e3 d4e5 d4f6
1hvoar2|4r1k1/R5bp/1p2n3/8/1N1P1pQ1/4q1PP/8/5RK1 w - - 0 33|f1f2 f4g3 g4e2 g3f2|1760|winningMaterial,short|3:g3f2 e3d4 e3f2
1mqml3m|1kq5/6b1/2N5/pp4p1/P3QP2/7P/Kp6/8 b - - 1 43|b8b7 c6e7 b7b8 e7c8|1760|winningMaterial,endgame,short|
1xt2s4a|8/2R4b/5n1p/1k1Kp3/8/1P6/8/8 w - - 0 59|d5d6 f6e8 d6e5 e8c7|1760|winningMaterial,fork,endgame,short|
1cro9lx|r1bqkbnr/pp3pp1/4p2p/2p1P3/1n6/6Q1/PPP1BPPP/RNB1K1NR w KQkq - 3 9|e1f1 b4c2 b1a3 c2a1|1760|winningMaterial,short|3:c2a1
1ga6ruh|2rr2k1/5pp1/8/pBP2b1p/1b3B1P/1P2PP2/1P4P1/R2K2NR w - - 1 21|f4d6 c8c5 b5c4 d8d6|1760|winningMaterial,short|
3ornj3|rn1q1rk1/ppp2ppp/6b1/3pB1PQ/3Pn3/2NB4/PP3PP1/R3K2R w KQ - 3 14|h5h7 g6h7 h1h7 g8h7|1765|winningMaterial,short|3:g8h7
1kdjjql|5r2/7k/6R1/p1P3P1/7r/P1Pn3p/5B1P/4RK2 w - - 3 40|f1e2 f8f2 e2d3 h7g6|1765|winningMaterial,endgame,short|
1g2xqgm|8/8/3R4/p1p1r3/1p2kr1p/5P2/1PR1K3/8 b - - 0 52|f4f3 c2c4 e4f5 e2f3|1765|winningMaterial,endgame,short|
48a9lr|r2qkb1r/pp1n1ppp/4pn2/1Bpp2B1/3P4/2N1P3/PPP1bPPP/R2QK2R w KQkq - 0 8|b5d7 f6d7 d1e2 d8g5|1765|winningMaterial,short|
18nbcm8|4Q3/p1p2q2/2k5/8/1nr5/8/4R3/1KB5 b - - 3 45|f7d7 e2e6 c6b7 e8d7|1765|winningMaterial,endgame,short|
1bn3mrq|3r1r1k/Q7/2qp3P/2p5/P3P3/2P1BP2/1b1K4/1N4R1 b - - 0 36|c6d5 e4d5 b2c1 d2c1|1765|winningMaterial,short|3:d2c1 d2c2 d2d1
1tub4uh|5N2/4K3/7k/8/8/1p6/p5R1/8 w - - 1 84|f8e6 a2a1q|1765|winningMaterial,promotion,quietMove,endgame,oneMove|
upigae|6Q1/8/1p6/3k1p2/q7/8/7K/8 b - - 7 72|d5c6 g8e8 c6c5 e8a4|1765|winningMaterial,endgame,short|
nscn3c|3r4/5rp1/2kpR1R1/2p2N1n/1pP2P2/pP3K2/P7/8 w - - 0 58|e6e7 f7f5 g6g5 f5g5|1765|winningMaterial,short|3:f5g5 g7g6 d8f8
zp77un|8/2k1n1R1/p4q2/4Q3/Pb1P4/8/8/6K1 b - - 1 42|f6d6 g7e7 c7d8 e5d6|1765|winningMaterial,fork,endgame,short|3:e5d6
puaip8|3rkbnr/ppp3pp/2n2p2/1B1qP3/Q4B1P/P4NP1/1P1p1P2/R3K2R w KQk - 0 15|f4d2 d5f3 e1g1 d8d2|1770|winningMaterial,short|3:d8d2 f8c5 g8e7
1pql59z|r3kb1r/3n1pp1/1q2pnb1/pp6/2BP4/2P2N1P/1P2QP1P/R1B1KN1R w KQkq - 0 16|h1g1 b5c4 g1g6 f7g6|1770|winningMaterial,short|
6s85gw|2r1q2k/1p1Qb1pp/8/1N1pN1r1/1n6/1B1P3P/PP3P2/R4RK1 w - - 3 23|e5g4 e8d7 f2f4 g5g4|1770|winningMaterial,short|3:g5g4 g5g6
1aplizo|5k2/5ppp/8/RprrP3/3R1P2/8/5P2/5K2 w - - 0 38|d4d3 d5d3 a5a8 f8e7|1770|winningMaterial,endgame,short|
1t7562l|6k1/5p2/p2p4/1p2nPP1/1B6/1P3K2/P7/8 w - - 4 50|f3f2 e5d3 f2e3 d3b4|1770|winningMaterial,fork,endgame,short|
wz3jph|2rq1b1r/1k5p/ppb1R3/6B1/3p2Q1/6PP/PPP2P2/4R1K1 b - - 0 20|d8g5 g4g5 a6a5 e6c6|1770|winningMaterial,short|3:e6c6 a2a3 g5f6
8fmkth|r2qk2r/5pp1/3bp3/1p1n3p/4Q3/2P3P1/1P3P1P/RNB2RK1 w kq - 0 17|f1e1 a8a1 e4d5 a1b1|1770|winningMaterial,short|3:a1b1 e8g8 d8d7
1gnnlyv|7k/8/3p2r1/1Rpn3p/5P2/2P4K/5B1P/8 w - - 0 44|b5b1 d5f4 h3h4 g6g4|1770|mate,mateIn2,endgame,short|
182z9zr|7k/5r2/1Qp1rn1p/1pRq1p2/p2p1P2/3P2RN/PP4P1/7K b - - 13 36|d5c5 b6c5 f6g4 g3g4|1770|winningMaterial,short|3:g3g4 c5d4 h3g1
1pkid94|3b4/1p6/p3k1p1/8/4RB2/2P2KP1/1Pr5/8 b - - 3 49|e6d5 e4d4 d5c5 d4d8|1770|winningMaterial,endgame,short|3:d4d8 f4e3 b2b4
1uwtqwz|r1b2rk1/pp1nqppp/3b4/3p1N2/P7/1NP1B3/1P2QPPP/R3K2R b KQ - 14 16|e7d8 f5d6 d7e5 d6c8|1775|winningMaterial,short|3:d6c8 e3c5
4pm59j|r4rk1/2pq2p1/6np/p1pP4/2P1NP2/PP1n2P1/2Q1R2P/6RK b - - 0 27|g6e5 f4e5 d3e5 e4c5|1775|winningMaterial,short|
1fhw6wd|6k1/5p1p/p5p1/8/2BP2R1/4PP1P/p4P2/r1r3RK w - - 0 31|h1h2 c1g1 g4g1 a1g1|1775|winningMaterial,short|
1euq5ao|3rB1k1/5Rp1/p5Qp/1ppq4/8/7P/8/5R1K w - - 1 40|g6e4 d5e4 f7f3 e4e8|1775|winningMaterial,fork,endgame,short|3:e4e8 d8e8 e4f3
1pdpaht|r5k1/2p2ppp/1p3r2/p3Q3/2BP1n2/7P/P4Pb1/4R1K1 b - - 1 26|g2d5 e5e8 a8e8 e1e8|1775|mate,mateIn2,sacrifice,short|
167iaxg|kr6/1N6/p7/7q/4Q3/PK1RN3/1PP3p1/r7 w - - 4 46|e3g2 b8b7 b3c3 h5a5|1775|winningMaterial,endgame,short|
9sb8qr|4r3/8/8/5P2/3K2k1/6p1/5R1P/8 w - - 0 61|f2d2 e8d8 d4e5 d8d2|1775|winningMaterial,endgame,short|
h26vzh|8/8/5P1r/1p4K1/1k2Np2/1P1p3p/3N4/8 b - - 1 60|h6h5 g5h5 h3h2 e4f2|1775|winningMaterial,endgame,short|
2vuyam|r3k2r/p1p1bp2/bpn1p3/3q2pp/3P2Q1/1PP2NP1/P4PBP/RNB1K2R w KQkq - 0 13|f3e5 d5g2 g4f3 g2f3|1775|winningMaterial,short|
trsv5y|8/2k5/8/1b2N3/2P5/8/p7/2K5 w - - 0 57|c1c2 a2a1q|1775|winningMaterial,promotion,quietMove,endgame,oneMove|
1o1sxr|r5k1/2p1Rp2/5Ppp/p7/Pp1NN3/8/2r3PP/5K2 b - - 2 27|b4b3 d4c2 b3c2 e7c7|1780|winningMaterial,short|
kh1l7x|8/6k1/3R4/6p1/p1n3P1/P1N5/2K5/4r3 w - - 10 64|d6d1 c4e3 c2d2 e3d1|1780|winningMaterial,fork,endgame,short|
187cfcn|4k3/6p1/P1B3p1/5pP1/7P/8/r7/4K3 b - - 3 64|e8f7 c6d5 f7e7 d5a2|1780|winningMaterial,fork,endgame,short|
5w2pu3|1R6/4b3/2P1k3/7p/4b2P/1p6/6K1/5R2 w - - 0 49|g2h2 e7d6 h2g1 d6b8|1780|winningMaterial,fork,endgame,short|
a0m0x6|8/1p2k3/6N1/p6n/P1r5/2P4P/1P6/6KR b - - 2 41|e7d7 g6e5 d7d6 e5c4|1780|winningMaterial,fork,endgame,short|
teglbd|1r1qkb1r/1Qpn1pp1/p3pn1p/5b2/2pP1B2/P1N1PN2/1P3PPP/R3KB1R w KQk - 1 10|f4c7 b8b7 c7d8 e8d8|1780|winningMaterial,short|
qds6kq|r2qk2r/5pp1/p2bpn1p/1p1pBb1P/2pP2P1/P1P1P3/1P1NBP2/R1Q1K2R b KQk - 0 17|f5g4 e5f6 g7f6 e2g4|1780|winningMaterial,short|
156w4py|8/2k4K/6PN/4R3/8/3q4/p7/8 w - - 0 60|e5f5 a2a1q|1780|winningMaterial,promotion,quietMove,endgame,oneMove|
d0sam5|6k1/1p3p2/2pnp2p/p1b3p1/P1Pq4/2B3PP/1PB1QPK1/8 b - - 4 33|d4f2 e2f2 c5f2 g2f2|1780|winningMaterial,short|
2oxr88|5rk1/5ppp/p1B1pn2/Q7/1P5P/q5P1/4PP2/5RK1 b - - 3 30|a3g3 f2g3 h7h6 f1f6|1780|winningMaterial,short|3:f1f6 f1d1 a5a6
1raik31|1n2kb1r/2r5/pNb1pp2/P1p3q1/1p1pBnNp/1P5P/1BPP1PP1/1R1QR1K1 w k - 0 24|b2d4 c5d4 e4c6 b8c6|1785|winningMaterial,short|3:b8c6 c7c6
h4avzr|r3r1k1/1pp1qppp/p1n2n2/4B3/6b1/2N2NPP/PPP1Q1B1/2KR3R b - - 0 16|e7e5 e2e5 c6e5 h3g4|1785|winningMaterial,short|
1cd5r6f|8/PR6/5k2/5b2/5K2/3p4/4r3/8 b - - 19 64|f5e4 a7a8q|1785|winningMaterial,promotion,quietMove,endgame,oneMove|
rptzo6|r1bq1rk1/ppp4p/2n2p2/3np1p1/PbB4B/3P1N2/1PPN1PPP/R2QK2R w KQ - 0 12|f3g5 f6g5 h4g5 d8g5|1785|winningMaterial,short|3:d8g5 b4e7
zd1hkl|3r2k1/pp3pbp/6p1/7q/P2P1P2/8/1P4Q1/3R1R1K w - - 1 29|h1g1 g7d4 d1d4 d8d4|1785|winningMaterial,sacrifice,short|3:d8d4 h5c5
9k3pwi|q5k1/5pp1/1p3n1p/p1b5/P6P/1P2R1P1/2QN1PK1/3rB3 w - - 10 47|d2e4 c5e3 c2d1 a8e4|1785|winningMaterial,short|3:a8e4
1lp4wp2|1R2Qbk1/5pp1/4p2p/3pP3/1qn5/7P/6PK/8 b - - 3 44|g8h7 b8b4 f8b4 e8f7|1785|winningMaterial,endgame,short|
8cr2yg|1r6/4qp2/kp5p/p1p4p/P1P1nP2/2Np1Nr1/6B1/1R2Q2K b - - 15 44|g3f3 g2f3 f7f5 c3e4|1785|winningMaterial,short|3:c3e4
v45xqt|2r1kb1r/pbBp1ppp/1pn2q2/3Q4/2B1P3/8/PPPN1PPP/R3K2R w KQk - 3 13|c7e5 f6e5 d5f7 e8d8|1785|advantage,short|
1wiobd8|r3k1r1/1pp1bn2/2b1p2p/p4qp1/P2P1n1P/1PP1QPN1/1B1NB3/2KR3R b - - 2 25|f7d6 g3f5 d6f5 e3f2|1785|winningMaterial,short|
175zx27|r1b1r1k1/1p3pp1/7p/p2pq2P/P2P3R/6P1/1P3P2/1BRQ1K2 b - - 0 24|e5e2 d1e2 e8e2 f1e2|1790|winningMaterial,short|3:f1e2 c1c8
1o86gi8|r3r1k1/2p3np/3p2p1/pNp5/P3b1P1/1P2B2P/2P5/4RRK1 b - - 1 26|h7h5 b5c7 e4c2 c7a8|1790|winningMaterial,fork,short|3:c7a8
w142d3|r4rk1/2q1bpp1/bp2p2p/p1pn3N/3P4/P1P2N2/1P1BQPPP/3RR1K1 w - - 2 18|h5g7 a6e2 e1e2 g8g7|1790|winningMaterial,short|3:g8g7 g8h7
1skgdi3|7k/6r1/7p/2p2p2/Q4Pn1/P2qrNR1/6P1/3R2K1 b - - 1 46|d3d1 a4d1 e3a3 g3g4|1790|winningMaterial,endgame,short|3:g3g4 d1d8 d1d2
nat5fg|4r3/p1k5/2p5/2R5/2np2P1/p5K1/8/R7 b - - 1 47|d4d3 c5c4 d3d2 g3f2|1790|winningMaterial,endgame,short|
1t3eo3y|7k/1R6/8/1p6/p1p5/P1P5/1K1N2RP/3r2r1 w - - 3 56|b7h7 h8h7 g2g1 d1g1|1790|winningMaterial,endgame,short|
1fqirkg|8/7P/8/8/2p1k1p1/P3pp1n/8/2NK4 b - - 0 65|h3f4 h7h8q|1790|winningMaterial,promotion,quietMove,endgame,oneMove|
wg8hef|8/7r/4kB2/2p3N1/2pn4/P4P2/6P1/4K3 b - - 1 38|e6d5 g5h7 c4c3 f6d4|1790|winningMaterial,endgame,short|3:f6d4 h7g5
13iqp9f|r1q2r2/pp2bp1k/n1bp2pp/8/4Pp2/1BP1B3/PP1NQ1PP/1R1R2K1 w - - 0 21|d1f1 f4e3 f1f7 f8f7|1790|winningMaterial,short|3:f8f7
105za48|r1bqkb1r/pppp1ppp/2n5/8/2BQP3/8/PPP2PPP/RNB1K2R w KQkq - 3 7|c4f7 e8f7 d4d5 f7e8|1795|winningMaterial,short|
q62n7m|2kr4/5P1p/pr4p1/N1b2b2/2B5/2B1nP2/3NK2P/7R w - - 4 29|c4a6 b6a6 d2e4 f5e4|1795|winningMaterial,short|3:f5e4 e3d5 e3d1
3rrg2i|r1b2rk1/pp2bppp/2q1pn2/8/2NN4/1P6/P1P1QPPP/R1B1R1K1 b - - 0 15|c6e4 e2e4 f6e4 e1e4|1795|winningMaterial,short|
1u47ybe|8/8/3r2KP/8/6R1/8/p1k5/B7 w - - 1 69|a1f6 a2a1q|1795|winningMaterial,promotion,quietMove,endgame,oneMove|
gdqwsy|8/3R4/4p2p/6PP/1n1pk3/1K6/2p5/8 w - - 0 81|g5h6 c2c1q|1795|winningMaterial,promotion,quietMove,endgame,oneMove|
di8oj5|6k1/3n1pp1/7p/5q2/7r/3RPP1P/4BPK1/3Q4 w - - 2 33|g2g1 f5h3 e3e4 h3h1|1795|mate,mateIn2,short|3:h3h1
p2ej0s|r1b2rk1/pp3ppp/3bp3/3p3Q/1n1P1B2/1N2P3/q3BPPP/1RR3K1 b - - 3 18|a2b1 c1b1 d6f4 e3f4|1795|winningMaterial,short|
17b6hit|8/7p/1P6/8/P6P/4K3/5pk1/8 w - - 0 47|e3d4 f2f1q|1795|winningMaterial,promotion,quietMove,endgame,oneMove|
1cb9hl2|q5k1/5pp1/1p3n1p/p1b5/P6P/1P2R1P1/2QN1P2/3rB1K1 b - - 15 49|a8d8 c2d1 c5e3 f2e3|1795|winningMaterial,short|
si91rd|1R6/p5P1/3k4/3q4/K1p5/P7/5P2/8 b - - 2 47|d6c7 g7g8q|1795|winningMaterial,promotion,quietMove,endgame,oneMove|
4f9uh5|r2qk2r/pp1nnpp1/2pb3p/3pNB2/3P1P2/2N5/PPP3PP/R1BQ1RK1 b kq - 0 13|d7e5 f4e5 e7f5 e5d6|1800|winningMaterial,short|3:e5d6 f1f5 d1f3
1k7d3e1|r4r2/1p3pk1/3q2p1/1p3bP1/p3Q2P/4P3/P2P2B1/2R2RK1 w - - 1 28|c1c6 b7c6 f1f5 g6f5|1800|winningMaterial,short|3:g6f5 a8e8 f8e8
onkku4|4r3/N1n3pk/Pp5p/1PP4P/4pp2/3b4/1R4PK/4B3 b - - 0 41|e8e5 c5b6 c7a6 b5a6|1800|winningMaterial,short|3:b5a6
10fqpon|3qkb1r/3n1ppp/1pp1p3/r7/B2P1B2/P1N5/1PP2PbP/R2QK1R1 b Qk - 0 14|d8a8 g1g2 a5a4 c3a4|1800|winningMaterial,short|
dmqsj3|8/8/6B1/8/8/k2K4/7p/8 w - - 0 81|d3d2 h2h1q|1800|winningMaterial,promotion,quietMove,endgame,oneMove|
1h4qr57|8/6p1/4p2p/2R2k2/p6P/4PK2/P7/3r4 b - - 2 48|d1d5 e3e4 f5e5 e4d5|1800|winningMaterial,fork,endgame,short|
vxzasu|2b3k1/1p2qp2/2pn1N1p/6p1/8/rPP3P1/P4QBP/R5K1 b - - 1 25|e7f6 f2f6 a3a8 f6d6|1800|winningMaterial,short|3:f6d6 f6h6 g3g4
1dys02i|3n3N/ppr2pkp/5bp1/3P1b2/2P1R3/8/PPB2PP1/3R2K1 w - - 5 33|h8f7 f5e4 c2e4 d8f7|1800|winningMaterial,short|3:d8f7 c7f7
1dkuydp|1k1r3r/ppp2Bpp/3nQq2/8/8/5PP1/Pb3BKP/3R1R2 w - - 2 25|e6e2 d6f7 e2c2 d8d1|1800|winningMaterial,short|3:d8d1 b7b6 h8e8
1sn61bq|r1b1rbk1/2q2ppp/pnpp1n2/8/3pP3/1PN1BNPP/2P2PB1/R2RQ1K1 w - - 0 17|e3g5 d4c3 g5f6 g7f6|1800|winningMaterial,short|
ev5dfn|r3k3/1p3pp1/2p1p3/p7/PbBPN1p1/2N1P3/1PQ2K1r/2R2R1q w q - 4 21|f2e1 h2c2 c1c2 h1e4|1805|winningMaterial,short|3:h1e4
11i3qmn|1r1r3k/1B2b2p/4P3/8/R4P2/p3N1PK/7P/8 w - - 10 53|e3f5 b8b7 f5e7 b7e7|1805|winningMaterial,endgame,short|
1djntme|8/2R2k2/1b6/p5B1/P4p1P/5P2/5r2/6K1 b - - 1 51|f7g6 c7c6 g6g7 c6b6|1805|winningMaterial,fork,endgame,short|3:c6b6 g5h6 g5f6
ze9ned|8/R2B4/6p1/6P1/5k1P/3b4/1r5r/4R1K1 w - - 3 54|e1e4 d3e4 h4h5 h2h1|1805|mate,mateIn2,endgame,short|3:h2h1
1f5e2wk|3n1k2/7p/5P2/7P/B4K2/8/8/8 b - - 24 57|d8c6 a4c6 h7h6 f4e5|1805|winningMaterial,endgame,short|
1cmcgqh|6k1/4Q3/6pp/8/1P2pp2/7P/5PP1/q1r2NK1 w - - 10 45|e7f8 g8f8 g2g4 c1f1|1805|winningMaterial,endgame,short|3:c1f1 f8e7 f8g8
1tz1l9m|8/r3k3/3p4/4p3/1R1n2NP/5K2/6P1/8 w - - 3 52|f3e3 d4c2 e3e4 c2b4|1805|winningMaterial,fork,endgame,short|3:c2b4
ccs64c|q2K4/6k1/3R4/1p3R1P/8/8/8/8 w - - 5 55|d8e7 a8e4 e7d7 e4f5|1805|winningMaterial,fork,endgame,short|
izdyag|8/4k3/3q2p1/n4p1p/8/1B4P1/1K4P1/4Q3 b - - 1 48|d6e5 e1e5 e7d7 e5a5|1805|winningMaterial,fork,endgame,short|3:e5a5 e5d5 b3e6
dqtuox|R1b2r2/3k1pp1/B2B3p/3pp2P/3P4/4b3/1P6/5K2 w - - 2 39|a8c8 f8c8 a6c8 d7c8|1810|winningMaterial,endgame,short|3:d7c8
rqkuk0|8/4k3/PRK5/3P4/r6p/2n4P/8/8 w - - 0 81|c6c7 c3d5 c7c6 d5b6|1810|winningMaterial,fork,endgame,short|3:d5b6
12ygtrk|2N5/1p4k1/3n3p/3P3K/pb2r3/8/P7/6R1 b - - 10 50|e4g4 g1g4 g7f6 g4b4|1810|winningMaterial,fork,endgame,short|3:g4b4 g4f4 c8b6
v93ecz|8/5k1p/1r1N4/2b5/n7/5RPP/1p4K1/1R6 b - - 20 55|f7e7 d6c8 e7e6 c8b6|1810|winningMaterial,fork,endgame,short|3:c8b6
1q7jv0e|7R/4k1P1/3b4/8/r7/5K2/8/8 b - - 0 60|d6e5 g7g8q|1810|winningMaterial,promotion,quietMove,endgame,oneMove|
1utwz01|2b5/8/3N2pk/P6r/4pn2/6K1/6P1/R3N3 b - - 5 51|h5d5 d6c8 f4e2 g3f2|1810|winningMaterial,endgame,short|
1qhu3kz|6k1/8/p4pP1/1p1pnP2/1B2K3/1P6/P7/8 w - - 0 52|e4f4 e5d3 f4e3 d3b4|1810|winningMaterial,fork,endgame,short|
otbfs7|r7/P5pk/7p/4N2P/8/5bB1/2p1p2K/2R5 b - - 3 56|e2e1q g3e1 f3h5 e1f2|1810|winningMaterial,endgame,short|
ghg6hi|8/1R3k2/p3r2p/P3n1pN/8/8/4K3/8 b - - 6 55|f7e8 h5g7 e8d8 g7e6|1810|winningMaterial,fork,endgame,short|
1th2xjq|8/P5k1/3K3p/8/8/8/1p6/8 w - - 1 68|a7a8r b2b1q|1815|winningMaterial,promotion,quietMove,endgame,oneMove|
17dav96|8/2B3p1/P3kp2/2b5/5Pr1/8/KP5p/2R5 w - - 1 44|c1c5 h2h1q|1815|winningMaterial,promotion,quietMove,endgame,oneMove|
1lsb6rv|2r5/7R/4p1Rb/p2r4/P5Pk/8/5P2/4K3 b - - 1 39|d5h5 g4h5 c8c1 e1e2|1815|winningMaterial,endgame,short|
1vmvozs|8/1r6/5Rk1/1n5p/3B4/4P3/6K1/8 b - - 0 45|g6g7 f6b6 g7g8 b6b7|1815|winningMaterial,fork,endgame,short|
1petfif|7k/5R2/2r1pN1r/3p2K1/3P4/5P2/8/8 b - - 5 52|e6e5 g5h6 c6f6 f7f6|1815|winningMaterial,endgame,short|
g2dmwa|8/1k1Q4/2p5/7b/3p4/PP1qNp2/5P2/2K5 b - - 1 60|b7b6 e3c4 d3c4 b3c4|1815|winningMaterial,sacrifice,endgame,short|
lhwmru|k7/2p3p1/BnN5/8/3RP2P/P3r1PK/5r2/8 b - - 22 46|f2h2 h3h2 b6d5 d4d5|1815|winningMaterial,endgame,short|
j4aehs|2R5/8/rk1p4/3N2p1/2p5/8/8/3K4 b - - 1 60|b6b5 d5c7 b5c5 c7a6|1815|winningMaterial,fork,endgame,short|
q4d32l|8/8/4Nk1Q/8/8/8/4K3/4n1q1 b - - 4 60|f6f5 e6g7 g1g7 h6g7|1815|winningMaterial,sacrifice,endgame,short|
fs13sd|8/8/8/6P1/4qQK1/1k6/8/8 b - - 7 65|e4d5 f4f3 d5d3 f3d3|1815|winningMaterial,fork,endgame,short|
slos98|3Q1bk1/5p2/5P2/4Pp2/3R4/8/4K3/6q1 b - - 4 49|g1f1 e2f1 g8h7 d8f8|1820|winningMaterial,endgame,short|3:d8f8 d8d5 d8e8
fkfkcw|8/1R6/8/8/2kPp2P/1pr1P3/3bK1N1/8 b - - 3 56|b3b2 b7b2 d2e3 g2e3|1820|winningMaterial,endgame,short|
a81c3i|8/5k1p/6p1/8/1Br5/P3K2P/1R4b1/8 b - - 1 47|g2f1 b2f2 f7e6 f2f1|1820|winningMaterial,fork,endgame,short|
1ldq59s|8/3b2pk/p4p1p/q6P/4Q3/4N3/8/6K1 b - - 1 45|a5f5 e3f5 d7f5 e4f5|1820|winningMaterial,endgame,short|3:e4f5
11vyucc|2r5/1p3k2/p7/3p1P2/3BP3/8/PP3r2/1K1R4 b - - 0 36|c8c2 d4f2 c2f2 d1d5|1820|winningMaterial,endgame,short|
uzpub3|8/p7/1p4k1/2p4p/2P1PQn1/2B3P1/4q3/6K1 b - - 4 45|e2f2 f4f2 g4f2 g1f2|1820|winningMaterial,endgame,short|
1aewxyp|8/3k3p/2r5/5N2/n7/b5PP/1p1R2K1/1R6 b - - 4 47|d7e6 f5d4 e6d5 d4c6|1820|winningMaterial,fork,endgame,short|3:d4c6
1a0heol|1R6/p5P1/3k4/3q4/K1p5/P7/5P2/8 b - - 6 49|d6e7 g7g8q|1820|winningMaterial,promotion,quietMove,endgame,oneMove|
1lbqd08|r1br4/4kp2/1q2pn2/1B1pN3/P2P3Q/1p4P1/1P3PP1/2R1K3 b - - 2 29|c8a6 e5c6 b6c6 c1c6|1820|winningMaterial,fork,sacrifice,short|3:c1c6
1vsjxn7|8/5k2/3p4/3rp1n1/6Rp/7P/5NP1/5K2 b - - 1 45|d5b5 g4g5 b5b1 f1e2|1825|winningMaterial,endgame,short|
cioe72|1r1q1rk1/6pp/1b3p2/pQ1bP3/2N2B2/1N1p3P/PP5K/R3R3 w - - 2 26|c4d6 b6g1 e1g1 b8b5|1825|winningMaterial,sacrifice,short|
11yv8qp|3r4/2p3Rp/3b2n1/Q1rk4/5p2/8/P6P/5KB1 w - - 5 39|a5c5 d6c5 g1c5 d5c5|1825|winningMaterial,endgame,short|3:d5c5
1ndsiz0|r7/2k2p2/p7/2p1P3/1pP5/1P3N2/8/nR3K2 b - - 4 46|a8h8 b1a1 h8h1 f3g1|1825|winningMaterial,endgame,short|
1jsyyw2|r1b1kb1r/pppp1pp1/5q1p/4n3/2Q1P3/1BN5/PPP2PPP/R1B1K2R w KQkq - 6 10|c4d4 e5f3 g2f3 f6d4|1825|winningMaterial,fork,sacrifice,short|
1jh25kg|r1bq1rk1/pppp1ppp/1bB2n2/8/4P3/2Pp1N2/PPQ2PPP/RNB2RK1 w - - 0 9|c6b7 d3c2 b7a8 c2b1q|1825|winningMaterial,fork,promotion,short|3:c2b1q c2b1r c2b1b
1og181s|8/8/K7/P6p/1n5P/6k1/8/8 w - - 0 70|a6b7 g3h4 a5a6 b4a6|1825|advantage,endgame,short|
1ew764h|r1r4k/4R3/p2B2pp/P1P1pp2/3nq3/7P/Q4PP1/6K1 b - - 2 32|c8f8 d6e5 e4e5 e7e5|1825|winningMaterial,sacrifice,short|
7vx54l|r5k1/1p4b1/2p3p1/1PPb2qp/p1N5/4PBnP/P6K/2RQR3 w - - 0 26|f3h5 g3f1 e1f1 g5g2|1825|mate,mateIn2,sacrifice,short|3:g5g2
zs1e2u|1r1q1rk1/pb3pp1/2pb2p1/4Q3/1P1pP3/3P3P/P2B1PB1/1R2R1K1 w - - 1 22|e5d4 d6h2 g1h2 d8d4|1830|winningMaterial,sacrifice,short|
1iz0dy3|r7/5pkp/6p1/1p1N1b2/1N1P4/1R2P2P/2r2PP1/4K3 w - - 8 42|b4d3 a8a1 b3b1 a1b1 d3c1 b1c1|1830|mate,mateIn3,long|5:b1c1
ryyw6y|4k3/pR2r2p/P1pn2p1/6P1/4P3/3N1PP1/4K3/8 w - - 3 37|d3b4 d6b7 a6b7 e7b7|1830|winningMaterial,endgame,short|
dwk9un|1r2r1k1/2p1qpp1/2bp4/1P6/p1p1PP1p/2N2BnP/2PQ2PK/1R2R3 b - - 0 25|a4a3 b5c6 b8b1 e1b1|1830|winningMaterial,sacrifice,short|3:e1b1
rkaxjl|8/8/8/4P3/1r5p/5P1K/2k3P1/1q2R3 w - - 0 52|f3f4 b1e1 h3g4 e1e5|1830|winningMaterial,endgame,short|
yvlp6i|6k1/6R1/p3K3/3pB3/7P/1p1br3/1P6/8 b - - 3 52|g8h8 g7g3 e3e5 e6e5|1830|advantage,sacrifice,endgame,short|
1dhciz2|3r1b2/1R1b2N1/k4p2/4p3/P3B1K1/5P2/2P4P/8 w - - 1 41|g4g3 f8g7 e4c6 d7c6|1830|winningMaterial,endgame,short|3:d7c6
z4xxrj|2r2rk1/1b1nppbp/6p1/qp1B4/3N4/4PNBP/PP3PP1/2RQK2R w K - 1 17|d1d2 c8c1 e1e2 a5d2 e2d2 c1h1|1830|winningMaterial,long|
r5r1x3|8/1p6/7p/P3k2P/1N5K/6p1/4n1P1/8 w - - 4 47|b4a6 b7a6 h4g4 e5e4|1830|winningMaterial,endgame,short|
tbhe4f|5N2/p4P1R/4p3/6kp/8/8/5r2/3K4 w - - 3 56|f8g6 g5g6 f7f8n f2f8|1835|winningMaterial,endgame,short|
1pbvto7|3Q1bk1/5p2/5P2/4Pp2/3R4/8/2K5/7q b - - 10 52|h1e1 d8f8 g8f8 d4d8|1835|mate,mateIn2,sacrifice,endgame,short|
1l4udc9|6R1/6k1/p3P1p1/3B2b1/Pp2P2p/3K4/2P4r/8 b - - 4 44|g7g8 e6e7 g8h7 e7e8q h2d2 d3c4|1835|winningMaterial,promotion,long|
d7ys40|r2qk2r/1p1n1bp1/5b1p/1Pp1pp2/1n6/P1NP1N1P/1Q1BBPP1/R4RK1 b kq - 0 18|e8g8 a3b4 a8a1 f1a1|1835|winningMaterial,sacrifice,short|
17dl2hm|5r1r/2qk4/p1n5/4p3/Pb6/3P2B1/2R1QP2/2R3K1 b - - 0 33|c7d6 c2c6 d6c6 c1c6|1835|winningMaterial,sacrifice,short|3:c1c6
f20p7|r4rk1/1bqn1p1p/p2pp1pb/2p5/P2PPn2/N1PB1N1P/4QPPB/RR4K1 w - - 9 17|e2d2 f4h3 g2h3 h6d2|1835|winningMaterial,sacrifice,short|
15uowg8|5r1k/5qb1/p3b2p/3P1n1p/4BQ1B/3P2P1/P4P1N/5R1K b - - 0 27|f5h4 d5e6 f7f4 g3f4|1835|winningMaterial,sacrifice,short|
gk1lcy|r6r/p2kbpp1/1P5p/3p4/8/P4P1P/1PP3qP/R1BQK2R w - - 0 16|d1d3 e7h4 e1d1 g2h1 d3f1 h1f1|1835|winningMaterial,long|
12xkdez|2q2rk1/7p/pnr1ppp1/2N5/6Q1/5P2/PP3P1P/R1R3K1 w - - 11 30|a2a3 c6c5 c1c5 c8c5|1835|winningMaterial,sacrifice,short|
gk29r|rnq1r1k1/2pbbpp1/p3pn1p/1p6/P1QPP3/2N2NP1/1P3PBP/R1B2RK1 w - - 0 13|a4b5 a6b5 a1a8 b5c4|1840|winningMaterial,sacrifice,short|
fil625|8/8/4Kpp1/8/7p/2k2P2/6P1/8 b - - 4 49|c3c2 e6f6 c2d3 f6g6|1840|advantage,endgame,short|
clgv07|r6r/ppNkbppp/2p2n2/4P3/2b5/P3P3/1P1KBPPP/R6R w - - 2 17|e2c4 f6e4 d2d3 e4c5 d3e2 d7c7|1840|winningMaterial,long|
18modoe|1r6/4R3/5p1p/5kp1/8/1r1n2NP/6P1/2R4K b - - 5 43|f5f4 g3h5 f4f5 g2g4 f5g6 e7g7|1840|mate,mateIn3,long|
udge5n|8/2kbpQ1p/3p1np1/8/4P1PP/3B1P2/2P5/rqBK3R w - - 3 25|f7f8 b1c1 d1e2 c1h1 f8d8 c7d8|1840|winningMaterial,long|
1c4ncu1|3Q2k1/6p1/2b4p/1p6/2q3P1/1p2R2P/rB6/6K1 b - - 3 33|c6e8 e3e8 g8h7 e8h8 h7g6 d8d6|1840|winningMaterial,long|
yucrq3|6k1/5p1p/p5p1/8/3P2R1/p3PP2/4BP1P/1rr3RK w - - 0 29|g1c1 b1c1 g4g1 c1g1 h1g1 a3a2|1840|winningMaterial,long|
1g6j7wz|rnbqk1nr/ppp2pbp/6p1/3pp3/2BP4/2N1P3/PPP2PPP/R1BQK1NR w KQkq - 0 5|d4e5 d5c4 d1d8 e8d8|1840|winningMaterial,sacrifice,short|
lguy6r|8/1p5k/6R1/r6p/7b/1P1B4/8/6K1 b - - 0 38|a5d5 g6d6 d5d3 d6d3|1840|advantage,sacrifice,endgame,short|
op3vke|1r3rk1/pb3ppp/p7/8/1Rq2N2/8/5PPP/1Q3RK1 b - - 6 29|c4c5 b4b7 b8b7 b1b7|1845|winningMaterial,sacrifice,short|
gts3lk|2rr2b1/pp2k2p/1n4p1/1P3pN1/P7/4PBN1/2nR1PPP/5RK1 w - - 6 27|g3f5 g6f5 d2d8 c8d8|1845|winningMaterial,sacrifice,short|3:c8d8
13aa7py|r1b2rk1/pp2ppb1/5np1/2Pp2Np/3n3P/P1NP2P1/1B1QPPB1/q4RK1 b - - 11 20|d4e2 d2e2 a1f1 e2f1|1845|winningMaterial,sacrifice,short|3:e2f1 g2f1 g1f1
zd1hju|3rb1k1/1p2bpp1/pq2pn1p/8/3B4/2N1PN1P/PPQ2PP1/3R2K1 b - - 4 20|e7c5 d4c5 d8d1 c3d1|1845|winningMaterial,sacrifice,short|
vun0pc|6k1/1pqb1pp1/1Q1p3p/p7/P2B4/8/2P1rPPP/R5K1 b - - 1 23|e2e1 a1e1 c7b6 d4b6|1845|winningMaterial,sacrifice,short|
grp0pv|1r4k1/3R1p1p/2p5/p1r5/B7/5P2/Pb4PP/1R4K1 w - - 2 31|g1f2 b2d4 d7d4 b8b1|1845|advantage,sacrifice,short|
ndzic2|k4r2/pp4p1/2q5/2P1p3/3P2Q1/P1P2R2/8/2B4K w - - 3 29|c1g5 c6f3 g4f3 f8f3|1845|winningMaterial,fork,sacrifice,endgame,short|
vk6prd|8/7k/6b1/4Q3/4P1q1/8/6KP/8 w - - 4 78|g2h1 g6e4 e5e4 g4e4|1845|winningMaterial,sacrifice,endgame,short|
161ewzm|r1b1r1k1/2p2pp1/2p1n2p/p3q3/4PPP1/2p1B1NP/PP3Q2/R2R2K1 b - - 0 21|c3b2 f4e5 b2a1q d1a1|1850|winningMaterial,sacrifice,short|
14nxudo|r1q2bk1/1pp3rn/3p2N1/p3P2Q/8/2P4P/PP4P1/R4RK1 b - - 0 33|b7b6 f1f8 c8f8 g6f8|1850|winningMaterial,fork,sacrifice,short|
1ytff88|3rR1k1/pp3rpp/1b3p2/3p1p1P/3P1P2/PB2R1P1/1P6/1K6 b - - 2 33|d8e8 e3e8 f7f8 b3d5 g8h8 e8f8|1850|mate,mateIn3,long|
u2715g|5k2/1p2r2p/1q5P/2pNN1P1/4p1p1/1b1p2Q1/1B1P2P1/6K1 b - - 0 35|e7f7 e5g6 f8e8 d5b6 f7f1 g1f1|1850|winningMaterial,long|
1vcqw84|2k2r2/4bpp1/pp2p1bp/2Np4/3P2PP/P7/1PP5/1K1R1R2 w - - 0 30|c5e6 f7e6 f1f8 e7f8|1850|winningMaterial,sacrifice,short|
1299tvo|r1bqkb1r/1ppp1p2/p1n2np1/4p3/1P6/2PP1NP1/P1Q1PPB1/R1B1K1NR b KQkq - 0 11|c6b4 c3b4 h8h1 g2h1|1850|winningMaterial,sacrifice,short|
1frs31e|2b2br1/r6p/1pq2Nnk/2p3p1/PpP5/5Q2/1B3PPP/R4RK1 b - - 4 23|c8g4 f6g4 h6h5 g4f6 h5h6 f6g8|1850|mate,mateIn3,fork,long|5:f6g8
14zdqcx|8/pp4k1/2p1r1P1/7P/3bN1n1/1P1p1p2/P2P4/2R2K1R w - - 1 33|e4c5 e6e2 c5e4 e2e4|1850|winningMaterial,quietMove,short|3:e2e4 g7h6 c6c5
84bqlb|r3r1k1/1q3p1p/1p1p2p1/8/2P2n2/1PQ2P2/5BPP/3R1RK1 w - - 1 28|d1e1 f4e2 e1e2 e8e2|1850|advantage,fork,sacrifice,short|
dp7pi1|2r4r/5R2/p2pR3/1p4pk/3PP2p/P6P/1nP1N3/6K1 b - - 0 35|b5b4 e2f4 g5f4 f7f5|1855|mate,mateIn2,sacrifice,short|
l1kfye|8/3r1pk1/P3p1pp/4P3/6PP/P4P2/1qpQ2K1/2R5 w - - 5 43|d2e3 d7d1 c1c2 b2c2|1855|winningMaterial,quietMove,short|
1xy8j9z|rn2k2r/pp3ppp/4p1b1/3N4/8/5N1P/PP1K1PP1/2R4R b kq - 0 15|e8d8 d5c7 b8c6 c7a8|1855|winningMaterial,quietMove,short|
1k7y4ty|2b4Q/p2kpp2/2r5/1qp2P2/5R2/3PB1p1/2P1K1Pn/N7 b - - 3 31|c8a6 a1b3 h2f1 f4f1|1855|winningMaterial,quietMove,short|3:f4f1 e2f1 b3c5
1f69znd|r5k1/3b1p1p/2p5/p1B5/B7/4rP2/Pb4PP/3R1RK1 b - - 1 28|e3c3 c5d4 d7e8 d4c3|1855|winningMaterial,quietMove,short|3:d4c3
1jd2jek|5k2/Q4p1p/p2pp1p1/1p4Nq/3r1PP1/4K3/Pb5P/8 b - - 4 29|f8e8 a7f7 e8d8 g5e6 d8c8 f7c7|1855|mate,mateIn3,fork,long|
bfnahy|r3k2r/1bp1np2/p2p4/2p1p1P1/1P1qP3/P5R1/3N1PB1/2Q2RK1 b kq - 0 22|e8c8 d2b3 d4e4 g2e4|1855|winningMaterial,quietMove,short|
r9gats|7k/2q3p1/p2nRrBp/1p1Q3P/2pp4/P2P4/1PP3K1/8 b - - 5 39|c7d8 e6e8 d8e8 g6e8|1855|winningMaterial,fork,sacrifice,short|
181ivso|4r3/2R1Bp1k/pp3np1/3p3p/3P1P1P/1P2K3/P4P2/8 w - - 7 32|b3b4 f6g8 e3d3 e8e7|1860|winningMaterial,quietMove,short|3:e8e7 g8e7
1q81o0r|5k2/5p2/8/2r1PN1p/1pPR1P1P/pb6/8/1K6 b - - 14 42|b3a4 d4d8 a4e8 f5d6 f8e7 d8e8|1860|winningMaterial,long|
1v7o0c9|4kb1r/r3pppp/1pp5/n5B1/1P1Pp3/2P5/P3NPPP/R3K2R b KQk - 0 15|a5b3 a1b1 a7a2 b1b3|1860|advantage,quietMove,short|3:b1b3
1pj06zw|r1b1kb1r/pp1n1pp1/2p1pn1p/q7/2QP1B2/5NP1/PP2PP1P/RN2KB1R w KQkq - 4 9|c4c3 f8b4 f3d2 b4c3|1860|winningMaterial,quietMove,short|3:b4c3 g7g5
ro6i6h|8/p5k1/4r2p/3R2p1/P2b4/1P1B3P/K1Pn2P1/8 b - - 10 56|d4e5 d3f5 e6e7 d5d2|1860|winningMaterial,quietMove,short|
j0epsw|r5k1/1p2r2p/6p1/2qR4/p3nN2/P1P2QP1/1P5P/R6K b - - 0 28|e4f2 h1g2 c5c6 g2f2|1860|winningMaterial,quietMove,short|3:g2f2 f3f2
yxuguk|1r6/1p1k2p1/p2p4/2pN1r2/2Pn1PKP/8/PP6/3R3R b - - 1 30|b7b5 d1d4 c5d4 g4f5|1860|winningMaterial,sacrifice,short|
klysxz|4q1k1/8/r4np1/2p1Q3/2n5/2N5/P2B2PP/1R5K w - - 0 25|e5b8 c4d2 b8e8 f6e8|1860|winningMaterial,sacrifice,endgame,short|
121jpkc|r2q2k1/p4pp1/2p1p2N/7n/b6B/2P3Q1/5PPP/4R1K1 b - - 0 26|g8h8 h6f7 h8g8 f7d8 h5g3 h2g3|1860|winningMaterial,fork,long|5:h2g3 f2g3
1nalbys|3r1r1k/p3Npbp/1nQ5/4N3/6qP/P2P4/1P1B2P1/2K1R3 b - - 2 26|g4e6 e5g6 e6g6 e7g6|1865|winningMaterial,fork,sacrifice,short|
1vjtqry|8/3bp2Q/p2ppkp1/P1pP4/2P1nPP1/7P/1r6/6K1 b - - 2 35|b2a2 g4g5 f6f5 h7f7 e4f6 g5f6|1865|winningMaterial,long|5:g5f6
lpgscr|4r1k1/pp1nrp2/2bq2pp/4N3/1P3B2/1BP4P/P3QPP1/4R1K1 w - - 3 27|e5f7 d6f4 e2e7 e8e7|1865|winningMaterial,sacrifice,short|
1jc5fjt|2kr3r/pppb1pp1/5n1p/4n3/2P5/5NP1/PP1NPP1P/R3KBR1 b Q - 2 14|e5g4 h2h3 g4f2 e1f2|1865|advantage,quietMove,short|
fel9qn|r4kr1/3n4/1p2pp1Q/pN2P2p/P6q/7P/1P3PbK/2R2R2 b - - 5 33|f8f7 b5d6 f7e7 h6h7 g8g7 h7g7|1865|winningMaterial,fork,long|
1ygd8sw|r1b1r1k1/1p1n1ppp/2p5/3n4/N2N3q/PQ2P2P/1P3PP1/1BR1K2R w K - 1 17|d4f5 h4a4 b3a4 a8a4|1865|winningMaterial,sacrifice,short|
zcmwxn|r5nr/1ppk4/p3q2b/4p3/1P2P1p1/P1NP3Q/5PP1/R1B2RK1 w - - 0 25|h3h5 g8e7 c3d5 h6c1|1865|winningMaterial,quietMove,short|3:h6c1
t8xrc|8/5ppk/8/8/P1r1q3/8/5PPQ/1R4K1 b - - 26 43|h7g8 b1b8 c4c8 b8c8 e4e8 c8e8|1865|mate,mateIn3,endgame,long|
gt6170|rnbqkb1r/pp2p1pp/5n2/2P2p2/P2p4/2N3P1/1PP1PP1P/R1BQKBNR w KQkq - 0 6|g1f3 d4c3 d1d8 e8d8|1870|winningMaterial,sacrifice,short|
vnf14z|5k2/1B2np2/2b1p3/r7/2R3p1/6P1/5PK1/8 w - - 0 38|g2g1 a5a1 c4c1 a1c1 g1h2 c1h1|1870|mate,mateIn3,endgame,long|5:c1h1
6sjee2|r1b2rk1/p4ppp/2p1p3/2Np4/Q1pP2n1/2P1PNP1/Pq3PP1/R4RK1 b - - 3 14|g4f2 a1b1 f2h3 g2h3|1870|winningMaterial,quietMove,short|3:g2h3 g1h1 g1h2
smsooa|5r2/1ppbk1p1/2p5/4p1PP/1p2P3/1P6/P1P1BK2/7R w - - 6 32|e2f3 d7g4 h1h4 f8f3|1870|winningMaterial,quietMove,short|3:f8f3 g4f3
1va0xec|4k3/pp1rbpp1/4p3/1N1n4/r2n3p/P4B1P/1P1B1PP1/2RR2K1 w - - 0 22|f3d5 d4e2 g1f1 e2c1 d1c1 e6d5|1870|winningMaterial,fork,long|5:e6d5
axbmb2|rnb1kbnr/ppp2ppp/4p3/3q4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 4|d5c6 f1b5 c8d7 b5c6|1870|winningMaterial,quietMove,short|
1exp9nl|r1b2rk1/p3n1b1/q1n1p1p1/1ppP3p/5P2/P1P1N1P1/1P1N2BP/R1B1KQ1R b KQ - 0 17|c6a5 d5d6 a6d6 g2a8|1870|winningMaterial,quietMove,short|3:g2a8
jdr358|5k2/5p1Q/3p4/2pbb3/4Bq2/8/4R2N/5K2 w - - 4 48|e2f2 d5e4 f2f4 e4h7|1870|winningMaterial,sacrifice,endgame,short|
1cmq9hl|r1b3r1/5p1k/p4B1p/1p2p3/1Pn1P3/P1N2PR1/6P1/2R3K1 w - - 2 28|f6e5 c4e5 g3g8 h7g8|1875|winningMaterial,sacrifice,short|
14rgkuc|4r1k1/1p3p2/1n5p/p1P5/P1KP4/3Q1q2/1P3P1P/R6R w - - 9 37|c5b6 e8c8 c4b3 f3d3 b3a2 c8c4|1875|winningMaterial,long|
d8za0z|1k6/p7/b1n4p/6p1/3P4/Pr2BP1P/2p2KP1/2N1R3 b - - 4 38|b3b6 d4d5 b6b5 d5c6|1875|winningMaterial,quietMove,short|3:d5c6
q1fpqm|5rk1/r4ppp/2N1pn2/p7/3P1q1P/8/PPQ1bPP1/2R1K2R w K - 2 19|g2g3 f4f3 c6e5 f3h1|1875|winningMaterial,quietMove,short|
1afomvg|6k1/r1p2pp1/pp1n3p/6q1/6n1/P4Q2/2P1B1PP/3R2BK b - - 8 27|g7g6 f3g4 g5g4 e2g4|1875|winningMaterial,sacrifice,short|
7k9eu8|r4rk1/2p3pp/2p5/8/1P2p1Q1/P5n1/1B1PK1Bq/5RR1 w - - 0 25|g4g3 h2g3 g2e4 g3h2 g1g2 h2h5|1875|winningMaterial,long|
uwfdfa|rnb1k2r/4p2p/p1p2np1/1pp3q1/Q5P1/2P1PP2/PP2B3/R1B1K1NR w KQkq - 0 13|e3e4 g5c1 a1c1 b5a4|1875|winningMaterial,fork,sacrifice,short|
c8obtp|3r2k1/8/5R2/p4N2/1p4P1/8/bP3P1P/3rR1K1 w - - 3 33|f5h6 g8g7 g4g5 d1e1|1875|winningMaterial,quietMove,short|
17sf71z|2rqk2r/3npNb1/p6p/1p6/1P4pP/3QP1n1/P3NPP1/3RK2R b Kk - 0 19|d8c7 f7h8 g7c3 e2c3 d7e5 d3d4|1880|winningMaterial,long|
1n002xv|r1bq1rk1/1ppp2pp/1bn5/pB2Pp2/4nB2/1QP2N2/PP3PPP/RN3RK1 b - - 1 10|f8f7 b5c4 d8f8 c4f7|1880|winningMaterial,quietMove,short|3:c4f7 b1d2 b1a3
kpfi06|rn1qkb1r/pp1bpp2/5npp/2p1P3/P7/2N2N2/1PPP2PP/R1BQKB1R b KQkq - 0 8|f6g4 h2h3 f8g7 h3g4|1880|winningMaterial,quietMove,short|3:h3g4 d1e2 e5e6
9d7w88|8/R5b1/3r2k1/1ppp2q1/8/1P1Q2P1/2P2P1K/8 b - - 1 37|g5f5 a7g7 g6g7 d3f5|1880|winningMaterial,sacrifice,endgame,short|
1cvbqu7|r4rk1/6p1/1q2p1pp/pQn5/1nP3P1/4P2P/3N1P1B/1R3RK1 b - - 2 25|f8b8 h2b8 b6b5 c4b5|1880|winningMaterial,sacrifice,short|
g2sf8f|r1bk1b1r/1p1np2p/p5pn/1q1Np3/1B3P2/1P1Q4/2N3PP/R3K2R w KQ - 0 22|b4a5 b7b6 d3d2 b6a5|1880|winningMaterial,quietMove,short|3:b6a5 a8b8 c8b7
1mqqkwc|1r6/5nkp/8/3Pp2b/2pqP1P1/2N5/6BK/4QR2 b - - 0 40|h5g4 e1h4 d4b6 h4g4|1880|winningMaterial,quietMove,short|3:h4g4 f1b1
qto1qq|3r4/5k2/p1r1p3/6pp/3b4/1Pp3P1/P1N1RP1P/3RK3 b - - 3 31|f7f6 d1d4 d8d4 c2d4|1880|winningMaterial,sacrifice,short|
md6wct|r1bqkb1r/5pp1/p1nPp2p/1p1n4/3P4/1B3N2/PP1BQPPP/RN2K2R b KQkq - 0 11|d5f6 d4d5 f8d6 d5c6|1885|advantage,quietMove,short|3:d5c6
1frnikx|2rr2k1/1q4p1/4Rp1p/8/1p2Qn2/1P5P/1B3PP1/4R1K1 b - - 2 40|f4h3 g2h3 b7e4 e6e4|1885|winningMaterial,sacrifice,short|3:e6e4
1k3aomg|rn2k2r/pp3ppp/4pnb1/q2B4/1b6/2N2N1P/PP1BQPP1/2R1K2R b Kkq - 0 12|b4c3 d5b7 a5b6 b7a8 c3d2 f3d2|1885|winningMaterial,long|5:f3d2 e2d2
1oirqvs|8/3p4/k2Q4/1q2B2P/p3PK2/5P2/8/7r b - - 3 56|a6a5 e5c3 b5b4 d6b4 a5a6 c3d4|1885|winningMaterial,endgame,long|
rhsnlu|r2rq1k1/2p2pbp/p1n3p1/1pQ2b2/4N1n1/1PP3P1/P1N1PPBP/R1B2RK1 w - - 4 18|f2f3 g7f8 c5f2 g4f2|1885|winningMaterial,quietMove,short|3:g4f2
1el4ug6|r1bqkbnr/1ppnpp1p/3p2p1/p7/2P5/1P2P3/PBQP1PPP/RN2KBNR b KQkq - 1 5|d7e5 f2f4 e5c6 b2h8|1885|winningMaterial,quietMove,short|
1itgjm9|8/1p4k1/2b1p2p/p3q3/3p2P1/1P3R2/P2Q1P2/6K1 w - - 2 46|d2d3 e5d5 g4g5 d5f3|1885|winningMaterial,quietMove,short|3:d5f3 h6g5 h6h5
12twtmp|4r2k/1pr5/p1Pp3p/6pP/1P2PP2/3B2PK/q2B4/b1RQ4 b - - 1 36|a2e6 f4f5 e6e5 c1a1|1885|winningMaterial,quietMove,short|3:c1a1 c6b7
2bjecu|5rk1/1R1R3p/7p/8/3b4/1P1P2PK/2P5/r7 b - - 7 37|d4b6 d7g7 g8h8 g7h7 h8g8 b7g7|1890|mate,mateIn3,endgame,long|5:b7g7
1mjq53m|7k/1p3RR1/6p1/1p4P1/p6K/3r4/Pr6/8 w - - 12 43|g7g6 b2b4 f7f4 b4f4 h4h5 d3h3|1890|mate,mateIn3,endgame,long|
6azxo|3qk2r/1p1b1p2/p7/P1pP2n1/4PR2/3B2p1/1P2Q2P/3NN2K w k - 0 32|e4e5 h8h2 e2h2 g3h2|1890|winningMaterial,fork,sacrifice,short|
n2zd6e|8/1R4R1/5p1k/6p1/4Pn2/5r1P/3K4/8 b - - 0 49|g5g4 g7h7 h6g5 h3h4 g5g6 b7g7|1890|mate,mateIn3,endgame,long|5:b7g7
otsncc|rnb1kb1r/pp1ppppp/8/q2nP3/2BQ4/2P5/PP3PPP/RNB1K1NR b KQkq - 0 6|b8c6 d4d5 a5d5 c4d5|1890|winningMaterial,sacrifice,short|
jspe1o|1rb1k2r/p3b2p/1p2p1pn/1Pp2p2/2Pq1P1P/Pn1P2P1/3B1NB1/R2QK1NR w KQk - 3 16|g1f3 d4a1 d1a1 b3a1|1890|winningMaterial,sacrifice,short|
fzfpdi|2Nr1k2/2R2pp1/p3p2p/1p1n4/6PP/P4N2/1P3Pn1/4K2R w K - 0 28|e1e2 d5f4 e2f1 d8d1 f3e1 d1e1|1890|mate,mateIn3,long|5:d1e1
9ud0on|5k2/pp1r3p/6p1/2nB4/3b4/PP4P1/3N1P1P/4R1K1 w - - 1 33|d5e4 d4c3 e1c1 d7d2|1890|winningMaterial,quietMove,short|
ew69vp|2r2rk1/pp2bppp/3qpn2/8/2BPR3/P2Q1N2/1P3PPP/4R1K1 w - - 2 20|e4e6 f7e6 c4e6 g8h8 e6c8 f8c8|1895|advantage,long|
1ynpgv1|r2qkbnr/pp3ppp/8/3pPb2/Q2p4/P7/1P2BPPP/RNB1K2R b KQkq - 1 10|d8d7 e2b5 a8c8 b5d7|1895|winningMaterial,fork,quietMove,short|3:b5d7
1tjitwk|r6r/1ppk4/p3q3/4P3/1P2PBp1/P1N3n1/5PP1/R4RK1 w - - 0 29|f2f3 e6b6 f4e3 b6e3 f1f2 h8h1|1895|mate,mateIn3,fork,long|5:h8h1
1te14he|5rk1/1p1R4/p1p1r1p1/8/1P5P/P1Q2PR1/4q1K1/8 w - - 1 40|g2h1 e2f1 h1h2 e6e2 g3g2 f1g2|1895|mate,mateIn3,long|5:f1g2
m3frwd|r1b1k2r/pp1qbpp1/4p2p/3nn3/P1B1Q3/2P5/1P2NPPP/R1B1K2R w KQkq - 0 13|c4d5 d7d5 e4d5 e6d5|1895|winningMaterial,sacrifice,short|
1vzet3e|r1bqkbnr/ppp2ppp/2np4/8/3pP3/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 5|c1g5 f7f6 f3d4 f6g5|1895|advantage,quietMove,short|3:f6g5
itnvg2|r2qk2r/ppp1bppp/2p5/8/3n4/3QB3/PPP2PPP/RN2R1K1 b kq - 0 12|d4f3 g2f3 d8d3 c2d3|1895|winningMaterial,sacrifice,short|
qd1e9l|r1r3k1/1b1q1pp1/P3p2p/2P5/1pB1n2P/1N2B1P1/1P2QP2/R5K1 b - - 0 23|d7e7 a6b7 a8a1 b3a1|1895|winningMaterial,fork,sacrifice,short|3:b3a1
lz24we|8/6k1/p2R2pp/4N3/5P2/1P6/2r2b1P/5K2 b - - 2 36|a6a5 d6g6 g7f8 g6g2 c2b2 g2f2|1900|winningMaterial,endgame,long|5:g2f2 e5g6 e5c4
1hom0vr|r3kbnr/ppp2ppp/2n5/3qp3/3P4/2N1PP2/PP3P1P/R1BQKB1R b KQkq - 1 7|d5e6 d4d5 e6g6 d5c6|1900|winningMaterial,fork,quietMove,short|3:d5c6
1pg4dur|b1r1qr2/6kp/1p2p1p1/4P3/p1p2P1P/P2BP1Q1/1P5K/2R3R1 w - - 0 38|h4h5 c4d3 c1c8 e8c8|1900|winningMaterial,sacrifice,short|
4s1z9l|2q3k1/5pp1/3Q4/3Pp2p/4p3/P3P3/5PPP/2r2RK1 w - - 1 35|d6e7 c8c4 h2h3 c4f1|1900|winningMaterial,quietMove,short|3:c4f1
rb5t8n|rn1qkbnr/4pppp/2p3b1/pp6/3P4/1B4N1/PPP2PPP/R1BQK1NR w KQkq - 0 8|g1h3 a5a4 b3e6 f7e6|1900|winningMaterial,quietMove,short|
fkfo72|3rk1r1/pp2np1p/2P2p2/4p3/4P2P/PQP2P2/5P2/2Kq1B1R w - - 0 18|c1b2 d8d2 b3c2 d1c2 b2a1 d2d1|1900|mate,mateIn3,long|5:d2d1 c2d1 c2a2
1ypy1rj|8/3n2kr/2p1rB1R/3p3Q/pp2q3/P5P1/1P3R2/5K2 b - - 0 45|g7g8 h5g5 g8f7 f6e5 e4f5 h6h7|1900|winningMaterial,long|5:h6h7 g5f5 f2f5
1l5eusd|k6r/pp2Npp1/2p1b2p/8/1Q2P1q1/R5P1/PP3P1P/R2r2K1 w - - 8 23|g1g2 g4h3 g2f3 h3h5 f3e3 d1a1|1900|winningMaterial,long|
1u883ep|2r1k2r/1b2npp1/p1n1p2p/1p2P3/1q3N1P/1B3N2/PP1BQPP1/6KR b k - 7 23|c6d4 d2b4 d4e2 f4e2 b7f3 g2f3|1905|winningMaterial,long|
1t3h36z|6k1/1b3pp1/4p3/1Pp1P1P1/p1P3QK/8/P4q2/1R2N3 w - - 9 41|h4h5 g7g6 h5h6 f2h2 g4h3 h2h3|1905|mate,mateIn3,long|5:h2h3
1kpzg2o|r1bqk1nr/ppppppbp/2n3p1/3P4/4P3/P7/1PP2PPP/RNBQKBNR b KQkq - 0 4|c6e5 f2f4 g8f6 f4e5|1905|winningMaterial,quietMove,short|3:f4e5 b1c3
u4nbjd|2R1k3/4b3/4p3/N4p1p/4r3/4PK2/6PP/8 b - - 1 35|e7d8 a5b7 e8e7 c8d8|1905|winningMaterial,quietMove,endgame,short|3:c8d8 b7d8
1paetmz|r2R2k1/p6p/Bp6/5p2/5P2/1P2b1P1/6KP/2R5 b - - 0 33|g8f7 c1c7 f7e6 a6c4 e6f6 d8d6|1905|mate,mateIn3,long|5:d8d6
1o07ksr|2R5/6p1/4kp2/r1Bnp3/8/6P1/5PKP/8 w - - 14 46|h2h3 e6d7 c8g8 a5c5|1905|winningMaterial,quietMove,endgame,short|
1ydgegr|5bk1/1p1q4/5BpP/p3p3/3pP3/2r5/6QK/6R1 b - - 4 52|c3h3 g2h3 d7h3 h2h3|1905|winningMaterial,sacrifice,endgame,short|
1r43q3p|r5k1/5p1p/5p2/1pRN4/7P/1Q1p1PP1/1P2q1K1/8 w - - 1 30|g2h1 a8a1 c5c1 a1c1 b3d1 c1d1|1910|mate,mateIn3,long|5:c1d1
1fatmug|r1bqk1nr/1p3p2/p1n1p2p/3pP1p1/1b3Q2/2N2NP1/PPPB1P1P/R3KB1R w KQkq - 0 11|f4e3 d5d4 f3d4 d8d4|1910|advantage,fork,quietMove,short|3:d8d4
i1vzcc|rnbqk2r/ppp2ppp/4pn2/3p4/1bPP4/P1N2P2/1P2P1PP/R1BQKBNR b KQkq - 0 5|b4a5 b2b4 c7c5 b4a5|1910|winningMaterial,quietMove,short|
v7w3vz|3k4/2R3Np/1P6/7r/8/8/6p1/1K6 w - - 12 65|b1c2 g2g1q g7e6 d8e8|1910|winningMaterial,promotion,quietMove,endgame,short|
1jkyvce|5r1k/p2n3p/1p6/6Q1/7P/3P3R/bPq2PP1/4RK2 w - - 0 29|f2f3 f8g8 b2b3 g8g5|1910|winningMaterial,quietMove,short|3:g8g5 a2b3 c2d3
14ukxat|8/1kp3p1/8/8/R2NP1nP/P3r1P1/4BrK1/8 w - - 13 42|g2h1 f2h2 h1g1 e3g3 g1f1 h2h1|1910|mate,mateIn3,long|
1k6fyg0|rnbqkb1r/pp1ppppp/8/3nP3/3Q4/2P5/PP3PPP/RNB1KBNR b KQkq - 0 5|d8a5 b2b4 d5b4 c3b4|1910|advantage,quietMove,short|3:c3b4 d4b4
angazj|2kr1b1r/pppq1ppp/2n5/8/3p1P2/P1Q1B3/1PP2PBP/2KR3R w - - 0 15|c3d3 d4e3 d3d7 d8d7|1910|winningMaterial,sacrifice,short|
1yrk19b|r1bq1rk1/ppp3pp/2n1pp2/3p4/2PPnB1P/2bQ2P1/PP1NPPB1/R3K2R w KQ - 0 11|c4d5 c3d2 f4d2 e6d5 h4h5 e4d2|1915|winningMaterial,long|5:e4d2 a7a5 c8e6
1eenmzw|r7/2p2pk1/5np1/4p2p/3qP2P/3P3N/4BPP1/3Q1K1R w - - 0 29|g2g3 a8a1 f1g2 a1d1|1915|winningMaterial,quietMove,short|
1uwdal8|r4rk1/pp3pbp/2p5/3p1bq1/1P1P4/P4NP1/4QPBP/R4RK1 b - - 1 17|f8e8 e2e8 a8e8 f3g5|1915|winningMaterial,fork,sacrifice,short|
1es4kt1|8/7p/5k2/R7/1P6/4N1p1/4r3/1K6 w - - 4 52|e3g4 f6e6 g4e3 e2e3|1915|winningMaterial,quietMove,endgame,short|3:e2e3
33wp9n|1q3rk1/5pp1/3p3p/R2PpB2/1r1b2QP/2N3P1/5P2/4B1K1 w - - 1 35|a5a4 d4f2 g1f2 b4g4|1915|winningMaterial,fork,sacrifice,short|3:b4g4 b8b6
3s08kq|5bk1/1p3ppq/4p3/p2pP1P1/P2P1NQ1/1P5R/2r2P1K/8 b - - 4 44|h7e4 g4h4 c2f2 h4f2|1915|winningMaterial,quietMove,short|
qtl4pe|3N2k1/2b1rp1r/p1Q4p/1p4p1/8/6PP/PP3P2/6K1 w - - 1 33|c6a8 e7e8 a8a6 e8d8|1915|advantage,quietMove,short|3:e8d8 c7d8 e8e1
qszv6z|4r2k/1p3p2/1q3np1/p2p4/7P/P1P2P2/1PB2P2/1R2Q1K1 w - - 1 26|e1c1 e8e2 c1f1 e2c2|1920|winningMaterial,quietMove,short|3:e2c2
mda3ws|8/2p3r1/2P1pk1R/8/p4r2/3R4/5P2/5K2 b - - 2 38|f6e7 d3d7 e7e8 d7g7 f4f7 g7f7|1920|winningMaterial,endgame,long|5:g7f7 h6h8
1ff2ldj|6k1/5pp1/p1bQ3p/P3nNqP/2P1P2R/1r4P1/6BK/8 b - - 0 32|e5d3 f5e7 g8h7 d6d8 b3b8 d8d3|1920|winningMaterial,fork,long|5:d8d3
1uurmk6|8/8/8/6kP/2K5/P4p2/8/8 w - - 0 76|h5h6 f3f2 h6h7 f2f1q|1920|winningMaterial,promotion,quietMove,endgame,short|
1j75ize|2k5/1pp5/7p/p2Q4/P1PP4/1PBq2r1/1K1N4/8 w - - 8 43|d2f3 d3f3 d5f3 g3f3|1920|winningMaterial,sacrifice,endgame,short|
1p8pe9s|Qnr3k1/5ppp/4p3/2p5/3q4/P1R2BP1/3r1P1P/2R3K1 w - - 1 28|g1g2 d4f2 g2h3 f2h2 h3g4 f7f5|1920|advantage,long|
19jpn1v|r4rk1/2p1b1pp/p3p1n1/3pp3/1p2P2q/1P1PBN1P/1PP2PPK/R2Q1R2 b - - 1 18|h4h5 g2g4 g6h4 g4h5|1920|winningMaterial,quietMove,short|
dl6mmb|2r1kb1r/1pq2p2/p3pp1p/3p4/3P1B2/3N3P/PPn1QPP1/2R2NK1 b k - 1 19|c7d7 c1c2 c8c2 e2c2|1925|winningMaterial,sacrifice,short|
158v7l8|5k2/Q4p1p/p2pp1p1/1p4Nq/5PP1/5K2/Pb1r3P/8 b - - 0 27|f8e8 a7f7 e8d8 g5e6 d8c8 f7c7|1925|mate,mateIn3,long|
w9ygkp|3rr1k1/pB3p1p/6p1/5b2/P2b2P1/7P/1P3P1B/R4RK1 b - - 0 22|f5d7 h2c7 d8b8 c7b8|1925|winningMaterial,quietMove,short|
1lpdjm4|2r5/1p2Rpkp/p4Pp1/8/2q5/P1N2b1P/1P1Q1P2/6K1 b - - 0 30|g7g8 d2h6 c4f1 g1f1|1925|winningMaterial,quietMove,short|
17nkun1|8/2R5/3k3P/p7/P7/6K1/2p1r3/8 w - - 13 60|c7c3 e2e3 c3e3 c2c1q|1925|winningMaterial,fork,sacrifice,promotion,endgame,short|
1v8jqiq|2Q5/4k3/2p1P3/2Pp4/1p1P3P/4P2K/rq3P2/8 b - - 0 40|b2f2 c8d7 e7f8 e6e7 f8g8 e7e8q|1925|winningMaterial,promotion,long|
a6cs3|1r4k1/1p3pp1/p3p2p/1q2n3/7P/1P2Q1P1/5P2/3R1BK1 b - - 1 30|e5g4 e3f4 b5e8 f4g4|1925|winningMaterial,fork,quietMove,short|
h6bz4g|r1b1k2r/p1p2ppp/2pp1qn1/2b3B1/4P3/5N1P/PPP2PP1/1R1QKB1R b Kkq - 3 10|c5b4 c2c3 f6e6 c3b4|1930|winningMaterial,quietMove,short|
n2ox96|rnb1k1nr/ppp2ppp/8/3qp3/8/2N5/PPPB1PPP/R2QKB1R b KQkq - 2 11|d5c6 f1b5 c8d7 b5c6|1930|winningMaterial,quietMove,short|
3we3vl|3r2k1/p3bppn/b3p2p/P3P3/4QP2/1q1p2P1/7P/R2RNNK1 w - - 0 33|h2h3 d3d2 f1d2 d8d2|1930|advantage,quietMove,short|3:d8d2
161c0ep|r4k1r/pp2pppp/b4n2/8/PP3N2/8/3P1PPP/R1B1K2R b KQ - 0 13|a8c8 b4b5 a6b5 a4b5|1930|advantage,quietMove,short|
1fmjmjz|r4rk1/2q2pp1/n1pNp2p/ppn2b2/P2P3P/1QN3P1/1P2BP2/R2R2K1 w - - 0 22|b3a3 b5b4 c3b5 c6b5|1930|winningMaterial,fork,quietMove,short|3:c6b5 b4a3
nafuda|r4rk1/6pb/n1p4q/1p5B/p2Pp1pN/P5RP/1PP1QP2/R5K1 w - - 2 25|e2g4 f8f4 g4d7 f4h4|1930|winningMaterial,quietMove,short|
s7wi97|6b1/2Rn4/5P1p/1k2p3/4K3/1P6/8/8 b - - 1 57|d7b6 f6f7 g8f7 c7f7|1930|advantage,quietMove,endgame,short|
67z7j5|r3k2r/ppqb2Qp/3bp3/3pn3/8/P7/1P1NBPPP/R1B2RK1 b kq - 0 16|e5f7 e2h5 e8c8 h5f7|1930|winningMaterial,quietMove,short|3:h5f7
14o39p7|8/1p1k1R2/1P4rp/2pr4/P7/8/1B1n1K1P/4R3 b - - 2 41|d7c8 e1e8 d5d8 f7c7 c8b8 e8d8|1935|mate,mateIn3,fork,long|
10eu3ui|6n1/8/8/2p2PP1/8/2k3K1/8/8 b - - 0 55|c3d2 f5f6 g8f6 g5f6|1935|advantage,quietMove,endgame,short|
6r0mwi|4r3/5pk1/5r1p/p1b3p1/1p1Q4/6PP/PP3P2/5K2 w - - 0 43|d4d1 f6f2 f1g1 f2d2 g1f1 d2d1|1935|winningMaterial,long|5:d2d1 d2f2
txxj3q|r5k1/5pB1/1R4p1/3r2QP/2q1p3/3nP1P1/5P2/5RK1 w - - 1 36|g5h6 d5h5 h6h5 g6h5|1935|winningMaterial,sacrifice,short|
1pczphr|8/4k1p1/5p2/P4p1p/7P/1P6/4KPP1/3rB3 b - - 3 40|d1d6 e1b4 e7d7 b4d6|1935|winningMaterial,quietMove,endgame,short|
bt5kpv|1kr5/1q5p/3Q2p1/5p2/P2P4/P3P3/3B2PP/6K1 b - - 2 32|c8c7 d2a5 g6g5 a5c7|1935|winningMaterial,quietMove,short|3:a5c7 d6c7 a5b6
1d6dhjq|2b3k1/1pp2pp1/5r1p/p2r4/2nP2P1/P1P2qQ1/1P5R/4RB1K w - - 0 33|h1g1 f3g3 h2g2 g3e1 g2e2 f6f1|1935|winningMaterial,fork,long|5:f6f1 e1f1
a70vlu|rQ5k/p5pp/b1p1p2q/2PpP3/P2Ppr2/8/1R2PPBP/5RK1 b - - 6 23|a8b8 b2b8 a6c8 b8c8 f4f8 c8f8|1940|mate,mateIn3,long|
1aiizoa|rnb1k1nr/pp2ppbp/3q2p1/2p5/Q2pPN2/2P2N1P/PP1P1PP1/R1B1KB1R b KQkq - 2 8|d6c6 f1b5 c8d7 b5c6|1940|winningMaterial,quietMove,short|
1cwql5q|3rr1k1/pp6/2p5/4R3/5Pp1/1P1pK1n1/P2B4/6R1 b - - 1 33|g3f1 g1f1 e8e5 f4e5|1940|winningMaterial,sacrifice,short|
srfpvr|r5k1/5ppb/1R1pp2p/1P6/8/2P1P1nP/1B4B1/6K1 b - - 2 29|g3e2 g1f2 d6d5 f2e2|1940|winningMaterial,quietMove,short|3:f2e2 b6a6
kx566z|r4rk1/pb3ppp/4pn2/2N5/3Q4/2N2q2/PP3P1P/2KR2R1 b - - 9 22|a8b8 c5d7 g8h8 d7b8|1940|winningMaterial,fork,quietMove,short|3:d7b8 g1g3 d7f8
wqox6l|8/3bp2Q/p2ppkp1/P1pP4/2P1nPP1/7P/6K1/1r6 b - - 8 38|e6e5 g4g5 f6f5 h7f7 e4f6 g5f6|1940|winningMaterial,long|5:g5f6 f4e5
bmpqsw|r4r2/1p5p/2pk4/3pR2P/1P1n2N1/P5P1/6K1/R7 w - - 1 32|h5h6 f8g8 a1f1 g8g4|1945|winningMaterial,quietMove,short|3:g8g4
1w8egi5|8/5p2/1pB4k/p1p2b2/P1Pp1q2/1P3N1p/6K1/4Q3 w - - 0 54|g2g1 f4g4 e1g3 g4g3 g1f1 f5d3|1945|mate,mateIn3,long|5:f5d3
yza8d4|7k/7r/2p1rR1R/3p2Q1/pp2q3/P5P1/1P6/5K2 b - - 0 47|e6e8 h6h7 e4h7 f6h6 e8e7 h6h7|1945|winningMaterial,fork,endgame,long|5:h6h7 g5f6 a3b4
15yc5aa|8/6k1/1q6/7p/Q5K1/8/8/8 w - - 0 73|g4f5 b6f6 f5e4 f6h4 e4e5 h4a4|1945|winningMaterial,endgame,long|
1ml8xm3|8/8/5k2/6R1/6K1/4P3/8/7r w - - 9 58|g4f4 h1f1 f4g4 f1g1 g4f3 f6g5|1945|winningMaterial,endgame,long|5:f6g5 g1g5
iazhq6|1rbqkbnr/1ppp1ppp/p1n5/8/3pP3/P1N2N2/1PP2PPP/R1BQKB1R w KQk - 0 6|c1g5 f7f6 f3d4 f6g5|1945|advantage,quietMove,short|
o06fg7|3K4/8/4Pn2/2N2k2/2pB4/8/2b5/8 b - - 18 56|c4c3 e6e7 c2d1 d4f6|1945|winningMaterial,quietMove,endgame,short|3:d4f6
h5cpyh|r3kb1r/1p1n1ppp/4q3/p1p1n3/P3pP1N/2P4P/1P2B1P1/R1BQ1RK1 b kq f3 0 15|e5c4 f4f5 e6f6 e2c4|1950|winningMaterial,quietMove,short|
1fa1e9f|3k4/2R5/3B2p1/6q1/4p3/4P3/5P2/6K1 w - - 5 45|g1h2 g5h5 h2g1 h5d1 g1g2 d1d6|1950|winningMaterial,fork,endgame,long|5:d1d6 d1f3
16b1mqh|8/6kp/8/8/7p/3N2n1/PPP3r1/1K5R w - - 12 47|d3f4 g2f2 a2a4 g3h1|1950|winningMaterial,quietMove,endgame,short|3:g3h1 f2f4
1wz0j96|R7/7k/p4p2/1p1p4/3PP3/5P1p/8/2K5 w - - 6 42|e4d5 h3h2 c1d2 h2h1q|1950|winningMaterial,promotion,quietMove,endgame,short|
1ey9872|3Q2k1/2p2p1p/4q1p1/1p6/r7/2P3P1/P1b1P2P/R4RK1 b - - 1 30|e6e8 d8e8 g8g7 f1f7 g7h6 e8f8|1950|winningMaterial,long|
1pargo9|8/8/P1p2kP1/7P/1P6/4b2K/4pr2/4R3 w - - 3 55|e1g1 f2f1 g1g3 e2e1q|1950|winningMaterial,promotion,quietMove,endgame,short|
75aufc|6k1/2p3pp/2p2b2/r2NNp2/3P4/Pr3PPP/8/R3R1K1 b - - 0 27|f6e5 d5e7 g8f8 e7c6 b3f3 e1e5|1950|winningMaterial,long|5:e1e5 c6a5
2bthia|8/7p/rp2k1p1/n2p1p2/PB1R1P2/1K4P1/2P4P/8 w - - 2 35|b3b2 a5c6 b4c3 c6d4|1955|winningMaterial,quietMove,short|3:c6d4
1dlmww3|6k1/pR5p/6p1/1p1B4/1P3rP1/3P4/2rb3P/5R1K b - - 0 28|g8f8 f1f4 d2f4 b7f7 f8e8 f7f4|1955|winningMaterial,fork,long|
1x3eo3a|2kr1r2/1pp3b1/2nqp1Pp/pB1P1n2/N2PpPp1/PQ2B3/1P6/2KR2NR b - - 0 21|d6d5 b5c4 c6d4 e3d4|1955|advantage,quietMove,short|3:e3d4
hmx77p|rn1qkb1r/pbp1pp2/1p1p2pp/7n/Q1PP3P/2N1P3/PP3PPB/R3KBNR b KQkq - 5 8|b8c6 d4d5 d8d7 d5c6|1955|winningMaterial,fork,quietMove,short|3:d5c6 c4c5
138x15q|8/5k2/2P2p2/p1r4r/7p/1PK4P/4Q3/8 w - - 14 64|c3d4 h5d5 d4e3 d5e5 e3d2 e5e2|1955|winningMaterial,endgame,long|5:e5e2 e5d5 c5d5
4bpzuv|2k1r3/5p1P/2p5/1p4P1/p7/P2Rn1b1/1B6/1K6 b - - 0 39|e3f5 d3f3 f5e7 f3g3|1955|winningMaterial,quietMove,short|3:f3g3
1gkgoxy|5rk1/5nbp/p2p1B2/1pq2Pp1/8/4r2N/PP3QPP/2R2RK1 b - - 1 28|e3f3 g2f3 c5f2 f1f2|1955|winningMaterial,sacrifice,short|3:f1f2 h3f2 g1f2
1pvsphu|2q2rk1/p4pp1/5n1p/2PP4/3Qp3/P3B3/3R1PPP/1r2K2R w - - 1 22|e1e2 c8g4 f2f3 g4g2 e3f2 g2f3|1960|mate,mateIn3,fork,long|
179y8f4|2R5/3Pkp2/P7/1p3r2/2p5/2P5/1P2K1p1/8 b - - 1 55|f5f2 e2f2 g2g1q f2g1|1960|winningMaterial,sacrifice,endgame,short|
1cltkct|7R/2k5/1np5/pp2NP2/8/2P3K1/4r1P1/8 w - - 2 43|h8e8 b6d7 g3f4 d7e5|1960|winningMaterial,quietMove,endgame,short|3:d7e5 e2e5 a5a4
whi00l|6k1/5p2/4p1pp/1q6/3b1P2/8/2R4P/RKQ5 w - - 8 41|b1a2 b5a4 c1a3 a4c2 a3b2 c2b2|1960|mate,mateIn3,endgame,long|5:c2b2
341gm7|r3kb1r/pp2pppp/2n2n2/8/2QPqB2/2P1PK2/P4PPP/RN3BNR w kq - 3 12|f3g3 e4g6 f4g5 g6g5 g3f3 g5g4|1960|mate,mateIn3,long|5:g5g4
1vrqdy5|7N/6R1/r3pp2/1p1n3k/7P/3P1K1P/5P2/8 b - - 4 41|h5h4 g7h7 h4g5 h3h4 g5f5 h7h5|1960|mate,mateIn3,endgame,long|
85ou8v|8/8/8/8/5k2/1r1K4/6B1/8 w - - 26 65|d3d2 b3b2 d2d3 b2g2 d3d4 g2g5|1965|winningMaterial,endgame,long|
1ntogo5|7r/5k1p/4pp1R/1RP1n1p1/6P1/3KP3/r2N1PP1/8 w - - 1 31|d3e4 a2a4 b5b4 a4b4 d2c4 b4c4|1965|mate,mateIn3,long|5:b4c4
1w5jwa3|r1bq1rk1/1p2bpp1/1n1ppn1p/p7/QPPNP3/P5P1/1B1N1PBP/2R1K2R w K - 10 14|a4b5 c8d7 e4e5 d7b5|1965|winningMaterial,quietMove,short|3:d7b5
1sxcwiv|8/5p1k/6r1/4nNp1/Pp4P1/4P2q/7R/5RK1 b - - 1 40|g6h6 h2h3 h6h3 g1g2 e5g4 g2h3|1965|winningMaterial,endgame,long|
13owft4|r3r1k1/5ppp/p7/1b4b1/7P/P1B2QP1/1P3P2/R3K2R w KQ - 1 23|f3e4 e8e4 e1d1 b5a4 b2b3 a4b3|1965|mate,mateIn3,long|
zvzcp8|4k2r/1pr1bp1p/1p2p1p1/5b2/3P1P1P/P1P2BP1/3K4/R5NR b k - 4 18|c7d7 g3g4 e6e5 g4f5|1965|winningMaterial,quietMove,short|3:g4f5
1adpr2z|4R3/3r3p/8/3k2K1/3pnp2/R6P/6P1/8 w - - 10 53|g5f4 d7f7 f4g4 e4f6 g4g5 f6e8|1965|winningMaterial,fork,endgame,long|
1v5e2cu|8/8/6p1/1R3pk1/r7/6Q1/5PPK/4q3 b - - 1 50|a4g4 f2f4 g5f6 g3e1 g4h4 e1h4|1970|winningMaterial,endgame,long|5:e1h4 h2g1 h2g3
euqsxs|5r2/1pp3Bp/p2bk2p/4N3/3R4/P5P1/1P3P2/3K4 b - - 4 31|d6e5 d4e4 f8f2 g7e5|1970|advantage,quietMove,short|3:g7e5
1nc8zc8|r6k/6R1/6PP/4Pp2/2p5/8/p5K1/8 w - - 6 57|e5e6 a2a1q g7g8 h8g8|1970|winningMaterial,promotion,quietMove,endgame,short|3:h8g8
15391te|4k3/2R4p/1P2N3/7r/8/8/6p1/1K6 w - - 6 62|c7c8 e8f7 c8c1 f7e6|1970|winningMaterial,quietMove,endgame,short|
1wyikse|5k2/R7/p3KB2/3p4/7P/1p1bP3/1P2r3/8 b - - 17 50|f8g8 a7a8 g8h7 a8h8 h7g6 h4h5|1970|mate,mateIn3,endgame,long|
1jm6mon|2q5/5ppk/7p/Q1P1p3/4P3/2P3P1/Pr5P/3R2K1 w - - 2 29|c3c4 c8h3 a5d2 b2d2|1970|winningMaterial,quietMove,short|
1cn6p3o|q2r1bk1/5pp1/1p5p/p1P1R3/P5nP/1P3NP1/2Q2PK1/4B3 w - - 1 40|e5h5 g7g6 h5f5 g6f5|1975|winningMaterial,quietMove,short|
wpycn9|r1q1kb1r/p2n1ppp/b2p1n2/1ppP4/Q1P5/2N2N2/PP2BPPP/R1B1K2R w KQkq - 0 13|a4a3 b5b4 a3b3 b4c3|1975|winningMaterial,fork,quietMove,short|
173a426|6r1/2r5/4R2k/8/4RKp1/8/5P2/8 b - - 5 73|h6h5 e4e5 g8g5 e5g5 h5h4 e6h6|1975|mate,mateIn3,endgame,long|5:e6h6
6ahjll|r1b2rk1/pp2bppp/5n2/q1np4/8/BP1BPN1P/P1Q1NPP1/R4RK1 w - - 5 15|f3g5 a5a3 d3h7 g8h8 g5f7 f8f7|1975|winningMaterial,long|
1pte95x|r1b1k2r/p3ppb1/1np3pp/3qN3/3P4/P1N5/1PQ2PPP/R1B2RK1 b kq - 3 14|c8f5 c3d5 f5c2 d5c7 e8f8 c7a8|1975|winningMaterial,fork,long|
ql0kwl|rnbqr1k1/pppp1ppp/4pn2/8/1bPP4/P1N3P1/1P2PPBP/R1BQK1NR b KQ - 0 6|b4a5 b2b4 c7c5 b4a5|1975|winningMaterial,quietMove,short|3:b4a5 d4c5
7y530e|8/6k1/P1p3P1/7P/1P6/4b1K1/4pr2/4R3 w - - 9 58|g3h4 e3d2 e1e2 f2e2|1980|winningMaterial,quietMove,endgame,short|3:f2e2
1xhsb4e|r1b2rk1/pp3ppp/1b5q/8/3BN3/P3R3/1PQ2PPP/4K2R w K - 5 22|d4g7 g8g7 c2c3 f7f6 e1g1 b6e3|1980|winningMaterial,long|5:b6e3 g7h8 c8f5
17s101z|r1bq1r1k/1p3ppp/4pb1B/p2n4/2BPN1Q1/8/PP3PPP/R2R2K1 w - - 10 18|h6f4 e6e5 d4e5 c8g4|1980|winningMaterial,quietMove,short|
bo0vc1|8/B2r1B1p/8/1p2P3/1bn1kP2/8/2R4P/6K1 w - - 1 37|f7e6 d7a7 e6c4 b5c4 c2c4 e4f3|1980|advantage,endgame,long|
rmeox3|3q1rk1/4bppp/4pn2/2nb4/R1Q2B2/1p1BPN1P/1P3PP1/3R2K1 w - - 2 20|d3f1 d8e8 a4a5 d5c4|1980|winningMaterial,quietMove,short|
1p129zj|8/2b4p/3k2p1/p7/3BP2P/3K1r2/8/7R w - - 2 47|d4e3 c7b6 d3d2 f3e3|1980|winningMaterial,quietMove,endgame,short|3:f3e3 b6e3
1bge29w|2q2rk1/pp2n1p1/1n2ppb1/1B1pP1Qp/3P3P/1N3P2/PP2N1P1/4K2R w K - 0 18|g5f4 a7a6 e5f6 a6b5|1985|advantage,quietMove,short|3:a6b5
7w4kwf|5r2/3nk2P/2Q5/r1b1q1N1/2P5/6P1/5p1K/3R1R2 b - - 0 40|a5a7 d1d5 e5e1 d5c5|1985|winningMaterial,quietMove,short|3:d5c5
uf7tsm|4k3/1p1rb2p/8/2p5/Pp2PBB1/1P4PK/4q2P/1RR5 b - - 4 36|e2d3 c1d1 d3a6 g4d7|1985|winningMaterial,quietMove,short|3:g4d7 d1d7
1p56zir|6k1/R1KR4/2p3rp/1r6/8/8/8/8 b - - 17 52|g6e6 a7a8 b5b8 a8b8 e6e8 b8e8|1985|mate,mateIn3,endgame,long|
mclyw2|8/p1k1r2p/1ppRB3/4P3/1P2Kp2/P1n5/7P/8 w - - 4 35|e4f3 c3b5 d6d3 e7e6|1985|winningMaterial,quietMove,short|
129ears|8/5R2/6pk/7p/2r4P/5PP1/5QK1/2q5 w - - 1 59|f7a7 c4c2 a7a2 c2f2|1985|winningMaterial,fork,quietMove,endgame,short|
1uc8wcc|8/1p1k3p/7P/2pb4/8/3pQ3/1B1Pp1PK/5r2 w - - 4 43|e3h3 d7d6 h3d3 e2e1q|1990|winningMaterial,promotion,quietMove,short|
1o84p07|2r5/P1R5/4kp2/3p1b2/5K2/P1P5/8/8 b - - 7 41|c8f8 c7c6 e6d7 c6a6 f8a8 f4f5|1990|winningMaterial,endgame,long|
8yk8j7|Rnk3r1/2r5/1b5p/1p2Bq2/8/1P5P/4Q1P1/3R3K b - - 6 33|g8f8 e2b5 c8b7 d1a1 f5f1 a1f1|1990|winningMaterial,long|5:a1f1
1ms0cm2|1r6/p2b3p/5p1k/r5p1/1pPR4/1K3B2/R4P1P/8 b - - 1 37|a5f5 f3g4 d7e6 g4f5|1990|winningMaterial,quietMove,short|3:g4f5
4pc9ve|8/3k4/2pPr2p/p4K2/P7/1R6/7P/8 b - - 1 42|c6c5 b3b7 d7d6 b7b6 d6d5 b6e6|1990|winningMaterial,endgame,long|
dm2dba|r2qk2r/1p1b1pp1/p2bpn1p/6B1/3PB3/5N2/PP3PPP/R2Q1RK1 w kq - 0 15|g5h4 g7g5 d4d5 g5h4|1990|winningMaterial,quietMove,short|3:g5h4 e6e5 f6e4
vbh31r|8/4R3/1p4pk/1P3b1p/7P/2Nr1P2/1P2K3/8 b - - 0 34|g6g5 e7e5 g5h4 e5f5|1995|advantage,quietMove,endgame,short|
1gxx65d|8/2k3R1/p1nq1r2/8/Pb1PQ3/8/8/5RK1 b - - 5 40|c7d8 e4h4 c6e7 f1f6|1995|winningMaterial,quietMove,endgame,short|3:f1f6 h4f6
i308a1|5rk1/1b1p1pp1/1p2q3/1Q6/3NNB1p/3P3P/5KP1/8 b - - 8 23|e6e7 f4d6 e7d8 d6f8|1995|winningMaterial,quietMove,short|3:d6f8
tloz3x|6k1/p5p1/R7/2pr2N1/8/1bP3P1/5PP1/6K1 w - - 3 33|a6g6 b3c2 g6a6 d5g5|1995|winningMaterial,quietMove,endgame,short|3:d5g5 c2d3
1n9fy8t|2b2rk1/p4ppp/2nqp3/1r6/1npP4/1N3NP1/PP3PBP/R2QR1K1 w - - 0 18|a2a3 b4d3 b3d2 d3e1|1995|winningMaterial,quietMove,short|3:d3e1
18mk1ym|1n1qk2r/r3bppp/2p5/pp1P1p2/2p2P2/2N2BP1/PP3P1P/R2Q1RK1 b k - 0 14|c6d5 d1d4 e8g8 d4a7|1995|winningMaterial,quietMove,short|
12e9xz2|7r/1p2kp1p/4pn2/r1P5/N1P3pP/Pn1NR1P1/1K3P2/3R4 b - - 0 24|h8a8 a4b6 b3d4 b6a8|2000|winningMaterial,quietMove,short|3:b6a8 d3b4
1hregae|rr4k1/5ppp/p2q1n2/Q2pP3/8/1P1BP3/1R3PPP/4K2R b K - 0 22|d6c6 b2c2 c6e6 e5f6|2000|winningMaterial,quietMove,short|
tvrixo|2kr1r2/b5pp/p1p5/P2bp3/8/3R2P1/1PPNPN1P/3K1R2 w - - 1 22|d1e1 d5g2 e2e3 g2f1|2000|winningMaterial,quietMove,short|3:g2f1 d8d3
149q5om|8/8/P7/5k2/2pK4/8/2rp4/3R4 w - - 0 64|d1h1 c2c1 a6a7 c1h1|2000|winningMaterial,quietMove,endgame,short|3:c1h1
1k9n6ey|r1br2k1/5pbp/ppN1pnp1/8/P1B5/1P5P/1B2QPP1/q4RK1 b - - 1 20|a1a2 c6d8 b6b5 f1a1 a2b2 e2b2|2000|winningMaterial,long|
4ptxv9|8/8/6rP/Rpk5/3b4/8/P5PN/7K w - - 3 57|g2g3 c5b4 a5b5 b4b5|2000|winningMaterial,quietMove,endgame,short|
f59vdz|r2r2k1/1pqn1ppp/p1p1p3/2PNP3/5B1P/4Q3/PP3PP1/1K1R3R b - - 0 17|e6d5 e5e6 c7c8 e6d7|2005|winningMaterial,quietMove,short|3:e6d7
15z80wf|8/pp3p1k/1q4pP/2r2NQP/P7/4P3/2P5/3R2K1 b - - 0 34|b6c7 g5f6 c7h2 g1h2|2005|winningMaterial,quietMove,short|
j537cv|8/1r4P1/7K/5kP1/8/8/8/8 b - - 2 59|b7b1 g7g8q b1h1 h6g7|2005|winningMaterial,promotion,quietMove,endgame,short|
4w9p41|8/8/R7/P5b1/1P6/5kP1/1r6/3K4 w - - 7 50|a6c6 b2b1 d1c2 b1c1 c2b3 c1c6|2005|winningMaterial,endgame,long|
8mufj|3Q2k1/5p2/4r3/p3nNp1/Pr4P1/4P2q/6R1/5RK1 b - - 3 37|e6e8 d8e8 g8h7 e8e5 h3g2 g1g2|2005|winningMaterial,fork,endgame,long|
ttsd78|8/6p1/P2k2p1/5pP1/2B4P/8/r7/4K3 b - - 7 66|a2h2 a6a7 h2h4 a7a8q|2005|winningMaterial,promotion,quietMove,endgame,short|
j9pfrq|8/5ppk/5n1p/1Q2pq2/4b2P/6P1/3B1P2/5BK1 w - - 8 42|d2g5 f5f3 g3g4 f3h1|2010|mate,mateIn2,quietMove,short|3:f3h1
5oztg5|8/2k5/4QP2/4p3/P2b4/1P6/5rK1/8 w - - 0 49|g2g1 f2f6 g1g2 f6e6 g2f1 e5e4|2010|winningMaterial,endgame,long|
3g147j|2kr4/2b5/R1n4p/1p1q4/8/1P5P/4Q1P1/2R4K b - - 13 41|c8b7 a6c6 d5c6 c1c6|2010|winningMaterial,sacrifice,endgame,short|
rxivbv|2r5/2BR4/p4p2/5k2/7p/5P1P/5Kn1/8 b - - 7 60|c8c7 d7c7 g2f4 c7c5 f5g6 f2e3|2010|winningMaterial,endgame,long|
26c5rp|2kr3r/1pp2p1p/p1n1b1p1/2pN3P/2P1q1nR/PQ1p1N2/3K1PP1/R1B2B2 w - - 0 16|a1b1 c6a5 b3d3 e6d5|2010|advantage,quietMove,short|3:e6d5
1yo4t57|4k2r/pQBr1ppp/5n2/3p1B2/1nq5/4P3/1P1K1PPP/3R3R w - - 1 21|b7a8 e8e7 c7d6 d7d6|2010|winningMaterial,quietMove,short|3:d7d6
11h4kte|r1bq1rk1/pp3p1p/2n2np1/2ppp3/3P4/2PBPNP1/PP1NQPP1/R3K2R w KQ - 0 11|d4c5 e5e4 d3c2 e4f3|2015|winningMaterial,fork,quietMove,short|3:e4f3
bk88f1|4rk2/pp6/8/2Bp1P2/8/8/PP2P2r/1K2R3 b - - 4 32|e8e7 f5f6 f8e8 f6e7|2015|winningMaterial,quietMove,endgame,short|3:f6e7 c5e7
prlz9x|1Q4k1/1K4p1/1P5p/4P2P/2q3b1/8/8/8 b - - 11 67|g4c8 b8c8 c4c8 b7c8|2015|winningMaterial,fork,sacrifice,endgame,short|
1v9waoh|r2qk1r1/p4p2/2p1p2p/2nb4/1bNP1Np1/1P6/P3QPPP/R1B2K1R b q - 7 20|d8f6 f4d5 c6d5 c4e5 e8e7 d4c5|2015|winningMaterial,fork,long|5:d4c5 e5c6
1t6dn7o|8/1P5k/6p1/R2p3p/4p3/2P1P1qr/5QP1/6K1 b - - 2 40|g3h2 g1f1 h2c7 g2h3|2015|winningMaterial,quietMove,short|3:g2h3
sn1zk5|6k1/p5p1/3Bppb1/7p/3q1P1P/3p1QK1/1r4P1/R6R w - - 2 28|f3a8 g8h7 a8f3 d4d6|2020|winningMaterial,quietMove,short|3:d4d6
19mkljs|Q2k4/3n3q/8/2b5/2P5/6P1/6K1/4R3 b - - 4 51|d7b8 a8b8 d8d7 b8b7 d7d6 b7h7|2020|winningMaterial,endgame,long|
cz4ke3|Q5k1/5qp1/8/p7/7N/6P1/2r2rP1/4R1K1 b - - 7 41|f7f8 e1e8 c2d2 e8f8|2020|winningMaterial,quietMove,endgame,short|3:e8f8 a8e4 a8c8
s3bcp2|7r/2b2pk1/p5p1/3N3p/5P2/7P/5PP1/5RK1 b - - 0 36|h8c8 f1c1 a6a5 d5c7|2020|winningMaterial,quietMove,short|3:d5c7 c1c3
1pxisem|1r2r1k1/2pbqpp1/8/1P2R3/p1p2P1p/2N2BnP/2PQ2PK/1R6 b - - 0 27|e7d6 e5d5 d6e6 d5d7|2020|winningMaterial,quietMove,short|3:d5d7
1jjddlz|6k1/8/1r2PK2/5P2/8/8/1p6/3R4 w - - 3 80|d1f1 b2b1q f1b1 b6b1|2020|winningMaterial,promotion,quietMove,endgame,short|
11yghzp|1r4k1/1p2bppp/8/4P3/1N3p2/7P/r4PP1/1R3RK1 b - - 4 25|a2a5 b4c6 b8a8 c6e7|2025|winningMaterial,fork,quietMove,short|3:c6e7 c6a5 b1b7
19gtben|6bk/8/3Q1Ppp/p3p1Pn/P2pP3/7N/6BP/2q4K w - - 1 43|g2f1 c1f1 h3g1 h5f4 h2h3 f1g2|2025|mate,mateIn3,fork,long|5:f1g2
d1oby5|2r2rk1/2p2ppp/1nN1pn2/p7/Pbp4q/3B3P/1PQ2PP1/R1BR2K1 w - - 0 20|d3c4 h4c4 c2c4 b6c4|2025|winningMaterial,fork,sacrifice,short|
oxh6cr|5k2/5p2/p1Npb1r1/5p2/2P5/P1R1b1PP/8/4BK2 b - - 2 43|e6d7 c6b8 d7e6 c3e3|2025|winningMaterial,quietMove,short|
1qpknl8|3k4/4Rp1p/pnpr4/1p6/6N1/2P5/PP3PP1/6K1 w - - 0 35|e7e4 f7f5 e4f4 f5g4|2025|winningMaterial,fork,quietMove,short|3:f5g4 d6d1
aiplo|1k1B3r/1p2P3/8/1R6/1bp5/4P3/K7/8 b - - 16 65|b4d2 d8b6 d2b4 b5b4|2030|winningMaterial,quietMove,endgame,short|3:b5b4 e7e8q e7e8r
madqr3|1n2k2r/1bp2ppp/4q3/3p4/1p1Nn2B/1B2Q3/5PPP/R5K1 b k - 1 20|e6d6 f2f3 e8g8 f3e4|2030|winningMaterial,quietMove,short|
1eypf94|2k5/ppp3B1/4P1p1/5p2/6n1/1P2P1P1/PR1r1P1r/4R1K1 b - - 2 27|d2f2 b2f2 h2f2 e1d1 f2g2 g1g2|2030|winningMaterial,long|5:g1g2 g1h1
83eica|r1bqk1nr/1pp4p/3p2p1/p3np2/P1P2P2/2P1P1PN/6BP/R1BQK2R b KQkq - 0 11|e5c4 d1d4 d8e7 d4c4|2030|winningMaterial,fork,quietMove,short|3:d4c4 d4h8 e1g1
1gf4jeb|5r2/1p5k/1p1p1B1p/3q3P/r7/7P/P1Q1PP1K/8 b - - 1 35|d5e4 c2c7 e4e7 c7e7 f8f7 e7f7|2030|mate,mateIn3,fork,long|
1s2wycn|4qr2/1p4k1/1p1p1p1p/3N3P/r7/7P/P2BPP1K/6Q1 b - - 2 31|g7f7 g1g6 f7e6 d5c7 e6d7 c7e8|2035|winningMaterial,fork,long|
1qghm9w|3R1bk1/7p/r7/5N2/n1PBp3/1r4PP/1p4K1/1R6 b - - 3 38|h7h5 d4g7 a6a5 d8f8|2035|winningMaterial,quietMove,short|
kjhd7b|r1bq1rk1/ppp3pp/5p2/n7/3Pp2P/2PQ2P1/P2B1PB1/R3K2R w KQ - 0 15|d3e4 f8e8 e1g1 e8e4|2035|winningMaterial,quietMove,short|
hbilm5|8/5b2/4pP1p/P1n1P2P/1pkp1K2/8/2P5/R7 b - - 2 45|f7h5 a5a6 c5a6 a1a6|2035|advantage,quietMove,endgame,short|
3n98za|2r2rk1/pp3pp1/3b3p/1N1Pp3/6b1/1P1B2P1/P5PP/4RR1K b - - 0 19|d6b4 e1e4 g4d7 e4b4|2035|winningMaterial,fork,quietMove,short|
1c6o0c1|6k1/pp2Rqp1/2p5/2np2Bp/7P/6P1/PPP5/2KR4 b - - 6 36|f7f2 g5e3 f2f8 e3c5|2035|winningMaterial,fork,quietMove,short|
qtc3sf|8/3K4/1k3P2/8/7p/7p/8/8 w - - 0 52|d7e8 h3h2 f6f7 h2h1q|2040|winningMaterial,promotion,quietMove,endgame,short|
lw56h1|2nrk2r/1p1qppbp/p1B3p1/8/3P4/1Q6/PP1BNPPP/R4RK1 b k - 0 17|b7c6 d2a5 e8g8 a5d8|2040|winningMaterial,quietMove,short|
1hbh1g5|2r3k1/p5p1/7p/4Q3/3p3q/1P6/P5P1/6K1 w - - 0 30|e5d5 g8h8 d5c4 c8c4|2040|winningMaterial,quietMove,endgame,short|
2shpxo|8/8/8/5P1k/4K1r1/8/6p1/6R1 w - - 1 84|e4d3 h5h4 g1g2 g4g2|2040|winningMaterial,quietMove,endgame,short|
1ozt78r|8/8/p4pk1/P7/5n1p/4BP1P/r5PK/3R4 b - - 14 47|a2g2 h2h1 g2g3 e3f4|2040|winningMaterial,quietMove,endgame,short|
1pp5fa6|3rk3/3Rbppp/8/1p2P3/2nBB3/8/2R2PPP/6K1 b - - 0 28|d8d7 e4c6 e8d8 c6d7|2045|winningMaterial,quietMove,short|
1hb564o|2r2k2/R1P2pp1/p7/5b1p/8/4p1PP/3r1P2/2R2BK1 w - - 0 34|a7a6 e3e2 f1e2 d2e2|2045|advantage,quietMove,short|
80e0i4|8/1p1k4/1B1pp3/P4p1p/r3p3/6P1/2K4P/1R6 b - - 2 38|h5h4 c2b3 a4a5 b6a5|2045|winningMaterial,quietMove,endgame,short|
14rwl1l|3rk2r/4pp1p/p1Q3p1/8/3q4/8/PP3PPP/R1R3K1 b k - 1 23|d8d7 c1d1 e8g8 c6d7|2045|winningMaterial,quietMove,short|3:c6d7 d1d4
gr31p|3B3r/kp2P3/8/6R1/2p5/b3P3/8/K7 b - - 4 59|h8h1 a1a2 a3e7 d8e7|2045|advantage,quietMove,endgame,short|3:d8e7
1ql160m|6k1/8/1r2PK2/8/5P2/8/1p6/1R6 w - - 1 78|b1d1 b2b1q d1b1 b6b1|2050|winningMaterial,promotion,quietMove,endgame,short|
10jai7o|r2q1rk1/pb2bppp/8/2p5/Nn1pnB2/1P4P1/P2NPPBP/R2Q1RK1 b - - 5 17|e4d6 f4d6 b7g2 d6e7 d8e7 g1g2|2050|winningMaterial,fork,long|
5nxqv6|8/8/6k1/5R2/3pKp2/8/PP5r/8 w - - 9 49|b2b3 h2e2 e4f4 e2f2 f4e4 f2f5|2050|winningMaterial,endgame,long|
bn5rxk|r3k3/1p6/2n1p3/p1P3P1/4n2r/P1P1B2p/5K1P/1R2R2N w - - 1 33|f2f3 c6e5 f3e2 e4c3 e2f1 c3b1|2050|winningMaterial,fork,long|5:c3b1
zq1v82|rn3rk1/1b1pbppp/p7/1p1pqN2/8/2PB4/P4PPP/R1BQ1RK1 b - - 1 15|g8h8 f1e1 e5c3 f5e7|2050|advantage,quietMove,short|3:f5e7
1q1wed1|1r6/8/6kp/p1N2Ppb/P2B4/1P5P/3K2P1/8 b - - 0 43|g6f7 g2g4 h5g4 h3g4|2055|advantage,quietMove,endgame,short|
14o6pyf|r1bqkb1r/p1pp1ppp/2p2n2/4P3/8/8/PPP2PPP/RNBQKB1R b KQkq - 0 6|f8b4 c2c3 b4c5 e5f6|2055|winningMaterial,quietMove,short|3:e5f6 b2b4
hpmpiw|k7/1p6/p7/2P3pQ/3Pq2r/P4RK1/5B2/8 w - - 12 42|c5c6 h4h5 f3f8 a8a7 d4d5 b7b6|2055|winningMaterial,endgame,long|
ybfopw|2r5/p7/1p1Nn3/2p4k/P3Pprb/2PP4/1P5R/5K1R b - - 0 37|c8c6 d6f5 h5g5 f5h4|2055|winningMaterial,quietMove,short|3:f5h4 h2h4 f1e2
xx0rbd|4k1nr/Np1b1p2/pr1bp3/3p3q/P2Q2p1/1P4B1/5PBP/2R1R1K1 b k - 5 25|g8e7 d4b6 d6g3 h2g3 h5h2 g1f1|2055|winningMaterial,long|
dt65tk|r1bqk1nr/ppp2pbp/2npp1p1/3N4/4P3/3P1N2/PPP2PPP/R1BQKB1R w KQkq - 0 6|c1g5 f7f6 g5d2 e6d5|2060|winningMaterial,quietMove,short|
1gc7nut|8/7k/8/4p1pp/6P1/4Pr1P/5P1K/4B3 w - - 0 57|h2h1 f3h3 h1g2 h5g4 e1c3 e5e4|2060|advantage,endgame,long|
5ibcid|1k6/1P2R3/2K1p3/5p1p/8/4P3/4r3/8 b - - 3 40|e2d2 e7e8 d2d8 e8d8 b8a7 d8a8|2060|mate,mateIn3,endgame,long|5:d8a8
1ohfpfx|4b2R/8/3k4/p1p5/P1P5/1K1B2P1/8/2r5 b - - 7 46|c1d1 d3e2 e8a4 b3a4|2060|advantage,quietMove,endgame,short|
o6rw4q|6kb/5p1p/4r1p1/8/8/2B4P/5PP1/5RK1 w - - 0 31|f1e1 h8c3 e1e6 f7e6|2060|winningMaterial,sacrifice,endgame,short|
11zitwt|r1r3k1/5ppp/p7/Q2p3q/6n1/1P1BP1P1/5P1P/1R3RK1 w - - 1 26|h2h3 h5h3 a5d8 c8d8 d3h7 g8h7|2065|winningMaterial,long|5:g8h7 g8f8 g8h8
1xo3rsb|6k1/R5pN/8/2pb4/5P2/2Pr2P1/6PK/8 w - - 3 38|a7e7 g8h7 c3c4 d5c4 e7c7 d3d5|2065|winningMaterial,endgame,long|
18i4f7y|r6k/pR4p1/2q4p/8/5P2/5K2/PQ4PP/8 w - - 2 35|f3e2 c6g2 e2e3 a8e8 b2e5 e8e5|2065|winningMaterial,endgame,long|5:e8e5
4r25d6|6k1/1b4P1/4p3/5p2/3R1q1P/1p6/1P6/6K1 w - - 0 73|d4d7 f4g3 g1f1 b7a6 d7d3 a6d3|2065|mate,mateIn3,endgame,long|5:a6d3
lkvjw0|3b2k1/6p1/7p/p3P3/5R1P/3r4/4p1K1/2R5 w - - 0 40|e5e6 d3d1 f4e4 d1c1|2070|winningMaterial,quietMove,endgame,short|3:d1c1
110wl7a|r3k2r/1p2bppp/p1n1bn2/8/3P4/4BN1P/Pq2BPP1/RN1Q1RK1 w kq - 0 12|f3g5 b2a1 g5e6 f7e6 e2h5 f6h5|2070|winningMaterial,long|5:f6h5 e8f8 g7g6
wqh6dm|8/1P6/3b4/7P/P3p1R1/1K2k3/1R1p4/7r w - - 0 58|g4g1 h1g1 b7b8q d2d1q|2070|winningMaterial,sacrifice,promotion,endgame,short|
190p9jm|8/8/2p3B1/7P/1K6/2r5/3k4/8 b - - 1 65|d2e3 b4c3 e3f4 h5h6 f4g5 h6h7|2070|winningMaterial,endgame,long|
rssdiu|r3qrk1/2p1ppbn/bpn3pp/3NP3/p7/P3BNPP/1PP1QPB1/3RK2R w K - 4 15|d5c7 a6e2 c7e8 e2d1 e8g7 d1f3|2070|winningMaterial,long|5:d1f3
1aw5on9|7r/ppq2pk1/2p3p1/2PrR1Q1/3P2P1/P7/1P3PK1/3R4 w - - 1 38|b2b3 f7f6 d1e1 d5e5|2075|winningMaterial,fork,quietMove,short|3:d5e5 f6e5 f6g5
aygp3k|r2r2k1/p2p2p1/1p1Rpp1q/4n2p/1PP1P2P/Q1B2PP1/P5K1/5R2 w - - 1 25|c4c5 e5c4 a3b3 c4d6|2075|winningMaterial,fork,quietMove,short|3:c4d6 c4e3
1ld0rig|4r2k/1p4r1/p1Pp1Q1P/6B1/1Pq1P3/6PK/8/8 b - - 0 43|c4e6 f6e6 e8e6 h6g7 h8g7 c6c7|2075|winningMaterial,endgame,long|
47aqcl|1nb1Nk2/n4p1p/p5p1/4P3/p4b2/5B1P/1P4P1/2RR2K1 b - - 0 31|f4c1 d1c1 f8e8 c1c7 e8d8 c7a7|2075|winningMaterial,long|
1yztozq|4r2R/2pk1pQ1/2q5/8/5R2/6PK/8/6n1 w - - 3 53|h3h2 e8e2 f4f2 e2f2 h2g1 c6g2|2075|mate,mateIn3,endgame,long|5:c6g2
lf4fp6|5r2/4k1Rp/P7/1P3p2/6p1/8/K7/8 b - - 2 41|e7d8 a6a7 f8f7 g7f7|2080|winningMaterial,quietMove,endgame,short|
54lvo7|6k1/3n1p2/6pp/6q1/8/4PP1P/3QBP2/7K b - - 0 38|d7e5 f3f4 g5f6 f4e5|2080|winningMaterial,fork,quietMove,endgame,short|
1lj7s7b|4r1k1/5qp1/1p5p/pPn1N3/5P2/P2rQ2P/3n1P2/2RR2K1 w - - 0 30|e3d3 c5d3 e5f7 d3c1 f7h6 g7h6|2080|winningMaterial,long|5:g7h6
1so34jj|r3r3/pp2bp1k/1qbpn1pp/3Q4/4P3/2P2NB1/PPBR2PP/1R5K w - - 25 34|g3f2 c6d5 f2b6 d5a2 b6g1 a2b1|2080|winningMaterial,long|
1kc0n1g|8/2k2p2/7p/P1N1bb2/5N2/P7/7P/3K4 w - - 7 37|a5a6 e5f4 a6a7 f5g4 d1e1 g4f3|2085|winningMaterial,endgame,long|
1u4q6cy|1r2k2r/2p2pb1/4b1pp/2QqP3/P7/6P1/5P1P/RNB2BK1 w k - 3 23|c1a3 d5c5 a3c5 g7e5 b1c3 e5c3|2085|winningMaterial,long|5:e5c3 b8b3
l3xv85|8/8/8/8/8/pkRK4/8/8 b - - 8 76|b3a2 d3c2 a2a1 c3a3|2085|mate,mateIn2,quietMove,endgame,short|3:c3a3
i2fvq6|r6r/2pqkp2/bpQb1npp/p2p4/N7/1P2PN1P/P2P1PP1/R1B1R1K1 w - - 6 15|f3e5 d6e5 c1a3 e5d6 a3d6 d7d6|2085|winningMaterial,long|5:d7d6
1l5r7z7|8/8/8/8/8/pk6/8/1K6 w - - 2 73|b1c1 a3a2 c1d2 a2a1q|2085|winningMaterial,promotion,quietMove,endgame,short|
1dh2nrg|1R6/3P2k1/4b3/7p/B6r/8/8/6K1 b - - 1 43|h4d4 d7d8q d4d8 b8d8|2090|winningMaterial,promotion,quietMove,endgame,short|
xk3uaf|8/8/6k1/1P4p1/6Pp/2r2K1P/1R1p1P2/8 w - - 0 50|f3g2 d2d1q b2b1 d1b1|2090|winningMaterial,promotion,quietMove,endgame,short|
1tbwnzj|8/k7/P1P5/3K4/1N6/6b1/8/8 b - - 6 74|g3f2 c6c7 a7b6 c7c8q|2090|winningMaterial,promotion,quietMove,endgame,short|
1bygg7j|8/4Q3/2q5/7P/2r4k/8/7K/8 b - - 15 79|c6f6 e7f6 h4g4 f6e6 g4g5 e6c4|2090|winningMaterial,fork,endgame,long|5:e6c4 e6g8 e6d5
ysi3xh|2k4r/3r1pp1/b1p1p3/3n2Rp/Q1p1N2q/P7/1P1B1P2/2KR4 b - - 1 28|c8b8 e4c5 a6c8 c5d7|2095|winningMaterial,fork,quietMove,short|3:c5d7
1y92ego|4r3/r2nNpbk/pp6/2p4p/P1q1pP2/6PP/1P4BK/RQR5 b - - 3 24|c4b3 b1e4 h7h8 e7g6 f7g6 e4e8|2095|winningMaterial,sacrifice,long|
tfkyp5|rnbqkb1r/pp3ppp/3p1n2/1B2p3/3NP3/2N5/PPP2PPP/R1BQK2R b KQkq - 1 6|b8c6 d4c6 b7c6 b5c6 c8d7 c6a8|2095|winningMaterial,fork,long|5:c6a8
xi5pvs|8/4R3/7p/2Bk3n/1P4pP/2P5/r3Np2/7K w - - 0 52|e2f4 h5f4 c3c4 d5c6 c5f2 a2f2|2095|winningMaterial,endgame,long|
14pbi0h|8/4n1k1/4P3/1B6/p2P4/P5p1/1P1K4/8 w - - 0 50|d4d5 g3g2 d5d6 g2g1q|2100|winningMaterial,promotion,quietMove,endgame,short|
1d73al7|3r4/5kb1/1R5p/2n1p3/5p2/7P/5PPB/4N1K1 w - - 3 37|g2g3 d8d1 g3f4 d1e1|2100|advantage,quietMove,endgame,short|3:d1e1 e5e4
5lzq9c|6k1/RR6/3K4/6rp/8/1r6/8/8 b - - 4 64|g5d5 d6d5 b3b7 a7b7 g8f8 d5e6|2100|winningMaterial,endgame,long|
1951aj5|4r2k/1pr5/p1Pp4/6BP/1PB1P3/2q3PK/8/5Q2 b - - 0 41|c3g7 g5f6 e8e5 f6g7|2100|winningMaterial,fork,quietMove,short|3:f6g7 g3g4
7zhpsc|6k1/1r6/4PK2/5P2/8/8/1p6/1R6 w - - 9 83|b1d1 b2b1q d1b1 b7b1|2100|winningMaterial,promotion,quietMove,endgame,short|
1lp96y7|2R5/p6p/8/2bp1kB1/P6P/1P6/2r5/7K b - - 8 38|f5e4 b3b4 d5d4 b4c5|2105|winningMaterial,quietMove,endgame,short|3:b4c5 c8c5
bjkar5|r1bb2k1/4rpp1/1p1P2qp/pQ2p3/P3N3/2P1PN2/6PP/R2R2K1 b - - 0 23|g6e4 d6e7 d8e7 b5e8 g8h7 e8e7|2105|winningMaterial,fork,long|
1qaumo2|3bR3/P1nr4/3k2K1/7B/8/4P2P/8/8 b - - 6 47|c7a8 h5g4 d7a7 e8d8|2105|advantage,quietMove,endgame,short|
5vnicq|2r1kb1r/p2p1ppp/1pB5/n7/4P3/3Q2B1/PqPN1PPP/R3K2R b KQk - 0 16|b2a1 e1e2 a5c6 h1a1|2105|winningMaterial,sacrifice,quietMove,short|
1d266sw|8/K1k5/P1p5/2Pr4/8/8/3p4/3R4 w - - 9 59|d1h1 d2d1q h1h7 d5d7|2110|winningMaterial,promotion,quietMove,endgame,short|
1ykymr3|r2qk2r/3b1ppp/p2ppn2/8/Q1pP4/4PN2/PP3PPP/2R1KB1R w Kkq - 0 13|a4c4 a8c8 c4c8 d7c8|2110|winningMaterial,sacrifice,quietMove,short|
v4dqzk|k6r/pnQ3pp/2p5/2q3r1/P3R3/8/2P2P1P/1R3K2 b - - 1 29|b7a5 e4b4 c5b4 b1b4|2110|winningMaterial,sacrifice,quietMove,short|
mgty1h|7k/6p1/4p3/1p2q1b1/1Pr1PN2/4PK2/R7/8 w - - 0 45|a2d2 e5e4 f3f2 g5f4 e3f4 e4f4|2110|advantage,fork,endgame,long|
orr3bw|4Nb2/2P2P2/1k2K3/8/r3B3/8/8/8 b - - 0 73|a4e4 e6d5 e4e1 c7c8q|2115|winningMaterial,promotion,quietMove,endgame,short|
nnq7qf|3n4/3R2Bp/3p4/2p2kr1/8/2P2K2/8/8 w - - 0 40|g7h8 g5g8 d7d6 g8h8|2115|advantage,quietMove,endgame,short|
21kkcn|8/p1p4r/6k1/2p1K3/P1Pp4/8/8/6R1 b - - 1 41|g6h6 e5f6 h7f7 f6f7|2115|winningMaterial,quietMove,endgame,short|
17xa7vb|5k2/8/1p2B3/4rNP1/8/5K2/P4P2/2b5 w - - 3 51|f5d4 c1b2 g5g6 b2d4|2115|winningMaterial,quietMove,endgame,short|3:b2d4 f8g7
1iq3bdx|2B5/8/R2r2kp/6p1/3p1P2/2p3K1/P7/8 b - - 1 53|d6a6 c8a6 g5f4 g3f4 g6f6 a6d3|2120|winningMaterial,endgame,long|
t9c7us|r1bq1rk1/1pp1ppbn/2n3pp/4p3/p2P4/P1N1BNPP/1PP1QPB1/R3K2R w KQ - 0 12|e1c1 e5d4 f3d4 c6d4 d1d4 g7d4|2120|winningMaterial,fork,long|
ztvrv2|8/5pkp/6p1/4P1r1/5K2/8/4R1P1/8 b - - 7 44|g7h6 g2g4 g5h5 g4h5|2120|winningMaterial,quietMove,endgame,short|3:g4h5
arcuur|r4rk1/1p3pp1/1q2pn1p/pb1pN3/Pn1P4/R1N1P3/1P2QPPP/4R1K1 w - - 0 18|e2b5 b6b5 a4b5 b4c2 e1a1 c2a3|2120|winningMaterial,fork,long|5:c2a3 c2a1 a5a4
ekn6in|1r4k1/5p2/R1Q2bp1/5nnp/1B6/P2qP1PP/5P2/2R3K1 w - - 4 29|c6c4 g5h3 g1g2 h3f2 c4d3 f2d3|2125|advantage,sacrifice,long|
1aovssf|rn2kb1r/pQ3ppp/1qp1p3/3p1b2/2PP1P2/2N5/PP3PPP/R3KBNR w KQkq - 1 9|b7a8 b6b2 g1e2 b2a1 e1d2 a1b2|2125|winningMaterial,fork,long|
3bt2lz|1r2r1k1/p5p1/1q2p2p/p3Qp2/2R5/2P3P1/1P3PbP/2B1R1K1 b - - 1 25|g2f3 c4c7 b6c7 e5c7|2125|winningMaterial,sacrifice,quietMove,short|
1hnu9he|2r5/1p3p1p/p4kp1/3Q4/7q/PP2R2P/5P2/6K1 b - - 0 34|h4f4 e3f3 f4f3 d5f3|2125|winningMaterial,sacrifice,quietMove,short|
1wlgfr|2k2r2/pp1bQ3/4p3/8/2P5/P2B1q2/1P2r2P/2KR4 w - - 0 26|d3c2 e2c2 c1c2 d7a4 c2d2 f3d1|2130|winningMaterial,sacrifice,long|5:f3d1 f3f2 f3g2
115vl8t|r4k1r/4bppp/pp3n2/2pqn2P/1P6/P2pPPN1/3P1P2/R1BQKB1R w KQ - 2 17|h5h6 e5f3 d1f3 d5f3 h6g7 f8g7|2130|winningMaterial,sacrifice,long|
bhzoab|8/4Rp1k/p7/P2p1qp1/3Pp2p/4P2P/4rPP1/1Q4K1 w - - 1 44|b1e1 e2e1 g1h2 f5f2 e7f7 f2f7 g2g3 f7f2|2130|mate,mateIn4,long|7:f7f2
i67pc6|3R1k2/5p2/6p1/p4q2/1r2rP2/Q7/P6P/5R1K b - - 5 41|f8g7 a3c3 f5f6 d8g8 g7g8 c3f6|2135|winningMaterial,sacrifice,endgame,long|
fp2nr8|2B5/5pp1/8/P2pk3/4bp2/8/1P3K1n/5R2 w - - 0 33|a5a6 h2f1 f2f1 e5d6 a6a7 d5d4|2135|advantage,endgame,long|
vis1av|rqb1rbk1/5ppp/p2p1n2/1Np5/4P3/1P3NPP/2PQ1PB1/R2R2K1 w - - 2 21|f3g5 a6b5 e4e5 a8a1 e5f6 a1d1|2135|winningMaterial,fork,long|5:a1d1 a1a7 g7f6
bk003n|6k1/p1q4p/3b2r1/3Q2p1/2pP2N1/P6R/4r3/1R4K1 b - - 0 35|g8h8 b1b7 c7b7 d5b7|2135|winningMaterial,sacrifice,quietMove,short|
js0528|1R6/5pk1/3Q2p1/4nq1r/4p3/4P1P1/5P2/5RK1 w - - 6 42|f1c1 h5h1 g1h1 f5h3 h1g1 e5f3|2140|mate,mateIn3,sacrifice,long|
ahlg97|3r3k/1pp5/6Bp/p1P4P/5Pb1/4P2q/PP3KR1/2Q5 w - - 9 41|b2b4 h3f3 f2g1 d8d1 c1d1 f3d1|2140|winningMaterial,fork,sacrifice,long|5:f3d1 f3e3
1g18yxc|1k5r/1r3pp1/3Qp3/3p3p/2p1q3/P7/1P1B1P2/2KR4 b - - 3 32|b7c7 d2f4 e4f4 d6f4|2140|winningMaterial,sacrifice,quietMove,short|
4iii5o|8/2P5/2K1k3/8/3R4/2r5/8/8 w - - 3 71|d4c4 c3c4 c6b7 e6d7 c7c8q c4c8|2140|winningMaterial,sacrifice,endgame,long|
a3ftfd|8/2Q2pkp/6p1/1p6/r7/2P1q1P1/P1b1P2P/R4RK1 w - - 1 32|g1g2 c2e4 f1f3 e3e2 g2g1 e4f3 c7e5 e2e5|2145|winningMaterial,long|
cavj2y|r4rk1/6p1/2b1q2p/1Q6/p4B1P/P5P1/1P2PP2/R2R2K1 w - - 5 26|d1d6 e6d6 f4d6 c6b5 d6f8 g8f8|2145|winningMaterial,sacrifice,long|5:g8f8 a8f8
1ou3muj|3r3k/1pr2b2/p1nb2p1/6B1/6N1/1PP4P/P4PP1/3RR1K1 b - - 10 33|d6e7 g5e7 d8d1 e7f6 h8g8 e1d1|2145|winningMaterial,sacrifice,long|
n3t928|r5k1/pp1b2pp/2n5/3Qp3/4pr2/P7/1qPNB1PP/R4RK1 b - - 3 20|f4f7 d5f7 g8h8 f7f8 a8f8 f1f8|2150|mate,mateIn3,fork,sacrifice,long|
1h1nld7|r2r2k1/pn1p1pp1/1pnNp3/5q1p/2P5/Q1B1PPP1/PP4KP/3R1R2 b - - 1 20|f5c2 d1d2 b7d6 d2c2|2150|winningMaterial,sacrifice,quietMove,short|
dnyelb|2k5/5p2/7p/P1N1b3/8/P6b/7P/3K1N2 w - - 13 40|f1e3 e5d4 c5e4 d4e3|2150|winningMaterial,fork,quietMove,endgame,short|
15aitmg|8/4R1bk/6pp/2Q5/1P2pp2/7P/5PP1/q1r2NK1 w - - 7 39|g2g4 c1f1 g1g2 f1g1 g2h2 g1h1 h2g2 a1g1|2150|mate,mateIn4,long|7:a1g1 a1f1
525u67|rnbqk1nr/ppppbpp1/4p3/7p/4P1Q1/6P1/PPPP1P1P/RNB1KBNR w KQkq - 0 4|g4g7 e7f6 g7h8 f6h8|2155|winningMaterial,sacrifice,quietMove,short|
1gfxmn|4r1k1/1p6/2p1R2p/6pq/2P5/1P4P1/PQ5P/6K1 w - - 1 36|e6f6 e8e1 g1g2 e1e2 b2e2 h5e2|2155|winningMaterial,fork,sacrifice,long|
1brakhq|3rk2r/pp2bppp/1qn2n2/5N2/4p3/P1P5/1P2BPPP/R1BQK2R w KQk - 3 14|f5g7 e8f8 d1d8 e7d8|2155|winningMaterial,sacrifice,quietMove,short|3:e7d8 c6d8 b6d8
1wvwk49|1R6/1p3pk1/3n1bq1/3P4/8/P1PP1p2/1P1Q2B1/6K1 w - - 2 38|g1f1 f6g5 d2g5 g6g5|2160|winningMaterial,sacrifice,quietMove,short|
1vs1ftu|3q1rk1/p3b1pp/1pr5/3pPp2/P3pP2/1P2P2Q/1B3RPP/R5K1 w - - 1 21|a1d1 c6h6 h3h6 g7h6|2160|winningMaterial,sacrifice,quietMove,short|
192xqfa|1r4k1/1p2ppbp/pR1p2p1/8/Pn6/1N3R1P/bqrNB1P1/3Q2BK b - - 9 25|a6a5 d2c4 c2e2 c4b2|2160|winningMaterial,sacrifice,quietMove,short|
10b660x|1Rbr4/6p1/1b3k1p/p7/P3Bp1P/B7/5PP1/6K1 b - - 7 42|b6d4 e4b7 c8b7 b8d8|2160|advantage,sacrifice,quietMove,short|
18g50hp|3r2k1/p4p2/1p4p1/5bP1/6P1/P1B4p/1P5K/4R3 b - - 0 37|f5d7 e1d1 g8f8 c3f6 f8e8 f6d8|2165|winningMaterial,quietMove,long|5:f6d8 d1e1
ddkczn|5r2/6R1/p2p2R1/1p1PP1pk/3N3p/P3n2P/2P2r2/6K1 w - - 11 45|d4f3 f2g2 g1h1 f8f3 g6g5 g2g5 g7g5 h5g5|2165|winningMaterial,long|
xl15dg|8/8/Pk5p/1B5P/2p2p2/5p2/1P1n1K2/8 w - - 0 55|b5c6 b6c6 a6a7 c6b7 a7a8q b7a8|2165|winningMaterial,sacrifice,endgame,long|
1pxowp5|1r1qr1k1/1ppb1ppp/3b1n2/pBN5/3n4/P4N1P/1P3PP1/R1BQ1RK1 w - - 0 15|c5b7 b8b7 b5d7 d4e2 d1e2 e8e2|2170|winningMaterial,sacrifice,long|5:e8e2
1p3kmo5|r5k1/2R4p/6p1/1b6/1B2nPNP/P7/8/6K1 b - - 0 37|a8a4 g4h6 g8h8 b4f8 b5d7 c7d7 g6g5 f8g7|2170|mate,mateIn4,endgame,long|7:f8g7
1bpjva7|1r5k/R4p2/4pN2/1P1p3r/3P4/2P1KP2/8/8 b - - 1 45|h5f5 a7f7 f5f6 f7f6 h8g7 f6e6|2170|winningMaterial,sacrifice,endgame,long|
125iwd3|1r1r2k1/ppp2p1p/4p1p1/5n2/1P1bBP2/P2QPPq1/8/R3BK1R w - - 0 26|d3b3 d4a1 e1g3 f5g3 f1g2 g3h1|2175|winningMaterial,fork,sacrifice,long|
1n6zz7e|r5k1/5p1p/5p2/1pRN4/4q2P/1Q1p2P1/1P3PK1/8 w - - 1 27|g2g1 a8a1 c5c1 a1c1 b3d1 c1d1 g1h2 e4h1|2175|mate,mateIn4,fork,long|7:e4h1 d1h1
1v5y3la|8/6k1/1p3p2/pB2n3/4q2p/P4r1P/1P1Q2P1/4R1K1 b - - 14 50|e4f5 e1e5 f5e5 d2d7 g7f8 g2f3|2175|winningMaterial,sacrifice,long|5:g2f3 d7d8 d7c8
n2msqi|7k/1R4R1/7p/4p1p1/4q1P1/4PrKP/5P2/4B3 w - - 6 54|g3g2 f3e3 g2h2 e4f4 h2g1 e3e1 g1g2 f4e4|2175|winningMaterial,endgame,long|
1jwzonx|6k1/6p1/1p1Q1pq1/p1rP3p/4N2P/1b1KR3/2r2PP1/R4B2 w - - 3 32|a1a3 c5d5 d6d5 b3d5 d3c2 d5e4|2180|winningMaterial,fork,sacrifice,long|
ltkrzg|r3k2r/pp2n1pp/2n1Qqb1/1Bpp4/1b1N4/2N1B3/PPP2PPP/R3K2R w KQkq - 2 15|b5c6 b7c6 e6f6 g7f6 d4e6 d5d4|2180|winningMaterial,fork,sacrifice,long|
1xcck7x|4r3/1P3pk1/3p2p1/4p2p/8/6P1/5P1P/2R3K1 b - - 0 41|e5e4 c1c8 e8c8 b7c8q|2180|winningMaterial,sacrifice,promotion,quietMove,endgame,short|3:b7c8q b7c8r
1524e0l|4B3/8/3b4/2K5/5k2/7p/8/8 w - - 2 80|c5c6 h3h2 c6d6 h2h1q|2185|winningMaterial,sacrifice,promotion,quietMove,endgame,short|
1alu98e|6k1/K1R5/2R4P/3q4/1p6/8/8/8 b - - 2 69|d5e5 c7g7 e5g7 h6g7 b4b3 c6g6|2185|winningMaterial,sacrifice,endgame,long|
lq14jc|r4rk1/1pqnbppp/2p1p3/p7/P3P3/4BB1P/1PPQ1PP1/3R1RK1 b - - 3 18|e7c5 d2d7 c7d7 d1d7 c5e3 f2e3|2185|winningMaterial,sacrifice,long|
dwobth|2k4r/p1pr4/1pn1Q1p1/bBq2pNp/4P2P/P4PP1/3p2K1/1R3R2 b - - 1 32|c6e5 g5f7 e5f7 e6d7|2190|advantage,fork,sacrifice,quietMove,short|3:e6d7 b5d7
14ptgy4|4r3/1p3pk1/3n1b2/3P1qp1/8/P1PPQN2/1P4B1/4R1K1 w - - 6 35|f3d4 e8e3 d4f5 d6f5 e1e3 f5e3|2190|winningMaterial,sacrifice,long|
cc261v|rn2rnk1/5p1p/1bp4P/1p1p2p1/p4Pq1/P2B2P1/1PQ3KR/2BR2N1 b - - 4 26|b5b4 d3f5 g4f5 c2f5|2190|winningMaterial,sacrifice,quietMove,short|
2mvwux|r4r2/2qnk1Q1/2b5/P1b1p1N1/2P4P/1R6/5PP1/5RK1 b - - 2 31|f8f7 g7f7 e7d8 g5e6 d8c8 f7e8 c7d8 e8d8|2195|mate,mateIn4,fork,long|
1c1oft|rn2k2r/pp3pp1/2pbpn1p/3q4/P2P1N2/2P1B2P/1P3PP1/1R1QKB1R b Kkq - 2 10|d5e4 f1d3 e4f4 e3f4|2195|winningMaterial,sacrifice,quietMove,short|3:e3f4 g2g3
a0v74h|5r2/1p1k4/3Pp3/p5pn/P1R1N2r/2P4P/1P3K2/7R w - - 13 36|f2e1 h4e4 c4e4 h5g3 e4g4 g3h1|2195|winningMaterial,fork,sacrifice,long|
7yo57l|r5k1/pp1r2pp/2nPB1n1/8/Pq4P1/3Q2BP/1P3P2/R5K1 b - - 0 27|g8f8 d3f5 f8e8 e6d7 e8d8 d7c6 b4d6 g3d6|2200|winningMaterial,long|7:g3d6 f5f7
19jvwvw|2R5/p5p1/4rk2/p2p3p/P2n3P/1P1KpP2/8/6R1 b - - 1 40|d4f5 c8f8 f6e5 f3f4 e5f4 g1f1 f4g3 f8f5|2200|advantage,long|
remkbq|r1br2k1/1p3pp1/1b1p1q1p/P3p3/1P1nP3/3Q1N2/3NBPPP/RR4K1 b - - 0 18|d6d5 a5b6 d4e2 d3e2 a8a1 b1a1|2200|winningMaterial,sacrifice,long|
1mw3lmc|r5k1/1pp2ppp/2b1r3/p6Q/2BP1n2/7P/P4PP1/R5K1 w - - 0 23|h5g5 f4h3 g2h3 e6g6 g5g6 h7g6|2205|advantage,fork,sacrifice,long|
yli2vd|8/1pp3pk/p7/3QP2p/2P2q1r/1P6/P4KB1/7R w - - 4 33|f2e1 f4e3 e1d1 h4d4 d5d4 e3d4|2205|winningMaterial,fork,sacrifice,long|
bth60i|3rk2r/1pp1n3/1pp5/4p3/2Q1Nq1p/8/PPP2PPP/2KR3R w k - 3 21|d1d2 d8d4 c4d4 e5d4|2205|winningMaterial,fork,sacrifice,quietMove,short|
1mjajbq|k6r/1p6/pQ4p1/8/8/PN3q2/1PPR4/1K1N3r w - - 11 38|b3a5 h1d1 d2d1 f3d1 b1a2 d1d5|2210|winningMaterial,fork,sacrifice,endgame,long|
1x0cdua|1k1r4/1p5Q/p1qb1np1/4p3/P2p4/1P6/1BPP1PPP/R4RK1 w - - 2 23|h7g6 d8g8 g6g8 f6g8|2210|winningMaterial,sacrifice,quietMove,short|
t4tlnb|5r2/5p1k/qpQ1pp2/3P4/7P/4P2P/4KP2/6R1 w - - 1 31|e2d1 f8c8 c6c8 a6c8|2215|winningMaterial,sacrifice,quietMove,short|
gd2wh8|5b1k/1p3pp1/4p1q1/p2pP1PN/P2P2Q1/1P3R2/2r2P1K/8 b - - 0 42|f8e7 f3h3 h8g8 g4h4 c2f2 h4f2|2215|winningMaterial,quietMove,long|
1ykm40o|Q5k1/5pp1/2n1b2p/8/4P2P/2qP1NP1/1r2BP2/5K1R b - - 6 30|c6d8 a8d8 g8h7 f3g5 h6g5 h4g5 e6h3 h1h3|2215|winningMaterial,long|
nc7e0k|1r1qk2r/1p1b1pp1/p2bp2p/4N2Q/3PB3/8/PP3PPP/R3R1K1 b k - 5 18|d8f6 e5f7 f6f7 e4g6 e8g8 g6f7|2220|winningMaterial,fork,sacrifice,long|
1dh6qwl|8/8/R5P1/4k3/8/4P3/p5K1/3r4 b - - 2 50|a2a1b g6g7 d1d8 a6a1 e5f6 a1a7|2220|winningMaterial,quietMove,endgame,long|
y5wfrx|8/2k3b1/8/NP4p1/K3QP2/2q4P/8/8 b - - 10 51|c7d8 a5c6 c3c6 b5c6 d8c7 a4b5|2220|winningMaterial,sacrifice,endgame,long|
1x9gjq6|1rb1k2r/1p1n2p1/p2p2qp/2pQ1pP1/2P2P2/2NPBB2/PP2K3/7R b k - 5 23|e8f8 f3h5 d7b6 h5g6 b6d5 c3d5|2225|winningMaterial,quietMove,long|5:c3d5 c4d5
ftoit1|2r3k1/2b1Qpp1/4p2p/2P1q3/1N6/r5P1/5P1P/1R2R1K1 b - - 6 36|e5c3 e1e3 c3e3 f2e3|2225|winningMaterial,sacrifice,quietMove,short|
t5qqsc|1r4k1/bpB2ppp/8/1P6/5n2/P6P/5Pr1/R3R2K b - - 0 30|a7f2 c7f4 f2e1 a1e1 g2a2 f4b8|2225|winningMaterial,sacrifice,endgame,long|
1fqr51w|8/3qNppk/5n1p/3bp3/1p5P/4B1P1/1P3P2/r2Q1BK1 w - - 2 30|d1d2 d7h3 d2d3 d5e4 f2f3 e4d3|2230|winningMaterial,quietMove,long|5:e4d3 h3g3
5va1vs|r6k/pn2Q3/8/7q/P1PP4/6R1/1P2KPP1/8 w - - 1 32|f2f3 a8e8 g3h3 e8e7 e2d3 h5h3|2230|winningMaterial,quietMove,endgame,long|5:h5h3 e7h7 h5h7
1fqq5ge|8/8/8/8/5k2/1r6/6B1/5K2 w - - 30 67|f1g1 f4g3 g1f1 b3b1 f1e2 g3g2|2235|winningMaterial,quietMove,endgame,long|
t5e6um|r3r3/pp1Q1pk1/2pP4/2P4q/8/2P3Pp/P6K/3RR3 w - - 1 35|h2g1 h3h2 g1f2 h2h1q e1h1 h5e2 f2g1 e2d1|2235|winningMaterial,promotion,long|7:e2d1 e2e3
1gkebn|4k3/p1p1bB1p/1qbr1R2/2p5/7Q/2P1B2P/PP4r1/R4K2 b - - 0 22|e8f8 e3h6 g2g7 h6g7 f8g7 h4g5 g7h8 g5g8|2235|mate,mateIn4,long|
pzpqlo|5k2/5p1p/8/P1R5/6p1/8/KP6/6r1 b - - 4 35|g1f1 a5a6 f1f6 c5a5 f6a6 a5a6|2240|winningMaterial,quietMove,endgame,long|
ecxl72|2Q3n1/1p2pk1q/p3Np1r/3p3p/b6B/6PP/P7/4R1K1 b - - 19 42|d5d4 c8f8 f7g6 e6f4 g6f5 f8c8 a4d7 c8d7|2240|winningMaterial,long|7:c8d7 c8c2 c8b7
1ig717r|6k1/6p1/4pp2/3n4/6R1/6P1/1B1r1PKP/8 w - - 2 37|b2c1 d2c2 c1f4 e6e5 f4g5 f6g5|2245|winningMaterial,quietMove,endgame,long|5:f6g5 g8f7
1prwtgs|8/pp3p1k/6qP/5rQ1/P7/4P3/2P5/3R2K1 w - - 0 36|g5g2 f5g5 g2g5 g6g5|2245|winningMaterial,sacrifice,quietMove,endgame,short|
zybgus|5rk1/1r3nbp/p2p1n2/1pq2Pp1/8/2B1N2N/PP2Q1PP/2R2RK1 b - - 5 26|b7c7 c3f6 c5c1 f6g7 g8g7 f1c1|2245|winningMaterial,sacrifice,long|5:f1c1 f5f6
1he8eoz|2k5/3p4/Q7/3q3P/p4K2/3PPP2/1B6/7r b - - 3 50|c8b8 b2e5 d7d6 e5d6 d5d6 a6d6|2250|winningMaterial,sacrifice,endgame,long|
z47rjx|r3r1k1/p4p2/2pp3p/5QP1/4P3/P3BPnq/1bP1K3/1N1R2R1 w - - 0 27|e2d2 h3h2 g1g2 h2g2 e3f2 g2f2 d2d3 f2e2|2250|mate,mateIn4,fork,long|7:f2e2 f2d4
78ynfk|r4rk1/pb1n1ppp/4p3/8/5Q2/2NN4/PP3PqP/2KR2R1 b - - 5 20|g2c6 d3b4 c6c8 f4d4 g7g6 d4d7|2255|winningMaterial,quietMove,long|
1c5dmuj|Q7/5qpk/8/p7/7N/6P1/4rrP1/1R4K1 w - - 10 43|a8a6 f2g2 h4g2 f7f2 g1h2 f2g2|2255|mate,mateIn3,sacrifice,endgame,long|
1ewleu5|R2bk3/5r2/7Q/1q1Pp2p/p3P1pP/8/P5PK/8 b - - 1 42|b5f1 h6h8 f7f8 h8e5 e8f7 a8a7 d8c7 a7c7|2260|winningMaterial,long|7:a7c7 e5c7
cfvfy9|2r5/5p2/p3bk2/1r2N3/3Ppq1P/P1Q3R1/5PK1/R7 w - - 4 40|e5c6 e6d5 c3e3 f4e3 f2e3 d5c6|2260|winningMaterial,quietMove,long|5:d5c6 b5b2 c8c6
105hyqp|1kr5/1p1qbp2/4p1p1/BP1pP3/2rP4/5P1P/QR2NPK1/8 b - - 2 34|c4c1 a5b6 c1g1 e2g1 e7a3 a2a3|2260|winningMaterial,quietMove,long|
ybhmh1|4r2k/p1R5/7p/2b3p1/2n5/P4B1P/1PP3P1/2KRr3 b - - 17 33|c5d6 c7c4 d6f4 c1b1 e1d1 f3d1|2265|winningMaterial,sacrifice,long|
nhqpg4|3k1R2/r2q2p1/1pppr1Qp/p7/P2RP2P/8/1PP3P1/2K5 b - - 3 25|d7e8 f8e8 e6e8 g6d6 d8c8 d6c6 c8b8 c6e8|2265|winningMaterial,fork,long|
u3fhsy|4nbk1/2R2p1p/8/3rq3/2Q3B1/6P1/1P4KP/5N2 w - - 3 35|c7c8 e8d6 c8f8 g8f8|2270|advantage,fork,sacrifice,quietMove,short|
16x8fij|5r2/1p6/7k/p1pP4/P1P3R1/7K/1P2p3/8 w - - 0 47|g4g1 f8f1 g1f1 e2f1q|2270|winningMaterial,sacrifice,promotion,quietMove,endgame,short|3:e2f1q
dphj0n|8/8/4R3/6p1/6k1/4P3/r6K/8 w - - 18 62|h2h1 g4g3 e6c6 a2a1 c6c1 a1c1|2275|mate,mateIn3,quietMove,endgame,long|
1rfijvx|2r1k2r/Q2p1ppp/1p6/n1b5/4P3/6B1/P1qN1PPP/2R2RK1 b k - 2 21|c5f2 g3f2 c2c1 f1c1 c8c1 d2f1|2275|advantage,sacrifice,long|
1etoy0f|4k3/3b1pb1/7p/P1nq1p2/6r1/P4N2/2QN3P/1R1K1R2 w - - 9 28|b1b4 g4b4 a3b4 d7a4 b4c5 a4c2|2280|winningMaterial,sacrifice,long|5:a4c2 d5a2 d5d7
18eprdz|1k6/1p4p1/2p4p/p1P4P/1P2KRr1/P7/8/8 b - - 3 37|g4f4 e4f4 a5b4 a3b4 b8a7 f4f5 a7a6 f5g6|2280|winningMaterial,endgame,long|
1mxbus7|2r3k1/5p2/4p3/2b1PPB1/3nB3/1p1P4/6K1/7R b - - 3 37|c5b6 g5f6 c8c2 g2g3 d4f5 e4f5|2285|advantage,quietMove,endgame,long|
1rr1ki3|8/P1n5/1R1k2K1/8/6Bb/4r2P/8/8 b - - 1 50|d6e7 b6b7 e7d6 b7c7 e3a3 c7d7|2285|winningMaterial,quietMove,endgame,long|
cwr58o|8/p7/1p1q3R/2p2Q1p/2PB2nk/4P3/6P1/6K1 b - - 0 38|g4h6 d4f6 d6f6 f5f6 h4g3 f6f4|2290|mate,mateIn3,fork,sacrifice,endgame,long|5:f6f4
36vvu6|1Q6/5pkp/5p2/8/Q1p1q3/5n1P/6r1/5R1K w - - 0 42|h3h4 g2g6 b8g8 g7g8 a4e8 e4e8|2290|winningMaterial,quietMove,endgame,long|
11eq3ra|3bk3/1p6/3B2P1/p7/8/2P2K2/8/8 b - - 0 59|d8e7 g6g7 e7d6 g7g8q|2295|winningMaterial,sacrifice,promotion,quietMove,endgame,short|
19e92rv|2k5/3b4/Q1p5/3pN3/1P5p/2q5/P4P2/6K1 b - - 1 36|c8c7 a6a7 c7d6 a7d7 d6e5 d7g7 e5e6 g7c3|2295|winningMaterial,endgame,long|
5joc7k|8/1p6/1P4p1/1P6/7P/K2k4/8/8 w - - 7 56|a3b2 d3c4 b2c2 c4b5 c2d3 b5b6|2300|advantage,quietMove,endgame,long|
39akj0|r5k1/5p2/4p1pp/4P3/5QPP/5PK1/7R/4q3 w - - 4 54|h2f2 a8a2 f4d4 e1g1 g3f4 a2f2|2300|winningMaterial,quietMove,long|5:a2f2 g1c1
q457c3|6k1/4npp1/7p/3bpq2/7P/1Q4P1/5P2/3BB1K1 w - - 16 46|b3b5 f5e4 b5b8 g8h7 d1c2 e4c2|2305|winningMaterial,quietMove,long|
a6371s|8/7K/5P2/pp2b1P1/k6P/8/8/8 b - - 0 55|e5d6 g5g6 b5b4 g6g7 b4b3 g7g8q|2305|winningMaterial,promotion,quietMove,endgame,long|
12aw01c|3rr2k/pp2Np2/5P1p/1PpPP3/P3Rn1q/5Q1b/5K1P/R7 w - - 6 34|f2g1 e8g8 e7g6 g8g6 g1h1 h3g2 h1g1 g2f3|2310|winningMaterial,fork,long|7:g2f3 g2h3 f4h3
13fnemz|5b2/1pr5/7p/4pk2/p3N1pP/2P3P1/PP1R1KP1/8 w - - 9 37|d2d8 f8e7 e4d6 f5e6 d8a8 e7d6|2310|winningMaterial,quietMove,long|5:e7d6 e6d6 a4a3
i6c38e|rnb1kb1r/pppp1p1p/3P2p1/3P4/2q5/P5P1/1PP1Q2P/RNB1K1NR b KQkq - 0 10|c4e4 e2e4 e8d8 c1g5 f7f6 g5f6 f8e7 e4e7|2315|mate,mateIn4,fork,long|7:e4e7
52o4qa|5r2/5k2/p4p2/1pb1pN2/1r5P/6R1/P5P1/2R4K b - - 6 43|c5e7 c1c6 f8d8 g3g7 f7f8 g7e7|2315|winningMaterial,quietMove,long|5:g7e7
1xurzkh|r3Rnkr/1pq3p1/p2bn1Qp/3p4/3P4/PNP2B1P/1P3PP1/6K1 w - - 0 24|g6e6 g8h7 f3e4 d5e4 e6e4 f8g6|2320|advantage,quietMove,long|
dldu13|8/8/3R3p/5p1r/p1q4k/P7/KP6/6Q1 w - - 0 48|b2b3 a4b3 a2a1 c4c3 a1b1 c3c2 b1a1 c2a2|2325|mate,mateIn4,endgame,long|7:c2a2
txdvi2|8/2q3pk/p2n1r1p/1p2R2P/2ppBP2/P2P4/1PP4K/7Q b - - 1 35|f6g6 e4g6 h7h8 h1a8 c7d8 a8d8 d6e8 d8e8|2325|mate,mateIn4,fork,long|7:d8e8 e5e8
1gwbiqx|1r3k2/1p4R1/1qb4p/p2p1B1P/P2P2R1/6P1/1P3PK1/8 b - - 0 35|b6b2 f5e6 f8e8 g7f7 b2f2 g2f2|2330|winningMaterial,quietMove,long|
m0a96q|8/7n/8/Pk6/8/8/4K3/8 b - - 3 70|b5c4 a5a6 h7g5 a6a7 g5e6 a7a8q|2330|winningMaterial,promotion,quietMove,endgame,long|
1dwue4r|5b2/5kp1/1P6/2Pb1p2/3q4/4nP2/3R4/2KR4 w - - 0 45|d2d3 d4a1 c1d2 a1d1 d2e3 f8c5 d3d4 c5d4|2335|winningMaterial,endgame,long|7:c5d4 d1d4 c5b6
xz1t0b|8/p3b3/1P4k1/1K6/3P4/8/8/8 b - - 0 54|a7a5 b5c6 e7f6 b6b7 f6d4 b7b8q|2340|winningMaterial,promotion,quietMove,endgame,long|
se8yo1|2Q1b1n1/1p2p1k1/p4pqr/3p1N1p/7B/6PP/P7/4R1K1 b - - 11 38|g7f7 c8e6 f7f8 f5e7 g6f7 e7g8 f7e6 e1e6|2340|winningMaterial,sacrifice,long|
9n3ngj|r3k3/1p3p2/p1p1b1r1/4n2p/1QB1Pqp1/1P2N3/P1P2PP1/3R1RK1 w q - 5 23|c4d5 e5f3 g2f3 g4f3 e3g2 g6g2 g1h1 f4h4|2345|mate,mateIn4,sacrifice,long|7:f4h4 f4h2
1xlhcu0|5k2/5p2/6pp/2N5/P2r4/2n5/3R1PP1/6K1 w - - 0 33|c5e6 f7e6 d2d4 c3e2 g1f1 e2d4|2345|winningMaterial,fork,sacrifice,endgame,long|
lyjonl|8/5p2/5kp1/3P4/5nP1/R4P2/1r3K1P/5R2 w - - 1 43|f2e3 f6e5 f1e1 f4g2 e3d3 g2e1|2350|winningMaterial,fork,quietMove,endgame,long|
1ghbl8s|3nrk2/1bp2ppp/p2p1q2/1p6/3P1P2/4NQ1P/PP4P1/2RR3K w - - 7 23|f3f1 e8e3 c1c7 e3h3 h1g1 f6h4 c7f7 d8f7|2355|winningMaterial,long|7:d8f7 f8g8 f8f7
1jbz8d6|r2qkb1r/2pnpppp/p1Q2n2/1p6/3PbB2/P3P3/1P3PPP/RN2KBNR w KQkq - 2 9|c6c7 d8c7 f4c7 a8c8 b1d2 c8c7 d2e4 f6e4|2355|winningMaterial,long|
1rjzpqq|3rr1k1/2bq1pp1/2Q4p/p3NR2/P5PP/2B4b/1P3P2/2R3K1 b - - 0 28|e8e5 c6d7 d8d7 c3e5 h3g4 f5f4 c7e5 f4g4|2360|winningMaterial,long|7:f4g4 c1c8
1ortexe|5b1k/2R5/r3pN1p/2n5/1p3P2/4PK2/6PP/8 b - - 0 39|f8e7 c7e7 a6a7 e7a7 c5b7 a7b7 b4b3 b7h7|2365|mate,mateIn4,endgame,long|7:b7h7
34exl9|8/R4kp1/1r3p2/1P2pb1p/7P/2N2PP1/5K2/8 b - - 8 45|f7g8 c3d5 b6b5 d5e7 g8f8 e7f5|2365|advantage,fork,quietMove,endgame,long|
2chqdw|4r1k1/pQ6/4p1P1/2p2p1p/3q1P2/P7/4R3/2K5 b - - 3 45|d4g1 c1c2 g1g6 e2g2 g6g4 g2g4|2370|winningMaterial,quietMove,endgame,long|5:g2g4 a3a4 c2c3
zzluvw|6k1/8/4P3/1r1p1p2/p2K1P2/Pp6/8/7R b - - 0 60|b5b4 a3b4 b3b2 d4e5 g8g7 h1g1 g7f8 e5f6|2375|winningMaterial,endgame,long|
1sxpv7t|5R2/8/1n4k1/1Pr1p1p1/p5P1/P1NK4/8/8 b - - 8 57|c5c4 f8d8 c4g4 d8d6 g6f5 d6b6|2380|advantage,fork,quietMove,endgame,long|
fc1qu|r3k2r/3n1pb1/1q1Pp2p/pb2Pnp1/8/NP1N4/1B3QPP/2R1KB1R b Kkq - 1 22|b6b7 d3c5 d7c5 f1b5 b7b5 a3b5|2380|winningMaterial,sacrifice,quietMove,long|
pqjxq0|8/8/6P1/2k4K/7P/p7/8/8 w - - 0 55|h5g4 a3a2 g6g7 a2a1q g4h5 a1a2|2385|winningMaterial,promotion,quietMove,endgame,long|
1g6kp8d|r4k2/1R6/4BK2/8/5p2/p7/1p6/8 b - - 5 61|b2b1b b7g7 b1h7 g7h7 a3a2 h7h8|2390|mate,mateIn3,quietMove,endgame,long|
ow7wm2|1rb2b1k/p2q1p1p/1pn2P2/2p1pB2/2Pp2P1/PP6/R2N2K1/2BQ4 b - - 6 30|d7c7 d2e4 c8f5 g4f5 c6e7 f6e7|2395|winningMaterial,sacrifice,quietMove,long|5:f6e7 g2g1
xievd3|8/4n3/4Pk2/PR1P4/2r2P1p/4K2P/8/8 b - - 4 68|c4a4 d5d6 a4a3 e3d4 e7f5 b5f5|2400|winningMaterial,quietMove,endgame,long|
1gnjtnb|4r1k1/5pp1/2R4p/p3B3/P4RbP/8/1P3P2/3r2K1 w - - 2 34|g1g2 g4e6 c6c5 e6d5 c5d5 d1d5|2400|advantage,sacrifice,quietMove,long|
1idh6xi|7k/6p1/1p2Qpq1/p1rP3p/4N2P/1b1K2R1/2r2PP1/R4B2 b - - 6 33|c5c3 d3d4 c3g3 f2g3 c2c5 e4c5|2405|winningMaterial,sacrifice,quietMove,long|5:e4c5
1yw8ujh|5b2/p1k2p1p/8/2p5/8/2PK1Bpb/PP1NRq1P/7R b - - 1 32|h3f5 d3c4 f5e6 c4b5 f2e2 f3e2|2410|winningMaterial,sacrifice,quietMove,long|
1dlp3z8|2r2rk1/5pn1/3pq1p1/p3N1Q1/8/1P5P/P5B1/4RRK1 b - - 0 32|f7f6 g5d2 d6e5 g2d5 f8d8 d5e6|2415|winningMaterial,fork,sacrifice,quietMove,long|
aikwfr|8/2p3k1/3b2pp/3R1P2/3P3r/5QP1/2q5/5RK1 w - - 1 46|f1a1 c2h2 g1f1 h2h1 f3h1 h4h1 f1e2 h1a1|2420|winningMaterial,fork,sacrifice,endgame,long|
11w1p38|K7/P5p1/2k5/5p2/P5p1/4B3/5P1b/8 b - - 0 54|f5f4 a8b8 f4e3 b8c8 e3f2 a7a8q|2425|winningMaterial,sacrifice,promotion,quietMove,endgame,long|
a5k0nx|r4k1r/pp2q3/8/3p1Q2/4n3/4BP2/PP2P3/1K4R1 b - - 2 28|e4f6 e3c5 e7c5 f5f6 f8e8 f6h8|2430|winningMaterial,fork,sacrifice,quietMove,long|5:f6h8
1qnv3xn|2Q5/3R1pk1/4qpp1/8/1P6/p6P/2rQ1P2/3K4 b - - 2 48|c2c4 c8h8 g7h8 d2h6 h8g8 d7d8 e6e8 d8e8|2435|mate,mateIn4,sacrifice,endgame,long|
130rcu7|8/1p1r4/p5kN/6b1/8/P7/1P1r4/1K4RR w - - 5 38|g1g3 d2d1 h1d1 d7d1 b1c2 d1c1 c2d3 g6h6|2440|winningMaterial,fork,sacrifice,endgame,long|7:g6h6
1d4swks|2q5/3R1pk1/5pp1/2PQ3p/pp6/P6P/5PPK/4r3 b - - 3 35|c8a6 d5f7 g7h6 h3h4 e1h1 h2h1 a6f1 h1h2 f1g1 h2g1|2445|winningMaterial,long|9:h2g1 h2g3 h2h3
1jz9us0|r4rk1/pb3ppp/p1q5/2b2Q2/5N2/B7/5PPP/R4RK1 b - - 1 25|c5d6 f1c1 c6b5 f5b5 a6b5 a3d6 f8c8 c1c8|2450|winningMaterial,quietMove,long|7:c1c8 c1c7 c1b1
yt39ga|r1b4r/p1p2qkp/2p1p3/4P1Qn/P7/1P2P1PP/2P5/RN2K2R b KQ - 6 22|g7f8 h1f1 f7f1 e1f1 h8g8 g5h5|2455|winningMaterial,sacrifice,quietMove,long|5:g5h5 g5h6
zqknbq|2q1r1k1/pp1n2p1/2p3Q1/3p1r1p/4N2P/4B3/PPP3P1/2KRR3 b - - 0 29|f5f8 e3h6 f8f7 e4g5 d7e5 e1e5 c8e6 e5e6|2460|winningMaterial,quietMove,long|7:e5e6 g5e6
1qdfa4o|8/7k/6RB/p1r3p1/6P1/2p5/5K2/8 w - - 4 48|h6f8 c3c2 g6h6 h7g8 f8c5 c2c1q|2465|winningMaterial,sacrifice,promotion,quietMove,endgame,long|
1094917|r1bq3r/pp1kpp2/2pp1b2/P2Pn1QR/2N1P1n1/2N5/1PP2PP1/R1B1KB2 w Q - 1 16|g5f5 d7c7 c4e5 c8f5 h5f5 f6e5|2470|winningMaterial,sacrifice,quietMove,long|5:f6e5 g4e5 d6e5
1eegeih|8/1p4k1/6q1/3P1p1R/2P2b2/PP1PnQ1K/8/8 w - - 0 49|a3a4 g6g4 f3g4 f5g4 h3h4 g4g3 h5g5 f4g5|2480|winningMaterial,fork,sacrifice,endgame,long|
ttrzap|5rk1/p1q3pp/4pp2/4N3/1n1P4/6P1/PP3PKP/R2Q4 w - - 0 25|d1a4 b4c2 a1c1 c2e3 f2e3 c7c1|2485|advantage,sacrifice,quietMove,long|
16muyk3|2r2r2/p2Rb1k1/4Pp2/1p2PQpp/7P/P5B1/6PK/2q5 b - - 1 37|c8c7 e5f6 f8f6 g3e5 g7g8 e5f6 c1f4 f5f4 g5f4 f6e7|2490|winningMaterial,fork,long|9:f6e7 d7e7
fwlrbl|3r2k1/1p1r1pp1/p7/P5q1/2p1R3/1B1nP3/2Q2PP1/5RK1 w - - 0 32|c2c4 d3e5 c4e2 d7d2 e4e5 g5e5|2500|advantage,sacrifice,quietMove,long|
yfwcco|8/1p4pk/5B1p/PPp1Qq2/2B3N1/4p2P/3r1bb1/R6K w - - 0 36|h1h2 f5f3 c4g8 h7g8 g4h6 g8h7 e5f5 f3f5|2500|winningMaterial,quietMove,long|7:f3f5
1hpvn85|2q1r1k1/6p1/2bQ1r1p/8/p4B1P/P5P1/1P1RPP2/R5K1 w - - 11 29|d6b8 c8h3 b8e8 c6e8 a1c1 f6f4|2500|winningMaterial,sacrifice,quietMove,long|5:f6f4 e8c6 g8h7
1qbxdgi|3r1k1r/4pp1p/Q5p1/8/8/8/Pq3PPP/1RR3K1 b - - 1 25|b2g7 b1b8 g7d4 b8d8 d4d8 c1c8 f8g7 c8d8|2500|winningMaterial,fork,quietMove,long|
kb3rme|1r6/R1k5/2p3p1/1b6/pr2p3/2N1P3/1P1R2P1/6K1 b - - 17 40|c7c8 d2f2 b8b7 f2f8 c8c7 f8f7 c7d6 a7b7|2500|winningMaterial,quietMove,long|7:a7b7 f7b7
m7jicm|2kn1b1r/pp3q2/2pp2p1/5pB1/7P/P7/1PPQ1PB1/1K2R3 b - - 1 25|d8e6 g2d5 c6d5 d2c3 c8d7 c3h8|2500|advantage,fork,sacrifice,quietMove,long|
2msviq|4Nk2/8/1p4P1/2r2pP1/8/1B4K1/P4P2/4b3 b - - 14 41|c5c3 g3g2 c3b3 g6g7 f8g8 a2b3|2500|advantage,sacrifice,quietMove,endgame,long|5:a2b3
wdpo8p|3r4/p3pp1k/8/1P1n1p2/2rR4/2P3P1/3BRP1P/6K1 b - - 0 25|d5c3 d2c3 c4d4 c3d4 d8d4 e2e7 h7g7 e7a7|2500|advantage,sacrifice,endgame,long|
1oovv3q|7K/2r5/5kPn/p4b1P/R7/8/8/5R2 w - - 2 58|f1f3 h6f7 h8h7 f7g5 h7h6 c7h7 g6h7 g5f7|2500|mate,mateIn4,fork,sacrifice,endgame,long|
rryouk|5k2/7R/8/4b3/r7/4K3/2R5/8 b - - 8 66|e5d4 e3d3 d4g7 c2c8 f8f7 c8c7 f7f6 c7g7|2500|winningMaterial,quietMove,endgame,long|7:c7g7 c7c6 h7g7
1nrgvyd|2n3k1/p4pp1/1p2p2p/1P2P3/1B1rN1PP/1R3P2/4nK2/8 b - - 7 37|e2c1 b3c3 d4b4 c3c8 g8h7 c8c1|2500|winningMaterial,fork,sacrifice,quietMove,long|
lblvu2|4r2k/pbp5/3p2p1/b1p5/2P5/1P1Nr1NP/P1R2RP1/6K1 w - - 9 36|f2e2 b7c6 e2e3 e8e3 d3f4 e3g3|2500|winningMaterial,fork,sacrifice,quietMove,long|
gj08uf|8/2R2pk1/5r2/1p1P3P/2p3p1/P1P5/1P2K3/8 w - - 0 48|a3a4 g4g3 a4b5 g3g2 c7c4 g2g1q|2500|winningMaterial,sacrifice,promotion,quietMove,endgame,long|
q1rfa7|8/8/6R1/PP6/4k3/4b1P1/1r6/3K4 w - - 1 52|g6e6 e4d3 e6d6 e3d4 d6d4 d3d4|2500|advantage,sacrifice,quietMove,endgame,long|
2vmdt9|4r1k1/1p2r2p/6p1/8/p2RnN2/P1q2QP1/7P/5RK1 w - - 0 33|d4a4 c3c5 g1h1 e4d2 f3d5 c5d5 f4d5 d2f1 d5e7 e8e7|2500|winningMaterial,fork,endgame,long|
1ydpnaa|4R3/5pk1/3b4/2Q5/P7/3K1P2/1p5q/8 w - - 0 49|c5d4 d6e5 d4e5 h2e5 e8e5 b2b1q|2500|winningMaterial,sacrifice,promotion,quietMove,endgame,long|
1i1tep5|1R6/4R2p/6pk/8/6rP/5K2/7r/8 b - - 3 55|g4g1 b8b7 h2h4 e7h7 h6g5 b7b5 g5f6 h7h4|2500|winningMaterial,quietMove,endgame,long|7:h7h4 b5b6
vr3ff|8/8/4p1p1/P7/1R6/5Pkp/r7/6K1 w - - 3 56|g1f1 h3h2 b4g4 g3f3 g4g3 f3g3 a5a6 h2h1q|2500|mate,mateIn4,promotion,quietMove,endgame,long|7:h2h1q h2h1r
p5rnb8|2RR1N2/kp4r1/p6r/4p3/5nP1/7P/PP4K1/8 w - - 10 41|g2h1 h6h3 h1g1 g7g4 g1f1 h3f3 f1e1 g4g1 e1d2 g1g2 d2c1 f3f1|2500|advantage,long|
1uf6nlv|4k1nr/7N/p4qp1/1np1p3/2Q5/7P/P4PP1/3R2K1 b k - 0 34|f6f5 g2g4 f5f4 c4e6 g8e7 h7f6 f4f6 e6f6|2500|winningMaterial,sacrifice,quietMove,long|
11fvq44|1r3k2/3n1p1p/2p5/2PP1P2/1q2pP2/6R1/4B1K1/Q7 b - - 0 32|b8e8 a1h8 f8e7 d5d6 e7d8 g3g8 e8g8 h8g8 d7f8 g8f8|2500|winningMaterial,sacrifice,long|9:g8f8 g8f7
mgvw5t|5b2/2B3p1/4kp2/P7/2R2Prp/8/KP6/8 b - - 0 41|e6d5 a5a6 f8c5 c4c5 d5c5 a6a7 c5c6 a7a8q|2500|winningMaterial,sacrifice,promotion,quietMove,endgame,long|
s80wws|r6k/3bb1pp/1nq5/5pP1/3P1Q2/2NP4/3B3P/2R2K1R w - - 2 35|f4e5 c6f3 f1g1 d7c6 e5g3 f3h1 g1f2 e7d6 g3h3 h1h2 h3h2 d6h2|2500|winningMaterial,fork,sacrifice,long|
wbnja0|6k1/8/8/R5B1/P6P/5pr1/8/6bK w - - 0 57|a5e5 g1d4 e5e8 g8f7 e8e7 f7f8 g5e3 d4e3 e7e3 f3f2 e3g3 f2f1q|2500|winningMaterial,sacrifice,promotion,quietMove,endgame,long|
`;
  return RAW.trim().split('\n').map((line) => {
    const [id, fen, moves, rating, themes, alts] = line.split('|');
    const a = {};
    if (alts) for (const part of alts.split(';')) { const [k, v] = part.split(':'); a[k] = v.split(' '); }
    return { id, fen, moves: moves.split(' '), rating: +rating, themes: themes ? themes.split(',') : [], alts: a };
  });
})();
