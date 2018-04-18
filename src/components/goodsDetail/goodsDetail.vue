<template>
    <div id="goodsDetail" class="container">
      <div class="content">
      <div>{{goodsDetail.name}}</div>
      <div>{{goodsDetail.price}}</div>
      <div>{{goodsDetail.descrip}}</div>
      </div>
    </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
    export default {
        name: 'goods-detail',
        data() {
          return {
          }
        },
      computed: {
        ...mapState([
            'goodsDetail'
        ])
      },
      methods: {
        ...mapMutations([]),
        viewshop() {
        }
      }
    }
</script>

<style scoped>

</style>
