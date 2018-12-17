const initialState = {
  name: null,
  projectPath: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "READ_PROJECT":
      return { ...state, ...action.payload };
  }
  return state;
}
