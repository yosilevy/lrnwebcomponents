import { LitElement, html, css } from "lit";
import {
  winEventsElement,
  camelCaseToDash,
  wipeSlot,
  normalizeEventPath,
  localStorageSet,
} from "@lrnwebcomponents/utils/utils.js";
import {
  HaxSchematizer,
  HaxElementizer,
} from "@lrnwebcomponents/hax-body-behaviors/lib/HAXFields.js";
import { SimpleTourFinder } from "@lrnwebcomponents/simple-popover/lib/SimpleTourFinder.js";
import { HAXStore } from "./hax-store.js";
import { autorun, toJS } from "mobx";
import {
  HaxComponentStyles,
  HaxTrayDetail,
} from "@lrnwebcomponents/hax-body/lib/hax-ui-styles.js";
import "@lrnwebcomponents/simple-fields/simple-fields.js";
import "@lrnwebcomponents/simple-fields/lib/simple-fields-tab.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js";
import "./hax-tray-upload.js";
import "./hax-app-search.js";
import "./hax-gizmo-browser.js";
import "./hax-gizmo-browser.js";
import "./hax-view-source.js";
import "./hax-stax-browser.js";
import "./hax-map.js";
import "./hax-preferences-dialog.js";
import "./hax-tray-button.js";
import "./hax-toolbar-menu.js";
import { SuperDaemonInstance } from "@lrnwebcomponents/super-daemon/super-daemon.js";
import { I18NMixin } from "@lrnwebcomponents/i18n-manager/lib/I18NMixin.js";
import { Undo } from "@lrnwebcomponents/undo-manager/undo-manager.js";
import "@lrnwebcomponents/iframe-loader/lib/loading-indicator.js";
import "@lrnwebcomponents/simple-toolbar/lib/simple-toolbar-menu-item.js";

/**
 * `hax-tray`
 * `The tray / dashboard area which allows for customization of all major settings`
 * @element hax-tray
 */
class HaxTray extends I18NMixin(
  SimpleTourFinder(winEventsElement(LitElement))
) {
  /**
   * Convention we use
   */
  static get tag() {
    return "hax-tray";
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.windowControllers = new AbortController();
    this.tourName = "hax";
    this.__winEvents = {
      "can-redo-changed": "_redoChanged",
      "can-undo-changed": "_undoChanged",
      "hax-drop-focus-event": "_expandSettingsPanel",
    };
    this.t = {
      structure: "Outline",
      structureTip: "View Page Structure",
      edit: "Edit",
      properties: "Properties",
      save: "Save",
      move: "Move",
      close: "Close",
      moveMenu: "Toggles Menu Aligmnent",
      menuAlignment: "Menu Alignment",
      menuLeft: "Move",
      menuRight: "Move",
      menuPosition: "Menu position",
      changeSideVisually:
        "Change which side of the screen the menu is affixed to visually.",
      expand: "Expand",
      collapse: "Collapse",
      menuSize: "Menu size",
      menuSizeDescription: "Expand or collapse the menu visually.",
      merlin: "Merlin",
      summonMerlin: "Summon Merlin",
      settings: "Settings",
      source: "Source",
      undo: "Undo",
      redo: "Redo",
      media: "Media",
      blocks: "Blocks",
      cancel: "Cancel",
      cancelWithoutSaving: "Cancel without saving",
      configure: "Configure",
      advanced: "Advanced",
      developer: "Developer",
      alignment: "Alignment",
      left: "Left",
      center: "Center",
      right: "Right",
      search: "Search",
      templates: "Templates",
      width: "Width",
    };
    this.registerLocalization({
      context: this,
      namespace: "hax",
      updateCallback: "_updateTrayDetail",
    });
    this._initial = true;
    this.activeValue = {
      settings: {
        configure: {},
        advanced: {
          __position: "hax-align-left",
          __scale: 100,
        },
        developer: {},
      },
    };
    this.collapsed = true;
    this.activeSchema = [
      {
        property: "settings",
        inputMethod: "collapse",
        properties: [],
      },
    ];
    this.canUndo = false;
    this.canRedo = false;
    this.trayDetail = "content-edit";
    this.activeTagName = "";
    this.traySizeIcon = "hax:arrow-expand-right";
    this.__setup = false;
    setTimeout(() => {
      this.addEventListener(
        "hax-tray-button-click",
        this._processTrayEvent.bind(this)
      );
    }, 0);
    autorun(() => {
      this.activeGizmo = toJS(HAXStore.activeGizmo);
    });
    autorun(() => {
      this.activeNode = toJS(HAXStore.activeNode);
    });
    autorun(() => {
      this.elementAlign = toJS(HAXStore.elementAlign);
    });
    autorun(() => {
      this.tourOpened = toJS(HAXStore.tourOpened);
    });
    autorun(() => {
      this.loading = !toJS(HAXStore.appStoreLoaded);
    });
    autorun(() => {
      this.globalPreferences = toJS(HAXStore.globalPreferences);
      this.haxUiTheme = (this.globalPreferences || {}).haxUiTheme || "hax";
      document.body.setAttribute("hax-ui-theme", this.haxUiTheme);
    });
    autorun(() => {
      this.editMode = toJS(HAXStore.editMode);
    });
  }
  _expandSettingsPanel(e) {
    this.shadowRoot.querySelector("#content-edit").click();
  }
  _redoChanged(e) {
    this.canRedo = e.detail.value;
  }
  _undoChanged(e) {
    this.canUndo = e.detail.value;
  }
  /**
   * LitElement render styles
   */
  static get styles() {
    return [
      ...(super.styles || []),
      ...HaxTrayDetail,
      ...HaxComponentStyles,
      css`
        :host {
          z-index: var(--hax-ui-focus-z-index - 1);
          top: 0;
          font-family: var(--hax-ui-font-family);
          font-size: var(--hax-ui-font-size);
          color: var(--hax-ui-color);
        }
        .wrapper {
          position: fixed;
          display: none;
          align-items: stretch;
          flex-direction: row-reverse;
          opacity: 0;
          visibility: visible;
          pointer-events: none;
          overflow: hidden;
          top: 0;
          bottom: 0;
          min-width: var(--hax-tray-width);
          max-width: 70vw;
          height: calc(100vh - 48px);
          max-height: calc(100vh - 48px);
          z-index: var(--hax-ui-focus-z-index);
        }
        :host(:hover) .wrapper {
          overflow: visible;
        }
        :host([element-align="left"]) .wrapper {
          left: -1000px;
          flex-direction: row;
        }
        :host([tray-detail="view-source"]) .detail {
          width: 50vw;
          height: 50vh;
          min-height: 300px;
          min-width: 300px;
          resize: both;
          flex: unset;
        }
        :host([edit-mode]) .wrapper {
          opacity: 1;
          visibility: visible;
          pointer-events: all;
          display: flex;
        }
        :host([edit-mode][element-align="left"]) .wrapper {
          left: 0px;
        }
        :host([edit-mode][element-align="right"]) .wrapper {
          right: 0px;
        }
        :host([edit-mode][collapsed]) .wrapper {
          width: unset;
        }
        :host([edit-mode]) .wrapper.full-panel {
          width: unset;
          left: 0;
          right: 0;
        }

        #menubar {
          display: inline-flex;
          flex-direction: column;
          align-items: stretch;
          overflow: visible;
          flex: 0 0 auto;
          z-index: 6;
          background-color: var(--hax-ui-background-color);
        }
        :host([collapsed]) #menubar {
          width: unset;
        }
        #menubar > * {
          background-color: var(--hax-ui-background-color);
        }
        #menubar > *::part(button) {
          padding: var(--hax-ui-spacing-xs);
        }
        #menubar > *::part(label) {
          margin: 0px;
          font-size: 10px;
          display: inline-block;
          text-align: left;
          opacity: 1;
          width: 100%;
          visibility: visible;
          padding: 0px var(--hax-ui-spacing-sm);
          overflow: unset;
        }
        loading-indicator {
          --loading-indicator-background-color: var(
            --simple-colors-default-theme-accent-2,
            grey
          );
          --loading-indicator-color: var(
            --simple-colors-default-theme-accent-10,
            black
          );
        }
        .detail,
        #tray-detail {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .detail {
          resize: horizontal;
          opacity: 1;
          visibility: visible;
          pointer-events: all;
          border: 1px solid var(--hax-ui-border-color);
          background-color: var(--hax-ui-background-color);
          max-height: calc(100vh - 48px);
          width: calc(
            var(--hax-tray-width) - var(--hax-tray-menubar-min-width)
          );
          overflow-x: auto;
        }
        :host([collapsed]) .detail {
          width: 0px;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          max-height: 100vh;
          overflow-y: auto;
        }
        #tray-detail {
          width: auto;
          padding: 0 var(--hax-ui-spacing) var(--hax-ui-spacing);
          overflow-y: auto;
        }
        #haxcancelbutton::part(dropdown-icon) {
          display: none;
        }
        .tray-detail-titlebar {
          background-color: var(--hax-ui-color-accent);
          padding: var(--hax-ui-spacing-sm) var(--hax-ui-spacing);
          margin: 0 calc(0px - var(--hax-ui-spacing)) var(--hax-ui-spacing);
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--simple-modal-titlebar-height, unset);
          line-height: var(--simple-modal-titlebar-line-height, unset);
          position: sticky;
          z-index: 2;
          top: 0;
        }
        .tray-detail-titlebar h4 {
          flex: 1 1 auto;
          font-size: var(--hax-ui-font-size);
          font-family: var(--hax-ui-font-family);
        }
        #toggle-tray-size {
          flex: 0 0 auto;
          margin-right: 8px;
        }
        #settingsform {
          margin: -8px -8px 0;
          --simple-fields-field-margin: 12px;
        }
        a11y-collapse {
          margin: 0px;
          --a11y-collapse-margin: 0;
          --a11y-collapse-vertical-padding: 12px;
          --a11y-collapse-horizontal-padding: 12px;
        }
        simple-fields-field::part(label) {
          font-size: 11px;
        }
        simple-fields-field:hover::part(label) {
          font-weight: bold;
        }
        a11y-collapse span[slot="heading"] {
          line-height: 24px;
          height: 24px;
          display: block;
          margin: 8px 0;
        }
        a11y-collapse-group {
          margin: 0;
          padding: 0;
        }
        hax-tray-button,
        hax-gizmo-browser {
          visibility: visible;
        }
        hax-tray-button:not(:defined),
        hax-gizmo-browser:not(:defined) {
          visibility: hidden;
        }
        hax-tray-upload {
          flex: 0 0 auto;
        }
        *[hidden] {
          display: none;
        }
        :host([element-align="right"]) #button {
          right: 0;
        }
        :host([element-align="left"]) #button {
          left: 0;
        }

        #button {
          position: fixed;
          top: 0;
          visibility: visible;
          margin: var(--hax-ui-spacing-xs);
        }
        :host([edit-mode]) #button {
          visibility: hidden;
          opacity: 0;
        }
        #button:hover {
          opacity: 1;
        }
        /** This is mobile layout for controls */
        @media screen and (max-width: 800px) {
          :host {
            width: 100%;
            z-index: calc(var(--hax-ui-focus-z-index) + 3);
          }
          :host([edit-mode]) .wrapper.full-panel .detail {
            max-width: 100vw;
            max-height: unset;
            min-width: unset;
          }
          #tray-detail {
            max-width: unset;
            max-height: unset;
          }
          .wrapper {
            width: unset;
            top: -1000px;
            left: 0px;
            right: 0px;
            flex-direction: column;
          }
          :host([edit-mode]) .wrapper {
            top: 0;
            pointer-events: none;
          }
          :host([collapsed]) .wrapper {
            height: var(--hax-tray-menubar-min-height);
          }
          :host([element-align="left"]) .wrapper {
            left: -1000px;
            flex-direction: column;
          }
          #menubar {
            position: sticky;
            flex-direction: row;
            left: 0;
            top: 0;
            height: auto;
            flex: 0 0 auto;
            width: 100%;
            pointer-events: all;
          }
          #menubar > * {
            flex: 1 0 auto;
            min-width: var(--hax-tray-menubar-min-width);
          }
          #menubar > *::part(button) {
            min-width: var(--hax-tray-menubar-min-width);
            justify-content: space-around;
          }
          #menubar > *::part(label) {
            display: none;
          }
          #haxMenuAlign {
            display: none;
          }
          :host([tray-detail="view-source"]) .detail {
            width: 100%;
            resize: unset;
            height: 100vh;
          }
          :host([tray-detail="view-source"]) #tray-detail {
            overflow: hidden;
          }
          .detail {
            position: relative;
            flex: 1 1 100%;
            pointer-events: all;
          }
          :host([collapsed]) .detail {
            flex: 0 0 0px;
          }
        }
        @media screen and (max-width: 600px) {
          :host([edit-mode]) .hide-small {
            display: none;
          }
        }
      `,
    ];
  }
  get trayStatus() {
    let status = this.collapsed
      ? "collapsed"
      : this.trayDetail == "view-source"
      ? "full-panel"
      : "side-panel";
    HAXStore.trayStatus = status;
    HAXStore.trayDetail = this.trayDetail;
    return status;
  }
  /**
   * LitElement render
   */
  render() {
    return html`
      ${this.panelOpsTemplate}
      <div class="wrapper ${this.trayStatus}">
        ${this.menuToolbarTemplate}
        <div class="detail">
          <loading-indicator ?loading="${this.loading}"></loading-indicator>
          ${this.trayDetailTemplate}
        </div>
      </div>
    `;
  }
  get panelOpsTemplate() {
    return this.hidePanelOps
      ? ``
      : html`
          <hax-tray-button
            large
            voice-command="edit page"
            .data-opened="${this.editMode}"
            @click="${this._clickEditButton}"
            icon="create"
            id="button"
            feature
            show-text-label
            show-tooltip
            label="${this.editMode ? this.t.save : this.t.edit}"
          ></hax-tray-button>
        `;
  }
  get toolbarsTemplate() {
    return html`${this.opsToolbarTemplate}${this.trayToolbarTemplate}`;
  }
  get menuToolbarTemplate() {
    return html` <div id="menubar" class="collapse-menu">
      ${this.saveButtons} ${this.doButtons} ${this.contentButtons}
      <slot name="tray-buttons-pre"></slot>
      ${this.moreButtons}${this.menuButtons}
    </div>`;
  }
  get menuButtons() {
    return html`
        <hax-tray-button
          show-text-label
          show-tooltip
          align-horizontal="${this.collapsed ? "left" : "center"}"
          id="haxMenuAlign"
          event-name="toggle-element-align"
          icon="arrow-${this.elementAlign == "left" ? "forward" : "back"}"
          label="${
            this.elementAlign == "left" ? this.t.menuRight : this.t.menuLeft
          }"
          index="${this.elementAlign == "left" ? "1" : "0"}"
          tooltip="${this.t.moveMenu} ${
      this.elementAlign == "left" ? this.t.right : this.t.left
    }"
        >
        </hax-tray-button>
    </div>
    `;
  }
  get saveButtons() {
    return this.hidePanelOps
      ? ``
      : html`
          <hax-tray-button
            @click="${this._clickSaveButton}"
            icon="save"
            icon-position="left"
            id="haxsavebutton"
            label="${this.editMode ? this.t.save : this.t.edit}"
            event-name="save"
            voice-command="save page"
            show-text-label
            show-tooltip
            align-horizontal="${this.collapsed ? "left" : "center"}"
          ></hax-tray-button>
          <hax-tray-button
            icon="cancel"
            id="haxcancelbutton"
            label="${this.t.cancel}"
            icon-position="left"
            show-text-label
            show-tooltip
            align-horizontal="${this.collapsed ? "left" : "center"}"
          ></hax-tray-button>
        `;
  }
  get doButtons() {
    return html` <hax-tray-button
        icon="icons:undo"
        ?disabled="${!this.canUndo}"
        label="${this.t.undo}"
        event-name="undo"
        voice-command="undo"
        data-simple-tour-stop
        data-stop-title="label"
        icon-position="left"
        show-text-label
        show-tooltip
        align-horizontal="${this.collapsed ? "left" : "center"}"
      >
        <div slot="tour" data-stop-content>
          Undo the previous operation in the content, whether typing or adding a
          widget.
        </div>
      </hax-tray-button>
      <hax-tray-button
        icon="icons:redo"
        ?disabled="${!this.canRedo}"
        label="${this.t.redo}"
        event-name="redo"
        voice-command="redo"
        data-simple-tour-stop
        data-stop-title="label"
        icon-position="left"
        show-text-label
        show-tooltip
        align-horizontal="${this.collapsed ? "left" : "center"}"
      >
        <div slot="tour" data-stop-content>
          Redo the last action that you hit Undo on.
        </div>
      </hax-tray-button>`;
  }
  get contentButtons() {
    return html` <hax-tray-button
        event-name="content-edit"
        icon="settings"
        id="content-edit"
        label="${this.t.edit}"
        ?disabled="${!this.activeTagName ||
        this.activeTagName == "" ||
        !this.activeNode ||
        !this.activeNode.tagName}"
        voice-command="(modify)(configure)(edit) selected"
        data-simple-tour-stop
        data-stop-title="label"
        controls="tray-detail"
        tooltip="${this.t.edit} ${this.activeTagName}"
        toggles
        ?toggled="${!this.collapsed && this.trayDetail === "content-edit"}"
        icon-position="left"
        show-text-label
        show-tooltip
        align-horizontal="${this.collapsed ? "left" : "center"}"
      >
        <div slot="tour" data-stop-content>
          When you want to add any content to the page from text, to images, to
          anything more advanced; you can always find items to add under the Add
          content menu. Click to expand, then either drag and drop items into
          the page or click and have them placed near whatever you are actively
          working on.
        </div>
      </hax-tray-button>
      <hax-tray-button
        event-name="content-add"
        icon="hax:add-brick"
        id="content-add"
        label="${this.t.blocks}"
        voice-command="select blocks (menu)"
        data-simple-tour-stop
        data-stop-title="label"
        controls="tray-detail"
        toggles
        ?toggled="${!this.collapsed && this.trayDetail === "content-add"}"
        icon-position="left"
        show-text-label
        show-tooltip
        align-horizontal="${this.collapsed ? "left" : "center"}"
      >
        <div slot="tour" data-stop-content>
          When you want to add any content to the page from text, to images, to
          anything more advanced; you can always find items to add under the Add
          content menu. Click to expand, then either drag and drop items into
          the page or click and have them placed near whatever you are actively
          working on.
        </div>
      </hax-tray-button>
      <hax-tray-button
        icon="hax:multimedia"
        label="${this.t.media}"
        voice-command="select media (menu)"
        data-simple-tour-stop
        data-stop-title="label"
        controls="tray-detail"
        toggles
        icon-position="left"
        show-text-label
        show-tooltip
        align-horizontal="${this.collapsed ? "left" : "center"}"
        @click="${this._clickMediaButton}"
      >
        <div slot="tour" data-stop-content>
          Search for media and content anywhere that your copy of HAX has access
          to. Pick what to search, perform the search and then click or drag the
          item into the contnet.
        </div>
      </hax-tray-button>
      <hax-tray-button
        event-name="content-map"
        icon="icons:toc"
        id="content-map"
        label="${this.t.structure}"
        voice-command="select structure (menu)"
        data-simple-tour-stop
        data-stop-title="label"
        controls="tray-detail"
        toggles
        ?toggled="${!this.collapsed && this.trayDetail === "content-map"}"
        icon-position="left"
        show-text-label
        show-tooltip
        align-horizontal="${this.collapsed ? "left" : "center"}"
      >
        <div data-stop-content>
          This is a simple list of all the block areas of the page that are
          clickable to jump through items quickly as well as review some simple
          overview stats.
        </div>
      </hax-tray-button>`;
  }
  _clickMediaButton(e) {
    SuperDaemonInstance.runProgram("/", {}, null, null, "", "sources");
    SuperDaemonInstance.open();
  }
  get moreButtons() {
    return html`<hax-tray-button
        id="exportbtn"
        icon="hax:html-code"
        label="${this.t.source}"
        event-name="view-source"
        voice-command="view (page) source"
        data-simple-tour-stop
        data-stop-title="label"
        icon-position="left"
        show-text-label
        show-tooltip
        align-horizontal="${this.collapsed ? "left" : "center"}"
      >
        <div data-stop-content>
          Every change you make in HAX is ultimately writing HTML. Know HTML?
          Awesome, pop open the source view and make any changes you like. HTML
          is always behind the scenes ensuring that content is portable, well
          formatted and easy to read.
        </div>
      </hax-tray-button>
      <hax-tray-button
        ?hidden="${this.hidePreferencesButton}"
        id="advanced-settings"
        event-name="advanced-settings"
        icon="build"
        label="${this.t.settings}"
        voice-command="select settings (menu)"
        data-simple-tour-stop
        data-stop-title="label"
        controls="tray-detail"
        toggles
        ?toggled="${!this.collapsed && this.trayDetail === "advanced-settings"}"
        icon-position="left"
        show-text-label
        show-tooltip
        align-horizontal="${this.collapsed ? "left" : "center"}"
      >
        <div data-stop-content>User preferences for customizing HAX</div>
      </hax-tray-button>
      <hax-tray-button
        event-name="super-daemon"
        icon="hax:wizard-hat"
        label="${this.t.merlin}"
        voice-command="${this.t.merlin}"
        toggles
        ?toggled="${!this.collapsed && this.tourOpened}"
        icon-position="left"
        tooltip="${this.t.summonMerlin}"
        show-text-label
        show-tooltip
        align-horizontal="${this.collapsed ? "left" : "center"}"
      ></hax-tray-button> `;
  }
  get trayDetailTemplate() {
    return html` <div
      id="tray-detail"
      aria-live="polite"
      aria-disabled="${this.collapsed ? "true" : "false"}"
      tabindex="${this.collapsed ? "-1" : "0"}"
      selected-detail="${this.trayDetail}"
    >
      <div class="tray-detail-titlebar">
        <h4>
          ${this.trayLabel || `${this.activeTagName} ${this.t.properties}`}
        </h4>
      </div>
      ${this.viewSourceTemplate} ${this.advancedSettingsTemplate}
      ${this.contentMapTemplate} ${this.contentEditTemplate}
      ${this.contentAddTemplate}
    </div>`;
  }
  get viewSourceTemplate() {
    return html` <hax-view-source
      id="view-source"
      ?hidden="${this.trayDetail !== "view-source"}"
    ></hax-view-source>`;
  }
  get advancedSettingsTemplate() {
    return html` <hax-preferences-dialog
      ?hidden="${this.trayDetail !== "advanced-settings"}"
    ></hax-preferences-dialog>`;
  }
  get contentEditTemplate() {
    return html` <simple-fields
      id="settingsform"
      disable-responsive
      code-theme="${this.haxUiTheme == "system"
        ? "auto"
        : this.haxUiTheme == "haxdark"
        ? "vs-dark"
        : "vs"}"
      ?hidden="${this.trayDetail !== "content-edit"}"
    ></simple-fields>`;
  }
  get contentAddTemplate() {
    let hidden = this.trayDetail !== "content-add";
    return html`<div class="block-add-wrapper">
      <hax-tray-upload ?hidden="${hidden}" show-sources></hax-tray-upload>
      <hax-gizmo-browser
        id="gizmobrowser"
        ?hidden="${hidden}"
      ></hax-gizmo-browser>
      <hax-stax-browser
        id="staxbrowser"
        ?hidden="${hidden}"
        label="${this.t.templates}"
      ></hax-stax-browser>
      <hax-app-search ?hidden="${hidden}" id="haxappsearch"></hax-app-search>
    </div>`;
  }
  get contentMapTemplate() {
    return html`<hax-map
      controls="content-map"
      ?hidden="${this.trayDetail !== "content-map"}"
    ></hax-map>`;
  }

  _refreshAddData() {
    this.shadowRoot
      .querySelector("#gizmobrowser")
      .resetList(toJS(HAXStore.gizmoList));
    this.shadowRoot.querySelector("#staxbrowser").staxList = [
      ...toJS(HAXStore.staxList),
    ];
  }
  /**
   * Process event for simple content inserts.
   */
  _processTrayEvent(e) {
    var target = normalizeEventPath(e)[0],
      evt = e.detail.eventName;
    if (!this.collapsed && this.trayDetail === evt) {
      evt = "toggle-tray-size";
    }
    // support a simple insert event to bubble up or everything else
    switch (evt) {
      case "insert-stax":
        this.dispatchEvent(
          new CustomEvent("hax-insert-content-array", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: target.stax,
          })
        );
        break;
      case "insert-tag":
        let gizmo = {
          tag: e.detail.value,
        };
        let haxElement;
        // get schema for that version of events
        let schema = HAXStore.haxSchemaFromTag(e.detail.value);
        HAXStore.recentGizmoList.push(schema.gizmo);
        if (
          (target.getAttribute("data-demo-schema") || e.detail.demoSchema) &&
          schema &&
          schema.demoSchema &&
          schema.demoSchema[0]
        ) {
          haxElement = schema.demoSchema[0];
        } else {
          // support if anything else is manually defining what to inject
          // or a baseline if we didn't have a demonstration schema supplied
          let properties = JSON.parse(target.getAttribute("event-properties"));
          let innerContent = target.getAttribute("event-content");
          // allow event to have supplied this
          if (e.detail.properties) {
            properties = e.detail.properties;
          }
          if (properties == null) {
            properties = {};
          }
          if (innerContent == null) {
            innerContent = "";
          }
          // most likely empty values but just to be safe
          haxElement = HAXStore.haxElementPrototype(
            gizmo,
            properties,
            innerContent
          );
        }
        this.dispatchEvent(
          new CustomEvent("hax-insert-content", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: haxElement,
          })
        );
        break;
      case "advanced-settings":
        this.trayDetail = e.detail.eventName;
        this.collapsed = false;
        break;
      case "toggle-element-align":
        let directions = ["left", "right"],
          direction = !!directions[e.detail.index]
            ? directions[e.detail.index]
            : "left";
        if (e.detail.index > 1) this.collapsed = true;
        this.style.setProperty("--hax-tray-custom-y", null);
        this.style.setProperty("--hax-tray-custom-x", null);
        HAXStore.elementAlign = direction;
        //set local storage
        localStorageSet("hax-tray-elementAlign", direction);
        break;
      case "toggle-tray-size":
        this.collapsed = !this.collapsed;
        break;
      case "super-daemon":
        SuperDaemonInstance.open();
        break;
      case "content-map":
        this.trayDetail = e.detail.eventName;
        this.collapsed = false;
        break;
      case "content-edit":
        this.trayDetail = e.detail.eventName;
        this.collapsed = false;
        break;
      case "content-add":
        this.trayDetail = e.detail.eventName;
        this.collapsed = false;
        break;
      case "start-tour":
        this.startTour();
        break;
      case "stop-tour":
        window.SimpleTourManager.requestAvailability().stopTour("hax");
        break;
      case "undo":
        HAXStore.activeHaxBody.undo();
        break;
      case "redo":
        HAXStore.activeHaxBody.redo();
        break;
      case "view-source":
        this.trayDetail = e.detail.eventName;
        this.shadowRoot.querySelector("#view-source").openSource();
        this.collapsed = false;
        break;
    }
  }
  startTour() {
    this.__tour = this.__tour || window.SimpleTourManager.requestAvailability();
    this.windowControllers = new AbortController();
    window.addEventListener(
      "tour-changed",
      this._handleTourChanged.bind(this),
      { signal: this.windowControllers.signal }
    );
    this.__tour.startTour("hax");
  }
  stopTour() {
    this.__tour = this.__tour || window.SimpleTourManager.requestAvailability();
    this.__tour.stopTour("hax");
    this.windowControllers.abort();
  }
  _handleTourChanged(e) {
    this.tourOpened = e.detail.active == this.tourName;
  }
  /**
   * LitElement / popular convention
   */
  static get properties() {
    return {
      ...super.properties,
      offsetMargin: {
        type: String,
        attribute: "offset-margin",
      },
      collapsed: {
        type: Boolean,
        reflect: true,
      },
      traySizeIcon: {
        type: String,
      },
      loading: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Form values for active node
       */
      activeValue: {
        type: Object,
      },
      /**
       * Form schema for active node
       */
      activeSchema: {
        type: Array,
      },
      /**
       * Alignment of the initial edit button
       */
      elementAlign: {
        type: String,
        reflect: true,
        attribute: "element-align",
      },
      /**
       * Light variant for save button
       */
      light: {
        type: Boolean,
        reflect: true,
      },
      /**
       * If we can currently undo based on stack position
       */
      canUndo: {
        type: Boolean,
        attribute: "can-undo",
      },
      /**
       * If we can currently redo based on stack position
       */
      canRedo: {
        type: Boolean,
        attribute: "can-redo",
      },
      haxUiTheme: {
        type: String,
      },
      /**
       * Showing preferences area.
       */
      hidePreferencesButton: {
        type: Boolean,
        reflect: true,
        attribute: "hide-preferences-button",
      },
      /**
       * Showing button area at all a well as internal
       * state managing buttons like cancel and save
       */
      hidePanelOps: {
        type: Boolean,
        reflect: true,
        attribute: "hide-panel-ops",
      },
      /**
       * Global preferences for HAX overall
       */
      globalPreferences: {
        type: Object,
      },
      /**
       * Global active node so we know if we need to disable contextual settings
       */
      activeNode: {
        type: Object,
      },
      /**
       * Element name / what to display based on active element
       */
      activeTagName: {
        type: String,
      },
      activeGizmo: {
        type: Object,
      },
      /**
       * State of the panel
       */
      editMode: {
        type: Boolean,
        reflect: true,
        attribute: "edit-mode",
      },
      /**
       * id of toggled section in tray
       */
      trayDetail: {
        type: String,
        reflect: true,
        attribute: "tray-detail",
      },
      /**
       * heading of toggled section in tray
       */
      trayLabel: {
        type: String,
      },
      tourOpened: {
        type: String,
      },
      __tour: {
        type: Object,
      },
    };
  }
  /**
   * LitElement ready life cycle
   */
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    if (!this.__setup) {
      this.shadowRoot.querySelector("#settingsform").schematizer =
        HaxSchematizer;
      this.shadowRoot.querySelector("#settingsform").elementizer =
        HaxElementizer;
      setTimeout(() => {
        this.shadowRoot.querySelector(".wrapper").style.margin =
          this.offsetMargin;
      }, 1000);
      this.__setup = true;
      this.shadowRoot
        .querySelector("#settingsform")
        .addEventListener("value-changed", this.__valueChangedEvent.bind(this));
      // fire an event that this is a core piece of the system
      this.dispatchEvent(
        new CustomEvent("hax-register-core-piece", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            piece: "haxTray",
            object: this,
          },
        })
      );
      this.dispatchEvent(
        new CustomEvent("hax-add-voice-command", {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            command: ":name: (collapse)(open)(expand)(toggle) Blocks (menu)",
            context: this.shadowRoot.querySelector("#content-add"),
            callback: "click",
          },
        })
      );
      this.dispatchEvent(
        new CustomEvent("hax-add-voice-command", {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            command:
              ":name: (collapse)(open)(expand)(toggle) element settings (menu)",
            context: this.shadowRoot.querySelector("#advanced-settings"),
            callback: "click",
          },
        })
      );
    }
  }
  /**
   * LitElement properties changed
   */
  async updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach(async (oldValue, propName) => {
      if (propName == "editMode") {
        if (this.editMode) {
          await HAXStore.refreshActiveNodeForm();
        }
        this._editModeChanged(this.editMode);
      }
      if (propName == "offsetMargin") {
        setTimeout(() => {
          this.shadowRoot.querySelector(".wrapper").style.margin =
            this.offsetMargin;
        }, 0);
      }
      // change tray detail
      if (propName == "trayDetail") {
        this._updateTrayDetail(this[propName]);
      }
      // collaped menu state change
      if (propName == "collapsed" && this[propName]) {
        this._editModeChanged(this.editMode);
      }
      // active Gizmo changed
      if (propName == "activeGizmo" && this.trayDetail !== "view-source") {
        if (this.activeGizmo) {
          this.activeTagName = this.activeGizmo.title;
          if (
            !oldValue ||
            !["content-map", "content-edit", "content-add"].includes(
              this.trayDetail
            )
          ) {
            this.trayDetail = "content-edit";
          }
        } else {
          // force a gizmo change (which then implies adding to the page)
          // to select the edit tab if we just added something into the page
          // from our two content adding panes
          if (!["content-add", "content-map"].includes(this.trayDetail)) {
            this.trayDetail = "content-add";
          }
        }
      }
      // active node changed
      if (propName == "activeNode") {
        if (this.activeNode && this.activeNode.tagName) {
          if (this.editMode) {
            await HAXStore.refreshActiveNodeForm();
          }
        }
      }
    });
  }
  /**
   * When the preview node is updated, pull schema associated with it
   */
  async _setupForm() {
    this.loading = true;
    let activeNode = this.activeNode;
    this._initial = true;
    this.activeValue = {
      settings: {
        configure: {},
        advanced: {
          __position: "hax-align-left",
          __scale: 100,
        },
        developer: {},
      },
    };
    // see if we can get schema off of this.
    if (
      activeNode &&
      activeNode.tagName &&
      HAXStore.elementList[activeNode.tagName.toLowerCase()]
    ) {
      let props = { ...HAXStore.elementList[activeNode.tagName.toLowerCase()] };
      // generate a human name for this
      if (typeof props.gizmo.title === typeof undefined) {
        this.humanName = activeNode.tagName.replace("-", " ").toLowerCase();
      } else {
        this.humanName = props.gizmo.title;
      }
      // first, allow element properties to dictate defaults
      for (let property in this.activeHaxElement.properties) {
        props.settings.configure.forEach((el) => {
          if (el.property === property) {
            this.activeValue.settings.configure[property] =
              this.activeHaxElement.properties[property];
          }
          if (el.attribute === property) {
            this.activeValue.settings.configure[property] =
              this.activeHaxElement.properties[property];
          }
          if (el.slot === property) {
            this.activeValue.settings.configure[property] =
              this.activeHaxElement.properties[property];
          }
        });
        props.settings.advanced.forEach((el) => {
          if (el.property === property) {
            this.activeValue.settings.advanced[property] =
              this.activeHaxElement.properties[property];
          }
          if (el.attribute === property) {
            this.activeValue.settings.advanced[property] =
              this.activeHaxElement.properties[property];
          }
          if (el.slot === property) {
            this.activeValue.settings.advanced[property] =
              this.activeHaxElement.properties[property];
          }
        });
        props.settings.developer.forEach((el) => {
          if (el.property === property) {
            this.activeValue.settings.developer[property] =
              this.activeHaxElement.properties[property];
          }
          if (el.attribute === property) {
            this.activeValue.settings.developer[property] =
              this.activeHaxElement.properties[property];
          }
          if (el.slot === property) {
            this.activeValue.settings.developer[property] =
              this.activeHaxElement.properties[property];
          }
        });
      }
      // now we need to parse through for slotted items
      // build a fake tree, then walk the configuration / Settings
      // looking for slot types
      let tmp = document.createElement("div");
      tmp.innerHTML = this.activeHaxElement.content;
      // step through each key
      tmp.childNodes.forEach((el) => {
        // ensure we have a dom node and it isnt empty
        if (el.nodeType === 1 && el.innerHTML !== typeof undefined) {
          // walk props looking for a match
          props.settings.configure.forEach((prop) => {
            // if we have a slot to match in the property AND it matches the attr
            if (prop.slot === el.getAttribute("slot")) {
              this.activeValue.settings.configure[prop.slot] = el.innerHTML;
            }
            // no slot and it didnt match so it has no slot
            else if (
              prop.slot == "" &&
              (el.getAttribute("slot") == null ||
                el.getAttribute("slot") == "null")
            ) {
              this.activeValue.settings.configure[prop.slot] = el.innerHTML;
            }
          });
          // now advanced
          props.settings.advanced.forEach((prop) => {
            if (prop.slot === el.getAttribute("slot")) {
              this.activeValue.settings.advanced[prop.slot] = el.innerHTML;
            }
            // no slot and it didnt match so it has no slot
            else if (
              prop.slot == "" &&
              (el.getAttribute("slot") == null ||
                el.getAttribute("slot") == "null")
            ) {
              this.activeValue.settings.advanced[prop.slot] = el.innerHTML;
            }
          });
          // now advanced
          props.settings.developer.forEach((prop) => {
            if (prop.slot === el.getAttribute("slot")) {
              this.activeValue.settings.developer[prop.slot] = el.innerHTML;
            }
            // no slot and it didnt match so it has no slot
            else if (
              prop.slot == "" &&
              (el.getAttribute("slot") == null ||
                el.getAttribute("slot") == "null")
            ) {
              this.activeValue.settings.developer[prop.slot] = el.innerHTML;
            }
          });
        }
      });
      // then we need to work on the layout piece
      if (activeNode.style.width != "") {
        this.activeValue.settings.advanced.__scale =
          activeNode.style.width.replace("%", "");
      } else {
        this.activeValue.settings.advanced.__scale = 100;
      }
      if (
        activeNode.style.display == "block" &&
        activeNode.style.margin == "0px auto" &&
        activeNode.style.float == "right"
      ) {
        this.activeValue.settings.advanced.__position = "hax-align-right";
      } else if (
        activeNode.style.display == "block" &&
        activeNode.style.margin == "0px auto"
      ) {
        this.activeValue.settings.advanced.__position = "hax-align-center";
      } else {
        this.activeValue.settings.advanced.__position = "hax-align-left";
      }
      this.activeHaxElement.properties.__scale =
        this.activeValue.settings.advanced.__scale;
      this.activeHaxElement.properties.__position =
        this.activeValue.settings.advanced.__position;
      // tabs / deep objects require us to preview the value w/ the path correctly
      let isGrid = !!props.type && props.type === "grid";
      props.settings.configure.forEach((val, key) => {
        if (props.settings.configure[key].attribute) {
          props.settings.configure[key].property =
            props.settings.configure[key].attribute;
        }
        if (props.settings.configure[key].slot) {
          props.settings.configure[key].property =
            props.settings.configure[key].slot;
        }
      });
      props.settings.advanced.forEach((val, key) => {
        if (props.settings.advanced[key].attribute) {
          props.settings.advanced[key].property =
            props.settings.advanced[key].attribute;
        }
        if (props.settings.advanced[key].slot) {
          props.settings.advanced[key].property =
            props.settings.advanced[key].slot;
        }
      });
      props.settings.developer.forEach((val, key) => {
        if (props.settings.developer[key].attribute) {
          props.settings.developer[key].property =
            props.settings.developer[key].attribute;
        }
        if (props.settings.developer[key].slot) {
          props.settings.developer[key].property =
            props.settings.developer[key].slot;
        }
      });
      // test if this element can be aligned
      if (props.canPosition) {
        props.settings.advanced.unshift({
          property: "__position",
          title: this.t.alignment,
          inputMethod: "select",
          value: this.activeValue.settings.advanced.__position,
          options: {
            "hax-align-left": this.t.left,
            "hax-align-center": this.t.center,
            "hax-align-right": this.t.right,
          },
        });
      }
      // test if this element can be scaled
      if (props.canScale) {
        props.settings.advanced.unshift({
          property: "__scale",
          title: this.t.width,
          inputMethod: "slider",
          value: this.activeValue.settings.advanced.__scale,
          min: props.canScale.min ? props.canScale.min : 12.5,
          max: props.canScale.max ? props.canScale.max : 100,
          step: props.canScale.step ? props.canScale.step : 12.5,
        });
      }

      // establish tabs container
      this.activeSchema = [
        {
          property: "settings",
          inputMethod: "collapse",
          properties: [],
        },
      ];
      // array of things to forcibly disable
      let setProps = (propName, propTitle, settings = []) => {
        let filteredProps = !isGrid
          ? settings
          : settings.filter(
              (prop) =>
                prop.slot !== "" &&
                !prop.slot &&
                (!prop.attribute || prop.attribute != "slot")
            );
        this.activeSchema[0].properties.push({
          property: propName,
          title: propTitle,
          properties: filteredProps.length > 0 ? filteredProps : undefined,
          disabled: filteredProps.length < 1,
          expanded:
            propName === "configure" &&
            (!HAXStore.isTextElement(this.activeNode) ||
              HAXStore.isInlineElement(this.activeNode)),
          accordion: true,
        });
      };
      // @see haxHook: setupActiveElementForm - allow elements to modify the properties to be rendered
      if (HAXStore.testHook(activeNode, "setupActiveElementForm")) {
        await HAXStore.runHook(activeNode, "setupActiveElementForm", [props]);
      }
      // see if we have any configure settings or disable
      setProps("configure", this.t.configure, props.settings.configure);
      // see if we have any configure settings or disable
      setProps("advanced", this.t.advanced, props.settings.advanced);
      // see if we have any configure settings or disable
      setProps("developer", this.t.developer, props.settings.developer);
      this.__activePropSchema = props;
      this.shadowRoot.querySelector("#settingsform").fields = [];
      this.shadowRoot.querySelector("#settingsform").value = {};
      this.shadowRoot.querySelector("#settingsform").fields = this.activeSchema;
      this.shadowRoot.querySelector("#settingsform").value = this.activeValue;
      this.loading = false;
    }
  }
  /**
   * Convert an object to an array
   */
  _toArray(obj) {
    if (obj == null) {
      return [];
    }
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  }
  /**
   * update hax map
   */
  updateMap() {
    if (
      this.shadowRoot &&
      this.shadowRoot.querySelector("hax-map") &&
      this.trayDetail == "content-map"
    )
      this.shadowRoot.querySelector("hax-map").updateHAXMap();
  }
  _updateTrayDetail(newValue) {
    if (
      newValue &&
      this.shadowRoot &&
      this.shadowRoot.querySelector(".detail")
    ) {
      this.shadowRoot.querySelector(".detail").style.width = "";
      this.shadowRoot.querySelector(".detail").style.height = "";
    }
    if (newValue == "content-add") {
      this.trayLabel = this.t.blocks;
      this._refreshAddData();
    } else if (newValue == "content-map") {
      this.trayLabel = this.t.structure;
      this.shadowRoot.querySelector("hax-map").updateHAXMap();
    } else if (newValue == "advanced-settings") {
      this.trayLabel = this.t.settings;
      this.shadowRoot
        .querySelector("hax-preferences-dialog")
        .reloadPreferencesForm();
    } else if (
      newValue == "content-edit" &&
      (!this.activeTagName ||
        this.activeTagName == "" ||
        !this.activeNode ||
        !this.activeNode.tagName)
    ) {
      this.trayDetail = "content-add";
    } else if (!newValue || newValue == "") {
      this.trayDetail = "content-edit";
    } else {
      this.trayLabel = undefined;
    }
    this.requestUpdate();
  }
  /**
   * Notice change in values from below
   */
  __valueChangedEvent(e) {
    if (this.editMode && e.detail.value && e.detail.value.settings) {
      let settings = e.detail.value.settings;
      let props = {
        ...HAXStore.elementList[this.activeNode.tagName.toLowerCase()],
      };
      let isGrid = props.type == "grid";
      let settingsKeys = {
        configure: "configure",
        advanced: "advanced",
        developer: "developer",
      };
      var setAhead;
      clearTimeout(this.__contextPropDebounce);
      this.__contextPropDebounce = setTimeout(() => {
        for (let key in settingsKeys) {
          for (let prop in settings[key]) {
            setAhead = false;
            if (settings[key][prop] != null && !settings[key][prop].readOnly) {
              // prefix is a special attribute and must be handled this way
              if (prop === "prefix" && settings[key][prop] != "") {
                this.activeNode.setAttribute("prefix", settings[key][prop]);
                setAhead = true;
              }
              // prefix is a special attribute and must be handled this way
              else if (prop === "data-hax-lock") {
                // broadcast that we just LOCKED it
                this.dispatchEvent(
                  new CustomEvent("hax-toggle-active-node-lock", {
                    bubbles: true,
                    composed: true,
                    cancelable: true,
                    detail: {
                      lock: settings[key][prop],
                      node: this.activeNode,
                    },
                  })
                );
                // also lock all fields except us
                this.__lockAllSettings(settings[key][prop]);
              }
              // innerText is another special case since it cheats on slot content
              // that is only a text node (like a link)
              else if (prop === "innerText") {
                this.activeNode.innerText = settings[key][prop];
                setAhead = true;
              }
              // this is a special internal held "property" for layout stuff
              else if (key === "advanced" && prop === "__position") {
                setAhead = true;
                if (!this._initial) {
                  clearTimeout(this.__contextValueDebounce);
                  this.__contextValueDebounce = setTimeout(() => {
                    this.dispatchEvent(
                      new CustomEvent("hax-context-item-selected", {
                        bubbles: true,
                        composed: true,
                        detail: {
                          eventName: settings[key][prop],
                          value: settings[key][prop],
                        },
                      })
                    );
                  }, 50);
                }
              }
              // this is a special internal held "property" for layout stuff
              else if (key === "advanced" && prop === "__scale") {
                setAhead = true;
                if (!this._initial) {
                  clearTimeout(this.__contextSizeDebounce);
                  this.__contextSizeDebounce = setTimeout(() => {
                    this.dispatchEvent(
                      new CustomEvent("hax-context-item-selected", {
                        bubbles: true,
                        composed: true,
                        detail: {
                          eventName: "hax-size-change",
                          value: settings[key][prop],
                        },
                      })
                    );
                  }, 50);
                }
              }
              // try and set the pop directly if it is a prop already set
              // check on prototype, then in properties object if it has one
              // then by seeing if we have an array / object
              else if (
                this.activeNode.hasOwnProperty(prop) ||
                (this.activeNode.properties &&
                  this.activeNode.properties.hasOwnProperty(prop)) ||
                (settings[key][prop] != null &&
                  settings[key][prop].constructor === Array) ||
                (settings[key][prop] != null &&
                  settings[key][prop].constructor === Object)
              ) {
                // in case your typing quickly don't instantly hammer a prop
                try {
                  if (settings[key][prop].constructor === Array) {
                    this.activeNode[prop] = [...settings[key][prop]];
                  } else if (settings[key][prop].constructor === Object) {
                    this.activeNode[prop] = { ...settings[key][prop] };
                  } else {
                    this.activeNode[prop] = settings[key][prop];
                  }
                  setAhead = true;
                } catch (e) {
                  console.warn(e);
                  setAhead = false;
                }
              } else if (!isGrid) {
                // need to specifically walk through slots if there is anything
                // that says it has to come from a slot
                for (let propTmp in this.__activePropSchema.settings[key]) {
                  if (
                    this.__activePropSchema.settings[key][propTmp].slot == prop
                  ) {
                    let slotTag = "span";
                    if (
                      this.__activePropSchema.settings[key][propTmp].slotWrapper
                    ) {
                      slotTag =
                        this.__activePropSchema.settings[key][propTmp]
                          .slotWrapper;
                    } else if (
                      //selects first wrapper from allowed list
                      this.__activePropSchema.settings[key][propTmp]
                        .allowedSlotWrappers &&
                      this.__activePropSchema.settings[key][propTmp]
                        .allowedSlotWrappers[0]
                    ) {
                      slotTag =
                        this.__activePropSchema.settings[key][propTmp]
                          .allowedSlotWrappers[0];
                    } else if (
                      this.activeNode.tagName.toLowerCase() === "code-editor"
                    ) {
                      slotTag = "template";
                    } else {
                      //selects wrapper that is not excluded
                      let wrappers = ["span", "div", "p"],
                        exclusions =
                          this.__activePropSchema.settings[key][propTmp]
                            .excludedSlotWrappers || [];
                      if (exclusions)
                        wrappers = wrappers.filter(
                          (wrapper) => !exclusions.includes(wrapper)
                        );
                    }
                    var tmpel = document.createElement(slotTag);
                    if (
                      this.__activePropSchema.settings[key][propTmp]
                        .slotAttributes
                    ) {
                      for (let attr in this.__activePropSchema.settings[key][
                        propTmp
                      ].slotAttributes) {
                        tmpel.setAttribute(
                          attr,
                          this.__activePropSchema.settings[key][propTmp]
                            .slotAttributes[attr]
                        );
                      }
                    }
                    // support unnamed slots
                    if (
                      this.__activePropSchema.settings[key][propTmp].slot !== ""
                    ) {
                      tmpel.slot =
                        this.__activePropSchema.settings[key][propTmp].slot;
                    }
                    tmpel.innerHTML = settings[key][prop];
                    const cloneIt = tmpel.cloneNode(true);
                    setAhead = true;
                    // inject the slotted content but use text nodes if this is a text element
                    if (HAXStore.isTextElement(this.activeNode)) {
                      this.activeNode.innerHTML = tmpel.innerHTML;
                    } else {
                      // wipe just the slot in question
                      wipeSlot(
                        this.activeNode,
                        this.__activePropSchema.settings[key][propTmp].slot
                      );
                      this.activeNode.appendChild(cloneIt);
                    }
                  }
                }
              }
              // this will get reached often but tough to know if we had a slot
              if (!setAhead && camelCaseToDash(prop) != "") {
                try {
                  // silly but this is the spec way to do a boolean
                  if (settings[key][prop] === true) {
                    this.activeNode.setAttribute(
                      camelCaseToDash(prop),
                      camelCaseToDash(prop)
                    );
                  } else if (
                    settings[key][prop] === false ||
                    settings[key][prop] === ""
                  ) {
                    this.activeNode.removeAttribute(camelCaseToDash(prop));
                  } else {
                    this.activeNode.setAttribute(
                      camelCaseToDash(prop),
                      settings[key][prop]
                    );
                  }
                } catch (e) {
                  console.warn(e);
                  console.warn(prop, settings[key][prop]);
                }
              }
            } else {
              if (prop === "data-hax-lock") {
                // broadcast that we just UNLOCKED it
                this.dispatchEvent(
                  new CustomEvent("hax-toggle-active-node-lock", {
                    bubbles: true,
                    composed: true,
                    cancelable: true,
                    detail: {
                      lock: false,
                      node: this.activeNode,
                    },
                  })
                );
                this.__lockAllSettings(false);
              }
              this.activeNode.removeAttribute(camelCaseToDash(prop));
            }
          }
        }
      }, 100);
    }
    setTimeout(() => {
      if (this._initial) {
        this._initial = false;
      }
    }, 51);
  }
  /**
   * Lock / unlock all settings on the tray for the active node form
   */
  __lockAllSettings(status) {
    this.shadowRoot
      .querySelectorAll(
        "simple-fields-tab *[is-simple-field-type]:not([name='settings.advanced.data-hax-lock'])"
      )
      .forEach((node) => {
        node.disabled = status;
      });
  }
  /**
   * _editModeChanged
   */
  _editModeChanged(newValue) {
    if (
      !this.hidePanelOps &&
      this.shadowRoot &&
      this.shadowRoot.querySelector("#button")
    ) {
      if (newValue) {
        this.shadowRoot.querySelector("#button").icon = "save";
      } else {
        this.shadowRoot.querySelector("#button").icon = "create";
      }
    }
  }
  /**
   * Edit clicked, activate
   */
  _clickEditButton(e) {
    HAXStore.editMode = true;
    window.dispatchEvent(
      new CustomEvent("simple-modal-hide", {
        bubbles: true,
        cancelable: true,
        detail: {},
      })
    );
  }

  /**
   * Toggle the drawer when the button is clicked.
   */
  _clickSaveButton(e) {
    HAXStore.editMode = false;
    this.dispatchEvent(
      new CustomEvent("hax-save", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: e.detail,
      })
    );
    window.dispatchEvent(
      new CustomEvent("simple-modal-hide", {
        bubbles: true,
        cancelable: true,
        detail: {},
      })
    );
  }
}

customElements.define(HaxTray.tag, HaxTray);
export { HaxTray };
