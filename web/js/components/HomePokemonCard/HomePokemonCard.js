import Button from "../Button/Button.js";
import Component from "../Component.js";

class HomePokemonCard extends Component {
  id;
  order;
  constructor(pokemon, parentElement) {
    super(parentElement, "li", "pokemons-container__card");
    this.order = pokemon.order;
    this.name = pokemon.name;
    this.type = pokemon.type;
    this.image = pokemon.image;
    this.id = pokemon.id;
    this.pokemon = pokemon;
    this.render();
    this.catchPokemon();
  }

  catchPokemon(id) {
    if (this.id === id) {
      try {
        fetch("https://isdipokeapi.herokuapp.com/pokemon", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.pokemon),
        });
      } catch (error) {
        throw new Error("This pokémon is already catched");
      }
    }
  }

  render() {
    this.element.innerHTML = `
  
    <img class="pokemons-container__image"
      src="${this.image}"
      alt="Image of Pokémon ${this.name}">
    <h2>${this.name}</h2>
    <ul class="pokemons-container__details">
      <li># ${this.order}</li>
      <li>${this.type}</li>
    </ul>
  
  `;
    try {
      const buttonParent = document.querySelector(
        ".pokemons-container__card:last-child"
      );
      new Button(
        buttonParent,
        "pokemons-container__catch-button",
        () => this.catchPokemon(this.id),
        "CAPTURE"
      );
    } catch (error) {
      throw new Error("Something went wrong, try loading this page again");
    }
  }
}

export default HomePokemonCard;
