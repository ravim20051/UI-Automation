

describe('Master_Month Day', function() {
    var data = require('../Data/Testdata.json');
    var PO16 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Month_Day(){
        return[
            {CodeValue:data.Month_day.Month_day_Code_Value1, MonthValue:data.Month_day.Month_day_Month_Value1, DespValue:data.Month_day.Month_day_Description_Value1},
            {CodeValue:data.Month_day.Month_day_Code_Value2, MonthValue:data.Month_day.Month_day_Month_Value2, DespValue:data.Month_day.Month_day_Description_Value2},
            {CodeValue:data.Month_day.Month_day_Code_Value3, MonthValue:data.Month_day.Month_day_Month_Value3, DespValue:data.Month_day.Month_day_Description_Value3},
            {CodeValue:data.Month_day.Month_day_Code_Value4, MonthValue:data.Month_day.Month_day_Month_Value4, DespValue:data.Month_day.Month_day_Description_Value4},
            {CodeValue:data.Month_day.Month_day_Code_Value5, MonthValue:data.Month_day.Month_day_Month_Value5, DespValue:data.Month_day.Month_day_Description_Value5},
            {CodeValue:data.Month_day.Month_day_Code_Value6, MonthValue:data.Month_day.Month_day_Month_Value6, DespValue:data.Month_day.Month_day_Description_Value6},
            {CodeValue:data.Month_day.Month_day_Code_Value7, MonthValue:data.Month_day.Month_day_Month_Value7, DespValue:data.Month_day.Month_day_Description_Value7},
            {CodeValue:data.Month_day.Month_day_Code_Value8, MonthValue:data.Month_day.Month_day_Month_Value8, DespValue:data.Month_day.Month_day_Description_Value8},
            {CodeValue:data.Month_day.Month_day_Code_Value9, MonthValue:data.Month_day.Month_day_Month_Value9, DespValue:data.Month_day.Month_day_Description_Value9},
            {CodeValue:data.Month_day.Month_day_Code_Value10, MonthValue:data.Month_day.Month_day_Month_Value10, DespValue:data.Month_day.Month_day_Description_Value10}
             ]
    };


    it('Master_Month_Day - Maker', function () {

        browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Master Month_Day

        PO16.Search_Xpath(data.Master_Search, data.Month_day.Month_day_Search_Value);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);

// Click the Searched objects

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Month_day.Month_day_Product_Icon))
        }), 9000);


            var Month_day_Icon =  element(by.xpath(data.Month_day.Month_day_Product_Icon));
            browser.actions().mouseMove(Month_day_Icon).click().perform();

        console.log("Month Day search sucess");

    });


    it('Create Multiple Master_Month_Day', function() {

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Create_Button))
        }), 9000);

        var Create = element(by.xpath(data.Create_Button));
        PO16.browser_actions(Create);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Month_day.Month_day_Code_Field))
        }), 5000);



// Enter the Value to create Month_Day

            browser.isElementPresent(by.xpath(data.Month_day.Month_day_Code_Field)).then(function (visible) {

            if (visible){


                using(Month_Day,function (newt) {

                        expect(browser.wait(function () {
                            return browser.isElementPresent(by.xpath(data.Month_day.Month_day_Code_Field))
                        }), 9000);

                       PO16.Search_Xpath(data.Month_day.Month_day_Code_Field,newt.CodeValue);

                         var Month_Fie = element(by.xpath(data.Month_day.Month_day_Month_Field));
                         PO16.browser_actions(Month_Fie);
                         browser.sleep(1000);

                         var Month = element(by.xpath(newt.MonthValue));
                         PO16.browser_actions(Month);

                         browser.sleep(1000);

                       PO16.Search_Xpath(data.Month_day.Month_day_Description_Field,newt.DespValue);

// Save the Month_Day

                    PO4.Save1();

//Checkpoint for Save Popup

                    expect(browser.wait(function () {
                        return browser.isElementPresent(by.xpath(data.Save_popup))
                    }), 90000);

// Save the Month_Day

                    PO4.Save2();

                    console.log( newt.MonthValue + " - Month Day Added");

                    expect(browser.wait(function(){
                        return browser.isElementPresent(by.xpath(data.Code_2nd))
                    }),90000);

                           var Add_Month_day = element(by.xpath(data.Add_2nd_Channel));
                           PO16.browser_actions(Add_Month_day);
                           browser.sleep(1000);
                    });
               }
         });
    });


it('Master_Month_Day Null value', function(){

        PO4.Save1();

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Save_popup))
        }), 9000);
 //       browser.sleep(2000);

//Expand the Month_Day to verify the Error messages

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Month_day.Select_Month_day))
        }), 9000);

        PO16.Add_Xpath(data.Month_day.Select_Month_day);
        browser.sleep(500);
        PO16.Add_Xpath(data.Month_day.Month_day_Expand);
        browser.sleep(500);


// Verify the error messages

        browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "code"]')).then(function (visible) {
            browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//table//tbody//tr//td//div[text()= "Value entered is nullValue is required"]')).then(function () {
                console.log("Code should not be Null");
            });
        });

        console.log("Month Day - null value validation sucess");

        CO.Discard();
        CO.Mod_Close();

  });

});