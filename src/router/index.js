import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const HelloWorld = () => import('@/components/HelloWorld')
const Index = () => import('@/views/index')
const Home = () => import('@/views/home')
const PersonalCenter = () => import('@/views/personalCenter')
const HospitalInfo = () => import('@/views/hospitalInfo')
const PatientList = () => import('@/views/patients/list')
const Patient = () => import('@/views/patients/patient')
const MedCard = () => import('@/views/patients/medCard')

export default new Router({
  routes: [
    // {
    //   path: '/HelloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      component: Index,
      children: [
        {path: 'home', component: Home},
        {path: 'personalCenter', component: PersonalCenter},
        {path: 'hospitalInfo', component: HospitalInfo}
      ]
    },
    {
      path: '/patientList',
      name: 'patientList',
      component: PatientList
    },
    {
      path: '/patient',
      name: 'patient',
      component: Patient,
      props: (route) => ({ query: route.query.q })
    },
    {
      path: '/medCard',
      name: 'medCard',
      component: MedCard,
      props: (route) => ({ query: route.query.q })
    }
  ]
})
