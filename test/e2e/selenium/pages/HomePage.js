homePage = {

    url: '#/home',
    // elements
    menu_Portal: element(by.xpath('/html/body/div[1]/nav/div/div/a')),
    menu_Docs: element(by.xpath('//*[@id="navbar"]/ul/li[1]/a')),

     // comportments
    getTitle: function() {
        return browser.getTitle();
    },
    verifyHtml: function(key1, key2) {
        var result;
        result = this.menu_Portal.isPresent();
        return result;
    }


}

module.exports = homePage;
