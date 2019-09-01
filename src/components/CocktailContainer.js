import * as React from 'react'
import CocktailList from './CocktailList'
import {getCocktailCategories} from '../actions/getCocktailCategories'
import { connect } from 'react-redux'

class CocktailContainer extends React.Component {
  state = {}

  componentDidMount(){
    this.props.getCocktailCategories()
  }


  render(){
    if(!this.state.cocktails) return 'Loading cocktails...'
    return <CocktailList cocktails={this.props.cocktails} />
  }
}

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktail.payload.cocktailCategory
  }
}


export default connect(mapStateToProps, {getCocktailCategories})(CocktailContainer)