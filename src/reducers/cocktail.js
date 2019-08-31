import {SHOW_CATEGORIES} from '../actions/getCocktailCategories'

const initialStete = {
  payload: {}
}

export default (state = initialStete, action) => {
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