import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class DropdownItem extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    to: { type: String, reflect: true },
  }

  render() {
    return html`
      <li>
        <a class="dropdown-item" href="${this.to}">
          <div class="hstack gap-2">
            <i class="${this.icon} me-2"></i>
            <div class="text-truncate">${this.content}</div>
          </div>
        </a>
      </li>
    `;
  }
}

customElements.define('dropdown-item', DropdownItem);
