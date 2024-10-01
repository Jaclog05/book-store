"use client";
import { useContext } from "react";
import { DispatchContext } from "../bookContext";
import { initialBookState } from "../data/initialBookState";
import useForm from "../hooks/useForm";
import styles from "./Create.module.css";

export default function Create() {
  const dispatch = useContext(DispatchContext);
  const {
    values: bookInfo,
    handleChange,
    handleSubmit,
    handleOnChangeFile,
  } = useForm(initialBookState, dispatch);

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="title"
          onChange={handleChange}
          value={bookInfo.title}
          type="text"
          placeholder="Title"
          className={styles.input}
        />
        <input
          name="author"
          onChange={handleChange}
          value={bookInfo.author}
          type="text"
          placeholder="Author"
          className={styles.input}
        />
        <div className={styles.container}>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          { bookInfo.cover && <img className={styles.img} src={bookInfo.cover} width="200" /> }
        </div>
        <input
          name="description"
          onChange={handleChange}
          value={bookInfo.description}
          type="text"
          placeholder="What is this book about"
          className={styles.input}
        />
        <input
          name="review"
          onChange={handleChange}
          value={bookInfo.review}
          type="text"
          placeholder="Tell us what you think about this book"
          className={styles.input}
        />
        <input type="submit" value="Add Book" className={styles.submitButton} />
      </form>
    </div>
  );
}
