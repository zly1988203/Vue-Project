<template>
    <div id="searchResult">
      <v-header></v-header>
      <div v-if="resultStatue">
        <div class="wrap">
          <div class="search-word">根据 <strong>美女</strong> 的搜索结果 </div>
          <div class="img-list">
            <div class="img-content">
              <div class="img-li1">
                <img src="../../assets/img/14177121,320,480.jpg"/>
                <img src="../../assets/img/13597063,320,480.jpg"/>
                <img src="../../assets/img/13582642,320,480.jpg"/>
                <img src="../../assets/img/13570528,320,480.jpg"/>
                <img src="../../assets/img/13570528,320,480.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="">
        <div class="search-msg">
          <div class="error-msg">根据关键词 <strong>萝莉</strong>
            未搜索到相关结果，请修改搜索词
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import header from '../header/header.vue'
    export default {
        name: 'search-result',
      data() {
          return {
             resultStatue: true
          }
      },
      components: {
          'v-header': header
      }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/mixin";
  #searchResult{
    .search-msg{
      align-items:center;/*指定垂直居中*/
      text-align: center;
      .error-msg{
        margin: 1rem;
        @include font(0.2rem,100%)
      }
    }
    .wrap{
      .search-word{
        @include font(0.2rem,0.3rem);
        height: 0.3rem;
      }
      .img-list{
        display: flex;
        margin: 0.1rem;
        .img-content{
          img{
            @include wh(1.06rem, 1.8rem);
            margin-left:0.1rem;
          }
          .img-li1{
            display: inline;
          }
        }
      }
    }
  }

</style>
