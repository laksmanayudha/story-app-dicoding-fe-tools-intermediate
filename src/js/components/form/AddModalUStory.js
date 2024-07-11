import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class AddModalUStory extends LitWithoutShadowDom {
  static properties = {
    modalId: { type: String, reflect: true }
  }

  render() {
    return html`
      <div class="modal fade" id=${this.modalId} tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5">Add a Story</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <textarea-ustory
                class="mb-3"
                label="Write your story"
                name="description"
                placeholder="Type here..."
              ></textarea-ustory>
              <input-img-ustory
                name="photo"
                label="Photo"
              ></input-img-ustory>
            </div>
            <div class="modal-footer">
              <button-ustory
                content="Post"
                type="submit"
              ></button-ustory>
            </div>
          </div>
        </div>
      </div>
  `;
  }
}

customElements.define('add-modal-ustory', AddModalUStory);
