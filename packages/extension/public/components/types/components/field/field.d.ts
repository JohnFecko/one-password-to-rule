export declare class Field {
  label: string;
  placeholder: string;
  value: string;
  strengthColor: string;
  strengthLabel: string;
  strengthValue: number;
  strengthIndicator: boolean;
  infoCallback: Function;
  inputChange: Function;
  inputElement: HTMLIonInputElement;
  onInputChange(): void;
  render(): any;
}
