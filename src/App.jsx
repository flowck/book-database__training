/**
 * Styles
 */
import "./assets/css/App.scss";

import React from "react";
import { LC_BOOKS } from "./utils/constants";
import ListBooks from "./components/ListBooks/ListBooks";
import RegistBooks from "./components/RegistBooks";
import Sidebar from "./components/Sidebar/Sidebar";

/**
 * List books
 */

/**
 * listBooks
 */
function listBooks() {
  const books = localStorage.getItem(LC_BOOKS);
  return books ? JSON.parse(books) : [];
}

/**
 * saveBook
 */
function saveBook(title, isbn, publicationDate, description) {
  let books = localStorage.getItem(LC_BOOKS);
  books = books
    ? [...JSON.parse(books), { title, isbn, publicationDate, description }]
    : [{ title, isbn, publicationDate, description }];

  localStorage.setItem(LC_BOOKS, JSON.stringify(books));
}

/**
 * Regist books
 */

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="app-container__content">
        <ListBooks data={listBooks()}></ListBooks>
        {/* <RegistBooks saveBook={saveBook}></RegistBooks> */}
      </div>
    </div>
  );
}

export default App;
