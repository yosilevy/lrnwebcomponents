!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/responsive-utility/lib/responsive-utility-behaviors.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/responsive-utility/lib/responsive-utility-behaviors.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js"],n):n((t=t||self).A11yTabs={},t.litElement_js,t.responsiveUtilityBehaviors_js)}(this,function(t,n,e){"use strict";function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach(function(n){i(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function c(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,n){return(u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function d(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function f(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,a=b(t);if(n){var o=b(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return d(this,e)}}function p(t,n,e){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var a=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=b(t)););return t}(t,n);if(a){var o=Object.getOwnPropertyDescriptor(a,n);return o.get?o.get.call(e):o.value}})(t,n,e||t)}function y(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function h(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return v(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return v(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function g(){var t=y(["\n        :host {\n          display: block;\n          margin-bottom: var(--a11y-tabs-content-padding);\n          border: 1px solid var(--a11y-tabs-border-color);\n          padding: var(--a11y-tabs-content-padding);\n        }\n        .sr-only {\n          position: absolute;\n          left: -99999px;\n          height: 0;\n          overflow: hidden;\n        }\n        .label-heading {\n          display: flex;\n          align-items: center;\n          color: var(--a11y-tabs-selected-color, var(--a11y-tabs-focus-color));\n          background-color: var(--a11y-tabs-background);\n          font-weight: var(--a11y-tabs-selected-font-weight, normal);\n          border-bottom: 1px solid var(--a11y-tabs-border-color);\n          margin: 0 0 calc(var(--a11y-tabs-content-padding) / 2);\n          padding: 0 0 calc(var(--a11y-tabs-content-padding) / 2);\n          border-radius: var(--a11y-tabs-horizontal-border-radius, 2px)\n            var(--a11y-tabs-horizontal-border-radius, 2px) 0 0;\n        }\n        simple-icon-lite {\n          margin-right: 1em;\n        }\n        @media screen {\n          :host {\n            border: none;\n            height: var(--a11y-tabs-tab-height, --a11y-tabs-height);\n            overflow: var(--a11y-tabs-tab-overflow, --a11y-tabs-overflow);\n            margin-bottom: unset;\n          }\n          :host([inactive]) {\n            display: none;\n          }\n          #content-inner {\n            max-width: 100%;\n            overflow: auto;\n          }\n          .label-heading {\n            display: none;\n          }\n        }\n      "]);return g=function(){return t},t}function m(){var t=y(['\n      <span class="sr-only">Tab ','</span>\n      <div class="label-heading" part="heading">\n        <simple-icon-lite\n          class="icon"\n          ?hidden="','"\n          .icon="','"\n          part="icon"\n        >\n        </simple-icon-lite>\n        <slot name="label" ?hidden="','"></slot>\n        <div class="label" part="label">','</div>\n      </div>\n      <div id="content-inner" part="content"><slot></slot></div>\n      <span class="sr-only">\n        End of tab ','. Back to <a href="#','">tabs</a>.\n      </span>\n    ']);return m=function(){return t},t}var k=function(t){c(o,n.LitElement);var e=f(o);function o(){var t;return a(this,o),(t=e.call(this)).disabled=!1,t.hidden=!1,t.order=1,t.role="tabpanel",t.total=1,t.tabindex=0,t.flag="",t.addEventListener("a11y-tab-flag",function(n){return t.handleFlag(n)}),t}return r(o,[{key:"render",value:function(){return n.html(m(),this.xOfY,!this.icon,this.icon,!this.label,this.label,this.xOfY,this.id)}}],[{key:"styles",get:function(){return[n.css(g())]}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!0,canEditSource:!0,gizmo:{title:"Tab",description:"A single tab.",icon:"view-day",color:"grey",groups:["Content","Presentation","Tabs"]},settings:{configure:[{property:"icon",title:"Tab Icon",inputMethod:"iconpicker"},{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"label",title:"Tab Label",inputMethod:"textfield"},{slot:"",title:"Tab Content",description:"A content of the tab.",inputMethod:"code-editor"}],advanced:[{property:"id",title:"Unique ID",inputMethod:"textfield"},{property:"flag",title:"Optional Flag Text",inputMethod:"textfield"},{property:"flagIcon",title:"Optional Flag Icon",inputMethod:"iconpicker"}]}}}},{key:"properties",get:function(){return{ariaLabelledby:{type:String,reflect:!0,attribute:"aria-labelledby"},flag:{type:String,reflect:!0},flagIcon:{type:String,attribute:"flag-icon"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},icon:{type:String},id:{type:String,reflect:!0,attribute:"id"},inactive:{type:Boolean,reflect:!0,attribute:"inactive"},label:{type:String},order:{type:Number},role:{type:String,reflect:!0,attribute:"role"},tabindex:{type:Number},total:{type:Number}}}}]),r(o,[{key:"connectedCallback",value:function(){p(b(o.prototype),"connectedCallback",this).call(this),this._labelChanged(),this.observer.observe(this,{childList:!0})}},{key:"disconnectedCallback",value:function(){var t=this;this.observer.disconnect(),this.removeEventListener("a11y-tab-flag",function(n){return t.handleFlag(n)}),this._fireTabChanged(),p(b(o.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(t){var n=this;t.forEach(function(t,e){["id","order"].includes(e)&&!n.id&&(n.id="tab-".concat(n.order)),["label","order"].includes(e)&&!n.label&&n._labelChanged(),"flag"===e&&n._fireTabChanged(),"flagIcon"===e&&n._fireTabChanged(),"icon"===e&&n._fireTabChanged(),"id"===e&&(n.ariaLabelledby="".concat(n.id,"-button"),n._fireTabChanged()),"label"===e&&n._fireTabChanged(),"disabled"===e&&n.disabled&&n._fireTabChanged()})}},{key:"_handleFlag",value:function(t){this.flag=t.detail.flag,this.flagIcon=t.detail.flagIcon}},{key:"_labelChanged",value:function(){this.label&&""!==this.label.trim()||(this.label=this.querySelector('*[slot="label"]')?this.querySelector('*[slot="label"]').innerHTML:"Tab ".concat(this.order))}},{key:"_fireTabChanged",value:function(){this.dispatchEvent(new CustomEvent("a11y-tab-changed",{bubbles:!0,cancelable:!0,composed:!1,detail:this}))}},{key:"observer",get:function(){var t=this;return new MutationObserver(function(n){return t._labelChanged()})}},{key:"xOfY",get:function(){return"".concat(this.order," of ").concat(this.total)}}],[{key:"tag",get:function(){return"a11y-tab"}}]),o}();function _(){var t=y(['\n      <simple-tooltip for="','-button" part="tooltip">\n        ',"\n      </simple-tooltip>\n    "]);return _=function(){return t},t}function w(){var t=y([' <span class="label" part="label">',"</span> "]);return w=function(){return t},t}function x(){var t=y(['\n          <simple-icon-lite\n            class="icon"\n            ?hidden="','"\n            .icon="','"\n            part="icon"\n          >\n          </simple-icon-lite>\n        ']);return x=function(){return t},t}function T(){var t=y(['\n          <simple-icon-lite\n            class="icon"\n            ?hidden="','"\n            .icon="','"\n            .title="','"\n            part="icon"\n          >\n          </simple-icon-lite>\n        ']);return T=function(){return t},t}function O(){var t=y(['\n      <span class="flag-type" ?hidden="','" part="flag">\n        ',"\n      </span>\n    "]);return O=function(){return t},t}function j(){var t=y(['\n      <button\n        id="','-button"\n        aria-selected="','"\n        aria-controls="','"\n        class="','"\n        .flag="','"\n        @click="','"\n        @keydown="','"\n        ?disabled="','"\n        tabindex="','"\n        role="tab"\n        part="','"\n      >\n        '," ","\n        "," ","\n      </button>\n      ","\n    "]);return j=function(){return t},t}function S(){var t=y(['\n        :host {\n          font-size: var(--a11y-tabs-font-size, unset);\n          font-family: var(--a11y-tabs-font-family, unset);\n          --a11y-tabs-focus-color: var(--a11y-tabs-color);\n          --a11y-tabs-horizontal-border-radius: var(\n            --a11y-tabs-border-radius,\n            2px\n          );\n          --a11y-tabs-vertical-border-radius: var(\n            --a11y-tabs-border-radius,\n            2px\n          );\n          --a11y-tabs-vertical-button-padding: var(\n            --a11y-tabs-button-padding,\n            4px\n          );\n          --a11y-tabs-horizontal-button-padding: var(\n            --a11y-tabs-button-padding,\n            4px\n          );\n        }\n        @media screen {\n          :host([vertical]) {\n            border-radius: var(--a11y-tabs-vertical-border-radius, 2px);\n            border: 1px solid var(--a11y-tabs-border-color, #ddd);\n          }\n\n          #content {\n            border: 1px solid var(--a11y-tabs-border-color, #ddd);\n            padding: var(--a11y-tabs-content-padding, 16px);\n            background-color: var(--a11y-tabs-content-background);\n          }\n\n          #tabs {\n            background-color: var(--a11y-tabs-horizontal-background);\n            font-family: var(\n              --a11y-tabs-tab-font-family,\n              var(--a11y-tabs-font-family, unset)\n            );\n            font-size: var(\n              --a11y-tabs-tab-font-size,\n              var(--a11y-tabs-font-size, unset)\n            );\n          }\n\n          :host([vertical]) #tabs {\n            border-left: none;\n            background-color: var(--a11y-tabs-vertical-background);\n            justify-content: var(--a11y-tabs-vertical-justify-tabs);\n          }\n\n          :host([vertical]) #tabs button {\n            padding: var(--a11y-tabs-vertical-button-padding);\n            border-radius: 0;\n          }\n\n          :host([vertical]) #content {\n            border: none;\n          }\n          :host(:not([vertical])) #content {\n            border-radius: var(--a11y-tabs-horizontal-border-radius, 2px);\n          }\n\n          #tabs button {\n            text-transform: unset;\n            color: var(--a11y-tabs-faded-color, #333);\n            border: 1px solid var(--a11y-tabs-border-color);\n            background-color: var(--a11y-tabs-faded-background, #f8f8f8);\n            padding: var(--a11y-tabs-horizontal-button-padding);\n            font-weight: var(--a11y-tabs-font-weight, normal);\n            border-radius: var(--a11y-tabs-horizontal-border-radius, 2px)\n              var(--a11y-tabs-horizontal-border-radius, 2px) 0 0;\n          }\n\n          button .label {\n            text-decoration: var(--a11y-tabs-text-decoration, none);\n          }\n\n          :host(:not([vertical])) #tabs button {\n            border-top-color: var(--a11y-tabs-border-accent);\n          }\n\n          :host(:not([vertical])) #tabs li:not(:first-of-type) button {\n            border-left: none;\n          }\n\n          :host([vertical]) #tabs button {\n            border-top: none;\n            border-left-color: var(--a11y-tabs-border-accent);\n          }\n\n          #tabs button:focus,\n          #tabs button:hover {\n            color: var(--a11y-tabs-focus-color);\n            font-weight: var(--a11y-tabs-focus-font-weight, normal);\n          }\n\n          button:focus .label,\n          button:hover .label {\n            text-decoration: var(--a11y-tabs-focus-text-decoration, underline);\n          }\n\n          :host(:not([vertical])) #tabs button:focus,\n          :host(:not([vertical])) #tabs button:hover {\n            border-top-color: var(--a11y-tabs-focus-border-accent);\n          }\n\n          :host([vertical]) #tabs button:focus,\n          :host([vertical]) #tabs button:hover {\n            border-left-color: var(--a11y-tabs-focus-border-accent);\n          }\n\n          #tabs button[aria-selected="true"] {\n            font-weight: var(--a11y-tabs-selected-font-weight, normal);\n            color: var(\n              --a11y-tabs-selected-color,\n              var(--a11y-tabs-focus-color)\n            );\n            background-color: var(--a11y-tabs-background);\n          }\n\n          button[aria-selected="true"] .label {\n            text-decoration: var(--a11y-tabs-selected-text-decoration, none);\n          }\n\n          :host(:not([vertical])) #tabs button[aria-selected="true"] {\n            border-bottom-color: var(--a11y-tabs-background);\n            border-top-color: var(--a11y-tabs-selected-border-accent);\n          }\n\n          :host([vertical]) #tabs button[aria-selected="true"] {\n            border-right-color: var(--a11y-tabs-background);\n            border-left-color: var(--a11y-tabs-selected-border-accent);\n          }\n\n          #tabs button[disabled] {\n            color: var(--a11y-tabs-disabled-color, #999);\n            background-color: var(--a11y-tabs-disabled-background, #eee);\n          }\n\n          #tabs button[disabled]:focus,\n          #tabs button[disabled]:hover {\n            color: unset;\n            font-weight: unset;\n          }\n\n          button[disabled]:focus .label,\n          button[disabled]:hover .label {\n            text-decoration: none;\n          }\n\n          :host(:not([vertical])) #tabs button[disabled] {\n            border-left-color: var(--a11y-tabs-disabled-border-accent, unset);\n          }\n\n          :host([vertical]) #tabs button[disabled] {\n            border-top-color: var(--a11y-tabs-disabled-border-accent, unset);\n          }\n        }\n      ']);return S=function(){return t},t}function C(){var t=y(["\n        :host {\n          display: block;\n          height: var(--a11y-tabs-height);\n          overflow: var(--a11y-tabs-overflow);\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        #tabs {\n          display: none;\n        }\n        @media screen {\n          :host([vertical]) {\n            border-radius: var(--a11y-tabs-vertical-border-radius, 2px);\n            display: flex;\n            justify-content: space-between;\n            align-items: stretch;\n          }\n          #content {\n            flex: 1 1 calc(100% - 2 * var(--a11y-tabs-content-padding, 16px));\n            overflow: auto;\n          }\n          #tabs {\n            align-items: stretch;\n            flex-wrap: var(--a11y-tabs-wrap, unset);\n            margin: 0;\n            display: flex;\n            list-style: none;\n            padding: 0;\n            overflow: auto;\n            max-width: 100%;\n            overflow-x: auto;\n            z-index: 1;\n            justify-content: var(--a11y-tabs-horizontal-justify-tabs);\n          }\n          :host([vertical]) #tabs {\n            flex: 0 0 auto;\n            flex-direction: column;\n            overflow-y: auto;\n            max-width: unset;\n            overflow-x: unset;\n            z-index: unset;\n            flex-wrap: var(--a11y-tabs-vertical-wrap);\n          }\n          :host([sticky]) #tabs {\n            position: sticky;\n            top: 0;\n          }\n          #tabs li {\n            display: flex;\n            align-items: stretch;\n          }\n          :host([full-width]) #tabs li {\n            width: 100%;\n          }\n          :host([vertical]) #tabs li {\n            flex-direction: column;\n          }\n          #tabs .flag-type {\n            position: absolute;\n            left: -99999px;\n            height: 0;\n            overflow: hidden;\n          }\n          :host(:not([vertical])) #content {\n            margin-top: -1px;\n          }\n          #tabs button {\n            width: 100%;\n            min-width: unset;\n            margin: 0;\n          }\n\n          :host([vertical]) #tabs button {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n          }\n\n          #tabs button[disabled] {\n            pointer-events: none;\n          }\n\n          #tabs span.label,\n          #tabs .flag-icon {\n            margin-right: 8px;\n          }\n\n          :host([icons-only]) #tabs button {\n            justify-content: center;\n          }\n\n          :host([icons-only]) #tabs span.label {\n            display: none;\n          }\n\n          :host(:not([icons-only])) #tabs #tabs simple-tooltip {\n            display: none;\n          }\n          simple-icon-lite:not([hidden]) {\n            display: inline-block;\n          }\n\n          simple-icon-lite[hidden] {\n            display: none;\n          }\n        }\n      "]);return C=function(){return t},t}function A(){var t=y(['\n            <li part="tablist-item">',"</li>\n          "]);return A=function(){return t},t}function z(){var t=y([' <ul id="tabs" role="tablist" part="tablist">\n        ','\n      </ul>\n      <div id="content" part="content">\n        <slot></slot>\n      </div>']);return z=function(){return t},t}window.customElements.define(k.tag,k);var B=function(t){c(i,e.ResponsiveUtilityBehaviors(n.LitElement));var o=f(i);function i(){var t;return a(this,i),(t=o.call(this)).fullWidth=!1,t.disableResponsive=!1,t.disabled=!1,t.hidden=!1,t.__tabs=[],t.__tabFocus=0,t.addEventListener("a11y-tab-changed",function(n){return t.updateTabs()}),t}return r(i,[{key:"render",value:function(){var t=this;return n.html(z(),this.tabs.map(function(e,a){return n.html(A(),t._tabButton(e,a))}))}}],[{key:"A11yTabsCoreStyles",get:function(){return[n.css(C())]}},{key:"A11yTabsThemeStyles",get:function(){return[n.css(S())]}},{key:"styles",get:function(){return[].concat(h(this.A11yTabsCoreStyles),h(this.A11yTabsThemeStyles))}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!0,canEditSource:!0,gizmo:{title:"Tabs",description:"A set of tabs.",icon:"view-day",color:"grey",groups:["Content","Presentation","Tabs"]},settings:{configure:[{property:"ariaLabel",title:"Label (for accesibility)",inputMethod:"textfield"},{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"hidden",title:"Hidden",inputMethod:"boolean"},{property:"sticky",title:"Sticky.",desc:"Horizontal tabs stick to the top of the window when scrolling.",inputMethod:"boolean"},{property:"layoutBreakpoint",title:"Layout Breakpoint",inputMethod:"Number",descripton:"Optional minimum breakpoint for horizontal layout of tabs. Default is unset (always horizontal). Setting `-1` forces vertical-only mode."},{property:"iconBreakpoint",title:"Icon Breakpoint",inputMethod:"Number",descripton:"Optional minimum breakpoint for showing tab text with icons. Default is always text with icons (0). Setting to -1 forces icon-only mode."},{slot:"",title:"Tabs",description:"A series of <a11y-tab/> elements.",inputMethod:"code-editor"}],advanced:[{property:"id",title:"Unique ID",inputMethod:"textfield"}]}}}},{key:"properties",get:function(){return l(l({},p(b(i),"properties",this)),{},{ariaLabel:{type:String,reflect:!0,attribute:"aria-label"},activeTab:{type:String,reflect:!0,attribute:"active-tab"},fullWidth:{type:Boolean,reflect:!0,attribute:"full-width"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},hidden:{type:Boolean,reflect:!0,attribute:"hidden"},iconBreakpoint:{type:Number,attribute:"icon-breakpoint"},id:{type:String,reflect:!0},layoutBreakpoint:{type:Number,attribute:"layout-breakpoint"},responsiveSize:{type:String,reflect:!0,attribute:"responsive-size"},sticky:{type:Boolean,reflect:!0,attribute:"sticky"},__tabs:{type:Array},__tabButtons:{type:Array},__tabFocus:{type:Number}})}},{key:"tag",get:function(){return"a11y-tabs"}}]),r(i,[{key:"connectedCallback",value:function(){p(b(i.prototype),"connectedCallback",this).call(this),this.updateTabs(),this.observer.observe(this,{attributes:!1,childList:!0,subtree:!1})}},{key:"disconnectedCallback",value:function(){this.observer&&this.observer.disconnect&&this.observer.disconnect(),p(b(i.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(t){var n=this;t.forEach(function(t,e){"id"===e&&n._idChanged(n.id,t),"activeTab"===e&&n.activeTab!==t&&n._activeTabChanged(n.activeTab,t),"responsiveWidth"===e&&(n.vertical?n.setAttribute("vertical",!0):n.removeAttribute("vertical")),["iconsBreakpoint","responsiveWidth","__tabs"].includes(e)&&(n.iconsOnly?n.setAttribute("icons-only",!0):n.removeAttribute("icons-only"))})}},{key:"selectTab",value:function(t){var n=this.querySelectorAll(this.tabQuery);if(n&&n.length>0){var e=Object.keys(n||[]).filter(function(t){return!n[t].disabled}).map(function(t){return n[t].id}),a=e.filter(function(n){return n===t})[0]||e[0];n.forEach(function(t){t.inactive=t.id!==a}),this.activeTab=a}}},{key:"updateTabs",value:function(t){this.__tabs=this.querySelectorAll(this.tabQuery),this.__tabButtons=this.shadowRoot.querySelectorAll("[role=tab]"),this.selectTab(this.activeTab)}},{key:"_activeTabChanged",value:function(t,n){t!==n&&this.selectTab(t),window.dispatchEvent(new CustomEvent("active-tab-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"_generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1))}},{key:"_handleTab",value:function(t){t.disabled||(this.activeTab=t.id)}},{key:"_handleKey",value:function(t,n){var e=this;this.__tabFocus=t;39!==n.keyCode&&37!==n.keyCode||(this.buttons[t].setAttribute("tabindex",-1),function n(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.__tabFocus=e.__tabFocus+a,e.__tabFocus>=e.buttons.length?e.__tabFocus=0:e.__tabFocus<0&&(e.__tabFocus=e.buttons.length-1),e.buttons[e.__tabFocus].disabled&&e.__tabFocus!==t&&n(a)}(39===n.keyCode?1:-1),this.buttons[this.__tabFocus].disabled||(this.buttons[this.__tabFocus].setAttribute("tabindex",0),this.buttons[this.__tabFocus].focus()))}},{key:"_idChanged",value:function(t,n){t||(this.id="a11y-tabs"+this._generateUUID())}},{key:"_tabButton",value:function(t,e){var a=this;return n.html(j(),t.id,t.id===this.activeTab?"true":"false",t.id,t.id!==this.activeTab||this.disabled?"":"active",t.flag,function(n){return a._handleTab(t)},function(t){return a._handleKey(e,t)},t.disabled||this.disabled,t.id===this.activeTab?0:-1,t.id!==this.activeTab||this.disabled?this.disabled||t.disabled?"tab-disabled":"tab":"tab-active",this._tabIcon(t,"flagIcon"),this._tabLabel(t),this._tabFlag(t),this._tabIcon(t,"icon"),this._tabTooltip(t))}},{key:"_tabFlag",value:function(t){return n.html(O(),!t.flag,t.flag)}},{key:"_tabIcon",value:function(t,e){return t.flag?n.html(T(),!t[e],t[e],t.flag):n.html(x(),!t[e],t[e])}},{key:"_tabLabel",value:function(t){return n.html(w(),t.label)}},{key:"_tabTooltip",value:function(t){return n.html(_(),t.id,t.label)}},{key:"buttons",get:function(){return this.__tabButtons}},{key:"iconsOnly",get:function(){return this.iconBreakpoint&&(this.tabs||[]).filter(function(t){return!t.icon}).length<1&&this.responsiveWidth<this.iconBreakpoint}},{key:"observer",get:function(){var t=this;return new MutationObserver(function(){return t.updateTabs()})}},{key:"tabQuery",get:function(){return"a11y-tab"}},{key:"tabs",get:function(){var t=this;return Object.keys(this.__tabs||{}).map(function(n){return t.__tabs[n].order=n+1,t.__tabs[n].total=t.__tabs.length,t.__tabs[n]})}},{key:"vertical",get:function(){return this.layoutBreakpoint&&this.layoutBreakpoint<this.responsiveWidth}}]),i}();window.customElements.define(B.tag,B),t.A11yTabs=B,Object.defineProperty(t,"__esModule",{value:!0})});
