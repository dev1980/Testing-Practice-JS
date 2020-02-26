const caesar = require('./caesar');

test('test caesar cipher with normal strings', () => {
  expect(caesar('Hello world', 4)).toBe('Lipps asvph');
  expect(caesar('ABC', 4)).toBe('EFG');
});

test('decrypt caesar cipher', () => {
  expect(caesar('Lipps asvph', -4)).toBe('Hello world');
  expect(caesar('EFG', -4)).toBe('ABC');
});

test('test caesar cipher with exclamation and punctuation', () => {
  expect(caesar('caesar cipher, and his crypto Algorithms!', 18)).toBe('uswksj uahzwj, sfv zak ujqhlg Sdygjalzek!');
});
