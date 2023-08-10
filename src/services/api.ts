import axios from 'axios';

export const apiUser = axios.create({
  baseURL: 'https://json-server-patisserie-fraise.onrender.com/',
  timeout: 15000,
});