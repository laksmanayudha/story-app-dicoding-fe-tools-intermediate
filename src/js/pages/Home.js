import Config from "../config/config";
import Formatter from "../utils/formatter";
import { goToPage } from "../utils/routes";
import Session from "../utils/session";
import Story from '../network/story';

const Home = {
  currentPage: 1,
  stories: [],
  pageLoading: false,

  async init() {
    this._getComponents();
    this._initUI();
    this._initEventListener();
    await this._loadMoreStories();
  },

  _getComponents() {
    this._modalAddStory = document.querySelector('add-modal-ustory');
    this._navbarWithOffcanvas = document.querySelector('navbar-with-offcanvas');
    this._storyList = document.querySelector('story-list');
    this._topicList = document.querySelector('topic-list');
    this._topicSection = document.querySelector('#topicSection');
    this._categoryList = document.querySelector('#categoryList');
    this._logoutButtons = document.querySelectorAll('.logout-btn');
  },

  _initUI() {
    this._topicSection.style.position = `sticky`;
    this._topicSection.style.top = `${this._navbarWithOffcanvas.offsetHeight}px`;
    this._categoryList.style.position = `sticky`;
    this._categoryList.style.top = `${this._navbarWithOffcanvas.offsetHeight}px`;
  },

  _initEventListener() {
    this._modalAddStory.onAddStorySubmit = async ({ description, photo }) => {
      await this._storeStory({ description, photo });
    }

    this._logoutButtons.forEach((logoutButton) => {
      logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        this._logout();
      });
    });

    window.addEventListener('scroll', async () => {
      const endOfPage = window.outerHeight + window.scrollY >= document.body.offsetHeight;
      if (endOfPage && !this.pageLoading) {
        this.pageLoading = true;
        await this._loadMoreStories();
        this.pageLoading = false;
      }
    });
  },

  _logout() {
    const confirmed = confirm('Are you sure to logout ?');
    if (confirmed) {
      Session.destroyUserToken(Config.USER_TOKEN_KEY);
      goToPage('/auth/login.html');
    }
  },

  async _loadMoreStories() {
    try {
      this._storyList.loading = true;
      const response = await Story.getAll({ page: this.currentPage });
      this._storyList.loading = false;

      if (response.error) {
        alert(response.message);
        throw new Error(response.message)
      }

      const { listStory } = response;
      const stories = listStory.map((story) => {
        return {
          ...story,
          createdAt: Formatter.readableDatetime(story.createdAt),
        };
      });

      this.stories = [...this.stories, ...stories];
      this.currentPage += 1;
      this._storyList.setAttribute('stories', JSON.stringify(this.stories));
      this._topicList.setAttribute('topics', JSON.stringify(this.stories.slice(0, 5)));
    } catch (error) {
      this._storyList.loading = false;
      console.error(error.message);
    }
  },

  async _storeStory({ description, photo }) {
    try {
      this._modalAddStory.showLoading();
      const response = await Story.store({ description, photo });
      this._modalAddStory.hideLoading();

      if (response.error) {
        alert(response.message);
        throw new Error(response.message);
      }

      goToPage('/');
    } catch (error) {
      this._modalAddStory.hideLoading();
      console.error(error.message);
    }
  }
}

export default Home;