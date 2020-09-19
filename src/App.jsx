/**
 * Styles
 */
import "./assets/css/App.scss";

import React, { useEffect, useState } from "react";
import ListBooks from "./components/ListBooks/ListBooks";
import Sidebar from "./components/Sidebar/Sidebar";
import { connect } from "react-redux";
import { getBooksRequest } from "./store/thunks";
import RegistBooks from "./components/RegistBooks/RegistBooks";

/**
 * Regist books
 */

function App({ listBooks, books }) {
  /**
   * Get data
   */
  useEffect(() => {
    listBooks();
  }, [listBooks]);

  /**
   * State properties
   */
  const [registBooksModal, setRegistBooksModal] = useState(false);

  /**
   * Methods
   */
  const toggleRegistBooksModal = () => setRegistBooksModal(!registBooksModal);

  return (
    <div className="app-container">
      <Sidebar onOpenModal={toggleRegistBooksModal}></Sidebar>

      {registBooksModal ? (
        <RegistBooks onCloseModal={toggleRegistBooksModal} />
      ) : null}

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
