import axios from 'axios'

const GET_CART = 'GET_CART'
const REMOVE_CART_INSTANCE = 'REMOVE_CART_INSTANCE'
const UPDATE_CART = 'UPDATE_CART'
const ADD_TO_CART = 'ADD_TO_CART'

export const getCart = cart => ({ type: GET_CART, cart })
export const removeCartInstance = id => ({ type: REMOVE_CART_INSTANCE, id })
export const updateCart = cart => ({type: UPDATE_CART, cart})
export const addToCart = cart => ({type: ADD_TO_CART, cart})

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

export const postCart = (cart, history) => dispatch => {
  axios.post(`/api/cart`, cart)
    .then(res => { dispatch(addToCart(res.data)) })
    .then(() => {
      history.push('/cart')
    })
    .catch(err => console.error(`addToCart cart: ${cart} unsuccessful`, err))
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
  case GET_CART:
    return action.cart
  case REMOVE_CART_INSTANCE:
    return state.filter(cart => cart.id !== action.id)
  case UPDATE_CART:
    return state.map(cart => {
      return action.cart.id === cart.id ? action.cart : cart
    })
  case ADD_TO_CART:
    return [...state, action.cart]
  default: return state
  }
}
