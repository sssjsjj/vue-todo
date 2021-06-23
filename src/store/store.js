import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const storage = {
  fetch() {
    const arr = []
    const dataLength = localStorage.length
    if(dataLength > 0) {
      for(let i=0; i < dataLength; i++) {
        const key = localStorage.key(i)
        if(key !== 'loglevel:webpack-dev-server') {
          const item = localStorage.getItem(key)
          arr.push(JSON.parse(item))
        }
      }
    }
    return arr
  }
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters,
  mutations,
  actions: {
  }
})