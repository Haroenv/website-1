export default {
  bind() {
    this.set(this.expression.split(/\s+/));
  },
  unbind() {
    this.set([]);
  },
  optimize(type, obj) {
    let running = false;
    function throttler() {
      if (running) return;
      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(`${type}::optimized`));
        running = false;
      });
    }
    obj.addEventListener(type, throttler);
    obj.optimizedEvents[type] = () => {
      delete obj.optimizedEvents[type];
      obj.removeEventListener(type, throttler);
    };
  },
  set(val) {
    const obj = this.modifiers.window ? window : this.el;
    const _new = val instanceof String ? [ val ] : val;
    obj.optimizedEvents = obj.optimizedEvents || {};
    for (let i = 0, l = _new.length; i < l; i++) {
      const name = _new[i];
      const event = obj.optimizedEvents[name];
      if (event) {
        event();
      } else {
        this.optimize(name, obj);
      }
    }
  },
};
