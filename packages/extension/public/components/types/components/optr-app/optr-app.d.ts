export declare class OptrApp {
  decodeFieldElem: HTMLOptrDecodeFieldElement;
  passwordInput: HTMLOptrFieldElement;
  modifierInput: HTMLOptrFieldElement;
  modifier: string;
  passwordStrengthValue: number;
  passwordStrengthLabel: string;
  passwordStrengthColor: string;
  password: string;
  passwordEmpty: boolean;
  passwordScore: number;
  passwordCrackTime: string;
  hashPassword: string;
  hashPasswordCrackTime: string;
  autofill: boolean;
  emptyValue: string;
  handleInputChange(): void;
  setPasswordStrength(score: number): void;
  updateModifier(newValue: string): void;
  updatePasswordState(newValue: string): void;
  passwordGeneration(newValue: string): void;
  handlePasswordInfo(): void;
  handleModifierInfo(): void;
  presentAlert(header: string, message: string): Promise<void>;
  renderTimeToCrack(): any;
  render(): any;
}
