const caesar = require('caesar');

test('encrypt hello world', () => {
  expect(caesar('ABC', 4)).toBe('DEF');
});
