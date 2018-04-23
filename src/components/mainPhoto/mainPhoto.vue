<template>
    <div id="mainPhto">
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
            <input type="text" placeholder="搜索壁纸"><input type="button" value="搜索" @click="searchPhoto()">
          </div>
        </div>

      <div class="decoration"></div>
      <div class="wrap">
        <div class="tit-type"><span>每日最新壁纸</span><a href="index.php?a=list_one&gid=0" class="fr">更多></a></div>
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
      </div>
      <div class="wrap">
        <div class="tit-type">
        <span>
        精品壁纸推荐
        </span>
          <span>

            <a href="index.php?a=list_one&gid=0" class="a-fl">精品</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">女神</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">模特</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">文字</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">植物</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">简约</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">卡通</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">假日</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">女星</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">吃货</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">影视</a>
            <a href="index.php?a=list_one&gid=0" class="a-fl">机车</a>
        </span>
            <a href="index.php?a=list_one&gid=0" class="fr">更多></a>
        </div>
        <div class="img-list">
          <div class="img-header">
            <img src="../../assets/img/14177121,320,480.jpg" height="480" width="320"/>
          </div>
          <div class="img-content">
            <div class="img-li1">
              <img src="../../assets/img/14177121,320,480.jpg" height="480" width="320"/>
              <img src="../../assets/img/13597063,320,480.jpg" height="480" width="320"/>
              <img src="../../assets/img/13582642,320,480.jpg" height="480" width="320"/>
              <img src="../../assets/img/13570528,320,480.jpg" height="480" width="320"/>
            </div>
            <div class="img-li2">
              <img src="../../assets/img/14177121,320,480.jpg" height="480" width="320"/>
              <img src="../../assets/img/13597063,320,480.jpg" height="480" width="320"/>
              <img src="../../assets/img/13582642,320,480.jpg" height="480" width="320"/>
              <img src="../../assets/img/13570528,320,480.jpg" height="480" width="320"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import imgContent from '../imgContent/imgContent.vue'
export default {
    name: 'main-photo',
  data () {
    return {
      msg: "I'm tab"
    }
  },
  comments: {
      'img-content': imgContent
  },
  methods: {
    searchPhoto() {
      this.$router.push('/searchResult')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/mixin";
  #mainPhto{
    margin: 0.1rem;
    .wrap{
      .tit-type{
        @include wh(100%, 0.2rem);
        line-height: 0.2rem;
        margin: 0.1rem;
        span{
          float: left;
        }
        a{
          float: right;
          margin-right: 0.2rem;
        }
      }
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
    }
  }
</style>
