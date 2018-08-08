describe('Send to Workflow', function()
{
    var data = require ('../Data/Testdata.json');
    var PO20 = require ('../Pages/Common_Objects');



    it('Workflow - Maker(User)', function(){

            console.log("Workflow - Send to Workflow ");

            browser.waitForAngularEnabled(false);

            expect (browser.wait(function(){
                return browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492"]//div//span[@class="v-menubar-menuitem"]'))
            }),9000);

            browser.sleep(2000);
            var Icon =  element(by.xpath('//*[@id="zrpeuidesigner-1465881492"]//div//span[@class="v-menubar-menuitem"]'));
            PO20.browser_actions(Icon);

              browser.sleep(2000);

            expect (browser.wait(function(){
                return browser.isElementPresent(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//div//span[text()="Workflow"]'))
            }),9000);
            browser.sleep(2000);


            var Workflow =  element(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//div//span[text()="Workflow"]'));
                PO20.browser_actions(Workflow);
                browser.sleep(3000);

            expect (browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.Popup))
            }),9000);

            browser.sleep(1000);
            PO20.Button_Xpath_Click(data.Send);

            expect (browser.wait(function(){
                return browser.isElementPresent(by.xpath(data.Review))
            }),9000);

            var Icon =  element(by.xpath('//*[@id="zrpeuidesigner-1465881492"]//div//span[@class="v-menubar-menuitem"]'));
            PO20.browser_actions(Icon);
            browser.sleep(1000);

            var Logout =  element(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//div//span[text()="Logout"]'));
            PO20.browser_actions(Logout);


    });


});