<template>
  <div id="c-header">
      <div class="tab">
        <div class="icon-item">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-item">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-item">
          <span class="icon-cart"></span>
        </div>

        <div class="tab-item">
          <router-link to="/mainPhoto">首页</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/categoryPage">分类</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings">专题</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/live">Live Photos</router-link>
        </div>
      </div>
    <router-view></router-view>
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
  @import "../../assets/mixin";
  #c-header {
    .tab {
      display: flex;
      @include wh(100%, 0.4rem);
      line-height: 0.4rem;
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
        line-height: 0.4rem;
      }
    }
  }

</style>
