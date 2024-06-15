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

// import React, { useEffect, useState } from "react";
// import api from "../../api/axiosConfig";

// const BookList = ({ books, onSelect }) => {
//   const [bookDetails, setBookDetails] = useState([]);

//   useEffect(() => {
//     const fetchBookDetails = async () => {
//       try {
//         if (books && books.length > 0) {
//           // Fetch details for specific books if book IDs are provided
//           const booksData = await Promise.all(
//             books.map(async (bookID) => {
//               const bookResponse = await api.get(`/book/${bookID}`);
//               return bookResponse.data;
//             })
//           );
//           setBookDetails(booksData);
//         } else {
//           // Fetch details for all books if no book IDs are provided
//           const allBooksResponse = await api.get("/book");
//           setBookDetails(allBooksResponse.data);
//         }
//       } catch (error) {
//         console.error("Error fetching book details:", error);
//       }
//     };

//     fetchBookDetails();
//   }, [books]);

//   return (
//     <div>
//       <h4>Books</h4>
//       <ul>
//         {bookDetails.map((book) => (
//           <li key={book.bookID} onClick={() => onSelect(book)}>
//             {book.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookList;

// import React, { useEffect, useState } from "react";
// import api from "../../api/axiosConfig";
// import UpdateBook from "./UpdateBook";
// import DeleteBook from "./DeleteBook";

// const BookList = ({ books, onSelect }) => {
//   const [bookDetails, setBookDetails] = useState([]);
//   const [authors, setAuthors] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       try {
//         const [authorsResponse, categoriesResponse] = await Promise.all([
//           api.get("/author"),
//           api.get("/category"),
//         ]);

//         setAuthors(authorsResponse.data);
//         setCategories(categoriesResponse.data);

//         if (books && books.length > 0) {
//           const booksData = await Promise.all(
//             books.map(async (bookID) => {
//               const bookResponse = await api.get(`/book/${bookID}`);
//               return bookResponse.data;
//             })
//           );
//           setBookDetails(booksData);
//         } else {
//           const allBooksResponse = await api.get("/book");
//           setBookDetails(allBooksResponse.data);
//         }
//       } catch (error) {
//         console.error("Error fetching initial data:", error);
//       }
//     };

//     fetchInitialData();
//   }, [books]);

//   const handleUpdateSuccess = (updatedBook) => {
//     setBookDetails((prevDetails) =>
//       prevDetails.map((book) =>
//         book.bookID === updatedBook.bookID ? updatedBook : book
//       )
//     );
//     setSelectedBook(null); // Close the update form after success
//   };

//   const handleDeleteSuccess = (deletedBookID) => {
//     setBookDetails((prevDetails) =>
//       prevDetails.filter((book) => book.bookID !== deletedBookID)
//     );
//   };

//   const handleUpdateClick = (book) => {
//     setSelectedBook(book);
//     setIsModalOpen(true);
//   };
//   const getAuthorName = (bookID) => {
//     // Log the bookID being searched for
//     console.log("Searching for bookID:", bookID);

//     // Find the author that contains the book with the provided bookID
//     const authorOfBook = authors.find((author) =>
//       author.books.some((book) => book.bookID === bookID)
//     );

//     // If an author of the book is found, log and return their name
//     if (authorOfBook) {
//       console.log("Author name found:", authorOfBook.name);
//       return authorOfBook.name;
//     } else {
//       return "Unknown";
//     }
//   };

//   const getCategoryName = (categoryID) => {
//     // Find the category that contains the book with the provided categoryID
//     const categoryContainingBook = categories.find((category) =>
//       category.books.some((book) => book.bookID === categoryID)
//     );

//     // If a category containing the book is found, return its categoryName
//     if (categoryContainingBook) {
//       return categoryContainingBook.categoryName;
//     } else {
//       return "Unknown";
//     }
//   };

//   useEffect(() => {
//     console.log("Book Details:", bookDetails);
//     console.log("Authors:", authors);
//     console.log("Categories:", categories);
//   }, [bookDetails, authors, categories]);

//   return (
//     <div>
//       <h4>Books</h4>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>ISBN</th>
//             <th>Publisher</th>
//             <th>Author</th>
//             <th>Category</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookDetails.map((book) => (
//             <tr key={book.bookID}>
//               <td>{book.title}</td>
//               <td>{book.isbn}</td>
//               <td>{book.publisher}</td>
//               <td>{getAuthorName(book.authorID)}</td>
//               <td>{getCategoryName(book.categoryID)}</td>
//               <td>
//                 <button onClick={() => handleUpdateClick(book)}>Update</button>
//                 <DeleteBook
//                   bookID={book.bookID}
//                   onDeleteSuccess={handleDeleteSuccess}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedBook && (
//         <UpdateBook
//           isOpen={isModalOpen}
//           onRequestClose={() => setIsModalOpen(false)}
//           book={selectedBook}
//           onUpdateSuccess={handleUpdateSuccess}
//           authors={authors}
//           categories={categories}
//         />
//       )}
//     </div>
//   );
// };

// export default BookList;

import React, { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import UpdateBook from "./UpdateBook";
import DeleteBook from "./DeleteBook";
import "../../index.css";

const BookList = ({ books, onSelect, staffID }) => {
  const [bookDetails, setBookDetails] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [authorsResponse, categoriesResponse] = await Promise.all([
          api.get("/author"),
          api.get("/category"),
        ]);

        setAuthors(authorsResponse.data);
        setCategories(categoriesResponse.data);

        if (books && books.length > 0) {
          const booksData = await Promise.all(
            books.map(async (bookID) => {
              const bookResponse = await api.get(`/book/${bookID}`);
              return bookResponse.data;
              console.log("Book Response:", bookResponse.data.categoryID);
            })
          );
          setBookDetails(booksData);
        } else {
          const allBooksResponse = await api.get("/book");
          setBookDetails(allBooksResponse.data);
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, [books]);

  const handleUpdateSuccess = (updatedBook) => {
    setBookDetails((prevDetails) =>
      prevDetails.map((book) =>
        book.bookID === updatedBook.bookID ? updatedBook : book
      )
    );
    //setSelectedBook(null); // Close the update form after success
  };

  const handleDeleteSuccess = (deletedBookID) => {
    setBookDetails((prevDetails) =>
      prevDetails.filter((book) => book.bookID !== deletedBookID)
    );
  };

  // const handleUpdateClick = (book) => {
  //   setSelectedBook(book);
  //   setIsModalOpen(true);
  // };

  const handleUpdateClick = (book) => {
    setSelectedBook({ ...book }); // Create a copy of the book object
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedBook(null); // Reset selected book
    setIsModalOpen(false); // Close modal
  };

  const getAuthorName = (bookID) => {
    // Log the bookID being searched for
    console.log("Searching for bookID:", bookID);

    // Find the author that contains the book with the provided bookID
    const authorOfBook = authors.find((author) =>
      author.books.some((book) => book.bookID === bookID)
    );

    // If an author of the book is found, log and return their name
    if (authorOfBook) {
      console.log("Author name found:", authorOfBook.name);
      return authorOfBook.name;
    } else {
      return "Unknown";
    }
  };

  const getCategoryName = (categoryID) => {
    // Find the category that contains the book with the provided categoryID
    const categoryContainingBook = categories.find((category) =>
      category.books.some((book) => book.bookID === categoryID)
    );

    // If a category containing the book is found, return its categoryName
    if (categoryContainingBook) {
      return categoryContainingBook.categoryName;
    } else {
      return "Unknown";
    }
  };

  useEffect(() => {
    console.log("Book Details:", bookDetails);
    console.log("Authors:", authors);
    console.log("Categories:", categories);
  }, [bookDetails, authors, categories]);

  return (
    <div>
      {/* <h4>Books</h4> */}
      <table className="min-w-full overflow-hidden w-full rounded-lg shadow-lg mb-4 text-white">
        <thead>
          <tr className="bg-blue-300 text-white text-shadow">
            <th className="border border-blue-100 px-4 py-2">Title</th>
            <th className="border border-blue-100 px-4 py-2">ISBN</th>
            <th className="border border-blue-100 px-4 py-2">Publisher</th>
            <th className="border border-blue-100 px-4 py-2">Author</th>
            <th className="border border-blue-100 px-4 py-2">Category</th>
            <th className="border border-blue-100 px-4 py-2">Update</th>
            <th className="border border-blue-100 px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookDetails.map((book) => {
            console.log("Book ID:", book.bookID); // Log the bookID
            return (
              <tr
                key={book.bookID}
                className="text-white text-shadow text-normal"
              >
                <td className="border border-blue-100 px-4 py-2">
                  {book.title}
                </td>
                <td className="border border-blue-100 px-4 py-2">
                  {book.isbn}
                </td>
                <td className="border border-blue-100 px-4 py-2">
                  {book.publisher}
                </td>
                <td className="border border-blue-100 px-4 py-2">
                  {getAuthorName(book.bookID)}
                </td>
                <td className="border border-blue-100 px-4 py-2">
                  {getCategoryName(book.bookID)}
                </td>
                <td className="border border-blue-100 px-4 py-2 cursor-pointer transition-colors hover:bg-blue-400 hover:bg-opacity-35 hover:shadow-md">
                  <button
                    onClick={() => handleUpdateClick(book)}
                    className="text-shadow"
                  >
                    Update
                  </button>
                </td>
                <td className="border border-blue-100 px-4 py-2 cursor-pointer transition-colors hover:bg-blue-400 hover:bg-opacity-35 hover:shadow-md">
                  <button
                    onClick={() => handleDeleteSuccess(book.bookID)}
                    className="text-shadow"
                  >
                    <DeleteBook
                      bookID={book.bookID}
                      onDeleteSuccess={handleDeleteSuccess}
                      staffID={staffID}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedBook && (
        <UpdateBook
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          book={selectedBook}
          onUpdateSuccess={handleUpdateSuccess}
          authors={authors}
          categories={categories}
          staffID={staffID}
        />
      )}
    </div>
  );
};

export default BookList;
// import React, { useEffect, useState } from "react";
// import api from "../../api/axiosConfig";
// import UpdateBook from "./UpdateBook";
// import DeleteBook from "./DeleteBook";
// import "../../index.css";

// const BookList = ({ books, onSelect, staffID }) => {
//   const [bookDetails, setBookDetails] = useState([]);
//   const [authors, setAuthors] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       try {
//         const [authorsResponse, categoriesResponse, allBooksResponse] =
//           await Promise.all([
//             api.get("/author"),
//             api.get("/category"),
//             api.get("/book"),
//           ]);

//         console.log("Authors:", authorsResponse.data);
//         console.log("Categories:", categoriesResponse.data);
//         console.log("All Books:", allBooksResponse.data);

//         setAuthors(authorsResponse.data);
//         setCategories(categoriesResponse.data);
//         setBookDetails(allBooksResponse.data);
//       } catch (error) {
//         console.error("Error fetching initial data:", error);
//       }
//     };

//     fetchInitialData();
//   }, []);

//   const handleUpdateSuccess = (updatedBook) => {
//     setBookDetails((prevDetails) =>
//       prevDetails.map((book) =>
//         book.bookID === updatedBook.bookID ? updatedBook : book
//       )
//     );
//     setSelectedBook(null);
//   };

//   const handleDeleteSuccess = (deletedBookID) => {
//     setBookDetails((prevDetails) =>
//       prevDetails.filter((book) => book.bookID !== deletedBookID)
//     );
//   };

//   const handleUpdateClick = (book) => {
//     setSelectedBook({ ...book });
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setSelectedBook(null);
//     setIsModalOpen(false);
//   };

//   // const getAuthorName = (authorID) => {
//   //   const author = authors.find((author) => author.authorID === authorID);
//   //   return author ? author.name : "Unknown Author";
//   // };

//   // const getCategoryName = (categoryID) => {
//   //   const category = categories.find(
//   //     (category) => category.categoryID === categoryID
//   //   );
//   //   return category ? category.categoryName : "Unknown Category";
//   // };
//   const getAuthorName = (bookID) => {
//     // Log the bookID being searched for
//     console.log("Searching for bookID:", bookID);

//     // Find the author that contains the book with the provided bookID
//     const authorOfBook = authors.find((author) =>
//       author.books.some((book) => book.bookID === bookID)
//     );

//     // If an author of the book is found, log and return their name
//     if (authorOfBook) {
//       console.log("Author name found:", authorOfBook.name);
//       return authorOfBook.name;
//     } else {
//       return "Unknown";
//     }
//   };

//   const getCategoryName = (categoryID) => {
//     // Find the category that contains the book with the provided categoryID
//     const categoryContainingBook = categories.find((category) =>
//       category.books.some((book) => book.bookID === categoryID)
//     );

//     // If a category containing the book is found, return its categoryName
//     if (categoryContainingBook) {
//       return categoryContainingBook.categoryName;
//     } else {
//       return "Unknown";
//     }
//   };

// return (
//   <div className="book-list-container">
//     {books && books.length > 0 ? (
//       books.map((book) => (
//         <div key={book.bookID} className="book-card">
//           <h3 className="book-title">{book.title}</h3>
//           <p className="book-author">
//             Author: {getAuthorName(book.authorID)}
//           </p>
//           <p className="book-category">
//             Category: {getCategoryName(book.categoryID)}
//           </p>
//           <p className="book-publisher">Publisher: {book.publisher}</p>
//           <p className="book-year">Published Year: {book.yearPublished}</p>
//           <p className="book-isbn">ISBN: {book.isbn}</p>
//           <div className="book-actions">
//             <button
//               className="update-button"
//               onClick={() => handleUpdateClick(book)}
//             >
//               Update
//             </button>
//             <DeleteBook
//               bookID={book.bookID}
//               onDeleteSuccess={handleDeleteSuccess}
//               staffID={staffID}
//             />
//           </div>
//         </div>
//       ))
//     ) : (
//       <p>No books available.</p>
//     )}
//     {selectedBook && (
//       <UpdateBook
//         isOpen={isModalOpen}
//         onRequestClose={handleModalClose}
//         book={selectedBook}
//         authors={authors}
//         categories={categories}
//         onUpdateSuccess={handleUpdateSuccess}
//         staffID={staffID}
//       />
//     )}
//   </div>
// );
//   return (
//     <div>
//       <h4>Books</h4>
//       <table className="w-full rounded-lg shadow-lg mb-4 text-gray-200">
//         <thead>
//           <tr>
//             <th className="border border-gray-800 px-4 py-2">Title</th>
//             <th className="border border-gray-800 px-4 py-2">ISBN</th>
//             <th className="border border-gray-800 px-4 py-2">Publisher</th>
//             <th className="border border-gray-800 px-4 py-2">Author</th>
//             <th className="border border-gray-800 px-4 py-2">Category</th>
//             <th className="border border-gray-800 px-4 py-2">Update</th>
//             <th className="border border-gray-800 px-4 py-2">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book) => {
//             console.log("Book ID:", book.bookID); // Log the bookID
//             return (
//               <tr key={book.bookID}>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {book.title}
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {book.isbn}
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {book.publisher}
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {getAuthorName(book.bookID)}
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {getCategoryName(book.bookID)}
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   <button onClick={() => handleUpdateClick(book)}>
//                     Update
//                   </button>
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   <button onClick={() => handleDeleteSuccess(book.bookID)}>
//                     <DeleteBook
//                       bookID={book.bookID}
//                       onDeleteSuccess={handleDeleteSuccess}
//                       staffID={staffID}
//                     />
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {selectedBook && (
//         <UpdateBook
//           isOpen={isModalOpen}
//           onRequestClose={handleModalClose}
//           book={selectedBook}
//           onUpdateSuccess={handleUpdateSuccess}
//           authors={authors}
//           categories={categories}
//           staffID={staffID}
//         />
//       )}
//     </div>
//   );
// };

// export default BookList;
