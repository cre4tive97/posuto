import axios from 'axios';

function createAxiosInstance() {
  return axios.create({
    baseURL: 'http://localhost:3000/',
  });
}

export const instance = createAxiosInstance();
