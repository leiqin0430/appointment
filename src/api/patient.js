import HttpConfig from '@/bean/HttpConfig'
import shineHttp from '@/utils/shineHttp'

const getPatientList = (caller, params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    caller: caller,
    url: '/patient/list',
    method: 'get',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}

const savePatient = (caller, params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    caller: caller,
    url: '/patient/save',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}

const delPatient = (caller, params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    caller: caller,
    url: '/patient/delete',
    method: 'delete',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}

const bindMedCard = (caller, params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    caller: caller,
    url: '/patient/save',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}

export default {
  getPatientList,
  savePatient,
  delPatient,
  bindMedCard
}
