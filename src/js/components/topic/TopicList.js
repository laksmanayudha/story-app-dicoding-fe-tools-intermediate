import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TopicList extends LitWithoutShadowDom {
  static properties = {
    topics: { type: Array }
  }

  constructor() {
    super();
    this.topics = [];
  }

  _showTopics() {
    if (!this.topics.length) return 'No topic available';

    return this.topics.map((topic) => {
      return this._topicItemTemplate(topic);
    });
  }

  _topicItemTemplate({ description, createdAt, name }) {
    return html`
      <topic-item
        description=${description}
        createdAt=${createdAt}
        name=${name}
      ></topic-item>
    `;
  }

  render() {
    this.classList.add('w-100');
    
    return html`
      <div class="list-group">
        ${this._showTopics()}
      </div>
    `;
  }
}

customElements.define('topic-list', TopicList);
