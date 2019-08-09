# optr-decode-field

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description | Type      | Default |
| ---------- | ---------- | ----------- | --------- | ------- |
| `autofill` | `autofill` |             | `boolean` | `false` |
| `disabled` | `disabled` |             | `boolean` | `true`  |
| `value`    | `value`    |             | `string`  | `""`    |

## Events

| Event    | Description | Type               |
| -------- | ----------- | ------------------ |
| `onCopy` |             | `CustomEvent<any>` |

## Dependencies

### Used by

- [optr-app](../optr-app)

### Depends on

- ion-button
- ion-icon
- ion-grid
- ion-row
- ion-col
- ion-label
- ion-toast-controller

### Graph

```mermaid
graph TD;
  optr-decode-field --> ion-button
  optr-decode-field --> ion-icon
  optr-decode-field --> ion-grid
  optr-decode-field --> ion-row
  optr-decode-field --> ion-col
  optr-decode-field --> ion-label
  optr-decode-field --> ion-toast-controller
  ion-button --> ion-ripple-effect
  optr-app --> optr-decode-field
  style optr-decode-field fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
