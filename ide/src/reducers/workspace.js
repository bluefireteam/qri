const initialState = {
  editors: []
}

const unSelectEditor = e => ({ ...e, selected: false })

export default (state = initialState, action) => {
  switch(action.type) {
    case "NEW_EDITOR": {
      const { type, fileName } = action.payload;

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
