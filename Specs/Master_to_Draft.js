describe('Master_To_Draft', function() {
    var data = require('../Data/Testdata.json');
    var PO1 = require('../Pages/Common_Objects');
    var PO2 = require('../Pages/Configuration.js');


    it('Master to Draft - Maker', function () {

        browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Session_details))
        }), 9000);


//  Change Master to Draft

        PO1.Button_Xpath_Click(data.Designer_Start);

// Change Master to Draft

        browser.sleep(3000);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.cssContainingText('.workspace-state-read-only', 'Master'))
        }), 90000);


        expect(element(by.cssContainingText('.workspace-state-read-only', 'Master')).isDisplayed().then(function (visible) {
            if (visible) {
                console.log("Master is visible");
                PO1.Button_CSS_Text_Click(data.Master_button1, data.Master_Name);
                browser.sleep(4000);

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.cssContainingText('.v-label', 'Current Workspace: Master'))
                }), 9000);

                expect(element(by.cssContainingText('.v-label', 'Current Workspace: Master')).isDisplayed().then(function (yes) {
                    if (yes) {

                        console.log("Current Workspace: Master is visible");

                        expect(browser.wait(function () {
                            return browser.isElementPresent(by.xpath(data.Select_Master))
                        }), 90000);

                        expect(element(by.xpath(data.Select_Master)).isDisplayed().then(function (visibel) {

                            if (visibel) {

                                console.log("Master segment is visible");

                                element(by.xpath(data.Select_Master)).click();
                                browser.sleep(4000);
                                PO1.Button_Xpath_Click(data.Draft_Icon);
                                browser.sleep(2000);

                            }
                            else {
                                console.log("Master segment is not visible");
                            }
                        }))
                    }
                    else {
                        console.log("Master template is not visible to create draft");
                    }
                }))

            }
            else {
                console.log("Master is not visible");
            }

        }));

// Click Configuration - Configure Button

    });


    it('Configuration Popup', function () {


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Session_details))
        }), 9000);

        PO2.Config();


    });

});
