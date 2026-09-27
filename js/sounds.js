/* Synthesised sound effects (Web Audio API) — no audio files needed. */
(function () {
  const PREF_KEY = 'openingTrainer.sound';
  let ctx = null;
  let enabled = true;
  try {
    enabled = localStorage.getItem(PREF_KEY) !== 'off';
  } catch (e) { /* storage unavailable: default on */ }

  // Browsers only allow audio after a user gesture, so create/resume the context on the first one.
  function unlock() {
    try {
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
    } catch (e) { ctx = null; }
  }
  ['pointerdown', 'keydown', 'touchstart'].forEach((ev) => window.addEventListener(ev, unlock, { capture: true, passive: true }));

  function ready() {
    return enabled && ctx && ctx.state === 'running';
  }

  // Short filtered noise burst: the "wood" of a piece landing.
  function knock(t, { freq = 1800, q = 1.2, gain = 0.5, decay = 0.05 } = {}) {
    const len = Math.floor(ctx.sampleRate * (decay + 0.02));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = freq;
    bp.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + decay);
    src.connect(bp).connect(g).connect(ctx.destination);
    src.start(t);
  }

  // Sine/triangle tone with a quick attack and exponential decay.
  function tone(t, freq, { dur = 0.3, gain = 0.2, type = 'sine', attack = 0.005 } = {}) {
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(ctx.destination);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  // A bell: fundamental plus inharmonic partials.
  function bell(t, freq, gain = 0.18, dur = 1.2) {
    tone(t, freq, { dur, gain });
    tone(t, freq * 2.01, { dur: dur * 0.6, gain: gain * 0.35 });
    tone(t, freq * 3.02, { dur: dur * 0.35, gain: gain * 0.15 });
  }

  const sounds = {
    move() {
      const t = ctx.currentTime;
      knock(t, { freq: 1400, gain: 0.55, decay: 0.045 });
      tone(t, 170, { dur: 0.06, gain: 0.25 });
    },
    capture() {
      const t = ctx.currentTime;
      knock(t, { freq: 2200, gain: 0.7, decay: 0.05 });
      knock(t + 0.035, { freq: 1100, gain: 0.5, decay: 0.07 });
      tone(t, 130, { dur: 0.08, gain: 0.3 });
    },
    check() {
      const t = ctx.currentTime;
      knock(t, { freq: 1400, gain: 0.45, decay: 0.045 });
      tone(t + 0.02, 880, { dur: 0.14, gain: 0.12, type: 'triangle' });
      tone(t + 0.12, 1175, { dur: 0.2, gain: 0.12, type: 'triangle' });
    },
    checkmate() {
      const t = ctx.currentTime;
      knock(t, { freq: 1100, gain: 0.6, decay: 0.07 });
      [392, 330, 262].forEach((f, i) => tone(t + 0.05 + i * 0.13, f, { dur: 0.5, gain: 0.16, type: 'triangle' }));
      tone(t + 0.45, 131, { dur: 0.9, gain: 0.18 });
    },
    lineComplete() {
      const t = ctx.currentTime;
      bell(t, 1319, 0.16, 0.9); // E6
      bell(t + 0.09, 1976, 0.1, 0.8); // B6
    },
    sessionComplete() {
      const t = ctx.currentTime;
      // Rising C-major arpeggio into a held chord, with a sparkle on top.
      const notes = [523, 659, 784, 1047];
      notes.forEach((f, i) => tone(t + i * 0.11, f, { dur: 0.35, gain: 0.14, type: 'triangle' }));
      const c = t + notes.length * 0.11;
      [523, 659, 784, 1047].forEach((f) => tone(c, f, { dur: 1.4, gain: 0.08, type: 'triangle', attack: 0.02 }));
      tone(c, 262, { dur: 1.5, gain: 0.12 });
      [2093, 2637, 3136, 4186].forEach((f, i) => bell(c + 0.1 + i * 0.08, f, 0.05, 0.6));
    },
  };

  function play(name) {
    if (!ready() || !sounds[name]) return;
    try { sounds[name](); } catch (e) { /* never let audio break the app */ }
  }

  // Pick the right sound for a chess.js move object.
  function forMove(mv) {
    if (!mv) return;
    if (mv.san.includes('#')) play('checkmate');
    else if (mv.san.includes('+')) play('check');
    else if (mv.captured) play('capture');
    else play('move');
  }

  function setEnabled(on) {
    enabled = on;
    try { localStorage.setItem(PREF_KEY, on ? 'on' : 'off'); } catch (e) { /* ignore */ }
    if (on) { unlock(); play('move'); }
  }

  window.Sound = { play, forMove, setEnabled, isEnabled: () => enabled };
})();
