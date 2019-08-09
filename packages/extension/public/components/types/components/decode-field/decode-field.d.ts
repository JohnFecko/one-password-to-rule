import { EventEmitter } from "../../stencil.core";
import { TextScramble } from "../../helpers/utils";
export declare class DecodeField {
  disabled: boolean;
  value: string;
  autofill: boolean;
  onCopy: EventEmitter;
  display: TextScramble;
  labelElem: HTMLIonLabelElement;
  watchValueProp(newValue: string): void;
  componentDidLoad(): void;
  copyToClipboard(): void;
  presentToast(message: string, color: string): Promise<void>;
  renderAction(): any;
  render(): any;
}
