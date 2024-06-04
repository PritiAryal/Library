// src/pages/CategoryPage.js
import React from "react";
import CategoryList from "../components/category/CategoryList";
import CreateCategory from "../components/category/CreateCategory";

const CategoryPage = () => {
  return (
    <div>
      <h2>Categories</h2>
      <CreateCategory />
      <CategoryList />
    </div>
  );
};

export default CategoryPage;
