var loopback = require('loopback');
var boot = require('loopback-boot');
var favicon = require('serve-favicon');

var http = require('http')
  , path = require('path')
  ;

var app = module.exports = loopback();

app.use( favicon( path.resolve( __dirname, '../app/img/favicon.ico' ) ) );

app.use(loopback.compress());

 app.use(loopback.session({ saveUninitialized: true,
   resave: true, secret: 'keyboard cat' }));


// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

 app.use( loopback.static( path.resolve( __dirname, '../app' ) ) );

 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, '../app/views'));

app.get('/', function(req, res) {
  res.render('index');
});

 app.use(loopback.urlNotFound());

 app.use(loopback.errorHandler());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));

  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
