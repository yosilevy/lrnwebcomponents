!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).LrnCssReset={},e.lit)}(this,(function(e,n){"use strict";function t(e,n){for(var t=0;t<n.length;t++){var s=n[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,(a=s.key,o=void 0,"symbol"==typeof(o=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var s=t.call(e,n||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(a,"string"))?o:String(o)),s)}var a,o}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function a(e,n){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},a(e,n)}function o(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=s(e);if(n){var i=s(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return o(this,t)}}function r(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=s(e)););return e}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var s=r(e,n);if(s){var a=Object.getOwnPropertyDescriptor(s,n);return a.get?a.get.call(arguments.length<3?e:t):a.value}},l.apply(this,arguments)}function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var h,c,y=[n.css(h||(h=f(['\n    @import url("https://unpkg.com/modern-css-reset/dist/reset.min.css");\n    @import url("https://fonts.googleapis.com/css?family=Lato:400,700,900|Source+Code+Pro:400,700|Lora:400,400i,700,700i|Playfair+Display:700i,900");\n\n    .off-screen {\n      position: absolute;\n      left: -9999999px;\n      width: 0px;\n      height: 0px;\n      overflow: hidden;\n    }\n\n    html,\n    body {\n      margin: 0;\n      width: 100%;\n      font-size: var(--haxcms-base-styles-body-font-size, 18px);\n      font-family: var(--haxcms-base-styles-body-font-family, "Lora");\n      line-height: var(--haxcms-base-styles-body-line-height, 1.58);\n      letter-spacing: var(--haxcms-base-styles-body-letter-spacing, -0.03px);\n    }\n\n    h1,\n    h2,\n    p,\n    i,\n    a,\n    .first-letter,\n    .authorName a {\n      color: rgba(0, 0, 0, 0.84);\n      text-rendering: optimizeLegibility;\n    }\n\n    h1 {\n      font-family: var(\n        --hax-base-styles-h1-font-family,\n        var(--hax-base-styles-accent-font-family, "Playfair Display", serif)\n      );\n      font-size: var(\n        --hax-base-styles-h1-font-size,\n        calc(2.66666667 * var(--haxcms-base-styles-body-font-size, 18px))\n      );\n      line-height: var(--hax-base-styles-h1-line-height, unset);\n      text-align: left;\n      margin-bottom: 8px;\n      letter-spacing: unset;\n    }\n\n    h2 {\n      font-family: var(\n        --hax-base-styles-h2-font-family,\n        var(--hax-base-styles-heading-font-family, "Lato", sans-serif)\n      );\n      font-size: var(\n        --hax-base-styles-h2-font-size,\n        calc(1.66666667 * var(--haxcms-base-styles-body-font-size, 18px))\n      );\n      line-height: var(--hax-base-styles-h2-line-height, 34.5px);\n      font-weight: 900;\n      padding: 0;\n      margin: 56px 0 -13px -1.883px;\n      text-align: left;\n      letter-spacing: -0.45px;\n    }\n\n    h3 {\n      font-family: var(\n        --hax-base-styles-h3-font-family,\n        var(--hax-base-styles-heading-font-family, "Lato", sans-serif)\n      );\n      font-size: var(\n        --hax-base-styles-h3-font-size,\n        calc(1.44444444 * var(--haxcms-base-styles-body-font-size, 18px))\n      );\n      line-height: var(--hax-base-styles-h3-line-height);\n      font-weight: 700;\n      margin: 56px 0 -13px -1.883px;\n      color: #555;\n    }\n\n    h4 {\n      font-family: var(\n        --hax-base-styles-h4-font-family,\n        var(--hax-base-styles-heading-font-family, "Lato", sans-serif)\n      );\n      font-size: var(\n        --hax-base-styles-h4-font-size,\n        calc(1.22222222 * var(--haxcms-base-styles-body-font-size, 18px))\n      );\n      line-height: var(--hax-base-styles-h4-line-height);\n      font-weight: 700;\n      margin: 46px 0 -13px -1.883px;\n      color: #777;\n    }\n\n    h5 {\n      font-family: var(\n        --hax-base-styles-h5-font-family,\n        var(--hax-base-styles-heading-font-family, "Lato", sans-serif)\n      );\n      font-size: var(\n        --hax-base-styles-h5-font-size,\n        calc(1.11111111 * var(--haxcms-base-styles-body-font-size, 18px))\n      );\n      line-height: var(--hax-base-styles-h5-line-height);\n      font-weight: 700;\n      margin: 36px 0 -13px -1.883px;\n      color: #333;\n    }\n\n    h6 {\n      font-family: var(\n        --hax-base-styles-h5-font-family,\n        var(--hax-base-styles-heading-font-family, "Lato", sans-serif)\n      );\n      font-size: var(\n        --hax-base-styles-h5-font-size,\n        var(--haxcms-base-styles-body-font-size, 18px)\n      );\n      line-height: var(--hax-base-styles-h5-line-height);\n      font-weight: 700;\n      margin: 26px 0 -13px -1.883px;\n      color: #777;\n    }\n\n    p {\n      min-height: var(--hax-base-styles-p-min-height);\n      font-size: var(\n        --hax-base-styles-p-font-size,\n        var(--haxcms-base-styles-body-font-size, 18px)\n      );\n      font-family: var(--haxcms-base-styles-body-font-family, "Lora");\n      line-height: var(\n        --hax-base-styles-p-line-height,\n        var(--haxcms-base-styles-body-line-height, 1.58)\n      );\n      letter-spacing: var(\n        --hax-base-styles-p-letter-spacing,\n        var(--haxcms-base-styles-body-letter-spacing, -0.03px)\n      );\n    }\n\n    p,\n    i,\n    a {\n      margin-top: 21px;\n    }\n\n    a {\n      text-decoration: underline;\n      font-size: var(\n        --hax-base-styles-a-font-size,\n        var(--hax-base-styles-p-font-size)\n      );\n    }\n\n    blockquote {\n      font-family: var(\n        --hax-base-styles-accent-font-family,\n        "Playfair Display",\n        serif\n      );\n      font-size: var(\n        --hax-base-styles-blockquote-font-size,\n        calc(1.66666667 * var(--haxcms-base-styles-body-font-size, 18px))\n      );\n      font-style: italic;\n      letter-spacing: -0.36px;\n      line-height: 44.4px;\n      overflow-wrap: break-word;\n      margin: 55px 0 33px 0;\n      color: rgba(0, 0, 0, 0.68);\n      padding: 0 0 0 50px;\n    }\n\n    figcaption {\n      font-family: var(\n        --hax-base-styles-heading-font-family,\n        "Lato",\n        sans-serif\n      );\n      font-size: var(\n        --hax-base-styles-small-font-size,\n        calc(0.88888889 * var(--hax-base-styles-p-font-size))\n      );\n      font-weight: 400;\n      color: #666;\n    }\n\n    ol ol {\n      list-style-type: lower-alpha;\n      font-size: 16px;\n      color: #444;\n      line-height: var(\n        --hax-base-styles-list-line-height,\n        var(--hax-base-styles-p-line-height)\n      );\n      font-size: var(\n        --hax-base-styles-smal-font-size,\n        calc(0.88888889 * var(--hax-base-styles-p-font-size))\n      );\n    }\n\n    ol ol ol {\n      list-style-type: lower-roman;\n      font-size: var(\n        --hax-base-styles-smaller-font-size,\n        calc(0.77777778 * var(--hax-base-styles-p-font-size))\n      );\n    }\n\n    code {\n      font-size: 18px;\n      background: rgba(0, 0, 0, 0.05);\n      border-radius: 2px;\n      padding: 3px 5px;\n      font-family: var(\n        --hax-base-styles-code-font-family,\n        "Source Code Pro",\n        monospace\n      );\n    }\n\n    pre {\n      font-family: var(\n        --hax-base-styles-code-font-family,\n        "Source Code Pro",\n        monospace\n      );\n    }\n\n    kbd {\n      font-family: var(\n        --hax-base-styles-code-font-family,\n        "Source Code Pro",\n        monospace\n      );\n      font-weight: 700;\n    }\n\n    samp {\n      font-family: var(\n        --hax-base-styles-code-font-family,\n        "Source Code Pro",\n        monospace\n      );\n    }\n  '])))],p=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"LrnCssResetStyles";if(!window.LrnCssResetStyles){window[e]=document.createElement("div");var n=document.createElement("style"),t=y.map((function(e){return e.cssText})).join("");n.setAttribute("id",e),n.setAttribute("type","text/css"),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),document.getElementsByTagName("head")[0].appendChild(n)}},b=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&a(e,n)}(u,e);var o,r,h,b=i(u);function u(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),b.call(this)}return o=u,h=[{key:"tag",get:function(){return"lrn-css-reset"}},{key:"styles",get:function(){return y}},{key:"properties",get:function(){return{applyToHead:{type:Boolean,attribute:"apply-to-head"}}}}],(r=[{key:"firstUpdated",value:function(e){l(s(u.prototype),"firstUpdated",this)&&l(s(u.prototype),"firstUpdated",this).call(this,e),this.applyToHead&&p(y,"LrnCssResetStyles")}},{key:"render",value:function(){return n.html(c||(c=f(["<slot></slot>"])))}}])&&t(o.prototype,r),h&&t(o,h),Object.defineProperty(o,"prototype",{writable:!1}),u}(n.LitElement);customElements.define(b.tag,b),e.AttachStylesToHead=p,e.LrnCssReset=b,e.LrnCssResetStyles=y,Object.defineProperty(e,"__esModule",{value:!0})}));
