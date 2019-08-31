import * as React from 'react'

export default function CocktailList(props) {

    return(
      <div>
        <h1>COCKTAIL CATEGORIES</h1>
        <ul>
          {props.cocktails.map(cocktail => 
            <li key={cocktail.id}>{cocktail.id}</li>)}
        </ul>
      
      </div>
    )
  }
