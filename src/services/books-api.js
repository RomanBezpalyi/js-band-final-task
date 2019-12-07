import axios from 'axios';
import { setAuthToken } from './session-api';

axios.defaults.baseURL = 'https://js-band-api.glitch.me/';

// eslint-disable-next-line import/prefer-default-export
export const getBooks = token => {
  setAuthToken(token);
  return axios.get('books');
};

export const purchaseBooks = (token, books) => {
  setAuthToken(token);
  return axios.post('purchase', books);
};
