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

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
// import api from "../../api/axiosConfig";

// const UpdateBook = () => {
//   const { id } = useParams();
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory
//   const [book, setBook] = useState(null);
//   const [title, setTitle] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [publisher, setPublisher] = useState("");
//   const [yearPublished, setYearPublished] = useState("");
//   const [authorID, setAuthorID] = useState("");
//   const [categoryID, setCategoryID] = useState("");
//   const [authors, setAuthors] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     api
//       .get(`/book/${id}`)
//       .then((response) => {
//         const book = response.data;
//         setBook(book);
//         setTitle(book.title);
//         setIsbn(book.isbn);
//         setPublisher(book.publisher);
//         setYearPublished(book.yearPublished);
//         setAuthorID(book.author.id);
//         setCategoryID(book.category.id);
//       })
//       .catch((error) => console.error("Error fetching book:", error));

//     api
//       .get("/author")
//       .then((response) => setAuthors(response.data))
//       .catch((error) => console.error("Error fetching authors:", error));

//     api
//       .get("/category")
//       .then((response) => setCategories(response.data))
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, [id]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const updatedBook = {
//       title,
//       isbn,
//       publisher,
//       yearPublished,
//     };

//     const staffID = getStaffIdFromToken(); // Function to extract staff ID from JWT

//     try {
//       await api.put(`/book/${id}`, updatedBook, {
//         params: {
//           authorID,
//           categoryID,
//           staffID,
//           operationType: "Update",
//         },
//       });
//       // Handle success - redirect or show message
//       navigate("/books"); // Use navigate instead of history.push
//     } catch (error) {
//       console.error("Error updating book:", error);
//     }
//   };

//   const getStaffIdFromToken = () => {
//     // Extract and return the staff ID from JWT token
//     const token = localStorage.getItem("token");
//     if (!token) return null;
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     return payload.id; // Assuming the token contains the staff ID
//   };

//   if (!book) return <div>Loading...</div>;

//   return (
//     <div>
//       <h2>Update Book</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="ISBN"
//           value={isbn}
//           onChange={(e) => setIsbn(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Publisher"
//           value={publisher}
//           onChange={(e) => setPublisher(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Year Published"
//           value={yearPublished}
//           onChange={(e) => setYearPublished(e.target.value)}
//           required
//         />
//         <select
//           value={authorID}
//           onChange={(e) => setAuthorID(e.target.value)}
//           required
//         >
//           <option value="">Select Author</option>
//           {authors.map((author) => (
//             <option key={author.id} value={author.id}>
//               {author.name}
//             </option>
//           ))}
//         </select>
//         <select
//           value={categoryID}
//           onChange={(e) => setCategoryID(e.target.value)}
//           required
//         >
//           <option value="">Select Category</option>
//           {categories.map((category) => (
//             <option key={category.id} value={category.id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//         <button type="submit">Update Book</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateBook;

// import React, { useState } from "react";
// import api from "../../api/axiosConfig";
// import Modal from "react-modal";
// import "../../index.css";

// const UpdateBook = ({
//   isOpen,
//   onRequestClose,
//   book,
//   onUpdateSuccess,
//   authors = [],
//   categories = [],
//   staffID,
// }) => {
//   const [title, setTitle] = useState(book.title);
//   const [isbn, setIsbn] = useState(book.isbn);
//   const [publisher, setPublisher] = useState(book.publisher);
//   const [yearPublished, setYearPublished] = useState(book.yearPublished);
//   const [authorID, setAuthorID] = useState(book.authorID);
//   const [categoryID, setCategoryID] = useState(book.categoryID);

//   const handleUpdate = async () => {
//     try {
//       const updatedBook = {
//         title,
//         isbn,
//         publisher,
//         yearPublished,
//         authorID,
//         categoryID,
//         staffID,
//       };
//       console.log("Updated book:", book.bookID);
//       await api.put(
//         `/book/${book.bookID}?authorID=${authorId}&categoryID=${categoryId}&staffID=${staffId}`,
//         updatedBook
//       );
//       onUpdateSuccess(updatedBook); // Notify parent about successful update
//       onRequestClose(); // Close modal after update
//     } catch (error) {
//       console.error("Error updating book:", error);
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Update Book"
//       className="fixed inset-0 flex items-center justify-center overflow-auto"
//     >
//       <div className="bg-white p-6 max-w-md w-full mx-auto rounded-lg shadow-lg relative">
//         <div className="flex items-center justify-between mb-4">
//           <h4 className="text-lg font-semibold">Update Book</h4>
//           <button
//             onClick={onRequestClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//         </div>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="title" className="block font-semibold mb-1">
//               Title:
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="isbn" className="block font-semibold mb-1">
//               ISBN:
//             </label>
//             <input
//               type="text"
//               id="isbn"
//               value={isbn}
//               onChange={(e) => setIsbn(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="publisher" className="block font-semibold mb-1">
//               Publisher:
//             </label>
//             <input
//               type="text"
//               id="publisher"
//               value={publisher}
//               onChange={(e) => setPublisher(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="yearPublished" className="block font-semibold mb-1">
//               Published Year:
//             </label>
//             <input
//               type="text"
//               id="yearPublished"
//               value={yearPublished}
//               onChange={(e) => setYearPublished(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="author" className="block font-semibold mb-1">
//               Author:
//             </label>
//             <select
//               id="author"
//               value={authorID}
//               onChange={(e) => setAuthorID(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             >
//               {authors.map((author) => (
//                 <option key={author.authorID} value={author.authorID}>
//                   {author.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="category" className="block font-semibold mb-1">
//               Category:
//             </label>
//             <select
//               id="category"
//               value={categoryID}
//               onChange={(e) => setCategoryID(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             >
//               {categories.map((category) => (
//                 <option key={category.categoryID} value={category.categoryID}>
//                   {category.categoryName}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleUpdate}
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             Update
//           </button>
//         </form>
//       </div>
//     </Modal>
//   );
// };

// export default UpdateBook;

// <Modal
//   isOpen={isOpen}
//   onRequestClose={onRequestClose}
//   contentLabel="Update Book"
// >
//   <h4>Update Book</h4>
//   <form>
//     <div>
//       <label>Title:</label>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//     </div>
//     <div>
//       <label>ISBN:</label>
//       <input
//         type="text"
//         value={isbn}
//         onChange={(e) => setIsbn(e.target.value)}
//       />
//     </div>
//     <div>
//       <label>Publisher:</label>
//       <input
//         type="text"
//         value={publisher}
//         onChange={(e) => setPublisher(e.target.value)}
//       />
//     </div>
//     <div>
//       <label>Author:</label>
//       <select
//         value={authorID}
//         onChange={(e) => setAuthorID(e.target.value)}
//       >
//         {authors.map((author) => (
//           <option key={author.authorID} value={author.authorID}>
//             {author.name}
//           </option>
//         ))}
//       </select>
//     </div>
//     <div>
//       <label>Category:</label>
//       <select
//         value={categoryID}
//         onChange={(e) => setCategoryID(e.target.value)}
//       >
//         {categories.map((category) => (
//           <option key={category.categoryID} value={category.categoryID}>
//             {category.categoryName}
//           </option>
//         ))}
//       </select>
//     </div>
//     <button type="button" onClick={handleUpdate}>
//       Update
//     </button>
//   </form>
// </Modal>

// import React, { useState } from "react";
// import api from "../../api/axiosConfig";
// import Modal from "react-modal";
// import "../../index.css";

// const UpdateBook = ({
//   isOpen,
//   onRequestClose,
//   book,
//   onUpdateSuccess,
//   authors = [],
//   categories = [],
//   staffID,
// }) => {
//   const [title, setTitle] = useState(book.title);
//   const [isbn, setIsbn] = useState(book.isbn);
//   const [publisher, setPublisher] = useState(book.publisher);
//   const [yearPublished, setYearPublished] = useState(book.yearPublished);
//   const [authorID, setAuthorID] = useState(book.authorID);
//   const [categoryID, setCategoryID] = useState(book.categoryID);

//   const handleUpdate = async () => {
//     try {
//       const updatedBook = {
//         title,
//         isbn,
//         publisher,
//         yearPublished,
//         authorID,
//         categoryID,
//         staffID,
//       };
//       console.log("Updated book:", book.bookID);
//       await api.put(
//         `/book/${book.bookID}?authorID=${authorID}&categoryID=${categoryID}&staffID=${staffID}`,
//         updatedBook
//       );
//       onUpdateSuccess(updatedBook); // Notify parent about successful update
//       onRequestClose(); // Close modal after update
//     } catch (error) {
//       console.error("Error updating book:", error);
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Update Book"
//       className="fixed inset-0 flex items-center justify-center overflow-auto"
//     >
//       <div className="bg-white p-6 max-w-md w-full mx-auto rounded-lg shadow-lg relative">
//         <div className="flex items-center justify-between mb-4">
//           <h4 className="text-lg font-semibold">Update Book</h4>
//           <button
//             onClick={onRequestClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//         </div>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="title" className="block font-semibold mb-1">
//               Title:
//             </label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="isbn" className="block font-semibold mb-1">
//               ISBN:
//             </label>
//             <input
//               type="number"
//               id="isbn"
//               value={isbn}
//               onChange={(e) => setIsbn(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="publisher" className="block font-semibold mb-1">
//               Publisher:
//             </label>
//             <input
//               type="text"
//               id="publisher"
//               value={publisher}
//               onChange={(e) => setPublisher(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="yearPublished" className="block font-semibold mb-1">
//               Published Year:
//             </label>
//             <input
//               type="number"
//               id="yearPublished"
//               value={yearPublished}
//               onChange={(e) => setYearPublished(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="author" className="block font-semibold mb-1">
//               Author:
//             </label>
//             <select
//               id="author"
//               value={authorID}
//               onChange={(e) => setAuthorID(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             >
//               {authors.map((author) => (
//                 <option key={author.authorID} value={author.authorID}>
//                   {author.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="category" className="block font-semibold mb-1">
//               Category:
//             </label>
//             <select
//               id="category"
//               value={categoryID}
//               onChange={(e) => setCategoryID(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             >
//               {categories.map((category) => (
//                 <option key={category.categoryID} value={category.categoryID}>
//                   {category.categoryName}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleUpdate}
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             Update
//           </button>
//         </form>
//       </div>
//     </Modal>
//   );
// };

// export default UpdateBook;

import React, { useState, useEffect } from "react";
import api from "../../api/axiosConfig";
import Modal from "react-modal";
import "../../index.css";

const UpdateBook = ({
  isOpen,
  onRequestClose,
  book,
  onUpdateSuccess,
  authors = [],
  categories = [],
  staffID,
}) => {
  const [title, setTitle] = useState(book.title || "");
  const [isbn, setIsbn] = useState(book.isbn || "");
  const [publisher, setPublisher] = useState(book.publisher || "");
  const [yearPublished, setYearPublished] = useState(book.yearPublished || "");
  const [authorID, setAuthorID] = useState(book.authorID || "");
  const [categoryID, setCategoryID] = useState(book.categoryID || "");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setTitle(book.title || "");
    setIsbn(book.isbn || "");
    setPublisher(book.publisher || "");
    setYearPublished(book.yearPublished || "");
    setAuthorID(book.authorID || "");
    setCategoryID(book.categoryID || "");
  }, [book]);

  const validateFields = async () => {
    if (
      !title ||
      !isbn ||
      !publisher ||
      !yearPublished ||
      !authorID ||
      !categoryID
    ) {
      setError("All fields are required.");
      return false;
    }

    if (title.length < 6) {
      setError("Title must be at least 6 characters long.");
      return false;
    }

    // if (isbn.length !== 10 || isNaN(isbn)) {
    //   setError("ISBN must be 10 digit.");
    //   return false;
    // }
    if (isbn.length < 10 || isNaN(isbn)) {
      setError("ISBN must be atleast 10 digit.");
      return false;
    }

    try {
      const response = await api.get("/book");
      const existingBooks = response.data;
      //const bookExists = existingBooks.some((book) => book.isbn === isbn);
      const bookExists = existingBooks.some(
        (book) => book.isbn.toString() === isbn.toString()
      );
      if (bookExists) {
        setError("Book with the same ISBN already exists.");
        return false;
      }
    } catch (error) {
      console.error("Error checking ISBN:", error);
    }

    if (yearPublished < 1800 || yearPublished > new Date().getFullYear()) {
      setError("Year Published must be between 1800 and current year.");
      return false;
    }

    return true;
  };

  const handleUpdate = async () => {
    try {
      // Validate form fields
      const isValid = await validateFields();
      if (!isValid) {
        return;
      }
      const updatedBook = {
        title,
        isbn,
        publisher,
        yearPublished,
        authorID,
        categoryID,
        staffID,
      };

      await api.put(
        `/book/${book.bookID}?authorID=${authorID}&categoryID=${categoryID}&staffID=${staffID}`,
        updatedBook
      );

      onUpdateSuccess(updatedBook); // Notify parent about successful update
      setSuccessMessage("Book updated successfully");
      onRequestClose(); // Close modal after update
    } catch (error) {
      console.error("Error updating book:", error);
      setError("Error creating book.");
    }
  };

  const handleCloseError = () => {
    setError("");
  };

  const handleCloseSuccess = () => {
    setSuccessMessage("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Update Book"
      className="fixed inset-0 flex items-center justify-center overflow-auto"
    >
      <div className="bg-white p-6 max-w-md w-full mx-auto rounded-lg shadow-lg relative">
        <div className="flex items-center justify-between mb-4 border-gray-800 border-b-2 pb-2">
          <h4 className="text-lg font-semibold">Update Book</h4>
          <button
            onClick={onRequestClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <form>
          {error && (
            <div className="text-red-500 mb-4">
              {error}
              <button onClick={handleCloseError} className="float-right">
                X
              </button>
            </div>
          )}
          {successMessage && (
            <div className="text-green-500 mb-4">
              {successMessage}
              <button onClick={handleCloseSuccess} className="float-right">
                X
              </button>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold mb-1">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="isbn" className="block font-semibold mb-1">
              ISBN:
            </label>
            <input
              type="number"
              id="isbn"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="publisher" className="block font-semibold mb-1">
              Publisher:
            </label>
            <input
              type="text"
              id="publisher"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="yearPublished" className="block font-semibold mb-1">
              Published Year:
            </label>
            <input
              type="text"
              id="yearPublished"
              value={yearPublished}
              onChange={(e) => setYearPublished(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block font-semibold mb-1">
              Author:
            </label>
            <select
              id="author"
              value={authorID}
              onChange={(e) => setAuthorID(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="" disabled>
                Select Author
              </option>
              {authors.map((author) => (
                <option key={author.authorID} value={author.authorID}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block font-semibold mb-1">
              Category:
            </label>
            <select
              id="category"
              value={categoryID}
              onChange={(e) => setCategoryID(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((category) => (
                <option key={category.categoryID} value={category.categoryID}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={handleUpdate}
            className="w-full bg-blue-300 text-white py-2 rounded-lg hover:bg-blue-400 shadow-lg text-shadow"
          >
            Update
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateBook;
