// src/components/UpdateCategory.js
import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";
import { useParams } from "react-router-dom";

const UpdateCategory = () => {
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    axios
      .get(`/category/${id}`)
      .then((response) => {
        setCategoryName(response.data.categoryName);
      })
      .catch((error) => {
        console.error("There was an error fetching the category!", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedCategory = { categoryName };
    axios
      .put(`/category/${id}`, updatedCategory)
      .then((response) => {
        console.log("Category updated successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the category!", error);
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
      <button type="submit">Update Category</button>
    </form>
  );
};

export default UpdateCategory;
