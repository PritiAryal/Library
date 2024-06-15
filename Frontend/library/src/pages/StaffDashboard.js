// // src/components/StaffDashboard.js
// import React, { useEffect, useState } from "react";
// import axios from "../api/axiosConfig";
// import { useParams } from "react-router-dom";
// import BookList from "../components/book/BookList";
// import CreateBook from "../components/book/CreateBook";
// import UpdateBook from "../components/book/UpdateBook";
// import DeleteBook from "../components/book/DeleteBook";
// import OperationList from "../components/operation/OperationList";
// import CreateOperation from "../components/operation/CreateOperation";
// import UpdateOperation from "../components/operation/UpdateOperation";
// import DeleteOperation from "../components/operation/DeleteOperation";

// const StaffDashboard = () => {
//   const { id } = useParams(); // Assuming staffID is passed as a route parameter
//   const [staff, setStaff] = useState(null);
//   const [operations, setOperations] = useState([]);
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [selectedOperation, setSelectedOperation] = useState(null);

//   useEffect(() => {
//     // Fetch staff details
//     axios
//       .get(`/staff/${id}`)
//       .then((response) => {
//         setStaff(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the staff data!", error);
//       });

//     // Fetch operations
//     axios
//       .get(`/operation?staffID=${id}`)
//       .then((response) => {
//         setOperations(response.data);
//       })
//       .catch((error) => {
//         console.error(
//           "There was an error fetching the operations data!",
//           error
//         );
//       });

//     // Fetch books
//     axios
//       .get("/book")
//       .then((response) => {
//         setBooks(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the books data!", error);
//       });
//   }, [id]);

//   const handleBookSelect = (book) => {
//     setSelectedBook(book);
//   };

//   const handleOperationSelect = (operation) => {
//     setSelectedOperation(operation);
//   };

//   return (
//     <div>
//       <h1>Staff Dashboard</h1>
//       <div>
//         <h2>Welcome, {staff ? staff.staffName : "Staff"}!</h2>
//         <div>
//           <h3>Books</h3>
//           <BookList books={books} onSelect={handleBookSelect} />
//           <CreateBook />
//           {selectedBook && <UpdateBook book={selectedBook} />}
//           {selectedBook && <DeleteBook id={selectedBook.bookID} />}
//         </div>
//         <div>
//           <h3>Operations</h3>
//           <OperationList
//             operations={operations}
//             onSelect={handleOperationSelect}
//           />
//           <CreateOperation />
//           {selectedOperation && (
//             <UpdateOperation operation={selectedOperation} />
//           )}
//           {selectedOperation && (
//             <DeleteOperation id={selectedOperation.operationID} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StaffDashboard;

// import React, { useState, useEffect } from "react";
// import api from "../api/axiosConfig";

// const StaffDashboard = () => {
//   const [operations, setOperations] = useState([]);
//   const staffID = getStaffIdFromToken(); // Function to extract staff ID from JWT

//   useEffect(() => {
//     api
//       .get(`/dashboard/staff/${staffID}/operations`)
//       .then((response) => {
//         setOperations(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching operations:", error);
//       });
//   }, [staffID]);

//   const getStaffIdFromToken = () => {
//     // Extract and return the staff ID from JWT token
//     const token = localStorage.getItem("token");
//     if (!token) return null;
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     return payload.id; // Assuming the token contains the staff ID
//   };

//   return (
//     <div>
//       <h2>Operations Log</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Operation ID</th>
//             <th>Book ID</th>
//             <th>Operation Type</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {operations.map((operation) => (
//             <tr key={operation.id}>
//               <td>{operation.id}</td>
//               <td>{operation.book.id}</td>
//               <td>{operation.operationType}</td>
//               <td>{new Date(operation.performedDate).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StaffDashboard;

// import React, { useState, useEffect } from "react";
// import api from "../api/axiosConfig";

// const StaffDashboard = () => {
//   const getStaffIdFromToken = () => {
//     // Extract and return the staff ID from JWT token
//     const token = localStorage.getItem("token");
//     if (!token) return null;
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     return payload.id; // Assuming the token contains the staff ID
//   };

//   const [operations, setOperations] = useState([]);
//   const staffID = getStaffIdFromToken(); // Function to extract staff ID from JWT

//   useEffect(() => {
//     api
//       .get(`/dashboard/staff/${staffID}/operations`)
//       .then((response) => {
//         setOperations(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching operations:", error);
//       });
//   }, [staffID]);

//   return (
//     <div>
//       <h2>Operations Log</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Operation ID</th>
//             <th>Book ID</th>
//             <th>Operation Type</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {operations.map((operation) => (
//             <tr key={operation.id}>
//               <td>{operation.id}</td>
//               <td>{operation.book.id}</td>
//               <td>{operation.operationType}</td>
//               <td>{new Date(operation.performedDate).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StaffDashboard;

// import React, { useState, useEffect } from "react";
// import api from "../api/axiosConfig";
// import BookList from "../components/book/BookList";
// import CreateBook from "../components/book/CreateBook";
// import UpdateBook from "../components/book/UpdateBook";
// import DeleteBook from "../components/book/DeleteBook";

// const StaffDashboard = () => {
//   const getStaffIdFromToken = () => {
//     // Extract and return the staff ID from JWT token
//     const token = localStorage.getItem("token");
//     if (!token) return null;
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     return payload.id; // Assuming the token contains the staff ID
//   };

//   const [operations, setOperations] = useState([]);
//   const [staff, setStaff] = useState(null);
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [selectedOperation, setSelectedOperation] = useState(null);

//   const staffID = getStaffIdFromToken(); // Function to extract staff ID from JWT

//   useEffect(() => {
//     api
//       .get(`/dashboard/staff/${staffID}/operations`)
//       .then((response) => {
//         setOperations(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching operations:", error);
//       });

//     // Fetch staff details
//     api
//       .get(`/staff/${staffID}`)
//       .then((response) => {
//         setStaff(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the staff data!", error);
//       });

//     // Fetch operations
//     api
//       .get(`/operation?staffID=${staffID}`)
//       .then((response) => {
//         setOperations(response.data);
//       })
//       .catch((error) => {
//         console.error(
//           "There was an error fetching the operations data!",
//           error
//         );
//       });

//     // Fetch books
//     api
//       .get("/book")
//       .then((response) => {
//         setBooks(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the books data!", error);
//       });
//   }, [staffID]);

//   return (
//     <div>
//       <div>
//         <h1>Staff Dashboard</h1>
//         <div>
//           <h2>Welcome, {staff ? staff.staffName : "Staff"}!</h2>
//           <div>
//             <h3>Books</h3>
//             <BookList books={books} onSelect={setSelectedBook} />
//             <CreateBook />
//             {selectedBook && <UpdateBook book={selectedBook} />}
//             {selectedBook && <DeleteBook id={selectedBook.bookID} />}
//           </div>
//         </div>
//       </div>
//       <div>
//         <h2>Operations Log</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Operation ID</th>
//               <th>Book ID</th>
//               <th>Operation Type</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {operations.map((operation) => (
//               <tr key={operation.id}>
//                 <td>{operation.id}</td>
//                 <td>{operation.book.id}</td>
//                 <td>{operation.operationType}</td>
//                 <td>{new Date(operation.performedDate).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StaffDashboard;

// import React, { useState, useEffect } from "react";
// import api from "../api/axiosConfig";
// import BookList from "../components/book/BookList";
// import CreateBook from "../components/book/CreateBook";
// import UpdateBook from "../components/book/UpdateBook";
// import DeleteBook from "../components/book/DeleteBook";

// const StaffDashboard = () => {
//   const [operations, setOperations] = useState([]);
//   const [staff, setStaff] = useState(null);
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [selectedOperation, setSelectedOperation] = useState(null);

//   useEffect(() => {
//     const fetchStaffIdAndInfo = async () => {
//       try {
//         // Fetch the staff ID from the token
//         console.log("Fetching staff ID from token...");
//         const staffIdResponse = await api.post("/staff/loggedInStaff");
//         console.log("Staff ID response:", staffIdResponse);
//         const staffID = staffIdResponse.data.userID;
//         console.log("Staff ID:", staffID);

//         // Fetch staff details
//         const staffResponse = await api.get(`/staff/${staffID}`);
//         console.log("Staff details response:", staffResponse);
//         setStaff(staffResponse.data);

//         // Fetch operations
//         const operationsResponse = await api.get(
//           `/operation?staffID=${staffID}`
//         );
//         console.log("Operations response:", operationsResponse);
//         setOperations(operationsResponse.data);

//         // Fetch books
//         const booksResponse = await api.get("/book");
//         console.log("Books response:", booksResponse);
//         setBooks(booksResponse.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchStaffIdAndInfo();
//   }, []);

//   return (
//     <div>
//       <div>
//         <h1>Staff Dashboard</h1>
//         <div>
//           <h2>Welcome, {staff ? staff.staffName : "Staff"}!</h2>
//           <div>
//             <h3>Books</h3>
//             <BookList books={books} onSelect={setSelectedBook} />
//             <CreateBook />
//             {selectedBook && <UpdateBook book={selectedBook} />}
//             {selectedBook && <DeleteBook id={selectedBook.bookID} />}
//           </div>
//         </div>
//       </div>
//       <div>
//         <h2>Operations Log</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Operation ID</th>
//               <th>Book ID</th>
//               <th>Operation Type</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {operations.map((operation) => (
//               <tr key={operation.id}>
//                 <td>{operation.id}</td>
//                 <td>{operation.book.id}</td>
//                 <td>{operation.operationType}</td>
//                 <td>{new Date(operation.performedDate).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StaffDashboard;

// import React, { useState, useEffect } from "react";
// import api from "../api/axiosConfig";
// import BookList from "../components/book/BookList";
// import CreateBook from "../components/book/CreateBook";
// import UpdateBook from "../components/book/UpdateBook";
// import DeleteBook from "../components/book/DeleteBook";

// const StaffDashboard = () => {
//   const [operations, setOperations] = useState([]);
//   const [staff, setStaff] = useState(null);
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);

//   useEffect(() => {
//     //     useEffect(() => {
//     //     const fetchStaffData = async () => {
//     //         try {
//     //             const token = localStorage.getItem('token');
//     //             const response = await axios.post('http://localhost:8080/api/staff/loggedInStaff', {}, {
//     //                 headers: {
//     //                     'Authorization': `Bearer ${token}`
//     //                 }
//     //             });
//     //             console.log('Staff data:', response.data);
//     //         } catch (error) {
//     //             console.error('Error fetching data:', error);
//     //         }
//     //     };

//     //     fetchStaffData();
//     // }, []);
//     const fetchStaffData = async () => {
//       try {
//         // Fetch the staff ID from the token
//         console.log("Fetching staff ID from token...");
//         const staffIdResponse = await api.post("/staff/loggedInStaff");
//         console.log("Staff ID response:", staffIdResponse);
//         const staffID = staffIdResponse.data.staffID; // Ensure correct key
//         console.log("Staff ID:", staffID);

//         // Fetch staff details
//         const staffResponse = await api.get(`/staff/${staffID}`);
//         console.log("Staff details response:", staffResponse);
//         console.log(
//           "Staff details response data:",
//           staffResponse.data.staffName
//         );
//         setStaff(staffResponse.data.staffName);

//         // Fetch operations
//         const operationsResponse = await api.get(
//           `/operation?staffID=${staffID}`
//         );
//         console.log("Operations response:", operationsResponse);
//         setOperations(operationsResponse.data);

//         // Fetch books
//         const booksResponse = await api.get("/book");
//         console.log("Books response:", booksResponse);
//         setBooks(booksResponse.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchStaffData();
//   }, []);

//   return (
//     <div>
//       <h1>Staff Dashboard</h1>
//       <div>
//         <h2>Welcome, {staff ? staff : "Staff"}!</h2>
//         <div>
//           <h3>Books</h3>
//           <BookList books={books} onSelect={setSelectedBook} />
//           <CreateBook />
//           {selectedBook && <UpdateBook book={selectedBook} />}
//           {selectedBook && <DeleteBook id={selectedBook.bookID} />}
//         </div>
//       </div>
//       <div>
//         <h2>Operations Log</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Operation ID</th>
//               <th>Book ID</th>
//               <th>Operation Type</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {operations.map((operation) => (
//               <tr key={operation.staffID}>
//                 <td>{operation.operationID}</td>
//                 <td>{operation.bookID}</td>
//                 <td>{operation.operationType}</td>
//                 <td>{new Date(operation.performedDate).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StaffDashboard;

// import React, { useState, useEffect } from "react";
// import api from "../api/axiosConfig";
// import BookList from "../components/book/BookList";
// import CreateBook from "../components/book/CreateBook";
// import UpdateBook from "../components/book/UpdateBook";
// import DeleteBook from "../components/book/DeleteBook";

// const StaffDashboard = () => {
//   const [operations, setOperations] = useState([]);
//   const [staff, setStaff] = useState(null);
//   const [books, setBooks] = useState([]);
//   const [booksID, setBooksID] = useState([]);
//   const [showBooks, setShowBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [currentStaffID, setCurrentStaffID] = useState(null);

//   useEffect(() => {
//     const fetchStaffData = async () => {
//       try {
//         // Check if token is expired
//         if (isTokenExpired(localStorage.getItem("token"))) {
//           handleLogout(); // Logout if token is expired
//           return;
//         }
//         console.log("Fetching staff ID from token...");
//         const staffIdResponse = await api.post("/staff/loggedInStaff");
//         console.log("Staff ID response:", staffIdResponse);
//         const staffID = staffIdResponse.data.staffID;
//         console.log("Staff ID:", staffID);
//         setCurrentStaffID(staffID);

//         const staffResponse = await api.get(`/staff/${staffID}`);
//         console.log("Staff details response:", staffResponse);
//         console.log(
//           "Staff details response data:",
//           staffResponse.data.staffName
//         );
//         setStaff(staffResponse.data.staffName);

//         const operationsResponse = await api.get(
//           `/staff/${staffID}/operations` //`/operation?staffID=${staffID}`
//         );
//         console.log("Operations response:", operationsResponse);
//         setOperations(operationsResponse.data);

//         const bookIDByStaffResponse = await api.get(
//           `/operation/booksByStaff?staffID=${staffID}` //`/operation?staffID=${staffID}`
//         );
//         console.log("BookID response:", bookIDByStaffResponse.data);
//         setBooksID(bookIDByStaffResponse.data);

//         const booksResponse = await api.get("/book");
//         console.log("Books response:", booksResponse.data);
//         setBooks(booksResponse.data);

//         // const showBookResponse = await api.get(`/book/${booksID}`);
//         // console.log("hmm Books response:", showBookResponse.data);
//         // setShowBooks(booksResponse.data);

//         // Fetch book details for each book ID
//         const bookDetailsPromises = bookIDByStaffResponse.data.map(
//           async (bookID) => {
//             const response = await api.get(`/book/${bookID}`);
//             console.log("Book details:", response.data);
//             return response.data;
//           }
//         );

//         const bookDetails = await Promise.all(bookDetailsPromises);
//         setShowBooks(bookDetails);
//       } catch (error) {
//         // Handle unauthorized error
//         if (error.response && error.response.status === 401) {
//           handleLogout(); // Logout user if unauthorized
//         }
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchStaffData();
//   }, []);

//   // Function to check if token is expired
//   const isTokenExpired = (token) => {
//     if (!token) {
//       return true; // Token is considered expired if it's null or undefined
//     }

//     // const decodedToken = jwt.decode(token);
//     // if (!decodedToken || !decodedToken.exp) {
//     //   return true; // Unable to decode token or expiration time is missing
//     // }

//     // const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
//     // return decodedToken.exp < currentTime;
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("staffId");
//     window.location.href = "/login";
//   };

//   return (
//     <div>
//       <h1>Staff Dashboard</h1>
//       <div>
//         <h2>Welcome, {staff ? staff : "Staff"}!</h2>
//         {/* <div>
//           <h3>Your Activity</h3>
//           <BookList books={booksID} onSelect={setSelectedBook} />
//           <CreateBook />
//           {selectedBook && <UpdateBook book={selectedBook} />}
//           {selectedBook && <DeleteBook id={selectedBook.bookID} />}
//         </div> */}
//         <div>
//           <h3>Your Activity</h3>
//           {booksID.length > 0 ? (
//             <BookList books={booksID} onSelect={setSelectedBook} />
//           ) : (
//             <p>No activity yet.</p>
//           )}
//           <CreateBook />
//           {booksID.length > 0 && selectedBook && (
//             <UpdateBook book={selectedBook} />
//           )}
//           {booksID.length > 0 && selectedBook && (
//             <DeleteBook id={selectedBook.bookID} />
//           )}
//         </div>
//       </div>
//       <div>
//         <h2>All Books</h2>
//         <BookList books={books} onSelect={setSelectedBook} />
//       </div>
//       <div>
//         <h2>Operations Log</h2>
//         {/* <table>
//           <thead>
//             <tr>
//               <th>Operation ID</th>
//               <th>Book ID</th>
//               <th>Operation Type</th>
//               <th>Date</th>
//             </tr>
//           </thead> */}
//         {/* <tbody>
//             {operations.map((operation) => (
//               <tr key={operation.operationID}>
//                 <td>{operation.operationID}</td>
//                 <td>{operation.bookID}</td>
//                 <td>{operation.operationType}</td>
//                 <td>{new Date(operation.performedDate).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody> */}
//         <table>
//           <thead>
//             <tr>
//               <th>Book ID</th>
//               <th>Title</th>
//               <th>Publisher</th>
//               <th>Year Published</th>
//               <th>Operation ID</th>
//               <th>Operation Type</th>
//               <th>Date Performed</th>
//             </tr>
//           </thead>
//           <tbody>
//             {showBooks.map((book, index) => (
//               <tr key={book.bookID}>
//                 <td>{book.bookID}</td>
//                 <td>{book.title}</td>
//                 <td>{book.publisher}</td>
//                 <td>{book.yearPublished}</td>
//                 <td>{operations[index]?.operationID || "-"}</td>
//                 <td>{operations[index]?.operationType || "-"}</td>
//                 <td>
//                   {operations[index]
//                     ? new Date(operations[index].performedDate).toLocaleString()
//                     : "-"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* </table> */}
//       </div>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default StaffDashboard;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api/axiosConfig";
import BookList from "../components/book/BookList";
import CreateBook from "../components/book/CreateBook";
import UpdateBook from "../components/book/UpdateBook";
import DeleteBook from "../components/book/DeleteBook";
import CreateCategory from "../components/category/CreateCategory";
import CreateAuthor from "../components/author/CreateAuthor";
import LoanList from "../components/loan/LoanList";
import CreateMember from "../components/member/CreateMember";
import "../index.css";
import CreateLoanModal from "../components/loan/CreateLoanModal";
import MemberList from "../components/member/MemberList";
import ScrollableSection from "../components/scroll/ScrollableSection";
//import jwt from "jsonwebtoken";

const StaffDashboard = () => {
  const [operations, setOperations] = useState([]);
  const [staff, setStaff] = useState(null);
  const [books, setBooks] = useState([]);
  const [booksID, setBooksID] = useState([]);
  const [showBooks, setShowBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentStaffID, setCurrentStaffID] = useState(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        // Check if token is expired
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)) {
          handleLogout();
          return;
        }

        console.log("Fetching staff ID from token...");
        const staffIdResponse = await api.post("/staff/loggedInStaff");
        console.log("Staff ID response:", staffIdResponse);
        const staffID = staffIdResponse.data.staffID;
        console.log("Staff ID:", staffID);
        setCurrentStaffID(staffID);

        const staffResponse = await api.get(`/staff/${staffID}`);
        console.log("Staff details response:", staffResponse);
        console.log(
          "Staff details response data:",
          staffResponse.data.staffName
        );
        setStaff(staffResponse.data.staffName);

        const operationsResponse = await api.get(
          `/staff/${staffID}/operations` //`/operation?staffID=${staffID}`
        );
        console.log("Operations response:", operationsResponse);
        setOperations(operationsResponse.data);

        const bookIDByStaffResponse = await api.get(
          `/operation/booksByStaff?staffID=${staffID}` //`/operation?staffID=${staffID}`
        );
        console.log("BookID response:", bookIDByStaffResponse.data);
        setBooksID(bookIDByStaffResponse.data);

        const booksResponse = await api.get("/book");
        console.log("Books response:", booksResponse.data);
        setBooks(booksResponse.data);

        // Fetch book details for each book ID
        const bookDetailsPromises = bookIDByStaffResponse.data.map(
          async (bookID) => {
            const response = await api.get(`/book/${bookID}`);
            console.log("Book details:", response.data);
            return response.data;
          }
        );

        const bookDetails = await Promise.all(bookDetailsPromises);
        setShowBooks(bookDetails);
      } catch (error) {
        // Handle unauthorized error
        if (
          (error.response && error.response.status === 401) ||
          error.response.status === 500
        ) {
          handleLogout(); // Logout user if unauthorized
        }
        console.error("Error fetching data:", error);
      }
    };

    fetchStaffData();
  }, []);

  // Function to check if token is expired
  // const isTokenExpired = (token) => {
  //   if (!token) {
  //     return true; // Token is considered expired if it's null or undefined
  //   }

  //   // const decodedToken = jwt.decode(token);
  //   // if (!decodedToken || !decodedToken.exp) {
  //   //   return true; // Unable to decode token or expiration time is missing
  //   // }

  //   // const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
  //   // return decodedToken.exp < currentTime;
  // };

  const isTokenExpired = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
      return decodedToken.exp < currentTime;
    } catch (error) {
      return true; // Treat any error in decoding as token being expired
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("staffId");
    //window.location.href = "/login";
    navigate("/login");
  };

  const handleBookCreateSuccess = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div className="bg-custom min-h-screen bg-repeat-y py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl text-blue-300 font-bold uppercase">
          Library Manager
        </h1>
        <div className="flex items-center">
          <p className="text-gray-800 mr-4 font-semibold textt-shadow uppercase">
            Hi, {staff || "Staff"}
          </p>
          <button
            onClick={handleLogout}
            className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="container mx-auto flex">
        <div className="w-3/4 p-8">
          <h2 className="text-xl text-gray-800 py-10 font-semibold mb-4 text-shdow uppercase">
            Welcome, {staff || "Staff"}!
          </h2>

          <div className="mb-10 p-8 rounded-lg shadow-lg font-semibold bg-opacity-5 bg-white bg-blur-lg bg-clip-padding backdrop-filter backdrop-blur-md text-white border-b-2 border-blue-100 pb-2">
            <h2 className="text-2xl font-semibold mb-4 border-blue-100 border-b-2 text-gray-800 pb-2">
              All Books
            </h2>
            <div className="mb-4 rounded-lg">
              <ScrollableSection>
                <BookList
                  books={books}
                  onSelect={setSelectedBook}
                  staffID={currentStaffID}
                />
              </ScrollableSection>
            </div>
          </div>
          <br />
          <div className="mb-8 p-8 rounded-lg shadow-lg font-semibold bg-opacity-5 bg-blue-white bg-blur-lg bg-clip-padding backdrop-filter backdrop-blur-md text-white border-b-2 border-blue-100 pb-2">
            <h2 className="text-2xl font-semibold mb-4 border-blue-100 border-b-2 text-gray-800 pb-2">
              Your Activity - Operations Log
            </h2>
            <ScrollableSection>
              <table className="min-w-full overflow-hidden w-full rounded-lg shadow-lg mb-4 text-white">
                <thead>
                  <tr className="bg-blue-300">
                    {/* <th className="border px-4 py-2">Book ID</th> */}
                    <th className="border border-blue-100 px-4 py-2">Title</th>
                    <th className="border border-blue-100 px-4 py-2">
                      Publisher
                    </th>
                    <th className="border border-blue-100 px-4 py-2">
                      Year Published
                    </th>
                    {/* <th className="border px-4 py-2">Operation ID</th> */}
                    <th className="border border-blue-100 px-4 py-2">
                      Operation Type
                    </th>
                    <th className="border border-blue-100 px-4 py-2">
                      Date Performed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {showBooks.map((book, index) => (
                    <tr key={book.bookID} className="text-center">
                      {/* <td className="border px-4 py-2">{book.bookID}</td> */}
                      <td className="border border-blue-100 px-4 py-2">
                        {book.title}
                      </td>
                      <td className="border border-blue-100 px-4 py-2">
                        {book.publisher}
                      </td>
                      <td className="border border-blue-100 px-4 py-2">
                        {book.yearPublished}
                      </td>
                      {/* <td className="border px-4 py-2">
                      {operations[index]?.operationID || "-"}
                    </td> */}
                      <td className="border border-blue-100 px-4 py-2">
                        {operations[index]?.operationType || "-"}
                      </td>
                      <td className="border border-blue-100 px-4 py-2">
                        {operations[index]
                          ? new Date(
                              operations[index].performedDate
                            ).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollableSection>
          </div>
          <br />
          <div className="mb-8 p-8 rounded-lg shadow-lg font-semibold bg-opacity-5 bg-white bg-blur-lg bg-clip-padding backdrop-filter backdrop-blur-md text-white border-b-2 border-blue-100 pb-2">
            {/* <h2 className="flex text-2xl font-semibold mb-4 border-blue-100 border-b-2 text-gray-800 pb-2">
              Members - Transaction
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Create New +
              </button>
              <CreateLoanModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </h2> */}
            <h2 className="flex justify-between items-center font-semibold mb-4 border-blue-100 border-b-2 text-gray-700 pb-2">
              <span className="text-2xl ">Members - Transaction</span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="shadow-lg px-4 py-2 rounded-md hover:text-gray-900 bg-blue-300 text-white hover:bg-transparent border-2 border-blue-300 hover:border-blue-300 hover:border-opacity-50 hover:shadow-lg transition duration-300 ease-in-out"
              >
                Create New +
              </button>
              <CreateLoanModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </h2>
            <ScrollableSection>
              <LoanList />
            </ScrollableSection>
          </div>
          <div className="mb-10 p-8 rounded-lg shadow-lg font-semibold bg-opacity-5 bg-white bg-blur-lg bg-clip-padding backdrop-filter backdrop-blur-md text-white border-b-2 border-blue-100 pb-2">
            <h2 className="text-2xl font-semibold mb-4 border-blue-100 border-b-2 text-gray-800 pb-2">
              All Members
            </h2>
            <div className="mb-4 rounded-lg">
              <ScrollableSection>
                <MemberList />
              </ScrollableSection>
            </div>
          </div>
        </div>
        <div className="w-1/4 p-8">
          {/* <h2 className="text-2xl font-semibold mb-4 text-white">Create Book</h2> */}
          <CreateBook onCreateSuccess={handleBookCreateSuccess} />
          <br />
          <br />
          <CreateCategory />
          <br />
          <CreateAuthor />
          <br />
          <CreateMember />
          <br />
        </div>
      </div>
      <div className="w-1/4 p-8"></div>
      <div className="w-1/4 p-8"></div>
    </div>
  );
};

export default StaffDashboard;

//   <div className="container mx-auto p-8">
//     <h1 className="text-3xl font-bold mb-8">Staff Dashboard</h1>

//     <div className="mb-8">
//       <h2 className="text-xl font-semibold mb-4">
//         Welcome, {staff || "Staff"}!
//       </h2>
//       <div className="flex items-center">
//         <h3 className="text-lg font-semibold mr-4">Your Activity</h3>
//         {booksID.length > 0 ? (
//           <BookList books={booksID} onSelect={setSelectedBook} />
//         ) : (
//           <p className="text-gray-500">No activity yet.</p>
//         )}
//         <CreateBook />
//         {booksID.length > 0 && selectedBook && (
//           <UpdateBook book={selectedBook} />
//         )}
//         {booksID.length > 0 && selectedBook && (
//           <DeleteBook id={selectedBook.bookID} />
//         )}
//       </div>
//     </div>

//     <div className="mb-8">
//       <h2 className="text-xl font-semibold">All Books</h2>
//       <BookList books={books} onSelect={setSelectedBook} />
//     </div>
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Operations Log</h2>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Book ID</th>
//             <th className="border px-4 py-2">Title</th>
//             <th className="border px-4 py-2">Publisher</th>
//             <th className="border px-4 py-2">Year Published</th>
//             <th className="border px-4 py-2">Operation ID</th>
//             <th className="border px-4 py-2">Operation Type</th>
//             <th className="border px-4 py-2">Date Performed</th>
//           </tr>
//         </thead>
//         <tbody>
//           {showBooks.map((book, index) => (
//             <tr key={book.bookID} className="text-center">
//               <td className="border px-4 py-2">{book.bookID}</td>
//               <td className="border px-4 py-2">{book.title}</td>
//               <td className="border px-4 py-2">{book.publisher}</td>
//               <td className="border px-4 py-2">{book.yearPublished}</td>
//               <td className="border px-4 py-2">
//                 {operations[index]?.operationID || "-"}
//               </td>
//               <td className="border px-4 py-2">
//                 {operations[index]?.operationType || "-"}
//               </td>
//               <td className="border px-4 py-2">
//                 {operations[index]
//                   ? new Date(operations[index].performedDate).toLocaleString()
//                   : "-"}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     <button
//       onClick={handleLogout}
//       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//     >
//       Logout
//     </button>
//   </div>
// );
