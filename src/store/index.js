/**
 * Store
 */

import { books, isLoading } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";

const rootReducer = combineReducers({ books, isLoading });

/**
 * Export store
 */
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
