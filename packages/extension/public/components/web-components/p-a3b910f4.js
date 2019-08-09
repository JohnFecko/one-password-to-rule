import "./p-57e9347d.js";
import { createGesture as t } from "./p-24ef4e55.js";
const e = (e, o, r, n, s) => {
  const a = e.ownerDocument.defaultView;
  return t({
    el: e,
    gestureName: "goback-swipe",
    gesturePriority: 40,
    threshold: 10,
    canStart: t => t.startX <= 50 && o(),
    onStart: r,
    onMove: t => {
      n(t.deltaX / a.innerWidth);
    },
    onEnd: t => {
      const e = a.innerWidth,
        o = t.deltaX / e,
        r = t.velocityX,
        n = r >= 0 && (r > 0.2 || t.deltaX > e / 2),
        c = (n ? 1 - o : o) * e;
      let i = 0;
      if (c > 5) {
        const t = c / Math.abs(r);
        i = Math.min(t, 300);
      }
      s(n, o, i);
    }
  });
};
export { e as createSwipeBackGesture };
