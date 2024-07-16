import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <nav-link content="Home" to="/"></nav-link>
        <nav-link content="About Us" to="/about-us.html"></nav-link>
        <nav-dropdown content="Contacts"></nav-dropdown>
        <div class="d-flex align-items-center gap-2 d-sm-none">
          <img
            style="width: 30px;height: 30px"
            class="img-fluid rounded-pill"
            src="https://ui-avatars.com/api/?name=LY&background=random"
            alt="User Name"
          />
          <nav-link class="logout-btn" content="Logout" to="#"></nav-link>
        </div>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
