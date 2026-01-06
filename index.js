function hello(name) {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(hello('World'));
}

module.exports = { hello };