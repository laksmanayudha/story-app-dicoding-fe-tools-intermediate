import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class StoryCard extends LitWithoutShadowDom {
  static properties = {
    photoUrl: { type: String, reflect: true },
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    id: { type: String, reflect: true },
  }

  render() {
    this.classList.add('w-100');
    
    return html`
      <div class="card mx-auto" style="max-width: 34rem;">
        <div class="card-header bg-transparent">
          <div class="hstack gap-2">
            <i class="bi bi-person-fill"></i>
            ${this.name}
          </div>
        </div>
        <img src="${this.photoUrl}" alt="story image">
        <div class="card-body">
          <p class="card-text">${this.description}</p>
        </div>
        <div class="card-footer bg-transparent">
          <div class="hstack gap-3">
            <a href="#" class="text-decoration-none link-dark">0 <i class="bi bi-chat"></i></a>
            <a href="#" class="text-decoration-none link-dark">0 <i class="bi bi-heart"></i></a>
            <span class="ms-auto">2 days ago</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('story-card', StoryCard);
