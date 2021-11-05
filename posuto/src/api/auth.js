import { instance } from '@/api/index';

function registerUser(userData) {
  return instance.post('signup', userData);
}

export { registerUser };
