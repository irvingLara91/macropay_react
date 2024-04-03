import axios from 'axios';
import BASE_CONFIG from "../env/env";

const baseURL = BASE_CONFIG.backend;

export const InterInstance = axios.create({
  baseURL,
  headers: {
    AccessControlAllowOrigin: '*',
    AccessControlAllowMethods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});
