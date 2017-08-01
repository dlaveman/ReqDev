import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'
const GET_ORDER_ITEMS = 'GET_ORDER_ITEMS'
const ADD_ORDERS = 'ADD_ORDERS'

export const getOrders = orders => ({type: GET_ORDERS, orders})
export const getOrderItems = orderItems => ({type: GET_ORDER_ITEMS, orderItems})
export const addOrders = orders => ({type: ADD_ORDERS, orders})

export const fetchOrders = () => dispatch =>
  axios.get(`/api/order`)
    .then(res => dispatch(getOrders(res.data)))

export const fetchOrderItems = (orderId) => dispatch =>
  axios.get(`api/order/${orderId}`)
    .then(res => dispatch(getOrderItems(res.data)))

export const postOrders = (order) => dispatch =>
  axios.post(`/api/order`, order)
    .then(res => dispatch(addOrders(res.data)))

export default function orderReducer(state=[], action) {
  switch (action.type) {
  case GET_ORDERS:
    return action.orders
  case GET_ORDER_ITEMS:
    return action.orderItems
  case ADD_ORDERS:
    return [...state, action.orders]
  default: return state
  }
}
