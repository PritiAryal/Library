// // src/components/BookList.js
// import React, { useEffect, useState } from "react";
// import axios from "../../api/axiosConfig";

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/book")
//       .then((response) => {
//         setBooks(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the book!", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Book List</h2>
//       <ul>
//         {books.map((book) => (
//           <li key={book.bookID}>
//             {book.title} - {book.publisher}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import api from "../../api/axiosConfig";

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     api
//       .get("/book")
//       .then((response) => {
//         setBooks(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching books:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Book List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Category</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book) => (
//             <tr key={book.id}>
//               <td>{book.id}</td>
//               <td>{book.title}</td>
//               <td>{book.author.name}</td>
//               <td>{book.category.name}</td>
//               <td>
//                 <Link to={`/books/update/${book.id}`}>Update</Link>
//                 <button onClick={() => deleteBook(book.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const deleteBook = async (id) => {
//   const staffID = getStaffIdFromToken(); // Function to extract staff ID from JWT
//   try {
//     await api.delete(`/book/${id}`, { params: { staffID } });
//     // Refresh the book list or handle success
//   } catch (error) {
//     console.error("Error deleting book:", error);
//   }
// };

// const getStaffIdFromToken = () => {
//   // Extract and return the staff ID from JWT token
//   const token = localStorage.getItem("token");
//   if (!token) return null;
//   const payload = JSON.parse(atob(token.split(".")[1]));
//   return payload.id; // Assuming the token contains the staff ID
// };

// export default BookList;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import api from "../../api/axiosConfig";

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetchStaffData();
//     loadBooks();
//   }, []);

//   const fetchStaffData = async () => {
//     try {
//       // Fetch the staff ID from the token
//       console.log("Fetching staff ID from token...");
//       const staffIdResponse = await api.post("/staff/loggedInStaff");
//       console.log("Staff ID response:", staffIdResponse);
//       const staffID = staffIdResponse.data.staffID; // Ensure correct key
//       console.log("Staff ID:", staffID);
//     } catch (error) {
//       console.error("Error fetching staff ID:", error);
//     }
//   };

//   const loadBooks = async () => {
//     try {
//       const response = await api.get("/book");
//       setBooks(response.data);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   const deleteBook = async (id) => {
//     try {
//       await api.delete(`/book/${id}`);
//       // Refresh the book list or handle success
//       loadBooks();
//     } catch (error) {
//       console.error("Error deleting book:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Book List</h2>
//       <table>
//         <thead>
//           <tr>
//             {/* <th>ID</th> */}
//             <th>Title</th>
//             <th>Publisher</th>
//             <th>ISBN</th>
//             <th>Published Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book) => (
//             <tr key={book.id}>
//               {/* <td>{book.id}</td> */}
//               <td>{book.title}</td>
//               <td>{book.isbn}</td>
//               <td>{book.publisher}</td>
//               <td>{book.yearPublished}</td>
//               <td>
//                 <Link to={`/books/update/${book.id}`}>Update</Link>
//                 <button onClick={() => deleteBook(book.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookList;

import React, { useEffect, useState } from "react";
import api from "../../api/axiosConfig";

const BookList = ({ books, onSelect }) => {
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        if (books && books.length > 0) {
          // Fetch details for specific books if book IDs are provided
          const booksData = await Promise.all(
            books.map(async (bookID) => {
              const bookResponse = await api.get(`/book/${bookID}`);
              return bookResponse.data;
            })
          );
          setBookDetails(booksData);
        } else {
          // Fetch details for all books if no book IDs are provided
          const allBooksResponse = await api.get("/book");
          setBookDetails(allBooksResponse.data);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [books]);

  return (
    <div>
      <h4>Books</h4>
      <ul>
        {bookDetails.map((book) => (
          <li key={book.bookID} onClick={() => onSelect(book)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
