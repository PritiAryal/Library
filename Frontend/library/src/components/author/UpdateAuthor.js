// src/components/UpdateAuthor.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";
import { useParams } from "react-router-dom";

const UpdateAuthor = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");

  useEffect(() => {
    axios
      .get(`/author/${id}`)
      .then((response) => {
        setName(response.data.name);
        setBiography(response.data.biography);
      })
      .catch((error) => {
        console.error("There was an error fetching the author!", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedAuthor = { name, biography };
    axios
      .put(`/author/${id}`, updatedAuthor)
      .then((response) => {
        console.log("Author updated successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the author!", error);
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
      <button type="submit">Update Author</button>
    </form>
  );
};

export default UpdateAuthor;
