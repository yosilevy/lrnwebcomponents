!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).HexagonLoader={},n.lit)}(this,(function(n,t){"use strict";function e(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function a(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?e(Object(a),!0).forEach((function(t){l(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,k(a.key),a)}}function r(n,t,e){return t&&o(n.prototype,t),e&&o(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function l(n,t,e){return(t=k(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&f(n,t)}function c(n){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},c(n)}function f(n,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},f(n,t)}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function m(n,t,e){return m=h()?Reflect.construct.bind():function(n,t,e){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(n,a));return e&&f(i,e.prototype),i},m.apply(null,arguments)}function u(n){var t="function"==typeof Map?new Map:void 0;return u=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,a)}function a(){return m(n,arguments,c(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),f(a,n)},u(n)}function g(n,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function p(n){var t=h();return function(){var e,a=c(n);if(t){var i=c(this).constructor;e=Reflect.construct(a,arguments,i)}else e=a.apply(this,arguments);return g(this,e)}}function b(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&null!==(n=c(n)););return n}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(n,t,e){var a=b(n,t);if(a){var i=Object.getOwnPropertyDescriptor(a,t);return i.get?i.get.call(arguments.length<3?n:e):i.value}},y.apply(this,arguments)}function d(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function w(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function x(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return w(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?w(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var a=0,i=function(){};return{s:i,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,l=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return r=n.done,n},e:function(n){l=!0,o=n},f:function(){try{r||null==e.return||e.return()}finally{if(l)throw o}}}}function k(n){var t=function(n,t){if("object"!=typeof n||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var a=e.call(n,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==typeof t?t:String(t)}
/**
   * Copyright 2018 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */var v,I,O,j=function(n){s(e,n);var t=p(e);function e(){var n,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return i(this,e),(n=t.call(this)).tag=e.tag,n._queue=[],n.template=document.createElement("template"),n.attachShadow({mode:"open"}),a||n.render(),n}return r(e,[{key:"html",get:function(){return"\n<style>\n:host {\n  display: inline-flex;\n  position: relative;\n  height: 36px;\n  width: 36px;\n}\n\n:host div,\n:host div:before,\n:host div:after {\n background-color: var(--hexagon-color, orange);\n}\n\ndiv {\n  width: var(--hexagon-width, 30px);\n  height: var(--hexagon-height, 18px);\n  margin: 9px 3px;\n  position: absolute;\n  color: var(--hexagon-color, orange);\n}\ndiv:before, div:after {\n  content: '';\n  position: absolute;\n  width: var(--hexagon-width, 30px);\n  height: var(--hexagon-height, 18px);\n}\ndiv:before {\n  -webkit-transform: rotate(60deg);\n          transform: rotate(60deg);\n}\ndiv:after {\n  -webkit-transform: rotate(-60deg);\n          transform: rotate(-60deg);\n}\n</style>\n    <div></div>"}},{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._queue.length&&this._processQueue()}},{key:"_copyAttribute",value:function(n,t){var e,a=this.shadowRoot.querySelectorAll(t),i=this.getAttribute(n),o=null==i?"removeAttribute":"setAttribute",r=x(a);try{for(r.s();!(e=r.n()).done;){e.value[o](n,i)}}catch(n){r.e(n)}finally{r.f()}}},{key:"_queueAction",value:function(n){this._queue.push(n)}},{key:"_processQueue",value:function(){var n=this;this._queue.forEach((function(t){n["_".concat(t.type)](t.data)})),this._queue=[]}},{key:"_setProperty",value:function(n){var t=n.name,e=n.value;this[t]=e}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}],[{key:"tag",get:function(){return"hex-a-gon"}}]),e}(u(HTMLElement));customElements.define(j.tag,j);var S=function(n){s(o,n);var e=p(o);function o(){var n;return i(this,o),(n=e.call(this)).itemCount=37,n.items=[],n}return r(o,[{key:"render",value:function(){return t.html(v||(v=d([" <div>\n      ","\n    </div>"])),this.items.map((function(n){return t.html(I||(I=d(["<hex-a-gon></hex-a-gon>"])))})))}},{key:"updated",value:function(n){var t=this;n.forEach((function(n,e){if("color"==e&&t._colorChanged(t[e],n),"itemCount"==e){t.items=[];for(var a=0;a<t[e];a++)t.items.push("");var i=-4,o=0;[4,5,6,7,6,5,4].forEach((function(n,e){i+=n,t.itemCount>=i&&(o=36.42857142857143*(e+1),t.itemCount)})),t.style.setProperty("--hexagon-loader-height","".concat(o,"px"))}}))}},{key:"_colorChanged",value:function(n,t){n&&window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,{"--hexagon-color":n})}}],[{key:"styles",get:function(){return[t.css(O||(O=d(['\n        :host {\n          display: none;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        :host([loading]) {\n          display: flex;\n          flex-direction: column;\n          align-items: stretch;\n          justify-content: center;\n          margin: 0 auto;\n          padding: 0 0 0 0 !important;\n          width: var(--hexagon-loader-width, 255px);\n          height: var(--hexagon-loader-height, 232.5px);\n        }\n\n        :host([size="small"]) {\n          width: calc(0.5 * var(--hexagon-loader-width, 255px));\n          height: calc(0.5 * var(--hexagon-loader-height, 232.5px));\n        }\n\n        :host([size="large"]) {\n          width: calc(1.25 * var(--hexagon-loader-width, 255px));\n          height: calc(1.25 * var(--hexagon-loader-height, 232.5px));\n        }\n\n        :host([size="epic"]) {\n          width: calc(2.5 * var(--hexagon-loader-width, 255px));\n          height: calc(2.5 * var(--hexagon-loader-height, 232.5px));\n        }\n\n        div {\n          position: relative;\n          margin: 0 auto;\n          flex: 1 1 100%;\n          width: 100%;\n        }\n\n        hex-a-gon {\n          display: none;\n          position: absolute;\n          top: 9px;\n          left: 15px;\n          width: var(--hexagon-width, 30px);\n          height: var(--hexagon-height, 18px);\n          color: #9fb475;\n          -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n        }\n\n        :host([size="small"]) hex-a-gon {\n          --hexagon-width: calc(0.5 * 30px);\n          --hexagon-height: calc(0.5 * 18px);\n          top: calc(0.1 * 9px);\n          left: calc(0.5 * 15px);\n        }\n\n        :host([size="large"]) hex-a-gon {\n          --hexagon-width: calc(1.25 * 30px);\n          --hexagon-height: calc(1.25 * 18px);\n          top: calc(1.5 * 9px);\n          left: calc(1.25 * 15px);\n        }\n\n        :host([size="epic"]) hex-a-gon {\n          --hexagon-width: calc(2.5 * 30px);\n          --hexagon-height: calc(2.5 * 18px);\n          top: calc(4 * 9px);\n          left: calc(2.5 * 15px);\n        }\n\n        hex-a-gon:nth-of-type(1) {\n          display: block;\n          margin-left: calc(100% * 1.5 / 7);\n          margin-top: 0%;\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n        }\n\n        hex-a-gon:nth-of-type(2) {\n          display: block;\n          margin-left: calc(100% * 2.5 / 7);\n          margin-top: 0%;\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n        }\n\n        hex-a-gon:nth-of-type(3) {\n          display: block;\n          margin-left: calc(100% * 3.5 / 7);\n          margin-top: 0%;\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n        }\n\n        hex-a-gon:nth-of-type(4) {\n          display: block;\n          margin-left: calc(100% * 4.5 / 7);\n          margin-top: 0%;\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n        }\n\n        hex-a-gon:nth-of-type(5) {\n          display: block;\n          margin-left: calc(100% * 1 / 7);\n          margin-top: calc(100% * 1 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n        }\n\n        hex-a-gon:nth-of-type(6) {\n          display: block;\n          margin-left: calc(100% * 2 / 7);\n          margin-top: calc(100% * 1 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n        }\n\n        hex-a-gon:nth-of-type(7) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 3 / 7));\n          margin-top: calc(100% * 1 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n        }\n\n        hex-a-gon:nth-of-type(8) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 4 / 7));\n          margin-top: calc(100% * 1 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n        }\n\n        hex-a-gon:nth-of-type(9) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 5 / 7));\n          margin-top: calc(100% * 1 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n        }\n\n        hex-a-gon:nth-of-type(10) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 0.5 / 7));\n          margin-top: calc(100% * 2 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n        }\n\n        hex-a-gon:nth-of-type(11) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 1.5 / 7));\n          margin-top: calc(100% * 2 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n        }\n\n        hex-a-gon:nth-of-type(12) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 2.5 / 7));\n          margin-top: calc(100% * 2 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n        }\n\n        hex-a-gon:nth-of-type(13) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 3.5 / 7));\n          margin-top: calc(100% * 2 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n        }\n\n        hex-a-gon:nth-of-type(14) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 4.5 / 7));\n          margin-top: calc(100% * 2 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n        }\n\n        hex-a-gon:nth-of-type(15) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 5.5 / 7));\n          margin-top: calc(100% * 2 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n        }\n\n        hex-a-gon:nth-of-type(16) {\n          display: block;\n          margin-left: 0%;\n          margin-top: calc(100% * 3 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n        }\n\n        hex-a-gon:nth-of-type(17) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 1 / 7));\n          margin-top: calc(100% * 3 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n        }\n\n        hex-a-gon:nth-of-type(18) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 2 / 7));\n          margin-top: calc(100% * 3 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n        }\n\n        hex-a-gon:nth-of-type(19) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 3 / 7));\n          margin-top: calc(100% * 3 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n        }\n\n        hex-a-gon:nth-of-type(20) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 4 / 7));\n          margin-top: calc(100% * 3 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n        }\n\n        hex-a-gon:nth-of-type(21) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 5 / 7));\n          margin-top: calc(100% * 3 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n        }\n\n        hex-a-gon:nth-of-type(22) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 6 / 7));\n          margin-top: calc(100% * 3 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n        }\n\n        hex-a-gon:nth-of-type(23) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 0.5 / 7));\n          margin-top: calc(100% * 4 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n        }\n\n        hex-a-gon:nth-of-type(24) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 1.5 / 7));\n          margin-top: calc(100% * 4 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n        }\n\n        hex-a-gon:nth-of-type(25) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 2.5 / 7));\n          margin-top: calc(100% * 4 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n        }\n\n        hex-a-gon:nth-of-type(26) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 3.5 / 7));\n          margin-top: calc(100% * 4 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n        }\n\n        hex-a-gon:nth-of-type(27) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 4.5 / 7));\n          margin-top: calc(100% * 4 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n        }\n\n        hex-a-gon:nth-of-type(28) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 5.5 / 7));\n          margin-top: calc(100% * 4 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n        }\n\n        hex-a-gon:nth-of-type(29) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 1 / 7));\n          margin-top: calc(100% * 5 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n        }\n\n        hex-a-gon:nth-of-type(30) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 2 / 7));\n          margin-top: calc(100% * 5 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n        }\n\n        hex-a-gon:nth-of-type(31) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 3 / 7));\n          margin-top: calc(100% * 5 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n        }\n\n        hex-a-gon:nth-of-type(32) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 4 / 7));\n          margin-top: calc(100% * 5 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n        }\n\n        hex-a-gon:nth-of-type(33) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 5 / 7));\n          margin-top: calc(100% * 5 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n        }\n\n        hex-a-gon:nth-of-type(34) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 1.5 / 7));\n          margin-top: calc(100% * 6 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n        }\n\n        hex-a-gon:nth-of-type(35) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 2.5 / 7));\n          margin-top: calc(100% * 6 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n        }\n\n        hex-a-gon:nth-of-type(36) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 3.5 / 7));\n          margin-top: calc(100% * 6 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n        }\n\n        hex-a-gon:nth-of-type(37) {\n          display: block;\n          margin-left: var(--hexagon-margin-left, calc(100% * 4.5 / 7));\n          margin-top: calc(100% * 6 / 7);\n          -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n          -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n        }\n\n        :host([item-count="1"]) hex-a-gon:nth-of-type(1),\n        :host([item-count="3"]) hex-a-gon:nth-of-type(2) {\n          margin-left: calc(100% * 3 / 7);\n        }\n\n        :host([item-count="2"]) hex-a-gon:nth-of-type(1) {\n          margin-left: calc(100% * 2.5 / 7);\n        }\n\n        :host([item-count="2"]) hex-a-gon:nth-of-type(2) {\n          margin-left: calc(100% * 3.5 / 7);\n        }\n\n        :host([item-count="3"]) hex-a-gon:nth-of-type(1) {\n          margin-left: calc(100% * 2 / 7);\n        }\n\n        :host([item-count="3"]) hex-a-gon:nth-of-type(3) {\n          margin-left: calc(100% * 4 / 7);\n        }\n\n        @-webkit-keyframes scaleIt {\n          25%,\n          100% {\n            -webkit-transform: scale(1) translate(-50%, -50%);\n            transform: scale(1) translate(-50%, -50%);\n          }\n\n          50% {\n            -webkit-transform: scale(0) translate(-50%, -50%);\n            transform: scale(0) translate(-50%, -50%);\n          }\n        }\n\n        @keyframes scaleIt {\n          25%,\n          100% {\n            -webkit-transform: scale(1) translate(-50%, -50%);\n            transform: scale(1) translate(-50%, -50%);\n          }\n\n          50% {\n            -webkit-transform: scale(0) translate(-50%, -50%);\n            transform: scale(0) translate(-50%, -50%);\n          }\n        }\n      '])))]}},{key:"properties",get:function(){return a(a({},y(c(o),"properties",this)),{},{color:{name:"color",type:String,reflect:!0},size:{name:"size",type:String,reflect:!0},loading:{name:"loading",type:Boolean,reflect:!0},items:{name:"items",type:Array},itemCount:{name:"itemCount",type:Number,reflect:!0,attribute:"item-count"}})}},{key:"tag",get:function(){return"hexagon-loader"}}]),o}(t.LitElement);customElements.define(S.tag,S),n.HexagonLoader=S,Object.defineProperty(n,"__esModule",{value:!0})}));
