import * as React from 'react'

export default function CocktailList(props) {

    return(
      <div>
        <h1>COCKTAIL CATEGORIES</h1>
        <ul>
          {props.cocktails.map((cocktail) => {
            return <li key={cocktail.drink}>{cocktail.drink}
          </li>})}
        </ul>
      </div>
    )
  }
