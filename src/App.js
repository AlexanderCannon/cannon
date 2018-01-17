import React, { Component } from 'react'
import Nav from './containers/Nav'
import BottomNav from './containers/BottomNav'
import './App.css'
import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <BottomNav/>
      </div>
    )
  }
}

export default App
