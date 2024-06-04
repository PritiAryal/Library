// src/components/MemberList.js
import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("/member")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the members data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Member List</h2>
      <ul>
        {members.map((member) => (
          <li key={member.memberID}>
            {member.name} - {member.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
