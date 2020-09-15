/**
 * Book Reducer
 */
import {
  ADD_BOOK,
  LOADING_SUCCEEDED,
  LOADING_IN_PROGRESS,
  LOADING_FAILED,
  GET_BOOKS,
} from "./actions";

/**
 * Loading state
 */
export const isLoading = (state = false, { type }) => {
  switch (type) {
    case LOADING_SUCCEEDED:
      return true;
    case LOADING_IN_PROGRESS:
    case LOADING_FAILED:
      return false;
    default:
      return state;
  }
};

/**
 * Books
 */
export const books = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_BOOK: {
      return [...state, payload];
    }
    case GET_BOOKS: {
      return payload.books;
    }
    default: {
      return state;
    }
  }
};
