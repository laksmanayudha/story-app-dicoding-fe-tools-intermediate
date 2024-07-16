import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const routes = {
  '/': Home,
  '/about-us.html': AboutUs,
  '/auth/login.html': Login,
  '/auth/register.html': Register,
};

const findPages = () => routes[window.location.pathname];

export { findPages };