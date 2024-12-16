import axios from "axios";

const REPORT_API_URL = import.meta.env.VITE_REPORT_API_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

export default axios.create({
  baseURL: REPORT_API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
