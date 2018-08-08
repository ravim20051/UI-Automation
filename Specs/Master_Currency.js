

describe('Master_Currency', function() {
    var data = require('../Data/Testdata.json');
    var PO5 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Currency(){
        return[
            {CodeValue:data.Currency.CurrencyCode_Value1, NameValue:data.Currency.CurrencyName_Value1, Curr_Sym:data.Currency.CurrencySymbol_Value1 , DespValue:data.Currency.CurrencyDescription_Value1},
            {CodeValue:data.Currency.CurrencyCode_Value2, NameValue:data.Currency.CurrencyName_Value2, Curr_Sym:data.Currency.CurrencySymbol_Value2 , DespValue:data.Currency.CurrencyDescription_Value2}
            ]
    };


    it('Master_Currency - Maker', function () {

          browser.waitForAngularEnabled(false);

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);

// Search for Master Channel

                PO5.Search_Xpath(data.Master_Search, data.Currency.Currency_Search_Value);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                browser.sleep(1000);

// Click the Searched objects

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Currency.Currency_Product_Icon))
                }), 2000);

                var Currency_Icon =  element(by.xpath(data.Currency.Currency_Product_Icon));
                browser.actions().mouseMove(Currency_Icon).click().perform();
                console.log("Currency - Search Sucess");
    });


    it('Create Multiple Currency', function(){

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Create_Button))
                }), 9000);

                var Create = element(by.xpath(data.Create_Button));
                PO5.browser_actions(Create);

                expect(browser.wait(function(){
                    return browser.isElementPresent(by.xpath(data.Currency.CurrencyCode_Field))
                }),5000);


// Enter the Value to create Currency

                    browser.isElementPresent(by.xpath(data.Currency.CurrencyCode_Field)).then(function (visible) {
                    if (visible){

                        using(Currency,function (newt) {

                            expect(browser.wait(function(){
                                return browser.isElementPresent(by.xpath(data.Currency.CurrencyCode_Field))
                            }),9000);

                               PO5.Search_Xpath(data.Currency.CurrencyCode_Field,newt.CodeValue);
                               PO5.Search_Xpath(data.Currency.CurrencyName_Field,newt.NameValue);
                               PO5.Search_Xpath(data.Currency.CurrencySymbol_Field,newt.Curr_Sym)
                               PO5.Search_Xpath(data.Currency.CurrencyDescription_Field,newt.DespValue);
                                browser.sleep(500);

                                console.log(newt.NameValue + " - Currency created");

                                expect(browser.wait(function(){
                                    return browser.isElementPresent(by.xpath(data.Code_2nd))
                                }),90000);

                               var Add_Currency = element(by.xpath(data.Add_2nd_Channel));
                               PO5.browser_actions(Add_Currency);
                               browser.sleep(1000);
                        });

                    }

                });
    });


    it('Master Currency Null value', function(){

                    PO4.Save1();

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.Save_popup))
                    }), 90000);
                    browser.sleep(1000);

//Expand the Currency to verify the Error messages


                    PO5.Add_Xpath(data.Currency.Select_Currency);
                    browser.sleep(1000);
                    PO5.Add_Xpath(data.Currency.Currency_Expand);
                    browser.sleep(1000);


// Verify the error messages

                    browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "code"]')).then(function (visible) {
                       browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Value entered is nullValue is required"]')).then(function () {
                           console.log("Code - should not be Null");
                        });
                    });


                    browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "currencySymbol"]')).then(function (visible) {
                        browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Value is required"]')).then(function () {
                            console.log("Currency - Symbol should not be Null");
                        });
                    });


                    browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "name"]')).then(function (visible) {
                        browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Name Is Mandatory"]')).then(function () {
                            console.log("Name - should not be Null");
                        });
                    });

                    CO.Discard();
                    console.log( "Currency - Null Value Validation Sucess");

    });


    it('Save the Currency', function(){

            browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function(visible){
                if(visible) {

// Save the Channel

                        PO4.Save1();

//Checkpoint for Save Popup

                        expect(browser.wait(function () {
                            return browser.isElementPresent(by.xpath(data.Save_popup))
                        }), 90000);

// Save the channel
                        PO4.Save2();
                        console.log("Currency - creation is Sucessful");
                        CO.Mod_Close();

                }
                else
                {
                    browser.sleep(2000);

// Save the Customer Segment

                    PO4.Save1();

//Checkpoint for Save Popup

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.Save_popup))
                    }), 90000);

// Save the Customer Segment

                    PO4.Save2();
                    console.log(" Customer Segment creation is Sucessful");


                    CO.Mod_Close();

                }

            });
      });
});