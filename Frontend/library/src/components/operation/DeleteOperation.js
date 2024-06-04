// src/components/DeleteOperation.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const DeleteOperation = ({ id }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .delete(`/operation/${id}`)
      .then((response) => {
        setMessage("Operation deleted successfully");
      })
      .catch((error) => {
        setMessage("There was an error deleting the operation");
      });
  }, [id]);

  return <div>{message}</div>;
};

export default DeleteOperation;
