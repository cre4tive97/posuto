import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/auth';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
} from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getAuthFromCookie() || '',
    nickname: getUserFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.nickname !== '';
    },
  },
  mutations: {
    setUserToken(state, token) {
      state.token = token;
    },
    setUserNickname(state, nickname) {
      state.nickname = nickname;
    },
    clearToken(state) {
      state.token = '';
    },
    clearNickname(state) {
      state.nickname = '';
    },
  },
  actions: {
    async LOGIN_USER({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('setUserToken', data.token);
      commit('setUserNickname', data.user.nickname);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.nickname);
    },
  },
});
