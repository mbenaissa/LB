var youtubePage = require('../pages/youtubePage');
// fs = require('fs');

describe('Youtube App Page', function() {

  // Setup
  beforeEach(function() {
      youtubePage.openPage();

  });

  // tests
  it('should have a title', function() {
    expect(youtubePage.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {

    expect(youtubePage.calculate(1,2)).toEqual('3');
  });

  it('should add four and six', function() {
    // Fill this in.
    expect(youtubePage.getresultText()).toEqual('0');
  });

//   Utils = {

//     /**
//      * @name screenShotDirectory
//      * @description The directory where screenshots will be created
//      * @type {String}
//      */
//     screenShotDirectory: 'outputdir/results/screen',

//     /**
//      * @name writeScreenShot
//      * @description Write a screenshot string to file.
//      * @param {String} data The base64-encoded string to write to file
//      * @param {String} filename The name of the file to create (do not specify directory)
//      */
//     writeScreenShot: function (data, filename) {
//     //    browser.debugger();
//         var stream = fs.createWriteStream(this.screenShotDirectory + filename);
//         stream.write(new Buffer(data, 'base64'));
//         stream.end();
//     }

// };

// /**
//  * Automatically store a screenshot for each test.
//  */
// afterEach(function () {

//     var currentSpec = jasmine.getEnv().currentSpec,
//         passed = currentSpec.results().passed();
//         if(false){
//             browser.takeScreenshot().then(function (png) {
//                 browser.getCapabilities().then(function (capabilities) {
//                     var browserName = capabilities.caps_.browserName,
//                         passFail = (passed) ? 'PASS' : 'FAIL',
//                         filename = browserName + ' /' + passFail + '/test-' + currentSpec.description + '.png';
//                     Utils.writeScreenShot(png, filename);
//                 });
//             });
//         }
// });

});
