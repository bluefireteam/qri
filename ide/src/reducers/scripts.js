const initialState = {
  files: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "READ_SCRIPT": {
      const script = {
        fileName: action.payload.fileName,
        loaded: false,
        modified: false
      };

      return { ...state, files: [ ...state.files, script ] }
    }
  }
  return state;
}
