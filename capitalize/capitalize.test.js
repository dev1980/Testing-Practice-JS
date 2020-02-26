const capitalize = require('./capitalize');

test('capitalize the first letter', () => {
    expect(capitalize('name')).toBe('Name');
});