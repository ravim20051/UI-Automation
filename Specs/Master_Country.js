

describe('Master_Country', function() {
    var data = require('../Data/Testdata.json');
    var PO8 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Country(){
        return[
            {CodeValue:data.Country.Country_Code_Value1, NameValue:data.Country.Country_Name_Value1, DespValue:data.Country.Country_Description_Value1},
            {CodeValue:data.Country.Country_Code_Value2, NameValue:data.Country.Country_Name_Value2, DespValue:data.Country.Country_Description_Value2}
            ]
    };


    it('Master_Country - Maker', function () {

        browser.waitForAngularEnabled(false);

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Master Cus_Emp_Status

                PO8.Search_Xpath(data.Master_Search, data.Country.Country_Search_Value);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                browser.sleep(1000);

// Click the Searched objects

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Country.Country_Product_Icon))
                }), 2000);

                var Country_Icon =  element(by.xpath(data.Country.Country_Product_Icon));
                browser.actions().mouseMove(Country_Icon).click().perform();

                console.log("Country  - Search Sucess");
    });


    it('Create Multiple Country', function(){

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Create_Button))
                }), 9000);

                var Create = element(by.xpath(data.Create_Button));
                PO8.browser_actions(Create);

                expect(browser.wait(function(){
                    return browser.isElementPresent(by.xpath(data.Country.Country_Code_Field))
                }),5000);


// Enter the Value to create Currency

                browser.isElementPresent(by.xpath(data.Country.Country_Code_Field)).then(function (visible) {
                if (visible){

                    using(Country,function (newt) {

                            expect(browser.wait(function () {
                                return browser.isElementPresent(by.xpath(data.Country.Country_Code_Field))
                            }), 9000);

                           PO8.Search_Xpath(data.Country.Country_Code_Field,newt.CodeValue);
                           PO8.Search_Xpath(data.Country.Country_Name_Field,newt.NameValue);
                           PO8.Search_Xpath(data.Country.Country_Description_Field,newt.DespValue);
                           browser.sleep(500);

                           console.log( newt.NameValue + " - Country Added ");

                           expect(browser.wait(function(){
                               return browser.isElementPresent(by.xpath(data.Code_2nd))
                           }),90000);

                           var Add_Country = element(by.xpath(data.Add_2nd_Channel));
                           PO8.browser_actions(Add_Country);
                           browser.sleep(1000);
                    });

                        }
                });
    });


    it('Master Country Null value', function(){

                PO4.Save1();

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);
                browser.sleep(500);

//Expand the Country to verify the Error messages


                PO8.Add_Xpath(data.Country.Select_Country);
                browser.sleep(500);
                PO8.Add_Xpath(data.Country.Country_Expand);
                browser.sleep(500);


// Verify the error messages

                browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "code"]')).then(function (visible) {
                    browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Value entered is nullValue is required"]')).then(function () {
                        console.log("Code - should not be Null");
                    });
                });

                browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "name"]')).then(function (visible) {
                    browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Name Is Mandatory"]')).then(function () {
                        console.log("Name - should not be Null");
                   });
                });

                CO.Discard();
                console.log( "Country - with Null Value Validation - Sucess");
    });


it('Save the Country ', function(){

                browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function(visible){
                    if(visible) {

// Save the Country

                           PO4.Save1();

//Checkpoint for Save Popup

                            expect(browser.wait(function () {
                                return browser.isElementPresent(by.xpath(data.Save_popup))
                            }), 90000);

// Save the Country

                            PO4.Save2();
                            console.log(" Country - creation is Sucessfull");
                            CO.Mod_Close();

                    }
                    else
                    {
                             browser.sleep(2000);
// Save the Country

                            PO4.Save1();

//Checkpoint for Save Popup

                            expect(browser.wait(function () {
                                return browser.isElementPresent(by.xpath(data.Save_popup))
                            }), 90000);

// Save the Country

                            PO4.Save2();
                            console.log(" Country - creation is Sucessfull");
                            CO.Mod_Close();
                     }
                });
    });
});