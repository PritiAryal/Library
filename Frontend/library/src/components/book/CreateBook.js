// import React, { useState, useEffect } from "react";
// import axios from "../../api/axiosConfig";

// const CreateBook = () => {
//   const [title, setTitle] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [publisher, setPublisher] = useState("");
//   const [yearPublished, setYearPublished] = useState("");
//   const [categoryID, setCategoryID] = useState("");
//   const [authorID, setAuthorID] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [authors, setAuthors] = useState([]);

//   useEffect(() => {
//     axios.get("/category").then((response) => {
//       setCategories(response.data);
//     });

//     axios.get("/author").then((response) => {
//       setAuthors(response.data);
//     });
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newBook = {
//       title,
//       isbn,
//       publisher,
//       yearPublished,
//     };
//     axios
//       .post(`/book?categoryID=${categoryID}&authorID=${authorID}`, newBook)
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
//           type="number"
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
//               {category.categoryName}
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
//       <button type="submit" onClick={refreshPage}>
//         Create Book
//       </button>
//     </form>
//   );
// };
// function refreshPage() {
//   window.location.reload();
// }

// export default CreateBook;

import React, { useState, useEffect } from "react";
import api from "../../api/axiosConfig";

const fetchStaffId = async () => {
  try {
    const response = await api.post("/staff/loggedInStaff");
    return response.data.userID;
  } catch (error) {
    console.error("Error fetching staff ID:", error);
    return null;
  }
};

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");
  const [yearPublished, setYearPublished] = useState("");
  const [authorID, setAuthorID] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    api
      .get("/author")
      .then((response) => setAuthors(response.data))
      .catch((error) => console.error("Error fetching authors:", error));

    api
      .get("/category")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

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

    if (isbn.length !== 10 || isNaN(isbn)) {
      setError("ISBN must be 10 digit.");
      return false;
    }

    try {
      const response = await api.get("/book");
      const existingBooks = response.data;
      const bookExists = existingBooks.some((book) => book.isbn === isbn);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form fields
    const isValid = await validateFields();
    if (!isValid) {
      return;
    }

    const staffIdResponse = await api.post("/staff/loggedInStaff");
    console.log("Staff ID response:", staffIdResponse);
    const staffID = staffIdResponse.data.staffID; // Ensure correct key
    console.log("Staff ID:", staffID);

    if (!staffID) {
      console.log("Staff ID:", staffID);
      console.error("Staff ID not found");
      return;
    }

    const newBook = {
      title,
      isbn,
      publisher,
      yearPublished,
    };

    try {
      await api.post("/book", newBook, {
        params: {
          categoryID,
          authorID,
          staffID,
        },
      });
      // Handle success - clear form, show message, etc.
      console.log("Book created successfully");
      setSuccessMessage("Book created successfully");
      // Reset form fields
      setTitle("");
      setIsbn("");
      setPublisher("");
      setYearPublished("");
      setAuthorID("");
      setCategoryID("");
    } catch (error) {
      console.error("Error creating book:", error);
      setError("Error creating book.");
    }
  };

  const handleCloseError = () => {
    setError("");
  };

  const handleCloseSuccess = () => {
    setSuccessMessage("");
  };

  // return (
  //   <div>
  //     <h2>Create Book</h2>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         placeholder="Title"
  //         value={title}
  //         onChange={(e) => setTitle(e.target.value)}
  //         required
  //       />
  //       <input
  //         type="text"
  //         placeholder="ISBN"
  //         value={isbn}
  //         onChange={(e) => setIsbn(e.target.value)}
  //         required
  //       />
  //       <input
  //         type="text"
  //         placeholder="Publisher"
  //         value={publisher}
  //         onChange={(e) => setPublisher(e.target.value)}
  //         required
  //       />
  //       <input
  //         type="text"
  //         placeholder="Year Published"
  //         value={yearPublished}
  //         onChange={(e) => setYearPublished(e.target.value)}
  //         required
  //       />
  //       <select
  //         value={authorID}
  //         onChange={(e) => setAuthorID(e.target.value)}
  //         required
  //       >
  //         <option value="">Select Author</option>
  //         {authors.map((author) => (
  //           <option key={author.authorID} value={author.authorID}>
  //             {author.name}
  //           </option>
  //         ))}
  //       </select>
  //       <select
  //         value={categoryID}
  //         onChange={(e) => setCategoryID(e.target.value)}
  //         required
  //       >
  //         <option value="">Select Category</option>
  //         {categories.map((category) => (
  //           <option key={category.categoryID} value={category.categoryID}>
  //             {category.categoryName}
  //           </option>
  //         ))}
  //       </select>
  //       <button type="submit" onClick={refreshPage}>
  //         Create Book
  //       </button>
  //     </form>
  //   </div>
  // );
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-gray-800 border-b-2 pb-2">
        Create Book
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label
            htmlFor="isbn"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ISBN
          </label>
          <input
            type="number"
            id="isbn"
            placeholder="Enter ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label
            htmlFor="publisher"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Publisher
          </label>
          <input
            type="text"
            id="publisher"
            placeholder="Enter publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label
            htmlFor="yearPublished"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Year Published
          </label>
          <input
            type="number"
            id="yearPublished"
            placeholder="Enter year published"
            value={yearPublished}
            onChange={(e) => setYearPublished(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            min="1800" // Set the minimum allowed value
            max={new Date().getFullYear()} // Set the maximum allowed value to the current year
            required
          />
        </div>
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Author
          </label>
          <select
            id="author"
            value={authorID}
            onChange={(e) => setAuthorID(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select Author</option>
            {authors.map((author) => (
              <option key={author.authorID} value={author.authorID}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            value={categoryID}
            onChange={(e) => setCategoryID(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.categoryID} value={category.categoryID}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-gray-800 shadow-lg hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Book
        </button>
      </form>
    </div>
  );
};
function refreshPage() {
  window.location.reload();
}

export default CreateBook;
