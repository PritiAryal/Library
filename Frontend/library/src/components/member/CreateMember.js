// src/components/CreateMember.js
import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const CreateMember = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMember = { name, address, email, phone };
    axios
      .post("/member", newMember)
      .then((response) => {
        console.log("Member created successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the member!", error);
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
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <button type="submit">Create Member</button>
    </form>
  );
};

export default CreateMember;
