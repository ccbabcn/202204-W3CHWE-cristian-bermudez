import Button from "./Button.js";

describe("Given a Button component", () => {
  let divContainer;
  let mockFunction;
  beforeEach(() => {
    divContainer = document.createElement("div");
    mockFunction = jest.fn();
  });

  describe("When instaced", () => {
    test("Then it sould create an element with nodeName 'BUTTON'", () => {
      const newButton = new Button(divContainer);
      const expectedButtonNodeName = "BUTTON";

      const newButtonNodeName = newButton.element.nodeName;

      expect(newButtonNodeName).toBe(expectedButtonNodeName);
    });
  });

  describe("When instaced and the user clicks on it", () => {
    test("Then it sould register that click", () => {
      const newButton = new Button(divContainer, "", mockFunction);
      newButton.element.click();

      expect(mockFunction).toHaveBeenCalledTimes(1);
    });
  });
});
