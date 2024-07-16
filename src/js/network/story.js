import axios from 'axios';
import Config from '../config/config';
import Utils from '../utils/utils';
import ApiEndpoint from '../config/api-endpoint';

const Story = {
  async getAll({ page = 1, size = 10 }) {
    return await axios.get(ApiEndpoint.GET_ALL_TRANSACTION, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
      params: { page, size },
    });
  },
 
  async store({ description, photo }) {
    const data = { description, photo };
 
    return await axios.post(ApiEndpoint.STORE_TRANSACTION, data, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
 
export default Story;