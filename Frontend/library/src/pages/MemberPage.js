// src/pages/MemberPage.js
import React from "react";
import MemberList from "../components/member/MemberList";
import CreateMember from "../components/member/CreateMember";

const MemberPage = () => {
  return (
    <div>
      <h2>Members</h2>
      <CreateMember />
      <MemberList />
    </div>
  );
};

export default MemberPage;
