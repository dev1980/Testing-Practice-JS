const arrayAnalyze = require('./arrayAnalyze');

const object = arrayAnalyze([1, 8, 3, 4, 2, 6]);

test('test to find average, min, max and length', () => {
  expect(object.average).toBe(4);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(6);
});
