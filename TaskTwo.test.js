const reverseStr = require('./TaskTwo');

const data = 'nabeel';

const reverseString = reverseStr(data);

test('text string to reverse', () => {
  expect(reverseString).toBe('leeban');
});
