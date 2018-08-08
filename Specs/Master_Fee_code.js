

describe('Master_FeeCode', function() {
    var data = require('../Data/Testdata.json');
    var PO5 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Fee_Code(){
        return[
            {CodeValue:data.Fee_Code.FeeCode_Code_Value1, NameValue:data.Fee_Code.FeeCode_Name_Value1, DespValue:data.Fee_Code.FeeCode_Description_Value1},
            {CodeValue:data.Fee_Code.FeeCode_Code_Value2, NameValue:data.Fee_Code.FeeCode_Name_Value2, DespValue:data.Fee_Code.FeeCode_Description_Value2},
            {CodeValue:data.Fee_Code.FeeCode_Code_Value3, NameValue:data.Fee_Code.FeeCode_Name_Value3, DespValue:data.Fee_Code.FeeCode_Description_Value3},
            {CodeValue:data.Fee_Code.FeeCode_Code_Value4, NameValue:data.Fee_Code.FeeCode_Name_Value4, DespValue:data.Fee_Code.FeeCode_Description_Value4},
            {CodeValue:data.Fee_Code.FeeCode_Code_Value5, NameValue:data.Fee_Code.FeeCode_Name_Value5, DespValue:data.Fee_Code.FeeCode_Description_Value5},
            {CodeValue:data.Fee_Code.FeeCode_Code_Value6, NameValue:data.Fee_Code.FeeCode_Name_Value6, DespValue:data.Fee_Code.FeeCode_Description_Value6},
            {CodeValue:data.Fee_Code.FeeCode_Code_Value7, NameValue:data.Fee_Code.FeeCode_Name_Value7, DespValue:data.Fee_Code.FeeCode_Description_Value7},
            {CodeValue:data.Fee_Code.FeeCode_Code_Value8, NameValue:data.Fee_Code.FeeCode_Name_Value8, DespValue:data.Fee_Code.FeeCode_Description_Value8},
            {CodeValue:data.Fee_Code.FeeCode_Code_Value9, NameValue:data.Fee_Code.FeeCode_Name_Value9, DespValue:data.Fee_Code.FeeCode_Description_Value9},
            {CodeValue:data.Fee_Code.FeeCode_Code_Value10,NameValue:data.Fee_Code.FeeCode_Name_Value10,DespValue:data.Fee_Code.FeeCode_Description_Value10}
            ]
    };


    it('Master_FeeCode - Maker', function () {

        browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Master Channel

        PO5.Search_Xpath(data.Master_Search, data.Fee_Code.Fee_Search_Value);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);

// Click the Searched objects

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Fee_Code.Fee_Product_Icon))
        }), 2000);


            var Fee_Code =  element(by.xpath(data.Fee_Code.Fee_Product_Icon));
            browser.actions().mouseMove(Fee_Code).click().perform();

            console.log("Fee code search - sucess");
    });


    it('Create Multiple Currency', function(){

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Create_Button))
            }), 9000);

            var Create = element(by.xpath(data.Create_Button));
            PO5.browser_actions(Create);

            expect(browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.Fee_Code.FeeCode_Code_Field))

            }),5000);


// Enter the Value to create Currency

            browser.isElementPresent(by.xpath(data.Fee_Code.FeeCode_Code_Field)).then(function (visible) {

            if (visible){


                using(Fee_Code,function (newt1) {

                        expect(browser.wait(function () {
                            return browser.isElementPresent(by.xpath(data.Fee_Code.FeeCode_Code_Field))
                        }), 9000);

                       PO5.Search_Xpath(data.Fee_Code.FeeCode_Code_Field,newt1.CodeValue);
                       PO5.Search_Xpath(data.Fee_Code.FeeCode_Name_Field,newt1.NameValue);
                       PO5.Search_Xpath(data.Fee_Code.FeeCode_Description_Field,newt1.DespValue);
                       browser.sleep(500);


// Save the Fee_Code

                    PO4.Save1();

//Checkpoint for Save Popup

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.Save_popup))
                    }), 90000);

// Save the Fee_Code

                    PO4.Save2();

                    console.log( newt1.NameValue + " - Fee code - Added");

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


    it('Master Fee Code Null value', function(){

        PO4.Save1();

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Save_popup))
        }), 90000);
        browser.sleep(1000);

//Expand the Currency to verify the Error messages


        PO5.Add_Xpath(data.Fee_Code.Select_FeeCode);
        browser.sleep(1000);
        PO5.Add_Xpath(data.Fee_Code.FeeCode_Expand);
        browser.sleep(1000);


// Verify the error messages

        browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "code"]')).then(function (visible) {
            browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Value entered is nullValue is required"]')).then(function () {
               console.log("Code should not be Null");
            });
        });


        browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "feeName"]')).then(function (visible) {
            browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Name Is Mandatory"]')).then(function () {
                console.log("Currency Symbol should not be Null");
            });
        });


        console.log( "Fee code - Creation sucess");
        CO.Discard();
        CO.Mod_Close();



    });


});