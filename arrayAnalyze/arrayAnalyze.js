function arrayAnalyze(arr) {
  const object = {
    average: arrAverage(arr),
    min: arrMin(arr),
    max: arrMax(arr),
    length: arrLength(arr)
  };
  return object;
};

function arrAverage(arr) {
  const sum = arr.reduce((total, item) => {
    return total + item;
  }, 0);
  const average = sum / arr.length;
  return average;
}

function arrMin(arr) {
  const min = Math.min(...arr);
  return min;
}

function arrMax(arr) {
  const max = Math.max(...arr);
  return max;
}

function arrLength(arr) {
  const { length } = arr;
  return length;
}

module.exports = arrayAnalyze;