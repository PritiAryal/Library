// src/components/DeleteMember.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const DeleteMember = ({ id }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .delete(`/member/${id}`)
      .then((response) => {
        setMessage("Member deleted successfully");
      })
      .catch((error) => {
        setMessage("There was an error deleting the member");
      });
  }, [id]);

  return <div>{message}</div>;
};

export default DeleteMember;
