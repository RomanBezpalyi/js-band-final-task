import { combineReducers } from 'redux';
import { ActionTypes } from './actions';

const username = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return payload.response.data.username;
    case ActionTypes.LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

const avatar = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return payload.response.data.avatar;
    case ActionTypes.LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return payload.response.data.token;
    case ActionTypes.LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_ERROR:
    case ActionTypes.REFRESH_USER_ERROR:
      return payload.error.message;
    case ActionTypes.SIGN_IN_SUCCESS:
    case ActionTypes.REFRESH_USER_SUCCESS:
    case ActionTypes.CLEAR_ERROR_MESSAGE:
      return null;
    default:
      return state;
  }
};

const isAuthentificated = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
    case ActionTypes.REFRESH_USER:
    case ActionTypes.REFRESH_USER_SUCCESS:
      return true;
    case ActionTypes.LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  username,
  avatar,
  token,
  error,
  isAuthentificated,
});
