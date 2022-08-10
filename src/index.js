
// // You should implement your task here.

module.exports = function towelSort(matrix = []) {
  let result = [];
  let empty = [];

  if (matrix.length) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let index = i % 2 === 0 ? j : matrix[i].length - 1 - j;
        result.push(matrix[i][index]);
      }
    }
    return result;
  } else {
    return empty;
  };
}