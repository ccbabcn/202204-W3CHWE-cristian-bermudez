import Component from "../Component.js";

class Button extends Component {
  action;

  constructor(parentElement, nameClass, action) {
    super(parentElement, "button", nameClass);
    this.action = action;
    this.myListener();
  }

  myListener() {
    this.element.addEventListener("click", this.action);
  }
}

export default Button;
