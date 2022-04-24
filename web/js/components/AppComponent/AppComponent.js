import HomePokemonCard from "../HomePokemonCard/HomePokemonCard.js";
import Component from "../Component.js";
import PokemonsDataGetter from "../../utilities/PokemonsDataGetter.js";

class AppComponent extends Component {
  constructor(parentElement, limit) {
    super(parentElement, "div", "pokemons-container");
    this.limit = limit;

    this.render();
  }

  async render() {
    this.element.innerHTML = `
      <ul class="pokemons-container__list">
    `;
    const pokemonListContainer = document.querySelector(
      ".pokemons-container__list"
    );

    const pokemonsData = new PokemonsDataGetter(
      "https://pokeapi.co/api/v2/pokemon/"
    );
    const { results } = await pokemonsData.getShownPokemonsData();

    const actualPokemonData = Promise.all(
      results.map(async (listedPokemon) => {
        const listedPokemonData = await pokemonsData.getActualPokemonData(
          listedPokemon.url.split("/").slice(-2, -1).pop()
        );
        const {
          name,
          id,
          order,
          sprites: {
            other: {
              home: { front_default: image },
            },
          },
          types: {
            0: {
              type: { name: type },
            },
          },
        } = listedPokemonData;

        const pokemonFiltered = { order, id, name, type, image };
        return pokemonFiltered;
      })
    );
    (await actualPokemonData).forEach((pokemon) => {
      try {
        new HomePokemonCard(pokemon, pokemonListContainer);
      } catch (error) {
        throw new Error(
          "Something went wrong conecting to databade, please reload this page."
        );
      }
    });
  }
}

export default AppComponent;
