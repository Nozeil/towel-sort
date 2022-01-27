
// You should implement your task here.

module.exports = function towelSort(matrix) {
  return (matrix) ? matrix.reduce((arr, subArr, index) => {
    (index % 2) ? subArr.reverse().forEach(num => arr.push(num)) : subArr.forEach(num => arr.push(num));
    return arr;
  }, []) : [];
}
