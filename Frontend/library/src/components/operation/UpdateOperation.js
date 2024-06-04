// src/components/UpdateOperation.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";
import { useParams } from "react-router-dom";

const UpdateOperation = () => {
  const { id } = useParams();
  const [bookID, setBookID] = useState("");
  const [staffID, setStaffID] = useState("");
  const [operationType, setOperationType] = useState("");
  const [performedDate, setPerformedDate] = useState("");

  useEffect(() => {
    axios
      .get(`/operation/${id}`)
      .then((response) => {
        setBookID(response.data.bookID);
        setStaffID(response.data.staffID);
        setOperationType(response.data.operationType);
        setPerformedDate(response.data.performedDate);
      })
      .catch((error) => {
        console.error("There was an error fetching the operation!", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedOperation = { bookID, staffID, operationType, performedDate };
    axios
      .put(`/operation/${id}`, updatedOperation)
      .then((response) => {
        console.log("Operation updated successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the operation!", error);
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
      <button type="submit">Update Operation</button>
    </form>
  );
};

export default UpdateOperation;
