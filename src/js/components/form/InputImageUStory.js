import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputImageUStory extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    label: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    invalidFeedback: { type: String, reflect: true },
    onChange: { type: Function },
  }

  _onInputChange(e) {
    if (!e.target.checkValidity())
      throw new Error(e.target.validationMessage);
  
    this._showPhotoPreview(e.target);
    this.onChange(e.target.value);
  }

  _showPhotoPreview(inputImage) {
    const photo = inputImage.files[0];
    if (!photo) return;

    const imagePreview = this.querySelector('#imagePreview');
    const reader = new FileReader();
    reader.onload = (event) => {
      imagePreview.parentElement.classList.remove('d-none');
      imagePreview.classList.remove('d-none');
      imagePreview.style.backgroundImage = `url('${event.target.result}')`;
    };

    reader.readAsDataURL(photo);
  }

  render() {
    return html`
      <div class="form-group">
        <label for=${this.name} class="form-label">${this.label}</label>
        <div style="height: 20rem" class="w-100 mb-3 d-none">
          <div
            class="w-100 h-100"
            id="imagePreview"
            style="
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
            "
          ></div>
        </div>
        <input
          class="form-control"
          type="file"
          id=${this.name}
          @change=${this._onInputChange}
          ?required=${this.required}
        >
        <div class="invalid-feedback">
          ${this.invalidFeedback}
        </div>
      </div>
  `;
  }
}

customElements.define('input-img-ustory', InputImageUStory);
