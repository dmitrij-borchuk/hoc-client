import {
  GET_USER_WITH_TEACHING_FETCHING_FINISH,
  GET_USERS_FETCHING_FINISH,
  CREATE_USER_FETCHING,
  CREATE_USER_FETCHING_FINISH,
  CREATE_USER_FETCHING_ERROR,
} from '../actions/users';

const defaultState = {
  list: [],
  userWithTeaching: null,
  creating: {
    fetching: false,
    errors: null,
  },
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
          errors: null,
        },
      };
    case CREATE_USER_FETCHING_ERROR:
      return {
        ...state,
        creating: {
          ...state.creating,
          fetching: false,
          errors: action.payload.response.body.errors,
        },
      };

    default:
      return state;
  }
}
