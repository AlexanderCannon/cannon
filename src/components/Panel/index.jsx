import React, { Component } from 'react'
import './Panel.css'

class Panel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      active: false,
      name: this.props.name,
    }
  }
  toggleOpen() {
    this.setState({ open: !this.state.open })
  }
  toggleActive() {
    this.state.open ? this.setState({ active: true }) : this.setState({ active: false })
  }
  render() {
    const { name, open, active } = this.state
    return (
      <div className={`panel ${name} ${open ? 'open' : ''} ${active ? 'open-active' : ''}`}
        onClick={this.toggleOpen.bind(this)} onTransitionEnd={this.toggleActive.bind(this)}>
        {this.props.children}
      </div>
    )
  }
}
export default Panel