import { html } from 'lit';
import FormValidation from '../base/FormValidation';

class RegisterFormUStory extends FormValidation {
  static properties = {
    onRegister: { type: Function },
    name: { type: String },
    email: { type: String },
    password: { type: String },
  }

  constructor() {
    super();
    this.onRegister = async () => {};
  }

  async _onSubmitWithInput(e) {
    this._wasValidated(e);
    await this.onRegister({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

  _getComponents() {
    this._inputName = this.querySelector('floating-input-ustory[name=name]');
    this._inputEmail = this.querySelector('floating-input-ustory[name=email]');
    this._inputPassword = this.querySelector('floating-input-ustory[name=password]')
  }

  _initEventListener() {
    this._inputName.onChange = (value) => this._setName(value);
    this._inputEmail.onChange = (value) => this._setEmail(value);
    this._inputPassword.onChange = (value) => this._setPassword(value);
  }

  _setName(name) {
    this.name = name;
  }

  _setEmail(email) {
    this.email = email;
  }

  _setPassword(password) {
    this.password = password;
  }

  async firstUpdated() {
    this._getComponents();
    this._initEventListener();
  }

  render() {
    return html`
      <form
        class="needs-validation w-100 vstack gap-2"
        action="#"
        @submit=${this._onSubmitWithInput}
        novalidate
      >
        <floating-input-ustory
          name="name"
          type="name"
          label="Your name"
          invalidFeedback="Name is required"
          required
        ></floating-input-ustory>
        <floating-input-ustory
          name="email"
          type="email"
          label="Your email"
          invalidFeedback="Email is required"
          required
        ></floating-input-ustory>
        <floating-input-ustory
          name="password"
          type="password"
          label="Your password"
          invalidFeedback="Password is required"
          required
        ></floating-input-ustory>
        <p class="mt-2">Already have an account ? <a class="link-dark" href="/auth/login.html">Login</a></p>
        <button-ustory type="submit" content="Sign Up"></button-ustory>
      </form>
    `;
  }
}

customElements.define('register-form-ustory', RegisterFormUStory);
