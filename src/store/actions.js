/**
 * Actions
 */
export const ADD_BOOK = "ADD_BOOK";

/**
 * Action creators
 */
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
