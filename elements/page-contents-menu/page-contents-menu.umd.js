!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/simple-popover/simple-popover.js"),require("lit"),require("@lrnwebcomponents/utils/utils.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/simple-popover/simple-popover.js","lit","@lrnwebcomponents/utils/utils.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).PageContentsMenu={},null,e.$$0,e.lit,e.utils_js)}(this,(function(e,t,n,i,o){"use strict";function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var l,s,a,c,p,u,d,h=r(n);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(o=i.key,r=void 0,"symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?r:String(r)),i)}var o,r}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return v(this,n)}}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var i=k(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function S(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(k,e);var t,n,r,v=w(k);function k(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),(e=v.call(this)).relationship=null,e.fallbackText={},e.items=[],e.isEmpty=!0,e.hideIfEmpty=!1,e.position="left",e.contentContainer=null,e.mobile=!1,e.scrollPolling=200,e.hideSettings=!0,e.label="Contents",window.addEventListener("click",e.checkMenuOpen.bind(b(e))),e.hierarchyTags=["h1","h2","h3","h4","h5","h6"],e}return t=k,r=[{key:"styles",get:function(){return[i.css(d||(d=S(["\n        :host {\n          display: block;\n        }\n        :host([is-empty][hide-if-empty]) {\n          display: none;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        [hidden] {\n          display: none;\n        }\n        :host([mobile]) .wrapper,\n        :host([mobile]) .header,\n        :host([mobile]) .header .svg {\n          padding: 0;\n          margin: 0;\n        }\n        .wrapper {\n          display: inline-block;\n          padding: 8px;\n          width: 250px;\n        }\n        .header {\n          display: flex;\n          color: var(--page-contents-menu-heading-color, #9daab6);\n          padding: 0 24px 0 0;\n          margin: 0 0 8px 0;\n        }\n        .header .svg {\n          padding-right: 6px;\n          display: inline-flex;\n          color: var(--page-contents-menu-link, #74818d);\n        }\n        svg {\n          width: 1em;\n          height: 1em;\n          vertical-align: middle;\n        }\n        .header .label {\n          align-items: center;\n          display: inline-flex;\n          font-size: var(--page-contents-menu-heading-font-size, 10px);\n          font-weight: var(--page-contents-menu-heading-font-weight, 700);\n          padding: 0;\n          margin: 0;\n          line-height: 1;\n          letter-spacing: 1.2px;\n          text-transform: uppercase;\n        }\n\n        .contents {\n          margin: 0;\n          padding: 0;\n          list-style-type: none;\n          overflow-y: auto;\n          max-height: 50vh;\n        }\n        .item {\n          margin: 0;\n          display: block;\n          padding: 0;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n        .link {\n          display: flex;\n          padding: 4px 16px 4px 24px;\n          font-size: var(--page-contents-menu-link-font-size, 10px);\n          text-decoration: none;\n          font-weight: var(--page-contents-menu-link-font-weight, 500);\n          color: var(--page-contents-menu-link, #74818d);\n          cursor: pointer;\n          margin: 0px;\n          align-items: center;\n          vertical-align: middle;\n          -webkit-box-align: center;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          line-height: 24px;\n          letter-spacing: .5px;\n          transition: font .3s ease-in-out, border .1s ease-in-out;\n          border-left: rgba(0,0,0,.1) 1px solid;\n        }\n        .link:hover,\n        .link:focus {\n          text-decoration: underline;\n          color: var(--page-contents-menu-link-hover, rgb(56, 132, 255));\n          font-size: 11px;\n        }\n        .link:focus {\n          outline: 1px solid var(--page-contents-menu-link, black);\n          outline-offset: 4px;\n        }\n        .indent-1 {\n          padding-left: 8px;\n        }\n        .indent-2 {\n          padding-left: 16px;\n        }\n        .indent-3,\n        .indent-4,\n        .indent-5,\n        .indent-6 {\n          padding-left: 24px;\n        }\n        .link:active,\n        .active {\n          font-weight: bold;\n          border-left: black 3px solid;\n          font-size: 12px;\n        }\n      "])))]}},{key:"properties",get:function(){return{contentContainer:{type:Object},relationship:{type:String},items:{type:Array},position:{type:String},mobile:{type:Boolean,reflect:!0},label:{type:String},hideSettings:{type:Boolean},hideIfEmpty:{type:Boolean,attribute:"hide-if-empty",reflect:!0},isEmpty:{type:Boolean,attribute:"is-empty",reflect:!0}}}},{key:"tag",get:function(){return"page-contents-menu"}}],(n=[{key:"render",value:function(){var e=this;return i.html(l||(l=S(['\n      <section class="wrapper" role="navigation">\n        <div class="header">\n          <a\n            class="svg"\n            @click="','"\n            @keypress="','"\n            id="popovertarget"\n            aria-label="','"\n          >\n            <svg\n              preserveAspectRatio="xMidYMid meet"\n              height="1em"\n              width="1em"\n              fill="none"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n              stroke-width="2"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              stroke="currentColor"\n              class="icon-7f6730be--text-3f89f380"\n            >\n              <g>\n                <line x1="21" y1="10" x2="7" y2="10"></line>\n                <line x1="21" y1="6" x2="3" y2="6"></line>\n                <line x1="21" y1="14" x2="3" y2="14"></line>\n                <line x1="21" y1="18" x2="7" y2="18"></line>\n              </g>\n            </svg>\n          </a>\n          <simple-tooltip\n            for="popovertarget"\n            offset="32"\n            ?hidden="','"\n          >\n            ',"\n          </simple-tooltip>\n          ","\n        </div>\n        ","\n      </section>\n    "])),this.toggleSettings,this.keyToggle,this.label,!this.mobile||!this.hideSettings,this.label,this.mobile?"":i.html(s||(s=S([' <h2 class="label">',"</h2> "])),this.label),this.mobile?i.html(a||(a=S(['\n              <simple-popover\n                class="dropdown pull-left font-settings js-toolbar-action settings-container"\n                ?hidden="','"\n                position="','"\n                auto\n              >\n                <ol class="contents">\n                  ',"\n                </ol>\n              </simple-popover>\n            "])),this.hideSettings,this.position,this.items.map((function(t,n){return e.renderItem(t,n)}))):i.html(c||(c=S(['\n              <ol class="contents">\n                ',"\n              </ol>\n            "])),this.items.map((function(t,n){return e.renderItem(t,n)}))))}},{key:"keyToggle",value:function(e){["Enter","Space"].includes(e.key)&&this.toggleSettings(e)}},{key:"keyScroll",value:function(e){"Enter"==e.key&&this.scrollToObject(e)}},{key:"toggleSettings",value:function(e){this.mobile&&(this.hideSettings=!this.hideSettings)}},{key:"scrollToObject",value:function(e){var t,n=o.normalizeEventPath(e)[0];this.items&&this.contentContainer&&n.getAttribute("data-index")&&this.items[parseInt(n.getAttribute("data-index"))]&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),t=this.items[parseInt(n.getAttribute("data-index"))].item?this.items[parseInt(n.getAttribute("data-index"))].item:this.contentContainer.querySelector("#"+this.items[parseInt(n.getAttribute("data-index"))].id),void 0!==window.safari?t.scrollIntoView():t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),window.history.pushState({},null,n.getAttribute("href")),this.hideSettings=!0)}},{key:"renderItem",value:function(e,t){return null==e.link&&e.id?i.html(p||(p=S(['\n        <li class="item">\n          <a\n            class="link indent-'," ",'"\n            tabindex="0"\n            @click="','"\n            @keypress="','"\n            data-index="','"\n            >',"</a\n          >\n        </li>\n      "])),e.indent,e.active,this.scrollToObject,this.keyScroll,t,e.title):i.html(u||(u=S(['\n      <li class="item">\n        <a\n          class="link indent-'," ",'"\n          href="','"\n          @click="','"\n          @keypress="','"\n          data-index="','"\n          >',"</a\n        >\n      </li>\n    "])),e.indent,e.active,e.link,this.scrollToObject,this.keyScroll,t,e.title)}},{key:"checkMenuOpen",value:function(e){var t=o.normalizeEventPath(e)[0];!this.mobile||this.hideSettings||!t.includes||t.includes(this.__toggleTarget)||t.includes(this.shadowRoot.querySelector("simple-popover"))||(this.hideSettings=!0)}},{key:"firstUpdated",value:function(e){var t=this;x(m(k.prototype),"firstUpdated",this)&&x(m(k.prototype),"firstUpdated",this).call(this,e),"parent"==this.relationship?this.contentContainer=this.parentElement:"next"==this.relationship?this.contentContainer=this.nextElementSibling:"previous"==this.relationship&&(this.contentContainer=this.previousElementSibling),setTimeout((function(){t.updateMenu()}),1e3)}},{key:"updated",value:function(e){var t=this;x(m(k.prototype),"updated",this)&&x(m(k.prototype),"updated",this).call(this,e),e.forEach((function(e,n){"items"==n&&t[n]&&t[n].length>0&&setTimeout((function(){t.scrollFinished()}),0),"contentContainer"==n&&t._contentContainerChanged(t[n]),"mobile"==n&&(t[n]?Promise.resolve(h).then((function(e){setTimeout((function(){t.__toggleTarget=t.shadowRoot.querySelector("#popovertarget"),t.__toggleTarget.setAttribute("tabindex","0"),t.shadowRoot.querySelector("simple-popover").target=t.__toggleTarget}),0)})):e&&!t[n]&&t.__toggleTarget.removeAttribute("tabindex"))}))}},{key:"updateMenu",value:function(){for(var e=this.hierarchyTags,t=[],n=0;n<this.contentContainer.childNodes.length;n++){var i=this.contentContainer.childNodes[n];if("undefined"!==f(i.tagName)&&e.includes(i.tagName.toLowerCase())){var o=i.innerText;""==i.innerText&&this.fallbackText[i.tagName.toLowerCase()]&&(o=this.fallbackText[i.tagName.toLowerCase()]);var r={title:o,link:i.id?document.location.pathname+"#"+i.id:null,id:i.id,indent:parseInt(i.tagName.toLowerCase().replace("h","")),active:"",item:i};t.push(r)}}0===t.length?this.isEmpty=!0:this.isEmpty=!1,this.items=[].concat(t)}},{key:"_applyScrollDetect",value:function(){var e=this;clearTimeout(this.__debounce),this.__debounce=setTimeout((function(){e.scrollFinished()}),this.scrollPolling)}},{key:"scrollFinished",value:function(){var e=this;if(this.items){var t=!1,n=window.innerHeight||document.documentElement.clientHeight;if(this.items.forEach((function(i,o){if(e.contentContainer&&e.items&&e.items[o]&&e.items[o].id)try{var r=e.contentContainer.querySelector("#"+e.items[o].id);if(r){var l=r.getBoundingClientRect().top-100,s=0;s=o!==e.items.length-1&&e.items[o+1]&&e.items[o+1].id?e.contentContainer.querySelector("#"+e.items[o+1].id).getBoundingClientRect().top-100:n,l<=n&&s>0&&!t?(t=!0,e.items[o].active="active"):e.items[o].active=""}}catch(e){console.log(e)}})),!t&&this.items&&this.items.length>0&&this.contentContainer&&this.items[0]&&this.items[0].id)try{this.contentContainer.querySelector("#"+this.items[0].id).getBoundingClientRect().top>=n?this.items[0].active="active":this.items[this.items.length-1].active="active"}catch(e){console.log(e)}this.requestUpdate()}}},{key:"_contentContainerChanged",value:function(e){e&&e.childNodes&&e.childNodes.length>0&&this.updateMenu()}},{key:"connectedCallback",value:function(){x(m(k.prototype),"connectedCallback",this)&&x(m(k.prototype),"connectedCallback",this).call(this),window.addEventListener("scroll",this._applyScrollDetect.bind(this))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("scroll",this._applyScrollDetect.bind(this)),x(m(k.prototype),"disconnectedCallback",this)&&x(m(k.prototype),"disconnectedCallback",this).call(this)}}])&&g(t.prototype,n),r&&g(t,r),Object.defineProperty(t,"prototype",{writable:!1}),k}(i.LitElement);customElements.define(j.tag,j),e.PageContentsMenu=j,Object.defineProperty(e,"__esModule",{value:!0})}));
