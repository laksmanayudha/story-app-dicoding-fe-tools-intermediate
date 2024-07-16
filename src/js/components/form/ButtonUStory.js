import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ButtonUStory extends LitWithoutShadowDom {
  static properties = {
    onClick: { type: Function },
    bsIcon: { type: String, reflect: true },
    content: { type: String, reflect: true },
    type: { type: String, reflect: true },
    triggerModal: { type: String, reflect: true },
    large: { type: Boolean, reflect: true },
    theme: { type: String , reflect: true },
  }

  constructor() {
    super();
    this.type = 'button';
    this.theme = 'btn-dark';
  }

  render() {
    return html`
      <button
        type=${this.type}
        class="btn ${this.large ? 'btn-lg' : ''} ${this.theme} w-100"
        data-bs-toggle=${this.triggerModal ? 'modal' : nothing}
        data-bs-target=${this.triggerModal || nothing}
        @click=${this.onClick}
      >
        <i class="bi ${this.bsIcon}"></i>
        ${this.content}
      </button>
  `;
  }
}

customElements.define('button-ustory', ButtonUStory);
