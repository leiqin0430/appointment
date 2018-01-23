<template>
  <div>
    <!--<x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>-->
    <x-header slot="header" @on-click-back="goback">我的就诊人</x-header>
    <p>{{msg}}</p>
  </div>
</template>
<script>
import { ViewBox, XHeader, Swiper, SwiperItem, XButton, Group, Cell, CellBox } from 'vux'
export default {
  components: {
    ViewBox,
    XHeader,
    Swiper,
    SwiperItem,
    XButton,
    Group,
    Cell,
    CellBox
  },
  data () {
    return {
      msg: '就诊人列表'
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
