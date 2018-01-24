<template>
  <div id="app" style="height: 100%;">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
@import "~vux/src/styles/reset.less";
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: #EFEFF4;
}
</style>
