// src/components/DeleteStaff.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const DeleteStaff = ({ id }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .delete(`/staff/${id}`)
      .then((response) => {
        setMessage("Staff deleted successfully");
      })
      .catch((error) => {
        setMessage("There was an error deleting the staff");
      });
  }, [id]);

  return <div>{message}</div>;
};

export default DeleteStaff;
