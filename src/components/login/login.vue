<template>
  <el-container
    v-loading="loading"
    element-loading-text="正在登录，请稍等......."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-header height="100px">
      <el-row  type="flex" justify="center" align="bottom">
        <el-col :span="6"><div cclass="grid-content bg-purple">
          <h1>V-Shop</h1>
        </div></el-col>
      </el-row>
    </el-header>
    <el-main>
      <div class="login">
        <el-form ref="form">
          <el-form-item>
            <el-input type="text" v-model="formData.username" placeholder="请输入手机号码或用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="formData.passwd" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col :span="22">
                <el-button  v-on:click = "doLogin" type="primary" size="medium" v-bind:disabled="formData.btnDisabled">登录</el-button>
                <el-button type="text">忘记密码</el-button>
              </el-col>
              <el-col :span="2"> <el-button type="text">注册</el-button></el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <div class="top-tips"> {{ formData.tipMsg }} </div>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
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
      this.loading = true
      setTimeout(() => {
        this.loading = false
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
    this.getData()
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
</style>
