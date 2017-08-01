import axios from 'axios'

const GET_DEVELOPER = 'GET_DEVELOPER'

export const getDeveloper = developer => ({ type: GET_DEVELOPER, developer })

export function fetchDeveloper(developerId) {
  return function thunk(dispatch) {
    return axios.get(`/api/developer/${developerId}`)
      .then(res => res.data)
      .then(developer => {
        dispatch(getDeveloper(developer))
      })
  }
}

export default function developerReducer(state = [], action) {
  switch (action.type) {
  case GET_DEVELOPER:
    return action.developer
  default: return state
  }
}
