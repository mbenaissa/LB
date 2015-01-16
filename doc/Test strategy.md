========Test strategy :==========


1- Test types


Three types are required :
1- Unit testing
2- Midway testing
3- E2E testing

1/ Unit Testing
 - Code-level testing
 - Best for testing services, classes and objects
 - Sandboxed & Isolated testing
 - Mocking & Stubbing required
 - Fast
 - MochaJS and ChaiJS are used for the unit testing


2/ Midway Testing
 - Application/Code-level testing
 - Can access all parts of an application
 - Can interact directly with the web application code
 - Not really effective for stubbing & mocks
 - Easily breaks since it relies on application code to operate (but this may be good to catch code-level errors)
 - Not possible to test anything inside of your index.html file
 - Fast, but slow for XHR requests
 - MochaJS and ChaiJS are used for the Midway testing



 3/ E2E Testing

 - Web-level testing
 - Requires its own special web server
 - The expect and should matchers are specific to AngularJS (MochaJS or Chai won't work)
 - Perfect for integration tests
 - Works really well with assertions against future data
 - Unable to access Application JavaScript code (only rendered HTML and some AngularJS info)
 - Slow
 - Protractor
 - AngularJS Scenarios Runner(around Jasmine JS testing framework)

--> Very good example of Coding tests : https://github.com/yearofmoo-articles/AngularJS-Testing-Article


2- Tools



To make tests as well we will use a stack of tools:

Mocha :

Karma : - https://github.com/karma-runner/grunt-karma
        - http://karma-runner.github.io/0.12/intro/installation.html

Jsamine :

ngMidwaytester : https://github.com/yearofmoo/ngMidwayTester

Istanbul : code coverage


3- Continues Integration


1- Karma integrate easilly with Grunt
2- JenkinsCI pluguin can be easilly configured to automate the tests launching


4- Docs
Very good blog : http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html
