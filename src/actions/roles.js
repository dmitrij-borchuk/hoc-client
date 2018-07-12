import * as rolesApi from '../api/roles';

export const ROLES_GET_ALL_FETCHING_FINISH = 'ROLES_GET_ALL_FETCHING_FINISH';
export const ROLES_GET_ALL_FETCHING_ERROR = 'ROLES_GET_ALL_FETCHING_ERROR';
export function getRoles() {
  return async (dispatch) => {
    try {
      const res = await rolesApi.get();
      return dispatch({
        type: ROLES_GET_ALL_FETCHING_FINISH,
        payload: res.body,
      });
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      } else {
        dispatch({
          type: ROLES_GET_ALL_FETCHING_ERROR,
        });
        throw err;
      }
    }
  };
}
