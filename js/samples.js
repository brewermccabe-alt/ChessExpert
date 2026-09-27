/* Built-in opening library. Lines are standard opening theory; the move-by-move notes were written for this app. */
window.SAMPLES = [
  /* ---------------- White ---------------- */
  {
    name: 'Italian Game',
    color: 'w',
    desc: '1.e4 e5 2.Nf3 Nc6 3.Bc4 — quiet Giuoco Piano plans, plus replies to the Sicilian, French and Caro-Kann.',
    pgn: `1. e4 {Takes the centre and opens lines for your queen and light-squared bishop.}
1... e5 {Black claims an equal share of the centre and frees the f8-bishop.}
(1... c5 {The Sicilian. Black fights for d4 from the side and avoids a symmetrical game.}
 2. Nf3 {Develops and prepares d4 to open the position while you are ahead in development.}
 2... d6 {Black controls e5 and prepares ...Nf6 without allowing e4-e5.}
 (2... Nc6 {Black develops and adds a second guard to d4.}
  3. d4 {Break open the centre at once.}
  3... cxd4 {Black swaps a wing pawn for your centre pawn.}
  4. Nxd4 {The knight recaptures on a dominant central square.})
 (2... e6 {Black keeps ...d5 and ...Bb4 in reserve.}
  3. d4 {The same central break.}
  3... cxd4 {Black trades on d4.}
  4. Nxd4 {A centralised knight and a lead in development.})
 3. d4 {Strike the centre immediately.}
 3... cxd4 {The standard Sicilian capture.}
 4. Nxd4 {The Open Sicilian: you have more space and quicker development.}
 4... Nf6 {Black develops and attacks e4.}
 5. Nc3 {Defends e4 and brings another piece into play.})
(1... e6 {The French. Black prepares ...d5 to challenge e4.}
 2. d4 {Take the whole centre while Black is slow.}
 2... d5 {Black attacks e4.}
 3. Nc3 {Defend e4 with a developing move.})
(1... c6 {The Caro-Kann. Black prepares ...d5 with solid support.}
 2. d4 {Build a broad pawn centre.}
 2... d5 {Black challenges e4.}
 3. Nc3 {Protect e4 and develop at the same time.}
 3... dxe4 {Black gives up the centre to free the position.}
 4. Nxe4 {Your knight lands on a strong central square.})
2. Nf3 {Develops with a direct attack on e5 and prepares to castle.}
2... Nc6 {The most natural defence of e5.}
(2... d6 {The Philidor. Solid, but it hems in Black's f8-bishop.}
 3. d4 {Challenge e5 at once and use your extra space.})
(2... Nf6 {The Petrov. Black counterattacks e4 instead of defending e5.}
 3. Nxe5 {Take the pawn; Black has to be careful winning it back.}
 3... d6 {Kicks the knight first. Taking at once with 3...Nxe4? runs into 4.Qe2.}
 4. Nf3 {Retreat to a safe, active square.}
 4... Nxe4 {Black regains the pawn.}
 5. d4 {Stake out the centre and prepare Bd3 to challenge the e4-knight.})
3. Bc4 {The Italian bishop aims straight at f7, the weakest point near Black's king.}
3... Bc5 {The Giuoco Piano. Black mirrors you and aims at f2.}
(3... Nf6 {The Two Knights Defence. Black counterattacks e4.}
 4. d3 {Calmly protect e4 and steer for a slow, safe middlegame.}
 4... Be7 {Solid development, preparing to castle.}
 5. O-O {King to safety first.}
 5... O-O {Black castles too.}
 6. Re1 {The rook backs up e4 and makes room for Nbd2-f1-g3.})
4. c3 {Prepares d4 and gives the bishop a retreat on c2 later.}
4... Nf6 {Develops with pressure on e4.}
5. d3 {The Giuoco Pianissimo: a slow build-up with e4 held by a pawn.}
5... d6 {Black reinforces e5 and opens a path for the c8-bishop.}
(5... O-O {Black castles before committing the d-pawn.}
 6. O-O {Castle as well.}
 6... d6
 7. a4)
6. O-O {Your king is safe. The plan is Re1, Nbd2 and a4.}
6... O-O {Black castles.}
7. a4 {Gains queenside space. The bishop can drop to a2, and ...b5 is discouraged.} *`,
  },
  {
    name: 'Ruy Lopez',
    color: 'w',
    desc: '1.e4 e5 2.Nf3 Nc6 3.Bb5 — the Closed Spanish with the Chigorin, plus the Berlin, Open and sidelines.',
    pgn: `1. e4 {Takes the centre and frees your bishop and queen.}
1... e5 {Black meets you in the centre.}
2. Nf3 {Attacks e5 and develops toward castling.}
2... Nc6 {Black defends e5.}
3. Bb5 {The Spanish. You pressure the knight that guards e5.}
3... a6 {The Morphy Defence asks your bishop to decide at once.}
(3... Nf6 {The Berlin. Black counterattacks e4 instead.}
 4. O-O {Castle first. The e4-pawn is only loose, not lost.}
 4... Nxe4 {Black grabs the pawn.}
 (4... Bc5 {Black develops actively. After c3 this reaches the 3...Bc5 line.}
  5. c3
  5... O-O
  6. d4
  6... Bb6
  7. Re1)
 5. Re1 {Pin along the e-file and win the pawn back.}
 5... Nd6 {The knight retreats and hits your b5-bishop.}
 6. Nxe5 {Regain the pawn with a central knight.}
 6... Be7 {Black blocks the e-file and prepares to castle.}
 7. Bf1 {A safe retreat that keeps the e-file open for your rook.}
 7... Nxe5 {Black trades off your strong knight.}
 8. Rxe5 {The rook recaptures and stays active.}
 8... O-O {Black castles.}
 9. d4 {Grab central space and free the c1-bishop.}
 9... Bf6 {The bishop hits your rook and d4 at once.}
 10. Re1 {The rook returns home. You keep a small space advantage.})
(3... Bc5 {The Classical Defence. An active bishop aimed at f2.}
 4. c3 {Prepares d4 to gain time on the bishop.}
 4... Nf6 {Develops with pressure on e4.}
 5. O-O {Castle before opening the centre.}
 5... O-O {Black castles.}
 6. d4 {The central break arrives with tempo on c5.}
 6... Bb6 {The bishop stays on its diagonal.}
 7. Re1 {Protects e4. Your centre is the more comfortable one.})
(3... d6 {The Old Steinitz. Solid but cramped.}
 4. d4 {Open the centre while Black is passive.}
 4... Bd7 {Breaks the pin so that ...exd4 becomes possible.}
 5. Nc3 {Develops and supports e4.}
 5... Nf6 {Black develops and adds pressure to e4.}
 6. O-O {Castle. The e4-pawn is safe for tactical reasons.}
 6... Be7 {Black prepares to castle.}
 7. Re1 {Protects e4 for good. You have more space.})
4. Ba4 {Keep the pin. The bishop stays on the a4-e8 diagonal.}
4... Nf6 {Develops and attacks e4.}
(4... d6 {The Modern Steinitz. Black holds e5 first.}
 5. c3 {Prepares d4 and gives the bishop a retreat on c2.}
 5... Bd7 {Unpins the knight.}
 6. d4 {Take the centre.}
 6... Nf6 {Black develops.}
 7. O-O {Castle with a comfortable space advantage.})
5. O-O {Castle. Taking on e4 now lets you win the pawn back with Re1.}
5... Be7 {The Closed Ruy Lopez. Black plans to castle and hold firm.}
(5... Nxe4 {The Open Spanish. Black grabs a pawn for activity.}
 6. d4 {Open lines at once while Black's king is still in the centre.}
 6... b5 {Black gains time on your bishop.}
 7. Bb3 {The bishop keeps aiming at f7 and d5.}
 7... d5 {Black returns the pawn to keep the knight on e4.}
 8. dxe5 {The e5-pawn gains space and cramps Black.}
 8... Be6 {Develops and protects d5.}
 9. Nbd2 {Challenge the e4-knight and bring another piece out.})
(5... b5 {Black kicks the bishop early.}
 6. Bb3 {Retreat to the strong a2-g8 diagonal.}
 6... Bc5 {The Arkhangelsk. An active bishop aimed at f2.}
 7. a4 {Attack the queenside pawns at once.}
 7... Rb8 {Black protects b5.}
 8. c3 {Prepares d4.}
 8... d6 {Black supports e5.}
 9. d4 {Hit the centre and the c5-bishop together.}
 9... Bb6 {The bishop retreats to a safe diagonal.}
 10. a5 {Gain space and kick the bishop again.}
 10... Ba7 {The bishop stays aimed at f2.}
 11. h3 {Rule out ...Bg4 before continuing.})
6. Re1 {Protects e4, so Bxc6 followed by Nxe5 becomes a threat.}
6... b5 {Black removes the threat by chasing your bishop.}
7. Bb3 {The bishop settles on its best diagonal.}
7... d6 {Black supports e5.}
(7... O-O {Black invites the Marshall Attack, which comes after 8.c3 d5.}
 8. h3 {Sidesteps the Marshall Attack.}
 8... Bb7 {Black develops and eyes e4.}
 9. d3 {Solidly protects e4.}
 9... d6 {Black secures e5.}
 10. a3 {Gives the bishop a2, so it can dodge ...Na5 without being traded.})
8. c3 {Makes room for the bishop on c2 and prepares d4.}
8... O-O {Black castles.}
9. h3 {Stops ...Bg4 so d4 can come safely.}
9... Na5 {The Chigorin. Black chases the bishop and frees the c-pawn.}
(9... Bb7 {The Zaitsev idea. Pressure on e4.}
 10. d4 {Build the classical centre.}
 10... Re8 {Black piles more pressure on e4.}
 11. Nbd2 {Develops and protects e4.}
 11... Bf8 {The bishop steps back to defend the kingside.}
 12. a4 {Pressure on b5 before Black is fully organised.})
(9... Nb8 {The Breyer. The knight reroutes to d7.}
 10. d4 {Take the centre.}
 10... Nbd7 {The knight supports e5.}
 11. Nbd2 {Develops, heading for f1 and g3.}
 11... Bb7 {Black adds pressure on e4.}
 12. Bc2 {Protects e4 and keeps your good bishop.})
10. Bc2 {Keep the bishop. It will aim at Black's kingside later.}
10... c5 {Black gains queenside space.}
11. d4 {Build the ideal centre.}
11... Qc7 {Supports e5 and lines up on the c-file.}
12. Nbd2 {The knight heads for f1 and g3 to support the kingside.}
12... cxd4 {Black opens the c-file.}
(12... Nc6 {Black adds pressure to d4.}
 13. d5 {Close the centre and gain space.}
 13... Nd8 {The knight reroutes via b7 or f7.}
 14. a4 {Open a second front on the queenside.})
13. cxd4 {Recapture and keep a strong centre.}
13... Nc6 {The knight returns to pressure d4.}
14. Nb3 {Adds another defender to d4.}
14... a5 {Black harasses the knight.}
15. Be3 {Protects d4 again.}
15... a4 {Black kicks the knight.}
16. Nbd2 {The knight reroutes to f1 and g3, ready for kingside play.} *`,
  },
  {
    name: 'Scotch Game',
    color: 'w',
    desc: '1.e4 e5 2.Nf3 Nc6 3.d4 — open the centre at once. Mieses main line and the 4...Bc5 Classical.',
    pgn: `1. e4 {Takes the centre.}
1... e5 {Black stakes an equal claim.}
2. Nf3 {Develops with an attack on e5.}
2... Nc6 {Black defends e5.}
3. d4 {The Scotch. Open the centre immediately.}
3... exd4 {Black takes, because holding e5 is awkward.}
(3... Nxd4 {Black trades knights instead.}
 4. Nxd4 {Recapture.}
 4... exd4 {Black recaptures with the pawn.}
 5. Qxd4 {Your queen is centralised and hard to harass.}
 5... Ne7 {Black plans ...Nc6 to hit the queen.}
 6. Bc4 {Develop quickly with pressure on f7.})
4. Nxd4 {A central knight and free development.}
4... Nf6 {Black attacks e4.}
(4... Bc5 {The Classical. Black hits the d4-knight.}
 5. Be3 {Defend the knight with a developing move.}
 5... Qf6 {Black adds pressure on d4 and f2.}
 6. c3 {Solidly supports the knight.}
 6... Nge7 {Black develops toward the centre.}
 7. Bc4 {Active development aimed at f7.}
 7... O-O {Black castles.}
 8. O-O {Castle. You keep a small central edge.})
5. Nxc6 {The Mieses. Trade to damage Black's pawn structure.}
5... bxc6 {Black recaptures toward the centre.}
(5... dxc6 {Opens lines for Black's queen and bishop.}
 6. Qxd8+ {Trade queens.}
 6... Kxd8 {Black's king loses the right to castle.}
 7. Bd3 {A small but lasting endgame edge.})
6. e5 {Kick the knight from f6.}
6... Qe7 {Pins the e5-pawn against your king.}
7. Qe2 {Defends e5 and breaks the pin.}
7... Nd5 {The knight hops to the centre.}
8. c4 {Kick the knight with tempo.}
8... Ba6 {Pins the c4-pawn against your queen.}
(8... Nb6 {The knight retreats.}
 9. Nd2 {Develops and protects c4.})
9. b3 {Protects c4 and prepares Bb2.}
9... g6 {Black prepares ...Bg7 to attack e5.}
10. f4 {Grab space and support e5.} *`,
  },
  {
    name: 'London System',
    color: 'w',
    desc: '1.d4 and 2.Bf4 — one solid setup against almost everything, with the key ...c5 and ...Qb6 ideas covered.',
    pgn: `1. d4 {Takes the centre and frees the c1-bishop.}
1... d5 {Black mirrors you.}
(1... Nf6 {Flexible. Black keeps several setups available.}
 2. Bf4 {The London bishop comes out before e3 shuts it in.}
 2... g6 {Black chooses a King's Indian setup.}
 (2... e6 {Black prepares ...c5 and ...d5.}
  3. e3 {Supports d4 and opens the f1-bishop.}
  3... c5 {Black hits d4.}
  4. c3 {The London pawn triangle holds d4.}
  4... Nc6 {More pressure on d4.}
  5. Nd2 {Develops while keeping Qb3 possible.}
  5... d5 {Black claims the centre. This is the main-line position.}
  6. Ngf3 Bd6 7. Bg3 O-O 8. Bd3)
 3. e3 {Solid support for d4.}
 3... Bg7 {The fianchettoed bishop eyes d4.}
 4. Nf3 {Develops and controls e5.}
 4... O-O {Black castles.}
 5. Be2 {A modest square that keeps the bishop clear of ...e5 tactics.}
 5... d6 {Black prepares ...e5 or ...c5.}
 6. h3 {Gives the f4-bishop a retreat on h2.}
 6... c5 {Black hits the centre.}
 7. c3 {Hold d4 with the pawn triangle.})
2. Bf4 {The London bishop gets outside the pawn chain before e3.}
2... Nf6 {Black develops.}
(2... c5 {Black hits d4 at once.}
 3. e3 {Supports d4.}
 3... Nc6 {More pressure on d4.}
 4. c3 {The pawn triangle holds d4.}
 4... Qb6 {Attacks b2, the soft spot in every London.}
 5. Qb3 {Offer a queen trade to cover b2.}
 5... c4 {Black gains space with tempo on your queen.}
 6. Qc2 {The queen stays close to b2.}
 6... Bf5 {Black chases the queen again.}
 7. Qc1 {The queen guards b2. Next come Nd2 and Ngf3.})
3. e3 {Supports d4 and opens the f1-bishop.}
3... e6 {Solid. Black prepares ...c5.}
(3... c5 {Black hits d4 early.}
 4. c3 {Hold d4.}
 4... Nc6 {More pressure on d4.}
 5. Nd2 {Develops and prepares Qb3 if needed.}
 5... Qb6 {Attacks b2.}
 6. Qb3 {Offer the trade. If ...Qxb3, axb3 opens the a-file for your rook.}
 6... c4 {Black chases the queen.}
 7. Qc2 {The queen stays near b2.}
 7... Bf5 {Another tempo on your queen.}
 8. Qc1 {Solid. b2 stays protected.})
(3... Bf5 {Black develops the bishop outside the chain too.}
 4. c4 {Change plans: hit d5 now that b7 has lost its defender.}
 4... e6 {Black supports d5.}
 5. Nc3 {Pile up on d5.}
 5... Nbd7 {Black develops.}
 6. Qb3 {Attacks b7, which the f5-bishop no longer guards.})
4. Nf3 {Develops and watches e5.}
4... c5 {Black fights for d4.}
5. c3 {The pawn triangle keeps d4 solid.}
5... Nc6 {Adds pressure on d4.}
6. Nbd2 {Supports a later e4 and keeps the queen's path to b3 open.}
6... Bd6 {Black offers to trade your good bishop.}
7. Bg3 {Keep the bishop. If ...Bxg3, hxg3 opens the h-file for your rook.}
7... O-O {Black castles.}
8. Bd3 {Aim at h7.}
8... b6 {Black prepares ...Bb7.}
9. Ne5 {Plant a knight on e5, the London's key outpost.}
9... Bb7 {Black develops.}
10. f4 {Lock in the e5-knight and start a Stonewall-style kingside attack.} *`,
  },
  {
    name: "Queen's Gambit",
    color: 'w',
    desc: '1.d4 d5 2.c4 — the Exchange QGD with the Carlsbad plan, plus the Slav, QGA, Chigorin and Albin.',
    pgn: `1. d4 {Takes the centre.}
1... d5 {Black mirrors you.}
2. c4 {The Queen's Gambit. Offer a wing pawn to pull Black's d-pawn away from the centre.}
2... e6 {The Queen's Gambit Declined. Black holds d5 firmly.}
(2... dxc4 {The Queen's Gambit Accepted. Black takes but can't keep the pawn.}
 3. e3 {Opens your bishop so it can win c4 back.}
 3... Nf6 {Develops and stops e4.}
 (3... e5 {Black strikes back in the centre.}
  4. Bxc4 {Win back the pawn with development.}
  4... exd4 {Black trades.}
  5. exd4 {An isolated d-pawn, but free and active pieces.})
 4. Bxc4 {Pawn regained, with a lead in development.}
 4... e6 {Black opens the f8-bishop.}
 5. Nf3 {Develops, ready to castle.}
 5... c5 {Black hits your centre.}
 6. O-O {King to safety.}
 6... a6 {Black prepares ...b5.}
 7. a4 {Stop ...b5 in its tracks.}
 7... Nc6 {Black develops.}
 8. Qe2 {Clears d1 for a rook and supports e4.}
 8... cxd4 {Black opens the d-file.}
 9. Rd1 {The rook eyes d4 and Black's queen.}
 9... Be7 {Black develops.}
 10. exd4 {An isolated pawn, but your pieces are active.}
 10... O-O {Black castles.}
 11. Nc3 {Develops. d5 is a key square for your pieces.})
(2... c6 {The Slav. Black supports d5 and keeps the c8-bishop free.}
 3. Nf3 {Develops and controls e5.}
 3... Nf6 {Black develops.}
 4. Nc3 {More pressure on d5.}
 4... dxc4 {Black grabs c4, hoping to hold it with ...b5.}
 (4... e6 {The Semi-Slav. Rock solid.}
  5. e3 {Solid. You plan Bd3 and castling.}
  5... Nbd7 {Black prepares ...dxc4 with ...b5, or ...e5.}
  6. Qc2 {Controls e4, so ...e5 is harder to achieve.}
  6... Bd6 {Black aims at h2.}
  7. Bd3 {Develops toward the kingside.}
  7... O-O {Black castles.}
  8. O-O {Castle. Now the fight for e4 and e5 begins.})
 5. a4 {Stop ...b5 so you can win the pawn back.}
 5... Bf5 {Black develops the bishop before ...e6.}
 6. e3 {Opens your bishop to take on c4.}
 6... e6 {Black prepares ...Bb4.}
 7. Bxc4 {Pawn back, with a comfortable position.}
 7... Bb4 {Black pins your c3-knight.}
 8. O-O {Castle.}
 8... O-O {Black castles.}
 9. Qe2 {Prepares e4 to take over the centre.})
(2... Nc6 {The Chigorin. Black develops pieces rather than pawns.}
 3. Nf3 {Develops and controls e5.}
 3... Bg4 {Pressure on d4 through the f3-knight.}
 4. cxd5 {Take the centre pawn first.}
 4... Bxf3 {Black gives up the bishop to win d5 back.}
 5. gxf3 {Recapture toward the centre. You now have the bishop pair.}
 5... Qxd5 {Black regains the pawn.}
 6. e3 {Solid. Hold d4 and open the f1-bishop.}
 6... e5 {Black strikes the centre.}
 7. Nc3 {Develops with tempo on the queen.}
 7... Bb4 {Pins the knight, so the queen is safe.}
 8. Bd2 {Unpins.}
 8... Bxc3 {Black trades.}
 9. bxc3 {Recapture toward the centre. The bishop pair is yours.})
(2... e5 {The Albin Countergambit. A sharp pawn sacrifice.}
 3. dxe5 {Take the pawn.}
 3... d4 {The d4-pawn cramps your position.}
 4. Nf3 {Develops and attacks d4.}
 4... Nc6 {Black defends d4.}
 5. g3 {Fianchetto to put pressure on the long diagonal.}
 5... Be6 {Black develops and hits c4.}
 6. Nbd2 {Protects c4 and prepares Nb3 to attack d4.})
3. Nc3 {More pressure on d5.}
3... Nf6 {Black develops.}
(3... Be7 {A subtle move order that avoids some Exchange lines.}
 4. Nf3 {Develops.}
 4... Nf6 {Black develops.}
 5. Bf4 {An active bishop outside the pawn chain.}
 5... O-O {Black castles.}
 6. e3 {Solid.}
 6... c5 {Black hits d4.}
 7. dxc5 {Take, so Black spends time recapturing.}
 7... Bxc5 {The bishop recaptures.}
 8. Qc2 {Controls e4 and prepares Rd1 or long castling.})
(3... c6 {Black heads for Semi-Slav setups.}
 4. e3 {Solid development.}
 4... Nf6 {Black develops. This reaches the Semi-Slav position.}
 5. Nf3 Nbd7 6. Qc2 Bd6 7. Bd3 O-O 8. O-O)
4. cxd5 {The Exchange Variation fixes the pawn structure early.}
4... exd5 {Black recaptures toward the centre.}
5. Bg5 {Pins the knight and adds pressure to d5.}
5... Be7 {Black breaks the pin.}
(5... c6 {Black supports d5 first.}
 6. Qc2 {Stops ...Bf5, so Black's light-squared bishop stays passive.}
 6... Be7 {Black develops.}
 7. e3 {Solid.}
 7... Nbd7 {Black develops.}
 8. Bd3 {Develops toward the kingside.}
 8... O-O)
6. e3 {Solid development.}
6... O-O {Black castles.}
7. Bd3 {Aims at h7.}
7... Nbd7 {Black develops.}
8. Qc2 {Controls e4 and joins the bishop against h7.}
8... c6 {Black solidifies d5.}
9. Nge2 {The knight goes to e2 so that f3 and e4 become possible.}
9... Re8 {Black prepares ...Nf8.}
10. O-O {Castle.}
10... Nf8 {The knight heads for g6 or e6.}
11. f3 {Prepares the central e4 break.} *`,
  },
  {
    name: 'Anti-Sicilian: Alapin',
    color: 'w',
    desc: '1.e4 c5 2.c3 — build a big centre with d4 and skip the Open Sicilian theory battle.',
    pgn: `1. e4 {Takes the centre.}
1... c5 {The Sicilian.}
2. c3 {The Alapin. Prepare d4 so that a pawn can recapture there.}
2... Nf6 {The main line. Black attacks e4.}
(2... d5 {Black strikes the centre at once.}
 3. exd5 {Take. Black's queen has to recapture.}
 3... Qxd5 {Black's queen comes out early.}
 4. d4 {Build the centre. With c3 played, Nc3 can't hit the queen yet.}
 4... Nf6 {Black develops.}
 (4... Nc6 {Black pressures d4.}
  5. Nf3 {Develops and guards d4.}
  5... Bg4 {Black pins the knight.}
  6. Be2 {Breaks the pin.}
  6... cxd4 {Black trades.}
  7. cxd4 {An isolated pawn, but open lines for your pieces.}
  7... e6 {Black solidifies.}
  8. Nc3 {Develops with tempo on the queen.}
  8... Qa5 {The queen steps aside.}
  9. O-O {Castle. Your development runs smoothly.})
 5. Nf3 {Develops.}
 5... Bg4 {Black pins the knight.}
 6. Be2 {Breaks the pin.}
 6... e6 {Black opens the f8-bishop.}
 7. O-O {Castle.}
 7... Nc6 {Black develops.}
 8. h3 {Question the bishop.}
 8... Bh5 {Black keeps the pin.}
 9. Be3 {Develops and protects d4.}
 9... cxd4 {Black trades.}
 10. cxd4 {Recapture.}
 10... Be7 {Black develops.}
 11. Nc3 {Develops with tempo on the queen.})
(2... Nc6 {Black develops with pressure on d4.}
 3. d4 {Build the centre anyway.}
 3... d5 {Black hits e4.}
 4. exd5 {Take. This reaches the ...d5 lines.}
 4... Qxd5 5. Nf3 Bg4 6. Be2 cxd4 7. cxd4 e6 8. Nc3 Qa5 9. O-O)
(2... e6 {Black prepares ...d5.}
 3. d4 {Take the centre.}
 3... d5 {Black challenges it.}
 4. exd5 {Take.}
 4... exd5 {Black recaptures with a pawn.}
 5. Nf3 {Develops.}
 5... Nc6 {Black develops.}
 6. Bb5 {Pins the knight and adds indirect pressure on d5.}
 6... Bd6 {Black develops.}
 7. dxc5 {Leave Black with an isolated d-pawn.}
 7... Bxc5 {Black recaptures.}
 8. O-O {Castle. The isolated d5-pawn is your long-term target.})
(2... d6 {Black keeps things flexible.}
 3. d4 {Take the centre.}
 3... cxd4 {Black trades.}
 4. cxd4 {Now you have the ideal two-pawn centre.}
 4... Nf6 {Black attacks e4.}
 5. Nc3 {Defends e4.}
 5... g6 {Black fianchettoes.}
 6. Nf3 {Develops.}
 6... Bg7 {Black develops.}
 7. Be2 {Develops and prepares to castle.}
 7... O-O {Black castles.}
 8. O-O {Castle. Your centre gives you more space.})
(2... g6 {Black fianchettoes.}
 3. d4 {Take the centre.}
 3... cxd4 {Black trades.}
 4. cxd4 {The ideal centre.}
 4... d5 {Black hits it at once.}
 5. exd5 {Take.}
 5... Qxd5 {Black recaptures.}
 6. Nf3 {Develops.}
 6... Bg7 {Black adds pressure to d4.}
 7. Nc3 {Develops with tempo on the queen.}
 7... Qa5 {The queen steps aside.}
 8. Bc4 {An active bishop aimed at f7.})
3. e5 {Kick the knight away from the centre.}
3... Nd5 {The knight takes a central post.}
4. d4 {Build the centre.}
4... cxd4 {Black trades.}
5. Nf3 {Develop before recapturing.}
5... Nc6 {Black adds pressure to d4.}
(5... e6 {Black solidifies.}
 6. cxd4 {Recapture.}
 6... d6 {Black undermines e5.}
 7. Bc4 {Pressure on the d5-knight.}
 7... Nc6 {Black develops.}
 8. O-O {Castle.}
 8... Be7 {Black develops.}
 9. Qe2 {Supports e5 and prepares Rd1.})
6. cxd4 {Recapture with a big centre.}
6... d6 {Black attacks e5.}
7. Bc4 {Pressure on the d5-knight.}
7... Nb6 {The knight retreats with tempo on your bishop.}
8. Bb5 {Pin the c6-knight, which is defending e5.}
8... dxe5 {Black takes.}
9. Nxe5 {Recapture with the knight.}
9... Bd7 {Black challenges your pinning bishop.}
10. Nxd7 {Take the bishop pair.}
10... Qxd7 {Black recaptures.}
11. Nc3 {Develops.}
11... e6 {Black opens the f8-bishop.}
12. O-O {Castle.}
12... Be7 {Black develops.}
13. Qg4 {Pressure on g7 and the kingside.} *`,
  },

  /* ---------------- Black ---------------- */
  {
    name: 'Sicilian Najdorf',
    color: 'b',
    desc: '1.e4 c5 with 5...a6 — the English Attack, 6.Bg5, 6.Be2 and every common 6th move, plus the anti-Sicilians.',
    pgn: `1. e4 {White takes the centre.}
1... c5 {The Sicilian. Fight for d4 from the side and create an unbalanced game.}
2. Nf3 {White prepares d4.}
(2. Nc3 {The Closed Sicilian.}
 2... Nc6 {Develop and control d4.}
 3. g3 {White fianchettoes.}
 3... g6 {Fianchetto too.}
 4. Bg2 {White develops.}
 4... Bg7 {The bishop controls d4 and the long diagonal.}
 5. d3 {White supports e4.}
 5... d6 {Control e5.}
 6. f4 {White plans a kingside pawn push.}
 6... e6 {Prepares ...Nge7, keeping the f-pawn free to move.}
 7. Nf3 {White develops.}
 7... Nge7 {The knight stays flexible and doesn't block your bishop.}
 8. O-O {White castles.}
 8... O-O {Castle. Your play is on the queenside with ...Rb8 and ...b5.})
(2. c3 {The Alapin.}
 2... Nf6 {Attack e4.}
 3. e5 {White kicks the knight.}
 3... Nd5 {A strong central post.}
 4. d4 {White builds a centre.}
 4... cxd4 {Trade before White can recapture with the c-pawn comfortably.}
 5. Nf3 {White develops.}
 5... Nc6 {Pressure on d4.}
 6. cxd4 {White recaptures.}
 6... d6 {Undermine e5.}
 7. Bc4 {White hits the d5-knight.}
 7... Nb6 {Retreat with tempo on the bishop.}
 8. Bb5 {White pins your c6-knight.}
 8... dxe5 {Take the pawn.}
 9. Nxe5 {White recaptures.}
 9... Bd7 {Challenge the pinning bishop.}
 10. Nxd7 {White takes your bishop.}
 10... Qxd7 {Recapture. Your position is solid.})
(2. d4 {The Smith-Morra idea.}
 2... cxd4 {Take.}
 3. c3 {White offers a pawn.}
 3... Nf6 {Decline by attacking e4.}
 4. e5 {White kicks the knight. This transposes to the Alapin.}
 4... Nd5 5. Nf3 Nc6 6. cxd4 d6)
2... d6 {Controls e5 and prepares ...Nf6 without allowing e5.}
3. d4 {White opens the centre.}
(3. Bb5+ {White avoids the main lines with a check.}
 3... Bd7 {Block and offer a trade.}
 4. Bxd7+ {White trades.}
 4... Qxd7 {Recapture. Your queen develops.}
 5. O-O {White castles.}
 5... Nc6 {Develop.}
 6. c3 {White prepares d4.}
 6... Nf6 {Develop and hit e4.}
 7. Re1 {White defends e4.}
 7... e6 {Solid. Prepare ...Be7.}
 8. d4 {White strikes.}
 8... cxd4 {Trade.}
 9. cxd4 {White recaptures.}
 9... d5 {Hit the centre.}
 10. e5 {White gains space.}
 10... Ne4 {A strong outpost for your knight.})
3... cxd4 {Trade a wing pawn for a centre pawn: the key Sicilian bargain.}
4. Nxd4 {White recaptures.}
4... Nf6 {Attack e4 and develop.}
5. Nc3 {White defends e4.}
5... a6 {The Najdorf. Control b5 and prepare ...e5 or ...b5.}
6. Be3 {The English Attack. White plans f3, Qd2, long castling and g4.}
(6. Bg5 {The sharpest line. Pin, then push f4.}
 6... e6 {Solid. Takes the sting out of e5 ideas.}
 7. f4 {White threatens e5.}
 7... Be7 {Break the pin.}
 8. Qf3 {White prepares long castling.}
 8... Qc7 {Queen to the c-file.}
 9. O-O-O {White castles long.}
 9... Nbd7 {Support f6 and e5.}
 10. g4 {White storms the kingside.}
 10... b5 {Counterattack on the queenside immediately.})
(6. Be2 {The quiet Opocensky.}
 6... e5 {Kick the knight and grab space.}
 7. Nb3 {White retreats.}
 7... Be7 {Develop.}
 8. O-O {White castles.}
 8... O-O {Castle.}
 9. Be3 {White develops.}
 9... Be6 {Control d5, the key square.})
(6. Bc4 {The Fischer-Sozin. The bishop eyes e6 and f7.}
 6... e6 {Blunt the bishop.}
 7. Bb3 {White pre-empts ...b5 with tempo.}
 7... b5 {Queenside space anyway.}
 8. O-O {White castles.}
 8... Be7 {Develop.}
 9. Qf3 {White brings the queen toward your kingside.}
 9... Qc7 {Develop and control e5.}
 10. Qg3 {White aims at g7.}
 10... O-O {Castle. The bishop and king cover g7.})
(6. f3 {White heads for the English Attack setup.}
 6... e5 {Grab space and kick the knight.}
 7. Nb3 {White retreats.}
 7... Be6 {Control d5. This reaches the main line.}
 8. Be3 Be7 9. Qd2 O-O 10. O-O-O Nbd7)
(6. h3 {White prepares g4.}
 6... e5 {Kick the knight.}
 7. Nde2 {White retreats.}
 7... h5 {Stop g4 cold.}
 8. g3 {White plans Bg2.}
 8... Be6 {Develop and control d5.}
 9. Bg2 {White develops.}
 9... b5 {Queenside expansion.})
(6. g3 {The fianchetto line.}
 6... e5 {Kick the knight.}
 7. Nde2 {White retreats.}
 7... Be7 {Develop.}
 8. Bg2 {White develops.}
 8... b5 {Queenside space.}
 9. O-O {White castles.}
 9... Nbd7 {Develop toward b6 or c5.})
6... e5 {Kick the knight and grab central space.}
7. Nb3 {White retreats.}
(7. Nf3 {White keeps the knight central.}
 7... Be7 {Develop.}
 8. Bc4 {White eyes d5 and f7.}
 8... O-O {Castle.}
 9. O-O {White castles.}
 9... Qc7 {Hit the c4-bishop.}
 10. Bb3 {White retreats.}
 10... Be6 {Trade off White's best bishop.})
(7. Nde2 {White retreats toward g3.}
 7... Be7 {Develop.}
 8. g3 {White fianchettoes.}
 8... O-O {Castle.}
 9. Bg2 {White develops.}
 9... b5 {Queenside expansion.})
7... Be6 {Control d5, the most important square in this structure.}
8. f3 {White supports e4 and prepares g4.}
(8. Qd2 {White changes the move order.}
 8... Be7 {Develop. After f3 this reaches the main line.}
 9. f3 O-O)
8... Be7 {Develop.}
9. Qd2 {White prepares long castling.}
9... O-O {Castle.}
10. O-O-O {White castles long. The race is on.}
10... Nbd7 {Develop, supporting ...b5 and ...Nb6.}
11. g4 {White storms the kingside.}
11... b5 {Your pawn storm starts.}
12. g5 {White kicks the f6-knight.}
12... b4 {Race to attack the opposite kings.} *`,
  },
  {
    name: 'French Defence',
    color: 'b',
    desc: '1.e4 e6 — the Classical 3...Nf6 against 3.Nc3, and solid answers to the Advance, Tarrasch and Exchange.',
    pgn: `1. e4 {White takes the centre.}
1... e6 {The French. Prepare ...d5 with solid support.}
2. d4 {White builds the centre.}
(2. d3 {A King's Indian Attack setup.}
 2... d5 {Claim the centre.}
 3. Nd2 {White supports e4.}
 3... Nf6 {Develop.}
 4. Ngf3 {White develops.}
 4... c5 {Grab queenside space.}
 5. g3 {White fianchettoes.}
 5... Nc6 {Develop.}
 6. Bg2 {White develops.}
 6... Be7 {Develop.}
 7. O-O {White castles.}
 7... O-O {Castle. Your play is on the queenside with ...b5.})
2... d5 {Challenge e4.}
3. Nc3 {White defends e4.}
(3. e5 {The Advance. White gains space.}
 3... c5 {Strike the base of the chain at once.}
 4. c3 {White supports d4.}
 4... Nc6 {Pressure on d4.}
 5. Nf3 {White defends d4.}
 5... Qb6 {More pressure on d4 and on b2.}
 6. a3 {White prepares b4.}
 (6. Be2 {White develops.}
  6... cxd4 {Open the c-file.}
  7. cxd4 {White recaptures.}
  7... Nh6 {The knight heads for f5 to hit d4.}
  8. b3 {White prepares Bb2 to guard d4.}
  8... Nf5 {A fourth attacker on d4.}
  9. Bb2 {White defends d4.}
  9... Bb4+ {Disrupt White's king.}
  10. Kf1 {White gives up castling.}
  10... h5 {Stop g4 from kicking your knight.})
 6... c4 {Lock the queenside and gain space.}
 7. Nbd2 {White develops.}
 7... Na5 {Heading for b3 and the light squares on the queenside.})
(3. Nd2 {The Tarrasch. White avoids the ...Bb4 pin.}
 3... c5 {Hit d4 immediately.}
 4. exd5 {White trades.}
 (4. Ngf3 {White develops.}
  4... cxd4 {Trade.}
  5. exd5 {White trades. Recapturing with the queen reaches the main line.}
  5... Qxd5 6. Bc4 Qd6 7. O-O Nf6 8. Nb3 Nc6 9. Nbxd4 Nxd4 10. Nxd4 a6)
 4... Qxd5 {Recapture with the queen to avoid an isolated pawn.}
 5. Ngf3 {White develops.}
 5... cxd4 {Trade.}
 6. Bc4 {White gains time on your queen.}
 6... Qd6 {The queen stays central.}
 7. O-O {White castles.}
 7... Nf6 {Develop.}
 8. Nb3 {White goes after d4.}
 8... Nc6 {Defend d4.}
 9. Nbxd4 {White regains the pawn.}
 9... Nxd4 {Trade.}
 10. Nxd4 {White recaptures.}
 10... a6 {Keep White's pieces off b5 and prepare ...b5.}
 11. Re1 {White develops.}
 11... Qc7 {Pressure on the c4-bishop.})
(3. exd5 {The Exchange. White goes for symmetry.}
 3... exd5 {Recapture. Your c8-bishop is free now.}
 4. Nf3 {White develops.}
 4... Nf6 {Develop.}
 5. Bd3 {White develops.}
 5... Bd6 {Develop.}
 6. O-O {White castles.}
 6... O-O {Castle.}
 7. Bg5 {White pins your knight.}
 7... Bg4 {Pin back.})
3... Nf6 {The Classical. Attack e4 again.}
4. e5 {White kicks the knight and gains space.}
(4. Bg5 {White pins.}
 4... Be7 {Break the pin.}
 5. e5 {White kicks the knight.}
 5... Nfd7 {Retreat.}
 6. Bxe7 {White trades.}
 6... Qxe7 {Recapture.}
 7. f4 {White supports e5.}
 7... O-O {Castle.}
 8. Nf3 {White develops.}
 8... c5 {Hit the chain.}
 9. dxc5 {White gives up the d4-pawn's post.}
 9... Nc6 {Develop, planning to recapture on c5.}
 10. Bd3 {White develops.}
 10... f6 {Hit the head of the chain.})
4... Nfd7 {Retreat and prepare ...c5.}
5. f4 {White supports e5.}
(5. Nce2 {White prepares c3.}
 5... c5 {Hit d4.}
 6. c3 {White supports d4.}
 6... Nc6 {Pressure on d4.}
 7. f4 {White supports e5.}
 7... Qb6 {Pressure on d4 and b2.}
 8. Nf3 {White defends.}
 8... f6 {Undermine the chain from the other side.})
5... c5 {Hit the base of White's chain.}
6. Nf3 {White supports d4.}
6... Nc6 {Pressure on d4.}
7. Be3 {White defends d4.}
7... cxd4 {Trade.}
8. Nxd4 {White recaptures.}
8... Bc5 {Develop with pressure on d4.}
9. Qd2 {White prepares long castling.}
9... O-O {Castle.}
10. O-O-O {White castles long.}
10... a6 {Your queenside pawns roll next.} *`,
  },
  {
    name: 'Caro-Kann',
    color: 'b',
    desc: '1.e4 c6 — the Classical 4...Bf5, with the Advance, Exchange and Two Knights covered.',
    pgn: `1. e4 {White takes the centre.}
1... c6 {The Caro-Kann. Prepare ...d5 while keeping the light-squared bishop free.}
2. d4 {White builds the centre.}
(2. Nc3 {White develops first.}
 2... d5 {Challenge e4.}
 3. Nf3 {The Two Knights.}
 3... Bg4 {Pin the knight that guards e5 and d4.})
(2. Nf3 {White develops first.}
 2... d5 {Challenge e4.}
 3. Nc3 Bg4)
2... d5 {Challenge e4.}
3. Nc3 {White defends e4.}
(3. e5 {The Advance. White gains space.}
 3... Bf5 {Develop the bishop outside the chain before ...e6.}
 4. Nf3 {White develops.}
 4... e6 {Build the chain.}
 5. Be2 {White develops.}
 5... c5 {Hit the base at d4.})
(3. exd5 {The Exchange.}
 3... cxd5 {Recapture. The structure is symmetrical.}
 4. Bd3 {White develops.}
 4... Nc6 {Develop.}
 5. c3 {White supports d4.}
 5... Nf6 {Develop. ...Bg4 comes next.})
(3. Nd2 {White avoids pins on the c3-knight.}
 3... dxe4 {Trade in the centre. After Nxe4 this is the main line.}
 4. Nxe4 Bf5 5. Ng3 Bg6)
3... dxe4 {Trade the centre pawn.}
4. Nxe4 {White recaptures.}
4... Bf5 {The Classical. Develop with tempo on the knight.}
5. Ng3 {White kicks the bishop.}
5... Bg6 {Retreat.}
6. h4 {White threatens h5 to trap the bishop.}
6... h6 {Give the bishop a retreat on h7.}
7. Nf3 {White develops.}
7... Nd7 {Develop and stop Ne5.}
8. h5 {White gains space.}
8... Bh7 {Retreat.}
9. Bd3 {White offers a bishop trade.}
9... Bxd3 {Trade.}
10. Qxd3 {White recaptures.}
10... e6 {Solid. ...Ngf6, ...Be7 and castling come next.} *`,
  },
  {
    name: 'Scandinavian',
    color: 'b',
    desc: '1.e4 d5 2.exd5 Qxd5 — the ...Qa5 main line with ...c6 and ...Bf5, fast development and few surprises.',
    pgn: `1. e4 {White takes the centre.}
1... d5 {The Scandinavian. Hit e4 at once.}
2. exd5 {White takes.}
(2. e5 {White advances instead.}
 2... Bf5 {Develop the bishop outside the chain.}
 3. d4 {White supports e5.}
 3... e6 {A solid pawn chain.}
 4. c3 {White supports d4.}
 4... c5 {Hit the base.})
(2. Nc3 {White defends e4.}
 2... d4 {Gain space with tempo on the knight.}
 3. Nce2 {White retreats.}
 3... e5 {Build a big centre.}
 4. Ng3 {White develops.}
 4... Be6 {Develop.}
 5. Nf3 {White develops.}
 5... Nd7 {Develop, supporting e5.})
2... Qxd5 {Recapture with the queen.}
3. Nc3 {White gains time on your queen.}
(3. Nf3 {White develops.}
 3... Nf6 {Develop.}
 4. d4 {White builds.}
 4... Bf5 {Develop actively.}
 5. c4 {White hits your queen.}
 5... Qd8 {Retreat. The queen is safe at home.}
 6. Nc3 {White develops.}
 6... e6 {Solid.}
 7. Be2 {White develops.}
 7... c6 {A solid structure.}
 8. O-O {White castles.}
 8... Be7 {Develop and castle next.})
(3. d4 {White builds.}
 3... Nf6 {Develop. After Nf3 this is the 3.Nf3 line.}
 4. Nf3 Bf5 5. c4 Qd8)
3... Qa5 {The queen goes to a safe, active square.}
4. d4 {White builds.}
(4. Nf3 {White develops.}
 4... Nf6 {Develop. After d4 this is the main line.}
 5. d4 c6)
(4. Bc4 {White aims at f7.}
 4... Nf6 {Develop.}
 5. Nf3 {White develops.}
 5... c6 {Give the queen a retreat and blunt the bishop.}
 6. O-O {White castles.}
 6... Bg4 {Pin the knight.}
 7. h3 {White questions the bishop.}
 7... Bh5 {Keep the pin.}
 8. d3 {White supports e4.}
 8... e6 {Solid.})
4... Nf6 {Develop.}
5. Nf3 {White develops.}
(5. Bc4 {White develops.}
 5... c6 {Give the queen a retreat. After Nf3 this is the main line.}
 6. Nf3 Bf5 7. Bd2 e6 8. Qe2 Bb4 9. O-O-O Nbd7)
5... c6 {Give the queen a retreat square.}
6. Bc4 {White develops.}
6... Bf5 {Develop actively.}
7. Bd2 {White develops, eyeing your queen on a5.}
7... e6 {Solid.}
8. Qe2 {White prepares long castling.}
8... Bb4 {Pin the knight.}
9. O-O-O {White castles long.}
9... Nbd7 {Develop.}
10. a3 {White questions the bishop.}
10... Bxc3 {Trade.}
11. Bxc3 {White recaptures.}
11... Qc7 {The queen is safe and your position is solid.} *`,
  },
  {
    name: "Queen's Gambit Declined",
    color: 'b',
    desc: '1.d4 d5 2.c4 e6 — the Tartakower setup against Bg5, with the Exchange and London-style lines.',
    pgn: `1. d4 {White takes the centre.}
1... d5 {Claim an equal share.}
2. c4 {The Queen's Gambit.}
(2. Nf3 {White develops first.}
 2... Nf6 {Develop.}
 3. c4 {White enters Queen's Gambit territory.}
 3... e6)
(2. Bf4 {The London.}
 2... Nf6 {Develop.}
 3. e3 {White builds the pawn triangle.}
 3... c5 {Hit d4 at once.})
2... e6 {Decline the gambit and hold d5 firmly.}
3. Nc3 {White pressures d5.}
(3. Nf3 {White develops.}
 3... Nf6 {Develop.}
 4. Nc3 Be7)
3... Nf6 {Develop.}
4. Bg5 {White pins.}
(4. cxd5 {The Exchange.}
 4... exd5 {Recapture. Your c8-bishop is freed.}
 5. Bg5 {White pins.}
 5... Be7 {Break the pin.})
(4. Nf3 {White develops.}
 4... Be7 {Develop.}
 5. Bf4 {The bishop goes outside the chain.}
 5... O-O {Castle.})
4... Be7 {Break the pin.}
5. e3 {White develops.}
5... O-O {Castle.}
6. Nf3 {White develops.}
6... h6 {Ask the bishop.}
7. Bh4 {White keeps the pin.}
7... b6 {The Tartakower System. ...Bb7 comes next.} *`,
  },
  {
    name: 'Slav Defence',
    color: 'b',
    desc: '1.d4 d5 2.c4 c6 — the main line 4...dxc4 5.a4 Bf5, plus the Exchange Slav and quiet e3 systems.',
    pgn: `1. d4 {White takes the centre.}
1... d5 {Claim an equal share.}
2. c4 {The Queen's Gambit.}
(2. Nf3 {White develops.}
 2... Nf6 {Develop.}
 3. Bf4 {The London.}
 3... Bf5 {Mirror White and put the bishop outside the chain.}
 4. e3 {White builds.}
 4... e6 {Solid.}
 5. c4 {White hits d5.}
 5... c6 {A solid Slav setup.}
 6. Nc3 {White develops.}
 6... Nbd7 {Develop.}
 7. Qb3 {White attacks b7.}
 7... Qb6 {Offer a queen trade.})
(2. Bf4 {The London.}
 2... Nf6 {Develop.}
 3. e3 {White builds.}
 3... Bf5 {Develop outside the chain.}
 4. c4 {White hits d5.}
 4... e6 {Solid.}
 5. Nc3 {White develops.}
 5... c6 {Solid.}
 6. Qb3 {White attacks b7.}
 6... Qb6 {Offer a queen trade.})
2... c6 {The Slav. Support d5 while keeping the c8-bishop free.}
3. Nf3 {White develops.}
(3. Nc3 {White develops.}
 3... Nf6 {Develop.}
 4. e3 {White builds solidly.}
 4... Bf5 {Develop before ...e6 shuts the bishop in.}
 5. Nf3 {White develops.}
 5... e6 {Solid.}
 6. Nh4 {White chases the bishop.}
 6... Bg6 {Retreat.}
 7. Nxg6 {White takes the bishop pair.}
 7... hxg6 {Recapture. The h-file opens for your rook.}
 8. Bd3 {White develops.}
 8... Nbd7 {Develop.})
(3. cxd5 {The Exchange Slav.}
 3... cxd5 {Recapture.}
 4. Nc3 {White develops.}
 4... Nf6 {Develop.}
 5. Bf4 {White develops.}
 5... Nc6 {Develop.}
 6. e3 {White builds.}
 6... Bf5 {Develop outside the chain.}
 7. Nf3 {White develops.}
 7... e6 {Solid.}
 8. Bb5 {White pins.}
 8... Nd7 {Prepare ...Be7 and castling.})
3... Nf6 {Develop.}
4. Nc3 {White develops.}
(4. e3 {White builds.}
 4... Bf5 {Develop before ...e6. After Nc3 this is the 3.Nc3 line.}
 5. Nc3 e6 6. Nh4 Bg6 7. Nxg6 hxg6 8. Bd3 Nbd7)
(4. Qc2 {White protects c4.}
 4... dxc4 {Take anyway.}
 5. Qxc4 {White recaptures.}
 5... Bf5 {Develop.}
 6. Nc3 {White develops.}
 6... e6 {Solid.}
 7. g3 {White fianchettoes.}
 7... Nbd7 {Develop.})
4... dxc4 {Take the pawn, planning ...Bf5.}
5. a4 {White stops ...b5.}
(5. e3 {White plans Bxc4.}
 5... b5 {Hold the pawn.}
 6. a4 {White attacks b5.}
 6... b4 {Gain space with tempo.}
 7. Na2 {White retreats.}
 7... e6 {Prepare ...Be7.}
 8. Bxc4 {White regains the pawn.}
 8... Be7 {Develop.}
 9. O-O {White castles.}
 9... O-O {Castle.})
(5. e4 {The Geller Gambit.}
 5... b5 {Hold the pawn.}
 6. e5 {White kicks the knight.}
 6... Nd5 {A central knight.}
 7. a4 {White attacks b5.}
 7... e6 {Solid.}
 8. axb5 {White trades.}
 8... Nxc3 {Trade.}
 9. bxc3 {White recaptures.}
 9... cxb5 {Keep your extra pawn.}
 10. Ng5 {White eyes h7 and e6.}
 10... Bb7 {Develop and guard the long diagonal.})
5... Bf5 {Develop the bishop outside the chain.}
6. e3 {White prepares Bxc4.}
(6. Ne5 {White goes after c4.}
 6... e6 {Solid.}
 7. f3 {White prepares e4.}
 7... c5 {Strike the centre.}
 8. e4 {White takes space.}
 8... Bg6 {Retreat.}
 9. Be3 {White develops.}
 9... cxd4 {Trade.}
 10. Qxd4 {White recaptures.}
 10... Qxd4 {Trade queens.}
 11. Bxd4 {White recaptures.}
 11... Nfd7 {Challenge the e5-knight.})
6... e6 {Solid.}
7. Bxc4 {White regains the pawn.}
7... Bb4 {Pin the knight.}
8. O-O {White castles.}
8... Nbd7 {Develop.}
9. Qe2 {White prepares e4.}
9... Bg6 {Pre-empt e4 by getting the bishop out of its way.}
10. e4 {White pushes.}
10... O-O {Castle.}
11. Bd3 {White supports e4.}
11... Bh5 {Pin the f3-knight.} *`,
  },
  {
    name: "King's Indian Defence",
    color: 'b',
    desc: '1.d4 Nf6 2.c4 g6 — the Mar del Plata kingside attack, plus the Sämisch, Four Pawns, Averbakh and Fianchetto.',
    pgn: `1. d4 {White takes the centre.}
1... Nf6 {Flexible development.}
2. c4 {White takes space.}
(2. Nf3 {White develops.}
 2... g6 {Fianchetto.}
 3. g3 {White fianchettoes too.}
 3... Bg7 {Develop.}
 4. Bg2 {White develops.}
 4... O-O {Castle.}
 5. O-O {White castles.}
 5... d6 {Prepare ...e5. After c4 this reaches the Fianchetto line.}
 6. c4 Nbd7 7. Nc3 e5 8. e4 c6 9. h3 Qb6)
(2. Bf4 {The London.}
 2... g6 {Fianchetto.}
 3. e3 {White builds.}
 3... Bg7 {Develop.}
 4. Nf3 {White develops.}
 4... O-O {Castle.}
 5. Be2 {White develops.}
 5... d6 {Prepare ...c5 or ...e5.}
 6. h3 {A retreat square for the bishop.}
 6... c5 {Hit d4.}
 7. c3 {White holds d4.}
 7... Qb6 {Pressure on b2.})
2... g6 {The King's Indian. Fianchetto and let White build a centre you can attack.}
3. Nc3 {White develops.}
(3. Nf3 {White develops.}
 3... Bg7 {Develop.}
 4. g3 {The Fianchetto Variation.}
 4... O-O {Castle.}
 5. Bg2 {White develops.}
 5... d6 {Prepare ...e5.}
 6. O-O {White castles.}
 6... Nbd7 {Support ...e5.}
 7. Nc3 {White develops.}
 7... e5 {Strike the centre.}
 8. e4 {White claims the centre.}
 8... c6 {Control d5 and prepare ...Qb6.}
 9. h3 {White stops ...Ng4.}
 9... Qb6 {Pressure on d4 and b2.})
3... Bg7 {Develop.}
4. e4 {White builds a big centre.}
4... d6 {Stop e5 and prepare ...e5 yourself.}
5. Nf3 {The Classical.}
(5. f3 {The Sämisch.}
 5... O-O {Castle.}
 6. Be3 {White develops.}
 6... e5 {Strike the centre.}
 7. d5 {White closes it.}
 (7. Nge2 {White develops.}
  7... c6 {Prepare ...b5 or ...d5.}
  8. Qd2 {White connects.}
  8... Nbd7 {Develop.})
 7... Nh5 {Prepare ...f5.}
 8. Qd2 {White prepares long castling.}
 8... f5 {Your standard kingside break.}
 9. O-O-O {White castles long.}
 9... Nd7 {Develop, supporting the kingside.})
(5. f4 {The Four Pawns Attack.}
 5... O-O {Castle.}
 6. Nf3 {White develops.}
 6... c5 {Hit the huge centre.}
 7. d5 {White advances.}
 7... e6 {Undermine d5.}
 8. Be2 {White develops.}
 8... exd5 {Open the e-file.}
 9. cxd5 {White recaptures.}
 9... Re8 {Pressure on e4.})
(5. Be2 {White develops.}
 5... O-O {Castle.}
 6. Bg5 {The Averbakh.}
 6... c5 {Hit d4.}
 7. d5 {White advances.}
 7... e6 {Undermine d5.}
 8. Qd2 {White connects.}
 8... exd5 {Open lines.}
 9. exd5 {White recaptures.}
 9... Re8 {Take the open e-file.})
(5. h3 {The Makogonov.}
 5... O-O {Castle.}
 6. Bg5 {White pins.}
 6... c5 {Hit d4.}
 7. d5 {White advances.}
 7... e6 {Undermine d5.}
 8. Bd3 {White develops.}
 8... exd5 {Open lines.}
 9. cxd5 {White recaptures.}
 9... Re8 {Take the e-file.})
5... O-O {Castle.}
6. Be2 {White develops.}
6... e5 {Strike the centre.}
7. O-O {White castles.}
(7. d5 {The Petrosian.}
 7... a5 {Stop b4.}
 8. Bg5 {White pins.}
 8... h6 {Ask the bishop.}
 9. Bh4 {White keeps the pin.}
 9... Na6 {Heading for c5.})
(7. dxe5 {The Exchange.}
 7... dxe5 {Recapture.}
 8. Qxd8 {White trades queens.}
 8... Rxd8 {Recapture.}
 9. Bg5 {White pins.}
 9... Re8 {Unpin.}
 10. Nd5 {White centralises.}
 10... Nxd5 {Trade.}
 11. cxd5 {White recaptures.}
 11... c6 {Challenge d5.})
(7. Be3 {The Gligoric.}
 7... Ng4 {Hit the bishop.}
 8. Bg5 {White keeps the bishop.}
 8... f6 {Kick it again.}
 9. Bh4 {White retreats.}
 9... Nc6 {Develop and pressure d4.})
7... Nc6 {Pressure on d4.}
8. d5 {White closes the centre.}
8... Ne7 {Reroute toward the kingside.}
9. Ne1 {White heads for d3 to support c5.}
(9. b4 {The Bayonet.}
 9... Nh5 {Prepare ...f5.}
 10. Re1 {White develops.}
 10... f5 {Kingside break.}
 11. Ng5 {White eyes e6.}
 11... Nf6 {Cover e6 and d5.}
 12. f3 {White supports e4.}
 12... Kh8 {Step off the g8-a2 diagonal.})
(9. Nd2 {White heads for c4.}
 9... a5 {Slow down White's queenside.}
 10. a3 {White prepares b4.}
 10... Nd7 {Prepare ...f5.}
 11. Rb1 {White supports b4.}
 11... f5 {Kingside break.}
 12. b4 {White pushes.}
 12... Kh8 {Off the diagonal. Prepare ...Ng8 or ...b6.})
9... Nd7 {Clear the way for the f-pawn.}
10. Be3 {White develops.}
(10. f3 {White supports e4.}
 10... f5 {Kingside break. After Be3 this is the main line.}
 11. Be3 f4 12. Bf2 g5)
10... f5 {Kingside break.}
11. f3 {White supports e4.}
11... f4 {Gain space and fix White's kingside.}
12. Bf2 {White retreats.}
12... g5 {Start the pawn storm.}
13. Nd3 {White prepares c5.}
13... Nf6 {Reroute toward the attack.}
14. c5 {White breaks on the queenside.}
14... Ng6 {The g-pawn storm is on.} *`,
  },
  {
    name: 'Nimzo-Indian',
    color: 'b',
    desc: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 — Rubinstein, Classical, Sämisch and more, with a Queen’s Indian and Catalan setup if White avoids 3.Nc3.',
    pgn: `1. d4 {White takes the centre.}
1... Nf6 {Flexible development.}
2. c4 {White takes space.}
(2. Nf3 {White develops.}
 2... e6 {Solid.}
 3. Bf4 {The London.}
 3... c5 {Hit d4.}
 4. e3 {White builds.}
 4... Nc6 {Pressure on d4.}
 5. c3 {White holds d4.}
 5... d5 {Claim the centre.}
 6. Nbd2 {White develops.}
 6... Bd6 {Challenge the bishop.}
 7. Bg3 {White keeps it.}
 7... O-O {Castle.})
2... e6 {Prepare ...Bb4.}
3. Nc3 {White prepares e4.}
(3. Nf3 {White avoids the Nimzo.}
 3... b6 {The Queen's Indian. Fianchetto to control e4.}
 4. g3 {White fianchettoes.}
 4... Ba6 {Hit c4.}
 5. b3 {White defends c4.}
 5... Bb4+ {Disrupt with a check.}
 6. Bd2 {White blocks.}
 6... Be7 {Retreat. White's d2-bishop is now misplaced.}
 7. Bg2 {White develops.}
 7... c6 {Prepare ...d5.})
(3. g3 {The Catalan.}
 3... d5 {Claim the centre.}
 4. Bg2 {White develops.}
 4... Be7 {Develop.}
 5. Nf3 {White develops.}
 5... O-O {Castle.}
 6. O-O {White castles.}
 6... dxc4 {Grab the pawn.}
 7. Qc2 {White will regain it soon.}
 7... a6 {Prepare ...b5.}
 8. a4 {White stops ...b5.}
 8... Bd7 {Head for c6 to fight the Catalan bishop.})
3... Bb4 {The Nimzo-Indian. Pin the knight and fight for e4.}
4. e3 {The Rubinstein.}
(4. Qc2 {The Classical.}
 4... O-O {Castle.}
 5. a3 {White asks the question.}
 5... Bxc3+ {Take.}
 6. Qxc3 {White keeps the pawns intact.}
 6... b6 {Fianchetto.}
 7. Bg5 {White pins.}
 7... Bb7 {Control e4.}
 8. f3 {White supports e4.}
 8... h6 {Ask the bishop.}
 9. Bh4 {White keeps the pin.}
 9... d5 {Strike the centre.})
(4. a3 {The Sämisch.}
 4... Bxc3+ {Take.}
 5. bxc3 {White gets the bishop pair but doubled pawns.}
 5... c5 {Pressure the doubled pawns.}
 6. e3 {White builds.}
 6... Nc6 {Develop.}
 7. Bd3 {White develops.}
 7... O-O {Castle.}
 8. Ne2 {White prepares e4.}
 8... b6 {Prepare ...Ba6 to hit c4.}
 9. e4 {White takes the centre.}
 9... Ne8 {Sidestep a Bg5 pin. ...f5 comes next.})
(4. f3 {White prepares e4.}
 4... d5 {Stop e4.}
 5. a3 {White questions the bishop.}
 5... Be7 {Retreat.}
 6. e4 {White pushes.}
 6... dxe4 {Take.}
 7. fxe4 {White recaptures.}
 7... e5 {Strike back.}
 8. d5 {White advances.}
 8... Bc5 {An active bishop.})
(4. Bg5 {The Leningrad.}
 4... h6 {Ask the bishop.}
 5. Bh4 {White keeps the pin.}
 5... c5 {Hit d4.}
 6. d5 {White advances.}
 6... d6 {Solid.}
 7. e3 {White develops.}
 7... Bxc3+ {Double White's pawns.}
 8. bxc3 {White recaptures.}
 8... e5 {Lock the dark squares.})
(4. Nf3 {White develops.}
 4... O-O {Castle.}
 5. Bg5 {White pins.}
 5... c5 {Hit d4.}
 6. e3 {White builds.}
 6... cxd4 {Trade.}
 7. exd4 {White recaptures.}
 7... h6 {Ask the bishop.}
 8. Bh4 {White keeps the pin.}
 8... d5 {Strike the centre.})
(4. g3 {White fianchettoes.}
 4... O-O {Castle.}
 5. Bg2 {White develops.}
 5... d5 {Take the centre.}
 6. Nf3 {White develops.}
 6... dxc4 {Grab the pawn.}
 7. O-O {White castles.}
 7... Nc6 {Develop, eyeing ...Rb8 and ...b5.})
4... O-O {Castle.}
5. Bd3 {White develops.}
(5. Nge2 {White avoids doubled pawns.}
 5... d5 {Take the centre.}
 6. a3 {White questions the bishop.}
 6... Be7 {Retreat.}
 7. cxd5 {White trades.}
 7... exd5 {Recapture.}
 8. g3 {White fianchettoes.}
 8... c6 {Solid.})
(5. Nf3 {White develops.}
 5... d5 {Take the centre. After Bd3 this is the main line.}
 6. Bd3 c5 7. O-O Nc6)
5... d5 {Claim the centre.}
6. Nf3 {White develops.}
6... c5 {Hit d4.}
7. O-O {White castles.}
7... Nc6 {Develop.}
8. a3 {White questions the bishop.}
8... Bxc3 {Take.}
9. bxc3 {White recaptures.}
9... dxc4 {Open the position.}
10. Bxc4 {White recaptures.}
10... Qc7 {Aiming for ...e5.} *`,
  },
];

// Notes version of the library above. Repertoires added from an older library are upgraded on load.
window.LIBRARY_NOTES_VERSION = 2;
// Short notes from the previous library version, which the upgrade may safely replace.
window.LIBRARY_OLD_NOTES = [
  "The Giuoco Piano.",
  "Two Knights Defence.",
  "Gaining space on the queenside.",
  "The Berlin.",
  "Old Steinitz.",
  "The Open Spanish.",
  "Sidesteps the Marshall Attack.",
  "The Chigorin.",
  "The Breyer.",
  "The knight reroutes to f1-g3.",
  "A small but lasting endgame edge.",
  "Grabbing space and supporting e5.",
  "The classic Stonewall-style attack.",
  "Queen's Gambit Accepted.",
  "The Slav.",
  "Albin Countergambit.",
  "Preparing the central e4 break.",
  "Closed Sicilian.",
  "Alapin.",
  "Smith-Morra, declined by transposing to the Alapin.",
  "Fischer-Sozin.",
  "Race to attack the opposite kings.",
  "King's Indian Attack.",
  "Advance.",
  "Tarrasch.",
  "Exchange.",
  "Queenside pawns roll next.",
  "Advance Variation.",
  "The Classical Variation.",
  "Tartakower System.",
  "Exchange Slav.",
  "Sämisch.",
  "Four Pawns Attack.",
  "Averbakh.",
  "The g-pawn storm is on.",
  "Queen's Indian.",
  "Catalan.",
  "Classical.",
  "Leningrad.",
  "Aiming for ...e5."
];
// Names used by the very first sample repertoires.
window.LIBRARY_OLD_NAMES = {
  'Italian Game (White)': 'Italian Game',
  'Caro-Kann (Black)': 'Caro-Kann',
  "Queen's Gambit Declined (Black vs 1.d4)": "Queen's Gambit Declined",
};
