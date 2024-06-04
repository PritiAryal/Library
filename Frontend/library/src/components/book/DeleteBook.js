// src/components/DeleteBook.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const DeleteBook = ({ id }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .delete(`/book/${id}`)
      .then((response) => {
        setMessage("Book deleted successfully");
      })
      .catch((error) => {
        setMessage("There was an error deleting the book");
      });
  }, [id]);

  return <div>{message}</div>;
};

export default DeleteBook;
