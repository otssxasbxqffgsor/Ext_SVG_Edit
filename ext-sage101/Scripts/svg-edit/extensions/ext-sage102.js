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
                        var importedItem = svgEditor.curConfig.extPath + 'sage_102.svg';

                        var String = '<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><!-- Created with SVG-edit - http://svg-edit.googlecode.com/ --><g><title>Layer 1</title><g id="svg_16"><path stroke="#000000" id="svg_8" d="m446.98999,153.72006l6.76276,-21.86195l17.70486,-13.51163l21.88477,0l17.70505,13.51163l6.76257,21.86195l-6.76257,21.86201l-17.70505,13.51161l-21.88477,0l-17.70486,-13.51161l-6.76276,-21.86201z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" fill="#FF0000"/><text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_10" y="305" x="279" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">This is the text One</text><text xml:space="preserve" text-anchor="middle" font-family="serif" font-size="24" id="svg_11" y="277" x="429" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" stroke="#000000" fill="#000000">This is the text two</text><a xlink:href="http://sage.com" id="svg_14"><path stroke="#000000" id="svg_7" d="m227.24455,91.81594c-12.12477,2.61829 -16.67157,17.94015 -7.48326,25.31016c1.23141,0.96974 4.73624,3.10316 7.86215,4.75172c8.43053,4.26685 10.98808,8.72765 7.48326,12.99448c-1.32614,1.64856 -6.72546,2.71527 -9.75664,1.93948c-1.32616,-0.29092 -3.69429,-1.74551 -5.3046,-3.20013l-3.0312,-2.61829l-1.79976,2.42435c-2.36813,3.20013 -2.27341,4.07289 1.23141,7.56395c3.88371,3.87895 14.96652,7.467 14.96652,4.84869c0,-0.48488 0.56834,-0.58185 1.32614,-0.29092c3.31538,1.26067 10.7039,-5.72145 10.13556,-9.50343c-0.28418,-2.03645 1.70505,-0.48486 2.74702,2.03645c3.31537,8.33975 13.45094,9.69737 20.65001,2.71527l3.03119,-3.00618l0,3.49104c0,3.49106 0,3.49106 4.54678,3.87895l4.64154,0.29092l-0.28418,-5.81844c-0.18942,-5.23659 -0.09473,-5.62448 1.04196,-3.87894c4.64154,6.78815 10.41974,9.79434 16.95578,8.8246c3.78897,-0.58183 9.09357,-4.36382 9.09357,-6.40025c0,-0.58186 0.28415,-0.96976 0.75778,-0.96976c1.32617,0 0.37894,10.47318 -1.23138,13.96425c-1.7998,3.78197 -3.41013,5.43053 -5.87299,5.91539c-0.94724,0.19395 -1.70502,0.38789 -1.70502,0.48488c0,0.58183 -7.38855,0.38789 -7.67273,-0.19395c-0.28415,-0.48486 -0.85251,-0.58183 -1.32614,-0.29092c-0.47363,0.29092 -2.27338,-0.96974 -4.16791,-2.71526l-3.31537,-3.29713l-1.04196,4.84869c-1.13672,5.72147 -0.28418,7.17607 6.06238,10.27924c2.84177,1.45462 5.39932,1.84251 9.56723,1.55159c14.58762,-0.7758 20.74472,-8.63069 21.50253,-27.34662c0.18945,-4.65474 0.56836,-5.72147 1.51559,-4.94566c0.56833,0.58183 1.13669,1.45459 1.13669,1.93947c0,2.81224 9.85141,8.24277 16.10324,8.9216c4.45206,0.48486 10.70389,-1.45462 14.01926,-4.26686c2.08395,-1.74551 2.08395,-1.93948 0.56836,-5.72145c-1.32617,-3.49106 -1.70505,-3.78197 -2.93649,-2.52132c-0.75778,0.77579 -1.61032,1.45461 -1.9892,1.55159c-0.37891,0 -1.51559,0.29091 -2.55756,0.48486c-2.08395,0.58183 -8.71469,0.58183 -10.89337,0.09697c-3.88373,-0.77579 -7.19907,-4.75172 -8.05161,-9.69738l-0.66309,-3.58804l15.72433,0l15.62958,0l-0.37888,-7.56396c-0.37891,-8.04883 -2.55759,-14.44909 -6.34659,-18.71594c-2.17868,-2.52132 -5.3046,-4.26685 -6.82019,-3.87896c-0.37888,0.09698 -1.23141,-0.29091 -1.89447,-0.77579c-0.66309,-0.58184 -2.46286,-0.67881 -4.83096,-0.09697c-2.08395,0.48486 -3.88373,0.67882 -4.16794,0.48486c-1.13666,-1.26066 -10.98804,8.14581 -10.98804,10.47318c0,0.58185 -0.47363,1.16369 -1.04199,1.35764c-0.56833,0.19394 -0.85251,-1.74554 -0.75781,-5.52751c0.09473,-3.78197 -0.18942,-5.81843 -0.85251,-5.91541c-2.36813,-0.29091 -7.48325,0 -7.86215,0.29093c-0.18945,0.19395 -0.37891,1.74552 -0.56833,3.49106l-0.18948,3.00618l-3.03119,-3.2971c-3.22064,-3.68501 -8.99887,-5.62448 -12.59842,-4.16987c-1.23138,0.38789 -2.55756,0.58183 -2.93643,0.29091c-1.13672,-0.6788 -9.37778,7.75792 -10.5145,10.86107l-0.94724,2.6183l-1.89447,-4.26685c-2.27341,-5.13962 -5.96768,-8.72764 -8.9989,-8.72764c-1.23138,0 -2.3681,-0.38789 -2.74698,-0.87277c-0.28418,-0.48487 -1.4209,-0.77578 -2.65228,-0.58184c-1.13672,0.19394 -4.07318,0.58184 -6.63077,0.96973c-3.59955,0.38789 -7.86217,1.74554 -9.94611,3.0062c-0.18944,0.09697 0.37889,1.93948 1.23141,4.0729l1.61032,3.87896l3.12593,-1.35764c4.35733,-1.84249 9.56718,-1.74552 12.88255,0.29092c2.65231,1.64856 5.96768,7.95186 4.83099,9.21252c-0.37891,0.3879 -3.8837,0.87276 -7.76743,1.0667c-10.60921,0.67883 -14.39819,2.32738 -16.67159,7.27303c-1.42088,3.10317 -1.61032,3.29713 -2.55757,1.55159c-1.51559,-2.81224 -5.6835,-6.20632 -7.48326,-6.20632c-0.94725,0 -1.70505,-0.38789 -1.70505,-0.87276c0,-0.48488 -1.04198,-1.06671 -2.17867,-1.45461c-3.31538,-0.77579 -7.29382,-4.36382 -7.29382,-6.40028c0,-2.61828 4.45207,-5.81842 8.05162,-5.81842c1.70503,0 4.54678,0.67883 6.44128,1.4546c3.31535,1.35764 3.31535,1.35764 4.26262,-1.26066c0.56834,-1.4546 1.23141,-3.39407 1.61032,-4.26684c0.47362,-1.26066 0,-2.03645 -1.98923,-2.81224c-1.51559,-0.67882 -3.12592,-1.06672 -3.50482,-0.96975c-0.47362,0.09698 -2.17868,-0.19394 -3.78899,-0.6788c-1.70505,-0.48489 -4.64151,-0.48489 -6.72546,0zm112.912,9.79435c1.8945,1.55158 3.69427,5.62448 4.07318,8.92159l0.37888,2.90921l-10.60916,0.09697c-11.367,0.09698 -11.55643,0 -9.85141,-4.7517c1.23145,-3.20014 6.34659,-8.24279 8.90414,-8.72765c2.46283,-0.48486 5.39932,0.19395 7.10437,1.55158zm-39.12134,0.67883c3.69424,1.4546 5.49402,6.78815 5.49402,16.09766c-0.0947,11.055 -2.74704,15.80672 -8.99887,16.48553c-7.86215,0.7758 -12.21948,-4.46078 -12.69312,-15.41883c-0.56836,-13.67331 6.34656,-21.04331 16.19797,-17.16435zm-32.3959,23.07977c-0.09473,5.91539 -1.7998,9.11552 -5.87296,10.86107c-4.64151,1.93948 -9.09358,0.58183 -10.89334,-3.2971c-2.08397,-4.55779 -1.8945,-8.04883 0.66306,-10.66713c1.79979,-1.8425 3.0312,-2.13342 9.18832,-2.13342l7.10437,0.09697l-0.18945,5.13962z" stroke-width="5" fill="#FF0000"/></a><a xlink:href="http://localhost:54445/GuestTenant/AP/VendorActivity" id="svg_15"><path stroke="#000000" id="svg_9" d="m333.76999,239.05374l47.41,-77.46748l47.41,77.46748l-94.82001,0z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" fill="#FF0000"/></a></g></g></svg>';
                        var Repository = ["Model", "Method", "CallBack","Shapes"];
                        Repository.CallBack = {
                            "ListenerSecondMenuItem": function(val) {
                                debugger;
                                console.log("=========================================================This is the id if the tag  " + val);
                                var ManuItemId = $('#' + val).change(function() { Repository.CallBack.AddOkAndCancellButtons(val); });


                            },
                            "AddCallBackListenerForButtons": function(_secondMenuId) {
                                //  $('#' + _secondMenuId).hide();
                                //     debugger;
                                //     alert(_secondMenuId);
                                //  $('#' + _secondMenuId).change(function () { Repository.CallBack.AddOkAndCancellButtons(_secondMenuId); });
                                //SecondMenuId, ScreenUrl
                                //    debugger;
                                //    console.log(_secondMenuId);

                            },
                            "SelectedItemIsInvoked": function() {
                                var myval = Repository.Model.menu_name_VPF().val();
                                Repository.Method.CreateANewArrayBasedOnFirstArray(myval);
                                // create a new item based on the previous item 

                                //    alert(Repository.Model.menu_name_VPF().val());

                            },
                            "AddOkAndCancellButtons": function(SecondMenuId) {
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
                            "UpdateButtons": function(_Ok_Button_VPF, _Cancel_Button_VPF, Model, link) {
                                Repository.Model.dialog_buttons().find(_Ok_Button_VPF).remove();
                                Repository.Model.dialog_buttons().find(_Cancel_Button_VPF).remove();
                                Repository.Model.dialog_buttons().append(Model.ok);
                                Repository.Model.dialog_buttons().append(Model.cancel);
                                Repository.Model.dialog_buttons().find(_Ok_Button_VPF).click(function() {
                                    //  alert("OK");
                                    Repository.CallBack.OKButtonAttribute(link);

                                });
                                Repository.Model.dialog_buttons().find(_Cancel_Button_VPF).click(function() {
                                    Repository.CallBack.CancellButtonAttribute();

                                });
                            },
                            "CancellButtonAttribute": function() {
                                $('#dialog_box').hide();
                            },
                            "OKButtonAttribute": function(link) {
                                // get id of the second box
                                console.log(link);
                                // get tag and add listener to it.
                                debugger;
                                var id = svgCanvas.getId();
                                var el = svgCanvas.getElem(id);
                                var MyEl = $('#' + id).click(function() {
                                    //
                                    //alert("Here");

                                });
                                console.log("Element" + el + "id" + id + "MyEl" + MyEl);
                                //svgCanvas.removeHyperlink();
                                // return (link);
                                svgCanvas.importSvgString(link);

                                $('#dialog_box').hide();

                            }
                        };

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
                            ,"GetAjaxModel": function(Id) {


                                return data;

                            }
                        };
                        Repository.Model = {
                            "Buttons": function() {
                                //  debugger;
                                var Model = ["ok", "cancell"];
                                //    console.log("This is the model" + Model);
                                return Model;
                            },
                            "diolog_Container": function() {
                                var item = $('#dialog_content');
                                if (item == null)
                                    return false;
                                return (item);
                            },
                            "dialog_content": function() {
                                var item = $('#dialog_content');
                                if (item == null)
                                    return false;
                                return (item);
                            },
                            "dialog_buttons": function() {
                                var item = $('#dialog_buttons');
                                if (item == null)
                                    return false;
                                return (item);

                            },
                            "select_name": function() {

                                var select = $("<select id ='menu_name_VPF'></select>");
                                return select;

                            },
                            "GenerateSecondMenuByMenuName": function(select_name) {
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
                            "ArrayMenuNames": function() {
                                // get menu names from xml or data base in later stages for now doing it statically. 
                                var arr = ([
                                    { "InitialMessage": "Select" },
                                    { "A_P_Transaction": "A/P Transaction" }, { "B_K_Transaction": "B/K Transaction" }, { "C_P_Transaction": "C/P Transaction" }, { "G_L_Transaction": "G/L Transaction" }, { "I_C_Maintain_Items": "I/C Maintain Items" },
                                    { "I_C_Tranaction": "I/C Tranaction" }, { "O_E_Tranaction": "O/E Tranaction" }, { "P_M_Tranaction": "P/M Tranaction" }, { "P_O_Tranaction": "P/O Tranaction" }, { "U_P_Tranaction": "U/P Tranaction" }
                                ]);


                                return arr;
                            },
                            "FindValuesOfSecondArray": function(SecondArrayname) {
                                console.log("Retriving data for second menu with id" + SecondArrayname);
                                var JsonArray = null;

                                if (SecondArrayname == "A_P_Transaction")
                                    return ([
                                        { "select": "select" },
                                        { "AP Vendor Activity": String }
                                    ]);
                                if (SecondArrayname == "A_R_Transaction")
                                    return ([
                                        { "InitialMessage": "select" },
                                        { "select": "http://facebook.com" }, { "B_K_TransactionTomsn": "javascript:Bound" }
                                    ]);


                                else
                                    return ([{ "select": "select" }, { "Sage1": "http://sage.com" }, { "Sage2": "http://sage.com" }]);


                            },
                            "menu_name_VPF": function() {
                                var menu_name = $('#menu_name_VPF');
                                if (menu_name == null)
                                    return false;
                                return menu_name;
                            },
                            "menuNameOptions": function() {
                                $.each(Repository.Model.ArrayMenuNames(), function() {
                                    $.each(this, function(index, val) {
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
                            "menuNameOptionsSecond": function(val, tobeAppendedTo) {
                                try {
                                    $.each(Repository.Model.FindValuesOfSecondArray(val), function() {
                                        $.each(this, function(index, val) {
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
                        };
                        Repository.Shapes = {
                            
                            "AP Analytical Report": "$",
                            "AP Make Payment": "",
                            "AP Enter Vendor": "",
                            "AP Vender Recrord": "",
                            "AP Inqueries":""
                          };

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

        context_tools: [{
        }],
        mouseDown: function (evt) {
   },
        mouseUp: function(opt) {
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