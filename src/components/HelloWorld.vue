<template>
  <div class="hello">
    <v-header></v-header>
    <tab-content></tab-content>
    <main-content></main-content>
  </div>
</template>
<script>
import header from './header/header.vue'
import tabContent from './tabContent/tabContent.vue'
import mainContent from './mainContent/content.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    'v-header': header,
    'tab-content': tabContent,
    'main-content': mainContent
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
