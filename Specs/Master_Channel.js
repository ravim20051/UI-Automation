

describe('Master_Channel', function() {
    var data = require('../Data/Testdata.json');
    var PO3 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    function Channels(){
        return[
            {CodeValue:data.Channels.ChannelCode_Value1, NameValue:data.Channels.ChannelName_Value1, DespValue:data.Channels.ChannelDescription_Value1},
            {CodeValue:data.Channels.ChannelCode_Value2, NameValue:data.Channels.ChannelName_Value2, DespValue:data.Channels.ChannelDescription_Value2}
            ]
    };


    it('Master_Channel - Maker', function () {

        browser.waitForAngularEnabled(false);

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))}), 9000);


            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Master_Search))}), 9000);


// Search for Master Channel

                PO3.Search_Xpath(data.Master_Search, data.Channel_Search_Value);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                browser.sleep(1000);

// Click the Searched objects

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Product_Icon_Channel))
                }), 9000);


                    var Channel_Icon =  element(by.xpath(data.Product_Icon_Channel));
                    browser.actions().mouseMove(Channel_Icon).click().perform();
                    console.log("Channel - Search Sucessful");

    });


    it('Create Multiple Channels', function(){


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Create_Button))
        }), 9000);


            var Create = element(by.xpath(data.Create_Button));
            PO3.browser_actions(Create);

                expect(browser.wait(function(){
                    return browser.isElementPresent(by.xpath(data.Channels.ChannelCode_Field))
                }),9000);


// Enter the Value to create Channel

            browser.isElementPresent(by.xpath(data.Channels.ChannelCode_Field)).then(function (visible) {

                if (visible){

                    using(Channels,function (newt) {

                        expect(browser.wait(function(){
                            return browser.isElementPresent(by.xpath(data.Channels.ChannelCode_Field))
                        }),9000);

                           PO3.Search_Xpath(data.Channels.ChannelCode_Field,newt.CodeValue);
                           PO3.Search_Xpath(data.Channels.ChannelName_Field,newt.NameValue);
                           PO3.Search_Xpath(data.Channels.ChannelDescription_Field,newt.DespValue);
                           browser.sleep(500);

                           console.log(newt.NameValue + " - Channel created");

                            expect(browser.wait(function(){
                                return browser.isElementPresent(by.xpath(data.Code_2nd))
                            }),9000);

                             var Add_Channel = element(by.xpath(data.Add_2nd_Channel));
                             browser.actions().mouseMove(Add_Channel).click().perform();
                             browser.sleep(1000);

                    });

                 }

            });

    });


    it('Master Channel Null value', function(){

                PO4.Save1();

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 90000);

                browser.sleep(1000);

//Expand the Channel to verify the Error messages


                PO3.Add_Xpath(data.Channels.Select_channel);
                browser.sleep(1000);
                PO3.Add_Xpath(data.Channels.Channel_Expand);
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

                    console.log("Channel creation with null value validation is Sucessful");

                    expect (browser.wait(function(){
                        return browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//div//span[@class="v-button-wrap"]//span[text()="Discard Changes"]'))
                    }),5000);

                    CO.Discard();
    });


    it('Save the Channel', function() {

        browser.element(by.xpath(data.Month_day.save_icon)).isDisplayed().then(function (visible) {
            if (visible) {

// Save the Channel

                PO4.Save1();

//Checkpoint for Save Popup

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Save_popup))
                }), 5000);

// Save the channel

                PO4.Save2();
                console.log("Channel  - creation is Sucessful");
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