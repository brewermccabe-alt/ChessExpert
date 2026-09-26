/* Training session: walks the repertoire tree toward positions that need practice. */
(function () {
  class Trainer {
    /**
     * mode: 'review' (due cards), 'learn' (new cards), 'drill' (everything, schedule untouched)
     * ui: { onPosition(chess, lastMove), onPrompt(info), onLineEnd(info), onDone(summary), onFeedback(kind, text) }
     */
    constructor(rep, mode, ui) {
      this.rep = rep;
      this.mode = mode;
      this.ui = ui;
      this.done = new Set();
      this.retry = new Set();
      this.memo = new Map();
      this.stats = { correct: 0, wrong: 0, learned: 0, lines: 0 };
      this.timer = null;
      this.stopped = false;
    }

    isTarget(key) {
      const rep = this.rep;
      if (!Rep.isUserPos(rep, key)) return false;
      const pos = rep.positions[key];
      if (!pos || !Object.keys(pos.moves).length) return false;
      if (this.retry.has(key)) return true;
      if (this.done.has(key)) return false;
      const card = rep.cards[key];
      if (this.mode === 'review') return !!card && card.due <= Date.now();
      if (this.mode === 'learn') return !card;
      return true;
    }

    // Does the subtree rooted at key contain a target? (cycle-safe, memoised per step)
    hasTarget(key, onPath = new Set()) {
      if (this.memo.has(key)) return this.memo.get(key);
      if (onPath.has(key)) return false;
      const pos = this.rep.positions[key];
      if (!pos) return false;
      let result = this.isTarget(key);
      if (!result) {
        onPath.add(key);
        for (const to of Object.values(pos.moves)) {
          if (this.hasTarget(to, onPath)) { result = true; break; }
        }
        onPath.delete(key);
      }
      this.memo.set(key, result);
      return result;
    }

    remaining() {
      // Count distinct target positions reachable from the root.
      const seen = new Set();
      const stack = [Rep.rootKey(this.rep)];
      let n = 0;
      while (stack.length) {
        const k = stack.pop();
        if (seen.has(k) || !this.rep.positions[k]) continue;
        seen.add(k);
        if (this.isTarget(k)) n++;
        for (const to of Object.values(this.rep.positions[k].moves)) stack.push(to);
      }
      return n;
    }

    start() {
      this.memo.clear();
      if (!this.hasTarget(Rep.rootKey(this.rep))) {
        this.ui.onDone(this.stats, true);
        return;
      }
      this.stats.lines++;
      this.chess = new Chess(this.rep.rootFen);
      this.key = Rep.rootKey(this.rep);
      this.lastMove = null;
      this.ui.onPosition(this.chess, null);
      this.step();
    }

    stop() {
      this.stopped = true;
      clearTimeout(this.timer);
    }

    later(fn, ms) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => { if (!this.stopped) fn(); }, ms);
    }

    play(san) {
      const mv = this.chess.move(san);
      this.lastMove = mv;
      this.key = Rep.posKey(this.chess.fen());
      this.ui.onPosition(this.chess, mv);
      return mv;
    }

    step() {
      this.memo.clear();
      const pos = this.rep.positions[this.key];
      const moves = pos ? Object.entries(pos.moves) : [];
      const userTurn = Rep.isUserPos(this.rep, this.key);

      if (userTurn && this.isTarget(this.key)) {
        this.awaiting = { key: this.key, attempts: 0, failed: false, isNew: !this.rep.cards[this.key] };
        this.ui.onPrompt({
          isNew: this.awaiting.isNew,
          answers: moves.map(([san]) => san),
          comment: pos.comment,
          remaining: this.remaining(),
        });
        return;
      }

      const next = moves.filter(([, to]) => this.hasTarget(to));
      if (!next.length) {
        this.ui.onLineEnd({ remaining: this.remaining() });
        this.later(() => this.start(), 1200);
        return;
      }
      const [san] = userTurn ? next[0] : next[Math.floor(Math.random() * next.length)];
      this.later(() => {
        this.play(san);
        this.step();
      }, userTurn ? 250 : 450);
    }

    // Called by the UI when the user plays a move while a prompt is open.
    // Returns 'correct' | 'wrong' | null
    answer(from, to, promotion) {
      const a = this.awaiting;
      if (!a) return null;
      const test = new Chess(this.chess.fen());
      let mv;
      try {
        mv = test.move({ from, to, promotion });
      } catch (e) {
        return null;
      }
      const pos = this.rep.positions[a.key];
      if (pos.moves[mv.san] !== undefined) {
        this.awaiting = null;
        if (a.isNew) {
          if (this.mode !== 'drill') Rep.introduce(this.rep, a.key);
          this.stats.learned++;
        } else if (!a.failed) {
          if (this.mode !== 'drill') Rep.grade(this.rep, a.key, true);
          this.stats.correct++;
        }
        if (!a.failed) {
          this.retry.delete(a.key);
          this.done.add(a.key);
        }
        this.ui.onFeedback('correct', mv);
        this.play(mv.san);
        this.later(() => this.step(), 300);
        return 'correct';
      }
      a.attempts++;
      if (!a.failed && !a.isNew) {
        a.failed = true;
        this.stats.wrong++;
        if (this.mode !== 'drill') Rep.grade(this.rep, a.key, false);
        this.retry.add(a.key);
      }
      this.ui.onFeedback('wrong', mv, a.attempts);
      return 'wrong';
    }

    hint() {
      const a = this.awaiting;
      if (!a) return null;
      if (!a.failed && !a.isNew) {
        a.failed = true;
        this.stats.wrong++;
        if (this.mode !== 'drill') Rep.grade(this.rep, a.key, false);
        this.retry.add(a.key);
      }
      return Object.keys(this.rep.positions[a.key].moves);
    }

    skipLine() {
      this.awaiting = null;
      this.later(() => this.start(), 50);
    }
  }

  window.Trainer = Trainer;
})();
