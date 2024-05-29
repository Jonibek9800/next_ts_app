import axios from "axios";
export const BASE_API_URL = process.env.BASE_API_URL;

export const instance = axios.create({
  baseURL: `${BASE_API_URL}/api`,
});
