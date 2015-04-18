svgEditor.addExtension('Sage102', function (S) {
    'use strict';





    return {
        name: "Sage102",
        svgicons: svgEditor.curConfig.extPath + 'sage_102.svg',
        buttons: [
            {
                id: 'sage_102',
                type: 'mode',
                title: 'Sage 102',
                position: 16,
                events: {
                    'click': function () {
                        // import item and 
                        var importedItem = svgEditor.curConfig.extPath + 'sage_102.svg';
                        var Repository = ["Model", "Method", "CallBack", "Shapes", "Http"];
                        Repository.CallBack = {
                            "ListenerSecondMenuItem": function (val) {
                                debugger;
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
                                debugger;

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
                                    //   console.log(Repository.CallBack.CancellButtonAttribute);
                                    //   Repository.Model.dialog_buttons().find('#_Ok_Button_VPF').remove();
                                    //    Repository.Model.dialog_buttons().find('#_Cancel_Button_VPF').remove();
                                    //     Repository.Model.dialog_buttons().append(Model.ok);
                                    //     Repository.Model.dialog_buttons().append(Model.cancel);

                                } catch (e) {
                                    alert("Error Appending the buttons to the dialog_buttons");
                                }


                                return Model;
                            },
                            "UpdateButtons": function (_Ok_Button_VPF, _Cancel_Button_VPF, Model, link) {
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
                            },
                            "CancellButtonAttribute": function () {
                                $('#dialog_box').hide();
                            },
                            "OKButtonAttribute": function (link) {
                                // get id of the second box
                                console.log(link);
                                // get tag and add listener to it.
                                debugger;
                                var id = svgCanvas.getId();
                                var el = svgCanvas.getElem(id);
                                var MyEl = $('#' + id).click(function () {
                                    //
                                    //alert("Here");

                                });
                                console.log("Element" + el + "id" + id + "MyEl" + MyEl);
                                //svgCanvas.removeHyperlink();
                                // return (link);
                                svgCanvas.importSvgString(link);

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

                            },
                            "AjaxGetScreenFromDb": function (MenuId) {

                                try {
                                    return (Repository.Http.Get(Id));
                                } catch (e) {
                                    alert("Failed To Get Data From Db!");
                                }
                            },
                            "Screen": {
                                "AP": function () {
                                    // return an array 
                                    // method get core Id and requests ajax call 
                                    var myArray = [Repository.Model.Screen.AP.length];
                                    var i = 0;
                                    $.each(Repository.Model.Screen.AP, function (index, value) {
                                        debugger;
                                        console.log(Repository.Model.Screen.AP);
                                        myArray[i] = { index: Repository.Method.Get(value) };
                                    });
                                },
                                "AR": {}
                            },
                            "Get": function (ScreenName) {
                                alert(ScreenName);
                                $.each(Repository.Model.Ids.AP, function (index, value) {
                                    debugger;
                                    alert(value);
                                    console.log(index);
                                    console.log(value);
                                    $.each(value, function(_index, _value) {
                                        return (Repository.Http.Get(_value));
                                           });
                                   
                                  
                                });


                            }

                        };
                        Repository.Http = {
                            "Get": function (id) {
                                var _url = Repository.Model.GetUrl(id);
                                alert(_url);
                                try {
                                    return (
                                        JSON.parse($.ajax(
                                            {
                                                url: _url,
                                                dataType: 'json',
                                                contentType: 'application/json',
                                                async: false,
                                                sucess: function (data) { console.log("Success" + url + data); },
                                                error: function (error) { alert("FailedAtAjaxCall!" + error); }
                                            })));

                                } catch (e) {
                                    alert("Error Ajax Get To GetTemplate API");
                                }
                            }


                        };
                        Repository.Model = {
                            "Screen": {
                                "AP": [{
                                    "Analytical_Report": "Analytical_Report",
                                    "Make_Payment": "Make_Payment",
                                    "Enter_Vendor": "Enter_Vendor",
                                    "Vendor_Record": "Vendor_Record",
                                    "Transaction_Report": "Transaction_Report",
                                }]
                            },
                            "Ids": {
                                "AP": [{
                                    "Analytical_Report": "100",
                                    "Make_Payment": "101",
                                    "Enter_Vendor": "102",
                                    "Vendor_Record": "103",
                                    "Transaction_Report": "104",
                                }]
                            },

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
                                    { "AP": "A/P Transaction" }, { "B_K_Transaction": "B/K Transaction" }, { "C_P_Transaction": "C/P Transaction" }, { "G_L_Transaction": "G/L Transaction" }, { "I_C_Maintain_Items": "I/C Maintain Items" },
                                    { "I_C_Tranaction": "I/C Tranaction" }, { "O_E_Tranaction": "O/E Tranaction" }, { "P_M_Tranaction": "P/M Tranaction" }, { "P_O_Tranaction": "P/O Tranaction" }, { "U_P_Tranaction": "U/P Tranaction" }
                                ]);


                                return arr;
                            },
                            "FindValuesOfSecondArray": function (SecondArrayname) {
                                console.log("Retriving data for second menu with id" + SecondArrayname);
                                var JsonArray = null;

                                //    if (SecondArrayname == "A_P_Transaction")
                                //    return ([
                                ////        { "select": "select" }, 
                                //       { "AP Vendor Activity": String }
                                //    ]);

                                if (SecondArrayname == "AP") {
                                    return Repository.Method.Get(SecondArrayname);
                                }

                                if (SecondArrayname == "B_K_Transaction")
                                    return ([
                                        { "select": "select" }, { "Magnifier": mag }, { "Printer": Printer }
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
                            },
                            "GetUrl": function (Id) { return (window.location.protocol + "//" + window.location.host + "Tenant" + "/" + this.UrlModel.Area + "/" + this.UrlModel.Controller + "/" + this.UrlModel.Action + "/" + Id); }
                            , "UrlModel": { "Area": "VPF", "Controller": "VPFCore", "Action": "GetTemplate" }
                        };
                        //       Repository.Shapes = {
                        //         "AP_Analytical_Report": Repository.Methods.Screen.AP.Analytical_Report(),
                        //         "AP_Make_Payment": Repository.Methods.Screen.AP.Make_Payment(),
                        //         "AP_Enter_Vendor": Repository.Methods.Screen.AP.Enter_Vendor(),
                        //         "AP_Vendor_Record": Repository.Methods.Screen.AP.Vendor_Record(),
                        //         "AP_Transaction_Report": Repository.Methods.Screen.AP.Transaction_Report(),
                        //};

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





                        //////////////////////////////
                    },
                }
            }
        ],
        // Context Tool 
        context_tools: [{
        }],
        mouseDown: function (evt) {
            /*		
            event: evt,
            start_x: start_x,
            start_y: start_y,
            selectedElements: selectedElements
            */
            // create an element from Json file 
            //        var shape = svgCanvas.addSvgElementFromJson("~\Areas/VPF/Scripts/svg-edit/extensions/IconTest.svg");
            //        console.log(shape);






        },
        mouseUp: function (opt) {

            return 1;


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