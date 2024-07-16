import Session from '../utils/session';
import Config from '../config/config';
import { goToPage } from '../utils/routes';

const CheckUserAuthMiddleware = {
  excludeRedirectPage: ['login.html', 'register.html'],

  checkLoginState(callback) {
    const userToken = Session.getUserToken(Config.USER_TOKEN_KEY);
    const isUserSignedIn = Boolean(userToken);
    const isUserOnAuthPage = this._isUserOnAuthPage(this.excludeRedirectPage);

    if (isUserSignedIn && isUserOnAuthPage) {
      goToPage('/')
      return;
    }

    if (!isUserSignedIn && !isUserOnAuthPage) {
      goToPage('/auth/login.html');
      return;
    }

    callback();
  },

  _isUserOnAuthPage(pages) {
    const filteredPages = pages.filter((item) => window.location.pathname.endsWith(item));
    return Boolean(filteredPages.length);
  }
}

export default CheckUserAuthMiddleware;