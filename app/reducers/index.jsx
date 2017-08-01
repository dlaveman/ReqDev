import { combineReducers } from 'redux'

import auth from './auth'
import categories from './categories'
import cart from './cart'
import order from './order'
import order_item from './order_item'
import developers from './developers'
import developer from './developer'

const rootReducer = combineReducers({
	auth, categories, cart, developers, developer, order,order_item
})

export * from './categories'
export * from './cart'
export * from './developers'
export * from './order'
export * from './order_item'
export * from './developer'

export default rootReducer
