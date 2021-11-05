import axios from 'axios';

function createAxiosInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

export const instance = createAxiosInstance();
