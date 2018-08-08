

describe('Master_Trans_Code', function() {
    var data = require('../Data/Testdata.json');
    var PO15 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');

    browser.waitForAngularEnabled(false);

    function Tran_code(){
        return[
            {CodeValue:data.Tran_Code.Tran_Code_Code_Value1, NameValue:data.Tran_Code.Tran_Code_Name_Value1, DespValue:data.Tran_Code.Tran_Code_Description_Value1},
            {CodeValue:data.Tran_Code.Tran_Code_Code_Value2, NameValue:data.Tran_Code.Tran_Code_Name_Value2, DespValue:data.Tran_Code.Tran_Code_Description_Value2},
            {CodeValue:data.Tran_Code.Tran_Code_Code_Value3, NameValue:data.Tran_Code.Tran_Code_Name_Value3, DespValue:data.Tran_Code.Tran_Code_Description_Value3},
            {CodeValue:data.Tran_Code.Tran_Code_Code_Value4, NameValue:data.Tran_Code.Tran_Code_Name_Value4, DespValue:data.Tran_Code.Tran_Code_Description_Value4},
            {CodeValue:data.Tran_Code.Tran_Code_Code_Value5, NameValue:data.Tran_Code.Tran_Code_Name_Value5, DespValue:data.Tran_Code.Tran_Code_Description_Value5},
            {CodeValue:data.Tran_Code.Tran_Code_Code_Value6, NameValue:data.Tran_Code.Tran_Code_Name_Value6, DespValue:data.Tran_Code.Tran_Code_Description_Value6},
            {CodeValue:data.Tran_Code.Tran_Code_Code_Value7, NameValue:data.Tran_Code.Tran_Code_Name_Value7, DespValue:data.Tran_Code.Tran_Code_Description_Value7}
            ]
    };


    it('Master_Trans_Code - Maker', function () {

        browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Master Trans code

        PO15.Search_Xpath(data.Master_Search, data.Tran_Code.Tran_Code_Search_Value);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(2000);

// Click the Searched objects

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Tran_Code.Tran_Code_Product_Icon))
        }), 2000);


            var Trans_Icon =  element(by.xpath(data.Tran_Code.Tran_Code_Product_Icon));
            browser.actions().mouseMove(Trans_Icon).click().perform();
            console.log("Tran code search sucess");
    });


    it('Create Multiple Master_Trans_Code', function(){

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Create_Button))
            }), 9000);

            var Create = element(by.xpath(data.Create_Button));
            PO15.browser_actions(Create);

            expect(browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.Tran_Code.Tran_Code_Name_Field))
            }),5000);


// Enter the Value to create Cohort Category

            browser.isElementPresent(by.xpath(data.Tran_Code.Tran_Code_Name_Field)).then(function (visible) {

            if (visible){

                using(Tran_code,function (newt) {

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.Tran_Code.Tran_Code_Code_Field))
                    }), 9000);

                     PO15.Search_Xpath(data.Tran_Code.Tran_Code_Code_Field,newt.CodeValue);
                       PO15.Search_Xpath(data.Tran_Code.Tran_Code_Name_Field,newt.NameValue);
                       PO15.Search_Xpath(data.Tran_Code.Tran_Code_Description_Field,newt.DespValue);
                        browser.sleep(1000);
// Save the Tran_Code

                     PO4.Save1();

//Checkpoint for Save Popup

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.Save_popup))
                    }), 9000);

// Save the Tran_Code

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.Save_Popup_2))
                    }), 9000);

                    PO4.Save2();

                    console.log( newt.NameValue + " -  Tran code Added");

   /*                 expect(browser.wait(function(){
                        return browser.isElementPresent(by.xpath(data.Code_2nd))
                    }),9000);  */

                    browser.sleep(1000);

                           var Add_Tran_code = element(by.xpath(data.Add_2nd_Channel));
                           PO15.browser_actions(Add_Tran_code);
                           browser.sleep(1000);
                    });
                }
         });
    });


    it('Master_Trans_Code Null value', function(){

        PO4.Save1();

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Save_popup))
        }), 5000);
        browser.sleep(1000);

//Expand the Cohort Categor to verify the Error messages


        PO15.Add_Xpath(data.Tran_Code.Select_Tran_Code);
        browser.sleep(500);
        PO15.Add_Xpath(data.Tran_Code.Tran_Code_Expand);
        browser.sleep(500);


// Verify the error messages

        browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "code"]')).then(function (visible) {
            browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Value entered is nullValue is required"]')).then(function () {
                console.log("Code should not be Null");
            });
        });

            browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "name"]')).then(function (visible) {
                browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Name Is Mandatory"]')).then(function () {
                    console.log("Name should not be Null");
                });
            });

        CO.Discard();
        CO.Mod_Close();

        console.log("Tran code null value validation sucess");


    });


});


