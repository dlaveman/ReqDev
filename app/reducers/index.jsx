import { combineReducers } from 'redux'

import auth from './auth'
import categories from './categories'
import developers from './developers'

const rootReducer = combineReducers({
<<<<<<< HEAD
  auth, categories, developers
=======
	auth, categories, developers
>>>>>>> 6fd594dda481ef3101185a56ec70d5cb1b561edd
})

export * from './categories'
export * from './developers'

export default rootReducer
