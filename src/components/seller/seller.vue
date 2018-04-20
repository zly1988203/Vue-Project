<template>
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
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import jsonData from '../../../static/cn'
export default {
  name: 'seller',
    data () {
      return {
        shopList: jsonData.shopList
      }
    },
  computed: {
    ...mapState([])
  },
  methods: {
    ...mapMutations([
    ]),
    viewShop (item) {
    }
  }
}
</script>
<style scoped>

</style>
