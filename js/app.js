/* App shell: routing, views (home, editor, trainer, help), persistence. */
(function () {
  const app = document.getElementById('app');
  let data = Rep.load();
  let cleanup = null; // teardown for the current view
  let currentRoute = location.hash.startsWith('#/') ? location.hash : '#/';

  function navigate(hash) {
    currentRoute = hash;
    try { history.pushState(null, '', hash); } catch (e) { /* URL can't change here; in-memory route still works */ }
    route();
  }

  /* ---------- helpers ---------- */

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function fmtMove(fenBefore, san) {
    const [, turn, , , , num] = fenBefore.split(' ');
    return turn === 'w' ? `${num}. ${san}` : `${num}… ${san}`;
  }

  function persist() {
    if (!Rep.save(data)) toast('Could not save — browser storage is full or blocked. Export a backup!');
  }

  function findRep(id) {
    return data.repertoires.find((r) => r.id === id);
  }

  let toastTimer;
  function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  function download(filename, text, type = 'text/plain') {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }

  // Show exported text with Copy (always works) and Download (hidden where downloads are blocked).
  function exportDialog(title, filename, text, type) {
    modal(`
      <h2>${esc(title)}</h2>
      <textarea id="export-text" rows="12" readonly>${esc(text)}</textarea>
      <div class="row end">
        <button data-close class="btn">Close</button>
        ${window.NO_DOWNLOAD ? '' : '<button class="btn" id="dl">Download file</button>'}
        <button class="btn primary" id="copy">Copy</button>
      </div>`,
      (m) => {
        const ta = m.querySelector('#export-text');
        m.querySelector('#copy').onclick = () => {
          const fallback = () => { ta.focus(); ta.select(); toast('Press Ctrl+C (or ⌘C) to copy the selected text.'); };
          try {
            navigator.clipboard.writeText(text).then(() => toast('Copied to clipboard.'), fallback);
          } catch (e) {
            fallback();
          }
        };
        const dl = m.querySelector('#dl');
        if (dl) dl.onclick = () => download(filename, text, type);
      });
  }

  function slug(s) {
    return s.replace(/[^\w-]+/g, '_').replace(/^_+|_+$/g, '') || 'repertoire';
  }

  function modal(html, onMount) {
    const root = document.getElementById('modal-root');
    root.innerHTML = `<div class="modal-backdrop"><div class="modal">${html}</div></div>`;
    const close = () => { root.innerHTML = ''; document.removeEventListener('keydown', onKey); };
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    root.querySelector('.modal-backdrop').addEventListener('pointerdown', (e) => {
      if (e.target.classList.contains('modal-backdrop')) close();
    });
    root.querySelectorAll('[data-close]').forEach((b) => (b.onclick = close));
    if (onMount) onMount(root.querySelector('.modal'), close);
    return close;
  }

  function confirmBox(text, okLabel = 'Delete') {
    return new Promise((resolve) => {
      modal(`<p>${esc(text)}</p><div class="row end"><button data-close class="btn">Cancel</button><button class="btn danger" id="ok">${esc(okLabel)}</button></div>`,
        (m, close) => { m.querySelector('#ok').onclick = () => { close(); resolve(true); }; });
    });
  }

  function relTime(ms) {
    const d = ms - Date.now();
    if (d <= 0) return 'now';
    const m = Math.round(d / Rep.MINUTE);
    if (m < 60) return `in ${m} min`;
    const h = Math.round(m / 60);
    if (h < 24) return `in ${h} h`;
    return `in ${Math.round(h / 24)} d`;
  }

  function nextDue(rep) {
    let best = Infinity;
    for (const k of Rep.cardKeys(rep)) {
      const c = rep.cards[k];
      if (c && c.due < best) best = c.due;
    }
    return best;
  }

  /* ---------- PGN import dialog ---------- */

  function importDialog(rep, onDone) {
    modal(`
      <h2>Import PGN into “${esc(rep.name)}”</h2>
      <p class="muted">Paste PGN (variations and comments are supported) or pick a .pgn file. Moves are merged into the repertoire.</p>
      <textarea id="pgn" rows="10" placeholder="1. e4 e5 2. Nf3 Nc6 (2... d6 3. d4) 3. Bb5 *"></textarea>
      <div class="row between">
        <label class="btn file">Choose file…<input type="file" id="file" accept=".pgn,.txt,text/plain" hidden></label>
        <div class="row"><button data-close class="btn">Cancel</button><button id="go" class="btn primary">Import</button></div>
      </div>`,
      (m, close) => {
        m.querySelector('#file').onchange = async (e) => {
          const f = e.target.files[0];
          if (f) m.querySelector('#pgn').value = await f.text();
        };
        m.querySelector('#go').onclick = () => {
          const text = m.querySelector('#pgn').value;
          if (!text.trim()) return;
          const res = Rep.importPgn(rep, text);
          persist();
          close();
          const errs = [...new Set(res.errors)];
          toast(`Imported ${res.moves} new move${res.moves === 1 ? '' : 's'} from ${res.games} game${res.games === 1 ? '' : 's'}.` + (errs.length ? ` ${errs.length} problem(s): ${errs[0]}` : ''));
          onDone && onDone();
        };
      });
  }

  /* ---------- Home ---------- */

  function viewHome() {
    const reps = data.repertoires;
    const now = Date.now();
    const cards = reps.map((r) => {
      const s = Rep.stats(r, now);
      const nd = s.due ? 'now' : s.learned ? relTime(nextDue(r)) : '—';
      const pct = s.total ? Math.round(((s.total - s.fresh) / s.total) * 100) : 0;
      return `
        <article class="rep-card">
          <div class="rep-head">
            <span class="color-dot ${r.color === 'w' ? 'white' : 'black'}" title="Playing ${r.color === 'w' ? 'White' : 'Black'}"></span>
            <h3>${esc(r.name)}</h3>
          </div>
          <div class="rep-stats">
            <div><b>${s.total}</b><span>moves</span></div>
            <div class="${s.due ? 'hl-due' : ''}"><b>${s.due}</b><span>due</span></div>
            <div class="${s.fresh ? 'hl-new' : ''}"><b>${s.fresh}</b><span>new</span></div>
          </div>
          <div class="progress" title="${pct}% learned"><div style="width:${pct}%"></div></div>
          <p class="muted small">Next review: ${nd}</p>
          <div class="row wrap">
            <a class="btn primary" href="#/train/${r.id}/review" ${s.due ? '' : 'aria-disabled="true"'}>Review${s.due ? ` (${s.due})` : ''}</a>
            <a class="btn" href="#/train/${r.id}/learn" ${s.fresh ? '' : 'aria-disabled="true"'}>Learn new${s.fresh ? ` (${s.fresh})` : ''}</a>
            <a class="btn" href="#/train/${r.id}/drill" ${s.total ? '' : 'aria-disabled="true"'}>Drill all</a>
            <a class="btn" href="#/edit/${r.id}">Edit</a>
            <button class="btn icon" data-menu="${r.id}" title="More">⋯</button>
          </div>
        </article>`;
    }).join('');

    app.innerHTML = `
      <section class="home">
        <div class="home-head">
          <div>
            <h1>Your repertoires</h1>
            <p class="muted">Build your opening lines, then drill them with spaced repetition. Everything is free and stays in your browser.</p>
          </div>
          <div class="row wrap">
            <button class="btn primary" id="new">+ New repertoire</button>
            <button class="btn" id="sample">Opening library</button>
          </div>
        </div>
        ${reps.length ? `<div class="rep-grid">${cards}</div>` : `
          <div class="empty">
            <p>No repertoires yet.</p>
            <p class="muted">Pick ready-made openings from the library, create your own by playing moves on the board, or import a PGN.</p>
          </div>`}
        <div class="backup">
          <h2>Backup</h2>
          <p class="muted small">Your data lives in this browser only. Export a backup to move it to another device.</p>
          <div class="row wrap">
            <button class="btn" id="export-all">Export backup (.json)</button>
            <label class="btn file">Restore backup…<input type="file" id="import-all" accept=".json,application/json" hidden></label>
          </div>
        </div>
      </section>`;

    app.querySelector('#new').onclick = newRepDialog;
    app.querySelector('#sample').onclick = libraryDialog;
    app.querySelector('#export-all').onclick = () => {
      exportDialog('Backup', `opening-trainer-backup-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(data), 'application/json');
    };
    app.querySelector('#import-all').onchange = async (e) => {
      const f = e.target.files[0];
      if (!f) return;
      try {
        const incoming = JSON.parse(await f.text());
        if (!incoming || !Array.isArray(incoming.repertoires)) throw new Error('bad file');
        let added = 0, replaced = 0;
        for (const r of incoming.repertoires) {
          const i = data.repertoires.findIndex((x) => x.id === r.id);
          if (i >= 0) { data.repertoires[i] = r; replaced++; } else { data.repertoires.push(r); added++; }
        }
        persist();
        toast(`Restored: ${added} added, ${replaced} updated.`);
        viewHome();
      } catch (err) {
        toast('That file is not a valid backup.');
      }
    };
    app.querySelectorAll('[aria-disabled="true"]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
    app.querySelectorAll('[data-menu]').forEach((b) => (b.onclick = () => repMenu(findRep(b.dataset.menu))));
  }

  function repMenu(rep) {
    modal(`
      <h2>${esc(rep.name)}</h2>
      <label class="field">Name <input id="name" value="${esc(rep.name)}"></label>
      <div class="menu-list">
        <button class="btn" id="rename">Save name</button>
        <button class="btn" id="imp">Import PGN…</button>
        <button class="btn" id="exp">Export PGN</button>
        <button class="btn" id="reset">Reset training progress</button>
        <button class="btn danger" id="del">Delete repertoire</button>
      </div>
      <div class="row end"><button data-close class="btn">Close</button></div>`,
      (m, close) => {
        m.querySelector('#rename').onclick = () => {
          const n = m.querySelector('#name').value.trim();
          if (n) { rep.name = n; persist(); close(); viewHome(); }
        };
        m.querySelector('#imp').onclick = () => { close(); importDialog(rep, viewHome); };
        m.querySelector('#exp').onclick = () => { close(); exportDialog(`PGN for “${rep.name}”`, `${slug(rep.name)}.pgn`, Rep.exportPgn(rep)); };
        m.querySelector('#reset').onclick = async () => {
          close();
          if (await confirmBox(`Reset all training progress for “${rep.name}”? Moves are kept.`, 'Reset')) {
            Rep.resetProgress(rep); persist(); viewHome();
          }
        };
        m.querySelector('#del').onclick = async () => {
          close();
          if (await confirmBox(`Delete “${rep.name}” permanently?`)) {
            data.repertoires = data.repertoires.filter((r) => r !== rep);
            persist(); viewHome();
          }
        };
      });
  }

  function newRepDialog() {
    modal(`
      <h2>New repertoire</h2>
      <label class="field">Name <input id="name" placeholder="e.g. Sicilian Najdorf" autofocus></label>
      <div class="field">I play
        <div class="seg">
          <label><input type="radio" name="color" value="w" checked> White</label>
          <label><input type="radio" name="color" value="b"> Black</label>
        </div>
      </div>
      <div class="row end"><button data-close class="btn">Cancel</button><button class="btn primary" id="create">Create</button></div>`,
      (m, close) => {
        const go = () => {
          const name = m.querySelector('#name').value.trim() || 'Untitled repertoire';
          const color = m.querySelector('input[name=color]:checked').value;
          const rep = Rep.newRepertoire(name, color);
          data.repertoires.push(rep);
          persist();
          close();
          navigate(`#/edit/${rep.id}`);
        };
        m.querySelector('#create').onclick = go;
        m.querySelector('#name').onkeydown = (e) => { if (e.key === 'Enter') go(); };
        m.querySelector('#name').focus();
      });
  }

  // Count the user's moves in a library opening (cached; the library never changes at runtime).
  const libraryCounts = new Map();
  function libraryMoveCount(s) {
    if (!libraryCounts.has(s.name)) {
      const tmp = Rep.newRepertoire(s.name, s.color);
      Rep.importPgn(tmp, s.pgn);
      libraryCounts.set(s.name, Rep.stats(tmp).total);
    }
    return libraryCounts.get(s.name);
  }

  function addFromLibrary(s) {
    const rep = Rep.newRepertoire(s.name, s.color);
    rep.library = s.name;
    rep.notesVersion = window.LIBRARY_NOTES_VERSION;
    Rep.importPgn(rep, s.pgn);
    data.repertoires.push(rep);
    return rep;
  }

  function libraryDialog() {
    const added = new Set(data.repertoires.map((r) => r.library).filter(Boolean));
    const group = (color, label) => `
      <h3>${label}</h3>
      <div class="lib-list">
        ${SAMPLES.map((s, i) => (s.color !== color ? '' : `
          <div class="lib-item">
            <div class="lib-text">
              <b>${esc(s.name)}</b>
              <span class="muted small">${esc(s.desc || '')}</span>
              <span class="muted small">${libraryMoveCount(s)} moves to learn</span>
            </div>
            ${added.has(s.name)
              ? '<span class="lib-added">Added ✓</span>'
              : `<button class="btn" data-i="${i}">Add</button>`}
          </div>`)).join('')}
      </div>`;
    const remaining = SAMPLES.filter((s) => !added.has(s.name)).length;
    modal(`
      <h2>Opening library</h2>
      <p class="muted small">Ready-made repertoires of standard opening theory. Each one is added as your own repertoire, so you can edit it however you like.</p>
      ${group('w', 'Play as White')}
      ${group('b', 'Play as Black')}
      <div class="row end">
        <button data-close class="btn">Close</button>
        ${remaining ? `<button class="btn primary" id="add-all">Add all ${remaining}</button>` : ''}
      </div>`,
      (m, close) => {
        m.querySelectorAll('[data-i]').forEach((b) => (b.onclick = () => {
          const s = SAMPLES[+b.dataset.i];
          addFromLibrary(s);
          persist();
          b.outerHTML = '<span class="lib-added">Added ✓</span>';
          const left = SAMPLES.length - new Set(data.repertoires.map((r) => r.library).filter(Boolean)).size;
          const all = m.querySelector('#add-all');
          if (all) { if (left) all.textContent = `Add all ${left}`; else all.remove(); }
          viewHome();
          toast(`Added “${s.name}”.`);
        }));
        const all = m.querySelector('#add-all');
        if (all) all.onclick = () => {
          const have = new Set(data.repertoires.map((r) => r.library).filter(Boolean));
          let n = 0;
          for (const s of SAMPLES) if (!have.has(s.name)) { addFromLibrary(s); n++; }
          persist();
          close();
          viewHome();
          toast(`Added ${n} opening${n === 1 ? '' : 's'}.`);
        };
      });
  }

  /* ---------- Editor ---------- */

  function viewEditor(rep) {
    // path: [{ san, fen }] — fen is the position after the move
    let path = [];
    let chess = new Chess(rep.rootFen);
    let lastMove = null;

    app.innerHTML = `
      <section class="split">
        <div class="board-col">
          <div id="board"></div>
          <div class="row nav-row">
            <button class="btn icon" id="first" title="Start (Home)">⏮</button>
            <button class="btn icon" id="back" title="Back (←)">◀</button>
            <button class="btn icon" id="fwd" title="Forward (→)">▶</button>
            <button class="btn icon" id="flip" title="Flip board (F)">⇅</button>
          </div>
        </div>
        <aside class="panel">
          <div class="panel-head">
            <a href="#/" class="muted small">← Repertoires</a>
            <h2><span class="color-dot ${rep.color === 'w' ? 'white' : 'black'}"></span> ${esc(rep.name)}</h2>
            <p class="muted small">Play moves for <b>both sides</b> to add them. You play <b>${rep.color === 'w' ? 'White' : 'Black'}</b>.</p>
          </div>
          <div class="pathline" id="path"></div>
          <div id="warn"></div>
          <h3>Moves from here</h3>
          <ul class="moves" id="moves"></ul>
          <h3 id="note-h">Note on the last move</h3>
          <textarea id="comment" rows="3" placeholder="Plans, ideas, traps… (shown during training)"></textarea>
          <div class="row wrap panel-actions">
            <a class="btn primary" href="#/train/${rep.id}/learn">Learn new</a>
            <a class="btn" href="#/train/${rep.id}/review">Review</a>
            <button class="btn" id="imp">Import PGN</button>
            <button class="btn" id="exp">Export PGN</button>
          </div>
          <p class="muted small" id="stats"></p>
        </aside>
      </section>`;

    const board = new Board(app.querySelector('#board'), {
      getChess: () => chess,
      canMove: () => true,
      onMove: (from, to, promotion) => {
        const fen = chess.fen();
        const mv = new Chess(fen).move({ from, to, promotion });
        const existed = rep.positions[Rep.posKey(fen)] && rep.positions[Rep.posKey(fen)].moves[mv.san] !== undefined;
        const r = Rep.addMove(rep, fen, mv.san);
        persist();
        goTo([...path, { san: r.san, fen: r.toFen }], r.move);
        if (!existed) toast(`Added ${moveLabel(fen, r.san)}`);
      },
    });
    board.setOrientation(rep.color);

    function moveLabel(fen, san) {
      const [, turn, , , , num] = fen.split(' ');
      return turn === 'w' ? `${num}. ${san}` : `${num}… ${san}`;
    }

    function curFen() {
      return path.length ? path[path.length - 1].fen : rep.rootFen;
    }

    function goTo(newPath, mv) {
      const steppedForward = newPath.length === path.length + 1;
      path = newPath;
      chess = new Chess(curFen());
      if (mv === undefined && path.length) {
        const prev = path.length > 1 ? path[path.length - 2].fen : rep.rootFen;
        mv = new Chess(prev).move(path[path.length - 1].san);
      }
      lastMove = mv || null;
      if (steppedForward) Sound.forMove(lastMove);
      board.setLastMove(lastMove && lastMove.from, lastMove && lastMove.to);
      board.setArrows([]);
      board.render();
      refresh();
    }

    function refresh() {
      const fen = curFen();
      const key = Rep.posKey(fen);
      const pos = rep.positions[key] || { moves: {}, comment: '' };
      const userTurn = Rep.isUserPos(rep, key);

      // path breadcrumbs
      const crumbs = path.map((p, i) => {
        const before = i ? path[i - 1].fen : rep.rootFen;
        const [, turn, , , , num] = before.split(' ');
        const n = turn === 'w' ? `<span class="num">${num}.</span>` : i === 0 ? `<span class="num">${num}…</span>` : '';
        return `${n}<button class="crumb ${i === path.length - 1 ? 'cur' : ''}" data-i="${i}">${esc(p.san)}</button>`;
      }).join(' ');
      app.querySelector('#path').innerHTML = `<button class="crumb ${path.length ? '' : 'cur'}" data-i="-1">Start</button> ${crumbs}`;
      app.querySelectorAll('#path .crumb').forEach((b) => (b.onclick = () => goTo(path.slice(0, +b.dataset.i + 1))));
      const pl = app.querySelector('#path');
      pl.scrollLeft = pl.scrollWidth;

      const sans = Object.keys(pos.moves);
      app.querySelector('#warn').innerHTML = userTurn && sans.length > 1
        ? `<p class="warn">You have ${sans.length} moves here. Any of them will be accepted in training — consider keeping just one.</p>` : '';

      const card = rep.cards[key];
      app.querySelector('#moves').innerHTML = sans.length ? sans.map((san) => {
        const to = pos.moves[san];
        const deeper = rep.positions[to] ? Object.keys(rep.positions[to].moves).length : 0;
        return `<li>
          <button class="move-btn" data-san="${esc(san)}">${esc(moveLabel(fen, san))}</button>
          <span class="move-meta">
            ${rep.positions[to] && rep.positions[to].comment ? `<span class="move-note">${esc(rep.positions[to].comment)}</span>` : ''}
            <span class="muted small">${deeper ? `${deeper} repl${deeper === 1 ? 'y' : 'ies'}` : 'end of line'}</span>
          </span>
          <button class="btn icon small danger-ghost" data-del="${esc(san)}" title="Delete this move and everything after it">✕</button>
        </li>`;
      }).join('') : `<li class="muted small">${userTurn ? 'Play your move on the board.' : 'Play the opponent replies you want to prepare for.'}</li>`;
      if (userTurn && sans.length && card) {
        app.querySelector('#moves').insertAdjacentHTML('beforeend',
          `<li class="muted small">Training: ${card.due <= Date.now() ? 'due now' : 'next ' + relTime(card.due)} · ${card.lapses} mistake${card.lapses === 1 ? '' : 's'}</li>`);
      }
      app.querySelectorAll('.move-btn').forEach((b) => (b.onclick = () => {
        goTo([...path, { san: b.dataset.san, fen: rep.positions[pos.moves[b.dataset.san]].fen }]);
      }));
      app.querySelectorAll('[data-del]').forEach((b) => (b.onclick = async () => {
        if (await confirmBox(`Delete ${moveLabel(fen, b.dataset.del)} and every line after it?`)) {
          Rep.deleteMove(rep, key, b.dataset.del);
          persist();
          refresh();
        }
      }));

      app.querySelector('#note-h').textContent = path.length
        ? `Note on ${fmtMove(path.length > 1 ? path[path.length - 2].fen : rep.rootFen, path[path.length - 1].san)}`
        : 'Note on the starting position';
      const ta = app.querySelector('#comment');
      ta.value = pos.comment || '';
      ta.disabled = !rep.positions[key];

      const s = Rep.stats(rep);
      app.querySelector('#stats').textContent = `${s.total} of your moves · ${s.positions} positions · ${s.fresh} new · ${s.due} due`;
    }

    app.querySelector('#comment').oninput = (e) => {
      const pos = rep.positions[Rep.posKey(curFen())];
      if (pos) { pos.comment = e.target.value; persist(); }
    };

    const back = () => path.length && goTo(path.slice(0, -1));
    const fwd = () => {
      const pos = rep.positions[Rep.posKey(curFen())];
      const sans = pos ? Object.keys(pos.moves) : [];
      if (sans.length) goTo([...path, { san: sans[0], fen: rep.positions[pos.moves[sans[0]]].fen }]);
    };
    app.querySelector('#first').onclick = () => goTo([]);
    app.querySelector('#back').onclick = back;
    app.querySelector('#fwd').onclick = fwd;
    app.querySelector('#flip').onclick = () => board.flip();
    app.querySelector('#imp').onclick = () => importDialog(rep, () => goTo(path));
    app.querySelector('#exp').onclick = () => exportDialog(`PGN for “${rep.name}”`, `${slug(rep.name)}.pgn`, Rep.exportPgn(rep));

    const onKey = (e) => {
      if (/INPUT|TEXTAREA/.test(document.activeElement.tagName) || document.getElementById('modal-root').children.length) return;
      if (e.key === 'ArrowLeft') back();
      else if (e.key === 'ArrowRight') fwd();
      else if (e.key === 'Home') goTo([]);
      else if (e.key === 'f') board.flip();
      else return;
      e.preventDefault();
    };
    document.addEventListener('keydown', onKey);
    cleanup = () => document.removeEventListener('keydown', onKey);

    goTo([]);
  }

  /* ---------- Trainer ---------- */

  const MODE_LABEL = { review: 'Review due moves', learn: 'Learn new moves', drill: 'Drill everything' };

  function viewTrain(rep, mode) {
    let chess = new Chess(rep.rootFen);
    let prompting = false;

    app.innerHTML = `
      <section class="split">
        <div class="board-col">
          <div id="board"></div>
        </div>
        <aside class="panel">
          <div class="panel-head">
            <a href="#/" class="muted small">← Repertoires</a>
            <h2><span class="color-dot ${rep.color === 'w' ? 'white' : 'black'}"></span> ${esc(rep.name)}</h2>
            <p class="muted small">${MODE_LABEL[mode]}${mode === 'drill' ? ' — practice only, your schedule is not changed' : ''}</p>
          </div>
          <div class="status" id="status">Starting…</div>
          <div class="notes" id="note" hidden></div>
          <div class="row wrap">
            <button class="btn" id="hint">Show move</button>
            <button class="btn" id="skip">Skip line</button>
            <a class="btn" href="#/edit/${rep.id}">Edit repertoire</a>
          </div>
          <div class="scores" id="scores"></div>
        </aside>
      </section>`;

    const statusEl = app.querySelector('#status');
    const noteEl = app.querySelector('#note');
    const setStatus = (html, cls = '') => { statusEl.className = 'status ' + cls; statusEl.innerHTML = html; };
    // Notes for the last moves played, plus "why" notes for a move you're about to learn.
    let moveNotes = [];
    let whyNotes = [];
    const noteFor = (fen) => {
      const p = rep.positions[Rep.posKey(fen)];
      return p && p.comment ? p.comment : '';
    };
    const renderNotes = () => {
      const items = [
        ...moveNotes.filter((n) => n.text).map((n) => `<div class="note-item ${n.who}"><b>${esc(n.label)}</b> ${esc(n.text)}</div>`),
        ...whyNotes.filter((n) => n.text).map((n) => `<div class="note-item why"><b>Why ${esc(n.san)}?</b> ${esc(n.text)}</div>`),
      ];
      noteEl.hidden = !items.length;
      noteEl.innerHTML = items.join('');
    };
    const setWhy = (answers) => {
      whyNotes = answers.map((san) => {
        const c = new Chess(chess.fen());
        c.move(san);
        return { san, text: noteFor(c.fen()) };
      });
      renderNotes();
    };
    const renderScores = () => {
      const s = trainer.stats;
      app.querySelector('#scores').innerHTML = `
        <div><b>${s.correct}</b><span>correct</span></div>
        <div><b>${s.wrong}</b><span>mistakes</span></div>
        <div><b>${s.learned}</b><span>learned</span></div>
        <div><b>${trainer.remaining()}</b><span>left</span></div>`;
    };

    const board = new Board(app.querySelector('#board'), {
      getChess: () => chess,
      canMove: () => prompting,
      onMove: (from, to, promotion) => {
        const res = trainer.answer(from, to, promotion);
        if (res === 'correct') persist();
        if (res === 'wrong') {
          persist();
          board.flash(from, 'bad');
          board.flash(to, 'bad');
        }
        renderScores();
      },
    });
    board.setOrientation(rep.color);

    const trainer = new Trainer(rep, mode, {
      onPosition(c, mv) {
        chess = new Chess(c.fen());
        Sound.forMove(mv);
        whyNotes = [];
        if (!mv) moveNotes = [];
        else {
          moveNotes.push({ label: fmtMove(mv.before, mv.san), who: mv.color === rep.color ? 'you' : 'opp', text: noteFor(c.fen()) });
          moveNotes = moveNotes.slice(-2);
        }
        renderNotes();
        board.setLastMove(mv && mv.from, mv && mv.to);
        board.setArrows([]);
        board.render();
      },
      onPrompt(info) {
        prompting = true;
        if (info.isNew) {
          setWhy(info.answers);
          const arrows = info.answers.map((san) => {
            const m = new Chess(chess.fen()).move(san);
            return { from: m.from, to: m.to, color: 'blue' };
          });
          board.setArrows(arrows);
          setStatus(`<b>New move:</b> play ${info.answers.map(esc).join(' or ')}`, 'info');
        } else {
          setStatus('Your move — what do you play here?', '');
        }
        renderScores();
      },
      onFeedback(kind, mv, attempts) {
        if (kind === 'correct') {
          prompting = false;
          setStatus(`✓ ${esc(mv.san)}`, 'good');
          board.flash(mv.to, 'good');
        } else {
          setStatus(`✗ ${esc(mv.san)} isn’t in your repertoire. Try again${attempts >= 2 ? ' — the answer is shown' : ''}.`, 'bad');
          if (attempts >= 2) showHint();
        }
      },
      onLineEnd() {
        prompting = false;
        setStatus('Line complete ✓', 'good');
        renderScores();
        setTimeout(() => Sound.play('lineComplete'), 250); // let the last move's sound finish first
      },
      onDone(stats, immediately) {
        prompting = false;
        renderScores();
        const s = Rep.stats(rep);
        if (immediately && !stats.correct && !stats.wrong && !stats.learned) {
          setStatus(mode === 'review' ? `Nothing is due right now. ${s.fresh ? `You have ${s.fresh} new moves to learn.` : ''}` :
            mode === 'learn' ? 'No new moves to learn — add more lines in the editor.' : 'This repertoire has no moves yet.', 'info');
        } else {
          Sound.play('sessionComplete');
          setStatus(`<b>Session complete!</b> ${stats.correct} correct, ${stats.wrong} mistake${stats.wrong === 1 ? '' : 's'}, ${stats.learned} learned.`, 'good');
        }
        const actions = [];
        if (s.due) actions.push(`<a class="btn primary" href="#/train/${rep.id}/review" data-restart="review">Review ${s.due} due</a>`);
        if (s.fresh) actions.push(`<a class="btn" href="#/train/${rep.id}/learn" data-restart="learn">Learn ${s.fresh} new</a>`);
        statusEl.insertAdjacentHTML('beforeend', `<div class="row wrap" style="margin-top:.6rem">${actions.join('')}<a class="btn" href="#/">Back to repertoires</a></div>`);
        statusEl.querySelectorAll('[data-restart]').forEach((a) => a.addEventListener('click', (e) => {
          if (a.dataset.restart === mode) { e.preventDefault(); route(); }
        }));
      },
    });

    function showHint() {
      const answers = trainer.hint();
      if (!answers) return;
      persist();
      setWhy(answers);
      board.setArrows(answers.map((san) => {
        const m = new Chess(chess.fen()).move(san);
        return { from: m.from, to: m.to, color: 'green' };
      }));
      renderScores();
    }

    app.querySelector('#hint').onclick = showHint;
    app.querySelector('#skip').onclick = () => { prompting = false; trainer.skipLine(); };
    cleanup = () => trainer.stop();
    trainer.start();
  }

  /* ---------- Help ---------- */

  function viewHelp() {
    app.innerHTML = `
      <section class="help">
        <h1>How it works</h1>
        <h2>1. Build</h2>
        <p>Create a repertoire for White or Black and play moves on the board — both your moves and the opponent replies you want to prepare for. Every move you play is added. Use the move list to jump into branches, ✕ to delete a move and everything after it, and add notes that appear while training. You can also import PGN files (variations and comments included) from books, courses, or Lichess studies.</p>
        <p>Positions are matched by board position, so transpositions are shared automatically.</p>
        <h2>2. Learn</h2>
        <p><b>Learn new</b> walks you through lines containing moves you haven't seen yet. The computer plays the opponent's moves; for each new move of yours, a blue arrow shows what to play.</p>
        <h2>Move notes</h2>
        <p>Every move in the opening library has a short note explaining it. In <b>Learn new</b> you see why a new move is played before you play it. In reviews the explanation appears after you answer, so it doesn't give the move away. The notes for the last two moves stay on screen, and you can edit any note in the editor.</p>
        <h2>3. Review</h2>
        <p>Each of your moves is scheduled with spaced repetition. Get it right and the next review is pushed further out (1 day, 3 days, then growing). Miss it and it comes back within minutes and again later in the same session. <b>Review</b> only quizzes moves that are due, auto-playing the rest of the line to get you there.</p>
        <p><b>Drill all</b> quizzes every move in the repertoire without touching your schedule — handy before a tournament.</p>
        <h2>Screen Coach</h2>
        <p>The <b>Coach</b> watches the chess game on your screen and shows the best moves while you play. Press <b>Start watching</b> and share the tab or window with the board. The first time, show the starting position (a new game or an analysis board) so the coach can learn what your site's pieces look like. After that it follows the game move by move.</p>
        <p>For your moves it shows the engine's top three moves as arrows (green is best), the evaluation, and plain-language reasons: wins material, forks, threats, development, passed pawns. On your opponent's move it shows what they should play, and it warns you when one of your pieces is hanging. The <b>Opening</b> panel names the opening, shows the moves from your repertoires and the library with their notes, and tells you when your opponent leaves your preparation.</p>
        <p>Choose <b>Just a hint</b> to be told only which piece to move, and <b>Say my best move out loud</b> to hear it. In Chrome and Edge, <b>Pop out</b> opens a small always-on-top window, so you can keep the coach over your game. You can also open or paste a screenshot instead of sharing the screen.</p>
        <p>If the board isn't found, drag a box around it in the <b>Screen</b> preview. If White and Black are swapped, press <b>Flip</b>. If the coach thinks it's the wrong side's move (it has to guess when it joins mid-game), press <b>Switch side to move</b>.</p>
        <p><b>Fair play:</b> using engine help in rated games against other people is cheating on every chess site and gets accounts closed. Use the coach against bots, on analysis boards, in unrated games where your opponent agrees, and to review games.</p>
        <h2>Your data</h2>
        <p>Everything is stored locally in your browser — no account, no server, no paywall. Use <b>Export backup</b> on the home page to save a copy or move it to another device, and <b>Export PGN</b> to use your repertoire elsewhere.</p>
        <h2>Sounds</h2>
        <p>Moves, captures, checks and checkmates each have their own sound. A ding plays when you finish a line, and a fanfare when you finish the whole session. Drag the volume slider in the top bar to set the level, or click the speaker to mute and unmute.</p>
        <h2>Keyboard</h2>
        <p>In the editor: ← / → to step through moves, Home to go to the start, F to flip the board.</p>
      </section>`;
  }

  /* ---------- Router ---------- */

  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    document.getElementById('modal-root').innerHTML = '';
    const parts = currentRoute.replace(/^#\/?/, '').split('/');
    const rep = parts[1] ? findRep(parts[1]) : null;
    if (parts[0] === 'edit' && rep) viewEditor(rep);
    else if (parts[0] === 'train' && rep) viewTrain(rep, ['review', 'learn', 'drill'].includes(parts[2]) ? parts[2] : 'review');
    else if (parts[0] === 'help') viewHelp();
    else if (parts[0] === 'coach') cleanup = CoachView.mount(app, { esc, toast, reps: () => data.repertoires });
    else viewHome();
    window.scrollTo(0, 0);
  }

  // Keep data in sync if another tab changes it.
  window.addEventListener('storage', (e) => {
    if (e.key && e.key.startsWith('openingTrainer')) {
      data = Rep.load();
      if (!currentRoute.startsWith('#/train')) route();
    }
  });

  // Give repertoires added from an older library the current move notes. A position's note is only
  // replaced when it's empty or still one of the old library's notes, so the user's own notes stay.
  function upgradeLibraryNotes() {
    const oldNotes = new Set(window.LIBRARY_OLD_NOTES || []);
    let changed = false;
    for (const rep of data.repertoires) {
      if ((rep.notesVersion || 0) >= window.LIBRARY_NOTES_VERSION) continue;
      const name = rep.library || (window.LIBRARY_OLD_NAMES || {})[rep.name];
      const s = SAMPLES.find((x) => x.name === name && x.color === rep.color);
      if (!s) continue;
      const lib = Rep.newRepertoire(s.name, s.color);
      Rep.importPgn(lib, s.pgn);
      for (const [key, p] of Object.entries(lib.positions)) {
        const target = rep.positions[key];
        if (!p.comment || !target) continue;
        const lines = (target.comment || '').split('\n').map((l) => l.trim()).filter(Boolean);
        if (lines.every((l) => oldNotes.has(l))) target.comment = p.comment;
      }
      rep.notesVersion = window.LIBRARY_NOTES_VERSION;
      changed = true;
    }
    if (changed) persist();
  }

  // In-page navigation: links use href="#/…", handled here so it also works where the URL can't change.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#/"]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    navigate(a.getAttribute('href'));
  });
  const soundBtn = document.getElementById('sound-toggle');
  const volumeEl = document.getElementById('volume');
  const renderVolume = () => {
    const v = Sound.getVolume();
    soundBtn.textContent = v === 0 ? '🔇' : v < 40 ? '🔈' : v < 75 ? '🔉' : '🔊';
    soundBtn.setAttribute('aria-label', v === 0 ? 'Unmute sounds' : 'Mute sounds');
    volumeEl.value = v;
    volumeEl.style.setProperty('--fill', v + '%');
    volumeEl.title = `Volume ${v}%`;
  };
  volumeEl.addEventListener('input', () => { Sound.setVolume(volumeEl.value); renderVolume(); Sound.preview(); });
  soundBtn.onclick = () => { Sound.toggleMute(); renderVolume(); Sound.preview(); };
  renderVolume();
  upgradeLibraryNotes();

  window.addEventListener('popstate', () => {
    currentRoute = location.hash || '#/';
    route();
  });
  route();
})();
