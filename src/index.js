const fs = require('fs');
const path = require('path');
const { transformSync } = require('./core');

function getCode() {
  const codeFile = path.resolve(__dirname, '../code.js');
  const code = fs.readFileSync(codeFile).toString();
  return code;
}

const code = transformSync(getCode(), {
  plugins: [
    [
      function (api, options) {
        return {
          vistor: {
            Identifier: {
              enter: path => {
                path.node.name = 'bb';
              },
              // exit: (path) => {
              //   let curPath = path;
              //   while (curPath) {
              //       console.log(curPath.node.type);
              //       curPath = curPath.parentPath;
              //   }
              // }
            }
          }
        }
      }, {
        // nothing
      }
    ],
    [
      function (api, options) {
        return {
          vistor: {
            StringLiteral(path) {
              path.node.raw += ' // by爆爆'
            }
          }
        }
      }
    ]
  ]
});

console.log(code);

// const ast = Parser.parse(code);
// console.log(JSON.stringify(ast, null, 2))
// console.log(astDefinationsMap)
// const vistors = {
//   Identifier: {
//     enter: path => {
//       path.node.name = 'bb';
//     },
//     // exit: (path) => {
//     //   let curPath = path;
//     //   while (curPath) {
//     //       console.log(curPath.node.type);
//     //       curPath = curPath.parentPath;
//     //   }
//     // }
//   }
// }
// traverse(ast, vistors);
// console.log(generate(ast));
// console.log(JSON.stringify(ast, null, 2));
