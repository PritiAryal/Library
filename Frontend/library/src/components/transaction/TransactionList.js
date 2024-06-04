// src/components/TransactionList.js
import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("/transaction")
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the transactions data!",
          error
        );
      });
  }, []);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.transactionID}>
            Loan ID: {transaction.loanID} - Transaction Date:{" "}
            {transaction.transactionDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
