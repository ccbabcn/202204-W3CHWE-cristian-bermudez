import Button from "../Button/Button.js";
import Component from "../Component.js";

class Paginator extends Component {
  constructor(parentElement) {
    super(parentElement, "div", "pager");
    this.nextPage();
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <div class = "paginator-container">

    </div>
    `;
    const buttunsContainer = document.querySelector(".paginator-container");
    new Button(buttunsContainer, "paginator__button");
  }
}

export default Paginator;
