!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/simple-popover/simple-popover.js"),require("@lrnwebcomponents/paper-avatar/paper-avatar.js"),require("@github/time-elements")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-popover/simple-popover.js","@lrnwebcomponents/paper-avatar/paper-avatar.js","@github/time-elements"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleBlogCard={},e.lit)}(this,(function(e,n){"use strict";function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function r(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function l(e,n){return l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},l(e,n)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}function p(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=a(e);if(n){var i=a(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return s(this,t)}}function u(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=a(e)););return e}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=u(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(arguments.length<3?e:t):i.value}},d.apply(this,arguments)}function A(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f,h,m=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&l(e,n)}(m,e);var t,o,s,u=p(m);function m(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,m),(e=u.call(this)).placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAAqADAAQAAAABAAAAAgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAAgACAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAHBwcHBwcMBwcMEQwMDBEXERERERcdFxcXFxcdIx0dHR0dHSMjIyMjIyMjKioqKioqMTExMTE3Nzc3Nzc3Nzc3P/bAEMBIiQkODQ4YDQ0YOacgJzm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v/dAAQAAf/aAAwDAQACEQMRAD8AiooooA//2Q==",e.size="medium",e.shadow=0,setTimeout((function(){e.addEventListener("mouseover",e.hoverState.bind(c(e))),e.addEventListener("mouseout",e.hoverStateOff.bind(c(e)))}),0),e}return t=m,s=[{key:"styles",get:function(){return[n.css(h||(h=A(['\n:host {\n  display: inline-flex;\n  --simple-blog-card-author-link: #03a87c;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host *[hidden] {\n  display: none;\n}\n\nsimple-popover {\n  position: absolute;\n  display: flex;\n}\n\ndiv.card {\n  height: auto !important;\n  overflow: hidden;\n}\n\nimg {\n  max-height: 200px;\n}\n\n.card-content a{\n  display: block;\n}\n\n.card-micro {\n  width: 100px;\n  --simple-blog-card-heading-font-size: 16px;\n  --simple-blog-card-content-font-size: 14px;\n}\n\n.card-small {\n  width: 200px;\n  --simple-blog-card-heading-font-size: 16px;\n}\n\n.card-medium {\n  width: 300px;\n}\n\n.card-large {\n  width: 400px;\n}\n\n.card-xlarge {\n  width: 600px;\n}\n\na {\n  text-decoration: none;\n}\n\n.teaser {\n  overflow: hidden;\n}\n\n.teaser,\n.teaser ::slotted(*) {\n  font-size: var(--simple-blog-card-content-font-size, 18px);\n  word-break: all;\n  line-height: 1.2;\n  text-overflow: ellipsis;\n}\n\n.card-content {\n  height: 100px;\n  padding: 0;\n  overflow: hidden;\n}\n\n.card-micro {\n  height: 50px;\n}\n\n.card-small {\n  height: 100px;\n}\n\n.card-medium {\n  height: 150px;\n}\n\n.card-large {\n  height: 200px;\n}\n\n.card-micro .card-content {\n  height: 50px;\n}\n\n.card-small .card-content {\n  height: 50px;\n}\n\n.card-medium .card-content {\n  height: 125px;\n}\n\ndiv.card h3 {\n  font-size: var(--simple-blog-card-heading-font-size, 22px);\n  color: var(--simple-blog-card-header, black);\n  text-decoration: none;\n  padding: 0;\n  margin: 8px 0;\n  font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans",\n  Geneva, Arial, sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-break: break-word;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n}\n\npaper-avatar {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  display: inline-block;\n}\n\n.reading-time:after {\n  content: attr(title);\n}\n\n.author-block {\n  display: flex;\n  align-items: center;\n}\n\n.author-info {\n  font-size: 14px;\n  padding-left: 10px;\n  text-rendering: auto;\n}\n\n.author-info a {\n  color: var(--simple-blog-card-author-link);\n}\n\n.post-details {\n  font-size: 14px;\n  color: var(--simple-blog-card-text, rgba(0, 0, 0, 0.54));\n}\n\n.post-details .dot {\n  padding-right: 0.3em;\n  padding-left: 0.3em;\n}\n\n.box {\n  outline: 1px solid black;\n}\n\nsimple-popover:not([for]) {\n  display: none;\n}\n      '])))]}},{key:"properties",get:function(){return r(r({},d(a(m),"properties",this)),{},{title:{name:"title",type:String},author:{name:"author",type:String},authorimage:{name:"authorimage",type:String},authorlink:{name:"authorlink",type:String},readtime:{name:"readtime",type:Number},timestamp:{name:"timestamp",type:Number},image:{name:"image",type:String},link:{name:"link",type:String},shadow:{name:"shadow",type:Number},size:{name:"size",type:String},placeholder:{name:"placeholder",type:String},alt:{name:"alt",type:String}})}},{key:"tag",get:function(){return"simple-blog-card"}}],(o=[{key:"render",value:function(){return n.html(f||(f=A(['\n\n<div class="card-',' card">\n  <img .alt="','" .src="','" loading="lazy"/>\n  <div class="card-content">\n    <a href="','">\n      <h3>','</h3>\n      <div class="teaser">\n        <slot></slot>\n      </div>\n    </a>\n  </div>\n  <div class="card-actions">\n    <div id="author" class="author-block">\n      <paper-avatar\n        .label="','"\n        .src="','">\n      </paper-avatar>\n      <div class="author-info">\n        <a .href="','">','</a>\n        <div class="post-details">\n          <simple-datetime format="M jS" .timestamp="','" unix>\n          </simple-datetime>\n          <span class="dot">&#183</span>\n          <span class="reading-time" .title="',' min read"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'])),this.size,this.alt,this.image,this.link,this.title,this.author,this.authorimage,this.authorlink,this.author,this.timestamp,this.readtime)}},{key:"update",value:function(e){var n=this;d(a(m.prototype),"update",this).call(this),e.forEach((function(e,t){"image"==t&&(n.image||(n.image=n.placeholder))}))}},{key:"showDetails",value:function(e){this.shadowRoot.querySelector("simple-popover").setAttribute("for","author"),this.shadowRoot.querySelector("simple-popover").setPosition()}},{key:"hideDetails",value:function(e){this.shadowRoot.querySelector("simple-popover").removeAttribute("for"),this.shadowRoot.querySelector("simple-popover").unsetPosition()}},{key:"hoverState",value:function(e){this.shadow=1}},{key:"hoverStateOff",value:function(e){this.shadow=0}}])&&i(t.prototype,o),s&&i(t,s),Object.defineProperty(t,"prototype",{writable:!1}),m}(n.LitElement);customElements.define(m.tag,m),e.SimpleBlogCard=m,Object.defineProperty(e,"__esModule",{value:!0})}));
