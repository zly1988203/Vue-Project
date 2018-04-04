<template>
  <div class="hello">
    <v-header></v-header>
    <tab-content></tab-content>
    <v-content></v-content>
  </div>
</template>
<script>
import header from './header/header.vue'
import tabContent from './tabContent/tabContent.vue'
import content from './mainContent/content.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    'v-header': header,
    'tab-content': tabContent,
    'v-content': content
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
