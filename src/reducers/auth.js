import {
  AUTH_LOGIN_FETCHING,
  AUTH_LOGIN_FETCHING_FINISH,
  AUTH_LOGIN_FETCHING_ERROR,
  AUTH_GET_CURRENT_USER,
  AUTH_RESET_PASSWORD_FETCHING,
  AUTH_RESET_PASSWORD_FETCHING_FINISH,
  AUTH_RESET_PASSWORD_FETCHING_ERROR,
} from '../actions/auth';

const defaultState = {
  loginIsFetching: false,
  currentUserInfoFatching: true,
  currentUser: null,
  error: null,

  authForm: {
    username: '',
    password: '',
  },

  resetPassword: {
    errors: [],
    isFetching: false,
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
        loginIsFetching: true,
      };
    case AUTH_LOGIN_FETCHING_FINISH:
      return {
        ...state,
        loginIsFetching: false,
        // currentUser: action.payload,
        error: null,
      };
    case AUTH_LOGIN_FETCHING_ERROR:
      return {
        ...state,
        loginIsFetching: false,
        token: null,
        error: action.payload,
      };

    // Reset password
    case AUTH_RESET_PASSWORD_FETCHING:
      return {
        ...state,
        resetPassword: {
          isFetching: true,
          errors: [],
        },
      };
    case AUTH_RESET_PASSWORD_FETCHING_FINISH:
      return {
        ...state,
        resetPassword: {
          isFetching: false,
          errors: null,
        },
      };
    case AUTH_RESET_PASSWORD_FETCHING_ERROR:
      return {
        ...state,
        resetPassword: {
          isFetching: false,
          errors: action.payload,
        },
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
