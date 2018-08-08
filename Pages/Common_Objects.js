var Common_Objects = function() {

Textfields : {

        this.Textfield_ID = function () {
            element(by.id().sendKeys());
        };

        this.Textfield_Xpath = function (path, value) {
            element(by.xpath(path)).sendKeys(value);
            browser.sleep(500);
        };

    }

Input_fields : {

   this.Search_Xpath = function (path, value) {
        element(by.xpath(path)).sendKeys(value);
        browser.sleep(500);
    };

    this.Add_Xpath = function (path) {
        browser.sleep(2000);
        element(by.xpath(path)).click();
        browser.sleep(500);
    };


}

Buttons : {
        this.Button_Xpath_Click = function (path) {
            element(by.xpath(path)).click();
            browser.sleep(500);
        };

        this.Button_Css_Click = function (classname) {
            element(by.css(classname)).click();
            browser.sleep(500);
        };

        this.Button_CSS_Text_Click = function (tabdesp, tabname) {
            element(by.cssContainingText(tabdesp, tabname)).click();
            browser.sleep(1000);
        };

    }

Browser_Actions : {

            this.browser_actions = function(value){
                browser.actions().mouseMove(value).click().perform();
                browser.sleep(1000);
            };
}




};


module.exports = new Common_Objects();