import { h } from "@stencil/core";
import copy from "copy-to-clipboard";
import { TextScramble } from "../../helpers/utils";
export class DecodeField {
  constructor() {
    this.disabled = true;
    this.value = "";
    this.autofill = false;
  }
  watchValueProp(newValue) {
    this.display.setText(newValue);
  }
  componentDidLoad() {
    this.display = new TextScramble(this.labelElem);
  }
  copyToClipboard() {
    if (this.disabled) {
      this.presentToast("You need a Master Password.", "danger");
      return;
    }
    copy(this.value);
    this.onCopy.emit(this.value);
    this.presentToast("Copied to Clipboard.", "dark");
  }
  async presentToast(message, color) {
    const toastController = document.querySelector("ion-toast-controller");
    await toastController.componentOnReady();
    const toast = await toastController.create({
      message: message,
      duration: 2000,
      mode: "ios",
      color: color
    });
    return await toast.present();
  }
  renderAction() {
    if (this.autofill) {
      return h(
        "ion-button",
        {
          class: "copy-button",
          color: "primary",
          size: "small",
          disabled: this.disabled
        },
        "Copy & Fill"
      );
    }
    return h(
      "ion-button",
      {
        class: "copy-button",
        mode: "ios",
        color: "dark",
        size: "default",
        disabled: this.disabled
      },
      h("ion-icon", {
        mode: "ios",
        slot: "icon-only",
        name: "copy",
        size: "default"
      })
    );
  }
  render() {
    return h(
      "ion-grid",
      null,
      h(
        "ion-row",
        { onClick: this.copyToClipboard.bind(this), class: "field" },
        h(
          "ion-col",
          null,
          h(
            "ion-label",
            { ref: el => (this.labelElem = el) },
            "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022"
          )
        ),
        this.renderAction()
      ),
      h("ion-toast-controller", null)
    );
  }
  static get is() {
    return "optr-decode-field";
  }
  static get originalStyleUrls() {
    return {
      $: ["decode-field.scss"]
    };
  }
  static get styleUrls() {
    return {
      $: ["decode-field.css"]
    };
  }
  static get properties() {
    return {
      disabled: {
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
        attribute: "disabled",
        reflect: false,
        defaultValue: "true"
      },
      value: {
        type: "string",
        mutable: false,
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
        attribute: "value",
        reflect: false,
        defaultValue: '""'
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
        reflect: false,
        defaultValue: "false"
      }
    };
  }
  static get events() {
    return [
      {
        method: "onCopy",
        name: "onCopy",
        bubbles: true,
        cancelable: true,
        composed: true,
        docs: {
          tags: [],
          text: ""
        },
        complexType: {
          original: "any",
          resolved: "any",
          references: {}
        }
      }
    ];
  }
  static get watchers() {
    return [
      {
        propName: "value",
        methodName: "watchValueProp"
      }
    ];
  }
}
