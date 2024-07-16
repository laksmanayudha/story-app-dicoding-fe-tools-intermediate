import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TextareaUStory extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    content: { type: String, reflect: true },
    placeholder: { type: String, reflect: true },
    label: { type: String, reflect: true },
    rows: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    invalidFeedback: { type: String, reflect: true },
    onChange: { type: Function },
  }

  constructor() {
    super();
    this.rows = 3;
  }

  _onInputChange(e) {
    if (!e.target.checkValidity())
      throw new Error(e.target.validationMessage);
  
    this.onChange(e.target.value);
  }

  render() {
    return html`
      <div class="form-group">
        <label for=${this.name} class="form-label">${this.label}</label>
        <textarea
          class="form-control"
          id=${this.name}
          placeholder=${this.placeholder}
          rows=${this.rows}
          @change=${this._onInputChange}
          ?required=${this.required}
        >${this.content}</textarea>
        <div class="invalid-feedback">
          ${this.invalidFeedback}
        </div>
      </div>
  `;
  }
}

customElements.define('textarea-ustory', TextareaUStory);
