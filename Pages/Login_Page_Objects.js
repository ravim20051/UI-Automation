var Login_pageobject = function() {

Textfields : {

    this.Textfield_ID = function () {
        element(by.id().sendKeys());
    };

    this.Textfield_Xpath = function (path, value) {
        element(by.xpath(path)).sendKeys(value);
        browser.sleep(500);
    };

}

Buttons : {
    this.Button_Xpath_Click = function (path) {
        element(by.xpath(path)).click();
        browser.sleep(500);
    };

    this.Button_Css = function (classname) {
        element(by.css(classname)).click();
        browser.sleep(500);
    };

}

};


module.exports = new Login_pageobject();