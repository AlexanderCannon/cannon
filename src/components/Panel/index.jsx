import React, { Component } from 'react'

class Panel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      name: this.props.name,
    }
  }
  toggleOpen() {
    this.setState({ open: !this.state.open })
  }
  toggleActive(e) {
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("open-active")
    }
  }
  render() {
    const {name, open} = this.state
    return (
      <div className={`panel ${name} ${open ? 'open' : ''}`}
        onClick={this.toggleOpen.bind(this)}>
        {this.props.children}
      </div>
    )
  }
}
export default Panel