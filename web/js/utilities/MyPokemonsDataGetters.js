class MyPokemonsDataGetter {
  constructor(endPoint) {
    this.endPoint = endPoint;
  }

  async getMyPokemonsData() {
    const myPokemonsResponse = await fetch(this.endPoint);
    const myPokemonsData = await myPokemonsResponse.json();
    return myPokemonsData;
  }

  async myActualPokemonData(id) {
    const myPokemonResponse = await fetch(`${this.endPoint}${id}`);
    const myActualPokemonData = await myPokemonResponse.json();
    return myActualPokemonData;
  }
}

export default MyPokemonsDataGetter;
