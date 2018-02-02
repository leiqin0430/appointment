import HttpConfig from '@/bean/HttpConfig'
import shineHttp from '@/utils/shineHttp'

const getDoctorList = (caller, params, fn1, fn2) => {
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

const getChildrenDept = (caller, params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    caller: caller,
    url: '/dept/children',
    method: 'get',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}

export default {
  getDoctorList,
  getChildrenDept
}
