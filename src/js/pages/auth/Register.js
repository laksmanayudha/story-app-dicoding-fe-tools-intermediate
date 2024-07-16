import Auth from "../../network/auth";
import { goToPage } from "../../utils/routes";

const Register = {
  async init() {
    this._getComponents();
    this._initUI();
    this._initEventListener();
  },

  _getComponents() {
    this._registerForm = document.querySelector('register-form-ustory');
    this._errorAlert = document.querySelector('alert-ustory[type=danger]');
    this._successAlert = document.querySelector('alert-ustory[type=success]');
  },

  _initUI() {

  },

  _initEventListener() {
    this._registerForm.onRegister = async ({ name, email, password }) => {
      await this._signUpUser({ name, email, password });
    }
  },

  _isInvalidInput({ name, email, password }) {
    return !name || !email || !password;
  },

  _showErrorAlert(message) {
    this._successAlert.hidden = true;
    this._errorAlert.message = message;
    this._errorAlert.hidden = false;
  },

  _showSuccessAlert(message) {
    this._errorAlert.hidden = true;
    this._successAlert.message =message;
    this._successAlert.hidden = false;
  },

  async _signUpUser({ name, email, password }) {
    try {
      if (this._isInvalidInput({ name, email, password })) throw new Error('Invalid input');

      this._registerForm.showLoading();
      const response = await Auth.register({ name, email, password });

      if (response.error) {
        this._showErrorAlert(response.message);
        throw new Error(response.message);
      }

      this._showSuccessAlert('Sign up successfuly. Redirecting...');
      setTimeout(() => {
        goToPage('/auth/login.html');
        this._registerForm.hideLoading();
      }, 3000);
    } catch (error) {
      this._registerForm.hideLoading();
      console.error(error.message);
    }
  }
}

export default Register;