import axios from "axios";
import { BASE_API_URL } from "../lib/config";

const token = localStorage.getItem("coinshoptoken") || "";

export const Axios = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
