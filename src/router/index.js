import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PersonalCenter from '@/views/PersonalCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
