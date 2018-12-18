export const showErrorMessage = error => dispatch => {
  dispatch({
    type: "SHOW_ERROR_MESSAGE",
    payload: { error },
  });
}
