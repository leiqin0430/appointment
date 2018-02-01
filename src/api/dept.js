import HttpConfig from '@/bean/HttpConfig'
import shineHttp from '@/utils/shineHttp'

const getParentDept = (caller, params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    caller: caller,
    url: '/dept/parent',
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
  getParentDept,
  getChildrenDept
}
