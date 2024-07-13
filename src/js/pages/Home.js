import Formatter from "../utils/formatter";

const Home = {
  async init() {
    this._getComponents();
    this._initUI();
    this._initEventListener();
    await this._populateData();
  },

  _getComponents() {
    this._modalAddStory = document.querySelector('add-modal-ustory');
    this._navbarWithOffcanvas = document.querySelector('navbar-with-offcanvas');
    this._storyList = document.querySelector('story-list');
    this._topicList = document.querySelector('topic-list');
    this._topicSection = document.querySelector('#topicSection');
    this._categoryList = document.querySelector('#categoryList');
  },

  _initUI() {
    this._topicSection.style.position = `sticky`;
    this._topicSection.style.top = `${this._navbarWithOffcanvas.offsetHeight}px`;
    this._categoryList.style.position = `sticky`;
    this._categoryList.style.top = `${this._navbarWithOffcanvas.offsetHeight}px`;
  },

  _initEventListener() {
    this._modalAddStory.onAddStorySubmit = ({ description, photo }) => {
      console.log({ description, photo });
    }
  },

  async _populateData() {
    const response = await fetch('/data/data.json');
    const { listStory } = await response.json(); 
    const stories = listStory.map((story) => {
      return {
        ...story,
        createdAt: Formatter.readableDatetime(story.createdAt),
      };
    }); 
    this._storyList.setAttribute('stories', JSON.stringify(stories));
    this._topicList.setAttribute('topics', JSON.stringify(stories.slice(0, 4)));
  }
}

export default Home;