

describe('Master_Merchant', function() {
    var data = require('../Data/Testdata.json');
    var PO12 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Merchant(){
        return[
            {CodeValue:data.Merchant.Merchant_Code_Value1, NameValue:data.Merchant.Merchant_Name_Value1, DespValue:data.Merchant.Merchant_Description_Value1},
            {CodeValue:data.Merchant.Merchant_Code_Value2, NameValue:data.Merchant.Merchant_Name_Value2, DespValue:data.Merchant.Merchant_Description_Value2}
            ]
    };


    it('Master_Merchant - Maker', function () {

        browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Master Merchant

        PO12.Search_Xpath(data.Master_Search, data.Merchant.Merchant_Search_Value);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);

// Click the Searched objects

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Merchant.Merchant_Product_Icon))
        }), 2000);


            var Mer_Icon =  element(by.xpath(data.Merchant.Merchant_Product_Icon));
            browser.actions().mouseMove(Mer_Icon).click().perform();

         console.log( "Merchant - search sucess ");
    });


    it('Create Multiple Merchant', function(){

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Create_Button))
            }), 9000);

            var Create = element(by.xpath(data.Create_Button));
            PO12.browser_actions(Create);

            expect(browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.Merchant.Merchant_Code_Field))
            }),5000);


// Enter the Value to create Merchant

            browser.isElementPresent(by.xpath(data.Merchant.Merchant_Code_Field)).then(function (visible) {

            if (visible){


                using(Merchant,function (newt) {

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.Merchant.Merchant_Code_Field))
                    }), 9000);


                    PO12.Search_Xpath(data.Merchant.Merchant_Code_Field,newt.CodeValue);
                       PO12.Search_Xpath(data.Merchant.Merchant_Name_Field,newt.NameValue);
                       PO12.Search_Xpath(data.Merchant.Merchant_Description_Field,newt.DespValue);
                        browser.sleep(500);

                    console.log( newt.NameValue + " - Merchant Added");

                    expect(browser.wait(function(){
                        return browser.isElementPresent(by.xpath(data.Code_2nd))
                    }),90000);

                           var Add_Mer = element(by.xpath(data.Add_2nd_Channel));
                           PO12.browser_actions(Add_Mer);
                           browser.sleep(1000);
                    });

                }
           });
    });


    it('Master Merchant Null value', function(){

        PO4.Save1();

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Save_popup))
        }), 90000);
        browser.sleep(1000);

//Expand the Merchant to verify the Error messages


        PO12.Add_Xpath(data.Merchant.Select_Merchant);
        browser.sleep(500);
        PO12.Add_Xpath(data.Merchant.Merchant_Expand);
        browser.sleep(500);


// Verify the error messages

        browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "code"]')).then(function (visible) {
            browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Value entered is nullValue is required"]')).then(function () {
              console.log("Code - should not be Null");
            });
        });

            browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "name"]')).then(function (visible) {
                browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Name Is Mandatory"]')).then(function () {
                  console.log("Name  - should not be Null");
                });
            });


        CO.Discard();
        console.log( "Merchant -  with null value validation - sucess");
    });


    it('Save the Merchant', function(){


        browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function(visible){

            if(visible) {


// Save the Merchant

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

// Save the Merchant

                PO4.Save2();
                console.log(" Merchant - creation is Sucessful");


                CO.Mod_Close();
            }
            else
            {
                browser.sleep(2000);

// Save the Merchant

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

// Save the Merchant

                PO4.Save2();
                console.log(" Merchant - creation is Sucessful");


                CO.Mod_Close();
            }
        });
    });
});


