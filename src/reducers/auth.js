import {
  AUTH_LOGIN_FETCHING,
  AUTH_LOGIN_FETCHING_FINISH,
  AUTH_LOGIN_FETCHING_ERROR,
  AUTH_GET_CURRENT_USER,
} from '../actions/auth';

const defaultState = {
  loginIfFetching: false,
  currentUserInfoFatching: true,
  currentUser: null,
  error: null,

  authForm: {
    username: '',
    password: '',
  },

  resetPasswordForm: {
    email: '',
  },

  setPasswordForm: {
    password: '',
  },
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    // Login
    case AUTH_LOGIN_FETCHING:
      return {
        ...state,
        loginIfFetching: true,
      };
    case AUTH_LOGIN_FETCHING_FINISH:
      return {
        ...state,
        loginIfFetching: false,
        currentUser: action.payload,
        error: null,
      };
    case AUTH_LOGIN_FETCHING_ERROR:
      return {
        ...state,
        loginIfFetching: false,
        token: null,
        error: action.payload,
      };

    case AUTH_GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
}
