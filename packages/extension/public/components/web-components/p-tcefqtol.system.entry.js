System.register(["./p-83e6ea9f.system.js"], function(e) {
  "use strict";
  var t, i, n, r, s, a;
  return {
    setters: [
      function(e) {
        t = e.r;
        i = e.d;
        n = e.e;
        r = e.h;
        s = e.f;
        a = e.H;
      }
    ],
    execute: function() {
      var o = "split-pane-main";
      var l = "split-pane-side";
      var h = {
        xs: "(min-width: 0px)",
        sm: "(min-width: 576px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 992px)",
        xl: "(min-width: 1200px)",
        never: ""
      };
      var u = e(
        "ion_split_pane",
        (function() {
          function e(e) {
            t(this, e);
            this.visible = false;
            this.disabled = false;
            this.when = h["lg"];
            this.ionSplitPaneVisible = i(this, "ionSplitPaneVisible", 7);
          }
          e.prototype.visibleChanged = function(e) {
            var t = { visible: e, isPane: this.isPane.bind(this) };
            this.ionSplitPaneVisible.emit(t);
          };
          e.prototype.componentDidLoad = function() {
            this.styleChildren();
            this.updateState();
          };
          e.prototype.componentDidUnload = function() {
            if (this.rmL) {
              this.rmL();
              this.rmL = undefined;
            }
          };
          e.prototype.updateState = function() {
            var e = this;
            if (this.rmL) {
              this.rmL();
              this.rmL = undefined;
            }
            if (this.disabled) {
              this.visible = false;
              return;
            }
            var t = this.when;
            if (typeof t === "boolean") {
              this.visible = t;
              return;
            }
            var i = h[t] || t;
            if (i.length === 0) {
              this.visible = false;
              return;
            }
            if (window.matchMedia) {
              var n = function(t) {
                e.visible = t.matches;
              };
              var r = window.matchMedia(i);
              r.addListener(n);
              this.rmL = function() {
                return r.removeListener(n);
              };
              this.visible = r.matches;
            }
          };
          e.prototype.isPane = function(e) {
            if (!this.visible) {
              return false;
            }
            return e.parentElement === this.el && e.classList.contains(l);
          };
          e.prototype.styleChildren = function() {
            var e = this.contentId;
            var t = this.el.children;
            var i = this.el.childElementCount;
            var n = false;
            for (var r = 0; r < i; r++) {
              var s = t[r];
              var a = e !== undefined ? s.id === e : s.hasAttribute("main");
              if (a) {
                if (n) {
                  console.warn(
                    "split pane cannot have more than one main node"
                  );
                  return;
                }
                n = true;
              }
              d(s, a);
            }
            if (!n) {
              console.warn("split pane does not have a specified main node");
            }
          };
          e.prototype.render = function() {
            var e;
            var t = n(this);
            return r(a, {
              class:
                ((e = {}),
                (e[t] = true),
                (e["split-pane-" + t] = true),
                (e["split-pane-visible"] = this.visible),
                e)
            });
          };
          Object.defineProperty(e.prototype, "el", {
            get: function() {
              return s(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(e, "watchers", {
            get: function() {
              return {
                visible: ["visibleChanged"],
                disabled: ["updateState"],
                when: ["updateState"]
              };
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(e, "style", {
            get: function() {
              return "ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-ios{--border:0.55px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.split-pane-ios.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-ios.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}";
            },
            enumerable: true,
            configurable: true
          });
          return e;
        })()
      );
      var d = function(e, t) {
        var i;
        var n;
        if (t) {
          i = o;
          n = l;
        } else {
          i = l;
          n = o;
        }
        var r = e.classList;
        r.add(i);
        r.remove(n);
      };
    }
  };
});
