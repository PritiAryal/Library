// // src/components/CreateMember.js
// import React, { useState } from "react";
// import axios from "../../api/axiosConfig";

// const CreateMember = () => {
//   const [name, setName] = useState("");
//   const [UserName, setUserName] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newMember = { name, address, email, phone };
//     axios
//       .post("/member", newMember)
//       .then((response) => {
//         console.log("Member created successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error creating the member!", error);
//       });
//   };

//   return (
//     <div className="w-full max-w-xs bg-white p-8 shadow-md rounded pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-gray-800 border-b-2 pb-2">
//         Create Member
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="memberName"
//           >
//             Name:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="memberName"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="memberUserName"
//           >
//             User name:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="memberUserName"
//             type="text"
//             value={UserName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="memberAddress"
//           >
//             Address:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="memberAddress"
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="memberEmail"
//           >
//             Email:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="memberEmail"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="memberPhone"
//           >
//             Phone:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="memberPhone"
//             type="number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-gray-800 shadow-lg hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             type="submit"
//           >
//             Create Member
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateMember;

// import React, { useState, useEffect } from "react";
// import axios from "../../api/axiosConfig";

// const CreateMember = () => {
//   const [name, setName] = useState("");
//   const [userName, setUserName] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     setError("");
//     setSuccessMessage("");
//   }, [name, userName, address, email, phone]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!name || !userName || !address || !email || !phone) {
//       setError("All fields are required.");
//       return;
//     }

//     if (userName.length !== 10) {
//       setError("Username must be 10 characters long.");
//       return;
//     }

//     // Check if username already exists
//     axios.get("/member").then((response) => {
//       const existingMembers = response.data;
//       const userNameExists = existingMembers.some(
//         (member) => member.userName === userName
//       );
//       if (userNameExists) {
//         setError("Username already exists.");
//       } else {
//         // Validate email format
//         const emailPattern = /\S+@\S+\.\S+/;
//         if (!emailPattern.test(email)) {
//           setError("Please enter a valid email address.");
//           return;
//         }

//         // Validate phone number
//         if (phone.length !== 10 || isNaN(phone)) {
//           setError("Please enter a valid 10-digit phone number.");
//           return;
//         }

//         const newMember = { name, userName, address, email, phone };
//         axios
//           .post("/member", newMember)
//           .then((response) => {
//             setSuccessMessage("Member created successfully");
//           })
//           .catch((error) => {
//             console.error("There was an error creating the member!", error);
//           });
//       }
//     });

//     // // Check if username already exists
//     // axios.get(`/members/${userName}`).then((response) => {
//     //   if (response.data) {
//     //     setError("Username already exists.");
//     //   } else {
//     //     // Validate email format
//     //     const emailPattern = /\S+@\S+\.\S+/;
//     //     if (!emailPattern.test(email)) {
//     //       setError("Please enter a valid email address.");
//     //       return;
//     //     }

//     //     // Validate phone number
//     //     if (phone.length !== 10 || isNaN(phone)) {
//     //       setError("Please enter a valid 10-digit phone number.");
//     //       return;
//     //     }

//     //     const newMember = { name, userName, address, email, phone };
//     //     axios
//     //       .post("/member", newMember)
//     //       .then((response) => {
//     //         setSuccessMessage("Member created successfully");
//     //       })
//     //       .catch((error) => {
//     //         console.error("There was an error creating the member!", error);
//     //       });
//     //   }
//     // });
//   };

//   return (
//     <div className="w-full max-w-xs bg-white p-8 shadow-md rounded pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-gray-800 border-b-2 pb-2">
//         Create Member
//       </h2>
//       <form onSubmit={handleSubmit}>
//         {error && <div className="text-red-500 mb-4">{error}</div>}
//         {successMessage && (
//           <div className="text-green-500 mb-4">{successMessage}</div>
//         )}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="memberName"
//           >
//             Name:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="memberName"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="memberUserName"
//           >
//             Username:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="memberUserName"
//             type="text"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="memberAddress"
//           >
//             Address:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="memberAddress"
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="memberEmail"
//           >
//             Email:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="memberEmail"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="memberPhone"
//           >
//             Phone:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="memberPhone"
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-gray-800 shadow-lg hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             type="submit"
//           >
//             Create Member
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateMember;

import React, { useState, useEffect } from "react";
import axios from "../../api/axiosConfig";

const CreateMember = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
      setSuccessMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [error, successMessage]);

  useEffect(() => {
    // Force input event on page load for auto-filled values
    const passwordField = document.getElementById("memberPassword");
    if (passwordField && passwordField.value) {
      passwordField.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !userName || !address || !email || !phone || !password) {
      setError("All fields are required.");
      return;
    }

    if (userName.length < 10) {
      setError("Username must be atleast 10 characters long.");
      return;
    }
    if (password.length < 10) {
      setError("Password must be atleast 10 characters long.");
      return;
    }

    axios
      .get("/member")
      .then((response) => {
        const existingMembers = response.data;
        const userNameExists = existingMembers.some(
          (member) => member.userName === userName
        );
        const emailExists = existingMembers.some(
          (member) => member.email === email
        );
        if (userNameExists) {
          setError("Username already exists.");
        } else if (emailExists) {
          setError("Email already exists.");
        } else {
          const emailPattern = /\S+@\S+\.\S+/;
          if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return;
          }

          if (phone.length !== 10 || isNaN(phone)) {
            setError("Please enter a valid 10-digit phone number.");
            return;
          }

          const newMember = { name, userName, password, address, email, phone };
          axios
            .post("/member", newMember)
            .then((response) => {
              setSuccessMessage("Member created successfully");
              // Reset form fields after successful submission
              setName("");
              setUserName("");
              setPassword("");
              setAddress("");
              setEmail("");
              setPhone("");
            })
            .catch((error) => {
              console.error("Error creating member:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching existing members:", error);
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
        Create Member
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
            htmlFor="memberName"
          >
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="memberUserName"
          >
            Username:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberUserName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="memberPassword"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="memberAddress"
          >
            Address:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberAddress"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="memberEmail"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="memberPhone"
          >
            Phone:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberPhone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-blue-300 shadow-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
            type="submit"
          >
            Create Member
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMember;
