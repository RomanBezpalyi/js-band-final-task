import axios from 'axios';

axios.defaults.baseURL = 'https://js-band-api.glitch.me/';

export const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const signin = credentials => axios.post('signin', credentials);

export const refreshUser = token => {
  setAuthToken(token);
  return axios.get('books');
};

export const signout = token => {
  setAuthToken(token);
  return axios.get('logout');
};
