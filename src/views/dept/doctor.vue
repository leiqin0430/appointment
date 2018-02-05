<template>
  <div style="height: 100%;overflow: hidden;">
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">{{titleName}}</x-header>

    <tab :line-width="0" v-model="selectedIndex" style="margin-top: 46px;">
      <tab-item :style="{backgroundColor: selectedIndex===0?'#00A249':'',color: selectedIndex===0?'#fff':'#00A249'}" @on-item-click="onItemClick">按医生预约</tab-item>
      <tab-item :style="{backgroundColor: selectedIndex===1?'#00A249':'',color: selectedIndex===1?'#fff':'#00A249'}" @on-item-click="onItemClick">按时间预约</tab-item>
    </tab>

    <div v-if="selectedIndex===0" style="height: calc(100% - 90px);overflow-y: scroll;">
      <div class="doctor-panel" v-for="(item, index) in doctors" :key="index">
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
        <x-icon type="chevron-left" size="16" style="fill: #999;"></x-icon>
        <div class="date">
          <div>周一</div>
          <div>02-05</div>
        </div>
        <div class="date">
          <div>周一</div>
          <div>02-05</div>
        </div>
        <div class="date">
          <div>周一</div>
          <div>02-05</div>
        </div>
        <div class="date">
          <div>周一</div>
          <div>02-05</div>
        </div>
        <div class="date">
          <div>周一</div>
          <div>02-05</div>
        </div>
        <div class="date">
          <div>周一</div>
          <div>02-05</div>
        </div>
        <div class="date">
          <div>周一</div>
          <div>02-05</div>
        </div>
        <x-icon type="chevron-right" size="16" style="fill: #999;"></x-icon>
      </div>
      <div style="height: calc(100% - 51px);overflow-y: scroll;">
        <div class="doctor-panel" v-for="(item, index) in doctors1" :key="index">
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
    created () {
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    & .date {
        text-align: center;
        color: var(--doctor-info-color);
        border-left: 1px solid #eee;
      }
  & .date:first-of-type {
    border-left: none;
    }
  }
</style>
