/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */
define(["PageInfo","isTest"],function(a,b){function c(a,b,c){a.key===e?!a.currentUserId||a.value&&a.value[a.currentUserId]?f(!1):(g=a.currentUserId,Browser.sendToExtension({name:"getPersistentValue",key:"tooltipLastShown",for:"custom"})):"tooltipLastShown"===a.key&&"custom"===a.for&&(!a.value||!a.value[g]||a.value[g]+6048e5<=new Date-0?(Browser.sendToExtension({name:"setPersistentValueForCurrentUser",key:"tooltipLastShown",value:new Date-0}),f(!0)):f(!1))}var d=null,e=null,f=null,g=null;return{isSiteEligible:function(){return d=a.isCustomFormat(),d&&!a.getCustomFormatSiteName(d.id)&&(d=null),!!d},checkUserEligible:function(b){if(d){var g=a.getCustomFormatSiteName(d.id);g?(f=b,e="saw"+g+"Tooltip",Browser.addMessageHandlers({receivePersistentValue:c}),Browser.sendToExtension({name:"getPersistentValue",key:e})):b(!1)}else b(!1)},getSiteName:function(){return d=a.isCustomFormat(),d?a.getCustomFormatSiteName(d.id):null},markIneligible:function(){Browser.sendToExtension({name:"setPersistentValueForUser",key:e,value:!0,userId:g})},receivePersistentValue:function(){return b?c:null}()}});