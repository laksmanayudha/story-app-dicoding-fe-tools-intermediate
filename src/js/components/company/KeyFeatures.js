import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class KeyFeatures extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="key-features">
        <h2 class="">Key Features</h2>
        <div class="row mt-3">
          <div class="col-sm-6 col-md-4">
            <key-feature
              title="Story Creation"
              description="Rich text editor with formatting tools, Media embedding (images)"
            ></key-feature>
          </div>
          <div class="col-sm-6 col-md-4">
            <key-feature
              title="Story Sharing"
              description="Rublic and private sharing options, Customizable story URLs for easy sharing"
            ></key-feature>
          </div>
          <div class="col-sm-6 col-md-4">
            <key-feature
              title="Search and Discovery"
              description="Advanced search filters, Featured and trending stories section"
            ></key-feature>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('key-features', KeyFeatures);
