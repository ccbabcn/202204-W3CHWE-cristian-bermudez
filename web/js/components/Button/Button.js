import Component from "../Component.js";

class Button extends Component {
  action;

  constructor(parentElement, nameClass, action, text) {
    super(parentElement, "button", nameClass);
    this.action = action;
    this.element.textContent = text;
    this.myListener();
  }

  myListener() {
    this.element.addEventListener("click", this.action);
  }
}

export default Button;
