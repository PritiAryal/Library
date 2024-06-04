// src/components/UpdateMember.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";
import { useParams } from "react-router-dom";

const UpdateMember = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios
      .get(`/member/${id}`)
      .then((response) => {
        setName(response.data.name);
        setAddress(response.data.address);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      })
      .catch((error) => {
        console.error("There was an error fetching the member!", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedMember = { name, address, email, phone };
    axios
      .put(`/member/${id}`, updatedMember)
      .then((response) => {
        console.log("Member updated successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the member!", error);
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
      <button type="submit">Update Member</button>
    </form>
  );
};

export default UpdateMember;
