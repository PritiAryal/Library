// src/components/UpdateTransaction.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";
import { useParams } from "react-router-dom";

const UpdateTransaction = () => {
  const { id } = useParams();
  const [loanID, setLoanID] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    axios
      .get(`/transaction/${id}`)
      .then((response) => {
        setLoanID(response.data.loanID);
        setTransactionDate(response.data.transactionDate);
        setType(response.data.type);
      })
      .catch((error) => {
        console.error("There was an error fetching the transaction!", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedTransaction = { loanID, transactionDate, type };
    axios
      .put(`/transaction/${id}`, updatedTransaction)
      .then((response) => {
        console.log("Transaction updated successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the transaction!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Loan ID:
        <input
          type="text"
          value={loanID}
          onChange={(e) => setLoanID(e.target.value)}
        />
      </label>
      <label>
        Transaction Date:
        <input
          type="date"
          value={transactionDate}
          onChange={(e) => setTransactionDate(e.target.value)}
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </label>
      <button type="submit">Update Transaction</button>
    </form>
  );
};

export default UpdateTransaction;
