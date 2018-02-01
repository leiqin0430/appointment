<template>
  <div style="height: 100%;">
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">选择科室</x-header>

    <search style="margin-top: 46px;"
            placeholder="搜索科室"
      @on-result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="searchValue"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>

    <div class="dept-container">
      <div class="dept-left">
        <div class="list" :style="{backgroundColor: item.isSelected?'#fff':''}" v-for="(item, index) in parentDept" :key="index" @click="getChildren(item, index)">
          <div :class="{selected: item.isSelected}"></div>
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="dept-right">
        <div class="list" :style="{color: item.textColor}" v-for="(item, index) in childrenDept" :key="index" @click="changeDeptColor(index)">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { XHeader, Search } from 'vux'
  import api from '@/api/dept'
  export default {
    components: {
      XHeader,
      Search
    },
    data () {
      return {
        results: [],
        searchValue: '',
        parentDept: [],
        childrenDept: []
      }
    },
    created () {
      let me = this
      api.getParentDept(me, null, function (data) {
        me.parentDept = data.page.rows
        me.parentDept.forEach((item, index) => {
          if (item) {
            if (index === 0) {
              item.isSelected = true
              api.getChildrenDept(me, {parentId: item.deptId}, function (data) {
                me.childrenDept = data.page.rows
                me.childrenDept.forEach(item => {
                  if (item) {
                    item.textColor = 'red'
                  }
                })
              })
            } else {
              item.isSelected = false
            }
          }
        })
      })
    },
    methods: {
      onClickBack () {
        this.$router.push({ path: '/home' })
      },
      getChildren (item, index) {
        let me = this
        api.getChildrenDept(me, {parentId: item.deptId}, function (data) {
          me.childrenDept = data.page.rows
          me.childrenDept.forEach(item => {
            if (item) {
              item.textColor = 'red'
            }
          })
        })
        me.parentDept.forEach(item => {
          if (item.isSelected) {
            item.isSelected = false
          }
        })
        me.parentDept[index].isSelected = true
      },
      changeDeptColor (index) {
        this.childrenDept.forEach(item => {
          if (item.textColor === '#00A249') {
            item.textColor = 'red'
          }
        })
        this.childrenDept[index].textColor = '#00A249'
        console.log(this.childrenDept)
      },
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
//        window.alert('you click the result item: ' + JSON.stringify(item))
        this.searchValue = item.deptId
        this.$router.push({path: '/doctor'})
      },
      getResult (val) {
        console.log('on-change', val)
//        this.results = val ? getResult(this.value) : []
        this.results = new Array(8).fill({title: 'test', name: 'search'})
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    }
  }
</script>
<style>
  .dept-container {
    /*margin-top: 90px;*/
    height: 100%;
    display: flex;
    & .dept-left {
        width: 50%;
        overflow: scroll;
      & .list {
          color: #83889A;
          padding: 10px;
          display: flex;
          align-items: center;
        & .selected {
            margin-right: 4px;
            border: 6px solid transparent;
            border-left-color: #00A249;
            border-radius: 3px;
          }
        }
      }
    & .dept-right {
        width: 50%;
        overflow: scroll;
        background-color: #fff;
      & .list {
          padding: 10px;
        }
      }
  }
</style>
