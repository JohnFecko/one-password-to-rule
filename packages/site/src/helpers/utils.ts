// Thanks to https://codepen.io/soulwire/pen/mErPAK
export class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: any;
  frame: number;
  frameRequest: any;
  resolve: any;
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

export function convertSecondsToReadable(seconds) {
  var timeString = "";

  // Enumerate all the numbers
  var numMilliseconds = seconds * 1000;
  var numSeconds = Math.floor(seconds);
  var numMinutes = Math.floor(numSeconds / 60);
  var numHours = Math.floor(numSeconds / (60 * 60));
  var numDays = Math.floor(numSeconds / (60 * 60 * 24));
  var numYears = Math.floor(numSeconds / (60 * 60 * 24 * 365));
  var numCenturies = Math.floor(numSeconds / (60 * 60 * 24 * 365 * 100));

  if (numMilliseconds < 1000) {
    timeString = numMilliseconds + " milliseconds";
  } else if (numSeconds < 60) {
    timeString = numSeconds + " seconds";
  } else if (numMinutes < 60) {
    timeString = numMinutes + " minutes";
  } else if (numHours < 24) {
    timeString = numHours + " hours";
  } else if (numDays < 365) {
    timeString = numDays + " days";
  } else if (numYears < 100) {
    timeString = numYears + " years";
  } else {
    timeString = numCenturies + " centuries";
  }

  return timeString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
