"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const core = require("./core-be19e9c2.js");
const helpers = require("./helpers-d1479b7a.js");
const haptic = require("./haptic-57fc11a5.js");

const PickerColumnCmp = class {
  constructor(hostRef) {
    core.registerInstance(this, hostRef);
    this.optHeight = 0;
    this.rotateFactor = 0;
    this.scaleFactor = 1;
    this.velocity = 0;
    this.y = 0;
    this.noAnimate = true;
    this.ionPickerColChange = core.createEvent(this, "ionPickerColChange", 7);
  }
  colChanged() {
    this.refresh();
  }
  componentWillLoad() {
    let pickerRotateFactor = 0;
    let pickerScaleFactor = 0.81;
    const mode = core.getIonMode(this);
    if (mode === "ios") {
      pickerRotateFactor = -0.46;
      pickerScaleFactor = 1;
    }
    this.rotateFactor = pickerRotateFactor;
    this.scaleFactor = pickerScaleFactor;
  }
  async componentDidLoad() {
    // get the height of one option
    const colEl = this.optsEl;
    if (colEl) {
      this.optHeight = colEl.firstElementChild
        ? colEl.firstElementChild.clientHeight
        : 0;
    }
    this.refresh();
    this.gesture = (await new Promise(function(resolve) {
      resolve(require("./index-f5a6ad90.js"));
    })).createGesture({
      el: this.el,
      gestureName: "picker-swipe",
      gesturePriority: 100,
      threshold: 0,
      onStart: ev => this.onStart(ev),
      onMove: ev => this.onMove(ev),
      onEnd: ev => this.onEnd(ev)
    });
    this.gesture.setDisabled(false);
    this.tmrId = setTimeout(() => {
      this.noAnimate = false;
      this.refresh(true);
    }, 250);
  }
  componentDidUnload() {
    cancelAnimationFrame(this.rafId);
    clearTimeout(this.tmrId);
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  emitColChange() {
    this.ionPickerColChange.emit(this.col);
  }
  setSelected(selectedIndex, duration) {
    // if there is a selected index, then figure out it's y position
    // if there isn't a selected index, then just use the top y position
    const y = selectedIndex > -1 ? -(selectedIndex * this.optHeight) : 0;
    this.velocity = 0;
    // set what y position we're at
    cancelAnimationFrame(this.rafId);
    this.update(y, duration, true);
    this.emitColChange();
  }
  update(y, duration, saveY) {
    if (!this.optsEl) {
      return;
    }
    // ensure we've got a good round number :)
    let translateY = 0;
    let translateZ = 0;
    const { col, rotateFactor } = this;
    const selectedIndex = (col.selectedIndex = this.indexForY(-y));
    const durationStr = duration === 0 ? "" : duration + "ms";
    const scaleStr = `scale(${this.scaleFactor})`;
    const children = this.optsEl.children;
    for (let i = 0; i < children.length; i++) {
      const button = children[i];
      const opt = col.options[i];
      const optOffset = i * this.optHeight + y;
      let transform = "";
      if (rotateFactor !== 0) {
        const rotateX = optOffset * rotateFactor;
        if (Math.abs(rotateX) <= 90) {
          translateY = 0;
          translateZ = 90;
          transform = `rotateX(${rotateX}deg) `;
        } else {
          translateY = -9999;
        }
      } else {
        translateZ = 0;
        translateY = optOffset;
      }
      const selected = selectedIndex === i;
      transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
      if (this.scaleFactor !== 1 && !selected) {
        transform += scaleStr;
      }
      // Update transition duration
      if (this.noAnimate) {
        opt.duration = 0;
        button.style.transitionDuration = "";
      } else if (duration !== opt.duration) {
        opt.duration = duration;
        button.style.transitionDuration = durationStr;
      }
      // Update transform
      if (transform !== opt.transform) {
        opt.transform = transform;
        button.style.transform = transform;
      }
      // Update selected item
      if (selected !== opt.selected) {
        opt.selected = selected;
        if (selected) {
          button.classList.add(PICKER_OPT_SELECTED);
        } else {
          button.classList.remove(PICKER_OPT_SELECTED);
        }
      }
    }
    this.col.prevSelected = selectedIndex;
    if (saveY) {
      this.y = y;
    }
    if (this.lastIndex !== selectedIndex) {
      // have not set a last index yet
      haptic.hapticSelectionChanged();
      this.lastIndex = selectedIndex;
    }
  }
  decelerate() {
    if (this.velocity !== 0) {
      // still decelerating
      this.velocity *= DECELERATION_FRICTION;
      // do not let it go slower than a velocity of 1
      this.velocity =
        this.velocity > 0
          ? Math.max(this.velocity, 1)
          : Math.min(this.velocity, -1);
      let y = this.y + this.velocity;
      if (y > this.minY) {
        // whoops, it's trying to scroll up farther than the options we have!
        y = this.minY;
        this.velocity = 0;
      } else if (y < this.maxY) {
        // gahh, it's trying to scroll down farther than we can!
        y = this.maxY;
        this.velocity = 0;
      }
      this.update(y, 0, true);
      const notLockedIn =
        Math.round(y) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;
      if (notLockedIn) {
        // isn't locked in yet, keep decelerating until it is
        this.rafId = requestAnimationFrame(() => this.decelerate());
      } else {
        this.velocity = 0;
        this.emitColChange();
      }
    } else if (this.y % this.optHeight !== 0) {
      // needs to still get locked into a position so options line up
      const currentPos = Math.abs(this.y % this.optHeight);
      // create a velocity in the direction it needs to scroll
      this.velocity = currentPos > this.optHeight / 2 ? 1 : -1;
      this.decelerate();
    }
  }
  indexForY(y) {
    return Math.min(
      Math.max(Math.abs(Math.round(y / this.optHeight)), 0),
      this.col.options.length - 1
    );
  }
  // TODO should this check disabled?
  onStart(detail) {
    // We have to prevent default in order to block scrolling under the picker
    // but we DO NOT have to stop propagation, since we still want
    // some "click" events to capture
    detail.event.preventDefault();
    detail.event.stopPropagation();
    // reset everything
    cancelAnimationFrame(this.rafId);
    const options = this.col.options;
    let minY = options.length - 1;
    let maxY = 0;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        minY = Math.min(minY, i);
        maxY = Math.max(maxY, i);
      }
    }
    this.minY = -(minY * this.optHeight);
    this.maxY = -(maxY * this.optHeight);
  }
  onMove(detail) {
    detail.event.preventDefault();
    detail.event.stopPropagation();
    // update the scroll position relative to pointer start position
    let y = this.y + detail.deltaY;
    if (y > this.minY) {
      // scrolling up higher than scroll area
      y = Math.pow(y, 0.8);
      this.bounceFrom = y;
    } else if (y < this.maxY) {
      // scrolling down below scroll area
      y += Math.pow(this.maxY - y, 0.9);
      this.bounceFrom = y;
    } else {
      this.bounceFrom = 0;
    }
    this.update(y, 0, false);
  }
  onEnd(detail) {
    if (this.bounceFrom > 0) {
      // bounce back up
      this.update(this.minY, 100, true);
      this.emitColChange();
      return;
    } else if (this.bounceFrom < 0) {
      // bounce back down
      this.update(this.maxY, 100, true);
      this.emitColChange();
      return;
    }
    this.velocity = helpers.clamp(
      -MAX_PICKER_SPEED,
      detail.velocityY * 23,
      MAX_PICKER_SPEED
    );
    if (this.velocity === 0 && detail.deltaY === 0) {
      const opt = detail.event.target.closest(".picker-opt");
      if (opt && opt.hasAttribute("opt-index")) {
        this.setSelected(
          parseInt(opt.getAttribute("opt-index"), 10),
          TRANSITION_DURATION
        );
      }
    } else {
      this.y += detail.deltaY;
      this.decelerate();
    }
  }
  refresh(forceRefresh) {
    let min = this.col.options.length - 1;
    let max = 0;
    const options = this.col.options;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        min = Math.min(min, i);
        max = Math.max(max, i);
      }
    }
    /**
     * Only update selected value if column has a
     * velocity of 0. If it does not, then the
     * column is animating might land on
     * a value different than the value at
     * selectedIndex
     */
    if (this.velocity !== 0) {
      return;
    }
    const selectedIndex = helpers.clamp(min, this.col.selectedIndex || 0, max);
    if (this.col.prevSelected !== selectedIndex || forceRefresh) {
      const y = selectedIndex * this.optHeight * -1;
      this.velocity = 0;
      this.update(y, TRANSITION_DURATION, true);
    }
  }
  render() {
    const col = this.col;
    const Button = "button";
    const mode = core.getIonMode(this);
    return core.h(
      core.Host,
      {
        class: {
          [mode]: true,
          "picker-col": true,
          "picker-opts-left": this.col.align === "left",
          "picker-opts-right": this.col.align === "right"
        },
        style: {
          "max-width": this.col.columnWidth
        }
      },
      col.prefix &&
        core.h(
          "div",
          { class: "picker-prefix", style: { width: col.prefixWidth } },
          col.prefix
        ),
      core.h(
        "div",
        {
          class: "picker-opts",
          style: { maxWidth: col.optionsWidth },
          ref: el => (this.optsEl = el)
        },
        col.options.map((o, index) =>
          core.h(
            Button,
            {
              type: "button",
              class: {
                "picker-opt": true,
                "picker-opt-disabled": !!o.disabled
              },
              "opt-index": index
            },
            o.text
          )
        )
      ),
      col.suffix &&
        core.h(
          "div",
          { class: "picker-suffix", style: { width: col.suffixWidth } },
          col.suffix
        )
    );
  }
  get el() {
    return core.getElement(this);
  }
  static get watchers() {
    return {
      col: ["colChanged"]
    };
  }
  static get style() {
    return ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-opt.picker-opt-selected,.picker-prefix,.picker-suffix{color:var(--ion-color-primary,#3880ff)}";
  }
};
const PICKER_OPT_SELECTED = "picker-opt-selected";
const DECELERATION_FRICTION = 0.97;
const MAX_PICKER_SPEED = 90;
const TRANSITION_DURATION = 150;

exports.ion_picker_column = PickerColumnCmp;
