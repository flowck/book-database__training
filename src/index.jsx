import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.scss";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
