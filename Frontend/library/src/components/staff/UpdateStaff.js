// src/components/UpdateStaff.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";
import { useParams } from "react-router-dom";

const UpdateStaff = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`/staff/${id}`)
      .then((response) => {
        setName(response.data.staffName);
        setEmail(response.data.staffEmail);
      })
      .catch((error) => {
        console.error("There was an error fetching the staff!", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedStaff = { staffName: name, staffEmail: email };
    axios
      .put(`/staff/${id}`, updatedStaff)
      .then((response) => {
        console.log("Staff updated successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the staff!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Update Staff</button>
    </form>
  );
};

export default UpdateStaff;
