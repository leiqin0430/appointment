import Vue from 'vue'
import Vuex from 'vuex'
import common from '@/utils/common'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 2,
    AUTH_TOKEN: '',
    dictList: []
  },
  mutations: {
    increment: function (ss) {
      ss.count++
    },
    decrement: function (ss) {
      ss.count--
    },
    setToken: function (state, token) {
      state.AUTH_TOKEN = token
    },
    getAllDict: function (ss) {
      let _ss = ss
      common.getDictList(null, function (data) {
        _ss.dictList = data.page.rows
      })
    }
  }
})
