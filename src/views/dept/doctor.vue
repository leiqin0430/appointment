<template>
  <div style="height: 100%;">
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">{{titleName}}</x-header>

    <tab :line-width="0" v-model="selectedIndex" style="margin-top: 46px;">
      <tab-item :style="{backgroundColor: selectedIndex===0?'#04BE02':'',color: selectedIndex===0?'#fff':'#04BE02'}" @on-item-click="onItemClick">按医生预约</tab-item>
      <tab-item :style="{backgroundColor: selectedIndex===1?'#04BE02':'',color: selectedIndex===1?'#fff':'#04BE02'}" @on-item-click="onItemClick">按时间预约</tab-item>
    </tab>

    <div>
      <div class="doctor-panel"></div>
    </div>
  </div>
</template>
<script>
  import { XHeader, Tab, TabItem } from 'vux'
  import api from '@/api/doctor'
  export default {
    components: {
      XHeader,
      Tab,
      TabItem
    },
    data () {
      return {
        titleName: '',
        selectedIndex: 0,
        doctors: [
          {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '',
            deptName: '',
            describe: '',
            doctId: '',
            doctorStatus: '',
            genius: '',
            recentDate: 12,
            total: 20
          }
        ]
      }
    },
    created () {
      let me = this
      let obj = this.$route.query
      this.titleName = obj.name
      api.getDoctorList(me, {deptId: obj.deptId}, function (data) {
        console.log(data)
        me.doctors = data.page.rows
      })
    },
    methods: {
      onClickBack () {
        this.$router.push({ path: '/dept' })
      },
      onItemClick (index) {
        console.log(index)
      }
    }
  }
</script>
<style>
</style>
