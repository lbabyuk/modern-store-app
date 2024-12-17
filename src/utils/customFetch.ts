import axios from "axios";
import { BASE_URL } from "./api-url";

export const customFetch = axios.create({
  baseURL: BASE_URL,
});
