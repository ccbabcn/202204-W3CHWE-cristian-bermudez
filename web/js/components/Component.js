class Component {
  element;

  constructor(parentElement, tag, nameClass) {
    this.element = document.createElement(tag);
    this.element.className = nameClass;
    parentElement.append(this.element);
  }
}

export default Component;
