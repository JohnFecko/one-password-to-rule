import { h } from "@stencil/core";
export class Field {
  onInputChange() {
    this.value = this.inputElement.value;
    this.inputChange();
  }
  render() {
    return h(
      "ion-grid",
      null,
      h(
        "ion-row",
        { class: "field-info", "align-items-center": true },
        h("ion-col", null, h("ion-label", null, h("strong", null, this.label))),
        h(
          "ion-col",
          null,
          h(
            "ion-row",
            { "align-items-center": true, "justify-content-end": true },
            h(
              "ion-label",
              { "align-items-end": true, color: this.strengthColor },
              this.strengthLabel
            ),
            h("ion-icon", {
              onClick: this.infoCallback.bind(this),
              name: "information-circle"
            })
          )
        )
      ),
      h(
        "ion-row",
        { class: "passwordInput inputBox" },
        h("ion-input", {
          name: this.label,
          type: "text",
          class: "code",
          value: this.value,
          ref: el => (this.inputElement = el),
          clearInput: true,
          debounce: 500,
          placeholder: this.placeholder
        }),
        this.strengthIndicator
          ? h("ion-progress-bar", {
              color: this.strengthColor,
              value: this.strengthValue
            })
          : ""
      )
    );
  }
  static get is() {
    return "optr-field";
  }
  static get originalStyleUrls() {
    return {
      $: ["field.scss"]
    };
  }
  static get styleUrls() {
    return {
      $: ["field.css"]
    };
  }
  static get properties() {
    return {
      label: {
        type: "string",
        mutable: false,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "label",
        reflect: false
      },
      placeholder: {
        type: "string",
        mutable: false,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "placeholder",
        reflect: false
      },
      value: {
        type: "string",
        mutable: true,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "value",
        reflect: false
      },
      strengthColor: {
        type: "string",
        mutable: false,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "strength-color",
        reflect: false
      },
      strengthLabel: {
        type: "string",
        mutable: false,
        complexType: {
          original: "string",
          resolved: "string",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "strength-label",
        reflect: false
      },
      strengthValue: {
        type: "number",
        mutable: false,
        complexType: {
          original: "number",
          resolved: "number",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "strength-value",
        reflect: false
      },
      strengthIndicator: {
        type: "boolean",
        mutable: false,
        complexType: {
          original: "boolean",
          resolved: "boolean",
          references: {}
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        },
        attribute: "strength-indicator",
        reflect: false
      },
      infoCallback: {
        type: "unknown",
        mutable: false,
        complexType: {
          original: "Function",
          resolved: "Function",
          references: {
            Function: {
              location: "global"
            }
          }
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        }
      },
      inputChange: {
        type: "unknown",
        mutable: false,
        complexType: {
          original: "Function",
          resolved: "Function",
          references: {
            Function: {
              location: "global"
            }
          }
        },
        required: false,
        optional: false,
        docs: {
          tags: [],
          text: ""
        }
      }
    };
  }
  static get listeners() {
    return [
      {
        name: "ionChange",
        method: "onInputChange",
        target: {
          pos: 517,
          end: 535,
          flags: 0,
          modifierFlagsCache: 0,
          transformFlags: 536872960,
          parent: {
            pos: 509,
            end: 535,
            flags: 0,
            modifierFlagsCache: 536870912,
            transformFlags: 536872960,
            parent: {
              pos: 507,
              end: 537,
              flags: 0,
              modifierFlagsCache: 0,
              transformFlags: 536872960,
              parent: {
                pos: 488,
                end: 538,
                flags: 8192,
                modifierFlagsCache: 0,
                transformFlags: 536872960,
                parent: {
                  pos: 483,
                  end: 538,
                  flags: 0,
                  modifierFlagsCache: 0,
                  transformFlags: 536873985,
                  parent: {
                    pos: 483,
                    end: 628,
                    flags: 128,
                    modifierFlagsCache: 536870912,
                    transformFlags: 536874113,
                    parent: {
                      pos: 59,
                      end: 1871,
                      flags: 0,
                      modifierFlagsCache: 536870913,
                      transformFlags: 536872083,
                      parent: {
                        pos: 0,
                        end: 1872,
                        flags: 0,
                        modifierFlagsCache: 0,
                        transformFlags: 536871059,
                        parent: undefined,
                        kind: 285,
                        text:
                          'import { Component, h, Prop, Listen } from "@stencil/core";\n\n@Component({\n  tag: "optr-field",\n  styleUrl: "field.scss"\n})\nexport class Field {\n  @Prop() label: string;\n  @Prop() placeholder: string;\n  @Prop({ mutable: true }) value: string;\n  @Prop() strengthColor: string;\n  @Prop() strengthLabel: string;\n  @Prop() strengthValue: number;\n  @Prop() strengthIndicator: boolean;\n  @Prop() infoCallback: Function;\n  @Prop() inputChange: Function;\n\n  inputElement: HTMLIonInputElement;\n\n  @Listen("ionChange", { target: this.inputElement })\n  onInputChange() {\n    this.value = this.inputElement.value;\n    this.inputChange();\n  }\n\n  render() {\n    return (\n      <ion-grid>\n        <ion-row class="field-info" align-items-center>\n          <ion-col>\n            <ion-label>\n              <strong>{this.label}</strong>\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-row align-items-center justify-content-end>\n              <ion-label align-items-end color={this.strengthColor}>\n                {this.strengthLabel}\n              </ion-label>\n              <ion-icon\n                onClick={this.infoCallback.bind(this)}\n                name="information-circle"\n              />\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row class="passwordInput inputBox">\n          <ion-input\n            name={this.label}\n            type="text"\n            class="code"\n            value={this.value}\n            ref={el => (this.inputElement = el)}\n            clearInput\n            debounce={500}\n            placeholder={this.placeholder}\n          />\n          {this.strengthIndicator ? (\n            <ion-progress-bar\n              color={this.strengthColor}\n              value={this.strengthValue}\n            />\n          ) : (\n            ""\n          )}\n        </ion-row>\n      </ion-grid>\n    );\n  }\n}\n',
                        bindDiagnostics: [],
                        bindSuggestionDiagnostics: undefined,
                        languageVersion: 4,
                        fileName:
                          "/Users/leofarias/Documents/Projects/one-password-to-rule/packages/web-components/src/components/field/field.tsx",
                        languageVariant: 1,
                        isDeclarationFile: false,
                        scriptKind: 4,
                        pragmas: {},
                        checkJsDirective: undefined,
                        referencedFiles: [],
                        typeReferenceDirectives: [],
                        libReferenceDirectives: [],
                        amdDependencies: [],
                        hasNoDefaultLib: false,
                        statements: [
                          {
                            pos: 0,
                            end: 59,
                            flags: 0,
                            modifierFlagsCache: 536870912,
                            transformFlags: 536870912,
                            parent: undefined,
                            kind: 250,
                            decorators: undefined,
                            modifiers: undefined,
                            importClause: {
                              pos: 6,
                              end: 37,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536870912,
                              parent: undefined,
                              kind: 251,
                              namedBindings: {
                                pos: 6,
                                end: 37,
                                flags: 0,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                kind: 253,
                                elements: [
                                  {
                                    pos: 8,
                                    end: 18,
                                    flags: 0,
                                    modifierFlagsCache: 536870912,
                                    transformFlags: 536870912,
                                    parent: undefined,
                                    kind: 254,
                                    name: {
                                      pos: 8,
                                      end: 18,
                                      flags: 0,
                                      modifierFlagsCache: 0,
                                      transformFlags: 536870912,
                                      parent: undefined,
                                      escapedText: "Component",
                                      flowNode: {
                                        flags: 2
                                      }
                                    },
                                    symbol: {
                                      flags: 2097152,
                                      escapedName: "Component",
                                      declarations: [undefined],
                                      parent: undefined,
                                      id: 13,
                                      isReferenced: 68268991
                                    }
                                  },
                                  {
                                    pos: 19,
                                    end: 21,
                                    flags: 0,
                                    modifierFlagsCache: 536870912,
                                    transformFlags: 536870912,
                                    parent: undefined,
                                    kind: 254,
                                    name: {
                                      pos: 19,
                                      end: 21,
                                      flags: 0,
                                      modifierFlagsCache: 0,
                                      transformFlags: 536870912,
                                      parent: undefined,
                                      escapedText: "h",
                                      flowNode: undefined
                                    },
                                    symbol: {
                                      flags: 2097152,
                                      escapedName: "h",
                                      declarations: [undefined],
                                      parent: undefined,
                                      id: 14,
                                      isReferenced: 67108863
                                    }
                                  },
                                  {
                                    pos: 22,
                                    end: 27,
                                    flags: 0,
                                    modifierFlagsCache: 536870912,
                                    transformFlags: 536870912,
                                    parent: undefined,
                                    kind: 254,
                                    name: {
                                      pos: 22,
                                      end: 27,
                                      flags: 0,
                                      modifierFlagsCache: 0,
                                      transformFlags: 536870912,
                                      parent: undefined,
                                      escapedText: "Prop",
                                      flowNode: undefined
                                    },
                                    symbol: {
                                      flags: 2097152,
                                      escapedName: "Prop",
                                      declarations: [undefined],
                                      parent: undefined,
                                      id: 15,
                                      isReferenced: 68268991
                                    }
                                  },
                                  {
                                    pos: 28,
                                    end: 35,
                                    flags: 0,
                                    modifierFlagsCache: 536870912,
                                    transformFlags: 536870912,
                                    parent: undefined,
                                    kind: 254,
                                    name: {
                                      pos: 28,
                                      end: 35,
                                      flags: 0,
                                      modifierFlagsCache: 0,
                                      transformFlags: 536870912,
                                      parent: undefined,
                                      escapedText: "Listen",
                                      flowNode: undefined
                                    },
                                    symbol: {
                                      flags: 2097152,
                                      escapedName: "Listen",
                                      declarations: [undefined],
                                      parent: undefined,
                                      id: 16,
                                      isReferenced: 68268991
                                    }
                                  }
                                ]
                              }
                            },
                            moduleSpecifier: {
                              pos: 42,
                              end: 58,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536870912,
                              parent: undefined,
                              kind: 10,
                              text: "@stencil/core"
                            }
                          },
                          undefined
                        ],
                        endOfFileToken: {
                          pos: 1871,
                          end: 1872,
                          flags: 0,
                          modifierFlagsCache: 0,
                          transformFlags: 536870912,
                          parent: undefined,
                          kind: 1
                        },
                        externalModuleIndicator: undefined,
                        nodeCount: 332,
                        identifierCount: 94,
                        identifiers: {},
                        parseDiagnostics: [],
                        version: "transpileService_h6bgg6029vhnsvbbixyx9q",
                        scriptSnapshot: {
                          text:
                            'import { Component, h, Prop, Listen } from "@stencil/core";\n\n@Component({\n  tag: "optr-field",\n  styleUrl: "field.scss"\n})\nexport class Field {\n  @Prop() label: string;\n  @Prop() placeholder: string;\n  @Prop({ mutable: true }) value: string;\n  @Prop() strengthColor: string;\n  @Prop() strengthLabel: string;\n  @Prop() strengthValue: number;\n  @Prop() strengthIndicator: boolean;\n  @Prop() infoCallback: Function;\n  @Prop() inputChange: Function;\n\n  inputElement: HTMLIonInputElement;\n\n  @Listen("ionChange", { target: this.inputElement })\n  onInputChange() {\n    this.value = this.inputElement.value;\n    this.inputChange();\n  }\n\n  render() {\n    return (\n      <ion-grid>\n        <ion-row class="field-info" align-items-center>\n          <ion-col>\n            <ion-label>\n              <strong>{this.label}</strong>\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-row align-items-center justify-content-end>\n              <ion-label align-items-end color={this.strengthColor}>\n                {this.strengthLabel}\n              </ion-label>\n              <ion-icon\n                onClick={this.infoCallback.bind(this)}\n                name="information-circle"\n              />\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row class="passwordInput inputBox">\n          <ion-input\n            name={this.label}\n            type="text"\n            class="code"\n            value={this.value}\n            ref={el => (this.inputElement = el)}\n            clearInput\n            debounce={500}\n            placeholder={this.placeholder}\n          />\n          {this.strengthIndicator ? (\n            <ion-progress-bar\n              color={this.strengthColor}\n              value={this.strengthValue}\n            />\n          ) : (\n            ""\n          )}\n        </ion-row>\n      </ion-grid>\n    );\n  }\n}\n'
                        },
                        path:
                          "/users/leofarias/documents/projects/one-password-to-rule/packages/web-components/src/components/field/field.tsx",
                        resolvedPath:
                          "/users/leofarias/documents/projects/one-password-to-rule/packages/web-components/src/components/field/field.tsx",
                        originalFileName:
                          "/Users/leofarias/Documents/Projects/one-password-to-rule/packages/web-components/src/components/field/field.tsx",
                        imports: [undefined],
                        moduleAugmentations: [],
                        ambientModuleNames: [],
                        resolvedModules: {},
                        symbol: {
                          flags: 512,
                          escapedName:
                            '"/Users/leofarias/Documents/Projects/one-password-to-rule/packages/web-components/src/components/field/field"',
                          declarations: [undefined],
                          exports: {},
                          valueDeclaration: undefined,
                          id: 182
                        },
                        locals: {},
                        nextContainer: undefined,
                        symbolCount: 60,
                        classifiableNames: {},
                        id: 7,
                        lineMap: [
                          0,
                          60,
                          61,
                          74,
                          95,
                          120,
                          123,
                          144,
                          169,
                          200,
                          242,
                          275,
                          308,
                          341,
                          379,
                          413,
                          446,
                          447,
                          484,
                          485,
                          539,
                          559,
                          601,
                          625,
                          629,
                          630,
                          643,
                          656,
                          673,
                          729,
                          749,
                          773,
                          817,
                          842,
                          863,
                          883,
                          944,
                          1013,
                          1050,
                          1077,
                          1101,
                          1156,
                          1198,
                          1215,
                          1238,
                          1259,
                          1278,
                          1327,
                          1348,
                          1378,
                          1402,
                          1427,
                          1458,
                          1507,
                          1530,
                          1557,
                          1600,
                          1613,
                          1651,
                          1681,
                          1722,
                          1763,
                          1778,
                          1794,
                          1809,
                          1822,
                          1841,
                          1859,
                          1866,
                          1870,
                          1872
                        ]
                      },
                      kind: 241,
                      decorators: undefined,
                      modifiers: [
                        {
                          pos: 122,
                          end: 129,
                          flags: 0,
                          modifierFlagsCache: 0,
                          transformFlags: 536870912,
                          parent: undefined,
                          kind: 86
                        }
                      ],
                      name: {
                        pos: 135,
                        end: 141,
                        flags: 0,
                        modifierFlagsCache: 0,
                        transformFlags: 536870912,
                        parent: undefined,
                        escapedText: "Field",
                        flowNode: undefined
                      },
                      typeParameters: undefined,
                      heritageClauses: undefined,
                      members: [
                        {
                          pos: 143,
                          end: 168,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 536871937,
                          parent: undefined,
                          kind: 155,
                          decorators: [
                            {
                              pos: 143,
                              end: 153,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536871937,
                              parent: undefined,
                              kind: 153,
                              expression: {
                                pos: 147,
                                end: 153,
                                flags: 8192,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                kind: 192,
                                expression: {
                                  pos: 147,
                                  end: 151,
                                  flags: 8192,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536870912,
                                  parent: undefined,
                                  escapedText: "Prop",
                                  flowNode: undefined,
                                  id: 26
                                },
                                arguments: [],
                                id: 25
                              },
                              id: 24
                            }
                          ],
                          modifiers: undefined,
                          name: {
                            pos: 153,
                            end: 159,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "label",
                            flowNode: undefined
                          },
                          questionToken: undefined,
                          type: {
                            pos: 160,
                            end: 167,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870913,
                            parent: undefined,
                            kind: 139
                          },
                          initializer: undefined,
                          symbol: {
                            flags: 4,
                            escapedName: "label",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: {
                              flags: 32,
                              escapedName: "Field",
                              declarations: [undefined],
                              exports: {},
                              members: {},
                              valueDeclaration: undefined,
                              parent: undefined,
                              id: 27
                            },
                            id: 40,
                            tags: [],
                            documentationComment: []
                          },
                          jsDocCache: []
                        },
                        {
                          pos: 168,
                          end: 199,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 536871937,
                          parent: undefined,
                          kind: 155,
                          decorators: [
                            {
                              pos: 168,
                              end: 178,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536871937,
                              parent: undefined,
                              kind: 153,
                              expression: {
                                pos: 172,
                                end: 178,
                                flags: 8192,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                kind: 192,
                                expression: {
                                  pos: 172,
                                  end: 176,
                                  flags: 8192,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536870912,
                                  parent: undefined,
                                  escapedText: "Prop",
                                  flowNode: undefined,
                                  id: 35
                                },
                                arguments: [],
                                id: 34
                              },
                              id: 33
                            }
                          ],
                          modifiers: undefined,
                          name: {
                            pos: 178,
                            end: 190,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "placeholder",
                            flowNode: undefined
                          },
                          questionToken: undefined,
                          type: {
                            pos: 191,
                            end: 198,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870913,
                            parent: undefined,
                            kind: 139
                          },
                          initializer: undefined,
                          symbol: {
                            flags: 4,
                            escapedName: "placeholder",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: undefined,
                            id: 41,
                            tags: [],
                            documentationComment: []
                          },
                          jsDocCache: []
                        },
                        {
                          pos: 199,
                          end: 241,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 536871937,
                          parent: undefined,
                          kind: 155,
                          decorators: [
                            {
                              pos: 199,
                              end: 226,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536871937,
                              parent: undefined,
                              kind: 153,
                              expression: {
                                pos: 203,
                                end: 226,
                                flags: 8192,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                kind: 192,
                                expression: {
                                  pos: 203,
                                  end: 207,
                                  flags: 8192,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536870912,
                                  parent: undefined,
                                  escapedText: "Prop",
                                  flowNode: undefined,
                                  id: 38
                                },
                                arguments: [
                                  {
                                    pos: 208,
                                    end: 225,
                                    flags: 0,
                                    modifierFlagsCache: 0,
                                    transformFlags: 536870912,
                                    parent: undefined,
                                    kind: 189,
                                    properties: [
                                      {
                                        pos: 209,
                                        end: 223,
                                        flags: 0,
                                        modifierFlagsCache: 536870912,
                                        transformFlags: 536870912,
                                        parent: undefined,
                                        kind: 276,
                                        decorators: undefined,
                                        modifiers: undefined,
                                        name: {
                                          pos: 209,
                                          end: 217,
                                          flags: 0,
                                          modifierFlagsCache: 0,
                                          transformFlags: 536870912,
                                          parent: undefined,
                                          escapedText: "mutable",
                                          flowNode: undefined
                                        },
                                        questionToken: undefined,
                                        exclamationToken: undefined,
                                        initializer: {
                                          pos: 218,
                                          end: 223,
                                          flags: 0,
                                          modifierFlagsCache: 0,
                                          transformFlags: 536870912,
                                          parent: undefined,
                                          kind: 103
                                        },
                                        symbol: {
                                          flags: 4,
                                          escapedName: "mutable",
                                          declarations: [undefined],
                                          valueDeclaration: undefined,
                                          parent: {
                                            flags: 4096,
                                            escapedName: "__object",
                                            declarations: [undefined],
                                            members: {},
                                            valueDeclaration: undefined
                                          }
                                        }
                                      }
                                    ],
                                    symbol: undefined,
                                    nextContainer: undefined,
                                    contextualType: undefined,
                                    inferenceContext: undefined,
                                    jsDocCache: []
                                  }
                                ],
                                id: 37
                              },
                              id: 36
                            }
                          ],
                          modifiers: undefined,
                          name: {
                            pos: 226,
                            end: 232,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "value",
                            flowNode: undefined
                          },
                          questionToken: undefined,
                          type: {
                            pos: 233,
                            end: 240,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870913,
                            parent: undefined,
                            kind: 139
                          },
                          initializer: undefined,
                          symbol: {
                            flags: 4,
                            escapedName: "value",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: undefined,
                            id: 45,
                            tags: [],
                            documentationComment: []
                          },
                          jsDocCache: []
                        },
                        {
                          pos: 241,
                          end: 274,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 536871937,
                          parent: undefined,
                          kind: 155,
                          decorators: [
                            {
                              pos: 241,
                              end: 251,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536871937,
                              parent: undefined,
                              kind: 153,
                              expression: {
                                pos: 245,
                                end: 251,
                                flags: 8192,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                kind: 192,
                                expression: {
                                  pos: 245,
                                  end: 249,
                                  flags: 8192,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536870912,
                                  parent: undefined,
                                  escapedText: "Prop",
                                  flowNode: undefined,
                                  id: 42
                                },
                                arguments: [],
                                id: 41
                              },
                              id: 40
                            }
                          ],
                          modifiers: undefined,
                          name: {
                            pos: 251,
                            end: 265,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "strengthColor",
                            flowNode: undefined
                          },
                          questionToken: undefined,
                          type: {
                            pos: 266,
                            end: 273,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870913,
                            parent: undefined,
                            kind: 139
                          },
                          initializer: undefined,
                          symbol: {
                            flags: 4,
                            escapedName: "strengthColor",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: undefined,
                            id: 46,
                            tags: [],
                            documentationComment: []
                          },
                          jsDocCache: []
                        },
                        {
                          pos: 274,
                          end: 307,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 536871937,
                          parent: undefined,
                          kind: 155,
                          decorators: [
                            {
                              pos: 274,
                              end: 284,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536871937,
                              parent: undefined,
                              kind: 153,
                              expression: {
                                pos: 278,
                                end: 284,
                                flags: 8192,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                kind: 192,
                                expression: {
                                  pos: 278,
                                  end: 282,
                                  flags: 8192,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536870912,
                                  parent: undefined,
                                  escapedText: "Prop",
                                  flowNode: undefined,
                                  id: 45
                                },
                                arguments: [],
                                id: 44
                              },
                              id: 43
                            }
                          ],
                          modifiers: undefined,
                          name: {
                            pos: 284,
                            end: 298,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "strengthLabel",
                            flowNode: undefined
                          },
                          questionToken: undefined,
                          type: {
                            pos: 299,
                            end: 306,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870913,
                            parent: undefined,
                            kind: 139
                          },
                          initializer: undefined,
                          symbol: {
                            flags: 4,
                            escapedName: "strengthLabel",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: undefined,
                            id: 47,
                            tags: [],
                            documentationComment: []
                          },
                          jsDocCache: []
                        },
                        {
                          pos: 307,
                          end: 340,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 536871937,
                          parent: undefined,
                          kind: 155,
                          decorators: [
                            {
                              pos: 307,
                              end: 317,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536871937,
                              parent: undefined,
                              kind: 153,
                              expression: {
                                pos: 311,
                                end: 317,
                                flags: 8192,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                kind: 192,
                                expression: {
                                  pos: 311,
                                  end: 315,
                                  flags: 8192,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536870912,
                                  parent: undefined,
                                  escapedText: "Prop",
                                  flowNode: undefined,
                                  id: 48
                                },
                                arguments: [],
                                id: 47
                              },
                              id: 46
                            }
                          ],
                          modifiers: undefined,
                          name: {
                            pos: 317,
                            end: 331,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "strengthValue",
                            flowNode: undefined
                          },
                          questionToken: undefined,
                          type: {
                            pos: 332,
                            end: 339,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870913,
                            parent: undefined,
                            kind: 136
                          },
                          initializer: undefined,
                          symbol: {
                            flags: 4,
                            escapedName: "strengthValue",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: undefined,
                            id: 48,
                            tags: [],
                            documentationComment: []
                          },
                          jsDocCache: []
                        },
                        {
                          pos: 340,
                          end: 378,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 536871937,
                          parent: undefined,
                          kind: 155,
                          decorators: [
                            {
                              pos: 340,
                              end: 350,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536871937,
                              parent: undefined,
                              kind: 153,
                              expression: {
                                pos: 344,
                                end: 350,
                                flags: 8192,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                kind: 192,
                                expression: {
                                  pos: 344,
                                  end: 348,
                                  flags: 8192,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536870912,
                                  parent: undefined,
                                  escapedText: "Prop",
                                  flowNode: undefined,
                                  id: 51
                                },
                                arguments: [],
                                id: 50
                              },
                              id: 49
                            }
                          ],
                          modifiers: undefined,
                          name: {
                            pos: 350,
                            end: 368,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "strengthIndicator",
                            flowNode: undefined
                          },
                          questionToken: undefined,
                          type: {
                            pos: 369,
                            end: 377,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870913,
                            parent: undefined,
                            kind: 124
                          },
                          initializer: undefined,
                          symbol: {
                            flags: 4,
                            escapedName: "strengthIndicator",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: undefined,
                            id: 49,
                            tags: [],
                            documentationComment: []
                          },
                          jsDocCache: []
                        },
                        {
                          pos: 378,
                          end: 412,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 536871937,
                          parent: undefined,
                          kind: 155,
                          decorators: [
                            {
                              pos: 378,
                              end: 388,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536871937,
                              parent: undefined,
                              kind: 153,
                              expression: {
                                pos: 382,
                                end: 388,
                                flags: 8192,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                kind: 192,
                                expression: {
                                  pos: 382,
                                  end: 386,
                                  flags: 8192,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536870912,
                                  parent: undefined,
                                  escapedText: "Prop",
                                  flowNode: undefined,
                                  id: 54
                                },
                                arguments: [],
                                id: 53
                              },
                              id: 52
                            }
                          ],
                          modifiers: undefined,
                          name: {
                            pos: 388,
                            end: 401,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "infoCallback",
                            flowNode: undefined
                          },
                          questionToken: undefined,
                          type: {
                            pos: 402,
                            end: 411,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870913,
                            parent: undefined,
                            kind: 165,
                            typeName: {
                              pos: 402,
                              end: 411,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536870912,
                              parent: undefined,
                              escapedText: "Function",
                              flowNode: undefined
                            },
                            id: 55
                          },
                          initializer: undefined,
                          symbol: {
                            flags: 4,
                            escapedName: "infoCallback",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: undefined,
                            id: 50,
                            tags: [],
                            documentationComment: []
                          },
                          jsDocCache: []
                        },
                        {
                          pos: 412,
                          end: 445,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 536871937,
                          parent: undefined,
                          kind: 155,
                          decorators: [
                            {
                              pos: 412,
                              end: 422,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536871937,
                              parent: undefined,
                              kind: 153,
                              expression: {
                                pos: 416,
                                end: 422,
                                flags: 8192,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                kind: 192,
                                expression: {
                                  pos: 416,
                                  end: 420,
                                  flags: 8192,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536870912,
                                  parent: undefined,
                                  escapedText: "Prop",
                                  flowNode: undefined,
                                  id: 58
                                },
                                arguments: [],
                                id: 57
                              },
                              id: 56
                            }
                          ],
                          modifiers: undefined,
                          name: {
                            pos: 422,
                            end: 434,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "inputChange",
                            flowNode: undefined
                          },
                          questionToken: undefined,
                          type: {
                            pos: 435,
                            end: 444,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870913,
                            parent: undefined,
                            kind: 165,
                            typeName: {
                              pos: 435,
                              end: 444,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536870912,
                              parent: undefined,
                              escapedText: "Function",
                              flowNode: undefined
                            },
                            id: 59
                          },
                          initializer: undefined,
                          symbol: {
                            flags: 4,
                            escapedName: "inputChange",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: undefined,
                            id: 51,
                            tags: [],
                            documentationComment: []
                          },
                          jsDocCache: []
                        },
                        {
                          pos: 445,
                          end: 483,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 536870913,
                          parent: undefined,
                          kind: 155,
                          decorators: undefined,
                          modifiers: undefined,
                          name: {
                            pos: 445,
                            end: 461,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "inputElement",
                            flowNode: undefined
                          },
                          questionToken: undefined,
                          type: {
                            pos: 462,
                            end: 482,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870913,
                            parent: undefined,
                            kind: 165,
                            typeName: {
                              pos: 462,
                              end: 482,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536870912,
                              parent: undefined,
                              escapedText: "HTMLIonInputElement",
                              flowNode: undefined
                            },
                            id: 60
                          },
                          initializer: undefined,
                          symbol: {
                            flags: 4,
                            escapedName: "inputElement",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: undefined,
                            id: 57
                          }
                        },
                        undefined,
                        {
                          pos: 628,
                          end: 1869,
                          flags: 0,
                          modifierFlagsCache: 536870912,
                          transformFlags: 537135250,
                          parent: undefined,
                          kind: 157,
                          decorators: undefined,
                          modifiers: undefined,
                          name: {
                            pos: 628,
                            end: 638,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "render",
                            flowNode: {
                              flags: 1538
                            }
                          },
                          questionToken: undefined,
                          asteriskToken: undefined,
                          typeParameters: undefined,
                          parameters: [],
                          body: {
                            pos: 640,
                            end: 1869,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 537135250,
                            parent: undefined,
                            kind: 219,
                            multiLine: true,
                            statements: [
                              {
                                pos: 642,
                                end: 1865,
                                flags: 0,
                                modifierFlagsCache: 0,
                                transformFlags: 537135250,
                                parent: undefined,
                                kind: 231,
                                expression: {
                                  pos: 653,
                                  end: 1864,
                                  flags: 0,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536873090,
                                  parent: undefined,
                                  kind: 196,
                                  expression: {
                                    pos: 655,
                                    end: 1858,
                                    flags: 0,
                                    modifierFlagsCache: 0,
                                    transformFlags: 536873090,
                                    parent: undefined,
                                    kind: 261,
                                    openingElement: {
                                      pos: 655,
                                      end: 672,
                                      flags: 0,
                                      modifierFlagsCache: 0,
                                      transformFlags: 536870914,
                                      parent: undefined,
                                      kind: 263,
                                      tagName: {
                                        pos: 663,
                                        end: 671,
                                        flags: 0,
                                        modifierFlagsCache: 0,
                                        transformFlags: 536870912,
                                        parent: undefined,
                                        escapedText: "ion-grid",
                                        flowNode: undefined
                                      },
                                      typeArguments: undefined,
                                      attributes: {
                                        pos: 671,
                                        end: 671,
                                        flags: 0,
                                        modifierFlagsCache: 0,
                                        transformFlags: 536870914,
                                        parent: undefined,
                                        kind: 269,
                                        properties: [],
                                        symbol: {
                                          flags: 4096,
                                          escapedName: "__jsxAttributes",
                                          declarations: [undefined],
                                          members: {},
                                          valueDeclaration: undefined
                                        },
                                        nextContainer: {
                                          pos: 689,
                                          end: 727,
                                          flags: 0,
                                          modifierFlagsCache: 0,
                                          transformFlags: 536870914,
                                          parent: {
                                            pos: 681,
                                            end: 728,
                                            flags: 0,
                                            modifierFlagsCache: 0,
                                            transformFlags: 536870914,
                                            parent: {
                                              pos: 681,
                                              end: 1277,
                                              flags: 0,
                                              modifierFlagsCache: 0,
                                              transformFlags: 536872962,
                                              parent: undefined,
                                              kind: 261,
                                              openingElement: undefined,
                                              children: [
                                                {
                                                  pos: 728,
                                                  end: 739,
                                                  flags: 0,
                                                  modifierFlagsCache: 0,
                                                  transformFlags: 536870914,
                                                  parent: undefined,
                                                  kind: 11,
                                                  text: "\n          ",
                                                  containsOnlyTriviaWhiteSpaces: true
                                                },
                                                {
                                                  pos: 739,
                                                  end: 862,
                                                  flags: 0,
                                                  modifierFlagsCache: 0,
                                                  transformFlags: 536872962,
                                                  parent: undefined,
                                                  kind: 261,
                                                  openingElement: {
                                                    pos: 739,
                                                    end: 748,
                                                    flags: 0,
                                                    modifierFlagsCache: 0,
                                                    transformFlags: 536870914,
                                                    parent: undefined,
                                                    kind: 263,
                                                    tagName: {
                                                      pos: 740,
                                                      end: 747,
                                                      flags: 0,
                                                      modifierFlagsCache: 0,
                                                      transformFlags: 536870912,
                                                      parent: undefined,
                                                      escapedText: "ion-col",
                                                      flowNode: undefined
                                                    },
                                                    typeArguments: undefined,
                                                    attributes: {
                                                      pos: 747,
                                                      end: 747,
                                                      flags: 0,
                                                      modifierFlagsCache: 0,
                                                      transformFlags: 536870914,
                                                      parent: undefined,
                                                      kind: 269,
                                                      properties: [],
                                                      symbol: {
                                                        flags: 4096,
                                                        escapedName:
                                                          "__jsxAttributes",
                                                        declarations: [
                                                          undefined
                                                        ],
                                                        members: {},
                                                        valueDeclaration: undefined
                                                      },
                                                      nextContainer: {
                                                        pos: 771,
                                                        end: 771,
                                                        flags: 0,
                                                        modifierFlagsCache: 0,
                                                        transformFlags: 536870914,
                                                        parent: {
                                                          pos: 761,
                                                          end: 772,
                                                          flags: 0,
                                                          modifierFlagsCache: 0,
                                                          transformFlags: 536870914,
                                                          parent: {
                                                            pos: 761,
                                                            end: 841,
                                                            flags: 0,
                                                            modifierFlagsCache: 0,
                                                            transformFlags: 536872962,
                                                            parent: undefined,
                                                            kind: 261,
                                                            openingElement: undefined,
                                                            children: [
                                                              {
                                                                pos: 772,
                                                                end: 787,
                                                                flags: 0,
                                                                modifierFlagsCache: 0,
                                                                transformFlags: 536870914,
                                                                parent: undefined,
                                                                kind: 11,
                                                                text:
                                                                  "\n              ",
                                                                containsOnlyTriviaWhiteSpaces: true
                                                              },
                                                              {
                                                                pos: 787,
                                                                end: 816,
                                                                flags: 0,
                                                                modifierFlagsCache: 0,
                                                                transformFlags: 536872962,
                                                                parent: undefined,
                                                                kind: 261,
                                                                openingElement: {
                                                                  pos: 787,
                                                                  end: 795,
                                                                  flags: 0,
                                                                  modifierFlagsCache: 0,
                                                                  transformFlags: 536870914,
                                                                  parent: undefined,
                                                                  kind: 263,
                                                                  tagName: {
                                                                    pos: 788,
                                                                    end: 794,
                                                                    flags: 0,
                                                                    modifierFlagsCache: 0,
                                                                    transformFlags: 536870912,
                                                                    parent: undefined,
                                                                    escapedText:
                                                                      "strong",
                                                                    flowNode: undefined
                                                                  },
                                                                  typeArguments: undefined,
                                                                  attributes: {
                                                                    pos: 794,
                                                                    end: 794,
                                                                    flags: 0,
                                                                    modifierFlagsCache: 0,
                                                                    transformFlags: 536870914,
                                                                    parent: undefined,
                                                                    kind: 269,
                                                                    properties: [],
                                                                    symbol: {
                                                                      flags: 4096,
                                                                      escapedName:
                                                                        "__jsxAttributes",
                                                                      declarations: [
                                                                        undefined
                                                                      ],
                                                                      members: {},
                                                                      valueDeclaration: undefined
                                                                    },
                                                                    nextContainer: {
                                                                      pos: 881,
                                                                      end: 881,
                                                                      flags: 0,
                                                                      modifierFlagsCache: 0,
                                                                      transformFlags: 536870914,
                                                                      parent: {
                                                                        pos: 873,
                                                                        end: 882,
                                                                        flags: 0,
                                                                        modifierFlagsCache: 0,
                                                                        transformFlags: 536870914,
                                                                        parent: {
                                                                          pos: 873,
                                                                          end: 1258,
                                                                          flags: 0,
                                                                          modifierFlagsCache: 0,
                                                                          transformFlags: 536872962,
                                                                          parent: undefined,
                                                                          kind: 261,
                                                                          openingElement: undefined,
                                                                          children: [
                                                                            {
                                                                              pos: 882,
                                                                              end: 895,
                                                                              flags: 0,
                                                                              modifierFlagsCache: 0,
                                                                              transformFlags: 536870914,
                                                                              parent: undefined,
                                                                              kind: 11,
                                                                              text:
                                                                                "\n            ",
                                                                              containsOnlyTriviaWhiteSpaces: true
                                                                            },
                                                                            {
                                                                              pos: 895,
                                                                              end: 1237,
                                                                              flags: 0,
                                                                              modifierFlagsCache: 0,
                                                                              transformFlags: 536872962,
                                                                              parent: undefined,
                                                                              kind: 261,
                                                                              openingElement: {
                                                                                pos: 895,
                                                                                end: 943,
                                                                                flags: 0,
                                                                                modifierFlagsCache: 0,
                                                                                transformFlags: 536870914,
                                                                                parent: undefined,
                                                                                kind: 263,
                                                                                tagName: {
                                                                                  pos: 896,
                                                                                  end: 903,
                                                                                  flags: 0,
                                                                                  modifierFlagsCache: 0,
                                                                                  transformFlags: 536870912,
                                                                                  parent: undefined,
                                                                                  escapedText:
                                                                                    "ion-row",
                                                                                  flowNode: undefined
                                                                                },
                                                                                typeArguments: undefined,
                                                                                attributes: {
                                                                                  pos: 903,
                                                                                  end: 942,
                                                                                  flags: 0,
                                                                                  modifierFlagsCache: 0,
                                                                                  transformFlags: 536870914,
                                                                                  parent: undefined,
                                                                                  kind: 269,
                                                                                  properties: [
                                                                                    {
                                                                                      pos: 903,
                                                                                      end: 922,
                                                                                      flags: 0,
                                                                                      modifierFlagsCache: 536870912,
                                                                                      transformFlags: 536870914,
                                                                                      parent: undefined,
                                                                                      kind: 268,
                                                                                      name: {
                                                                                        pos: 903,
                                                                                        end: 922,
                                                                                        flags: 0,
                                                                                        modifierFlagsCache: 0,
                                                                                        transformFlags: 536870912,
                                                                                        parent: undefined,
                                                                                        escapedText:
                                                                                          "align-items-center",
                                                                                        flowNode: undefined
                                                                                      },
                                                                                      symbol: {
                                                                                        flags: 4,
                                                                                        escapedName:
                                                                                          "align-items-center",
                                                                                        declarations: [
                                                                                          undefined
                                                                                        ],
                                                                                        valueDeclaration: undefined,
                                                                                        parent: {
                                                                                          flags: 4096,
                                                                                          escapedName:
                                                                                            "__jsxAttributes",
                                                                                          declarations: [
                                                                                            undefined
                                                                                          ],
                                                                                          members: {},
                                                                                          valueDeclaration: undefined
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    {
                                                                                      pos: 922,
                                                                                      end: 942,
                                                                                      flags: 0,
                                                                                      modifierFlagsCache: 536870912,
                                                                                      transformFlags: 536870914,
                                                                                      parent: undefined,
                                                                                      kind: 268,
                                                                                      name: {
                                                                                        pos: 922,
                                                                                        end: 942,
                                                                                        flags: 0,
                                                                                        modifierFlagsCache: 0,
                                                                                        transformFlags: 536870912,
                                                                                        parent: undefined,
                                                                                        escapedText:
                                                                                          "justify-content-end",
                                                                                        flowNode: undefined
                                                                                      },
                                                                                      symbol: {
                                                                                        flags: 4,
                                                                                        escapedName:
                                                                                          "justify-content-end",
                                                                                        declarations: [
                                                                                          undefined
                                                                                        ],
                                                                                        valueDeclaration: undefined,
                                                                                        parent: undefined
                                                                                      }
                                                                                    }
                                                                                  ],
                                                                                  symbol: undefined,
                                                                                  nextContainer: {
                                                                                    pos: 968,
                                                                                    end: 1011,
                                                                                    flags: 0,
                                                                                    modifierFlagsCache: 0,
                                                                                    transformFlags: 536872962,
                                                                                    parent: {
                                                                                      pos: 958,
                                                                                      end: 1012,
                                                                                      flags: 0,
                                                                                      modifierFlagsCache: 0,
                                                                                      transformFlags: 536872962,
                                                                                      parent: {
                                                                                        pos: 958,
                                                                                        end: 1076,
                                                                                        flags: 0,
                                                                                        modifierFlagsCache: 0,
                                                                                        transformFlags: 536872962,
                                                                                        parent: undefined,
                                                                                        kind: 261,
                                                                                        openingElement: undefined,
                                                                                        children: [
                                                                                          {
                                                                                            pos: 1012,
                                                                                            end: 1029,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536870914,
                                                                                            parent: undefined,
                                                                                            kind: 11,
                                                                                            text:
                                                                                              "\n                ",
                                                                                            containsOnlyTriviaWhiteSpaces: true
                                                                                          },
                                                                                          {
                                                                                            pos: 1029,
                                                                                            end: 1049,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536872962,
                                                                                            parent: undefined,
                                                                                            kind: 271,
                                                                                            dotDotDotToken: undefined,
                                                                                            expression: {
                                                                                              pos: 1030,
                                                                                              end: 1048,
                                                                                              flags: 0,
                                                                                              modifierFlagsCache: 0,
                                                                                              transformFlags: 536872960,
                                                                                              parent: undefined,
                                                                                              kind: 190,
                                                                                              expression: {
                                                                                                pos: 1030,
                                                                                                end: 1034,
                                                                                                flags: 0,
                                                                                                modifierFlagsCache: 0,
                                                                                                transformFlags: 536872960,
                                                                                                parent: undefined,
                                                                                                kind: 101,
                                                                                                flowNode: undefined,
                                                                                                id: 228
                                                                                              },
                                                                                              name: {
                                                                                                pos: 1035,
                                                                                                end: 1048,
                                                                                                flags: 0,
                                                                                                modifierFlagsCache: 0,
                                                                                                transformFlags: 536870912,
                                                                                                parent: undefined,
                                                                                                escapedText:
                                                                                                  "strengthLabel",
                                                                                                flowNode: undefined
                                                                                              },
                                                                                              flowNode: undefined,
                                                                                              id: 229
                                                                                            }
                                                                                          },
                                                                                          {
                                                                                            pos: 1049,
                                                                                            end: 1064,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536870914,
                                                                                            parent: undefined,
                                                                                            kind: 11,
                                                                                            text:
                                                                                              "\n              ",
                                                                                            containsOnlyTriviaWhiteSpaces: true
                                                                                          }
                                                                                        ],
                                                                                        closingElement: {
                                                                                          pos: 1064,
                                                                                          end: 1076,
                                                                                          flags: 0,
                                                                                          modifierFlagsCache: 0,
                                                                                          transformFlags: 536870914,
                                                                                          parent: undefined,
                                                                                          kind: 264,
                                                                                          tagName: {
                                                                                            pos: 1066,
                                                                                            end: 1075,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536870912,
                                                                                            parent: undefined,
                                                                                            escapedText:
                                                                                              "ion-label",
                                                                                            flowNode: undefined
                                                                                          },
                                                                                          id: 230
                                                                                        },
                                                                                        id: 213,
                                                                                        contextualType: undefined,
                                                                                        inferenceContext: undefined
                                                                                      },
                                                                                      kind: 263,
                                                                                      tagName: {
                                                                                        pos: 959,
                                                                                        end: 968,
                                                                                        flags: 0,
                                                                                        modifierFlagsCache: 0,
                                                                                        transformFlags: 536870912,
                                                                                        parent: undefined,
                                                                                        escapedText:
                                                                                          "ion-label",
                                                                                        flowNode: undefined
                                                                                      },
                                                                                      typeArguments: undefined,
                                                                                      attributes: undefined,
                                                                                      id: 224
                                                                                    },
                                                                                    kind: 269,
                                                                                    properties: [
                                                                                      {
                                                                                        pos: 968,
                                                                                        end: 984,
                                                                                        flags: 0,
                                                                                        modifierFlagsCache: 536870912,
                                                                                        transformFlags: 536870914,
                                                                                        parent: undefined,
                                                                                        kind: 268,
                                                                                        name: {
                                                                                          pos: 968,
                                                                                          end: 984,
                                                                                          flags: 0,
                                                                                          modifierFlagsCache: 0,
                                                                                          transformFlags: 536870912,
                                                                                          parent: undefined,
                                                                                          escapedText:
                                                                                            "align-items-end",
                                                                                          flowNode: undefined
                                                                                        },
                                                                                        symbol: {
                                                                                          flags: 4,
                                                                                          escapedName:
                                                                                            "align-items-end",
                                                                                          declarations: [
                                                                                            undefined
                                                                                          ],
                                                                                          valueDeclaration: undefined,
                                                                                          parent: {
                                                                                            flags: 4096,
                                                                                            escapedName:
                                                                                              "__jsxAttributes",
                                                                                            declarations: [
                                                                                              undefined
                                                                                            ],
                                                                                            members: {},
                                                                                            valueDeclaration: undefined
                                                                                          }
                                                                                        }
                                                                                      },
                                                                                      {
                                                                                        pos: 984,
                                                                                        end: 1011,
                                                                                        flags: 0,
                                                                                        modifierFlagsCache: 536870912,
                                                                                        transformFlags: 536872962,
                                                                                        parent: undefined,
                                                                                        kind: 268,
                                                                                        name: {
                                                                                          pos: 984,
                                                                                          end: 990,
                                                                                          flags: 0,
                                                                                          modifierFlagsCache: 0,
                                                                                          transformFlags: 536870912,
                                                                                          parent: undefined,
                                                                                          escapedText:
                                                                                            "color",
                                                                                          flowNode: undefined
                                                                                        },
                                                                                        initializer: {
                                                                                          pos: 991,
                                                                                          end: 1011,
                                                                                          flags: 0,
                                                                                          modifierFlagsCache: 0,
                                                                                          transformFlags: 536872962,
                                                                                          parent: undefined,
                                                                                          kind: 271,
                                                                                          dotDotDotToken: undefined,
                                                                                          expression: {
                                                                                            pos: 992,
                                                                                            end: 1010,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536872960,
                                                                                            parent: undefined,
                                                                                            kind: 190,
                                                                                            expression: {
                                                                                              pos: 992,
                                                                                              end: 996,
                                                                                              flags: 0,
                                                                                              modifierFlagsCache: 0,
                                                                                              transformFlags: 536872960,
                                                                                              parent: undefined,
                                                                                              kind: 101,
                                                                                              flowNode: undefined,
                                                                                              id: 225
                                                                                            },
                                                                                            name: {
                                                                                              pos: 997,
                                                                                              end: 1010,
                                                                                              flags: 0,
                                                                                              modifierFlagsCache: 0,
                                                                                              transformFlags: 536870912,
                                                                                              parent: undefined,
                                                                                              escapedText:
                                                                                                "strengthColor",
                                                                                              flowNode: undefined
                                                                                            },
                                                                                            flowNode: undefined,
                                                                                            id: 226
                                                                                          }
                                                                                        },
                                                                                        symbol: {
                                                                                          flags: 4,
                                                                                          escapedName:
                                                                                            "color",
                                                                                          declarations: [
                                                                                            undefined
                                                                                          ],
                                                                                          valueDeclaration: undefined,
                                                                                          parent: undefined
                                                                                        }
                                                                                      }
                                                                                    ],
                                                                                    symbol: undefined,
                                                                                    nextContainer: {
                                                                                      pos: 1100,
                                                                                      end: 1197,
                                                                                      flags: 0,
                                                                                      modifierFlagsCache: 0,
                                                                                      transformFlags: 536872962,
                                                                                      parent: {
                                                                                        pos: 1091,
                                                                                        end: 1214,
                                                                                        flags: 0,
                                                                                        modifierFlagsCache: 0,
                                                                                        transformFlags: 536872962,
                                                                                        parent: undefined,
                                                                                        kind: 262,
                                                                                        tagName: {
                                                                                          pos: 1092,
                                                                                          end: 1100,
                                                                                          flags: 0,
                                                                                          modifierFlagsCache: 0,
                                                                                          transformFlags: 536870912,
                                                                                          parent: undefined,
                                                                                          escapedText:
                                                                                            "ion-icon",
                                                                                          flowNode: undefined
                                                                                        },
                                                                                        typeArguments: undefined,
                                                                                        attributes: undefined,
                                                                                        id: 214
                                                                                      },
                                                                                      kind: 269,
                                                                                      properties: [
                                                                                        {
                                                                                          pos: 1100,
                                                                                          end: 1155,
                                                                                          flags: 0,
                                                                                          modifierFlagsCache: 536870912,
                                                                                          transformFlags: 536872962,
                                                                                          parent: undefined,
                                                                                          kind: 268,
                                                                                          name: {
                                                                                            pos: 1100,
                                                                                            end: 1124,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536870912,
                                                                                            parent: undefined,
                                                                                            escapedText:
                                                                                              "onClick",
                                                                                            flowNode: undefined
                                                                                          },
                                                                                          initializer: {
                                                                                            pos: 1125,
                                                                                            end: 1155,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536872962,
                                                                                            parent: undefined,
                                                                                            kind: 271,
                                                                                            dotDotDotToken: undefined,
                                                                                            expression: {
                                                                                              pos: 1126,
                                                                                              end: 1154,
                                                                                              flags: 0,
                                                                                              modifierFlagsCache: 0,
                                                                                              transformFlags: 536872960,
                                                                                              parent: undefined,
                                                                                              kind: 192,
                                                                                              expression: {
                                                                                                pos: 1126,
                                                                                                end: 1148,
                                                                                                flags: 0,
                                                                                                modifierFlagsCache: 0,
                                                                                                transformFlags: 536872960,
                                                                                                parent: undefined,
                                                                                                kind: 190,
                                                                                                expression: {
                                                                                                  pos: 1126,
                                                                                                  end: 1143,
                                                                                                  flags: 0,
                                                                                                  modifierFlagsCache: 0,
                                                                                                  transformFlags: 536872960,
                                                                                                  parent: undefined,
                                                                                                  kind: 190,
                                                                                                  expression: {
                                                                                                    pos: 1126,
                                                                                                    end: 1130,
                                                                                                    flags: 0,
                                                                                                    modifierFlagsCache: 0,
                                                                                                    transformFlags: 536872960,
                                                                                                    parent: undefined,
                                                                                                    kind: 101,
                                                                                                    flowNode: undefined,
                                                                                                    id: 233
                                                                                                  },
                                                                                                  name: {
                                                                                                    pos: 1131,
                                                                                                    end: 1143,
                                                                                                    flags: 0,
                                                                                                    modifierFlagsCache: 0,
                                                                                                    transformFlags: 536870912,
                                                                                                    parent: undefined,
                                                                                                    escapedText:
                                                                                                      "infoCallback",
                                                                                                    flowNode: undefined
                                                                                                  },
                                                                                                  flowNode: undefined,
                                                                                                  id: 234
                                                                                                },
                                                                                                name: {
                                                                                                  pos: 1144,
                                                                                                  end: 1148,
                                                                                                  flags: 0,
                                                                                                  modifierFlagsCache: 0,
                                                                                                  transformFlags: 536870912,
                                                                                                  parent: undefined,
                                                                                                  escapedText:
                                                                                                    "bind",
                                                                                                  flowNode: undefined
                                                                                                },
                                                                                                flowNode: undefined,
                                                                                                id: 235
                                                                                              },
                                                                                              arguments: [
                                                                                                {
                                                                                                  pos: 1149,
                                                                                                  end: 1153,
                                                                                                  flags: 0,
                                                                                                  modifierFlagsCache: 0,
                                                                                                  transformFlags: 536872960,
                                                                                                  parent: undefined,
                                                                                                  kind: 101,
                                                                                                  flowNode: undefined,
                                                                                                  contextualType: undefined,
                                                                                                  inferenceContext: undefined
                                                                                                }
                                                                                              ],
                                                                                              id: 232
                                                                                            }
                                                                                          },
                                                                                          symbol: {
                                                                                            flags: 4,
                                                                                            escapedName:
                                                                                              "onClick",
                                                                                            declarations: [
                                                                                              undefined
                                                                                            ],
                                                                                            valueDeclaration: undefined,
                                                                                            parent: {
                                                                                              flags: 4096,
                                                                                              escapedName:
                                                                                                "__jsxAttributes",
                                                                                              declarations: [
                                                                                                undefined
                                                                                              ],
                                                                                              members: {},
                                                                                              valueDeclaration: undefined
                                                                                            }
                                                                                          }
                                                                                        },
                                                                                        {
                                                                                          pos: 1155,
                                                                                          end: 1197,
                                                                                          flags: 0,
                                                                                          modifierFlagsCache: 536870912,
                                                                                          transformFlags: 536870914,
                                                                                          parent: undefined,
                                                                                          kind: 268,
                                                                                          name: {
                                                                                            pos: 1155,
                                                                                            end: 1176,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536870912,
                                                                                            parent: undefined,
                                                                                            escapedText:
                                                                                              "name",
                                                                                            flowNode: undefined
                                                                                          },
                                                                                          initializer: {
                                                                                            pos: 1177,
                                                                                            end: 1197,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536870912,
                                                                                            parent: undefined,
                                                                                            kind: 10,
                                                                                            text:
                                                                                              "information-circle"
                                                                                          },
                                                                                          symbol: {
                                                                                            flags: 4,
                                                                                            escapedName:
                                                                                              "name",
                                                                                            declarations: [
                                                                                              undefined
                                                                                            ],
                                                                                            valueDeclaration: undefined,
                                                                                            parent: undefined
                                                                                          }
                                                                                        }
                                                                                      ],
                                                                                      symbol: undefined,
                                                                                      nextContainer: {
                                                                                        pos: 1294,
                                                                                        end: 1325,
                                                                                        flags: 0,
                                                                                        modifierFlagsCache: 0,
                                                                                        transformFlags: 536870914,
                                                                                        parent: {
                                                                                          pos: 1286,
                                                                                          end: 1326,
                                                                                          flags: 0,
                                                                                          modifierFlagsCache: 0,
                                                                                          transformFlags: 536870914,
                                                                                          parent: {
                                                                                            pos: 1286,
                                                                                            end: 1840,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536873090,
                                                                                            parent: undefined,
                                                                                            kind: 261,
                                                                                            openingElement: undefined,
                                                                                            children: [
                                                                                              {
                                                                                                pos: 1326,
                                                                                                end: 1337,
                                                                                                flags: 0,
                                                                                                modifierFlagsCache: 0,
                                                                                                transformFlags: 536870914,
                                                                                                parent: undefined,
                                                                                                kind: 11,
                                                                                                text:
                                                                                                  "\n          ",
                                                                                                containsOnlyTriviaWhiteSpaces: true
                                                                                              },
                                                                                              {
                                                                                                pos: 1337,
                                                                                                end: 1612,
                                                                                                flags: 0,
                                                                                                modifierFlagsCache: 0,
                                                                                                transformFlags: 536873090,
                                                                                                parent: undefined,
                                                                                                kind: 262,
                                                                                                tagName: {
                                                                                                  pos: 1338,
                                                                                                  end: 1347,
                                                                                                  flags: 0,
                                                                                                  modifierFlagsCache: 0,
                                                                                                  transformFlags: 536870912,
                                                                                                  parent: undefined,
                                                                                                  escapedText:
                                                                                                    "ion-input",
                                                                                                  flowNode: undefined
                                                                                                },
                                                                                                typeArguments: undefined,
                                                                                                attributes: {
                                                                                                  pos: 1347,
                                                                                                  end: 1599,
                                                                                                  flags: 0,
                                                                                                  modifierFlagsCache: 0,
                                                                                                  transformFlags: 536873090,
                                                                                                  parent: undefined,
                                                                                                  kind: 269,
                                                                                                  properties: [
                                                                                                    {
                                                                                                      pos: 1347,
                                                                                                      end: 1377,
                                                                                                      flags: 0,
                                                                                                      modifierFlagsCache: 536870912,
                                                                                                      transformFlags: 536872962,
                                                                                                      parent: undefined,
                                                                                                      kind: 268,
                                                                                                      name: {
                                                                                                        pos: 1347,
                                                                                                        end: 1364,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870912,
                                                                                                        parent: undefined,
                                                                                                        escapedText:
                                                                                                          "name",
                                                                                                        flowNode: undefined
                                                                                                      },
                                                                                                      initializer: {
                                                                                                        pos: 1365,
                                                                                                        end: 1377,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536872962,
                                                                                                        parent: undefined,
                                                                                                        kind: 271,
                                                                                                        dotDotDotToken: undefined,
                                                                                                        expression: {
                                                                                                          pos: 1366,
                                                                                                          end: 1376,
                                                                                                          flags: 0,
                                                                                                          modifierFlagsCache: 0,
                                                                                                          transformFlags: 536872960,
                                                                                                          parent: undefined,
                                                                                                          kind: 190,
                                                                                                          expression: {
                                                                                                            pos: 1366,
                                                                                                            end: 1370,
                                                                                                            flags: 0,
                                                                                                            modifierFlagsCache: 0,
                                                                                                            transformFlags: 536872960,
                                                                                                            parent: undefined,
                                                                                                            kind: 101,
                                                                                                            flowNode: undefined,
                                                                                                            id: 158
                                                                                                          },
                                                                                                          name: {
                                                                                                            pos: 1371,
                                                                                                            end: 1376,
                                                                                                            flags: 0,
                                                                                                            modifierFlagsCache: 0,
                                                                                                            transformFlags: 536870912,
                                                                                                            parent: undefined,
                                                                                                            escapedText:
                                                                                                              "label",
                                                                                                            flowNode: undefined
                                                                                                          },
                                                                                                          flowNode: undefined,
                                                                                                          id: 159
                                                                                                        }
                                                                                                      },
                                                                                                      symbol: {
                                                                                                        flags: 4,
                                                                                                        escapedName:
                                                                                                          "name",
                                                                                                        declarations: [
                                                                                                          undefined
                                                                                                        ],
                                                                                                        valueDeclaration: undefined,
                                                                                                        parent: {
                                                                                                          flags: 4096,
                                                                                                          escapedName:
                                                                                                            "__jsxAttributes",
                                                                                                          declarations: [
                                                                                                            undefined
                                                                                                          ],
                                                                                                          members: {},
                                                                                                          valueDeclaration: undefined
                                                                                                        }
                                                                                                      }
                                                                                                    },
                                                                                                    {
                                                                                                      pos: 1377,
                                                                                                      end: 1401,
                                                                                                      flags: 0,
                                                                                                      modifierFlagsCache: 536870912,
                                                                                                      transformFlags: 536870914,
                                                                                                      parent: undefined,
                                                                                                      kind: 268,
                                                                                                      name: {
                                                                                                        pos: 1377,
                                                                                                        end: 1394,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870912,
                                                                                                        parent: undefined,
                                                                                                        originalKeywordKind: 141,
                                                                                                        escapedText:
                                                                                                          "type",
                                                                                                        flowNode: undefined
                                                                                                      },
                                                                                                      initializer: {
                                                                                                        pos: 1395,
                                                                                                        end: 1401,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870912,
                                                                                                        parent: undefined,
                                                                                                        kind: 10,
                                                                                                        text:
                                                                                                          "text"
                                                                                                      },
                                                                                                      symbol: {
                                                                                                        flags: 4,
                                                                                                        escapedName:
                                                                                                          "type",
                                                                                                        declarations: [
                                                                                                          undefined
                                                                                                        ],
                                                                                                        valueDeclaration: undefined,
                                                                                                        parent: undefined
                                                                                                      }
                                                                                                    },
                                                                                                    {
                                                                                                      pos: 1401,
                                                                                                      end: 1426,
                                                                                                      flags: 0,
                                                                                                      modifierFlagsCache: 536870912,
                                                                                                      transformFlags: 536870914,
                                                                                                      parent: undefined,
                                                                                                      kind: 268,
                                                                                                      name: {
                                                                                                        pos: 1401,
                                                                                                        end: 1419,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870912,
                                                                                                        parent: undefined,
                                                                                                        originalKeywordKind: 77,
                                                                                                        escapedText:
                                                                                                          "class",
                                                                                                        flowNode: undefined
                                                                                                      },
                                                                                                      initializer: {
                                                                                                        pos: 1420,
                                                                                                        end: 1426,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870912,
                                                                                                        parent: undefined,
                                                                                                        kind: 10,
                                                                                                        text:
                                                                                                          "code"
                                                                                                      },
                                                                                                      symbol: {
                                                                                                        flags: 4,
                                                                                                        escapedName:
                                                                                                          "class",
                                                                                                        declarations: [
                                                                                                          undefined
                                                                                                        ],
                                                                                                        valueDeclaration: undefined,
                                                                                                        parent: undefined
                                                                                                      }
                                                                                                    },
                                                                                                    {
                                                                                                      pos: 1426,
                                                                                                      end: 1457,
                                                                                                      flags: 0,
                                                                                                      modifierFlagsCache: 536870912,
                                                                                                      transformFlags: 536872962,
                                                                                                      parent: undefined,
                                                                                                      kind: 268,
                                                                                                      name: {
                                                                                                        pos: 1426,
                                                                                                        end: 1444,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870912,
                                                                                                        parent: undefined,
                                                                                                        escapedText:
                                                                                                          "value",
                                                                                                        flowNode: undefined
                                                                                                      },
                                                                                                      initializer: {
                                                                                                        pos: 1445,
                                                                                                        end: 1457,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536872962,
                                                                                                        parent: undefined,
                                                                                                        kind: 271,
                                                                                                        dotDotDotToken: undefined,
                                                                                                        expression: {
                                                                                                          pos: 1446,
                                                                                                          end: 1456,
                                                                                                          flags: 0,
                                                                                                          modifierFlagsCache: 0,
                                                                                                          transformFlags: 536872960,
                                                                                                          parent: undefined,
                                                                                                          kind: 190,
                                                                                                          expression: {
                                                                                                            pos: 1446,
                                                                                                            end: 1450,
                                                                                                            flags: 0,
                                                                                                            modifierFlagsCache: 0,
                                                                                                            transformFlags: 536872960,
                                                                                                            parent: undefined,
                                                                                                            kind: 101,
                                                                                                            flowNode: undefined,
                                                                                                            id: 173
                                                                                                          },
                                                                                                          name: {
                                                                                                            pos: 1451,
                                                                                                            end: 1456,
                                                                                                            flags: 0,
                                                                                                            modifierFlagsCache: 0,
                                                                                                            transformFlags: 536870912,
                                                                                                            parent: undefined,
                                                                                                            escapedText:
                                                                                                              "value",
                                                                                                            flowNode: undefined
                                                                                                          },
                                                                                                          flowNode: undefined,
                                                                                                          id: 174
                                                                                                        }
                                                                                                      },
                                                                                                      symbol: {
                                                                                                        flags: 4,
                                                                                                        escapedName:
                                                                                                          "value",
                                                                                                        declarations: [
                                                                                                          undefined
                                                                                                        ],
                                                                                                        valueDeclaration: undefined,
                                                                                                        parent: undefined
                                                                                                      }
                                                                                                    },
                                                                                                    {
                                                                                                      pos: 1457,
                                                                                                      end: 1506,
                                                                                                      flags: 0,
                                                                                                      modifierFlagsCache: 536870912,
                                                                                                      transformFlags: 536873090,
                                                                                                      parent: undefined,
                                                                                                      kind: 268,
                                                                                                      name: {
                                                                                                        pos: 1457,
                                                                                                        end: 1473,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870912,
                                                                                                        parent: undefined,
                                                                                                        escapedText:
                                                                                                          "ref",
                                                                                                        flowNode: undefined
                                                                                                      },
                                                                                                      initializer: {
                                                                                                        pos: 1474,
                                                                                                        end: 1506,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536873090,
                                                                                                        parent: undefined,
                                                                                                        kind: 271,
                                                                                                        dotDotDotToken: undefined,
                                                                                                        expression: {
                                                                                                          pos: 1475,
                                                                                                          end: 1505,
                                                                                                          flags: 128,
                                                                                                          modifierFlagsCache: 536870912,
                                                                                                          transformFlags: 536873088,
                                                                                                          parent: undefined,
                                                                                                          kind: 198,
                                                                                                          parameters: [
                                                                                                            {
                                                                                                              pos: 1475,
                                                                                                              end: 1477,
                                                                                                              flags: 0,
                                                                                                              modifierFlagsCache: 536870912,
                                                                                                              transformFlags: 536870912,
                                                                                                              parent: undefined,
                                                                                                              kind: 152,
                                                                                                              name: {
                                                                                                                pos: 1475,
                                                                                                                end: 1477,
                                                                                                                flags: 0,
                                                                                                                modifierFlagsCache: 0,
                                                                                                                transformFlags: 536870912,
                                                                                                                parent: undefined,
                                                                                                                escapedText:
                                                                                                                  "el",
                                                                                                                flowNode: {
                                                                                                                  flags: 514,
                                                                                                                  container: undefined
                                                                                                                }
                                                                                                              },
                                                                                                              symbol: {
                                                                                                                flags: 1,
                                                                                                                escapedName:
                                                                                                                  "el",
                                                                                                                declarations: [
                                                                                                                  undefined
                                                                                                                ],
                                                                                                                exports: {},
                                                                                                                valueDeclaration: undefined,
                                                                                                                parent: undefined,
                                                                                                                id: 470,
                                                                                                                isReferenced: 68268991
                                                                                                              }
                                                                                                            }
                                                                                                          ],
                                                                                                          equalsGreaterThanToken: {
                                                                                                            pos: 1477,
                                                                                                            end: 1480,
                                                                                                            flags: 0,
                                                                                                            modifierFlagsCache: 0,
                                                                                                            transformFlags: 536870912,
                                                                                                            parent: undefined,
                                                                                                            kind: 37
                                                                                                          },
                                                                                                          body: {
                                                                                                            pos: 1480,
                                                                                                            end: 1505,
                                                                                                            flags: 0,
                                                                                                            modifierFlagsCache: 0,
                                                                                                            transformFlags: 536872960,
                                                                                                            parent: undefined,
                                                                                                            kind: 196,
                                                                                                            expression: {
                                                                                                              pos: 1482,
                                                                                                              end: 1504,
                                                                                                              flags: 0,
                                                                                                              modifierFlagsCache: 0,
                                                                                                              transformFlags: 536872960,
                                                                                                              parent: undefined,
                                                                                                              kind: 205,
                                                                                                              left: {
                                                                                                                pos: 1482,
                                                                                                                end: 1499,
                                                                                                                flags: 0,
                                                                                                                modifierFlagsCache: 0,
                                                                                                                transformFlags: 536872960,
                                                                                                                parent: undefined,
                                                                                                                kind: 190,
                                                                                                                expression: {
                                                                                                                  pos: 1482,
                                                                                                                  end: 1486,
                                                                                                                  flags: 0,
                                                                                                                  modifierFlagsCache: 0,
                                                                                                                  transformFlags: 536872960,
                                                                                                                  parent: undefined,
                                                                                                                  kind: 101,
                                                                                                                  flowNode: undefined,
                                                                                                                  id: 180
                                                                                                                },
                                                                                                                name: {
                                                                                                                  pos: 1487,
                                                                                                                  end: 1499,
                                                                                                                  flags: 0,
                                                                                                                  modifierFlagsCache: 0,
                                                                                                                  transformFlags: 536870912,
                                                                                                                  parent: undefined,
                                                                                                                  escapedText:
                                                                                                                    "inputElement",
                                                                                                                  flowNode: undefined
                                                                                                                },
                                                                                                                flowNode: undefined,
                                                                                                                id: 181
                                                                                                              },
                                                                                                              operatorToken: {
                                                                                                                pos: 1499,
                                                                                                                end: 1501,
                                                                                                                flags: 0,
                                                                                                                modifierFlagsCache: 0,
                                                                                                                transformFlags: 536870912,
                                                                                                                parent: undefined,
                                                                                                                kind: 60
                                                                                                              },
                                                                                                              right: {
                                                                                                                pos: 1501,
                                                                                                                end: 1504,
                                                                                                                flags: 0,
                                                                                                                modifierFlagsCache: 0,
                                                                                                                transformFlags: 536870912,
                                                                                                                parent: undefined,
                                                                                                                escapedText:
                                                                                                                  "el",
                                                                                                                flowNode: undefined,
                                                                                                                id: 182
                                                                                                              }
                                                                                                            },
                                                                                                            id: 179
                                                                                                          },
                                                                                                          flowNode: undefined,
                                                                                                          symbol: {
                                                                                                            flags: 16,
                                                                                                            escapedName:
                                                                                                              "__function",
                                                                                                            declarations: [
                                                                                                              undefined
                                                                                                            ],
                                                                                                            valueDeclaration: undefined,
                                                                                                            id: 467
                                                                                                          },
                                                                                                          locals: {},
                                                                                                          nextContainer: {
                                                                                                            pos: 1680,
                                                                                                            end: 1762,
                                                                                                            flags: 0,
                                                                                                            modifierFlagsCache: 0,
                                                                                                            transformFlags: 536872962,
                                                                                                            parent: {
                                                                                                              pos: 1650,
                                                                                                              end: 1777,
                                                                                                              flags: 0,
                                                                                                              modifierFlagsCache: 0,
                                                                                                              transformFlags: 536872962,
                                                                                                              parent: {
                                                                                                                pos: 1648,
                                                                                                                end: 1789,
                                                                                                                flags: 0,
                                                                                                                modifierFlagsCache: 0,
                                                                                                                transformFlags: 536872962,
                                                                                                                parent: {
                                                                                                                  pos: 1624,
                                                                                                                  end: 1820,
                                                                                                                  flags: 0,
                                                                                                                  modifierFlagsCache: 0,
                                                                                                                  transformFlags: 536872962,
                                                                                                                  parent: {
                                                                                                                    pos: 1623,
                                                                                                                    end: 1821,
                                                                                                                    flags: 0,
                                                                                                                    modifierFlagsCache: 0,
                                                                                                                    transformFlags: 536872962,
                                                                                                                    parent: undefined,
                                                                                                                    kind: 271,
                                                                                                                    dotDotDotToken: undefined,
                                                                                                                    expression: undefined
                                                                                                                  },
                                                                                                                  kind: 206,
                                                                                                                  condition: {
                                                                                                                    pos: 1624,
                                                                                                                    end: 1646,
                                                                                                                    flags: 0,
                                                                                                                    modifierFlagsCache: 0,
                                                                                                                    transformFlags: 536872960,
                                                                                                                    parent: undefined,
                                                                                                                    kind: 190,
                                                                                                                    expression: {
                                                                                                                      pos: 1624,
                                                                                                                      end: 1628,
                                                                                                                      flags: 0,
                                                                                                                      modifierFlagsCache: 0,
                                                                                                                      transformFlags: 536872960,
                                                                                                                      parent: undefined,
                                                                                                                      kind: 101,
                                                                                                                      flowNode: undefined,
                                                                                                                      id: 144
                                                                                                                    },
                                                                                                                    name: {
                                                                                                                      pos: 1629,
                                                                                                                      end: 1646,
                                                                                                                      flags: 0,
                                                                                                                      modifierFlagsCache: 0,
                                                                                                                      transformFlags: 536870912,
                                                                                                                      parent: undefined,
                                                                                                                      escapedText:
                                                                                                                        "strengthIndicator",
                                                                                                                      flowNode: undefined
                                                                                                                    },
                                                                                                                    flowNode: undefined,
                                                                                                                    id: 145
                                                                                                                  },
                                                                                                                  questionToken: {
                                                                                                                    pos: 1646,
                                                                                                                    end: 1648,
                                                                                                                    flags: 0,
                                                                                                                    modifierFlagsCache: 0,
                                                                                                                    transformFlags: 536870912,
                                                                                                                    parent: undefined,
                                                                                                                    kind: 56
                                                                                                                  },
                                                                                                                  whenTrue: undefined,
                                                                                                                  colonToken: {
                                                                                                                    pos: 1789,
                                                                                                                    end: 1791,
                                                                                                                    flags: 0,
                                                                                                                    modifierFlagsCache: 0,
                                                                                                                    transformFlags: 536870912,
                                                                                                                    parent: undefined,
                                                                                                                    kind: 57
                                                                                                                  },
                                                                                                                  whenFalse: {
                                                                                                                    pos: 1791,
                                                                                                                    end: 1820,
                                                                                                                    flags: 0,
                                                                                                                    modifierFlagsCache: 0,
                                                                                                                    transformFlags: 536870912,
                                                                                                                    parent: undefined,
                                                                                                                    kind: 196,
                                                                                                                    expression: {
                                                                                                                      pos: 1793,
                                                                                                                      end: 1808,
                                                                                                                      flags: 0,
                                                                                                                      modifierFlagsCache: 0,
                                                                                                                      transformFlags: 536870912,
                                                                                                                      parent: undefined,
                                                                                                                      kind: 10,
                                                                                                                      text:
                                                                                                                        ""
                                                                                                                    }
                                                                                                                  }
                                                                                                                },
                                                                                                                kind: 196,
                                                                                                                expression: undefined
                                                                                                              },
                                                                                                              kind: 262,
                                                                                                              tagName: {
                                                                                                                pos: 1664,
                                                                                                                end: 1680,
                                                                                                                flags: 0,
                                                                                                                modifierFlagsCache: 0,
                                                                                                                transformFlags: 536870912,
                                                                                                                parent: undefined,
                                                                                                                escapedText:
                                                                                                                  "ion-progress-bar",
                                                                                                                flowNode: {
                                                                                                                  flags: 1568,
                                                                                                                  expression: undefined,
                                                                                                                  antecedent: undefined
                                                                                                                }
                                                                                                              },
                                                                                                              typeArguments: undefined,
                                                                                                              attributes: undefined,
                                                                                                              id: 146
                                                                                                            },
                                                                                                            kind: 269,
                                                                                                            properties: [
                                                                                                              {
                                                                                                                pos: 1680,
                                                                                                                end: 1721,
                                                                                                                flags: 0,
                                                                                                                modifierFlagsCache: 536870912,
                                                                                                                transformFlags: 536872962,
                                                                                                                parent: undefined,
                                                                                                                kind: 268,
                                                                                                                name: {
                                                                                                                  pos: 1680,
                                                                                                                  end: 1700,
                                                                                                                  flags: 0,
                                                                                                                  modifierFlagsCache: 0,
                                                                                                                  transformFlags: 536870912,
                                                                                                                  parent: undefined,
                                                                                                                  escapedText:
                                                                                                                    "color",
                                                                                                                  flowNode: undefined
                                                                                                                },
                                                                                                                initializer: {
                                                                                                                  pos: 1701,
                                                                                                                  end: 1721,
                                                                                                                  flags: 0,
                                                                                                                  modifierFlagsCache: 0,
                                                                                                                  transformFlags: 536872962,
                                                                                                                  parent: undefined,
                                                                                                                  kind: 271,
                                                                                                                  dotDotDotToken: undefined,
                                                                                                                  expression: {
                                                                                                                    pos: 1702,
                                                                                                                    end: 1720,
                                                                                                                    flags: 0,
                                                                                                                    modifierFlagsCache: 0,
                                                                                                                    transformFlags: 536872960,
                                                                                                                    parent: undefined,
                                                                                                                    kind: 190,
                                                                                                                    expression: {
                                                                                                                      pos: 1702,
                                                                                                                      end: 1706,
                                                                                                                      flags: 0,
                                                                                                                      modifierFlagsCache: 0,
                                                                                                                      transformFlags: 536872960,
                                                                                                                      parent: undefined,
                                                                                                                      kind: 101,
                                                                                                                      flowNode: undefined,
                                                                                                                      id: 187
                                                                                                                    },
                                                                                                                    name: {
                                                                                                                      pos: 1707,
                                                                                                                      end: 1720,
                                                                                                                      flags: 0,
                                                                                                                      modifierFlagsCache: 0,
                                                                                                                      transformFlags: 536870912,
                                                                                                                      parent: undefined,
                                                                                                                      escapedText:
                                                                                                                        "strengthColor",
                                                                                                                      flowNode: undefined
                                                                                                                    },
                                                                                                                    flowNode: undefined,
                                                                                                                    id: 188
                                                                                                                  }
                                                                                                                },
                                                                                                                symbol: {
                                                                                                                  flags: 4,
                                                                                                                  escapedName:
                                                                                                                    "color",
                                                                                                                  declarations: [
                                                                                                                    undefined
                                                                                                                  ],
                                                                                                                  valueDeclaration: undefined,
                                                                                                                  parent: {
                                                                                                                    flags: 4096,
                                                                                                                    escapedName:
                                                                                                                      "__jsxAttributes",
                                                                                                                    declarations: [
                                                                                                                      undefined
                                                                                                                    ],
                                                                                                                    members: {},
                                                                                                                    valueDeclaration: undefined
                                                                                                                  }
                                                                                                                }
                                                                                                              },
                                                                                                              {
                                                                                                                pos: 1721,
                                                                                                                end: 1762,
                                                                                                                flags: 0,
                                                                                                                modifierFlagsCache: 536870912,
                                                                                                                transformFlags: 536872962,
                                                                                                                parent: undefined,
                                                                                                                kind: 268,
                                                                                                                name: {
                                                                                                                  pos: 1721,
                                                                                                                  end: 1741,
                                                                                                                  flags: 0,
                                                                                                                  modifierFlagsCache: 0,
                                                                                                                  transformFlags: 536870912,
                                                                                                                  parent: undefined,
                                                                                                                  escapedText:
                                                                                                                    "value",
                                                                                                                  flowNode: undefined
                                                                                                                },
                                                                                                                initializer: {
                                                                                                                  pos: 1742,
                                                                                                                  end: 1762,
                                                                                                                  flags: 0,
                                                                                                                  modifierFlagsCache: 0,
                                                                                                                  transformFlags: 536872962,
                                                                                                                  parent: undefined,
                                                                                                                  kind: 271,
                                                                                                                  dotDotDotToken: undefined,
                                                                                                                  expression: {
                                                                                                                    pos: 1743,
                                                                                                                    end: 1761,
                                                                                                                    flags: 0,
                                                                                                                    modifierFlagsCache: 0,
                                                                                                                    transformFlags: 536872960,
                                                                                                                    parent: undefined,
                                                                                                                    kind: 190,
                                                                                                                    expression: {
                                                                                                                      pos: 1743,
                                                                                                                      end: 1747,
                                                                                                                      flags: 0,
                                                                                                                      modifierFlagsCache: 0,
                                                                                                                      transformFlags: 536872960,
                                                                                                                      parent: undefined,
                                                                                                                      kind: 101,
                                                                                                                      flowNode: undefined,
                                                                                                                      id: 204
                                                                                                                    },
                                                                                                                    name: {
                                                                                                                      pos: 1748,
                                                                                                                      end: 1761,
                                                                                                                      flags: 0,
                                                                                                                      modifierFlagsCache: 0,
                                                                                                                      transformFlags: 536870912,
                                                                                                                      parent: undefined,
                                                                                                                      escapedText:
                                                                                                                        "strengthValue",
                                                                                                                      flowNode: undefined
                                                                                                                    },
                                                                                                                    flowNode: undefined,
                                                                                                                    id: 205
                                                                                                                  }
                                                                                                                },
                                                                                                                symbol: {
                                                                                                                  flags: 4,
                                                                                                                  escapedName:
                                                                                                                    "value",
                                                                                                                  declarations: [
                                                                                                                    undefined
                                                                                                                  ],
                                                                                                                  valueDeclaration: undefined,
                                                                                                                  parent: undefined
                                                                                                                }
                                                                                                              }
                                                                                                            ],
                                                                                                            symbol: undefined,
                                                                                                            contextualType: undefined,
                                                                                                            inferenceContext: undefined
                                                                                                          },
                                                                                                          id: 176
                                                                                                        }
                                                                                                      },
                                                                                                      symbol: {
                                                                                                        flags: 4,
                                                                                                        escapedName:
                                                                                                          "ref",
                                                                                                        declarations: [
                                                                                                          undefined
                                                                                                        ],
                                                                                                        valueDeclaration: undefined,
                                                                                                        parent: undefined
                                                                                                      }
                                                                                                    },
                                                                                                    {
                                                                                                      pos: 1506,
                                                                                                      end: 1529,
                                                                                                      flags: 0,
                                                                                                      modifierFlagsCache: 536870912,
                                                                                                      transformFlags: 536870914,
                                                                                                      parent: undefined,
                                                                                                      kind: 268,
                                                                                                      name: {
                                                                                                        pos: 1506,
                                                                                                        end: 1529,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870912,
                                                                                                        parent: undefined,
                                                                                                        escapedText:
                                                                                                          "clearInput",
                                                                                                        flowNode: undefined
                                                                                                      },
                                                                                                      symbol: {
                                                                                                        flags: 4,
                                                                                                        escapedName:
                                                                                                          "clearInput",
                                                                                                        declarations: [
                                                                                                          undefined
                                                                                                        ],
                                                                                                        valueDeclaration: undefined,
                                                                                                        parent: undefined
                                                                                                      }
                                                                                                    },
                                                                                                    {
                                                                                                      pos: 1529,
                                                                                                      end: 1556,
                                                                                                      flags: 0,
                                                                                                      modifierFlagsCache: 536870912,
                                                                                                      transformFlags: 536870914,
                                                                                                      parent: undefined,
                                                                                                      kind: 268,
                                                                                                      name: {
                                                                                                        pos: 1529,
                                                                                                        end: 1550,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870912,
                                                                                                        parent: undefined,
                                                                                                        escapedText:
                                                                                                          "debounce",
                                                                                                        flowNode: undefined
                                                                                                      },
                                                                                                      initializer: {
                                                                                                        pos: 1551,
                                                                                                        end: 1556,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870914,
                                                                                                        parent: undefined,
                                                                                                        kind: 271,
                                                                                                        dotDotDotToken: undefined,
                                                                                                        expression: {
                                                                                                          pos: 1552,
                                                                                                          end: 1555,
                                                                                                          flags: 0,
                                                                                                          modifierFlagsCache: 0,
                                                                                                          transformFlags: 536870912,
                                                                                                          parent: undefined,
                                                                                                          kind: 8,
                                                                                                          text:
                                                                                                            "500",
                                                                                                          numericLiteralFlags: 0
                                                                                                        }
                                                                                                      },
                                                                                                      symbol: {
                                                                                                        flags: 4,
                                                                                                        escapedName:
                                                                                                          "debounce",
                                                                                                        declarations: [
                                                                                                          undefined
                                                                                                        ],
                                                                                                        valueDeclaration: undefined,
                                                                                                        parent: undefined
                                                                                                      }
                                                                                                    },
                                                                                                    {
                                                                                                      pos: 1556,
                                                                                                      end: 1599,
                                                                                                      flags: 0,
                                                                                                      modifierFlagsCache: 536870912,
                                                                                                      transformFlags: 536872962,
                                                                                                      parent: undefined,
                                                                                                      kind: 268,
                                                                                                      name: {
                                                                                                        pos: 1556,
                                                                                                        end: 1580,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536870912,
                                                                                                        parent: undefined,
                                                                                                        escapedText:
                                                                                                          "placeholder",
                                                                                                        flowNode: undefined
                                                                                                      },
                                                                                                      initializer: {
                                                                                                        pos: 1581,
                                                                                                        end: 1599,
                                                                                                        flags: 0,
                                                                                                        modifierFlagsCache: 0,
                                                                                                        transformFlags: 536872962,
                                                                                                        parent: undefined,
                                                                                                        kind: 271,
                                                                                                        dotDotDotToken: undefined,
                                                                                                        expression: {
                                                                                                          pos: 1582,
                                                                                                          end: 1598,
                                                                                                          flags: 0,
                                                                                                          modifierFlagsCache: 0,
                                                                                                          transformFlags: 536872960,
                                                                                                          parent: undefined,
                                                                                                          kind: 190,
                                                                                                          expression: {
                                                                                                            pos: 1582,
                                                                                                            end: 1586,
                                                                                                            flags: 0,
                                                                                                            modifierFlagsCache: 0,
                                                                                                            transformFlags: 536872960,
                                                                                                            parent: undefined,
                                                                                                            kind: 101,
                                                                                                            flowNode: undefined,
                                                                                                            id: 183
                                                                                                          },
                                                                                                          name: {
                                                                                                            pos: 1587,
                                                                                                            end: 1598,
                                                                                                            flags: 0,
                                                                                                            modifierFlagsCache: 0,
                                                                                                            transformFlags: 536870912,
                                                                                                            parent: undefined,
                                                                                                            escapedText:
                                                                                                              "placeholder",
                                                                                                            flowNode: undefined
                                                                                                          },
                                                                                                          flowNode: undefined,
                                                                                                          id: 184
                                                                                                        }
                                                                                                      },
                                                                                                      symbol: {
                                                                                                        flags: 4,
                                                                                                        escapedName:
                                                                                                          "placeholder",
                                                                                                        declarations: [
                                                                                                          undefined
                                                                                                        ],
                                                                                                        valueDeclaration: undefined,
                                                                                                        parent: undefined
                                                                                                      }
                                                                                                    }
                                                                                                  ],
                                                                                                  symbol: undefined,
                                                                                                  nextContainer: undefined,
                                                                                                  contextualType: undefined,
                                                                                                  inferenceContext: undefined
                                                                                                },
                                                                                                id: 143
                                                                                              },
                                                                                              {
                                                                                                pos: 1612,
                                                                                                end: 1623,
                                                                                                flags: 0,
                                                                                                modifierFlagsCache: 0,
                                                                                                transformFlags: 536870914,
                                                                                                parent: undefined,
                                                                                                kind: 11,
                                                                                                text:
                                                                                                  "\n          ",
                                                                                                containsOnlyTriviaWhiteSpaces: true
                                                                                              },
                                                                                              undefined,
                                                                                              {
                                                                                                pos: 1821,
                                                                                                end: 1830,
                                                                                                flags: 0,
                                                                                                modifierFlagsCache: 0,
                                                                                                transformFlags: 536870914,
                                                                                                parent: undefined,
                                                                                                kind: 11,
                                                                                                text:
                                                                                                  "\n        ",
                                                                                                containsOnlyTriviaWhiteSpaces: true
                                                                                              }
                                                                                            ],
                                                                                            closingElement: {
                                                                                              pos: 1830,
                                                                                              end: 1840,
                                                                                              flags: 0,
                                                                                              modifierFlagsCache: 0,
                                                                                              transformFlags: 536870914,
                                                                                              parent: undefined,
                                                                                              kind: 264,
                                                                                              tagName: {
                                                                                                pos: 1832,
                                                                                                end: 1839,
                                                                                                flags: 0,
                                                                                                modifierFlagsCache: 0,
                                                                                                transformFlags: 536870912,
                                                                                                parent: undefined,
                                                                                                escapedText:
                                                                                                  "ion-row",
                                                                                                flowNode: {
                                                                                                  flags: 4,
                                                                                                  antecedents: [
                                                                                                    undefined,
                                                                                                    {
                                                                                                      flags: 1600,
                                                                                                      expression: undefined,
                                                                                                      antecedent: undefined
                                                                                                    }
                                                                                                  ]
                                                                                                }
                                                                                              },
                                                                                              id: 147
                                                                                            },
                                                                                            id: 127,
                                                                                            contextualType: undefined,
                                                                                            inferenceContext: undefined
                                                                                          },
                                                                                          kind: 263,
                                                                                          tagName: {
                                                                                            pos: 1287,
                                                                                            end: 1294,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 0,
                                                                                            transformFlags: 536870912,
                                                                                            parent: undefined,
                                                                                            escapedText:
                                                                                              "ion-row",
                                                                                            flowNode: undefined
                                                                                          },
                                                                                          typeArguments: undefined,
                                                                                          attributes: undefined,
                                                                                          id: 142
                                                                                        },
                                                                                        kind: 269,
                                                                                        properties: [
                                                                                          {
                                                                                            pos: 1294,
                                                                                            end: 1325,
                                                                                            flags: 0,
                                                                                            modifierFlagsCache: 536870912,
                                                                                            transformFlags: 536870914,
                                                                                            parent: undefined,
                                                                                            kind: 268,
                                                                                            name: {
                                                                                              pos: 1294,
                                                                                              end: 1300,
                                                                                              flags: 0,
                                                                                              modifierFlagsCache: 0,
                                                                                              transformFlags: 536870912,
                                                                                              parent: undefined,
                                                                                              originalKeywordKind: 77,
                                                                                              escapedText:
                                                                                                "class",
                                                                                              flowNode: undefined
                                                                                            },
                                                                                            initializer: {
                                                                                              pos: 1301,
                                                                                              end: 1325,
                                                                                              flags: 0,
                                                                                              modifierFlagsCache: 0,
                                                                                              transformFlags: 536870912,
                                                                                              parent: undefined,
                                                                                              kind: 10,
                                                                                              text:
                                                                                                "passwordInput inputBox"
                                                                                            },
                                                                                            symbol: {
                                                                                              flags: 4,
                                                                                              escapedName:
                                                                                                "class",
                                                                                              declarations: [
                                                                                                undefined
                                                                                              ],
                                                                                              valueDeclaration: undefined,
                                                                                              parent: {
                                                                                                flags: 4096,
                                                                                                escapedName:
                                                                                                  "__jsxAttributes",
                                                                                                declarations: [
                                                                                                  undefined
                                                                                                ],
                                                                                                members: {},
                                                                                                valueDeclaration: undefined
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        ],
                                                                                        symbol: undefined,
                                                                                        nextContainer: undefined
                                                                                      },
                                                                                      contextualType: undefined,
                                                                                      inferenceContext: undefined
                                                                                    }
                                                                                  }
                                                                                },
                                                                                id: 212
                                                                              },
                                                                              children: [
                                                                                {
                                                                                  pos: 943,
                                                                                  end: 958,
                                                                                  flags: 0,
                                                                                  modifierFlagsCache: 0,
                                                                                  transformFlags: 536870914,
                                                                                  parent: undefined,
                                                                                  kind: 11,
                                                                                  text:
                                                                                    "\n              ",
                                                                                  containsOnlyTriviaWhiteSpaces: true
                                                                                },
                                                                                undefined,
                                                                                {
                                                                                  pos: 1076,
                                                                                  end: 1091,
                                                                                  flags: 0,
                                                                                  modifierFlagsCache: 0,
                                                                                  transformFlags: 536870914,
                                                                                  parent: undefined,
                                                                                  kind: 11,
                                                                                  text:
                                                                                    "\n              ",
                                                                                  containsOnlyTriviaWhiteSpaces: true
                                                                                },
                                                                                undefined,
                                                                                {
                                                                                  pos: 1214,
                                                                                  end: 1227,
                                                                                  flags: 0,
                                                                                  modifierFlagsCache: 0,
                                                                                  transformFlags: 536870914,
                                                                                  parent: undefined,
                                                                                  kind: 11,
                                                                                  text:
                                                                                    "\n            ",
                                                                                  containsOnlyTriviaWhiteSpaces: true
                                                                                }
                                                                              ],
                                                                              closingElement: {
                                                                                pos: 1227,
                                                                                end: 1237,
                                                                                flags: 0,
                                                                                modifierFlagsCache: 0,
                                                                                transformFlags: 536870914,
                                                                                parent: undefined,
                                                                                kind: 264,
                                                                                tagName: {
                                                                                  pos: 1229,
                                                                                  end: 1236,
                                                                                  flags: 0,
                                                                                  modifierFlagsCache: 0,
                                                                                  transformFlags: 536870912,
                                                                                  parent: undefined,
                                                                                  escapedText:
                                                                                    "ion-row",
                                                                                  flowNode: undefined
                                                                                },
                                                                                id: 215
                                                                              },
                                                                              id: 155,
                                                                              contextualType: undefined,
                                                                              inferenceContext: undefined
                                                                            },
                                                                            {
                                                                              pos: 1237,
                                                                              end: 1248,
                                                                              flags: 0,
                                                                              modifierFlagsCache: 0,
                                                                              transformFlags: 536870914,
                                                                              parent: undefined,
                                                                              kind: 11,
                                                                              text:
                                                                                "\n          ",
                                                                              containsOnlyTriviaWhiteSpaces: true
                                                                            }
                                                                          ],
                                                                          closingElement: {
                                                                            pos: 1248,
                                                                            end: 1258,
                                                                            flags: 0,
                                                                            modifierFlagsCache: 0,
                                                                            transformFlags: 536870914,
                                                                            parent: undefined,
                                                                            kind: 264,
                                                                            tagName: {
                                                                              pos: 1250,
                                                                              end: 1257,
                                                                              flags: 0,
                                                                              modifierFlagsCache: 0,
                                                                              transformFlags: 536870912,
                                                                              parent: undefined,
                                                                              escapedText:
                                                                                "ion-col",
                                                                              flowNode: undefined
                                                                            },
                                                                            id: 156
                                                                          },
                                                                          id: 140,
                                                                          contextualType: undefined,
                                                                          inferenceContext: undefined
                                                                        },
                                                                        kind: 263,
                                                                        tagName: {
                                                                          pos: 874,
                                                                          end: 881,
                                                                          flags: 0,
                                                                          modifierFlagsCache: 0,
                                                                          transformFlags: 536870912,
                                                                          parent: undefined,
                                                                          escapedText:
                                                                            "ion-col",
                                                                          flowNode: undefined
                                                                        },
                                                                        typeArguments: undefined,
                                                                        attributes: undefined,
                                                                        id: 154
                                                                      },
                                                                      kind: 269,
                                                                      properties: [],
                                                                      symbol: {
                                                                        flags: 4096,
                                                                        escapedName:
                                                                          "__jsxAttributes",
                                                                        declarations: [
                                                                          undefined
                                                                        ],
                                                                        members: {},
                                                                        valueDeclaration: undefined
                                                                      },
                                                                      nextContainer: undefined
                                                                    }
                                                                  },
                                                                  id: 216
                                                                },
                                                                children: [
                                                                  {
                                                                    pos: 795,
                                                                    end: 807,
                                                                    flags: 0,
                                                                    modifierFlagsCache: 0,
                                                                    transformFlags: 536872962,
                                                                    parent: undefined,
                                                                    kind: 271,
                                                                    dotDotDotToken: undefined,
                                                                    expression: {
                                                                      pos: 796,
                                                                      end: 806,
                                                                      flags: 0,
                                                                      modifierFlagsCache: 0,
                                                                      transformFlags: 536872960,
                                                                      parent: undefined,
                                                                      kind: 190,
                                                                      expression: {
                                                                        pos: 796,
                                                                        end: 800,
                                                                        flags: 0,
                                                                        modifierFlagsCache: 0,
                                                                        transformFlags: 536872960,
                                                                        parent: undefined,
                                                                        kind: 101,
                                                                        flowNode: undefined,
                                                                        id: 219
                                                                      },
                                                                      name: {
                                                                        pos: 801,
                                                                        end: 806,
                                                                        flags: 0,
                                                                        modifierFlagsCache: 0,
                                                                        transformFlags: 536870912,
                                                                        parent: undefined,
                                                                        escapedText:
                                                                          "label",
                                                                        flowNode: undefined
                                                                      },
                                                                      flowNode: undefined,
                                                                      id: 220
                                                                    }
                                                                  }
                                                                ],
                                                                closingElement: {
                                                                  pos: 807,
                                                                  end: 816,
                                                                  flags: 0,
                                                                  modifierFlagsCache: 0,
                                                                  transformFlags: 536870914,
                                                                  parent: undefined,
                                                                  kind: 264,
                                                                  tagName: {
                                                                    pos: 809,
                                                                    end: 815,
                                                                    flags: 0,
                                                                    modifierFlagsCache: 0,
                                                                    transformFlags: 536870912,
                                                                    parent: undefined,
                                                                    escapedText:
                                                                      "strong",
                                                                    flowNode: undefined
                                                                  },
                                                                  id: 223
                                                                },
                                                                id: 208,
                                                                contextualType: undefined,
                                                                inferenceContext: undefined
                                                              },
                                                              {
                                                                pos: 816,
                                                                end: 829,
                                                                flags: 0,
                                                                modifierFlagsCache: 0,
                                                                transformFlags: 536870914,
                                                                parent: undefined,
                                                                kind: 11,
                                                                text:
                                                                  "\n            ",
                                                                containsOnlyTriviaWhiteSpaces: true
                                                              }
                                                            ],
                                                            closingElement: {
                                                              pos: 829,
                                                              end: 841,
                                                              flags: 0,
                                                              modifierFlagsCache: 0,
                                                              transformFlags: 536870914,
                                                              parent: undefined,
                                                              kind: 264,
                                                              tagName: {
                                                                pos: 831,
                                                                end: 840,
                                                                flags: 0,
                                                                modifierFlagsCache: 0,
                                                                transformFlags: 536870912,
                                                                parent: undefined,
                                                                escapedText:
                                                                  "ion-label",
                                                                flowNode: undefined
                                                              },
                                                              id: 211
                                                            },
                                                            id: 150,
                                                            contextualType: undefined,
                                                            inferenceContext: undefined
                                                          },
                                                          kind: 263,
                                                          tagName: {
                                                            pos: 762,
                                                            end: 771,
                                                            flags: 0,
                                                            modifierFlagsCache: 0,
                                                            transformFlags: 536870912,
                                                            parent: undefined,
                                                            escapedText:
                                                              "ion-label",
                                                            flowNode: undefined
                                                          },
                                                          typeArguments: undefined,
                                                          attributes: undefined,
                                                          id: 206
                                                        },
                                                        kind: 269,
                                                        properties: [],
                                                        symbol: {
                                                          flags: 4096,
                                                          escapedName:
                                                            "__jsxAttributes",
                                                          declarations: [
                                                            undefined
                                                          ],
                                                          members: {},
                                                          valueDeclaration: undefined
                                                        },
                                                        nextContainer: undefined
                                                      }
                                                    },
                                                    id: 148
                                                  },
                                                  children: [
                                                    {
                                                      pos: 748,
                                                      end: 761,
                                                      flags: 0,
                                                      modifierFlagsCache: 0,
                                                      transformFlags: 536870914,
                                                      parent: undefined,
                                                      kind: 11,
                                                      text: "\n            ",
                                                      containsOnlyTriviaWhiteSpaces: true
                                                    },
                                                    undefined,
                                                    {
                                                      pos: 841,
                                                      end: 852,
                                                      flags: 0,
                                                      modifierFlagsCache: 0,
                                                      transformFlags: 536870914,
                                                      parent: undefined,
                                                      kind: 11,
                                                      text: "\n          ",
                                                      containsOnlyTriviaWhiteSpaces: true
                                                    }
                                                  ],
                                                  closingElement: {
                                                    pos: 852,
                                                    end: 862,
                                                    flags: 0,
                                                    modifierFlagsCache: 0,
                                                    transformFlags: 536870914,
                                                    parent: undefined,
                                                    kind: 264,
                                                    tagName: {
                                                      pos: 854,
                                                      end: 861,
                                                      flags: 0,
                                                      modifierFlagsCache: 0,
                                                      transformFlags: 536870912,
                                                      parent: undefined,
                                                      escapedText: "ion-col",
                                                      flowNode: undefined
                                                    },
                                                    id: 153
                                                  },
                                                  id: 139,
                                                  contextualType: undefined,
                                                  inferenceContext: undefined
                                                },
                                                {
                                                  pos: 862,
                                                  end: 873,
                                                  flags: 0,
                                                  modifierFlagsCache: 0,
                                                  transformFlags: 536870914,
                                                  parent: undefined,
                                                  kind: 11,
                                                  text: "\n          ",
                                                  containsOnlyTriviaWhiteSpaces: true
                                                },
                                                undefined,
                                                {
                                                  pos: 1258,
                                                  end: 1267,
                                                  flags: 0,
                                                  modifierFlagsCache: 0,
                                                  transformFlags: 536870914,
                                                  parent: undefined,
                                                  kind: 11,
                                                  text: "\n        ",
                                                  containsOnlyTriviaWhiteSpaces: true
                                                }
                                              ],
                                              closingElement: {
                                                pos: 1267,
                                                end: 1277,
                                                flags: 0,
                                                modifierFlagsCache: 0,
                                                transformFlags: 536870914,
                                                parent: undefined,
                                                kind: 264,
                                                tagName: {
                                                  pos: 1269,
                                                  end: 1276,
                                                  flags: 0,
                                                  modifierFlagsCache: 0,
                                                  transformFlags: 536870912,
                                                  parent: undefined,
                                                  escapedText: "ion-row",
                                                  flowNode: undefined
                                                },
                                                id: 141
                                              },
                                              id: 126,
                                              contextualType: undefined,
                                              inferenceContext: undefined
                                            },
                                            kind: 263,
                                            tagName: {
                                              pos: 682,
                                              end: 689,
                                              flags: 0,
                                              modifierFlagsCache: 0,
                                              transformFlags: 536870912,
                                              parent: undefined,
                                              escapedText: "ion-row",
                                              flowNode: undefined
                                            },
                                            typeArguments: undefined,
                                            attributes: undefined,
                                            id: 133
                                          },
                                          kind: 269,
                                          properties: [
                                            {
                                              pos: 689,
                                              end: 708,
                                              flags: 0,
                                              modifierFlagsCache: 536870912,
                                              transformFlags: 536870914,
                                              parent: undefined,
                                              kind: 268,
                                              name: {
                                                pos: 689,
                                                end: 695,
                                                flags: 0,
                                                modifierFlagsCache: 0,
                                                transformFlags: 536870912,
                                                parent: undefined,
                                                originalKeywordKind: 77,
                                                escapedText: "class",
                                                flowNode: undefined
                                              },
                                              initializer: {
                                                pos: 696,
                                                end: 708,
                                                flags: 0,
                                                modifierFlagsCache: 0,
                                                transformFlags: 536870912,
                                                parent: undefined,
                                                kind: 10,
                                                text: "field-info"
                                              },
                                              symbol: {
                                                flags: 4,
                                                escapedName: "class",
                                                declarations: [undefined],
                                                valueDeclaration: undefined,
                                                parent: {
                                                  flags: 4096,
                                                  escapedName:
                                                    "__jsxAttributes",
                                                  declarations: [undefined],
                                                  members: {},
                                                  valueDeclaration: undefined
                                                }
                                              }
                                            },
                                            {
                                              pos: 708,
                                              end: 727,
                                              flags: 0,
                                              modifierFlagsCache: 536870912,
                                              transformFlags: 536870914,
                                              parent: undefined,
                                              kind: 268,
                                              name: {
                                                pos: 708,
                                                end: 727,
                                                flags: 0,
                                                modifierFlagsCache: 0,
                                                transformFlags: 536870912,
                                                parent: undefined,
                                                escapedText:
                                                  "align-items-center",
                                                flowNode: undefined
                                              },
                                              symbol: {
                                                flags: 4,
                                                escapedName:
                                                  "align-items-center",
                                                declarations: [undefined],
                                                valueDeclaration: undefined,
                                                parent: undefined
                                              }
                                            }
                                          ],
                                          symbol: undefined,
                                          nextContainer: undefined
                                        }
                                      },
                                      id: 119
                                    },
                                    children: [
                                      {
                                        pos: 672,
                                        end: 681,
                                        flags: 0,
                                        modifierFlagsCache: 0,
                                        transformFlags: 536870914,
                                        parent: undefined,
                                        kind: 11,
                                        text: "\n        ",
                                        containsOnlyTriviaWhiteSpaces: true
                                      },
                                      undefined,
                                      {
                                        pos: 1277,
                                        end: 1286,
                                        flags: 0,
                                        modifierFlagsCache: 0,
                                        transformFlags: 536870914,
                                        parent: undefined,
                                        kind: 11,
                                        text: "\n        ",
                                        containsOnlyTriviaWhiteSpaces: true
                                      },
                                      undefined,
                                      {
                                        pos: 1840,
                                        end: 1847,
                                        flags: 0,
                                        modifierFlagsCache: 0,
                                        transformFlags: 536870914,
                                        parent: undefined,
                                        kind: 11,
                                        text: "\n      ",
                                        containsOnlyTriviaWhiteSpaces: true
                                      }
                                    ],
                                    closingElement: {
                                      pos: 1847,
                                      end: 1858,
                                      flags: 0,
                                      modifierFlagsCache: 0,
                                      transformFlags: 536870914,
                                      parent: undefined,
                                      kind: 264,
                                      tagName: {
                                        pos: 1849,
                                        end: 1857,
                                        flags: 0,
                                        modifierFlagsCache: 0,
                                        transformFlags: 536870912,
                                        parent: undefined,
                                        escapedText: "ion-grid",
                                        flowNode: undefined
                                      },
                                      id: 132
                                    },
                                    id: 118,
                                    contextualType: undefined,
                                    inferenceContext: undefined
                                  },
                                  id: 117
                                }
                              }
                            ]
                          },
                          symbol: {
                            flags: 8192,
                            escapedName: "render",
                            declarations: [undefined],
                            valueDeclaration: undefined,
                            parent: undefined,
                            id: 33
                          },
                          locals: {},
                          nextContainer: undefined,
                          id: 116
                        }
                      ],
                      symbol: undefined,
                      localSymbol: {
                        flags: 1048576,
                        escapedName: "Field",
                        declarations: [undefined],
                        parent: undefined,
                        exportSymbol: undefined
                      },
                      nextContainer: {
                        pos: 72,
                        end: 121,
                        flags: 0,
                        modifierFlagsCache: 0,
                        transformFlags: 536870912,
                        parent: {
                          pos: 62,
                          end: 122,
                          flags: 8192,
                          modifierFlagsCache: 0,
                          transformFlags: 536870912,
                          parent: {
                            pos: 59,
                            end: 122,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536871937,
                            parent: undefined,
                            kind: 153,
                            expression: undefined,
                            id: 8
                          },
                          kind: 192,
                          expression: {
                            pos: 62,
                            end: 71,
                            flags: 8192,
                            modifierFlagsCache: 0,
                            transformFlags: 536870912,
                            parent: undefined,
                            escapedText: "Component",
                            flowNode: undefined,
                            id: 10
                          },
                          arguments: [undefined],
                          id: 9
                        },
                        kind: 189,
                        multiLine: true,
                        properties: [
                          {
                            pos: 73,
                            end: 93,
                            flags: 0,
                            modifierFlagsCache: 536870912,
                            transformFlags: 536870912,
                            parent: undefined,
                            kind: 276,
                            decorators: undefined,
                            modifiers: undefined,
                            name: {
                              pos: 73,
                              end: 79,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536870912,
                              parent: undefined,
                              escapedText: "tag",
                              flowNode: undefined
                            },
                            questionToken: undefined,
                            exclamationToken: undefined,
                            initializer: {
                              pos: 80,
                              end: 93,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536870912,
                              parent: undefined,
                              kind: 10,
                              text: "optr-field"
                            },
                            symbol: {
                              flags: 4,
                              escapedName: "tag",
                              declarations: [undefined],
                              valueDeclaration: undefined,
                              parent: {
                                flags: 4096,
                                escapedName: "__object",
                                declarations: [undefined],
                                members: {},
                                valueDeclaration: undefined
                              }
                            }
                          },
                          {
                            pos: 94,
                            end: 119,
                            flags: 0,
                            modifierFlagsCache: 536870912,
                            transformFlags: 536870912,
                            parent: undefined,
                            kind: 276,
                            decorators: undefined,
                            modifiers: undefined,
                            name: {
                              pos: 94,
                              end: 105,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536870912,
                              parent: undefined,
                              escapedText: "styleUrl",
                              flowNode: undefined
                            },
                            questionToken: undefined,
                            exclamationToken: undefined,
                            initializer: {
                              pos: 106,
                              end: 119,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536870912,
                              parent: undefined,
                              kind: 10,
                              text: "field.scss"
                            },
                            symbol: {
                              flags: 4,
                              escapedName: "styleUrl",
                              declarations: [undefined],
                              valueDeclaration: undefined,
                              parent: undefined
                            }
                          }
                        ],
                        symbol: undefined,
                        nextContainer: undefined,
                        contextualType: undefined,
                        inferenceContext: undefined,
                        jsDocCache: []
                      }
                    },
                    kind: 157,
                    decorators: [undefined],
                    modifiers: undefined,
                    name: {
                      pos: 538,
                      end: 554,
                      flags: 0,
                      modifierFlagsCache: 0,
                      transformFlags: 536870912,
                      parent: undefined,
                      escapedText: "onInputChange",
                      flowNode: {
                        flags: 514
                      }
                    },
                    questionToken: undefined,
                    asteriskToken: undefined,
                    typeParameters: undefined,
                    parameters: [],
                    body: {
                      pos: 556,
                      end: 628,
                      flags: 0,
                      modifierFlagsCache: 0,
                      transformFlags: 536872960,
                      parent: undefined,
                      kind: 219,
                      multiLine: true,
                      statements: [
                        {
                          pos: 558,
                          end: 600,
                          flags: 0,
                          modifierFlagsCache: 0,
                          transformFlags: 536872960,
                          parent: undefined,
                          kind: 222,
                          expression: {
                            pos: 558,
                            end: 599,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536872960,
                            parent: undefined,
                            kind: 205,
                            left: {
                              pos: 558,
                              end: 573,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536872960,
                              parent: undefined,
                              kind: 190,
                              expression: {
                                pos: 558,
                                end: 567,
                                flags: 0,
                                modifierFlagsCache: 0,
                                transformFlags: 536872960,
                                parent: undefined,
                                kind: 101,
                                flowNode: undefined,
                                id: 89
                              },
                              name: {
                                pos: 568,
                                end: 573,
                                flags: 0,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                escapedText: "value",
                                flowNode: undefined
                              },
                              flowNode: undefined,
                              id: 90
                            },
                            operatorToken: {
                              pos: 573,
                              end: 575,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536870912,
                              parent: undefined,
                              kind: 60
                            },
                            right: {
                              pos: 575,
                              end: 599,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536872960,
                              parent: undefined,
                              kind: 190,
                              expression: {
                                pos: 575,
                                end: 593,
                                flags: 0,
                                modifierFlagsCache: 0,
                                transformFlags: 536872960,
                                parent: undefined,
                                kind: 190,
                                expression: {
                                  pos: 575,
                                  end: 580,
                                  flags: 0,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536872960,
                                  parent: undefined,
                                  kind: 101,
                                  flowNode: undefined,
                                  id: 91
                                },
                                name: {
                                  pos: 581,
                                  end: 593,
                                  flags: 0,
                                  modifierFlagsCache: 0,
                                  transformFlags: 536870912,
                                  parent: undefined,
                                  escapedText: "inputElement",
                                  flowNode: undefined
                                },
                                flowNode: undefined,
                                id: 92
                              },
                              name: {
                                pos: 594,
                                end: 599,
                                flags: 0,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                escapedText: "value",
                                flowNode: undefined
                              },
                              flowNode: undefined,
                              id: 111
                            }
                          }
                        },
                        {
                          pos: 600,
                          end: 624,
                          flags: 0,
                          modifierFlagsCache: 0,
                          transformFlags: 536872960,
                          parent: undefined,
                          kind: 222,
                          expression: {
                            pos: 600,
                            end: 623,
                            flags: 0,
                            modifierFlagsCache: 0,
                            transformFlags: 536872960,
                            parent: undefined,
                            kind: 192,
                            expression: {
                              pos: 600,
                              end: 621,
                              flags: 0,
                              modifierFlagsCache: 0,
                              transformFlags: 536872960,
                              parent: undefined,
                              kind: 190,
                              expression: {
                                pos: 600,
                                end: 609,
                                flags: 0,
                                modifierFlagsCache: 0,
                                transformFlags: 536872960,
                                parent: undefined,
                                kind: 101,
                                flowNode: {
                                  flags: 16,
                                  antecedent: undefined,
                                  node: undefined
                                },
                                id: 114
                              },
                              name: {
                                pos: 610,
                                end: 621,
                                flags: 0,
                                modifierFlagsCache: 0,
                                transformFlags: 536870912,
                                parent: undefined,
                                escapedText: "inputChange",
                                flowNode: undefined
                              },
                              flowNode: undefined,
                              id: 115
                            },
                            arguments: [],
                            id: 113
                          }
                        }
                      ]
                    },
                    symbol: {
                      flags: 8192,
                      escapedName: "onInputChange",
                      declarations: [undefined],
                      valueDeclaration: undefined,
                      parent: undefined,
                      id: 32
                    },
                    locals: {},
                    nextContainer: undefined,
                    id: 88
                  },
                  kind: 153,
                  expression: undefined,
                  id: 61
                },
                kind: 192,
                expression: {
                  pos: 488,
                  end: 494,
                  flags: 8192,
                  modifierFlagsCache: 0,
                  transformFlags: 536870912,
                  parent: undefined,
                  escapedText: "Listen",
                  flowNode: undefined,
                  id: 63
                },
                arguments: [
                  {
                    pos: 495,
                    end: 506,
                    flags: 0,
                    modifierFlagsCache: 0,
                    transformFlags: 536870912,
                    parent: undefined,
                    kind: 10,
                    text: "ionChange",
                    contextualType: undefined,
                    inferenceContext: undefined
                  },
                  undefined
                ],
                id: 62
              },
              kind: 189,
              properties: [undefined],
              symbol: {
                flags: 4096,
                escapedName: "__object",
                declarations: [undefined],
                members: {},
                valueDeclaration: undefined
              },
              nextContainer: undefined,
              contextualType: undefined,
              inferenceContext: undefined,
              jsDocCache: []
            },
            kind: 276,
            decorators: undefined,
            modifiers: undefined,
            name: {
              pos: 509,
              end: 516,
              flags: 0,
              modifierFlagsCache: 0,
              transformFlags: 536870912,
              parent: undefined,
              escapedText: "target",
              flowNode: undefined
            },
            questionToken: undefined,
            exclamationToken: undefined,
            initializer: undefined,
            symbol: {
              flags: 4,
              escapedName: "target",
              declarations: [undefined],
              valueDeclaration: undefined,
              parent: undefined
            }
          },
          kind: 190,
          expression: {
            pos: 517,
            end: 522,
            flags: 0,
            modifierFlagsCache: 0,
            transformFlags: 536872960,
            parent: undefined,
            kind: 101,
            flowNode: undefined,
            id: 67
          },
          name: {
            pos: 523,
            end: 535,
            flags: 0,
            modifierFlagsCache: 0,
            transformFlags: 536870912,
            parent: undefined,
            escapedText: "inputElement",
            flowNode: undefined
          },
          flowNode: undefined
        },
        capture: false,
        passive: false
      }
    ];
  }
}
