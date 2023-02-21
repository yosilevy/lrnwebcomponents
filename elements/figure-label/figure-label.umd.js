!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).FigureLabel={},e.lit)}(this,(function(e,t){"use strict";function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function c(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var i=u(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return l(this,r)}}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=p(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(arguments.length<3?e:r):i.value}},s.apply(this,arguments)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var y,g,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(b,e);var r,c,l,p=a(b);function b(){return i(this,b),p.apply(this,arguments)}return r=b,l=[{key:"styles",get:function(){return[t.css(g||(g=d(["\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        #wrap {\n          display: flex;\n          margin-bottom: 1em;\n        }\n\n        #title {\n          background-color: var(--figure-label-title-background-color, #f2f2f2);\n          padding: 10.8px 13.5px 10.8px;\n          font-size: 13.5px;\n        }\n\n        #description {\n          border: solid 1px\n            var(--figure-label-description-background-color, #f2f2f2);\n          padding: 10.8px 13.5px 10.8px;\n          font-size: 13.5px;\n        }\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Figure label",description:"Figure label element to mark media assets within content.",icon:"icons:android",color:"green",tags:["content","figure","a11y","accessibility","image","caption","description"],meta:{author:"HAXTheWeb core team",owner:"PSU"}},settings:{configure:[{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"description",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return n(n({},s(u(b),"properties",this)),{},{title:{name:"title",type:String,value:"",reflectToAttribute:!1,observer:!1},description:{name:"description",type:String,value:"",reflectToAttribute:!1,observer:!1}})}},{key:"tag",get:function(){return"figure-label"}}],(c=[{key:"render",value:function(){return t.html(y||(y=d([' <div id="wrap">\n      <div id="title">','</div>\n      <div id="description">',"</div>\n    </div>"])),this.title,this.description)}}])&&o(r.prototype,c),l&&o(r,l),Object.defineProperty(r,"prototype",{writable:!1}),b}(t.LitElement);customElements.define("figure-label",v),e.FigureLabel=v,Object.defineProperty(e,"__esModule",{value:!0})}));
