import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

const MemberLoanList = ({ currentMemberID }) => {
  const [loans, setLoans] = useState([]);
  const [bookIDs, setBookIDs] = useState([]);

  useEffect(() => {
    const fetchBookIDs = async () => {
      try {
        const response = await axios.get("/book");
        const fetchedBookIDs = response.data.map((book) => book.bookID);
        setBookIDs(fetchedBookIDs);
        console.log("Fetched Book IDs:", fetchedBookIDs);
      } catch (error) {
        console.error("Error fetching book IDs:", error);
      }
    };

    fetchBookIDs();
  }, []);

  useEffect(() => {
    const fetchLoansForMember = async () => {
      if (!currentMemberID) return;

      try {
        const loansData = [];

        for (const bookID of bookIDs) {
          try {
            const response = await axios.get(`/loan/loan-details`, {
              params: {
                memberID: currentMemberID,
                bookID: bookID,
              },
            });
            console.log(
              `Response for memberID=${currentMemberID} and bookID=${bookID}:`,
              response.data
            );

            if (response.data && response.data.length > 0) {
              response.data.forEach((loanArray) => {
                loansData.push({
                  loan: loanArray[0],
                  bookTitle: loanArray[1],
                  memberName: loanArray[2],
                });
              });
            }
          } catch (error) {
            console.error(
              `Error fetching loans for memberID ${currentMemberID} and bookID ${bookID}:`,
              error
            );
          }
        }

        setLoans(loansData);
        console.log("Loans for current member:", loansData);
      } catch (error) {
        console.error(
          `Error fetching loans for memberID ${currentMemberID}:`,
          error
        );
      }
    };

    if (bookIDs.length > 0) {
      fetchLoansForMember();
    }
  }, [currentMemberID, bookIDs]);

  return (
    <div className="container mx-auto">
      <table className="min-w-full overflow-hidden w-full rounded-lg shadow-lg mb-4 text-white">
        <thead>
          <tr className="bg-blue-300">
            <th className="border border-blue-100 px-4 py-2">Book Title</th>
            <th className="border border-blue-100 px-4 py-2">Member Name</th>
            <th className="border border-blue-100 px-4 py-2">Loan Date</th>
            <th className="border border-blue-100 px-4 py-2">Due Date</th>
            <th className="border border-blue-100 px-4 py-2">Return Date</th>
            <th className="border border-blue-100">Status</th>
          </tr>
        </thead>
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
                className="cursor-pointer transition-colors hover:bg-blue-400 hover:bg-opacity-35 hover:shadow-md"
              >
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
                  {loanData.loan.dueDate}
                </td>
                <td className="border border-blue-100 px-4 py-2">
                  {loanData.loan.returnDate}
                </td>
                <td className="border border-blue-100">
                  {loanData.loan.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MemberLoanList;
