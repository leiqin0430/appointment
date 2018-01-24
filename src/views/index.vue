<template>
  <view-box ref="viewBox">
    <router-view></router-view>
    <tabbar slot="bottom">
      <tabbar-item link="/home">
        <x-icon slot="icon" type="ios-home-outline" size="30"></x-icon>
        <x-icon slot="icon-active" type="ios-home-outline" style="fill: #09BB07" size="30"></x-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/hospitalInfo">
        <x-icon slot="icon" type="ios-paper-outline" size="30"></x-icon>
        <x-icon slot="icon-active" type="ios-paper-outline" style="fill: #09BB07" size="30"></x-icon>
        <span slot="label">院内信息</span>
      </tabbar-item>
      <tabbar-item selected link="/personalCenter">
        <x-icon slot="icon" type="ios-ionic-outline" size="30"></x-icon>
        <x-icon slot="icon-active" type="ios-ionic-outline" style="fill: #09BB07" size="30"></x-icon>
        <span slot="label">个人中心</span>
      </tabbar-item>
    </tabbar>
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
      msg: 'test'
    }
  }
}
</script>
<style>

</style>
