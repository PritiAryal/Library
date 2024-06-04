// src/api/axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // Adjust the base URL based on your Spring Boot configuration
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
