<template>
  <div>
    <div id="seller">
        <el-header>
          <span>welcome to V_Shop</span>
        </el-header>
      <div>
        <el-header>
          <span>推荐商家</span>
        </el-header>
        <el-container>
          <div class="container">
            <div class="content">
              <div class="recent-content" v-for="(item,index) in shopList" :key="item.id" @click="viewShop(item)">
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
        </el-container>
      </div>
    </div>
    <foot-tab></foot-tab>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import jsonData from '../../../static/cn'
  import footTab from '../footTab/footTab.vue'
export default {
  name: 'seller',
    data () {
      return {
        shopList: jsonData.shopList
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
  #seller {
    .recent-content {
      display: inline-grid;
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
</style>
