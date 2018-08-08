var Configuration = function() {

        this.Config = function() {

        var Configure = element(by.xpath('//*[@id="zrpeuidesigner-1465881492"]//div//span[text()="Configure"]'));
        browser.actions().doubleClick(Configure).perform();
    };

    };


module.exports = new Configuration();