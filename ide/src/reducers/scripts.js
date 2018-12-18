const initialState = {
  scripts: []
}

export default (state = initialState, action) => {
  switch(state.type) {
    case "READ_SCRIPT": {
      const script = {
        fileName: action.payload.fileName,
        loaded: false,
        modified: false
      };

      return { ...state, scripts: [ ...state.scripts, script ] }
    }
  }
  return state;
}
