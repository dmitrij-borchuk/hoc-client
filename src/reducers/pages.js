import {
  USERS_PAGE_DATA_FETCHING,
  USERS_PAGE_DATA_FETCHING_FINISH,
  USERS_PAGE_DATA_FETCHING_ERROR,
  VENUES_DATA_FETCHING,
  VENUES_DATA_FETCHING_FINISH,
  VENUES_DATA_FETCHING_ERROR,
  VENUE_SET_DIALOG_STATE,
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
  venuesPage: {
    fetching: false,
    error: null,
    dialogOpened: false,
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
    case VENUES_DATA_FETCHING:
      return {
        ...state,
        groupsPage: {
          ...state.groupsPage,
          fetching: true,
        },
      };
    case VENUES_DATA_FETCHING_FINISH:
      return {
        ...state,
        groupsPage: {
          ...state.groupsPage,
          fetching: false,
          error: null,
        },
      };
    case VENUES_DATA_FETCHING_ERROR:
      return {
        ...state,
        groupsPage: {
          ...state.groupsPage,
          fetching: false,
          error: action.payload,
        },
      };

    case VENUE_SET_DIALOG_STATE:
      return {
        ...state,
        venuesPage: {
          ...state.venuesPage,
          dialogOpened: action.payload,
        },
      };

    default:
      return state;
  }
}
