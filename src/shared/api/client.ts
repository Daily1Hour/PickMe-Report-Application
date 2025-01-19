import axios from "axios";

import { accessToken } from "./tokens";

const API_URL = import.meta.env.VITE_API_URL;

export default axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
