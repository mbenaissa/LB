
 var request = requirejs('supertest');
 var app = requirejs( process.cwd() + '/.');
 var assert = requirejs('assert');

function json(verb, url) {
  return request(App)[verb](url)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/);
}

describe('Youtube', function() {
  this.timeout(30000);

  it('should have a properly working VideosCtrl controller', function($rootScope, $controller, $httpBackend) {
    var searchTestAtr = 'cars';
    var response = json('get', 'https://gdata.youtube.com/feeds/api/videos?q=' + searchTestAtr + '&v=2&alt=json&callback=JSON_CALLBACK');
    response.respond(null);
    response.expect(200, function(err, res) {
        if (err) return done(err); 
        done();
     });
   });

 });



