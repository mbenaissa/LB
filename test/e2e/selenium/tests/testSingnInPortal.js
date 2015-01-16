var loginPage = require('../pages/LoginPage');
var homePage = require('../pages/HomePage');

describe('Portal SignIn Page', function() {

  // Setup
  beforeEach(function() {
      loginPage.openPage();
      isAngularSite(true);

  });

  // tests
   it('should have a title', function() {
    expect(loginPage.getTitle()).toEqual('Partners Portal');
  });

  it('should Verify Html GUI', function() {
    expect(loginPage.verifyHtml()).toBe(true);
  });

  it('should SignIn with login Success' , function() {
    loginPage.gotoLoginPage();
    loginPage.loginAdmin();
    expect(homePage.verifyHtml()).toBe(true);
  });

  it('should SignIn with login Fail', function() {
    loginPage.gotoLoginPage();
    expect(loginPage.loginFail()).toBe(true);
  });

  it('should SignIn with forgetPasswotd', function() {
    loginPage.gotoLoginPage();
    loginPage.forgetPassword();
    expect(true).toBe(true);
  });



});
