class NodePath {
  constructor(node, parent, parentPath, key, listKey) {
    this.node = node;
    this.parent = parent;
    this.parentPath = parentPath;
    this.key = key;
    this.listKey = listKey;
  }
}

module.exports = NodePath;