#!/usr/bin/env node

var tree = require('../');
var util = require('util');

module.exports = function(printable) {
  var where = process.argv[2] || '.';
  var depth = process.argv[3] == null ? Number.MAX_VALUE : +process.argv[3];

  tree.read(where, function(e,d) {
    if (e) throw e;
    if (printable)
      console.log(tree.printable(d, depth));
    else
      console.log(util.inspect(d, {depth: null}));
  });
};
