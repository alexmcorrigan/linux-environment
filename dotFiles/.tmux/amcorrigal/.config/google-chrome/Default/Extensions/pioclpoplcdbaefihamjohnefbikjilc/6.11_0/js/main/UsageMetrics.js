/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */
function UsageMetrics(a){"use strict";function b(){var a=new Date,b=Math.floor(a.getMinutes()/e)*e;return a.setMinutes(b),a.setSeconds(0),a.setMilliseconds(0),Math.round(a.getTime()/1e3)}function c(a){if(!navigator.onLine)return void(a&&a());var b=0,c=0;for(var e in g){var f=parseInt(e);b++,f>c&&(c=f)}b>0?d(b,c,a):a&&a()}function d(a,b,c){account.reload().then(function(b){return account.isAuthenticated?new Promise(function(c,d){var e=new JsonRpc(["NoteStore.getSyncStateWithMetrics"],extension.getBaseUrl());e.initWithShardId(b.shardId,function(){e.client.NoteStore.getSyncStateWithMetrics(function(a,b){c(a)},b.authenticationToken,{sessions:a})})}):void log.warn("Tried to send UsageMetrics, but not logged in.")}).then(function(a){var c=account.userInfo;if(a&&c){g=[],b>f&&(f=b);var d=Persistent.get("uploaded")||{};d[c.userId]=a.uploaded,Persistent.set("uploaded",d);var e=Persistent.get("shownNearQuotaUpsell")||{},h=Persistent.get("shownSpeedbump")||{};account.bumpUploadLimitEnd()&&(delete e[c.userId],Persistent.set("shownNearQuotaUpsell",e),delete h[c.userId],Persistent.set("shownSpeedbump",h));var i=Persistent.get("userLastUpdated")||0;return a.userLastUpdated>i&&Persistent.set("userLastUpdated",a.userLastUpdated),googleContactsManager.refresh()}}).then(function(){c&&c()})}var e=15;"object"!=typeof a&&(a={});var f=a.lastSent||0,g=a.activityBlocks||{};this.toObject=function(){return{lastSent:f,activityBlocks:JSON.parse(JSON.stringify(g))}},this.recordActivity=function(a){var d=b();return f>=d?void(a&&a()):(g[d]=!0,void c(a))}}function UsageMetricsManager(){var a={};try{var b=Persistent.get("usageMetrics");for(var c in b)a[c]=new UsageMetrics(b[c])}catch(b){log.warn("Failure restoring usage metrics. Setting blank."),a={}}this.recordActivity=function(){account.reload().then(function(b){var c=Persistent.get("lastActiveTimes")||{},d=b.userId||"unauthed",e=b.username;if(c[d]||(c[d]={count:0}),c.unauthed||(c.unauthed={count:0}),c[d].time=Date.now(),c.unauthed.time=c[d].time,Persistent.set("lastActiveTimes",c),e){var f=a[e];f||(f=new UsageMetrics,a[e]=f),f.recordActivity(function(){var b={};for(var c in a)b[c]=a[c].toObject();Persistent.set("usageMetrics",b)})}})}}