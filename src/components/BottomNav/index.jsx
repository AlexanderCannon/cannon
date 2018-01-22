import React from 'react'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart'
import FavoriteIcon from 'material-ui-icons/Favorite'
import HomeIcon from 'material-ui-icons/Home'
import LocationOnIcon from 'material-ui-icons/LocationOn'
import { Link } from 'react-router-dom'
import './BottomNav.css'

class BottomNav extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <BottomNavigation
        className='ca-bottom-nav'
        value={value}
        onChange={this.handleChange}
      >
        <Link to='/'>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to='/cart'>
          <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
        </Link>
        <Link to='/favourites'>
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Link>
        <Link to='/locations'>
          <BottomNavigationAction label="Find Us" icon={<LocationOnIcon />} />
        </Link>
      </BottomNavigation >
    )
  }
}

export default BottomNav