

describe('Master_State', function() {
    var data = require('../Data/Testdata.json');
    var PO9 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function State(){
        return[
            {CodeValue:data.State.State_Code_Value1, NameValue:data.State.State_Name_Value1, DespValue:data.State.State_Description_Value1, CountryValue:data.State.Sel_Country_List1},
            {CodeValue:data.State.State_Code_Value2, NameValue:data.State.State_Name_Value2, DespValue:data.State.State_Description_Value2, CountryValue:data.State.Sel_Country_List2}
            ]
    };


    it('Master_State - Maker', function () {

        browser.waitForAngularEnabled(false);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 5000);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Master Cus_Emp_Status

        PO9.Search_Xpath(data.Master_Search, data.State.State_Search_Value);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);

// Click the Searched objects

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.State.State_Product_Icon))
        }), 2000);


            var State_Icon =  element(by.xpath(data.State.State_Product_Icon));
            browser.actions().mouseMove(State_Icon).click().perform();
            console.log( "State -  Search sucess");
    });


    it('Create Multiple State', function(){


            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Create_Button))
            }), 9000);


            var Create = element(by.xpath(data.Create_Button));
            PO9.browser_actions(Create);

            expect(browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.State.State_Code_Field))
            }),5000);


// Enter the Value to create State

            browser.isElementPresent(by.xpath(data.State.State_Code_Field)).then(function (visible) {

            if (visible){


                using(State,function (newt) {

                    expect(browser.wait(function(){
                        return browser.isElementPresent(by.xpath(data.State.State_Code_Field))
                    }),9000);

                       PO9.Search_Xpath(data.State.State_Code_Field,newt.CodeValue);
                       PO9.Search_Xpath(data.State.State_Name_Field,newt.NameValue);
                       PO9.Search_Xpath(data.State.State_Description_Field,newt.DespValue);
                        browser.sleep(2000);

// Select the Country

                        var sel_Cout = element(by.xpath(data.State.Select_Country_Click));
                        PO9.browser_actions(sel_Cout);

                        browser.sleep(4000);

                        var CTY = element(by.xpath(newt.CountryValue));
                        PO9.browser_actions(CTY);

                        browser.sleep(3000);

                        var sel_but = element(by.xpath(data.State.Sel_Country_List3));
                        PO9.browser_actions(sel_but);

                        browser.sleep(2000);

                    console.log( newt.NameValue + " - State Added");


                    expect(browser.wait(function(){
                        return browser.isElementPresent(by.xpath(data.Code_2nd))
                    }),9000);

                           var Add_State = element(by.xpath(data.Add_2nd_Channel));
                           PO9.browser_actions(Add_State);
                           browser.sleep(500);
                    });
                }
          });
    });


    it('Master State Null value', function(){

        PO4.Save1();

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Save_popup))
        }), 90000);
        browser.sleep(1000);

//Expand the State to verify the Error messages


        PO9.Add_Xpath(data.State.Select_State);
        browser.sleep(500);
        PO9.Add_Xpath(data.State.State_Expand);
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
        console.log(  "State - null value validation sucess");

    });


    it('Save the State', function(){


        browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function(visible){

            if(visible) {


// Save the State

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

// Save the State

                PO4.Save2();
                console.log(" State -  creation is Sucessful");


                CO.Mod_Close();
            }
            else
            {
                browser.sleep(2000);

// Save the State

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

// Save the State

                PO4.Save2();
                console.log(" State - creation is Sucessful");


                CO.Mod_Close();
            }
        });
    });
});


