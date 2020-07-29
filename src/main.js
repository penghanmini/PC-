// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.prototype.$axios=axios;

axios.defaults.withCredentials = true;//允许携带cookie

//拦截器
axios.interceptors.response.use(
  response => {
    return response;
  }, error => {
    //显示错误信息
    return Promise.reject(error.response.data)
  }
);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
