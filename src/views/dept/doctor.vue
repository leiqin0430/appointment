<template>
  <div style="height: 100%;overflow: hidden;">
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">{{titleName}}</x-header>

    <tab :line-width="0" v-model="selectedIndex" style="margin-top: 46px;">
      <tab-item :style="{backgroundColor: selectedIndex===0?'#00A249':'',color: selectedIndex===0?'#fff':'#00A249'}" @on-item-click="onItemClick">按医生预约</tab-item>
      <tab-item :style="{backgroundColor: selectedIndex===1?'#00A249':'',color: selectedIndex===1?'#fff':'#00A249'}" @on-item-click="onItemClick">按时间预约</tab-item>
    </tab>

    <div v-if="selectedIndex===0" style="height: calc(100% - 90px);overflow-y: scroll;">
      <div class="doctor-panel" v-for="(item, index) in doctors" :key="index" @click="onSelectDoctor(item)">
        <div class="headImg"></div>
        <div class="content">
          <div class="row1">
            <span class="name">{{item.name}}</span>
            <span class="title">{{item.title}}</span>
            <span class="grade">{{item.grade}}</span>
          </div>
          <div class="row2">
            <span>最近有号<span class="recentDate">{{item.recentDate}}</span></span>
            <span class="status">{{item.doctorStatus}}</span>
            <x-icon type="chevron-right" size="16" class="d-icon"></x-icon>
          </div>
          <div class="row3">
            <span>擅长:</span>
            <span class="genius">{{item.genius}}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else style="height: calc(100% - 90px);overflow: hidden;">
      <div class="datetime-line">
        <div class="last" @click="switchWeek('last')">
          <x-icon type="chevron-left" size="16" style="fill: #999;margin: 0 5px;"></x-icon>
        </div>
        <div class="date" v-for="(item, index) in dateArr" :key="index" :style="{borderLeft: index===0?'none':'1px solid #eee'}" :class="{'selected': item.isSelected}" @click="onClickDate(index, item.dateStr)">
          <div>{{item.week}}</div>
          <div>{{item.mdStr}}</div>
        </div>
        <div class="next" @click="switchWeek('next')">
          <x-icon type="chevron-right" size="16" style="fill: #999;margin: 0 5px;"></x-icon>
        </div>
      </div>
      <div style="height: calc(100% - 45px);overflow-y: scroll;">
        <div class="doctor-panel" v-for="(item, index) in doctors1" :key="index" @click="onSelectDoctor(item)">
          <div class="headImg"></div>
          <div class="content">
            <div class="row1">
              <span class="name">{{item.name}}</span>
              <span class="title">{{item.title}}</span>
              <span class="grade">{{item.grade}}</span>
            </div>
            <div class="row22">
              <span>擅长:</span>
              <span class="genius">{{item.genius}}</span>
              <span class="status">{{item.doctorStatus}}</span>
              <x-icon type="chevron-right" size="16" class="d-icon"></x-icon>
            </div>
            <div class="row33">
              <span>{{selectedDate}}</span>
              <span style="margin: 0 8px;">{{item.appointInfo.appointTime}}</span>
              <span>{{item.appointInfo.appointType}}</span>
              <span style="margin: 0 8px;color: #FFC24C;">{{item.appointInfo.charge + '元'}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { XHeader, Tab, TabItem, Flexbox, FlexboxItem } from 'vux'
  import api from '@/api/doctor'
  import common from '@/utils/common'
  export default {
    components: {
      XHeader,
      Tab,
      TabItem,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        titleName: '',
        selectedIndex: 1,
        today: Date.parse(new Date()),
        dateArr: [],
        selectedDate: '2017-12-12',
        doctors: [
          {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '可预约',
            genius: '哈哈哈哈哈哈哈哈蓝精灵据了解，的点点滴滴',
            recentDate: 12,
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '可预约',
            genius: '擅长',
            recentDate: 12,
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '可预约',
            genius: '哈哈哈哈哈哈哈哈蓝精灵据了解，的点点滴滴',
            recentDate: 12,
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '可预约',
            genius: '擅长',
            recentDate: 12,
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '可预约',
            genius: '哈哈哈哈哈哈哈哈蓝精灵据了解，的点点滴滴',
            recentDate: 12,
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '可预约',
            genius: '擅长',
            recentDate: 12,
            total: 20
          }
        ],
        doctors1: [
          {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '预约',
            genius: '哈哈哈哈哈哈哈哈蓝精灵据了解，的点点滴滴',
            appointInfo: {
              appointDate: 12,
              appointNum: 5,
              appointTime: '上午',
              appointType: '专家号',
              charge: 80,
              doctorId: ''
            },
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '预约',
            genius: '哈哈哈哈哈哈哈哈蓝精灵据了解，的点点滴滴',
            appointInfo: {
              appointDate: 12,
              appointNum: 5,
              appointTime: '上午',
              appointType: '专家号',
              charge: 80,
              doctorId: ''
            },
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '预约',
            genius: '哈哈哈哈哈哈哈哈蓝精灵据了解，的点点滴滴',
            appointInfo: {
              appointDate: 12,
              appointNum: 5,
              appointTime: '上午',
              appointType: '专家号',
              charge: 80,
              doctorId: ''
            },
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '预约',
            genius: '哈哈哈哈哈哈哈哈蓝精灵据了解，的点点滴滴',
            appointInfo: {
              appointDate: 12,
              appointNum: 5,
              appointTime: '上午',
              appointType: '专家号',
              charge: 80,
              doctorId: ''
            },
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '预约',
            genius: '哈哈哈哈哈哈哈哈蓝精灵据了解，的点点滴滴',
            appointInfo: {
              appointDate: 12,
              appointNum: 5,
              appointTime: '上午',
              appointType: '专家号',
              charge: 80,
              doctorId: ''
            },
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '预约',
            genius: '哈哈哈哈哈哈哈哈蓝精灵据了解，的点点滴滴',
            appointInfo: {
              appointDate: 12,
              appointNum: 5,
              appointTime: '上午',
              appointType: '专家号',
              charge: 80,
              doctorId: ''
            },
            total: 20
          }, {
            name: '李丽丽',
            title: '主治医师',
            grade: '一级专家',
            image: 'url',
            address: '家庭住址',
            deptName: '所在科室名称',
            describe: '医生描述',
            doctId: '',
            doctorStatus: '预约',
            genius: '哈哈哈哈哈哈哈哈蓝精灵据了解，的点点滴滴',
            appointInfo: {
              appointDate: 12,
              appointNum: 5,
              appointTime: '上午',
              appointType: '专家号',
              charge: 80,
              doctorId: ''
            },
            total: 20
          }
        ]
      }
    },
    computed: {
//      dateline: function () {
//        let now = new Date()
//      }
    },
    created () {
      this.tempDate = this.today
      let date = new Date(this.today)
      for (let i = 0; i < 7; i++) {
        let dateObj = common.dateFormat(new Date(date.setDate(date.getDate() + (i === 0 ? 0 : 1))))
        dateObj.isSelected = i === 0
        this.dateArr.push(dateObj)
      }

      let me = this
      let obj = this.$route.query
      this.titleName = obj.name
      if (this.selectedIndex === 0) {
        api.getDoctorsByDept(me, {deptId: obj.deptId}, function (data) {
          console.log(data)
//        me.doctors = data.page.rows
        })
      } else {
        api.getDoctorsByDate(me, {deptId: obj.deptId, startDate: '2018-01-27'}, function (data) {
          console.log(data)
        })
      }
    },
    methods: {
      onClickBack () {
        this.$router.push({ path: '/dept' })
      },
      onItemClick (index) {
        console.log(index)
      },
      onClickDate (index, dateStr) {
        this.dateArr.forEach((item, i, arr) => {
          if (item.isSelected) {
            item.isSelected = false
          }
        })
        this.dateArr[index].isSelected = true
      },
      switchWeek (flag) {
        this.dateArr = []
        let date = new Date(this.tempDate)
        if (flag === 'last') {
          for (let i = 0; i < 7; i++) {
            let dateObj = common.dateFormat(new Date(date.setDate(date.getDate() - 1)))
            dateObj.isSelected = false
            this.dateArr.unshift(dateObj)
          }
          this.tempDate = date.getTime()
        } else {
          date.setDate(date.getDate() + 7)
          this.tempDate = date.getTime()
          for (let i = 0; i < 7; i++) {
            let dateObj = common.dateFormat(new Date(date.setDate(date.getDate() + (i === 0 ? 0 : 1))))
            dateObj.isSelected = false
            this.dateArr.push(dateObj)
          }
        }
      },
      onSelectDoctor (item) {
        this.$router.push({ path: 'doctorDetail', query: item })
      }
    }
  }
</script>
<style>
  :root {
    --doctor-info-color: #999999;
    --doctor-type-color1: #00A249;
  }
  .doctor-panel {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    & .headImg {
        width: 60px;
        height: 60px;
        background: url(../../assets/head.jpg) no-repeat center;
        background-size: cover;
        border-radius: 50%;
      }
      & .content {
          width: calc(100% - 68px);
          font-size: 14px;
          color: var(--doctor-info-color);
          margin-left: 8px;
        & .row1 {
            display: flex;
            align-items: center;
            & .name {
                font-size: 16px;
                color: #000;
                margin-right: 5px;
              }
            & .grade {
                color: #fff;
                margin-left: 5px;
                font-size: 10px;
                background-color: #FFC24C;
                padding: 0 3px;
              }
          }
        & .row2 {
            display: flex;
            align-items: center;
            position: relative;
            & .recentDate {
                color: #00A249;
              }
            & .status {
                position: absolute;
                right: 18px;
                color: #00A249;
              }
            & .d-icon {
                fill: var(--doctor-info-color);
                position: absolute;
                right: 0;
              }
          }
        & .row22 {
            display: flex;
            align-items: center;
            position: relative;
          & .genius {
              display: block;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              width: calc(100% - 84px);
              margin-left: 5px;
            }
          & .status {
              position: absolute;
              right: 18px;
              color: #00A249;
            }
          & .d-icon {
              fill: var(--doctor-info-color);
              position: absolute;
              right: 0;
            }
          }
        & .row3 {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          & .genius {
              margin-left: 5px;
            }
          }
        & .row33 {
          display: flex;
          align-items: center;
            color: #000;
          }
        }
  }

  .datetime-line {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    & .last {
        display: flex;
        align-items: center;
        height: 44px;
      }
    & .date {
        text-align: center;
        color: var(--doctor-info-color);
        width: calc((100% - 52px) / 7);
      }
    & .selected {
        background-color: #00A249;
        color: #fff;
      }
    & .next {
        display: flex;
        align-items: center;
        height: 44px;
      }
  }
</style>
