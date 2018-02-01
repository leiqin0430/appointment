<template>
  <div style="height: 100%;">
    <x-header slot="header" :left-options="{preventGoBack: true}" @on-click-back="onClickBack" style="width:100%;position:absolute;left:0;top:0;z-index:100;">选择医生</x-header>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  export default {
    components: {
      XHeader
    },
    data () {
      return {
        msg: '医生列表'
      }
    },
    methods: {
      onClickBack () {
        this.$router.push({ path: '/dept' })
      }
    }
  }
</script>
