export declare class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: any;
  frame: number;
  frameRequest: any;
  resolve: any;
  constructor(el: any);
  setText(newText: any): Promise<unknown>;
  update(): void;
  randomChar(): string;
}
export declare function convertSecondsToReadable(seconds: any): string;
