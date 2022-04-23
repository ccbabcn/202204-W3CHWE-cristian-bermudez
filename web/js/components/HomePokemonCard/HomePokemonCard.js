import Component from "../Component.js";

class HomePokemonCard extends Component {
  id;
  order;
  constructor(order, id, name, type, image, parentElement) {
    super(parentElement, "li", "pokemons-container__card");
    this.order = order;
    this.name = name;
    this.type = type;
    this.image = image;
    this.id = id;
    this.render();
  }

  render() {
    this.element.innerHTML = `
  
    <img class="pokemons-container__image"
      src="${this.image}"
      alt="Image of Pokémon ${this.name}">
    <h2>${this.name}</h2>
    <ul>
      <li>${this.type}</li>
    </ul>
  
  `;
  }
}

export default HomePokemonCard;
