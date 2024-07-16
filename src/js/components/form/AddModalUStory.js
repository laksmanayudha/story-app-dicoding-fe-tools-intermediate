import { html } from 'lit';
import FormValidation from '../base/FormValidation';

class AddModalUStory extends FormValidation {
  static properties = {
    modalId: { type: String, reflect: true },
    onAddStorySubmit: { type: Function },
    description: { type: String, reflect: true },
    photo: { type: String, reflect: true },
  }

  constructor() {
    super();
    this.onAddStorySubmit = async () => {};
  }

  async _onSubmitWithInput(e) {
    this._wasValidated(e);
    await this.onAddStorySubmit({
      description: this.description,
      photo: this.photo,
    });
  }

  _getComponents() {
    this._textarea = this.querySelector('textarea-ustory');
    this._inputImage = this.querySelector('input-img-ustory');
  }

  _initEventListener() {
    this._textarea.onChange = (value) => this._setDescription(value);
    this._inputImage.onChange = (value) => this._setPhoto(value);
  }

  _setDescription(description) {
    this.description = description;
  }

  _setPhoto(photo) {
    this.photo = photo;
  }

  async firstUpdated() {
    this._getComponents();
    this._initEventListener();
  }

  render() {
    return html`
      <div class="modal fade" id=${this.modalId} tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg">
          <div class="modal-content">
            <form action="#" class="needs-validation" @submit=${this._onSubmitWithInput} id="formAddStory" novalidate>
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
                  invalidFeedback="Please write your story here"
                  required
                ></textarea-ustory>
                <input-img-ustory
                  name="photo"
                  label="Photo"
                  invalidFeedback="Please add a picture to share"
                  required
                ></input-img-ustory>
              </div>
              <div class="modal-footer">
                <button-ustory
                  content="Post"
                  type="submit"
                ></button-ustory>
              </div>
            </form>
          </div>
        </div>
      </div>
  `;
  }
}

customElements.define('add-modal-ustory', AddModalUStory);
