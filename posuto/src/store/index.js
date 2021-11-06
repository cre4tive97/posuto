import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: undefined,
    nickname: undefined,
  },
  getters: {},
  mutations: {
    setUserToken(state, token) {
      state.token = token;
    },
    setUserNickname(state, nickname) {
      state.nickname = nickname;
    },
  },
  actions: {
    async LOGIN_USER({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('setUserToken', data.token);
      commit('setUserNickname', data.user.nickname);
    },
  },
});
