import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      tasks: []
  },
  mutations: {
      setTask (state, value) {
          state.tasks = value;
      }
  },
  actions: {

  }
})
