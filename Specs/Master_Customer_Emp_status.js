

describe('Master_CustomerEmpSts', function() {
    var data = require('../Data/Testdata.json');
    var PO6 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function CustomerEmpSts(){
        return[
            {CodeValue:data.CusEmpSts.CusEmpStsCode_Value1, NameValue:data.CusEmpSts.CusEmpStsName_Value1, DespValue:data.CusEmpSts.CusEmpStsDescription_Value1},
            {CodeValue:data.CusEmpSts.CusEmpStsCode_Value2, NameValue:data.CusEmpSts.CusEmpStsName_Value2, DespValue:data.CusEmpSts.CusEmpStsDescription_Value2}
            ]
    };


    it('Master_Cus_Emp_Status - Maker', function () {

          browser.waitForAngularEnabled(false);

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


            // Search for Master Cus_Emp_Status

                    PO6.Search_Xpath(data.Master_Search, data.CusEmpSts.CusEmpSts_Search_Value);
                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
                    browser.sleep(1000);

            // Click the Searched objects

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.CusEmpSts.CusEmpSts_Product_Icon))
                    }), 2000);


                        var CusEmpSts_Icon =  element(by.xpath(data.CusEmpSts.CusEmpSts_Product_Icon));
                        browser.actions().mouseMove(CusEmpSts_Icon).click().perform();

                        console.log("Customer Employee Status - Search Sucess");
    });


    it('Create Multiple Cus_Emp_Status', function(){


                        expect(browser.wait(function () {
                            return browser.isElementPresent(by.xpath(data.Create_Button))
                        }), 9000);

                        var Create = element(by.xpath(data.Create_Button));
                        PO6.browser_actions(Create);

                        expect(browser.wait(function(){
                            return browser.isElementPresent(by.xpath(data.CusEmpSts.CusEmpStsCode_Field))
                        }),5000);

// Enter the Value to create Currency

                    browser.isElementPresent(by.xpath(data.CusEmpSts.CusEmpStsCode_Field)).then(function (visible) {
                    if (visible){

                        using(CustomerEmpSts,function (newt) {

                            expect(browser.wait(function(){
                                return browser.isElementPresent(by.xpath(data.CusEmpSts.CusEmpStsCode_Field))
                            }),5000);

                               PO6.Search_Xpath(data.CusEmpSts.CusEmpStsCode_Field,newt.CodeValue);
                               PO6.Search_Xpath(data.CusEmpSts.CusEmpStsName_Field,newt.NameValue);
                               PO6.Search_Xpath(data.CusEmpSts.CusEmpStsDescription_Field,newt.DespValue);
                                browser.sleep(500);

                                console.log( newt.NameValue + " - Customer Emp Status Added");

                                expect(browser.wait(function(){
                                    return browser.isElementPresent(by.xpath(data.Code_2nd))
                                }),90000);

                                   var Add_CusEmpSts = element(by.xpath(data.Add_2nd_Channel));
                                   PO6.browser_actions(Add_CusEmpSts);
                                   browser.sleep(1000);
                            });

                        }

                  });
    });


    it('Master Cus_Emp_Status Null value', function(){

                    PO4.Save1();

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.Save_popup))
                    }), 90000);
                    browser.sleep(1000);

//Expand the Currency to verify the Error messages


                    PO6.Add_Xpath(data.CusEmpSts.Select_CusEmpSts);
                    browser.sleep(1000);
                    PO6.Add_Xpath(data.CusEmpSts.CusEmpSts_Expand);
                    browser.sleep(1000);


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
                        console.log( "Customer Emp Status - null value validation sucess");

    });


 it('Save the Cus_Emp_Status', function(){

                     browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function(visible){
                        if(visible) {

                        // Save the Cus_Emp_Status

                                     PO4.Save1();

                        //Checkpoint for Save Popup

                                     expect(browser.wait(function () {
                                         return browser.isElementPresent(by.xpath(data.Save_popup))
                                     }), 90000);

                        // Save the Cus_Emp_Status

                                     PO4.Save2();
                                     console.log(" Cus_Emp_Status - creation is Sucessful");


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
                            console.log(" Cus_Emp_Status - creation is Sucessful");


                            CO.Mod_Close();

                        }

                     });
              });
});