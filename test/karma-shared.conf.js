module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['mocha'],
    //reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
    reporters: ['dots','progress', 'junit'],
    junitReporter: {
      outputFile: 'test-results.xml'
    },
    coverageReporter: {
      // specify a common output directory
      dir: 'coverage',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },

      ],
       // instrumenter: {
       //     '**/*.js': 'istanbul' // Force the use of the Istanbul instrumenter to cover CoffeeScript files
       //   }
    },

    files : [
      //3rd Party Code
      'app/bower_components/underscore/underscore.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-underscore/angular-underscore.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angularjs-scope.safeapply/src/Scope.SafeApply.js',
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.js',
      'client/scripts/lib/ui-bootstrap-tpls-0.12.0.min.js',


      //App-specific Code
      'client/scripts/config/config.js',
      'client/scripts/services/**/*.js',
      'client/scripts/directives/**/*.js',
      'client/scripts/controllers/**/*.js',
      'client/scripts/filters/**/*.js',
      'client/scripts/config/routes.js',
      'client/scripts/config/router.js',
      'client/scripts/app.js',

      //Test-Specific Code
      'node_modules/chai/chai.js',
      'test/lib/chai-should.js',
      'test/lib/chai-expect.js'
    ]
  }
};


