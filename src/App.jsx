import "bulma/css/bulma.min.css";
import "./assets/css/App.scss";
import React, { useState } from "react";
import Input from "./components/Input";
import { LC_BOOKS } from "./utils/constants";

/**
 * List books
 */
function ListBooks({ list, name }) {
  const [books] = useState(listBooks());

  return (
    <>
      <h1>List books</h1>
      {books.map((book, index) => (
        <div key={index}>{book.title}</div>
      ))}
    </>
  );
}

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
function RegistBooks(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  return (
    <>
      <h1>Regist book</h1>

      <Input label="Title" type="text" setValue={setTitle} />
      <Input label="ISBN" type="text" setValue={setIsbn} />
      <Input
        label="Publication date"
        type="date"
        setValue={setPublicationDate}
      />
      <Input label="Description" type="text" setValue={setDescription} />

      <div className="field">
        <div className="control">
          <button
            className="button is-primary"
            onClick={() =>
              props.saveBook(title, isbn, publicationDate, description)
            }
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <h1>Book Database</h1>
      <ListBooks list={["Hello"]}></ListBooks>
      <RegistBooks saveBook={saveBook}></RegistBooks>
    </div>
  );
}

export default App;
