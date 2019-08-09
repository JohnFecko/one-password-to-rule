import { Component, h, Prop, Listen } from "@stencil/core";

@Component({
  tag: "optr-field",
  styleUrl: "field.scss"
})
export class Field {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop({ mutable: true }) value: string;
  @Prop() strengthColor: string;
  @Prop() strengthLabel: string;
  @Prop() strengthValue: number;
  @Prop() strengthIndicator: boolean;
  @Prop() infoCallback: Function;
  @Prop() inputChange: Function;

  inputElement: HTMLIonInputElement;

  @Listen("ionChange", { target: this.inputElement })
  onInputChange() {
    this.value = this.inputElement.value;
    this.inputChange();
  }

  render() {
    return (
      <ion-grid>
        <ion-row class="field-info" align-items-center>
          <ion-col>
            <ion-label>
              <strong>{this.label}</strong>
            </ion-label>
          </ion-col>
          <ion-col>
            <ion-row align-items-center justify-content-end>
              <ion-label align-items-end color={this.strengthColor}>
                {this.strengthLabel}
              </ion-label>
              <ion-icon onClick={this.infoCallback.bind(this)} name="information-circle" />
            </ion-row>
          </ion-col>
        </ion-row>
        <ion-row class="passwordInput inputBox">
          <ion-input
            name={this.label}
            type="text"
            class="code"
            ref={el => (this.inputElement = el)}
            clearInput
            debounce={500}
            placeholder={this.placeholder}
          />
          {this.strengthIndicator ? <ion-progress-bar color={this.strengthColor} value={this.strengthValue} /> : ""}
        </ion-row>
      </ion-grid>
    );
  }
}
