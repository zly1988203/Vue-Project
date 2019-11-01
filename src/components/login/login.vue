<template>
  <div class="container">
    <mt-header fixed title="V-shop"></mt-header>
      <div class="login">
        <div class="v-inp">
          <input type="text" v-model="formData.username" placeholder="请输入手机号码或用户名">
        </div>
        <div class="v-inp">
          <input type="password" v-model="formData.passwd" placeholder="请输入密码">
        </div>
        <div>
          <div>
            <mt-button type="primary" v-on:click = "doLogin" size="large" v-bind:disabled="formData.btnDisabled">登录</mt-button>
          </div>
          <div> <mt-button plain icon="back">忘记密码</mt-button></div>
        </div>
          <!--<div class="top-tips"> {{ formData.tipMsg }} </div>-->
      </div>
  </div>

</template>

<script>
  import { Header } from 'mint-ui'
  import { Button } from 'mint-ui'
  import { Toast } from 'mint-ui'
export default {
  name: 'login',
  data () {
    return {
      formData: {
        tipMsg: '用户名或密码错误，请重试.',
        username: '',
        passwd: '',
        btnDisabled: false
      },
      loading: false
    }
  },
  methods: {
    doLogin () {
      this.formData.btnDisabled = true
      Toast('提示信息')
      setTimeout(() => {
        this.formData.btnDisabled = false
      }, 2000)
    },
    getData () {
      this.$http.post('../package.json')
        .then((res) => {
          console.log(res.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  beforeCreate: function () {
    // 组件实例化之前
    console.log('1===beforeCreate===')
  },
  created: function () {
    // 组件实例化了
    console.log('2===created===')
  },
  beforeMount: function () {
    // 组件写入dom结构之前
    console.log('3===beforeMount===')
  },
  mounted: function () {
    // /组件写入dom结构了
    console.log('4===mounted===')
    // 基础配置数据
  },
  beforeUpdate: function () {
    // /组件更新前
    console.log('5===beforeUpdate===')
  },
  updated: function () {
    // 组件更新比如修改了文案
    console.log('6===updated===')
  },
  beforeDestroy: function () {
    // /组件销毁之前
    console.log('7===beforeDestroy===')
  },
  destroyed: function () {
    // /组件已经销毁
    console.log('8===destroyed===')
  }
}
</script>

<style scoped>
 .login {
   line-height: 0.3rem;
 }
.top-tips {
  align-content: center;
  color: red;
}
  .container{
    margin-top: 1rem;
  }
 .head{
   margin: 0.2rem;
 }
  .v-inp{
    margin: 0.2rem;
  }
  .v-inp input{
    height: 1rem;
    border-bottom: 1px solid  #f1f1f1;
  }
</style>
