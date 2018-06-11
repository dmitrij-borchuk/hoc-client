import {
  USERS_PAGE_DATA_FETCHING,
  USERS_PAGE_DATA_FETCHING_FINISH,
  USERS_PAGE_DATA_FETCHING_ERROR,
  GROUPS_PAGE_DATA_FETCHING,
  GROUPS_PAGE_DATA_FETCHING_FINISH,
  GROUPS_PAGE_DATA_FETCHING_ERROR,
} from '../actions/pages';

const defaultState = {
  usersPage: {
    fetching: false,
    error: null,
  },
  groupsPage: {
    fetching: false,
    error: null,
  },
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    // Users
    case USERS_PAGE_DATA_FETCHING:
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          fetching: true,
        },
      };
    case USERS_PAGE_DATA_FETCHING_FINISH:
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          fetching: false,
          error: null,
        },
      };
    case USERS_PAGE_DATA_FETCHING_ERROR:
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          fetching: false,
          error: action.payload,
        },
      };

    // Groups
    case GROUPS_PAGE_DATA_FETCHING:
      return {
        ...state,
        groupsPage: {
          ...state.groupsPage,
          fetching: true,
        },
      };
    case GROUPS_PAGE_DATA_FETCHING_FINISH:
      return {
        ...state,
        groupsPage: {
          ...state.groupsPage,
          fetching: false,
          error: null,
        },
      };
    case GROUPS_PAGE_DATA_FETCHING_ERROR:
      return {
        ...state,
        groupsPage: {
          ...state.groupsPage,
          fetching: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
}
