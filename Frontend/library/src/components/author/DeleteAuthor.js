// src/components/DeleteAuthor.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const DeleteAuthor = ({ id }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .delete(`/author/${id}`)
      .then((response) => {
        setMessage("Author deleted successfully");
      })
      .catch((error) => {
        setMessage("There was an error deleting the author");
      });
  }, [id]);

  return <div>{message}</div>;
};

export default DeleteAuthor;
