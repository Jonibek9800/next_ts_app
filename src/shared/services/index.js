import axios from "axios";
export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const instance = axios.create({
  baseURL: BASE_API_URL,
});
