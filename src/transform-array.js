module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        if (i < arr.length - 1) {
          res.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i > 0) {
          res.push(res[res.length - 1]);
        }
        break;
      case '--discard-next':
        if (i < arr.length) {
          res.push(undefined);
          i += 1;
        }
        break;
      case '--discard-prev':
        if (i > 0) {
          res.pop();
        }
        break;
      default:
        res.push(arr[i]);
    }
  }

  return res.filter((item) => item !== undefined);
};
