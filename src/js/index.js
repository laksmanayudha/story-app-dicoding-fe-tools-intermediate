// Import our custom CSS
import '../sass/main.scss';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';
import './components';
import { findPages } from './utils/routes';
import CheckUserAuthMiddleware from './middleware/check-user-auth';

const main = () => {
  window.addEventListener('DOMContentLoaded', async () => {
    document.body.classList.add('d-none');
    
    CheckUserAuthMiddleware.checkLoginState(() => {
      document.body.classList.remove('d-none');
      const page = findPages();
      page.init();
    });
  });
};

main();