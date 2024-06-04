// src/components/CreateStaff.js
import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const CreateStaff = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStaff = { staffName: name, staffEmail: email };
    axios
      .post("/staff", newStaff)
      .then((response) => {
        console.log("Staff created successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the staff!", error);
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
      <button type="submit">Create Staff</button>
    </form>
  );
};

export default CreateStaff;
