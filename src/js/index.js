// Import our custom CSS
import '../sass/main.scss';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';
import './components';
import { findPages } from './utils/routes';

const main = () => {
  window.addEventListener('DOMContentLoaded', async () => { 
    const page = findPages();
    page.init();
  });
};

main();