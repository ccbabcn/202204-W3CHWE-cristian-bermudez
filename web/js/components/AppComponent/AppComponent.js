import HomePokemonCard from "../HomePokemonCard/HomePokemonCard.js";
import Component from "../Component.js";

class AppComponent extends Component {
  constructor(parentElement, limit) {
    super(parentElement, "div", "pokemons-container");
    this.limit = limit;

    this.render();
  }

  render() {
    this.element.innerHTML = `
<ul class="pokemons-container__list">
`;
    const pokemonListContainer = document.querySelector(
      ".pokemons-container__list"
    );
    const totalNumberPokemons = this.limit;
    const fetchAllPokeData = async (numberOfPokemons) => {
      const allPokeResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${numberOfPokemons}`
      );
      const pokedata = await allPokeResponse.json();
      return pokedata;
    };

    const getEachPokemonData = async () => {
      const eachPokeResponse = await fetchAllPokeData(totalNumberPokemons);

      eachPokeResponse.results.forEach(({ url }) => {
        const fetchActualPokeData = async (actualUrl) => {
          const actualPokeInfo = await fetch(actualUrl);
          const thispokedata = await actualPokeInfo.json();
          return thispokedata;
        };

        const getActualPokemonData = async (actualUrl) => {
          const getActualData = await fetchActualPokeData(actualUrl);

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
          } = getActualData;
          new HomePokemonCard(
            order,
            id,
            name,
            type,
            image,
            pokemonListContainer
          );
        };

        getActualPokemonData(url);
      });

      return eachPokeResponse.results;
    };
    getEachPokemonData();
  }
}

export default AppComponent;
