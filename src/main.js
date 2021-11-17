import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './utils/setRem'
import './assets/css/init.css'
import Vant, { Lazyload } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
