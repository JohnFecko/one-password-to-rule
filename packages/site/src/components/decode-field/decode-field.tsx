import { Component, h, Prop, Watch } from "@stencil/core";
import copy from "copy-to-clipboard";
import { TextScramble } from "../../helpers/utils";

@Component({
  tag: "optr-decode-field",
  styleUrl: "decode-field.scss"
})
export class DecodeField {
  @Prop() disabled: boolean = true;
  @Prop() value: string = "";

  display: TextScramble;
  labelElem: HTMLIonLabelElement;

  @Watch("value")
  watchValueProp(newValue: string) {
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
    this.presentToast("Copied to Clipboard.", "dark");
  }

  async presentToast(message: string, color: string) {
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

  render() {
    return (
      <ion-grid>
        <ion-row onClick={this.copyToClipboard.bind(this)} class="field">
          <ion-col>
            <ion-label ref={el => (this.labelElem = el)}>●●●● ●●●● ●●●● ●●●●</ion-label>
          </ion-col>

          <ion-button class="copy-button" mode="ios" color="dark" size="default" disabled={this.disabled}>
            <ion-icon mode="ios" slot="icon-only" name="copy" size="default" />
          </ion-button>
        </ion-row>

        <ion-toast-controller />
      </ion-grid>
    );
  }
}
