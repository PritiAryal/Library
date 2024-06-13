// // src/components/DeleteBook.js
// import React, { useState, useEffect } from "react";
// import axios from "../../api/axiosConfig";

// const DeleteBook = ({ id }) => {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     axios
//       .delete(`/book/${id}`)
//       .then((response) => {
//         setMessage("Book deleted successfully");
//       })
//       .catch((error) => {
//         setMessage("There was an error deleting the book");
//       });
//   }, [id]);

//   return <div>{message}</div>;
// };

// export default DeleteBook;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "../../api/axiosConfig";

// const DeleteBook = ({ id }) => {
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate(); // Initialize useNavigate

//   const getStaffIdFromToken = () => {
//     // Extract and return the staff ID from JWT token
//     const token = localStorage.getItem("token");
//     if (!token) return null;
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     return payload.id; // Assuming the token contains the staff ID
//   };

//   useEffect(() => {
//     const staffID = getStaffIdFromToken(); // Function to extract staff ID from JWT

//     if (!staffID) {
//       setMessage("Error: Staff ID not found");
//       return;
//     }

//     axios
//       .delete(`/book/${id}`, {
//         params: { staffID },
//       })
//       .then((response) => {
//         setMessage("Book deleted successfully");
//         setTimeout(() => {
//           navigate("/books"); // Redirect to book list after deletion
//         }, 2000); // Delay for 2 seconds before redirect
//       })
//       .catch((error) => {
//         setMessage("There was an error deleting the book");
//       });
//   }, [id, navigate]);

//   return <div>{message}</div>;
// };

// export default DeleteBook;

// import React from "react";
// import api from "../../api/axiosConfig";

// const DeleteBook = ({ bookID, onDeleteSuccess }) => {
//   const handleDelete = async () => {
//     try {
//       await api.delete(`/book/${bookID}`);
//       onDeleteSuccess(bookID); // Notify parent about successful deletion
//     } catch (error) {
//       console.error("Error deleting book:", error);
//     }
//   };

//   return <button onClick={handleDelete}>Delete</button>;
// };

// export default DeleteBook;

import React from "react";
import api from "../../api/axiosConfig";
import "../../index.css";

const DeleteBook = ({ bookID, onDeleteSuccess, staffID }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/book/${bookID}`, { data: { staffID } }); // Include staffID in the request body
      onDeleteSuccess(bookID); // Notify parent about successful deletion
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <button onClick={handleDelete} className="text-shadow">
      Delete
    </button>
  );
};

export default DeleteBook;
