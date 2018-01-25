<template>
  <view-box>
    <!--<x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>-->
    <x-header slot="header">我的就诊人</x-header>
    <panel header="List of content with image" :footer="footer" :list="list" :type="type"></panel>
    <x-button type="primary" @click.native="goback">primary</x-button>
    <p>还没有就诊人哦，最多可添加7人，快去添加吧！</p>
    <div>
      <div class="patient-list">
        <x-icon type="android-contact" style="display: block;margin-left: 9px;fill: #C0C0C0"></x-icon>
        <span class="patient-name">张三</span>
        <div class="type-tag">自己</div>
        <x-button mini type="primary" style="margin-right: 15px;">编辑</x-button>
      </div>
    </div>
  </view-box>
</template>
<script>
import { ViewBox, XHeader, Swiper, SwiperItem, XButton, Group, Cell, CellBox, Panel, Radio } from 'vux'
import api from '@/api/test'
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
      count: 0,
      type: '5',
      list: [{
        src: '../../assets/head.jpg',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/30x30/3cc51f/ffffff',
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
  created () {
    let me = this
    api.getData(me, null, function (data) {
      console.log('data: \n')
      console.log(data.data)
    })
  },
  methods: {
    goback () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style>
.patient-list {
  display: flex;
  align-items: center;
}
.patient-name {
  margin: 0 5px;
}
.type-tag {
  border: 1px solid green;
  border-radius: 8px;
  height: 18px;
  font-size: 12px;
  padding: 0 5px;
}
.type-tag span {
  font-size: 12px;
}
</style>
