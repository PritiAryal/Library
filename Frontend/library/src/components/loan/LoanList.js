// src/components/LoanList.js
import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

const LoanList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios
      .get("/loan")
      .then((response) => {
        setLoans(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the loans data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Loan List</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan.loanID}>
            Book ID: {loan.bookID} - Member ID: {loan.memberID} - Loan Date:{" "}
            {loan.loanDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoanList;
