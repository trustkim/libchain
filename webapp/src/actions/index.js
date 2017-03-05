import { CALL_API } from '../middleware/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const sendLogin = loginData => ({
  [CALL_API]: {
    types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
    verb: 'POST',
    endpoint: 'auth/login',
    payload: loginData
  }
});

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const login = (loginData) => (dispatch) => {
  return dispatch(sendLogin(loginData));
};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
export const logout = () => ({
  type: LOGOUT_SUCCESS
});

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
});

export const GENERATE_KEY_PAIR = 'GENERATE_KEY_PAIR';

export const generateKeyPair = () => ({
  type: GENERATE_KEY_PAIR
});

export const SEND_KEY_REQUEST = 'SEND_KEY_REQUEST';
export const SEND_KEY_SUCCESS = 'SEND_KEY_SUCCESS';
export const SEND_KEY_FAILURE = 'SEND_KEY_FAILURE';

const sendPublicKey = (publicKey) => ({
  [CALL_API]: {
    types: [ SEND_KEY_REQUEST, SEND_KEY_SUCCESS, SEND_KEY_FAILURE ],
    verb: 'PUT',
    endpoint: '/users/publicKey',
    payload: publicKey
  }
});

export const publicKey = () => (dispatch, getState) => {
  return dispatch(sendPublicKey({ publicKey: getState().keyPair.publicKey }));
};
