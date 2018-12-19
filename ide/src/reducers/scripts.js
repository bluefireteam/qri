const initialState = {
  files: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "READ_SCRIPT": {
      const script = {
        fileName: action.payload.fileName,
        loaded: false,
        modified: false,
        content: null,
      };

      return { ...state, files: [ ...state.files, script ] }
    }
    case "READ_SCRIPT_CONTENT": {
      const { scriptName, fileContent } = action.payload;

      console.log(action)
      return {
        ...state,
        files: state.files.map(file => {
          if (file.fileName === scriptName) {
            return {
              ...file,
              loaded: true,
              content: fileContent,
            }
          }

          return file;
        })
      }
    }
  }
  return state;
}
