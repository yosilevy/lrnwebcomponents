!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-colors/simple-colors.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).PersonTestimonial={},e.lit,e.simpleColors_js)}(this,(function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function s(e,n,t){return(n=g(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function c(e,n){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},c(e,n)}function p(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return p(this,t)}}function f(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=l(e)););return e}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var r=f(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},d.apply(this,arguments)}function m(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}var h,v,w,x=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&c(e,n)}(f,e);var t,r,s,p=u(f);function f(){return i(this,f),p.apply(this,arguments)}return t=f,s=[{key:"styles",get:function(){return[].concat(y(d(l(f),"styles",this)),[n.css(w||(w=m(["\n        :host {\n          display: block;\n          --person-testimonial-font-family: sans-serif;\n          --person-testimonial-bg: var(--simple-colors-default-theme-grey-1);\n          --person-testimonial-color: var(\n            --simple-colors-default-theme-accent-7\n          );\n          --person-testimonial-text: var(--simple-colors-default-theme-grey-12);\n        }\n\n        div.card {\n          display: inline-flex;\n          background-color: var(--person-testimonial-bg);\n          color: var(--person-testimonial-text);\n          font-family: var(--person-testimonial-font-family);\n          box-shadow: 0 2px 2px rgba(59, 43, 91, 0.7);\n        }\n\n        .image img {\n          display: block;\n          width: 150px;\n          height: 100%;\n        }\n        .image img {\n          max-width: 200px;\n        }\n        .image {\n          padding-right: 5px;\n          background-color: var(--person-testimonial-color);\n        }\n\n        svg {\n          fill: var(--person-testimonial-color);\n          height: 24px;\n          width: 24px;\n        }\n\n        .wrap {\n          margin: 15px;\n        }\n\n        .testimonial {\n          line-height: 24px;\n          font-size: 16px;\n          font-style: italic;\n        }\n\n        .name {\n          font-size: 21px;\n          text-transform: uppercase;\n          font-weight: bold;\n          margin-top: 20px;\n        }\n\n        .position {\n          font-size: 14px;\n          margin-top: 5px;\n        }\n\n        .arrow_right {\n          width: 0;\n          height: 0;\n          border-top: 15px solid var(--person-testimonial-bg);\n          border-bottom: 15px solid var(--person-testimonial-bg);\n          border-left: solid 15px transparent;\n          background-color: var(--person-testimonial-color);\n          position: relative;\n          top: 55px;\n        }\n\n        #quotestart {\n          display: inline-flex;\n          transform: rotateY(180deg);\n        }\n\n        #quoteend {\n          display: inline-flex;\n        }\n        @media screen and (max-width: 850px) {\n          div.card {\n            display: flex;\n            flex-wrap: wrap;\n          }\n          .image img {\n            display: block;\n            border-radius: 50%;\n            width: 200px;\n            height: 200px;\n          }\n          .image {\n            margin-top: 25px;\n            border-radius: 50%;\n            padding: 5px;\n            margin-left: auto;\n            margin-right: auto;\n          }\n          .arrow_right {\n            display: none;\n          }\n          .name,\n          .position {\n            text-align: center;\n          }\n        }\n        @media screen and (max-width: 600px) {\n          .image img {\n            width: 150px;\n            height: 150px;\n          }\n        }\n      "])))])}},{key:"tag",get:function(){return"person-testimonial"}},{key:"properties",get:function(){return o(o({},d(l(f),"properties",this)),{},{describedBy:{type:String,attribute:"described-by"},image:{type:String},name:{type:String},position:{type:String}})}},{key:"haxProperties",get:function(){return new URL("./lib/person-testimonial.haxProperties.json","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("person-testimonial.umd.js",document.baseURI).href).href}}],(r=[{key:"render",value:function(){return n.html(h||(h=m(['\n      <div class="card">\n        ','\n        <div class="arrow_right"></div>\n        <div class="wrap">\n          <div class="testimonial">\n            <svg id="quotestart">\n              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>\n            </svg>\n            <slot></slot>\n            <svg id="quoteend">\n              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>\n            </svg>\n          </div>\n          <div class="name">','</div>\n          <div class="position">',"</div>\n        </div>\n      </div>\n    "])),this.image?n.html(v||(v=m(['\n        <div class="image">\n          <img\n            src="','"\n            loading="lazy"\n            aria-describedby="','"\n          />\n        </div>'])),this.image,this.describedBy):"",this.name,this.position)}}])&&a(t.prototype,r),s&&a(t,s),Object.defineProperty(t,"prototype",{writable:!1}),f}(t.SimpleColors);customElements.define(x.tag,x),e.PersonTestimonial=x,Object.defineProperty(e,"__esModule",{value:!0})}));
