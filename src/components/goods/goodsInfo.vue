<template>
    <div id="goods" class="container">
      <div class="content">
        <div class="recent-content" v-for="(item,index) in goodsList" :key="item.id">
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
            <label>2017-06-20</label>
          </div>
        </div>
      </div>
        <div class="decoration"></div>
        <div class="recent-content">
          <div class="top-cont">
            <img src="../../assets/img/001.jpg"/>
            <div class="recent-text">
              <p>
                撒旦发生的发生的是短发书地方撒地方撒点发生地方撒旦发生的发生地方阿斯顿发生的发生的阿斯顿发生的发生的
                萨的发生地方sa法师的发生地方
                阿萨德发生的as案发时的发生的发生阿斯顿发生的发生的发生的发生的发生的发生的发生的发生的阿斯顿发生的发生
                是短发上的发生地方撒地方上的放松的方式电风扇等方式的发生电风扇的风上的发生地方撒地方
              </p>
            </div>
          </div>
          <div class="recent-bottom">
            <div class="bo-cont">
              <img src="../../assets/img/user.png" alt="img">
              <label>龙虎杂志社</label>
            </div>
            <div class="txt-right">
              <label>2017-06-20</label>
            </div>
          </div>
        </div>
        <div class="decoration"></div>
      </div>
    </div>
</template>
<script>
  import jsonData from '../../../static/cn'

export default {
  name: 'goods-info',
  data () {
    return {
      goodsList: jsonData.goodsList
    }
  },
  beforeCreated () {
  },
  created () {
  },
  mounted () {
    console.log('jsonData--------------' + this.jsonData)
  },

  methods: {

  }
}
</script>
<style scoped lang="scss">
  .recent-content {
    display: inline-grid;
    .top-cont{
      display: inline-flex;
      img {
        width: 3rem;
        height: 3rem;
        background-color: #FFFFFF;
        padding: 3px;
      }

      p{
        overflow: hidden;
        text-overflow:ellipsis;
        display: -webkit-box;;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:5;
        line-height: 0.5rem;
      }
    }
    .recent-bottom{
      display: inline-flex;
      padding: 0.1rem;
      label {
        padding: 0.1rem;
      }
      .bo-cont{
        display: flex;
        img {
          width: 0.5rem;
          height: 0.5rem;
          background-color: #FFFFFF;
        }
      }

      .txt-right{
        margin-left: 3.5rem;
        display: flex;
      }
    }

  }
</style>
