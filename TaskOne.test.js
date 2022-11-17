const strLength = require('./TaskOne');

function throwError(str) {
  if (str.length < 1 || str.length > 10) {
    throw new Error('wrong input');
  }
}

test('string length equal to or greater than 1 or less than 10', () => {
  expect(strLength('nabeel')).toBe(6);
});

test('throw an error', () => {
  expect(() => throwError('throwwwwwwwssss')).toThrow(Error);
});
