
it('PRODUCT Creation - Maker', function () {

    browser.waitForAngularEnabled(false);

    expect(browser.wait(function () {
        return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))
    }), 5000);


    expect(browser.wait(function () {
        return browser.isElementPresent(by.xpath(data.Master_Search))
    }), 9000);


// Search for Product

    var Pricing = element(by.xpath(data.Product.Pricing));
    browser.actions().mouseMove(Pricing).click().perform();


    PO17.Search_Xpath(data.Master_Search, data.Product.Product_Search_Value);
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.sleep(1000);

// Click the Searched objects

    expect(browser.wait(function () {
        return browser.isElementPresent(by.xpath(data.Product.Product_Product_Icon))
    }), 2000);


    var Product_Icon = element(by.xpath(data.Product.Product_Product_Icon));
    browser.actions().mouseMove(Product_Icon).click().perform();
});


it('Creation of Product', function () {

    browser.sleep(1000);
    var Create = element(by.xpath(data.Create_Button));
    PO17.browser_actions(Create);

    expect(browser.wait(function () {
        return browser.isElementPresent(by.xpath(data.Product.Product_Code_Field))
    }), 5000);


// Enter the Value to create Product

    PO17.Search_Xpath(data.Product.Product_Code_Field, data.Product.Product_Code_Value);
    PO17.Search_Xpath(data.Product.Product_Name_Field, data.Product.Product_Name_Value);
    PO17.Search_Xpath(data.Product.Product_Desp_Field, data.Product.Product_Desp_Value);

// Select Currency

    var curr_search_icon = element(by.xpath(data.Product.Product_Curr_Icon_Select));
    PO17.browser_actions(curr_search_icon);

    expect(browser.wait(function () {
        return browser.isElementPresent(by.xpath(data.Product.Product_Curr_Popup))
    }), 9000);

    var Sel_Curr = element(by.xpath(data.Product.Product_Select_Currency));
    PO17.browser_actions(Sel_Curr);

    browser.sleep(2000);

    var sel_but = element(by.xpath(data.State.Sel_Country_List3));
    PO17.browser_actions(sel_but);


// Select Deposit or Loan / Credit Card

    var class_icon = element(by.xpath(data.Product.Product_Class_icon));
    PO17.browser_actions(class_icon);


    if (data.Product.Product_Class_Type == "Deposit") {
        var Dep = element(by.xpath(data.Product.Product_Class_Dep));
        PO17.browser_actions(Dep);
    }
    else {
        var L_CC = element(by.xpath(data.Product.Product_Class_L_CC));
        PO17.browser_actions(L_CC);
    }


// Add the Feature

var Fet_Add_icon = element(by.xpath(data.Product.Product_Feature_add_icon));
PO17.browser_actions(Fet_Add_icon);
browser.sleep(2000);






// select product feature with option / without option (Creation of Transfer - Feature)


var Fet_without_option = element(by.xpath(data.Product.Product_Feature_Without_Option));
PO17.browser_actions(Fet_without_option);

PO17.Search_Xpath(data.Product.Feature_Code_Field, data.Product.Feature_Code_Value);
PO17.Search_Xpath(data.Product.Feature_Name_Field, data.Product.Feature_Name_Value);
PO17.Search_Xpath(data.Product.Feature_Desp_Field, data.Product.Feature_Desp_Value);
browser.sleep(1000);

// Navigate to Fee Item tab

var Fee_item_tab = element(by.xpath(data.Product.Feature_Fee_Item_Tab));
PO17.browser_actions(Fee_item_tab);

// Selecting the Type of Fee Item

using(Fee_Item, function (Item1) {

    var Fee_item_Add_icon = element(by.xpath(data.Product.Feature_Fee_Item_add_icon));
    PO17.browser_actions(Fee_item_Add_icon);
    browser.sleep(2000);


    var Fee_Item_Trans = element(by.xpath(data.Product.Feature_Fee_Item_Trans));
    PO17.browser_actions(Fee_Item_Trans);
    browser.sleep(1000);

    expect(browser.wait(function(){
        return browser.isElementPresent(by.xpath(data.Product.Fee_Item_Code_Field))
    }),5000);


    PO17.Search_Xpath(data.Product.Fee_Item_Code_Field, Item1.Fee_Item_CodeValue);
    PO17.Search_Xpath(data.Product.Fee_Item_Name_Field, Item1.Fee_Item_NameValue);
    PO17.Search_Xpath(data.Product.Fee_Item_Desp_Field, Item1.Fee_Item_DespValue);
    browser.sleep(1000);

    var Fee_Item_Code = element(by.xpath(data.Product.Fee_Item_Code_Icon));
    PO17.browser_actions(Fee_Item_Code);
    browser.sleep(1000);

    expect(browser.wait(function () {
        return browser.isElementPresent(by.xpath(data.Product.Fee_Item_Popup_Search))

    }), 5000);

    PO17.Search_Xpath(data.Product.Fee_Item_Popup_Search, Item1.Fee_Code_Search);
    browser.actions().sendKeys(protractor.Key.ENTER).perform();

    PO17.Add_Xpath(Item1.Fee_Code_value);
    browser.sleep(2000);

    var sel_but = element(by.xpath(data.Product.Prod_Fee_Code_Sel_But));
    PO17.browser_actions(sel_but);


// Select the Transaction code

    var fee_trans_code = element(by.xpath(data.Product.Prod_Fee_Item_Tran_Code));
    PO17.browser_actions(fee_trans_code);
    browser.sleep(1000);

    expect(browser.wait(function () {
        return browser.isElementPresent(by.xpath(data.Product.Prod_Tran_code_search))
    }), 5000);

    PO17.Search_Xpath(data.Product.Prod_Tran_code_search, Item1.Fee_tran_code);
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.sleep(1000);

    var Tran_checkbox = element(by.xpath(data.Product.Fee_Tran_Code_checkbox));
    browser.actions().mouseMove(Tran_checkbox).click().perform();
    browser.sleep(1000);

    var sel_but = element(by.xpath(data.Product.Prod_Fee_Code_Sel_But));
    PO17.browser_actions(sel_but);
    browser.sleep(1000);


});




// select product feature without option (Creation of Account Maintance - Feature)


// Add the Feature

var Fet_Add_icon = element(by.xpath(data.Product.Product_Feature_add_icon));
PO17.browser_actions(Fet_Add_icon);
browser.sleep(2000);

var Fet_without_option = element(by.xpath(data.Product.Product_Feature_Without_Option));
PO17.browser_actions(Fet_without_option);

PO17.Search_Xpath(data.Product.Feature_Code_Field, data.Product.Feature_Acc_Maint_Code_Value);
PO17.Search_Xpath(data.Product.Feature_Name_Field, data.Product.Feature_Acc_Maint_Name_Value);
PO17.Search_Xpath(data.Product.Feature_Desp_Field, data.Product.Feature_Acc_Maint_Desp_Value);
browser.sleep(1000);

// Navigate to Fee Item tab

var Fee_item_tab = element(by.xpath(data.Product.Feature_Fee_Item_Tab));
PO17.browser_actions(Fee_item_tab);

// Selecting the Type of Fee Item

var Fee_item_Add_icon = element(by.xpath(data.Product.Feature_Fee_Item_add_icon));
PO17.browser_actions(Fee_item_Add_icon);
browser.sleep(2000);


var Fee_Item_Trans = element(by.xpath(data.Product.Feature_Fee_Item_Period));
PO17.browser_actions(Fee_Item_Trans);
browser.sleep(1000);

expect (browser.wait(function(){
    return browser.isElementPresent(by.xpath(data.Product.Fee_Item_Code_Field))
}),5000);

PO17.Search_Xpath(data.Product.Fee_Item_Code_Field, data.Product.Fee_Item_Code_Acc_Mant);
PO17.Search_Xpath(data.Product.Fee_Item_Name_Field, data.Product.Fee_Item_Name_Acc_Mant);
PO17.Search_Xpath(data.Product.Fee_Item_Desp_Field, data.Product.Fee_Item_Desp_Acc_Mant);
browser.sleep(1000);

// Selecting the Fee Code


var Fee_Item_Code_per = element(by.xpath(data.Product.Fee_Item_Code_Icon_Period));
PO17.browser_actions(Fee_Item_Code_per);
browser.sleep(1000);

expect(browser.wait(function () {
    return browser.isElementPresent(by.xpath(data.Product.Fee_Item_Popup_Search))

}), 5000);

PO17.Search_Xpath(data.Product.Fee_Item_Popup_Search, data.Product.Fee_Item_Fee_Code_value);
browser.actions().sendKeys(protractor.Key.ENTER).perform();

var Tran_Code = element(by.xpath(data.Product.Fee_Code_Tran_Code_AMT));
browser.actions().mouseMove(Tran_Code).click().perform();
browser.sleep(1000);


var sel_but = element(by.xpath(data.Product.Prod_Fee_Code_Sel_But));
PO17.browser_actions(sel_but);



