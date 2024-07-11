import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class CategoryList extends LitWithoutShadowDom {
  static properties = {
  }

  render() {
    return html`
      <div class="custom-badge-list" id="categoryList">
        <category-badge content="For You" active></category-badge>
        <category-badge content="Trending"></category-badge>
        <category-badge content="Entertainment"></category-badge>
        <category-badge content="Holiday"></category-badge>
        <category-badge content="Music"></category-badge>
        <category-badge content="More"></category-badge>
      </div>
    `;
  }
}

customElements.define('category-list', CategoryList);
