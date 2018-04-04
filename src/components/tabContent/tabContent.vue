<template>
  <div id="tab-content">
      <div class="tab">
        <div class="tab-item">
        <a v-link="{path:'/goods'}"> 商品</a>
        </div>
        <div class="tab-item">
          <a v-link="{path:'/ratings'}">评论</a>
        </div>
        <div class="tab-item">
          <a v-link="{paht:'/seller'}">商家</a>
        </div>
      </div>
    <div class="content">
      <router-view></router-view>
    </div>
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
