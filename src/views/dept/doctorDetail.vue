<template>
  <div style="height: 100%;overflow: hidden;">
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">医生详情</x-header>
    <div style="height: calc(100% - 46px);overflow-y: scroll;margin-top: 46px">
      <div class="doctor-detail-top">
        <div class="headImg"></div>
        <div class="content">
          <div class="row1">
            <span class="name">{{doctor.name}}</span>
            <span class="grade">{{doctor.grade}}</span>
          </div>
          <div class="row2">
            <span class="title">{{doctor.title}}</span>
          </div>
          <div class="row3">
            <span class="title">{{doctor.deptName}}</span>
          </div>
        </div>
        <div class="star">
          <x-icon type="android-star-outline" size="24" class="d-icon"></x-icon>
          <div>收藏</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { XHeader, Tab, TabItem, Flexbox, FlexboxItem } from 'vux'
//  import api from '@/api/doctor'
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
        doctor: {}
      }
    },
    created () {
      let obj = this.$route.query
      this.doctor = obj
    },
    methods: {
      onClickBack () {
        this.$router.push({ path: 'doctor', query: {} })
      }
    }
  }
</script>
<style>
  .doctor-detail-top {
    display: flex;
    padding: 15px;
    position: relative;
    align-items: center;
  & .headImg {
      width: 80px;
      height: 80px;
      background: url(../../assets/head.jpg) no-repeat center;
      background-size: cover;
      border-radius: 50%;
    }
    & .content {
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
      }
    & .star {
        position: absolute;
        right: 30px;
        text-align: center;
      }
  }
</style>
