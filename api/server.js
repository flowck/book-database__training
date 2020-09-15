/**
 * Server
 */
const cors = require("cors");
const { v4 } = require("uuid");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/**
 * In memory storage
 */
const books = [
  {
    id: v4(),
    title: "Can't Hurt Me",
    author: "David Goggins",
  },
];

app.post("/books", (req, res) => {
  const hasBook = books.find((book) => book.title === req.body.title);
  let _book = null;

  if (!hasBook) {
    _book = { ...req.body, id: v4() };
    books.push(_book);
    res.json(_book);
  } else {
    res.status(400).json({ message: "Book already registred" });
  }
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find(({ id }) => id === req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

app.listen(4000, () => {
  console.log("API is UP");
});
