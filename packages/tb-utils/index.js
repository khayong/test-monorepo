const _ = require('lodash')

exports.execute = function() {
  console.log('execute from child')

  console.log(_.assign({}, {a: 1}));
}
