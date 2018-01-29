// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import { ToastPlugin, ConfirmPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

Vue.config.productionTip = false

// const FastClick = require('fastclick')
FastClick.attach(document.body)

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.path === '/') {
    next({path: '/personalCenter'})
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
