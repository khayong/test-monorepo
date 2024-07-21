const _ = require('lodash')
const compose = require('@tb/compose').compose

exports.execute = function() {
  console.log('execute from child')

  console.log(_.assign({}, {a: 1}));

  compose();
}
