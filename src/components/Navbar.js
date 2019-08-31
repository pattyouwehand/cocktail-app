import React from 'react'
import {Route, Link} from 'react-router-dom'
import Homepage from './Homepage'


export function Navbar(){
  return(
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <Route exact path="/" component={Homepage}/>
    </nav>
  )
}