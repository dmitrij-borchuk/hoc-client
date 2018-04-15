import { get } from '../api/schools';

export const GET_SCHOOLS_FETCHING = 'GET_SCHOOLS_FETCHING';
export const GET_SCHOOLS_FETCHING_FINISH = 'GET_SCHOOLS_FETCHING_FINISH';
export const GET_SCHOOLS_FETCHING_ERROR = 'GET_SCHOOLS_FETCHING_ERROR';
export function getSchools() {
  return (dispatch) => {
    dispatch({
      type: GET_SCHOOLS_FETCHING,
    });

    return get().then(res => dispatch({
      type: GET_SCHOOLS_FETCHING_FINISH,
      payload: res.body,
    })).catch((err) => {
      if (err instanceof Error) {
        throw err;
      } else {
        dispatch({
          type: GET_SCHOOLS_FETCHING_ERROR,
        });
        return Promise.reject(err);
      }
    });
  };
}
