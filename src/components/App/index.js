import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from '../Nav'
import BottomNav from '../BottomNav'
import Home from '../Home'
import Shop from '../Shop'
import ProductList from '../ProductList'
import './App.css'

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className='can-main'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/shop/:product' component={ProductList}/>
        </Switch>
      </div>
      <BottomNav />
    </React.Fragment>
  )
}

export default App
