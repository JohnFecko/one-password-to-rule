import {
  r as t,
  d as s,
  e as i,
  l as o,
  k as n,
  c as l,
  h,
  H as r,
  f as e
} from "./p-57e9347d.js";
import { c as a, h as c } from "./p-955ba954.js";
const d = class {
    constructor(i) {
      t(this, i),
        (this.isScrolling = !1),
        (this.lastScroll = 0),
        (this.queued = !1),
        (this.cTop = -1),
        (this.cBottom = -1),
        (this.detail = {
          scrollTop: 0,
          scrollLeft: 0,
          type: "scroll",
          event: void 0,
          startX: 0,
          startY: 0,
          startTimeStamp: 0,
          currentX: 0,
          currentY: 0,
          velocityX: 0,
          velocityY: 0,
          deltaX: 0,
          deltaY: 0,
          timeStamp: 0,
          data: void 0,
          isScrolling: !0
        }),
        (this.fullscreen = !1),
        (this.scrollX = !1),
        (this.scrollY = !0),
        (this.scrollEvents = !1),
        (this.ionScrollStart = s(this, "ionScrollStart", 7)),
        (this.ionScroll = s(this, "ionScroll", 7)),
        (this.ionScrollEnd = s(this, "ionScrollEnd", 7));
    }
    componentWillLoad() {
      if (void 0 === this.forceOverscroll) {
        const t = i(this);
        this.forceOverscroll = "ios" === t && o(window, "mobile");
      }
    }
    componentDidLoad() {
      this.resize();
    }
    componentDidUnload() {
      this.onScrollEnd();
    }
    onClick(t) {
      this.isScrolling && (t.preventDefault(), t.stopPropagation());
    }
    resize() {
      this.fullscreen
        ? n(this.readDimensions.bind(this))
        : (0 === this.cTop && 0 === this.cBottom) ||
          ((this.cTop = this.cBottom = 0), this.el.forceUpdate());
    }
    readDimensions() {
      const t = m(this.el),
        s = Math.max(this.el.offsetTop, 0),
        i = Math.max(t.offsetHeight - s - this.el.offsetHeight, 0);
      (s !== this.cTop || i !== this.cBottom) &&
        ((this.cTop = s), (this.cBottom = i), this.el.forceUpdate());
    }
    onScroll(t) {
      const s = Date.now(),
        i = !this.isScrolling;
      (this.lastScroll = s),
        i && this.onScrollStart(),
        !this.queued &&
          this.scrollEvents &&
          ((this.queued = !0),
          n(s => {
            (this.queued = !1),
              (this.detail.event = t),
              p(this.detail, this.scrollEl, s, i),
              this.ionScroll.emit(this.detail);
          }));
    }
    getScrollElement() {
      return Promise.resolve(this.scrollEl);
    }
    scrollToTop(t = 0) {
      return this.scrollToPoint(void 0, 0, t);
    }
    scrollToBottom(t = 0) {
      return this.scrollToPoint(
        void 0,
        this.scrollEl.scrollHeight - this.scrollEl.clientHeight,
        t
      );
    }
    scrollByPoint(t, s, i) {
      return this.scrollToPoint(
        t + this.scrollEl.scrollLeft,
        s + this.scrollEl.scrollTop,
        i
      );
    }
    async scrollToPoint(t, s, i = 0) {
      const o = this.scrollEl;
      if (i < 32)
        return (
          null != s && (o.scrollTop = s), void (null != t && (o.scrollLeft = t))
        );
      let n,
        l = 0;
      const h = new Promise(t => (n = t)),
        r = o.scrollTop,
        e = o.scrollLeft,
        a = null != s ? s - r : 0,
        c = null != t ? t - e : 0,
        d = t => {
          const s = Math.min(1, (t - l) / i) - 1,
            h = Math.pow(s, 3) + 1;
          0 !== a && (o.scrollTop = Math.floor(h * a + r)),
            0 !== c && (o.scrollLeft = Math.floor(h * c + e)),
            h < 1 ? requestAnimationFrame(d) : n();
        };
      return (
        requestAnimationFrame(t => {
          (l = t), d(t);
        }),
        h
      );
    }
    onScrollStart() {
      (this.isScrolling = !0),
        this.ionScrollStart.emit({ isScrolling: !0 }),
        this.watchDog && clearInterval(this.watchDog),
        (this.watchDog = setInterval(() => {
          this.lastScroll < Date.now() - 120 && this.onScrollEnd();
        }, 100));
    }
    onScrollEnd() {
      clearInterval(this.watchDog),
        (this.watchDog = null),
        this.isScrolling &&
          ((this.isScrolling = !1),
          this.ionScrollEnd.emit({ isScrolling: !1 }));
    }
    render() {
      const t = i(this),
        { scrollX: s, scrollY: o, forceOverscroll: n } = this,
        e = "ios" === t && l.getBoolean("experimentalTransitionShadow", !1);
      return (
        this.resize(),
        h(
          r,
          {
            class: Object.assign({}, a(this.color), {
              [t]: !0,
              "content-sizing": c("ion-popover", this.el),
              overscroll: !!this.forceOverscroll
            }),
            style: {
              "--offset-top": `${this.cTop}px`,
              "--offset-bottom": `${this.cBottom}px`
            }
          },
          h(
            "main",
            {
              class: {
                "inner-scroll": !0,
                "scroll-x": s,
                "scroll-y": o,
                overscroll: (s || o) && !!n
              },
              ref: t => (this.scrollEl = t),
              onScroll: t => this.onScroll(t)
            },
            h("slot", null)
          ),
          e
            ? h(
                "div",
                { class: "transition-effect" },
                h("div", { class: "transition-cover" }),
                h("div", { class: "transition-shadow" })
              )
            : null,
          h("slot", { name: "fixed" })
        )
      );
    }
    get el() {
      return e(this);
    }
    static get style() {
      return ':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}';
    }
  },
  m = t => {
    const s = t.closest("ion-tabs");
    return (
      s ||
      (t.closest("ion-app,ion-page,.ion-page,page-inner") ||
        (t =>
          t.parentElement
            ? t.parentElement
            : t.parentNode && t.parentNode.host
            ? t.parentNode.host
            : null)(t))
    );
  },
  p = (t, s, i, o) => {
    const n = t.currentX,
      l = t.currentY,
      h = s.scrollLeft,
      r = s.scrollTop,
      e = i - t.timeStamp;
    if (
      (o &&
        ((t.startTimeStamp = i),
        (t.startX = h),
        (t.startY = r),
        (t.velocityX = t.velocityY = 0)),
      (t.timeStamp = i),
      (t.currentX = t.scrollLeft = h),
      (t.currentY = t.scrollTop = r),
      (t.deltaX = h - t.startX),
      (t.deltaY = r - t.startY),
      e > 0 && e < 100)
    ) {
      const s = (r - l) / e;
      (t.velocityX = ((h - n) / e) * 0.7 + 0.3 * t.velocityX),
        (t.velocityY = 0.7 * s + 0.3 * t.velocityY);
    }
  };
export { d as ion_content };
