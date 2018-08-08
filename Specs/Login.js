describe('Login', function()
{
    var data = require ('../Data/Testdata.json');
    var PO = require ('../Pages/Login_Page_Objects');


    it('Login - Maker(Valid User)', function(){


            browser.waitForAngularEnabled(false);
            browser.get(data.url);

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Username_Loc))
            }), 9000);

            browser.driver.manage().window().maximize();
            browser.sleep(1000);
            console.log("Maker - Zrpe Url opened Sucessfully");

// Enter username and password

            PO.Textfield_Xpath(data.Username_Loc, data.Username);
            PO.Textfield_Xpath(data.Password_Loc, data.Password);

// Click Login Button

            browser.sleep(1000);
            PO.Button_Css(data.Login_Button);
            console.log("Maker - Login Sucssfull");

    });


});