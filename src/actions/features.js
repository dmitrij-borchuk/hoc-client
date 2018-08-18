export const FEATURES_SET = 'FEATURES_SET';
export function setFeatures(data) {
  return async (dispatch) => {
    dispatch({
      type: FEATURES_SET,
      payload: data,
    });
  };
}
