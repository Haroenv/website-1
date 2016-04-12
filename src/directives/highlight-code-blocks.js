export default {
  interval: null,
  highlightCodeBlocks() {
    if (!window.hljs) return;
    const pre = this.el.getElementsByTagName('pre');

    pre.forEach = Array.prototype.forEach;
    pre.forEach((preBlock) => {
      if (pre.$highlighted) return;
      pre.$highlighted = true;
      const code = preBlock.getElementsByTagName('code');
      code.forEach = Array.prototype.forEach;
      code.forEach((codeBlock) => {
        window.hljs.highlightBlock(codeBlock);
      });
    });
  },
  update() {
    setTimeout(() => {
      this.highlightCodeBlocks();
    }, 1000);
  },
};
