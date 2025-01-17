import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const AUTH_PARCEL_URL = import.meta.env.VITE_AUTH_PARCEL_URL;

const { getTokens } = await import(/* @vite-ignore */ AUTH_PARCEL_URL);
const { accessToken } = await getTokens();

export default axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
