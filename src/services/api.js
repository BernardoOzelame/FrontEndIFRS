import axios from "axios";

const apiService = () => {
  const api = axios.create({
    baseURL: "http://localhost:8000/api/",
  });

  return api;
};

export default apiService;
