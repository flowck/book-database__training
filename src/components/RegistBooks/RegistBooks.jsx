/**
 * Regist Books
 */
import Input from "../Input.jsx";
import { connect } from "react-redux";
import React, { useState } from "react";
import { addBook } from "../../store/actions";
import styled from "styled-components";

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

const ContainerContent = styled.div`
  width: 400px;
  padding: 30px;
  border-radius: 3px;
  background-color: #fff;
`;

const RegistBooks = ({ saveBook, onCloseModal }) => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  return (
    <Container>
      <ContainerContent>
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
                saveBook(title, isbn, publicationDate, description)
              }
            >
              Save
            </button>
            <button onClick={onCloseModal}>Close</button>
          </div>
        </div>
      </ContainerContent>
    </Container>
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
