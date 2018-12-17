import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const store = createStore(combineReducers(reducers))';

const Index = () => (
  <Provider store={store}>
    <IDE />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById("app"));

