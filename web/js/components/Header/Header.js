import Component from "../Component.js";

class Header extends Component {
  constructor(parentElement) {
    super(parentElement, "header", "main-header");
    this.render();
  }

  render() {
    this.innerHTML = `
  <div class="main-header__container">
        <img src="images/pokemon-logo.svg" alt="pokemon-logo" />
        <h1>PokeApi</h1>
      </div>
      <nav class="main-header__navigation">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="favorites.html">My Pokémons</a></li>
        </ul>
      </nav>
  `;
  }
}

export default Header;
