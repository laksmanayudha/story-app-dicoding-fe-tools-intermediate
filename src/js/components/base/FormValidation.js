import LitWithoutShadowDom from './LitWithoutShadowDom';

class FormValidation extends LitWithoutShadowDom {
  _wasValidated(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add('was-validated');
  }

  showLoading() {
    const submitButton = this.querySelector('[type="submit"]');
    submitButton.loading = true;
  }

  hideLoading() {
    const submitButton = this.querySelector('[type="submit"]');
    submitButton.loading = false;
  }
}

export default FormValidation;
