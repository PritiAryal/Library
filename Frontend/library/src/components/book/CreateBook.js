// src/components/CreateBook.js
import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");
  const [yearPublished, setYearPublished] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, isbn, publisher, yearPublished };
    axios
      .post("/book", newBook)
      .then((response) => {
        console.log("Book created successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the book!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        ISBN:
        <input
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </label>
      <label>
        Publisher:
        <input
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
      </label>
      <label>
        Year Published:
        <input
          type="number"
          value={yearPublished}
          onChange={(e) => setYearPublished(e.target.value)}
        />
      </label>
      <button type="submit">Create Book</button>
    </form>
  );
};

export default CreateBook;
