import { createStore } from 'vuex';

export default createStore({
  state: {
    users: [],
    user: null,
  },
  getters: {},
  mutations: {
    addUser(state, user) {
      state.users = [];

      if (Array.isArray(user)) {
        state.users = [...state.users, ...user];
      } else {
        state.users.push(user);
      }
    },
    removeUsers(state) {
      state.users = [];
    },

    chooseUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    addUser({ commit }, user) {
      commit('addUser', user);
    },

    removeUsers({ commit }) {
      commit('removeUsers');
    },

    chooseUser({ commit }, user) {
      commit('chooseUser', user);
    },
  },
});
