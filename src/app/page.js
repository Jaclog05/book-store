"use client";

import { useContext } from "react";
import { BookContext } from "./bookContext";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const books = useContext(BookContext);
  return (
    <div className={styles.wrapper}>
      {books.map((book) => {
        return (
          <Link
            href={`/book/${book.id}`}
            className={styles.bookCard}
            key={book.id}
          >
            <img
              src={book.cover}
              alt="Book Cover"
              className={styles.bookCover}
            />
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p className={styles.bookAuthor}>{book.author}</p>
          </Link>
        );
      })}
    </div>
  );
}
