import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';

const routes = {
  '/': Home,
  '/about-us.html': AboutUs
};

const findPages = () => routes[window.location.pathname];

export { findPages };