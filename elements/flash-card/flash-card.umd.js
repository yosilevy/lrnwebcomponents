!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).FlashCard={},e.polymerElement_js,e.schemaBehaviors_js)}(this,(function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function c(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},d.apply(this,arguments)}function b(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var y,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(p,e);var n,r,c,f=u(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),e=f.call(this),setTimeout((function(){e.addEventListener("mouseenter",e._flipup.bind(s(e))),e.addEventListener("mouseleave",e._flipback.bind(s(e)))}),0),e}return n=p,c=[{key:"template",get:function(){return t.html(y||(e=['\n      <style>\n        :host {\n          display: block;\n        }\n        div.card {\n          -webkit-perspective: 800;\n          width: 400px;\n          height: 300px;\n          position: relative;\n          padding: 0;\n          margin: 0;\n          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);\n        }\n        div.card.flipped {\n          -webkit-transform: rotatex(-180deg);\n        }\n        div.card.flipped .back {\n          z-index: 3;\n        }\n        div.card {\n          -webkit-transform-style: preserve-3d;\n          -webkit-transition: 0.5s;\n        }\n        div.card .face {\n          width: 100%;\n          height: 100%;\n          padding: 0;\n          margin: 0;\n          cursor: pointer;\n          position: absolute;\n          -webkit-backface-visibility: hidden;\n          z-index: 2;\n          font-family: Georgia;\n          font-size: 48px;\n          text-align: center;\n          line-height: 200px;\n        }\n        div.card .front {\n          position: absolute;\n          z-index: 1;\n        }\n        div.card .back {\n          -webkit-transform: rotatex(-180deg);\n        }\n      </style>\n      <div class="card" id="card" animated-shadow="true">\n        <div class="face front white black-text">Front</div>\n        <div class="face back black white-text">Back</div>\n      </div>\n    '],n||(n=e.slice(0)),y=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"tag",get:function(){return"flash-card"}},{key:"properties",get:function(){return i(i({},d(a(p),"properties",this)),{},{title:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Flash card",description:"Flip the card over to learn the term",icon:"av:play-circle-filled",color:"grey",tags:["Instructional","pedagogy","media","learning","card","flash","Interactive"],handles:[],meta:{author:"HAXTheWeb core team"}},settings:{configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}}}}],(r=[{key:"_flipup",value:function(e){this.shadowRoot.querySelected("#card").classList.add("flipped")}},{key:"_flipback",value:function(e){this.shadowRoot.querySelected("#card").classList.remove("flipped")}}])&&o(n.prototype,r),c&&o(n,c),Object.defineProperty(n,"prototype",{writable:!1}),p}(n.SchemaBehaviors(t.PolymerElement));customElements.define(h.tag,h),e.FlashCard=h,Object.defineProperty(e,"__esModule",{value:!0})}));
