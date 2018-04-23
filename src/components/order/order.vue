<template>
    <div id="order">
      <foot-tab></foot-tab>
    </div>
</template>

<script>
  import footTab from '../footTab/footTab.vue'
    export default {
        name: 'order',
      data() {
          return {
          }
      },
      components: {
          'foot-tab': footTab
      }
    }
</script>

<style scoped>

</style>
