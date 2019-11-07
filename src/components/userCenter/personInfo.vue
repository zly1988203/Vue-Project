<template>
  <div id="person">
    <div class="user-head">
      <div class="user-icon"></div>
      <div class="user-name">淘了个宝宝</div>
    </div>
    <div class="cell-list">
      <mt-cell title="我的订单" is-link>
        <img slot="icon" src="/static/img/cell-icon/icon-cat.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="优惠券" is-link>
        <img slot="icon" src="/static/img/cell-icon/icon-bear.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="优惠中心" is-link>
        <img slot="icon" src="/static/img/cell-icon/icon-dog.png" width="24" height="24">
      </mt-cell>
      <mt-cell title="设置" is-link>
        <img slot="icon" src="/static/img/cell-icon/icon-lion.png" width="24" height="24">
      </mt-cell>
    </div>

    <foot-tab></foot-tab>
  </div>
</template>

<script>
  import footTab from '../footTab/footTab.vue'
export default {
  name: 'person-info',
  components: {
    'foot-tab': footTab
  }
}
</script>

<style lang="scss" scoped>
#person{
  .user-head{
    display: flex;
    .user-icon{
      width: 2rem;
      height: 2rem;
      margin: 0.2rem;
      border-radius: 50%;
      background: url("/static/img/header/user-head.jpg");
      background-size: 100%;
    }
    .user-name{
      font-size: 0.40rem;
      color: #333333;
      margin: 0.2rem;
    }
  }
  .cell-list{
    text-align: left;
    margin-top: 0.2rem;
    .mint-cell{
      margin-top: 0.1rem;
      border: 1px solid #9c9c9c;
    }
    }
  }
</style>
