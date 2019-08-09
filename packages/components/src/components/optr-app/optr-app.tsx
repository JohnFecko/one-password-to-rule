import { Component, h, Prop, Watch } from "@stencil/core";
import { convertSecondsToReadable } from "../../helpers/utils";
import { generateOptr } from "@optr/lib";
import zxcvbn from "zxcvbn";

@Component({
  tag: "optr-app",
  styleUrl: "optr-app.scss"
})
export class OptrApp {
  decodeFieldElem: HTMLOptrDecodeFieldElement;
  passwordInput: HTMLOptrFieldElement;
  modifierInput: HTMLOptrFieldElement;
  @Prop({ mutable: true, reflect: true }) modifier: string;
  @Prop({ mutable: true }) passwordStrengthValue: number;
  @Prop({ mutable: true }) passwordStrengthLabel: string;
  @Prop({ mutable: true }) passwordStrengthColor: string;

  @Prop({ mutable: true }) password: string;
  @Prop({ mutable: true }) passwordEmpty: boolean = true;
  @Prop({ mutable: true }) passwordScore: number;
  @Prop({ mutable: true }) passwordCrackTime: string;
  @Prop({ mutable: true }) hashPassword: string;
  @Prop({ mutable: true }) hashPasswordCrackTime: string;

  @Prop() autofill: boolean;

  emptyValue: string = "•••• •••• •••• ••••";

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

  setPasswordStrength(score: number) {
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

  @Watch("modifier")
  updateModifier(newValue: string) {
    console.log("watchModifier: ", newValue);
    alert(newValue);
    this.modifierInput.value = newValue;
  }
  @Watch("password")
  updatePasswordState(newValue: string) {
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

  @Watch("hashPassword")
  passwordGeneration(newValue: string) {
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

  async presentAlert(header: string, message: string) {
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
    return (
      <p class="caption">
        <strong>Approximate Time to Crack:</strong> <br />
        Master: {this.passwordCrackTime} / Hash: {this.hashPasswordCrackTime}
        <br />
        <em>
          Online brute force attack on a service with no rate limiting (10req/s)
        </em>
      </p>
    );
  }

  render() {
    return (
      <div class="container">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <optr-field
                ref={el => (this.passwordInput = el)}
                label="Master Password"
                placeholder="Easy to remember passphrase"
                strengthIndicator={true}
                strengthColor={this.passwordStrengthColor}
                strengthLabel={this.passwordStrengthLabel}
                strengthValue={this.passwordStrengthValue}
                infoCallback={this.handlePasswordInfo.bind(this)}
                inputChange={this.handleInputChange.bind(this)}
              />

              <optr-field
                ref={el => (this.modifierInput = el)}
                label="Modifier"
                placeholder="Service specific value"
                infoCallback={this.handleModifierInfo.bind(this)}
                inputChange={this.handleInputChange.bind(this)}
              />

              <optr-decode-field
                ref={el => {
                  this.decodeFieldElem = el;
                }}
                autofill={this.autofill}
                value={this.hashPassword}
                disabled={this.passwordEmpty}
              />

              {this.renderTimeToCrack()}
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-alert-controller />
      </div>
    );
  }
}
