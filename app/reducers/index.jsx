import { combineReducers } from 'redux'

import auth from './auth';
import categories from './categories'
import cart from './cart'
import developers from './developers'
const rootReducer = combineReducers({
	auth, categories, cart,developers
});

export * from './categories'
export * from './cart'
export * from './developers'

export default rootReducer
