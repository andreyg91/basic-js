module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    let level = 1;

    arr.forEach((item) => {
      if (Array.isArray(item)) {
        count = this.calculateDepth(item) + 1;
        if (level < count) {
          level = count;
        }
      }
    });

    return level;
  }
};
