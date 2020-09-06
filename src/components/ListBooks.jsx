import React, { useState } from "react";

/**
 * ListBooks
 * @property {array} data - List of books
 * @property {string} name - List name
 * @property {Component}
 */
export default function ({ data, name }) {
  const [books] = useState(data);

  return (
    <>
      <h1>List books</h1>
      {books.map((book, index) => (
        <div key={index}>{book.title}</div>
      ))}
    </>
  );
}
