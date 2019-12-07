export const ActionTypes = {
  SIGN_IN_REQUEST: 'SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',

  REFRESH_USER: 'REFRESH_USER',
  REFRESH_USER_REQUEST: 'REFRESH_USER_REQUEST',
  REFRESH_USER_SUCCESS: 'REFRESH_USER_SUCCESS',
  REFRESH_USER_ERROR: 'REFRESH_USER_ERROR',

  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERROR: 'LOGOUT_ERROR',

  CLEAR_ERROR_MESSAGE: 'CLEAR_ERROR_MESSAGE',
};

//  Signin

export const signInRequest = () => ({
  type: ActionTypes.SIGN_IN_REQUEST,
});

export const signInSuccesss = response => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: { response },
});

export const signInError = error => ({
  type: ActionTypes.SIGN_IN_ERROR,
  payload: { error },
});

// Logout

export const logOutRequest = () => ({
  type: ActionTypes.LOGOUT_REQUEST,
});

export const logOutSuccess = () => ({
  type: ActionTypes.LOGOUT_SUCCESS,
});

export const logOutError = () => ({
  type: ActionTypes.LOGOUT_ERROR,
});

// refresh user

export const refreshUser = () => ({
  type: ActionTypes.REFRESH_USER,
});

export const refreshUserRequest = () => ({
  type: ActionTypes.REFRESH_USER_REQUEST,
});

export const refreshUserSuccess = response => ({
  type: ActionTypes.REFRESH_USER_SUCCESS,
  payload: { response },
});

export const refreshUserError = error => ({
  type: ActionTypes.REFRESH_USER_ERROR,
  payload: { error },
});

// clear error message

export const clearErrorMsg = () => ({
  type: ActionTypes.CLEAR_ERROR_MESSAGE,
});
