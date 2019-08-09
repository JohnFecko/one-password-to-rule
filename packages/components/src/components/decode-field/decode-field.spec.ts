import { TestWindow } from "@stencil/core/testing";
import { DecodeField } from "./decode-field";

describe("decode-field", () => {
  it("should build", () => {
    expect(new DecodeField()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLDecodeFieldElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DecodeField],
        html: "<decode-field></decode-field>"
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {
      cursor;
    }
  });
});
