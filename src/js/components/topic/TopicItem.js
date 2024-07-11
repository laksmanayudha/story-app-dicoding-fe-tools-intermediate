import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TopicItem extends LitWithoutShadowDom {
  static properties = {
    description: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    name: { type: String, reflect: true },
  }

  render() {
    this.classList.add('list-group-item');
    this.classList.add('list-group-item-action');
    this.classList.add('w-100');

    return html`
      <a href="#" class="text-decoration-none text-dark">
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1">${this.description}</p>
        </div>
        <div class="hstack justify-content-end gap-2">
          <small>by <i class="bi bi-person-fill"></i> ${this.name}</small>
          &bull;
          <small>${this.createdAt}</small>
        </div>
      </a>
    `;
  }
}

customElements.define('topic-item', TopicItem);
