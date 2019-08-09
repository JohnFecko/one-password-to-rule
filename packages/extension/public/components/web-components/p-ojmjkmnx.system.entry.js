var __awaiter =
  (this && this.__awaiter) ||
  function(e, t, i, n) {
    return new (i || (i = Promise))(function(r, o) {
      function a(e) {
        try {
          l(n.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        try {
          l(n["throw"](e));
        } catch (e) {
          o(e);
        }
      }
      function l(e) {
        e.done
          ? r(e.value)
          : new i(function(t) {
              t(e.value);
            }).then(a, s);
      }
      l((n = n.apply(e, t || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(e, t) {
    var i = {
        label: 0,
        sent: function() {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      },
      n,
      r,
      o,
      a;
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol === "function" &&
        (a[Symbol.iterator] = function() {
          return this;
        }),
      a
    );
    function s(e) {
      return function(t) {
        return l([e, t]);
      };
    }
    function l(a) {
      if (n) throw new TypeError("Generator is already executing.");
      while (i)
        try {
          if (
            ((n = 1),
            r &&
              (o =
                a[0] & 2
                  ? r["return"]
                  : a[0]
                  ? r["throw"] || ((o = r["return"]) && o.call(r), 0)
                  : r.next) &&
              !(o = o.call(r, a[1])).done)
          )
            return o;
          if (((r = 0), o)) a = [a[0] & 2, o.value];
          switch (a[0]) {
            case 0:
            case 1:
              o = a;
              break;
            case 4:
              i.label++;
              return { value: a[1], done: false };
            case 5:
              i.label++;
              r = a[1];
              a = [0];
              continue;
            case 7:
              a = i.ops.pop();
              i.trys.pop();
              continue;
            default:
              if (
                !((o = i.trys), (o = o.length > 0 && o[o.length - 1])) &&
                (a[0] === 6 || a[0] === 2)
              ) {
                i = 0;
                continue;
              }
              if (a[0] === 3 && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                i.label = a[1];
                break;
              }
              if (a[0] === 6 && i.label < o[1]) {
                i.label = o[1];
                o = a;
                break;
              }
              if (o && i.label < o[2]) {
                i.label = o[2];
                i.ops.push(a);
                break;
              }
              if (o[2]) i.ops.pop();
              i.trys.pop();
              continue;
          }
          a = t.call(e, i);
        } catch (e) {
          a = [6, e];
          r = 0;
        } finally {
          n = o = 0;
        }
      if (a[0] & 5) throw a[1];
      return { value: a[0] ? a[1] : void 0, done: true };
    }
  };
System.register(
  [
    "./p-83e6ea9f.system.js",
    "./p-0958cff4.system.js",
    "./p-6a603f00.system.js"
  ],
  function(e) {
    "use strict";
    var t, i, n, r, o, a, s, l, u, c;
    return {
      setters: [
        function(e) {
          t = e.r;
          i = e.e;
          n = e.h;
          r = e.H;
          o = e.f;
          a = e.d;
        },
        function(e) {
          s = e.f;
        },
        function(e) {
          l = e.o;
          u = e.c;
          c = e.h;
        }
      ],
      execute: function() {
        var d = e(
          "ion_item",
          (function() {
            function e(e) {
              t(this, e);
              this.itemStyles = new Map();
              this.multipleInputs = false;
              this.button = false;
              this.detailIcon = "ios-arrow-forward";
              this.disabled = false;
              this.routerDirection = "forward";
              this.type = "button";
            }
            e.prototype.itemStyle = function(e) {
              e.stopPropagation();
              var t = e.target.tagName;
              var i = e.detail;
              var n = {};
              var r = this.itemStyles.get(t) || {};
              var o = false;
              Object.keys(i).forEach(function(e) {
                if (i[e]) {
                  var t = "item-" + e;
                  if (!r[t]) {
                    o = true;
                  }
                  n[t] = true;
                }
              });
              if (!o && Object.keys(n).length !== Object.keys(r).length) {
                o = true;
              }
              if (o) {
                this.itemStyles.set(t, n);
                this.el.forceUpdate();
              }
            };
            e.prototype.componentDidLoad = function() {
              var e = this.el.querySelectorAll(
                "ion-checkbox, ion-datetime, ion-select, ion-radio"
              );
              var t = this.el.querySelectorAll(
                "ion-input, ion-range, ion-searchbar, ion-segment, ion-textarea, ion-toggle"
              );
              this.multipleInputs = e.length + t.length > 1;
            };
            e.prototype.hasCover = function() {
              var e = this.el.querySelectorAll(
                "ion-checkbox, ion-datetime, ion-select, ion-radio"
              );
              return e.length === 1 && !this.multipleInputs;
            };
            e.prototype.isClickable = function() {
              return this.href !== undefined || this.button;
            };
            e.prototype.canActivate = function() {
              return this.isClickable() || this.hasCover();
            };
            e.prototype.render = function() {
              var e;
              var t = this,
                o = t.detail,
                a = t.detailIcon,
                s = t.download,
                d = t.lines,
                h = t.disabled,
                f = t.href,
                p = t.rel,
                b = t.target,
                y = t.routerDirection;
              var v = {};
              var m = i(this);
              var g = this.isClickable();
              var S = this.canActivate();
              var k = g ? (f === undefined ? "button" : "a") : "div";
              var _ =
                k === "button"
                  ? { type: this.type }
                  : { download: s, href: f, rel: p, target: b };
              var w = o !== undefined ? o : m === "ios" && g;
              this.itemStyles.forEach(function(e) {
                Object.assign(v, e);
              });
              return n(
                r,
                {
                  "aria-disabled": h ? "true" : null,
                  class: Object.assign(
                    {},
                    v,
                    u(this.color),
                    ((e = { item: true }),
                    (e[m] = true),
                    (e["item-lines-" + d] = d !== undefined),
                    (e["item-disabled"] = h),
                    (e["in-list"] = c("ion-list", this.el)),
                    (e["item-multiple-inputs"] = this.multipleInputs),
                    (e["ion-activatable"] = S),
                    (e["ion-focusable"] = true),
                    e)
                  )
                },
                n(
                  k,
                  Object.assign({}, _, {
                    class: "item-native",
                    disabled: h,
                    onClick: function(e) {
                      return l(f, e, y);
                    }
                  }),
                  n("slot", { name: "start" }),
                  n(
                    "div",
                    { class: "item-inner" },
                    n("div", { class: "input-wrapper" }, n("slot", null)),
                    n("slot", { name: "end" }),
                    w &&
                      n("ion-icon", {
                        icon: a,
                        lazy: false,
                        class: "item-detail-icon"
                      }),
                    n("div", { class: "item-inner-highlight" })
                  ),
                  S && m === "md" && n("ion-ripple-effect", null)
                ),
                n("div", { class: "item-highlight" })
              );
            };
            Object.defineProperty(e.prototype, "el", {
              get: function() {
                return o(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "style", {
              get: function() {
                return ":host{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--ripple-color:var(--ion-item-background-activated,currentColor);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;outline:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}:host(.ion-color) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color) .item-inner,:host(.ion-color) .item-native{border-color:var(--ion-color-shade)}:host(.ion-focused) .item-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}@media (any-hover:hover){:host(.ion-activatable:hover) .item-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color.ion-activatable:hover) .item-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.activated) .item-native{background:var(--background-activated);color:var(--color-activated)}:host(.item-disabled),:host(.item-interactive-disabled:not(.item-multiple-inputs)){cursor:default;pointer-events:none}:host(.item-disabled){opacity:.3}.item-native{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-native{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native::-moz-focus-inner{border:0}a,button{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-inner{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}::slotted(ion-icon){font-size:1.6em}::slotted(ion-button){--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}::slotted(ion-label){-ms-flex:1;flex:1}:host(.item-input),:host([vertical-align-top]){-ms-flex-align:start;align-items:flex-start}.input-wrapper{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.item-label-floating) .item-native,:host(.item-label-stacked) .item-native{-ms-flex-align:start;align-items:start}:host(.item-label-floating) .input-wrapper,:host(.item-label-stacked) .input-wrapper{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight,.item-inner-highlight{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight{height:var(--full-highlight-height)}.item-inner-highlight{height:var(--inset-highlight-height)}:host(.item-interactive.ion-touched.ion-invalid),:host(.item-interactive.item-has-focus){--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}:host(.item-interactive.item-has-focus){--highlight-background:var(--highlight-color-focused)}:host(.item-interactive.ion-valid){--highlight-background:var(--highlight-color-valid)}:host(.item-interactive.ion-invalid){--highlight-background:var(--highlight-color-invalid)}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}:host(.item-label-floating) ::slotted(ion-datetime),:host(.item-label-stacked) ::slotted(ion-datetime){--padding-start:0;width:100%}:host(.item-multiple-inputs) ::slotted(ion-checkbox),:host(.item-multiple-inputs) ::slotted(ion-datetime),:host(.item-multiple-inputs) ::slotted(ion-radio),:host(.item-multiple-inputs) ::slotted(ion-select){position:relative}:host(.item-textarea){-ms-flex-align:stretch;align-items:stretch}::slotted(ion-reorder[slot]){margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}:host{--min-height:48px;--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-activated:var(--background);--background-focused:var(--ion-item-background-focused,var(--ion-color-step-100,#e1e1e1));--background-hover:var(--ion-item-background-hover,rgba(var(--ion-text-color-rgb,0,0,0),0.04));--transition:background-color 300ms cubic-bezier(.4,0,.2,1);--padding-start:16px;--color:var(--ion-item-color,var(--ion-text-color,#000));--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--inner-padding-end:16px;--inner-border-width:0 0 1px 0;--highlight-height:2px;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:16px;font-weight:400;text-transform:none}:host(.ion-focused.activated) .item-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.activated) .item-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color.ion-focused.activated) .item-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}:host(.item-interactive){--inner-border-width:0}:host(.item-interactive),:host(.item-lines-full){--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}:host(.item-lines-inset){--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}:host(.item-lines-inset),:host(.item-lines-none){--border-width:0;--show-full-highlight:0}:host(.item-lines-full),:host(.item-lines-none){--inner-border-width:0;--show-inset-highlight:0}:host(.item-multi-line) ::slotted([slot=end]),:host(.item-multi-line) ::slotted([slot=start]){margin-top:16px;margin-bottom:16px;-ms-flex-item-align:start;align-self:flex-start}::slotted([slot=start]){margin-right:32px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted([slot=end]){margin-left:32px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;-webkit-margin-start:32px;margin-inline-start:32px}}::slotted(ion-icon){color:rgba(var(--ion-text-color-rgb,0,0,0),.54);font-size:24px}:host(.ion-color) ::slotted(ion-icon){color:var(--ion-color-contrast)}::slotted(ion-icon[slot]){margin-top:12px;margin-bottom:12px}::slotted(ion-icon[slot=start]){margin-right:32px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:32px;margin-inline-end:32px}}::slotted(ion-icon[slot=end]){margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-note),::slotted(ion-toggle[slot=end]),::slotted(ion-toggle[slot=start]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}::slotted(ion-note){-ms-flex-item-align:start;align-self:flex-start;font-size:11px}::slotted(ion-note[slot]){padding-left:0;padding-right:0;padding-top:18px;padding-bottom:10px}::slotted(ion-note[slot=start]){padding-right:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-note[slot=start]){padding-right:unset;-webkit-padding-end:16px;padding-inline-end:16px}}::slotted(ion-note[slot=end]){padding-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-note[slot=end]){padding-left:unset;-webkit-padding-start:16px;padding-inline-start:16px}}::slotted(ion-avatar){width:40px;height:40px}::slotted(ion-thumbnail){width:56px;height:56px}::slotted(ion-avatar),::slotted(ion-thumbnail){margin-top:8px;margin-bottom:8px}::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar[slot=start]),::slotted(ion-thumbnail[slot=start]){margin-right:unset;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-avatar[slot=end]),::slotted(ion-thumbnail[slot=end]){margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:11px;margin-bottom:10px}:host(.item-label-floating) ::slotted([slot=end]),:host(.item-label-stacked) ::slotted([slot=end]){margin-top:7px;margin-bottom:7px}:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.item-radio) ::slotted(ion-label),:host(.item-toggle) ::slotted(ion-label){margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}::slotted(.button-small){--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;height:25px;font-size:12px}:host(.item-label-floating),:host(.item-label-stacked){--min-height:55px}:host(.item-label-floating) ::slotted(ion-select),:host(.item-label-stacked) ::slotted(ion-select){--padding-top:8px;--padding-bottom:8px;--padding-start:0}:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating),:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked){color:var(--ion-color-primary,#3880ff)}";
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
        var h = e(
          "ion_list",
          (function() {
            function e(e) {
              t(this, e);
              this.inset = false;
            }
            e.prototype.closeSlidingItems = function() {
              return __awaiter(this, void 0, void 0, function() {
                var e;
                return __generator(this, function(t) {
                  e = this.el.querySelector("ion-item-sliding");
                  if (e && e.closeOpened) {
                    return [2, e.closeOpened()];
                  }
                  return [2, false];
                });
              });
            };
            e.prototype.render = function() {
              var e;
              var t = i(this);
              var o = this,
                a = o.lines,
                s = o.inset;
              return n(r, {
                class:
                  ((e = {}),
                  (e[t] = true),
                  (e["list-" + t] = true),
                  (e["list-inset"] = s),
                  (e["list-lines-" + a] = a !== undefined),
                  (e["list-" + t + "-lines-" + a] = a !== undefined),
                  e)
              });
            };
            Object.defineProperty(e.prototype, "el", {
              get: function() {
                return o(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "style", {
              get: function() {
                return "ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;background:var(--ion-item-background,var(--ion-background-color,#fff))}.list-md>.input:last-child:after{left:0}:host-context([dir=rtl]) .list-md>.input:last-child:after,[dir=rtl] .list-md>.input:last-child:after{left:unset;right:unset;right:0}.list-md.list-inset{margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px;border-radius:2px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.list-md.list-inset{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0;--border-width:0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px,2px;--border-width:0}.list-md.list-inset .item-interactive{--padding-start:0;--padding-end:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item{--border-width:0;--inner-border-width:0}.list-md-lines-full .item,.list-md .item-lines-full{--border-width:0 0 1px 0}.list-md-lines-full .item{--inner-border-width:0}.list-md-lines-inset .item,.list-md .item-lines-inset{--inner-border-width:0 0 1px 0}.list-md .item-lines-inset{--border-width:0}.list-md .item-lines-full{--inner-border-width:0}.list-md .item-lines-none{--border-width:0;--inner-border-width:0}";
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
        var f = e(
          "ion_list_header",
          (function() {
            function e(e) {
              t(this, e);
            }
            e.prototype.render = function() {
              var e;
              var t = i(this);
              return n(
                r,
                {
                  class: Object.assign(
                    {},
                    u(this.color),
                    ((e = {}), (e[t] = true), e)
                  )
                },
                n("slot", null)
              );
            };
            Object.defineProperty(e, "style", {
              get: function() {
                return ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:transparent;--color:var(--ion-text-color,#000);padding-left:calc(var(--ion-safe-area-left, 0px) + 16px);min-height:45px;font-size:14px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 16px)}}";
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
        var p = e(
          "ion_radio",
          (function() {
            function e(e) {
              var i = this;
              t(this, e);
              this.inputId = "ion-rb-" + b++;
              this.name = this.inputId;
              this.disabled = false;
              this.checked = false;
              this.onFocus = function() {
                i.ionFocus.emit();
              };
              this.onBlur = function() {
                i.ionBlur.emit();
              };
              this.onClick = function() {
                if (i.checked) {
                  i.ionDeselect.emit();
                } else {
                  i.checked = true;
                }
              };
              this.ionRadioDidLoad = a(this, "ionRadioDidLoad", 7);
              this.ionRadioDidUnload = a(this, "ionRadioDidUnload", 7);
              this.ionStyle = a(this, "ionStyle", 7);
              this.ionSelect = a(this, "ionSelect", 7);
              this.ionDeselect = a(this, "ionDeselect", 7);
              this.ionFocus = a(this, "ionFocus", 7);
              this.ionBlur = a(this, "ionBlur", 7);
            }
            e.prototype.colorChanged = function() {
              this.emitStyle();
            };
            e.prototype.checkedChanged = function(e) {
              if (e) {
                this.ionSelect.emit({ checked: true, value: this.value });
              }
              this.emitStyle();
            };
            e.prototype.disabledChanged = function() {
              this.emitStyle();
            };
            e.prototype.componentWillLoad = function() {
              if (this.value === undefined) {
                this.value = this.inputId;
              }
              this.emitStyle();
            };
            e.prototype.componentDidLoad = function() {
              this.ionRadioDidLoad.emit();
            };
            e.prototype.componentDidUnload = function() {
              this.ionRadioDidUnload.emit();
            };
            e.prototype.emitStyle = function() {
              this.ionStyle.emit({
                "radio-checked": this.checked,
                "interactive-disabled": this.disabled
              });
            };
            e.prototype.render = function() {
              var e;
              var t = this,
                o = t.inputId,
                a = t.disabled,
                l = t.checked,
                d = t.color,
                h = t.el;
              var f = i(this);
              var p = o + "-lbl";
              var b = s(h);
              if (b) {
                b.id = p;
              }
              return n(
                r,
                {
                  onClick: this.onClick,
                  role: "radio",
                  "aria-disabled": a ? "true" : null,
                  "aria-checked": "" + l,
                  "aria-labelledby": p,
                  class: Object.assign(
                    {},
                    u(d),
                    ((e = {}),
                    (e[f] = true),
                    (e["in-item"] = c("ion-item", h)),
                    (e["interactive"] = true),
                    (e["radio-checked"] = l),
                    (e["radio-disabled"] = a),
                    e)
                  )
                },
                n(
                  "div",
                  { class: "radio-icon" },
                  n("div", { class: "radio-inner" })
                ),
                n("button", {
                  type: "button",
                  onFocus: this.onFocus,
                  onBlur: this.onBlur,
                  disabled: a
                })
              );
            };
            Object.defineProperty(e.prototype, "el", {
              get: function() {
                return o(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "watchers", {
              get: function() {
                return {
                  color: ["colorChanged"],
                  checked: ["checkedChanged"],
                  disabled: ["disabledChanged"]
                };
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "style", {
              get: function() {
                return ':host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--ion-color-step-400,#999);--color-checked:var(--ion-color-primary,#3880ff);--border-width:2px;--border-style:solid;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:50%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:50%;width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:"";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}';
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
        var b = 0;
        var y = e(
          "ion_radio_group",
          (function() {
            function e(e) {
              t(this, e);
              this.inputId = "ion-rg-" + v++;
              this.labelId = this.inputId + "-lbl";
              this.radios = [];
              this.allowEmptySelection = false;
              this.name = this.inputId;
              this.ionChange = a(this, "ionChange", 7);
            }
            e.prototype.valueChanged = function(e) {
              this.updateRadios();
              this.ionChange.emit({ value: e });
            };
            e.prototype.onRadioDidLoad = function(e) {
              var t = e.target;
              t.name = this.name;
              this.radios.push(t);
              if (this.value == null && t.checked) {
                this.value = t.value;
              } else {
                this.updateRadios();
              }
            };
            e.prototype.onRadioDidUnload = function(e) {
              var t = this.radios.indexOf(e.target);
              if (t > -1) {
                this.radios.splice(t, 1);
              }
            };
            e.prototype.onRadioSelect = function(e) {
              var t = e.target;
              if (t) {
                this.value = t.value;
              }
            };
            e.prototype.onRadioDeselect = function(e) {
              if (this.allowEmptySelection) {
                var t = e.target;
                if (t) {
                  t.checked = false;
                  this.value = undefined;
                }
              }
            };
            e.prototype.componentDidLoad = function() {
              var e = this.el.querySelector("ion-list-header");
              if (!e) {
                e = this.el.querySelector("ion-item-divider");
              }
              if (e) {
                var t = e.querySelector("ion-label");
                if (t) {
                  this.labelId = t.id = this.name + "-lbl";
                }
              }
              this.updateRadios();
            };
            e.prototype.updateRadios = function() {
              var e = this.value;
              var t = false;
              for (var i = 0, n = this.radios; i < n.length; i++) {
                var r = n[i];
                if (!t && r.value === e) {
                  t = true;
                  r.checked = true;
                } else {
                  r.checked = false;
                }
              }
            };
            e.prototype.render = function() {
              return n(r, {
                role: "radiogroup",
                "aria-labelledby": this.labelId,
                class: i(this)
              });
            };
            Object.defineProperty(e.prototype, "el", {
              get: function() {
                return o(this);
              },
              enumerable: true,
              configurable: true
            });
            Object.defineProperty(e, "watchers", {
              get: function() {
                return { value: ["valueChanged"] };
              },
              enumerable: true,
              configurable: true
            });
            return e;
          })()
        );
        var v = 0;
      }
    };
  }
);
