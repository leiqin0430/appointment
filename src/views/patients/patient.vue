<template>
  <view-box>
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">{{titleType}}就诊人</x-header>
    <!--<x-header slot="header">{{titleType}}就诊人</x-header>-->
    <group title="就诊人信息" label-width="4.5em" label-margin-right="2em" label-align="right" style="margin-top: calc(46px + 0.7em);">
      <x-input title="姓名" v-model="patientInfo.patientName" placeholder="请输入姓名" is-type="china-name" required></x-input>
      <x-input title="身份证号" v-model="patientInfo.idCard" placeholder="请输入身份证号" required></x-input>
      <selector title="性别" v-model="patientInfo.sex" placeholder="请选择性别" :options="genderList"></selector>
      <x-input title="年龄" v-model="patientInfo.age" placeholder="请输入年龄" required></x-input>
      <x-input title="手机号码" v-model="patientInfo.phone" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" required></x-input>
    </group>
    <group>
      <x-switch title="设为默认就诊人" :value-map="[0, 1]" v-model="patientInfo.isDefault"></x-switch>
    </group>
    <!--<group>-->
    <checker
      v-model="patientInfo.tagCode"
      default-item-class="rtype-item"
      :selected-item-class="'rtype-item-selected'+patientInfo.tagCode"
      :radio-required="true"
      style="padding-left: 15px;margin-top: 5px;">
      <checker-item v-for="(item, index) in rtypeList" :style="{borderColor: item.tagColor, color: item.tagColor}" :value="item.dictCode" :key="index" @on-item-click="onItemClick">{{item.dictName}}</checker-item>
    </checker>
    <!--</group>-->
    <!--<group>-->
    <div style="padding: 20px 15px 0 15px;">
      <x-button type="primary" @click.native="savePatient">保存</x-button>
      <x-button type="default" @click.native="delPatient" :disabled="!patientInfo.id">删除</x-button>
    <!--</group>-->
    </div>
  </view-box>
</template>
<script>
  import { ViewBox, XHeader, Group, XInput, XSwitch, Selector, Checker, CheckerItem, XButton } from 'vux'
  import api from '@/api/patient'
  import common from '@/utils/common'
  export default {
    components: {
      ViewBox,
      XHeader,
      Group,
      XInput,
      XSwitch,
      Selector,
      Checker,
      CheckerItem,
      XButton
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
          sex: 1,
          age: '',
          phone: '',
          isDefault: 0,
          tagCode: '',
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
//        me.rtypeList = data.list
        me.rtypeList = common.getTagColor(data.list, 'dictCode')
      })

      let obj = this.$route.query
      if (Object.keys(obj).length !== 0) {
        this.patientInfo.id = obj.id
        this.patientInfo.patientName = obj.patientName
        this.patientInfo.idCard = obj.idCard
        this.patientInfo.sex = obj.sex
        this.patientInfo.age = obj.age
        this.patientInfo.phone = obj.phone
        this.patientInfo.isDefault = obj.isDefault
        this.patientInfo.tagCode = obj.tagCode
        this.titleType = '编辑'
      }
    },
    methods: {
      onItemClick (value, disabled) {
        console.log(value, disabled)
      },
      onClickBack () {
        this.$router.push({ path: '/patientList' })
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
  .rtype-item {
    background-color: #fff;
    /*color: #222;*/
    font-size: 12px;
    padding: 0 8px;
    margin-right: 10px;
    border-radius: 15px;
    border-width: 1px;
    border-style: solid;
  }
  .rtype-item-selected001 {
    background-color: #1F83F4;
    color: #fff !important;
  }
  .rtype-item-selected002 {
    background-color: #FC378C;
    color: #fff !important;
  }
  .rtype-item-selected003 {
    background-color: #04be02;
    color: #fff !important;
  }
  .rtype-item-selected004 {
    background-color: #FF9900;
    color: #fff !important;
  }
  .rtype-item-selected005 {
    background-color: #37AEFC;
    color: #fff !important;
  }
  .rtype-item-selected006 {
    background-color: #6A5ACD;
    color: #fff !important;
  }
</style>
