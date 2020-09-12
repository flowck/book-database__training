/**
 * Store
 */

import books from "./books";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({ books });

/**
 * Export reducer
 */
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
