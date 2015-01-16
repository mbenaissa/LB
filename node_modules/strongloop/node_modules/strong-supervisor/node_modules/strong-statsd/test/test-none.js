// Copyright (C) 2014 Strongloop, see LICENSE.md
var assert = require('assert');
var Statsd = require('../');
var statsd = new Statsd();
var tap = require('tap');

tap.test('fail with no backends', function(t) {
    t.plan(2);
    statsd.start(function(er) {
      t.assert(er);
      t.equal(er.message, 'start failed: no backends configured');
    });
});

process.on('exit', function(code) {
  console.log('EXIT:', code);
});
