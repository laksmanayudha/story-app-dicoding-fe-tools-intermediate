import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class StoryList extends LitWithoutShadowDom {
  static properties = {
    stories: { type: Array },
    loading: { type: Boolean, reflect: true },
  }

  constructor() {
    super();
    this.stories = [];
  }

  _showStories() {
    if (!this.stories.length) return 'No story available';

    return this.stories.map((story) => {
      return this._storyCardTemplate(story);
    });
  }

  _storyCardTemplate({ photoUrl, description, name, createdAt }) {
    return html`
      <story-card
        photoUrl=${photoUrl}
        description=${description}
        name=${name}
        createdAt=${createdAt}
      ></story-card>
    `;
  }

  _showLoading() {
    if (this.loading) {
      return html`
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      `;
    }

    return html``;
  }

  render() {
    return html`
    <div class="vstack align-items-center gap-3">
      ${this._showStories()}
      ${this._showLoading()}
    </div>
    `;
  }
}

customElements.define('story-list', StoryList);
