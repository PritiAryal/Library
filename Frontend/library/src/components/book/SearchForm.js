// import React, { useState, useEffect } from "react";
// import api from "../../api/axiosConfig";

// const SearchForm = ({ setBooks }) => {
//   const [authors, setAuthors] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const [searchParams, setSearchParams] = useState({
//     title: "",
//     publisher: "",
//     name: "",
//     categoryName: "",
//     yearPublished: "",
//     ISBN: "",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const authorsResponse = await api.get("/author");
//       const categoriesResponse = await api.get("/category");

//       setAuthors(authorsResponse.data);
//       setCategories(categoriesResponse.data);
//     };

//     fetchData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSearchParams((prevParams) => ({
//       ...prevParams,
//       [name]: value,
//     }));
//   };

//   const handleSearch = async () => {
//     const params = new URLSearchParams(searchParams).toString();
//     const response = await api.get(`/book/search?${params}`);
//     setBooks(response.data);
//   };

//   const handleReset = async () => {
//     setSearchParams({
//       title: "",
//       publisher: "",
//       name: "",
//       categoryName: "",
//       yearPublished: "",
//       ISBN: "",
//     });
//     const response = await api.get("/book");
//     setBooks(response.data);
//   };

//   return (
//     <div className="mb-10 p-8 rounded-lg shadow-lg font-semibold bg-opacity-10 bg-white bg-blur-lg bg-clip-padding backdrop-filter backdrop-blur-md text-white border-b-2 border-blue-100 pb-2">
//       <h2 className="text-2xl font-semibold mb-4 border-blue-100 border-b-2 text-white text-shadow pb-2">
//         Search Books
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <input
//           name="title"
//           placeholder="Title"
//           onChange={handleInputChange}
//           className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded"
//         />
//         <input
//           name="publisher"
//           placeholder="Publisher"
//           onChange={handleInputChange}
//           className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded"
//         />
//         <select
//           name="name"
//           onChange={handleInputChange}
//           className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded"
//         >
//           <option value="">Select Author</option>
//           {authors.map((author, index) => (
//             <option key={index} value={author.name}>
//               {author.name}
//             </option>
//           ))}
//         </select>
//         <select
//           name="categoryName"
//           onChange={handleInputChange}
//           className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded"
//         >
//           <option value="">Select Category</option>
//           {categories.map((category, index) => (
//             <option key={index} value={category.categoryName}>
//               {category.categoryName}
//             </option>
//           ))}
//         </select>
//         <input
//           name="yearPublished"
//           placeholder="Year Published"
//           onChange={handleInputChange}
//           className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded"
//         />
//         <input
//           name="ISBN"
//           placeholder="ISBN"
//           onChange={handleInputChange}
//           className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-white font-bold py-2 px-4 rounded"
//         />
//       </div>
//       <button
//         onClick={handleSearch}
//         className="mt-4 bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
//       >
//         Search
//       </button>
//       <button
//         onClick={handleReset}
//         className="mt-4 ml-4 bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

// export default SearchForm;
import React, { useState, useEffect } from "react";
import api from "../../api/axiosConfig";
import "../../index.css";

const SearchForm = ({ setBooks }) => {
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useState({
    title: "",
    publisher: "",
    name: "",
    categoryName: "",
    yearPublished: "",
    ISBN: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const authorsResponse = await api.get("/author");
      const categoriesResponse = await api.get("/category");

      setAuthors(authorsResponse.data);
      setCategories(categoriesResponse.data);
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const validateSearchParams = () => {
    if (
      !searchParams.title ||
      !searchParams.publisher ||
      !searchParams.name ||
      !searchParams.categoryName ||
      !searchParams.yearPublished ||
      !searchParams.ISBN
    ) {
      setError("All fields are required.");
      setTimeout(() => {
        setError("");
      }, 3000); // Hide error after 3 seconds
      return false;
    } else if (
      isNaN(searchParams.yearPublished) ||
      searchParams.yearPublished < 1880 ||
      searchParams.yearPublished > new Date().getFullYear()
    ) {
      setError("Year must be between 1880 and current year.");
      setTimeout(() => {
        setError("");
      }, 3000); // Hide error after 3 seconds
      return false;
    }
    return true;
  };

  const handleSearch = async () => {
    if (validateSearchParams()) {
      const params = new URLSearchParams(searchParams).toString();
      const response = await api.get(`/book/search?${params}`);
      setBooks(response.data);
    }
  };

  const handleReset = async () => {
    setSearchParams({
      title: "",
      publisher: "",
      name: "",
      categoryName: "",
      yearPublished: "",
      ISBN: "",
    });
    const response = await api.get("/book");
    setBooks(response.data);
  };

  return (
    <div className="mb-10 p-8 rounded-lg shadow-lg font-semibold bg-opacity-10 bg-white bg-blur-lg bg-clip-padding backdrop-filter backdrop-blur-md text-shadow text-white border-b-2 border-blue-100 pb-2">
      <h2 className="text-2xl font-semibold mb-4 border-blue-100 border-b-2 text-white text-shadow pb-2">
        Search Books
      </h2>
      {error && (
        <div
          className="bg-red-200 bg-opacity-35 text-shadow text-red-700 px-4 py-3 rounded relative mb-2"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setError("")}
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
              <title>Close</title>
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="title"
          placeholder="Title"
          onChange={handleInputChange}
          className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-shadow text-white font-bold py-2 px-4 rounded"
        />
        <input
          name="publisher"
          placeholder="Publisher"
          onChange={handleInputChange}
          className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-shadow text-white font-bold py-2 px-4 rounded"
        />
        <select
          name="name"
          onChange={handleInputChange}
          className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-shadow text-white font-bold py-2 px-4 rounded"
        >
          <option value="">Select Author</option>
          {authors.map((author, index) => (
            <option key={index} value={author.name} className="text-gray-800">
              {author.name}
            </option>
          ))}
        </select>
        <select
          name="categoryName"
          onChange={handleInputChange}
          className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-shadow text-white font-bold py-2 px-4 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option
              key={index}
              value={category.categoryName}
              className="text-gray-800"
            >
              {category.categoryName}
            </option>
          ))}
        </select>
        <input
          name="yearPublished"
          placeholder="Year Published"
          onChange={handleInputChange}
          className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-shadow text-white font-bold py-2 px-4 rounded"
        />
        <input
          name="ISBN"
          placeholder="ISBN"
          onChange={handleInputChange}
          className="bg-blue-300 bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-20 text-shadow text-white font-bold py-2 px-4 rounded"
        />
      </div>
      <button
        onClick={handleSearch}
        className="mt-4 bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
      <button
        onClick={handleReset}
        className="mt-4 ml-4 bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
      >
        Reset
      </button>
    </div>
  );
};

export default SearchForm;
