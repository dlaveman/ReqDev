import axios from 'axios'
import history from '../history.js'
const reducer = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED,
  user,
})

export const login = (username, password) => dispatch =>
  axios
    .post('/api/auth/login/local', { username, password })
    .then(() => dispatch(whoami()))
    .then(() => history.push('/signup'))
    .catch(() => dispatch(whoami()))

export const logout = () => dispatch =>
  axios
    .post('/api/auth/logout')
    .then(() => dispatch(whoami()))
    .catch(() => dispatch(whoami()))

export const whoami = () => dispatch =>
  axios
    .get('/api/auth/whoami')
    .then(response => {
      const user = response.data
      dispatch(authenticated(user))
    })
    .catch(failed => dispatch(authenticated(null)))

export default reducer
