class Printer {
  constructor() {
    this.buff = '';
  }
  space() {
    this.buff += ' ';
  }
  nextLine() {
    this.buff += '\n';
  }

  Program(node) {
    node.body.forEach(item => {
      this[item.type](item) + ';';
      this.nextLine();
    });
  }

  VariableDeclaration(node) {
    this.buff += node.kind;
    this.space();
    node.declarations.forEach((declaration, index) => {
      if (index !== 0) {
        this.buff += ',';
      }
      this[declaration.type](declaration);
    });
    this.buff += ';';
  }

  VariableDeclarator(node) {
    this[node.id.type](node.id);
    this.buff += '=';
    this[node.init.type](node.init);
  }

  Identifier(node) {
    this.buff += node.name;
  }

  StringLiteral(node) {
    this.buff += node.raw;
  }

}

class Generator extends Printer {
  generate(node) {
    this[node.type](node);
    return this.buff;
  }
}

module.exports = function (node) {
  return new Generator().generate(node);
}