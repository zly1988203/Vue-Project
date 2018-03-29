<template>
    <div>
      <h1>{{ msg }}</h1>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="text">文字按钮</el-button>
    </div>
</template>

<script>
export default {
  name: 'v-content',
  data () {
    return {
      sellerInfo: {},
      msg: 'content'
    }
  },
  created () {
  },
  mounted () {
    this.getSeller()
  },
  components: {
  },
  methods: {
    getSeller () {
      let that = this
      this.$http.get('../../../../static/data.json')
        .then((res) => {
          debugger
          that.sellerInfo = res.data.seller
          console.log(that.sellerInfo.name)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
