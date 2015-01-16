// Copyright (C) 2014 Strongloop, see LICENSE.md
var assert = require('assert');
var Statsd = require('../');
var tap = require('tap');

tap.test('fail with multiple statsd', function(t) {
  var statsd = new Statsd();
  t.throws(function() {
    statsd.backend('statsd://xxx');
    statsd.backend('statsd://yyy');
  }, {name: 'Error', message: 'statsd: metrics already configured'});
  t.end();
});

tap.test('fail with multiple internal', function(t) {
  var statsd = new Statsd();
  t.throws(function() {
    statsd.backend('internal:');
    statsd.backend('internal');
  }, {name: 'Error', message: 'internal: metrics already configured'});
  t.end();
});

tap.test('fail with no syslog', function(t) {
  var statsd = new Statsd();
  t.throws(function() {
    statsd.backend('syslog');
  }, {name: 'Error', message: 'syslog not supported'});
  t.end();
});

process.on('exit', function(code) {
  console.log('EXIT:', code);
});
