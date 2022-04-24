class PokemonsDataGetter {
  constructor(endPoint) {
    this.endPoint = endPoint;
  }

  async getShownPokemonsData(offset) {
    const shownPokemonsResponse = await fetch(`${this.endPoint}${offset}`);
    const shownPokemonsData = await shownPokemonsResponse.json();
    return shownPokemonsData;
  }

  async getActualPokemonData(id) {
    const actualPokemonResponse = await fetch(`${this.endPoint}${id}`);
    const actualPokemonData = await actualPokemonResponse.json();
    return actualPokemonData;
  }
}

export default PokemonsDataGetter;
