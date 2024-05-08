import { LitElement, html, css } from "lit";
import { DDDSuper } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js";

export class SortingOption extends DDDSuper(LitElement) {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return "sorting-option";
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      ...super.properties,
      disabled: { type: Boolean, reflect: true },
      dragging: { type: Boolean, reflect: true },
      correct: { type: Boolean, reflect: true },
      incorrect: { type: Boolean, reflect: true },
    };
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    // align disable w/ draggable
    if (changedProperties.has('disabled')) {
      if (this.disabled) {
        this.removeAttribute("draggable");
      }
      else {
        this.setAttribute("draggable", true);
      }
    }
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.shadowRootOptions = {
      ...LitElement.shadowRootOptions,
      delegatesFocus: true,
    };
    this.dragging = false;
    this.disabled = false;
    this.addEventListener("mousedown", this.getCurrentPosition);
    this.addEventListener("drag", this.dragStart);
    this.addEventListener("dragend", this.dragEnd);
    this.addEventListener("mouseup", this.dragEnd);
  }

  getCurrentPosition(e) {
    if (!this.disabled) {
      this.correct = null;
      this.incorrect = null;
      var posY = e.clientY;
      this.currentPosition = posY;
    }
  }

  dragStart(e) {
    if (!this.disabled) {
      this.dragging = true;
      // distance above or below current pos to switch index
      var changeBuffer = 64;
      //if slottted images increase change buffer size
      if (this.querySelectorAll("img").length > 0) {
        changeBuffer = 92;
      }
      var posY = e.clientY;
      //drag stop counts as drag for some reason so make sure not to set drag pos to zero
      if (posY != 0 && posY > 0) {
        this.dragPosition = posY;
      }
      var element = this;
      var parent = this.parentNode;
      //going up
      if (this.dragPosition + changeBuffer < this.currentPosition) {
        //find old index
        var oldIndex;
        for (var i = 0; i < parent.children.length; i++) {
          if (parent.children[i].isEqualNode(element)) {
            oldIndex = i;
          }
        }
        //set new index
        if (oldIndex != 0) {
          parent.insertBefore(element, parent.children[oldIndex - 1]);
          this.currentPosition = this.dragPosition;
          return;
        }
      }
      //going down
      if (this.dragPosition - changeBuffer > this.currentPosition) {
        //find old index
        var oldIndex;
        for (var i = 0; i < parent.children.length; i++) {
          if (parent.children[i].isEqualNode(element)) {
            oldIndex = i;
          }
        }
        //set new index
        if (oldIndex != parent.children.length - 1) {
          parent.insertBefore(parent.children[oldIndex + 1], element);
          this.currentPosition = this.dragPosition;
          return;
        }
      }
    }
  }
  dragEnd() {
    if (!this.disabled) {
      this.dragging = false;
    }
  }

  arrowSort(e) {
    if (!this.disabled) {
      let parent = this.parentNode;
      //find old index
      let oldIndex;
      for (var i = 0; i < parent.children.length; i++) {
        if (parent.children[i].isEqualNode(this)) {
          oldIndex = i;
        }
      }
      //set new index
      if (e.target.getAttribute('id') === 'downArrow') {
        if (oldIndex != parent.children.length - 1) {
          let ref = parent.insertBefore(this.nextElementSibling, this);
          ref.shadowRoot.querySelector("#downArrow").focus();
        }
      }
      else {
        if (oldIndex != 0) {
          let ref = parent.insertBefore(this, this.previousElementSibling);
          ref.shadowRoot.querySelector("#upArrow").shadowRoot.querySelector('button').focus();            
        }
      }
      // give a ghosting effect on move
      this.style.backgroundColor = "var(--ddd-theme-default-linkLight)";
      setTimeout(() => {
        this.style.backgroundColor = "";
      }, 500);
    }
  }

  // CSS - specific to Lit
  static get styles() {
    return [super.styles,
    css`
      :host {
        padding: var(--ddd-spacing-4);
        min-height: var(--ddd-spacing-8);
        margin: var(--ddd-spacing-4);
        height: 100%;
        display: flex;
        align-items: center;
        z-index: 1;
        overflow: hidden;
        transition: all 0.3s ease-in-out 0s;
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-xs);
        color: var(--simple-colors-default-theme-accent-10);
        background-color: var(--simple-colors-default-theme-accent-2);
        font-family: var(--ddd-font-navigation);
        font-size: var(--ddd-font-size-xs);
        line-height: var(--ddd-font-size-xs);
        --simple-icon-height: var(--ddd-icon-xs);
        --simple-icon-width: var(--ddd-icon-xs);
      }
      :host(:not([disabled])) {
        cursor: grab;
      }

      :host([correct]) {
        background-color: var(
          --option-background-color-correct,
          var(--ddd-theme-default-successLight)
        ) !important;
      }

      :host([incorrect]) {
        background-color: var(
          --option-background-color-incorrect,
          var(--ddd-theme-default-errorLight)
        ) !important;
      }
      :host([correct]) #correct-icon {
        display: block;
        color: var(--ddd-theme-default-success);
      }
      :host([incorrect]) #incorrect-icon {
        display: block;
        color: var(--ddd-theme-default-error);
      }
      .option-slot-wrapper {
        display: flex;
        align-items: center;
        z-index: 2;
        width: 100%;
        background-color: transparent;
        border: none;
        text-align: inherit;
        font-weight: bold;
      }
      div ::slotted(*) {
        height: 64px;
        min-width: 113px;
        pointer-events: none;
      }
      .arrow-container {
        display: flex;
        justify-content: flex-end;
        padding-right: var(--ddd-spacing-2);
        position: relative;
        right: 0px;
        background-color: transparent;
        align-items: center;
      }

      .feedback-container {
        width: fit-content;
        display: flex;
        align-items: center;
        margin-right: var(--ddd-spacing-3);
        background-color: transparent;
      }

      #correct-icon {
        display: none;
      }

      #incorrect-icon {
        display: none;
      }
      
      :host([dragging]) {
        background-color: var(--ddd-theme-default-infoLight);
      }
      :host(:focus-within:not([disabled])),
      :host(:hover:not([disabled])) {
        background-color: var(--simple-colors-default-theme-accent-3);
        color: var(--simple-colors-default-theme-accent-12);
        box-shadow: var(--ddd-boxShadow-sm);
        border-color: black;
      }

      :host(:not([disabled])) simple-icon-button-lite {
        background-color: var(--simple-colors-default-theme-accent-3);
      }
      :host(:not([disabled])) simple-icon-button-lite:hover,
      :host(:not([disabled])) simple-icon-button-lite:focus,
      :host(:not([disabled])) simple-icon-button-lite:focus-within
       {
        background-color: var(--simple-colors-default-theme-accent-1);
      }
    `];
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="feedback-container">
        <simple-icon-lite
          id="correct-icon"
          icon="check"
          title="Answer is in correct order"
        ></simple-icon-lite>
        <simple-icon-lite
          id="incorrect-icon"
          icon="clear"
          title="Answer is not in correct order"
        ></simple-icon-lite>
      </div>
      <div class="option-slot-wrapper"><slot></slot></div>
      <div class="arrow-container">
        <simple-icon-button-lite
          id="upArrow"
          ?disabled="${this.disabled}"
          ?hidden="${this.disabled}"
          icon="arrow-upward"
          @click="${this.arrowSort}"
          title="Select to move option up in order"
        ></simple-icon-button-lite>
        <simple-icon-button-lite
          id="downArrow"
          ?disabled="${this.disabled}"
          ?hidden="${this.disabled}"
          icon="arrow-downward"
          @click="${this.arrowSort}"
          title="Select to move option down in order"
        ></simple-icon-button-lite>
      </div>
    `;
  }
}

//define element

globalThis.customElements.define(SortingOption.tag, SortingOption);
