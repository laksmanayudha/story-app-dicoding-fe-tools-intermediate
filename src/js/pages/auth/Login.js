import Auth from "../../network/auth";
import { goToPage } from "../../utils/routes";

const Login = {
  async init() {
    this._getComponents();
    this._initEventListener();
  },

  _getComponents() {
    this._loginForm = document.querySelector('login-form-ustory');
  },

  _initEventListener() {
    this._loginForm.onLogin = async ({ email, password }) => {
      try {
        if (this._isInvalidInput({ email, password })) throw new Error('Invalid input');

        const response = await Auth.login({ email, password });
        if (response.error) {
          alert(response.message);
          throw new Error(response.message);
        }

        goToPage('/');
      } catch (error) {
        console.error(error.message);
      }
    }
  },

  _isInvalidInput({ email, password }) {
    return !email || !password;
  },

  async _attempLoginUser({ email, password }) {

  }
}

export default Login;