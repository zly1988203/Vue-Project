<template>
  <div id="c-header">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/seller">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/categoryPage">分类</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/categoryPage">专题</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/mainPhoto">专题</router-link>
      </div>
      <!--<div class="tab-item">-->
        <!--<router-link to="/live">Live Photos</router-link>-->
      <!--</div>-->
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
      backPage() {
        this.$router.push('/seller')
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/mixin";
  #c-header {
    .tab {
      display: flex;
      @include wh(100%, 0.6rem);
      line-height: 0.6rem;
      .tab-item {
        flex: 1;
        text-align: center;
        border-bottom: 1px solid #cccccc;
      }
      .icon-item{
        flex: 0.4;
        align-items:center;/*指定垂直居中*/
        text-align: center;
        border-bottom: 1px solid #cccccc;
        line-height: 0.6rem;
        @include sc(0.2rem,'')
      }
    }
  }

</style>
