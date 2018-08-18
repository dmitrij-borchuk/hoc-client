import { FEATURES_SET } from '../actions/features';

const defaultState = {
  userManagement: false,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case FEATURES_SET:
      return action.payload;

    default:
      return state;
  }
}
