const calc = require('./TaskThree');

test('add 1 and 2 equal 3', () => {
  expect(calc(1, 2, '+')).toBe(3);
});

test('minus 1 and 2 equal 1', () => {
  expect(calc(2, 1, '-')).toBe(1);
});

test('multiply 1 and 2 equal 2', () => {
  expect(calc(1, 2, '*')).toBe(2);
});

test('div 6/2 to equal 3', () => {
  expect(calc(6, 2, '/')).toBe(3);
});
