import {
  GET_USER_WITH_TEACHING_FETCHING_FINISH,
  GET_USERS_FETCHING_FINISH,
  CREATE_USER_FETCHING,
  CREATE_USER_FETCHING_FINISH,
  CREATE_USER_FETCHING_ERROR,
  SET_USER_DIALOG_STATE,
  CLEAR_CREATING_ERRORS,
} from '../actions/users';

const defaultState = {
  list: [],
  userWithTeaching: null,
  creating: {
    fetching: false,
    errors: [],
  },
  dialogOpened: false,
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    case GET_USER_WITH_TEACHING_FETCHING_FINISH:
      return {
        ...state,
        userWithTeaching: action.payload,
      };
    case GET_USERS_FETCHING_FINISH:
      return {
        ...state,
        list: action.payload,
      };

    // create user
    case CREATE_USER_FETCHING:
      return {
        ...state,
        creating: {
          ...state.creating,
          fetching: true,
        },
      };
    case CREATE_USER_FETCHING_FINISH:
      return {
        ...state,
        creating: {
          ...state.creating,
          fetching: false,
          errors: [],
        },
      };
    case CREATE_USER_FETCHING_ERROR:
      return {
        ...state,
        creating: {
          ...state.creating,
          fetching: false,
          errors: action.payload,
        },
      };

    case CLEAR_CREATING_ERRORS:
      return {
        ...state,
        creating: {
          ...state.creating,
          errors: [],
        },
      };

    case SET_USER_DIALOG_STATE:
      return {
        ...state,
        dialogOpened: action.payload,
      };

    default:
      return state;
  }
}
