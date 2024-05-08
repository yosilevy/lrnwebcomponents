// superclass that can be used to more rapidly build question based components
import { LitElement, html, css } from "lit";
import { SchemaBehaviors } from "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
import { DDDSuper } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-fields/lib/simple-fields-field.js";
import "@lrnwebcomponents/simple-toolbar/lib/simple-toolbar-button.js";
import "@lrnwebcomponents/simple-toast/simple-toast.js";


export class QuestionElement extends SchemaBehaviors(DDDSuper(LitElement)) {

  constructor() {
    super();
    // default method of storing guess data
    this.__primaryGuess = "display";
    this.shadowRootOptions = {
      ...LitElement.shadowRootOptions,
      delegatesFocus: true,
    };
    this.showAnswer = false;
    this.randomize = false;
    this.hideButtons = false;
    this.disabled = false;
    this.singleOption = false;
    this.checkLabel = "Check answer";
    this.resetLabel = "Try again";
    this.question = "";
    this.answers = [];
    this.displayedAnswers = [];
    this.selectedAnswers = [];
    this.correctText = "Great job!";
    this.correctIcon = "icons:thumb-up";
    this.incorrectText = "Better luck next time!";
    this.incorrectIcon = "icons:thumb-down";
    this.quizName = "default";
  }
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      let notifiedProps = ["answers", "displayedAnswers"];
      if (notifiedProps.includes(propName)) {
        // notify
        let eventName = `${propName
          .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
          .toLowerCase()}-changed`;
        this.dispatchEvent(
          new CustomEvent(eventName, {
            detail: {
              value: this[propName],
            },
          }),
        );
      }
      if (propName == "answers" && this.answers && this.answers.length > 0) {
        this.displayedAnswers = [
          ...this._computeDisplayedAnswers(this.answers, this.randomize),
        ];
      }
    });
  }
  // return array of all guesses
  getGuess() {
    if (this.__primaryGuess == "display") {
      return this.displayedAnswers.filter(item => item.userGuess === true);
    }
    // see if we have another key that can be used as alternative for where this data is stored
    else if (this[this.__primaryGuess]) {
      return this[this.__primaryGuess];
    }
  }
  // count of all guesses
  guessCount() {
    return this.getGuess().length;
  }

  checkedEvent(e) {
    // ensure there's a match w/ the event data
    this.displayedAnswers[e.target.name].userGuess = e.detail.value;
    this.requestUpdate();
  }

  /**
   * Reset user answers and shuffle the board again.
   */
  resetAnswer(e) {
    this.showAnswer = false;
    globalThis.dispatchEvent(
      new CustomEvent("simple-toast-hide", {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: false,
      }),
    );
    this.displayedAnswers = [];
    this.answers.forEach((el) => {
      el.userGuess = "";
    });
    const answers = JSON.parse(JSON.stringify(this.answers));
    this.answers = [...answers];
  }

  /**
   * Return if the current answers are correct
   */
  __checkAnswerCorrectness() {
    let gotRight = true;
    // see that they got them all right
    for (var i in this.displayedAnswers) {
      if (
        gotRight != false &&
        this.displayedAnswers[i].correct &&
        this.displayedAnswers[i].userGuess
      ) {
        gotRight = true;
      } else if (
        this.displayedAnswers[i].correct &&
        !this.displayedAnswers[i].userGuess
      ) {
        gotRight = false;
      } else if (
        !this.displayedAnswers[i].correct &&
        this.displayedAnswers[i].userGuess
      ) {
        gotRight = false;
      }
    }
    return gotRight;
  }
  /**
   * Verify the answers of the user based on their saying
   * that they want to see how they did.
   */
  checkAnswer(e) {
    globalThis.dispatchEvent(
      new CustomEvent("simple-toast-hide", {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: false,
      }),
    );
    let si = document.createElement("simple-icon-lite");
    let extras = {};
    let toastShowEventName = "simple-toast-show";
    // support for haxcms toast
    if (globalThis.HAXCMSToast) {
      toastShowEventName = "haxcms-toast-show";
      si.style.setProperty("--simple-icon-height", "40px");
      si.style.setProperty("--simple-icon-width", "40px");
      si.style.height = "150px";
      si.style.marginLeft = "8px";
    }
    this.showAnswer = true;
    let gotRight = this.__checkAnswerCorrectness();
    // regardless, focus the other button since this one will disable
    // @todo max attempts can come into play here
    if (!this.maxAttempts) {
      setTimeout(() => {
        this.shadowRoot.querySelector("#reset").focus();        
      }, 0);
    }
    // see if they got this correct based on their answers
    if (gotRight) {
      this.__toastColor = "green";
      this.__toastIcon = this.correctIcon;
      this.__toastText = this.correctText;
      // make it fun... and performant!
      import("./confetti-container.js").then((module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      });
      extras.hat = "party";
    } else {
      this.__toastColor = "red";
      this.__toastIcon = this.incorrectIcon;
      this.__toastText = this.incorrectText;
      extras.fire = true;
    }
    si.icon = this.__toastIcon;
    si.style.marginLeft = "16px";
    si.accentColor = this.__toastColor;
    si.dark = true;
    // gets it all the way to the top immediately
    globalThis.dispatchEvent(
      new CustomEvent(toastShowEventName, {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {
          text: this.__toastText,
          accentColor: this.__toastColor,
          duration: 3000,
          slot: si,
          ...extras,
        },
      }),
    );
    // start of data passing, this is a prototype atm
    let eventData = {
      activityDisplay: "answered",
      objectName: this.quizName,
      resultSuccess: gotRight,
    };
    this.dispatchEvent(
      new CustomEvent("user-engagement", {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: eventData,
      }),
    );
  }

  /**
   * Figure out the order of the answers which will be displayed
   */
  _computeDisplayedAnswers(answers, randomize) {
    // if we are editing via HAX, don't randomize the answers
    // as we are actively editing the content and this is amazingly jarring
    if (
      typeof answers !== typeof undefined &&
      answers != null &&
      answers.length > 0 &&
      randomize &&
      !this._haxstate
    ) {
      let random = answers;
      var currentIndex = random.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = random[currentIndex];
        random[currentIndex] = random[randomIndex];
        random[randomIndex] = temporaryValue;
      }
      // @todo apply a random sort to the answers array
      return random;
    } else {
      return answers;
    }
  }
  static get properties() {
    return {
      ...super.properties,
      // show the solution feedback to the user
      showAnswer: { type: Boolean, reflect: true, attribute: "show-answer" },
      // questions that require generation of multiple arrays of data
      selectedAnswers: { type: Array },
      /**
       * Support disabling interaction with the entire board
       */
      disabled: {
        type: Boolean,
      },
      /**
       * Simple option, otherwise allow multiple via checkbox
       */
      singleOption: {
        type: Boolean,
        attribute: "single-option",
      },
      /**
       * Text of the label to check your answer
       */
      checkLabel: {
        type: String,
        attribute: "check-label",
      },
      /**
       * Text of the reset button
       */
      resetLabel: {
        type: String,
        attribute: "reset-label",
      },
      /**
       * Related Resource ID
       */
      relatedResource: {
        type: String,
        attribute: "related-resource",
      },
      /**
       * Question to ask
       */
      question: {
        type: String,
      },
      /**
       * Array of possible answers
       */
      answers: {
        type: Array,
      },
      /**
       * Displayed Answer set.
       */
      displayedAnswers: {
        type: Array,
      },
      /**
       * Correct answer text to display
       */
      correctText: {
        type: String,
        attribute: "correct-text",
      },
      /**
       * Incorrect answer text to display
       */
      incorrectText: {
        type: String,
        attribute: "incorrect-text",
      },
      /**
       * Correct answer text to display
       */
      correctIcon: {
        type: String,
        attribute: "correct-icon",
      },
      /**
       * Incorrect answer text to display
       */
      incorrectIcon: {
        type: String,
        attribute: "incorrect-icon",
      },
      /**
       * Name of the quiz - hardcoded for now from HTML
       */
      quizName: {
        type: String,
        attribute: "quiz-name",
      },
      /**
       * Randomize the display of the answers
       */
      randomize: {
        type: Boolean,
        reflect: true,
      },
      /**
       * flag to hide buttons
       */
      hideButtons: {
        type: Boolean,
        attribute: "hide-buttons",
      },
    };
  }
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-width: 160px;
          padding: var(--ddd-spacing-8);
          border: var(--ddd-border-md);
          background-color: var(--simple-colors-default-theme-accent-1);
          border-radius: var(--ddd-radius-xs);
          transition: all 0.3s ease-in-out;
          color: var(--simple-colors-default-theme-grey-12);
          --simple-toolbar-button-border-color: var(
            --simple-colors-default-theme-grey-4
          );
          --simple-fields-field-color: var(
            --simple-colors-default-theme-grey-12
          );
          --simple-fields-field-ink-color: var(
            --simple-colors-default-theme-grey-12
          );
          --simple-fields-field-checked-color: var(
            --simple-colors-default-theme-accent-8
          );
          --simple-fields-field-checked-ink-color: var(
            --simple-colors-default-theme-accent-8
          );
          --simple-fields-field-checkmark-color: var(
            --simple-colors-default-theme-grey-1
          );
          --simple-fields-field-label-color: var(
            --simple-colors-default-theme-grey-12
          );
          --simple-fields-field-error-color: var(
            --simple-colors-default-theme-red-8
          );
          --simple-fields-border-bottom-size: 0px;
          --simple-fields-border-bottom-focus-size: 0px;
        }

        :host(:focus),
        :host(:focus-within),
        :host(:hover) {
          border-color: var(--simple-colors-default-theme-accent-12);
        }

        :host button {
          background-color: var(--simple-colors-default-theme-grey-1);
          color: var(--simple-colors-default-theme-grey-12);
        }
        :host simple-fields-field:hover,
        :host simple-fields-field:focus,
        :host simple-fields-field:focus-within,
        :host simple-fields-field:active {
          cursor: pointer;
          background-color: var(--simple-colors-default-theme-accent-3);
          color: var(--simple-colors-default-theme-accent-12);
          box-shadow: var(--ddd-boxShadow-sm);
          border-color: black;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        h3 {
          padding: 0;
          margin: 0 0 var(--ddd-spacing-8) 0;
          font-family: var(--ddd-font-navigation);
        }
        ul li {
          padding: 0;
        }
        simple-icon {
          display: inline-flex;
        }
        #buttons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin: var(--ddd-spacing-4) 0 0 0;
        }
        #check {
          margin-right: var(--ddd-spacing-4);
        }
        simple-fields-field {
          padding: var(--ddd-spacing-4);
          min-height: var(--ddd-spacing-8);
          margin: var(--ddd-spacing-4);
          transition: all 0.3s ease-in-out;
          border: var(--ddd-border-md);
          border-radius: var(--ddd-radius-xs);
          color: var(--simple-colors-default-theme-accent-10);
          background-color: var(--simple-colors-default-theme-accent-2);
          --simple-fields-font-family: var(--ddd-font-navigation);
          --simple-fields-font-size: var(--ddd-font-size-xs);
          --simple-fields-line-height: var(--ddd-font-size-xs);
          --simple-icon-height: var(--ddd-icon-xs);
          --simple-icon-width: var(--ddd-icon-xs);
        }
        simple-toolbar-button {
          font-size: var(--ddd-font-size-xs);
          font-family: var(--ddd-font-navigation);
          transition: all 0.3s ease-in-out;
        }
        simple-toolbar-button[disabled] {
          opacity: 0.6;
        }
        button[disabled]:not(.correct) {
          opacity: 0.6;
        }
        :host simple-toolbar-button:hover::part(button),
        :host simple-toolbar-button:focus::part(button),
        :host simple-toolbar-button:focus-within::part(button),
        :host simple-toolbar-button:active::part(button) {
          cursor: pointer;
          background-color: var(--simple-colors-default-theme-accent-3);
          color: var(--simple-colors-default-theme-accent-12);
          box-shadow: var(--ddd-boxShadow-sm);
          border-color: black;
        }
        simple-toolbar-button::part(button) {
          border: var(--ddd-border-md);
          border-radius: var(--ddd-radius-xs);
          padding: var(--ddd-spacing-2);
          transition: all 0.3s ease-in-out;
        }
        simple-toolbar-button::part(label) {
          font-size: var(--ddd-font-size-xs);
          font-family: var(--ddd-font-navigation);
          padding: 0;
          margin: 0;
        }
        simple-fields-field::part(option-inner) {
          position: absolute;
          right: 0px;
          font-family: var(--ddd-font-navigation);
          font-size: var(--ddd-font-size-xs);
          bottom: 50%;
          top: 50%;
          padding: 0px;
          margin: 0px;
        }
        ul,
        ol {
          gap: var(--ddd-spacing-4);
        }
        simple-icon {
          display: inline-flex;
        }
      `,
    ];
  }

  /**
   * HAX preprocess Node to Content hook
   */
  async haxpreProcessNodeToContent(node) {
    // ensure we dont accidently have the answer displayed!
    // this also rips the data into the lightDom for saving
    // so that we can unset the array data on the object at save time
    // this helps improve SEO / compatibility with CMS solutions
    if (node.answers) {
      // ensure this is null before generating new answers
      // otherwise page to page saves we could lose statefulness
      this.innerHTML = "";
      for (var i in node.answers) {
        if (node.answers[i]) {
          let answer = document.createElement("input");
          answer.setAttribute("type", "checkbox");
          answer.value = node.answers[i].label;
          if (node.answers[i].correct) {
            answer.setAttribute("correct", "correct");
          }
          node.appendChild(answer);
        }
      }
    }
    return node;
  }

  /**
   * HAX preprocess insert content hook
   */
  haxpreProcessInsertContent(detail, activeNode) {
    // ensure we dont accidently have the answer displayed!
    if (detail.properties.answers) {
      detail.properties.answers = detail.properties.answers.map(function (val) {
        if (val.userGuess) {
          delete val.userGuess;
        }
        return val;
      });
    }
    return detail;
  }
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.setAttribute("typeof", "oer:Assessment");
    // check lightdom on setup for answers to be read in
    // this only happens on initial paint
    this.loadLightDomData();
  }

  render() {
    return html`
      <confetti-container id="confetti">
        <meta property="oer:assessing" content="${this.relatedResource}" />
        <h3 property="oer:name">${this.question}</h3>
          <fieldset id="answers">
            ${this.displayedAnswers.map(
              (answer, index) => html`
                <simple-fields-field
                  type="${this.singleOption ? "radio" : "checkbox"}"
                  ?disabled="${this.disabled}"
                  property="oer:answer"
                  name="${index}"
                  @mousedown="${this.clickSingle}"
                  @keydown="${this.clickSingle}"
                  .value="${answer ? answer.userGuess : ""}"
                  @value-changed="${this.checkedEvent}"
                  label="${answer && answer.label ? answer.label : ""}"
                ></simple-fields-field>
              `,
            )}
          </fieldset>
        ${!this.hideButtons ? this.renderButtons() : ``}
      </confetti-container>
    `;
  }

  renderButtons() {
    return html`
    <div id="buttons">
      <simple-toolbar-button
        id="check"
        ?disabled="${this.disabled || this.guessCount() === 0 || this.showAnswer}"
        @click="${this.checkAnswer}"
        label="${this.checkLabel}"
      >
      </simple-toolbar-button>
      <simple-toolbar-button
        id="reset"
        ?disabled="${this.disabled || this.guessCount() === 0 || (this.guessCount() !== 0 && !this.showAnswer)}"
        @click="${this.resetAnswer}"
        label="${this.resetLabel}"
      >
      </simple-toolbar-button>
    </div>
  `;
  }

  clickSingle(e) {  
    // single option shortcut only bc we have to wipe all others
    if (this.singleOption) {
      let proceed = false;
      // ensure if it's a keyboard it was enter or space
      if (e.key) {
        if (e.key === " " || e.key === "Enter") {
          proceed = true;
        }
        else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (e.target.previousElementSibling) {
            e.target.previousElementSibling.focus();
          }
          else {
            e.target.parentNode.lastElementChild.focus();
          }
        }
        else if (e.key === "ArrowDown") {
          e.preventDefault();
          if (e.target.nextElementSibling) {
            e.target.nextElementSibling.focus();
          }
          else {
            e.target.parentNode.firstElementChild.focus();
          }
        }
      }
      // if click then we process regardless
      else {
        proceed = true;
      }
      // wipe answer data, THEN update will happen later when all the values change
      if (proceed) {
        for (let i in this.displayedAnswers) {
          if (i === e.target.name) {
            if (e.key) {
              if (this.displayedAnswers[i].userGuess) {
                this.displayedAnswers[i].userGuess = "";
              }
              else {
                this.displayedAnswers[i].userGuess = true;
              }
            }
          }
          else {
            this.displayedAnswers[i].userGuess = (i === e.target.name) ? true : "";
          }
        }
      }
    }
    else {
      if (e.key) {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          if (e.target.previousElementSibling) {
            e.target.previousElementSibling.focus();
          }
          else {
            e.target.parentNode.lastElementChild.focus();
          }
        }
        else if (e.key === "ArrowDown") {
          e.preventDefault();
          if (e.target.nextElementSibling) {
            e.target.nextElementSibling.focus();
          }
          else {
            e.target.parentNode.firstElementChild.focus();
          }
        }
        else if (e.key === "Enter") {
          this.displayedAnswers[e.target.name].userGuess = (this.displayedAnswers[e.target.name].userGuess) ? "" : true;
        }
      }
    }
    this.requestUpdate();
  }

  loadLightDomData() {
    if (this.children.length > 0) {
      let inputs = Array.from(this.querySelectorAll("input,li"));
      let answers = [];
      for (var i in inputs) {
        let answer = {
          label: inputs[i].value || inputs[i].innerText,
          correct: inputs[i].getAttribute("correct") == null ? false : true,
          selectedFeedback: inputs[i].getAttribute("data-selected") || null,
          unselectedFeedback: inputs[i].getAttribute("data-unselected") || null,
        };
        answers.push(answer);
      }
      this.answers = answers;
      // look for light dom slot markers
      const correctLD = this.querySelector('[slot="correct-feedback"]');
      const incorrectLD = this.querySelector('[slot="incorrect-feedback"]');
      const questionLD = this.querySelector('[slot="question"]');
      if (correctLD) {
        this.correctText = correctLD.innerText;
      }
      if (incorrectLD) {
        this.incorrectText = incorrectLD.innerText;
      }
      if (questionLD) {
        this.question = questionLD.innerText;
      }
      // wipe lightdom after reading it in for data. This makes it harder for someone
      // to just inspect the document and get at the underlying data

      this.innerHTML = "";
    }
  }

  haxactiveElementChanged(element, value) {
    if (value) {
      this._haxstate = value;
    }
  }

  haxeditModeChanged(value) {
    this._haxstate = value;
  }

    /**
   * Implements haxHooks to tie into life-cycle if hax exists.
   */
    haxHooks() {
      return {
        editModeChanged: "haxeditModeChanged",
        activeElementChanged: "haxactiveElementChanged",
        preProcessNodeToContent: "haxpreProcessNodeToContent",
        preProcessInsertContent: "haxpreProcessInsertContent",
      };
    }
}