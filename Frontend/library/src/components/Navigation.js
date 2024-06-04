// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/book">Books</Link>
        </li>
        <li>
          <Link to="/operation">Operationss</Link>
        </li>
        <li>
          <Link to="/staff">Staffs</Link>
        </li>
        <li>
          <Link to="/author">Authors</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
        <li>
          <Link to="/loan">Loans</Link>
        </li>
        <li>
          <Link to="/member">Members</Link>
        </li>
        <li>
          <Link to="/transaction">Transactions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
