Components:

## AppComponent

- Recibe
  - La base de datos de todos los pokemons
  - La base de datos en detalle de cada Pokémon
- Renderiza
  - La estructtura básica de la app
- Envia
  - La información necesaria a HomePokemonCard
  - La información necesaria a DetailsPokemonCard
  - Paginator

## HomePokemonCard

- Recibe
  - Recibe el nombre de un Pokémon
  - Recibe la url de la imagen de un Pokémon
  - Recibe el tipo de un Pokémon
- Renderiza

  - La imagen del Pokémon con un texto alternativo basado en su nombre
  - El nombre de un Pokémon
  - El tipo de un Pokémon

  ## DetailsPokemonCard

- Recibe
  - Recibe el nombre de un Pokémon
  - Recibe la url de la imagen de un Pokémon
  - Recibe el tipo de un Pokémon
  - Recibe la altura de un Pokémon
  - Recibe el peso de un Pokémon
  - Recibe la experiencia base de un Pokémón
- Renderiza

  - La imagen del Pokémon con un texto alternativo basado en su nombre
  - El tipo de un Pokémon y permite editarlo
  - La altura de un Pokémon y permite editarlo
  - El peso de un Pokémon y permite editarlo
  - La experiencia base de un Pokémón y permite editarlo

  ## Paginator

- Recibe
  - Una url de pagina anterior si la hay
  - Una url de la pagina siguiente si la hay
  - La posición de los pokémons en pantalla
- Renderiza

  - Un texto que muestra la posición los Pókemons que hay en pantalla

  ## Button

  - Recibe
    - El texto que debe mostrar el botón
    - La acción que debe realizar el botón
  - Renderiza
    - El elemento botón con el texto indicado
