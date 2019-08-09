import {
  a as patchEsm,
  g as globals,
  b as bootstrapLazy
} from "./core-9991b89e.js";
var defineCustomElements = function(win, options) {
  return patchEsm().then(function() {
    globals();
    bootstrapLazy(
      JSON.parse(
        '[[{"ios":"ion-alert-controller_14-ios","md":"ion-alert-controller_14-md"},[[0,"optr-app",{"modifier":[1537],"passwordStrengthValue":[1026,"password-strength-value"],"passwordStrengthLabel":[1025,"password-strength-label"],"passwordStrengthColor":[1025,"password-strength-color"],"password":[1025],"passwordEmpty":[1028,"password-empty"],"passwordScore":[1026,"password-score"],"passwordCrackTime":[1025,"password-crack-time"],"hashPassword":[1025,"hash-password"],"hashPasswordCrackTime":[1025,"hash-password-crack-time"],"autofill":[4]}],[0,"optr-decode-field",{"disabled":[4],"value":[1],"autofill":[4]}],[0,"optr-field",{"label":[1],"placeholder":[1],"value":[1025],"strengthColor":[1,"strength-color"],"strengthLabel":[1,"strength-label"],"strengthValue":[2,"strength-value"],"strengthIndicator":[4,"strength-indicator"],"infoCallback":[16],"inputChange":[16]},[[0,"ionChange","onInputChange"]]],[0,"ion-alert-controller",{"create":[64],"dismiss":[64],"getTop":[64]}],[1,"ion-button",{"color":[1],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1]}],[2,"ion-input",{"color":[1],"accept":[1],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[1028,"clear-on-edit"],"debounce":[2],"disabled":[4],"inputmode":[1],"max":[1],"maxlength":[2],"min":[1],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"step":[1],"size":[2],"type":[1],"value":[1025],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]}],[1,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[1]}],[0,"ion-toast-controller",{"create":[64],"dismiss":[64],"getTop":[64]}],[1,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[1,"ion-grid",{"fixed":[4]}],[1,"ion-row"],[2,"ion-label",{"color":[1],"position":[1],"noAnimate":[32]}],[1,"ion-icon",{"color":[1],"ariaLabel":[1537,"aria-label"],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[1],"src":[1],"icon":[8],"size":[1],"lazy":[4],"svgContent":[32],"isVisible":[32]}],[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-select-popover",[[2,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"options":[16]},[[0,"ionSelect","onSelect"]]]]],[{"ios":"ion-action-sheet-ios","md":"ion-action-sheet-md"},[[2,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],[{"ios":"ion-alert-ios","md":"ion-alert-md"},[[2,"ion-alert",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],[{"ios":"ion-back-button-ios","md":"ion-back-button-md"},[[2,"ion-back-button",{"color":[1],"defaultHref":[1,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1]}]]],[{"ios":"ion-fab-button-ios","md":"ion-fab-button-md"},[[1,"ion-fab-button",{"color":[1],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1]}]]],[{"ios":"ion-loading-ios","md":"ion-loading-md"},[[2,"ion-loading",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],[{"ios":"ion-menu-ios","md":"ion-menu-md"},[[1,"ion-menu",{"contentId":[1,"content-id"],"menuId":[1,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[32,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"]]]]],[{"ios":"ion-menu-button-ios","md":"ion-menu-button-md"},[[1,"ion-menu-button",{"color":[1],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[32,"ionMenuChange","visibilityChanged"],[32,"ionSplitPaneVisible","visibilityChanged"]]]]],[{"ios":"ion-picker-ios","md":"ion-picker-md"},[[2,"ion-picker",{"overlayIndex":[2,"overlay-index"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]}]]],["ion-refresher-content",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}]]],[{"ios":"ion-toast-ios","md":"ion-toast-md"},[[1,"ion-toast",{"overlayIndex":[2,"overlay-index"],"color":[1],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"showCloseButton":[4,"show-close-button"],"closeButtonText":[1,"close-button-text"],"buttons":[16],"translucent":[4],"animated":[4],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],[{"ios":"ion-card-ios","md":"ion-card-md"},[[6,"ion-card",{"color":[1],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"target":[1]}]]],[{"ios":"ion-chip-ios","md":"ion-chip-md"},[[1,"ion-chip",{"color":[1],"outline":[4]}]]],[{"ios":"ion-infinite-scroll-content-ios","md":"ion-infinite-scroll-content-md"},[[0,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}]]],[{"ios":"ion-item-option-ios","md":"ion-item-option-md"},[[1,"ion-item-option",{"color":[1],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}]]],[{"ios":"ion-modal-ios","md":"ion-modal-md"},[[2,"ion-modal",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],[{"ios":"ion-popover-ios","md":"ion-popover-md"},[[2,"ion-popover",{"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]}]]],[{"ios":"ion-reorder-ios","md":"ion-reorder-md"},[[1,"ion-reorder",null,[[2,"click","onClick"]]]]],[{"ios":"ion-searchbar-ios","md":"ion-searchbar-md"},[[2,"ion-searchbar",{"color":[1],"animated":[4],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[8,"show-cancel-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]}]]],[{"ios":"ion-segment-button-ios","md":"ion-segment-button-md"},[[1,"ion-segment-button",{"checked":[1028],"disabled":[4],"layout":[1],"type":[1],"value":[1]}]]],[{"ios":"ion-tab-button-ios","md":"ion-tab-button-md"},[[1,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[16,"ionTabBarChanged","onTabBarChanged"]]]]],["ion-action-sheet-controller",[[0,"ion-action-sheet-controller",{"create":[64],"dismiss":[64],"getTop":[64]}]]],["ion-anchor",[[1,"ion-anchor",{"color":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"]}]]],["ion-app",[[0,"ion-app"]]],[{"ios":"ion-avatar-ios","md":"ion-avatar-md"},[[1,"ion-avatar"]]],[{"ios":"ion-badge-ios","md":"ion-badge-md"},[[1,"ion-badge",{"color":[1]}]]],[{"ios":"ion-buttons-ios","md":"ion-buttons-md"},[[2,"ion-buttons"]]],[{"ios":"ion-card-content-ios","md":"ion-card-content-md"},[[0,"ion-card-content"]]],[{"ios":"ion-card-header-ios","md":"ion-card-header-md"},[[1,"ion-card-header",{"color":[1],"translucent":[4]}]]],[{"ios":"ion-card-subtitle-ios","md":"ion-card-subtitle-md"},[[1,"ion-card-subtitle",{"color":[1]}]]],[{"ios":"ion-card-title-ios","md":"ion-card-title-md"},[[1,"ion-card-title",{"color":[1]}]]],[{"ios":"ion-checkbox-ios","md":"ion-checkbox-md"},[[1,"ion-checkbox",{"color":[1],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[1]}]]],["ion-content",[[1,"ion-content",{"color":[1],"fullscreen":[4],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[2,"click","onClick"]]]]],[{"ios":"ion-datetime-ios","md":"ion-datetime-md"},[[1,"ion-datetime",{"name":[1],"disabled":[4],"readonly":[4],"min":[1025],"max":[1025],"displayFormat":[1,"display-format"],"pickerFormat":[1,"picker-format"],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"monthNames":[1,"month-names"],"monthShortNames":[1,"month-short-names"],"dayNames":[1,"day-names"],"dayShortNames":[1,"day-short-names"],"pickerOptions":[16],"placeholder":[1],"value":[1025],"isExpanded":[32],"open":[64]}]]],["ion-fab",[[1,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64]}]]],["ion-fab-list",[[1,"ion-fab-list",{"activated":[4],"side":[1]}]]],[{"ios":"ion-footer-ios","md":"ion-footer-md"},[[0,"ion-footer",{"translucent":[4]}]]],[{"ios":"ion-header-ios","md":"ion-header-md"},[[0,"ion-header",{"translucent":[4]}]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]}]]],["ion-infinite-scroll",[[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]}]]],[{"ios":"ion-item-divider-ios","md":"ion-item-divider-md"},[[1,"ion-item-divider",{"color":[1],"sticky":[4]}]]],[{"ios":"ion-item-group-ios","md":"ion-item-group-md"},[[0,"ion-item-group"]]],[{"ios":"ion-item-options-ios","md":"ion-item-options-md"},[[0,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}]]],["ion-item-sliding",[[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]}]]],["ion-loading-controller",[[0,"ion-loading-controller",{"create":[64],"dismiss":[64],"getTop":[64]}]]],["ion-menu-toggle",[[1,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[32,"ionMenuChange","visibilityChanged"],[32,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-modal-controller",[[0,"ion-modal-controller",{"create":[64],"dismiss":[64],"getTop":[64]}]]],["ion-nav",[[1,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64]}]]],["ion-nav-pop",[[0,"ion-nav-pop"]]],["ion-nav-push",[[0,"ion-nav-push",{"component":[1],"componentProps":[16]}]]],["ion-nav-set-root",[[0,"ion-nav-set-root",{"component":[1],"componentProps":[16]}]]],[{"ios":"ion-note-ios","md":"ion-note-md"},[[1,"ion-note",{"color":[1]}]]],["ion-picker-controller",[[0,"ion-picker-controller",{"create":[64],"dismiss":[64],"getTop":[64]}]]],["ion-popover-controller",[[0,"ion-popover-controller",{"create":[64],"dismiss":[64],"getTop":[64]}]]],[{"ios":"ion-range-ios","md":"ion-range-md"},[[1,"ion-range",{"color":[1],"debounce":[2],"name":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"snaps":[4],"step":[2],"ticks":[4],"disabled":[4],"value":[1026],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]}]]],[{"ios":"ion-refresher-ios","md":"ion-refresher-md"},[[0,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]}]]],["ion-reorder-group",[[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]}]]],["ion-route",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16]}]]],["ion-route-redirect",[[0,"ion-route-redirect",{"from":[1],"to":[1]}]]],["ion-router",[[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]]]],["ion-router-link",[[1,"ion-router-link",{"color":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"target":[1]}]]],["ion-router-outlet",[[1,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]}]]],[{"ios":"ion-segment-ios","md":"ion-segment-md"},[[2,"ion-segment",{"color":[1],"disabled":[4],"scrollable":[4],"value":[1025]},[[0,"ionSelect","segmentClick"]]]]],[{"ios":"ion-select-ios","md":"ion-select-md"},[[1,"ion-select",{"disabled":[4],"cancelText":[1,"cancel-text"],"okText":[1,"ok-text"],"placeholder":[1],"name":[1],"selectedText":[1,"selected-text"],"multiple":[4],"interface":[1],"interfaceOptions":[8,"interface-options"],"compareWith":[1,"compare-with"],"value":[1032],"isExpanded":[32],"open":[64]},[[0,"ionSelectOptionDidLoad","selectOptionChanged"],[0,"ionSelectOptionDidUnload","selectOptionChanged"]]]]],["ion-select-option",[[1,"ion-select-option",{"disabled":[4],"selected":[4],"value":[1032]}]]],["ion-skeleton-text",[[1,"ion-skeleton-text",{"animated":[4],"width":[1]}]]],["ion-slide",[[0,"ion-slide"]]],[{"ios":"ion-slides-ios","md":"ion-slides-md"},[[4,"ion-slides",{"options":[8],"pager":[4],"scrollbar":[4],"update":[64],"updateAutoHeight":[64],"slideTo":[64],"slideNext":[64],"slidePrev":[64],"getActiveIndex":[64],"getPreviousIndex":[64],"length":[64],"isEnd":[64],"isBeginning":[64],"startAutoplay":[64],"stopAutoplay":[64],"lockSwipeToNext":[64],"lockSwipeToPrev":[64],"lockSwipes":[64]},[[0,"ionSlideChanged","onSlideChanged"]]]]],[{"ios":"ion-split-pane-ios","md":"ion-split-pane-md"},[[0,"ion-split-pane",{"contentId":[1,"content-id"],"disabled":[4],"when":[8],"visible":[32]}]]],["ion-tab",[[1,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]}]]],[{"ios":"ion-tab-bar-ios","md":"ion-tab-bar-md"},[[1,"ion-tab-bar",{"color":[1],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]},[[8,"keyboardWillHide","onKeyboardWillHide"],[8,"keyboardWillShow","onKeyboardWillShow"]]]]],["ion-tabs",[[1,"ion-tabs",{"useRouter":[1028,"use-router"],"tabs":[32],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-text",[[1,"ion-text",{"color":[1]}]]],[{"ios":"ion-textarea-ios","md":"ion-textarea-md"},[[2,"ion-textarea",{"color":[1],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[1028,"clear-on-edit"],"debounce":[2],"disabled":[4],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[2],"rows":[2],"wrap":[1],"autoGrow":[4,"auto-grow"],"value":[1025],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]}]]],["ion-thumbnail",[[1,"ion-thumbnail"]]],["ion-title",[[1,"ion-title",{"color":[1]}]]],[{"ios":"ion-toggle-ios","md":"ion-toggle-md"},[[1,"ion-toggle",{"color":[1],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"activated":[32]}]]],[{"ios":"ion-toolbar-ios","md":"ion-toolbar-md"},[[1,"ion-toolbar",{"color":[1]},[[0,"ionStyle","childrenStyle"]]]]],["ion-virtual-scroll",[[0,"ion-virtual-scroll",{"approxItemHeight":[2,"approx-item-height"],"approxHeaderHeight":[2,"approx-header-height"],"approxFooterHeight":[2,"approx-footer-height"],"headerFn":[16],"footerFn":[16],"items":[16],"itemHeight":[16],"headerHeight":[16],"footerHeight":[16],"renderItem":[16],"renderHeader":[16],"renderFooter":[16],"nodeRender":[16],"domRender":[16],"totalHeight":[32],"positionForItem":[64],"checkRange":[64],"checkEnd":[64]},[[9,"resize","onResize"]]]]],["ion-menu-controller",[[0,"ion-menu-controller",{"open":[64],"close":[64],"toggle":[64],"enable":[64],"swipeGesture":[64],"isOpen":[64],"isEnabled":[64],"get":[64],"getOpen":[64],"getMenus":[64],"isAnimating":[64],"registerAnimation":[64],"_getInstance":[64]}]]],[{"ios":"ion-picker-column-ios","md":"ion-picker-column-md"},[[0,"ion-picker-column",{"col":[16]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[1],"duration":[2],"name":[1],"paused":[4]}]]],[{"ios":"ion-item_5-ios","md":"ion-item_5-md"},[[1,"ion-item",{"color":[1],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[4],"download":[1],"href":[1],"rel":[1],"lines":[1],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"multipleInputs":[32]},[[0,"ionStyle","itemStyle"]]],[0,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}],[1,"ion-list-header",{"color":[1]}],[1,"ion-radio",{"color":[1],"name":[1],"disabled":[4],"checked":[1028],"value":[1032]}],[0,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"name":[1],"value":[1032]},[[0,"ionRadioDidLoad","onRadioDidLoad"],[0,"ionRadioDidUnload","onRadioDidUnload"],[0,"ionSelect","onRadioSelect"],[0,"ionDeselect","onRadioDeselect"]]]]],[{"ios":"ion-backdrop-ios","md":"ion-backdrop-md"},[[1,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"touchstart","onTouchStart"],[2,"click","onMouseDown"],[2,"mousedown","onMouseDown"]]]]]]'
      ),
      options
    );
  });
};
export { defineCustomElements };
