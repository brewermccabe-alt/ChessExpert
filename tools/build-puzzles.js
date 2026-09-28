#!/usr/bin/env node
/*
 * Build js/puzzles.js from generator output (tools/puzzlegen.js).
 * Usage: node tools/build-puzzles.js out/js/puzzles.js in1.jsonl [in2.jsonl ...]
 * Every puzzle is replayed with chess.js; anything illegal or malformed is dropped.
 */
const fs = require('fs');
const path = require('path');
global.window = global;
require(path.join(__dirname, '../vendor/chess.js'));

const [, , OUT, ...INPUTS] = process.argv;

// Stable id from the position and first move, so progress survives a rebuild.
function pid(fen, move) {
  let h = 0x811c9dc5;
  for (const ch of fen + move) { h ^= ch.charCodeAt(0); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(36);
}

function valid(p) {
  try {
    const c = new Chess(p.fen);
    for (let i = 0; i < p.moves.length; i++) {
      const u = p.moves[i];
      c.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] });
    }
    for (const [ply, list] of Object.entries(p.alts || {})) {
      const c2 = new Chess(p.fen);
      for (let i = 0; i < +ply; i++) { const u = p.moves[i]; c2.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] }); }
      for (const u of list) new Chess(c2.fen()).move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] });
    }
    return p.moves.length >= 2 && p.moves.length % 2 === 0;
  } catch (e) {
    return false;
  }
}

const byId = new Map();
let bad = 0;
for (const f of INPUTS) {
  for (const line of fs.readFileSync(f, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    let p;
    try { p = JSON.parse(line); } catch (e) { bad++; continue; } // e.g. a line cut off when a run was interrupted
    if (!valid(p)) { bad++; continue; }
    const id = pid(p.fen, p.moves[0]);
    if (!byId.has(id)) byId.set(id, p);
  }
}
const list = [...byId.entries()].sort((a, b) => a[1].rating - b[1].rating);
// The generator's ratings are rough difficulty scores that bunch up at the easy end. Keep their order but
// spread them over a bell curve (mean 1400, sd 450, clipped to 500-2500) so there are puzzles at every level.
function normInv(q) {
  // Acklam's approximation of the inverse normal CDF.
  const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
  const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
  const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
  const pl = 0.02425;
  if (q < pl) { const r = Math.sqrt(-2 * Math.log(q)); return (((((c[0] * r + c[1]) * r + c[2]) * r + c[3]) * r + c[4]) * r + c[5]) / ((((d[0] * r + d[1]) * r + d[2]) * r + d[3]) * r + 1); }
  if (q > 1 - pl) { const r = Math.sqrt(-2 * Math.log(1 - q)); return -(((((c[0] * r + c[1]) * r + c[2]) * r + c[3]) * r + c[4]) * r + c[5]) / ((((d[0] * r + d[1]) * r + d[2]) * r + d[3]) * r + 1); }
  const r = q - 0.5, t = r * r;
  return (((((a[0] * t + a[1]) * t + a[2]) * t + a[3]) * t + a[4]) * t + a[5]) * r / (((((b[0] * t + b[1]) * t + b[2]) * t + b[3]) * t + b[4]) * t + 1);
}
list.forEach(([, p], i) => {
  const q = (i + 0.5) / list.length;
  p.rating = Math.round(Math.max(500, Math.min(2500, 1400 + 450 * normInv(q))) / 5) * 5;
});
const rows = list.map(([id, p]) => {
  const alts = Object.entries(p.alts || {}).filter(([, v]) => v.length).map(([k, v]) => `${k}:${v.join(' ')}`).join(';');
  return [id, p.fen, p.moves.join(' '), p.rating, p.themes.join(','), alts].join('|');
});
const js = `/* Tactics puzzles generated for this app with the Stockfish engine (tools/puzzlegen.js).
 * One per line: id|fen|moves (UCI; the first is the opponent's mistake)|rating|themes|alternative answers by ply */
window.PUZZLES = (function () {
  const RAW = \`
${rows.join('\n')}
\`;
  return RAW.trim().split('\\n').map((line) => {
    const [id, fen, moves, rating, themes, alts] = line.split('|');
    const a = {};
    if (alts) for (const part of alts.split(';')) { const [k, v] = part.split(':'); a[k] = v.split(' '); }
    return { id, fen, moves: moves.split(' '), rating: +rating, themes: themes ? themes.split(',') : [], alts: a };
  });
})();
`;
fs.writeFileSync(OUT, js);
const themes = {};
for (const [, p] of list) for (const t of p.themes) themes[t] = (themes[t] || 0) + 1;
console.log(`puzzles: ${list.length} (dropped ${bad} invalid, ${[...INPUTS].length} files)`);
console.log('themes:', JSON.stringify(themes));
const buckets = {};
for (const [, p] of list) { const b = Math.floor(p.rating / 200) * 200; buckets[b] = (buckets[b] || 0) + 1; }
console.log('ratings:', JSON.stringify(buckets));
console.log('bytes:', js.length);
