System.register(["./p-83e6ea9f.system.js"], function(e) {
  "use strict";
  var t, n, r, i, o, u;
  return {
    setters: [
      function(e) {
        t = e.r;
        n = e.d;
        r = e.e;
        i = e.h;
        o = e.H;
        u = e.f;
      }
    ],
    execute: function() {
      var s = 0;
      var a = e(
        "ion_segment_button",
        (function() {
          function e(e) {
            var r = this;
            t(this, e);
            this.checked = false;
            this.disabled = false;
            this.layout = "icon-top";
            this.type = "button";
            this.value = "ion-sb-" + s++;
            this.onClick = function() {
              r.checked = true;
            };
            this.ionSelect = n(this, "ionSelect", 7);
          }
          e.prototype.checkedChanged = function(e, t) {
            if (e && !t) {
              this.ionSelect.emit();
            }
          };
          Object.defineProperty(e.prototype, "hasLabel", {
            get: function() {
              return !!this.el.querySelector("ion-label");
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(e.prototype, "hasIcon", {
            get: function() {
              return !!this.el.querySelector("ion-icon");
            },
            enumerable: true,
            configurable: true
          });
          e.prototype.render = function() {
            var e;
            var t = this,
              n = t.checked,
              u = t.type,
              s = t.disabled,
              a = t.hasIcon,
              c = t.hasLabel,
              l = t.layout;
            var b = r(this);
            return i(
              o,
              {
                onClick: this.onClick,
                "aria-disabled": s ? "true" : null,
                class:
                  ((e = {}),
                  (e[b] = true),
                  (e["segment-button-has-label"] = c),
                  (e["segment-button-has-icon"] = a),
                  (e["segment-button-has-label-only"] = c && !a),
                  (e["segment-button-has-icon-only"] = a && !c),
                  (e["segment-button-disabled"] = s),
                  (e["segment-button-checked"] = n),
                  (e["segment-button-layout-" + l] = true),
                  (e["ion-activatable"] = true),
                  (e["ion-activatable-instant"] = true),
                  e)
              },
              i(
                "button",
                {
                  type: u,
                  "aria-pressed": n ? "true" : null,
                  class: "button-native",
                  disabled: s
                },
                i("slot", null),
                b === "md" && i("ion-ripple-effect", null)
              ),
              i("div", { class: "segment-button-indicator" })
            );
          };
          Object.defineProperty(e.prototype, "el", {
            get: function() {
              return u(this);
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(e, "watchers", {
            get: function() {
              return { checked: ["checkedChanged"] };
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(e, "style", {
            get: function() {
              return ":host{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-direction:column;flex-direction:column;height:auto;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-font-kerning:none;font-kerning:none}:host(:first-of-type){border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host-context([dir=rtl]):first-of-type,:host-context([dir=rtl]):host(:first-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host(:not(:first-of-type)){border-left-width:0}:host-context([dir=rtl]):host(:not(:first-of-type)),:host-context([dir=rtl]):not(:first-of-type){border-right-width:0;border-left-width:var(--border-width)}:host(:last-of-type){border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}:host-context([dir=rtl]):host(:last-of-type),:host-context([dir=rtl]):last-of-type{border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}.button-native{border-radius:inherit;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;cursor:pointer}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.segment-button-indicator{-ms-flex-item-align:end;align-self:flex-end;width:100%;height:2px;background-color:var(--indicator-color);opacity:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-checked) .segment-button-indicator{background-color:var(--indicator-color-checked,var(--color-checked))}:host(.activated){color:var(--color-activated,var(--color))}:host(.segment-button-disabled){color:var(--color-disabled)}:host(.segment-button-disabled.segment-button-checked){color:var(--color-checked-disabled)}::slotted(ion-icon){-ms-flex-order:-1;order:-1}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon),:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color,var(--color-checked))}:host{--border-radius:4px;--border-width:1px;--border-style:solid;--transition:100ms all linear;min-height:24px;font-size:13px;line-height:37px}.segment-button-indicator{display:none}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:2px;margin-right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:2px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}@media (any-hover:hover){:host(:hover:not(.segment-button-checked)){background:var(--background-hover)}}:host(.activated){background:var(--background-activated)}:host(.segment-button-checked.activated){background:var(--background-checked);color:var(--color-checked)}";
            },
            enumerable: true,
            configurable: true
          });
          return e;
        })()
      );
    }
  };
});
