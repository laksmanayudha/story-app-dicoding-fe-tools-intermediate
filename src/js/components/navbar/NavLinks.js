import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <nav-link content="Home" to="/"></nav-link>
        <nav-link content="About Us" to="/about-us.html"></nav-link>
        <nav-dropdown content="Contacts"></nav-dropdown>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
