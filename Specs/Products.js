

describe('PRODUCT CREATION', function() {
    var data = require('../Data/Testdata.json');
    var PO17 = require('../Pages/Common_Objects');
    var PO4 = require('../Pages/Save');
    var CO = require('../Pages/Close');
    var using = require('jasmine-data-provider');


    browser.waitForAngularEnabled(false);


    function Fee_Item() {
        return [

            {
                Fee_Item_CodeValue: data.Product.Fee_Item_Code_Value1,
                Fee_Item_NameValue: data.Product.Fee_Item_Name_Value1,
                Fee_Item_DespValue: data.Product.Fee_Item_Desp_Value1,
                Fee_Code_Search: data.Product.Fee_Item_Popup_Search1,
                Fee_Code_value: data.Product.Fee_Item_Popup_Search_value1,
                Fee_tran_code: data.Product.Fee_Item_Tran_code_Value1
            },
            {
                Fee_Item_CodeValue: data.Product.Fee_Item_Code_Value2,
                Fee_Item_NameValue: data.Product.Fee_Item_Name_Value2,
                Fee_Item_DespValue: data.Product.Fee_Item_Desp_Value2,
                Fee_Code_Search: data.Product.Fee_Item_Popup_Search2,
                Fee_Code_value: data.Product.Fee_Item_Popup_Search_value2,
                Fee_tran_code: data.Product.Fee_Item_Tran_code_Value2
            }

        ]
    };


    function Select_Fee_Code(value1, value2) {


        var Fee_Item_Code_icon = element(by.xpath(data.Product.Options_Fee_Code_Icon));
        PO17.browser_actions(Fee_Item_Code_icon);
        browser.sleep(1000);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Fee_Item_Popup_Search))

        }), 9000);

        PO17.Search_Xpath(data.Product.Fee_Item_Popup_Search, value1);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        var Tran_Code = element(by.xpath(value2));
        browser.actions().mouseMove(Tran_Code).click().perform();
        browser.sleep(1000);


        var sel_but = element(by.xpath(data.Product.Prod_Fee_Code_Sel_But));
        PO17.browser_actions(sel_but);


    };


    it('PRODUCT Creation - Maker', function () {

                 browser.waitForAngularEnabled(false);

                 expect(browser.wait(function () {
                     return browser.isElementPresent(by.xpath(data.Configuration_Popup_Id))
                 }), 9000);


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
                 }), 9000);


                 var Product_Icon = element(by.xpath(data.Product.Product_Product_Icon));
                 browser.actions().mouseMove(Product_Icon).click().perform();

                 console.log("Product Search Sucessfull");
         });



         it('Creation of Product', function () {

                 expect(browser.wait(function () {
                     return browser.isElementPresent(by.xpath(data.Create_Button))
                 }), 9000);

                 browser.sleep(1000);
                 var Create = element(by.xpath(data.Create_Button));
                 PO17.browser_actions(Create);

                 expect(browser.wait(function () {
                     return browser.isElementPresent(by.xpath(data.Product.Product_Code_Field))
                 }), 9000);


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

                console.log("Product Overview Updated");


     // Navigating to Feature tab

                 PO17.Add_Xpath(data.Product.Product_Feature_Tab);
                 browser.sleep(1000);

     // select product feature with option / without option (Creation of Transfer - Feature)

                 var Fet_Add_icon = element(by.xpath(data.Product.Product_Feature_add_icon));
                 PO17.browser_actions(Fet_Add_icon);
                 browser.sleep(2000);

                 var Fet_without_option = element(by.xpath(data.Product.Product_Feature_Without_Option));
                 PO17.browser_actions(Fet_without_option);

                 PO17.Search_Xpath(data.Product.Feature_Code_Field, data.Product.Feature_Code_Value);
                 PO17.Search_Xpath(data.Product.Feature_Name_Field, data.Product.Feature_Name_Value);
                 PO17.Search_Xpath(data.Product.Feature_Desp_Field, data.Product.Feature_Desp_Value);
                 browser.sleep(1000);
                 console.log("Navigate to Feature tab Sucessfull");


     // Navigate to Fee Item tab

                 var Fee_item_tab = element(by.xpath(data.Product.Feature_Fee_Item_Tab));
                 PO17.browser_actions(Fee_item_tab);
                 console.log("Navigate to Fee Item Tab Sucessfull");

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
                     }),9000);


                     PO17.Search_Xpath(data.Product.Fee_Item_Code_Field, Item1.Fee_Item_CodeValue);
                     PO17.Search_Xpath(data.Product.Fee_Item_Name_Field, Item1.Fee_Item_NameValue);
                     PO17.Search_Xpath(data.Product.Fee_Item_Desp_Field, Item1.Fee_Item_DespValue);
                     browser.sleep(1000);

                     var Fee_Item_Code = element(by.xpath(data.Product.Fee_Item_Code_Icon));
                     PO17.browser_actions(Fee_Item_Code);
                     browser.sleep(1000);

                     expect(browser.wait(function () {
                         return browser.isElementPresent(by.xpath(data.Product.Fee_Item_Popup_Search))

                     }), 9000);

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
                     }), 9000);

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

                 console.log("Product - Feature");

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

                 console.log("Product - Feature - Fee Item");
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
                 }),9000);

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

                 }), 9000);

                 PO17.Search_Xpath(data.Product.Fee_Item_Popup_Search, data.Product.Fee_Item_Fee_Code_value);
                 browser.actions().sendKeys(protractor.Key.ENTER).perform();

                 var Tran_Code = element(by.xpath(data.Product.Fee_Code_Tran_Code_AMT));
                 browser.actions().mouseMove(Tran_Code).click().perform();
                 browser.sleep(1000);


                 var sel_but = element(by.xpath(data.Product.Prod_Fee_Code_Sel_But));
                 PO17.browser_actions(sel_but);


     // select product feature with option (Creation of Cash Withdrawals - Feature)


     // Add the Feature

                 var Fet_Add_icon = element(by.xpath(data.Product.Product_Feature_add_icon));
                 PO17.browser_actions(Fet_Add_icon);
                 browser.sleep(2000);

                 var Fet_with_option = element(by.xpath(data.Product.Product_Feature_Option));
                 PO17.browser_actions(Fet_with_option);

                 PO17.Search_Xpath(data.Product.Feature_Code_Field, data.Product.Feature_Cash_WD_Code_Value);
                 PO17.Search_Xpath(data.Product.Feature_Name_Field, data.Product.Feature_Cash_WD_Name_Value);
                 PO17.Search_Xpath(data.Product.Feature_Desp_Field, data.Product.Feature_Cash_WD_Desp_Value);
                 browser.sleep(1000);

     // Navigate to Option Tab


                 var Options_tab = element(by.xpath(data.Product.Feature_Cash_WD_Option_Tab));
                 PO17.browser_actions(Options_tab);

     // Selecting the Type of Options


                 var Options_Add_icon = element(by.xpath(data.Product.Feature_Options_add_icon));
                 PO17.browser_actions(Options_Add_icon);
                 browser.sleep(2000);

                 PO17.Search_Xpath(data.Product.Options_Code_Field, data.Product.Options_Code_Value);
                 PO17.Search_Xpath(data.Product.Options_Name_Field, data.Product.Options_Name_Value);
                 PO17.Search_Xpath(data.Product.Options_Desp_Field, data.Product.Options_Desp_Value);
                 browser.sleep(1000);


      // Navigate to Options - Fee Item Tab

                 var Options_Fee_Item_tab = element(by.xpath(data.Product.Cash_WD_Option_Fee_Item_Tab));
                 PO17.browser_actions(Options_Fee_Item_tab);


     // Adding the Options Fee Item


             function ATM_FeeItems(){

                 return [
                     {Item_Code:data.Product.Options_Fee_Item_Code_Value1, Item_Name:data.Product.Options_Fee_Item_Name_Value1 , Item_Desp:data.Product.Options_Fee_Item_Desp_Value1 , Fee_Code_val:data.Product.Options_Item_Fee_Code_value1 , Fee_Code_sel:data.Product.Options_Item_Fee_Code_Select1 , Item_Tran_Freq: data.Product.Options_Trans_Freq1, Item_Tran_Code :data.Product.Options_Tran_Code1 },
                     {Item_Code:data.Product.Options_Fee_Item_Code_Value2, Item_Name:data.Product.Options_Fee_Item_Name_Value2 , Item_Desp:data.Product.Options_Fee_Item_Desp_Value2 , Fee_Code_val:data.Product.Options_Item_Fee_Code_value2 , Fee_Code_sel:data.Product.Options_Item_Fee_Code_Select2 , Item_Tran_Freq: data.Product.Options_Trans_Freq2, Item_Tran_Code :data.Product.Options_Tran_Code2 },
                     {Item_Code:data.Product.Options_Fee_Item_Code_Value3, Item_Name:data.Product.Options_Fee_Item_Name_Value3 , Item_Desp:data.Product.Options_Fee_Item_Desp_Value3 , Fee_Code_val:data.Product.Options_Item_Fee_Code_value3 , Fee_Code_sel:data.Product.Options_Item_Fee_Code_Select3 , Item_Tran_Freq: data.Product.Options_Trans_Freq3, Item_Tran_Code :data.Product.Options_Tran_Code3 },
                     {Item_Code:data.Product.Options_Fee_Item_Code_Value4, Item_Name:data.Product.Options_Fee_Item_Name_Value4 , Item_Desp:data.Product.Options_Fee_Item_Desp_Value4 , Fee_Code_val:data.Product.Options_Item_Fee_Code_value4 , Fee_Code_sel:data.Product.Options_Item_Fee_Code_Select4 , Item_Tran_Freq: data.Product.Options_Trans_Freq4, Item_Tran_Code :data.Product.Options_Tran_Code4 }
                 ]
             };


             using(ATM_FeeItems,function (IT_Val){


                 var Options_Add_icon = element(by.xpath(data.Product.Feature_Fee_Item_add_icon));
                 PO17.browser_actions(Options_Add_icon);
                 browser.sleep(2000);


                 var Options_Fee_Item_Trans = element(by.xpath(data.Product.Feature_Fee_Item_Trans));
                 PO17.browser_actions(Options_Fee_Item_Trans);
                 browser.sleep(1000);


                 PO17.Search_Xpath(data.Product.Fee_Item_Code_Field, IT_Val.Item_Code);
                 PO17.Search_Xpath(data.Product.Fee_Item_Name_Field, IT_Val.Item_Name);
                 PO17.Search_Xpath(data.Product.Fee_Item_Desp_Field, IT_Val.Item_Desp);
                 browser.sleep(1000);

     // Selecting the Fee code

                 Select_Fee_Code(IT_Val.Fee_Code_val, IT_Val.Fee_Code_sel);


     // Select the Transaction Type


                element(by.xpath('//label[contains(text(), "Aggregate")]')).click();
                 browser.sleep(1000);

                var Tran_fee_ferq = element(by.xpath("//div//input[@class='v-filterselect-input v-filterselect-input-readonly']"));

                expect (browser.wait(function(){
                    return browser.isElementPresent(by.xpath("//div//input[@class='v-filterselect-input v-filterselect-input-readonly']"))
                }),9000);

                PO17.browser_actions(Tran_fee_ferq);
                 browser.sleep(1000);

                PO17.Add_Xpath(IT_Val.Item_Tran_Freq);


     // Select the Transaction code

                 var fee_trans_code = element(by.xpath(data.Product.Option_Trans_Code_Icon));
                 PO17.browser_actions(fee_trans_code);
                 browser.sleep(1000);

                 expect(browser.wait(function () {
                     return browser.isElementPresent(by.xpath(data.Product.Prod_Tran_code_search))
                 }), 9000);

                 PO17.Search_Xpath(data.Product.Prod_Tran_code_search, IT_Val.Item_Tran_Code);
                 browser.actions().sendKeys(protractor.Key.ENTER).perform();
                 browser.sleep(1000);

                 var Tran_checkbox = element(by.xpath(data.Product.Fee_Tran_Code_checkbox));
                 browser.actions().mouseMove(Tran_checkbox).click().perform();
                 browser.sleep(1000);

                 var sel_but = element(by.xpath(data.Product.Prod_Fee_Code_Sel_But));
                 PO17.browser_actions(sel_but);
                 browser.sleep(1000);

             });

         });



        it('Creation of Plan', function () {

            console.log("Product - Plan Creation");
            // Navigating to Plan tab

            PO17.Add_Xpath(data.Product.Plan_Tab);
            browser.sleep(1000);

            //  Creating a new plan

            PO17.Add_Xpath(data.Product.Create_Plan_Icon);

            browser.sleep(2000);
            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Product.Plan_Create_button))
            }), 9000);

            //       PO17.Add_Xpath((data.Product.Plan_Create_button));

            var create_plan = element(by.xpath(data.Product.Plan_Create_button));
            PO17.browser_actions(create_plan);

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Product.Plan_Overview_Code_field))
            }), 9000);


            PO17.Search_Xpath(data.Product.Plan_Overview_Code_field, data.Product.Plan_Overview_Code_value);
            PO17.Search_Xpath(data.Product.Plan_Overview_Name_field, data.Product.Plan_Overview_Name_value);
            PO17.Search_Xpath(data.Product.Plan_Overview_Desp_field, data.Product.Plan_Overview_Desp_value);

            PO17.Add_Xpath(data.Product.Plan_Overview_Default_Switch);


// Navigate to Options - Fee Item Tab

            console.log("Plan - Fee-Item");
            var Options_Fee_Item_tab = element(by.xpath(data.Product.Cash_WD_Option_Fee_Item_Tab));
            PO17.browser_actions(Options_Fee_Item_tab);

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Product.Plan_Temporal_CP))
            }), 9000);

            var Plan_fee_temporal = element(by.xpath(data.Product.Plan_fee_Temporal));
            PO17.browser_actions(Plan_fee_temporal);

            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Product.Plan_temporal_popup))
            }), 9000);

            element(by.xpath(data.Product.Plan_temporal_from_date)).sendKeys(data.Product.Plan_temporal_from_date_value);

            var Plan_temporal_ok = element(by.xpath(data.Product.Plan_temporal_ok));
            PO17.browser_actions(Plan_temporal_ok);

            console.log("Temporal set for Fee Plan")


//  Select the Feature Fee Item


            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Product.Plan_Feature_Create))
            }), 9000);



            expect(browser.wait(function () {
                return browser.isElementPresent(by.xpath(data.Product.Plan_Feature_Item1))
            }), 9000);

        });


    // Interface Transfer - Send (Transfers)']

    it('Interface Transfer - Send ', function() {

        console.log("Plan - Fee-Item - Interface Transfer - Send ");
        browser.sleep(1000);

 /*       var IT_Receive = element(by.xpath(data.Product.Plan_Feature_Item7));
        PO17.browser_actions(IT_Receive);   */

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Plan_Feature_Create))
        }), 9000);

        browser.sleep(4000);

        var Create = element(by.xpath(data.Product.Plan_Feature_Create));
        PO17.browser_actions(Create);

        expect(browser.wait(function(){
            return browser.isElementPresent(by.xpath(data.Product.Plan_ACC_MAN_Field))
        }),9000);

        var hotkeys = require('protractor-hotkeys');
        hotkeys.trigger('ctrl+a',{targetElement : element(by.xpath(data.Product.Plan_ACC_MAN_Field)) });

        PO17.Search_Xpath(data.Product.Plan_ACC_MAN_Field1,data.Product.Plan_ACC_MAN_Value4);
        browser.sleep(500);


    });

// Account Maintanence

    it('Update Account Maintance', function() {

        console.log("Plan - Fee-Item - Update Account Maintance ");
        browser.sleep(1000);


                var Feat_Account_Main = element(by.xpath(data.Product.Plan_Feature_Item1));
                PO17.browser_actions(Feat_Account_Main);

                expect(browser.wait(function () {
                    return browser.isElementPresent(by.xpath(data.Product.Plan_Feature_Create))
                }), 9000);

               browser.sleep(2000);

                var Create = element(by.xpath(data.Product.Plan_Feature_Create));
                PO17.browser_actions(Create);

// select the existing text in the textbox

//        browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('a').perform();


                var hotkeys = require('protractor-hotkeys');
                hotkeys.trigger('ctrl+a', { targetElement: element(by.xpath(data.Product.Plan_ACC_MAN_Field)) });

                browser.sleep(500);

                //       element(by.xpath(data.Product.Plan_ACC_MAN_Field1)).selectAll();
                PO17.Search_Xpath(data.Product.Plan_ACC_MAN_Field1, data.Product.Plan_ACC_MAN_Value1);

    });

// Bank Branch outside Country (ATM Withdrawal) (Cash Withdrawals)']

    it('Update Branch outside Country ', function() {

        console.log("Plan - Fee-Item - Update Branch outside Country");
        browser.sleep(1000);

        var hotkeys = require('protractor-hotkeys');

        var BB_Outside_Country = element(by.xpath(data.Product.Plan_Feature_Item2));
        PO17.browser_actions(BB_Outside_Country);
        browser.sleep(1000);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Plan_Feature_Create))
        }), 9000);

        var Create = element(by.xpath(data.Product.Plan_Feature_Create));
        PO17.browser_actions(Create);
        browser.sleep(1000);


        PO17.Add_Xpath(data.Product.Plan_Feature_Create_Tired);
        browser.sleep(4000);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Select_Whole_Tier))
        }), 90000);

        PO17.Add_Xpath(data.Product.Select_Whole_Tier);
        PO17.Add_Xpath(data.Product.Select_Tier_Volume);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Tier_Volume_Value_Input))
        }), 9000);

        PO17.Search_Xpath(data.Product.Tier_Volume_Value_Input, data.Product.Tier_Volume_Value_Input_Value);
        hotkeys.trigger('enter',{targetElemt :  element(by.xpath(data.Product.Tier_Volume_Value_Input)) });

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Tier_Table_Checkpoint))
        }), 9000);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Tier_Value_Field_2))
        }), 9000);


        hotkeys.trigger('ctrl+a', { targetElement: element(by.xpath(data.Product.Tier_Value_Field_1)) });
        PO17.Search_Xpath(data.Product.Tier_Value_Field_1, data.Product.Tier_Field_Value_1);

        hotkeys.trigger('ctrl+a', { targetElement: element(by.xpath(data.Product.Tier_Value_Field_2)) });
        PO17.Search_Xpath(data.Product.Tier_Value_Field_2, data.Product.Tier_Field_Value_2);

        hotkeys.trigger('ctrl+a', { targetElement: element(by.xpath(data.Product.Tier_Value_Field_3)) });
        PO17.Search_Xpath(data.Product.Tier_Value_Field_3, data.Product.Tier_Field_Value_3);

        hotkeys.trigger('ctrl+a', { targetElement: element(by.xpath(data.Product.Tier_Value_Field_4)) });
        PO17.Search_Xpath(data.Product.Tier_Value_Field_4, data.Product.Tier_Field_Value_4);
        browser.sleep(500);

    });

// PLUS ATM outside Canada and U.S (ATM Withdrawal) (Cash Withdrawals)']

    it('Update PLUS ATM outside Canada and U.S ', function() {

        console.log("Plan - Fee-Item - Update PLUS ATM outside Canada and U.S");
        browser.sleep(1000);

        var PLUS_ATM_Outside_Canada = element(by.xpath(data.Product.Plan_Feature_Item3));
        PO17.browser_actions(PLUS_ATM_Outside_Canada);
        browser.sleep(1000);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Plan_Feature_Create))
        }), 9000);

        var Create = element(by.xpath(data.Product.Plan_Feature_Create));
        PO17.browser_actions(Create);
        browser.sleep(1000);

        PO17.Add_Xpath(data.Product.Plan_Feature_Create_Simple);
        browser.sleep(500);

        expect(browser.wait(function(){
            return browser.isElementPresent(by.xpath(data.Product.Plan_ACC_MAN_Field))
        }),9000);

        browser.sleep(1000);
        var hotkeys = require('protractor-hotkeys');
        hotkeys.trigger('ctrl+a',{targetElement : element(by.xpath(data.Product.Plan_ACC_MAN_Field)) });

        PO17.Search_Xpath(data.Product.Plan_ACC_MAN_Field1, data.Product.Plan_ACC_MAN_Value2);
        browser.sleep(500);

    });


// PLUS ATM outside Country (ATM Withdrawal) (Cash Withdrawals)']

    it('PLUS ATM outside Country ', function() {

        console.log("Plan - Fee-Item - PLUS ATM outside Country");
        browser.sleep(1000);

        var PLUS_ATM_Outside_Country = element(by.xpath(data.Product.Plan_Feature_Item4));
        PO17.browser_actions(PLUS_ATM_Outside_Country);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Plan_Feature_Create))
        }), 9000);

        var Create = element(by.xpath(data.Product.Plan_Feature_Create));
        PO17.browser_actions(Create);

        PO17.Add_Xpath(data.Product.Plan_Feature_Create_Simple);
        browser.sleep(500);

        expect(browser.wait(function(){
            return browser.isElementPresent(by.xpath(data.Product.Plan_ACC_MAN_Field))
        }),9000);

        var hotkeys = require('protractor-hotkeys');
        hotkeys.trigger('ctrl+a',{targetElement : element(by.xpath(data.Product.Plan_ACC_MAN_Field)) });


        PO17.Search_Xpath(data.Product.Plan_ACC_MAN_Field1, data.Product.Plan_ACC_MAN_Value3);
        browser.sleep(500);

    });


// PLUS ATM within Canada and U.S (ATM Withdrawal) (Cash Withdrawals)']

    it('PLUS ATM within Canada and U.S  ', function() {

        console.log("Plan - Fee-Item - PLUS ATM within Canada and U.S ");
        browser.sleep(1000);

        var hotkeys = require('protractor-hotkeys');


        var PLUS_ATM_within_Canada = element(by.xpath(data.Product.Plan_Feature_Item5));
        PO17.browser_actions(PLUS_ATM_within_Canada);

        var Create = element(by.xpath(data.Product.Plan_Feature_Create));
        PO17.browser_actions(Create);


        PO17.Add_Xpath(data.Product.Plan_Feature_Create_Tired);
        browser.sleep(1000);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Select_Progressive_Tier))
        }), 9000);

        PO17.Add_Xpath(data.Product.Select_Progressive_Tier);
        PO17.Add_Xpath(data.Product.Select_Tier_Volume);


        PO17.Search_Xpath(data.Product.Tier_Volume_Value_Input, data.Product.Tier_Volume_Value_Input_Value);
        hotkeys.trigger('enter',{targetElemt :  element(by.xpath(data.Product.Tier_Volume_Value_Input)) });

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Tier_Table_Checkpoint))
        }), 9000);


        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Tier_Value_Field_2))
        }), 9000);


        hotkeys.trigger('ctrl+a',{targetElement : element(by.xpath(data.Product.Tier_Value_Field_1)) });
        PO17.Search_Xpath(data.Product.Tier_Value_Field_1, data.Product.Tier_Field_Value_5);

        hotkeys.trigger('ctrl+a',{targetElement : element(by.xpath(data.Product.Tier_Value_Field_2)) });
        PO17.Search_Xpath(data.Product.Tier_Value_Field_2, data.Product.Tier_Field_Value_6);

        hotkeys.trigger('ctrl+a',{targetElement : element(by.xpath(data.Product.Tier_Value_Field_3)) });
        PO17.Search_Xpath(data.Product.Tier_Value_Field_3, data.Product.Tier_Field_Value_7);

        hotkeys.trigger('ctrl+a',{targetElement : element(by.xpath(data.Product.Tier_Value_Field_4)) });
        PO17.Search_Xpath(data.Product.Tier_Value_Field_4, data.Product.Tier_Field_Value_8);
        browser.sleep(500);

    });

// Interface Transfer - Receive (Transfers)']

    it('Interface Transfer - Receive ', function() {

        console.log("Plan - Fee-Item - Interface Transfer - Receive ");
        browser.sleep(1000);

        var BB_within_country = element(by.xpath(data.Product.Plan_Feature_Item6));
        PO17.browser_actions(BB_within_country);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Plan_Feature_Create))
        }), 9000);

        var Create = element(by.xpath(data.Product.Plan_Feature_Create));
        PO17.browser_actions(Create);

        expect(browser.wait(function () {
        return browser.isElementPresent(by.xpath(data.Product.Select_Percentage))
        }), 9000);

        PO17.Add_Xpath(data.Product.Select_Percentage);

        expect(browser.wait(function () {
            return browser.isElementPresent(by.xpath(data.Product.Plan_ACC_Percentage_Field))
        }), 9000);

        var hotkeys = require('protractor-hotkeys');
        hotkeys.trigger('ctrl+a',{targetElement : element(by.xpath(data.Product.Plan_ACC_Percentage_Field)) });

        PO17.Search_Xpath(data.Product.Plan_ACC_Percentage_Field1, data.Product.Plan_ACC_Percentage_Value1);
        browser.sleep(500);

    });


           it('Save the Product',function(){

               console.log("Product - Save ");
               // Save the Product
               browser.sleep(1000);

               PO4.Save1();

       //Checkpoint for Save Popup

               expect(browser.wait(function () {
                   return browser.isElementPresent(by.xpath(data.Save_popup))
               }), 90000);

       // Save the State

               browser.sleep(1000);
               PO4.Save2();
               browser.sleep(3000);

               console.log("Product - Saved Sucessfully");
           });


});