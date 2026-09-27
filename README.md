# Opening Trainer

A free, open-source chess opening repertoire builder and trainer, with a **Screen Coach** that watches the game on your screen and shows the best moves. Build your lines on the board, then drill them with spaced repetition. Nothing is behind a paywall.

## Screen Coach

Open the **Coach** tab, press **Start watching** and share the browser tab or window where you play (Chess.com, Lichess, or any site or program that shows a 2D board).

- **Reads the board from the screen.** It finds the board automatically. The first time, show the starting position so it can learn your site's piece set. After that it follows the game move by move, including when you play Black.
- **Best moves from Stockfish 18**, running in your browser: the top three moves as arrows, an evaluation bar, and the main line.
- **Plain-language reasons:** wins material, forks, threats, protecting attacked pieces, development, central pawns, fianchettos, passed pawns, open files, and "only move" warnings. It also warns you when your opponent threatens to win one of your pieces.
- **Opening help:** the opening's name and ECO code (3,800 named lines), the book moves from the current position, the moves from your repertoires and the built-in library with their notes, and a warning when your opponent leaves your preparation.
- **Hint mode** tells you only which piece to move. **Say my best move out loud** reads the move aloud. **Pop out** (Chrome/Edge) keeps a small coach window on top of your game.
- You can also **open or paste a screenshot** instead of sharing the screen.

> **Fair play:** using engine help in rated games against other people is cheating on every chess site and gets accounts closed. Use the coach against bots, on analysis boards, in unrated games where your opponent agrees, and to review games.

The coach needs the page to be served over http(s), because the engine runs in a Web Worker (see **Run it**). Keep the coach window visible next to your game, or use **Pop out**.

## Features

- **Unlimited repertoires** for White or Black
- **Build on the board:** play moves for both sides and they're added. Jump between branches, delete lines, and write notes for any position.
- **Transpositions are merged:** positions are matched by the board, not by move order.
- **PGN import/export**, including variations and comments. Import from books, courses, or Lichess studies.
- **Learn mode:** walks you through new lines and shows each new move with an arrow.
- **Spaced-repetition review:** each of your moves is scheduled SM-2 style (1 day → 3 days → growing intervals). Moves you miss come back in minutes and get retried in the same session.
- **Drill all:** quiz the whole repertoire without changing your schedule.
- **Move-by-move notes:** every move in the library has a short explanation. Learn mode shows why a new move is played before you play it; reviews show it after you answer.
- **Opening library:** 14 ready-made repertoires you can add with one click and then edit. As White: Italian, Ruy Lopez, Scotch, London, Queen's Gambit and the Alapin vs the Sicilian. As Black: Sicilian Najdorf, French, Caro-Kann, Scandinavian, Queen's Gambit Declined, Slav, King's Indian and Nimzo-Indian.
- **Backup/restore** everything as a JSON file.
- **Sound effects** for moves, captures, checks and checkmate, a ding when you finish a line, and a fanfare when you finish a session. A volume slider and mute button sit in the top bar.
- Works offline, on desktop or mobile, in light or dark mode.

## Run it

It's a static site with no build step and no server.

- **Easiest:** open `index.html` in your browser. The opening trainer works this way. The Screen Coach needs a local server instead: run `python3 -m http.server` in this folder and open <http://localhost:8000>.
- **Or host it for free** on GitHub Pages: repo Settings → Pages → Deploy from branch → pick the branch and `/ (root)`.

Your data lives in your browser's localStorage. Use **Export backup** to move it between devices or browsers.

## Project layout

```
index.html        app shell
style.css         styles
js/sounds.js      synthesised sound effects (Web Audio)
js/board.js       interactive board (click and drag, arrows, promotion)
js/repertoire.js  data model, spaced repetition, PGN import/export, storage
js/trainer.js     training session logic
js/app.js         views and routing
js/samples.js     opening library
js/pieces.js      piece artwork
js/vision.js      screen reading: finds the board and recognises the pieces
js/engine.js      Stockfish wrapper (UCI in a Web Worker)
js/coach.js       game tracking, move explanations, opening lookups
js/coach-view.js  Screen Coach view
vendor/chess.js   chess.js 1.4.0 (move generation and validation)
vendor/openings.js opening names (Lichess chess-openings)
vendor/stockfish/ Stockfish 18 lite, single-threaded WASM build
tests/vision.html self-test for board and piece recognition (open it via the local server)
```

## Credits

- [chess.js](https://github.com/jhlywa/chess.js), BSD-2-Clause (`vendor/chess.js.LICENSE`)
- [Stockfish.js](https://github.com/nmrugg/stockfish.js) 18 (Stockfish by the Stockfish developers), GPLv3 (`vendor/stockfish/COPYING.txt`). It runs as a separate program in a Web Worker and talks to the app over UCI.
- Opening names from [lichess-org/chess-openings](https://github.com/lichess-org/chess-openings), CC0
- Piece set by Cburnett & Rfc1394 (Wikimedia Commons), CC BY-SA 3.0, as adapted for [cm-chessboard](https://github.com/shaack/cm-chessboard)
