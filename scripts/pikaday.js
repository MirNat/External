﻿(function(f,g){'use strict';var h;if('object'==typeof exports){try{h=require('moment')}catch(k){}module.exports=g(h)}else'function'==typeof define&&define.amd?define(function(k){try{h=k('moment')}catch(n){}return g(h)}):f.Pikaday=g(f.moment)})(this,function(f){'use strict';var g='function'==typeof f,h=!!window.addEventListener,k=window.document,l=window.setTimeout,n=function(Q,R,S,T){h?Q.addEventListener(R,S,!!T):Q.attachEvent('on'+R,S)},o=function(Q,R,S,T){h?Q.removeEventListener(R,S,!!T):Q.detachEvent('on'+R,S)},p=function(Q){return Q.trim?Q.trim():Q.replace(/^\s+|\s+$/g,'')},q=function(Q,R){return-1!==(' '+Q.className+' ').indexOf(' '+R+' ')},s=function(Q,R){q(Q,R)||(Q.className=''===Q.className?R:Q.className+' '+R)},t=function(Q,R){Q.className=p((' '+Q.className+' ').replace(' '+R+' ',' '))},u=function(Q){return /Array/.test(Object.prototype.toString.call(Q))},w=function(Q){return /Date/.test(Object.prototype.toString.call(Q))&&!isNaN(Q.getTime())},x=function(Q){var R=Q.getDay();return 0===R||6===R},z=function(Q){return 0==Q%4&&0!=Q%100||0==Q%400},A=function(Q,R){return[31,z(Q)?29:28,31,30,31,30,31,31,30,31,30,31][R]},B=function(Q){w(Q)&&Q.setHours(0,0,0,0)},C=function(Q,R){return Q.getTime()===R.getTime()},D=function(Q,R,S){var T,U;for(T in R)U=void 0!==Q[T],U&&'object'==typeof R[T]&&null!==R[T]&&void 0===R[T].nodeName?w(R[T])?S&&(Q[T]=new Date(R[T].getTime())):u(R[T])?S&&(Q[T]=R[T].slice(0)):Q[T]=D({},R[T],S):(S||!U)&&(Q[T]=R[T]);return Q},E=function(Q,R,S){var T;k.createEvent?(T=k.createEvent('HTMLEvents'),T.initEvent(R,!0,!1),T=D(T,S),Q.dispatchEvent(T)):k.createEventObject&&(T=k.createEventObject(),T=D(T,S),Q.fireEvent('on'+R,T))},F=function(Q){return 0>Q.month&&(Q.year-=Math.ceil(Math.abs(Q.month)/12),Q.month+=12),11<Q.month&&(Q.year+=Math.floor(Math.abs(Q.month)/12),Q.month-=12),Q},G={field:null,bound:void 0,position:'bottom left',reposition:!0,format:'YYYY-MM-DD',toString:null,parse:null,defaultDate:null,setDefaultDate:!1,firstDay:0,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,pickWholeWeek:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:'',showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,enableSelectionDaysInNextAndPreviousMonths:!1,numberOfMonths:1,mainCalendar:'left',container:void 0,blurFieldOnSelect:!0,i18n:{previousMonth:'Previous Month',nextMonth:'Next Month',months:['January','February','March','April','May','June','July','August','September','October','November','December'],weekdays:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],weekdaysShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null},H=function(Q,R,S){for(R+=Q.firstDay;7<=R;)R-=7;return S?Q.i18n.weekdaysShort[R]:Q.i18n.weekdays[R]},I=function(Q){var R=[],S='false';if(Q.isEmpty)if(Q.showDaysInNextAndPreviousMonths)R.push('is-outside-current-month'),Q.enableSelectionDaysInNextAndPreviousMonths||R.push('is-selection-disabled');else return'<td class="is-empty"></td>';return Q.isDisabled&&R.push('is-disabled'),Q.isToday&&R.push('is-today'),Q.isSelected&&(R.push('is-selected'),S='true'),Q.hasEvent&&R.push('has-event'),Q.isInRange&&R.push('is-inrange'),Q.isStartRange&&R.push('is-startrange'),Q.isEndRange&&R.push('is-endrange'),'<td data-day="'+Q.day+'" class="'+R.join(' ')+'" aria-selected="'+S+'"><button class="pika-button pika-day" type="button" data-pika-year="'+Q.year+'" data-pika-month="'+Q.month+'" data-pika-day="'+Q.day+'">'+Q.day+'</button></td>'},J=function(Q,R,S){var T=new Date(S,0,1),U=Math.ceil(((new Date(S,R,Q)-T)/8.64e7+T.getDay()+1)/7);return'<td class="pika-week">'+U+'</td>'},K=function(Q,R,S,T){return'<tr class="pika-row'+(S?' pick-whole-week':'')+(T?' is-selected':'')+'">'+(R?Q.reverse():Q).join('')+'</tr>'},L=function(Q){return'<tbody>'+Q.join('')+'</tbody>'},M=function(Q){var R,S=[];for(Q.showWeekNumber&&S.push('<th></th>'),R=0;7>R;R++)S.push('<th scope="col"><abbr title="'+H(Q,R)+'">'+H(Q,R,!0)+'</abbr></th>');return'<thead><tr>'+(Q.isRTL?S.reverse():S).join('')+'</tr></thead>'},N=function(Q,R,S,T,U,V){var W,X,Y,ba,ca,Z=Q._o,$=S===Z.minYear,_=S===Z.maxYear,aa='<div id="'+V+'" class="pika-title" role="heading" aria-live="assertive">',da=!0,ea=!0;for(Y=[],W=0;12>W;W++)Y.push('<option value="'+(S===U?W-R:12+W-R)+'"'+(W===T?' selected="selected"':'')+($&&W<Z.minMonth||_&&W>Z.maxMonth?'disabled="disabled"':'')+'>'+Z.i18n.months[W]+'</option>');for(ba='<div class="pika-label">'+Z.i18n.months[T]+'<select class="pika-select pika-select-month" tabindex="-1">'+Y.join('')+'</select></div>',u(Z.yearRange)?(W=Z.yearRange[0],X=Z.yearRange[1]+1):(W=S-Z.yearRange,X=1+S+Z.yearRange),Y=[];W<X&&W<=Z.maxYear;W++)W>=Z.minYear&&Y.push('<option value="'+W+'"'+(W===S?' selected="selected"':'')+'>'+W+'</option>');return ca='<div class="pika-label">'+S+Z.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+Y.join('')+'</select></div>',aa+=Z.showMonthAfterYear?ca+ba:ba+ca,$&&(0===T||Z.minMonth>=T)&&(da=!1),_&&(11===T||Z.maxMonth<=T)&&(ea=!1),0===R&&(aa+='<button class="pika-prev'+(da?'':' is-disabled')+'" type="button">'+Z.i18n.previousMonth+'</button>'),R===Q._o.numberOfMonths-1&&(aa+='<button class="pika-next'+(ea?'':' is-disabled')+'" type="button">'+Z.i18n.nextMonth+'</button>'),aa+='</div>'},O=function(Q,R,S){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+S+'">'+M(Q)+L(R)+'</table>'},P=function(Q){var R=this,S=R.config(Q);R._onMouseDown=function(U){if(R._v){U=U||window.event;var V=U.target||U.srcElement;if(V)if(q(V,'is-disabled')||(!q(V,'pika-button')||q(V,'is-empty')||q(V.parentNode,'is-disabled')?q(V,'pika-prev')?R.prevMonth():q(V,'pika-next')&&R.nextMonth():(R.setDate(new Date(V.getAttribute('data-pika-year'),V.getAttribute('data-pika-month'),V.getAttribute('data-pika-day'))),S.bound&&l(function(){R.hide(),S.blurFieldOnSelect&&S.field&&S.field.blur()},100))),!!q(V,'pika-select'))R._c=!0;else if(U.preventDefault)U.preventDefault();else return U.returnValue=!1,!1}},R._onChange=function(U){U=U||window.event;var V=U.target||U.srcElement;V&&(q(V,'pika-select-month')?R.gotoMonth(V.value):q(V,'pika-select-year')&&R.gotoYear(V.value))},R._onKeyChange=function(U){if(U=U||window.event,R.isVisible())switch(U.keyCode){case 13:case 27:S.field&&S.field.blur();break;case 37:U.preventDefault(),R.adjustDate('subtract',1);break;case 38:R.adjustDate('subtract',7);break;case 39:R.adjustDate('add',1);break;case 40:R.adjustDate('add',7);}},R._onInputChange=function(U){var V;U.firedBy===R||(S.parse?V=S.parse(S.field.value,S.format):g?(V=f(S.field.value,S.format,S.formatStrict),V=V&&V.isValid()?V.toDate():null):V=new Date(Date.parse(S.field.value)),w(V)&&R.setDate(V),!R._v&&R.show())},R._onInputFocus=function(){R.show()},R._onInputClick=function(){R.show()},R._onInputBlur=function(){var U=k.activeElement;do if(q(U,'pika-single'))return;while(U=U.parentNode);R._c||(R._b=l(function(){R.hide()},50)),R._c=!1},R._onClick=function(U){U=U||window.event;var V=U.target||U.srcElement,W=V;if(V){h||!q(V,'pika-select')||V.onchange||(V.setAttribute('onchange','return;'),n(V,'change',R._onChange));do if(q(W,'pika-single')||W===S.trigger)return;while(W=W.parentNode);R._v&&V!==S.trigger&&W!==S.trigger&&R.hide()}},R.el=k.createElement('div'),R.el.className='pika-single'+(S.isRTL?' is-rtl':'')+(S.theme?' '+S.theme:''),n(R.el,'mousedown',R._onMouseDown,!0),n(R.el,'touchend',R._onMouseDown,!0),n(R.el,'change',R._onChange),n(k,'keydown',R._onKeyChange),S.field&&(S.container?S.container.appendChild(R.el):S.bound?k.body.appendChild(R.el):S.field.parentNode.insertBefore(R.el,S.field.nextSibling),n(S.field,'change',R._onInputChange),!S.defaultDate&&(S.defaultDate=g&&S.field.value?f(S.field.value,S.format).toDate():new Date(Date.parse(S.field.value)),S.setDefaultDate=!0));var T=S.defaultDate;w(T)?S.setDefaultDate?R.setDate(T,!0):R.gotoDate(T):R.gotoDate(new Date),S.bound?(this.hide(),R.el.className+=' is-bound',n(S.trigger,'click',R._onInputClick),n(S.trigger,'focus',R._onInputFocus),n(S.trigger,'blur',R._onInputBlur)):this.show()};return P.prototype={config:function(Q){this._o||(this._o=D({},G,!0));var R=D(this._o,Q,!0);R.isRTL=!!R.isRTL,R.field=R.field&&R.field.nodeName?R.field:null,R.theme='string'==typeof R.theme&&R.theme?R.theme:null,R.bound=void 0===R.bound?!!R.field:!!(R.field&&R.bound),R.trigger=R.trigger&&R.trigger.nodeName?R.trigger:R.field,R.disableWeekends=!!R.disableWeekends,R.disableDayFn='function'==typeof R.disableDayFn?R.disableDayFn:null;var S=parseInt(R.numberOfMonths,10)||1;if(R.numberOfMonths=4<S?4:S,w(R.minDate)||(R.minDate=!1),w(R.maxDate)||(R.maxDate=!1),R.minDate&&R.maxDate&&R.maxDate<R.minDate&&(R.maxDate=R.minDate=!1),R.minDate&&this.setMinDate(R.minDate),R.maxDate&&this.setMaxDate(R.maxDate),u(R.yearRange)){var T=new Date().getFullYear()-10;R.yearRange[0]=parseInt(R.yearRange[0],10)||T,R.yearRange[1]=parseInt(R.yearRange[1],10)||T}else R.yearRange=Math.abs(parseInt(R.yearRange,10))||G.yearRange,100<R.yearRange&&(R.yearRange=100);return R},toString:function(Q){return Q=Q||this._o.format,w(this._d)?this._o.toString?this._o.toString(this._d,Q):g?f(this._d).format(Q):this._d.toDateString():''},getMoment:function(){return g?f(this._d):null},setMoment:function(Q,R){g&&f.isMoment(Q)&&this.setDate(Q.toDate(),R)},getDate:function(){return w(this._d)?new Date(this._d.getTime()):null},setDate:function(Q,R){if(!Q)return this._d=null,this._o.field&&(this._o.field.value='',E(this._o.field,'change',{firedBy:this})),this.draw();if('string'==typeof Q&&(Q=new Date(Date.parse(Q))),!!w(Q)){var S=this._o.minDate,T=this._o.maxDate;w(S)&&Q<S?Q=S:w(T)&&Q>T&&(Q=T),this._d=new Date(Q.getTime()),B(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),E(this._o.field,'change',{firedBy:this})),R||'function'!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},gotoDate:function(Q){var R=!0;if(w(Q)){if(this.calendars){var S=new Date(this.calendars[0].year,this.calendars[0].month,1),T=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),U=Q.getTime();T.setMonth(T.getMonth()+1),T.setDate(T.getDate()-1),R=U<S.getTime()||T.getTime()<U}R&&(this.calendars=[{month:Q.getMonth(),year:Q.getFullYear()}],'right'===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustDate:function(Q,R){var U,S=this.getDate()||new Date,T=1e3*(60*(60*(24*parseInt(R))));'add'===Q?U=new Date(S.valueOf()+T):'subtract'==Q&&(U=new Date(S.valueOf()-T)),this.setDate(U)},adjustCalendars:function(){this.calendars[0]=F(this.calendars[0]);for(var Q=1;Q<this._o.numberOfMonths;Q++)this.calendars[Q]=F({month:this.calendars[0].month+Q,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(Q){isNaN(Q)||(this.calendars[0].month=parseInt(Q,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(Q){isNaN(Q)||(this.calendars[0].year=parseInt(Q,10),this.adjustCalendars())},setMinDate:function(Q){Q instanceof Date?(B(Q),this._o.minDate=Q,this._o.minYear=Q.getFullYear(),this._o.minMonth=Q.getMonth()):(this._o.minDate=G.minDate,this._o.minYear=G.minYear,this._o.minMonth=G.minMonth,this._o.startRange=G.startRange),this.draw()},setMaxDate:function(Q){Q instanceof Date?(B(Q),this._o.maxDate=Q,this._o.maxYear=Q.getFullYear(),this._o.maxMonth=Q.getMonth()):(this._o.maxDate=G.maxDate,this._o.maxYear=G.maxYear,this._o.maxMonth=G.maxMonth,this._o.endRange=G.endRange),this.draw()},setStartRange:function(Q){this._o.startRange=Q},setEndRange:function(Q){this._o.endRange=Q},draw:function(Q){if(this._v||Q){var X,R=this._o,S=R.minYear,T=R.maxYear,U=R.minMonth,V=R.maxMonth,W='';this._y<=S&&(this._y=S,!isNaN(U)&&this._m<U&&(this._m=U)),this._y>=T&&(this._y=T,!isNaN(V)&&this._m>V&&(this._m=V)),X='pika-title-'+Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,2);for(var Y=0;Y<R.numberOfMonths;Y++)W+='<div class="pika-lendar">'+N(this,Y,this.calendars[Y].year,this.calendars[Y].month,this.calendars[0].year,X)+this.render(this.calendars[Y].year,this.calendars[Y].month,X)+'</div>';this.el.innerHTML=W,R.bound&&'hidden'!==R.field.type&&l(function(){R.trigger.focus()},1),'function'==typeof this._o.onDraw&&this._o.onDraw(this),R.bound&&R.field.setAttribute('aria-label','Use the arrow keys to pick a date')}},adjustPosition:function(){var Q,R,S,T,U,V,W,X,Y,Z;if(!this._o.container){if(this.el.style.position='absolute',Q=this._o.trigger,R=Q,S=this.el.offsetWidth,T=this.el.offsetHeight,U=window.innerWidth||k.documentElement.clientWidth,V=window.innerHeight||k.documentElement.clientHeight,W=window.pageYOffset||k.body.scrollTop||k.documentElement.scrollTop,'function'==typeof Q.getBoundingClientRect)Z=Q.getBoundingClientRect(),X=Z.left+window.pageXOffset,Y=Z.bottom+window.pageYOffset;else for(X=R.offsetLeft,Y=R.offsetTop+R.offsetHeight;R=R.offsetParent;)X+=R.offsetLeft,Y+=R.offsetTop;(this._o.reposition&&X+S>U||-1<this._o.position.indexOf('right')&&0<X-S+Q.offsetWidth)&&(X=X-S+Q.offsetWidth),(this._o.reposition&&Y+T>V+W||-1<this._o.position.indexOf('top')&&0<Y-T-Q.offsetHeight)&&(Y=Y-T-Q.offsetHeight),this.el.style.left=X+'px',this.el.style.top=Y+'px'}},render:function(Q,R,S){var T=this._o,U=new Date,V=A(Q,R),W=new Date(Q,R,1).getDay(),X=[],Y=[];B(U),0<T.firstDay&&(W-=T.firstDay,0>W&&(W+=7));for(var Z=0===R?11:R-1,$=11===R?0:R+1,_=0===R?Q-1:Q,aa=11===R?Q+1:Q,ba=A(_,Z),ca=V+W,da=ca;7<da;)da-=7;ca+=7-da;for(var ea=!1,fa=0,ga=0;fa<ca;fa++){var ha=new Date(Q,R,1+(fa-W)),ia=!!w(this._d)&&C(ha,this._d),ja=C(ha,U),ka=-1!==T.events.indexOf(ha.toDateString()),la=fa<W||fa>=V+W,ma=1+(fa-W),na=R,oa=Q,pa=T.startRange&&C(T.startRange,ha),qa=T.endRange&&C(T.endRange,ha),ra=T.startRange&&T.endRange&&T.startRange<ha&&ha<T.endRange,sa=T.minDate&&ha<T.minDate||T.maxDate&&ha>T.maxDate||T.disableWeekends&&x(ha)||T.disableDayFn&&T.disableDayFn(ha);la&&(fa<W?(ma=ba+ma,na=Z,oa=_):(ma-=V,na=$,oa=aa));var ta={day:ma,month:na,year:oa,hasEvent:ka,isSelected:ia,isToday:ja,isDisabled:sa,isEmpty:la,isStartRange:pa,isEndRange:qa,isInRange:ra,showDaysInNextAndPreviousMonths:T.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:T.enableSelectionDaysInNextAndPreviousMonths};T.pickWholeWeek&&ia&&(ea=!0),Y.push(I(ta)),7==++ga&&(T.showWeekNumber&&Y.unshift(J(fa-W,R,Q)),X.push(K(Y,T.isRTL,T.pickWholeWeek,ea)),Y=[],ga=0,ea=!1)}return O(T,X,S)},isVisible:function(){return this._v},show:function(){this.isVisible()||(this._v=!0,this.draw(),t(this.el,'is-hidden'),this._o.bound&&(n(k,'click',this._onClick),this.adjustPosition()),'function'==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var Q=this._v;!1!==Q&&(this._o.bound&&o(k,'click',this._onClick),this.el.style.position='static',this.el.style.left='auto',this.el.style.top='auto',s(this.el,'is-hidden'),this._v=!1,void 0!==Q&&'function'==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){this.hide(),o(this.el,'mousedown',this._onMouseDown,!0),o(this.el,'touchend',this._onMouseDown,!0),o(this.el,'change',this._onChange),o(k,'keydown',this._onKeyChange),this._o.field&&(o(this._o.field,'change',this._onInputChange),this._o.bound&&(o(this._o.trigger,'click',this._onInputClick),o(this._o.trigger,'focus',this._onInputFocus),o(this._o.trigger,'blur',this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},P});