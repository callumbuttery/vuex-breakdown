import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  // State is where we store data
  state: {
    counter: 0,
  },
  // Mutations are methods that CAN change data in the state = need to COMMIT mutations, CAN'T be async
  mutations: {
    increaseCounter(state, number) {
      state.counter += number;
    },
    decreaseCounter(state, number) {
      state.counter -= number;
    }
  },
  // Actions are methods that CAN'T change data in the state = need to DISPATCH actions, CAN be asyc
  actions: {
    async increaseCounterAction({ commit }) {
      console.log('increasingCounter (Action)');
      const response = await axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');

      console.log('response: ', response);
      response && response.data ? commit('increaseCounter', response.data) : commit('increaseCounter', 1);
    },
    async decreaseCounterAction({ commit }) {
      console.log('decreasingCounter (Action)')
      const response = await axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new');

      console.log('response: ', response);
      response && response.data ? commit('decreaseCounter', response.data) : commit('decreaseCounter', 1);
    }
  },
  // Getters allow us to get data from our state, can change or filter data
  getters: {

  },
  modules: {
  }
})
