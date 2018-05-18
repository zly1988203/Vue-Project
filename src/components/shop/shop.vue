<template>
  <div id="tab-content">
    <nav>
      <i class="el-icon--left"></i>
      <span>店铺</span>
    </nav>
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
        name: 'shop'
    }
</script>

<style lang="scss" scoped>
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
