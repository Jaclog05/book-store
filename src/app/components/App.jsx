"use client";
import { BookContext, DispatchContext } from "../bookContext";
import useBooks from "../hooks/useBooks";

export const App = ({ children }) => {
  const { books, addBook } = useBooks();
  return (
    <BookContext.Provider value={books}>
      <DispatchContext.Provider value={addBook}>
        <div>{children}</div>
      </DispatchContext.Provider>
    </BookContext.Provider>
  );
};
