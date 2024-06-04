// src/components/BookList.js
import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the book!", error);
      });
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.bookID}>
            {book.title} - {book.publisher}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
