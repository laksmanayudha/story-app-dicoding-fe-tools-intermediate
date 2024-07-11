import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class StoryList extends LitWithoutShadowDom {
  static properties = {
    stories: { type: Array }
  }

  render() {
    return html`
    <div class="vstack align-items-center gap-3 p-3">
      <story-card
        photoUrl="https://picsum.photos/1200/700?random=1"
        description="In rhoncus lorem nec ex egestas mollis vel a mauris. Pellentesque vel diam at neque hendrerit bibendum. Quisque egestas, dolor eu semper dapibus, turpis neque."
        name="Faisal Sulaiman"
        createdAt="3 days ago"
      ></story-card>
      <story-card
        photoUrl="https://picsum.photos/1200/700?random=1"
        description="In rhoncus lorem nec ex egestas mollis vel a mauris. Pellentesque vel diam at neque hendrerit bibendum. Quisque egestas, dolor eu semper dapibus, turpis neque."
        name="Faisal Sulaiman"
        createdAt="3 days ago"
      ></story-card>
    </div>
    `;
  }
}

customElements.define('story-list', StoryList);
