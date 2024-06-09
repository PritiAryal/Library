// import React from "react";
// import CreateLoan from "./CreateLoan";

// const CreateLoanModal = ({ isOpen, onClose }) => {
//   return (
//     <div className={`modal ${isOpen ? "block" : "hidden"}`}>
//       <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
//       <div className="modal-container bg-white w-96 mx-auto mt-20 p-4 rounded shadow-lg">
//         <div
//           className="modal-close cursor-pointer absolute top-0 right-0 p-4"
//           onClick={onClose}
//         >
//           <svg
//             className="fill-current text-black"
//             xmlns="http://www.w3.org/2000/svg"
//             width="18"
//             height="18"
//             viewBox="0 0 18 18"
//           >
//             <path d="M13.06 4.94a.75.75 0 0 0-1.06-1.06L9 7.94 6.06 5.01a.75.75 0 1 0-1.06 1.06L7.94 9l-2.93 2.94a.75.75 0 0 0 1.06 1.06L9 10.06l2.94 2.93a.75.75 0 0 0 1.06-1.06L10.06 9l2.93-2.94z" />
//           </svg>
//         </div>
//         <div className="modal-content p-4">
//           <CreateLoan />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateLoanModal;

import React from "react";
import CreateLoan from "./CreateLoan";

const CreateLoanModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="fixed inset-0 shadow-md bg-gray-900 opacity-50"></div>
      <div className="bg-white w-auto  h-auto mx-4 p-8 rounded-lg shadow-lg relative z-50">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="modal-content p-4">
          <CreateLoan />
        </div>
      </div>
    </div>
  );
};

export default CreateLoanModal;
