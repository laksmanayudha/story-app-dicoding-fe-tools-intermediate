import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class SearchTopic extends LitWithoutShadowDom {
  static properties = {
    onSearch: { type: Function, reflect: true },
  }

  render() {
    this.classList.add('w-100');
    
    return html`
      <div class="search-topic">
        <h5 class="d-none d-md-block">Find Topics</h5>
        <form role="search" action="#">
          <div class="input-group">
            <input class="form-control" type="search" placeholder="Find Topics" aria-label="Search">
            <button class="btn btn-dark" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define('search-topic', SearchTopic);
