<template>
    <div class="bus-body">
      <header class="header">
        <div id="menuArmrest" class="avatar"></div>

        <div class="nav">
          <div class="thumb"></div>
          <!--<nav>-->
            <!--<li v-for="(item, $index) in arr" :key="item" @click="toggle($index)" :class="{active:$index==active}" data-icon="bus">{{item}}</li>-->
          <!--</nav>-->
          <div ref="list_bar" class="list-bar">
            <div class="content">
              <ul ref="list_li" class="list">
                 <li  v-for="(item, $index) in arr" :key="item" @click="toggle($index,$event)" :class="{active:$index==active}" data-icon="bus">{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div class="msg-content">
        <section class="title">合规网约车服</section>
        <div class="decoration"></div>
        <section class="tips">附近有<span>15</span>辆车，可以马上接驾</section>
      </div>
      <div class="mian-content">
          <section class="til">现在出发 </section>
        <div class="decoration"></div>
          <section class="ads-content">
            <ul class="ads-list">
              <li>
                <div class="control start">
                  <input id="startAddr" type="text" class="select-city-btn" placeholder="请选择出发地" readonly />
                </div>
              </li>
              <div class="decoration"></div>
              <li>
                <div class="control end">
                  <input id="endAddr" type="text" class="select-city-btn" placeholder="请选择目的地" readonly />
                </div>
              </li>
            </ul>
            <div class="exchange"></div>
          </section>
        <div class="decoration"></div>
          <section class="ads-date">
            <i class="icon-qrcode"></i> <span>￥26.8</span>
          </section>
      </div>
      <div class="query-btn">查询购票</div>
    </div>
</template>

<script>
    export default {
        name: 'bus',
        data() {
          return {
            active: 0,
            arr: [
              '定制班线',
              '旅游班线',
              '市内班车',
              '城际约租车',
              '本地汽车票'
            ],
            lstbarWidth: 0,
            lstbar: null,
            list_li: null
          }
      },
      mounted() {
        this.lstbar = this.$refs.list_bar
        this.lstbarWidth = this.$refs.list_bar.offsetWidth
        this.list_li = this.$refs.list_li
      },
      methods: {
        toggle(index, event) {
          this.active = index
          this.lstbar.scrollTo(event.currentTarget.offsetLeft / 2, this.list_li.offsetTop)
            // event.currentTarget.
          // window.location.hash = '.active'
        }

      }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/mixin";
  .bus-body {
    /*background-color: #f1f1f1;*/
    .header {
      position: relative;
      .avatar {
        position: absolute;
        z-index: 3;
        top: .18rem;
        left: .19rem;
        padding-left: .66rem;
        background: url(../assets/img/header/icon-user.png) no-repeat 0;
        background-size: auto 100%;
      }
      .avatar:after {
        content: "个人中心";
        display: block;
        height: .56rem;
        line-height: .56rem;
        font-size: .32rem;
        color: #fff;
      }
      .nav {
        width: 100%;
        overflow:hidden;
        .thumb {
          padding-top: 25.2%;
          height: 0;
          background: url(../assets/img/header/bg.png) no-repeat 50%;
          background-size: 100% 100%;
        }
        /*nav{*/
          /*padding: 0 10px;*/
          /*display: -webkit-box;*/
          /*display: -ms-flexbox;*/
          /*display: flex;*/
          /*overflow: scroll;*/
          /*li {*/
            /*text-align: center;*/
            /*font-size: 16px;*/
            /*-ms-flex-negative: 0;*/
            /*flex-shrink: 0;*/
            /*padding: 10px;*/
            /*margin: 5px;*/
          /*}*/
          /*.active {*/
            /*color: #FFFFFF;*/
            /*background-color: #000000;*/
          /*}*/
        /*}*/
        /*滚动条样式*/
        ::-webkit-scrollbar {/*滚动条整体样式*/
          /*width: 1px;     !*高宽分别对应横竖滚动条的尺寸*!*/
          /*height: 10px;*/
          display:none
        }
        /*::-webkit-scrollbar-thumb {!*滚动条里面小方块*!*/
          /*border-radius: 1px;*/
          /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
          /*background: rgba(0,0,0,0.2);*/
        /*}*/
        /*::-webkit-scrollbar-track {!*滚动条里面轨道*!*/
          /*-webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0.2);*/
          /*border-radius: 0;*/
          /*background: rgba(0,0,0,0.1);*/
        /*}*/
        .list-bar {
          position: relative;
          width: 100%;
          margin: -1.1rem 0 .15rem;
          height: 1.73rem;
          overflow: auto;
          .content {
            position: absolute;
            min-width: 100%;
            padding: 1.2rem 0 0;
            .list {
              padding: 0 .22rem;
              text-align: center;
              white-space: nowrap;
              li {
                display: inline-block;
                margin: 0 0 0 .55rem;
                font-size: .32rem;
                color: #999;
                position: relative;
                text-align: center;
                -ms-flex-negative: 0;
                flex-shrink: 0;
              }
              .active {
                color: #FFFFFF;
                background-color: #000000;
              }

            }
          }
        }
      }
    }
    .msg-content {
      display: inline-block;
      width: 7.1rem;
      box-shadow: 0 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.05);
      margin-top: 0.5rem;
      /*border: 1px solid #999999;*/
      .title {
        font-family: PingFangSC-Regular;
        font-size: 0.2rem;
        color: #6392FE;
        height: 0.9rem;
        line-height: 0.9rem;
      }
      .tips {
        ont-family: PingFangSC-Regular;
        font-size: 0.3rem;
        color: #999999;
        height: 1.1rem;
        line-height: 1.1rem;
        span {
          color: #ff0000;
        }
      }
    }
    .mian-content {
      display: inline-block;
      width: 7.1rem;
      color: #4B4B4B;
      box-shadow: 0 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.05);
      margin-top: 0.5rem;
      /*border: 1px solid #999999;*/
      /*background-color: #f1f1f1;*/
      text-align: left;
      .til {
        font-size: 0.5rem;
        padding-left: 0.5rem;
        position: relative;
        height: 1rem;
        line-height: 1rem;
      }
      .til:before {
        content: "";
        display: block;
        width: .3rem;
        height: .3rem;
        position: absolute;
        left: .1rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
        border-radius: 100%;
        background-color: blue;
      }
      .ads-content {
        display: flex;
        align-items: center;
        -webkit-box-align: center;
        .ads-list {
          flex: 1;
          .control {
            padding-left: 0.3rem;
            position: relative;

            input {
              display: block;
              font-size: 0.4rem;
              width: 100%;
              height: 1rem;
              line-height: 1rem;
            }
          }
          .start:before {
            content: "";
            display: block;
            width: .15rem;
            height: .15rem;
            position: absolute;
            left: .1rem;
            top: 0;
            bottom: 0;
            margin: auto 0;
            border-radius: 100%;
            background-color: red;
          }
          .end:before {
            content: "";
            display: block;
            width: .15rem;
            height: .15rem;
            position: absolute;
            left: .1rem;
            top: 0;
            bottom: 0;
            margin: auto 0;
            border-radius: 100%;
            background-color: #21cd61;
          }
        }
        .exchange {
          margin: 0 .29rem 0 .27rem;
          width: .58rem;
          height: .58rem;
          background: url(../assets/img/header/icon-exchange.png) 50% no-repeat;
          background-size: 100% 100%;
        }

      }
      .ads-date {
        display: flow-root;
        font-size: 0.4rem;
        text-align: center;
        span {
          color: red;
        }
      }
    }
    .query-btn{
      @include wh(7.1rem,1rem);
      line-height: 1rem;
      text-align: center;
      font-size: .4rem;
      color:#fff;
      background:#6392fe;
      border-radius: 1rem;
      /*box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.05);*/
      /*-webkit-box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.05);*/
      /*-moz-box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.05);*/
      box-shadow:0 1px 2px 0 hsla(0,0%,100%,.25),0 .12rem .1rem 0 rgba(99,146,254,.3);
      margin:.22rem .22rem 0;
      overflow:hidden
    }
  }
</style>
