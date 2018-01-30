<template>
  <view-box>
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">{{titleType}}就诊卡</x-header>
    <!--<x-header slot="header">{{titleType}}就诊卡</x-header>-->
    <group title="就诊卡信息" label-width="4.5em" label-margin-right="2em" label-align="right" style="margin-top: calc(46px + 0.7em);">
      <selector title="类型" v-model="cardInfo.type" placeholder="请选择类型" :options="typeList"></selector>
      <x-input title="姓名" v-model="cardInfo.patientName" placeholder="请输入姓名" is-type="china-name" required></x-input>
      <x-input title="身份证号" v-model="cardInfo.idCard" placeholder="请输入身份证号" required></x-input>
      <x-input title="卡号" v-model="cardInfo.cardNo" placeholder="请输入卡号" required></x-input>
    </group>
    <group>
      <x-button type="primary" @click.native="saveCard">确定</x-button>
      <x-button type="default" @click.native="delCard" :disabled="!cardInfo.id">解绑</x-button>
    </group>
  </view-box>
</template>
<script>
  import { ViewBox, XHeader, XInput, Selector, XButton, Group, Cell, CellBox } from 'vux'
  export default {
    components: {
      ViewBox,
      XHeader,
      XInput,
      Selector,
      XButton,
      Group,
      Cell,
      CellBox
    },
    data () {
      return {
        titleType: '绑定',
        typeList: [{key: '1', value: '磁条就诊卡'}, {key: '2', value: '条码就诊卡'}, {key: '3', value: '感应式IC就诊卡'}, {key: '4', value: 'ID就诊卡'}],
        rtypeList: [],
        cardInfo: {
          id: null,
          type: '1',
          patientName: '',
          idCard: '',
          cardNo: ''
        }
      }
    },
    created () {
      let obj = this.$route.query
      if (Object.keys(obj).length !== 0) {
//        this.cardInfo = obj
//        this.titleType = '编辑'
      }
    },
    methods: {
      onClickBack () {
        this.$router.push({ path: '/patientList' })
      },
      saveCard () {
//        let me = this
//        api.savePatient(me, this.cardInfo, function (data) {
//          me.$router.push({ path: '/patientList' })
//        })
        console.log(this.cardInfo)
      },
      delCard () {
//        let me = this
        this.$vux.confirm.show({
          title: '系统提示',
          content: '您确定要解绑该就诊卡吗？',
          onCancel () {
            console.log('plugin cancel')
          },
          onConfirm () {
            console.log('plugin confirm')
//            api.delCard(me, {id: me.cardInfo.id}, function (data) {
//              me.$router.push({ path: '/patientList' })
//            })
          }
        })
      }
    }
  }
</script>
