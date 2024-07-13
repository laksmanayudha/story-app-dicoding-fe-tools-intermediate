import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class CategoryBadge extends LitWithoutShadowDom {
  static properties = {
    active: { type: Boolean, reflect: true },
    content: { type: String, reflect: true },
  }

  render() {
    return html`
      <a href="#" class="custom-badge-item ${this.active ? 'active' : ''}">
        ${this.content}
      </a>
    `;
  }
}

customElements.define('category-badge', CategoryBadge);
