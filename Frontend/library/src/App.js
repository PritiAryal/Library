// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
// import Navigation from "./components/Navigation";
// import AuthorPage from "./pages/AuthorPage";
// import CategoryPage from "./pages/CategoryPage";
// import LoanPage from "./pages/LoanPage";
// import MemberPage from "./pages/MemberPage";
// import TransactionPage from "./pages/TransactionPage";
// import BookPage from "./pages/BookPage";
// import StaffPage from "./pages/StaffPage";
// import OperationPage from "./pages/OperationPage";
// import axiosInstance from "./api/axiosConfig";

// const App = () => {
//   return (
//     <Router>
//       <Navigation />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/book" component={BookPage} />
//         <Route path="/operation" component={OperationPage} />
//         <Route path="/staff" component={StaffPage} />
//         <Route path="/author" component={AuthorPage} />
//         <Route path="/category" component={CategoryPage} />
//         <Route path="/loan" component={LoanPage} />
//         <Route path="/member" component={MemberPage} />
//         <Route path="/transaction" component={TransactionPage} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import Home from "./components/Home";
// import AuthorPage from "./pages/AuthorPage";
// import CategoryPage from "./pages/CategoryPage";
// import LoanPage from "./pages/LoanPage";
// import MemberPage from "./pages/MemberPage";
// import TransactionPage from "./pages/TransactionPage";
// import BookPage from "./pages/BookPage";
// import StaffPage from "./pages/StaffPage";
// import OperationPage from "./pages/OperationPage";

// const App = () => {
//   return (
//     <Router>
//       <Navigation />
//       {/* Route components render when their path matches the current URL */}
//       {window.location.pathname === "/" && <Home />}
//       {window.location.pathname === "/book" && <BookPage />}
//       {window.location.pathname === "/operation" && <OperationPage />}
//       {window.location.pathname === "/staff" && <StaffPage />}
//       {window.location.pathname === "/author" && <AuthorPage />}
//       {window.location.pathname === "/category" && <CategoryPage />}
//       {window.location.pathname === "/loan" && <LoanPage />}
//       {window.location.pathname === "/member" && <MemberPage />}
//       {window.location.pathname === "/transaction" && <TransactionPage />}
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AuthorPage from "./pages/AuthorPage";
import CategoryPage from "./pages/CategoryPage";
import LoanPage from "./pages/LoanPage";
import MemberPage from "./pages/MemberPage";
import TransactionPage from "./pages/TransactionPage";
import BookPage from "./pages/BookPage";
import StaffPage from "./pages/StaffPage";
import OperationPage from "./pages/OperationPage";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact ele={Home} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/operation" element={<OperationPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/author" element={<AuthorPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
