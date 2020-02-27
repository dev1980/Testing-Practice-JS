function arrayAnalyze(arr) {
  const object = {
    average: arrAverage(arr),
    min: arrMin(arr),
    max: arrMax(arr),
    length: arrLength(arr),
  };
  return object;
}

function arrAverage(arr) {
  const sum = arr.reduce((total, item) => total + item, 0);
  const average = sum / arr.length;
  return average;
}

function arrMin(arr) {
  return Math.min(...arr);
}

function arrMax(arr) {
  return Math.max(...arr);
}

function arrLength(arr) {
  const { length } = arr;
  return length;
}

module.exports = arrayAnalyze;