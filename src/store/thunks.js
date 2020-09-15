/**
 * Books thunks
 */
import axios from "axios";
import { addBook, getBooks } from "./actions";

const API_BASE = "http://localhost:4000";

/**
 * addBookRequest
 */
export const addBookRequest = (book) => (dispatch) => {
  try {
    /**
     * Update state
     */
    dispatch(addBook(book));
  } catch (error) {
    console.log(error);
  }
};

export const getBooksRequest = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE}/books`);

    dispatch(getBooks(data));
  } catch (error) {
    console.log(error);
  }
};
