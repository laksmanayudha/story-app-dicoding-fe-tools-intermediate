import LitWithoutShadowDom from './LitWithoutShadowDom';

class FormValidation extends LitWithoutShadowDom {
  _wasValidated(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add('was-validated');
  }
}

export default FormValidation;
