<template>
  <view-box>
    <!--<x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>-->
    <x-header slot="header">我的就诊人</x-header>
    <!--<x-button type="primary" @click.native="goback">primary</x-button>-->
    <p>您还没有添加就诊人哦，最多可添加7人，快
      <span style="color: #1AAD19;text-decoration: underline;" @click="addPatient">点击此处</span>去添加吧！</p>
    <!--<div class="patient-panel">-->
      <!--<div class="patient-row1">-->
        <!--<x-icon class="patient-icon" type="android-contact"></x-icon>-->
        <!--<span class="patient-name">张三</span>-->
        <!--<div class="patient-type">自己</div>-->
        <!--<x-button mini type="primary" style="margin-right: 15px;">编辑</x-button>-->
      <!--</div>-->
      <!--<flexbox :gutter="0">-->
        <!--<flexbox-item><div><div class="patient-id">511621199011055944</div></div></flexbox-item>-->
        <!--<flexbox-item><div><div class="patient-tel">18700571926</div></div></flexbox-item>-->
      <!--</flexbox>-->
      <!--<flexbox :gutter="0">-->
        <!--<flexbox-item><div><div class="patient-id" style="border-bottom:none">已绑定就诊卡</div></div></flexbox-item>-->
        <!--<flexbox-item><div><div class="patient-tel" style="color: #1AAD19;border-bottom:none">查看就诊卡</div></div></flexbox-item>-->
      <!--</flexbox>-->
    <!--</div>-->

    <div class="patient-panel" v-for="(item, index) in patientList" :key="index">
      <div class="patient-row1">
        <x-icon class="patient-icon" type="android-contact"></x-icon>
        <span class="patient-name">{{item.patientName}}</span>
        <div class="patient-type">{{item.tagName || '未知'}}</div>
        <x-button mini type="primary" style="margin-right: 15px;" @click.native="editPatient(item)">编辑</x-button>
      </div>
      <flexbox :gutter="0">
        <flexbox-item><div><div class="patient-id">{{item.idCard}}</div></div></flexbox-item>
        <flexbox-item><div><div class="patient-tel">{{item.phone}}</div></div></flexbox-item>
      </flexbox>
      <flexbox :gutter="0">
        <flexbox-item><div><div class="patient-id" style="border-bottom:none">已绑定就诊卡</div></div></flexbox-item>
        <flexbox-item><div><div class="patient-tel" style="color: #1AAD19;border-bottom:none">查看就诊卡</div></div></flexbox-item>
      </flexbox>
    </div>
  </view-box>
</template>
<script>
import { ViewBox, XHeader, Swiper, SwiperItem, XButton, Group, Cell, CellBox, Panel, Radio, Flexbox, FlexboxItem } from 'vux'
import api from '@/api/patient'
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
    Radio,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      patientList: []
    }
  },
  created () {
    let me = this
    api.getPatientList(me, {openId: '123456'}, function (data) {
      console.log(data)
      me.patientList = data.page.rows
    })
  },
  methods: {
    goback () {
      this.$router.push({ path: '/' })
    },
    addPatient () {
      this.$router.push({ path: '/patient' })
    },
    editPatient (item) {
      this.$router.push({ path: '/patient' })
    }
  }
}
</script>
<style>
:root {
  --patient-info-color: #999999;
  --patient-type-color1: #1F83F4;
}
.patient-panel {
  background-color: #fff;
  & .patient-row1 {
      display: flex;
      align-items: center;
      padding-top: 10px;
  & .patient-icon {
      display: block;
      margin-left: 9px;
      fill: #C0C0C0
    }
  & .patient-name {
      margin: 0 5px;
    }
  & .patient-type {
      border: 1px solid var(--patient-type-color1);
      color: var(--patient-type-color1);
      border-radius: 8px;
      height: 18px;
      font-size: 12px;
      padding: 0 5px;
    }
  }
  & .patient-id {
    margin-left: 38px;
    padding: 8px 0;
    color: var(--patient-info-color);
    border-bottom:1px solid #E5E5E5;
    font-size: 14px;
  }
  & .patient-tel {
    text-align: right;
    margin-right: 15px;
    padding: 8px 0;
    color: var(--patient-info-color);
    border-bottom:1px solid #E5E5E5;
    font-size: 14px;
  }
}
</style>
