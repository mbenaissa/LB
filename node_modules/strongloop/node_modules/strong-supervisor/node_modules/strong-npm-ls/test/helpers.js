assert = require('assert');
fs = require('fs');
ls = require('../');
path = require('path');
tap = require('tap');
util = require('util');

assertPrintable = function assertPrintable(where, depth, expectFile) {
  var n = util.format('where %s depth %d expect %s', where, depth, expectFile);
  tap.test(n, function(t) {
    t.plan(1);
    var root = path.resolve(__dirname, where);

    ls.read(root, function(er, json) {
      assert.ifError(er);

      var filename = path.resolve(module.filename, '..', expectFile);
      var expect = fs.readFileSync(filename, 'utf-8');
      var output = ls.printable(json, depth) + '\n';

      if (output !== expect) {
        console.error('depth: %d', depth);
        console.error('expect: <\n%s>', expect);
        console.error('output: <\n%s>', output);
      }
      t.equal(output, expect);
    });
  });
}
