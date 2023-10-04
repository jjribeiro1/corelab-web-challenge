import axios from "axios";

const productionMode = import.meta.env.PROD;

export const api = axios.create({
  baseURL: productionMode ? import.meta.env.VITE_API_BASE_URL :  "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
