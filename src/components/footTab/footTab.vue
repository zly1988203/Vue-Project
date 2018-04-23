<template>
  <section id='foot_guide'>
    <section @click = "gotoAddress({path: '/seller', query: {geohash}})" class="guide_item">
      <span class="icon-home"></span>
      <span>外卖</span>
    </section>
    <section @click = "gotoAddress({path: '/index'})" class="guide_item">
      <span class="icon-search"></span>
      <span>发现</span>
    </section>
    <section @click = "gotoAddress('/order')" class="guide_item">
      <span class="icon-list2"></span>
      <span>订单</span>
    </section>
    <section @click = "gotoAddress('/personInfo')" class="guide_item">
      <span class="icon-user"></span>
      <span>我的</span>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'foot-tab',
    data () {
      return {
        sellerInfo: {}
      }
    },
    created () {
    },
    mounted () {
      this.getSeller()
    },
    components: {
    },
    methods: {
      getSeller () {
        let that = this
        this.$http.get('../../../../static/data.json')
          .then((res) => {
            that.sellerInfo = res.data.seller
            console.log(that.sellerInfo.name)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      gotoAddress(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixin";
  #foot_guide{
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 0.1rem;
    @include wh(100%, 0.9rem);
    display: flex;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
  }
  .guide_item {
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    .icon-home, .icon-search ,.icon-user ,.icon-list2 {
      @include sc(.45rem,#ccc);
      margin-top: .1rem;
      fill: #ccc;
    }
    .icon-home, .icon-search ,.icon-user ,.icon-list2 :active {
      @include sc(.45rem,#ccc);
      margin-top: .1rem;
      fill: #999;
    }
  }
</style>
