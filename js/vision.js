/* Screen vision: find a chessboard in a screenshot and read the pieces on it.
 *
 * Works on ImageData-like objects ({ width, height, data: RGBA bytes }).
 * - findBoard(img) locates the board from its two alternating square colours.
 * - calibrate(img, rect) learns what the site's pieces look like from the starting position.
 * - read(img, rect, cal) turns the board into a FEN placement string.
 *
 * Each square is shrunk to a small grid. Its background colour is the median of the grid's edge,
 * so last-move highlights and different square colours don't matter; everything that differs from
 * the background is "piece" and is compared against the learned piece templates.
 */
(function () {
  const G = 24; // grid cells per square side
  const RING = 2; // outer rings used for the background, excluded from the piece features
  const N = G - 2 * RING; // feature grid side
  const FG_DIST = 34; // colour distance from the background that counts as "piece"
  const CODES = ['wp', 'wn', 'wb', 'wr', 'wq', 'wk', 'bp', 'bn', 'bb', 'br', 'bq', 'bk'];
  const FILES = 'abcdefgh';

  /* ---------- helpers ---------- */

  function dist2(r1, g1, b1, r2, g2, b2) {
    const dr = r1 - r2, dg = g1 - g2, db = b1 - b2;
    return dr * dr + dg * dg + db * db;
  }

  function lum(r, g, b) {
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }

  function median(arr) {
    const a = arr.slice().sort((x, y) => x - y);
    return a[a.length >> 1];
  }

  // Screen cell (x, y) → square name. Orientation is the colour at the bottom of the screen.
  function cellSquare(x, y, orientation) {
    return orientation === 'w' ? FILES[x] + (8 - y) : FILES[7 - x] + (y + 1);
  }

  /* ---------- per-square features ---------- */

  // Box-average the square into a G×G grid of RGB cells.
  function squareGrid(img, x0, y0, s) {
    const { width, height, data } = img;
    const out = new Float32Array(G * G * 3);
    const step = s / G;
    for (let gy = 0; gy < G; gy++) {
      const ya = Math.max(0, Math.floor(y0 + gy * step));
      const yb = Math.min(height, Math.max(ya + 1, Math.floor(y0 + (gy + 1) * step)));
      for (let gx = 0; gx < G; gx++) {
        const xa = Math.max(0, Math.floor(x0 + gx * step));
        const xb = Math.min(width, Math.max(xa + 1, Math.floor(x0 + (gx + 1) * step)));
        let r = 0, g = 0, b = 0, n = 0;
        for (let y = ya; y < yb; y++) {
          let i = (y * width + xa) * 4;
          for (let x = xa; x < xb; x++, i += 4) {
            r += data[i]; g += data[i + 1]; b += data[i + 2]; n++;
          }
        }
        const o = (gy * G + gx) * 3;
        n = n || 1;
        out[o] = r / n; out[o + 1] = g / n; out[o + 2] = b / n;
      }
    }
    return out;
  }

  // Features of one square:
  //  f  — the piece's silhouette (cells that differ from the background, with enclosed holes filled),
  //       blurred a little so small shifts and size changes matter less;
  //  fg — how much of the square the silhouette covers;
  //  cs — the share of bright versus dark piece cells, which separates White's pieces from Black's.
  function squareFeatures(img, x0, y0, s) {
    const grid = squareGrid(img, x0, y0, s);
    const rs = [], gs = [], bs = [];
    for (let gy = 0; gy < G; gy++) {
      for (let gx = 0; gx < G; gx++) {
        if (gy >= RING && gy < G - RING && gx >= RING && gx < G - RING) continue;
        const o = (gy * G + gx) * 3;
        rs.push(grid[o]); gs.push(grid[o + 1]); bs.push(grid[o + 2]);
      }
    }
    const br = median(rs), bg = median(gs), bb = median(bs);
    const sil = new Uint8Array(N * N);
    const lums = new Float32Array(N * N);
    const t2 = FG_DIST * FG_DIST;
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const o = ((y + RING) * G + (x + RING)) * 3;
        const r = grid[o], g = grid[o + 1], b = grid[o + 2];
        lums[y * N + x] = lum(r, g, b);
        if (dist2(r, g, b, br, bg, bb) > t2) sil[y * N + x] = 1;
      }
    }
    // Fill holes: background cells that can't be reached from the edge are inside the piece.
    const outside = new Uint8Array(N * N);
    const stack = [];
    for (let i = 0; i < N; i++) {
      for (const p of [i, (N - 1) * N + i, i * N, i * N + N - 1]) {
        if (!sil[p] && !outside[p]) { outside[p] = 1; stack.push(p); }
      }
    }
    while (stack.length) {
      const p = stack.pop();
      const x = p % N, y = (p / N) | 0;
      for (const q of [x > 0 ? p - 1 : -1, x < N - 1 ? p + 1 : -1, y > 0 ? p - N : -1, y < N - 1 ? p + N : -1]) {
        if (q >= 0 && !sil[q] && !outside[q]) { outside[q] = 1; stack.push(q); }
      }
    }
    const f = new Float32Array(N * N);
    let fg = 0;
    for (let i = 0; i < N * N; i++) if (!outside[i]) { f[i] = 1; fg++; }
    // Colour from the inside of the piece only (not its outline): count bright and dark cells.
    let bright = 0, dark = 0;
    for (let y = 1; y < N - 1; y++) {
      for (let x = 1; x < N - 1; x++) {
        const i = y * N + x;
        if (!sil[i] || !f[i - 1] || !f[i + 1] || !f[i - N] || !f[i + N]) continue;
        if (lums[i] > 0.55) bright++;
        else if (lums[i] < 0.35) dark++;
      }
    }
    return { f: blur(f), fg: fg / (N * N), cs: bright + dark ? bright / (bright + dark) : 0.5 };
  }

  // 3×3 box blur, so small shifts and scaling differences matter less.
  function blur(f) {
    const out = new Float32Array(N * N);
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        let sum = 0, n = 0;
        for (let dy = -1; dy <= 1; dy++) {
          const yy = y + dy;
          if (yy < 0 || yy >= N) continue;
          for (let dx = -1; dx <= 1; dx++) {
            const xx = x + dx;
            if (xx < 0 || xx >= N) continue;
            sum += f[yy * N + xx]; n++;
          }
        }
        out[y * N + x] = sum / n;
      }
    }
    return out;
  }

  function allFeatures(img, rect) {
    const s = rect.size / 8;
    const out = [];
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) out.push(squareFeatures(img, rect.x + x * s, rect.y + y * s, s));
    }
    return out;
  }

  /* ---------- calibration ---------- */

  const BACK = 'rnbqkbnr';

  /**
   * Learn piece templates from a board showing the starting position.
   * Returns { ok, error?, cal: { templates, orientation } }.
   */
  function calibrate(img, rect) {
    const feats = allFeatures(img, rect);
    const at = (x, y) => feats[y * 8 + x];

    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const occupied = at(x, y).fg > 0.06;
        const shouldBe = y < 2 || y > 5;
        if (occupied !== shouldBe) {
          return { ok: false, error: 'That doesn\'t look like the starting position. Open a new game or an analysis board with all pieces on their starting squares, then try again.' };
        }
      }
    }

    let top = 0, bottom = 0;
    for (let x = 0; x < 8; x++) {
      top += at(x, 0).cs + at(x, 1).cs;
      bottom += at(x, 6).cs + at(x, 7).cs;
    }
    const orientation = bottom > top ? 'w' : 'b';

    const sums = {}, counts = {}, cs = {};
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        if (y > 1 && y < 6) continue;
        const sq = cellSquare(x, y, orientation);
        const rank = sq[1];
        const color = rank === '1' || rank === '2' ? 'w' : 'b';
        const type = rank === '2' || rank === '7' ? 'p' : BACK[FILES.indexOf(sq[0])];
        const code = color + type;
        if (!sums[code]) { sums[code] = new Float32Array(N * N); counts[code] = 0; }
        const f = at(x, y).f;
        cs[code] = (cs[code] || 0) + at(x, y).cs;
        for (let i = 0; i < f.length; i++) sums[code][i] += f[i];
        counts[code]++;
      }
    }
    const templates = {};
    for (const code of CODES) {
      templates[code] = Array.from(sums[code], (v) => +(v / counts[code]).toFixed(3));
      cs[code] = +(cs[code] / counts[code]).toFixed(3);
    }

    // The two colours must be told apart reliably, or later reads will be garbage.
    if (Math.abs(top - bottom) / 16 < 0.25) {
      return { ok: false, error: 'Couldn\'t tell the white and black pieces apart. Try a board theme with more contrast.' };
    }
    return { ok: true, cal: { v: 1, n: N, templates, cs, orientation } };
  }

  /* ---------- recognition ---------- */

  // Compare the square with each template: the silhouette gives the piece type and the
  // bright/dark share gives the colour.
  const COLOR_WEIGHT = 400;
  function classify(feat, cal) {
    if (feat.fg < 0.05) return null;
    const f = feat.f;
    let best = null, bestD = 0;
    for (let i = 0; i < f.length; i++) bestD += f[i] * f[i];
    for (const code of CODES) {
      const t = cal.templates[code];
      const dc = feat.cs - cal.cs[code];
      let d = COLOR_WEIGHT * dc * dc;
      for (let i = 0; i < f.length && d < bestD; i++) {
        const e = f[i] - t[i];
        d += e * e;
      }
      if (d < bestD) { bestD = d; best = code; }
    }
    return best;
  }

  /**
   * Read the pieces. Returns { placement, pieces: { square: code }, valid, reason? }.
   * orientation: 'w' when White is at the bottom of the screen.
   */
  function read(img, rect, cal, orientation) {
    const feats = allFeatures(img, rect);
    const board = [];
    const pieces = {};
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        const c = classify(feats[y * 8 + x], cal);
        const sq = cellSquare(x, y, orientation);
        if (c) pieces[sq] = c;
      }
    }
    for (let rank = 8; rank >= 1; rank--) {
      let row = '', empty = 0;
      for (let f = 0; f < 8; f++) {
        const c = pieces[FILES[f] + rank];
        if (!c) { empty++; continue; }
        if (empty) { row += empty; empty = 0; }
        row += c[0] === 'w' ? c[1].toUpperCase() : c[1];
      }
      if (empty) row += empty;
      board.push(row);
    }
    const placement = board.join('/');
    const reason = sanity(pieces);
    return { placement, pieces, valid: !reason, reason };
  }

  function sanity(pieces) {
    const n = {};
    for (const [sq, c] of Object.entries(pieces)) {
      n[c] = (n[c] || 0) + 1;
      if (c[1] === 'p' && (sq[1] === '1' || sq[1] === '8')) return 'pawn on the back rank';
    }
    if (n.wk !== 1 || n.bk !== 1) return 'need exactly one king per side';
    for (const side of 'wb') {
      const total = CODES.filter((c) => c[0] === side).reduce((s, c) => s + (n[c] || 0), 0);
      if (total > 16 || (n[side + 'p'] || 0) > 8) return 'too many pieces';
    }
    return null;
  }

  /* ---------- board detection ---------- */

  /**
   * Find the chessboard. Returns { x, y, size, score } in image pixels, or null.
   */
  function findBoard(img) {
    const scale = Math.min(1, 640 / Math.max(img.width, img.height));
    const w = Math.max(1, Math.round(img.width * scale));
    const h = Math.max(1, Math.round(img.height * scale));
    const px = new Uint8Array(w * h * 3);
    for (let y = 0; y < h; y++) {
      const sy = Math.min(img.height - 1, Math.floor((y + 0.5) / scale));
      for (let x = 0; x < w; x++) {
        const sx = Math.min(img.width - 1, Math.floor((x + 0.5) / scale));
        const i = (sy * img.width + sx) * 4, o = (y * w + x) * 3;
        px[o] = img.data[i]; px[o + 1] = img.data[i + 1]; px[o + 2] = img.data[i + 2];
      }
    }

    // Most common colours (4 bits per channel), each represented by its mean.
    const bins = new Map();
    for (let i = 0; i < w * h; i++) {
      const r = px[i * 3], g = px[i * 3 + 1], b = px[i * 3 + 2];
      const k = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
      let e = bins.get(k);
      if (!e) { e = [0, 0, 0, 0]; bins.set(k, e); }
      e[0]++; e[1] += r; e[2] += g; e[3] += b;
    }
    const minCount = w * h * 0.004;
    const colors = [];
    for (const e of [...bins.values()].sort((a, b) => b[0] - a[0])) {
      if (e[0] < minCount || colors.length >= 10) break;
      const c = [e[1] / e[0], e[2] / e[0], e[3] / e[0]];
      if (colors.some((o) => dist2(...o, ...c) < 22 * 22)) continue;
      colors.push(c);
    }

    const TOL = 26 * 26;
    const mask = new Uint8Array(w * h);
    const label = new Int32Array(w * h);
    const stack = new Int32Array(w * h);
    let best = null;

    for (let a = 0; a < colors.length; a++) {
      for (let b = a + 1; b < colors.length; b++) {
        const A = colors[a], B = colors[b];
        if (dist2(...A, ...B) < 20 * 20) continue;
        for (let i = 0; i < w * h; i++) mask[i] = nearSegment(px[i * 3], px[i * 3 + 1], px[i * 3 + 2], A, B) < TOL ? 1 : 0;
        label.fill(0);
        let next = 1;
        for (let s = 0; s < w * h; s++) {
          if (!mask[s] || label[s]) continue;
          // Flood-fill one component, tracking its bounding box.
          let sp = 0, area = 0, x0 = w, y0 = h, x1 = 0, y1 = 0;
          stack[sp++] = s; label[s] = next;
          while (sp) {
            const p = stack[--sp];
            area++;
            const x = p % w, y = (p / w) | 0;
            if (x < x0) x0 = x; if (x > x1) x1 = x;
            if (y < y0) y0 = y; if (y > y1) y1 = y;
            if (x > 0 && mask[p - 1] && !label[p - 1]) { label[p - 1] = next; stack[sp++] = p - 1; }
            if (x < w - 1 && mask[p + 1] && !label[p + 1]) { label[p + 1] = next; stack[sp++] = p + 1; }
            if (y > 0 && mask[p - w] && !label[p - w]) { label[p - w] = next; stack[sp++] = p - w; }
            if (y < h - 1 && mask[p + w] && !label[p + w]) { label[p + w] = next; stack[sp++] = p + w; }
          }
          next++;
          const bw = x1 - x0 + 1, bh = y1 - y0 + 1;
          if (bw < 64 || bh < 64 || area < w * h * 0.01) continue;
          const aspect = bw / bh;
          if (aspect < 0.9 || aspect > 1.11) continue;
          const score = checkerScore(px, w, x0, y0, bw, bh, A, B);
          if (score < 0.75) continue;
          const total = score * Math.sqrt(bw * bh);
          if (!best || total > best.total) best = { total, score, x0, y0, bw, bh, A, B };
        }
      }
    }
    if (!best) return null;
    return refine(img, best, scale);
  }

  // Squared distance from a colour to the line segment between colours A and B. Anti-aliased
  // square edges are blends of the two square colours, so they lie on that segment.
  function nearSegment(r, g, b, A, B) {
    const dx = B[0] - A[0], dy = B[1] - A[1], dz = B[2] - A[2];
    let t = ((r - A[0]) * dx + (g - A[1]) * dy + (b - A[2]) * dz) / (dx * dx + dy * dy + dz * dz);
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return dist2(r, g, b, A[0] + t * dx, A[1] + t * dy, A[2] + t * dz);
  }

  // How well the 8×8 cells of a box alternate between colours A and B (0..1).
  function checkerScore(px, w, x0, y0, bw, bh, A, B) {
    const pts = [[0.12, 0.12], [0.88, 0.12], [0.12, 0.88], [0.88, 0.88], [0.5, 0.08], [0.08, 0.5]];
    let even = 0, odd = 0;
    for (let cy = 0; cy < 8; cy++) {
      for (let cx = 0; cx < 8; cx++) {
        let va = 0, vb = 0;
        for (const [fx, fy] of pts) {
          const x = Math.floor(x0 + ((cx + fx) * bw) / 8);
          const y = Math.floor(y0 + ((cy + fy) * bh) / 8);
          const i = (y * w + x) * 3;
          const da = dist2(px[i], px[i + 1], px[i + 2], ...A);
          const db = dist2(px[i], px[i + 1], px[i + 2], ...B);
          if (Math.min(da, db) > 40 * 40) continue;
          if (da < db) va++; else vb++;
        }
        if (va === vb) continue;
        const isA = va > vb;
        if (isA === ((cx + cy) % 2 === 0)) even++; else odd++;
      }
    }
    return Math.max(even, odd) / 64;
  }

  // Snap the coarse box to the board edges at full resolution.
  function refine(img, c, scale) {
    const { width, height, data } = img;
    const TOL = 30 * 30;
    const on = (x, y) => {
      const i = (y * width + x) * 4;
      return nearSegment(data[i], data[i + 1], data[i + 2], c.A, c.B) < TOL;
    };
    let x0 = c.x0 / scale, y0 = c.y0 / scale, x1 = (c.x0 + c.bw) / scale, y1 = (c.y0 + c.bh) / scale;
    const r = Math.ceil(2 / scale) + 2;
    const colFrac = (x) => {
      let n = 0, t = 0;
      for (let y = Math.floor(y0 + (y1 - y0) * 0.02); y < y1 - (y1 - y0) * 0.02; y += 1) { t++; if (on(x, Math.min(height - 1, y | 0))) n++; }
      return n / (t || 1);
    };
    const rowFrac = (y) => {
      let n = 0, t = 0;
      for (let x = Math.floor(x0 + (x1 - x0) * 0.02); x < x1 - (x1 - x0) * 0.02; x += 1) { t++; if (on(Math.min(width - 1, x | 0), y)) n++; }
      return n / (t || 1);
    };
    const clampX = (x) => Math.max(0, Math.min(width - 1, Math.round(x)));
    const clampY = (y) => Math.max(0, Math.min(height - 1, Math.round(y)));
    let L = clampX(x0), R = clampX(x1 - 1), T = clampY(y0), B = clampY(y1 - 1);
    for (let x = clampX(x0 - r); x <= clampX(x0 + r); x++) if (colFrac(x) > 0.5) { L = x; break; }
    for (let x = clampX(x1 + r); x >= clampX(x1 - r); x--) if (colFrac(x) > 0.5) { R = x; break; }
    for (let y = clampY(y0 - r); y <= clampY(y0 + r); y++) if (rowFrac(y) > 0.5) { T = y; break; }
    for (let y = clampY(y1 + r); y >= clampY(y1 - r); y--) if (rowFrac(y) > 0.5) { B = y; break; }
    const size = ((R - L + 1) + (B - T + 1)) / 2;
    const cx = (L + R + 1) / 2, cy = (T + B + 1) / 2;
    return { x: cx - size / 2, y: cy - size / 2, size, score: c.score };
  }

  window.Vision = { findBoard, calibrate, read, cellSquare, CODES };
})();
