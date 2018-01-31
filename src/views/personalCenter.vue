<template>
  <view-box ref="viewBox1">
    <div class="hudu-box">
      <div class="user-head"></div>
      <div class="user-title">{{weChatName}}</div>
    </div>
    <div class="mine">
      <div class="list" @click="enterPatientList">
        <x-icon slot="icon" type="android-contact" style="fill: #5CBA54"></x-icon>
        <span style="margin-left: 4px">我的就诊人</span>
      </div>
      <div class="list">
        <x-icon slot="icon" type="android-list" style="fill: #5CBA54"></x-icon>
        <span style="margin-left: 4px">我的卡包</span>
      </div>
    </div>
    <group gutter="10px">
      <cell title="我的预约" value="查看全部预约" link="/orderList"></cell>
      <cell-box style="justify-content: space-around;">
        <div style="text-align: center;">
          <x-icon slot="icon" type="android-clipboard" style="fill: #00A249"></x-icon>
          <p>待支付</p>
        </div>
        <div style="text-align: center;">
          <x-icon slot="icon" type="android-list" style="fill: #00A249"></x-icon>
          <p>预约成功</p>
        </div>
        <div style="text-align: center;">
          <x-icon slot="icon" type="android-list" style="fill: #00A249"></x-icon>
          <p>预约失败</p>
        </div>
      </cell-box>
    </group>
    <group gutter="10px">
      <cell title="排队信息" link="/patientList">
        <x-icon slot="icon" type="android-contacts" style="display: block;margin-right: 5px;fill: #CDBDEE"></x-icon>
      </cell>
      <cell title="门诊缴费" link="/patientList">
        <x-icon slot="icon" type="android-compass" style="display: block;margin-right: 5px;fill: #FFC089"></x-icon>
      </cell>
      <cell title="检查检验" link="/patientList">
        <x-icon slot="icon" type="android-compass" style="display: block;margin-right: 5px;fill: #BBE69E"></x-icon>
      </cell>
    </group>
    <group gutter="10px">
      <cell title="设置" link="/patientList">
        <x-icon slot="icon" type="android-settings" style="display: block;margin-right: 5px;fill: #A1C5F2"></x-icon>
      </cell>
      <cell title="帮助" link="/patientList">
        <x-icon slot="icon" type="help-circled" style="display: block;margin-right: 5px;fill: #88cffd"></x-icon>
      </cell>
    </group>
  </view-box>
</template>
<script>
import { ViewBox, XHeader, Tab, TabItem, Tabbar, TabbarItem, Swiper, SwiperItem, XButton, Group, Cell, CellBox } from 'vux'
export default {
  components: {
    ViewBox,
    XHeader,
    Tab,
    TabItem,
    Tabbar,
    TabbarItem,
    Swiper,
    SwiperItem,
    XButton,
    Group,
    Cell,
    CellBox
  },
  data () {
    return {
      weChatName: '微信昵称'
    }
  },
  methods: {
    enterPatientList () {
      this.$router.push({path: '/patientList'})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hudu-box {
    position: relative;
    width: 100%;
    height: 80px;
    text-align: center;
    color: #fff;
    background-color: #6CD16C;
  }
  .hudu-box:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -70px;
    z-index: 1;
    content: ' ';
    height: 70px;
    width: 100%;
    border-radius: 0 0 50% 50%;
    background-color: #6CD16C;
  }
  .user-head {
    display: flex;
    height: 80px;
    width: 80px;
    align-items: center;
    position: relative;
    left: calc(100% / 2 - 40px);
    top: 25px;
    background: url(../assets/head.jpg) no-repeat center;
    background-size: cover;
    border-radius: 50%;
    z-index: 2;
  }
  .user-title {
    position: relative;
    line-height: 30px;
    top: 25px;
    z-index: 2;
  }
  .mine {
    margin-top: 35px;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    padding: 45px 0 10px 0;
    z-index: -1;
  }
  .list{
    display: flex;
    align-items: center;
  }
</style>
