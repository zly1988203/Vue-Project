<template>
  <div class="typeContain">
    <div class="c-left">
      <div class="live-photo">
        <div class="type-title">Live Photos</div>
        <div class="type-item">
          <a>明星写真</a><a>节日节气</a>
        </div>
        <div class="type-item">
          <a>动物萌宠</a><a>影视精选</a>
        </div>
        <div class="type-item">
          <a>明星写真</a><a>节日节气</a>
        </div>
        <div class="type-item">
          <a>动物萌宠</a><a>影视精选</a>
        </div>
        <div class="type-item">
          <a>风景建筑</a><a>酷炫游戏</a>
        </div>
        <div class="type-item">
          <a>卡通动漫</a><a>美食诱惑</a>
        </div>
      </div>
      <div class="photo-type">
        <div class="type-title">壁纸分类</div>
        <div class="type-item">
          <a>每日最新</a><a>唯美女神</a>
        </div>
        <div class="type-item">
          <a>美女模特</a><a>美丽文字</a>
        </div>
        <div class="type-item">
          <a>浪漫爱情</a><a>奇思妙想</a>
        </div>
        <div class="type-item">
          <a>花卉植物</a><a>简约风潮</a>
        </div>
        <div class="type-item">
          <a>风光风景</a><a>当家花旦</a>
        </div>
        <div class="type-item">
          <a>卡通动漫</a><a>美食诱惑</a>
        </div>

      </div>

    </div>
    <div class="v-line"></div>
    <div class="c-right">
      <div class="seachTools">
        <div class="header_device">
          <span>选择设备：</span>
          <select>
            <option>iPhone 6/6S Plus</option>
            <option>iPhone 6/6S</option>
            <option>iPhone5/5S</option>
            <option>iPhone4/4S</option>
          </select>
        </div>
        <div class="seach_device">
          <input type="text" placeholder="搜索壁纸"><input type="button" value="搜索">
        </div>
      </div>
      <div class="decoration"></div>
      <!--<main-photo></main-photo>-->
      <img-content></img-content>
    </div>
  </div>
</template>
<script>
import imgContent from '../imgContent/imgContent.vue'
export default {
    name: 'category-page',
  data () {
    return {
      msg: "I'm tab"
    }
  },
  components: {
    'img-content': imgContent
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/mixin";
  .typeContain{
    display: inline-flex;
    float:left;
      .c-left{
        width: 20%;
        /*margin-top: 10px;*/
        background-repeat:repeat;
        text-align: center;
        border-right: 1px solid #ccc;
      }
      .c-right{
        width: 80%;
      }
    .type-title{
      font-weight: 500;
      @include sc(0.2rem,#333)
    }
    .type-item{
      margin-top: 0.05rem;
      margin-bottom: 0.05rem;
    }
    .type-item a {
      margin: 0.1rem;
    }

    .photo-type{
      margin-top: 0.3rem;
    }
  }
</style>
