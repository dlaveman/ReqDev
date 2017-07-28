import { combineReducers } from 'redux'

import auth from './auth';
import categories from './categories'
import cart from './cart'

const rootReducer = combineReducers({
	auth, categories, cart
});

export * from './categories'
export * from './cart'

export default rootReducer
