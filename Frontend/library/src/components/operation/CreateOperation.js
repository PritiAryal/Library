// src/components/CreateOperation.js
import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const CreateOperation = () => {
  const [bookID, setBookID] = useState("");
  const [staffID, setStaffID] = useState("");
  const [operationType, setOperationType] = useState("");
  const [performedDate, setPerformedDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOperation = { bookID, staffID, operationType, performedDate };
    axios
      .post("/operation", newOperation)
      .then((response) => {
        console.log("Operation created successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the operation!", error);
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
        Staff ID:
        <input
          type="text"
          value={staffID}
          onChange={(e) => setStaffID(e.target.value)}
        />
      </label>
      <label>
        Operation Type:
        <input
          type="text"
          value={operationType}
          onChange={(e) => setOperationType(e.target.value)}
        />
      </label>
      <label>
        Performed Date:
        <input
          type="date"
          value={performedDate}
          onChange={(e) => setPerformedDate(e.target.value)}
        />
      </label>
      <button type="submit">Create Operation</button>
    </form>
  );
};

export default CreateOperation;
