const caesar = (text, key) => text.split('').map(ch => shift(ch, key)).join('');

const shiftMod = (n, m) => ((n % m) + m) % m;

const charGroup = (char) => (char < 90 ? 65 : 97);

const shift = (char, key) => {
  const charCode = char.charCodeAt();

  if ((charCode <= 90 && charCode >= 65) || (charCode <= 122 && charCode >= 97)) {
    return String.fromCharCode(
      shiftMod(charCode + key - charGroup(charCode), 26) + charGroup(charCode),
    );
  }
  return char;
};

module.exports = caesar;
