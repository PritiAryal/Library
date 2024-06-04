// src/pages/AuthorPage.js
import React from "react";
import AuthorList from "../components/author/AuthorList";
import CreateAuthor from "../components/author/CreateAuthor";

const AuthorPage = () => {
  return (
    <div>
      <h2>Authors</h2>
      <CreateAuthor />
      <AuthorList />
    </div>
  );
};

export default AuthorPage;
