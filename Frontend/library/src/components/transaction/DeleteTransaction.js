// src/components/DeleteTransaction.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const DeleteTransaction = ({ id }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .delete(`/transaction/${id}`)
      .then((response) => {
        setMessage("Transaction deleted successfully");
      })
      .catch((error) => {
        setMessage("There was an error deleting the transaction");
      });
  }, [id]);

  return <div>{message}</div>;
};

export default DeleteTransaction;
