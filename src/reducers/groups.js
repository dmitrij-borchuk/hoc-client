import {
  GET_GROUP_WITH_MENTOR_FETCHING_FINISH,
  GET_GROUPS_FETCHING_FINISH,
  GROUPS_SET_DIALOG_STATE,
  GROUPS_CLEAR_EDITING_ERRORS,
} from '../actions/groups';

const defaultState = {
  map: [],
  groupWithMentor: null,
  list: [],
  listFetching: false,
  listFetchingError: null,
  dialogOpened: false,
  editFetching: false,
  editErrors: null,
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    case GROUPS_CLEAR_EDITING_ERRORS:
      return {
        ...state,
        editErrors: null,
      };

    // Get
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

    default:
      return state;
  }
}
