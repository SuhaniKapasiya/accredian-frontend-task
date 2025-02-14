import axios from "axios";

const API = axios.create({
  baseURL: "https://accredian-backend-task-nnpe.onrender.com/",
});

// authenticaton API
export const referapi = (data) => API.post("api/refer", data);
