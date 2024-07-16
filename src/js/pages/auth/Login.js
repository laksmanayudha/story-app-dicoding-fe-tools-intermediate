import Config from "../../config/config";
import Auth from "../../network/auth";
import { goToPage } from "../../utils/routes";
import Session from "../../utils/session";

const Login = {
  async init() {
    this._getComponents();
    this._initUI();
    this._initEventListener();
  },

  _getComponents() {
    this._loginForm = document.querySelector('login-form-ustory');
    this._errorAlert = document.querySelector('alert-ustory');
  },

  _initUI() {

  },

  _initEventListener() {
    this._loginForm.onLogin = async ({ email, password }) => {
      await this._attempLoginUser({ email, password });
    }
  },

  _isInvalidInput({ email, password }) {
    return !email || !password;
  },

  _showErrorAlert(message) {
    this._errorAlert.message = message;
    this._errorAlert.hidden = false;
  },

  async _attempLoginUser({ email, password }) {
    try {
      if (this._isInvalidInput({ email, password })) throw new Error('Invalid input');

      this._loginForm.showLoading();
      const response = await Auth.login({ email, password });
      this._loginForm.hideLoading();

      if (response.error) {
        this._showErrorAlert(response.message);
        throw new Error(response.message);
      }

      const { token } = response.loginResult;
      Session.setUserToken(Config.USER_TOKEN_KEY, token);

      goToPage('/');
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default Login;