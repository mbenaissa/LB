loginPage = {

    baseUrl: 'https://localhost:3001/',
    url: '#/login',
    // elements
    Div_Presentation: element(by.id('main-content')),
    btn_SignIn: element(by.xpath('//*[@id="main-content"]/div/div[2]/div/button')),
    menu_Portal: element(by.xpath('/html/body/div[1]/nav/div/div/a')),
    input_UserName: element(by.id('username')),
    inputPassword: element(by.id('password')),
    link_ForgetPassword: element(by.xpath('//*[@id="login_form"]/a')),
    btn_Login: element(by.xpath('//*[@id="login_form"]/button')),
    div_Error_Login_Fail: element(by.xpath('//*[@id="login_form"]/div[1]/span[1]')),
    input_ForgottenEmail: element(by.id('forgot_email')),
    bnt_ResetPassword: element(by.xpath('//*[@id="forgot_form"]/div[3]/button')),


    // comportments
    getTitle: function() {
        return browser.getTitle();
    },
    verifyHtml: function(key1, key2) {
        var result;
        result = this.menu_Portal.isPresent() && this.btn_SignIn.isPresent();
        // && ;this.Div_Presentation.isPresent()
        return result;
    },
    openPage: function() {
        browser.get('/#/login');
    },
    gotoLoginPage: function() {
        this.btn_SignIn.click();
    },
    loginAdmin: function() {
        this.input_UserName.sendKeys('admin');
        this.inputPassword.sendKeys('admin');
        this.btn_Login.click();
    },
    loginFail: function() {
        this.input_UserName.sendKeys('admin1');
        this.inputPassword.sendKeys('admin1');
        this.btn_Login.click();
        return this.div_Error_Login_Fail.isPresent();
    },
    forgetPassword: function() {
        this.link_ForgetPassword.click();
        this.input_ForgottenEmail.sendKeys('xxxx@xxx.xxxx');
        this.bnt_ResetPassword.click();
    }


}
module.exports = loginPage;
