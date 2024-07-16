import Utils from '../../utils/utils';
import Config from '../../config/config';

const CheckUserAuthMiddleware = {
  excludeRedirectPage: ['login.html', 'register.html'],

  checkLoginState() {
    const userToken = Utils.getUserToken(Config.USER_TOKEN_KEY);
    const isUserSignedIn = Boolean(userToken);
    const isUserOnAuthPage = this._isUserOnAuthPage(this.excludeRedirectPage);

    if (isUserSignedIn && isUserOnAuthPage) {
      window.location.href = '/';
      return;
    }

    if (!isUserSignedIn && !isUserOnAuthPage) {
      window.location.href = '/auth/login.html';
      return;
    }

    return;
  },

  _isUserOnAuthPage(pages) {
    const filteredPages = pages.filter((item) => window.location.pathname.endsWith(item));
    return Boolean(filteredPages.length);
  }
}

export default CheckUserAuthMiddleware;