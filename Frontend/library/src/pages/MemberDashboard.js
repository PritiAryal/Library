// // src/pages/MemberDashboard.js

// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// // import { Link } from "react-router-dom";
// import api from "../api/axiosConfig";

// const MemberDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("memberId");
//     navigate("/login");
//   };

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
//       <div>
//         <h2>Book List</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>Category</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {books.map((book) => (
//               <tr key={book.id}>
//                 <td>{book.id}</td>
//                 <td>{book.title}</td>
//                 <td>{book.author.authorID}</td>
//                 <td>{book.category.categoryID}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div>
//         <h2>Member Dashboard</h2>
//         <button onClick={handleLogout}>Logout</button>
//         {/* Add other member dashboard content here */}
//       </div>
//     </div>
//   );
// };

// export default MemberDashboard;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api/axiosConfig";
import SearchForm from "../components/book/SearchForm";
import MemberLoanList from "../components/loan/MemberLoanList";

const MemberDashboard = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [member, setMember] = useState(null);
  const [currentMemberID, setCurrentMemberID] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Check if token is expired
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)) {
          handleLogout();
          return;
        }

        console.log("Fetching Member ID from token...");
        const memberIdResponse = await api.post("/member/loggedInMember");
        console.log("Member ID response:", memberIdResponse);
        const memberID = memberIdResponse.data.memberID;
        console.log("Member ID:", memberID);
        setCurrentMemberID(memberID);

        const memberResponse = await api.get(`/member/${memberID}`);
        console.log("Member details response:", memberResponse);
        console.log("Member details response data:", memberResponse.data.name);
        setMember(memberResponse.data.name);
        // Fetch all book IDs
        const booksResponse = await api.get("/book");
        const bookIDs = booksResponse.data.map((book) => book.bookID);

        // Fetch all authors
        const authorsResponse = await api.get("/author");
        setAuthors(authorsResponse.data);

        // Fetch all categories
        const categoriesResponse = await api.get("/category");
        setCategories(categoriesResponse.data);

        // Fetch details for each book
        const booksData = await Promise.all(
          bookIDs.map(async (bookID) => {
            const bookResponse = await api.get(`/book/${bookID}`);
            return bookResponse.data;
          })
        );

        // Set the fetched book details
        setBooks(booksData);
      } catch (error) {
        // Handle unauthorized error
        if (error.response && error.response.status === 401) {
          handleLogout(); // Logout user if unauthorized
        }
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  const getAuthorName = (bookID) => {
    // Find the author that contains the book with the provided bookID
    const authorOfBook = authors.find((author) =>
      author.books.some((book) => book.bookID === bookID)
    );

    // If an author of the book is found, return their name, otherwise return "Unknown"
    return authorOfBook ? authorOfBook.name : "Unknown";
  };

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
    localStorage.removeItem("memberId");
    navigate("/login");
  };

  //   const getCategoryName = (categoryID) => {
  //     // Find the category that contains the book with the provided categoryID
  //     const categoryContainingBook = categories.find((category) =>
  //       category.books.some((book) => book.bookID === categoryID)
  //     );

  //     // If a category containing the book is found, return its name, otherwise return "Unknown"
  //     return categoryContainingBook
  //       ? categoryContainingBook.categoryName
  //       : "Unknown";
  //   };
  const getCategoryName = (categoryID) => {
    // Find the category that contains the book with the provided categoryID
    const categoryContainingBook = categories.find((category) =>
      category.books.some((book) => book.bookID === categoryID)
    );

    // If a category containing the book is found, return its name, otherwise return "Unknown"
    return categoryContainingBook
      ? categoryContainingBook.categoryName
      : "Unknown";
  };

  return (
    <div className="bg-custom">
      <div className="p-4 min-h-screen">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold text-blue-300 uppercase">
            Library Manager
          </h1>
          <div className="flex items-center">
            <p className="text-white text-shadow mr-4 font-semibold uppercase">
              Hi, {member || "Member"}
            </p>
            <button
              onClick={handleLogout}
              className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="container mx-auto justify-between items-center px-4">
          <h2 className="text-xl text-white text-shadow py-10 font-semibold mb-4 uppercase">
            Welcome, {member || "Member"}!
          </h2>

          <div className="mb-10 p-8 rounded-lg shadow-lg font-semibold bg-opacity-10 bg-white bg-blur-lg bg-clip-padding backdrop-filter backdrop-blur-md text-white border-b-2 border-blue-100 pb-2">
            <h2 className="text-2xl font-semibold mb-4 border-blue-100 border-b-2 text-white text-shadow pb-2">
              Books
            </h2>
            <SearchForm setBooks={setBooks} />
            <div className="mb-4 rounded-lg">
              <table className="w-full rounded-lg shadow-lg mb-4 text-white text-shadow">
                <thead>
                  <tr className="bg-blue-300">
                    <th className="border border-blue-100 px-4 py-2">ID</th>
                    <th className="border border-blue-100 px-4 py-2">Title</th>
                    <th className="border border-blue-100 px-4 py-2">ISBN</th>
                    <th className="border border-blue-100 px-4 py-2">
                      Publisher
                    </th>
                    <th className="border border-blue-100 px-4 py-2">
                      Published Year
                    </th>
                    <th className="border border-blue-100 px-4 py-2">Author</th>
                    <th className="border border-blue-100 px-4 py-2">
                      Category
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr key={book.bookID}>
                      <td className="border border-blue-100 px-4 py-2">
                        {book.bookID}
                      </td>
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
                        {book.yearPublished}
                      </td>
                      <td className="border border-blue-100 px-4 py-2">
                        {getAuthorName(book.bookID)}
                      </td>
                      <td className="border border-blue-100 px-4 py-2">
                        {getCategoryName(book.bookID)}
                      </td>
                      {/* Add other columns for book details and actions */}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* <div className="mb-10 p-8 rounded-lg shadow-lg font-semibold bg-opacity-10 bg-white bg-blur-lg bg-clip-padding backdrop-filter backdrop-blur-md text-white border-b-2 border-blue-100 pb-2">
                <h2 className="text-2xl font-semibold mb-4 border-blue-100 border-b-2 text-white text-shadow pb-2">
                  Book List
                </h2>
                {/* <ul className="text-white text-lg font-medium">
                  {books.map((book) => (
                    <li key={book.id} className="mb-2">
                      {book.title} by {book.author.name} - Category:{" "}
                      {book.category.categoryName}
                    </li>
                  ))}
                </ul> */}
              {/* <ul className="text-white text-lg font-medium">
                  {books.map((book) => (
                    <li key={book.id} className="mb-2">
                      {book.title} by{" "}
                      {book.author ? book.author.name : "Unknown Author"} -
                      Category:{" "}
                      {book.category
                        ? book.category.categoryName
                        : "Unknown Category"}
                    </li>
                  ))}
                </ul>
              </div>  */}
            </div>
          </div>
          {/* <div>
        <h2>Member Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
        {/* Add other member dashboard content here */}
          {/* </div>  */}
        </div>
        <div className="container mx-auto justify-between items-center px-4">
          <div className="mb-10 p-8 rounded-lg shadow-lg font-semibold bg-opacity-10 bg-white bg-blur-lg bg-clip-padding backdrop-filter backdrop-blur-md text-white border-b-2 border-blue-100 pb-2">
            <h2 className="text-2xl font-semibold mb-4 border-blue-100 border-b-2 text-white text-shadow pb-2">
              Your Loans
            </h2>
            <MemberLoanList currentMemberID={currentMemberID} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
