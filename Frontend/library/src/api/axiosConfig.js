// // src/api/axiosConfig.js
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8080/api", // Adjust the base URL based on your Spring Boot configuration
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

//export default axiosInstance;

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // Adjust this to your backend URL
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:8080/api", // Adjust baseURL as needed
// });

// // Request interceptor to add Authorization header with token
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Define custom API endpoints
// export const api = {
//   get: (url) => instance.get(url),
//   post: (url, data) => instance.post(url, data),
//   put: (url, data) => instance.put(url, data),
//   delete: (url) => instance.delete(url),
//   // Add the loggedInStaff endpoint
//   loggedInStaff: () => instance.post("/staff/loggedInStaff"),
// };

// export default api;
