import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//全部引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
//引入Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
//引入Rem 响应式布局
import Rem from '../src/rem/Rem'
Vue.prototype.$Rem = Rem
//全局引入Api
import Net from './api/index'
Vue.prototype.$Net = Net
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
