// // src/components/CreateLoan.js
// import React, { useState } from "react";
// import axios from "../../api/axiosConfig";

// const CreateLoan = () => {
//   const [bookID, setBookID] = useState("");
//   const [memberID, setMemberID] = useState("");
//   const [loanDate, setLoanDate] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newLoan = { bookID, memberID, loanDate, dueDate, returnDate };
//     axios
//       .post("/loan", newLoan)
//       .then((response) => {
//         console.log("Loan created successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error creating the loan!", error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Book ID:
//         <input
//           type="text"
//           value={bookID}
//           onChange={(e) => setBookID(e.target.value)}
//         />
//       </label>
//       <label>
//         Member ID:
//         <input
//           type="text"
//           value={memberID}
//           onChange={(e) => setMemberID(e.target.value)}
//         />
//       </label>
//       <label>
//         Loan Date:
//         <input
//           type="date"
//           value={loanDate}
//           onChange={(e) => setLoanDate(e.target.value)}
//         />
//       </label>
//       <label>
//         Due Date:
//         <input
//           type="date"
//           value={dueDate}
//           onChange={(e) => setDueDate(e.target.value)}
//         />
//       </label>
//       <label>
//         Return Date:
//         <input
//           type="date"
//           value={returnDate}
//           onChange={(e) => setReturnDate(e.target.value)}
//         />
//       </label>
//       <button type="submit">Create Loan</button>
//     </form>
//   );
// };

// export default CreateLoan;

// import React, { useState, useEffect } from "react";
// import axios from "../../api/axiosConfig";

// const CreateLoan = () => {
//   const [bookID, setBookID] = useState("");
//   const [memberID, setMemberID] = useState("");
//   const [loanDate, setLoanDate] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [status, setStatus] = useState("");
//   const [books, setBooks] = useState([]);
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     // Fetch book data
//     axios
//       .get("/book")
//       .then((response) => {
//         setBooks(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching books:", error);
//       });

//     // Fetch member data
//     axios
//       .get("/member")
//       .then((response) => {
//         setMembers(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching members:", error);
//       });
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newLoan = { memberID, bookID, loanDate, dueDate, returnDate, status };
//     axios
//       .post(`/loan?bookID=${bookID}&memberID=${memberID}`, newLoan)
//       .then((response) => {
//         console.log("Loan created successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error creating the loan!", error);
//       });
//   };

//   return (
//     <div className="w-full max-w-xs bg-white p-8 rounded">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-gray-800 border-b-2 pb-2">
//         Create Author
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Book:
//             <select
//               value={bookID}
//               onChange={(e) => setBookID(e.target.value)}
//               className="w-full px-4 py-2 border rounded"
//             >
//               <option value="">Select Book</option>
//               {books.map((book) => (
//                 <option key={book.id} value={book.id}>
//                   {book.title}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Member:
//             <select
//               value={memberID}
//               onChange={(e) => setMemberID(e.target.value)}
//               className="w-full px-4 py-2 border rounded"
//             >
//               <option value="">Select Member</option>
//               {members.map((member) => (
//                 <option key={member.id} value={member.id}>
//                   {member.name}
//                 </option>
//               ))}
//             </select>
//           </label>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Loan Date:
//             <input
//               type="datetime-local"
//               value={loanDate}
//               onChange={(e) => setLoanDate(e.target.value)}
//               className="w-full px-4 py-2 border rounded"
//             />
//           </label>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Due Date:
//             <input
//               type="datetime-local"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//               className="w-full px-4 py-2 border rounded"
//             />
//           </label>
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Return Date:
//             <input
//               type="datetime-local"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               className="w-full px-4 py-2 border rounded"
//             />
//           </label>
//           <div className="mb-4 text-black">
//             <label className="block text-gray-700 mb-2">Status</label>
//             <select
//               name="status"
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="w-full px-4 py-2 border rounded"
//             >
//               <option value="not returned">Not Returned</option>
//               <option value="returned">Returned</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 border border-transparent rounded-md text-white shadow-lg hover:bg-gray-800 bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Create Loan
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateLoan;

import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const CreateLoan = () => {
  const [bookID, setBookID] = useState("");
  const [memberID, setMemberID] = useState("");
  const [loanDate, setLoanDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [status, setStatus] = useState("not returned");
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  useEffect(() => {
    axios
      .get("/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });

    axios
      .get("/member")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input fields
    if (!bookID || !memberID || !loanDate || !dueDate) {
      setMessageType("error");
      setMessage("Please fill in all required fields.");
      return;
    }

    if (new Date(dueDate) < new Date(loanDate)) {
      setMessageType("error");
      setMessage("Due date cannot be earlier than loan date.");
      return;
    }

    if (status === "returned" && new Date(returnDate) < new Date(loanDate)) {
      setMessageType("error");
      setMessage("Return date cannot be earlier than loan date.");
      return;
    }

    const newLoan = {
      bookID,
      memberID,
      loanDate,
      dueDate,
      returnDate: status === "not returned" ? new Date(0) : returnDate,
      status,
    };

    axios
      .post(`/loan?bookID=${bookID}&memberID=${memberID}`, newLoan)
      .then((response) => {
        setMessageType("success");
        setMessage("Loan created successfully");
        setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
      })
      .catch((error) => {
        setMessageType("error");
        setMessage("There was an error creating the loan!");
        console.error("There was an error creating the loan!", error);
      });
  };

  return (
    <div className="w-full max-w-xs bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-gray-800 border-b-2 pb-2">
        Create Loan
      </h2>
      {message && (
        <div
          className={`mb-4 p-4 rounded ${
            messageType === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <span>{message}</span>
          <button
            onClick={() => setMessage("")}
            className="ml-4 bg-transparent text-2xl leading-none outline-none focus:outline-none"
          >
            &times;
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Book:
            <select
              value={bookID}
              onChange={(e) => setBookID(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            >
              <option value="">Select Book</option>
              {books.map((book) => (
                <option key={book.id} value={book.id}>
                  {book.title}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Member:
            <select
              value={memberID}
              onChange={(e) => setMemberID(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            >
              <option value="">Select Member</option>
              {members.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Loan Date:
            <input
              type="datetime-local"
              value={loanDate}
              onChange={(e) => setLoanDate(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Due Date:
            <input
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </label>
          {status === "returned" && (
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Return Date:
              <input
                type="datetime-local"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full px-4 py-2 border rounded"
                required={status === "returned"}
              />
            </label>
          )}
          <div className="mb-4 text-black">
            <label className="block text-gray-700 mb-2">Status</label>
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="not returned">Not Returned</option>
              <option value="returned">Returned</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md text-white shadow-lg hover:bg-gray-800 bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Loan
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateLoan;
