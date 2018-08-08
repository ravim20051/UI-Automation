var Close = function() {

        this.Discard = function() {

        browser.sleep(1000);
        var Discard = element(by.xpath('//*[@id="zrpeuidesigner-1465881492-overlays"]//div//span[@class="v-button-wrap"]//span[text()="Discard Changes"]'));
        browser.actions().mouseMove(Discard).click().perform();
        browser.sleep(3000);
    };

    this.Mod_Close = function() {

        browser.sleep(1000);
        var Mod_Close = element(by.xpath('//div//table//tr//td//div//span[text()="×"]'));
        browser.actions().mouseMove(Mod_Close).click().perform();
        browser.sleep(3000);
    };

    };

module.exports = new Close();