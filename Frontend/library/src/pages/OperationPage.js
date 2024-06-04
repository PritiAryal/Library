// src/pages/OperationPage.js
import React from "react";
import OperationList from "../components/operation/OperationList";
import CreateOperation from "../components/operation/CreateOperation";

const OperationPage = () => {
  return (
    <div>
      <h2>Operations</h2>
      <CreateOperation />
      <OperationList />
    </div>
  );
};

export default OperationPage;
