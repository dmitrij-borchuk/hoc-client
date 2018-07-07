import {
  VENUE_SET_DIALOG_STATE,
  VENUE_CREATE_FETCHING,
  VENUE_CREATE_FETCHING_FINISH,
  VENUE_CREATE_FETCHING_ERROR,
  VENUES_GET_FETCHING,
  VENUES_GET_FETCHING_FINISH,
  VENUES_GET_FETCHING_ERROR,
} from '../actions/venues';

const defaultState = {
  list: [],
  listFetching: false,
  listFetchingError: null,
  dialogOpened: false,
  creationFetching: false,
  edit: {
    fetching: false,
    errors: [],
  },
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    case VENUE_SET_DIALOG_STATE:
      return {
        ...state,
        dialogOpened: action.payload,
      };

    // create
    case VENUE_CREATE_FETCHING:
      return {
        ...state,
        edit: {
          ...state.edit,
          fetching: true,
        },
      };
    case VENUE_CREATE_FETCHING_FINISH:
      return {
        ...state,
        edit: {
          ...state.edit,
          fetching: false,
          errors: [],
        },
      };
    case VENUE_CREATE_FETCHING_ERROR:
      return {
        ...state,
        edit: {
          ...state.edit,
          fetching: false,
          errors: action.payload,
        },
      };

    // get
    case VENUES_GET_FETCHING:
      return {
        ...state,
        listFetching: true,
        listFetchingError: null,
      };
    case VENUES_GET_FETCHING_FINISH:
      return {
        ...state,
        list: action.payload,
        listFetching: false,
        listFetchingError: null,
      };
    case VENUES_GET_FETCHING_ERROR:
      return {
        ...state,
        listFetching: false,
        listFetchingError: action.payload,
      };

    default:
      return state;
  }
}
