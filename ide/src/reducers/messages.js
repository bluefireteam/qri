const initialState = {
  errorMessages: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "SHOW_ERROR_MESSAGE":
      return { ...state, errorMessages: [ ...state.errorMessages, action.payload.error ] };
  }
  return state;
}
