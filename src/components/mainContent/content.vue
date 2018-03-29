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
      this.$http.post('data.json')
        .then((res) => {
          console.log(res.data)
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
