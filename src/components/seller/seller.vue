<template>
  <div>
    <div id="seller">
      <div class="swip-banner">
        <mt-swipe :show-indicators="false">
          <mt-swipe-item v-for="(img,i) in bannerList" :key="img.id">
            <img :src="img.url"/>
          </mt-swipe-item>
        </mt-swipe>
      </div>

      <div class="container">
        <div class="content">
          <div class="recent-content" v-for="(item,index) in shopList" :key="item.id" @click="viewShop(item)">
            <div class="top-cont">
              <img src="../../assets/img/001.jpg"/>
              <div class="recent-text">
                <div>
                  {{item.descrip}}
                </div>
                <div>
                  <i class="icon-location2"></i>
                  <label>{{item.address}}</label>
                </div>
              </div>
            </div>
            <div class="recent-bottom">
              <div class="bo-cont">
                <img src="../../assets/img/user.png" alt="img">
                <label>{{item.name}}</label>
              </div>
            </div>
            <div class="decoration"></div>
          </div>
        </div>
      </div>
    </div>
    <foot-tab></foot-tab>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import jsonData from '../../../static/cn'
  import footTab from '../footTab/footTab.vue'
  // import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'seller',
    data () {
      return {
        shopList: jsonData.shopList,
        bannerList: jsonData.bannerList
      }
    },
  components: {
    'foot-tab': footTab
  },
  computed: {
    ...mapState([])
  },
  methods: {
    ...mapMutations([
    ]),
    viewShop (item) {
      this.$router.push('/goods')
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../../assets/mixin";
  #seller {
    .swip-banner{
      top: 0;
      width: 100%;
      left: 0;
      height: 2rem;
    }
    .content{
      width: 100%;
      .recent-content {
        display: inline-grid;
        width: 100%;
        .top-cont {
          display: inline-flex;
          img {
            width: 3rem;
            height: 3rem;
            background-color: #FFFFFF;
            padding: 3px;
          }

          p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            line-height: 0.5rem;
          }
        }
        .recent-bottom {
          display: inline-flex;
          padding: 0.1rem;
          label {
            padding: 0.1rem;
          }
          .bo-cont {
            display: flex;
            color: #000000;
            font-weight: 600;
            img {
              width: 0.5rem;
              height: 0.5rem;
              background-color: #FFFFFF;
            }
          }

          .txt-right {
            font-size: 0.3rem;
            color: red;
            font-weight: 800;
            margin-left: 3.5rem;
            display: flex;
          }
        }

      }
    }

    .load-more{
      @include wh(100%,0.1rem)
    }
  }
</style>
