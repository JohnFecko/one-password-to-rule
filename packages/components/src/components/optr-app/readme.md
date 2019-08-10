# app-home

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                  | Description | Type      | Default     |
| ----------------------- | -------------------------- | ----------- | --------- | ----------- |
| `autofill`              | `autofill`                 |             | `boolean` | `undefined` |
| `hashPassword`          | `hash-password`            |             | `string`  | `undefined` |
| `hashPasswordCrackTime` | `hash-password-crack-time` |             | `string`  | `undefined` |
| `modifier`              | `modifier`                 |             | `string`  | `undefined` |
| `password`              | `password`                 |             | `string`  | `undefined` |
| `passwordCrackTime`     | `password-crack-time`      |             | `string`  | `undefined` |
| `passwordEmpty`         | `password-empty`           |             | `boolean` | `true`      |
| `passwordScore`         | `password-score`           |             | `number`  | `undefined` |
| `passwordStrengthColor` | `password-strength-color`  |             | `string`  | `undefined` |
| `passwordStrengthLabel` | `password-strength-label`  |             | `string`  | `undefined` |
| `passwordStrengthValue` | `password-strength-value`  |             | `number`  | `undefined` |


## Dependencies

### Depends on

- ion-grid
- ion-row
- ion-col
- [optr-field](../field)
- [optr-decode-field](../decode-field)
- ion-alert-controller

### Graph
```mermaid
graph TD;
  optr-app --> ion-grid
  optr-app --> ion-row
  optr-app --> ion-col
  optr-app --> optr-field
  optr-app --> optr-decode-field
  optr-app --> ion-alert-controller
  optr-field --> ion-grid
  optr-field --> ion-row
  optr-field --> ion-col
  optr-field --> ion-label
  optr-field --> ion-icon
  optr-field --> ion-input
  optr-field --> ion-progress-bar
  optr-decode-field --> ion-button
  optr-decode-field --> ion-icon
  optr-decode-field --> ion-grid
  optr-decode-field --> ion-row
  optr-decode-field --> ion-col
  optr-decode-field --> ion-label
  optr-decode-field --> ion-toast-controller
  ion-button --> ion-ripple-effect
  style optr-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
