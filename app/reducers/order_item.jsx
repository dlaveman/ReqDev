import axios from 'axios'

const GET_ORDER_ITEMS = 'GET_ORDER_ITEMS'

export const getOrderItems = orderItems => ({type: GET_ORDER_ITEMS, orderItems})

export const fetchOrderItems = (orderId) => dispatch =>
  axios.get(`/api/order/${orderId}`)
    .then(res => dispatch(getOrderItems(res.data)))

export default function orderReducer(state=[], action) {
  switch (action.type) {
  case GET_ORDER_ITEMS:
    return action.orderItems
  default: return state
  }
}
