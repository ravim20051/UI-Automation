var Save = function() {

        this.Save1 = function() {


            browser.sleep(1000);

            var Saving1 = element(by.xpath('//*[@id="zrpeuidesigner-1465881492"]//div//span[@class="v-menubar-menuitem v-menubar-menuitem-icon-only"]//span[text()="^"]'));
            browser.actions().mouseMove(Saving1).click().perform();
            browser.sleep(2000);
    };

       this.Save2 = function() {

            browser.sleep(1000);
            var Saving2 = element(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//div[@class="popupContent"]//div[@class="v-expand"]//div[@class="v-menubar v-widget"]//span[@class="v-menubar-menuitem"]/span[text()="Save"]'));
            browser.actions().mouseMove(Saving2).click().perform();
            browser.sleep(2000);
    };

    };

module.exports = new Save();