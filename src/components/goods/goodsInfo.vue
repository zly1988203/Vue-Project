<template>
  <div id="goods" class="container">
    <div class="content">
      <div class="recent-content" v-for="(item,index) in goodsList" :key="item.id" @click="viewGoodsDetail(item)">
        <div class="top-cont">
          <img src="../../assets/img/001.jpg"/>
          <div class="recent-text">
            <p>
              {{index}}-{{item.descrip}}
            </p>
          </div>
        </div>
        <div class="recent-bottom">
          <div class="bo-cont">
            <img src="../../assets/img/user.png" alt="img">
            <label>{{item.name}}</label>
          </div>
          <div class="txt-right">
            <label>￥{{item.price}}</label>
          </div>
        </div>
        <div class="decoration"></div>
      </div>

    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import jsonData from '../../../static/cn'
  export default {
    name: 'goods-info',
    data() {
      return {
        goodsList: jsonData.goodsList
      }
    },
    beforeCreated() {
    },
    created() {
    },
    mounted() {
    },
    computed: {
      ...mapState([])
    },
    methods: {
      ...mapMutations([
        'SAVE_GOODSINFO'
      ]),
      viewGoodsDetail(item) {
        this.SAVE_GOODSINFO(item)
        this.$router.push('/goodsDetail')
      }
    }
  }
</script>
<style scoped lang="scss">
  .recent-content {
    display: inline-grid;
    float: left;
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
</style>
