import {
  USERS_PAGE_DATA_FETCHING,
  USERS_PAGE_DATA_FETCHING_FINISH,
  USERS_PAGE_DATA_FETCHING_ERROR,
} from '../actions/users';

const defaultState = {
  usersPage: {
    fetching: false,
    error: null,
  },
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    case USERS_PAGE_DATA_FETCHING:
      return {
        ...state,
        usersPage: {
          fetching: true,
        },
      };
    case USERS_PAGE_DATA_FETCHING_FINISH:
      return {
        ...state,
        usersPage: {
          fetching: false,
          error: null,
        },
      };
    case USERS_PAGE_DATA_FETCHING_ERROR:
      return {
        ...state,
        usersPage: {
          fetching: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
}
