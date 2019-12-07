import * as api from '../../services/session-api';
import {
  signInRequest,
  signInSuccesss,
  refreshUserRequest,
  refreshUserSuccess,
} from './actions';
import { getToken, getUsername } from './selectors';

export const signin = credentials => dispatch => {
  dispatch(signInRequest());

  api.signin(credentials).then(response => dispatch(signInSuccesss(response)));
};

export const refreshUser = () => (dispatch, getState) => {
  const token = getToken(getState());
  const username = getUsername(getState());

  if (!token) return;
  dispatch(refreshUserRequest());
  api
    .signin({ username })
    .then(response => dispatch(refreshUserSuccess(response)));
};
