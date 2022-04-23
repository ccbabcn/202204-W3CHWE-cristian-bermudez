const totalNumberPokemons = 100;

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

      console.table(id, name, image, type);
    };

    getActualPokemonData(url);
  });

  return eachPokeResponse.results;
};
getEachPokemonData();
