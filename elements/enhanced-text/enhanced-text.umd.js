!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/vocab-term/vocab-term.js"),require("lit"),require("@lrnwebcomponents/micro-frontend-registry/micro-frontend-registry.js"),require("@lrnwebcomponents/micro-frontend-registry/lib/microServices.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/vocab-term/vocab-term.js","lit","@lrnwebcomponents/micro-frontend-registry/micro-frontend-registry.js","@lrnwebcomponents/micro-frontend-registry/lib/microServices.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).EnhancedText={},null,e.lit,e.microFrontendRegistry_js,e.microServices_js)}(this,(function(e,t,n,r,o){"use strict";function i(){i=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",m=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function l(e,t,n,o){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),m=new E(o||[]);return r(a,"_invoke",{value:k(e,n,m)}),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f={};function h(){}function d(){}function p(){}var b={};s(b,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(T([])));y&&y!==t&&n.call(y,a)&&(b=y);var v=p.prototype=h.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(r,i,a,m){var c=u(e[r],e,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){o("next",e,a,m)}),(function(e){o("throw",e,a,m)})):t.resolve(l).then((function(e){s.value=e,a(s)}),(function(e){return o("throw",e,a,m)}))}m(c.arg)}var i;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return i=i?i.then(r,r):r()}})}function k(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var m=j(a,n);if(m){if(m===f)continue;return m}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function j(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=u(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=p,r(v,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:d,configurable:!0}),d.displayName=s(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},x(w.prototype),s(w.prototype,m,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(v),s(v,c,"Generator"),s(v,a,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=T,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var m=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(m&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(m){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function a(e,t,n,r,o,i,a){try{var m=e[i](a),c=m.value}catch(e){return void n(e)}m.done?t(c):Promise.resolve(c).then(r,o)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,"symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?i:String(i)),r)}var o,i}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g,y;o.enableServices(["haxcms"]),r.MicroFrontendRegistry.add({endpoint:"/api/services/text/textVide",name:"@enhancedText/textVide",title:"text-vide",description:"Enhance readability of text based on brain science",params:{body:"Block of text to enhance"}});var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(x,e);var t,o,l,f,b,v=u(x);function x(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,x),(e=v.call(this)).loading=!1,e.auto=!1,e.fixationPoint=4,e.vide=!1,e.wikipedia=!1,e.haxcmsGlossary=!1,e.haxcmsSiteLocation="",e.haxcmsSite=null,e.haxcmsMarkAll=!1,e}return t=x,o=[{key:"firstUpdated",value:function(e){h(c(x.prototype),"firstUpdated",this)&&h(c(x.prototype),"firstUpdated",this).call(this,e),this.auto&&this.enhance()}},{key:"applyTermFromList",value:function(e){var t=this;if(e.status&&e.data&&e.data.length){var n=p(this.childNodes).filter((function(e){return 3===e.nodeType})).filter((function(e){return e.textContent.trim()}));if(0===n.length){var r=this.innerText;this.innerHTML="",r.split(/\s|\.+/).forEach((function(e){var n=document.createTextNode(e);t.appendChild(n),t.appendChild(document.createTextNode(" "))})),n=p(this.childNodes).filter((function(e){return 3===e.nodeType})).filter((function(e){return e.textContent.trim()}))}if(1===n.length){var o=n[0].textContent;n[0].remove(),o.split(/\s|\.+/).forEach((function(e){var n=document.createTextNode(e);t.appendChild(n),t.appendChild(document.createTextNode(" "))})),n=p(this.childNodes).filter((function(e){return 3===e.nodeType})).filter((function(e){return e.textContent.trim()}))}for(var i=0;i<e.data.length;i++)for(var a=e.data[i],m=!1,c=0;c<n.length;c++){var s=n[c];if(s.textContent.toLowerCase()==a.term.toLowerCase()&&(!m||this.haxcmsMarkAll)){var l=document.createElement("vocab-term");if(l.term=s.textContent,l.information=a.definition,a.links&&a.links.length>0){var u=document.createElement("div");u.classList.add("links");for(var f=0;f<a.links.length;f++){var h=document.createElement("a");h.href=a.links[f].href,h.innerText=a.links[f].title,u.appendChild(h)}l.appendChild(u)}s.parentNode.insertBefore(l,s),l.appendChild(s),m=!0}}}}},{key:"enhance",value:(f=i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.innerHTML,this.loading=!0,!this.vide){e.next=5;break}return e.next=5,r.MicroFrontendRegistry.call("@enhancedText/textVide",{body:t,fixationPoint:this.fixationPoint},this.enahncedTextResponse.bind(this));case 5:if(!this.haxcmsGlossary||!this.haxcmsSiteLocation&&!this.haxcmsSite){e.next=13;break}if(!this.haxcmsSite){e.next=11;break}return e.next=9,r.MicroFrontendRegistry.call("@haxcms/termsInPage",{body:t,type:"site",site:this.haxcmsSite,wikipedia:this.wikipedia},this.applyTermFromList.bind(this));case 9:e.next=13;break;case 11:return e.next=13,r.MicroFrontendRegistry.call("@haxcms/termsInPage",{body:t,type:"link",site:this.haxcmsSiteLocation,wikipedia:this.wikipedia},this.applyTermFromList.bind(this));case 13:this.loading=!1;case 14:case"end":return e.stop()}}),e,this)})),b=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=f.apply(e,t);function i(e){a(o,n,r,i,m,"next",e)}function m(e){a(o,n,r,i,m,"throw",e)}i(void 0)}))},function(){return b.apply(this,arguments)})},{key:"enahncedTextResponse",value:function(e){if(e.status&&e.data&&e.data.length){var t=(new DOMParser).parseFromString(e.data,"text/html");this.innerHTML=t.body.innerHTML}}},{key:"render",value:function(){return n.html(g||(g=d(['\n      <div class="loading"></div>\n      <slot></slot>\n    '])))}}],l=[{key:"properties",get:function(){return{wikipedia:{type:Boolean,reflect:!0},vide:{type:Boolean,reflect:!0},fixationPoint:{type:Number,attribute:"fixation-point"},haxcmsGlossary:{type:Boolean,attribute:"haxcms-glossary"},haxcmsSiteLocation:{type:String,attribute:"haxcms-site-location"},haxcmsSite:{type:Object,attribute:"haxcms-site"},haxcmsMarkAll:{type:Boolean,attribute:"haxcms-mark-all"},loading:{type:Boolean,reflect:!0},auto:{type:Boolean,reflect:!0}}}},{key:"styles",get:function(){var e=[];return h(c(x),"styles",this)&&(e=h(c(x),"styles",this)),[].concat(p(e),[n.css(y||(y=d(["\n        :host {\n          display: block;\n        }\n        div::slotted(bold) {\n          font-weight: 800;\n        }\n        :host([loading]) .loading {\n          margin: 8px 0 0 -12px;\n          font-size: 2px;\n          width: 4px;\n          height: 4px;\n          border-radius: 50%;\n          position: absolute;\n          -webkit-animation: load5 1.1s infinite ease;\n          animation: load5 1.1s infinite ease;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n        }\n        @-webkit-keyframes load5 {\n          0%,\n          100% {\n            box-shadow: 0em -2.6em 0em 0em var(--enhanced-text-color, #000000),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.2),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n          }\n          12.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),\n              1.8em -1.8em 0 0em var(--enhanced-text-color, #000000),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.2),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n          }\n          25% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7),\n              2.5em 0em 0 0em var(--enhanced-text-color, #000000),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n          }\n          37.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.7),\n              1.75em 1.75em 0 0em var(--enhanced-text-color, #000000),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n          }\n          50% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.5),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7),\n              0em 2.5em 0 0em var(--enhanced-text-color, #000000),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n          }\n          62.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.2),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.7),\n              -1.8em 1.8em 0 0em var(--enhanced-text-color, #000000),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n          }\n          75% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.2),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.5),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7),\n              -2.6em 0em 0 0em var(--enhanced-text-color, #000000),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n          }\n          87.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.2),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.7),\n              -1.8em -1.8em 0 0em var(--enhanced-text-color, #000000);\n          }\n        }\n        @keyframes load5 {\n          0%,\n          100% {\n            box-shadow: 0em -2.6em 0em 0em var(--enhanced-text-color, #000000),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.2),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n          }\n          12.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),\n              1.8em -1.8em 0 0em var(--enhanced-text-color, #000000),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.2),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n          }\n          25% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7),\n              2.5em 0em 0 0em var(--enhanced-text-color, #000000),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n          }\n          37.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.7),\n              1.75em 1.75em 0 0em var(--enhanced-text-color, #000000),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n          }\n          50% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.5),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7),\n              0em 2.5em 0 0em var(--enhanced-text-color, #000000),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n          }\n          62.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.2),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.7),\n              -1.8em 1.8em 0 0em var(--enhanced-text-color, #000000),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n          }\n          75% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.2),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.5),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7),\n              -2.6em 0em 0 0em var(--enhanced-text-color, #000000),\n              -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n          }\n          87.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),\n              1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),\n              2.5em 0em 0 0em rgba(255, 255, 255, 0.2),\n              1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),\n              0em 2.5em 0 0em rgba(255, 255, 255, 0.2),\n              -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),\n              -2.6em 0em 0 0em rgba(255, 255, 255, 0.7),\n              -1.8em -1.8em 0 0em var(--enhanced-text-color, #000000);\n          }\n        }\n      "])))])}},{key:"tag",get:function(){return"enhanced-text"}},{key:"haxProperties",get:function(){return{gizmo:{title:"Enhanced text",description:"Add content look up to a blob of text"},setttings:{configure:[{slot:"",title:"Text to process",description:"Text that will be enhanced"},{property:"wikipedia",type:"boolean",title:"Wikipedia articles",description:"Enhance found definitions in glossary with possibly related wikipedia article links"},{property:"haxcmsGlossary",type:"boolean",title:"haxcms: Glossary",description:"Automatically link to definitions found on the /glossary page of a haxcms site"},{property:"haxcmsSiteLocation",type:"textfield",title:"haxcms: site url",description:"Link to the HAXcms site to leverage for glossary of terms"},{property:"haxcmsSite",type:"textarea",title:"haxcms: site",description:"JSON blob of the site.json file itself"}]}}}}],o&&m(t.prototype,o),l&&m(t,l),Object.defineProperty(t,"prototype",{writable:!1}),x}(n.LitElement);customElements.define(v.tag,v),e.EnhancedText=v,Object.defineProperty(e,"__esModule",{value:!0})}));
