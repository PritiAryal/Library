// src/components/CreateTransaction.js
import React, { useState } from "react";
import axios from "../../api/axiosConfig.js";
//import axios from "axios";

const CreateTransaction = () => {
  const [loanID, setLoanID] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = { loanID, transactionDate, type };
    axios
      .post("/transaction", newTransaction)
      .then((response) => {
        console.log("Transaction created successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the transaction!", error);
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
      <button type="submit">Create Transaction</button>
    </form>
  );
};

export default CreateTransaction;
