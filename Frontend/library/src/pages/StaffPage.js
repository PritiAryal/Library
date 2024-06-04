// src/pages/StaffPage.js
import React from "react";
import StaffList from "../components/staff/StaffList";
import CreateStaff from "../components/staff/CreateStaff";

const StaffPage = () => {
  return (
    <div>
      <h2>Staffs</h2>
      <CreateStaff />
      <StaffList />
    </div>
  );
};

export default StaffPage;
