

describe('Master_Exception Reason', function() {
    var data = require('../Data/Testdata.json');
    var PO13 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Exp_Reason(){
        return[
            {CodeValue:data.Excep_Reason.Excep_Reason_Code_Value1, NameValue:data.Excep_Reason.Excep_Reason_Name_Value1, DespValue:data.Excep_Reason.Excep_Reason_Description_Value1}
              ]
    };


    it('Master_Exception Reason - Maker', function () {

        browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Exception Reason

        PO13.Search_Xpath(data.Master_Search, data.Excep_Reason.Excep_Reason_Search_Value);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);

// Click the Searched objects

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Excep_Reason.Excep_Reason_Product_Icon))
        }), 2000);


            var Exp_Rea =  element(by.xpath(data.Excep_Reason.Excep_Reason_Product_Icon));
            browser.actions().mouseMove(Exp_Rea).click().perform();

            console.log("Excpetion Reason - search sucess");
    });


    it('Create Multiple Exception Reason', function(){

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Create_Button))
            }), 9000);

            var Create = element(by.xpath(data.Create_Button));
            PO13.browser_actions(Create);

            expect(browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.Excep_Reason.Excep_Reason_Code_Field))
            }),5000);


// Enter the Value to create Exception Reason

            browser.isElementPresent(by.xpath(data.Excep_Reason.Excep_Reason_Code_Field)).then(function (visible) {

            if (visible){


                using(Exp_Reason,function (newt) {

                        expect(browser.wait(function () {
                            return browser.isElementPresent(by.xpath(data.Excep_Reason.Excep_Reason_Code_Field))
                        }), 9000);

                       PO13.Search_Xpath(data.Excep_Reason.Excep_Reason_Code_Field,newt.CodeValue);
                       PO13.Search_Xpath(data.Excep_Reason.Excep_Reason_Name_Field,newt.NameValue);
                       PO13.Search_Xpath(data.Excep_Reason.Excep_Reason_Description_Field,newt.DespValue);
                        browser.sleep(500);

                    console.log(newt.NameValue + " - Excpetion Reason Added ");

                    expect(browser.wait(function(){
                        return browser.isElementPresent(by.xpath(data.Code_2nd))
                    }),90000);

                           var Add_Exp = element(by.xpath(data.Add_2nd_Channel));
                           PO13.browser_actions(Add_Exp);
                           browser.sleep(1000);
                    });
                 }
          });
    });


    it('Master Exception Reason Null value', function(){

        PO4.Save1();

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Save_popup))
        }), 90000);
        browser.sleep(1000);

//Expand the Exception Reason to verify the Error messages


        PO13.Add_Xpath(data.Excep_Reason.Select_Excep_Reason);
        browser.sleep(500);
        PO13.Add_Xpath(data.Excep_Reason.Excep_Reason_Expand);
        browser.sleep(500);


// Verify the error messages

        browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "code"]')).then(function (visible) {
            browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Value entered is nullValue is required"]')).then(function () {
               console.log("Code -  should not be Null");
            });
        });


            browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "name"]')).then(function (visible) {
                browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Name Is Mandatory"]')).then(function () {
                   console.log("Name - should not be Null");
                });
            });

        CO.Discard();
        console.log("Exception Reason - null value validation sucess");

    });



    it('Save the Exception Reason ', function(){


        browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function(visible){

            if(visible) {

// Save the Exception Reason

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

// Save the Exception Reason

                PO4.Save2();
                console.log("Exception Reason - creation is Sucessful");


                CO.Mod_Close();
            }
            else
            {
                browser.sleep(2000);

// Save the Exception Reason

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

// Save the Exception Reason

                PO4.Save2();
                console.log(" Exception Reason - creation is Sucessful");


                CO.Mod_Close();

            }
        });
    });

});


