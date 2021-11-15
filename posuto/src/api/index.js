import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

function createAxiosInstance() {
  return axios.create({
    baseURL: 'https://posuto.herokuapp.com/',
  });
}
// 액시오스 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `https://posuto.herokuapp.com/${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createAxiosInstance();
export const posts = createInstanceWithAuth('posts');
