/**
 * Actions
 */
export const ADD_BOOK = "ADD_BOOK";
export const GET_BOOKS = "GET_BOOKS";
export const LOADING_FAILED = "LOADING_FAILED";
export const LOADING_SUCCEEDED = "LOADING_SUCCEEDED";
export const LOADING_IN_PROGRESS = "LOADING_IN_PROGRESS";

/**
 * Action creators
 */
export const addBook = (book) => ({ type: ADD_BOOK, payload: { book } });
export const getBooks = (books) => ({ type: GET_BOOKS, payload: { books } });
export const loadingInProgress = () => {
  return { type: LOADING_IN_PROGRESS };
};

export const loadingFailed = () => {
  return { type: LOADING_FAILED };
};

export const loadingSucceeded = (books) => {
  return { type: LOADING_SUCCEEDED, payload: { books } };
};
