// src/components/DeleteCategory.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const DeleteCategory = ({ id }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .delete(`/category/${id}`)
      .then((response) => {
        setMessage("Category deleted successfully");
      })
      .catch((error) => {
        setMessage("There was an error deleting the category");
      });
  }, [id]);

  return <div>{message}</div>;
};

export default DeleteCategory;
