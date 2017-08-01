import { combineReducers } from 'redux'

import auth from './auth'
import categories from './categories'
import cart from './cart'
import order from './order'
import developers from './developers'

const rootReducer = combineReducers({
	auth, categories, cart, developers, order
});

export * from './categories'
export * from './cart'
export * from './developers'
export * from './order'

export default rootReducer
