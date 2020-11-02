import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
function storeLocalStore (state) {
  window.localStorage.setItem("userMsg",JSON.stringify(state));
 //页面缓存 刷新不会改变数据
}
export default new Vuex.Store({
  
  state: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
