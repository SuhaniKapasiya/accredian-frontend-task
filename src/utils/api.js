import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"});

// authenticaton API
export const referapi = (data) => API.post("/api/refer", data);
