// src/components/CreateCategory.js
import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategory = { categoryName };
    axios
      .post("/category", newCategory)
      .then((response) => {
        console.log("Category created successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the category!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category Name:
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </label>
      <button type="submit">Create Category</button>
    </form>
  );
};

export default CreateCategory;
