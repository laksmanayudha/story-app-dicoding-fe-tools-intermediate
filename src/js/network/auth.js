import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';

const Auth = {
  async register({ name, email, password }) {
    return await axios.post(ApiEndpoint.REGISTER, { name, email, password });
  },

  async login({ email, password }) {
    try {
      return await axios.post(ApiEndpoint.LOGIN, { email, password });
    } catch (error) {
      if (error.response) return error.response.data;
      if (error.request) return error.request;
      return null;
    }
  },
};

export default Auth;