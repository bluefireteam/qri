const DISMISS_TIMEOUT = 3000;

export const showErrorMessage = error => dispatch => {
  dispatch({
    type: "SHOW_ERROR_MESSAGE",
    payload: { error },
  });
  dispatch(scheduleDismiss("ERROR", error));
}

export const showInfoMessage = info => dispatch => {
  dispatch({
    type: "SHOW_INFO_MESSAGE",
    payload: { info },
  });
  dispatch(scheduleDismiss("INFO", info));
}

const scheduleDismiss = (type, msg) => dispatch => {
  setTimeout(() => {
    dispatch({
      type: `DISMISS_${type}_MESSAGE`,
      payload: { msg },
    });
  }, DISMISS_TIMEOUT);
}
