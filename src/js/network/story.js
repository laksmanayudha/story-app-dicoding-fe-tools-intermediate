import axios from 'axios';
import Config from '../config/config';
import ApiEndpoint from '../config/api-endpoint';
import Session from '../utils/session';

const Story = {
  async getAll({ page = 1, size = 5 } = {}) {
    try {
      const response = await axios.get(ApiEndpoint.GET_ALL_STORY, {
        headers: {
          Authorization: `Bearer ${Session.getUserToken(Config.USER_TOKEN_KEY)}`,
        },
        params: { page, size },
      });

      return response.data;
    } catch (error) {
      if (error.response) return error.response.data;
      if (error.request) return error.request;
      return null;
    }
  },
 
  async store({ description, photo } = {}) {
    try {
      const data = { description, photo };
      const response = await axios.post(ApiEndpoint.STORE_STORY, data, {
        headers: {
          Authorization: `Bearer ${Session.getUserToken(Config.USER_TOKEN_KEY)}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      return response;
    } catch (error) {
      if (error.response) return error.response.data;
      if (error.request) return error.request;
      return null;
    }
  },
};
 
export default Story;