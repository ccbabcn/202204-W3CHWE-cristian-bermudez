class PokemonsDataGetter {
  constructor(endPoint) {
    this.endPoint = endPoint;
  }

  async getShownPokemonsData() {
    const shownPokemonsResponse = await fetch(this.endPoint);
    const shownPokemonsData = await shownPokemonsResponse.json();
    return shownPokemonsData;
  }

  async getActualPokemonData(id) {
    const actualPokemonResponse = await fetch(`${this.endPoint}${id}`);
    const actualPokemonData = await actualPokemonResponse.json();
    return actualPokemonData;
  }
}

// const getEachPokemonData = async () => {
//   const eachPokeResponse = await fetchAllPokeData(limitNumber);

//   eachPokeResponse.results.forEach(({ url.split("/").slice(-2,-1).pop() }) => {
//     const fetchActualPokeData = async (actualUrl) => {
//       const actualPokeInfo = await fetch(actualUrl);
//       const thispokedata = await actualPokeInfo.json();
//       return thispokedata;

export default PokemonsDataGetter;
