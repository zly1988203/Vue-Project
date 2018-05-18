// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import store from '../store/'

Vue.config.productionTip = false
Vue.use(router)
Vue.prototype.$http = axios

require('./assets/rem.js')
require('./assets/base.css')
require('./assets/icomoon/style.css')
require('../static/cn.js')

/* eslint-disable no-new */
new Vue({
  store,
  router
}).$mount('#main')
