// src/components/CreateLoan.js
import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const CreateLoan = () => {
  const [bookID, setBookID] = useState("");
  const [memberID, setMemberID] = useState("");
  const [loanDate, setLoanDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLoan = { bookID, memberID, loanDate, dueDate, returnDate };
    axios
      .post("/loan", newLoan)
      .then((response) => {
        console.log("Loan created successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the loan!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Book ID:
        <input
          type="text"
          value={bookID}
          onChange={(e) => setBookID(e.target.value)}
        />
      </label>
      <label>
        Member ID:
        <input
          type="text"
          value={memberID}
          onChange={(e) => setMemberID(e.target.value)}
        />
      </label>
      <label>
        Loan Date:
        <input
          type="date"
          value={loanDate}
          onChange={(e) => setLoanDate(e.target.value)}
        />
      </label>
      <label>
        Due Date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </label>
      <label>
        Return Date:
        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </label>
      <button type="submit">Create Loan</button>
    </form>
  );
};

export default CreateLoan;
