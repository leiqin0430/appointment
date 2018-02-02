<template>
  <div class="dept-item">
    <span v-if="!checkFlag"><span style="color: red;">{{searchValue}}</span><span>{{restText}}</span></span>
    <span v-else><span>{{leftText}}</span><span style="color: red;">{{searchValue}}</span><span>{{restText}}</span></span>
  </div>
</template>
<script>
  export default {
    props: {deptName: String, searchValue: String},
    data () {
      return {
//        flag: true,
//        leftText: '',
//        restText: ''
      }
    },
    computed: {
      checkFlag: function () {
        return this.deptName.indexOf(this.searchValue) > 0
      },
      leftText: function () {
        if (this.checkFlag) {
          return this.deptName.substring(0, this.deptName.indexOf(this.searchValue))
        } else {
          return ''
        }
      },
      restText: function () {
        return this.deptName.substring(this.deptName.indexOf(this.searchValue) + this.searchValue.length)
      }
    }
  }
</script>
<style scoped>
  .dept-item {
    padding: 10px 15px;
    position: relative;
  }
  .dept-item:after {
    content: " ";
    position: absolute;
    top: 43px;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #D9D9D9;
    color: #D9D9D9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 15px;
  }
  .dept-item:last-child:after {
    left: 0;
  }
</style>
