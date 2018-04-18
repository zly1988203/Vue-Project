import {
  SAVE_GOODSINFO,
  SAVE_ORDERINFO
} from './mutation-types'

export default {
  [SAVE_GOODSINFO] (state, goodsDetail) {
    state.goodsDetail = goodsDetail
  },
  [SAVE_ORDERINFO] (state, orderDetial) {
    state.orderDetail = orderDetial
  }
}
