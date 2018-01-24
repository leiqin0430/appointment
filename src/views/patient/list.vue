<template>
  <view-box>
    <!--<x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>-->
    <x-header slot="header" @on-click-back="goback">我的就诊人</x-header>
    <panel header="List of content with image" :footer="footer" :list="list" :type="type"></panel>
  </view-box>
</template>
<script>
import { ViewBox, XHeader, Swiper, SwiperItem, XButton, Group, Cell, CellBox, Panel, Radio } from 'vux'
export default {
  components: {
    ViewBox,
    XHeader,
    Swiper,
    SwiperItem,
    XButton,
    Group,
    Cell,
    CellBox,
    Panel,
    Radio
  },
  data () {
    return {
      type: '5',
      list: [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        url: 'http://vux.li'
      }
    }
  },
  methods: {
    goback () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style>

</style>
