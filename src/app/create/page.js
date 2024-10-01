"use client";
import { useState, useContext } from "react";
import { DispatchContext } from "../bookContext";
import { initialBookState } from "../data/initialBookState";
import styles from "./Create.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Create() {
  const dispatch = useContext(DispatchContext);

  const [bookInfo, setBookInfo] = useState(initialBookState);

  function handleChange(e) {
    const { name, value } = e.target;
    setBookInfo((prevBookInfo) => ({
      ...prevBookInfo,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!bookInfo.title || !bookInfo.author || !bookInfo.cover) {
      alert("Title, author and cover fields must be filled out");
      return;
    }
    dispatch({
      ...bookInfo,
      type: "ADD_BOOK",
      id: uuidv4(),
    });
    setBookInfo(initialBookState);
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    if (file && file.type.startsWith("image/")) {
      var reader = new FileReader();
      reader.onloadend = function () {
        setBookInfo((prevBookInfo) => ({
          ...prevBookInfo,
          cover: reader.result.toString(),
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  }

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
          {bookInfo.cover && <img className={styles.img} src={bookInfo.cover} width="200" />}
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
