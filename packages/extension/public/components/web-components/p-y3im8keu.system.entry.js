var __awaiter =
  (this && this.__awaiter) ||
  function(t, e, n, i) {
    return new (n || (n = Promise))(function(r, o) {
      function u(t) {
        try {
          s(i.next(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        try {
          s(i["throw"](t));
        } catch (t) {
          o(t);
        }
      }
      function s(t) {
        t.done
          ? r(t.value)
          : new n(function(e) {
              e(t.value);
            }).then(u, a);
      }
      s((i = i.apply(t, e || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(t, e) {
    var n = {
        label: 0,
        sent: function() {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      },
      i,
      r,
      o,
      u;
    return (
      (u = { next: a(0), throw: a(1), return: a(2) }),
      typeof Symbol === "function" &&
        (u[Symbol.iterator] = function() {
          return this;
        }),
      u
    );
    function a(t) {
      return function(e) {
        return s([t, e]);
      };
    }
    function s(u) {
      if (i) throw new TypeError("Generator is already executing.");
      while (n)
        try {
          if (
            ((i = 1),
            r &&
              (o =
                u[0] & 2
                  ? r["return"]
                  : u[0]
                  ? r["throw"] || ((o = r["return"]) && o.call(r), 0)
                  : r.next) &&
              !(o = o.call(r, u[1])).done)
          )
            return o;
          if (((r = 0), o)) u = [u[0] & 2, o.value];
          switch (u[0]) {
            case 0:
            case 1:
              o = u;
              break;
            case 4:
              n.label++;
              return { value: u[1], done: false };
            case 5:
              n.label++;
              r = u[1];
              u = [0];
              continue;
            case 7:
              u = n.ops.pop();
              n.trys.pop();
              continue;
            default:
              if (
                !((o = n.trys), (o = o.length > 0 && o[o.length - 1])) &&
                (u[0] === 6 || u[0] === 2)
              ) {
                n = 0;
                continue;
              }
              if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                n.label = u[1];
                break;
              }
              if (u[0] === 6 && n.label < o[1]) {
                n.label = o[1];
                o = u;
                break;
              }
              if (o && n.label < o[2]) {
                n.label = o[2];
                n.ops.push(u);
                break;
              }
              if (o[2]) n.ops.pop();
              n.trys.pop();
              continue;
          }
          u = e.call(t, n);
        } catch (t) {
          u = [6, t];
          r = 0;
        } finally {
          i = o = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: true };
    }
  };
System.register(
  [
    "./p-83e6ea9f.system.js",
    "./p-6a603f00.system.js",
    "./p-ea7a022a.system.js"
  ],
  function(t) {
    "use strict";
    var e, n, i, r, o, u, a, s;
    return {
      setters: [
        function(t) {
          e = t.r;
          n = t.e;
          i = t.c;
          r = t.h;
          o = t.H;
        },
        function(t) {
          u = t.c;
        },
        function(t) {
          a = t.u;
          s = t.t;
        }
      ],
      execute: function() {
        var c = t(
          "ion_menu_button",
          (function() {
            function t(t) {
              var n = this;
              e(this, t);
              this.visible = false;
              this.disabled = false;
              this.autoHide = true;
              this.type = "button";
              this.setVisibility = function() {
                return __awaiter(n, void 0, void 0, function() {
                  var t;
                  return __generator(this, function(e) {
                    switch (e.label) {
                      case 0:
                        t = this;
                        return [4, a(this.menu)];
                      case 1:
                        t.visible = e.sent();
                        return [2];
                    }
                  });
                });
              };
              this.onClick = function() {
                return __awaiter(n, void 0, void 0, function() {
                  return __generator(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return [4, s(this.menu)];
                      case 1:
                        t.sent();
                        return [2];
                    }
                  });
                });
              };
            }
            t.prototype.componentDidLoad = function() {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.setVisibility()];
                    case 1:
                      t.sent();
                      return [2];
                  }
                });
              });
            };
            t.prototype.visibilityChanged = function() {
              return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.setVisibility()];
                    case 1:
                      t.sent();
                      return [2];
                  }
                });
              });
            };
            t.prototype.render = function() {
              var t;
              var e = this,
                a = e.color,
                s = e.disabled;
              var c = n(this);
              var l = i.get("menuIcon", "menu");
              var f = this.autoHide && !this.visible;
              var h = { type: this.type };
              return r(
                o,
                {
                  onClick: this.onClick,
                  "aria-disabled": s ? "true" : null,
                  "aria-hidden": f ? "true" : null,
                  class: Object.assign(((t = {}), (t[c] = true), t), u(a), {
                    button: true,
                    "menu-button-hidden": f,
                    "menu-button-disabled": s,
                    "ion-activatable": true,
                    "ion-focusable": true
                  })
                },
                r(
                  "button",
                  Object.assign({}, h, {
                    disabled: this.disabled,
                    class: "button-native"
                  }),
                  r(
                    "slot",
                    null,
                    r("ion-icon", { icon: l, mode: c, lazy: false })
                  ),
                  c === "md" && r("ion-ripple-effect", { type: "unbounded" })
                )
              );
            };
            Object.defineProperty(t, "style", {
              get: function() {
                return ":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}@media (any-hover:hover){:host(.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.08)}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.24);color:var(--ion-color-base)}";
              },
              enumerable: true,
              configurable: true
            });
            return t;
          })()
        );
      }
    };
  }
);
