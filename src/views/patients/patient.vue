<template>
  <view-box>
    <x-header slot="header">添加就诊人</x-header>
    <group title="就诊人基本信息">
      <x-input title="姓名" v-model="patientInfo.patientName" placeholder="请输入姓名" is-type="china-name" required></x-input>
      <x-input title="身份证号" v-model="patientInfo.idCard" placeholder="请输入身份证号" required></x-input>
      <selector title="性别" v-model="patientInfo.sex" placeholder="请选择性别" :options="list"></selector>
      <x-input title="年龄" v-model="patientInfo.age" type="text" placeholder="请输入年龄" required></x-input>
      <x-input title="手机号码" v-model="patientInfo.phone" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" required></x-input>
    </group>
    <group>
      <x-switch title="设为默认就诊人" :value-map="['0', '1']" v-model="patientInfo.isDefault"></x-switch>
    </group>
    <checker
      v-model="patientInfo.tagCode"
      default-item-class="demo4-item"
      selected-item-class="demo4-item-selected"
      disabled-item-class="demo4-item-disabled">
      <checker-item :value="'1'" @on-item-click="onItemClick">自己</checker-item>
      <checker-item :value="'2'" @on-item-click="onItemClick">父母</checker-item>
      <checker-item :value="'3'" @on-item-click="onItemClick">子女</checker-item>
      <checker-item :value="'4'" @on-item-click="onItemClick">朋友</checker-item>
    </checker>
    <x-button type="primary" @click.native="savePatient">保存</x-button>
    <x-button type="warn" @click.native="delPatient">删除</x-button>
  </view-box>
</template>
<script>
  import { ViewBox, XHeader, XInput, XSwitch, Selector, Checker, CheckerItem, Swiper, SwiperItem, XButton, Group, Cell, CellBox, Panel, Radio, Flexbox, FlexboxItem } from 'vux'
  import api from '@/api/patient'
  export default {
    components: {
      ViewBox,
      XHeader,
      XInput,
      XSwitch,
      Selector,
      Checker,
      CheckerItem,
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
        patientList: [],
        stringValue: '0',
        list: [{key: '1', value: '男'}, {key: '2', value: '女'}, {key: '0', value: '未知'}],
        patientInfo: {
          id: null,
          patientName: '',
          idCard: '',
          sex: '1',
          age: '',
          phone: '',
          isDefault: '0',
          tagCode: '1',
          openId: '123456'
        }
      }
    },
    methods: {
      goback () {
        this.$router.push({ path: '/' })
      },
      onItemClick (value, disabled) {
        console.log(value, disabled)
      },
      savePatient () {
        let me = this
        api.savePatient(me, this.patientInfo, function (data) {
          me.$router.push({ path: '/patientList' })
        })
      },
      delPatient () {
        let me = this
        api.delPatient(me, {id: this.patientInfo.id}, function (data) {
          me.$router.push({ path: '/patientList' })
        })
      }
    }
  }
</script>
<style>
  .demo4-item {
    background-color: #ddd;
    color: #222;
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 10px;
    line-height: 18px;
    border-radius: 15px;
  }
  .demo4-item-selected {
    background-color: #FF3B3B;
    color: #fff;
  }
  .demo4-item-disabled {
    color: #999;
  }
</style>
