// src/pages/TransactionPage.js
import React from "react";
import TransactionList from "../components/transaction/TransactionList";
import CreateTransaction from "../components/transaction/CreateTransaction";

const TransactionPage = () => {
  return (
    <div>
      <h2>Transactions</h2>
      <CreateTransaction />
      <TransactionList />
    </div>
  );
};

export default TransactionPage;
