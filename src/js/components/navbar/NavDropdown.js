import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class NavDropdown extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
  }

  render() {
    return html`
      <li class="nav-item">
        <a
          class="nav-link fs-5 dropdown-toggle"
          href="#" role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ${this.content}
        </a>
        <ul class="dropdown-menu">
          <dropdown-item
            content="I Gede Laksmana Yudha"
            icon="bi bi-linkedin"
            to="#"
          ></dropdown-item>
          <dropdown-item
            content="laksmanayudha"
            icon="bi-github"
            to="#"
          ></dropdown-item>
          <dropdown-item
            content="laksmanayudha_"
            icon="bi-instagram"
            to="#"
          ></dropdown-item>
          <dropdown-divider></dropdown-divider>
          <dropdown-item
            content="laksmanayudha22@gmail.com"
            icon="bi-envelope-at"
            to="#"
          ></dropdown-item>
        </ul>
      </li>
    `;
  }
}

customElements.define('nav-dropdown', NavDropdown);
