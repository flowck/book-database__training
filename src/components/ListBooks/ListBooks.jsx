import "./ListBooks.scss";
import React from "react";
import Book from "../Book/Book";

/**
 * ListBooks
 * @property {array} data - List of books
 * @property {string} name - List name
 * @property {Component}
 */
export default function ({ books }) {
  return (
    <>
      <h1 className="app-list-books__title">List books</h1>

      <div className="app-list-books__items">
        {books.map((book, index) => (
          <Book
            key={index}
            isbn={book.isbn}
            title={book.title}
            cover="https://m.media-amazon.com/images/I/81eO3s9VJ4L.jpg"
          />
        ))}
      </div>
    </>
  );
}
