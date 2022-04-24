import HomePokemonCard from "./HomePokemonCard.js";

describe("Given the HomePokemonCard component", () => {
  describe("When instanced", () => {
    test("It Should create a new 'LI' element", () => {
      const divContainer = document.createElement("div");
      const newLiElement = new HomePokemonCard("", divContainer);
      const expectedLiNodeName = "LI";

      const newLiNodeName = newLiElement.element.nodeName;

      expect(newLiNodeName).toBe(expectedLiNodeName);
    });
  });
});
