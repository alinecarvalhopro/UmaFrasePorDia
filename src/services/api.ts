import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://json-server-patisserie-fraise.onrender.com/',
  timeout: 15000,
});