import shineHttp from '@/utils/shineHttp'
import HttpConfig from '@/bean/HttpConfig'

// 常量对象
const constObj = {
  fileUploadPath: process.env.BASE_URL + '/file/upload',
  defaultPassword: '123456'
}
/**
 * 返回当前登录者姓名
 */
const getUserInfo = function () {
  return JSON.parse(localStorage.getItem('shine_user'))
}
/**
 * 请求系统公共字典
 * @param params
 * @param fn1
 * @param fn2
 * @returns {Promise.<TResult>}
 */
const getDictList = (caller, params, fn1, fn2) => {
  return shineHttp(new HttpConfig({
    caller: caller,
    url: '/dict/list',
    method: 'get',
    params: params,
    reminder: false,
    success: fn1,
    error: fn2
  }))
}

export default {
  constObj,
  getUserInfo,
  getDictList
}
