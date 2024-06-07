// src/components/StaffList.js
import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

const StaffList = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios
      .get("/staff")
      .then((response) => {
        setStaff(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the staff data!", error);
      });
  }, []);

  return (
    <div>
      <h2>Staff List</h2>
      <ul>
        {staff.map((staffMember) => (
          <li key={staffMember.staffID}>
            {staffMember.staffName} - {staffMember.staffEmail} -{" "}
            {staffMember.staffUsername} - {staffMember.password} -{" "}
            {staffMember.staffPhone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffList;
