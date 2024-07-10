import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class DropdownDivider extends LitWithoutShadowDom {
  render() {
    return html`
      <li>
        <hr class="dropdown-divider">
      </li>
    `;
  }
}

customElements.define('dropdown-divider', DropdownDivider);
