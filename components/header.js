class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <nav>
    <a href="#">Home</a>
    <a href="#">Menu</a>
    <a href="#" class="current">Gallery</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <div class="nav-underline"></div>
    <div class="nav-underline2"></div>
</nav>
    `;
  }
}


customElements.define('header-component', Header);