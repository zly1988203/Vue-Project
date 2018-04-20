<template>
  <div id="tab-content">
      <div class="tab">
        <div class="tab-item">
          <span class="icon-cart"></span>
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <span class="icon-file-text"></span>
          <router-link to="/ratings">评论</router-link>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'tab-content',
    data () {
      return {
        msg: "I'm tab"
      }
    }
  }
</script>

<style scoped lang="scss">
  #tab-content {
    .tab {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      .tab-item {
        flex: 1;
        text-align: center;
        border: 1px solid #cccccc;
      }
    }
  }
</style>
