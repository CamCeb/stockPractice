(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(t,e,r){},257:function(t,e,r){t.exports=r(513)},513:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(242),i=r.n(a),c=(r(135),r(24)),u=r(23),l=r(516),s=r(517),f=o.a.createContext();function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var f={};function p(){}function d(){}function v(){}var y={};u(y,a,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(N([])));g&&g!==e&&r.call(g,a)&&(y=g);var w=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,i,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),u(w,c,"Generator"),u(w,a,function(){return this}),u(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var p="https://finnhub.io/api/v1",d=function(){var t=Object(u.a)(h().mark(function t(e){var r,n,o;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(p,"/search?q=").concat(e,"&token=").concat("cio6rdhr01qhd71bpehgcio6rdhr01qhd71bpei0"),t.next=3,fetch(r);case 3:if((n=t.sent).ok){t.next=7;break}throw o="An error has occured: ".concat(n.status),new Error(o);case 7:return t.next=9,n.json();case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(u.a)(h().mark(function t(e){var r,n,o;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(p,"/stock/profile2?symbol=").concat(e,"&token=").concat("cio6rdhr01qhd71bpehgcio6rdhr01qhd71bpei0"),t.next=3,fetch(r);case 3:if((n=t.sent).ok){t.next=7;break}throw o="An error has occured: ".concat(n.status),new Error(o);case 7:return t.next=9,n.json();case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(u.a)(h().mark(function t(e){var r,n,o;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(p,"/quote?symbol=").concat(e,"&token=").concat("cio6rdhr01qhd71bpehgcio6rdhr01qhd71bpei0"),t.next=3,fetch(r);case 3:if((n=t.sent).ok){t.next=7;break}throw o="An error has occured: ".concat(n.status),new Error(o);case 7:return t.next=9,n.json();case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(u.a)(h().mark(function t(e,r,n,o){var a,i,c;return h().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(p,"/stock/candle?symbol=").concat(e,"&resolution=").concat(r,"&from=").concat(n,"&to=").concat(o,"&token=").concat("cio6rdhr01qhd71bpehgcio6rdhr01qhd71bpei0"),t.next=3,fetch(a);case 3:if((i=t.sent).ok){t.next=7;break}throw c="An error has occured: ".concat(i.status),new Error(c);case 7:return t.next=9,i.json();case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}},t)}));return function(e,r,n,o){return t.apply(this,arguments)}}(),g=o.a.createContext(),w=function(t){var e=t.results,r=Object(n.useContext)(f).darkMode,a=Object(n.useContext)(g).setStockSymbol;return o.a.createElement("ul",{className:"absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll ".concat(r?"bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark":"bg-white border-neutral-200 custom-scrollbar")},e.map(function(t){return o.a.createElement("li",{key:t.symbol,className:"cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ".concat(r?"hover:bg-indigo-600":"hover:bg-indigo-200 "),onClick:function(){return a(t.symbol)}},o.a.createElement("span",null,t.symbol),o.a.createElement("span",null,t.description))}))};function b(){b=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};u(v,a,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(N([])));m&&m!==e&&r.call(m,a)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function x(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,i,function(){return this}),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),u(g,c,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var x=function(){var t=Object(n.useContext)(f).darkMode,e=Object(n.useState)(""),r=Object(c.a)(e,2),a=r[0],i=r[1],h=Object(n.useState)([]),p=Object(c.a)(h,2),v=p[0],y=p[1],m=function(){var t=Object(u.a)(b().mark(function t(){var e,r;return b().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!a){t.next=7;break}return t.next=4,d(a);case 4:e=t.sent,r=e.result,y(r);case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),y([]),console.log(t.t0);case 13:case"end":return t.stop()}},t,null,[[0,9]])}));return function(){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"flex items-center my-4 border-2 rounded-md relative z-50 w-96 ".concat(t?"bg-gray-900 border-gray-800":"bg-white border-neutral-200")},o.a.createElement("input",{type:"text",value:a,className:"w-full px-4 py-2 focus:outline-none rounded-md ".concat(t?"bg-gray-900":null),placeholder:"Search stock...",onChange:function(t){return i(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&m()}}),a&&o.a.createElement("button",{onClick:function(){i(""),y([])},className:"m-1"},o.a.createElement(l.a,{className:"h-4 w-4 fill-gray-500"})),o.a.createElement("button",{onClick:m,className:"h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2"},o.a.createElement(s.a,{className:"h-4 w-4 fill-gray-100"})),a&&v.length>0?o.a.createElement(w,{results:v}):null)},E=r(518),L=function(){var t=Object(n.useContext)(f),e=t.darkMode,r=t.setDarkMode;return o.a.createElement("button",{className:"rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg ".concat(e?"shadow-gray-800":null),onClick:function(){r(!e)}},o.a.createElement(E.a,{className:"h-8 w-8 cursor-pointer stroke-1 ".concat(e?"fill-yellow-400 stroke-yellow-400":"fill-none stroke-neutral-400")}))},k=function(t){var e=t.name;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"xl:px-32"},o.a.createElement("h1",{className:"text-5xl"},e),o.a.createElement(x,null)),o.a.createElement(L,null))},j=function(t){var e=t.children,r=Object(n.useContext)(f).darkMode;return o.a.createElement("div",{className:"w-full h-full rounded-md relative p-8 border-2 ".concat(r?"bg-gray-900 border-gray-800":"bg-white border-neutral-200")},e)},O=function(t){var e=t.details,r=Object(n.useContext)(f).darkMode,a={name:"Name",country:"Country",currency:"Currency",exchange:"Exchange",ipo:"IPO Date",marketCapitalization:"Market Capitalization",finnhubIndustry:"Industry"};return o.a.createElement(j,null,o.a.createElement("ul",{className:"w-full h-full flex flex-col justify-between divide-y-1 ".concat(r?"divide-gray-800":null)},Object.keys(a).map(function(t){return o.a.createElement("li",{key:t,className:"flex-1 flex justify-between items-center"},o.a.createElement("span",null,a[t]),o.a.createElement("span",{className:"font-bold"},"marketCapitalization"===t?"".concat((e[t]/1e3).toFixed(2),"B"):e[t]))})))},N=function(t){var e=t.symbol,r=t.price,n=t.change,a=t.changePercent,i=t.currency;return o.a.createElement(j,null,o.a.createElement("span",{className:"absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl"},e),o.a.createElement("div",{className:"w-full h-full flex items-center justify-around"},o.a.createElement("span",{className:"text-2xl xl:text-4xl 2xl:text-5xl flex items-center"},"$",r,o.a.createElement("span",{className:"text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2"},i)),o.a.createElement("span",{className:"text-lg xl:text-xl 2xl:text-2xl ".concat(n>0?"text-lime-500":"text-red-500")},n," ",o.a.createElement("span",null,"(",a,"%)"))))},_=function(t){var e=t.text,r=t.active,n=t.onClick;return o.a.createElement("button",{onClick:n,className:"w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ".concat(r?"bg-indigo-600 border-indigo-700 text-gray-100":"border-indigo-300 text-indigo-300"," transition duration-200 hover:bg-indigo-600 hover:text-gray-100 hover:border-indigo-700")},e)},S=r(521),P=r(519),C=r(514),G=r(510),F=r(511),T=r(512),M=function(t){return Math.floor(t.getTime()/1e3)},I={"1D":{resolution:"1",days:1,weeks:0,months:0,years:0},"1W":{resolution:"15",days:0,weeks:1,months:0,years:0},"1M":{resolution:"60",days:0,weeks:0,months:1,years:0},"1Y":{resolution:"D",days:0,weeks:0,months:0,years:1}};function A(){A=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};u(v,a,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(O([])));m&&m!==e&&r.call(m,a)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),u(g,c,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var D=function(){var t=Object(n.useState)("1W"),e=Object(c.a)(t,2),r=e[0],a=e[1],i=Object(n.useContext)(f).darkMode,l=Object(n.useContext)(g).stockSymbol,s=Object(n.useState)([]),h=Object(c.a)(s,2),p=h[0],d=h[1],v=function(t){return t.c.map(function(e,r){return{value:e.toFixed(2),date:(n=t.t[r],new Date(1e3*n).toLocaleDateString())};var n})};return Object(n.useEffect)(function(){var t=function(){var t=I[r],e=t.days,n=t.weeks,o=t.months,a=t.years,i=new Date,c=function(t,e,r,n,o){var a=new Date(t);return a.setDate(a.getDate()+e+7*r),a.setMonth(a.getMonth()+n),a.setFullYear(a.getFullYear()+o),a}(i,-e,-n,-o,-a);return{startTimestampUnix:M(c),endTimestampUnix:M(i)}};!function(){var e=Object(u.a)(A().mark(function e(){var n,o,a,i,c;return A().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t(),o=n.startTimestampUnix,a=n.endTimestampUnix,i=I[r].resolution,e.next=5,m(l,i,o,a);case 5:c=e.sent,d(v(c)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),d([]),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}()()},[l,r]),o.a.createElement(j,null,o.a.createElement("ul",{className:"flex absolute top-2 right-2 z-40"},Object.keys(I).map(function(t){return o.a.createElement("li",{key:t},o.a.createElement(_,{text:t,active:r===t,onClick:function(){a(t)}}))})),o.a.createElement(S.a,null,o.a.createElement(P.a,{data:p},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"chartColor",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:i?"#312e81":"rgb(199 210 254)",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:i?"#312e81":"rgb(199 210 254)",stopOpacity:0}))),o.a.createElement(C.a,{contentStyle:i?{backgroundColor:"#111827"}:null,itemStyle:i?{color:"#818cf8"}:null}),o.a.createElement(G.a,{type:"monotone",dataKey:"value",stroke:"#312e81",fill:"url(#chartColor)",fillOpacity:1,strokeWidth:.5}),o.a.createElement(F.a,{dataKey:"date"}),o.a.createElement(T.a,{domain:["dataMin","dataMax"]}))))};function q(){q=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var f={};function h(){}function p(){}function d(){}var v={};u(v,a,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(O([])));m&&m!==e&&r.call(m,a)&&(v=m);var g=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),u(g,c,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var Y=function(){var t=Object(n.useContext)(f).darkMode,e=Object(n.useContext)(g).stockSymbol,r=Object(n.useState)({}),a=Object(c.a)(r,2),i=a[0],l=a[1],s=Object(n.useState)({}),h=Object(c.a)(s,2),p=h[0],d=h[1];return Object(n.useEffect)(function(){var t=function(){var t=Object(u.a)(q().mark(function t(){var r;return q().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e);case 3:r=t.sent,l(r),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),l({}),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,7]])}));return function(){return t.apply(this,arguments)}}(),r=function(){var t=Object(u.a)(q().mark(function t(){var r;return q().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:r=t.sent,d(r),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),d({}),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,7]])}));return function(){return t.apply(this,arguments)}}();t(),r()},[e]),o.a.createElement("div",{className:"h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ".concat(t?"bg-gray-900 text-gray-300":"bg-neutral-100")},o.a.createElement("div",{className:"col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center"},o.a.createElement(k,{name:i.name})),o.a.createElement("div",{className:"md:col-span-2 row-span-4"},o.a.createElement(D,null)),o.a.createElement("div",null,o.a.createElement(N,{symbol:e,price:p.pc,change:p.d,changePercent:p.dp,currency:i.currency})),o.a.createElement("div",{className:"row-span-2 xl:row-span-3"},o.a.createElement(O,{details:i})))};var z=function(){var t=Object(n.useState)(!1),e=Object(c.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)("MSFT"),u=Object(c.a)(i,2),l=u[0],s=u[1];return o.a.createElement(f.Provider,{value:{darkMode:r,setDarkMode:a}},o.a.createElement(g.Provider,{value:{stockSymbol:l,setStockSymbol:s}},o.a.createElement(Y,null)))},U=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,520)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z,null))),U()}},[[257,3,2]]]);
//# sourceMappingURL=main.c30d5db0.chunk.js.map