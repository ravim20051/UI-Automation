

describe('Master_Region', function() {
    var data = require('../Data/Testdata.json');
    var PO10 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Region(){
        return[
            {CodeValue:data.Region.Region_Code_Value1, NameValue:data.Region.Region_Name_Value1, DespValue:data.Region.Region_Description_Value1},
            {CodeValue:data.Region.Region_Code_Value2, NameValue:data.Region.Region_Name_Value2, DespValue:data.Region.Region_Description_Value2}
            ]
    };


    it('Master_Region - Maker', function () {

        browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Master Cus_Emp_Status

        PO10.Search_Xpath(data.Master_Search, data.Region.Region_Search_Value);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);

// Click the Searched objects

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Region.Region_Product_Icon))
        }), 2000);


            var Region_Icon =  element(by.xpath(data.Region.Region_Product_Icon));
            browser.actions().mouseMove(Region_Icon).click().perform();
            console.log("Region - search sucess");

    });


    it('Create Multiple Region', function(){

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Create_Button))
            }), 9000);

            var Create = element(by.xpath(data.Create_Button));
            PO10.browser_actions(Create);

            expect(browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.Region.Region_Code_Field))
            }),5000);


// Enter the Value to create Currency

            browser.isElementPresent(by.xpath(data.Region.Region_Code_Field)).then(function (visible) {

            if (visible){


                using(Region,function (newt) {

                        expect(browser.wait(function () {
                            return browser.isElementPresent(by.xpath(data.Region.Region_Code_Field))
                        }), 9000);

                       PO10.Search_Xpath(data.Region.Region_Code_Field,newt.CodeValue);
                       PO10.Search_Xpath(data.Region.Region_Name_Field,newt.NameValue);
                       PO10.Search_Xpath(data.Region.Region_Description_Field,newt.DespValue);
                        browser.sleep(2000);

                    console.log( newt.NameValue + " - Region Added");

                    expect(browser.wait(function(){
                        return browser.isElementPresent(by.xpath(data.Code_2nd))
                    }),90000);

                           var Add_Region = element(by.xpath(data.Add_2nd_Channel));
                           PO10.browser_actions(Add_Region);
                           browser.sleep(2000);
                    });
             }
           });
    });


    it('Master Region Null value', function(){

        PO4.Save1();

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Save_popup))
        }), 90000);
        browser.sleep(1000);

//Expand the Region to verify the Error messages


        PO10.Add_Xpath(data.Region.Select_Region);
        browser.sleep(1000);
        PO10.Add_Xpath(data.Region.Region_Expand);
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
        console.log("Region - null value validation is sucess");
    });


    it('Save the Region', function(){


        browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function(visible){

            if(visible) {


// Save the Region

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

// Save the Region

                PO4.Save2();
                console.log(" Region - creation is Sucessful");


                CO.Mod_Close();
            }
            else
            {
                browser.sleep(2000);

// Save the Region

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

// Save the Region

                PO4.Save2();
                console.log(" Region -  creation is Sucessful");


                CO.Mod_Close();
            }
        });
    });
});


