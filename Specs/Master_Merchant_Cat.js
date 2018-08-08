

describe('Master_Merchant_Cat', function() {
    var data = require('../Data/Testdata.json');
    var PO11 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Merchant_Cat(){
        return[
            {CodeValue:data.Mer_Cat.Mer_Cat_Code_Value1, NameValue:data.Mer_Cat.Mer_Cat_Name_Value1, DespValue:data.Mer_Cat.Mer_Cat_Description_Value1},
            {CodeValue:data.Mer_Cat.Mer_Cat_Code_Value2, NameValue:data.Mer_Cat.Mer_Cat_Name_Value2, DespValue:data.Mer_Cat.Mer_Cat_Description_Value2}
            ]
    };


    it('Master_Merchant_Cat - Maker', function () {

        browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Master Merchant_Cat

        PO11.Search_Xpath(data.Master_Search, data.Mer_Cat.Mer_Cat_Search_Value);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);

// Click the Searched objects

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Mer_Cat.Mer_Cat_Product_Icon))
        }), 2000);


            var Mer_Cat_Icon =  element(by.xpath(data.Mer_Cat.Mer_Cat_Product_Icon));
            browser.actions().mouseMove(Mer_Cat_Icon).click().perform();

        console.log( "Merchant Catagory - search sucess");
    });


    it('Create Multiple Merchant_Cat', function(){

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Create_Button))
            }), 9000);


            var Create = element(by.xpath(data.Create_Button));
            PO11.browser_actions(Create);

            expect(browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.Mer_Cat.Mer_Cat_Code_Field))
            }),5000);


// Enter the Value to create Merchant_Cat

            browser.isElementPresent(by.xpath(data.Mer_Cat.Mer_Cat_Code_Field)).then(function (visible) {

            if (visible){


                using(Merchant_Cat,function (newt) {

                        expect(browser.wait(function () {
                            return browser.isElementPresent(by.xpath(data.Mer_Cat.Mer_Cat_Code_Field))
                        }), 9000);

                       PO11.Search_Xpath(data.Mer_Cat.Mer_Cat_Code_Field,newt.CodeValue);
                       PO11.Search_Xpath(data.Mer_Cat.Mer_Cat_Name_Field,newt.NameValue);
                       PO11.Search_Xpath(data.Mer_Cat.Mer_Cat_Description_Field,newt.DespValue);
                        browser.sleep(500);

                    console.log( newt.NameValue + " - Merchant Catagory added ");

                    expect(browser.wait(function(){
                        return browser.isElementPresent(by.xpath(data.Code_2nd))
                    }),90000);

                           var Add_Mer_Cat = element(by.xpath(data.Add_2nd_Channel));
                           PO11.browser_actions(Add_Mer_Cat);
                           browser.sleep(1000);
                    });
             }
         });
    });


    it('Master Merchant_Cat Null value', function(){

        PO4.Save1();

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Save_popup))
        }), 90000);
        browser.sleep(1000);

//Expand the Merchant_Cat to verify the Error messages


        PO11.Add_Xpath(data.Mer_Cat.Select_Mer_Cat);
        browser.sleep(500);
        PO11.Add_Xpath(data.Mer_Cat.Mer_Cat_Expand);
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
        console.log(" Merchant_Catagory -  null value validation - Sucessful");

    });



    it('Save the Merchant_Catagory', function(){


        browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function(visible){

            if(visible) {


// Save the Merchant_Catagory

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

// Save the Merchant_Catagory

                PO4.Save2();
                console.log(" Merchant_Catagory - creation is Sucessful");


                CO.Mod_Close();
            }
            else
            {
                browser.sleep(2000);

// Save the Merchant_Catagory

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

// Save the Merchant_Catagory

                PO4.Save2();
                console.log(" Merchant_Catagory - creation is Sucessful");


                CO.Mod_Close();
            }
        });
    });
});


