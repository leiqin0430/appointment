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

const dateFormat = (date) => {
  // let now = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let w = date.getDay()
  let mm = (m > 9) ? m : ('0' + m)
  let dd = (d > 9) ? d : ('0' + d)
  let ww = ''
  switch (w) {
    case 0:
      ww = '周日'
      break
    case 1:
      ww = '周一'
      break
    case 2:
      ww = '周二'
      break
    case 3:
      ww = '周三'
      break
    case 4:
      ww = '周四'
      break
    case 5:
      ww = '周五'
      break
    case 6:
      ww = '周六'
      break
    default:
      ww = ''
  }

  return {dateStr: y + '-' + mm + '-' + dd, week: ww, mdStr: mm + '-' + dd}
}

export default {
  constObj,
  getUserInfo,
  getDictList,
  getTagColor,
  dateFormat
}
