import { TestWindow } from "@stencil/core/testing";
import { Field } from "./field";

describe("field", () => {
  it("should build", () => {
    expect(new Field()).toBeTruthy();
  });

  describe("rendering", () => {
    let element: HTMLFieldElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Field],
        html: "<field></field>"
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {
      cursor;
    }
  });
});
