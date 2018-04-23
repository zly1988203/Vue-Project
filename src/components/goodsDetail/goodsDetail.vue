<template>
    <div id="goodsDetail" class="container">
      <div class="content">
        <div class="banner">

        </div>
      <div>{{goodsDetail.name}}</div>
      <div class="goods-price">￥{{goodsDetail.price}}</div>
      <div>{{goodsDetail.descrip}}</div>
      </div>
    </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
    export default {
        name: 'goods-detail',
        data() {
          return {
          }
        },
      computed: {
        ...mapState([
            'goodsDetail'
        ])
      },
      methods: {
        ...mapMutations([]),
        viewshop() {
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixin";
  #goodsDetail{
    .banner{
      @include wh(100%,1rem);
    }
    .goods-price{
      @include sc(0.3rem, #ff0e0b)
    }
  }
</style>
