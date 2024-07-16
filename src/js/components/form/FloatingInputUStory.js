import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class FloatingInputUStory extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    type: { type: String, reflect: true },
    label: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    invalidFeedback: { type: String, reflect: true },
    onChange: { type: Function },
  }

  _onInputChange(e) {
    this._showPhotoPreview(e.target);
    this.onChange(e.target.value);
  }

  render() {
    return html`
      <div class="form-floating">
        <input
          type=${this.type}
          class="form-control"
          id=${this.name}
          name=${this.name}
          placeholder=${this.label}
          autocomplete="off"
          ?required=${this.required}
          @change=${this._onInputChange}
        >
        <label for=${this.name}>${this.label}</label>
        <div class="invalid-feedback">
          ${this.invalidFeedback}
        </div>
      </div>
    `;
  }
}

customElements.define('floating-input-ustory', FloatingInputUStory);
