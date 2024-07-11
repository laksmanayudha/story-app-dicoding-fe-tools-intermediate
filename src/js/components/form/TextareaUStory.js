import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TextareaUStory extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    content: { type: String, reflect: true },
    placeholder: { type: String, reflect: true },
    label: { type: String, reflect: true },
    rows: { type: String, reflect: true },
  }

  constructor() {
    super();
    this.rows = 3;
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
        >${this.content}</textarea>
      </div>
  `;
  }
}

customElements.define('textarea-ustory', TextareaUStory);
