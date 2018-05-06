import { init } from '../api/common';

export const INIT_FETCHING = 'INIT_FETCHING';
export const INIT_FETCHING_FINISH = 'INIT_FETCHING_FINISH';
export const INIT_FETCHING_ERROR = 'INIT_FETCHING_ERROR';
export function initApp(data) {
  return async (dispatch) => {
    dispatch({
      type: INIT_FETCHING,
    });

    try {
      const responce = await init(data);
      if (responce.body.errors) {
        throw responce.body.errors;
      }
      dispatch({
        type: INIT_FETCHING_FINISH,
        payload: responce.body.data,
      });
    } catch (error) {
      dispatch({
        type: INIT_FETCHING_ERROR,
        error: true,
        payload: error,
      });
      throw error;
    }
  };
}
