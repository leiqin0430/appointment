<template>
  <div>
    <swiper loop auto dots-position="center" :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    <!--<p>current index: {{demo06_index}}</p>-->
    <div class="appoint-container">
      <flexbox :gutter="0">
        <flexbox-item><div class="appoint-icon" @click="selectDept"></div></flexbox-item>
        <flexbox-item><div class="appoint-icon" @click="selectDept"></div></flexbox-item>
        <flexbox-item><div class="appoint-icon" @click="selectDept"></div></flexbox-item>
      </flexbox>
      <flexbox :gutter="0">
        <flexbox-item><div class="appoint-title" @click="selectDept">预约挂号</div></flexbox-item>
        <flexbox-item><div class="appoint-title" @click="selectDept">专家门诊</div></flexbox-item>
        <flexbox-item><div class="appoint-title" @click="selectDept">对症预约</div></flexbox-item>
      </flexbox>
    </div>
    <group gutter="10px" class="recommend-doctors">
      <cell title="推荐医生" value="查看全部" link="/orderList"></cell>
    </group>
    <panel :list="list" :type="type" @on-img-error="onImgError" style="margin-top: 0;"></panel>
  </div>
</template>
<script>
  import { Swiper, SwiperItem, Group, Cell, Panel, Flexbox, FlexboxItem } from 'vux'
  const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行',
    fallbackImg: 'https://static.vux.li/demo/3.jpg'
  }]
  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: '测试' + index
  }))
  export default {
    components: {
      Swiper,
      SwiperItem,
      Group,
      Cell,
      Panel,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        demo06_list: urlList,
        demo06_index: 0,
        type: '1',
        list: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          }
//          meta: {
//            source: '来源信息',
//            date: '时间',
//            other: '其他信息'
//          }
        }]
//        footer: {
//          title: 'more',
//          url: 'http://vux.li'
//        }
      }
    },
    methods: {
      demo06_onIndexChange (index) {
        this.demo06_index = index
      },
      onImgError (item, $event) {
        console.log(item, $event)
      },
      selectDept () {
        this.$router.push({path: '/dept'})
      }
    }
  }
</script>
<style>
  .appoint-container {
    background-color: #FCF9FE;
    padding: 15px 0;
    & .appoint-icon {
        width: 76px;
        height: 76px;
        border-radius: 38px;
        border: 1px solid #99D7B7;
        background-color: #CEF4C0;
        margin: 0 auto;
      }
    & .appoint-title {
        text-align: center;
        padding-top: 8px;
      }
  }
  .recommend-doctors div:first-child:after {
    border-bottom: none;
  }
  .recommend-doctors div:first-child:before {
    border-top: none;
  }
</style>
