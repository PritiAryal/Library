// src/components/OperationList.js
import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

const OperationList = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    axios
      .get("/operation")
      .then((response) => {
        setOperations(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the operations data!",
          error
        );
      });
  }, []);

  return (
    <div>
      <h2>Operation List</h2>
      <ul>
        {operations.map((operation) => (
          <li key={operation.operationID}>
            {operation.operationType} - {operation.performedDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OperationList;
