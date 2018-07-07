import * as venuesApi from '../api/venues';

export const VENUES_GET_FETCHING = 'VENUES_GET_FETCHING';
export const VENUES_GET_FETCHING_FINISH = 'VENUES_GET_FETCHING_FINISH';
export const VENUES_GET_FETCHING_ERROR = 'VENUES_GET_FETCHING_ERROR';
export function getVenues() {
  return async (dispatch) => {
    dispatch({
      type: VENUES_GET_FETCHING,
    });

    try {
      const res = await venuesApi.get();
      return dispatch({
        type: VENUES_GET_FETCHING_FINISH,
        payload: res.body,
      });
    } catch (err) {
      if (err instanceof Error) {
        throw err;
      } else {
        dispatch({
          type: VENUES_GET_FETCHING_ERROR,
        });
        throw err;
      }
    }
  };
}

export const VENUE_SET_DIALOG_STATE = 'VENUE_SET_DIALOG_STATE';
export function setDialogState(data) {
  return async (dispatch) => {
    dispatch({
      type: VENUE_SET_DIALOG_STATE,
      payload: data,
    });
  };
}

export const VENUE_CLEAR_CREATING_ERRORS = 'VENUE_CLEAR_CREATING_ERRORS';
export function clearCreatingErrors() {
  return async (dispatch) => {
    dispatch({
      type: VENUE_CLEAR_CREATING_ERRORS,
    });
  };
}

export const VENUE_CREATE_FETCHING = 'VENUE_CREATE_FETCHING';
export const VENUE_CREATE_FETCHING_FINISH = 'VENUE_CREATE_FETCHING_FINISH';
export const VENUE_CREATE_FETCHING_ERROR = 'VENUE_CREATE_FETCHING_ERROR';
export function create(data) {
  return async (dispatch) => {
    dispatch({
      type: VENUE_CREATE_FETCHING,
    });

    try {
      const response = await venuesApi.create(data);
      if (response.body.errors) {
        throw response.body.errors;
      }
      dispatch({
        type: VENUE_CREATE_FETCHING_FINISH,
        payload: response.body,
      });
    } catch (error) {
      dispatch({
        type: VENUE_CREATE_FETCHING_ERROR,
        error: true,
        payload: error.response.body.data,
      });
      throw error;
    }
  };
}
