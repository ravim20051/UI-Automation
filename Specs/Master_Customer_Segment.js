

describe('Master_CustomerSegment', function() {
    var data = require('../Data/Testdata.json');
    var PO7 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function CustomerSegment(){
        return[
            {CodeValue:data.CusSeg.CusSegCode_Value1, NameValue:data.CusSeg.CusSegName_Value1, DespValue:data.CusSeg.CusSegDescription_Value1},
            {CodeValue:data.CusSeg.CusSegCode_Value2, NameValue:data.CusSeg.CusSegName_Value2, DespValue:data.CusSeg.CusSegDescription_Value2}
            ]
    };


    it('Master_CustomerSegment - Maker', function () {

        browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Master Cus_Emp_Status

        PO7.Search_Xpath(data.Master_Search, data.CusSeg.CusSeg_Search_Value);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);

// Click the Searched objects

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.CusSeg.CusSeg_Product_Icon))
        }), 2000);


            var CusSeg_Icon =  element(by.xpath(data.CusSeg.CusSeg_Product_Icon));
            browser.actions().mouseMove(CusSeg_Icon).click().perform();

            console.log( "Customer Segment - Search sucess");

    });


    it('Create Multiple Customer_Segment', function(){

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Create_Button))
            }), 9000);

            var Create = element(by.xpath(data.Create_Button));
            PO7.browser_actions(Create);

            expect(browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.CusSeg.CusSegCode_Field))
            }),5000);


// Enter the Value to create Currency

            browser.isElementPresent(by.xpath(data.CusSeg.CusSegCode_Field)).then(function (visible) {

            if (visible){


                using(CustomerSegment,function (newt) {

                        expect(browser.wait(function () {
                            return browser.isElementPresent(by.xpath(data.CusSeg.CusSegCode_Field))
                        }), 9000);

                       PO7.Search_Xpath(data.CusSeg.CusSegCode_Field,newt.CodeValue);
                       PO7.Search_Xpath(data.CusSeg.CusSegName_Field,newt.NameValue);
                       PO7.Search_Xpath(data.CusSeg.CusSegDescription_Field,newt.DespValue);
                        browser.sleep(500);

                        console.log( newt.NameValue + " - Customer Segment Added");

                        expect(browser.wait(function(){
                            return browser.isElementPresent(by.xpath(data.Code_2nd))
                        }),90000);

                           var Add_CusSeg = element(by.xpath(data.Add_2nd_Channel));
                           PO7.browser_actions(Add_CusSeg);
                           browser.sleep(1000);
                    });

                }

            });
    });


    it('Master Customer Segment Null value', function(){

        PO4.Save1();

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Save_popup))
        }), 90000);
        browser.sleep(500);

//Expand the Customer Segment to verify the Error messages


        PO7.Add_Xpath(data.CusSeg.Select_CusSeg);
        browser.sleep(1000);
        PO7.Add_Xpath(data.CusSeg.CusSeg_Expand);
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

        console.log("Customer Segment - null value validation - sucess ");

    });



it('Save the Customer Segment ', function(){


            browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function(visible){

                if(visible) {

        // Save the Customer Segment

                    PO4.Save1();

        //Checkpoint for Save Popup

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.Save_popup))
                    }), 90000);

        // Save the Customer Segment

                    PO4.Save2();
                    console.log(" Customer Segment - creation is Sucessful");


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


