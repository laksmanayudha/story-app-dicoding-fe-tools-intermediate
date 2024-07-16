import axios from 'axios';
import Config from '../config/config';
import Utils from '../utils/utils';
import ApiEndpoint from '../config/api-endpoint';

const Story = {
  async getAll({ page = 1, size = 10 }) {
    try {
      const response = await axios.get(ApiEndpoint.GET_ALL_TRANSACTION, {
        headers: {
          Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
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
 
  async store({ description, photo }) {
    try {
      const data = { description, photo };
      const response = await axios.post(ApiEndpoint.STORE_TRANSACTION, data, {
        headers: {
          Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
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