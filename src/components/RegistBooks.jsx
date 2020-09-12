/**
 * Regist Books
 */
import Input from "./Input.jsx";
import { connect } from "react-redux";
import React, { useState } from "react";
import { addBook } from "../store/actions";

const RegistBooks = (props) => {
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
};

/**
 * Map dispatch to props
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onAddingBook: (book) => addBook(book),
  };
};

export default connect(null, mapDispatchToProps)(RegistBooks);
