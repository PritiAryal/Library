// // // src/components/UpdateBook.js
// // import React, { useState, useEffect } from "react";
// // import axios from "../../api/axiosConfig";
// // import { useParams } from "react-router-dom";

// // const UpdateBook = () => {
// //   const { id } = useParams();
// //   const [title, setTitle] = useState("");
// //   const [isbn, setIsbn] = useState("");
// //   const [publisher, setPublisher] = useState("");
// //   const [yearPublished, setYearPublished] = useState("");

// //   useEffect(() => {
// //     axios
// //       .get(`/book/${id}`)
// //       .then((response) => {
// //         setTitle(response.data.title);
// //         setIsbn(response.data.isbn);
// //         setPublisher(response.data.publisher);
// //         setYearPublished(response.data.yearPublished);
// //       })
// //       .catch((error) => {
// //         console.error("There was an error fetching the book!", error);
// //       });
// //   }, [id]);

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     const updatedBook = { title, isbn, publisher, yearPublished };
// //     axios
// //       .put(`/book/${id}`, updatedBook)
// //       .then((response) => {
// //         console.log("Book updated successfully", response.data);
// //       })
// //       .catch((error) => {
// //         console.error("There was an error updating the book!", error);
// //       });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label>
// //         Title:
// //         <input
// //           type="text"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //         />
// //       </label>
// //       <label>
// //         ISBN:
// //         <input
// //           type="text"
// //           value={isbn}
// //           onChange={(e) => setIsbn(e.target.value)}
// //         />
// //       </label>
// //       <label>
// //         Publisher:
// //         <input
// //           type="text"
// //           value={publisher}
// //           onChange={(e) => setPublisher(e.target.value)}
// //         />
// //       </label>
// //       <label>
// //         Year Published:
// //         <input
// //           type="number"
// //           value={yearPublished}
// //           onChange={(e) => setYearPublished(e.target.value)}
// //         />
// //       </label>
// //       <button type="submit">Update Book</button>
// //     </form>
// //   );
// // };

// // export default UpdateBook;

// import React, { useState, useEffect } from "react";
// import axios from "../../api/axiosConfig";
// import { useParams } from "react-router-dom";

// const UpdateBook = () => {
//   const { id } = useParams();
//   const [title, setTitle] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [publisher, setPublisher] = useState("");
//   const [yearPublished, setYearPublished] = useState("");
//   const [categoryID, setCategoryID] = useState("");
//   const [authorID, setAuthorID] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [authors, setAuthors] = useState([]);

//   useEffect(() => {
//     axios.get("/categories").then((response) => {
//       setCategories(response.data);
//     });

//     axios.get("/authors").then((response) => {
//       setAuthors(response.data);
//     });

//     axios
//       .get(`/book/${id}`)
//       .then((response) => {
//         setTitle(response.data.title);
//         setIsbn(response.data.isbn);
//         setPublisher(response.data.publisher);
//         setYearPublished(response.data.yearPublished);
//         setCategoryID(response.data.category.categoryID);
//         setAuthorID(response.data.author.authorID);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the book!", error);
//       });
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const updatedBook = {
//       title,
//       isbn,
//       publisher,
//       yearPublished,
//       categoryID,
//       authorID,
//     };
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
//       <label>
//         Category:
//         <select
//           value={categoryID}
//           onChange={(e) => setCategoryID(e.target.value)}
//         >
//           <option value="">Select Category</option>
//           {categories.map((category) => (
//             <option key={category.categoryID} value={category.categoryID}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </label>
//       <label>
//         Author:
//         <select value={authorID} onChange={(e) => setAuthorID(e.target.value)}>
//           <option value="">Select Author</option>
//           {authors.map((author) => (
//             <option key={author.authorID} value={author.authorID}>
//               {author.name}
//             </option>
//           ))}
//         </select>
//       </label>
//       <button type="submit">Update Book</button>
//     </form>
//   );
// };

// export default UpdateBook;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import api from "../../api/axiosConfig";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [book, setBook] = useState(null);
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [authorID, setAuthorID] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get(`/book/${id}`)
      .then((response) => {
        const book = response.data;
        setBook(book);
        setTitle(book.title);
        setIsbn(book.isbn);
        setPublisher(book.publisher);
        setYearPublished(book.yearPublished);
        setAuthorID(book.author.id);
        setCategoryID(book.category.id);
      })
      .catch((error) => console.error("Error fetching book:", error));

    api
      .get("/author")
      .then((response) => setAuthors(response.data))
      .catch((error) => console.error("Error fetching authors:", error));

    api
      .get("/category")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedBook = {
      title,
      isbn,
      publisher,
      yearPublished,
    };

    const staffID = getStaffIdFromToken(); // Function to extract staff ID from JWT

    try {
      await api.put(`/book/${id}`, updatedBook, {
        params: {
          authorID,
          categoryID,
          staffID,
          operationType: "Update",
        },
      });
      // Handle success - redirect or show message
      navigate("/books"); // Use navigate instead of history.push
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const getStaffIdFromToken = () => {
    // Extract and return the staff ID from JWT token
    const token = localStorage.getItem("token");
    if (!token) return null;
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.id; // Assuming the token contains the staff ID
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Publisher"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Year Published"
          value={yearPublished}
          onChange={(e) => setYearPublished(e.target.value)}
          required
        />
        <select
          value={authorID}
          onChange={(e) => setAuthorID(e.target.value)}
          required
        >
          <option value="">Select Author</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <select
          value={categoryID}
          onChange={(e) => setCategoryID(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
