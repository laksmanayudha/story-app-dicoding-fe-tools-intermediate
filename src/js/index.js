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

    const navbarWithOffcanvas = document.querySelector('navbar-with-offcanvas');
    const topicSection = document.querySelector('#topicSection');
    const categoryList = document.querySelector('#categoryList');

    topicSection.style.position = `sticky`;
    topicSection.style.top = `${navbarWithOffcanvas.offsetHeight}px`;
    categoryList.style.position = `sticky`;
    categoryList.style.top = `${navbarWithOffcanvas.offsetHeight}px`;
  });
};

main();