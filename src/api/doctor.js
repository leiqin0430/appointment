import HttpConfig from '@/bean/HttpConfig'
import shineHttp from '@/utils/shineHttp'

const getDoctorsByDept = (caller, params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    caller: caller,
    url: '/doctor/dept',
    method: 'get',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}

const getDoctorsByDate = (caller, params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    caller: caller,
    url: '/doctor/date',
    method: 'get',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}

export default {
  getDoctorsByDept,
  getDoctorsByDate
}
