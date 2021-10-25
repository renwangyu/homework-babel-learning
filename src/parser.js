const acorn = require('acorn');
const Parser = acorn.Parser;
const literalExtend = require('./literal-extend');

module.exports = Parser.extend(literalExtend);