import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class CompanyProfile extends LitWithoutShadowDom {
  static properties = {
    image: { type: String, reflect: true },
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="company-profile">
      <img src=${this.image} alt="logo" width="32" height="32">
      <h1 class="mt-2">${this.name}</h1>
      <p class="lead">
        ${this.description}
      </p>
    </div>
    `;
  }
}

customElements.define('company-profile', CompanyProfile);
