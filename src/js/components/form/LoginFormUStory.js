import { html } from 'lit';
import FormValidation from '../base/FormValidation';

class LoginFormUStory extends FormValidation {
  static properties = {
    onLogin: { type: Function },
    email: { type: String },
    password: { type: String },
  }

  constructor() {
    super();
    this.onLogin = async () => {};
  }

  async _onSubmitWithInput(e) {
    this._wasValidated(e);
    await this.onLogin({
      email: this.email,
      password: this.password,
    });
  }

  _getComponents() {
    this._inputEmail = this.querySelector('floating-input-ustory[name=email]');
    this._inputPassword = this.querySelector('floating-input-ustory[name=password]')
  }

  _initEventListener() {
    this._inputEmail.onChange = (value) => this._setEmail(value);
    this._inputPassword.onChange = (value) => this._setPassword(value);
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
          name="email"
          type="email"
          label="Your email"
          invalidFeedback="Please input a valid email"
          required
        ></floating-input-ustory>
        <floating-input-ustory
          name="password"
          type="password"
          label="Password"
          invalidFeedback="Password is required"
          required
        ></floating-input-ustory>
        <p class="mt-2">Don't have an account ? <a class="link-dark" href="/auth/register.html">Sign Up</a></p>
        <button-ustory type="submit" content="Login"></button-ustory>
      </form>
    `;
  }
}

customElements.define('login-form-ustory', LoginFormUStory);
