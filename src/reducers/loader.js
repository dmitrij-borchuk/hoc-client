import {
  INITIAL_DATA_FETCHING,
  INITIAL_DATA_FETCHING_FINISH,
  INITIAL_DATA_FETCHING_ERROR,
} from '../actions/loader';

const defaultState = {
  isFetching: true,
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    case INITIAL_DATA_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case INITIAL_DATA_FETCHING_FINISH:
      return {
        ...state,
        isFetching: false,
      };
    case INITIAL_DATA_FETCHING_ERROR:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
