const { default: Component } = require("./Component.js");

describe("Given a component Component", () => {
  describe("When it receives the tag 'div'", () => {
    test("Then it should create an element nodeName of 'DIV'", () => {
      const newDiv = new Component(document.body, "div");
      const expectedType = "DIV";

      const newDivElementType = newDiv.element.nodeName;

      expect(newDivElementType).toBe(expectedType);
    });
  });
});
