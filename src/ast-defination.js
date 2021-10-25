const AST_DEFINATIONS_MAP = new Map();

AST_DEFINATIONS_MAP.set('Program', {
    visitor: ['body']
});
AST_DEFINATIONS_MAP.set('VariableDeclaration', {
    visitor: ['declarations']
});
AST_DEFINATIONS_MAP.set('VariableDeclarator', {
    visitor: ['id', 'init']
});
AST_DEFINATIONS_MAP.set('Identifier', {});
AST_DEFINATIONS_MAP.set('NumericLiteral', {});
AST_DEFINATIONS_MAP.set('StringLiteral', {});

module.exports = AST_DEFINATIONS_MAP;