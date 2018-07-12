import {
  GET_GROUP_WITH_MENTOR_FETCHING_FINISH,
  GET_GROUPS_FETCHING_FINISH,
  GROUPS_SET_DIALOG_STATE,
  GROUPS_CLEAR_EDITING_ERRORS,
  GROUPS_EDIT_FETCHING,
  GROUPS_EDIT_FETCHING_FINISH,
  GROUPS_EDIT_FETCHING_ERROR,
} from '../actions/groups';

const defaultState = {
  map: [],
  groupWithMentor: null,
  list: [],
  listFetching: false,
  listFetchingError: null,
  dialogOpened: false,
  editFetching: false,
  editErrors: [],
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    case GROUPS_CLEAR_EDITING_ERRORS:
      return {
        ...state,
        editErrors: [],
      };

    case GROUPS_SET_DIALOG_STATE:
      return {
        ...state,
        dialogOpened: action.payload,
      };

    case GET_GROUP_WITH_MENTOR_FETCHING_FINISH:
      return {
        ...state,
        groupWithMentor: action.payload,
      };

    case GET_GROUPS_FETCHING_FINISH:
      return {
        ...state,
        list: action.payload,
      };

    // Edit
    case GROUPS_EDIT_FETCHING:
      return {
        ...state,
        editFetching: true,
      };
    case GROUPS_EDIT_FETCHING_FINISH:
      return {
        ...state,
        editFetching: false,
      };
    case GROUPS_EDIT_FETCHING_ERROR:
      return {
        ...state,
        editFetching: false,
        editErrors: action.payload,
      };

    default:
      return state;
  }
}
