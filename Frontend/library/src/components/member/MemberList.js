// // src/components/MemberList.js
// import React, { useEffect, useState } from "react";
// import axios from "../../api/axiosConfig";
// import DeleteMember from "./DeleteMember";

// const MemberList = () => {
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/member")
//       .then((response) => {
//         setMembers(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the members data!", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Member List</h2>
//       {/* <h4>Books</h4> */}
//       <table className="w-full rounded-2xl shadow-lg mb-4 text-white">
//         <thead>
//           <tr className="bg-blue-300 text-white text-shadow">
//             <th className="border border-blue-100 px-4 py-2">Full Name</th>
//             <th className="border border-blue-100 px-4 py-2">Username</th>
//             <th className="border border-blue-100 px-4 py-2">Email</th>
//             <th className="border border-blue-100 px-4 py-2">Address</th>
//             <th className="border border-blue-100 px-4 py-2">Phone</th>
//             <th className="border border-blue-100 px-4 py-2">Update</th>
//             <th className="border border-blue-100 px-4 py-2">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {members.map((member) => {
//             return (
//               <tr
//                 key={member.memberID}
//                 className="text-white text-shadow text-normal"
//               >
//                 <td className="border border-blue-100 px-4 py-2">
//                   {member.name}
//                 </td>
//                 <td className="border border-blue-100 px-4 py-2">
//                   {member.userName}
//                 </td>
//                 <td className="border border-blue-100 px-4 py-2">
//                   {member.email}
//                 </td>
//                 <td className="border border-blue-100 px-4 py-2">
//                   {member.address}
//                 </td>
//                 <td className="border border-blue-100 px-4 py-2">
//                   {member.phone}
//                 </td>
//                 <td className="border border-blue-100 px-4 py-2 cursor-pointer transition-colors hover:bg-blue-400 hover:bg-opacity-35 hover:shadow-md">
//                   <button
//                     //onClick={() => handleUpdateClick(member)}
//                     className="text-shadow"
//                   >
//                     Update
//                   </button>
//                 </td>
//                 <td className="border border-blue-100 px-4 py-2 cursor-pointer transition-colors hover:bg-blue-400 hover:bg-opacity-35 hover:shadow-md">
//                   <button
//                     onClick={() => handleDeleteSuccess(member.memberID)}
//                     className="text-shadow"
//                   >
//                     <DeleteMember/>
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MemberList;

import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";
import UpdateMember from "./UpdateMember";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = () => {
    axios
      .get("/member")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the members data!", error);
      });
  };

  const handleDeleteSuccess = (memberID) => {
    axios
      .delete(`/member/${memberID}`)
      .then(() => {
        setDeleteMessage("Member deleted successfully");
        fetchMembers(); // Refresh the members list after deletion
      })
      .catch((error) => {
        setDeleteMessage("There was an error deleting the member");
      });

    // Clear delete message after 3 seconds
    setTimeout(() => setDeleteMessage(""), 3000);
  };

  const handleUpdateClick = (member) => {
    setSelectedMember(member);
    setShowUpdateModal(true);
  };

  const handleUpdateSuccess = () => {
    setShowUpdateModal(false);
    fetchMembers();
  };

  return (
    <div>
      {deleteMessage && (
        <div className="mb-4 text-green-500">{deleteMessage}</div>
      )}
      <table className="pl-0 pr-0 min-w-full overflow-hidden w-full rounded-lg shadow-lg mb-4 text-white">
        <thead>
          <tr className="bg-blue-300 text-white text-shadow">
            <th className="border border-blue-100 px-4 py-2">Full Name</th>
            <th className="border border-blue-100 px-4 py-2">Username</th>
            <th className="border border-blue-100 px-4 py-2">Email</th>
            <th className="border border-blue-100 px-4 py-2">Address</th>
            <th className="border border-blue-100 px-4 py-2">Phone</th>
            <th className="border border-blue-100 px-4 py-2">Update</th>
            <th className="border border-blue-100 px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.memberID} className="border-t">
              <td className="border border-blue-100 px-4 py-2">
                {member.name}
              </td>
              <td className="border border-blue-100 px-4 py-2">
                {member.userName}
              </td>
              <td className="border border-blue-100 px-4 py-2">
                {member.email}
              </td>
              <td className="border border-blue-100 px-4 py-2">
                {member.address}
              </td>
              <td className="border border-blue-100 px-4 py-2">
                {member.phone}
              </td>
              <td className="border border-blue-100 py-2 px-4 text-white hover:bg-blue-300 cursor-pointer hover:bg-opacity-45">
                <button onClick={() => handleUpdateClick(member)}>
                  Update
                </button>
              </td>
              <td className="border border-blue-100 py-2 px-4 text-white hover:bg-blue-300 cursor-pointer hover:bg-opacity-45">
                <button onClick={() => handleDeleteSuccess(member.memberID)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <UpdateMember
              member={selectedMember}
              members={members}
              onClose={() => setShowUpdateModal(false)}
              onSuccess={handleUpdateSuccess}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberList;
