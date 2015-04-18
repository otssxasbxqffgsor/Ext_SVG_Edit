svgEditor.addExtension('Sage101', function () {
    'use strict';
    return {
        name: "Sage101",
        svgicons: svgEditor.curConfig.extPath + "sage101-icons.svg",
        buttons: [
        {
            id: "sage_101",
            type: "mode",
            title: "Sage 101 Add Link",
            position: 16,
            events: {
                'click': function () {
                    //var el = document.getElementById('Test');
                    // function callBack(val)
                    // {
                    //    alert(val);
                    //}
                    //svgEditor.addDropDown(el,callBack,null);
                    // var url = prompt("Give Me a Url");
                    //  svgCanvas.makeHyperlink(url);
                    //  svgCanvas.makeHyperlink();
                    // svgCanvas.save();

                    //       var Messge = "Chose your screen";
                    //                        'select', msg, cb, txt, opts, changeCb, checkbox
                    //    var opt = ["AP Transaction", "AR Transaction"];
                    // write a function to create an bject with the modules name 

                    var Repository = ["Model", "Method", "CallBack"];

                    Repository.CallBack = {

                        "ListenerSecondMenuItem": function (val) {
                            //     debugger;
                            console.log("=========================================================This is the id if the tag  " + val);
                            var ManuItemId = $('#' + val).change(function () { Repository.CallBack.AddOkAndCancellButtons(val); });


                        },



                        "AddCallBackListenerForButtons": function (_secondMenuId) {
                            //  $('#' + _secondMenuId).hide();
                            //     debugger;
                            //     alert(_secondMenuId);
                            //  $('#' + _secondMenuId).change(function () { Repository.CallBack.AddOkAndCancellButtons(_secondMenuId); });
                            //SecondMenuId, ScreenUrl
                            //    debugger;
                            //    console.log(_secondMenuId);

                        },
                        "SelectedItemIsInvoked": function () {
                            var myval = Repository.Model.menu_name_VPF().val();
                            Repository.Method.CreateANewArrayBasedOnFirstArray(myval);
                            // create a new item based on the previous item 

                            //    alert(Repository.Model.menu_name_VPF().val());

                        },
                        "AddOkAndCancellButtons": function (SecondMenuId) {
                            // debugger;

                            var link = $('#' + SecondMenuId).val();
                            console.log(link);

                            // create two bottoms and append them into the botton area
                            // crean the area
                            // invoke them into the are and then call the add link from the item 
                            //  var SecondMenuId = null;
                            // OK = invoke the add url 
                            // Cancel = get the parent and change to hide();
                            var Model = Repository.Model.Buttons();
                            Model.ok = jQuery('<button>',
                            {
                                id: "_Ok_Button_VPF",
                                value: "OK",
                                text: "OK",
                            });


                            Model.cancel = jQuery('<button>', {
                                id: "_Cancel_Button_VPF",
                                value: "cancel",
                                text: "cancel",
                            });

                            try {
                                // append two buttons to the 

                                Repository.CallBack.UpdateButtons('#_Ok_Button_VPF', '#_Cancel_Button_VPF', Model, link);
                                //    console.log(Repository.CallBack.CancellButtonAttribute);
                                //    Repository.Model.dialog_buttons().find('#_Ok_Button_VPF').remove();
                                //   Repository.Model.dialog_buttons().find('#_Cancel_Button_VPF').remove();
                                //     Repository.Model.dialog_buttons().append(Model.ok);
                                //     Repository.Model.dialog_buttons().append(Model.cancel);

                            } catch (e) {
                                alert("Error Appending the buttons to the dialog_buttons");
                            }


                            return Model;
                        },

                        "UpdateButtons": function (_Ok_Button_VPF, _Cancel_Button_VPF, Model, link) {
                            var diolog_buttons = $("#dialog_box");
                            var container = diolog_buttons.find("#dialog_container");
                            var dialog_buttons = container.find('#dialog_buttons');
                        
                            dialog_buttons.find(":input").remove();
                            Repository.Model.dialog_buttons().find(_Ok_Button_VPF).remove();
                            Repository.Model.dialog_buttons().find(_Cancel_Button_VPF).remove();
                            Repository.Model.dialog_buttons().append(Model.ok);
                            Repository.Model.dialog_buttons().append(Model.cancel);
                            Repository.Model.dialog_buttons().find(_Ok_Button_VPF).click(function () {
                                //  alert("OK");
                                Repository.CallBack.OKButtonAttribute(link);

                            });
                            Repository.Model.dialog_buttons().find(_Cancel_Button_VPF).click(function () {
                                //   alert("cancel");
                                //  $('#dialog_box').hide();
                                Repository.CallBack.CancellButtonAttribute();

                            });
                        }
                        ,

                        "Text_buttonsRemove": function () {
                            debugger;



                            return 1;


                        },

                        "CancellButtonAttribute": function () {
                            $('#dialog_box').hide();
                        },
                        "OKButtonAttribute": function (link) {
                            // get id of the second box
                            console.log(link);
                            // get tag and add listener to it.
                            var id = svgCanvas.getId();
                            var el = svgCanvas.getElem(id);
                       
                            console.log("Element"+el+"id"+id);
                            svgCanvas.removeHyperlink();
                            svgCanvas.makeHyperlink(link);
                            $('#dialog_box').hide();

                        }

                    }

                    Repository.Method = {

                        "AddScreenLink": function (val) {


                            try {



                            } catch (e) {
                                alert("error getting the link from front end!");
                            }

                        },
                        "AddSecondMenuItem": function () {

                            Repository.Model.menu_name_VPF().change(function () {
                                Repository.CallBack.SelectedItemIsInvoked();
                            });


                        },
                        "CreateANewArrayBasedOnFirstArray": function (selectedMenuName) {
                            //  debugger;
                            if (selectedMenuName == null)
                                alert("Empty String");
                            console.log("THis is the chosen value by user" + selectedMenuName);
                            // get tje ,enu name and create a second menu and add this to the second menu 
                            // Repository.Model.menu_name_VPF();
                            //  Repository.Model.GenerateSecondMenuByMenuName();
                            Repository.Model.menuNameOptionsSecond(selectedMenuName, Repository.Model.GenerateSecondMenuByMenuName(selectedMenuName));

                        },
                        "RemovePreviousAppenedItems": function () {
                            $.each(Repository.Model.ArrayMenuNames(), function () {
                                $.each(this, function (index, val) {
                                    console.log("Removing index of " + index + "And removing Value of " + val);
                                    $('#' + index).remove();
                                    //  $(val).remove();


                                });
                            });

                        }
                    };


                    Repository.Model = {
                        "Buttons": function () {
                            //  debugger;
                            var Model = ["ok", "cancell"];
                            //    console.log("This is the model" + Model);
                            return Model;
                        },
                        "diolog_Container": function () {
                            var item = $('#dialog_content');
                            if (item == null)
                                return false;
                            return (item);
                        },
                        "dialog_content": function () {
                            var item = $('#dialog_content');
                            if (item == null)
                                return false;
                            return (item);
                        },
                        "dialog_buttons": function () {
                            var item = $('#dialog_buttons');
                            if (item == null)
                                return false;
                            return (item);

                        },
                        "select_name": function () {

                            var select = $("<select id ='menu_name_VPF'></select>");
                            return select;

                        },
                        "GenerateSecondMenuByMenuName": function (select_name) {
                            // put ok and cancell with hide 

                            Repository.Method.RemovePreviousAppenedItems();
                            // alert(select_name);
                            var selectedMenuItem = $("<select id =" + select_name + "></select>");
                            // remove all previous items 
                            selectedMenuItem.appendTo(Repository.Model.dialog_content());

                            Repository.CallBack.ListenerSecondMenuItem(select_name);
                            if (selectedMenuItem == null)
                                alert("Empty String");
                            return selectedMenuItem;
                        },
                        "ArrayMenuNames": function () {
                            // get menu names from xml or data base in later stages for now doing it statically. 
                            var arr = ([
                                { "InitialMessage": "Select" },
                                { "A_P_Accountable": "A/P Accountable" }, { "B_K_Transaction": "B/K Transaction" }, { "C_P_Transaction": "C/P Transaction" }, { "G_L_Transaction": "G/L Transaction" }, { "I_C_Maintain_Items": "I/C Maintain Items" },
                                { "I_C_Tranaction": "I/C Tranaction" }, { "O_E_Tranaction": "O/E Tranaction" }, { "P_M_Tranaction": "P/M Tranaction" }, { "P_O_Tranaction": "P/O Tranaction" }, { "U_P_Tranaction": "U/P Tranaction" }
                            ]);


                            return arr;
                        },
                        "FindValuesOfSecondArray": function (SecondArrayname) {
                            console.log("Retriving data for second menu with id" + SecondArrayname);
                            var JsonArray = null;

                            if (SecondArrayname == "A_P_Accountable")
                                return ([
                                    { "select": "select" },
                                    { "AP1100 - Vendor Groups": "javascript:EventListenter_VPF('AP','VendorGroups','');" },
                                    { "AP1200 - Vendors": "javascript:EventListenter_VPF('AP','Vendors','');" },
                                    { "AP1400 - Remit To Locations": "javascript:EventListenter_VPF('AP','RemitToLocations','');" },
                                    { "AP1500 - Vendor Activity": "javascript:EventListenter_VPF('AP','VendorActivity','');" },
                                    { "AP1600 - 1099/CPRS Inquery": "javascript:EventListenter_VPF('AP','Print10991096Form','');" },
                                    { "AP2000 - Invoice Batch List": "javascript:EventListenter_VPF('AP','InvoiceBatchList','');" },
                                    { "AP2100 - Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP2300 - Recuring Payables": "javascript:EventListenter_VPF('AP','RecuringPayables','');" },
                                    { "AP3000 - Payment Batch List": "javascript:EventListenter_VPF('AP',' PaymentBatchList','');" },
                                    { "AP3100 - Payment Entry": "javascript:EventListenter_VPF('AP','PaymentEntry','');" },


                                    { "AP3300 - Create Payment Batch": "javascript:EventListenter_VPF('AP','CreatePaymentBatch','');" },
                                    { "AP3400 - Control Payment": "javascript:EventListenter_VPF('AP','ControlPayment','');" },
                                    { "AP3500 - Payment Selection Code": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP4000 - Adjustment Batch list": "javascript:EventListenter_VPF('AP','AdjustmentBatchlist','');" },
                                    { "AP4100 - Adjustment Entry": "javascript:EventListenter_VPF('AP','AdjustmentEntry','');" },
                                    { "AP4200 - Post Baches": "javascript:EventListenter_VPF('AP',' PostBaches','');" },
                                    { "AP43000 - Create Retainage Batch": "javascript:EventListenter_VPF('AP','CreateRetainageBatch','');" },
                                    { "AP4400 - Payment Inquery": "javascript:EventListenter_VPF('AP','PaymentInquery','');" },
                                    { "AP5101 - Options": "javascript:EventListenter_VPF('AP','Options','');" },
                                    { "AP5102 - Accont Sets": "javascript:EventListenter_VPF('AP',' AccontSets','');" },

                                    { "AP5103 - 1099/CPRS Codes": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP5104 - Distrubuition Codes": "javascript:EventListenter_VPF('AP','DistrubuitionCodes','');" },
                                    { "AP5105 - Distribution Sets": "javascript:EventListenter_VPF('AP','DistributionSets','');" },
                                    { "AP5106 - Terms": "javascript:EventListenter_VPF('AP','Terms','');" },
                                    { "AP5107 - Optional Fields": "javascript:EventListenter_VPF('AP','OptionalFields','');" },
                                    { "AP5111 - E-mail Messages": "javascript:EventListenter_VPF('AP','E-mailMessages','');" },

                                
                                    { "AP Vendor Transaction": "javascript:EventListenter_VPF('AP','VendorTransaction','');" },
                                    { "AP Payment Entry": "javascript:EventListenter_VPF('AP','PaymentEntry','');" },
                                    { "AP Check Resigster": "javascript:EventListenter_VPF('AP','CheckResigster','');" },
                                    { "AP G/L Tranaction": "javascript:EventListenter_VPF('AP','GLTransaction','');" },
                                    { "AP Posting Error": "javascript:EventListenter_VPF('AP','PostingtError','');" },
                                    { "AP Aged Payable": "javascript:EventListenter_VPF('AP','AgedPayable','');" },
                                    { "AP Aged Cash Requirement": "javascript:EventListenter_VPF('AP','AgedCashRequirement','');" },
                                    { "AP Aged Retainage": "javascript:EventListenter_VPF('AP','AgedRetainage','');" },
                                   
                                   /*
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },


                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },
                                    { "AP Invoice Entry": "javascript:EventListenter_VPF('AP','InvoiceEntry','');" },


                                    */





                                ]);
                            if (SecondArrayname == "A_R_Transaction")
                                return ([
                                    { "InitialMessage": "select" },
                                    { "AR/EmailMessage": "AR/EmailMessage" }, { "B_K_TransactionTomsn": "http://msn.com" }
                                ]);


                            else
                                return ([{ "select": "select" }, { "Sage1": "http://sage.com" }, { "Sage2": "http://sage.com" }]);


                        },
                        "menu_name_VPF": function () {
                            var menu_name = $('#menu_name_VPF');
                            if (menu_name == null)
                                return false;
                            return menu_name;
                        },
                        "menuNameOptions": function () {
                            $.each(Repository.Model.ArrayMenuNames(), function () {
                                $.each(this, function (index, val) {
                                    jQuery('<option>', {
                                        id: val,
                                        value: index,
                                        text: val

                                    }).appendTo(Repository.Model.menu_name_VPF());

                                    console.log(index);
                                });
                            });

                            return true;
                        },
                        "menuNameOptionsSecond": function (val, tobeAppendedTo) {
                            try {
                                $.each(Repository.Model.FindValuesOfSecondArray(val), function () {
                                    $.each(this, function (index, val) {
                                        //  debugger;
                                        jQuery('<option>', {
                                            id: index,
                                            value: val,
                                            text: index

                                        }).appendTo(tobeAppendedTo);

                                        console.log(index + val);
                                    });
                                });
                                //   debugger;
                                //  Repository.CallBack.AddCallBackListenerForButtons();

                                return true;

                            } catch (e) {
                                alert("Error!");
                            }
                            return true;
                        }
                    }

                    // show the diolog box
                    $('#dialog_box').show();
                    // append text to the menu 
                    Repository.Model.diolog_Container().text("Sage! Please choose a link from the menu:");
                    // create a selector 
                    Repository.Model.dialog_content().append(Repository.Model.select_name());
                    // append options to selector 
                    if (Repository.Model.menuNameOptions() == true) {
                        Repository.Method.AddSecondMenuItem();
                    }
                },
            }
        }
        ],
        // Context Tool 
        context_tools: [
        {
            //The type of tool being added. Must be one of the following: 'tool_button', 'select', 'input'
            /*     type: "select",
                 // 
                 options: { '1': 'Kian', '2': 'Two', 'all': 'All' },
                 container_id: "Sage101_panel",
                 panel: "sage_101",
                 title: "Chose one of the screens",
                 id: "Sage101_panel",
                 label: "Link to Screens",
                 size: 3,
                 defval: 5,*/
            //DOM event names with associated functions. Example: {'change': function() { alert('Option was changed') } }
            events: {
                'change': function () {




                }
            }

        }],


        selectedChanged: function () {

        }


    };


});







/*
id (string)	A unique identifier for this button. If SVG icons are used, this must match the ID used in the icon file.	Yes
type (string)	Type of button. Must be either 'mode' or 'context'	Yes
title (string)	The tooltip text that will appear when the user hovers over the icon	Yes
icon (string)	The file path to the raster version of the icon.	Only if no svgicons is supplied
svgicon (string)	If absent, will utilize the button "id"; used to set "placement" on the svgIcons call	No
list (string)	Points to the "id" of a context_tools item of type "button-select" into which the button will be added as a panel list item	No
position (integer)	The numeric index for placement; defaults to last position (as of the time of extension addition) if not present	No
panel (string)	The ID of the context panel to be included, if type is "context".	Only if type is "context"
events (object)	DOM event names with associated functions. Example: {'click': function() { alert('Button was clicked') } }	Yes
includeWith (object)	Object with flyout menu data (see following properties)	No
includeWith[button] (string)	jQuery selector of the existing button to be joined. Example: '#tool_line'	Yes (if includeWith is used)
includeWith[isDefault] (boolean)	Option indicating whether button is default in flyout list or not	No
isDefault (boolean)	Whether or not the default is the default	No
includeWith[position] (integer)	Position of icon in flyout list, will be added to end if not indicated	No
key (string)	The key to bind to the button	No
*/