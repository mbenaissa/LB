module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    shell: {
      options : {
        stdout: true
      },
      npm_install: {
        command: 'sudo npm install'
      },
      bower_install: {
        command: 'bower install'
      },
      protractor_update: {
        command: 'node ./node_modules/protractor/bin/webdriver-manager update'
      },
      protractor_run : {
        command : './node_modules/protractor/bin/protractor ./test/protractor.config.js',
        options: {
          keepAlive: true,
          configFile: "./test/protractor.config.js"
        }
      },
      debugProtarctor: {
        command : './node_modules/protractor/bin/elementexplorer.js  http://angularjs.org'
      },
      font_awesome_fonts: {
        command: 'cp -R app/bower_components/components-font-awesome/font app/font'
      },
      solution_for_watch_ENOSPC:{
         command: 'echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p'
      },
      startServer : {
        command : 'node server/server.js'
      }
    },

    concurent:{
        target1: ['protractor:singlerun'],
        target2: ['protractor:run']
      },

    connect: {
      options: {
        base: 'app/'
      },
      // prodserver: {
      //  options: {
      //   protocol: 'https',
      //   port: 8443,
      //   //https://github.com/gruntjs/grunt-contrib-connect
      //   key: grunt.file.read('server.key').toString(),
      //   cert: grunt.file.read('server.crt').toString(),
      //   ca: grunt.file.read('ca.crt').toString()
      //   }
      // },
      webserver: {
        options: {
          port: 3000,
          keepalive: true
        }
      },
      devserver: {
        options: {
          port: 3000
        }
      },
      testserver: {
        options: {
          port: 3000
        }
      },
      coverage: {
        options: {
          base: 'coverage/',
          port: 5555,
          keepalive: true
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'client/scripts/{,*/}*.js'
      ]
    },

    open: {
      devserver: {
        path: 'http://localhost:3001'
      },
      coverage: {
        path: 'http://localhost:5555'
      }
    },

    karma: {
      unit: {
        configFile: './test/karma-unit.conf.js',
        autoWatch: false,
        singleRun: true
      },
      unit_auto: {
        configFile: './test/karma-unit.conf.js'
      },
      midway: {
        configFile: './test/karma-midway.conf.js',
        autoWatch: false,
        singleRun: true
      },
      midway_auto: {
        configFile: './test/karma-midway.conf.js'
      },
      e2e: {
        configFile: './test/karma-e2e.conf.js',
        autoWatch: false,
        singleRun: true
      },
      e2e_auto: {
        configFile: './test/karma-e2e.conf.js'
      },
      unit_coverage: {
        configFile: './test/karma-unit.conf.js',
        autoWatch: false,
        singleRun: true,
        reporters: ['progress', 'coverage'],
        preprocessors: {
          'client/scripts/{,*/}*.js': ['coverage']
        },
        coverageReporter: {
          type : 'html',
          dir : 'coverage/'
        }
      }
    },

    watch: {
      options : {
        livereload: 7777
      },
      assets: {
        files: ['app/styles/**/*.css','app/scripts/**/*.js'],
        tasks: ['concat']
      },
      protractor: {
        files: ['app/scripts/**/*.js','test/e2e/selenium/*.js'],
        tasks: ['protractor:singlerun']
      }
    },

    protractor: {
      options: {
        keepAlive: true,
        configFile: "./test/protractor.config.js"
      },

      local: {

       options: {
         keepAlive: true,
         debug: false, // use browser.debugger()
         // to be created
         configFile: "./test/protractor.config-local.js"
        }
      },
      singlerun: {
        options: {
          debug: false
        }
      },
      auto: {
        keepAlive: true,
        options: {
          args: {
            seleniumPort: 4444
          }
        }
      }
    },

    concat: {
      styles: {
        dest: './app/assets/app.css',
        src: [
          'client/styles/reset.css',
          'app/bower_components/components-font-awesome/css/font-awesome.css',
          'app/bower_components/bootstrap.css/css/bootstrap.css',
          'client/styles/app.css'
        ]
      },
      scripts: {
        options: {
          separator: '; '
        },
        dest: './app/assets/app.js',
        src: [
          'app/bower_components/underscore/underscore.js',
          'app/bower_components/angular/angular.js',
          'app/bower_components/angular-route/angular-route.js',
          'app/bower_components/angular-underscore/angular-underscore.js',
          'app/bower_components/angular-mocks/angular-mocks.js',
          'app/bower_components/angularjs-scope.safeapply/src/Scope.SafeApply.js',
          'app/bower_components/bootstrap/dist/js/bootstrap.js',

          'client/scripts/lib/ui-bootstrap-tpls-0.12.0.min.js',

          'client/scripts/config/router.js',
          'client/scripts/config/config.js',
          'client/scripts/services/**/*.js',
          'client/scripts/directives/**/*.js',
          'client/scripts/controllers/**/*.js',
          'client/scripts/filters/**/*.js',
          'client/scripts/config/routes.js',
          'client/scripts/app.js'
        ]
      }
    }
  });

  grunt.registerTask('test', ['jshint','connect:testserver','karma:unit','karma:midway', 'karma:e2e']);
  grunt.registerTask('test:unit', ['karma:unit']);
  grunt.registerTask('test:midway', ['connect:testserver','karma:midway']);
  //grunt.registerTask('test:e2e', ['connect:testserver', 'karma:e2e']);
 // grunt.registerTask('test:e2e', ['shell:startServer', 'karma:e2e']);

  grunt.registerTask('test:e2e', ['protractor:singlerun']);


  //keeping these around for legacy use
  grunt.registerTask('autotest', ['autotest:unit']);
  grunt.registerTask('autotest:unit', ['karma:unit_auto']);
  grunt.registerTask('autotest:midway', ['connect:testserver','karma:midway_auto']);
  //grunt.registerTask('autotest:e2e', ['shell:startServer','karma:e2e_auto']);
  grunt.registerTask('autotest:e2e', ['watch:protractor']);
  grunt.registerTask('debuging', ['shell:debugProtarctor']);



  //coverage testing
  grunt.registerTask('test:coverage', ['karma:unit_coverage']);
  grunt.registerTask('coverage', ['karma:unit_coverage','open:coverage', 'connect:coverage']);

  //installation-related
  grunt.registerTask('install', ['shell:npm_install','shell:bower_install','shell:font_awesome_fonts', 'shell:solution_for_watch_ENOSPC','shell:protractor_update', 'concat']);


  //defaults
  grunt.registerTask('default', ['startServer']);

  grunt.registerTask('startServer', ['install',  'shell:startServer']);

  //development
  grunt.registerTask('dev', ['watch:assets']);

  //server daemon
  grunt.registerTask('server', ['shell:startServer','connect:webserver']);
};
