import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class AlertUStory extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    message: { type: String, reflect: true },
    hidden: { type: Boolean, reflect: true },
  }

  render() {
    return html`
      <div class="alert alert-${this.type}" role="alert" ?hidden=${this.hidden}>
        <strong>${this.message}</strong>
      </div>
    `;
  }
}

customElements.define('alert-ustory', AlertUStory);
        