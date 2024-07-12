import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ButtonLinkUStory extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
    bold: { type: Boolean, reflect: true },
    large: { type: Boolean, reflect: true },
    theme: { type: String, reflect: true },
    to: { type: String, reflect: true },
  }

  constructor() {
    super();
    this.theme = 'btn-dark';
  }

  render() {
    return html`
      <a href=${this.to} class="btn ${this.large ? 'btn-lg' : ''} ${this.theme} ${this.bold ? 'fw-bold' : ''}">
        ${this.content}
      </a>
    `;
  }
}

customElements.define('button-link-ustory', ButtonLinkUStory);
