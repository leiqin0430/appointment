<template>
  <view-box>
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">{{titleType}}就诊卡</x-header>
    <!--<x-header slot="header">{{titleType}}就诊卡</x-header>-->
    <group title="就诊卡信息" label-width="4.5em" label-margin-right="2em" label-align="right" style="margin-top: calc(46px + 0.7em);">
      <selector title="类型" v-model="cardInfo.cardType" placeholder="请选择类型" :options="typeList"></selector>
      <x-input title="姓名" v-model="cardInfo.patientName" placeholder="请输入姓名" is-type="china-name" required></x-input>
      <x-input title="身份证号" v-model="cardInfo.idCard" placeholder="请输入身份证号" required></x-input>
      <x-input title="卡号" v-model="cardInfo.cardNo" placeholder="请输入卡号" required></x-input>
    </group>
    <!--<group>-->
    <div style="padding: 20px 15px 0 15px;">
      <x-button type="primary" @click.native="saveCard">确定</x-button>
      <x-button type="default" @click.native="delCard" :disabled="titleType==='绑定'">解绑</x-button>
    </div>
    <!--</group>-->
  </view-box>
</template>
<script>
  import { ViewBox, XHeader, XInput, Selector, XButton, Group } from 'vux'
  import common from '@/utils/common'
  import api from '@/api/patient'
  export default {
    components: {
      ViewBox,
      XHeader,
      XInput,
      Selector,
      XButton,
      Group
    },
    data () {
      return {
        titleType: '绑定',
//        typeList: [{key: '1', value: '磁条就诊卡'}, {key: '2', value: '条码就诊卡'}, {key: '3', value: '感应式IC就诊卡'}, {key: '4', value: 'ID就诊卡'}],
        typeList: [],
        cardInfo: {
          id: null,
          cardType: '',
          patientName: '',
          idCard: '',
          cardNo: ''
        }
      }
    },
    created () {
      let me = this
      // 就诊卡类型
      common.getDictList(me, {type: 'CARD_TYPE'}, function (data) {
        data.list.forEach(item => {
          if (item) {
            me.typeList.push({key: item.dictCode, value: item.dictName})
          }
        })
      })
      let obj = this.$route.query
      if (Object.keys(obj).length !== 0) {
        this.cardInfo.id = obj.id
        this.cardInfo.patientName = obj.patientName
        this.cardInfo.idCard = obj.idCard
        if (obj.cardNo) {
          this.cardInfo.cardType = obj.cardType
          this.cardInfo.cardNo = obj.cardNo
          this.titleType = '编辑'
        }
      }
    },
    methods: {
      onClickBack () {
        this.$router.push({ path: '/patientList' })
      },
      saveCard () {
        let me = this
        // 绑定
        api.bindMedCard(me, {id: this.cardInfo.id, cardNo: this.cardInfo.cardNo, cardType: this.cardInfo.cardType}, function (data) {
          me.$router.push({ path: '/patientList' })
        })
      },
      delCard () {
        let me = this
        this.$vux.confirm.show({
          title: '系统提示',
          content: '您确定要解绑该就诊卡吗？',
          onCancel () {
            console.log('plugin cancel')
          },
          onConfirm () {
            // 解绑
            api.bindMedCard(me, {id: me.cardInfo.id, cardNo: '', cardType: ''}, function (data) {
              me.$router.push({ path: '/patientList' })
            })
          }
        })
      }
    }
  }
</script>
