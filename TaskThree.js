function calc(a, b, operator) {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  if (operator === '*') {
    return a * b;
  }
  if (operator === '/') {
    return a / b;
  } else {
    return 'insert input';
  }
}

module.exports = calc;
