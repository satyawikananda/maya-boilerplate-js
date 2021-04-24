const foo = require('../src/index');

describe('Test starter', () => {
  test('Should be string', () => {
    expect(foo.foo).toBe('bar');
  });
});
