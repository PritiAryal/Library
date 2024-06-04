// src/pages/LoanPage.js
import React from "react";
import LoanList from "../components/loan/LoanList";
import CreateLoan from "../components/loan/CreateLoan";

const LoanPage = () => {
  return (
    <div>
      <h2>Loans</h2>
      <CreateLoan />
      <LoanList />
    </div>
  );
};

export default LoanPage;
