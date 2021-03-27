module.exports = function countCats(matrix) {
  let count = 0;
  matrix.flat().forEach((item) => {
    if (item === '^^') {
      count++;
    }
  });
  return count;
};
