/**
 * Created by leiqin on 2017/9/25.
 */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {loginUser} from './data/user'

export default {
  bootstrap () {
    let mock = new MockAdapter(axios)
    mock.onPost('/log/in').reply(cfg => {
      let {accountNo, password} = JSON.parse(cfg.data)
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          let hasUser = loginUser.some(u => {
            if (u.accountNo === accountNo && u.password === password) {
              user = JSON.parse(JSON.stringify(u))
              user.password = undefined
              return true
            }
          })
          if (hasUser) {
            resolve([200, {resultCode: '000000', resultInfo: '登录成功', user}])
          } else {
            resolve([200, {resultCode: '999999', resultInfo: '账号或密码错误'}])
          }
        }, 500)
      })
    })
  }
}
