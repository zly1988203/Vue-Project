<template>
  <div class="error-content">
    <v-header></v-header>
    <div class="error-img"><img src="/static/img/404.png" height="275" width="338"/></div>
    <div class="error-msg">即将离开本页，<a href="#">3</a>秒后自动返回上一页</div>
    <div class="error-btn"> <input type="button" value="立即返回"/></div>
  </div>
</template>

<script>
  import header from '../header/header.vue'
    export default {
      components: {
        'v-header': header
      },
      name: 'error-page'
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixin";
  .error-content{
    align-items:center;/*指定垂直居中*/
    text-align: center;
  }

  .error-img{

  }

  .error-msg{
    color:#777;
    @include sc(.3rem,#ccc);
  }
  .error-btn{
  }
  .error-btn input{
    @include wh(20%, 0.6rem);
    background: #677bf1;
    color: #ffffff;
    border-radius: 5px;
    border:1px solid #677bf1;
    margin-top: 0.3rem;
    font-size:0.2rem;
  }

</style>
