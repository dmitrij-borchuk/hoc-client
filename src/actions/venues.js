import { getGroups } from './groups';
import * as venuesApi from '../api/venues';

export const VENUES_DATA_FETCHING = 'VENUES_DATA_FETCHING';
export const VENUES_DATA_FETCHING_FINISH = 'VENUES_DATA_FETCHING_FINISH';
export const VENUES_DATA_FETCHING_ERROR = 'VENUES_DATA_FETCHING_ERROR';
export function getData() {
  return async (dispatch) => {
    dispatch({
      type: VENUES_DATA_FETCHING,
    });

    try {
      await dispatch(getGroups());
      dispatch({
        type: VENUES_DATA_FETCHING_FINISH,
      });
    } catch (error) {
      dispatch({
        type: VENUES_DATA_FETCHING_ERROR,
        error: true,
        payload: error,
      });
      throw error;
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
