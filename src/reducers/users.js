import {
  GET_USER_WITH_TEACHING_FETCHING_FINISH,
  GET_USERS_FETCHING_FINISH,
  CREATE_USER_FETCHING_ERROR,
} from '../actions/users';

const defaultState = {
  list: [],
  userWithTeaching: null,
  creationErrors: null,
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

    case CREATE_USER_FETCHING_ERROR:
      return {
        ...state,
        creationErrors: action.payload.response.body.errors,
      };

    default:
      return state;
  }
}
