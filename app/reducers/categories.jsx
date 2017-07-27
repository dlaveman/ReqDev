import axios from 'axios'

const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories= categories=>({type: GET_CATEGORIES, categories})

export function fetchCategories() {
  return function thunk(dispatch) {
    return axios.get('/api/categories')
      .then(res => res.data)
      .then(categories => {
        console.log("categories:",categories)
        dispatch(getCategories(categories));
      });
  };
}

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;
    // case CREATE_CAMPUS:
    //   return [...state, action.campus];
    // case REMOVE_CAMPUS:
    //   return state.filter(campus => campus.id !== action.id);
    // case UPDATE_CAMPUS:
    //   console.log(action.campus);
    //   return state.map(campus => (
    //     action.campus.Campus.id === campus.id ? action.campus.Campus : campus
    //   ));
    default: return state;
  }
}

