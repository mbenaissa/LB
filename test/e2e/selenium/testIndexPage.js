var protractor = require("gulp-protractor").protractor;

describe('Home Pages', function() {

   beforeEach( var ptor = protractor.getInstance());

   it('should load the indexPage', function() {
     ptor.get('/#');
     expect(ptor.findElement(protractor.By.id('search-key')).getText()).toBe('Search for youtube videos...');
   });

});
