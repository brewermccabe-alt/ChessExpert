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
- **Opening library:** 14 ready-made repertoires you can add with one click and then edit. As White: Italian, Ruy Lopez, Scotch, London, Queen's Gambit and the Alapin vs the Sicilian. As Black: Sicilian Najdorf, French, Caro-Kann, Scandinavian, Queen's Gambit Declined, Slav, King's Indian and Nimzo-Indian.
- **Backup/restore** everything as a JSON file.
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
js/board.js       interactive board (click and drag, arrows, promotion)
js/repertoire.js  data model, spaced repetition, PGN import/export, storage
js/trainer.js     training session logic
js/app.js         views and routing
js/samples.js     opening library
js/pieces.js      piece artwork
vendor/chess.js   chess.js 1.4.0 (move generation and validation)
```

## Credits

- [chess.js](https://github.com/jhlywa/chess.js), BSD-2-Clause (`vendor/chess.js.LICENSE`)
- Piece set by Cburnett & Rfc1394 (Wikimedia Commons), CC BY-SA 3.0, as adapted for [cm-chessboard](https://github.com/shaack/cm-chessboard)
