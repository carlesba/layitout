const path = require('path')
const bourbonPaths = require('bourbon').includePaths

module.exports = {
  includePaths: [
    bourbonPaths,
    path.join(__dirname, 'sass')
  ]
};
