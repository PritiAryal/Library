// // src/components/UpdateLoan.js
// import React, { useState, useEffect } from "react";
// import axios from "../../api/axiosConfig";
// import { useParams } from "react-router-dom";

// const UpdateLoan = () => {
//   const { id } = useParams();
//   const [bookID, setBookID] = useState("");
//   const [memberID, setMemberID] = useState("");
//   const [loanDate, setLoanDate] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [returnDate, setReturnDate] = useState("");

//   useEffect(() => {
//     axios
//       .get(`/loan/${id}`)
//       .then((response) => {
//         setBookID(response.data.bookID);
//         setMemberID(response.data.memberID);
//         setLoanDate(response.data.loanDate);
//         setDueDate(response.data.dueDate);
//         setReturnDate(response.data.returnDate);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the loan!", error);
//       });
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const updatedLoan = { bookID, memberID, loanDate, dueDate, returnDate };
//     axios
//       .put(`/loan/${id}`, updatedLoan)
//       .then((response) => {
//         console.log("Loan updated successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error updating the loan!", error);
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
//       <button type="submit">Update Loan</button>
//     </form>
//   );
// };

// export default UpdateLoan;

// import React, { useState, useEffect } from "react";
// import axios from "../../api/axiosConfig";

// const UpdateLoan = ({ loan, closeModal }) => {
//   const [loanDetails, setLoanDetails] = useState(loan);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoanDetails({
//       ...loanDetails,
//       [name]: value,
//     });
//   };

//   const handleSave = () => {
//     axios
//       .put(`/loan/${loanDetails.loanID}`, loanDetails)
//       .then((response) => {
//         console.log("Loan updated successfully:", response.data);
//         closeModal();
//       })
//       .catch((error) => {
//         console.error("Error updating loan:", error);
//       });
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
//       <div className="bg-white p-6 rounded shadow-lg w-1/2">
//         <h2 className="text-xl font-bold mb-4">Update Loan</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Loan Date</label>
//           <input
//             type="date"
//             name="loanDate"
//             value={loanDetails.loanDate}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Return Date</label>
//           <input
//             type="date"
//             name="returnDate"
//             value={loanDetails.returnDate}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Status</label>
//           <input
//             type="text"
//             name="status"
//             value={loanDetails.status}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="flex justify-end">
//           <button
//             onClick={closeModal}
//             className="px-4 py-2 mr-2 border rounded bg-gray-300 hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateLoan;

// import React, { useState, useEffect } from "react";
// import axios from "../../api/axiosConfig";

// const UpdateLoan = ({ loan, closeModal }) => {
//   const [loanDetails, setLoanDetails] = useState({
//     ...loan,
//     loanDate: loan.loanDate ? loan.loanDate.substring(0, 16) : "", // Strip seconds if present
//     returnDate: loan.returnDate ? loan.returnDate.substring(0, 16) : "", // Strip seconds if present
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoanDetails({
//       ...loanDetails,
//       [name]: value,
//     });
//   };

//   const handleSave = () => {
//     if (
//       loanDetails.status === "returned" &&
//       (!loanDetails.returnDate || loanDetails.returnDate === "")
//     ) {
//       alert("Please provide a return date for returned status.");
//       return;
//     }

//     axios
//       .put(`/loan/${loanDetails.loanID}`, loanDetails)
//       .then((response) => {
//         console.log("Loan updated successfully:", response.data);
//         closeModal();
//       })
//       .catch((error) => {
//         console.error("Error updating loan:", error);
//       });
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
//       <div className="bg-white p-6 rounded shadow-lg w-1/2">
//         <h2 className="text-xl font-bold mb-4">Update Loan</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Loan Date</label>
//           <input
//             type="datetime-local"
//             name="loanDate"
//             value={loanDetails.loanDate}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Return Date</label>
//           <input
//             type="datetime-local"
//             name="returnDate"
//             value={loanDetails.returnDate}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Status</label>
//           <select
//             name="status"
//             value={loanDetails.status}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded"
//           >
//             <option value="not returned">Not Returned</option>
//             <option value="returned">Returned</option>
//           </select>
//         </div>
//         <div className="flex justify-end">
//           <button
//             onClick={closeModal}
//             className="px-4 py-2 mr-2 border rounded bg-gray-300 hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateLoan;

import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const UpdateLoan = ({ loan, closeModal, onDataUpdate }) => {
  const [loanDetails, setLoanDetails] = useState({
    ...loan,
    loanDate: loan.loanDate ? loan.loanDate.substring(0, 16) : "", // Strip seconds if present
    returnDate: loan.returnDate ? loan.returnDate.substring(0, 16) : "", // Strip seconds if present
    dueDate: loan.dueDate ? loan.dueDate.substring(0, 16) : "", // Strip seconds if present
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails((prevLoanDetails) => ({
      ...prevLoanDetails,
      [name]: value,
      returnDate: value === "not returned" ? null : prevLoanDetails.returnDate,
    }));
  };

  const handleSave = () => {
    if (
      loanDetails.status === "returned" &&
      (!loanDetails.returnDate || loanDetails.returnDate === "")
    ) {
      alert("Please provide a return date for returned status.");
      return;
    }
    axios
      .put(`/loan/${loanDetails.loanID}`, loanDetails)
      .then((response) => {
        console.log("Loan updated successfully:", response.data);
        // Update loan status separately
        axios
          .patch(
            `/loan/${loanDetails.loanID}/status?status=${loanDetails.status}`
          )
          .then((statusResponse) => {
            console.log(
              "Loan status updated successfully:",
              statusResponse.data
            );
            closeModal();
          })
          .catch((statusError) => {
            console.error("Error updating loan status:", statusError);
          });
      })
      .catch((error) => {
        console.error("Error updating loan:", error);
      });
  };

  return (
    <div className="text-black fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-85">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-lg font-bold mb-4 text-left border-gray-800 border-b-2 pb-2">
          Update Loan
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Loan Date</label>
          <input
            type="datetime-local"
            name="loanDate"
            value={loanDetails.loanDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Due Date</label>
          <input
            type="datetime-local"
            name="dueDate"
            value={loanDetails.dueDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        {loanDetails.status === "returned" && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Return Date</label>
            <input
              type="datetime-local"
              name="returnDate"
              value={loanDetails.returnDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Status</label>
          <select
            name="status"
            value={loanDetails.status}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="not returned">Not Returned</option>
            <option value="returned">Returned</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            onClick={closeModal}
            className="w-full px-4 py-2 mr-2 border rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-blue-300 shadow-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 text-shadow"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateLoan;
