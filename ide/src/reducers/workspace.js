const initialState = {
  editors: []
}

const unSelectEditor = e => ({ ...e, selected: false })
const findByFileName = fileName => editor => editor.fileName === fileName;

export default (state = initialState, action) => {
  switch(action.type) {
    case "OPEN_EDITOR": {
      const { type, fileName } = action.payload;

      // Check if the editor is already open
      const isOpen = state.editors.find(findByFileName(fileName));

      if (isOpen) {
        // Just select the editor
        return {
          ...state,
          editors: state.editors.map(e => ({
            ...e,
              selected: e.fileName === fileName,
          }))
        }
      }

      // Otherwise open a new one
      return {
        ...state,
        editors: [
          ...state.editors.map(unSelectEditor),
          { type, fileName, selected: true }
        ]
      }
    }
  }
  return state;
}
