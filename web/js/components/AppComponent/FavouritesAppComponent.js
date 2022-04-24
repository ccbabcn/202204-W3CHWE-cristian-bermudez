import Component from "../Component.js";
import MyPokemonsDataGetter from "../../utilities/MyPokemonsDataGetters.js";
import FavouritesPokemonCard from "../FavouritesPokemonCard/FavouritesPokemonCard.js";

class FavouritesAppComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "div", "pokemons-container");
    this.render();
  }

  async render() {
    this.element.innerHTML = `
      <ul class="pokemons-container__list">
    `;
    const pokemonListContainer = document.querySelector(
      ".pokemons-container__list"
    );
    new MyPokemonsDataGetter();
    const pokemonsData = new MyPokemonsDataGetter(
      `https://isdipokeapi.herokuapp.com/pokemon`
    );

    const results = await pokemonsData.getMyPokemonsData();

    const actualPokemonData = Promise.all(
      results.map(async (myListedPokemon) => myListedPokemon)
    );
    (await actualPokemonData).forEach((pokemon) => {
      try {
        new FavouritesPokemonCard(pokemon, pokemonListContainer);
      } catch (error) {
        throw new Error(
          "Something went wrong conecting to databade, please reload this page."
        );
      }
    });
  }
}

export default FavouritesAppComponent;
