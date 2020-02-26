const reverseString = require('./reverseString');

test('for reversing the string', () => {
  expect(reverseString('orange')).toBe('egnaro');
});