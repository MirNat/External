'use strict';if('function'==typeof require)var moment=require('moment');moment.fn.isHoliday=function(){var a=this.localeData();return a._holidays&&0<=a._holidays.indexOf(this.format(a._holidayFormat))||!!a.holiday&&!!a.holiday(this)},moment.fn.isBusinessDay=function(){var a=this.localeData(),c=a._workingWeekdays||[1,2,3,4,5];return!this.isHoliday()&&!!(0<=c.indexOf(this.day()))},moment.fn.businessAdd=function(a,b){var c=this.clone(),d=0>a?-1:1,e=Math.abs(a);for(b='undefined'==typeof b?'days':b;e;)c.add(d,b),c.isBusinessDay()&&e--;return c},'undefined'!=typeof module&&module.exports&&(module.exports=moment);