!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-fields/simple-fields.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-fields/simple-fields.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).HaxBodyBehaviors={},e.simpleFields_js)}(this,(function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(){r=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),s=new E(r||[]);return i(a,"_invoke",{value:S(e,n,s)}),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var p={};function f(){}function h(){}function g(){}var y={};u(y,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(j([])));v&&v!==t&&n.call(v,a)&&(y=v);var w=g.prototype=f.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function S(e,t,n){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var c=l(e,t,n);if("normal"===c.type){if(i=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i="completed",n.method="throw",n.arg=c.arg)}}}function P(e,t){var n=t.method,i=e.iterator[n];if(void 0===i)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,P(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var r=l(i,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function H(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(H,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,r=function t(){for(;++i<e.length;)if(n.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=g,i(w,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:h,configurable:!0}),h.displayName=u(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(x.prototype),u(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,i,r,o){void 0===o&&(o=Promise);var a=new x(d(t,n,i,r),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var i in t)n.push(i);return n.reverse(),function e(){for(;n.length;){var i=n.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},e.values=j,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(n,i){return a.type="throw",a.arg=e,t.next=n,i&&(t.method="next",t.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var i=n.completion;if("throw"===i.type){var r=i.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n,i,r,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(i,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function s(e){a(o,i,r,s,c,"next",e)}function c(e){a(o,i,r,s,c,"throw",e)}s(void 0)}))}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,v(i.key),i)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function h(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return h(this,n)}}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var i=y(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},m.apply(this,arguments)}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var w;l(w={alt:{defaultSettings:{element:"simple-fields-field",noWrap:!0,attributes:{autofocus:!0,required:!0}}},color:{defaultSettings:{element:"simple-fields-field",noWrap:!0,attributes:{autofocus:!0,type:"color"}}},colorpicker:{defaultSettings:{import:"@lrnwebcomponents/simple-colors/lib/simple-colors-picker.js",element:"simple-colors-picker",attributes:{autofocus:!0}}},date:{defaultSettings:{element:"simple-fields-field",noWrap:!0,attributes:{autofocus:!0,type:"date"}}},"date-time":{defaultSettings:{element:"simple-fields-field",noWrap:!0,attributes:{autofocus:!0,type:"datetime-local"}}}},"date",{defaultSettings:{element:"simple-fields-field",noWrap:!0,attributes:{autofocus:!0,type:"date"}}}),l(w,"email",{defaultSettings:{element:"simple-fields-field",noWrap:!0,attributes:{autofocus:!0,type:"email"}}}),l(w,"fileupload",{defaultSettings:{import:"@lrnwebcomponents/hax-body/lib/hax-upload-field.js",element:"hax-upload-field",noWrap:!0,attributes:{autofocus:!0},properties:{accepts:"accepts"}}}),l(w,"iconpicker",{defaultSettings:{import:"@lrnwebcomponents/simple-icon-picker/simple-icon-picker.js",element:"simple-icon-picker",attributes:{autofocus:!0,justify:!0},properties:{options:"icons"}}}),l(w,"month",{defaultSettings:{element:"simple-fields-field",noWrap:!0,attributes:{autofocus:!0,type:"month"}}}),l(w,"textarea",{defaultSettings:{element:"simple-fields-field",noWrap:!0,attributes:{autofocus:!0,type:"textarea"}}}),l(w,"time",{defaultSettings:{element:"simple-fields-field",noWrap:!0,attributes:{autofocus:!0,type:"time"}}}),l(w,"uri",{defaultSettings:{element:"simple-fields-field",noWrap:!0,attributes:{autofocus:!0,type:"file"},properties:{accepts:"accepts"}}});var b=d((function e(){var n=this;c(this,e),this.haxProperties={type:"element",editingElement:"core",canScale:!1,canPosition:!1,canEditSource:!0,settings:{configure:[],advanced:[]},wipeSlot:{}},this.setup=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;return"undefined"!==o(n.tagName)&&(t=n.tagName.toLowerCase()),window.addEventListener("hax-store-ready",n._haxStoreReady.bind(n)),"undefined"!==o(window.HaxStore)&&null!=window.HaxStore.instance&&window.HaxStore.instance.ready?n.setHaxProperties(e,t,i,!0):n.setHaxProperties(e,t,i,!1)},this._haxStoreReady=function(e){if(e.detail&&"undefined"!==o(n.tagName)&&"undefined"!==o(n.haxProperties)){var t=n.tagName,i=n.haxProperties,r=n;if(""!=t&&"undefined"===o(window.HaxStore)){var a=new CustomEvent("hax-register-properties",{bubbles:!0,composed:!0,cancelable:!0,detail:{tag:t.toLowerCase(),properties:i}});r.dispatchEvent(a)}else if(""!=t&&"undefined"===o(window.HaxStore.instance.elementList[t.toLowerCase()])){var s=new CustomEvent("hax-register-properties",{bubbles:!0,composed:!0,cancelable:!0,detail:{tag:t.toLowerCase(),properties:i}});r.dispatchEvent(s)}else if("undefined"!==o(n.tagName)&&"undefined"===o(window.HaxStore.instance.elementList[n.tagName.toLowerCase()])){var c=new CustomEvent("hax-register-properties",{bubbles:!0,composed:!0,cancelable:!0,detail:{tag:n.tagName.toLowerCase(),properties:i}});r.dispatchEvent(c)}}},this.setHaxProperties=s(r().mark((function e(){var t,i,a,s,c,u,d,l=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.length>0&&void 0!==l[0]?l[0]:{},i=l.length>1&&void 0!==l[1]?l[1]:"",a=l.length>2&&void 0!==l[2]?l[2]:document,s=l.length>3&&void 0!==l[3]&&l[3],"string"!=typeof t){e.next=8;break}return e.next=7,fetch(t).then((function(e){return!(!e||!e.json)&&e.json()}));case 7:t=e.sent;case 8:if("undefined"===o(t.api)&&(t.api="1"),"1"==t.api){if("undefined"===o(t.type)&&(t.type="element"),"undefined"===o(t.editingElement)&&(t.editingElement="core"),"undefined"===o(t.canPosition)&&(t.canPosition=!0),"undefined"===o(t.canScale)&&(t.canScale=!0),"undefined"===o(t.canEditSource)&&(t.canEditSource=!1),"undefined"===o(t.contentEditable)&&(t.contentEditable=!1),"undefined"===o(t.gizmo)?t.gizmo=!1:"undefined"!==o(t.gizmo.iconLib)&&(c=window.WCGlobalBasePath?window.WCGlobalBasePath:new URL("./../../../","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("hax-body-behaviors.umd.js",document.baseURI).href).href,import("".concat(c).concat(t.gizmo.iconLib))),"undefined"!==o(t.settings)){for("undefined"===o(t.settings.configure)&&(t.settings.configure=[]),u=0;u<t.settings.configure.length;u++)t.settings.configure[u]=n.validateSetting(t.settings.configure[u]),t.settings.configure[u]||t.settings.configure.splice(u,1);for("undefined"===o(t.settings.advanced)&&(t.settings.advanced=[]),d=0;d<t.settings.advanced.length;d++)t.settings.advanced[d]=n.validateSetting(t.settings.advanced[d]),t.settings.advanced[d]||t.settings.advanced.splice(d,1);t=n.standardAdvancedProps(t)}"undefined"===o(t.saveOptions)&&(t.saveOptions={wipeSlot:!1}),"undefined"===o(t.demoSchema)&&(t.demoSchema=[]),s&&n.readyToFireHAXSchema(i,t,a),""===i&&("function"==typeof n._setHaxProperties?n._setHaxProperties(t):n.haxProperties=t)}else console.warn("This is't a valid usage of hax API. See hax-body-behaviors/lib/HAXWiring.js for more details on how to implement the API. https://haxtheweb.org/hax-schema for details but we will try and guess the wiring");case 10:case"end":return e.stop()}}),e)}))),this.readyToFireHAXSchema=function(e,t,i){if(""!=e&&"undefined"===o(window.HaxStore)){var r=new CustomEvent("hax-register-properties",{bubbles:!0,composed:!0,cancelable:!0,detail:{tag:e.toLowerCase(),properties:t}});i.dispatchEvent(r)}else if(""!=e){var a=new CustomEvent("hax-register-properties",{bubbles:!0,composed:!0,cancelable:!0,detail:{tag:e.toLowerCase(),properties:t}});i.dispatchEvent(a)}else if("undefined"!==o(n.tagName)){var s=new CustomEvent("hax-register-properties",{bubbles:!0,composed:!0,cancelable:!0,detail:{tag:n.tagName.toLowerCase(),properties:t}});i.dispatchEvent(s)}else if("undefined"!==o(i.tagName)){var c=new CustomEvent("hax-register-properties",{bubbles:!0,composed:!0,cancelable:!0,detail:{tag:i.tagName.toLowerCase(),properties:t}});i.dispatchEvent(c)}else console.warn(i),console.warn("".concat(e," missed our checks and has an issue in implementation with HAX"))},this.standardAdvancedProps=function(e){return e.settings.advanced.push({attribute:"data-hax-lock",title:"Lock editing",description:"Prevent changes to this element and all its content",inputMethod:"boolean"}),e.settings.advanced.push({attribute:"class",title:"Classes",description:"CSS classes applied manually to the element",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"style",title:"Styles",description:"Custom CSS styles as applied to the element",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"prefix",title:"Schema: prefix",description:"Schema prefixes",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"typeof",title:"Schema: TypeOf",description:"typeof definition for Schema usage",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"property",title:"Schema: Property",description:"typeof definition for Schema usage",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"resource",title:"Schema: Resource ID",description:"Schema resource identifier",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"id",title:"ID",description:"element ID, only set this if you know why",inputMethod:"textfield"}),e.settings.advanced.push({attribute:"slot",title:"slot",description:"DOM slot area",inputMethod:"textfield"}),e},this.validateSetting=function(e){return("undefined"!==o(e.property)||"undefined"!==o(e.slot)||"undefined"!==o(e.attribute))&&("undefined"===o(e.title)&&("undefined"===o(e.attribute)?e.title=e.property:e.title=e.attribute),"undefined"===o(e.description)&&(e.description=""),"undefined"===o(e.inputMethod)&&(e.inputMethod="textfield"),"undefined"===o(e.type)&&(e.type="settings"),"undefined"===o(e.icon)&&(e.icon="android"),"undefined"===o(e.options)&&(e.options={}),"undefined"===o(e.required)&&(e.required=!1),"undefined"===o(e.disabled)&&(e.disabled=!1),"undefined"===o(e.validation)&&(e.validation=".*"),"undefined"===o(e.validationType)&&(e.validationType=""),"undefined"!==o(e.slot)&&("undefined"===o(e.slotWrapper)&&(e.slotWrapper="span"),"undefined"===o(e.slotAttributes)&&(e.slotAttributes={})),e)},this.getHaxProperties=function(){return n.haxProperties},this.getHaxJSONSchema=function(e,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;"undefined"===o(e)&&(e="configure"),"undefined"===o(i)&&(i=r.haxProperties);var a=i.settings[e],s={$schema:"http://json-schema.org/schema#",title:"HAX "+e+" form schema",type:"object",properties:{}};if(s.properties=(new t.SimpleFields).fieldsToSchema(a),i.gizmo&&i.gizmo.tag&&window.customElements.get(i.gizmo.tag)){var c=document.createElement(i.gizmo.tag);s="function"==typeof c.postProcessgetHaxJSONSchema?c.postProcessgetHaxJSONSchema(s):r.postProcessgetHaxJSONSchema(s)}else s=r.postProcessgetHaxJSONSchema(s);return s},this.postProcessgetHaxJSONSchema=function(e){return e},this._getHaxJSONSchemaProperty=function(e){return(new t.SimpleFields).fieldsToSchema(e)},this.getHaxJSONSchemaType=function(e){var n=(new t.SimpleFields).fieldsConversion.inputMethod[e]||(new t.SimpleFields).fieldsConversion;return n&&n.defaultSettings&&n.defaultSettings.type?n.defaultSettings.type:"string"},this.validHAXPropertyInputMethod=function(){return Object.keys((new t.SimpleFields).fieldsConversion.inputMethod)},this.prototypeHaxProperties=function(){return{api:"1",canScale:!0,canPosition:!0,canEditSource:!0,contentEditable:!1,gizmo:{title:"Tag name",description:"",icon:"icons:android",color:"purple",tags:["Content"],handles:[{type:"data",type_exclusive:!1,url:"src"}],meta:{author:"auto"},requiresChildren:!1,requiresParent:!1},settings:{configure:[{slot:"",title:"Inner content",description:"The slotted content that lives inside the tag",inputMethod:"textfield",icon:"android",required:!0,validationType:"text"},{slot:"button",title:"Button content",description:"The content that can override the button",inputMethod:"textfield",icon:"android",required:!0,validationType:"text"},{property:"title",title:"Title",description:"",inputMethod:"textfield",icon:"android",required:!0,validationType:"text"},{property:"primaryColor",title:"Title",description:"",inputMethod:"textfield",icon:"android",required:!1,validation:".*",validationType:"text"}],advanced:[{property:"secondaryColor",title:"Secondary color",description:"An optional secondary color used in certain edge cases.",inputMethod:"colorpicker",icon:"color"},{property:"endPoint",title:"API endpoint",description:"An optional endpoint to hit and load in more data dymaically.",inputMethod:"textfield",icon:"android",validation:"[a-z0-9]",validationType:"url"}]},saveOptions:{wipeSlot:!1,unsetAttributes:["end-point","secondary-color"]},demoSchema:[{tag:"my-tag",content:"<p>inner html</p>",properties:{endPoint:"https://cdn2.thecatapi.com/images/9j5.jpg",primaryColor:"yellow",title:"A cat"}}]}}}));window.HAXWiring=new b,window.HAXBehaviors=window.HAXBehaviors||{},window.HAXBehaviors.PropertiesBehaviors={properties:{haxProperties:window.HAXWiring.haxProperties},setHaxProperties:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;return""==t&&"undefined"!==o(this.tagName)&&(t=this.tagName.toLowerCase()),window.addEventListener("hax-store-ready",this._haxStoreReady.bind(this)),"undefined"!==o(window.HaxStore)&&null!=window.HaxStore.instance&&window.HaxStore.instance.ready?window.HAXWiring.setHaxProperties(e,t,n,!0):window.HAXWiring.setHaxProperties(e,t,n,!1)},_haxStoreReady:function(e){return window.HAXWiring._haxStoreReady(e)},validateSetting:function(e){return window.HAXWiring.validateSetting(e)},getHaxProperties:function(){return this.haxProperties},getHaxJSONSchema:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;return window.HAXWiring.getHaxJSONSchema(e,t,n)},postProcessgetHaxJSONSchema:function(e){return window.HAXWiring.postProcessgetHaxJSONSchema(e)},_getHaxJSONSchemaProperty:function(e){return(new t.SimpleFields).fieldsToSchema(e)},getHaxJSONSchemaType:function(e){return window.HAXWiring.getHaxJSONSchemaType(e)},validHAXPropertyInputMethod:function(){return window.HAXWiring.validHAXPropertyInputMethod()},prototypeHaxProperties:function(){return window.HAXWiring.prototypeHaxProperties()}},e.HAXElement=function(e){return function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(r,e);var n=g(r);function r(){var e;return c(this,r),(e=n.call(this)).HAXWiring=new b,e}return d(r,[{key:"setHaxProperties",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;return""==t&&"undefined"!==o(this.tagName)&&(t=this.tagName.toLowerCase()),window.HaxStore&&null!=window.HaxStore.instance&&window.HaxStore.instance.ready?this.HAXWiring.setHaxProperties(e,t,n,!0):(window.addEventListener("hax-store-ready",this._haxStoreReady.bind(this)),this.HAXWiring.setHaxProperties(e,t,n,!1))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("hax-store-ready",this._haxStoreReady.bind(this)),m(p(r.prototype),"disconnectedCallback",this)&&m(p(r.prototype),"disconnectedCallback",this).call(this)}},{key:"setup",value:function(e){return this.HAXWiring.setup(e,"",this)}},{key:"_haxStoreReady",value:function(e){return this.HAXWiring._haxStoreReady(e)}},{key:"validateSetting",value:function(e){return this.HAXWiring.validateSetting(e)}},{key:"getHaxProperties",value:function(){return this.haxProperties}},{key:"getHaxJSONSchema",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;return this.HAXWiring.getHaxJSONSchema(e,t,n)}},{key:"postProcessgetHaxJSONSchema",value:function(e){return this.HAXWiring.postProcessgetHaxJSONSchema(e)}},{key:"_getHaxJSONSchemaProperty",value:function(e){return(new t.SimpleFields).fieldsToSchema(e)}},{key:"getHaxJSONSchemaType",value:function(e){return this.HAXWiring.getHaxJSONSchemaType(e)}},{key:"validHAXPropertyInputMethod",value:function(){return this.HAXWiring.validHAXPropertyInputMethod()}},{key:"prototypeHaxProperties",value:function(){return this.HAXWiring.prototypeHaxProperties()}}],[{key:"properties",get:function(){return i(i({},m(p(r),"properties",this)),{},{haxProperties:window.HAXWiring.haxProperties})}}]),r}(e)},e.HAXWiring=b,Object.defineProperty(e,"__esModule",{value:!0})}));
