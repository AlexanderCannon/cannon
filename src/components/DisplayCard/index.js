import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import './DisplayCard.css'

const styles = {
  card: {
    maxWidth: 240,
  },
  media: {
    height: 200,
  },
}

function SimpleMediaCard(props) {
  const { classes, imageUrl } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          classes='ca-card-media'
          image={imageUrl}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography type='headline' component='h2'>
            Lizard
          </Typography>
          <Typography component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color='primary'>
            Share
          </Button>
          <Button dense color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleMediaCard)