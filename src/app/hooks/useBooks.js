import { useReducer } from "react";
import booksReducer from "../reducers/booksReducer";
import { initialBooks } from "../data/initialBooks";

export default function useBooks() {
  const [books, dispatch] = useReducer(booksReducer, initialBooks);

  const addBook = (bookInfo) => {
    dispatch({
      type: "ADD_BOOK",
      ...bookInfo,
    });
  };

  return {
    books,
    addBook,
  };
}
