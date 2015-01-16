/*global describe,it,beforeEach */
var net = require('net');
var waitTillListening = require('../');
var expect = require('chai').expect;

describe('waitForListening', function() {
  var uniquePort = 62000;

  beforeEach(function makeUniquePort() {
    uniquePort++;
  });

  it('returns immediately when the server is listening', function(done) {
    // Let's define immediately as in less than 100 ms
    this.timeout(100);

    givenServerListeningAt(uniquePort)
      .on('listening', function() {
        waitTillListening({ port: uniquePort, timeoutInMs: 50}, done);
      });
  });

  it('returns error when timeout expires', function(done) {
    this.timeout(100);

    var start = new Date();
    waitTillListening(
      { port: uniquePort, timeoutInMs: 50},
      function(err) {
        var duration = new Date() - start;

        expect(duration, 'duration').to.be.gte(50);
        expect(err, 'err').to.not.equal(undefined);
        done();
      }
    );
  });

  it('waits for the server to start', function(done) {
    waitTillListening({ port: uniquePort, timeoutInMs: 1000 }, done);
    setTimeout(function() { givenServerListeningAt(uniquePort); }, 300);
  });

  function givenServerListeningAt(port) {
    return net.createServer()
      .listen(port)
      .on('connection', function(connection) {
        connection.end();
      });
  }
});
