// src/components/CreateStaff.js
import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const CreateStaff = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStaff = {
      staffName: name,
      staffUserName: username,
      staffEmail: email,
      password: password,
      staffPhone: phone,
    };
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
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <button type="submit">Create Staff</button>
    </form>
  );
};

export default CreateStaff;
