// // // src/pages/LoginPage.js
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "../api/axiosConfig";

// // const LoginPage = () => {
// //   const [name, setName] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleLogin = async () => {
// //     try {
// //       const response = await axios.post("/staff/login", { name, password });
// //       localStorage.setItem("token", response.data.token);
// //       const tokenOn = localStorage.getItem("token");
// //       if (tokenOn !== null) {
// //         navigate("/dashboard");
// //       }
// //       // navigate("/dashboard");
// //     } catch (error) {
// //       setError("Invalid credentials");
// //       console.error("Login failed", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <input
// //         type="text"
// //         placeholder="Username"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />
// //       <input
// //         type="password"
// //         placeholder="Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <button onClick={handleLogin}>Login</button>
// //       {error && <p style={{ color: "red" }}>{error}</p>}
// //     </div>
// //   );
// // };

// // export default LoginPage;

// // src/pages/LoginPage.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../api/axiosConfig";

// const LoginPage = () => {
//   const [activeTab, setActiveTab] = useState("staff");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const loginEndpoint =
//         activeTab === "staff" ? "/staff/login" : "/member/login";
//       const response = await axios.post(loginEndpoint, { name, password });
//       localStorage.setItem("token", response.data.token);
//       const tokenOn = localStorage.getItem("token");
//       if (tokenOn !== null) {
//         navigate(
//           activeTab === "staff" ? "/staffdashboard" : "/memberdashboard"
//         );
//       }
//     } catch (error) {
//       setError("Invalid credentials");
//       console.error("Login failed", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <div>
//         <button onClick={() => setActiveTab("staff")}>Staff</button>
//         <button onClick={() => setActiveTab("member")}>Member</button>
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Username"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin}>Login</button>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// src/pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import "../index.css";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("staff");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const loginEndpoint =
        activeTab === "staff" ? "/staff/login" : "/member/login";
      const response = await axios.post(loginEndpoint, { name, password });
      localStorage.setItem("token", response.data.token);
      const tokenOn = localStorage.getItem("token");
      if (tokenOn !== null) {
        navigate(
          activeTab === "staff" ? "/staffdashboard" : "/memberdashboard"
        );
      }
    } catch (error) {
      setError("Invalid credentials");
      console.error("Login failed", error);
    }
  };

  return (
    <div className="bg-login">
      <div className="flex items-center justify-center min-h-screen">
        <div className="rounded-lg shadow-lg bg-opacity-10 bg-white bg-blur-lg bg-clip-padding backdrop-filter backdrop-blur-md text-white border-b-2 border-white border-opacity-45 p-8 max-w-md w-full">
          {/* //  "bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full"> */}
          <h1 className="text-2xl font-bold text-white text-shadow text-center border-blue-300 border-b-2 pb-8">
            Library Manager
          </h1>
          {/* <h2 className="text-xl font-semibold text-center text-gray-400 mb-6">
          Login
        </h2> */}
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setActiveTab("staff")}
              className={`w-full px-4 py-2 rounded-bl  ${
                //rounded-l-lg
                activeTab === "staff"
                  ? "bg-blue-300 shadow-lg text-white text-shadow"
                  : "bg-opacity-50 shadow-inner shadow-blue-300 text-gray-200" //bg-gray-200 text-gray-600
              }`}
            >
              Staff
            </button>
            <button
              onClick={() => setActiveTab("member")}
              className={`w-full px-4 py-2 rounded-br ${
                //rounded-r-lg
                activeTab === "member"
                  ? "bg-blue-300 text-white shadow-lg text-shadow"
                  : "bg-opacity-50 shadow-inner shadow-blue-300 text-gray-200"
              }`}
            >
              Member
            </button>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-2 bg-blue-300 text-white font-semibold rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Login
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
