// Copyright (C) 2014 Strongloop, see LICENSE.md
var fs = require('fs');
var util = require('util');

function LogBackend(startupTime, config, emitter, logger) {
  var config = config.log || {};
  var file = config.file || '-';
  var out;

  if (file === '-')
    out = config.stdout;
  else {
    // Try and determine synchronously whether we will be able to open the file.
    // This is a work-around for the statsd backend initialization being
    // synchronous, ATM.
    try {
      fs.close(fs.openSync(file, 'a'));
    } catch(er) {
      throw Error('Failed to load backend: log (' + er.message + ')');
    }
    out = fs.createWriteStream(file, {flags: 'a'});
  }

  emitter.on('flush', function(timestamp, metrics) {
    var ts = new Date(startupTime / 1000).toISOString();
    write(ts, metrics.counters, 'count');
    write(ts, metrics.timers, 'ms');
    write(ts, metrics.gauges, 'gauge');
  });

  function write(ts, metrics, type) {
    for (var name in metrics)
      out.write(util.format('%s %s=%s (%s)\n', ts, name, metrics[name], type));
  }

  return true; // Required to indicate success
}

exports.init = LogBackend;
