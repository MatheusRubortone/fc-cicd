const { hello } = require('./index');

test('retorna saudação correta', () => {
  expect(hello('Fullcycle')).toBe('Hello, Fullcycle!');
});
