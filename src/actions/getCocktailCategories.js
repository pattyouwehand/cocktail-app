import * as request from 'superagent'


export const SHOW_CATEGORIES = 'SHOW_CATEGORIES'

export function showCategories(cocktailCategory){
  return {
    type: SHOW_CATEGORIES,
    payload: cocktailCategory
  }
}

export function getCocktailCategories(){
  return function(dispatch){
    request('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
    .then(response => {
      console.log('RESPONSE:', response)
      const cocktailCategory = response.body.drinks
      dispatch(showCategories({
        cocktailCategory
      }))
    })
    .catch(console.error)
  }

  
  
}

