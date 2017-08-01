import axios from 'axios'

const GET_ORDERS = 'GET_ORDERS'
const ADD_ORDERS = 'ADD_ORDERS'

export const getOrders = orders => ({type: GET_ORDERS, orders})
export const addOrders = orders => ({type: ADD_ORDERS, orders})

export const fetchOrders = () => dispatch =>
  axios.get(`/api/order`)
    .then(res => dispatch(getOrders(res.data)))

export const postOrders = (order) => dispatch =>
  axios.post(`/api/order`, order)
    .then(res => dispatch(addOrders(res.data)))

export default function orderReducer(state=[], action) {
  switch (action.type) {
  case GET_ORDERS:
    return action.orders
  case ADD_ORDERS:
    return [...state, action.orders]
  default: return state
  }
}
