<template>
  <div id="person">
    <div></div>
    <foot-tab></foot-tab>
  </div>
</template>

<script>
  import footTab from '../footTab/footTab.vue'
export default {
  name: 'person-info',
  components: {
    'foot-tab': footTab
  }
}
</script>

<style scoped>

</style>
