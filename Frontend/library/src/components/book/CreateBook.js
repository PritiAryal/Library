// // src/components/CreateBook.js
// import React, { useState } from "react";
// import axios from "../../api/axiosConfig";

// const CreateBook = () => {
//   const [title, setTitle] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [publisher, setPublisher] = useState("");
//   const [yearPublished, setYearPublished] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newBook = { title, isbn, publisher, yearPublished };
//     axios
//       .post("/book", newBook)
//       .then((response) => {
//         console.log("Book created successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error creating the book!", error);
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
//       <button type="submit">Create Book</button>
//     </form>
//   );
// };

// export default CreateBook;

import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [authorID, setAuthorID] = useState("");
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get("/category").then((response) => {
      setCategories(response.data);
    });

    axios.get("/author").then((response) => {
      setAuthors(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title,
      isbn,
      publisher,
      yearPublished,
    };
    axios
      .post(`/book?categoryID=${categoryID}&authorID=${authorID}`, newBook)
      .then((response) => {
        console.log("Book created successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the book!", error);
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
          type="number"
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
              {category.categoryName}
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
      <button type="submit" onClick={refreshPage}>
        Create Book
      </button>
    </form>
  );
};
function refreshPage() {
  window.location.reload();
}

export default CreateBook;

// import React, { useState } from "react";
// import axios from "../../api/axiosConfig";

// const CreateBook = () => {
//   const [title, setTitle] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [publisher, setPublisher] = useState("");
//   const [yearPublished, setYearPublished] = useState("");
//   const [categoryName, setCategoryName] = useState("");
//   const [authorName, setAuthorName] = useState("");
//   //const [authorBiography, setAuthorBiography] = useState(""); // Assuming biography is required

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newBook = {
//       title,
//       ISBN: isbn,
//       publisher,
//       yearPublished,
//       author: {
//         name: authorName, //,
//         //biography: authorBiography // Include biography
//       },
//       category: {
//         categoryName,
//       },
//     };
//     axios
//       .post("/book", newBook)
//       .then((response) => {
//         console.log("Book created successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error creating the book!", error);
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
//       <label>
//         Category Name:
//         <input
//           type="text"
//           value={categoryName}
//           onChange={(e) => setCategoryName(e.target.value)}
//         />
//       </label>
//       <label>
//         Author Name:
//         <input
//           type="text"
//           value={authorName}
//           onChange={(e) => setAuthorName(e.target.value)}
//         />
//       </label>
//       {/* <label>
//         Author Biography:
//         <textarea
//           value={authorBiography}
//           onChange={(e) => setAuthorBiography(e.target.value)}
//         />
//       </label> */}
//       <button type="submit">Create Book</button>
//     </form>
//   );
// };

// export default CreateBook;
