import {
  ROLES_GET_ALL_FETCHING_FINISH,
  ROLES_GET_ALL_FETCHING_ERROR,
} from '../actions/roles';

const defaultState = {
  list: [],
  listFetchingError: null,
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    case ROLES_GET_ALL_FETCHING_FINISH:
      return {
        ...state,
        list: action.payload,
        listFetchingError: null,
      };
    case ROLES_GET_ALL_FETCHING_ERROR:
      return {
        ...state,
        listFetchingError: action.payload,
      };

    default:
      return state;
  }
}
