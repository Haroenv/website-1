export default {
  eventName: 'resize',
  bind() {
    if (window.optimizedEvents.resize) this.name = 'resize::optimized';
    const handler = this.handler = () => {
      this.el.style.height = `${this.el.offsetWidth * Number(this.expression || 1)}px`;
    };
    window.addEventListener(this.eventName, handler);
    setTimeout(handler, 0);
  },
  unbind() {
    this.el.style.height = '';
    window.removeEventListener(this.eventName, this.hander);
  },
};
