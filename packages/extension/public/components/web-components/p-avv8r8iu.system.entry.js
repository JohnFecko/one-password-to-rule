System.register(["./p-83e6ea9f.system.js"], function(t) {
  "use strict";
  var e, i, n, o, r, s;
  return {
    setters: [
      function(t) {
        e = t.r;
        i = t.d;
        n = t.h;
        o = t.e;
        r = t.H;
        s = t.f;
      }
    ],
    execute: function() {
      var u = t(
        "ion_select_option",
        (function() {
          function t(t) {
            e(this, t);
            this.inputId = "ion-selopt-" + c++;
            this.disabled = false;
            this.selected = false;
            this.ionSelectOptionDidLoad = i(this, "ionSelectOptionDidLoad", 7);
            this.ionSelectOptionDidUnload = i(
              this,
              "ionSelectOptionDidUnload",
              7
            );
          }
          t.prototype.componentWillLoad = function() {
            if (this.value === undefined) {
              this.value = this.el.textContent || "";
            }
          };
          t.prototype.componentDidLoad = function() {
            this.ionSelectOptionDidLoad.emit();
          };
          t.prototype.componentDidUnload = function() {
            this.ionSelectOptionDidUnload.emit();
          };
          t.prototype.render = function() {
            return n(r, { role: "option", id: this.inputId, class: o(this) });
          };
          Object.defineProperty(t.prototype, "el", {
            get: function() {
              return s(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(t, "style", {
            get: function() {
              return ":host{display:none}";
            },
            enumerable: true,
            configurable: true
          });
          return t;
        })()
      );
      var c = 0;
    }
  };
});
