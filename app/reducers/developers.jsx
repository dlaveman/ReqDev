import axios from 'axios'

<<<<<<< HEAD
const GET_DEVELOPER = 'GET_DEVELOPER'

export const getDeveloper = developer => ({ type: GET_DEVELOPER, developer })

export function fetchDeveloper(developerId) {
  return function thunk(dispatch) {
    return axios.get(`/api/developer/${developerId}`)
      .then(res => res.data)
      .then(developer => {
        console.log('Trying to get developer', developer)
        dispatch(getDeveloper(developer))
=======
const GET_DEVELOPERS = 'GET_DEVELOPERS'

export const getDevelopers = developers => ({ type: GET_DEVELOPERS, developers })

export function fetchDevelopers(categoryName) {
  return function thunk(dispatch) {
    return axios.get(`/api/developer?category=${categoryName}`)
      .then(res => res.data)
      .then(developers => {
        console.log('Trying to get developers', developers)
        dispatch(getDevelopers(developers))
>>>>>>> 6fd594dda481ef3101185a56ec70d5cb1b561edd
      })
  }
}

<<<<<<< HEAD
export default function developerReducer(state = [], action) {
  switch (action.type) {
  case GET_DEVELOPER:
    return action.developer
=======
export default function developersReducer(state = [], action) {
  switch (action.type) {
  case GET_DEVELOPERS:
    return action.developers
>>>>>>> 6fd594dda481ef3101185a56ec70d5cb1b561edd
  default: return state
  }
}
