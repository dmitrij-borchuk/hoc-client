import { getWithMentor } from '../api/groups';

export const GET_GROUP_WITH_MENTOR_FETCHING = 'GET_GROUP_WITH_MENTOR_FETCHING';
export const GET_GROUP_WITH_MENTOR_FETCHING_FINISH = 'GET_GROUP_WITH_MENTOR_FETCHING_FINISH';
export const GET_GROUP_WITH_MENTOR_FETCHING_ERROR = 'GET_GROUP_WITH_MENTOR_FETCHING_ERROR';
export function getGroupWithMentor(id) {
  return (dispatch) => {
    dispatch({
      type: GET_GROUP_WITH_MENTOR_FETCHING,
    });

    return getWithMentor(id).then(res => dispatch({
      type: GET_GROUP_WITH_MENTOR_FETCHING_FINISH,
      payload: res.body,
    })).catch((err) => {
      if (err instanceof Error) {
        throw err;
      } else {
        dispatch({
          type: GET_GROUP_WITH_MENTOR_FETCHING_ERROR,
        });
        return Promise.reject(err);
      }
    });
  };
}
