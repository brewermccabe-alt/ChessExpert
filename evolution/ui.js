/* Evolution Chess UI: canvas board with pan/zoom, minimap, side panel, AI turns, autosave. */
(function () {
  'use strict';
  const E = window.Evo, AI = window.EvoAI;
  const $ = (id) => document.getElementById(id);
  const canvas = $('board'), ctx = canvas.getContext('2d');
  const mini = $('mini'), mctx = mini.getContext('2d');
  const SAVE_KEY = 'evolution-chess-save-v5';
  const GLYPH = { pawn: '♟', knight: '♞', bishop: '♝', rook: '♜', queen: '♛', king: '♚' };
  const TIER_COLOR = { pawn: '#9a9a9a', knight: '#c98b4a', bishop: '#c98b4a', rook: '#b8c2cc', queen: '#e0b83a', king: '#d94f4f' };
  const EMOJI_FONT = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  const SIDE = { w: 'White', b: 'Black' };

  let state, mode = 'ai', sel = null, targets = [], logLines = [], aiBusy = false, dirty = true, fireMode = false, placeKind = null;
  const cam = { x: 0, y: 0, s: 24 };
  let W = 0, H = 0, dpr = 1;

  /* ---------- persistence ---------- */

  function save() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify({ mode, game: E.toJSON(state), log: logLines.slice(-60) })); } catch (e) { /* storage blocked */ }
  }
  function load() {
    try {
      const j = JSON.parse(localStorage.getItem(SAVE_KEY));
      if (!j) return false;
      state = E.fromJSON(j.game); mode = j.mode === 'hot' ? 'hot' : 'ai'; logLines = Array.isArray(j.log) ? j.log : [];
      return true;
    } catch (e) { return false; }
  }

  /* ---------- helpers ---------- */

  const label = (x, y) => {
    const T = E.POCKET_H;
    if (y < T) return `B pocket ${x + 1}`;
    if (y >= state.size + T) return `W pocket ${x + 1}`;
    return `${x + 1},${state.size + T - y}`;
  };
  const isHuman = (color) => mode === 'hot' || color === 'w';
  const myTurn = () => !state.winner && !aiBusy && isHuman(state.turn);
  const nameOf = (p) => E.TYPES[p.type].name;
  const canPlace = () => myTurn() && state.pending[state.turn].length > 0 && E.freePocketSquares(state, state.turn).length > 0;
  const affordable = (p) => {
    if (state.winner || p.color !== state.turn || !isHuman(p.color) || aiBusy) return false;
    const u = E.nextUpgrade(p);
    return !!u && state.bank[p.color] >= u.cost;
  };
  function logPending() {
    const n = state.pending[state.turn].length;
    if (isHuman(state.turn) && n > 0) log(`${SIDE[state.turn][0]}: ${n} captured piece${n === 1 ? ' is' : 's are'} waiting. Pick one and click a free square in your pocket.`, 'evo');
    const f = state.pieces.filter((p) => p.color === state.turn && p.frozen).length;
    if (f > 0) log(`${SIDE[state.turn][0]}: ${f} piece${f === 1 ? ' is' : 's are'} frozen this turn.`, 'evo');
  }
  function describeAction(r) {
    const c = SIDE[r.color][0], name = E.TYPES[r.piece].name;
    let t = r.shot ? `${c}: ${name} at ${label(r.from.x, r.from.y)} fires at ${label(r.to.x, r.to.y)}` : `${c}: ${name} ${label(r.from.x, r.from.y)} → ${label(r.to.x, r.to.y)}`;
    if (r.captured) t += ` and takes ${E.TYPES[r.captured].name}`;
    t += ` (+$${r.gain})`;
    if (r.revived) t += ` — the Knight's extra life brings it back to its pocket`;
    return t;
  }
  function log(text, cls) { logLines.push({ t: text, c: cls || '' }); if (logLines.length > 200) logLines.shift(); }

  function minScale() { return Math.max(3, Math.min(W, H) / state.h); }
  function clampCam() {
    cam.s = Math.min(72, Math.max(minScale() * 0.9, cam.s));
    cam.x = Math.min(state.size + 2, Math.max(-2, cam.x));
    cam.y = Math.min(state.h + 2, Math.max(-2, cam.y));
  }
  function centerOn(x, y) { cam.x = x + 0.5; cam.y = y + 0.5; clampCam(); dirty = true; }
  function goHome() {
    cam.s = Math.min(34, Math.max(minScale(), Math.min(W, H) / 22));
    const color = mode === 'hot' ? state.turn : 'w';
    centerOn(state.size / 2, color === 'w' ? state.h - 10 : 9);
  }
  function fit() { cam.s = minScale(); centerOn(state.size / 2 - 0.5, state.h / 2 - 0.5); }
  function ensureVisible(x, y) {
    const sx = (x + 0.5 - cam.x) * cam.s + W / 2, sy = (y + 0.5 - cam.y) * cam.s + H / 2;
    if (sx < 30 || sy < 30 || sx > W - 30 || sy > H - 30) centerOn(x, y);
  }

  /* ---------- drawing ---------- */

  function resize() {
    dpr = window.devicePixelRatio || 1;
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    if (state) clampCam();
    dirty = true;
  }

  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#2b2a27'; ctx.fillRect(0, 0, W, H);
    const N = state.size, GH = state.h, T = E.POCKET_H, s = cam.s;
    const ox = W / 2 - cam.x * s, oy = H / 2 - cam.y * s;
    const x0 = Math.max(0, Math.floor(-ox / s)), x1 = Math.min(N - 1, Math.ceil((W - ox) / s));
    const y0 = Math.max(0, Math.floor(-oy / s)), y1 = Math.min(GH - 1, Math.ceil((H - oy) / s));

    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      if (!E.inside(state, x, y)) continue;
      const main = y >= T && y < N + T;
      if (main) ctx.fillStyle = (x + y) % 2 ? '#7d9a6e' : '#e6e0c8';
      else ctx.fillStyle = y < T ? ((x + y) % 2 ? '#8f9cb6' : '#b9c3d6') : ((x + y) % 2 ? '#d9bd6a' : '#f3e2a9');
      ctx.fillRect(ox + x * s, oy + y * s, Math.ceil(s), Math.ceil(s));
    }
    // Grid markers every 8 squares of the main board (helps you keep your bearings)
    ctx.strokeStyle = 'rgba(0,0,0,.35)'; ctx.lineWidth = 1.5; ctx.beginPath();
    for (let i = 0; i <= N; i += 8) {
      ctx.moveTo(ox + i * s, oy + T * s); ctx.lineTo(ox + i * s, oy + (N + T) * s);
      ctx.moveTo(ox, oy + (T + i) * s); ctx.lineTo(ox + N * s, oy + (T + i) * s);
    }
    ctx.stroke();
    ctx.strokeStyle = '#000'; ctx.lineWidth = 3; ctx.strokeRect(ox, oy + T * s, N * s, N * s);
    if (s >= 16) {
      ctx.fillStyle = 'rgba(0,0,0,.45)'; ctx.font = '10px system-ui'; ctx.textBaseline = 'top'; ctx.textAlign = 'left';
      for (let x = x0; x <= x1; x++) if (x % 8 === 0) ctx.fillText(String(x + 1), ox + x * s + 2, oy + T * s + 2);
      for (let y = Math.max(y0, T); y <= Math.min(y1, N + T - 1); y++) if ((y - T) % 8 === 0) ctx.fillText(String(N - (y - T)), Math.max(ox, 0) + 2, oy + y * s + 2 + (y === T ? 10 : 0));
    }

    const tile = (x, y, fill) => { ctx.fillStyle = fill; ctx.fillRect(ox + x * s, oy + y * s, Math.ceil(s), Math.ceil(s)); };
    // Each side's pocket is an extension of the board: outlined and labelled, with pieces waiting to come back.
    for (const color of ['w', 'b']) {
      const k = E.pocket(state, color);
      ctx.strokeStyle = color === 'w' ? '#8a6d16' : '#3d4c6b'; ctx.lineWidth = Math.max(2, s * 0.09);
      ctx.strokeRect(ox + k.x * s, oy + k.y * s, k.w * s, k.h * s);
      if (s >= 12) {
        const waiting = state.pending[color].length;
        const text = `${color === 'w' ? "WHITE'S" : "BLACK'S"} POCKET` + (waiting ? ` · ${waiting} returning` : '');
        ctx.fillStyle = '#e8e2cf'; ctx.font = `bold ${Math.min(14, s * 0.4)}px system-ui`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        const ly = color === 'w' ? oy + (k.y + k.h + 0.5) * s : oy + (k.y - 0.5) * s;
        ctx.fillText(text, ox + (k.x + k.w / 2) * s, ly);
      }
    }
    if (canPlace()) {
      for (const f of E.freePocketSquares(state, state.turn)) {
        tile(f.x, f.y, 'rgba(255,210,60,.45)');
        if (s >= 10) {
          ctx.fillStyle = '#5a4300'; ctx.font = `bold ${s * 0.6}px system-ui`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText('+', ox + (f.x + 0.5) * s, oy + (f.y + 0.5) * s);
        }
      }
    }
    if (state.last) { tile(state.last.from.x, state.last.from.y, 'rgba(240,200,60,.45)'); tile(state.last.to.x, state.last.to.y, 'rgba(240,200,60,.55)'); }
    if (sel) tile(sel.x, sel.y, 'rgba(70,140,255,.55)');

    const now = Date.now();
    for (const p of state.pieces) {
      if (p.x < x0 || p.x > x1 || p.y < y0 || p.y > y1) continue;
      drawPiece(p, ox + p.x * s, oy + p.y * s, s, now);
    }
    for (const t of targets) {
      const cx = ox + (t.x + 0.5) * s, cy = oy + (t.y + 0.5) * s;
      ctx.beginPath();
      if (t.shot) {
        const r = s * 0.36;
        ctx.strokeStyle = 'rgba(235,110,0,.95)'; ctx.lineWidth = Math.max(2, s * 0.08);
        ctx.arc(cx, cy, r, 0, 7);
        ctx.moveTo(cx - r * 1.4, cy); ctx.lineTo(cx + r * 1.4, cy); ctx.moveTo(cx, cy - r * 1.4); ctx.lineTo(cx, cy + r * 1.4);
        ctx.stroke();
      } else if (t.capture) { ctx.strokeStyle = 'rgba(220,50,40,.9)'; ctx.lineWidth = Math.max(2, s * 0.09); ctx.arc(cx, cy, s * 0.44, 0, 7); ctx.stroke(); }
      else { ctx.fillStyle = 'rgba(30,80,200,.55)'; ctx.arc(cx, cy, Math.max(2, s * 0.14), 0, 7); ctx.fill(); }
    }
    drawMini();
  }

  function drawPiece(p, px, py, s, now) {
    const white = p.color === 'w';
    const dim = p.color === state.turn && p.acted && !state.winner;
    ctx.globalAlpha = dim ? 0.55 : 1;
    if (s < 9) {
      ctx.fillStyle = white ? '#fff' : '#111'; ctx.fillRect(px + 1, py + 1, s - 2, s - 2);
      ctx.globalAlpha = 1;
      return;
    }
    const cx = px + s / 2, cy = py + s / 2;
    ctx.beginPath(); ctx.arc(cx, cy, s * 0.45, 0, 7);
    ctx.fillStyle = TIER_COLOR[p.type]; ctx.globalAlpha *= 0.85; ctx.fill(); ctx.globalAlpha = dim ? 0.55 : 1;
    ctx.lineWidth = Math.max(1, s * 0.05); ctx.strokeStyle = white ? '#fff' : '#111'; ctx.stroke();
    ctx.font = `${s * 0.68}px "Segoe UI Symbol","Noto Sans Symbols 2","DejaVu Sans",serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const g = GLYPH[p.type] + '\uFE0E';
    ctx.lineWidth = Math.max(1, s * 0.06); ctx.strokeStyle = white ? '#111' : '#fff';
    ctx.strokeText(g, cx, cy + s * 0.03);
    ctx.fillStyle = white ? '#fff' : '#111'; ctx.fillText(g, cx, cy + s * 0.03);
    const list = E.UPGRADES[p.type];
    if (list && p.lvl > 0 && s >= 16) { // the latest upgrade, as a small icon in the corner
      ctx.font = `${s * 0.34}px ${EMOJI_FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(list[p.lvl - 1].icon, px + s * 0.8, py + s * 0.2);
    }
    if (list && s >= 18) { // one pip per upgrade on this piece's path, gold when owned
      const w = Math.min((s * 0.7) / list.length, s * 0.16), start = px + (s - w * list.length) / 2;
      for (let i = 0; i < list.length; i++) {
        ctx.fillStyle = i < p.lvl ? '#ffd23f' : 'rgba(0,0,0,.45)';
        ctx.fillRect(start + i * w + 1, py + s * 0.9, w - 2, Math.max(2, s * 0.06));
      }
    }
    if (p.frozen) {
      ctx.beginPath(); ctx.arc(cx, cy, s * 0.45, 0, 7);
      ctx.fillStyle = 'rgba(120,200,255,.5)'; ctx.fill();
      if (s >= 16) { ctx.font = `${s * 0.36}px ${EMOJI_FONT}`; ctx.fillStyle = '#fff'; ctx.fillText('❄️', px + s * 0.2, py + s * 0.2); }
    }
    if (affordable(p)) {
      const pulse = 0.5 + 0.5 * Math.sin(now / 250);
      ctx.beginPath(); ctx.arc(cx, cy, s * (0.47 + 0.05 * pulse), 0, 7);
      ctx.strokeStyle = `rgba(255,210,40,${0.5 + 0.4 * pulse})`; ctx.lineWidth = Math.max(2, s * 0.07); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function drawMini() {
    const m = mini.width, N = state.size, T = E.POCKET_H, k = m / state.h, offX = (m - N * k) / 2;
    mctx.fillStyle = '#1b1c1b'; mctx.fillRect(0, 0, m, m);
    mctx.fillStyle = '#2f3a30'; mctx.fillRect(offX, T * k, N * k, N * k);
    for (const p of state.pieces) {
      mctx.fillStyle = p.color === 'w' ? '#fff' : '#f05a4a';
      const d = p.type === 'king' ? 4 : Math.max(1.5, k * 0.9);
      mctx.fillRect(offX + p.x * k, p.y * k, d, d);
    }
    mctx.strokeStyle = '#ffd23f'; mctx.lineWidth = 1.5;
    mctx.strokeRect(offX + (cam.x - W / 2 / cam.s) * k, (cam.y - H / 2 / cam.s) * k, (W / cam.s) * k, (H / cam.s) * k);
  }

  function loop() {
    if (dirty || state.pieces.some(affordable)) { dirty = false; draw(); }
    requestAnimationFrame(loop);
  }

  /* ---------- panel ---------- */

  const money = (n) => '$' + n;
  function renderPanel() {
    const t = $('turn'), a = $('actions');
    if (state.winner === 'draw') { t.textContent = 'Draw — no legal moves'; a.textContent = ''; }
    else if (state.winner) { t.textContent = `${SIDE[state.winner]} wins!`; a.textContent = 'The enemy King has fallen.'; }
    else {
      t.textContent = `${SIDE[state.turn]} to move` + (aiBusy ? ' (thinking…)' : '');
      a.textContent = `${state.actionsLeft} action${state.actionsLeft === 1 ? '' : 's'} left · turn ${Math.ceil(state.turnNo / 2)}`;
    }
    $('bank').innerHTML = `Bank: White <b>${money(state.bank.w)}</b> · Black <b>${money(state.bank.b)}</b>`;
    $('end').disabled = !myTurn();
    $('banner').hidden = !state.winner;
    $('banner').textContent = state.winner === 'draw' ? 'Draw' : state.winner ? `${SIDE[state.winner]} wins!` : '';

    const info = $('info');
    if (!sel) {
      if (canPlace()) {
        const list = state.pending[state.turn], kinds = [...new Set(list)];
        if (!kinds.includes(placeKind)) placeKind = kinds[0];
        info.innerHTML = `<b>${list.length} piece${list.length === 1 ? '' : 's'} waiting to return.</b>` +
          '<div class="muted">Pick one, then click a glowing <b>+</b> square in your pocket. It returns without its upgrades.</div>' +
          '<div class="evolves">' + kinds.map((k) => `<button type="button" data-kind="${k}" class="${k === placeKind ? 'on' : ''}">${E.TYPES[k].name} ×${list.filter((q) => q === k).length}</button>`).join('') + '</div>';
        info.querySelectorAll('[data-kind]').forEach((b) => b.addEventListener('click', () => { placeKind = b.dataset.kind; renderPanel(); }));
      } else {
        info.innerHTML = '<span class="muted">Click a piece to see its moves and upgrades. Moving earns $50 and capturing $150; spend it on upgrades. Drag the board to pan, scroll to zoom.</span>';
      }
    } else {
      const p = sel, T = E.TYPES[p.type], list = E.UPGRADES[p.type] || [];
      const mine = p.color === state.turn && myTurn();
      let h = `<div class="name">${SIDE[p.color]} ${T.name}</div>`;
      h += `<div class="muted">Level ${p.lvl} of ${list.length}</div>`;
      if (p.frozen) h += '<div class="frozen">❄️ Frozen: cannot move or fire this turn.</div>';
      h += '<div class="ups">' + list.map((u, i) => {
        const cls = i < p.lvl ? 'owned' : i === p.lvl ? 'next' : 'locked';
        let buy = '';
        if (i === p.lvl && mine) {
          const need = u.cost - state.bank[p.color];
          buy = need <= 0 ? `<button type="button" data-buy class="buy">Buy for ${money(u.cost)}</button>` : `<div class="muted">Need ${money(need)} more</div>`;
        }
        return `<div class="up ${cls}"><span class="ico">${u.icon}</span><div><b>${u.name}</b> · ${money(u.cost)}<div class="muted">${u.desc}</div>${buy}</div></div>`;
      }).join('') + '</div>';
      if (mine && !p.acted && state.actionsLeft > 0) {
        const n = E.shots(state, p).length;
        if (n > 0) h += `<button type="button" data-fire class="fire ${fireMode ? 'on' : ''}">🎯 ${fireMode ? 'Back to moving' : 'Fire without moving'} (${n} target${n === 1 ? '' : 's'})</button>`;
      }
      if (p.acted && p.color === state.turn) h += '<div class="muted">Already acted this turn.</div>';
      info.innerHTML = h;
      info.querySelectorAll('[data-buy]').forEach((b) => b.addEventListener('click', () => doBuy(p)));
      info.querySelectorAll('[data-fire]').forEach((b) => b.addEventListener('click', () => { fireMode = !fireMode; select(p, true); }));
    }
    const ol = $('log');
    ol.innerHTML = logLines.slice(-40).map((l) => `<li class="${l.c}">${l.t}</li>`).reverse().join('');
  }

  function refresh() { dirty = true; renderPanel(); save(); }

  /* ---------- actions ---------- */

  function select(p, keepMode) {
    if (p !== sel && !keepMode) fireMode = false;
    sel = p; targets = [];
    if (p && myTurn() && p.color === state.turn && !p.acted && state.actionsLeft > 0) {
      const shots = E.shots(state, p);
      if (fireMode && !shots.length) fireMode = false;
      targets = fireMode ? shots : E.moves(state, p);
    }
    renderPanel(); dirty = true;
  }

  function afterAction(prevTurn) {
    if (state.turn !== prevTurn && !state.winner) {
      log(`— ${SIDE[state.turn]}'s turn —`, 'turn');
      logPending();
      if (mode === 'hot') goHome();
    }
    if (state.winner) log(state.winner === 'draw' ? 'Draw.' : `${SIDE[state.winner]} wins!`, 'evo');
    refresh();
    if (!state.winner && mode === 'ai' && state.turn === 'b') runAI();
  }

  function doMove(p, x, y) {
    const prev = state.turn;
    const r = E.move(state, p.id, x, y);
    if (!r) return;
    log(describeAction(r), (r.captured ? 'cap ' : '') + r.color);
    sel = null; targets = []; fireMode = false;
    afterAction(prev);
  }

  function doShoot(p, x, y) {
    const prev = state.turn;
    const r = E.shoot(state, p.id, x, y);
    if (!r) return;
    log(describeAction(r), 'cap ' + r.color);
    sel = null; targets = []; fireMode = false;
    afterAction(prev);
  }

  function doBuy(p) {
    const r = E.buy(state, p.id);
    if (!r) return;
    log(`${SIDE[p.color][0]}: ${E.TYPES[r.piece].name} buys ${r.upgrade.icon} ${r.upgrade.name} (−${money(r.upgrade.cost)}).`, 'evo');
    select(p, true);
    refresh();
  }

  function doPlace(x, y) {
    const r = E.place(state, x, y, placeKind);
    if (!r) return;
    log(`${SIDE[r.color][0]}: a captured ${E.TYPES[r.type].name} returns to its pocket at ${label(x, y)}, without upgrades.`, 'evo');
    sel = null; targets = [];
    refresh();
  }

  function endTurn() {
    if (!myTurn()) return;
    const prev = state.turn;
    E.endTurn(state);
    sel = null; targets = []; fireMode = false;
    afterAction(prev);
  }

  function runAI() {
    if (aiBusy) return;
    aiBusy = true; renderPanel();
    const step = () => {
      if (state.winner || state.turn !== 'b') { aiBusy = false; refresh(); return; }
      const a = AI.chooseAction(state);
      const turnBefore = state.turn;
      if (a.type === 'place') {
        const r = E.place(state, a.x, a.y, a.kind);
        if (r) log(`B: a captured ${E.TYPES[r.type].name} returns to its pocket, without upgrades.`, 'evo');
        refresh(); setTimeout(step, 250); return;
      }
      if (a.type === 'buy') {
        const r = E.buy(state, a.id);
        if (r) log(`B: ${E.TYPES[r.piece].name} buys ${r.upgrade.icon} ${r.upgrade.name} (−${money(r.upgrade.cost)}).`, 'evo');
        refresh(); setTimeout(step, 250); return;
      }
      if (a.type === 'end') {
        E.endTurn(state);
      } else {
        const r = a.type === 'shoot' ? E.shoot(state, a.id, a.x, a.y) : E.move(state, a.id, a.x, a.y);
        if (r) { log(describeAction(r), (r.captured ? 'cap ' : '') + 'b'); ensureVisible(a.x, a.y); } else E.endTurn(state);
      }
      if (state.turn !== turnBefore && !state.winner) { log(`— ${SIDE[state.turn]}'s turn —`, 'turn'); logPending(); }
      if (state.winner) log(state.winner === 'draw' ? 'Draw.' : `${SIDE[state.winner]} wins!`, 'evo');
      if (state.winner || state.turn !== 'b') aiBusy = false;
      refresh();
      if (aiBusy) setTimeout(step, 350);
    };
    setTimeout(step, 400);
  }

  /* ---------- input: pan, zoom, click ---------- */

  const pointers = new Map();
  let dragMoved = false, pinchDist = 0, downAt = null;

  function zoomAt(factor, sx, sy) {
    const wx = (sx - W / 2) / cam.s + cam.x, wy = (sy - H / 2) / cam.s + cam.y;
    cam.s *= factor; clampCam();
    cam.x = wx - (sx - W / 2) / cam.s; cam.y = wy - (sy - H / 2) / cam.s; clampCam(); dirty = true;
  }

  canvas.addEventListener('pointerdown', (ev) => {
    canvas.setPointerCapture(ev.pointerId);
    pointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    if (pointers.size === 1) { dragMoved = false; downAt = { x: ev.clientX, y: ev.clientY }; }
    else { dragMoved = true; const [a, b] = [...pointers.values()]; pinchDist = Math.hypot(a.x - b.x, a.y - b.y); }
  });
  canvas.addEventListener('pointermove', (ev) => {
    const prev = pointers.get(ev.pointerId);
    if (!prev) return;
    const cur = { x: ev.clientX, y: ev.clientY };
    if (pointers.size === 1) {
      if (!dragMoved && Math.hypot(cur.x - downAt.x, cur.y - downAt.y) > 5) { dragMoved = true; canvas.classList.add('dragging'); }
      if (dragMoved) { cam.x -= (cur.x - prev.x) / cam.s; cam.y -= (cur.y - prev.y) / cam.s; clampCam(); dirty = true; }
    } else if (pointers.size === 2) {
      pointers.set(ev.pointerId, cur);
      const [a, b] = [...pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const r = canvas.getBoundingClientRect();
      if (pinchDist) zoomAt(d / pinchDist, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
      pinchDist = d;
    }
    pointers.set(ev.pointerId, cur);
  });
  const up = (ev) => {
    const wasClick = pointers.size === 1 && !dragMoved && ev.type === 'pointerup';
    pointers.delete(ev.pointerId);
    canvas.classList.remove('dragging');
    if (pointers.size === 0) pinchDist = 0;
    if (wasClick) {
      const r = canvas.getBoundingClientRect();
      click(Math.floor((ev.clientX - r.left - W / 2) / cam.s + cam.x), Math.floor((ev.clientY - r.top - H / 2) / cam.s + cam.y));
    }
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', (ev) => {
    ev.preventDefault();
    const r = canvas.getBoundingClientRect();
    zoomAt(Math.exp(-ev.deltaY * 0.0015), ev.clientX - r.left, ev.clientY - r.top);
  }, { passive: false });

  function click(x, y) {
    if (!E.inside(state, x, y)) { select(null); return; }
    const p = E.pieceAt(state, x, y);
    if (sel && myTurn() && targets.some((t) => t.x === x && t.y === y)) { if (fireMode) doShoot(sel, x, y); else doMove(sel, x, y); return; }
    if (!p && canPlace() && E.inPocket(state, state.turn, x, y)) { doPlace(x, y); return; }
    select(p && p !== sel ? p : null);
  }

  mini.addEventListener('pointerdown', (ev) => {
    const r = mini.getBoundingClientRect();
    const go = (e) => centerOn(((e.clientX - r.left) / r.width - (1 - state.size / state.h) / 2) * state.h - 0.5, ((e.clientY - r.top) / r.height) * state.h - 0.5);
    go(ev);
    mini.setPointerCapture(ev.pointerId);
    const mv = (e) => go(e);
    mini.addEventListener('pointermove', mv);
    mini.addEventListener('pointerup', () => mini.removeEventListener('pointermove', mv), { once: true });
  });

  /* ---------- wiring ---------- */

  $('end').addEventListener('click', endTurn);
  $('zin').addEventListener('click', () => zoomAt(1.4, W / 2, H / 2));
  $('zout').addEventListener('click', () => zoomAt(1 / 1.4, W / 2, H / 2));
  $('zfit').addEventListener('click', fit);
  $('zhome').addEventListener('click', goHome);
  // No confirm(): sandboxed pages block it and it silently cancels. Ask with a second click instead.
  let armTimer = null;
  const newBtn = $('new');
  function disarm() { clearTimeout(armTimer); armTimer = null; newBtn.textContent = 'Start'; }
  newBtn.addEventListener('click', () => {
    if (!state.winner && state.turnNo > 2 && !armTimer) {
      newBtn.textContent = 'Click again to abandon this game';
      armTimer = setTimeout(disarm, 4000);
      return;
    }
    disarm();
    start(parseInt($('size').value, 10), $('mode').value);
  });

  // Real fullscreen when the page allows it; otherwise hide the side panel so the board fills the window.
  function setFocus(on) { document.body.classList.toggle('focus', on); resize(); }
  $('zfull').addEventListener('click', () => {
    const fs = document.fullscreenElement;
    if (fs) { document.exitFullscreen(); return; }
    if (document.body.classList.contains('focus')) { setFocus(false); return; }
    const el = document.documentElement;
    const req = el.requestFullscreen && el.requestFullscreen();
    if (req && req.catch) req.catch(() => setFocus(true)); else if (!req) setFocus(true);
  });
  document.addEventListener('fullscreenchange', () => { document.body.classList.toggle('focus', !!document.fullscreenElement); resize(); });
  window.addEventListener('keydown', (ev) => {
    if (ev.target.tagName === 'SELECT') return;
    if (ev.key === '+' || ev.key === '=') zoomAt(1.4, W / 2, H / 2);
    else if (ev.key === '-') zoomAt(1 / 1.4, W / 2, H / 2);
  });
  window.addEventListener('resize', resize);

  // Rules: the upgrade list comes straight from the engine so it always matches the real costs and effects.
  $('upgrade-list').innerHTML = Object.keys(E.UPGRADES).map((k) =>
    `<li><b>${E.TYPES[k].name}:</b> ` + E.UPGRADES[k].map((u) => `${u.icon} ${u.name} ($${u.cost}) — ${u.desc}`).join(' &nbsp;→&nbsp; ') + '</li>').join('');

  function start(size, m) {
    mode = m; aiBusy = false; sel = null; targets = []; fireMode = false; placeKind = null;
    state = E.newGame(size);
    logLines = [];
    log(`New game: ${size}×${size}, ${E.actionsFor(size)} actions per turn.`, 'turn');
    resize(); goHome(); refresh();
  }

  if (load()) { $('size').value = String(state.size); $('mode').value = mode; resize(); goHome(); renderPanel(); }
  else start(40, 'ai');
  if (!state.winner && mode === 'ai' && state.turn === 'b') runAI();
  requestAnimationFrame(loop);
  const status = $('status'); if (status && status.className !== 'err') status.hidden = true;
})();
