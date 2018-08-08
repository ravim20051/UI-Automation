

describe('Master_Cohort_Category', function() {
    var data = require('../Data/Testdata.json');
    var PO13 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Coh_cat(){
        return[
            {CodeValue:data.Cohort_Cat.Cohort_Cat_Code_Value1, NameValue:data.Cohort_Cat.Cohort_Cat_Name_Value1, DespValue:data.Cohort_Cat.Cohort_Cat_Description_Value1},
            {CodeValue:data.Cohort_Cat.Cohort_Cat_Code_Value2, NameValue:data.Cohort_Cat.Cohort_Cat_Name_Value2, DespValue:data.Cohort_Cat.Cohort_Cat_Description_Value2}
            ]
    };


    it('Master_Cohort_Category - Maker', function () {

        browser.waitForAngularEnabled(false);

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 9000);

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);

// Search for Master Merchant

            PO13.Search_Xpath(data.Master_Search, data.Cohort_Cat.Cohort_Cat_Search_Value);
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
            browser.sleep(1000);

// Click the Searched objects

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Cohort_Cat.Cohort_Cat_Product_Icon))
            }), 2000);

            var Mer_Icon =  element(by.xpath(data.Cohort_Cat.Cohort_Cat_Product_Icon));
            browser.actions().mouseMove(Mer_Icon).click().perform();
            console.log("Cohort Catagory - Search Sucessful");
    });


    it('Create Multiple Cohort Category', function(){

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Create_Button))
            }), 9000);

            var Create = element(by.xpath(data.Create_Button));
            PO13.browser_actions(Create);

            expect(browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.Cohort_Cat.Cohort_Cat_Code_Field))
            }),9000);


// Enter the Value to create Cohort Category

            browser.isElementPresent(by.xpath(data.Cohort_Cat.Cohort_Cat_Code_Field)).then(function (visible) {
            if (visible){

                using(Coh_cat,function (newt) {

                        expect(browser.wait(function () {
                            return browser.isElementPresent(by.xpath(data.Cohort_Cat.Cohort_Cat_Code_Field))
                        }), 9000);

                       PO13.Search_Xpath(data.Cohort_Cat.Cohort_Cat_Code_Field,newt.CodeValue);
                       PO13.Search_Xpath(data.Cohort_Cat.Cohort_Cat_Name_Field,newt.NameValue);
                       PO13.Search_Xpath(data.Cohort_Cat.Cohort_Cat_Description_Field,newt.DespValue);
                       browser.sleep(500);

                       console.log( newt.NameValue + " - Cohort Catagory Added");

                        expect(browser.wait(function(){
                            return browser.isElementPresent(by.xpath(data.Code_2nd))
                        }),9000);

                        var Add_Coh_Cat = element(by.xpath(data.Add_2nd_Channel));
                        PO13.browser_actions(Add_Coh_Cat);
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

//Expand the Cohort Categor to verify the Error messages

            PO13.Add_Xpath(data.Cohort_Cat.Select_Cohort_Cat);
            browser.sleep(1000);
            PO13.Add_Xpath(data.Cohort_Cat.Cohort_Cat_Expand);
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

                console.log("Cohort Catagory - null value validation is Sucessful");

                expect (browser.wait(function(){
                    return browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//div//span[@class="v-button-wrap"]//span[text()="Discard Changes"]'))
                }),5000);

                CO.Discard();
    });


    it('Save the Cohort Catagory', function() {

        browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function (visible) {
            if (visible) {

// Save the Cohort Catagory

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 5000);

// Save the Cohort Catagory

                PO4.Save2();
                console.log("Cohort Catagory - creation is Sucessful");
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
                console.log(" Cohort Catagory - creation is Sucessful");


                CO.Mod_Close();

            }
        });
    });
});