// // src/components/CreateAuthor.js
// import React, { useState } from "react";
// import axios from "../../api/axiosConfig";

// const CreateAuthor = () => {
//   const [name, setName] = useState("");
//   const [biography, setBiography] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newAuthor = { name, biography };
//     axios
//       .post("/author", newAuthor)
//       .then((response) => {
//         console.log("Author created successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error creating the author!", error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <label>
//         Biography:
//         <input
//           type="text"
//           value={biography}
//           onChange={(e) => setBiography(e.target.value)}
//         />
//       </label>
//       <button type="submit">Create Author</button>
//     </form>
//   );
// };

// export default CreateAuthor;
import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const CreateAuthor = () => {
  const [name, setName] = useState("");
  const [biography, setBiography] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAuthor = { name, biography };
    axios
      .post("/author", newAuthor)
      .then((response) => {
        console.log("Author created successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the author!", error);
      });
  };

  return (
    <div className="w-full max-w-xs bg-white p-8 shadow-md rounded pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-gray-800 border-b-2 pb-2">
        Create Author
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="authorName"
          >
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="authorName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="authorBiography"
          >
            Biography:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="authorBiography"
            type="text"
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-gray-800 shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Create Author
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAuthor;
