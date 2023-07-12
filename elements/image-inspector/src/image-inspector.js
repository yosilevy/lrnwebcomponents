import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import "@lrnwebcomponents/img-pan-zoom/img-pan-zoom.js";
/**
 * `image-inspector`
 * `Zoom, Rotate, Mirror, Download, and View image`
 * @demo demo/index.html
 * @element image-inspector
 */
class ImageInspector extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          overflow: hidden;
          background-color: var(--image-inspector-background-color, #fdfdfd);
        }

        simple-icon-button {
          display: inline-flex;
          --simple-icon-width: 36px;
          --simple-icon-height: 36px;
          margin: 0 8px;
          background-color: var(--image-inspector-background-color, #fdfdfd);
          transition: 0.2s all ease-in-out;
        }
        simple-icon-button:hover,
        simple-icon-button:focus,
        simple-icon-button:active {
          background-color: var(
            --image-inspector-background-color-active,
            #eeeeee
          );
        }

        img-pan-zoom.top-rotated {
          top: 150px;
          pointer-events: none; /** disable pointer events when rotated bc of HTML canvas issue */
          height: var(--image-inspector-height-rotated, 600px);
        }
        img-pan-zoom {
          --img-pan-zoom-height: var(--image-inspector-height, 600px);
        }
        .wrap {
          border-bottom: 1px solid black;
          justify-content: center;
          display: flex;
        }
      `,
    ];
  }
  constructor() {
    super();
    this.noLeft = false;
    this.degrees = 0;
    this.src = "";
  }
  render() {
    return html`
      <div class="wrap">
        <simple-icon-button
          label="Zoom in"
          icon="zoom-in"
          @click="${this.zoomIn}"
        ></simple-icon-button>
        <simple-icon-button
          label="Zoom out"
          icon="zoom-out"
          @click="${this.zoomOut}"
        ></simple-icon-button>
        <simple-icon-button
          label="Rotate right"
          icon="image:rotate-right"
          @click="${this.rotateRight}"
        ></simple-icon-button>
        <simple-icon-button
          label="Rotate left"
          icon="image:rotate-left"
          @click="${this.rotateLeft}"
        ></simple-icon-button>
        <simple-icon-button
          label="Mirror image"
          icon="image:flip"
          @click="${this.mirrorImage}"
        ></simple-icon-button>
        <a href="${this.src}" target="_blank" rel="noopener noreferrer">
          <simple-icon-button
            label="Open in new window"
            icon="launch"
          ></simple-icon-button>
        </a>
        <slot name="toolbar"></slot>
      </div>
      <img-pan-zoom id="img" src="${this.src}"></img-pan-zoom>
      <slot></slot>
    `;
  }

  static get tag() {
    return "image-inspector";
  }

  static get properties() {
    return {
      noLeft: {
        type: Boolean,
        attribute: "no-left",
      },
      /**
       * Image rotation
       */
      degrees: {
        type: Number,
        reflect: true,
      },
      /**
       * Image source.
       */
      src: {
        type: String,
      },
      /**
       * Hover class for button styling
       */
      hoverClass: {
        type: String,
        attribute: "hover-class",
      },
    };
  }
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.__img = this.shadowRoot.querySelector("#img");
  }
  /**
   * Rotate the image to the right.
   */
  rotateRight() {
    // spin 90
    this.degrees += 90;
    this.__img.style.transform = "rotate(" + this.degrees + "deg)";
    if (this.__img.classList.contains("top-rotated")) {
      this.__img.classList.remove("top-rotated");
    } else {
      this.__img.classList.add("top-rotated");
    }
  }

  /**
   * Rotate the image to the left.
   */
  rotateLeft() {
    // go back 90
    this.degrees += -90;
    this.__img.style.transform = "rotate(" + this.degrees + "deg)";
    if (this.__img.classList.contains("top-rotated")) {
      this.__img.classList.remove("top-rotated");
    } else {
      this.__img.classList.add("top-rotated");
    }
  }

  /**
   * Flip the image.
   */
  mirrorImage() {
    if (this.__img.style.transform === "scaleX(1)") {
      this.__img.style.transform = "scaleX(-1)";
    } else {
      this.__img.style.transform = "scaleX(1)";
    }
  }

  /**
   * Zoom in by calling  downstream function.
   */
  zoomIn() {
    this.__img.zoomIn();
  }

  /**
   * Zoom out by calling downstream function.
   */
  zoomOut() {
    this.__img.zoomOut();
  }
}
customElements.define(ImageInspector.tag, ImageInspector);
export { ImageInspector };
