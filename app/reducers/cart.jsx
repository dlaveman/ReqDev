import axios from 'axios'

const GET_CART = 'GET_CART'
const REMOVE_CART_INSTANCE = 'REMOVE_CART_INSTANCE'
const UPDATE_CART = 'UPDATE_CART'

export const getCart = cart => ({ type: GET_CART, cart })
export const removeCartInstance = id => ({ type: REMOVE_CART_INSTANCE, id })
export const updateCart = cart => ({type: UPDATE_CART, cart})

export const fetchUserCart = () => dispatch =>
  axios.get(`/api/cart`)
    .then(res => dispatch(getCart(res.data)))

export const deleteCartInstance = (id) => dispatch => {
  dispatch(removeCartInstance(id))
  axios.delete(`/api/cart/${id}`)
    .catch(err => console.error(`Removing Cart Item: ${id} unsuccessful`, err))
}

export const putCart = (id, cart) => dispatch => {
  axios.put(`/api/cart/${id}`, cart)
    .then(res => { dispatch(updateCart(res.data)) })
    .catch(err => console.error(`Updating cart: ${cart} unsuccessful`, err))
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
  case GET_CART:
    return action.cart
  case REMOVE_CART_INSTANCE:
    return state.filter(cart => cart.id !== action.id)
  case UPDATE_CART:
    return state.map(cart => (
        action.cart.Cart.id === cart.id ? action.cart.Cart : cart
      ))
  default: return state
  }
}
