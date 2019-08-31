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
    if(!this.state.cockatils) return 'Loading cocktails...'
    return <CocktailList cocktails={this.state.cockatils} />
  }
}

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktails
  }
}

export default connect(mapStateToProps, {getCocktailCategories})(CocktailContainer)