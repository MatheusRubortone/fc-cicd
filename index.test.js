const { hello } = require('./index');

test('retorna saudação correta', () => {
  expect(hello('Desafio Fullcycle')).toBe('Hello, Desafio Fullcycle!');
});
