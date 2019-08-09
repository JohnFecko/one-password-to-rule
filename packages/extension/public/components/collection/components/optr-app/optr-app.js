import { h } from "@stencil/core";
import { convertSecondsToReadable } from "../../helpers/utils";
import { generateOptr } from "@optr/lib";
import zxcvbn from "zxcvbn";
export class OptrApp {
  constructor() {
    this.passwordEmpty = true;
    this.emptyValue = "•••• •••• •••• ••••";
  }
  handleInputChange() {
    this.password = this.passwordInput.value;
    if (!this.passwordInput.value || this.passwordInput.value === "") {
      this.hashPassword = this.emptyValue;
      return;
    }
    if (!this.modifierInput.value) {
      this.modifierInput.value = "";
    }
    this.hashPassword = generateOptr(
      this.passwordInput.value,
      this.modifierInput.value
    );
  }
  setPasswordStrength(score) {
    // Return if password field is empty
    if (this.passwordEmpty) {
      this.passwordStrengthValue = 0;
      this.passwordStrengthColor = "primary";
      this.passwordStrengthLabel = "";
      return;
    }
    const scoreColors = ["danger", "danger", "warning", "warning", "success"];
    const scoreLabels = ["Worst", "Bad", "Weak", "Good", "Strong"];
    this.passwordStrengthLabel = scoreLabels[score];
    this.passwordStrengthColor = scoreColors[score];
    // Add 0.2 to display progress if score is 0
    this.passwordStrengthValue = score * 0.2 + 0.2;
  }
  updateModifier(newValue) {
    console.log("watchModifier: ", newValue);
    alert(newValue);
    this.modifierInput.value = newValue;
  }
  updatePasswordState(newValue) {
    this.passwordEmpty = newValue === "" ? true : false;
    let crackResults = zxcvbn(newValue);
    this.passwordScore = crackResults.score;
    this.setPasswordStrength(this.passwordScore);
    this.passwordCrackTime = convertSecondsToReadable(
      crackResults.crack_times_seconds.online_no_throttling_10_per_second
    );
    if (this.passwordEmpty) {
      this.passwordCrackTime = "0 seconds";
    }
  }
  passwordGeneration(newValue) {
    this.hashPasswordCrackTime = convertSecondsToReadable(
      zxcvbn(newValue).crack_times_seconds.online_no_throttling_10_per_second
    );
    if (this.passwordEmpty) {
      this.hashPasswordCrackTime = "0 seconds";
    }
    this.decodeFieldElem.value = newValue;
  }
  handlePasswordInfo() {
    this.presentAlert(
      "Master Password",
      "<p>Should be easy to remember and hard to guess. Using a passphrase is a great way to create an easy to remember master password.<strong> <br />i.e., lovelace first programmer blue</strong></p><p>This passphrase even though simple has an approximate crack time of 4,474 centuries</p>"
    );
  }
  handleModifierInfo() {
    this.presentAlert(
      "Modifier",
      "<p>Service-specific value. i.e., for Facebook, this could be <strong>f,  fb or facebook</strong></p><p>Whatever you select as the modifier, make sure it is consistent across all the services, this will keep the cognitive load very small.</p>"
    );
  }
  async presentAlert(header, message) {
    const alertController = document.querySelector("ion-alert-controller");
    await alertController.componentOnReady();
    const alert = await alertController.create({
      header: header,
      message: message,
      mode: "md",
      buttons: ["OK"]
    });
    return await alert.present();
  }
  renderTimeToCrack() {
    return h(
      "p",
      { class: "caption" },
      h("strong", null, "Approximate Time to Crack:"),
      " ",
      h("br", null),
      "Master: ",
      this.passwordCrackTime,
      " / Hash: ",
      this.hashPasswordCrackTime,
      h("br", null),
      h(
        "em",
        null,
        "Online brute force attack on a service with no rate limiting (10req/s)"
      )
    );
  }
  render() {
    return h(
      "div",
      { class: "container" },
      h(
        "ion-grid",
        null,
        h(
          "ion-row",
          null,
          h(
            "ion-col",
            { size: "12" },
            h("optr-field", {
              ref: el => (this.passwordInput = el),
              label: "Master Password",
              placeholder: "Easy to remember passphrase",
              strengthIndicator: true,
              strengthColor: this.passwordStrengthColor,
              strengthLabel: this.passwordStrengthLabel,
              strengthValue: this.passwordStrengthValue,
              infoCallback: this.handlePasswordInfo.bind(this),
              inputChange: this.handleInputChange.bind(this)
            }),
            h("optr-field", {
              ref: el => (this.modifierInput = el),
              label: "Modifier",
              placeholder: "Service specific value",
              infoCallback: this.handleModifierInfo.bind(this),
              inputChange: this.handleInputChange.bind(this)
            }),
            h("optr-decode-field", {
              ref: el => {
                this.decodeFieldElem = el;
              },
              autofill: this.autofill,
              value: this.hashPassword,
              disabled: this.passwordEmpty
            }),
            this.renderTimeToCrack()
          )
        )
      ),
      h("ion-alert-controller", null)
    );
  }
  static get is() {
    return "optr-app";
  }
  static get originalStyleUrls() {
    return {
      $: ["optr-app.scss"]
    };
  }
  static get styleUrls() {
    return {
      $: ["optr-app.css"]
    };
  }
  static get properties() {
    return {
      modifier: {
        type: "string",
        mutable: true,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "modifier",
        reflect: true
      },
      passwordStrengthValue: {
        type: "number",
        mutable: true,
        complexType: {
          original: "number",
          resolved: "number",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "password-strength-value",
        reflect: false
      },
      passwordStrengthLabel: {
        type: "string",
        mutable: true,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "password-strength-label",
        reflect: false
      },
      passwordStrengthColor: {
        type: "string",
        mutable: true,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "password-strength-color",
        reflect: false
      },
      password: {
        type: "string",
        mutable: true,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "password",
        reflect: false
      },
      passwordEmpty: {
        type: "boolean",
        mutable: true,
        complexType: {
          original: "boolean",
          resolved: "boolean",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "password-empty",
        reflect: false,
        defaultValue: "true"
      },
      passwordScore: {
        type: "number",
        mutable: true,
        complexType: {
          original: "number",
          resolved: "number",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "password-score",
        reflect: false
      },
      passwordCrackTime: {
        type: "string",
        mutable: true,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "password-crack-time",
        reflect: false
      },
      hashPassword: {
        type: "string",
        mutable: true,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "hash-password",
        reflect: false
      },
      hashPasswordCrackTime: {
        type: "string",
        mutable: true,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "hash-password-crack-time",
        reflect: false
      },
      autofill: {
        type: "boolean",
        mutable: false,
        complexType: {
          original: "boolean",
          resolved: "boolean",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "autofill",
        reflect: false
      }
    };
  }
  static get watchers() {
    return [
      {
        propName: "modifier",
        methodName: "updateModifier"
      },
      {
        propName: "password",
        methodName: "updatePasswordState"
      },
      {
        propName: "hashPassword",
        methodName: "passwordGeneration"
      }
    ];
  }
}
