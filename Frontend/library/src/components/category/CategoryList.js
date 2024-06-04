// src/components/CategoryList.js
import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the category data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Category List</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.categoryID}>{category.categoryName}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
