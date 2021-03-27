const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length();
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || this.getLength < position) {
      this.chain = [];
      throw Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chain.join('~~');
    this.chain.splice(0, this.chain.length);
    return chain;
  },
};

module.exports = chainMaker;
