!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],e):e((t=t||self).TwitterEmbed={},t.litElement_js)}(this,function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var o=r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a(this,n)}}function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function c(){var t=l(["\n        :host([contenteditable]) iframe {\n          pointer-events: none;\n        }\n      "]);return c=function(){return t},t}function s(){var t=l(['\n      <div\n        class="twitter-tweet twitter-tweet-rendered"\n        style="display: flex; max-width: ','; width: 100%; margin-top: 10px; margin-bottom: 10px;"\n      >\n        <iframe\n          sandbox="allow-same-origin allow-scripts ','"\n          scrolling="no"\n          frameborder="0"\n          loading="lazy"\n          allowtransparency="true"\n          allowfullscreen\n          style="position: static; visibility: visible; width: ','; height: 498px; display: block; flex-grow: 1;"\n          title="Twitter Tweet"\n          src="https://platform.twitter.com/embed/index.html?dnt=true&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=',"&amp;lang=","&amp;theme=","&amp;widgetsVersion=223fc1c4%3A1596143124634&amp;width=",'"\n          data-tweet-id="','"\n        >\n        </iframe>\n      </div>\n    ']);return s=function(){return t},t}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(r,e.LitElement);var n=u(r);function r(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(t=n.call(this)).lang=document&&document.documentElement&&document.documentElement.lang?document.documentElement.lang:"en",t.dataWidth="550px",t.dataTheme="light",t.tweet=null,t.tweetId=null,t.allowPopups="allow-popups",t}return i(r,null,[{key:"tag",get:function(){return"twitter-embed"}}]),i(r,[{key:"updated",value:function(t){var e=this;t.forEach(function(t,n){"noPopups"===n&&(e[n]?e.allowPopups="":e.allowPopups="allow-popups"),"tweet"===n&&e[n]&&e[n].includes("twitter.com")&&(e.tweetId=e[n].split("/").pop())})}},{key:"render",value:function(){return e.html(s(),this.dataWidth,this.allowPopups,this.dataWidth,this.tweetId,this.lang,this.dataTheme,this.dataWidth,this.tweetId)}}],[{key:"properties",get:function(){return{tweet:{type:String},lang:{type:String},dataWidth:{type:String,attribute:"data-width"},dataTheme:{type:String,attribute:"data-theme"},tweetId:{type:String,attribute:"tweet-id"},noPopups:{type:Boolean,attribute:"no-popups"},allowPopups:{type:String}}}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Twitter embed",description:"Embed a tweet from twitter in context",icon:"hax:meme",color:"blue",groups:["Social Media"],handles:[],meta:{author:"ELMS:LN"}},settings:{quick:[],configure:[{attribute:"tweet",title:"Tweet URL",description:"URL of the tweet in question to be embedded",inputMethod:"textfield"},{attribute:"data-theme",title:"Theme",description:"Light or dark version of twitter tweets",inputMethod:"select",options:{light:"Light",dark:"Dark"}},{attribute:"no-popups",title:"Prevent popup on click",description:"This blocks the user from clicking the tweet and going to twitter.com",inputMethod:"boolean"}],advanced:[]},demoSchema:[{tag:"twitter-embed",content:"",properties:{tweet:"https://twitter.com/btopro/status/1298632260707639298"}}]}}},{key:"styles",get:function(){return[e.css(c())]}}]),r}();customElements.define(p.tag,p),t.TwitterEmbed=p,Object.defineProperty(t,"__esModule",{value:!0})});
