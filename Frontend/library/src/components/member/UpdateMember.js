// // src/components/UpdateMember.js
// import React, { useState, useEffect } from "react";
// import axios from "../../api/axiosConfig";
// import { useParams } from "react-router-dom";

// const UpdateMember = () => {
//   const { id } = useParams();
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   useEffect(() => {
//     axios
//       .get(`/member/${id}`)
//       .then((response) => {
//         setName(response.data.name);
//         setAddress(response.data.address);
//         setEmail(response.data.email);
//         setPhone(response.data.phone);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the member!", error);
//       });
//   }, [id]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const updatedMember = { name, address, email, phone };
//     axios
//       .put(`/member/${id}`, updatedMember)
//       .then((response) => {
//         console.log("Member updated successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error updating the member!", error);
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
//         Address:
//         <input
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <label>
//         Phone:
//         <input
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </label>
//       <button type="submit">Update Member</button>
//     </form>
//   );
// };

// export default UpdateMember;

import React, { useState } from "react";
import axios from "../../api/axiosConfig";

const UpdateMember = ({ member, members, onClose, onSuccess }) => {
  const [name, setName] = useState(member.name);
  const [address, setAddress] = useState(member.address);
  const [email, setEmail] = useState(member.email);
  const [phone, setPhone] = useState(member.phone);
  const [userName, setUserName] = useState(member.userName);
  const [message, setMessage] = useState("");

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    const isUserNameUnique = members.every(
      (m) => m.memberID === member.memberID || m.userName !== userName
    );
    const isEmailUnique = members.every(
      (m) => m.memberID === member.memberID || m.email !== email
    );

    return (
      name &&
      address &&
      emailPattern.test(email) &&
      isEmailUnique &&
      phonePattern.test(phone) &&
      userName &&
      isUserNameUnique
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      setMessage(
        "Please fill out all fields correctly and ensure username and email is unique."
      );
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const updatedMember = { name, address, email, phone, userName };
    axios
      .put(`/member/${member.memberID}`, updatedMember)
      .then((response) => {
        setMessage("Member updated successfully");
        setTimeout(() => {
          setMessage("");
          onSuccess();
        }, 3000);
      })
      .catch((error) => {
        setMessage("There was an error updating the member");
        setTimeout(() => setMessage(""), 3000);
      });
  };

  return (
    <div className="text-gray-800">
      <h2 className="text-xl mb-4 border-gray-800 border-b-2 pb-2">
        Update Member
      </h2>
      {message && <div className="mb-4 text-red-500">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Address:</span>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Phone:</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Username:</span>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-400"
          >
            Update Member
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-white rounded-md bg-gray-300 hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMember;
