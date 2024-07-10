import { html } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class NavbarWithOffcanvas extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  }

  constructor() {
    super();
    this.brandName = 'Your Brand Name';
  }

  render() {
    return html`
      <nav class="navbar bg-light bg-opacity-75 sticky-top">
        <div class="container">
          <div class="d-flex gap-3 w-100">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidebar"
              aria-controls="sidebar"
              aria-label="Toggle navigation"
            >
              <i class="bi bi-list"></i>
            </button>
            <a class="navbar-brand text-truncate" href="#">
              ${this.brandName}
            </a>
          </div>
          
          <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar" aria-labelledby="sidebarTitle">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="sidebarTitle">${this.brandName}s</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <nav-links></nav-links>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-with-offcanvas', NavbarWithOffcanvas);