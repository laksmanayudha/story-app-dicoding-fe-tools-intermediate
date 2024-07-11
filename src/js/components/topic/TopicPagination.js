import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TopicPagination extends LitWithoutShadowDom {
  static properties = {
    dataLength: { type: Number, reflect: true },
    limit: { type: Number, refelect: true }
  }

  render() {
    return html`
      <div class="topic-pagination">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('topic-pagination', TopicPagination);
