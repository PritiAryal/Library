// src/pages/BookPage.js
import React from "react";
import BookList from "../components/book/BookList";
import CreateBook from "../components/book/CreateBook";

const BookPage = () => {
  return (
    <div>
      <h2>Books</h2>
      <CreateBook />
      <BookList />
    </div>
  );
};

export default BookPage;
