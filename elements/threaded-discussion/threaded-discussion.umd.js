!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("lit"),require("@github/time-elements"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","lit","@github/time-elements","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).ThreadedDiscussion={},null,t.lit)}(this,(function(t,e,n){"use strict";function r(){r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",d=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),s=new k(r||[]);return o(i,"_invoke",{value:_(t,n,s)}),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function f(){}function m(){}function p(){}var y={};c(y,i,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(L([])));b&&b!==e&&n.call(b,i)&&(y=b);var g=p.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,i,s){var d=l(t[o],t,a);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(u).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,s)}))}s(d.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function _(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=F(i,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var d=l(t,e,n);if("normal"===d.type){if(r=n.done?"completed":"suspendedYield",d.arg===h)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(r="completed",n.method="throw",n.arg=d.arg)}}}function F(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,F(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=p,o(g,"constructor",{value:p,configurable:!0}),o(p,"constructor",{value:m,configurable:!0}),m.displayName=c(p,d,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,d,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(x.prototype),c(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new x(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,d,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),d=n.call(a,"finallyLoc");if(s&&d){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function o(t,e,n,r,o,a,i){try{var s=t[a](i),d=s.value}catch(t){return void n(t)}s.done?e(d):Promise.resolve(d).then(r,o)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(o=r.key,a=void 0,"symbol"==typeof(a=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"))?a:String(a)),r)}var o,a}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function l(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=f(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function p(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function y(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var b,g,w,x,_,F,S,j,k,L,O=function(t){d(r,t);var e=h(r);function r(){var t;return a(this,r),(t=e.call(this)).disabled=!1,t.hidden=!1,t}return s(r,[{key:"render",value:function(){return n.html(b||(b=p(['\n      <form \n        action="','"\n        ?hidden=','\n        class="','"\n        @submit="','">\n        <label for="','">','</label>\n        <textarea\n          id="','"\n          name="','"\n          aria-describedby="','"\n        ></textarea>\n        <button type="submit">\n          ','\n          <simple-icon-lite  \n            aria-hidden="true" \n            ?hidden="','"\n            icon="','"></simple-icon-lite>\n        </button>\n      </div>\n    '])),this.submit,this.hidden||this.disabled,this.thread?"reply-form":"comment-form",this._handleSubmit,this.field,this.textareaLabel,this.field,this.field,this.thread,this.buttonLabel,!this.icon,this.icon)}},{key:"_handleSubmit",value:function(t){if(t.preventDefault(),this.demo)return this.dispatchEvent(new CustomEvent("comment-demo",{bubbles:!0,cancelable:!0,composed:!0,detail:{textarea:this.shadowRoot.querySelector("textarea"),thread:this.thread}})),!1;this.dispatchEvent(new CustomEvent("comment-submitted",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}}],[{key:"styles",get:function(){return[n.css(g||(g=p(["\n        :host {\n          display: block;\n          width: 100%;\n          transition: all 0.5s ease-in-out;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        label {\n          flex: 0 0 0%;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          left: -99999px;\n          width: 0;\n          height: 0;\n          overflow: hidden;\n        }\n        textarea {\n          flex: 1 1 100%;\n          height: var(--threaded-discussion-textarea-Height, 16px);\n          opacity: var(--threaded-discussion-textarea-Opacity, 0);\n          width: calc(\n            100% - 2 * var(--threaded-discussion-comment-Padding, 10px)\n          );\n          padding: var(--threaded-discussion-comment-Padding, 10px);\n          margin: 1px;\n          border: none;\n          resize: none;\n          transition: all 0.5s ease-in-out;\n          color: var(\n            --threaded-discussion-textarea-Color,\n            var(--threaded-discussion-Color, #4b4b4b)\n          );\n          line-height: var(\n            --threaded-discussion-textarea-LineHeight,\n            var(--threaded-discussion-LineHeight, 160%)\n          );\n          font-weight: var(--threaded-discussion-textarea-FontWeight);\n          font-size: var(\n            --threaded-discussion-textarea-FontSize,\n            var(--threaded-discussion-FontSize, 14px)\n          );\n          font-family: var(\n            --threaded-discussion-textarea-FontFamily,\n            var(--threaded-discussion-FontFamily)\n          );\n        }\n        textarea:focus,\n        :host:focus-within textarea {\n          height: var(--threaded-discussion-textarea-focus-Height, 100px);\n          opacity: var(--threaded-discussion-textarea-focus-Opacity, 1);\n        }\n        form {\n          display: flex;\n          justify-content: space-between;\n          align-items: flex-end;\n        }\n        .reply-form {\n          margin: 1px;\n        }\n        button {\n          flex: 0 0 auto;\n          text-align: center;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          margin: 1px;\n          min-height: 24px;\n          color: var(--threaded-discussion-comment-button-Color, #fff);\n          font-weight: var(--threaded-discussion-button-FontWeight);\n          font-size: var(\n            --threaded-discussion-button-FontSize,\n            var(--threaded-discussion-FontSize, 14px)\n          );\n          font-family: var(--threaded-discussion-button-FontFamily);\n          border-radius: var(--threaded-discussion-button-BorderRadius, 3px);\n        }\n        .reply-form button {\n          color: var(--threaded-discussion-reply-button-Color, #4b4b4b);\n          background-color: var(\n            --threaded-discussion-reply-button-BackgroundColor,\n            #fff\n          );\n          border: 1px solid\n            var(--threaded-discussion-reply-button-BorderColor, #4b4b4b);\n        }\n        .reply-form button:focus,\n        .reply-form button:hover {\n          color: var(--threaded-discussion-reply-button-focus-Color, #222);\n          background-color: var(\n            --threaded-discussion-reply-button-focus-BackgroundColor,\n            #fff\n          );\n          border: 1px solid\n            var(--threaded-discussion-reply-button-focus-BorderColor, #222);\n        }\n        .comment-form button {\n          font-weight: var(--threaded-discussion-comment-button-FontWeight);\n          font-size: var(--threaded-discussion-comment-button-FontSize);\n          font-family: var(--threaded-discussion-button-FontFamily);\n          color: var(--threaded-discussion-comment-button-Color, #fff);\n          background-color: var(\n            --threaded-discussion-comment-button-BackgroundColor,\n            #4b4b4b\n          );\n          border: 1px solid\n            var(--threaded-discussion-comment-button-BorderColor, #4b4b4b);\n        }\n        .comment-form button:focus,\n        .comment-form button:hover {\n          color: var(--threaded-discussion-comment-button-focus-Color, #fff);\n          background-color: var(\n            --threaded-discussion-comment-button-focus-BackgroundColor,\n            #222\n          );\n          border: 1px solid\n            var(--threaded-discussion-comment-button-focus-BorderColor, #222);\n        }\n        button simple-icon-lite {\n          margin-left: 5px;\n        }\n      "])))]}},{key:"tag",get:function(){return"threaded-discussion-form"}},{key:"properties",get:function(){return{button:{type:String},buttonLabel:{type:String,attribute:"button-label",reflect:!0},demo:{type:Boolean},disabled:{type:Boolean,attribute:"disabled",reflect:!0},field:{type:String},hidden:{type:Boolean,attribute:"hidden",reflect:!0},icon:{type:String,attribute:"icon",reflect:!0},submit:{type:String},textareaLabel:{type:String,attribute:"textarea-label",reflect:!0},thread:{type:String}}}}]),r}(n.LitElement);customElements.define(O.tag,O);var E=function(t){d(l,t);var e,i,u=h(l);function l(){var t;return a(this,l),(t=u.call(this)).latest=!1,t.data=[],t.dateLocale="en-US",t.dateFormat={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"},t.demo=!1,t.map={},t.params={},t.submit=window.location.href,t.__data=[],t.__loading=!1,setTimeout((function(){}),0),t}return s(l,[{key:"render",value:function(){return n.html(w||(w=p(['\n      <slot name="before-discussion"></slot>\n      ','\n      <div id="new-thread">\n        <slot name="before-new-thread"></slot>\n        <threaded-discussion-form\n          button-label="','"\n          class="comment-form"\n          @comment-demo="','"\n          @comment-submitted="','"\n          ?demo="','"\n          field="','"\n          .icon="','"\n          ?hidden="','"\n          ?disabled="','"\n          .submit="','"\n          textarea-label="','"\n        >\n        </threaded-discussion-form>\n        <slot name="after-new-thread"></slot>\n      </div>\n      ','\n      <slot name="after-discussion"></slot>\n    '])),this.latest?"":this.threads,this.commentButtonLabel||"Submit",this._handleDemo,this._handleSubmit,this.demo,this.map.body||"body",this.commentIcon,this.hidden,this.disabled,this._getPath(this.submit,this.params),this.commentTextareaLabel||"Enter comment",this.latest?this.threads:"")}},{key:"threads",get:function(){var t=this;return n.html(x||(x=p(['\n      <div id="threads">\n        <div class="thread" ?hidden="','">\n          ',"\n        </div>\n        ","\n      </div>\n    "])),!this.__loading,this.loadingText,this.sortData(this.__data).map((function(e){return n.html(_||(_=p(['\n            <div class="thread">\n              ',"\n              ",'\n              <threaded-discussion-form\n                button-label="','"\n                class="reply-form"\n                @comment-demo="','"\n                @comment-submitted="','"\n                ?demo="','"\n                field="','"\n                ?disabled="','"\n                ?hidden="','"\n                .icon="','"\n                .submit="','"\n                textarea-label="','"\n                .thread="','"\n              >\n              </threaded-discussion-form>\n            </div>\n          '])),t.getComment(e),(e.replies||[]).map((function(n){return t.getComment(n,e.id)})),t.replyButtonLabel||"Reply",t._handleDemo,t._handleSubmit,t.demo,t.map.replyBody||t.map.body||"body",t.disabled,t.hidden,t.replyIcon,t._getPath(t.submit,t._getThreadParams(e.id)),t.replyTextareaLabel||"Enter reply",e.id)})))}},{key:"getComment",value:function(t,e){return n.html(F||(F=p(['\n      <div\n        aria-describedby="','"\n        class="comment ','"\n        id="comment-','"\n      >\n        <div class="comment-header">\n          <lrndesign-avatar\n            .accent-color="','"\n            .label="'," ",'"\n            .src="','"\n            two-chars\n          >\n          </lrndesign-avatar>\n          <div>\n            <p class="comment-name">'," ",'</p>\n            <p class="comment-date">\n              ','\n            </p>\n          </div>\n        </div>\n        <div class="comment-body">\n          ',"\n        </div>\n      </div>\n    "])),e||"",e?"comment-reply":"",t.id,t.color,t.firstName,t.lastName,t.avatar,t.firstName,t.lastName,this.relativeDates?n.html(S||(S=p(['\n                    <relative-time .datetime="','">\n                      ',"\n                    </relative-time>\n                  "])),t.date,this._getDate(t.date)):n.html(j||(j=p(['\n                    <local-time\n                      month="','"\n                      day="','"\n                      year="','"\n                      hour="','"\n                      minute="','"\n                      second="','"\n                      time-zone-name="short"\n                      .datetime="','"\n                    >\n                      ',"\n                    </local-time>\n                  "])),this.dateFormat&&this.dateFormat.month?this.dateFormat.month:"long",this.dateFormat&&this.dateFormat.day?this.dateFormat.day:"numeric",this.dateFormat&&this.dateFormat.year?this.dateFormat.year:"numeric",this.dateFormat&&this.dateFormat.hour?this.dateFormat.hour:"2-digit",this.dateFormat&&this.dateFormat.minute?this.dateFormat.minute:"2-digit",this.dateFormat&&this.dateFormat.second?this.dateFormat.second:"2-digit",t.date,this._getDate(t.date)),(t.body||"").split(/[\r\n]+/).map((function(t){return n.html(k||(k=p([" <p>","</p> "])),t)})))}},{key:"updated",value:function(t){var e=this;m(c(l.prototype),"updated",this)&&m(c(l.prototype),"updated",this).call(this,t),t.forEach((function(t,n){["params","source"].includes(n)&&e.source&&(e.__loading=!0,e.fetchDiscussion())}))}},{key:"sortData",value:function(t){var e=this;return t.sort((function(t,n){var r="string"==typeof t.date?Date.parse(t.date):t.date,o="string"==typeof n.date?Date.parse(n.date):n.date;return e.latest?o-r:r-o}))}},{key:"_handleRawData",value:function(t){var e=this;return this.__loading=!1,console.log(t),this._getArray(t||[]).filter((function(t){return!e._getMap(t,"thread","replyThread")})).map((function(n){var r=e._getMap(n,"id"),o=e._getMap(n,"replies")||(t||[]).filter((function(t){return e._getMap(t,"thread","replyThread")===r}));return{id:r,firstName:e._getMap(n,"firstName"),lastName:e._getMap(n,"lastName"),avatar:e._getMap(n,"avatar"),body:e._getMap(n,"body"),color:e._getMap(n,"color"),date:e._getMap(n,"date"),replies:e._getArray(o||[]).map((function(t){return{id:e._getMap(t,"id","replyId"),thread:e._getMap(t,"thread","replyThread")||r,firstName:e._getMap(t,"firstName","replyFirstName"),lastName:e._getMap(t,"lastName","replyLastName"),avatar:e._getMap(t,"avatar","replyAvatar"),body:e._getMap(t,"body","replyBody"),color:e._getMap(t,"color","replyColor"),date:e._getMap(t,"date","replyDate")}}))}}))}},{key:"_getMap",value:function(t,e,n,r){return t[this._mapProp(e,n,r)]}},{key:"_mapProp",value:function(t,e,n){var r=this.map||{};return e=e||t,r[n=n||e]||r[e]||t}},{key:"_handleSubmit",value:function(t){this.fetchDiscussion()}},{key:"_handleDemo",value:function(t){if(t.detail&&t.detail.textarea){var e={},n=this.__data;if(e.id="comment-".concat(Date.now()),e.firstName="DEMO",e.lastName="USER",e.date=this._getDate(new Date),e.body=t.detail.textarea.value,t.detail.thread){var r=n.filter((function(e){return e.id===t.detail.thread})),o=r?r[0]:void 0;e.thread=t.detail.thread,o?o.replies=[].concat(y(o.replies),[e]):n.push(e)}else e.replies=[],n.push(e);this.__data=[],this.__data=n,t.detail.textarea.value=""}}},{key:"fetchDiscussion",value:(e=r().mark((function t(){var e=this;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this._getPath(this.source,this.params)).then((function(t){return t.json()})).then((function(t){return e.__data=e._handleRawData(t)}));case 2:case"end":return t.stop()}}),t,this)})),i=function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(t){o(i,r,a,s,d,"next",t)}function d(t){o(i,r,a,s,d,"throw",t)}s(void 0)}))},function(){return i.apply(this,arguments)})},{key:"_getArray",value:function(t){return"array"==typeof t?t:Object.keys(t||{}).map((function(e){var n=t[e];return n.id=e,n}))}},{key:"_getDate",value:function(t){var e="string"==typeof this.dateFormat?JSON.parse(this.dateFormat):this.dateFormat;return t&&new Date(t)?new Date(t).toLocaleString(this.dateLocale,e):""}},{key:"_getThreadParams",value:function(t){var e=this.params;return e[this._mapProp("id")]=t,e}},{key:"_getPath",value:function(t,e){var n=Object.keys(e||{}).map((function(t){return"".concat(encodeURI(t),"=").concat(encodeURI(e[t]))})).join("&");return n?"".concat(t,"?").concat(n):t}}],[{key:"styles",get:function(){return[n.css(L||(L=p(["\n        :host {\n          display: block;\n          font-size: var(--threaded-discussion-FontSize, 14px);\n          line-height: var(--threaded-discussion-LineHeight, 160%);\n          color: var(--threaded-discussion-Color, #95989a);\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        #threads {\n          background-color: var(\n            --threaded-discussion-threads-BackgroundColor,\n            #eaeaea\n          );\n          padding: 1px;\n          width: calc(100% - 2px);\n          margin: var(--threaded-discussion-threads-Margin, 0);\n        }\n        #new-thread {\n          background-color: var(\n            --threaded-discussion-new-thread-BackgroundColor,\n            var(--threaded-discussion-threads-BackgroundColor, #eaeaea)\n          );\n          padding: 2px 1px;\n          width: calc(100% - 2px);\n          margin: var(\n            --threaded-discussion-new-thread-Margin,\n            var(--threaded-discussion-threads-Margin, 0)\n          );\n        }\n        .thread:focus-within,\n        #new-thread:focus-within {\n          border-left: var(\n            --threaded-discussion-thread-focus-BorderLeft,\n            4px solid blue\n          );\n        }\n        #new-thread:focus-within {\n          border-left: var(--threaded-discussion-new-thread-focus-BorderLeft);\n        }\n        .thread > *,\n        #new-thread > * {\n          background-color: var(\n            --threaded-discussion-comment-BackgroundColor,\n            #fff\n          );\n        }\n        .comment {\n          margin: 1px 1px 0;\n          padding: var(--threaded-discussion-comment-Padding, 10px) 0;\n        }\n        .reply-form {\n          margin: 0;\n          width: calc(\n            100% -\n              var(\n                --threaded-discussion-reply-indent,\n                calc(2 * var(--threaded-discussion-comment-Padding, 10px))\n              )\n          );\n        }\n        .reply-form,\n        .comment-reply {\n          margin-left: var(\n            --threaded-discussion-reply-indent,\n            calc(2 * var(--threaded-discussion-comment-Padding, 10px))\n          );\n        }\n        .comment-header {\n          display: flex;\n          align-items: stretch;\n          justify-content: space-between;\n          margin-bottom: var(--threaded-discussion-comment-Padding, 10px);\n        }\n        .comment-header,\n        .comment-body {\n          padding: 0 var(--threaded-discussion-comment-Padding, 10px);\n        }\n        lrndesign-avatar {\n          margin-right: var(--threaded-discussion-comment-Padding, 10px);\n        }\n        .comment-header > div {\n          display: flex;\n          flex-direction: column;\n          justify-content: space-evenly;\n          align-items: flex-start;\n          flex: 1 1 auto;\n        }\n        .comment-name {\n          margin: 0;\n          font-size: var(\n            --threaded-discussion-name-FontSize,\n            calc(1.1 * var(--threaded-discussion-FontSize, 14px))\n          );\n          font-weight: var(--threaded-discussion-name-FontWeight, bold);\n          font-family: var(--threaded-discussion-name-FontFamily);\n          color: var(--threaded-discussion-name-Color, #4b4b4b);\n        }\n        .comment-date {\n          margin: 0;\n          font-size: var(\n            --threaded-discussion-date-FontSize,\n            calc(0.8 * var(--threaded-discussion-FontSize, 14px))\n          );\n          font-weight: var(--threaded-discussion-date-FontWeight, normal);\n          font-family: var(--threaded-discussion-date-FontFamily);\n          color: var(\n            --threaded-discussion-date-Color,\n            var(--threaded-discussion-Color, #95989a)\n          );\n        }\n        .comment-body {\n          font-size: var(--threaded-discussion-FontSize, 14px);\n        }\n      "])))]}},{key:"tag",get:function(){return"threaded-discussion"}},{key:"properties",get:function(){return{latest:{type:Boolean,attribute:"latest",reflect:!0},commentButtonLabel:{type:String,attribute:"comment-button-label"},commentTextareaLabel:{type:String,attribute:"comment-textarea-label"},commentIcon:{type:String,attribute:"comment-icon"},data:{type:Object},dateLocale:{type:String},dateFormat:{type:Object},demo:{type:Boolean},loadingText:{type:String,attribute:"loading-text"},map:{type:Object},params:{type:Object},relativeDates:{attribute:"relative-dates",type:Boolean,reflect:!0},replyButtonLabel:{type:String,attribute:"reply-button-label",reflect:!0},replyTextareaLabel:{type:String,attribute:"reply-textarea-label",reflect:!0},replyIcon:{type:String,attribute:"reply-icon",reflect:!0},source:{type:String},submit:{type:String},__data:{type:Array},__loading:{type:Boolean}}}}]),l}(n.LitElement);customElements.define(E.tag,E),t.ThreadedDiscussion=E,Object.defineProperty(t,"__esModule",{value:!0})}));
