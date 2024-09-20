"use client";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { BookContext } from "@/app/bookContext";
import styles from "./bookDetails.module.css";

export default function Book({ params }) {
  const [bookInfo, setBookInfo] = useState(null);
  const books = useContext(BookContext);

  useEffect(() => {
    const book = books.find((book) => book.id === params.id);
    setBookInfo(book);
  }, []);

  return (
    <div className={styles.bookPage}>
      {bookInfo ? (
        <div className={styles.bookInfo}>
          <img
            src={bookInfo.cover}
            alt="Book Cover"
            className={styles.bookCover}
          />
          <div className={styles.bookDetails}>
            <h1 className={styles.bookTitle}>{bookInfo.title}</h1>
            <p className={styles.bookAuthor}>Autor: {bookInfo.author}</p>
            <p className={styles.bookDescription}>{bookInfo.description}</p>
            <div className={styles.bookReview}>
              <h3>Review:</h3>
              <p>{bookInfo.review}</p>
            </div>
          </div>
        </div>
      ) : (
        <h5>loading...</h5>
      )}
    </div>
  );
}
