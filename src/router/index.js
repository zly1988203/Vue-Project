import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'
import personInfo from '@/components/userCenter/personInfo'
import seller from '@components/seller/seller'
import goodsInfo from '@components/goods/goodsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
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
    },
    {
      path: '/goods',
      name: 'goodsInfo',
      component: goodsInfo
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: personInfo
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
})
