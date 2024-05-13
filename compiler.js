const tokenizer = require('./tokenizer');
module.exports = function compiler(input) {
    const tokens = tokenizer(input);
    return tokens;
}