const calculator = require('./calculator');

const cal = calculator;

test('add two numbers', () => {
  expect(cal.add(2, 4)).toBe(6);
});

test('subtract two numbers', () => {
  expect(cal.subtract(2, 4)).toBe(-2);
});

test('multiply two numbers', () => {
  expect(cal.multiply(2, 4)).toBe(8);
});

test('divide two numbers', () => {
  expect(cal.divide(6, 3)).toBe(2);
});