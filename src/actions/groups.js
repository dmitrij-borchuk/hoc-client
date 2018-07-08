import * as groupsApi from '../api/groups';

export const GET_GROUP_WITH_MENTOR_FETCHING = 'GET_GROUP_WITH_MENTOR_FETCHING';
export const GET_GROUP_WITH_MENTOR_FETCHING_FINISH = 'GET_GROUP_WITH_MENTOR_FETCHING_FINISH';
export const GET_GROUP_WITH_MENTOR_FETCHING_ERROR = 'GET_GROUP_WITH_MENTOR_FETCHING_ERROR';
export function getGroup(id) {
  return (dispatch) => {
    if (!id) {
      throw new Error('"id" is not provided');
    }
    dispatch({
      type: GET_GROUP_WITH_MENTOR_FETCHING,
    });

    return groupsApi.getById(id).then(res => dispatch({
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

export const GET_GROUPS_FETCHING = 'GET_GROUPS_FETCHING';
export const GET_GROUPS_FETCHING_FINISH = 'GET_GROUPS_FETCHING_FINISH';
export const GET_GROUPS_FETCHING_ERROR = 'GET_GROUPS_FETCHING_ERROR';
export function getGroups() {
  return async (dispatch) => {
    dispatch({
      type: GET_GROUPS_FETCHING,
    });

    try {
      const res = await groupsApi.get();
      return dispatch({
        type: GET_GROUPS_FETCHING_FINISH,
        payload: res.body,
      });
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      } else {
        dispatch({
          type: GET_GROUPS_FETCHING_ERROR,
        });
        throw err;
      }
    }
  };
}

export const EDIT_GROUP_FETCHING = 'EDIT_GROUP_FETCHING';
export const EDIT_GROUP_FETCHING_FINISH = 'EDIT_GROUP_FETCHING_FINISH';
export const EDIT_GROUP_FETCHING_ERROR = 'EDIT_GROUP_FETCHING_ERROR';
export function editGroup(data) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_GROUP_FETCHING,
    });

    try {
      const res = await groupsApi.edit(data);
      return dispatch({
        type: EDIT_GROUP_FETCHING_FINISH,
        payload: res.body,
      });
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      } else {
        dispatch({
          type: EDIT_GROUP_FETCHING_ERROR,
        });
        throw err;
      }
    }
  };
}

export const GROUPS_SET_DIALOG_STATE = 'GROUPS_SET_DIALOG_STATE';
export function setDialogState(data) {
  return async (dispatch) => {
    dispatch({
      type: GROUPS_SET_DIALOG_STATE,
      payload: data,
    });
  };
}

export const GROUPS_CLEAR_EDITING_ERRORS = 'GROUPS_CLEAR_EDITING_ERRORS';
export function clearCreatingErrors() {
  return async (dispatch) => {
    dispatch({
      type: GROUPS_CLEAR_EDITING_ERRORS,
    });
  };
}

export const GROUPS_EDIT_FETCHING = 'GROUPS_EDIT_FETCHING';
export const GROUPS_EDIT_FETCHING_FINISH = 'GROUPS_EDIT_FETCHING_FINISH';
export const GROUPS_EDIT_FETCHING_ERROR = 'GROUPS_EDIT_FETCHING_ERROR';
export function create(data) {
  return async (dispatch) => {
    dispatch({
      type: GROUPS_EDIT_FETCHING,
    });

    try {
      const response = await groupsApi.create(data);
      if (response.body.errors) {
        throw response.body.errors;
      }
      dispatch({
        type: GROUPS_EDIT_FETCHING_FINISH,
        payload: response.body,
      });
    } catch (error) {
      dispatch({
        type: GROUPS_EDIT_FETCHING_ERROR,
        error: true,
        payload: error.response.body.data,
      });
      throw error;
    }
  };
}
