/**
 * Created by leiqin on 2017/9/25.
 */
import Mock from 'mockjs'

const loginUser = [
  {
    id: 1,
    accountNo: 'admin',
    password: 'a',
    name: '雷芹'
  }
]

const users = []

for (let i = 0; i < 80; i++) {
  users.push(
    Mock.mock({
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      addr: Mock.mock('@count(true)'),
      'age|18-60': 1,
      birth: Mock.Random.date(),
      gender: Mock.Random.integer(0, 1)
    })
  )
}

export { loginUser, users }
