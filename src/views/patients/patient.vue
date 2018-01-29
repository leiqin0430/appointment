<template>
  <view-box>
    <x-header slot="header">{{titleType}}就诊人</x-header>
    <group title="就诊人基本信息" label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="姓名" v-model="patientInfo.patientName" placeholder="请输入姓名" is-type="china-name" required></x-input>
      <x-input title="身份证号" v-model="patientInfo.idCard" placeholder="请输入身份证号" required></x-input>
      <selector title="性别" v-model="patientInfo.sex" placeholder="请选择性别" :options="genderList"></selector>
      <x-input title="年龄" v-model="patientInfo.age" type="text" placeholder="请输入年龄" required></x-input>
      <x-input title="手机号码" v-model="patientInfo.phone" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" required></x-input>
    </group>
    <group>
      <x-switch title="设为默认就诊人" :value-map="['0', '1']" v-model="patientInfo.isDefault"></x-switch>
    </group>
    <!--<group>-->
    <checker
      v-model="patientInfo.tagCode"
      default-item-class="demo4-item"
      selected-item-class="demo4-item-selected"
      disabled-item-class="demo4-item-disabled"
      style="padding-left: 15px;">
      <!--<checker-item :value="'1'" @on-item-click="onItemClick">自己</checker-item>-->
      <!--<checker-item :value="'2'" @on-item-click="onItemClick">父母</checker-item>-->
      <!--<checker-item :value="'3'" @on-item-click="onItemClick">子女</checker-item>-->
      <!--<checker-item :value="'4'" @on-item-click="onItemClick">朋友</checker-item>-->
      <checker-item v-for="(type, index) in rtypeList" :value="type.dictCode" :key="index" @on-item-click="onItemClick">{{type.dictName}}</checker-item>
    </checker>
    <!--</group>-->
    <group>
    <x-button type="primary" @click.native="savePatient">保存</x-button>
    <x-button type="warn" @click.native="delPatient" v-if="patientInfo.id">删除</x-button>
    <!--<x-button type="default" @click.native="cancelDelPatient" v-if="!patientInfo.id">取消</x-button>-->
    </group>
  </view-box>
</template>
<script>
  import { ViewBox, XHeader, XInput, XSwitch, Selector, Checker, CheckerItem, XButton, Group, Cell, CellBox, Panel, Radio, Flexbox, FlexboxItem } from 'vux'
  import api from '@/api/patient'
  import common from '@/utils/common'
  export default {
    components: {
      ViewBox,
      XHeader,
      XInput,
      XSwitch,
      Selector,
      Checker,
      CheckerItem,
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
        titleType: '添加',
//        genderList: [{key: '1', value: '男'}, {key: '2', value: '女'}, {key: '0', value: '未知'}],
        genderList: [],
        rtypeList: [],
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
    created () {
      let me = this
      // 性别
      common.getDictList(me, {type: 'GENDER'}, function (data) {
        data.list.forEach(item => {
          if (item) {
            me.genderList.push({key: item.dictCode, value: item.dictName})
          }
        })
      })
      // 与就诊人关系
      common.getDictList(me, {type: 'RTYPE'}, function (data) {
        me.rtypeList = data.list
      })
//      console.log(this.$route.query)
      let obj = this.$route.query
      if (Object.keys(obj).length !== 0) {
        this.patientInfo = obj
        this.titleType = '编辑'
      }
    },
    methods: {
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
        this.$vux.confirm.show({
          title: '系统提示',
          content: '您确定要删除该就诊人吗？',
          onCancel () {
            console.log('plugin cancel')
          },
          onConfirm () {
//            console.log('plugin confirm')
            api.delPatient(me, {id: me.patientInfo.id}, function (data) {
              me.$router.push({ path: '/patientList' })
            })
          }
        })
      }
    }
  }
</script>
<style>
  .demo4-item {
    background-color: #ddd;
    color: #222;
    font-size: 12px;
    padding: 0 8px;
    margin-right: 10px;
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
