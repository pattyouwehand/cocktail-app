import React from 'react'
import {Navbar} from './Navbar'
import CocktailContainer from './CocktailContainer'


export default class Homepage extends React.Component {


  render() {

    return (
        <div className="Homepage">
          <header className="App-header">
            <h1 className="App-title">COCKTAIL LOVERS</h1>   
            <Navbar />
          </header>
          <main>
            <p className="App-intro">
              <CocktailContainer />
            </p> 
          </main>
        </div>
    );
  }
}