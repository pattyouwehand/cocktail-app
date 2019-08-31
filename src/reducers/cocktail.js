import {SHOW_CATEGORIES} from '../actions/getCocktailCategories'

const initialState = {
  payload: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CATEGORIES:
      return{
        ...state,
        payload: action.payload
      }
    default:
      return state
  }
}