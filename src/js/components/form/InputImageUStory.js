import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputImageUStory extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    content: { type: String, reflect: true },
    label: { type: String, reflect: true },
  }

  render() {
    return html`
      <div class="form-group">
        <label for=${this.name} class="form-label">${this.label}</label>
        <input class="form-control" type="file" id=${this.name}>
      </div>
  `;
  }
}

customElements.define('input-img-ustory', InputImageUStory);
