import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';

const Auth = {
  async register({ name, email, password }) {
    try {
      const response = await axios.post(ApiEndpoint.REGISTER, { name, email, password });
      return response.data;
    } catch (error) {
      if (error.response) return error.response.data;
      if (error.request) return error.request;
      return null;
    }
  },

  async login({ email, password }) {
    try {
      const response = await axios.post(ApiEndpoint.LOGIN, { email, password });
      return response.data;
    } catch (error) {
      if (error.response) return error.response.data;
      if (error.request) return error.request;
      return null;
    }
  },
};

export default Auth;