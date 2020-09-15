/**
 * Styles
 */
import "./assets/css/App.scss";

import React, { useEffect } from "react";
import ListBooks from "./components/ListBooks/ListBooks";
// import RegistBooks from "./components/RegistBooks";
import Sidebar from "./components/Sidebar/Sidebar";
import { connect } from "react-redux";
// import {} from "./store/actions";
import { getBooksRequest } from "./store/thunks";

/**
 * Regist books
 */

function App({ listBooks, books }) {
  useEffect(() => {
    listBooks();
    console.log(books);
  }, [listBooks]);

  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="app-container__content">
        <ListBooks books={books}></ListBooks>
      </div>
    </div>
  );
}

/**
 * Map dispatch to props
 */
const mapDispatchToProps = (dispatch) => {
  return {
    listBooks: (id) => dispatch(getBooksRequest(id)),
  };
};

/**
 * Map state to props
 */
const mapStateToProps = ({ books }) => {
  return { books };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
