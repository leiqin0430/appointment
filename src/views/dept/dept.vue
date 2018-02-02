<template>
  <div style="height: 100%;">
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">选择科室</x-header>

    <search style="margin-top: 46px;"
            placeholder="搜索科室"
      @on-change="getResult"
      v-model="searchValue"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
      <div class="dept-search-container">
        <!--<deptItem v-for="(item, index) in searchResults" :dept-name="item.name" :search-value="searchValue" :key="index"></deptItem>-->
        <div class="dept-item" v-for="(item, index) in searchResults" :key="index" @click="resultClick(item)">
          <span v-if="item.name.indexOf(searchValue)===0"><span style="color: #EB6565;">{{searchValue}}</span><span>{{item.name.substring(searchValue.length)}}</span></span>
          <span v-else><span>{{item.name.substring(0, item.name.indexOf(searchValue))}}</span><span style="color: #EB6565;">{{searchValue}}</span><span>{{item.name.substring(item.name.indexOf(searchValue)+searchValue.length)}}</span></span>
        </div>
      </div>
    </search>

    <div class="dept-container">
      <div class="dept-left">
        <div class="list" :style="{backgroundColor: item.isSelected?'#fff':''}" v-for="(item, index) in parentDept" :key="index" @click="selectParentDept(item, index)">
          <div :class="{selected: item.isSelected}"></div>
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="dept-right">
        <div class="list" v-for="(item, index) in childrenDept" :key="index" @click="selectChildDept(item)">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { XHeader, Search } from 'vux'
//  import deptItem from '@/components/deptItem.vue'
  import api from '@/api/dept'
  export default {
    components: {
      XHeader,
      Search
//      deptItem
    },
    data () {
      return {
        searchResults: [],
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
      selectParentDept (item, index) {
        let me = this
        api.getChildrenDept(me, {parentId: item.deptId}, function (data) {
          me.childrenDept = data.page.rows
        })
        me.parentDept.forEach(item => {
          if (item.isSelected) {
            item.isSelected = false
          }
        })
        me.parentDept[index].isSelected = true
      },
      selectChildDept (item) {
        this.$router.push({ path: 'doctor', query: item })
      },
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        this.$router.push({ path: 'doctor', query: item })
      },
      getResult (val) {
        let me = this
        api.getChildrenDept(me, {name: val}, function (data) {
          me.searchResults = data.page.rows
        })
      },
      onSubmit () {
        console.log('on submit')
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
  .dept-search-container {
    & .dept-item {
        padding: 10px 15px;
        position: relative;
      }
    & .dept-item:after {
        content: " ";
        position: absolute;
        top: 43px;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        left: 15px;
      }
    & .dept-item:last-child:after {
      left: 0;
      }
  }
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
