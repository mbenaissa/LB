var youtubePage = {

    // elements
    firstNumber: element(by.model('first')),
    secondNumber: element(by.model('second')),
    goButton: element(by.id('gobutton')),
    latestResult: element(by.binding('latest')),

    // comportments
    getTitle: function() {
        return browser.getTitle();
    },
    calculate: function(key1, key2) {
        this.firstNumber.sendKeys(key1);
        this.secondNumber.sendKeys(key2);
        this.goButton.click();
        return this.latestResult.getText();
    },
    openPage: function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        //    browser.get(config.baseUrl + url);
    },
    getresultText: function() {
        return this.latestResult.getText();
    }
}

module.exports = youtubePage;
