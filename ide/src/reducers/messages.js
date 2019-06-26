const initialState = {
  errorMessages: [],
  infoMessages: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "SHOW_ERROR_MESSAGE":
      return { ...state, errorMessages: [ ...state.errorMessages, action.payload.error ] };
    case "SHOW_INFO_MESSAGE":
      return { ...state, infoMessages: [ ...state.infoMessages, action.payload.info ] };
    case "DISMISS_INFO_MESSAGE": {
      const { msg } = action.payload;

      return {
        ...state,
        infoMessages: state.infoMessages.filter(m => m !== msg)
      }
    }
    case "DISMISS_ERROR_MESSAGE": {
      const { msg } = action.payload;

      return {
        ...state,
        errorMessages: state.errorMessages.filter(m => m !== msg)
      }
    }
  }
  return state;
}
