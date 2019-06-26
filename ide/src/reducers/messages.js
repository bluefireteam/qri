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
  }
  return state;
}
