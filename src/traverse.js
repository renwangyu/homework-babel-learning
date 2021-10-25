const astDefinationsMap = require('./ast-defination');
const NodePath = require('./node-path');

function traverse(node, vistors, parent, parentPath, key, listKey) {
  const next = astDefinationsMap.get(node.type);
  let vistorFunc = vistors[node.type] || {};

  if (typeof vistorFunc === 'function') {
    vistorFunc = {
      enter: vistorFunc
    }
  }

  const path = new NodePath(node, parent, parentPath, key, listKey)
  vistorFunc.enter && vistorFunc.enter(path);

  if (next && next.visitor) {
    next.visitor.forEach(key => {
      const prop = node[key];
      if (Array.isArray(prop)) {
        prop.forEach((childNode, index) => {
          traverse(childNode, vistors, node, path, key, index);
        })
      } else {
        traverse(prop, vistors, node, path, key);
      }
    })
  }

  vistorFunc.exit && vistorFunc.exit(path);

}

module.exports = traverse;