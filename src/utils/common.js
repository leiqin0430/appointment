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

const getTagColor = (list, field) => {
  list.forEach(item => {
    if (item) {
      switch (item[field]) {
        case '001':
          item.tagColor = '#1F83F4'
          break
        case '002':
          item.tagColor = '#FC378C'
          break
        case '003':
          item.tagColor = '#04be02'
          break
        case '004':
          item.tagColor = '#FF9900'
          break
        case '005':
          item.tagColor = '#37AEFC'
          break
        case '006':
          item.tagColor = '#6A5ACD'
          break
        default:
          item.tagColor = '#C0C0C0'
      }
    }
  })
  return list
}

export default {
  constObj,
  getUserInfo,
  getDictList,
  getTagColor
}
