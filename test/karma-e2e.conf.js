var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //test files
    //'node_modules/supertest/test/supertest.js',
    './test/e2e/superTest/*.js',
   // './test/e2e/**/*.js'
  ]);

  conf.proxies = {
    '/': 'http://localhost:9999/'
  };

  conf.urlRoot = '/__karma__/';

  conf.frameworks = ['requirejs','mocha', 'chai'];

  config.set(conf);
};
