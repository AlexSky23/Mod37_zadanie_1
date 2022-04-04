const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    const a = 150;
    const b = 123;
    const c = 273;
  expect(sum(a, b)).toBe(c);
  console.log(sum(a, b)===c);
});