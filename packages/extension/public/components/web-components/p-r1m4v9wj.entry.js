import { r as s, c as t, e, h as r, H as n } from "./p-57e9347d.js";
import { c as i } from "./p-955ba954.js";
const a = {
    lines: {
      dur: 1e3,
      lines: 12,
      fn: (s, t, e) => ({
        y1: 17,
        y2: 29,
        style: {
          transform: `rotate(${30 * t + (t < 6 ? 180 : -180)}deg)`,
          "animation-delay": `${(s * t) / e - s}ms`
        }
      })
    },
    "lines-small": {
      dur: 1e3,
      lines: 12,
      fn: (s, t, e) => ({
        y1: 12,
        y2: 20,
        style: {
          transform: `rotate(${30 * t + (t < 6 ? 180 : -180)}deg)`,
          "animation-delay": `${(s * t) / e - s}ms`
        }
      })
    },
    bubbles: {
      dur: 1e3,
      circles: 9,
      fn: (s, t, e) => {
        const r = `${(s * t) / e - s}ms`,
          n = (2 * Math.PI * t) / e;
        return {
          r: 5,
          style: {
            top: `${9 * Math.sin(n)}px`,
            left: `${9 * Math.cos(n)}px`,
            "animation-delay": r
          }
        };
      }
    },
    circles: {
      dur: 1e3,
      circles: 8,
      fn: (s, t, e) => {
        const r = t / e,
          n = `${s * r - s}ms`,
          i = 2 * Math.PI * r;
        return {
          r: 5,
          style: {
            top: `${9 * Math.sin(i)}px`,
            left: `${9 * Math.cos(i)}px`,
            "animation-delay": n
          }
        };
      }
    },
    crescent: { dur: 750, circles: 1, fn: () => ({ r: 26, style: {} }) },
    dots: {
      dur: 750,
      circles: 3,
      fn: (s, t) => ({
        r: 6,
        style: { left: `${9 - 9 * t}px`, "animation-delay": -110 * t + "ms" }
      })
    }
  },
  l = class {
    constructor(t) {
      s(this, t), (this.paused = !1);
    }
    getName() {
      const s = this.name || t.get("spinner"),
        r = e(this);
      return s || ("ios" === r ? "lines" : "crescent");
    }
    render() {
      const s = e(this),
        l = this.getName(),
        m = a[l] || a.lines,
        y =
          "number" == typeof this.duration && this.duration > 10
            ? this.duration
            : m.dur,
        f = [];
      if (void 0 !== m.circles)
        for (let s = 0; s < m.circles; s++) f.push(o(m, y, s, m.circles));
      else if (void 0 !== m.lines)
        for (let s = 0; s < m.lines; s++) f.push(c(m, y, s, m.lines));
      return r(
        n,
        {
          class: Object.assign({}, i(this.color), {
            [s]: !0,
            [`spinner-${l}`]: !0,
            "spinner-paused": !!this.paused || t.getBoolean("_testing")
          })
        },
        f
      );
    }
    static get style() {
      return ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}";
    }
  },
  o = (s, t, e, n) => {
    const i = s.fn(t, e, n);
    return (
      (i.style["animation-duration"] = `${t}ms`),
      r(
        "svg",
        { viewBox: "0 0 64 64", style: i.style },
        r("circle", { transform: "translate(32,32)", r: i.r })
      )
    );
  },
  c = (s, t, e, n) => {
    const i = s.fn(t, e, n);
    return (
      (i.style["animation-duration"] = `${t}ms`),
      r(
        "svg",
        { viewBox: "0 0 64 64", style: i.style },
        r("line", { transform: "translate(32,32)", y1: i.y1, y2: i.y2 })
      )
    );
  };
export { l as ion_spinner };
