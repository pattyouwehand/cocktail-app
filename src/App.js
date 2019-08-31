import React from 'react'
import './App.css'
import CocktailContainer from './components/CocktailContainer';


class App extends React.Component {


  render() {

    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">COCKTAIL LOVERS</h1>
          </header>
          <p className="App-intro">
            <CocktailContainer />
          </p>
        </div>
    );
  }
}

export default App;
