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

  render() {
    this.classList.add('w-100');
    
    return html`
      <div class="list-group">
        <topic-item
          description="created on three days ago. And then I don't know..."
          createdAt="3 days ago"
          name="Laksmana Yudha"
        ></topic-item>
        <topic-item
          description="created on three days ago. And then I don't know..."
          createdAt="3 days ago"
          name="Laksmana Yudha"
        ></topic-item>
        <topic-item
          description="created on three days ago. And then I don't know..."
          createdAt="3 days ago"
          name="Laksmana Yudha"
        ></topic-item>
      </div>
    `;
  }
}

customElements.define('topic-list', TopicList);
