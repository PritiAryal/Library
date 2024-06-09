// // src/components/CreateCategory.js
// import React, { useState } from "react";
// import axios from "../../api/axiosConfig";

// const CreateCategory = () => {
//   const [categoryName, setCategoryName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newCategory = { categoryName };
//     axios
//       .post("/category", newCategory)
//       .then((response) => {
//         console.log("Category created successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error creating the category!", error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Category Name:
//         <input
//           type="text"
//           value={categoryName}
//           onChange={(e) => setCategoryName(e.target.value)}
//         />
//       </label>
//       <button type="submit">Create Category</button>
//     </form>
//   );
// };

// export default CreateCategory;
// import React, { useState } from "react";
// import axios from "../../api/axiosConfig";

// const CreateCategory = () => {
//   const [categoryName, setCategoryName] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newCategory = { categoryName };
//     axios
//       .post("/category", newCategory)
//       .then((response) => {
//         console.log("Category created successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error creating the category!", error);
//       });
//   };

//   return (
//     <div className="w-full max-w-xs bg-white p-8 shadow-md rounded pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-gray-800 border-b-2 pb-2">
//         Create Category
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="categoryName"
//           >
//             Category Name:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="categoryName"
//             type="text"
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-gray-800 shadow-lg hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             type="submit"
//           >
//             Create Category
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateCategory;

import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset previous messages
    setError("");
    setSuccessMessage("");

    if (!categoryName) {
      setError("Category Name is required.");
      return;
    }

    if (categoryName.length < 6) {
      setError("Category Name must be at least 6 characters long.");
      return;
    }

    // Check if category already exists
    axios
      .get("/category")
      .then((response) => {
        const existingCategories = response.data;
        const categoryExists = existingCategories.some(
          (category) => category.categoryName === categoryName
        );
        if (categoryExists) {
          setError("Category with the same name already exists.");
        } else {
          const newCategory = { categoryName: categoryName };
          axios
            .post("/category", newCategory)
            .then((response) => {
              setSuccessMessage("Category created successfully");
              setCategoryName(""); // Reset the input field
            })
            .catch((error) => {
              console.error("There was an error creating the category!", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  const handleCloseError = () => {
    setError("");
  };

  const handleCloseSuccess = () => {
    setSuccessMessage("");
  };

  return (
    <div className="w-full max-w-xs bg-white p-8 shadow-md rounded pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-gray-800 border-b-2 pb-2">
        Create Category
      </h2>
      <form onSubmit={handleSubmit}>
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryName"
          >
            Category Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="categoryName"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-gray-800 shadow-lg hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Create Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
