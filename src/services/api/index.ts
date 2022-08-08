import axios from "axios";

export interface candidateData {
  name: string;
  email: string;
  birth: string;
  phone: string;
}

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
