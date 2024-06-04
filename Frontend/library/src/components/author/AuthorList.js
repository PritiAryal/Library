// src/components/AuthorList.js
import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("/author")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the author data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Author List</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.authorID}>
            {author.name} - {author.biography}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
