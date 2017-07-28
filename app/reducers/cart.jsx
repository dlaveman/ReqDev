import axios from 'axios'

const GET_CART = 'GET_CART'

export const getCart = cart => ({ type: GET_CART, cart })

export const fetchUserCart = () => dispatch =>
  axios.get(`/api/cart`)
    .then(res => dispatch(getCart(res.data)))

export default function cartReducer(state=[], action) {
  switch (action.type) {
  case GET_CART:
    return action.cart
  default: return state
  }
}
