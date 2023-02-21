!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@lrnwebcomponents/micro-frontend-registry/micro-frontend-registry.js"),require("@lrnwebcomponents/micro-frontend-registry/lib/microServices.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/micro-frontend-registry/micro-frontend-registry.js","@lrnwebcomponents/micro-frontend-registry/lib/microServices.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).SimpleImg={},t.microFrontendRegistry_js,t.microServices_js)}(this,(function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(i=n.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?o:String(o)),n)}var i,o}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,e,r){return u=c()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&o(i,r.prototype),i},u.apply(null,arguments)}function s(t){var e="function"==typeof Map?new Map:void 0;return s=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return u(t,arguments,i(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,t)},s(t)}function a(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=f(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:r):i.value}},l.apply(this,arguments)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(y,t);var u,s,f,h,d,p=(u=y,s=c(),function(){var t,e=i(u);if(s){var r=i(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return a(this,t)});function y(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),t=p.call(this),r.enableCoreServices(),t.rendering=!1;var e=t.querySelector("img");return e||(e=t.querySelector("template")&&t.querySelector("template").content.children[0]&&"IMG"===t.querySelector("template").content.children[0].tagName?t.querySelector("template").content.children[0]:{}),t.alt=e.alt||t.alt||"",t.src=e.src||t.src||"",t.loading=e.loading||t.loading||"lazy",t.decoding=e.decoding||t.decoding||"async",t.fetchpriority=e.fetchpriority||t.fetchpriority||"high",t.width=parseInt(e.width||t.width||300),t.height=parseInt(e.height||t.height||200),t.style.display="inline-block",t.style.width=t.width+"px",t.style.height=t.height+"px",t.innerHTML=null,t.quality=t.quality||80,t}return f=y,d=[{key:"tag",get:function(){return"simple-img"}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("simple-img.umd.js",document.baseURI).href).href}},{key:"observedAttributes",get:function(){return["srcconverted","src","loading","fetchpriority","decoding","alt","quality","height","width","rotate","fit","watermark","wmspot","format"]}}],(h=[{key:"updateconvertedurl",value:function(){if(this.src){var t={height:this.height,width:this.width,quality:this.quality,src:this.src,rotate:this.rotate,fit:this.fit,watermark:this.watermark,wmspot:this.wmspot,format:this.format};this.srcconverted=e.MicroFrontendRegistry.url("@core/imgManipulate",t)}}},{key:"attributeChangedCallback",value:function(t,e,r){var n=this;if(["width","height","quality","src","rotate","fit","format","watermark","wmspot"].includes(t)&&this.updateconvertedurl(),"srcconverted"===t&&""!=this.src&&!this.rendering){this.rendering=!0;var i=new Image;i.onload=function(){n.render(n.srcconverted)},i.onerror=function(){n.render(n.src)},i.src=this.srcconverted}}},{key:"connectedCallback",value:function(){l(i(y.prototype),"connectedCallback",this)&&l(i(y.prototype),"connectedCallback",this).call(this),this.updateconvertedurl()}},{key:"render",value:function(t){this.innerHTML=null,this.innerHTML='\n    <img \n      src="'.concat(t,'" \n      height="').concat(this.height,'" \n      width="').concat(this.width,'" \n      alt="').concat(this.alt,'" \n      fetchpriority="').concat(this.fetchpriority,'"\n      decoding="').concat(this.decoding,'"\n      loading="').concat(this.loading,'"\n    />'),this.rendering=!1}},{key:"rotate",get:function(){return this.getAttribute("rotate")},set:function(t){this.setAttribute("rotate",t)}},{key:"fit",get:function(){return this.getAttribute("fit")},set:function(t){this.setAttribute("fit",t)}},{key:"watermark",get:function(){return this.getAttribute("watermark")},set:function(t){this.setAttribute("watermark",t)}},{key:"wmspot",get:function(){return this.getAttribute("wmspot")},set:function(t){this.setAttribute("wmspot",t)}},{key:"format",get:function(){return this.getAttribute("format")},set:function(t){this.setAttribute("format",t)}},{key:"height",get:function(){return this.getAttribute("height")},set:function(t){this.setAttribute("height",t)}},{key:"width",get:function(){return this.getAttribute("width")},set:function(t){this.setAttribute("width",t)}},{key:"src",get:function(){return this.getAttribute("src")},set:function(t){this.setAttribute("src",t)}},{key:"srcconverted",get:function(){return this.getAttribute("srcconverted")},set:function(t){this.setAttribute("srcconverted",t)}},{key:"loading",get:function(){return this.getAttribute("loading")},set:function(t){this.setAttribute("loading",t)}},{key:"fetchpriority",get:function(){return this.getAttribute("fetchpriority")},set:function(t){this.setAttribute("fetchpriority",t)}},{key:"quality",get:function(){return this.getAttribute("quality")},set:function(t){this.setAttribute("quality",t)}},{key:"alt",get:function(){return this.getAttribute("alt")},set:function(t){this.setAttribute("alt",t)}},{key:"baseurl",get:function(){return this.getAttribute("baseurl")},set:function(t){this.setAttribute("baseurl",t)}},{key:"decoding",get:function(){return this.getAttribute("decoding")},set:function(t){this.setAttribute("decoding",t)}}])&&n(f.prototype,h),d&&n(f,d),Object.defineProperty(f,"prototype",{writable:!1}),y}(s(HTMLElement));customElements.define(h.tag,h),t.SimpleImg=h,Object.defineProperty(t,"__esModule",{value:!0})}));
