import { GET_SCHOOLS_FETCHING_FINISH } from '../actions/schools';

const defaultState = {
  list: [],
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    case GET_SCHOOLS_FETCHING_FINISH:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
}
