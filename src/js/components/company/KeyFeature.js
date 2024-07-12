import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class KeyFeature extends LitWithoutShadowDom {
  static properties = {
    title: { type: String, reflect: true },
    description: { type: String, reflect: true },
  }

  render() {
    return html`
      <div class="key-feature">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
      </div>
    `;
  }
}

customElements.define('key-feature', KeyFeature);
