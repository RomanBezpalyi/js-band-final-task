import * as api from '../../services/session-api';
import {
  signInRequest,
  signInSuccesss,
  signInError,
  refreshUserRequest,
  refreshUserSuccess,
  refreshUserError,
  logOutRequest,
  logOutSuccess,
  logOutError,
} from './actions';
import { getToken } from './selectors';

export const signin = credentials => dispatch => {
  dispatch(signInRequest());

  api
    .signin(credentials)
    .then(response => dispatch(signInSuccesss(response)))
    .catch(error => dispatch(signInError(error.response)));
};

export const refreshUser = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;
  dispatch(refreshUserRequest());
  api
    .refreshUser(token)
    .then(({ data }) => dispatch(refreshUserSuccess(data.books)))
    .catch(({ data }) => dispatch(refreshUserError(data.message)));
};

export const signout = () => (dispatch, getState) => {
  dispatch(logOutRequest());

  const token = getToken(getState());
  if (!token) return;

  api
    .signout(token)
    .then(() => {
      dispatch(logOutSuccess());
      api.clearAuthToken();
    })
    .catch(error => dispatch(logOutError(error)));
};
