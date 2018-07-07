import { getUsers } from './users';

export const USERS_PAGE_DATA_FETCHING = 'USERS_PAGE_DATA_FETCHING';
export const USERS_PAGE_DATA_FETCHING_FINISH = 'USERS_PAGE_DATA_FETCHING_FINISH';
export const USERS_PAGE_DATA_FETCHING_ERROR = 'USERS_PAGE_DATA_FETCHING_ERROR';
export function usersPageGetData() {
  return async (dispatch) => {
    dispatch({
      type: USERS_PAGE_DATA_FETCHING,
    });

    try {
      await dispatch(getUsers());
      dispatch({
        type: USERS_PAGE_DATA_FETCHING_FINISH,
      });
    } catch (error) {
      dispatch({
        type: USERS_PAGE_DATA_FETCHING_ERROR,
        error: true,
        payload: error,
      });
      throw error;
    }
  };
}
