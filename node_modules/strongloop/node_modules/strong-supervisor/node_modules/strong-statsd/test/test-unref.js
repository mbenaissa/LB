// Copyright (C) 2014 Strongloop, see LICENSE.md
var assert = require('assert');
var statsd = require('../')({debug: true, silent: true});
var started = false;

statsd.backend('internal');

// This test is for a condition that doesn't really apply anymore, since we
// don't spawn a child process, and we don't create a server socket. Its kept
// around for the moment to demonstrate refactoring hasn't changed behaviour.

// Not enough to hold node alive... but don't unref until AFTER child is
// started... otherwise parent process might prematurely exit, because there is
// nothing keeping it alive.
statsd.start(function(er) {
  console.log('started');
  if (er) throw er;
  started = true;
});

process.on('exit', function() {
  assert.equal(started, true);
});
