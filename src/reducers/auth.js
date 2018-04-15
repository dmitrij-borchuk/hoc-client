import {
  AUTH_LOGIN_FETCHING,
  AUTH_LOGIN_FETCHING_FINISH,
  AUTH_LOGIN_FETCHING_ERROR,
  AUTH_CURRENT_USER_FETCHING,
  AUTH_CURRENT_USER_FETCHING_FINISH,
  AUTH_CURRENT_USER_FETCHING_ERROR,
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
        token: action.payload,
        error: null,
      };
    case AUTH_LOGIN_FETCHING_ERROR:
      return {
        ...state,
        loginIfFetching: false,
        token: null,
        error: action.payload,
      };

    // Current user
    case AUTH_CURRENT_USER_FETCHING:
      return {
        ...state,
        currentUserInfoFatching: true,
      };
    case AUTH_CURRENT_USER_FETCHING_FINISH:
      return {
        ...state,
        currentUserInfoFatching: false,
        currentUser: action.payload,
      };
    case AUTH_CURRENT_USER_FETCHING_ERROR:
      return {
        ...state,
        currentUserInfoFatching: false,
        currentUser: null,
      };

    // // Login form
    // case auth.LOGIN_FORM_SET_CRENTIALS:
    //   return {
    //     ...state,
    //     authForm: action.payload,
    //   };
    // // resetPassword form
    // case auth.RESET_PASSWORD_SET_FORM:
    //   return {
    //     ...state,
    //     resetPasswordForm: action.payload,
    //   };
    // // setPassword form
    // case auth.SET_PASSWORD_SET_FORM:
    //   return {
    //     ...state,
    //     setPasswordForm: action.payload,
    //   };

    default:
      return state;
  }
}
