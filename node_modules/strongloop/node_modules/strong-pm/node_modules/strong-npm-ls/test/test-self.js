require('./helpers');

var info = require('../package.json');
var root = path.dirname(require.resolve('../'));

console.log('root: %s', root);

ls.read(root, function(er, json) {
  assert.ifError(er);

  assert.equal(info.version, json.version);
  assert.equal(info.name, json.name);
  assert.equal('read-installed', json.dependencies['read-installed'].name);
  assert(json.dependencies['read-installed']._id);
  assert(json.dependencies['read-installed']._shasum);
  assert(json.dependencies['read-installed']._from);
});
