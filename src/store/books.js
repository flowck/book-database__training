/**
 * Reducer
 */
import { ADD_BOOK } from "./actions";

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_BOOK: {
      return [...state, payload];
    }
    default: {
      return state;
    }
  }
};
