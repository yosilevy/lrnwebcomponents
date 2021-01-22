/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { RichTextEditorPickerBehaviors } from "./rich-text-editor-picker.js";
import "@lrnwebcomponents/simple-picker/lib/simple-symbol-picker.js";
/**
 * `rich-text-editor-symbol-picker`
 * a symbol picker for the rich-text-editor
 *
 * @element rich-text-editor-symbol-picker
 * @demo ./demo/buttons.html
 */
class RichTextEditorSymbolPicker extends RichTextEditorPickerBehaviors(
  LitElement
) {
  /**
   * Store the tag name to make it easier to obtain directly.
   *
   */
  static get tag() {
    return "rich-text-editor-symbol-picker";
  }

  // render function for template
  render() {
    return html`
      <label id="listLabel" for="button"> ${this.labelTemplate} </label>
      <simple-symbol-picker
        id="button"
        ?allow-null="${this.allowNull}"
        aria-labeledby="listlabel"
        controls="${super.controls}"
        ?disabled="${this.disabled}"
        @keydown="${this._pickerFocus}"
        @mouseover="${this._pickerFocus}"
        .symbol-types="${this.symbolTypes}"
        tabindex="0"
        title-as-html
        ?toggled="${this.toggled}"
        @value-changed="${this._pickerChange}"
      >
      </simple-symbol-picker>
      ${super.tooltipTemplate}
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      /**
       * Symbol types to include
       */
      symbolTypes: {
        name: "symbolTypes",
        type: Array,
        attribute: "symbol-types",
      },
    };
  }

  constructor() {
    super();
    this.icon = "editor:functions";
    this.label = "Insert symbol";
    this.symbolTypes = ["symbols", "math", "characters", "greek", "misc"];
    this.command = "insertHTML";
  }

  /**
   * Handles default options loaded from an external js file
   */
  _setOptions() {}
}
window.customElements.define(
  RichTextEditorSymbolPicker.tag,
  RichTextEditorSymbolPicker
);
export { RichTextEditorSymbolPicker };
