describe('Checker Login and Approval', function()
{
    var data = require ('../Data/Testdata.json');
    var PO = require ('../Pages/Login_Page_Objects');
    var PO20 = require('../Pages/Common_Objects');


    it('Checker Login - Checker(Valid User)', function(){


            browser.waitForAngularEnabled(false);
            browser.get(data.url);


//            browser.driver.manage().window().maximize();
            browser.sleep(2000);
            console.log("Checker - Zrpe Url opened Sucessfully");

// Enter username and password

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Username_Loc))
            }), 3000);

            PO.Textfield_Xpath(data.Username_Loc, data.Username_che);
            PO.Textfield_Xpath(data.Password_Loc, data.Password_che);

// Click Login Button

            browser.sleep(1000);
            PO.Button_Css(data.Login_Button);
            console.log("Login Sucssfull");

    });


    it('Approve the work flow', function() {

        console.log("Approving the workflow");

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Session_details))
        }), 90000);

        browser.sleep(2000);
        var start = element(by.xpath("//*[@id='zrpeuidesigner-1465881492']//div//span[@class='v-button-wrap']/span[text()='Start']"));
        browser.actions().mouseMove(start).click().perform();
        browser.sleep(3000);


// Navigate to Queued Tab


// checking the present of workflow

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Default_Value))
        }), 9000);

// Selecting the workflow

        browser.sleep(1000);
        var checkbx = element(by.xpath(data.Queued_Checkbox));
        browser.actions().mouseMove(checkbx).click().perform();

        browser.sleep(2000);

/*        var click_claim = element(by.xpath(data.claim));
        var EC = protractor.ExpectedConditions;

        browser.wait(EC.elementToBeClickable(click_claim), 90000);

        click_claim.click();   */


// verifying the claim button is enabled and click it

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.claim))
        }), 9000);
        browser.sleep(2000);


        var click_claim = element(by.xpath(data.claim));
        browser.actions().mouseMove(click_claim).click().perform();
        browser.sleep(2000);


// Wait till the workflow moved to claimed my task

        var EC = protractor.ExpectedConditions;
        browser.wait( EC.invisibilityOf( element(by.xpath(data.Default_Value))), 90000 );

        console.log("Workflow - Claim sucess");


// Move to My Task Tab

        browser.sleep(1000);
        var mytask = element(by.xpath(data.My_Task));
        browser.actions().mouseMove(mytask).click().perform();


// checking the present of workflow

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Default_Value))
        }), 9000);

// Selecting the workflow

        var checkbx = element(by.xpath(data.Queued_Checkbox));
        browser.actions().mouseMove(checkbx).click().perform();

        browser.sleep(2000);

// verifying the claim button is enabled and click it

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.mytask_claim))
        }), 9000);
        browser.sleep(2000);


        var Myclick_claim = element(by.xpath(data.mytask_claim));
        browser.actions().mouseMove(Myclick_claim).click().perform();

        expect(browser.wait(function(){
            return browser.isElementPresent(by.xpath(data.Approve_Popup))
        }), 90000);

        var App_but = element(by.xpath(data.Approve_button));
        browser.actions().mouseMove(App_but).click().perform();




// Wait till the workflow is sucessfully approved

        var EC = protractor.ExpectedConditions;
        browser.wait( EC.invisibilityOf( element(by.xpath(data.Default_Value))), 900000 );
        console.log("Workflow - Approval sucess");


// Logout

  /*      expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.mytask_claim))
        }), 9000);     */

        var Icon =  element(by.xpath('//*[@id="zrpeuidesigner-1465881492"]//div//span[@class="v-menubar-menuitem"]'));
        PO20.browser_actions(Icon);

        browser.sleep(2000);

        var Logout =  element(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//div//span[text()="Logout"]'));
        PO20.browser_actions(Logout);

        console.log("Logout - sucess");

    });

    });