import axios from 'axios'

const GET_DEVELOPER = 'GET_DEVELOPER'
const GET_DEVELOPERS = 'GET_DEVELOPERS'

export const getDevelopers = developers => ({ type: GET_DEVELOPERS, developers })
export const getDeveloper = developer => ({ type: GET_DEVELOPER, developer })

export function fetchDeveloper(developerId) {
  return function thunk(dispatch) {
    return axios.get(`/api/developer/${developerId}`)
      .then(res => res.data)
      .then(developer => {
        console.log('Trying to get developer', developer)
        dispatch(getDeveloper(developer))
      })
  }
}

export function fetchDevelopers(categoryName) {
  return function thunk(dispatch) {
    return axios.get(`/api/developer?category=${categoryName}`)
      .then(res => res.data)
      .then(developers => {
        console.log('Trying to get developers', developers)
        dispatch(getDevelopers(developers))
      })
  }
}

export default function developersReducer(state = [], action) {
  switch (action.type) {
  case GET_DEVELOPER:
    return action.developer
  case GET_DEVELOPERS:
    return action.developers
  default: return state
  }
}
