import Vue from 'vue'
import Vuex from 'vuex'
import chromeService from "../services/chromeService"
import fakeService from "../services/fakeService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    simpleState: null
  },
  mutations: {
    setState(state, payload) {
      console.log('setState', payload);
      state.simpleState = payload.data
    }
  },
  actions: {
    async fetchState({commit}, payload) {
      console.log('fetchState', payload)
      let state = null
      if (process.env.NODE_ENV === 'development') {
        state = await fakeService.getState(payload.iframeId)
      } else {
        state = await chromeService.getState(payload.iframeId)
      }
      commit({type: 'setState', data: state})
    }
  },
  getters: {
    getState: state => state.simpleState
  }
})
