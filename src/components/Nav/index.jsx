import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='ca-nav'>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            <Button>
              <Link to='/'>Cannon</Link>
            </Button>
          </Typography>
          <Typography type="title" color="inherit">
            <Button>
              <Link to='/shop'>Shop</Link>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav