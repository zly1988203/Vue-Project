<template>
  <div id="c-header">
    <div class="banner">
      <img src="../../assets/img/002.png" alt="img"/>
    </div>
    <div class="detail">
        <div class="address">商家地址：深圳市深南大道1006号</div>
        <div class="info">
          <span class="">评分：8.6分</span>
          <span class="tel">联系电话：18521458563</span>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      msg: 'welcome to Your V-shop'
    }
  }
}
</script>

<style scoped lang="scss">
  #c-header {
    .banner {
      position: relative;
      img {
        width: 100%;
        display: block;
      }
    }
    .detail{
      vertical-align:center;
      text-align: left;
      display: inline-block;
      width: 100%;
      .address {
        text-align: left;
        padding: 0.2rem;
        font-weight: 600;
      }
      .info{
        padding: 0.2rem;
        .tel{
          margin-left: 2rem;
        }
      }
    }
  }

</style>
