import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'
import personInfo from '@/components/userCenter/personInfo'
import seller from '@/components/seller/seller'
import goodsInfo from '@/components/goods/goodsInfo'
import ratings from '@/components/ratings/ratings'
import goodsDetail from '@/components/goodsDetail/goodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/goods',
          name: 'goodsInfo',
          component: goodsInfo,
          children: [

          ]
        },
        {
          path: '/ratings',
          name: 'ratings',
          component: ratings
        },
        {
          path: '/seller',
          name: 'seller',
          component: seller
        }
      ]
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: goodsDetail
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/personInfo',
      name: 'personInfo',
      component: personInfo
    }

  ]
})
