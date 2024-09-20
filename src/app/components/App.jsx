"use client";
import { useReducer } from "react";
import booksReducer from "../reducers/booksReducer";
import { BookContext, DispatchContext } from "../bookContext";
import { initialBooks } from "../data/initialBooks";

export const App = ({ children }) => {
  const [books, dispatch] = useReducer(booksReducer, initialBooks);

  return (
    <BookContext.Provider value={books}>
      <DispatchContext.Provider value={dispatch}>
        <div>{children}</div>
      </DispatchContext.Provider>
    </BookContext.Provider>
  );
};
