// src/components/DeleteLoan.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const DeleteLoan = ({ id }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .delete(`/loan/${id}`)
      .then((response) => {
        setMessage("Loan deleted successfully");
      })
      .catch((error) => {
        setMessage("There was an error deleting the loan");
      });
  }, [id]);

  return <div>{message}</div>;
};

export default DeleteLoan;
