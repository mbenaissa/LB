// A reference configuration file.
exports.config = {
    // ----- How to setup Selenium -----
    //
    // There are three ways to specify how to use Selenium. Specify one of the
    // following:
    //
    // 1. seleniumServerJar - to start Selenium Standalone locally.
    // 2. seleniumAddress - to connect to a Selenium server which is already
    //    running.
    // 3. sauceUser/sauceKey - to use remote Selenium servers via SauceLabs.

    // The location of the selenium standalone server .jar file.
    seleniumAddress: ' http://192.168.2.222:4444/wd/hub',
    //seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
    // The port to start the selenium server on, or null if the server should
    // find its own unused port.
    seleniumPort: 4444,
    // Chromedriver location is used to help the selenium standalone server
    // find chromedriver. This will be passed to the selenium jar as
    // the system property webdriver.chrome.driver. If null, selenium will
    // attempt to find chromedriver using PATH.

    //chromeDriver: '../node_modules/protractor/selenium/chromedriver',

    // Additional command line options to pass to selenium. For example,
    // if you need to change the browser timeout, use
    // seleniumArgs: ['-browserTimeout=60'],
    seleniumArgs: [],

    // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
    // The tests will be run remotely using SauceLabs.
    sauceUser: null,
    sauceKey: null,

    // ----- What tests to run -----
    //
    // Spec patterns are relative to the location of this config.
    specs: [
        '../test/e2e/selenium/tests/**/*.js'
    ],
    // suites: {
    //     homepage: 'tests/e2e/homepage/**/test-*.js',
    //     search: ['tests/e2e/profile/**/test-*.js']
    // },

    // ----- Capabilities to be passed to the webdriver instance ----
    //
    // For a full list of available capabilities, see
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities
    // and

    // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js

    // capabilities: {
    //   'browserName': 'chrome'
    // },

    multiCapabilities: [{
            browserName: 'chrome',
            // platform: 'Linux'
        }
         // ,
         // {
         //   browserName: 'firefox',
         //   //platform: 'Linux'
         // },
        //  {
        //    browserName: 'opera',
        // //  platform: 'OS X 10.9'
        //  },
        // {
        //    browserName: 'internet explorer',
        //    //platform: 'Windows 8.1'
        // }
    ],


    maxSessions: 3,

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: ' http://192.168.2.241:3000',

    // Selector for the element housing the angular app - this defaults to
    // body, but is necessary if ng-app is on a descendant of <body>
    rootElement: 'body',

    // ----- Options to be passed to minijasminenode -----
    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 10000
    },
    onPrepare: function() {
        // At this point, global 'protractor' object will be set up, and jasmine
        // will be available. For example, you can add a Jasmine reporter with:
        //jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('outputdir/', true, true));

        var folderName = (new Date()).toString().split(' ').splice(1, 4).join(' ');
        var mkdirp = require('mkdirp');
        var outPutFolder = "./outputdir"; // + /folderName
        require('jasmine-reporters');
        var HtmlReporter = require('protractor-html-screenshot-reporter');

        browser.manage().window().maximize();
        //browser.get("/");
        // get the base Url
        global.getBaseUrl = function(){
          return this.baseUrl;
        }

        // expose a global method that can be called in the tests
        global.isAngularSite = function(flag) {
            browser.ignoreSynchronization = !flag;
        };

        mkdirp(outPutFolder, function(err) {
            if (err) {
                console.error(err);
            } else {
                // reporter for Jenkins using Junit format
                jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(outPutFolder, true, true));

                // report for visualisation
                var hmtlReporter = new HtmlReporter({
                    baseDirectory: outPutFolder + '/screenshots',
                    // metaDataBuilder: function metaDataBuilder(spec, descriptions, results, capabilities) {
                    //     // Return '<browser>/<specname>' as path for screenshots:
                    //     // Example: 'firefox/list-should work'.
                    //     return {
                    //         description: capabilities.caps_.browser + descriptions.join(' '),
                    //         passed: results.passed()
                    //     };
                    // },
                     takeScreenShotsForSkippedSpecs: true,
                     takeScreenShotsOnlyForFailedSpecs: true,
                     //takeScreenShotsOnlyForPassedSpecs: true,
                    docTitle: 'E2E-Screenshot-Report'


                });

                jasmine.getEnv().addReporter(hmtlReporter);

            }
        });

    }

};
