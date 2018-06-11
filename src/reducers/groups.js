import {
  GET_GROUP_WITH_MENTOR_FETCHING_FINISH,
  GET_GROUPS_FETCHING_FINISH,
} from '../actions/groups';

const defaultState = {
  map: [],
  groupWithMentor: null,
  list: [],
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
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
