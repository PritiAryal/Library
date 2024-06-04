// src/components/CreateAuthor.js
import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const CreateAuthor = () => {
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAuthor = { name, biography };
    axios
      .post("/author", newAuthor)
      .then((response) => {
        console.log("Author created successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the author!", error);
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
        Biography:
        <input
          type="text"
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />
      </label>
      <button type="submit">Create Author</button>
    </form>
  );
};

export default CreateAuthor;
