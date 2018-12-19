const initialState = {
  editors: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "NEW_EDITOR": {
      const { type, fileName } = action.payload;

      return { ...state, editors: [ ...state.editors, { type, fileName }] }
    }
  }
  return state;
}
