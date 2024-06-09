// import React, { useEffect, useState } from "react";
// import axios from "../../api/axiosConfig";

// const LoanList = () => {
//   const [loans, setLoans] = useState([]);
//   const [memberIDs, setMemberIDs] = useState([]);
//   const [bookIDs, setBookIDs] = useState([]);

//   useEffect(() => {
//     // Fetch all memberIDs
//     axios
//       .get("/member")
//       .then((response) => {
//         const fetchedMemberIDs = response.data.map((member) => member.memberID);
//         setMemberIDs(fetchedMemberIDs);
//         console.log("Fetched Member IDs:", fetchedMemberIDs);
//       })
//       .catch((error) => {
//         console.error("Error fetching member IDs:", error);
//       });

//     // Fetch all bookIDs
//     axios
//       .get("/book")
//       .then((response) => {
//         const fetchedBookIDs = response.data.map((book) => book.bookID);
//         setBookIDs(fetchedBookIDs);
//         console.log("Fetched Book IDs:", fetchedBookIDs);
//       })
//       .catch((error) => {
//         console.error("Error fetching book IDs:", error);
//       });
//   }, []);

//   // Function to handle fetching loans based on memberID and bookID
//   const fetchLoans = () => {
//     // Initialize an empty array to store all loans
//     let allLoans = [];

//     // Iterate over all memberIDs and bookIDs to fetch loans for each combination
//     const fetchLoanDetails = (mID, bID) => {
//       return axios
//         .get(`/loan/loan-details?memberID=${mID}&bookID=${bID}`)
//         .then((response) => {
//           console.log(
//             `Loans data for memberID ${mID} and bookID ${bID}:`,
//             response.data
//           );
//           // Add fetched loans to the allLoans array
//           return response.data.map((loanArray) => ({
//             loan: loanArray[0],
//             bookTitle: loanArray[1],
//             memberName: loanArray[2],
//           }));
//         })
//         .catch((error) => {
//           console.error(
//             `Error fetching loans for memberID ${mID} and bookID ${bID}:`,
//             error
//           );
//           return [];
//         });
//     };

//     const fetchAllLoans = async () => {
//       let loanPromises = [];

//       memberIDs.forEach((mID) => {
//         bookIDs.forEach((bID) => {
//           loanPromises.push(fetchLoanDetails(mID, bID));
//         });
//       });

//       const results = await Promise.all(loanPromises);
//       allLoans = results.flat();
//       console.log("All loans:", allLoans);
//       setLoans(allLoans);
//     };

//     fetchAllLoans();
//   };

//   useEffect(() => {
//     if (memberIDs.length > 0 && bookIDs.length > 0) {
//       fetchLoans();
//     }
//   }, [memberIDs, bookIDs]);

//   useEffect(() => {
//     console.log("Updated loans state:", loans);
//   }, [loans]);

//   return (
//     <div className="container mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Loan List</h2>
//       {/* Loan table */}
//       <table className="table-auto w-full shadow-lg rounded-lg mb-4">
//         <thead>
//           <tr>
//             <th className="border border-gray-800 px-4 py-2">Loan ID</th>
//             <th className="border border-gray-800 px-4 py-2">Book Title</th>
//             <th className="border border-gray-800 px-4 py-2">Member Name</th>
//             <th className="border border-gray-800 px-4 py-2">Loan Date</th>
//             <th className="border border-gray-800 px-4 py-2">Return Date</th>
//             <th className="border border-gray-800 px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loans.length === 0 ? (
//             <tr>
//               <td className="border px-4 py-2" colSpan="6">
//                 No loans found.
//               </td>
//             </tr>
//           ) : (
//             loans.map((loanData, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {loanData.loan.loanID}
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {loanData.bookTitle}
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {loanData.memberName}
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {loanData.loan.loanDate}
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {loanData.loan.returnDate}
//                 </td>
//                 <td className="border border-gray-800 px-4 py-2">
//                   {loanData.loan.status}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LoanList;

import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";
import UpdateLoan from "./UpdateLoan";

const LoanList = () => {
  const [loans, setLoans] = useState([]);
  const [memberIDs, setMemberIDs] = useState([]);
  const [bookIDs, setBookIDs] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch all memberIDs
    axios
      .get("/member")
      .then((response) => {
        const fetchedMemberIDs = response.data.map((member) => member.memberID);
        setMemberIDs(fetchedMemberIDs);
        console.log("Fetched Member IDs:", fetchedMemberIDs);
      })
      .catch((error) => {
        console.error("Error fetching member IDs:", error);
      });

    // Fetch all bookIDs
    axios
      .get("/book")
      .then((response) => {
        const fetchedBookIDs = response.data.map((book) => book.bookID);
        setBookIDs(fetchedBookIDs);
        console.log("Fetched Book IDs:", fetchedBookIDs);
      })
      .catch((error) => {
        console.error("Error fetching book IDs:", error);
      });
  }, []);

  // Function to handle fetching loans based on memberID and bookID
  const fetchLoans = () => {
    let allLoans = [];

    const fetchLoanDetails = (mID, bID) => {
      return axios
        .get(`/loan/loan-details?memberID=${mID}&bookID=${bID}`)
        .then((response) => {
          console.log(
            `Loans data for memberID ${mID} and bookID ${bID}:`,
            response.data
          );
          return response.data.map((loanArray) => ({
            loan: loanArray[0],
            bookTitle: loanArray[1],
            memberName: loanArray[2],
          }));
        })
        .catch((error) => {
          console.error(
            `Error fetching loans for memberID ${mID} and bookID ${bID}:`,
            error
          );
          return [];
        });
    };

    const fetchAllLoans = async () => {
      let loanPromises = [];

      memberIDs.forEach((mID) => {
        bookIDs.forEach((bID) => {
          loanPromises.push(fetchLoanDetails(mID, bID));
        });
      });

      const results = await Promise.all(loanPromises);
      allLoans = results.flat();
      console.log("All loans:", allLoans);
      setLoans(allLoans);
    };

    fetchAllLoans();
  };

  useEffect(() => {
    if (memberIDs.length > 0 && bookIDs.length > 0) {
      fetchLoans();
    }
  }, [memberIDs, bookIDs]);

  const handleRowClick = (loan) => {
    setSelectedLoan(loan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLoan(null);
  };

  return (
    <div className="container mx-auto">
      {/* <h2 className="text-2xl font-bold mb-4">Loan List</h2> */}
      <table className="table-auto w-full shadow-lg rounded-lg mb-4">
        <thead>
          <tr className="bg-blue-300">
            <th className="border border-blue-100 px-4 py-2">Loan ID</th>
            <th className="border border-blue-100 px-4 py-2">Book Title</th>
            <th className="border border-blue-100 px-4 py-2">Member Name</th>
            <th className="border bordeblue-100 px-4 py-2">Loan Date</th>
            <th className="border border-blue-100 px-4 py-2">Return Date</th>
            <th className="border border-blue-100 px-4 py-2">Status</th>
          </tr>
        </thead>
        {/* <tbody>
          {loans.length === 0 ? (
            <tr>
              <td className="border px-4 py-2" colSpan="6">
                No loans found.
              </td>
            </tr>
          ) : (
            loans.map((loanData, index) => (
              <tr key={index} onClick={() => handleRowClick(loanData.loan)}>
                <td className="border border-gray-800 px-4 py-2">
                  {loanData.loan.loanID}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {loanData.bookTitle}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {loanData.memberName}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {loanData.loan.loanDate}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {loanData.loan.returnDate}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {loanData.loan.status}
                </td>
              </tr>
            ))
          )}
        </tbody> */}
        <tbody>
          {loans.length === 0 ? (
            <tr>
              <td className="border px-4 py-2" colSpan="6">
                No loans found.
              </td>
            </tr>
          ) : (
            loans.map((loanData, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(loanData.loan)}
                className="cursor-pointer transition-colors hover:bg-blue-400 hover:bg-opacity-35 hover:shadow-md"
              >
                <td className="border border-blue-100 px-4 py-2">
                  {loanData.loan.loanID}
                </td>
                <td className="border border-blue-100 px-4 py-2">
                  {loanData.bookTitle}
                </td>
                <td className="border border-blue-100 px-4 py-2">
                  {loanData.memberName}
                </td>
                <td className="border border-blue-100 px-4 py-2">
                  {loanData.loan.loanDate}
                </td>
                <td className="border border-blue-100 px-4 py-2">
                  {loanData.loan.returnDate}
                </td>
                <td className="border border-blue-100 px-4 py-2">
                  {loanData.loan.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <UpdateLoan loan={selectedLoan} closeModal={closeModal} />
      )}
    </div>
  );
};

export default LoanList;
