import { combineReducers } from 'redux'

import auth from './auth'
import categories from './categories'
import developers from './developers'

const rootReducer = combineReducers({
  auth, categories, developers
})

export * from './categories'
export * from './developers'

export default rootReducer
