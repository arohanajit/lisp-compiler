const compiler = require('./compiler');
const input = 'add(2, sub(4, 2))';
const tokens = compiler(input);
console.log(JSON.stringify(tokens, null, 2))