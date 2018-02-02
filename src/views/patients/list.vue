<template>
  <!--<view-box>-->
  <div style="height: 100%;">
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">我的就诊人</x-header>
    <div style="margin-top: 46px;" :style="{paddingBottom: (patientList.length>0&&patientList.length<7)?'46px':'6px'}">
    <p v-if="!patientList.length" class="patient-message">您还没有添加就诊人哦，最多可添加<span>7</span>人，快
      <span style="text-decoration: underline;" @click="addPatient">点击此处</span>去添加吧！</p>
    <p v-else class="patient-message">您已添加<span>{{patientList.length}}</span>人，还可添加<span>{{7 - patientList.length}}</span>人（最多可添加<span>7</span>人）</p>
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
        <span>{{item.patientName}}</span>
        <div class="patient-type" :style="{borderColor: item.tagColor, color: item.tagColor}">{{item.tagName || '未知'}}</div>
        <div style="margin-left: 16px;">{{item.isDefault?'[默认]':''}}</div>
        <x-button mini type="primary" style="margin-right: 30px; padding: 0 1em;" @click.native="editPatient(item)">编辑</x-button>
      </div>
      <flexbox :gutter="0">
        <flexbox-item><div><div class="patient-id">{{item.idCard}}</div></div></flexbox-item>
        <flexbox-item><div><div class="patient-tel">{{item.phone}}</div></div></flexbox-item>
      </flexbox>
      <flexbox :gutter="0">
        <flexbox-item><div><div class="patient-id" style="border-bottom:none">{{item.cardNo?'已绑定就诊卡':'暂未绑定就诊卡'}}</div></div></flexbox-item>
        <flexbox-item><div><div class="patient-tel" style="color: #1AAD19;border-bottom:none" @click="bindMedCard(item)">{{item.cardNo?'查看就诊卡':'去绑定'}}</div></div></flexbox-item>
      </flexbox>
    </div>
    <div slot="bottom" class="add-patient" v-if="patientList.length>0&&patientList.length<7" @click="addPatient">添加就诊人</div>
    </div>
    </div>
    <!--</view-box>-->
</template>
<script>
import { ViewBox, XHeader, XButton, Flexbox, FlexboxItem } from 'vux'
import api from '@/api/patient'
import common from '@/utils/common'
export default {
  components: {
    ViewBox,
    XHeader,
    XButton,
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
//      me.patientList = data.page.rows
      me.patientList = common.getTagColor(data.page.rows, 'tagCode')
//      me.patientList.forEach(item => {
//        if (item) {
//          switch (item.tagCode) {
//            case '001':
//              item.tagColor = '#1F83F4'
//              break
//            case '002':
//              item.tagColor = '#FC378C'
//              break
//            case '003':
//              item.tagColor = '#04be02'
//              break
//            case '004':
//              item.tagColor = '#FF9900'
//              break
//            case '005':
//              item.tagColor = '#37AEFC'
//              break
//            case '006':
//              item.tagColor = '#6A5ACD'
//              break
//            default:
//              item.tagColor = '#C0C0C0'
//          }
//        }
//      })
    })
  },
  methods: {
    onClickBack () {
      this.$router.push({ path: '/personalCenter' })
    },
    addPatient () {
      this.$router.push({ path: '/patient' })
    },
    editPatient (item) {
      this.$router.push({ path: 'patient', query: item })
    },
    bindMedCard (item) {
      this.$router.push({ path: 'medCard', query: item })
    }
  }
}
</script>
<style>
:root {
  --patient-info-color: #999999;
  --patient-type-color1: #1F83F4;
}
.patient-message {
  font-size: 12px;
  padding: 6px 0 0 10px;
  /*margin-top: 46px;*/
  & span {
      color: #1AAD19;
      margin: 0 4px;
    }
}
.patient-panel {
  background-color: #fff;
  margin-top: 6px;
  & .patient-row1 {
      display: flex;
      align-items: center;
      padding-top: 10px;
  & .patient-icon {
      display: block;
      margin: 0 5px 0 27px;
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
  }
  & .patient-id {
    margin-left: 56px;
    padding: 8px 0;
    color: var(--patient-info-color);
    border-bottom:1px solid #E5E5E5;
    font-size: 14px;
  }
  & .patient-tel {
    text-align: right;
    margin-right: 30px;
    padding: 8px 0;
    color: var(--patient-info-color);
    border-bottom:1px solid #E5E5E5;
    font-size: 14px;
  }
}
.add-patient {
  position: absolute;
  left:0;
  bottom: 0;
  width: 100%;
  line-height: 40px;
  text-align: center;
  background-color: #1AAD19;
  color: #fff;
}
</style>
