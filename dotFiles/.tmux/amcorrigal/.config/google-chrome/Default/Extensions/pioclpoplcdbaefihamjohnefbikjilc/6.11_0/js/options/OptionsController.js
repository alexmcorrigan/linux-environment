/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */
function OptionsController(){"use strict";function a(){var a={};for(var b in B)B[b].forEach(function(b){a[b]=!1});Browser.sendToExtension({name:"main_getConfig",options:a,returnName:"options_config",toOwnWindow:x})}function b(a){document.querySelector(".accountSettings .sectionIcon").style.backgroundImage=a?"url("+a+")":""}function c(){var c=F.fullName||Browser.i18n.getMessage("Personal"),d=F.businessName||Browser.i18n.getMessage("Business");document.body.classList.toggle("loggedIn",!!F.userId);var e=document.getElementById("defaultAccount");e.querySelector("option[value=personal]").textContent=c,e.querySelector("option[value=business]").textContent=d,document.body.classList.toggle("isBusinessAccount",!!F.bizAuthenticationToken),document.getElementById("username").textContent=F.email||"?",document.getElementById("options_showSaveToEvernote").style.display=G?"":"none",document.querySelector(".accountSettings .sectionName").textContent=c,document.querySelector(".businessAccountSettings .sectionName").textContent=d,F.userId?platform.channel.sendMessage("downloadImage",{url:F.photoUrl,size:48}).then(function(a){b(a)}).catch(function(){b()}):b(),a()}function d(a){if(a.options){GlobalUtils.localize(document.body),GlobalUtils.localize(document.getElementsByTagName("title")[0]);for(var b in B)switch(b){case"checkboxValues":B[b].forEach(function(b){var c=b,d=document.getElementById(c);d.checked=a.options[c],"enableKeyboardShortcuts"==c&&(d.checked||document.getElementById("shortcutsContainer").classList.add("disabled")),d.addEventListener("change",g)});break;case"selectValues":B[b].forEach(function(b){var c=b,d=document.getElementById(c);if("startNotebook"===c)F.userId&&(I[GlobalUtils.ACCOUNT_SELECTOR_PERSONAL].previouslySelectedGuid=a.options[c]);else if("bizStartNotebook"===c)F.userId&&(I[GlobalUtils.ACCOUNT_SELECTOR_BUSINESS].previouslySelectedGuid=a.options[c]);else for(var e=a.options[c],f=0;f<d.options.length;f++)if(d.options[f].value==e){d.selectedIndex=f;break}d.addEventListener("change",h)});break;case"textValues":B[b].forEach(function(b){var c=b,d=document.getElementById(c);d.value=a.options[c],d.addEventListener("change",i)});break;case"radioValues":B[b].forEach(function(b){for(var c=b,d=document.getElementsByName(c),e=0;e<d.length;e++)d.item(e).value==a.options[c]&&(d.item(e).checked=!0),d.item(e).addEventListener("change",j)})}new AlternativeSelect(document.body,document.getElementById("defaultAccount"),"optionsAccountSelector"),f(a),m()}}function e(a,b,c){var d=[],e=[],g=[];for(var h in a.options)a.options[h]!==C[h]&&(d.push(C[h]),e.push(a.options[h]),g.push(h));f(a),Browser.sendToExtension({name:"bounceToAll",message:{name:"updateKeyboardShortcut",oldShortcut:d,shortcut:e,shortcutName:g},toOwnWindow:x})}function f(a){C={},D={},E={},B.shortcutValues.forEach(function(b){var c=b,d=document.getElementById(c);C[c]=a.options[c],D[a.options[c]]=c;var e=new ShortcutSetter(d,a.options[c],"optionsPage",function(a,b){var c=a.id;if(D[b])return D[b]!=c&&(y=E[D[b]],y.showConflict(),{conflict:!0});if(/(\||^)27(\||$)/.test(b)&&"closeWebClipperShortcut"!==c)return{noEsc:!0};k();var d={};return d[c]=b,console.log("Sending options change:"),console.log(d),Browser.sendToExtension({name:"main_setOption",options:d}),Browser.sendToExtension({name:"bounceToAll",message:{name:"updateKeyboardShortcut",oldShortcut:C[c],shortcut:b,shortcutName:c},toOwnWindow:x}),delete D[C[c]],D[b]=c,C[c]=b,!1},function(){return!!v||(v=!0,!1)},function(){y&&(y.removeConflict(),y=null)},function(){return document.getElementById("shortcutsContainer").classList.contains("disabled")},function(a){return A[a]});E[c]=e})}function g(a){var b=this.id;if(b){k();var c={};c[b]=this.checked,"enableKeyboardShortcuts"==b&&(this.checked?document.getElementById("shortcutsContainer").classList.remove("disabled"):document.getElementById("shortcutsContainer").classList.add("disabled"),Browser.sendToExtension({name:"bounceToAll",message:{name:"receiveKeyboardShortcutsEnabled",keyboardShortcutsEnabled:this.checked}})),Browser.sendToExtension({name:"main_setOption",options:c})}m()}function h(a){var b=this.id;if(b){k();var c={};c[b]=this.options[this.selectedIndex].value,Browser.sendToExtension({name:"main_setOption",options:c})}m()}function i(a){var b=this.id;if(b){k();var c={};c[b]=this.value,console.log("Sending options change:"),console.log(c),Browser.sendToExtension({name:"main_setOption",options:c})}m()}function j(){var a=this.name;if(a){k();var b={};b[a]=this.value,"notebookSelection"==a?"alwaysStartIn"===this.value&&h.call(document.getElementById("startNotebook")):"bizNotebookSelection"==a&&"alwaysStartIn"===this.value&&h.call(document.getElementById("bizStartNotebook")),Browser.sendToExtension({name:"main_setOption",options:b})}m()}function k(){window.setTimeout(function(){document.querySelector("#savingContainer").className="invisible"},500),document.querySelector("#savingContainer").className="visible"}function l(a){var b=document.getElementById("developerContainer").style;void 0===a&&(a="none"===b.display),b.display=a?"table-row-group":"none",m()}function m(){var a=document.querySelector(".pinch"),b=document.querySelector("#optionsContainer");a.style.height="";var c=b.scrollHeight;a.style.height=b.scrollHeight+"px",Browser.sendToExtension({name:"bounce",message:{name:"setOptionsHeight",height:u+c},toOwnWindow:x})}function n(a,b){w&&["INPUT","TEXTAREA"].indexOf(b.nodeName)<0&&"true"!==b.contentEditable&&Browser.sendToExtension({name:"bounce",message:{name:"duplicateKeyboardShortcut",keycode:a},toOwnWindow:x})}function o(a,b){["INPUT","TEXTAREA"].indexOf(b.nodeName)<0&&"true"!==b.contentEditable&&Browser.sendToExtension({name:"bounce",message:{name:"duplicateKeyboardShortcut",keycode:a},toOwnWindow:x})}function p(a,b,c){if(w=a.enabled,a.handlers){var d={};for(var e in a.handlers)for(var f=0;f<a.handlers[e].length;f++)"closeWebClipperShortcut"===e?d[a.handlers[e][f]]=o:d[a.handlers[e][f]]=n;Browser.addKeyboardHandlers(d)}}function q(a,b,c){document.getElementsByClassName("pinch")[0].style.height=a.totalHeight-u+"px"}function r(a,b){function c(a){return"OPTION"===a.nodeName?a.innerText:"OPTGROUP"===a.nodeName?a.label:void 0}var d,e=I[a].stacks;if(a===GlobalUtils.ACCOUNT_SELECTOR_PERSONAL)d="startNotebook";else{if(a!==GlobalUtils.ACCOUNT_SELECTOR_BUSINESS)return;d="bizStartNotebook"}for(var f=document.getElementById(d),g=0;g<b.length;g++){var h=document.createElement("option");h.text=b[g].name,b[g].owner&&(h.text+=" ("+b[g].owner+")"),h.value=b[g].guid,b[g].stack?(e[b[g].stack]||(e[b[g].stack]=document.createElement("optgroup"),e[b[g].stack].label=b[g].stack,CommonSelector.binaryInsert(f,c,e[b[g].stack])),CommonSelector.binaryInsert(e[b[g].stack],c,h)):CommonSelector.binaryInsert(f,c,h),b[g].defaultNotebook&&(I[a].defaultNotebook=h),I[a].previouslySelectedGuid&&I[a].previouslySelectedGuid===b[g].guid&&(h.selected=!0,I[a].startNotebookInit=!0)}I[a].defaultNotebook&&!I[a].startNotebookInit&&(I[a].defaultNotebook.selected=!0)}function s(a,b,c){r(GlobalUtils.ACCOUNT_SELECTOR_PERSONAL,a.notebooks)}function t(a,b,c){r(GlobalUtils.ACCOUNT_SELECTOR_BUSINESS,a.notebooks)}var u=300,v=!1,w=!0,x=!0;this.separateTab=function(a){return"undefined"!=typeof a&&(x=a),x},/iframe/.test(document.location.hash)&&(x=!1),window.addEventListener("DOMContentLoaded",function(){document.getElementById("signOut").addEventListener("click",function(){Browser.sendToExtension({name:"LOGOUT"}),Browser.sendToExtension({name:"trackEvent",category:"Account",action:"sign_out",endSession:!0})}),document.getElementById("resetShortcuts").addEventListener("click",function(){k(),Browser.sendToExtension({name:"main_clearOptions",options:B,type:"shortcutValues"})}),document.getElementById("resetAllOptions").addEventListener("click",function(){confirm("Warning. This action will delete all persistent clipper data on this browser.")===!0?(log.log("Reset all options"),k(),log.log("Clean all local storage"),Persistent.clearAll(),Browser.sendToExtension({name:"clearPersistent"}),Browser.sendToExtension({name:"main_clearOptions",options:B,type:"all"}),Browser.sendToExtension({name:"LOGOUT"})):log.log("Cancel to reset all options")}),document.getElementById("done").addEventListener("click",function(){Browser.sendToExtension({name:"bounce",message:{name:"hideOptions",authed:!!F},toOwnWindow:x})}),EDGE&&document.getElementById("main").classList.add("isEdge"),Promise.all([platform.channel.sendMessage("getPersistentValue",{key:"charCodeCache"}),platform.channel.sendMessage("isExperimentActive",{name:"imageExperiment"}),platform.channel.sendMessage("getPersistentValue",{key:"devOptionsEnabled"}),platform.channel.sendMessage("getSavedUserInfo")]).then(function(a){var b=a[0]||{},d=a[1],e=a[2],f=a[3]||{};return A=b,G=d&&f.userId,l(!!e),platform.channel.sendMessage("setPersistentValue",{key:"devOptionsEnabled",value:!1}),F=f,c(),platform.channel.sendMessage("getFreshUserInfo")}).then(function(a){F=a,c(),F.userId&&Browser.sendToExtension({name:"getNotebooks",page:"op"})}).catch(function(a){log.error(a),F={},G=!1,c()})}),Browser.addMessageHandlers({options_config:d,optionsShortcutCleared:e,op_receivePersonalNotebooks:s,op_receiveSharedNotebooks:s,op_receiveBusinessNotebooks:t,op_setKeyboardHandlers:p,op_setPinchHeight:q});var y,z,A,B={checkboxValues:["smartFilingTags","bizSmartFilingTags","alwaysTagWith","bizAlwaysTagWith","useSearchHelper","enablePdfPageButton","saveToEvernote","simulateSimplifiedChinese","useStage","enableKeyboardShortcuts"],selectValues:["defaultAccount","startNotebook","bizStartNotebook","clipAction"],textValues:["alwaysTags","bizAlwaysTags","insecureProto","secureProto","overrideServiceURL"],radioValues:["notebookSelection","bizNotebookSelection","defaultClipAction","afterClip","simulateClippingError"],shortcutValues:["startWebClipperShortcut","closeWebClipperShortcut","previewArticleShortcut","previewFullPageShortcut","previewUrlShortcut","selectionModeShortcut","takeScreenshotShortcut","clearlyShortcut","pdfShortcut","emailShortcut","expandArticleShortcut","contractArticleShortcut","moveArticleUpShortcut","moveArticleDownShortcut","toggleAccountShortcut","selectNotebookShortcut","addTagsShortcut","saveShortcut","minimizeClipperShortcut","selectAllMarkupShortcut","arrowShortcut","textShortcut","rectangleShortcut","roundedRectangleShortcut","ellipseShortcut","lineShortcut","markerShortcut","highlighterShortcut","stampShortcut","pixelateShortcut","cropShortcut","zoomInShortcut","zoomOutShortcut","zoomToFitShortcut","zoomToOriginalShortcut","undoShortcut","redoShortcut"]},C={},D={},E={},F={},G=!1;window.addEventListener("keydown",function(a){A&&(a.keyCode<65||a.keyCode>90)&&(z=a.keyCode)},!0),window.addEventListener("keypress",function(a){A&&z&&(z!=a.charCode&&(A[z]=a.charCode,Browser.sendToExtension({name:"setPersistentValue",key:"charCodeCache",value:A})),z=null)});var H=new Konami;H.addCode(Konami.Code.Batman,l);var I={};[GlobalUtils.ACCOUNT_SELECTOR_PERSONAL,GlobalUtils.ACCOUNT_SELECTOR_BUSINESS].forEach(function(a){I[a]={},I[a].stacks={},I[a].previouslySelectedGuid=null,I[a].defaultNotebook=null,I[a].startNotebookInit=!1}),Object.preventExtensions(this)}Object.preventExtensions(OptionsController);var optionsController=new OptionsController;window.addEventListener("DOMContentLoaded",function(){function a(a){if(a.bootstrapInfo&&a.bootstrapInfo.name){a.bootstrapInfo.name.match(/china/i)&&document.body.classList.add("china");var b="https://"+a.bootstrapInfo.serviceHost;document.getElementById("copyright").innerHTML=Browser.i18n.getMessage("copyright",[(new Date).getFullYear().toString(),b]),document.getElementById("logDescription").innerHTML=Browser.i18n.getMessage("options_eventLogDescription",[b+"/privacy"]);for(var c=document.getElementsByClassName("tab"),d=0;d<c.length;d++)c.item(d).addEventListener("click",function(){var a=document.querySelector(".tab.pressed");a&&(a.className=a.className.replace(/\s*pressed/g,""));var b=document.querySelector(".pinch");b.className=b.className.replace(/\s*(options|shortcuts|legal)/g,""),this.className+=" pressed","optionsTab"==this.id?b.className+=" options":"shortcutsTab"==this.id?b.className+=" shortcuts":"legalTab"==this.id&&(b.className+=" legal")});/shortcuts/.test(document.location.hash)&&document.getElementById("shortcutsTab").click()}}SAFARI&&document.body.classList.add("safari"),/iframe/.test(document.location.hash)&&document.body.classList.add("iframe"),Browser.addMessageHandlers({options_bconfig:a}),Browser.sendToExtension({name:"main_getConfig",bootstrapInfo:{name:null,serviceHost:null},toOwnWindow:optionsController.separateTab(),returnName:"options_bconfig"}),platform.channel.sendMessage("getPersistentValue",{key:"EVERNOTE_VERSION"}).then(function(a){document.getElementById("version").innerText=a+" ("+BUILD_VERSION+"/"+SKITCH_BUILD_VERSION+")"})}),window.addEventListener("error",function(a){log.error(JSON.stringify(a))});