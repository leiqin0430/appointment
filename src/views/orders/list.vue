<template>
  <view-box>
  <!--<div>-->
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">我的预约</x-header>
    <div style="height:44px;margin-top: 46px;">
      <sticky scroll-box="vux_view_box_body" ref="sticky" :offset="46" :check-sticky-support="false">
    <tab :line-width="2" custom-bar-width="60px" :active-color="barActiveColor" :bar-active-color="barActiveColor" v-model="selectedIndex">
      <tab-item @on-item-click="onItemClick">全部预约</tab-item>
      <tab-item @on-item-click="onItemClick">等待支付</tab-item>
      <tab-item @on-item-click="onItemClick">预约成功</tab-item>
      <tab-item @on-item-click="onItemClick">预约失败</tab-item>
    </tab>
    <!--<tab :line-width=2 active-color='#fc378c' v-model="index">-->
      <!--<tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>-->
    <!--</tab>-->
      </sticky>
    </div>
    <div>
    <div class="order-panel" v-for="(item, index) in orderList" :key="index">
      <flexbox :gutter="0">
        <flexbox-item>
          <div class="patient-container">
            <x-icon class="patient-icon" type="android-contact"></x-icon>
            <span style="color: inherit;">{{item.patientName}}</span>
            <span class="patient-type">{{item.tagName}}</span>
          </div>
        </flexbox-item>
        <flexbox-item><div class="order-last" :style="{color: item.statusCode==='1'?'#F76260':item.statusCode==='2'?'#04be02':''}">{{item.statusText}}</div></flexbox-item>
      </flexbox>
      <flexbox :gutter="0">
        <flexbox-item>
          <div class="patient-container">
            <span class="left-span">医生姓名</span>
            <span>{{item.doctorName}}</span>
          </div>
        </flexbox-item>
        <flexbox-item><div class="order-last" :style="{textDecoration: item.statusCode==='3'?'line-through':''}">{{item.cost}}</div></flexbox-item>
      </flexbox>
      <flexbox :gutter="0">
        <flexbox-item>
          <div class="patient-container">
            <span class="left-span">所在科室</span>
            <span>{{item.deptName}}</span>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0">
        <flexbox-item :span="9">
          <div class="patient-container">
            <span class="left-span">就诊时间</span>
            <span>{{item.visitTime}}</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="3" v-if="item.statusCode==='2'">
          <div class="order-last"><x-button mini type="primary" style="padding: 0 5px;">去支付</x-button></div>
        </flexbox-item>
      </flexbox>
    </div>
    </div>
  <!--</div>-->
  </view-box>
</template>
<script>
  import { ViewBox, XHeader, Tab, TabItem, XButton, Group, Cell, CellBox, Panel, Flexbox, FlexboxItem, Sticky } from 'vux'
  export default {
    components: {
      ViewBox,
      XHeader,
      Tab,
      TabItem,
      XButton,
      Group,
      Cell,
      CellBox,
      Panel,
      Flexbox,
      FlexboxItem,
      Sticky
    },
    data () {
      return {
        selectedIndex: 0,
        barActiveColor: '#04be02',
        orderList: [
          {
            patientName: '李林1',
            tagName: '自己',
            doctorName: '穆小龙',
            deptName: '内二科',
            visitTime: '2018-02-30 09:30-11:30',
            statusCode: '1',
            statusText: '等待支付',
            cost: '60元'
          },
          {
            patientName: '李林2',
            tagName: '自己',
            doctorName: '穆小龙',
            deptName: '内二科',
            visitTime: '2018-02-30 09:30-11:30',
            statusCode: '2',
            statusText: '预约成功',
            cost: '80元'
          },
          {
            patientName: '李林3',
            tagName: '自己',
            doctorName: '穆小龙',
            deptName: '内二科',
            visitTime: '2018-02-30 09:30-11:30',
            statusCode: '3',
            statusText: '预约失败',
            cost: '90元'
          },
          {
            patientName: '李林2',
            tagName: '自己',
            doctorName: '穆小龙',
            deptName: '内二科',
            visitTime: '2018-02-30 09:30-11:30',
            statusCode: '2',
            statusText: '预约成功',
            cost: '80元'
          },
          {
            patientName: '李林3',
            tagName: '自己',
            doctorName: '穆小龙',
            deptName: '内二科',
            visitTime: '2018-02-30 09:30-11:30',
            statusCode: '3',
            statusText: '预约失败',
            cost: '90元'
          }
        ]
      }
    },
    methods: {
      onClickBack () {
        this.$router.push({ path: '/personalCenter' })
      },
      onItemClick (index) {
        switch (index) {
          case 0: this.barActiveColor = '#04be02'
                break
          case 1: this.barActiveColor = '#FF9900'
                break
          case 2: this.barActiveColor = '#37AEFC'
                break
          case 3: this.barActiveColor = '#FC378C'
                break
          default: this.barActiveColor = '#04be02'
        }
      }
    }
  }
</script>
<style>
  :root {
    --patient-info-color: #999999;
    --patient-type-color1: #1F83F4;
  }
  .order-panel {
    background-color: #fff;
    margin-top: 6px;
    padding: 10px 0;
    & .patient-container {
        display: flex;
        align-items: center;
        padding-left: 30px;
        font-size: 14px;
        & span {
            color: var(--patient-info-color);
          }
        & .patient-icon {
            display: block;
            margin: 0 5px 0 -3px;
            fill: #C0C0C0
          }
        & .patient-type {
            border: 1px solid var(--patient-type-color1);
            color: var(--patient-type-color1);
            border-radius: 15px;
            line-height: 16px;
            font-size: 12px;
            padding: 0 5px;
            margin-left: 5px;
          }
        & .left-span {
            margin-right: 20px;
          }
      }
    & .order-last {
        text-align: right;
        padding-right: 30px;
      }
  }
</style>
