function capitalize(test) {
  test = test.split('');
  test[0] = test[0].toUpperCase();
  test = test.join('');

  return test;
}

module.exports = capitalize;