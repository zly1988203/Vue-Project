import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login'
import personInfo from '@/components/userCenter/personInfo'
import seller from '@/components/seller/seller'
import goodsInfo from '@/components/goods/goodsInfo'
import ratings from '@/components/ratings/ratings'
import goodsDetail from '@/components/goodsDetail/goodsDetail'
import mainPhoto from '@/components/mainPhoto/mainPhoto'
import errorPage from '@/components/errorPage/errorPage'
import categoryPage from '@/components/categoryPage/categoryPage'
import shop from '@/components/shop/shop'
import order from '@/components/order/order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/mainPhoto',
          name: 'mainPhoto',
          component: mainPhoto
        },

        {
          path: '/categoryPage',
          name: 'categoryPage',
          component: categoryPage
        }
      ]
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },

    {
      path: '/shop',
      name: 'shop',
      component: shop,
      children: [
        {
          path: '/goods',
          name: 'goodsInfo',
          component: goodsInfo
        },
        {
          path: '/ratings',
          name: 'ratings',
          component: ratings
        }
      ]
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: goodsDetail
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'errorPage',
      component: errorPage
    },
    {
      path: '/personInfo',
      name: 'personInfo',
      component: personInfo
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }

  ]
})
