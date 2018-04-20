<template>
  <div class="img-list">
    <div class="img-header">
      <img src="../../assets/img/13570528,320,480.jpg"/>
    </div>
    <div class="img-content">
      <div class="img-li1">
        <img src="../../assets/img/14177121,320,480.jpg"/>
        <img src="../../assets/img/13597063,320,480.jpg"/>
        <img src="../../assets/img/13582642,320,480.jpg"/>
        <img src="../../assets/img/13570528,320,480.jpg"/>
      </div>
      <div class="img-li2">
        <img src="../../assets/img/14177121,320,480.jpg"/>
        <img src="../../assets/img/13597063,320,480.jpg"/>
        <img src="../../assets/img/13582642,320,480.jpg"/>
        <img src="../../assets/img/13570528,320,480.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'img-content',
      data () {
        return {
          msg: "I'm tab"
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixin";
  .img-list{
    display: flex;
    margin: 0.1rem;
    .img-header{
      img{
        @include wh(2.15rem, 3.8rem);
        /*margin-right: 0.1rem;*/
      }
    }
    .img-content{

      img{
        @include wh(1.06rem, 1.8rem);
        margin-left:0.1rem;
      }

      .img-li1{
        display: inline;

      }
      .img-li2{
        display: inline;
        img{
          margin-top: 0.1rem;
        }
      }
    }
  }

</style>
