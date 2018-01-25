import shineHttp from '@/utils/shineHttp'
import HttpConfig from '@/bean/HttpConfig'

const getResourceList = (params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    url: '/res/list',
    method: 'get',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}

const saveResource = (params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    url: '/res/persist',
    method: 'post',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}

const delResource = (params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    url: '/res/clear',
    method: 'delete',
    params: params,
    reminder: true,
    success: fn1,
    error: fn2
  }))
}

export default {
  getResourceList,
  saveResource,
  delResource
}
