import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PersonalCenter from '@/views/PersonalCenter'
import PatientList from '@/views/patient/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PersonalCenter',
      component: PersonalCenter,
      children: [
        {path: 'list', component: PatientList}
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
