<template>
    <div id="goodsDetail" class="container">
      <div class="content">
          <div class="swip-banner">
            <mt-swipe :show-indicators="false">
              <mt-swipe-item v-for="(img,i) in bannerList" :key="img.id">
                <img :src="img.url"/>
              </mt-swipe-item>
            </mt-swipe>
          </div>
      <div class="goods-title">{{goodsDetail.name}}</div>
      <div class="goods-price">￥{{goodsDetail.price}}</div>
      <div>{{goodsDetail.descrip}}</div>
      </div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell  title="内容1" />
          <!--<mt-cell v-for="n in 10" :key="'one' + n" :title="'内容 ' + n" />-->
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell  title="内容2" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell  title="内容3" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
    export default {
        name: 'goods-detail',
        data() {
          return {
            bannerList: [],
            selected: 1
          }
        },
      computed: {
        ...mapState([
            'goodsDetail'
        ])
      },
      mounted: function () {
        this.getBanner()
      },
      methods: {
        ...mapMutations([]),
        getBanner() {
          this.$http.get('/static/bannerImg')
            .then((res) => {
              this.bannerList = res.data.bannerList
            })
        },
        viewshop() {
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixin";
  #goodsDetail{
    .swip-banner{
      top: 0;
      width: 100%;
      left: 0;
      height: 3rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .goods-title{
      @include sc(0.42rem,#333333);
      font-weight: 700;
    }
    .goods-price{
      @include sc(0.3rem, #ff0e0b)
    }
  }
</style>
