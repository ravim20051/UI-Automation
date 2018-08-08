

describe('Master_Customer_Cohort', function() {
    var data = require('../Data/Testdata.json');
    var PO14 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Cust_Coh(){
        return[
            {CodeValue:data.Cust_Coh.Cust_Coh_Code_Value1, NameValue:data.Cust_Coh.Cust_Coh_Name_Value1, DespValue:data.Cust_Coh.Cust_Coh_Description_Value1, Coh_cat_Value:data.Cust_Coh.Sel_Coh_Cat_List1},
            {CodeValue:data.Cust_Coh.Cust_Coh_Code_Value2, NameValue:data.Cust_Coh.Cust_Coh_Name_Value2, DespValue:data.Cust_Coh.Cust_Coh_Description_Value2, Coh_cat_Value:data.Cust_Coh.Sel_Coh_Cat_List2}
            ]
    };


    it('Master_Customer_Cohort - Maker', function () {

         browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);

// Search for Customer_Cohort

                PO14.Search_Xpath(data.Master_Search, data.Cust_Coh.Cust_Coh_Search_Value);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
      //          browser.sleep(1000);

// Click the Searched objects

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Cust_Coh.Cust_Coh_Product_Icon))
                }), 2000);

                var Cus_Coh_Icon =  element(by.xpath(data.Cust_Coh.Cust_Coh_Product_Icon));
                browser.actions().mouseMove(Cus_Coh_Icon).click().perform();

                console.log( "Customer Cohort  - Search Sucess");
    });


    it('Create Multiple Customer_Cohort', function(){

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Create_Button))
                }), 9000);

                var Create = element(by.xpath(data.Create_Button));
                PO14.browser_actions(Create);

                expect(browser.wait(function(){
                    return browser.isElementPresent(by.xpath(data.Cust_Coh.Cust_Coh_Code_Field))
                }),5000);

// Enter the Value to create Customer_Cohort

                browser.isElementPresent(by.xpath(data.Cust_Coh.Cust_Coh_Code_Field)).then(function (visible) {
                if (visible){

                    using(Cust_Coh,function (newt) {

                            expect(browser.wait(function () {
                                return browser.isElementPresent(by.xpath(data.Cust_Coh.Cust_Coh_Code_Field))
                            }), 9000);

                           PO14.Search_Xpath(data.Cust_Coh.Cust_Coh_Code_Field,newt.CodeValue);
                           PO14.Search_Xpath(data.Cust_Coh.Cust_Coh_Name_Field,newt.NameValue);
                           PO14.Search_Xpath(data.Cust_Coh.Cust_Coh_Description_Field,newt.DespValue);
                            browser.sleep(1000);

// Select the Cohort Catagory

                                var sel_Cout = element(by.xpath(data.Cust_Coh.Cust_Coh_Country_Click));
                                PO14.browser_actions(sel_Cout);

                                expect(browser.wait(function () {
                                    return browser.isElementPresent(by.xpath(data.Save_popup))
                                }), 5000);

                                browser.sleep(1000);

                                var CTY = element(by.xpath(newt.Coh_cat_Value));
                                PO14.browser_actions(CTY);

                                browser.sleep(2000);

                                var sel_but = element(by.xpath(data.Cust_Coh.Sel_Coh_Cat_List3));
                                PO14.browser_actions(sel_but);

                                browser.sleep(2000);

// Save the Customer_Cohort


                                console.log( newt.NameValue + " - Customer Cohort Added");

                                expect(browser.wait(function(){
                                    return browser.isElementPresent(by.xpath(data.Code_2nd))
                                }),90000);

                               var Add_State = element(by.xpath(data.Add_2nd_Channel));
                               PO14.browser_actions(Add_State);
                               browser.sleep(1000);
                          });
                    }
             });
    });


    it('Master Customer_Cohort Null value', function(){

                PO4.Save1();

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 9000);

//Expand the Customer_Cohort to verify the Error messages


                PO14.Add_Xpath(data.Cust_Coh.Select_Cust_Coh);
                browser.sleep(500);
                PO14.Add_Xpath(data.Cust_Coh.Cust_Coh_Expand);
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

                    console.log("Customer Cohort  - Null value Validation Sucess");

                     CO.Discard();
    });


    it('Save the Customer Cohort', function() {

// Save the Cohort Catagory

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 5000);

// Save the Cohort Catagory

                PO4.Save2();
                console.log("Customer Cohort - creation is Sucessful");
                CO.Mod_Close();
    });
});


