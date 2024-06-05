// // src/components/UpdateBook.js
// import React, { useState, useEffect } from "react";
// import axios from "../../api/axiosConfig";
// import { useParams } from "react-router-dom";

// const UpdateBook = () => {
//   const { id } = useParams();
//   const [title, setTitle] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [publisher, setPublisher] = useState("");
//   const [yearPublished, setYearPublished] = useState("");

//   useEffect(() => {
//     axios
//       .get(`/book/${id}`)
//       .then((response) => {
//         setTitle(response.data.title);
//         setIsbn(response.data.isbn);
//         setPublisher(response.data.publisher);
//         setYearPublished(response.data.yearPublished);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the book!", error);
//       });
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const updatedBook = { title, isbn, publisher, yearPublished };
//     axios
//       .put(`/book/${id}`, updatedBook)
//       .then((response) => {
//         console.log("Book updated successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error updating the book!", error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </label>
//       <label>
//         ISBN:
//         <input
//           type="text"
//           value={isbn}
//           onChange={(e) => setIsbn(e.target.value)}
//         />
//       </label>
//       <label>
//         Publisher:
//         <input
//           type="text"
//           value={publisher}
//           onChange={(e) => setPublisher(e.target.value)}
//         />
//       </label>
//       <label>
//         Year Published:
//         <input
//           type="number"
//           value={yearPublished}
//           onChange={(e) => setYearPublished(e.target.value)}
//         />
//       </label>
//       <button type="submit">Update Book</button>
//     </form>
//   );
// };

// export default UpdateBook;

import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";
import { useParams } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [authorID, setAuthorID] = useState("");
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get("/categories").then((response) => {
      setCategories(response.data);
    });

    axios.get("/authors").then((response) => {
      setAuthors(response.data);
    });

    axios
      .get(`/book/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setIsbn(response.data.isbn);
        setPublisher(response.data.publisher);
        setYearPublished(response.data.yearPublished);
        setCategoryID(response.data.category.categoryID);
        setAuthorID(response.data.author.authorID);
      })
      .catch((error) => {
        console.error("There was an error fetching the book!", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBook = {
      title,
      isbn,
      publisher,
      yearPublished,
      categoryID,
      authorID,
    };
    axios
      .put(`/book/${id}`, updatedBook)
      .then((response) => {
        console.log("Book updated successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the book!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        ISBN:
        <input
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </label>
      <label>
        Publisher:
        <input
          type="text"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
      </label>
      <label>
        Year Published:
        <input
          type="number"
          value={yearPublished}
          onChange={(e) => setYearPublished(e.target.value)}
        />
      </label>
      <label>
        Category:
        <select
          value={categoryID}
          onChange={(e) => setCategoryID(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.categoryID} value={category.categoryID}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Author:
        <select value={authorID} onChange={(e) => setAuthorID(e.target.value)}>
          <option value="">Select Author</option>
          {authors.map((author) => (
            <option key={author.authorID} value={author.authorID}>
              {author.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Update Book</button>
    </form>
  );
};

export default UpdateBook;
