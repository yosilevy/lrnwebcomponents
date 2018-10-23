define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.MaterializecssStyles = void 0;
  function _templateObject_f5b945b0d6fd11e8950ca7b0cbf3cdf3() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_f5b945b0d6fd11e8950ca7b0cbf3cdf3 = function() {
      return data;
    };
    return data;
  }
  var MaterializecssStyles = (function(_PolymerElement) {
    babelHelpers.inherits(MaterializecssStyles, _PolymerElement);
    function MaterializecssStyles() {
      babelHelpers.classCallCheck(this, MaterializecssStyles);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          MaterializecssStyles.__proto__ ||
          Object.getPrototypeOf(MaterializecssStyles)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      MaterializecssStyles,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                MaterializecssStyles.prototype.__proto__ ||
                  Object.getPrototypeOf(MaterializecssStyles.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              MaterializecssStyles.haxProperties,
              MaterializecssStyles.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_f5b945b0d6fd11e8950ca7b0cbf3cdf3()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Materializecss styles",
                description: "Automated conversion of materializecss-styles/",
                icon: "icons:android",
                color: "green",
                groups: ["Styles"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "materializecss-styles";
          }
        }
      ]
    );
    return MaterializecssStyles;
  })(_polymerElement.PolymerElement);
  _exports.MaterializecssStyles = MaterializecssStyles;
  window.customElements.define(MaterializecssStyles.tag, MaterializecssStyles);
});
