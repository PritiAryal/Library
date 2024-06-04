// src/components/UpdateLoan.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";
import { useParams } from "react-router-dom";

const UpdateLoan = () => {
  const { id } = useParams();
  const [bookID, setBookID] = useState("");
  const [memberID, setMemberID] = useState("");
  const [loanDate, setLoanDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    axios
      .get(`/loan/${id}`)
      .then((response) => {
        setBookID(response.data.bookID);
        setMemberID(response.data.memberID);
        setLoanDate(response.data.loanDate);
        setDueDate(response.data.dueDate);
        setReturnDate(response.data.returnDate);
      })
      .catch((error) => {
        console.error("There was an error fetching the loan!", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedLoan = { bookID, memberID, loanDate, dueDate, returnDate };
    axios
      .put(`/loan/${id}`, updatedLoan)
      .then((response) => {
        console.log("Loan updated successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the loan!", error);
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
      <button type="submit">Update Loan</button>
    </form>
  );
};

export default UpdateLoan;
