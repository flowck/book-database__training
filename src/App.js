import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "./assets/css/App.scss";

/**
 * List books
 */
function ListBooks({ list, name }) {
  const [books, setBooks] = useState(listBooks());

  return (
    <>
      <h1>List books</h1>
      {books.map((book, index) => (
        <div key={index}>{book.title}</div>
      ))}
    </>
  );
}

function Input({ type, label, setValue }) {
  return (
    <>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            className="input"
            type={type}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

/**
 * listBooks
 */
function listBooks() {
  const BOOKS = "bd__books";
  const books = localStorage.getItem(BOOKS);
  return books ? JSON.parse(books) : [];
}

/**
 * saveBook
 */
function saveBook(title, isbn, publicationDate, description) {
  const BOOKS = "bd__books";
  let books = localStorage.getItem(BOOKS);
  books = books
    ? [...JSON.parse(books), { title, isbn, publicationDate, description }]
    : [{ title, isbn, publicationDate, description }];

  localStorage.setItem(BOOKS, JSON.stringify(books));
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
