# Opening Trainer

A free, open-source chess opening repertoire builder and trainer. Build your lines on the board, then drill them with spaced repetition. Nothing is behind a paywall.

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
- **Unlimited tactics puzzles:** thousands of puzzles with no daily limit, a puzzle rating that adapts to you, theme filters (mates, forks, sacrifices, hanging pieces, endgames and more), hints and solutions. See [Puzzles](#puzzles) below.
- **Sound effects** for moves, captures, checks and checkmate, a ding when you finish a line, and a fanfare when you finish a session. A volume slider and mute button sit in the top bar.
- Works offline, on desktop or mobile, in light or dark mode.

## Run it

It's a static site with no build step and no server.

- **Easiest:** open `index.html` in your browser.
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
js/puzzles.js     puzzle set (generated, see below)
js/pieces.js      piece artwork
vendor/chess.js   chess.js 1.4.0 (move generation and validation)
```

## Puzzles

The puzzles are original: `tools/puzzlegen.js` has the [Stockfish](https://stockfishchess.org) engine play games from varied openings, including the library lines. At every position it checks the engine's top 8 moves for a tempting one that actually loses. If a deep search then finds exactly one winning reply, the position becomes a puzzle. The solution continues while each move is the only good one. Every puzzle must end in checkmate or win at least two points of material, counted after the opponent's best reply. Ratings are estimates from each puzzle's length and features, spread over a 500–2500 scale.

To make more (a native Stockfish binary is needed):

```
node tools/puzzlegen.js /path/to/stockfish out.jsonl 200 some-seed     # one process per CPU core
node tools/build-puzzles.js js/puzzles.js out*.jsonl                    # validates, dedupes, rates
```

Puzzle ids come from the position and first move, so rebuilding keeps each player's progress.

## Evolution Chess (variant)

A separate, playable chess variant in [`evolution/`](evolution/index.html) (open `evolution/index.html`, no build step). It's played on a vast 24, 40 or 64 square board, but each side starts with a classic 2×8 army (pawns plus R N B Q K B N R) in a 2×8 pocket attached to the edge of the board, leaving a huge empty middle to cross. Captured pieces come back as Pawns you place anywhere in your pocket (they cannot capture until they step out):

- **Piece evolution:** pieces earn XP by capturing (and pawns by marching) and evolve for free: Pawn → Knight/Bishop → Rook/Nightrider → Queen → Amazon (queen + knight).
- **Multiple actions per turn** (board width ÷ 8), each piece acting once, and **no check**: capture the enemy King to win.
- Play a greedy computer opponent or a friend on one screen. Pan, zoom, and a minimap keep the huge board manageable. The game autosaves.
- Rules engine and AI live in `evolution/game.js` and `evolution/ai.js`; run `node evolution/test.js` to test them.

## Credits

- [chess.js](https://github.com/jhlywa/chess.js), BSD-2-Clause (`vendor/chess.js.LICENSE`)
- Piece set by Cburnett & Rfc1394 (Wikimedia Commons), CC BY-SA 3.0, as adapted for [cm-chessboard](https://github.com/shaack/cm-chessboard)
